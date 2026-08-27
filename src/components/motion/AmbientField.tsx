'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useReducedMotionSafe } from '@/hooks/useReducedMotionSafe';

function usePageVisible() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleVisibilityChange = () => setIsVisible(document.visibilityState === 'visible');
    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () => document.removeEventListener('visibilitychange', handleVisibilityChange);
  }, []);

  return isVisible;
}

const LIGHTS = [
  { top: '0%', left: '8%', color: 'var(--color-violet)', size: 520, duration: 26 },
  { top: '14%', left: '78%', color: 'var(--color-cyan)', size: 480, duration: 30 },
  { top: '36%', left: '12%', color: 'var(--color-violet)', size: 560, duration: 28 },
  { top: '56%', left: '82%', color: 'var(--color-pink)', size: 460, duration: 24 },
  { top: '76%', left: '18%', color: 'var(--color-cyan)', size: 500, duration: 29 },
  { top: '94%', left: '72%', color: 'var(--color-violet)', size: 480, duration: 27 },
] as const;

export function AmbientField() {
  const shouldReduceMotion = useReducedMotionSafe();
  const isPageVisible = usePageVisible();
  const shouldAnimate = !shouldReduceMotion && isPageVisible;

  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      {LIGHTS.map((light, index) => (
        <motion.div
          key={index}
          className="absolute rounded-full"
          style={{
            top: light.top,
            left: light.left,
            width: light.size,
            height: light.size,
            background: light.color,
            filter: 'blur(100px)',
            opacity: 0.35,
            willChange: 'transform',
          }}
          animate={
            shouldAnimate
              ? {
                  translateX: [0, 30, -20, 0],
                  translateY: [0, -20, 15, 0],
                  scale: [1, 1.08, 0.96, 1],
                }
              : undefined
          }
          transition={
            shouldAnimate
              ? { duration: light.duration, repeat: Infinity, ease: 'easeInOut' }
              : undefined
          }
        />
      ))}

      <div className="df-rule-grid absolute inset-0" />
      <div className="df-grain motion-reduce:hidden" />
    </div>
  );
}
