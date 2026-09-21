import type { Metadata, Viewport } from "next";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { DESCRIPTION_SITE, URL_SITE } from "./site";

const TITRE = "Cursi — Licence Informatique & Gamer Free Fire | Brazzaville";
const DESCRIPTION = DESCRIPTION_SITE;

export const metadata: Metadata = {
  metadataBase: new URL(URL_SITE),
  title: { default: TITRE, template: "%s · Cursi" },
  description: DESCRIPTION,
  applicationName: "Portfolio de Cursi",
  authors: [{ name: "Cursi" }],
  creator: "Cursi",
  keywords: [
    "Cursi",
    "portfolio développeur",
    "Licence Informatique",
    "Brazzaville",
    "Congo",
    "Free Fire",
    "Élite Héroïque",
    "Next.js",
    "React",
    "C++",
    "Linux",
    "Windows Server",
  ],
  alternates: { canonical: "/" },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  icons: {
    icon: [
      {
        url: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'%3E%3Crect width='64' height='64' rx='14' fill='%230d0c0a'/%3E%3Ctext x='32' y='46' font-family='Georgia, serif' font-size='38' font-style='italic' fill='%23d3a94f' text-anchor='middle'%3EC%3C/text%3E%3C/svg%3E",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "/",
    siteName: "Cursi",
    title: "Cursi — Licence Informatique & Gamer Free Fire",
    description:
      "19 ans · Brazzaville · Licence 1 Informatique · Élite Héroïque · depuis 2019",
    images: [
      {
        url: "/og.jpg",
        width: 1200,
        height: 630,
        alt: "Bannière « Cursi — Licence Informatique · Free Fire · Brazzaville »",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cursi — Licence Informatique & Gamer Free Fire",
    description:
      "19 ans · Brazzaville · Licence 1 Informatique · Élite Héroïque · depuis 2019",
    images: ["/og.jpg"],
  },
};

export const viewport: Viewport = {
  colorScheme: "dark light",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f6f2e9" },
    { media: "(prefers-color-scheme: dark)", color: "#0d0c0a" },
  ],
};

/**
 * Applique le thème enregistré avant le premier rendu pour éviter tout
 * clignotement. Sans `localStorage` (mode privé, stockage bloqué), le thème
 * sombre reste la valeur par défaut.
 */
const SCRIPT_THEME = `try{var s=localStorage.getItem("theme");var sombre=s!=="light";var r=document.documentElement;r.classList.toggle("dark",sombre);r.style.colorScheme=sombre?"dark":"light";}catch(e){}`;

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr" className="dark" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600&family=Jost:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
        <script dangerouslySetInnerHTML={{ __html: SCRIPT_THEME }} />
      </head>
      <body className="bg-ivoire font-sans text-neutral-800 antialiased transition-colors dark:bg-nuit dark:text-parchemin">
        <a
          href="#contenu"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:border focus:border-gold focus:bg-nuit focus:px-4 focus:py-2 focus:text-sm focus:text-gold"
        >
          Aller au contenu principal
        </a>
        <Header />
        <main id="contenu">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
