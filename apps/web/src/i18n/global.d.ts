// src/i18n/next-intl.d.ts
import type vi from './messages/vi';
import type { IntlFormats } from './request';

declare module 'next-intl' {
  interface AppConfig {
    Locale: (typeof routing)['locales'][number];
    Messages: typeof vi; // lấy literal type từ en.json
    Formats: IntlFormats; // type của formats
  }
}
