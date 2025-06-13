import {NextIntlClientProvider, hasLocale} from 'next-intl';
import {notFound} from 'next/navigation';
import {routing} from '@/i18n/routing';
import "../globals.css";
import {getMessages} from 'next-intl/server';

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

  const messages = await getMessages();
  return (
    <html lang= { locale } className="font-family">
      <body className="bg-slate-800 text-gray-100">
        <NextIntlClientProvider locale={locale} messages={messages}>
        <Header />
        <main>
          {children}
        </main>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
