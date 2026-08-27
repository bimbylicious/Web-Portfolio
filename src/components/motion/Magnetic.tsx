'use client';

import { motion, useMotionValue, useSpring } from 'framer-motion';
import { type MouseEvent, type ReactNode } from 'react';
import { useReducedMotionSafe } from '@/hooks/useReducedMotionSafe';

const STRENGTH = 0.3;
const SPRING = { stiffness: 300, damping: 20, mass: 0.5 };

export function Magnetic({ children }: { children: ReactNode }) {
  const shouldReduceMotion = useReducedMotionSafe();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, SPRING);
  const springY = useSpring(y, SPRING);

  function handleMouseMove(event: MouseEvent<HTMLDivElement>) {
    if (shouldReduceMotion) return;
    const rect = event.currentTarget.getBoundingClientRect();
    x.set((event.clientX - (rect.left + rect.width / 2)) * STRENGTH);
    y.set((event.clientY - (rect.top + rect.height / 2)) * STRENGTH);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={shouldReduceMotion ? undefined : { x: springX, y: springY }}
      className="inline-block"
    >
      {children}
    </motion.div>
  );
}
