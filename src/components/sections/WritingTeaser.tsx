import Link from 'next/link';
import { Reveal } from '@/components/motion/Reveal';
import type { Post } from '@/types/content';

export function WritingTeaser({ post }: { post: Post }) {
  return (
    <Reveal>
      <section className="border-t bg-secondary/40">
        <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-4 px-6 py-10">
          <p className="text-sm text-muted-foreground">
            Also writing —{' '}
            <Link href={`/writing/${post.slug}`} className="font-medium text-foreground underline">
              {post.title}
            </Link>
          </p>
          <Link href="/writing" className="text-sm font-medium text-signal-blue hover:underline">
            Read more writing →
          </Link>
        </div>
      </section>
    </Reveal>
  );
}
