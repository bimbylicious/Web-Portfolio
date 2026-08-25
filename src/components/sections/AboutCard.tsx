import { Reveal } from '@/components/motion/Reveal';

export function AboutCard() {
  return (
    <section className="relative mx-auto max-w-5xl px-6 py-24">
      <Reveal>
        <div className="border-line bg-surface grid gap-10 rounded-[var(--radius-card)] border p-8 backdrop-blur-lg lg:grid-cols-[280px_1fr] lg:p-10">
          <div>
            <div className="border-line bg-bg aspect-square rounded-[var(--radius-tile)] border border-dashed" />
            <ul className="mt-5 space-y-2 font-mono text-[10.5px] tracking-[0.1em] uppercase">
              <li className="text-dim">Las Piñas, Philippines · UTC+8</li>
              <li className="text-dim">[N] years building production UI</li>
              <li className="text-dim">Open to junior dev roles</li>
            </ul>
          </div>
          <div>
            <p className="text-dim font-mono text-[11px] tracking-[0.12em] uppercase">03 — About</p>
            <h2 className="font-display text-fg mt-3 text-[32px] leading-tight font-extrabold tracking-[-0.03em] lg:text-[46px]">
              I like the problems that only show up at scale.
            </h2>
            <div className="text-body mt-5 space-y-4 text-[16px]">
              <p>
                Most of my work has been internal: the consoles that operations, platform and data
                teams open first thing in the morning and keep open all day. They rarely get design
                attention, and they are where a bad interface costs the most — a mislabelled column
                becomes a wrong invoice, a hidden state becomes an outage nobody noticed.
              </p>
              <p>
                [Two or three sentences in your own voice: how you got into this, what you&apos;re
                deliberately getting better at, and what kind of team you want to join next. This is
                the paragraph a recruiter reads if the work has already convinced them — make it
                sound like a person, not a résumé.]
              </p>
            </div>
            <dl className="border-line mt-6 grid grid-cols-2 gap-6 border-t pt-6">
              <div>
                <dt className="text-dim font-mono text-[10.5px] tracking-[0.1em] uppercase">
                  Learning
                </dt>
                <dd className="text-fg mt-1 text-[15px]">[What you&apos;re digging into]</dd>
              </div>
              <div>
                <dt className="text-dim font-mono text-[10.5px] tracking-[0.1em] uppercase">
                  Outside work
                </dt>
                <dd className="text-fg mt-1 text-[15px]">[Something human]</dd>
              </div>
            </dl>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
