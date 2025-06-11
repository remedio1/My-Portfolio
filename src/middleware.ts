import { NextRequest, NextResponse } from 'next/server';
import { i18n } from './lib/i18n-config';
import Negotiator from 'negotiator';
import { match as matchLocale } from '@formatjs/intl-localematcher';

function getLocale(request: NextRequest): string {
    const negotiatorHeaders: Record<string, string> = {};
    request.headers.forEach((value, key) => (negotiatorHeaders[key] = value));

    const locales = i18n.locales;
    const languages = new Negotiator({ headers: negotiatorHeaders }).languages();
    
    // Retorna o idioma padrão 'pt' se a correspondência falhar
    return matchLocale(languages, locales, i18n.defaultLocale);
}

export function middleware(request: NextRequest) {
    const pathname = request.nextUrl.pathname;

    // Verifica se a rota já possui um locale
    const pathnameIsMissingLocale = i18n.locales.every(
        (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
    );

    // Redireciona se não houver um locale
    if (pathnameIsMissingLocale) {
        const locale = getLocale(request);
        return NextResponse.redirect(
            new URL(`/${locale}${pathname.startsWith('/') ? '' : '/'}${pathname}`, request.url)
        );
    }
}

export const config = {
    // Não executa o middleware em rotas de API, arquivos estáticos da Vercel ou imagens
    matcher: ['/((?!api|_next/static|_next/image|favicon.ico|sw.js).*)'],
};