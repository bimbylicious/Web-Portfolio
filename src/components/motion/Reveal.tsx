'use client';

import { motion } from 'framer-motion';
import type { ReactNode } from 'react';
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

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 24 }}
      whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
      animate={shouldReduceMotion ? { opacity: 1, y: 0 } : undefined}
      viewport={{ once: false, margin: '-80px' }}
      transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.5, delay, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  );
}
