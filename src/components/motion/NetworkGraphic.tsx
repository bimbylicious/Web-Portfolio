'use client';

import { motion, useReducedMotion } from 'framer-motion';

const NODES = [
  { id: 'n1', x: 40, y: 150 },
  { id: 'n2', x: 140, y: 80 },
  { id: 'n3', x: 140, y: 220 },
  { id: 'n4', x: 240, y: 40 },
  { id: 'n5', x: 240, y: 150 },
  { id: 'n6', x: 240, y: 260 },
  { id: 'n7', x: 340, y: 150 },
] as const;

const EDGES: [string, string][] = [
  ['n1', 'n2'],
  ['n1', 'n3'],
  ['n2', 'n3'],
  ['n2', 'n4'],
  ['n2', 'n5'],
  ['n3', 'n5'],
  ['n3', 'n6'],
  ['n4', 'n7'],
  ['n5', 'n7'],
  ['n6', 'n7'],
];

const SIGNAL_PATH: [string, string, string, string] = ['n1', 'n2', 'n4', 'n7'];

function nodeById(id: string) {
  return NODES.find((n) => n.id === id)!;
}

export function NetworkGraphic() {
  const shouldReduceMotion = useReducedMotion();
  const signalPoints = SIGNAL_PATH.map(nodeById);

  return (
    <svg
      viewBox="0 0 380 300"
      className="h-auto w-full max-w-md text-signal-blue"
      role="img"
      aria-label="Animated diagram of a network topology, representing infrastructure and skill connections"
    >
      {EDGES.map(([fromId, toId], index) => {
        const from = nodeById(fromId);
        const to = nodeById(toId);
        return (
          <motion.line
            key={`${fromId}-${toId}`}
            x1={from.x}
            y1={from.y}
            x2={to.x}
            y2={to.y}
            stroke="currentColor"
            strokeWidth={1.5}
            strokeOpacity={0.35}
            initial={shouldReduceMotion ? undefined : { pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={
              shouldReduceMotion
                ? { duration: 0 }
                : { duration: 0.6, delay: 0.5 + index * 0.05, ease: 'easeOut' }
            }
          />
        );
      })}

      {NODES.map((node, index) => (
        <motion.circle
          key={node.id}
          cx={node.x}
          cy={node.y}
          r={5}
          fill="currentColor"
          initial={shouldReduceMotion ? undefined : { opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={
            shouldReduceMotion
              ? { duration: 0 }
              : { duration: 0.3, delay: 1.1 + index * 0.06, ease: 'easeOut' }
          }
          style={{ transformOrigin: `${node.x}px ${node.y}px` }}
        />
      ))}

      {!shouldReduceMotion && (
        <motion.circle
          r={4}
          className="text-teal"
          fill="currentColor"
          initial={{ opacity: 0 }}
          animate={{
            opacity: [0, 1, 1, 0],
            cx: signalPoints.map((p) => p.x),
            cy: signalPoints.map((p) => p.y),
          }}
          transition={{
            duration: 3.5,
            delay: 1.6,
            repeat: Infinity,
            repeatDelay: 0.5,
            ease: 'linear',
          }}
        />
      )}
    </svg>
  );
}
