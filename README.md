# Portfolio de Cursi

Portfolio personnel de **Cursi** (ʙᴀʀᴀʟɴɢᴜɪ · †ㅤSYNXㅤ☯ · Zzz_cursi),
19 ans, en **Licence 1 Informatique** à Brazzaville, joueur Free Fire
**Élite Héroïque** depuis 2019.

## Stack

Next.js 15, React 19, TypeScript et Tailwind CSS v3. Polices Jost et
Cormorant Garamond chargées dans le navigateur via des liens Google Fonts :
le build ne télécharge pas de polices et n’utilise pas `next/font`.

## Lancer le site

```bash
npm install --no-audit --no-fund
npm run dev
```

Build et serveur de production :

```bash
npm run build
npm run start
```

Pour une prévisualisation distante :

```bash
npm run start -- --hostname 0.0.0.0
```

## Contenu

- Hero : devise « Seuls les plus forts survivent dans ce monde. La paix ne peut
  être atteinte que par la puissance. », présentation et liens projets/contact.
- À propos : logo signature, identité, citation de Marc Aurèle,
  passions **Animé**, Stoïcisme, Free Fire et Craftland Studio, setup matériel.
- Compétences : langages, web, systèmes/réseaux et outils/gaming.
- Projets : six cartes illustrées avec descriptions, technologies et liens.
- Parcours : **2026 — Aujourd'hui**, 2024 et 2019.
- Contact : e-mail, Discord, WhatsApp, Instagram et GitHub.

Thème noir et or par défaut ; thème clair disponible, persisté via
`localStorage.theme`. La bascule reste utilisable si le stockage est bloqué.
Menu mobile sous 768 px avec fermeture au choix d’un lien ou avec Échap.
Icônes SVG uniquement, un seul `h1`, textes alternatifs sur les images et
grille de projets à une, deux puis trois colonnes. L’UID reste dans `data.ts`
mais n’est pas affiché.

## Structure

```text
src/app/
  layout.tsx                Métadonnées, polices et thème initial
  page.tsx                  Assemblage des sections
  globals.css               Tailwind et styles globaux
  data.ts                   Identité, Free Fire et contacts
  components/
    Header.tsx   Hero.tsx       About.tsx     Skills.tsx
    Projects.tsx Experience.tsx Contact.tsx   Footer.tsx
    icons.tsx
public/
  logo-cursi.png
  og.png                    Bannière de partage 1200 × 630
  projets/
    portfolio.jpg tournois.jpg discord.jpg
    lab.jpg       clan.jpg    craftland.jpg
```

Les illustrations de projets et le logo sont des visuels générés, pas des
captures des projets. Les liens de contact se modifient dans `src/app/data.ts`.

## Vérification

- `npm run build` : compilation, vérification TypeScript et génération statique.
- Vérifications navigateur : images chargées, ancres valides, thème persistant
  après rechargement, stockage bloqué, menu mobile et absence de débordement
  horizontal à 320, 375, 768 et 1440 px.

## Déploiement

Importer le dépôt sur une plateforme prenant en charge Next.js, par exemple
Vercel. Le script de build est `npm run build`. Cette configuration utilise
le serveur Next.js ; elle ne configure pas de publication GitHub Pages.
