import { SITE_OWNER } from '@/lib/constants';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t">
      <div className="mx-auto max-w-5xl px-6 py-8 text-sm">
        <p>
          &copy; {year} {SITE_OWNER}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
