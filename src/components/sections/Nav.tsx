import Link from 'next/link';
import { NAV_LINKS, SITE_NAME } from '@/lib/constants';

export function Nav() {
  return (
    <nav aria-label="Primary" className="border-b">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <Link href="/" className="font-semibold">
          {SITE_NAME}
        </Link>
        <ul className="flex gap-6 text-sm">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <Link href={link.href} className="hover:underline">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
