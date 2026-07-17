import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://exemplo.softaliza.com.br"),
  title: "Exemplo Portal Softaliza — Modelos para grandes associações",
  description: "Portal único de demonstrações da Softaliza, com propostas personalizadas por associação.",
  // Demonstrações comerciais reproduzem marca e conteúdo de entidades reais:
  // nenhuma rota pode ser indexada nem aparecer no Google concorrendo com o
  // site oficial do cliente. Vale para todas as rotas do portal.
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: { index: false, follow: false, noimageindex: true },
  },
  openGraph: {
    title: "Exemplo Portal Softaliza — Modelos para grandes associações",
    description: "Portal demonstrativo com propostas personalizadas por associação.",
    type: "website",
    locale: "pt_BR",
    url: "https://exemplo.softaliza.com.br",
    siteName: "Exemplo Portal Softaliza",
    images: [{
      url: "/og.png",
      width: 1730,
      height: 909,
      alt: "Exemplo Portal Softaliza — Modelos para grandes associações",
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Exemplo Portal Softaliza — Modelos para grandes associações",
    description: "Portal demonstrativo com propostas personalizadas por associação.",
    images: ["/og.png"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="pt-BR"><body className={geist.variable}>{children}</body></html>;
}
