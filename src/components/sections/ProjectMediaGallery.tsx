'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useRef } from 'react';
import type { Project } from '@/types/content';

function GalleryVideo({ src, caption }: { src: string; caption?: string }) {
  const videoRef = useRef<HTMLVideoElement>(null);

  return (
    <figure className="sm:col-span-2">
      <motion.video
        ref={videoRef}
        src={src}
        muted
        loop
        playsInline
        className="border-line w-full rounded-[var(--radius-tile)] border"
        onViewportEnter={() => videoRef.current?.play()}
        onViewportLeave={() => videoRef.current?.pause()}
        viewport={{ margin: '-10%' }}
      />
      {caption && <figcaption className="text-dim mt-2 text-xs">{caption}</figcaption>}
    </figure>
  );
}

function GalleryImage({
  src,
  alt,
  caption,
  width,
  height,
}: {
  src: string;
  alt: string;
  caption?: string;
  width?: number;
  height?: number;
}) {
  return (
    <figure className="sm:col-span-2">
      <Image
        src={src}
        alt={alt}
        width={width ?? 1920}
        height={height ?? 1080}
        sizes="(min-width: 1024px) 768px, 100vw"
        className="border-line bg-surface w-full rounded-[var(--radius-tile)] border"
      />
      {caption && <figcaption className="text-dim mt-2 text-xs">{caption}</figcaption>}
    </figure>
  );
}

export function ProjectMediaGallery({ media }: { media: NonNullable<Project['media']> }) {
  if (media.length === 0) return null;

  return (
    <div className="mt-10 grid gap-6 sm:grid-cols-2">
      {media.map((item, index) =>
        item.type === 'video' ? (
          <GalleryVideo key={`${item.src}-${index}`} src={item.src} caption={item.caption} />
        ) : (
          <GalleryImage
            key={`${item.src}-${index}`}
            src={item.src}
            alt={item.alt ?? ''}
            caption={item.caption}
            width={item.width}
            height={item.height}
          />
        ),
      )}
    </div>
  );
}
