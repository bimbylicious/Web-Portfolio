import type { Metadata } from 'next';
import { Chakra_Petch, Inter, JetBrains_Mono } from 'next/font/google';
import { Footer } from '@/components/sections/Footer';
import { Nav } from '@/components/sections/Nav';
import { SITE_DESCRIPTION, SITE_NAME, SITE_URL } from '@/lib/constants';
import './globals.css';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
});

const jetBrainsMono = JetBrains_Mono({
  variable: '--font-jetbrains-mono',
  subsets: ['latin'],
});

const chakraPetch = Chakra_Petch({
  variable: '--font-chakra-petch',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_NAME,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  openGraph: {
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    siteName: SITE_NAME,
    type: 'website',
  },
};

export default function RootLayout({ children }: LayoutProps<'/'>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetBrainsMono.variable} ${chakraPetch.variable} h-full antialiased motion-safe:snap-y motion-safe:snap-proximity`}
    >
      <body>
        <div className="bg-bg relative z-10 flex min-h-screen flex-col">
          <Nav />
          <main className="flex-1">{children}</main>
        </div>
        <Footer />
      </body>
    </html>
  );
}
