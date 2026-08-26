import fs from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';
import { projectFrontmatterSchema } from '@/lib/validations';
import type { Project } from '@/types/content';

const PROJECTS_DIR = path.join(process.cwd(), 'src/content/projects');

function readMdxFiles(dir: string): string[] {
  if (!fs.existsSync(dir)) return [];
  return fs.readdirSync(dir).filter((file) => file.endsWith('.mdx'));
}

function parseFile<T>(dir: string, fileName: string, schema: { parse: (data: unknown) => T }) {
  const filePath = path.join(dir, fileName);
  const raw = fs.readFileSync(filePath, 'utf-8');
  const { data, content } = matter(raw);

  let frontmatter: T;
  try {
    frontmatter = schema.parse(data);
  } catch (error) {
    throw new Error(`Invalid frontmatter in ${filePath}: ${(error as Error).message}`);
  }

  return { frontmatter, content };
}

export function getAllProjects(): Project[] {
  const projects = readMdxFiles(PROJECTS_DIR).map((fileName) => {
    const { frontmatter, content } = parseFile(PROJECTS_DIR, fileName, projectFrontmatterSchema);
    return { ...frontmatter, content };
  });

  return projects.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getFeaturedProjects(): Project[] {
  return getAllProjects().filter((project) => project.featured);
}

export function getProjectBySlug(slug: string): Project | null {
  const fileName = readMdxFiles(PROJECTS_DIR).find((f) => f.replace(/\.mdx$/, '') === slug);
  if (!fileName) return null;

  const { frontmatter, content } = parseFile(PROJECTS_DIR, fileName, projectFrontmatterSchema);
  return { ...frontmatter, content };
}
