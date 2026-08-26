import type { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/constants';
import { getAllProjects } from '@/lib/mdx';

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ['', '/projects'].map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified: new Date(),
  }));

  const projectRoutes = getAllProjects().map((project) => ({
    url: `${SITE_URL}/projects/${project.slug}`,
    lastModified: new Date(project.date),
  }));

  return [...staticRoutes, ...projectRoutes];
}
