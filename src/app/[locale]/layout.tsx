import './globals.css';
import { LocaleProvider } from '@/contexts/LocaleContext';
import { Providers } from '@/providers/chakra';
import { ReactNode } from 'react';
import { ColorModeScript } from '@chakra-ui/react';
import { theme } from '@/lib/theme';
import AppLayout from '@/components/AppLayout';

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL;

export const metadata = {
  metadataBase: new URL(baseUrl || 'http://localhost:3000'),
  title: 'URL Shortener',
  description: 'Shorten your links in seconds with a clean, fast, and modern interface.',
  openGraph: {
    title: 'URL Shortener',
    description: 'Paste a long URL below to shorten it instantly.',
    url: baseUrl,
    siteName: 'URL Shortener',
    images: [
      {
        url: `${baseUrl}/og-image.png`,
        width: 1200,
        height: 630,
        alt: 'URL Shortener preview',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'URL Shortener',
    description: 'Paste a long URL below to shorten it instantly.',
    images: [`${baseUrl}/og-image.png`],
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body suppressHydrationWarning>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <Providers>
          <LocaleProvider>
            <AppLayout>{children}</AppLayout>
          </LocaleProvider>
        </Providers>
      </body>
    </html>
  );
}
