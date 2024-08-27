import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';
import Header from '@/components/layout/header';
import { cookies } from 'next/headers';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

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
        <div className='grid grid-rows-[auto_1fr_auto]'>
          <Header />
          <main className='relative px-4 sm:px-8 lg:px-12 w-full max-w-5xl container'>
            {children}
          </main>
          <footer></footer>
        </div>
      </body>
    </html>
  );
}
