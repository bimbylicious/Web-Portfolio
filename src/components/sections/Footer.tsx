import Link from 'next/link';
import { NAV_LINKS, SITE_OWNER, SOCIAL_LINKS } from '@/lib/constants';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-line bg-bg text-dim border-t">
      <div className="mx-auto flex max-w-5xl flex-col gap-4 px-6 py-10 text-sm sm:flex-row sm:items-center sm:justify-between">
        <p className="font-mono text-[11px] tracking-[0.1em] uppercase">
          &copy; {year} {SITE_OWNER}
        </p>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-6">
          <ul className="flex flex-wrap gap-6 font-mono text-[11px] tracking-[0.1em] uppercase">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="df-focus hover:text-fg transition-colors">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <ul className="flex flex-wrap gap-6 font-mono text-[11px] tracking-[0.1em] uppercase">
            {SOCIAL_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="df-focus hover:text-fg transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="df-focus hover:text-fg transition-colors"
              >
                Résumé
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
