export const SITE_NAME = 'Bimby Sanchez';
export const SITE_OWNER = 'Raphael Miguel A. Sanchez';
export const SITE_TAGLINE = 'Full-stack & cloud engineer';
export const SITE_DESCRIPTION =
  'Portfolio and technical writing from Raphael Miguel A. Sanchez (Bimby), covering full-stack and cloud engineering, infrastructure resilience, and security.';
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

export const CERTIFICATIONS = [
  'Microsoft Certified: Security, Compliance, and Identity Fundamentals (SC-900)',
  'Microsoft Certified: Azure Fundamentals (AZ-900)',
  'Google: Foundations of Project Management',
  'IBM: Ethical Hacking',
  'Cisco: Network Defense',
  'Internet Society: Encryption Certificate',
] as const;

export const TOOLS = [
  { name: 'TypeScript', usage: 'Used for the frontend and API layer on both dashboards.' },
  { name: 'React 19', usage: 'Builds the interactive UI for both dashboards.' },
  { name: 'Next.js 16', usage: 'Powers this portfolio, including routing and API routes.' },
  { name: 'Tailwind CSS v4', usage: 'Handles styling and layout for this site.' },
  { name: 'shadcn/ui', usage: 'Provides accessible UI components built on Radix.' },
  { name: 'PostgreSQL', usage: 'Stores application data for both dashboards.' },
  { name: 'AWS', usage: 'Modeled as the target infrastructure in the capstone simulation.' },
  { name: 'Docker', usage: 'Used for consistent local development environments.' },
  {
    name: 'Git & CI',
    usage: 'Version control, with lint, typecheck, test, and build on every pull request.',
  },
  { name: 'Playwright', usage: 'Runs end-to-end tests on key user flows.' },
  { name: 'Figma', usage: 'Used for planning layouts before implementation.' },
  {
    name: 'Vercel',
    usage: 'Hosts and deploys this portfolio, with a preview for every pull request.',
  },
] as const;

export const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/projects', label: 'Projects' },
  { href: '/#about', label: 'About' },
  { href: '/#contact', label: 'Contact' },
] as const;

export const SOCIAL_LINKS = [
  {
    href: 'https://www.linkedin.com/in/raphael-miguel-sanchez-5a7598347',
    label: 'LinkedIn',
  },
  { href: 'https://github.com/bimbylicious', label: 'GitHub' },
] as const;
