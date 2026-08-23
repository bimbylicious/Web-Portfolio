import { describe, expect, it } from 'vitest';
import { getAllPosts, getAllProjects, getPostBySlug, getProjectBySlug } from '@/lib/mdx';

describe('lib/mdx projects', () => {
  it('reads and validates all project content files', () => {
    const projects = getAllProjects();
    expect(projects.length).toBeGreaterThan(0);
    expect(projects[0]).toHaveProperty('title');
    expect(projects[0]).toHaveProperty('content');
  });

  it('resolves a single project by slug', () => {
    const project = getProjectBySlug('cloud-resiliency-dashboard');
    expect(project?.title).toBe('Cloud Resiliency Management Dashboard');
    expect(project?.featured).toBe(true);
  });

  it('returns null for an unknown project slug', () => {
    expect(getProjectBySlug('does-not-exist')).toBeNull();
  });
});

describe('lib/mdx posts', () => {
  it('reads and validates all writing content files', () => {
    const posts = getAllPosts();
    expect(posts.length).toBeGreaterThan(0);
    expect(posts[0]).toHaveProperty('title');
    expect(posts[0]).toHaveProperty('content');
  });

  it('resolves a single post by slug', () => {
    const post = getPostBySlug('capstone-deep-dive');
    expect(post?.title).toBe('Capstone Deep-Dive: Modeling Infrastructure Resilience');
  });

  it('returns null for an unknown post slug', () => {
    expect(getPostBySlug('does-not-exist')).toBeNull();
  });
});
