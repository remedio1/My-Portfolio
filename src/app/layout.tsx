
import type { Metadata } from 'next';

import './globals.css'; // Importa seu CSS global



// Metadados globais para o seu aplicativo.
// Estes são os metadados padrão que serão aplicados se nenhuma outra página ou layout sobrescrever.
export const metadata: Metadata = {
  title: 'My Portfolio ', // Título padrão para o seu site
  description: 'Portfólio de projetos de um desenvolvedor ', // Descrição padrão
  keywords: ['portfolio', 'nextjs', 'fullstack', 'desenvolvedor', 'react', 'typescript'],
  authors: [{ name: 'Seu Nome' }],
  creator: 'Seu Nome',
  publisher: 'Next.js',
  
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // A tag 'lang' aqui é a lang padrão do HTML.
    // Ela será sobrescrita pelo [lang]/layout.tsx para a rota específica do idioma.
    <html lang="pt-BR"> 
      <body >
        {children} {/* Aqui é onde o conteúdo das rotas e sub-layouts será renderizado */}
      </body>
    </html>
  );
}