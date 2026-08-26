'use client';

import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { createContext, useCallback, useContext, useRef, useState, type ReactNode } from 'react';
import { useReducedMotionSafe } from '@/hooks/useReducedMotionSafe';

type Origin = { x: number; y: number };

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
  const shouldReduceMotion = useReducedMotionSafe();
  const [phase, setPhase] = useState<'idle' | 'covering' | 'revealing'>('idle');
  const [origin, setOrigin] = useState<Origin>({ x: 50, y: 50 });
  const isTransitioningRef = useRef(false);

  const navigate = useCallback(
    (href: string, origin?: Origin) => {
      if (shouldReduceMotion) {
        router.push(href);
        return;
      }
      if (isTransitioningRef.current) return;
      isTransitioningRef.current = true;
      if (origin) setOrigin(origin);
      setPhase('covering');
      router.push(href);
    },
    [router, shouldReduceMotion],
  );

  const { x, y } = origin;

  return (
    <TransitionContext.Provider value={navigate}>
      {children}
      {phase !== 'idle' && (
        <motion.div
          aria-hidden="true"
          className="from-violet to-cyan pointer-events-none fixed inset-0 z-[200] bg-gradient-to-br"
          style={{ pointerEvents: phase === 'covering' ? 'auto' : 'none' }}
          initial={{ clipPath: `circle(0% at ${x}% ${y}%)` }}
          animate={{
            clipPath:
              phase === 'covering' ? `circle(150% at ${x}% ${y}%)` : `circle(0% at ${x}% ${y}%)`,
          }}
          transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
          onAnimationComplete={() => {
            if (phase === 'covering') {
              requestAnimationFrame(() => requestAnimationFrame(() => setPhase('revealing')));
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
