import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';
import { cookies } from 'next/headers';
import Header from '@/components/layout/header';
import Providers from './providers';
import Footer from '@/components/layout/footer';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.mdpabel.com/'),
  title: {
    default: 'MD Pabel',
    template: '%s | MD Pabel',
  },
  description:
    'Software developer and problem solver with a passion for building innovative solutions.',
  openGraph: {
    title: 'MD Pabel',
    description:
      'Software developer and problem solver with a passion for building innovative solutions.',
    url: 'https://www.mdpabel.com',
    siteName: 'MD Pabel',
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  twitter: {
    title: 'MD Pabel',
    card: 'summary_large_image',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookieStore = cookies();
  const theme = cookieStore.get('theme')?.value || 'light';

  return (
    <html className={theme} lang='en'>
      <body className={poppins.className}>
        <Providers>
          <div className='grid grid-rows-[auto_1fr_auto]'>
            <Header />
            <main>{children}</main>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
