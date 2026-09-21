/**
 * URL publique du site, partagée par les métadonnées, `robots.txt` et le
 * sitemap. Surchargeable au build avec `NEXT_PUBLIC_SITE_URL`.
 */
export const URL_SITE =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ??
  "https://khalixcursi-stack.github.io/cursi_presentation";

export const DESCRIPTION_SITE =
  "Portfolio de Cursi (ʙᴀʀᴀʟɴɢᴜɪ) : étudiant en Licence 1 Informatique à Brazzaville, C++, web, Linux & serveurs — joueur Free Fire Élite Héroïque depuis 2019. Projets, compétences et contact.";
