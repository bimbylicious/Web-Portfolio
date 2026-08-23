'use client';

import { motion, useReducedMotion } from 'framer-motion';
import Link from 'next/link';
import { NetworkGraphic } from '@/components/motion/NetworkGraphic';
import { Button } from '@/components/ui/button';
import { SITE_OWNER, SITE_TAGLINE } from '@/lib/constants';

export function Hero() {
  const shouldReduceMotion = useReducedMotion();
  const words = SITE_OWNER.split(' ');

  return (
    <section className="mx-auto grid max-w-5xl items-center gap-12 px-6 py-24 lg:grid-cols-[1.1fr_1fr]">
      <div>
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
          {shouldReduceMotion ? (
            SITE_OWNER
          ) : (
            <>
              {words.map((word, index) => (
                <span key={word} className="mr-3 inline-block overflow-hidden align-bottom">
                  <motion.span
                    className="inline-block"
                    initial={{ y: '100%' }}
                    animate={{ y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.07, ease: 'easeOut' }}
                  >
                    {word}
                  </motion.span>
                </span>
              ))}
            </>
          )}
        </h1>
        <motion.p
          className="mt-4 max-w-2xl text-lg text-muted-foreground"
          initial={shouldReduceMotion ? undefined : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: shouldReduceMotion ? 0 : 0.55, ease: 'easeOut' }}
        >
          {SITE_TAGLINE}
        </motion.p>
        <motion.div
          className="mt-8 flex gap-4"
          initial={shouldReduceMotion ? undefined : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: shouldReduceMotion ? 0 : 0.75, ease: 'easeOut' }}
        >
          <Button asChild className="active:scale-[0.97]">
            <Link href="/projects">View projects</Link>
          </Button>
          <Button asChild variant="outline" className="active:scale-[0.97]">
            <Link href="/contact">Get in touch</Link>
          </Button>
        </motion.div>
      </div>
      <div className="flex justify-center lg:justify-end">
        <NetworkGraphic />
      </div>
    </section>
  );
}
