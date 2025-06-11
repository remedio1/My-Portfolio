import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import translatePT from "./locales/pt/common.json";
import translateEN from "./locales/en/common.json";
import translateES from "./locales/es/common.json";
import translateFR from "./locales/fr/common.json";


i18n.use(initReactI18next).init({
  lng: "pt", // definir o idioma padrão
  fallbackLng: "en", // idioma de fallback
  resources: {
    en: {
      translation: translateEN,
    },
    pt: {
      translation: translatePT,
    },
    es: {
      translation: translateES,
    },
    fr: {
      translation: translateFR,
    },
  },
  interpolation: {
    escapeValue: false // React já faz a escapagem de valores, não é necessário escapar novamente
  },
});

export default i18n;
