import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://khalixcursi-stack.github.io/cursi_presentation"),
  title: "Cursi — Licence Informatique & Gamer Free Fire | Brazzaville",
  description:
    "Portfolio de Cursi (ʙᴀʀᴀʟᴀɴɢᴜɪ) : étudiant en Licence 1 Informatique à Brazzaville, " +
    "C++, web, Linux & serveurs — joueur Free Fire Élite Héroïque depuis 2019. " +
    "Projets, compétences et contact.",
  openGraph: {
    title: "Cursi — Licence Informatique & Gamer Free Fire",
    description:
      "19 ans · Brazzaville · Licence 1 Informatique · Élite Héroïque · depuis 2019",
    images: ["/og.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr">
      <head>
        <link
          rel="icon"
          href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'%3E%3Crect width='64' height='64' rx='14' fill='%23050505'/%3E%3Ccircle cx='32' cy='34' r='21.5' fill='none' stroke='%23D4AF37' stroke-width='1.4'/%3E%3Cpath d='M42 26 C 36 18, 19 19, 15.5 31 C 12 43, 21.5 53, 37 51 C 41.5 50.3, 45 48, 47 45' fill='none' stroke='%23D4AF37' stroke-width='3' stroke-linecap='round'/%3E%3C/svg%3E"
        />
      </head>
      <body className="fond-nuit min-h-screen font-sans text-neutral-200 antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
