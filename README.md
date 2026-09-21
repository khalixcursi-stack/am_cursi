# Portfolio de Cursi

Portfolio personnel de **Cursi** (ʙᴀʀᴀʟɴɢᴜɪ · †ㅤSYNXㅤ☯ · Zzz_cursi),
19 ans, en **Licence 1 Informatique** à Brazzaville, joueur Free Fire
**Élite Héroïque** depuis 2019.

## Stack

Next.js 15 (App Router), React 19, TypeScript et Tailwind CSS v3.
Les polices Jost et Cormorant Garamond sont chargées dans le navigateur via
Google Fonts : le build ne télécharge pas de police et n'utilise pas
`next/font`. Aucune dépendance d'exécution autre que Next.js et React.

## Lancer le site

```bash
npm install --no-audit --no-fund
npm run dev
```

Build, vérification de types et serveur de production :

```bash
npm run typecheck
npm run build
npm run start
```

Pour une prévisualisation distante :

```bash
npm run start -- --hostname 0.0.0.0
```

## Contenu

- Hero : devise « Seuls les plus forts survivent dans ce monde. La paix ne peut
  être atteinte que par la puissance. », accroche, boutons d'action et quatre
  chiffres clés (Booyahs, heures, rang, depuis 2019).
- À propos : logo signature, identité, faits Free Fire, citation de
  Marc Aurèle, passions (Animé, Stoïcisme, Free Fire, Craftland Studio) et
  setup matériel.
- Compétences : langages & code, frameworks & web, systèmes & réseaux,
  outils & gamer.
- Projets : six cartes illustrées avec descriptions, technologies et liens.
- Parcours : **2026 — Aujourd'hui**, 2024 et 2019.
- Contact : e-mail, Discord, WhatsApp, Instagram et GitHub.

Tout le texte éditorial vit dans `src/app/data.ts` : les composants ne font que
de la mise en page. Les chiffres Free Fire (rang, clan, Booyahs, heures,
année de découverte) sont déclarés une seule fois et réutilisés dans le hero,
« À propos », les projets et le parcours, ce qui évite les divergences.

## Thèmes, accessibilité et confort

- Thème noir et or par défaut, thème clair disponible, persisté via
  `localStorage.theme`. Le choix est appliqué avant le premier rendu (aucun
  clignotement) et la bascule reste utilisable si le stockage est bloqué.
- L'or décoratif (`#d3a94f`) n'est utilisé comme couleur de texte que sur fond
  sombre. Sur les fonds clairs, le texte doré passe par l'utilitaire
  `.texte-accent` (`#8a6519`), lisible à 6,1:1, et l'or pur reste réservé aux
  bordures et aux aplats.
- Un seul `h1`, hiérarchie de titres continue, lien « Aller au contenu
  principal », anneau de focus visible, `aria-current` sur la section active,
  textes alternatifs sur toutes les images, mention « nouvel onglet » pour les
  liens externes.
- Menu mobile sous 768 px : fermeture au choix d'un lien, avec Échap (le focus
  revient sur le bouton), au défilement et au passage en écran large.
- Les animations d'apparition sont purement décoratives : le HTML servi reste
  visible sans JavaScript et `prefers-reduced-motion` les désactive.

## Performance et poids

- Les visuels sont servis en WebP avec repli JPEG via `<picture>`
  (1,4 Mo → ~380 Ko pour les six projets), dimensions intrinsèques déclarées
  pour éviter les décalages de mise en page et `loading="lazy"` hors du
  premier écran.
- Bannière de partage `og.jpg` en JPEG (300 Ko → 41 Ko), icône Apple dédiée.
- En-têtes `Cache-Control` longs pour les images et `compress` activé ;
  `powered-by` retiré.

## Référencement

`metadataBase` (surchargeable par `NEXT_PUBLIC_SITE_URL`), titre et description
riches, `canonical`, Open Graph et Twitter Card, mots-clés, `robots.txt` et
`sitemap.xml` générés par `src/app/robots.ts` et `src/app/sitemap.ts` depuis
l'URL déclarée dans `src/app/site.ts`.

## Structure

```text
src/app/
  layout.tsx                Métadonnées, polices, thème initial, saut de contenu
  page.tsx                  Assemblage des sections
  globals.css               Tailwind, focus, sélection, mouvement réduit
  data.ts                   Tout le contenu éditorial
  site.ts                   URL publique et description partagées
  robots.ts / sitemap.ts    Fichiers SEO générés
  components/
    Header.tsx   Hero.tsx       About.tsx     Skills.tsx
    Projects.tsx Experience.tsx Contact.tsx   Footer.tsx
    Reveal.tsx                Apparition au défilement (optionnelle)
    icons.tsx
public/
  logo-cursi.png / .webp    Logo signature
  apple-icon.png            Icône 180 × 180
  og.jpg                    Bannière de partage 1200 × 630
  projets/
    portfolio / tournois / discord / lab / clan / craftland  (.webp + .jpg)
```

Les illustrations de projets et le logo sont des visuels générés, pas des
captures des projets. Les liens de contact se modifient dans `src/app/data.ts`.

## Vérification

- `npm run typecheck` : aucune erreur de type.
- `npm run build` : compilation, vérification TypeScript et génération statique
  de `/`, `/_not-found`, `/robots.txt` et `/sitemap.xml`.
- Contrôles automatisés sur le HTML généré : un seul `h1`, cinq `h2`, sept
  images avec `alt` et dimensions, ancres toutes résolues, aucun bloc masqué
  sans JavaScript, `aspect-ratio` et utilitaires de contraste présents dans le
  CSS produit.
- Contrôles manuels conseillés : rendu et absence de débordement horizontal à
  320, 375, 768 et 1440 px, thème persistant après rechargement, stockage
  bloqué, menu mobile au clavier et navigation par ancres.

## Déploiement

Importer le dépôt sur une plateforme prenant en charge Next.js, par exemple
Vercel. Le script de build est `npm run build`. Cette configuration utilise le
serveur Next.js ; elle ne configure pas de publication GitHub Pages. Pour un
site purement statique, activer `output: "export"` dans `next.config.mjs`
(commentaire à cet endroit) et adapter `basePath`/`assetPrefix` si le site n'est
pas servi à la racine du domaine.
