import { getRequestConfig } from 'next-intl/server';
import type { AbstractIntlMessages } from 'next-intl';

export const formats = {
  dateTime: {
    short: { dateStyle: 'medium', timeStyle: 'short' },
  },
  number: {
    currency: { style: 'currency', currency: 'USD' },
  },
} as const;
export type IntlFormats = typeof formats;

export default getRequestConfig(async () => {
  const locale = 'en';

  const messages = (await import(`./messages/${locale}/index`)).default as AbstractIntlMessages;
  return { locale: locale, messages, };
})
