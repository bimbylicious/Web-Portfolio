'use client';

import Link from 'next/link';
import type { MouseEvent, ReactNode } from 'react';
import { useIrisTransition } from '@/components/motion/PageTransition';

export function TransitionLink({
  href,
  children,
  className,
}: {
  href: string;
  children: ReactNode;
  className?: string;
}) {
  const navigate = useIrisTransition();

  function handleClick(event: MouseEvent<HTMLAnchorElement>) {
    if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) {
      return;
    }
    event.preventDefault();
    const originEl = event.currentTarget.closest('article') ?? event.currentTarget;
    const rect = originEl.getBoundingClientRect();
    navigate(href, {
      top: rect.top,
      left: rect.left,
      width: rect.width,
      height: rect.height,
    });
  }

  return (
    <Link href={href} onClick={handleClick} className={className}>
      {children}
    </Link>
  );
}
