import type { Metadata } from "next";
import "../globals.css";

import { i18n, Locale } from "@/lib/i18n-config";

// Components
import Header from "@/components/Header";
import { getDictionary } from "@/app/[lang]/dictionaries";

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({
    lang: locale
  }));
}

export async function generateMetadata({ params: { lang } }: { params: { lang: Locale } }): Promise<Metadata> {
  const dictionary = await getDictionary(lang) as { title: string; description: string };
  return {
    title: dictionary.title,
    description: dictionary.description,
  };
}



// Metadados dinâmicos para cada idioma




export default function LanguageLayout({
  children,
  params: { lang },
}: {
  children: React.ReactNode;
  params: { lang: string};
}) {
  return (
    <html lang={lang} className="font-family">
      <body className="bg-gray-50 text-gray-100">
        <Header />
        <main> {children} </main>
      </body>
    </html>
  );
}
