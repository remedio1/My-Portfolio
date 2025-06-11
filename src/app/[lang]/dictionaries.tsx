// src/lib/dictionaries.ts
import 'server-only';

const dictionaries = {
  en : () => import('../../locales/en/common.json').then((module) => module.default),
  pt : () => import('../../locales/pt/common.json').then((module) => module.default),
  es : () => import('../../locales/es/common.json').then((module) => module.default),
  fr : () => import('../../locales/fr/common.json').then((module) => module.default),
}
export const getDictionary = async (locale : 'pt' | 'en' | 'fr' | 'es') => 
  dictionaries[locale]()
