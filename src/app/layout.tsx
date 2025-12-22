import type { Metadata } from 'next';
import './globals.css';

import { Outfit } from 'next/font/google';
import Navbar from '../components/features/navbar';
import Script from 'next/script';
import GAClient from '@/components/ui/GAClient';

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
  weight: ['100', '200', '500', '600', '700', '800'],
});

export const metadata: Metadata = {
  title: 'Jahangiri.dev',
  description: "Ali Jahangiri's portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html dir="ltr" lang="en">
      <head>
        {/* Google Analytics global site tag */}
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-NC517NT9NS" strategy="afterInteractive" />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-NC517NT9NS', {
              page_path: window.location.pathname
            });
          `}
        </Script>
      </head>
      <body className={`${outfit.className} antialiased text-[15px] leading-[1.65] sm:text-base sm:leading-relaxed`}>
        {children}
        <Navbar />
        <GAClient /> {/* Optional: SPA pageview tracking */}
      </body>
    </html>
  );
}
