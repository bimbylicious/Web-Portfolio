import Link from 'next/link';
import { NAV_LINKS, SITE_OWNER } from '@/lib/constants';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-ink-navy text-paper">
      <div className="mx-auto flex max-w-5xl flex-col gap-4 px-6 py-10 text-sm sm:flex-row sm:items-center sm:justify-between">
        <p>
          &copy; {year} {SITE_OWNER}. All rights reserved.
        </p>
        <ul className="flex gap-6 font-mono text-xs uppercase tracking-wide text-paper/70">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <Link href={link.href} className="transition-colors hover:text-paper">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
