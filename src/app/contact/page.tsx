import type { Metadata } from 'next';
import { ContactForm } from '@/components/sections/ContactForm';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Get in touch.',
};

export default function ContactPage() {
  return (
    <section className="mx-auto max-w-2xl px-6 py-16">
      <h1 className="text-3xl font-bold tracking-tight">Contact</h1>
      <p className="mt-4 text-muted-foreground">
        Have a question or want to work together? Send a message below.
      </p>
      <div className="mt-8">
        <ContactForm />
      </div>
    </section>
  );
}
