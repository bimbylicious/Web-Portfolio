'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, type ReactNode } from 'react';
import { useReducedMotionSafe } from '@/hooks/useReducedMotionSafe';

export function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const shouldReduceMotion = useReducedMotionSafe();
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: false, margin: '-80px' });
  const revealed = shouldReduceMotion || isInView;

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: revealed ? 1 : 0, y: revealed ? 0 : 24 }}
      transition={
        shouldReduceMotion
          ? { duration: 0 }
          : revealed
            ? { duration: 0.5, delay, ease: 'easeOut' }
            : { duration: 0.3, ease: 'easeOut' }
      }
    >
      {children}
    </motion.div>
  );
}
