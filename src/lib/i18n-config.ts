// src/lib/i18n-config.ts

export const i18n = {
  defaultLocale: 'pt', // Idioma padrão do seu site
  locales: ['pt', 'en', 'es', 'fr'], // Lista de todos os idiomas suportados
} as const; // O 'as const' ajuda o TypeScript a inferir tipos literais para os locais.

export type Locale = (typeof i18n)['locales'][number]; // Tipo para garantir que só idiomas válidos sejam usados.