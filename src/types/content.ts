import type { z } from 'zod';
import type { projectFrontmatterSchema } from '@/lib/validations';

export type ProjectFrontmatter = z.infer<typeof projectFrontmatterSchema>;

export interface Project extends ProjectFrontmatter {
  content: string;
}
