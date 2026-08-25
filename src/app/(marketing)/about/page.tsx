import type { Metadata } from 'next';
import Link from 'next/link';
import { Reveal } from '@/components/motion/Reveal';
import { Button } from '@/components/ui/button';
import { SITE_OWNER, SKILLS } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'About',
  description: `Background, experience, and certifications for ${SITE_OWNER}.`,
};

const CERTIFICATIONS = [
  'Microsoft Certified: Security, Compliance, and Identity Fundamentals (SC-900)',
  'Microsoft Certified: Azure Fundamentals (AZ-900)',
  'Google: Foundations of Project Management',
  'IBM: Ethical Hacking',
  'Cisco: Network Defense',
  'Internet Society: Encryption Certificate',
];

export default function AboutPage() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-16">
      <Reveal>
        <h1 className="text-3xl font-bold tracking-tight">About</h1>
        <div className="mt-6 space-y-4 text-muted-foreground">
          <p>
            I&apos;m a BSIT graduate (Cum Laude) from Southville International School and Colleges,
            specializing in Information and Cybersecurity. My work sits at the intersection of
            full-stack development and infrastructure resilience, building tools that make systems
            easier to observe, secure, and reason about.
          </p>
          <p>
            During my OJT at First Balfour, Inc., I built a Masterdata Management Application
            (React, Node.js/Express, PostgreSQL) that replaced a manual, spreadsheet-based process
            for tracking employee and asset records, with role-based access control and a real-time
            equipment-assignment dashboard.
          </p>
          <p>
            My capstone project, the{' '}
            <Link href="/projects/cloud-resiliency-dashboard" className="text-foreground underline">
              Cloud Resiliency Management Dashboard
            </Link>
            , is a full-stack AWS infrastructure sandbox for cloud migration planning, with an
            interactive topology canvas and a load-balancing and capacity simulation engine, built
            solo with React 18/Vite, Node.js/Express, and PostgreSQL/Prisma on Supabase.
          </p>
          <p>
            Outside of building, I&apos;ve attended the Philippine Youth Internet Governance Forum
            for four consecutive years, covering digital trust, emerging tech, and cybersecurity
            policy for Filipino youth.
          </p>
        </div>

        <h2 className="mt-10 font-heading text-lg font-semibold text-foreground">Skills</h2>
        <ul className="mt-3 flex flex-wrap gap-2">
          {SKILLS.map((skill) => (
            <li
              key={skill}
              className="rounded-full border px-2 py-0.5 font-mono text-xs text-muted-foreground"
            >
              {skill}
            </li>
          ))}
        </ul>

        <h2 className="mt-8 font-heading text-lg font-semibold text-foreground">
          Certifications &amp; training
        </h2>
        <ul className="mt-3 space-y-1.5 text-sm text-muted-foreground">
          {CERTIFICATIONS.map((cert) => (
            <li key={cert}>{cert}</li>
          ))}
        </ul>

        <div className="mt-10 flex gap-4">
          <Button asChild className="active:scale-[0.97]">
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
              View resume
            </a>
          </Button>
          <Button asChild variant="outline" className="active:scale-[0.97]">
            <a href="/resume.pdf" download={`${SITE_OWNER.replace(/\s+/g, '_')}_Resume.pdf`}>
              Download resume
            </a>
          </Button>
        </div>
      </Reveal>
    </section>
  );
}
