import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
export const metadata: Metadata = {
  metadataBase: new URL("https://khalixcursi-stack.github.io/cursi_presentation"),
  title: "Cursi — Licence Informatique & Gamer Free Fire | Brazzaville",
  description: "Portfolio de Cursi (ʙᴀʀᴀʟɴɢᴜɪ) : étudiant en Licence 1 Informatique à Brazzaville, C++, web, Linux & serveurs — joueur Free Fire Élite Héroïque depuis 2019. Projets, compétences et contact.",
  openGraph: {
    title: "Cursi — Licence Informatique & Gamer Free Fire",
    description: "19 ans · Brazzaville · Licence 1 Informatique · Élite Héroïque · depuis 2019",
    images: ["/og.png"],
  },
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr" className="dark" suppressHydrationWarning>
      <head>
        <link rel="icon" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'%3E%3Crect width='64' height='64' rx='14' fill='%230d0c0a'/%3E%3Ctext x='32' y='46' font-family='Georgia, serif' font-size='38' font-style='italic' fill='%23d3a94f' text-anchor='middle'%3EC%3C/text%3E%3C/svg%3E" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600&family=Jost:wght@300;400;500;600&display=swap" rel="stylesheet" />
        <script dangerouslySetInnerHTML={{ __html: 'try{if(localStorage.getItem("theme")==="light"){document.documentElement.classList.remove("dark")}else{document.documentElement.classList.add("dark")}}catch(e){}' }} />
      </head>
      <body className="font-sans bg-ivoire text-neutral-800 antialiased transition-colors dark:bg-nuit dark:text-parchemin">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
