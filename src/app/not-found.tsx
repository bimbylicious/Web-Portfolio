import Link from 'next/link';
import { AmbientField } from '@/components/motion/AmbientField';

export default function NotFound() {
  return (
    <div className="bg-bg text-fg relative">
      <AmbientField />
      <section className="relative mx-auto flex min-h-[70vh] max-w-3xl flex-col items-center justify-center px-6 text-center">
        <h1 className="font-display text-fg text-[32px] font-extrabold tracking-[-0.03em] lg:text-[46px]">
          Page not found
        </h1>
        <p className="text-body mt-4 text-[16px]">
          The page you&apos;re looking for doesn&apos;t exist.
        </p>
        <Link
          href="/"
          className="df-focus bg-fg text-bg mt-8 inline-flex min-h-11 items-center rounded-[var(--radius-pill)] px-6 py-3 font-medium transition-transform hover:scale-[1.03]"
        >
          Back to home
        </Link>
      </section>
    </div>
  );
}
