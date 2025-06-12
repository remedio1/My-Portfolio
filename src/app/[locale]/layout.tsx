import {NextIntlClientProvider, hasLocale} from 'next-intl';
import {notFound} from 'next/navigation';
import {routing} from '@/i18n/routing';
import "../globals.css";

// Components
import Header from "@/components/Header";

// Metadados dinâmicos para cada idioma

export default async function LanguageLayout ({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{locale: string}>;
}) {
  // Ensure that the incoming `locale` is valid
  const {locale} = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
  return (
    <html lang= { locale } className="font-family">
      <body className="bg-gray-50 text-gray-100">
        <Header />
        <main><NextIntlClientProvider>{children}</NextIntlClientProvider></main>
      </body>
    </html>
  );
}
