import fs from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';
import { projectFrontmatterSchema } from '@/lib/validations';
import type { Project, ProjectMediaItem } from '@/types/content';

const PROJECTS_DIR = path.join(process.cwd(), 'src/content/projects');
const PUBLIC_DIR = path.join(process.cwd(), 'public');

const PNG_SIGNATURE = '89504e470d0a1a0a';

function getPngDimensions(publicSrc: string): { width: number; height: number } | null {
  try {
    const filePath = path.join(PUBLIC_DIR, publicSrc);
    const fd = fs.openSync(filePath, 'r');
    const header = Buffer.alloc(24);
    fs.readSync(fd, header, 0, 24, 0);
    fs.closeSync(fd);
    if (header.toString('hex', 0, 8) !== PNG_SIGNATURE) return null;
    return { width: header.readUInt32BE(16), height: header.readUInt32BE(20) };
  } catch {
    return null;
  }
}

function resolveMedia(media: ProjectMediaItem[] | undefined): ProjectMediaItem[] | undefined {
  return media?.map((item) => {
    if (item.type !== 'image') return item;
    const dimensions = getPngDimensions(item.src);
    return dimensions ? { ...item, ...dimensions } : item;
  });
}

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
    return { ...frontmatter, content, media: resolveMedia(frontmatter.media) };
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
  return { ...frontmatter, content, media: resolveMedia(frontmatter.media) };
}
