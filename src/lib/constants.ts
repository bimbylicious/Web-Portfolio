export const SITE_NAME = 'Bimby Sanchez';
export const SITE_OWNER = 'Raphael Miguel A. Sanchez';
export const SITE_TAGLINE = 'Full-stack & cloud engineer';
export const SITE_DESCRIPTION =
  'Portfolio and technical writing from Raphael Miguel A. Sanchez (Bimby) — full-stack and cloud engineering, infrastructure resilience, and security.';
export const SITE_URL = 'https://example.com';

export const SKILLS = [
  'C#',
  'Java',
  'HTML',
  'CSS',
  'Python',
  'JavaScript',
  'PHP',
  'SQL Server',
  'Power BI',
] as const;

export const TOOLS = [
  { name: 'TypeScript', why: "Types are the spec — I don't ship without them." },
  { name: 'React 19', why: 'Server components first, state kept at the leaf.' },
  { name: 'Next.js 16', why: 'App Router, streamed and cached deliberately.' },
  { name: 'Tailwind CSS v4', why: 'Tokens in one place, no stray hex values.' },
  { name: 'shadcn/ui', why: 'Radix underneath — accessible by default.' },
  { name: 'PostgreSQL', why: 'Constraints live in the database, not the app.' },
  { name: 'AWS', why: "Where the capstone's topology sandbox models real infrastructure." },
  { name: 'Docker', why: 'Same image locally and in CI.' },
  { name: 'Git & CI', why: 'Lint, typecheck, test, build — every PR, before it merges.' },
  { name: 'Playwright', why: 'Smoke tests on the paths that actually matter.' },
  { name: 'Figma', why: 'Where every layout starts, before a line of code.' },
  { name: 'Vercel', why: 'Preview per PR, production on merge.' },
] as const;

export const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/projects', label: 'Projects' },
  { href: '/writing', label: 'Writing' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
] as const;

export const SOCIAL_LINKS = [
  {
    href: 'https://www.linkedin.com/in/raphael-miguel-sanchez-5a7598347',
    label: 'LinkedIn',
  },
  { href: 'https://github.com/bimbylicious', label: 'GitHub' },
] as const;
