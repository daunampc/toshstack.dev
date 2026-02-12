// app/fonts.ts
import { Poppins, Roboto, Noto_Sans_JP, Inter } from 'next/font/google';

export const roboto = Roboto({
  weight: ['100', '300', '400', '500', '700', '900'],
  variable: '--font-roboto',
  subsets: ['latin', 'vietnamese'],
  display: 'swap',
});

export const notoSansJP = Noto_Sans_JP({
  weight: ['100', '300', '400', '500', '700', '900'],
  variable: '--font-notosansjp',
  subsets: ['latin', 'vietnamese'],
  display: 'swap',
});
export const poppins = Poppins({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-poppins',
  subsets: ['latin'],
  display: 'swap',
});

export const inter = Inter({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
});
