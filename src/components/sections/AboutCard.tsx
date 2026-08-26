import { Reveal } from '@/components/motion/Reveal';
import { CERTIFICATIONS, SKILLS } from '@/lib/constants';

export function AboutCard() {
  return (
    <section id="about" className="relative mx-auto max-w-5xl px-6 py-24">
      <Reveal>
        <div className="border-line bg-surface rounded-[var(--radius-card)] border p-8 backdrop-blur-lg lg:p-10">
          <div className="grid gap-10 lg:grid-cols-[280px_1fr]">
            <div>
              <ul className="space-y-2 font-mono text-[10.5px] tracking-[0.1em] uppercase">
                <li className="text-dim">Las Piñas, Philippines · UTC+8</li>
                <li className="text-dim">Building production UI since 2024</li>
                <li className="text-dim">Open to junior dev roles</li>
              </ul>
            </div>
            <div>
              <p className="text-dim font-mono text-[11px] tracking-[0.12em] uppercase">
                03 / About
              </p>
              <h2 className="font-display text-fg mt-3 text-[32px] leading-tight font-extrabold tracking-[-0.03em] lg:text-[46px]">
                I like the problems that only show up at scale.
              </h2>
              <div className="text-body mt-5 space-y-4 text-[16px]">
                <p>
                  Most of my work has been internal: the consoles that operations, platform, and
                  data teams open first thing in the morning and keep open all day. They rarely get
                  design attention, and they are where a bad interface costs the most. A mislabelled
                  column becomes a wrong invoice, and a hidden state becomes an outage nobody
                  noticed.
                </p>
                <p>
                  I started building production UI in 2024, working through coursework projects
                  before an OJT placement where I shipped an internal tool that replaced a
                  spreadsheet-based process for an entire department. I am currently focused on
                  strengthening my backend and cloud fundamentals, and I am looking to join a team
                  where I can keep working on real, production systems rather than prototypes.
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

          <div className="border-line mt-10 grid gap-8 border-t pt-8 sm:grid-cols-2">
            <div>
              <h3 className="text-dim font-mono text-[10.5px] tracking-[0.1em] uppercase">
                Skills
              </h3>
              <ul className="mt-3 flex flex-wrap gap-2">
                {SKILLS.map((skill) => (
                  <li
                    key={skill}
                    className="border-line text-dim rounded-[var(--radius-pill)] border px-3 py-1 font-mono text-[10.5px] tracking-[0.08em] uppercase"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-dim font-mono text-[10.5px] tracking-[0.1em] uppercase">
                Certifications &amp; training
              </h3>
              <ul className="text-body mt-3 space-y-1.5 text-[14px]">
                {CERTIFICATIONS.map((cert) => (
                  <li key={cert}>{cert}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
