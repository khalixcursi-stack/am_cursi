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
          href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'%3E%3Crect width='64' height='64' rx='14' fill='%23050505'/%3E%3Ctext x='32' y='45' font-family='Georgia, serif' font-size='36' font-weight='700' fill='%23D4AF37' text-anchor='middle'%3EC%3C/text%3E%3C/svg%3E"
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
