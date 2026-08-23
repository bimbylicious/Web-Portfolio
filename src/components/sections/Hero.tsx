import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { SITE_OWNER, SITE_TAGLINE } from '@/lib/constants';

export function Hero() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-24">
      <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">{SITE_OWNER}</h1>
      <p className="mt-4 max-w-2xl text-lg text-muted-foreground">{SITE_TAGLINE}</p>
      <div className="mt-8 flex gap-4">
        <Button asChild>
          <Link href="/projects">View projects</Link>
        </Button>
        <Button asChild variant="outline">
          <Link href="/contact">Get in touch</Link>
        </Button>
      </div>
    </section>
  );
}
