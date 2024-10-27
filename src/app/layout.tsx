import React from 'react';
import { Theme } from '@radix-ui/themes';
import type { Metadata } from 'next';
import '@radix-ui/themes/styles.css';
import '@/assets/css/global.css';
import '@/assets/css/radix-ui.css';
//
import 'swiper/css';
import 'swiper/css/navigation';

export const metadata: Metadata = {
  title: 'Atul Srivastava',
  description: '',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0"
      ></meta>
      <body className="">
        <Theme scaling="100%" className="min-h-0 p-0">
          <main>
            <div className="grid h-screen grid-cols-1 grid-rows-1 items-stretch justify-stretch">
              {children}
            </div>
          </main>
        </Theme>
      </body>
    </html>
  );
}
