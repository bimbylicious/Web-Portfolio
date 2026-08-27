'use client';

import { useState } from 'react';
import { Reveal } from '@/components/motion/Reveal';
import { RESUME_PDF_URL } from '@/lib/constants';

const CONTACT_EMAIL = 'raphaelmiguelsanchezz@gmail.com';

export function ContactCTA() {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(CONTACT_EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard API unavailable; the email is still visible to copy manually.
    }
  }

  return (
    <section id="contact" className="relative mx-auto max-w-3xl px-6 py-32 text-center">
      <Reveal>
        <p className="text-dim font-mono text-[11px] tracking-[0.12em] uppercase">04 / Contact</p>
        <h2 className="font-display text-fg mt-4 text-[36px] leading-[1.05] font-extrabold tracking-[-0.03em] lg:text-[76px]">
          Looking for a developer who can own a project end to end? I would like to hear from you.
        </h2>
        <p className="text-body mx-auto mt-6 max-w-md text-[16px]">
          Click below to copy my email address.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <button
            type="button"
            onClick={handleCopy}
            className="df-focus bg-fg text-bg inline-flex min-h-11 items-center rounded-[var(--radius-pill)] px-6 py-3 font-medium transition-transform hover:scale-[1.03]"
          >
            {copied ? 'Copied to clipboard' : CONTACT_EMAIL}
          </button>
          <a
            href={RESUME_PDF_URL}
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
