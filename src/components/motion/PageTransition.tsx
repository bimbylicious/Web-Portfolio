'use client';

import { motion } from 'framer-motion';
import { usePathname, useRouter } from 'next/navigation';
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from 'react';
import { useReducedMotionSafe } from '@/hooks/useReducedMotionSafe';

type Origin = { x: number; y: number };

const REVEAL_SAFETY_TIMEOUT_MS = 4000;

const TransitionContext = createContext<((href: string, origin?: Origin) => void) | null>(null);

export function useIrisTransition() {
  const navigate = useContext(TransitionContext);
  if (!navigate) {
    throw new Error('useIrisTransition must be used within PageTransitionProvider');
  }
  return navigate;
}

export function PageTransitionProvider({ children }: { children: ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const shouldReduceMotion = useReducedMotionSafe();
  const [phase, setPhase] = useState<'idle' | 'covering' | 'revealing'>('idle');
  const [origin, setOrigin] = useState<Origin>({ x: 50, y: 50 });
  const isTransitioningRef = useRef(false);
  const departurePathnameRef = useRef(pathname);
  const animationDoneRef = useRef(false);
  const routeChangedRef = useRef(false);

  const reveal = useCallback(() => {
    animationDoneRef.current = true;
    routeChangedRef.current = true;
    setPhase('revealing');
  }, []);

  const navigate = useCallback(
    (href: string, origin?: Origin) => {
      if (shouldReduceMotion) {
        router.push(href);
        return;
      }
      if (isTransitioningRef.current) return;
      isTransitioningRef.current = true;
      animationDoneRef.current = false;
      routeChangedRef.current = false;
      departurePathnameRef.current = pathname;
      if (origin) setOrigin(origin);
      setPhase('covering');
      router.push(href);
    },
    [router, shouldReduceMotion, pathname],
  );

  useEffect(() => {
    if (phase !== 'covering' || pathname === departurePathnameRef.current) return;
    routeChangedRef.current = true;
    if (animationDoneRef.current) setPhase('revealing');
  }, [pathname, phase]);

  useEffect(() => {
    if (phase !== 'covering') return;
    const timeout = setTimeout(reveal, REVEAL_SAFETY_TIMEOUT_MS);
    return () => clearTimeout(timeout);
  }, [phase, reveal]);

  const { x, y } = origin;

  return (
    <TransitionContext.Provider value={navigate}>
      {children}
      {phase !== 'idle' && (
        <motion.div
          aria-hidden="true"
          className="pointer-events-none fixed inset-0 z-[200]"
          style={{
            pointerEvents: phase === 'covering' ? 'auto' : 'none',
            background: `radial-gradient(circle at ${x}% ${y}%, var(--color-violet) 0%, var(--color-pink) 20%, var(--color-bg) 60%)`,
          }}
          initial={{ clipPath: `circle(0% at ${x}% ${y}%)` }}
          animate={{
            clipPath:
              phase === 'covering' ? `circle(150% at ${x}% ${y}%)` : `circle(0% at ${x}% ${y}%)`,
          }}
          transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
          onAnimationComplete={() => {
            if (phase === 'covering') {
              animationDoneRef.current = true;
              if (routeChangedRef.current) setPhase('revealing');
            } else if (phase === 'revealing') {
              isTransitioningRef.current = false;
              setPhase('idle');
            }
          }}
        >
          <div className="df-grain" />
        </motion.div>
      )}
    </TransitionContext.Provider>
  );
}
