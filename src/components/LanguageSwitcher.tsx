"use client";

import { usePathname, useRouter } from "next/navigation";
import { i18n } from "@/lib/i18n-config"; // Ajuste o caminho

export default function LanguageSwitcher() {
  const pathName = usePathname();
  const router = useRouter();

  const redirectedPathName = (locale: string) => {
    if (!pathName) return "/";
    const segments = pathName.split("/");
    segments[1] = locale;
    router.push(segments.join("/"));
  };

  return (
     <div>
      {i18n.locales.map((locale) => (
        <button
          key={locale}
          onClick={() => redirectedPathName(locale)}
          style={{ 
            fontWeight: pathName.split('/')[1] === locale ? 'bold' : 'normal',
            cursor: 'pointer'
          }}
        >
          {locale.toUpperCase()}
        </button>
      ))}
    </div>
  );
}