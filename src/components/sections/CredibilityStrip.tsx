import { Reveal } from '@/components/motion/Reveal';

const CREDENTIALS = [
  'Cum Laude',
  'BSIT — Information Security (CITE)',
  'First Balfour OJT',
  'SC-900',
  'AZ-900',
];

export function CredibilityStrip({
  standoutMetric,
}: {
  standoutMetric?: { label: string; value: string };
}) {
  return (
    <Reveal>
      <section className="border-y bg-secondary/40">
        <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-6 px-6 py-6">
          <ul className="flex flex-wrap gap-2">
            {CREDENTIALS.map((item) => (
              <li
                key={item}
                className="rounded-full border bg-background px-3 py-1 font-mono text-xs text-muted-foreground"
              >
                {item}
              </li>
            ))}
          </ul>
          {standoutMetric && (
            <div className="shrink-0">
              <p className="font-heading text-2xl font-bold text-signal-blue">
                {standoutMetric.value}
              </p>
              <p className="font-mono text-xs text-muted-foreground uppercase">
                {standoutMetric.label}
              </p>
            </div>
          )}
        </div>
      </section>
    </Reveal>
  );
}
