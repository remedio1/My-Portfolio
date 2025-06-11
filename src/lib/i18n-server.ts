// Este arquivo é responsável por inicializar o i18next para Server Components
// e fornecer uma função de tradução (`t`) que pode ser usada em componentes do servidor.
import { createInstance } from 'i18next';
import resourcesToBackend from 'i18next-resources-to-backend';
import { initReactI18next } from 'react-i18next/initReactI18next'; // Importe do caminho correto para Server Components
import { i18n } from './i18n-config'; // Importa a configuração de idiomas que acabamos de criar

/**
 * Inicializa uma nova instância do i18next para uso em Server Components.
 * Isso garante que cada requisição (ou build estático) tenha sua própria instância,
 * evitando problemas de cache e estado compartilhado no servidor.
 *
 * @param lang O idioma para o qual as traduções devem ser carregadas.
 * @param ns O namespace(s) a ser(em) carregado(s) (ex: 'common', 'homepage').
 * @returns A instância do i18next configurada.
 */
const initI18next = async (lang: string, ns: string | string[] = 'common') => {
  const i18nInstance = createInstance();
  await i18nInstance
    .use(initReactI18next)
    .use(
      // Carrega os recursos (arquivos JSON) do backend (sistema de arquivos).
      // O caminho é relativo a onde o Node.js está executando (raiz do projeto),
      // então '../../public/locales' funciona se este arquivo estiver em 'src/lib'.
      resourcesToBackend((language: string, namespace: string) =>
        import(`../../public/locales/${language}/${namespace}.json`)
      )
    )
    .init({
      lng: lang, // Define o idioma atual
      fallbackLng: i18n.defaultLocale, // Idioma de fallback se uma tradução não for encontrada
      ns, // Namespace(s) a serem carregados
      // debug: true, // Descomente esta linha para ver logs de depuração do i18next no console do servidor
      preload: i18n.locales, // Pré-carrega todos os idiomas, útil para build estático
    });
  return i18nInstance;
};

/**
 * Hook customizado para obter a função de tradução (`t`) em Server Components.
 * Permite tipagem e prefixos de chave para traduções.
 *
 * @param lang O idioma da página/componente.
 * @param ns O namespace(s) de tradução.
 * @param options Opções adicionais, como keyPrefix.
 * @returns Um objeto contendo a função `t` e a instância do `i18n`.
 */
export async function useTranslation(
  lang: string,
  ns: string | string[] = 'common',
  options: { keyPrefix?: string } = {}
) {
  const i18nInstance = await initI18next(lang, ns);
  return {
    t: i18nInstance.getFixedT(lang, ns, options.keyPrefix),
    i18n: i18nInstance,
  };
}