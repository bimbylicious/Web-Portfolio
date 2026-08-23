import type { Metadata } from 'next';
import { PostCard } from '@/components/sections/PostCard';
import { getAllPosts } from '@/lib/mdx';

export const metadata: Metadata = {
  title: 'Writing',
  description: 'Short technical write-ups.',
};

export default function WritingPage() {
  const posts = getAllPosts();

  return (
    <section className="mx-auto max-w-5xl px-6 py-16">
      <h1 className="text-3xl font-bold tracking-tight">Writing</h1>
      <div className="mt-8 grid gap-6 sm:grid-cols-2">
        {posts.map((post) => (
          <PostCard key={post.slug} post={post} />
        ))}
      </div>
    </section>
  );
}
