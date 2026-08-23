import Link from 'next/link';
import type { Post } from '@/types/content';

export function PostCard({ post }: { post: Post }) {
  return (
    <article className="rounded-lg border p-6">
      <p className="font-mono text-xs text-muted-foreground">{post.date}</p>
      <h3 className="mt-1 text-lg font-semibold">
        <Link href={`/writing/${post.slug}`} className="hover:underline">
          {post.title}
        </Link>
      </h3>
      <p className="mt-2 text-sm text-muted-foreground">{post.summary}</p>
    </article>
  );
}
