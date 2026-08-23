import type { z } from 'zod';
import type { projectFrontmatterSchema, postFrontmatterSchema } from '@/lib/validations';

export type ProjectFrontmatter = z.infer<typeof projectFrontmatterSchema>;
export type PostFrontmatter = z.infer<typeof postFrontmatterSchema>;

export interface Project extends ProjectFrontmatter {
  content: string;
}

export interface Post extends PostFrontmatter {
  content: string;
}
