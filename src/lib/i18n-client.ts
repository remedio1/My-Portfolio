'use client'; // Marca este arquivo como um Client Component

import i18next from 'i18next';
import {
  initReactI18next,
  useTranslation as useTranslationOriginal,
} from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector'; // Detecta o idioma do navegador
import resourcesToBackend from 'i18next-resources-to-backend'; // Para carregar recursos no cliente

import { i18n } from './i18n-config'; // Importa a configuração de idiomas

// Verifica se o i18next já está inicializado para evitar re-inicialização em dev (hot reload)
if (!i18next.isInitialized) {
  i18next
    .use(initReactI18next)
    .use(LanguageDetector) // Opcional: para detectar o idioma do navegador do usuário
    .use(
      // Carrega recursos para o cliente. O caminho é relativo ao servidor estático.
      resourcesToBackend((language: string, namespace: string) =>
        fetch(`/locales/${language}/${namespace}.json`).then((res) => res.json())
      )
    )
    .init({
      // lng: i18n.defaultLocale, // Opcional: pode ser omitido para deixar o LanguageDetector decidir
      fallbackLng: i18n.defaultLocale,
      ns: 'common', // Namespace(s) padrão para Client Components
      defaultNS: 'common', // Namespace padrão
      detection: {
        order: ['querystring', 'cookie', 'htmlTag', 'localStorage', 'path', 'subdomain'],
        caches: ['cookie'], // Armazena o idioma em um cookie
      },
      interpolation: {
        escapeValue: false, // React já escapa valores para evitar XSS
      },
      // debug: true, // Descomente para ver logs no console do navegador
    });
}

/**
 * Hook customizado para obter a função de tradução (`t`) em Client Components.
 * Usa a instância global do i18next.
 *
 * @param ns O namespace(s) de tradução.
 * @param options Opções adicionais, como keyPrefix.
 * @returns Um objeto contendo a função `t` e a instância do `i18n`.
 */
export function useTranslation(
  ns?: string | string[],
  options?: { keyPrefix?: string }
) {
  return useTranslationOriginal(ns, options);
}

// Opcional: Exporta a instância do i18next caso precise acessá-la diretamente
export default i18next;