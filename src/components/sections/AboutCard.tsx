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
                I&apos;m here to learn, build, and see how far I can take it.
              </h2>
              <div className="text-body mt-5 text-[16px]">
                <p>
                  I&apos;m a BSIT graduate specializing in Information Security and Cybersecurity,
                  and I&apos;ve been building production UI since 2024. During an OJT placement, I
                  shipped an internal tool that replaced a spreadsheet-based process for an entire
                  department; now I&apos;m strengthening my backend and cloud fundamentals and
                  looking to join a team working on real, production systems.
                </p>
              </div>
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
