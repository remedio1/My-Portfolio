// components/LanguageSwitcher.tsx

"use client";

import { useState } from 'react';
import { useLocale } from 'next-intl';
import { usePathname, useRouter } from '../i18n/navigation'; // Verifique se este caminho está correto
import Image from 'next/image';

// Objeto de configuração dos idiomas
const locales = {
  pt: { name: 'Português', flag: '/flags/br.svg' },
  en: { name: 'English', flag: '/flags/us.svg' },
  es: { name: 'Español', flag: '/flags/es.svg' },
  fr: { name: 'Français', flag: '/flags/fr.svg' },
};

export default function LanguageSwitcher() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  const currentLocale = useLocale();

  const handleLocaleChange = (newLocale: string) => {
    router.replace(pathname, { locale: newLocale });
    setIsOpen(false);
  };

  const currentFlag = locales[currentLocale as keyof typeof locales].flag;

  return (
    <div className="relative inline-block text-left">
      {/* Botão que mostra a bandeira atual e abre o menu */}
      <div>
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className=" flex text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-green-800 focus:ring-offset-2"
          aria-expanded={isOpen}
          aria-haspopup="true"
        >
          <Image
            src={currentFlag}
            alt="Current language flag"
            width={23}
            height={23}
            className=""
          />
        </button>
      </div>

      {/* Menu Dropdown */}
      {isOpen && (
        <div
          className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="menu-button"
        >
          <div className="py-1" role="none">
            {Object.keys(locales).map((localeKey) => (
              <button
                key={localeKey}
                onClick={() => handleLocaleChange(localeKey)}
                className="w-full text-left flex items-center gap-3 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 disabled:opacity-50"
                role="menuitem"
                disabled={localeKey === currentLocale}
              >
                <Image
                  src={locales[localeKey as keyof typeof locales].flag}
                  alt={`${locales[localeKey as keyof typeof locales].name} flag`}
                  width={23}
                  height={23}
                  className=""
                />
                <span>{locales[localeKey as keyof typeof locales].name}</span>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}