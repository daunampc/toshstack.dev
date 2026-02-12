// src/i18n/routing.ts
export const routing = {
  locales: ['en', 'vi'] as const,
  defaultLocale: 'en',
  // (tuỳ chọn) pathnames, segments...
  //
};
export type Locale = (typeof routing.locales)[number];
