import type { ReactNode } from 'react';

const CORNER_BASE =
  'absolute h-3 w-3 border-signal-blue transition-transform duration-300 ease-out';

export function CardShell({ children }: { children: ReactNode }) {
  return (
    <article className="group relative bg-card p-6 transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-lg">
      <span
        className={`${CORNER_BASE} top-0 left-0 border-t-2 border-l-2 group-hover:-translate-x-0.5 group-hover:-translate-y-0.5`}
        aria-hidden="true"
      />
      <span
        className={`${CORNER_BASE} top-0 right-0 border-t-2 border-r-2 group-hover:translate-x-0.5 group-hover:-translate-y-0.5`}
        aria-hidden="true"
      />
      <span
        className={`${CORNER_BASE} bottom-0 left-0 border-b-2 border-l-2 group-hover:-translate-x-0.5 group-hover:translate-y-0.5`}
        aria-hidden="true"
      />
      <span
        className={`${CORNER_BASE} right-0 bottom-0 border-r-2 border-b-2 group-hover:translate-x-0.5 group-hover:translate-y-0.5`}
        aria-hidden="true"
      />
      {children}
    </article>
  );
}
