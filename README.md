# cursi_presentation

Site vitrine personnel de **Zzz_cursi** — étudiant le jour, gamer sur Free Fire la nuit.

## Aperçu

Une page unique au design élégant et typographique (thème sombre, accents dorés, polices Cormorant Garamond & Jost) avec les sections :

- **À propos** — présentation et statistiques
- **Compétences** — côté gamer et côté étudiant
- **Parcours** — chronologie des études et de la progression sur Free Fire
- **Projets** — défis, clan et partages
- **Contact** — e-mail, Discord et réseaux sociaux

## Structure

```
cursi_presentation/
├── index.html              # Page principale
├── assets/
│   ├── css/style.css       # Styles
│   ├── js/main.js          # Interactions (menu, animations, scroll)
│   └── img/emblem.png      # Emblème Zzz_cursi
└── README.md
```

## Lancer en local

Aucune dépendance nécessaire — c'est un site statique. Servez simplement le dossier :

```bash
python3 -m http.server 8080
# puis ouvrir http://localhost:8080
```

## Personnalisation

Les éléments à adapter avec vos vraies informations sont dans `index.html` :
statistiques (heures de jeu, Booyahs), dates du parcours, projets,
adresse e-mail (`contact@exemple.com`) et liens des réseaux sociaux (`#`).
