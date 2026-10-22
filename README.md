# E-portfolio – Clem (ENSEEIHT)

Site statique (HTML / CSS / JS, aucune dépendance, aucun cookie, aucun traceur, aucune police externe), prêt à être publié sur **GitHub Pages**. Il suit le cadre « ePortfolio framework @N7 2026-2027 » et les livrables du module CAM L3 – Marketing 4 Careers.

## Structure

```
index.html        tout le contenu (les 6 onglets)
css/style.css     le design
js/main.js        la navigation par onglets / sous-onglets
assets/           tes fichiers : photo, CV, vidéo (voir plus bas)
```

| Onglet (slide 23) | Sous-onglets |
|---|---|
| Welcome | – |
| Engineering course | Background · Projects · Skills |
| International mobility | Overview · PCE · LV2 |
| Sustainability & civic engagement | – |
| Sport & activities | – |
| Career development | **Career project** · Internships · PEP |

La section **Career project** est celle qui est évaluée (dépôt Moodle) : marque personnelle / UVP, CV EN + FR, LinkedIn EN + FR (optionnel), vidéo de pitch 2-3 min, **3 rôles modèles**, **3 projets de mobilité** alignés.

## Ce que tu dois compléter

Tout ce qui est sur fond jaune ou entre crochets `[ ... ]` est à remplir. Pour tout retrouver : cherche `TODO` et `[` dans `index.html`.

1. **Photo** : `assets/photo.jpg` (portrait 4:5).
2. **CV** : `assets/cv-en.pdf` et `assets/cv-fr.pdf`.
3. **Vidéo de pitch** : `assets/pitch.mp4` (2-3 min, en anglais, non lue, structure *présent + passé bref + futur*). Reste sous 100 Mo (limite GitHub) : compresse-la avec HandBrake si besoin. Image d'aperçu optionnelle : `assets/pitch-poster.jpg`.
4. **LinkedIn** : remplace `YOUR-PROFILE` dans les deux liens de `index.html`.
5. **Marque personnelle** : produit, 3 mots, UVP (cohérents avec CV, LinkedIn et vidéo).
6. **3 rôles modèles** (MyJobGlasses, interviews d'alumni…) et **3 projets de mobilité** (Plans A, B, C), chaque mobilité alignée avec un rôle modèle.
7. Les autres onglets : civic engagement (40 h à réaliser d'ici le S9), sport & activités, stages (S6 et S8), PEP, PCE, LV2.
8. Ton nom de famille et ton adresse e-mail pro si tu veux les afficher (je ne les ai pas mis : ils seraient publics).

Quand tout est terminé, ajoute `class="final"` à la balise `<body>` pour masquer tous les conseils (`.todo-hint`).

### Ajouter un projet
Copie un bloc `<article class="card project">…</article>` dans l'onglet *Engineering course → Projects*. Structure conseillée : contexte, ton rôle, méthodes, résultat, enseignements (méthode STAR).

## Publier sur GitHub Pages (gratuit, sans nom de domaine)

1. Crée un compte sur github.com, puis un dépôt **public** nommé exactement `ton-pseudo.github.io`.
2. Envoie-y le contenu de ce dossier (bouton **Add file → Upload files**, ou `git push`). `index.html` doit être à la racine du dépôt.
3. Dans le dépôt : **Settings → Pages → Build and deployment → Source : Deploy from a branch**, branche `main`, dossier `/ (root)` → Save.
4. Après 1 à 2 minutes, le site est en ligne sur `https://ton-pseudo.github.io`. C'est ce lien que tu déposeras sur Moodle.

Tester en local : ouvre `index.html` dans le navigateur, ou lance `python3 -m http.server` dans ce dossier.

## Points d'attention (grille d'évaluation)

- **Complétude** : CV EN/FR, LinkedIn, pitch, 3 rôles modèles, 3 mobilités, tous présents.
- **Cohérence** : UVP, CV, LinkedIn et pitch racontent la même histoire ; mobilités cohérentes avec les rôles modèles.
- **Anglais** : le site est rédigé en anglais ; relis-le, ou fais-le relire.
- **RGPD** : ne publie le nom, la photo ou une citation d'un professionnel interviewé qu'avec son accord (sinon, anonymise). Pas de numéro de téléphone ni d'adresse personnelle.
- **Projets sous NDA** : ne mets pas de contenu confidentiel de stage.
