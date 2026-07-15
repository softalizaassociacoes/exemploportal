import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://exemploportal.softaliza.com.br"),
  title: "Exemplo Portal Softaliza — Modelos para grandes associações",
  description: "Portal único de demonstrações da Softaliza, com propostas personalizadas por associação.",
  openGraph: {
    title: "Exemplo Portal Softaliza — Modelos para grandes associações",
    description: "Portal demonstrativo com propostas personalizadas por associação.",
    type: "website",
    locale: "pt_BR",
    url: "https://exemploportal.softaliza.com.br",
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
