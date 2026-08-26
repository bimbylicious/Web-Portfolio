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

export type OriginRect = { top: number; left: number; width: number; height: number };

const REVEAL_SAFETY_TIMEOUT_MS = 4000;
const FULLSCREEN_INSET = '0px 0px 0px 0px';

const TransitionContext = createContext<((href: string, rect?: OriginRect) => void) | null>(null);

export function useIrisTransition() {
  const navigate = useContext(TransitionContext);
  if (!navigate) {
    throw new Error('useIrisTransition must be used within PageTransitionProvider');
  }
  return navigate;
}

function insetFromRect(rect: OriginRect) {
  const right = window.innerWidth - (rect.left + rect.width);
  const bottom = window.innerHeight - (rect.top + rect.height);
  return `${rect.top}px ${right}px ${bottom}px ${rect.left}px`;
}

export function PageTransitionProvider({ children }: { children: ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const shouldReduceMotion = useReducedMotionSafe();
  const [phase, setPhase] = useState<'idle' | 'covering' | 'revealing'>('idle');
  const [originInset, setOriginInset] = useState(FULLSCREEN_INSET);
  const isTransitioningRef = useRef(false);
  const departurePathnameRef = useRef(pathname);
  const animationDoneRef = useRef(false);
  const routeChangedRef = useRef(false);

  const navigate = useCallback(
    (href: string, rect?: OriginRect) => {
      if (shouldReduceMotion) {
        router.push(href);
        return;
      }
      if (isTransitioningRef.current) return;
      isTransitioningRef.current = true;
      animationDoneRef.current = false;
      routeChangedRef.current = false;
      departurePathnameRef.current = pathname;
      if (rect) setOriginInset(insetFromRect(rect));
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
    const timeout = setTimeout(() => {
      animationDoneRef.current = true;
      routeChangedRef.current = true;
      setPhase('revealing');
    }, REVEAL_SAFETY_TIMEOUT_MS);
    return () => clearTimeout(timeout);
  }, [phase]);

  return (
    <TransitionContext.Provider value={navigate}>
      {children}
      {phase !== 'idle' && (
        <motion.div
          aria-hidden="true"
          className="bg-bg pointer-events-none fixed inset-0 z-[200]"
          style={{ pointerEvents: phase === 'covering' ? 'auto' : 'none' }}
          initial={{ clipPath: `inset(${originInset})`, opacity: 1 }}
          animate={
            phase === 'covering'
              ? { clipPath: `inset(${FULLSCREEN_INSET})`, opacity: 1 }
              : { opacity: 0 }
          }
          transition={
            phase === 'covering'
              ? { duration: 0.6, ease: [0.76, 0, 0.24, 1] }
              : { duration: 0.4, ease: 'easeOut' }
          }
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
