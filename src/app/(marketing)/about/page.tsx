import type { Metadata } from 'next';
import { Reveal } from '@/components/motion/Reveal';
import { SITE_OWNER } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'About',
  description: `Background, experience, and certifications for ${SITE_OWNER}.`,
};

export default function AboutPage() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-16">
      <Reveal>
        <h1 className="text-3xl font-bold tracking-tight">About</h1>
        <div className="mt-6 space-y-4 text-muted-foreground">
          <p>
            Placeholder bio for {SITE_OWNER}. Replace with real background, experience, and
            certifications (e.g. SC-900, AZ-900, AI-901) during content migration.
          </p>
        </div>
      </Reveal>
    </section>
  );
}
