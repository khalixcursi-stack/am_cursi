# cursi_presentation

Portfolio-livre de **Zzz_cursi (ᴄᴜʀsɪ)** — 19 ans, étudiant en informatique à
Brazzaville, joueur Free Fire **Élite Héroïque** du clan **ɴᴏᴛ ʟɪᴋᴇ ᴜs**,
sur le jeu depuis **2019**.

## Format « livre »

- **Couverture** — « Bienvenue dans le portfolio de ᴄᴜʀs » + bouton *Découvrir mon univers*
- **Page 1 · Présentation** — personnage Free Fire, fiche d'infos (pseudo, âge, ville,
  études, clan, rang, UID copiable), compteurs animés (2 500+ h, 5 000+ Booyahs),
  chronologie depuis 2019
- **Page 2 · Compétences** — académiques (C++ excellent, bases de données moyen,
  vibe coding à fond) + gamer, projets en cours, emplacement pour capture de
  performances + galerie avec visionneuse
- **Page 3 · Contact** — formulaire fonctionnel + liens directs
  (e-mail, Discord, WhatsApp, Instagram)

Navigation : onglets de chapitres, boutons précédent/suivant en bas de page,
flèches ← → du clavier, ancres (#presentation, #competences, #contact).

## Fonctionnalités

- 100 % statique, sans dépendance — HTML/CSS/JS vanilla
- Design élégant sombre & doré (Cormorant Garamond + Jost)
- Responsive (menu burger mobile), animations d'entrée de page et au scroll
- Compteurs animés au format lisible, copie presse-papiers avec toast
- Visionneuse d'images (clic, Échap, clic extérieur)
- Formulaire de contact avec validation et ouverture de la messagerie
- Bouton retour haut de page

## Lancer en local

```bash
python3 -m http.server 8080
# puis ouvrir http://localhost:8080
```

## Structure

```
cursi_presentation/
├── index.html
├── assets/
│   ├── css/style.css
│   ├── js/main.js
│   └── img/   (emblem, personnage, moment-1/2, clan-emblem)
└── README.md
```
