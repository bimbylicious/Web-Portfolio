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
