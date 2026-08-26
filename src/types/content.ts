import type { z } from 'zod';
import type { projectFrontmatterSchema, projectMediaItemSchema } from '@/lib/validations';

export type ProjectFrontmatter = z.infer<typeof projectFrontmatterSchema>;

export type ProjectMediaItem = z.infer<typeof projectMediaItemSchema> & {
  width?: number;
  height?: number;
};

export interface Project extends Omit<ProjectFrontmatter, 'media'> {
  content: string;
  media?: ProjectMediaItem[];
}
