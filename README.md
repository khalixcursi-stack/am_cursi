# cursi_presentation — portfolio de Cursi

Portfolio personnel de **Cursi** (ʙᴀʀᴀʟᴀɴɢᴜɪ · †ㅤSYNXㅤ☯ · Zzz_cursi) —
19 ans, étudiant en **Licence 1 Informatique** à Brazzaville (Congo),
joueur **Free Fire Élite Héroïque** du clan **ɴᴏᴛ ʟɪᴋᴇ ᴜs** depuis **2019**.

Construit avec **Next.js 15 + TypeScript + Tailwind CSS**, suivant la méthode
« un composant = une section = un fichier ».

## 🧩 Sections (one-page)

`Header` (fixe, blur, burger mobile) → `Hero` → `About` →
`Skills` → `Projects` → `Experience` → `Contact` → `Footer`

- **Hero** : nom + slogan « Étudier le jour, Booyah la nuit. » + CTA
- **À propos** : présentation, citation de Marc Aurèle, passions (One Piece,
  stoïcisme, Craftland), setup matériel
- **Compétences** : langages & code (C++ POO, SQL, modélisation E/A…),
  frameworks (React, Next.js, Tailwind), systèmes & réseaux (Arch, Ubuntu
  Server, Kali, WS 2022, SFTP, GRUB, VM), outils & gamer
- **Projets** : ce site, modèle web de tournois e-sport, serveur Discord
  info & prog, lab serveurs/virtualisation, clan ɴᴏᴛ ʟɪᴋ s, cartes Craftland
- **Parcours** : timeline 2019 → aujourd'hui
- **Contact** : e-mail cliquable + Discord, WhatsApp, Instagram, GitHub

## ✅ Qualité

- Mobile-first, grilles 1 → 2 → 3 colonnes, menu burger < 768 px
- Thème sombre par défaut + bascule clair/sombre persistée (localStorage)
- HTML sémantique (header/main/section/footer), un seul `h1`, `alt` partout
- SEO & Open Graph (`metadata`, `og.png`) pour une belle carte de partage
- Zéro dépendance superflue, polices système (build hors-ligne)

## 🚀 Lancer en local

```bash
npm install
npm run dev      # http://localhost:3000
npm run build && npm run start   # version production
```

## 🌍 Déployer (gratuit)

1. Pousser ce dépôt sur GitHub ✔ (déjà fait)
2. [vercel.com](https://vercel.com) → *Sign in with GitHub* → *Add New → Project*
   → importer `cursi_presentation` → déploiement automatique à chaque push.
   Alternatives : Netlify, Cloudflare Pages.
3. Optionnel : nom de domaine (`.dev`) via Vercel → Settings → Domains.

## 📁 Structure

```
cursi_presentation/
├── src/app/
│   ├── layout.tsx          # html, metadata, thème
│   ├── page.tsx            # assemble les sections
│   ├── globals.css         # Tailwind
│   ├── data.ts             # TOUTES mes infos (source unique)
│   └── components/
│       ├── Header.tsx  Hero.tsx  About.tsx  Skills.tsx
│       ├── Projects.tsx  Experience.tsx  Contact.tsx  Footer.tsx
│       ├── Icones.tsx   # jeu d'icônes SVG inline
│       └── LogoCursi.tsx # logo signature (monogramme + paraphe)
├── public/og.png
├── tailwind.config.ts · tsconfig.json · next.config.mjs · package.json
└── README.md
```

## 🔗 Contact

- E-mail : baralangui7@gmail.com
- Discord : https://discord.gg/W7S3YdKE
- WhatsApp : https://wa.me/qr/4PWVMBD2JGTQI1
- Instagram : https://www.instagram.com/zzz_cursi
