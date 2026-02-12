import { NextIntlClientProvider } from 'next-intl';
import './globals.css';
import { Toaster } from 'sonner';
import { ColorSchemeScript, mantineHtmlProps, MantineProvider } from '@mantine/core';
import { themeConfig } from '@/shared/config/theme-config';
import { inter, poppins, roboto } from '@/shared/config/fonts';
import { AuthModalProvider } from '@/widgets/auth/model';
import { QueryProvider } from './_providers/query-provider';
import { fetchMe } from '@/entities/auth/api';
import { AUthProvider } from './_providers/auth-provider';
export default async function RootLayout({
  params,
  children,
}: Readonly<{
  params: { locale: string };
  children: React.ReactNode;
}>) {
  const user = await fetchMe();
  return (
    <html lang={params.locale}>
      <head>
        <ColorSchemeScript />
      </head>
      <body
        className={`${roboto.className} ${poppins.variable} ${inter.variable} antialiased`}
        {...mantineHtmlProps}
      >
        <NextIntlClientProvider locale={params.locale}>
          <MantineProvider theme={themeConfig}>
            <Toaster richColors />
            <QueryProvider>
              <AUthProvider initialUser={user}>
                <AuthModalProvider>{children}</AuthModalProvider>
              </AUthProvider>
            </QueryProvider>
          </MantineProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
