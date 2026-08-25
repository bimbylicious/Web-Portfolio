import { Reveal } from '@/components/motion/Reveal';

const CONTACT_EMAIL = 'raphaelmiguelsanchezz@gmail.com';

export function ContactCTA() {
  return (
    <section id="contact" className="relative mx-auto max-w-3xl px-6 py-32 text-center">
      <Reveal>
        <p className="text-dim font-mono text-[11px] tracking-[0.12em] uppercase">04 — Contact</p>
        <h2 className="font-display text-fg mt-4 text-[36px] leading-[1.05] font-extrabold tracking-[-0.03em] lg:text-[76px]">
          If your team owns an interface nobody enjoys opening, I&apos;d like to hear about it.
        </h2>
        <p className="text-body mx-auto mt-6 max-w-md text-[16px]">
          Fastest reply is email. I&apos;m quick to respond — usually same day, including the ones
          that turn out not to be a fit.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="df-focus bg-fg text-bg inline-flex min-h-11 items-center rounded-[var(--radius-pill)] px-6 py-3 font-medium transition-transform hover:scale-[1.03]"
          >
            {CONTACT_EMAIL}
          </a>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="df-focus border-line text-fg hover:bg-surface inline-flex min-h-11 items-center rounded-[var(--radius-pill)] border px-6 py-3 font-medium transition-colors"
          >
            Résumé
          </a>
        </div>
      </Reveal>
    </section>
  );
}
