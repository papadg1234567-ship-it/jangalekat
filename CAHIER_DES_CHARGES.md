# Cahier des charges — Jàngalekat

**Version 3.8 — 21 octobre 2026.** Ajout de 36 leçons complémentaires de physique-chimie : huit
parcours de découverte en 6ᵉ et en 5ᵉ, puis quatre compléments de révision dans chacune des classes
de 4ᵉ à Terminale. Ces contenus rédigés par Jàngalekat sont explicitement distingués des titres
recopiés du fascicule et ne sont pas présentés comme une liste officielle. Les 36 leçons ont chacune
trois questions ; le contrôle §12.2 mesure désormais 575 leçons de registre, 592 supports et 1776
questions, tous couverts.

*(v3.6 — 20 octobre 2026.)* Cette version n'ajoutait ni fonctionnalité ni contenu : elle appliquait
le **retrait de `'unsafe-inline'` de la politique `style-src`**, engagé en v3.5 à ses §15 item 9 et §16
item 8, et en tirait les conséquences au §6, au §12.2, au §13.2, au §13.4, au §14, au §15 et au §16.
Les grandeurs du corpus à cette date (539 leçons, 1668 questions, 539/539 quiz) étaient rejouées par
les commandes du §13.4.

*(v3.5 — texte d'introduction tel que déposé le 20 octobre 2026.)* **Version 3.5 — 20 octobre 2026.** Ce document reprend intégralement la version 3.3 du même jour
(filiation : cahier client version 1.0 du 17 octobre 2026, versions 2.1, 3.0, 3.2, audit de sécurité de
la v3.1, §8.4 ajouté en v3.2, cinquième registre d'histoire ajouté en v3.3) et y applique les points 1
à 10 de la revue du 20 octobre 2026. Il conserve tout le contenu de la v3.3 — contexte, objectif,
contraintes client, périmètre, utilisateurs, identité visuelle, architecture, modèle de données,
politique d'honnêteté, règles rédactionnelles, chaîne de production, contrôle, sécurité, état de
livraison, limites, évolutions, procédure de copie — sauf aux endroits expressément modifiés, signalés
par le marqueur **[v3.5]**.

La revue annonçait une version 3.4 intermédiaire (points 1, 2 et 4) : **aucune v3.4 n'a été déposée
dans le projet.** La v3.5 intègre donc ses trois corrections directement : les décomptes de fichiers
sont étiquetés par périmètre P1 / P2 / P3 (annexe A), le compte de lignes de `css/style.css` est
produit par `wc -l` et cité **une seule fois**, au §14, et le taux de réalisation de l'objectif n° 2
(144 leçons dotées d'une fiche sur 539) est affiché au §2 et inscrit au §15.

**Sept affirmations de la revue ont été corrigées avant fusion**, parce que contredites par une mesure
sur le dépôt (règle du projet : une affirmation chiffrée ne rentre dans ce document que si une commande
la reproduit) :

1. le contrat d'interface de `js/progression.js` proposé comportait une fonction `delaiRevue` **qui
   n'existe pas**, et attribuait à `aRevoir` un retour booléen alors qu'elle rend un tableau ;
2. `443 − 378` fait 65 et non 39 ;
3. le contraste de `--texte-doux` est à 6,35:1 sur le fond de page (6,82:1 sur carte blanche), pas 6,9:1 ;
4. `serve-test.js` n'est **pas** dans le dépôt livré : la commande du §12.1 pointait un fichier absent ;
5. la commande de contrôle des liens de fiche, `!JK.FICHES[l.f]`, est fausse — `JK.FICHES` est un
   tableau, elle aurait annoncé 144 liens cassés là où il y en a 0 ;
6. le périmètre P1 était défini comme incluant `css/style.css` et `assets/icons/` alors que sa commande
   les excluait (71 rendu pour 73 attendu) ;
7. `verifier-quiz.js` était crédité d'une cohérence « registre ↔ quiz ↔ fiches », ce que son code ne
   fait pas (angle mort du §13.3).

Chaque affirmation chiffrée de cette version est produite par une commande citée au §12.2 ou au §13.4 ;
aucune n'est recopiée à la main d'un document antérieur.

---

## 1. Contexte

*(Inchangé par rapport à la v3.3.)*

Les élèves sénégalais de la 6ᵉ à la Terminale révisent avec peu d'outils : les manuels sont chers,
les plateformes en ligne coûtent une connexion que beaucoup n'ont pas, et les fiches circulent en
PDF mal mis en page. Jàngalekat répond à ce problème par un outil **local** : 1,8 Mo de fichiers
ouverts dans un navigateur, sans serveur, sans compte, sans connexion.

Nom : **Jàngalekat** (« apprendre » en wolof). Slogan : **« Apprends. Comprends. Réussis. »**

## 2. Objectif

**[v3.5]** *(modifié — taux de réalisation de l'objectif 2)*

Permettre à un élève de cycle moyen (6ᵉ → 3ᵉ) et de second cycle (Seconde → Terminale) de :

1. retrouver la leçon de son programme sous son intitulé officiel ;
2. lire une fiche qui structure cette leçon (définitions, plan, chiffres, vocabulaire) — **réalisé
   pour 144 leçons sur 539 (27 %) au 20 octobre 2026** ; les 395 autres affichent « Pas encore de
   fiche », sans simulation (contrainte 5) ;
3. se tester immédiatement avec un quiz attaché à cette leçon précise — **réalisé pour 539 leçons sur
   539 (100 %)** au 20 octobre 2026 ;
4. planifier ses révisions et suivre sa progression, y compris l'espacement de la mémorisation.

**Objectif de qualité, distinct de l'objectif fonctionnel** : le contenu doit être traçable. Une leçon
n'existe dans l'application que si elle existe dans un document source — ou si elle est explicitement
marquée comme repère de démonstration, statut affiché à l'écran ; un quiz n'est proposé que si
sa provenance est affichée. Voir §9.

## 3. Contraintes non négociables (reprises du client, version 1.0)

*(Inchangé par rapport à la v3.3.)*

Ces six phrases du cahier des charges client sont la loi du projet. Elles priment toute autre
décision, y compris une décision d'ergonomie ou de confort de développement.

1. « Utiliser uniquement HTML, CSS et JavaScript natif. »
2. « Ne pas imposer de service payant, d'API payante ou de clé secrète. »
3. « Limiter les dépendances externes et prévoir une solution de remplacement pour les ressources
   indisponibles. »
4. « Utiliser localStorage uniquement pour les données de démonstration… ne pas y stocker de mots
   de passe. »
5. « Ne pas afficher de fonctionnalités fictives comme si elles étaient déjà opérationnelles. »
6. « Si tu génères le code, fournis des fichiers complets, cohérents et directement copiables.
   Explique simplement où placer chaque fichier et comment lancer le prototype localement. »

**Contrôle des contraintes 1, 2 et 3.** Le projet ne contient ni `package.json`, ni `node_modules`, ni
bundler, ni framework, ni police distante, ni CDN (vérifié par `find` le 18 octobre 2026). Les quatre
pages HTML et `css/style.css` ne contiennent **aucune** URL distante : `grep -n "http" *.html
css/style.css` ne renvoie que les six méta `http-equiv="Content-Security-Policy"`, aucune ressource à
charger. Rien n'est chargé au démarrage, et l'application est identique hors connexion. Les icônes sont
des SVG écrits à la main dans `assets/icons/` plus un sprite interne (`js/icons.js`, dont la seule URL
est l'espace de noms `http://www.w3.org/2000/svg`, non résolu). Les seules URL réseau du projet sont des
**citations de sources** dans les registres (`js/programmes/*.js`) ; l'écran Programmes les affiche comme
liens sortants que l'élève doit choisir d'ouvrir, jamais comme des ressources dont l'application dépend.

**Contrainte budgétaire : 0 FCFA.** Aucun hébergement, aucune licence, aucun abonnement.

## 4. Périmètre

### Inclus

- Application complète multi-pages, utilisable en `file://`.
- Registres de leçons pour cinq corps de contenu : Géographie, Histoire, SVT, Mathématiques,
  Physique-Chimie.
- Quiz de 3 questions par leçon, avec explication après réponse — **539/539 leçons couvertes**.
- Reprise et priorisation (§8.4) : date de revue par leçon déjà quizée, compteur de tentatives, section
  « Leçons à revoir » sur le tableau de bord, puce « À revoir d'abord » sur l'écran Quiz, bouton
  « Reprendre » sur l'accueil. Le tout calculé sur l'appareil, dans les cinq clés existantes.
- Bibliothèque de fiches (53), mode mémorisation active, planificateur de révisions avec
  espacement, tableau de bord, écran « Programmes » avec statut de provenance par matière.
- `verifier-quiz.js` : contrôle d'intégrité du corpus, livré avec le dépôt mais jamais chargé par une
  page. Les autres outils de production (`check-quiz.js`, `lit-registres.js`, `brief-matiere.js`,
  `ajoute-quiz.js`, `ajoute-programmes.js`, `serve-test.js`, `verifie-liens-de-fiches.js`) restent à
  l'atelier et ne voyagent pas avec le dépôt (voir §17).

### Exclu, et assumé comme tel

- **Compte, authentification, profils multiples.** Il n'y a pas de mot de passe à stocker ; le
  `localStorage` ne contient donc aucun secret. Un élève qui change d'ordinateur repart de zéro.
- **Historique de serveur, statistiques agrégées, tableau de bord enseignant.**
- **Impression, export PDF, hors-ligne « installable » (PWA/service worker).** Non implémenté : la
  contrainte 5 interdit de le laisser croire.
- **Épreuve blanche notée, correction par un enseignant, synchronisation entre appareils.**
- **Français autre que le français scolaire sénégalais, anglais, wolof** (seuls le nom et le slogan
  sont en wolof).

## 5. Utilisateurs

*(Inchangé par rapport à la v3.3.)*

| Profil | Besoin | Écran principal |
|---|---|---|
| Élève de cycle moyen (6ᵉ–3ᵉ) | réviser une leçon précise avant un devoir | Fiches, Quiz |
| Élève du second cycle (Seconde–Terminale) | préparer BFEM / BAC, enchaîner les leçons | Quiz, Planning |
| Parent ou encadrant bienveillant | voir ce qui est couvert et ce qui ne l'est pas | Programmes, Profil |

L'application est conçue pour un téléphone d'entrée de gamme Android avec Chrome, puis pour un
poste de cybercafé ou de salle d'informatique.

## 6. Identité et système visuel

**[v3.5]** *(modifié — le compte de lignes de `css/style.css` est retiré de ce §6 et renvoyé au §14 ;
la justification de `'unsafe-inline'` est explicitée et son retrait engagé au §16.8 — **ce retrait est
fait en v3.6**, voir le bloc `style-src` ci-dessous ; le contraste de `--texte-doux` est corrigé
d'après mesure)*

Une seule feuille de style, `css/style.css`, sans import externe ; son compte de lignes exact est
produit par `wc -l css/style.css` et cité au §14, pas ici. Les valeurs sont portées par des variables
CSS (`css/style.css:26-33`).

**[v3.7]** *(modifié — le jeton `--gris` est assombri et passe de `#64748B` à `#586A82` ; les contrastes
ci-dessous sont désormais des **mesures rendues dans le navigateur**, plus des calculs à la main)*

| Rôle | Variable CSS | Couleur |
|---|---|---|
| Bleu (primaire, en-têtes, actions) | `--bleu` | `#123B70` |
| Vert (réussite, actions secondaires) | `--vert` | `#13845B` |
| Fond | `--fond` | `#F4F7FB` |
| Texte principal / secondaire | `--texte` / `--gris` | `#172B4D` / `#586A82` |

Les déclinaisons (bleu actif, vert pâle, alerte, erreur, `--texte-doux`) sont dérivées de ces cinq-là et
définies en en-tête de la feuille de style ; aucune couleur n'apparaît en dur dans le JavaScript.

- Mobile-first, trois points de rupture : **360 px, 768 px, 1440 px**. Interdiction stricte du
  défilement horizontal à 360 px.
- Typographie : polices système uniquement (aucun téléchargement de police).
- Icônes : SVG locaux, `aria-hidden`, toujours doublées d'un texte ou d'un `aria-label`.
- Accessibilité exigée : navigation clavier (`.skip-link`, lien d'évitement), focus visible sur tous les
  composants interactifs (`:focus-visible` avec `outline` de 3 px, `css/style.css:815-819`), cible
  tactile ≥ 44 px (`min-height: 44px` sur `.btn` et `.nav-btn`), `aria-label` des boutons de quiz
  rappelant le titre de la leçon, `aria-live` sur le retour de correction.
- **Contrastes mesurés** (calcul WCAG reproduit au §12.2, relevé du 20 octobre 2026) : texte principal
  `#172B4D` sur `#F4F7FB` = **13,12:1** ; texte secondaire `--texte-doux #4A5C75` = **6,35:1** sur le
  fond de page, **6,82:1** sur carte blanche ; bleu `#123B70` sur `#F4F7FB` = **10,37:1**.
- **[v3.7] Le gris secondaire est assombri, et l'écart du §15 item 8 est clos.** `--gris` passe de
  `#64748B` à `#586A82` (une seule ligne de la feuille de style, `css/style.css:31`, plus son commentaire
  de jetons en `css/style.css:27-30`). Les douze règles qui s'en servent (`grep -c "color: var(--gris)"
  css/style.css` = **12**) sont toutes affectées, aucune autre couleur n'est touchée. Les rapports
  ci-dessous ne sont pas calculés sur des paires de hexadécimaux : ils sont relevés **dans le
  navigateur** sur les couleurs calculées des éléments rendus, fond hérité compris, par l'outil
  d'atelier `audit-contrastes.js` (recette au §12.2) :

  | Fond réellement rencontré | Élément type | Avant (`#64748B`) | Après (`#586A82`) |
  |---|---|---|---|
  | Fond de page `#F4F7FB` | `.stat-label`, `.hero-compteurs span`, `.apercu-legende` | 4,43:1 **sous AA** | **5,14:1** |
  | Carte blanche `#FFFFFF` | `.stat-label`, `.carte-chiffre`, `.empty` | 4,76:1 | **5,53:1** |
  | Puce de badge `#eef2f8` | `.badge.badge-out` (jusqu'à 428 occurrences à l'écran Programmes) | 4,24:1 **sous AA** | **4,92:1** |
  | `--bleu-ciel #f2f6fc` | `.stat-label` d'une carte de fiche | 4,39:1 **sous AA** | **5,10:1** |

  Le fond le plus défavorable rencontré est celui des `.badge-out` : **4,92:1**, soit une marge de
  0,42 au-dessus du seuil AA de 4,5:1 du texte courant. `--bleu-pale #e8eef7`, où `--gris` n'est rendu
  nulle part, donnerait 4,74:1 s'il venait à servir de fond à un micro-libellé.
- **[v3.7] Le vert n'a jamais été un contraste de texte.** L'item 8 de la v3.5 écrivait « le vert
  `#13845B` posé sur le fond de page est à 4,36:1 : même famille d'usage, à contrôler ». Le contrôle est
  fait et il conclut qu'**aucun texte de l'application n'est en `--vert`** : le jeton n'apparaît qu'à
  `css/style.css:505` (dégradé de la barre de progression, `linear-gradient(90deg, var(--vert),
  var(--vert-action))`) et dans le remplissage de `assets/icons/logo.svg`. Le chiffre 4,36:1 (4,69:1 sur
  blanc) restait donc exact comme calcul, mais ne décrivait aucun rendu. Ce qui compte ici est le
  contraste **non textuel** du graphe de la barre sur sa piste (`--bleu-pale`) : **4,02:1** pour
  `#13845B`, **5,67:1** pour `#0e6a49`, au-dessus des 3:1 exigés par WCAG 2.1 SC 1.4.11 pour un
  composant d'interface. Le texte vert, lui, est en `--vert-action #0e6a49` : 6,15:1 sur le fond de
  page, 5,84:1 sur `--vert-pale`.
- **[v3.7] Audit rendu complet.** Les seize états visibles des quatre pages ont été passés au crible
  (accueil ; bibliothèque, écran Programmes, fiche détaillée, mode mémorisation dans ses trois états ;
  liste de leçons vide de paramètre, quiz d'une leçon, formulaire rempli, écran de correction, liste
  des leçons de 6ᵉ ; tableau de bord, planificateur vide, planificateur avec deux tâches dont une
  passée, filtre « En retard ») : **0 paire sous le seuil**. Le cumulé des seize états donne
  **3 435 contrôles d'éléments porteurs de texte** (un même élément compté dans deux états l'est deux
  fois), console sans message, `style-src 'self'` sans exception. La recette de reproduction est au
  §12.2, le critère au §12.3 (item 18).

**[v3.6] `style-src`, sans aucune exception.** La CSP des quatre pages déclare, mot pour mot et à
l'identique :

```
default-src 'self'; script-src 'self'; style-src 'self'; img-src 'self';
font-src 'self'; connect-src 'none'; object-src 'none'; base-uri 'none'; form-action 'none'
```

`'unsafe-inline'` n'y figure plus : seules les feuilles de style du dépôt habillent l'application. Les
onze écritures de style en ligne que comptait le projet sont toutes converties.

| Où | Avant | Après |
|---|---|---|
| `index.html:61` | `<span style="width:62%">`, largeur d'une barre décorative de l'accueil | `class="progress progress-apercu"`, largeur en `css/style.css:509` |
| `js/app.js` (2 sites) | `style: 'margin:0;flex:1 1 240px'` sur un paragraphe, `style: 'width:' + pct + '%'` sur une barre | classes `col-souple sans-marge`, et `barreFiches.style.width = pct + '%'` |
| `js/quiz.js` (4 sites) | trois largeurs de barres et deux largeurs de colonnes en attributs `style` | classes `col-souple-etroite` et `col-pleine`, `barreScore.style.width = pct + '%'`, barre initiale à 0 par la feuille de style |
| `js/planning.js` (3 sites) | `flex:1 1 240px`, `margin:0`, `margin:10px 0 0` | classes `col-souple`, `sans-marge`, `marge-haute` |
| `js/fiches.js` (1 site) | `style: 'width:0%'` sur la barre du mode mémorisation | largeur initiale rendue inutile par `.progress > span { width: 0 }` (`css/style.css:500-506`) |

Six règles nouvelles, regroupées en `css/style.css:509-514` : `.progress-apercu`, `.col-souple`,
`.col-souple-etroite`, `.col-pleine`, `.sans-marge`, `.marge-haute`, plus le `width: 0` ajouté à
`.progress > span`. Les largeurs variables restent calculées en JavaScript, par l'API des styles
(`element.style.width`) : **la CSP ne filtre pas la CSSOM**, et ce point a été vérifié en navigateur
(barre du tableau de bord mesurée à 23 % = 96,7 px, barre de mémorisation à 27 % = 113,5 px, barre de
correction à 33 %), et non supposé.

Contrôles, rejoués le 20 octobre 2026 : `grep -o 'style="' index.html cours.html exercices.html
profil.html | wc -l` → **0** ; `grep -rn "style:" js/*.js` → **aucune ligne** ;
`grep -c "unsafe-inline" *.html` → **0** sur chacune des quatre pages ; les quatre pages ouvrent sans
un seul message dans la console.

**Un seul rendu change pour l'élève, et il est mesuré à 510 px de large** : le champ « Tâche de révision
» du planificateur gardait `flex:1 1 240px` même sous le point de rupture de 560 px, où la feuille de
style impose `.field { flex: 1 1 100% }`, parce qu'un attribut `style` prime sur une règle CSS. Avec la
classe `col-souple`, il suit désormais les deux autres champs du même formulaire — pleine largeur en
dessous de 560 px. C'est le corrigé d'une incohérence, pas une régression ; il est noté ici parce que la
règle du projet est de ne rien laisser croire identique quand ce ne l'est pas.

*(v3.5 — le texte remplacé, conservé pour l'audit.)* L'exception `style-src 'unsafe-inline'` ne couvrait
**qu'un seul** attribut `style="…"` de tout le markup : `index.html:61`. Elle était maintenue en v3.5
parce qu'aucune donnée utilisateur ne transitait par cet attribut ; son retrait était engagé au §15 item 9
et au §16 item 8 de la v3.5. **Son périmètre était sous-dit** : dix autres styles en ligne vivaient dans
les appels à `h()` (`style:` passé en props), que la phrase « un seul attribut de tout le projet »
occultait.

## 7. Architecture fonctionnelle

### 7.1 Pages livrées

*(Inchangé par rapport à la v3.3.)*

| Fichier | Rôle |
|---|---|
| `index.html` | accueil de présentation (sections A→F) + application ; charge le corpus de quiz |
| `cours.html` | bibliothèque de fiches et fiches détaillées |
| `exercices.html` | quiz par leçon, planificateur, écrans d'exercices ; charge le corpus de quiz |
| `profil.html` | tableau de bord, progression, réglages de mémorisation |

Les trois pages de travail portent `data-app="true"` sur `<body>` pour activer le noyau ; `index.html`
porte `data-app="false"` et ne charge les modules que pour lire ses compteurs. Aucune logique métier
n'est écrite dans les pages HTML.

### 7.2 Noyau

*(Inchangé, sauf le contrat d'interface de `js/progression.js`, en fin de section.)*

`js/app.js` crée le namespace global `window.JK` (objet littéral unique, `js/app.js:287-299`), le
routeur d'écrans `JK.go()`, l'accès au magasin local (`JK.read`, `JK.write`, `JK.clearAll`,
`JK.KEYS`, `JK.PREFIX`, `JK.storageAvailable`) et les cinq vues. Une vue est enregistrée par
`JK.registerView(nom, { render, … })` :

`dashboard` (déclaré dans `app.js`), `fiches` (`fiches.js`), `planning` (`planning.js`),
`programmes` (`programmes.js`), `quiz` (`quiz.js`).

Surface publique réellement exportée par le noyau, à ne pas deviner : `h`, `add`, `section`, `KEYS`,
`PREFIX`, `read`, `write`, `clearAll`, `formatDate`, `registerView`, `onChange`, `refresh`, `go`,
`hebergeIci`, `changerDePage`, `allezAuQuiz`, `PAGE_DES_VUES`, `params`, `storageAvailable`, `lecon`,
`registreDeProgramme`, `PROGRAMME_REGISTRES`, `CODE_CLASSE`, `toutesLesLecons()` et l'accesseur
`LECONS`. Les modules de données ajoutent les leurs : `JK.FICHES`, `JK.openFiche`, `JK.memorisation`,
`JK.QUIZ_LECONS`, `JK.quizDeLecon`, `JK.quizDe`, `JK.nbQuizRediges`, `JK.PROGRAMMES`, et
`js/progression.js` ajoute `JK.progression` (§8.4).

Ordre de chargement : `js/app.js` d'abord — il crée `window.JK` — puis `js/progression.js`, qui n'utilise
que des fonctions déjà exportées. Les deux sont déclarés sur les quatre pages, avant les fichiers de
données ; un module jamais chargé par une page est invisible pour l'élève.

Règles de rendu qui ont corrigé des bugs réels et restent obligatoires :

- Le rendu d'une vue est **asynchrone** : on ne teste pas le DOM juste après `JK.go()`.
- Le composant `h(tag, props, ...enfants)` est le seul constructeur de DOM autorisé.
- `Element.append()` convertit un enfant `null` en texte littéral « null » : **tout rendu qui peut
  produire des enfants conditionnels doit les passer par `.filter(Boolean)`** avant insertion.
- **[v3.6]** Aucun style en ligne : ni attribut `style="…"` dans les quatre pages, ni prop `style` passée
  à `h()`. La CSP déclare `style-src 'self'` sans `'unsafe-inline'` (§6) ; une mise en page nouvelle passe
  par une classe de `css/style.css`, et une valeur calculée (une largeur de barre) par l'API des styles,
  `element.style.width`, sur un élément créé sans prop `style`.

**[v3.5] Contrat d'interface de `js/progression.js`.** Le §16 item 7 annonce que le module est « fait
pour être remplacé sans toucher aux écrans qui le lisent ». Cette affirmation devient vérifiable, mais
le contrat est **celui du code**, relevé le 20 octobre 2026 dans `js/progression.js:73-76`, et non un
contrat idéal : l'objet exporté expose **deux constantes et huit fonctions**, et aucune fonction nommée
`delaiRevue` n'existe.

| Export | Signature réelle | Retourne | Appelée par |
|---|---|---|---|
| `JOURS_SANS_FAUTE` / `JOURS_AVEC_ERREUR` | constantes `7` et `2` | — | `js/app.js:223-226`, `js/quiz.js:384` |
| `calculerRevue(score, total, date)` | 3 arguments | chaîne ISO, ou `null` si date invalide | `js/quiz.js:317` |
| `carte()` | aucun | l'objet `scores` du stockage | interne (`aRevoir`, `nbTentatives`) — aucune vue ne l'appelle |
| `dateDeRevue(entree)` | 1 argument | chaîne ISO, ou `null` | `js/quiz.js:369` |
| `estDue(entree)` | 1 argument | booléen | `js/quiz.js:142`, `js/quiz.js:203` |
| `aRevoir()` | aucun | **tableau trié** de `{ id, entree, revue }` | `js/app.js:205`, `js/landing.js:28` |
| `nbTentatives()` | aucun | entier | `js/app.js:218` |
| `titreDe(id)` | 1 argument | chaîne (titre du registre, puis de la fiche, puis l'identifiant) | `js/app.js:230` |
| `reprendre()` | aucun | l'entrée `lastScore`, ou `null` | `js/landing.js:35` |

Les trois écrans consommateurs (`js/quiz.js`, `js/app.js`, `js/landing.js`) n'appellent que ces dix
noms ; aucun ne dépend d'une structure interne au module. Un remplaçant — par exemple le calendrier
adaptatif du §16 item 7 — doit fournir ces dix signatures et rien de plus. **Attention à `aRevoir`** :
son retour est un tableau, pas un booléen ; `js/landing.js:28` en lit `.length` et `js/app.js:205` en
lit les éléments. Contrôle :

```
grep -rhoE "JK\.progression\.[A-Za-zÀ-ÿ_]+|progression\.[A-Za-zÀ-ÿ_]+" js/*.js | sort -u
```

**Attendu le 20 octobre 2026 : dix lignes.** Ce sont les dix exports du tableau, à une exception près —
`carte`, que l'extérieur n'appelle jamais (elle sert uniquement au module, via `aRevoir` et `nbTentatives`) —,
`reprendre` n'apparaissant que sous sa forme raccourcie `progression.reprendre`, et `aRevoir`
apparaissant deux fois (`JK.progression.aRevoir` dans `app.js:205`, `progression.aRevoir` dans
`landing.js:28`, la variable locale de `js/landing.js:27`). Toute ligne ajoutée par un remplacement est
un nom hors contrat, et doit donc être écrite dans ce §7.2 avant d'être codée.

### 7.3 Fichiers de données

*(Inchangé par rapport à la v3.3.)*

| Fichier | Contenu |
|---|---|
| `js/programmes/<matiere>.js` | registre déclaratif des leçons (1 fichier par matière) |
| `js/fiches.js` | 53 fiches, `JK.FICHES` |
| `js/quiz/<matiere>-<classe>[-<n>].js` | questions de quiz, autant de fichiers que nécessaire |
| `js/quiz-lecons.js` | agrégateur : fabrique `JK.QUIZ_LECONS` et les identifiants de question |
| `js/quiz.js` | écran quiz, correction, score |
| `js/programmes.js` | écran Programmes, libellés de provenance |

## 8. Modèle de données

### 8.1 Registre de programme — la source de vérité

*(Inchangé.)*

Une matière déclare un seul objet :

```js
JK.registreDeProgramme({
  matiere: 'Géographie', code: 'geo',
  autorite: 'programme_officiel',            // ou fascicule_pedagogique | progression_harmonisee | sans_source
  reference: 'Programme officiel de géographie, Sénégal, 2004',
  DOCUMENTS: ['...'],                        // ou url + consulteLe
  SOURCE: 'note de méthode et réserves',
  CLASSES: [{ niveau: '6ᵉ', chapitres: [...] }]
});
```

`js/app.js` fabrique l'identifiant de chaque leçon à l'enregistrement (`js/app.js:268-285`) :

```
<codeMatiere>-<codeClasse>-c<chapitre>-l<leçon>      ex. geo-6e-c1-l3
```

avec `CODE_CLASSE` = `6e, 5e, 4e, 3e, seconde, premiere, terminale`. **Conséquence contractuelle :
l'identifiant est un index de position, pas un hash.** Retirer ou réordonner une leçon dans un
registre décale les identifiants qui suivent et casse les quiz déjà écrits. Toute modification de
registre doit donc être suivie de `verifier-quiz.js`, qui signale les quiz devenus orphelins.

### 8.2 Quiz

*(Inchangé.)*

Une leçon = un quiz = **3 questions** (convention contrôlée). Une question = exactement quatre
champs, et pas d'autre :

| Champ | Contrat |
|---|---|
| `enonce` | chaîne non vide, se termine par « ? », une seule idée |
| `options` | 4 chaînes non vides, deux à deux distinctes, même construction grammaticale que la bonne réponse |
| `correct` | entier 0, 1, 2 ou 3 (index dans `options`, numérotation à partir de 0) |
| `explication` | ≥ 20 caractères, dit pourquoi, et ne désigne jamais une option par sa place |

`js/quiz-lecons.js` **concatène** les déclarations sans dédupliquer et fabrique
`q.id = idLecon + '-q' + n`. Une leçon du registre sans déclaration de quiz affiche
« Quiz en cours de rédaction » ; l'application ne simule jamais un quiz inexistant (contrainte 5).

### 8.3 Mémorisation et stockage

*(Inchangé.)*

Préfixe unique `JK.PREFIX = 'jangalekat.v1.'`. Cinq clés, et une seule :
`JK.KEYS = { studied, tasks, lastScore, recall, scores }` (`js/app.js:7`). Le `localStorage` ne contient
que des données de démonstration locales : aucun identifiant, aucun mot de passe, aucun jeton.

`JK.storageAvailable` est évalué au démarrage par une sonde (`setItem` puis `removeItem`). Quand elle
échoue, `JK.read` rend sa valeur par défaut, `JK.write` rend `false`, et les trois pages de travail
(`cours.html`, `exercices.html`, `profil.html`) déclenchent l'élément `#storage-warning` : « Le
stockage local de ce navigateur n'est pas disponible. Vous pouvez tout de même utiliser
l'application, mais votre progression sera perdue à la fermeture de la page. » L'application reste
utilisable et n'affiche pas une progression qu'elle ne peut pas sauver.

### 8.4 Reprise et dates de revue (version 0.8, 18 octobre 2026)

*(Inchangé, sauf le renvoi au contrat du §7.2.)*

Trois informations nouvelles, toutes écrites **dans les clés qui existaient déjà** : le nombre de clés
sous `JK.PREFIX` reste cinq (§8.3).

| Donnée | Où | Écrite par | Lue par |
|---|---|---|---|
| `tentatives` (entier) | entrée `scores[idLecon]` | `js/quiz.js:312-322`, à la correction | note du tableau de bord (`js/app.js:218`), ligne de leçon de l'écran Quiz |
| `prochaineRevision` (ISO) | entrée `scores[idLecon]` | idem (`js/quiz.js:317`) | écran de correction (`js/quiz.js:369-386`), badge « À revoir le … » et puce « À revoir d'abord » (`js/quiz.js:203-216`), section « Leçons à revoir » du tableau de bord, compteur de l'accueil |
| `leconId` (identifiant permanent) | `lastScore` | idem | bouton « Reprendre » de l'accueil (`js/landing.js:35`) |

`js/progression.js` (module de 77 lignes, chargé après `js/app.js` sur les quatre pages) est le
seul endroit qui connaît la règle, en `js/progression.js:21-26` : quiz sans faute → revue conseillée
**7 jours** plus tard ; quiz avec au moins une erreur → **2 jours**. Le calcul part de minuit, pour que
« la date est atteinte » ne dépende pas de l'heure où le quiz a été passé. Une entrée enregistrée avant
cette règle n'a pas le champ : `dateDeRevue` le déduit de sa date de passage (`js/progression.js:34-37`)
au lieu de la compter comme « jamais revue ». Les dix exports publics et leur signature sont fixés au
§7.2 ; tout remplaçant doit s'y conformer.

Ce n'est pas un algorithme de mémorisation, c'est un délai fixe, choisi pour être explicable à un élève
de 6ᵉ en une phrase, et dit tel quel à l'écran. Deux écrans ajoutés le replacent dans le parcours : la
liste des leçons d'une classe peut être ordonnée « à revoir d'abord » sans perdre l'ordre du registre
(une puce, non un tri silencieux), et l'accueil propose de reprendre la dernière leçon quizée.

**Aucune de ces valeurs n'est stockée sans être affichée**, et `clearAll()` — le bouton « Effacer ma
progression locale » — les efface avec le reste. Stockage vide ou indisponible : compteur à `0`, bouton
« Reprendre » masqué, section « Leçons à revoir » qui dit qu'aucune leçon n'a encore atteint sa date ;
jamais un état qui laisserait croire à une progression inexistante (contrainte 5).

## 9. Exigences de contenu et politique d'honnêteté

**[v3.5]** *(modifié — §9.2 : les trois nombres de fiches sont nommés et reliés ; la ventilation
53 = 36 + 17 est explicitée et les 395 leçons sans fiche sont écrites)*

### 9.1 Quatre niveaux de provenance

*(Inchangé.)*

`autorite` prend l'une des quatre valeurs, rendue à l'écran Programmes par un libellé explicite :

| `autorite` | Ce que cela veut dire pour l'élève |
|---|---|
| `programme_officiel` | la liste des leçons est recopiée d'un arrêté / programme officiel sénégalais |
| `fascicule_pedagogique` | liste recopiée d'un document pédagogique institutionnel, pas d'un arrêté |
| `progression_harmonisee` | ordre et découpage issus d'une progression, pas d'un texte réglementaire |
| `sans_source` | contenu sans appui documentaire identifiable — libellé affiché : « aucune source officielle jointe : liste de démonstration » |

### 9.2 Situation par corps de contenu (20 octobre 2026)

Les cinq registres sont **entièrement dotés d'un quiz** : 539 leçons sur 539 (contrôle du §12.2,
20 octobre 2026). La table ci-dessous décrit la source de chaque liste de leçons, pas
l'avancement du corpus.

| Matière | Leçons | Source | Statut déclaré |
|---|---|---|---|
| Géographie | 133 | programme officiel de géographie, Sénégal, 2004 (PDF AUF / PURGES) | `programme_officiel` |
| SVT | 120 | programmes 2008 (cycle moyen) et 2015 (second cycle), MEN / IGEN, vrais PDF | `programme_officiel` |
| Mathématiques | 135 | Programmes APAMS octobre 2006 (premier cycle 6ᵉ/4ᵉ/3ᵉ, second cycle Seconde S, Premières et Terminales S2-S4) ; *Guide d'usage des programmes – Mathématiques* (DEMSG, septembre 2012), qui ne couvre **que 6ᵉ → 3ᵉ** | `programme_officiel` ; **la 5ᵉ est `fascicule_pedagogique`** (elle ne figure que dans le guide d'usage, pas dans un arrêté) |
| Physique-Chimie | 95 | Copies dactylographiées d'août 2008 sans page de garde ni autorité imprimée (UNESCO `unesdoc` ark:/48223/pf0000191124) ; titres de 4ᵉ et 3ᵉ recoupés avec le fascicule ADEM-Dakar v10.17 ; les rédacteurs de quiz s'appuient aussi sur le fascicule d'inspection IA Pikine-Guédiawaye / CDC de **février 2020** | `fascicule_pedagogique` |
| Histoire | 56 | **Aucune liste officielle d'intitulés obtenue.** Le découpage chronologique par classe, les nombres de leçons et les volumes horaires (22/37 h, 22/37 h, 24/48 h, 22/43 h, 25/48 h, 23/44 h, 19/38 h — 157 leçons) viennent des tableaux 1 et 2 de la revue **Akiri n° 5** (janvier 2024), qui cite le programme consolidé d'histoire (Sénégal / MEN / IGEN / CNHG, octobre 2006) ; la notice de ce programme est au catalogue UNESCO (`ark:/48223/pf0000191113`, 2004, 27 p.) mais l'exemplaire n'est **pas numérisé**. Les intitulés sont des repères rédigés par Jàngalekat dans l'ordre des périodes prescrites | `sans_source` — « aucune source officielle jointe : liste de démonstration », répété sur l'accueil |

**Complément du 21 octobre 2026 — Physique-Chimie.** Les 95 lignes relevées dans les copies de 2008 restent inchangées. Le registre inclut désormais 36 leçons complémentaires rédigées par Jàngalekat : 8 leçons de découverte en 6ᵉ, 8 en 5ᵉ et 4 dans chacune des cinq classes de 4ᵉ à Terminale. Leurs titres sont rangés sous des chapitres explicitement nommés « Compléments » ou « Parcours de découverte » ; ils ne sont ni attribués au fascicule ni présentés comme des leçons officielles. Les questions de ces 36 leçons sont également auto-rédigées et non relues par un enseignant.

**[v3.5] Ventilation des fiches.** Le corpus compte **53 fiches** (`js/fiches.js`, `JK.FICHES`), et trois
nombres circulent dans le document ; les voici nommés, mesurés le 20 octobre 2026 :

- **N₁ = 144 leçons reliées à une fiche.** Une leçon du registre porte alors un second argument
  `lecon(titre, idFiche)` ; c'est un compte de **leçons**, pas de fiches (une même fiche peut couvrir
  plusieurs leçons — les leçons A, B, C, D de géographie 6ᵉ partagent `milieu-proche-6e`) ;
- **36 fiches distinctes** mobilisées par au moins une leçon (dédoublonnage de N₁) ;
- **17 fiches autonomes**, dites « supports hors registre », chacune portant son propre quiz et comptée
  comme support au §14.

**36 + 17 = 53** : c'est la seule somme qui a un sens. `144 + 17` ne vaut rien, parce que 144 compte des
leçons. Commandes de contrôle au §12.2 et §13.4.

Conséquence pour l'élève : **539 − 144 = 395 leçons n'ont pas de fiche** et affichent le badge
« Pas encore de fiche ». Ce n'est pas une simulation : le badge dit vrai (contrainte 5). C'est une
limite éditoriale déclarée au §15, item 7.

Réserves écrites dans les registres eux-mêmes : physique-chimie **6ᵉ et 5ᵉ absentes faute de
document** (le corpus ne couvre que 4ᵉ → Terminale, série S/S1/S2) ; recoupement du 20 octobre 2026,
le dépôt institutionnel SENPROF publie des fascicules ADEM de physique-chimie pour 4ᵉ et 3ᵉ alors
qu'il publie maths, SVT et français de 6ᵉ à 3ᵉ ; mathématiques lycée = titres
sans ordre annuel imposé, coquilles relevées, doublon « Consolidation » en Seconde ; SVT 5ᵉ et
fiches issues d'un relevé dont la pagination est parfois coupée ; **histoire = liste de repères, pas
un cahier de textes**, à confirmer classe par classe par un professeur.

### 9.3 Questions : ce qu'elles sont et ce qu'elles ne sont pas

*(Inchangé.)*

Les intitulés et l'ordre des leçons viennent des documents sources. **Les énoncés, options et
explications sont des contenus de démonstration rédigés par un modèle, à partir de ces intitulés et
des fiches ; aucun n'a été relu par un enseignant.** Ce texte figure dans l'en-tête de provenance de
chaque fichier de quiz et dans l'avertissement de l'écran classe.

Interdits absolus dans un contenu livré : « question officielle », « sujet du BFEM », « tiré du
programme », ou toute formulation laissant croire qu'une source a vérifié le texte d'une question.
Les chiffres prudentiels prennent « environ » et une année ; ce qui dépasse le document source reste
qualitatif.

### 9.4 Contexte local

*(Inchangé.)*

Exemples sénégalais privilégiés dès que le programme le permet : paludisme, ascaridiase, choléra,
sols et roches du Sénégal, écosystèmes sahéliens et soudaniens, ressources géologiques, franc CFA,
échelle sur le terrain.

## 10. Règles rédactionnelles d'un fichier de quiz

**[v3.5]** *(modifié — ajout du constat de déséquilibre de la case 4 et de la règle de surveillance)*

- Une ligne = une leçon, dans l'ordre du registre, **une seule fois** par leçon.
- IIFE + `'use strict'`, structure copiée sur `js/quiz/geo-6e.js`.
- Équilibre anti-par-cœur : sur l'ensemble du fichier, la bonne réponse ne dépasse jamais **45 %**
  sur une même case (objectif ≈ 25 % par case) ; à l'intérieur d'une leçon, les 3 questions portent
  la bonne réponse sur **3 positions distinctes**.
- Distracteurs crédibles : confusions classiques d'élève (rayon/diamètre, périmètre/aire,
  complémentaires/supplémentaires), jamais d'absurdité.
- Aucun calcul publié sans vérification arithmétique autonome.

**[v3.5] Répartition effective des positions.** Sur les 1668 questions livrées au 20 octobre 2026
(rubrique « position de la bonne réponse » de `verifier-quiz.js`) :

| Position | Nombre | Part |
|---|---|---|
| 1 | 434 | 26,0 % |
| 2 | 443 | 26,6 % |
| 3 | 413 | 24,8 % |
| 4 | 378 | 22,7 % |
| **Total** | **1668** | 100 % |

Le plafond de 45 % est respecté (maximum 26,6 %). La case 4 est cependant sous-représentée à 22,7 %,
soit **65 questions de moins** que la case 2 (443 − 378 = 65, c'est-à-dire 3,9 points d'écart). L'écart
reste dans les clous, mais il s'accentuerait si la production continuait sur la même pente : **règle de
surveillance — tant que la case 4 reste sous 24 %, toute nouvelle fournée de questions doit placer la
bonne réponse en case 4 en priorité.** Contrôle au §12.2.

### Liste blanche de caractères

*(Inchangé.)*

Le corpus est en français. Un contrôle refuse tout signe hors de ces neuf intervalles :
`U+0020–007E`, `U+00A0–00FF`, `U+0100–017F`, `U+0370–03FF` (grec), `U+1D00–1D7F`, `U+2000–20CF`,
`U+2110–214F`, `U+2190–21FF`, `U+2200–22FF`.

En pratique : apostrophe typographique `’` (jamais l'apostrophe droite ASCII), accents français,
« », `° ± ² ³ µ`, `−` (U+2212) et `-` ASCII acceptés tous deux, aucun emoji, aucun cyrillique,
arabe ou CJK, aucun antislash. Relevé du 20 octobre 2026 sur l'ensemble des données (53 fichiers de
quiz, 53 fiches, 5 registres) : **103 signes non ASCII distincts**, aucun hors liste.

Piège relevé en production : la notation ordinale `1ᵉʳ` est **refusée** (le `ʳ` est U+02B3, hors liste) ;
il faut écrire `1er` ou « premier ». Il a mordu le 18 octobre 2026 : un `1ʳᵉ` restait dans une
correction d'exercice de `js/fiches.js`, que le contrôle ne lisait pas — il ne scrutait que les
questions. `verifier-quiz.js` balaie depuis `js/fiches.js` et les cinq registres, et le texte fautif
a été récrit en « une première puis une seconde boule ».

## 11. Chaîne de production des quiz

**[v3.5]** *(modifié — ajout du point 8 sur le contrôle des liens de fiche, hors `verifier-quiz.js`)*

1. `lit-registres.js` → `lecons.json` : la liste des leçons du programme, avec identifiants.
2. `brief-matiere.js "<Matière>" <code>` → `quiz-bureau/<code>/<classe>.json` : le **cahier** remis à
   un rédacteur (identifiants, intitulés officiels, chapitres, questions existantes à reprendre).
3. Le rédacteur écrit dans le dossier de travail, jamais directement dans le dépôt.
4. `check-quiz.js <fichier>` : contrôle bloquant sur forme, identifiants, positions et caractères.
5. `cp` du fichier validé vers `js/quiz/` (jamais de redirection `>`), puis suppression du temporaire.
6. `ajoute-quiz.js` : déclare tous les fichiers de `js/quiz/` dans `index.html` et `exercices.html`
   (idempotent, ordre lexicographique).
7. `verifier-quiz.js` : contrôle global du corpus, y compris les orphelins de quiz. **Ne vérifie pas**
   que le second argument de `lecon()` pointe sur une fiche existante — angle mort décrit au §13.3.
8. **[v3.5]** `verifie-liens-de-fiches.js` (atelier,
   `C:\Users\papad\Documents\Qoder\2026-10-15\c4cf98ee`) : comble ce trou. Le script charge les cinq
   registres et `js/fiches.js` dans Node avec un `JK` factice, puis vérifie que tout `l.f` non nul
   résout une fiche de `JK.FICHES`, et que aucune fiche n'est déclarée deux fois. Sortie du 20 octobre
   2026 : `leçons : 539 · reliées à une fiche : 144 · lien cassé : 0`, `fiches déclarées : 53`,
   `fiches jamais citées par un registre : 17`, code de sortie 0. Il n'est pas chargé par le navigateur
   et ne voyage pas avec le dépôt.

Trois garde-fous récents du vérificateur global, issus d'accidents réels :

- **Le non-destructif.** Un outil de pilotage lancé sans argument ne doit jamais vider les balises
  `<script>` des pages. `ajoute-programmes.js` auto-scanne désormais `js/programmes/` et échoue si la
  liste est vide.
- **Le doublon fiche/leçon.** Une question déposée sous un identifiant de fiche (`fiche-*`) devient
  inaccessible dès que cette fiche est référencée par une leçon du registre. Le vérificateur signale
  maintenant les deux cas ; cinq groupes concernés ont été traités (quatre doublons retirés, un
  groupe unique sauvé en dé-liant la fiche de sa leçon). Le 20 octobre 2026, douze questions posées sur
  quatre fiches d'histoire ont été **rattachées sans réécriture** à leur leçon du nouveau registre
  (`fiche-premieres-civilisations` → `histoire-6e-c2-l1`, et les trois mêmes passages), ce qui ramène
  les supports autonomes de 21 à 17.
- **La provenance avant la complétion.** Un rédacteur de quiz reçoit un cahier et le texte du document
  source ; si une notion dépasse ce que le document indique, il écrit une question plus simple sur la
  même leçon plutôt que d'inventer un fait. Un registre sans document officiel est déclaré
  `sans_source` et l'écran le dit, au lieu de laisser croire à une liste institutionnelle.

## 12. Contrôle et critères d'acceptation

**[v3.5]** *(modifié — §12.1 : chemin unique ; §12.2 : une commande par grandeur citée ; §12.3 : critères 13 à 16)*

### 12.1 Lancer l'application

**[v3.5]** *(modifié — chemin unifié avec le §17, et correction : `serve-test.js` est à l'atelier)*

Le projet vit dans un seul dossier, cité de la même façon partout dans ce document :

```
C:\Users\papad\OneDrive\Documents\Jangalekat
```

C'est ce dossier qui est copié au §17, et c'est depuis lui que s'exécutent les commandes de contrôle.
Le chemin `C:/Users/papad/Documents/Qoder/2026-10-15/c4cf98ee` n'est plus qu'un **dossier d'atelier**
(outils de production, sources téléchargées) ; il n'est cité que là où le fichier visé s'y trouve
réellement, c'est-à-dire au §11 point 8 et ci-dessous pour le serveur de test.

**Mode réel et suffisant** : double-clic sur `index.html`. L'application fonctionne en `file://`, sans
serveur ; c'est le mode sur lequel le prototype est vérifié.

Mode alternatif, pour un navigateur qui se comporterait mal en `file://` ou pour tester depuis un autre
poste du réseau local. Le serveur statique de test n'est **pas** livré avec le dépôt :

```
cd C:/Users/papad/Documents/Qoder/2026-10-15/c4cf98ee
ELECTRON_RUN_AS_NODE=1 "C:/Users/papad/AppData/Local/Programs/Qoder/Qoder.exe" serve-test.js
# puis http://localhost:8123
```

`python -m http.server 8000` fait jeu égal si Python est installé sur le poste ; sur le poste de
développement actuel il ne l'est pas, d'où le script ci-dessus.

### 12.2 Scripts de contrôle

Node n'est pas installé sur ce poste ; les scripts s'exécutent avec le binaire Electron de Qoder :

```
cd C:/Users/papad/OneDrive/Documents/Jangalekat
ELECTRON_RUN_AS_NODE=1 "C:/Users/papad/AppData/Local/Programs/Qoder/Qoder.exe" <script.js> [args]
```

| Script | Où | Vérifie | Sortie attendue |
|---|---|---|---|
| `verifier-quiz.js` | **dans le dépôt livré** (aucun `require` externe, jamais chargé par le navigateur) | cohérence **registre ↔ quiz** (la cohérence avec les fiches n'est **pas** couverte, voir §13.3), couverture, orphelins, positions, liste blanche de caractères sur les questions **et** sur `js/fiches.js` + les cinq registres, déclaration des fichiers dans les pages | `Aucun problème bloquant.` et code de sortie 0 |
| `verifie-liens-de-fiches.js` | atelier | liens `leçon → fiche` : l'angle mort du script précédent | `Aucun lien de fiche cassé.` et code de sortie 0 |
| `audit-contrastes.js` | atelier, **s'exécute dans la page** (coller sa fonction dans la console ou dans `evaluate_script`, puis `window.__audit()`) | contraste WCAG 2.1 **rendu** : lit les couleurs calculées de chaque élément porteur de texte visible, remonte l'héritage du fond, applique 4,5:1 au texte courant et 3:1 au grand texte (≥ 24 px, ou ≥ 18,66 px en gras) | `{ "sousLeSeuil": 0 }` sur chacun des seize états relevés au §6 |
| `check-quiz.js` | atelier | un seul fichier de quiz, forme stricte | `conforme.` puis `Tous les fichiers contrôlés sont conformes.` |
| `lit-registres.js` | atelier | les registres se chargent et produisent `lecons.json` | nombre de leçons par classe |
| `brief-matiere.js` | atelier | fabrique le cahier d'un rédacteur | leçons et questions à reprendre par classe |
| `ajoute-quiz.js`, `ajoute-programmes.js` | atelier | déclare les scripts dans les pages | nombre de fichiers déclarés |

**[v3.5] Commandes de mesure, une par grandeur citée.** Ces commandes produisent les chiffres du
document ; aucune n'est facultative, et elles tiennent lieu de preuve à chaque livraison.

| Grandeur | Commande (depuis le dépôt) | Renvoie | Cité au |
|---|---|---|---|
| Fichiers du périmètre P1 | `find . -type f \( -name "*.html" -o -name "*.css" -o -name "*.js" -o -path "./assets/*" \) -not -name "verifier-quiz.js" \| wc -l` | **73** | annexe A |
| Fichiers du dépôt livré (P2) | même commande, en réintégrant `verifier-quiz.js` et les trois `.md` | **77** | annexe A |
| Fichiers du dépôt total (P3) | `find . -type f \| wc -l` | **77** | §14 |
| Lignes de `css/style.css` | `wc -l css/style.css` | un entier, **cité une seule fois dans le document : au §14** | §14 |
| Lignes de `js/progression.js` | `wc -l js/progression.js` | **77** | §8.4 |
| Leçons totales | `verifier-quiz.js` | **539** | §14 |
| Leçons couvertes par un quiz | idem | **539/539** | §14 |
| Leçons dotées d'une fiche (N₁) | console de `cours.html` : `JK.toutesLesLecons().filter(l => l.f).length` | **144** | §2, §9.2 |
| Fiches distinctes utilisées par ≥ 1 leçon | `[...new Set(JK.toutesLesLecons().filter(l => l.f).map(l => l.f))].length` | **36** | §9.2 |
| Fiches autonomes | `verifier-quiz.js`, rubrique « hors registre » | **17** | §9.2, §14 |
| Liens de fiche cassés | `JK.toutesLesLecons().filter(l => l.f && !JK.FICHES.some(f => f.id === l.f)).length` | **0** | §13.3 |
| Positions des bonnes réponses | `verifier-quiz.js` | **434 / 443 / 413 / 378** | §10 |
| Points d'injection de HTML | `grep -rnE "innerHTML\|outerHTML\|insertAdjacentHTML\|document\.write\|eval(" *.html js/ \| wc -l` | **0** | §13.2 |
| CSP déclarée | `grep -c "Content-Security-Policy" index.html cours.html exercices.html profil.html` | **1** sur chacune des 4 pages | §13.2 |
| Attributs `style="` dans le markup | `grep -o 'style="' index.html cours.html exercices.html profil.html \| wc -l` | **0** | §6 |
| Styles en ligne passés à `h()` | `grep -rn "style:" js/*.js \| wc -l` | **0** | §6 |
| Exception `'unsafe-inline'` | `grep -c "unsafe-inline" index.html cours.html exercices.html profil.html` | **0** sur chacune des 4 pages | §6 |
| **[v3.7]** Usages texte du gris | `grep -c "color: var(--gris)" css/style.css` | **12** règles — c'est tout le périmètre concerné par le correctif de contraste | §6 |
| **[v3.7]** Valeur du jeton | `grep -n "^  --gris" css/style.css` | `--gris: #586A82;` en `css/style.css:31` | §6 |
| **[v3.7]** Ancienne valeur restée dans le code | `grep -rn "64748B" css/ js/ *.html \| wc -l` | **0** (les deux `.md` d'archive la citent encore, le code non) | §6 |
| **[v3.7]** Texte en `--vert` | `grep -rn "color: var(--vert)" css/style.css \| wc -l` | **0** : le jeton n'habille que le dégradé de barre (`css/style.css:505`) et `assets/icons/logo.svg` | §6 |
| Appels au contrat de progression | `grep -rhoE "JK\.progression\.[A-Za-zÀ-ÿ_]+\|progression\.[A-Za-zÀ-ÿ_]+" js/*.js \| sort -u` | les 10 exports du §7.2, **`carte` en moins** (exportée mais appelée uniquement par `aRevoir` et `nbTentatives` à l'intérieur du module) | §7.2 |
| URL distante dans HTML/CSS | `grep -n "http" *.html css/style.css \| grep -v http-equiv \| wc -l` | **0** | §3 |

### 12.3 Critères d'acceptation mesurables

**[v3.5]** *(modifié — ajout des critères 13 à 16)*
**[v3.6]** *(critère 17 ajouté : CSP sans exception de style en ligne)*
**[v3.7]** *(critère 18 ajouté : contraste AA vérifié en rendu, plus sur calcul)*

1. Quatre pages ouvrables en `file://`, aucune erreur dans la console, aucun aller-retour réseau
   (audit `http(s)` sur HTML/CSS = vide).
2. Aucun défilement horizontal à 360 px ; navigation clavier complète ; focus visible.
3. Toute leçon d'un registre est atteignable depuis l'écran Programmes avec son intitulé officiel et
   le libellé de statut de sa matière.
4. Le nombre de questions par leçon est 3 pour toute leçon dotée d'un quiz ; `verifier-quiz.js` ne
   remonte aucune alerte de convention.
5. La bonne réponse n'excède 45 % sur aucune position, globalement et par fichier.
6. Une leçon sans quiz affiche « Quiz en cours de rédaction » — jamais un quiz vide ou simulé.
7. Chaque écran qui montre du contenu auto-rédigé en indique la provenance.
8. `localStorage` : cinq clés sous un préfixe, aucun secret.
9. Le dépôt livré ne contient ni `package.json`, ni `node_modules`, ni build.
10. Les quatre pages déclarent la même CSP et aucune n'exécute de script en ligne ; le Gestionnaire
    réseau du navigateur ne montre aucun appel sortant au chargement (§13.4).
11. Toute donnée écrite dans le stockage est lue quelque part : les trois champs du §8.4 apparaissent
    sur l'écran de correction, sur la liste des leçons, sur le tableau de bord et sur l'accueil — et
    disparaissent avec `clearAll()`.
12. Stockage vidé, l'accueil et le tableau de bord restent neutres : compteur « leçons à revoir » à `0`,
    bouton « Reprendre » masqué, section de revue qui invite à faire un quiz plutôt que de prétexter une
    reprise.
13. **[v3.5]** Les trois périmètres de fichiers (P1, P2, P3) sont distingués partout où un nombre de
    fichiers est cité ; l'annexe A fait foi, et `find` la reproduit.
14. **[v3.5]** Le compte de lignes de `css/style.css` n'apparaît qu'au §14, et `wc -l` le reproduit.
15. **[v3.5]** Une leçon sans fiche affiche « Pas encore de fiche » ; le taux 144/539 (27 %) est rappelé
    au §2 et au §15 ; les trois nombres 53 = 36 + 17 sont cohérents avec §9.2.
16. **[v3.5]** Tout remplaçant de `js/progression.js` n'exporte que les dix noms du §7.2 ; la commande
    `grep` du §12.2 ne renvoie que ceux-là.
17. **[v3.6]** `style-src 'self'` est déclaré sans `'unsafe-inline'` sur les quatre pages, et les deux
    commandes du §12.2 sur les styles en ligne (`grep -o 'style="' …`, `grep -rn "style:" js/*.js`)
    rendent vide ; les quatre pages ouvrent sans message en console.
18. **[v3.7]** Aucun texte rendu de l'application n'est sous le seuil AA de son fond : l'audit rendu
    `audit-contrastes.js`, joué sur les seize états listés au §6, rend `"sousLeSeuil": 0` partout, et le
    rapport le plus bas mesuré sur un texte est **4,92:1** (`.badge.badge-out`, jusqu'à 428 occurrences
    à l'écran Programmes). Les chiffres de contraste du §6 sont des relevés de navigateur, pas des
    calculs sur des paires de hexadécimaux.

## 13. Sécurité

**[v3.5]** *(modifié — §13.2 : la ligne CSP renvoie au §6 pour `'unsafe-inline'` ; §13.3 : le contrôle des
liens de fiche est chiffré et sa commande corrigée ; §13.4 : commandes actualisées)*
**[v3.6]** *(§13.2 : la ligne CSP passe à `style-src 'self'` sans exception ; §13.4 : deux commandes de
plus, attendu changé)*

### 13.1 Ce qu'il n'y a pas à protéger, et ce qu'il y a

*(Inchangé.)*

Il n'y a ni serveur, ni base, ni session, ni compte, ni paiement. Les risques classiques d'un site
(injection SQL, fuite de base, session détournée, élévation de privilèges) n'ont pas de support dans
ce projet : il n'y a rien à contourner côté serveur, parce qu'il n'y a pas de serveur. Trois risques
restent bien réels, et ce sont eux qui sont traités :

1. **exécuter du code à partir d'un fichier de données** — les 53 fichiers de quiz, les 53 fiches et
   les 5 registres sont du JavaScript chargé par la page : quiconque les édite a la main sur
   l'application ;
2. **casser la page par une URL mal formée** — un lien tapé à la main ou partagé dans un groupe
   d'élèves ;
3. **faire croire à une progression qui n'a pas été sauvée**.

### 13.2 Mesures en place

*(Inchangé, sauf le renvoi au §6 pour `style-src`.)*

| Mesure | Où | Effet |
|---|---|---|
| Tout le DOM est construit par `h()`, et tout le texte passe par `textContent` | `js/app.js:63-76` | une donnée ne peut pas devenir une balise |
| Aucun point d'injection : `innerHTML`, `outerHTML`, `insertAdjacentHTML`, `document.write`, `eval` | les **73 fichiers du périmètre P1** — 4 pages, `css/style.css`, `assets/icons/`, 9 modules de `js/`, 5 registres, 53 fichiers de quiz | **0 occurrence**, re-mesuré le 20 octobre 2026 après l'ajout du registre d'histoire et de ses sept fichiers de quiz (commande au §12.2) |
| Schémas d'adresse interdits sur `href`, `src`, `action`, `formaction` | `js/app.js:53-60` | `javascript:`, `vbscript:`, `livescript:`, `data:`, `file:` et `blob:` empêchent l'attribution de l'attribut ; les espaces et les caractères de commande des contournements classiques (un saut de ligne glissé au milieu de « javascript: ») sont retirés avant le test |
| Politique de sécurité de contenu déclarée dans les quatre pages | en-tête de chaque `.html`, contenu identique | `script-src 'self'` interdit tout script en ligne ; `connect-src 'none'` interdit `fetch`, `XMLHttpRequest` et WebSocket ; `object-src 'none'`, `base-uri 'none'`, `form-action 'none'` ; `style-src 'self'` **sans aucune exception depuis la v3.6** — plus aucun style en ligne ni dans le markup ni dans les appels à `h()` (§6) |
| Lien sortant vers une source | `js/programmes.js:64` | `target="_blank"` avec `rel="noopener"` : la page citée ne prend pas la main sur la fenêtre de l'élève |
| Ancre d'URL tolérante | `js/app.js` | une ancre mal échappée (`#%zz`) ne bloque plus le démarrage : la page tombe sur la vue par défaut au lieu de rester vide |
| Échec d'écriture rendu visible | `js/app.js:32-45` | stockage coupé en cours de route ou quota saturé : `write` rend `false` **et** le bandeau `#storage-warning` s'affiche |

Les deux dernières lignes sont des corrections du 18 octobre 2026 : avant elles, `cours.html#%zz`
laissait l'élève devant une page vide (une `URIError` interrompait tout le démarrage), et un `localStorage`
refusé par le navigateur après le chargement n'était plus signalé nulle part.

### 13.3 Limites, dites sans détour

**[v3.5]** *(modifié — le point sur les liens de fiche est chiffré et relié au §9.2 ; sa commande de
contrôle est corrigée : `JK.FICHES` est un tableau, `!JK.FICHES[l.f]` compterait 144 faux liens cassés)*

- **Le stockage local en `file://` n'est pas cloisonné.** Mesuré le 18 octobre 2026 : une page HTML
  posée dans un tout autre dossier du même disque, ouverte dans le même navigateur, lisait les trois
  clés `jangalekat.v1.*` de l'application. Tout document local ouvert dans ce navigateur peut donc
  lire et réécrire la progression de l'élève. C'est la raison pour laquelle la règle du client
  (§3, contrainte 4 — aucun mot de passe dans `localStorage`) n'est pas une formalité : sur ce
  projet, elle est nécessaire.
- **Les scores ne sont pas une preuve.** Un élève qui sait ouvrir la console peut écrire ce qu'il veut
  dans son stockage. Aucun enjeu : rien n'est noté, rien n'est transmis, le tableau de bord est un
  outil d'entraînement personnel.
- **Les fichiers de données sont la frontière de confiance, et ils sont du code.** La liste blanche de
  schémas empêche l'exécution, pas le mensonge : quelqu'un qui modifie `js/quiz/` peut y écrire un
  contenu faux. C'est ce que contrôlent `verifier-quiz.js` (§12.2) et les en-têtes de provenance (§9.3).
- **Angle mort de `verifier-quiz.js`, relevé le 20 octobre 2026.** Son lecteur de registres ne conserve
  pas le second argument de `lecon(...)` : un lien de fiche inventé ou cassé dans un registre n'est
  **jamais** signalé, alors qu'il affiche à l'écran un badge « Pas encore de fiche » trompeur. La
  vérification se fait donc à part — console de `cours.html` (§13.4) ou script d'atelier
  (`verifie-liens-de-fiches.js`, §11 point 8). **Mesuré le 20 octobre 2026, hors-ligne et dans le
  navigateur : 0 lien cassé sur 539 leçons, 144 leçons reliées à une fiche, 36 fiches distinctes
  mobilisées par ces leçons (dédoublonnage), 395 leçons sans fiche qui affichent le badge sans mentir,
  17 fiches jamais citées par un registre.**
- **Pas d'authentification, et c'est délibéré.** Un « espace élève » avec mot de passe, dans une
  application sans serveur, serait un placebo : la vérification tournerait sur la machine même de
  celui qui voudrait la contourner, et le secret devrait être stocké localement, ce que la contrainte 4
  interdit. La contrainte 5 interdit de le simuler. Une vraie connexion demande un serveur, du HTTPS et
  un hébergement : cela sort du cadre local et gratuit, c'est listé au §16 comme évolution, pas au §4
  comme promesse.
- **Pas de signature ni d'intégrité de ressource (SRI) :** il n'y a aucune ressource distante à
  vérifier, donc rien à signer.

### 13.4 Re-vérifier

**[v3.5]** *(modifié — motif en extended `grep -E`, l'ancien motif en basic regular expression
laissait le contrôle vide par construction ; chemins unifiés ; compteurs par périmètre)*
**[v3.6]** *(modifié — deux commandes de plus sur les styles en ligne ; attendus changés)*
**[v3.7]** *(modifié — deux commandes de plus sur les couleurs de texte ; attendu du compte de lignes
changé)*

```
cd C:/Users/papad/OneDrive/Documents/Jangalekat
grep -rnE "innerHTML|outerHTML|insertAdjacentHTML|document\.write|eval\(" *.html js/ | wc -l
grep -c "Content-Security-Policy" index.html cours.html exercices.html profil.html
grep -o 'style="' index.html cours.html exercices.html profil.html | wc -l
grep -rn "style:" js/*.js | wc -l
grep -c "unsafe-inline" index.html cours.html exercices.html profil.html
grep -c "color: var(--gris)" css/style.css
grep -rn "color: var(--vert)" css/style.css | wc -l
find . -type f \( -name "*.html" -o -name "*.css" -o -name "*.js" -o -path "./assets/*" \) -not -name "verifier-quiz.js" | wc -l
find . -type f | wc -l
wc -l css/style.css
ELECTRON_RUN_AS_NODE=1 "C:/Users/papad/AppData/Local/Programs/Qoder/Qoder.exe" verifier-quiz.js
```

Attendu, dans l'ordre : `0` (points d'injection), `1` sur chacune des quatre pages (CSP), `0` (plus aucun
attribut `style="…"` dans le markup), `0` (plus aucun style passé en props à `h()`), `0` sur chacune des
quatre pages (`'unsafe-inline'` retiré), **[v3.7]** `12` (règles de texte en `--gris`, périmètre exact du
correctif de contraste), **[v3.7]** `0` (aucun texte en `--vert` : le jeton n'habille que le dégradé de
barre et le logo), `73` (P1, annexe A), `77` (P3, §14), le compte de lignes du §14,
puis `Aucun problème bloquant.` et code de sortie 0.

Contrôle fonctionnel : ouvrir `cours.html#%zz` — les 53 cartes de la bibliothèque doivent s'afficher et
la console rester vide. Contrôle des liens de fiche, dans la console de `cours.html` :

```js
JK.toutesLesLecons().length                                                        // 539
JK.toutesLesLecons().filter(l => l.f).length                                       // 144
JK.toutesLesLecons().filter(l => !l.f).length                                      // 395
[...new Set(JK.toutesLesLecons().filter(l => l.f).map(l => l.f))].length           // 36
JK.toutesLesLecons().filter(l => l.f && !JK.FICHES.some(f => f.id === l.f)).length // 0
```

La dernière ligne doit impérativement employer `.some(...)` : `JK.FICHES` est un **tableau**, et
`!JK.FICHES[l.f]` rend `true` pour les 144 leçons reliées, ce qui ferait annoncer 144 liens cassés là
où il n'y en a aucun.

## 14. État de livraison au 20 octobre 2026

**[v3.5]** *(modifié — chaque ligne chiffrée renvoie à sa commande du §12.2 ; les trois périmètres sont
distingués ; le compte de lignes CSS est cité ici et ici seulement)*
**[v3.7]** *(modifié — poids et compte de lignes re-mesurés après la correction de contraste ; version du
prototype 0.11 ; une ligne « Accessibilité des couleurs » ajoutée)*

Mesuré par `verifier-quiz.js`, `verifie-liens-de-fiches.js`, `audit-contrastes.js` et les commandes du
§12.2 le 20 octobre 2026 (seuls ces contrôles font autorité ; ils se relancent en une commande, §13.4) :

| Indicateur | Valeur |
|---|---|
| Registres de programme | 5 — geo, histoire, maths, pc, svt |
| Leçons inscrites dans les registres | **575** (Géo 133 · Histoire 56 · Maths 135 · PC 131 · SVT 120) |
| Couverture en quiz | **575/575 — les cinq matières sont couvertes** (Géo 133/133 · Histoire 56/56 · Maths 135/135 · PC 131/131 · SVT 120/120) |
| Supports avec quiz | 575 leçons + 17 quiz de fiches hors registre = **592 supports · 1776 questions** |
| Supports par classe | Géo 6ᵉ 14 · 5ᵉ 26 · 4ᵉ 22 · 3ᵉ 10 · 2de 20 · 1re 23 · Tle 18 — Histoire 8 par classe, de 6ᵉ à Tle — Maths 6ᵉ 19 · 5ᵉ 12 · 4ᵉ 14 · 3ᵉ 13 · 2de 27 · 1re 41 · Tle 9 — PC 6ᵉ 8 · 5ᵉ 8 · 4ᵉ 16 · 3ᵉ 15 · 2de 29 · 1re 27 · Tle 28 — SVT 6ᵉ 12 · 5ᵉ 12 · 4ᵉ 13 · 3ᵉ 15 · 2de 10 · 1re 28 · Tle 30 — fiches hors registre 17 |
| Positions des bonnes réponses | 1→461 · 2→470 · 3→440 · 4→405 (max 26,5 %, plafond 45 %) |
| Fiches | **53 = 36** fiches distinctes utilisées par au moins une leçon (**144 leçons reliées**) **+ 17** fiches autonomes ; **431 leçons sans fiche** affichent « Pas encore de fiche » (§9.2) |
| Fichiers de quiz | 54, tous déclarés dans les deux pages qui exécutent le quiz (`index.html`, `exercices.html`) |
| Compteurs affichés à l'accueil | lus dans les données au runtime (53 · 592 · 1776 · 144), plus « leçons à revoir » lu dans le stockage de l'appareil ; jamais écrits à la main |
| Fichiers | **P1 = 74** (ce que le navigateur charge), **P2 = P3 = 78** (dépôt livré, rien d'autre : ni outil d'atelier ni PDF) — annexe A |
| Poids du dépôt | **1 987 234 octets** pour les 78 fichiers de P3 ; **1 837 541 o** pour les 74 fichiers de P1 (mesure au 21 octobre 2026, Mo = 10⁶ octets) |
| Contrôle global | `Aucun problème bloquant.` · code de sortie 0 ; liens de fiche : `Aucun lien de fiche cassé.` · code de sortie 0 |
| Sécurité | CSP identique dans les 4 pages, `style-src 'self'` **sans `'unsafe-inline'`** ; 0 point d'injection de HTML sur les 74 fichiers de P1 ; **0 attribut `style="…"` dans le markup et 0 style passé en props à `h()`** ; 3 garde-fous d'atelier (§11) |
| Reprise et dates de revue | `js/progression.js` (77 lignes) · 3 champs écrits dans `scores` et `lastScore` (§8.4) · 5 clés de stockage, pas une de plus · contrat d'interface à 10 noms (§7.2) |
| Version du prototype | **0.11** (bandeau de l'accueil, `index.html:40`) — le pied des pages de travail affiche la version du cahier client, pas celle du site |
| **[v3.7]** Accessibilité des couleurs | Audit **rendu** sur les seize états des quatre pages, 3 435 contrôles d'éléments porteurs de texte : **0 sous le seuil AA**, rapport le plus bas **4,92:1** (`.badge-out`). Un jeton modifié, `--gris` (`css/style.css:31`), douze règles concernées, aucun texte en `--vert` (§6) |
| Rendu vérifié en navigateur | `exercices.html?lecon=histoire-3e-c1-l1` en `file://` : les 3 questions de cette seule leçon, score 3/3, « Revue conseillée le 27 octobre 2026 : 7 jour(s) après ce quiz », console vide ; `cours.html#programmes` : 5 registres, 56 lignes d'histoire, badges « 8 repères · le programme prescrit 22 leçons et 37 h », filtre « Histoire » sur l'écran quiz = 8 leçons / 8 quiz ; `profil.html` : dernier quiz, compteurs et liste « Leçons à revoir » cohérents ; contrôle du 20 octobre 2026 sur les cinq matières (`pc-4e-c1-l1` corrigé → « Score de la leçon : 1 sur 3 » + 3 explications, `histoire-terminale-c2-l4` et `svt-terminale-c13-l1` rendus avec 3 questions) ; 0 lien de fiche cassé sur 539 leçons ; console sans erreur ni avertissement ; stockage vidé à la fin des tests : compteur à 0 et bouton « Reprendre » masqué. **[v3.6]** contrôle refait sous `style-src 'self'` sans aucune exception : les quatre pages ouvrées en `file://` **sans un seul message en console**, barre décorative de l'accueil à 62 % de son conteneur (260,7 px sur 420,5 px) sans attribut `style`, barre du tableau de bord à 23 % (96,7 px) après 12 fiches marquées étudiées, barre du mode mémorisation portée de 0 px à 113,5 px (27 %) par quatre clics « Je sais », barre de correction à 33 % après un score de 1/3, et les trois colonnes converties mesurées à `flex: 1 1 240px`, `1 1 220px`, `1 1 100%` — les largeurs calculées en JavaScript passent donc bien par la CSSOM, que la CSP ne filtre pas |

### Annexe A — Fichiers par périmètre (fait foi)

*(Issue de la revue du 20 octobre 2026, corrigée le 20 octobre 2026 : la commande de P1 doit couvrir
`css/style.css` et `assets/`, que sa première version excluait.)*

Trois périmètres, un seul chiffre par périmètre, produit par la commande indiquée :

| Périmètre | Définition | Commande (depuis le dépôt) | Valeur |
|---|---|---|---|
| **P1 — application** | tout fichier que le navigateur charge ou ouvre : 4 pages HTML, `css/style.css`, `assets/icons/logo.svg`, 9 modules de `js/`, 5 registres, 53 fichiers de quiz | `find . -type f \( -name "*.html" -o -name "*.css" -o -name "*.js" -o -path "./assets/*" \) -not -name "verifier-quiz.js" \| wc -l` | **73** |
| **P2 — dépôt livré** | P1 + `verifier-quiz.js` + la documentation (`README.md`, `PROMPT.md`, `CAHIER_DES_CHARGES.md`) | P1 + 1 + 3 | **77** |
| **P3 — dépôt total** | P2 + tout fichier résiduel (outils d'atelier, sources PDF éventuelles) | `find . -type f \| wc -l` | **77** |

P2 = P3 au 20 octobre 2026 : le dossier livré ne contient **ni** outil d'atelier **ni** source PDF, ce
qui est vérifié par `ls` à la racine (4 pages, `js/`, `css/`, `assets/`, 3 `.md`, `verifier-quiz.js`).
Toute citation d'un nombre de fichiers dans ce document doit porter son étiquette P1, P2 ou P3 ; les
chiffres sont à reproduire par la commande à chaque livraison, jamais par saisie.

## 15. Limites assumées

**[v3.5]** *(modifié — item 7 réécrit avec le taux de fiches, item 8 conservé, item 9 ajouté)*
**[v3.6]** *(item 9 clos par le retrait de `'unsafe-inline'`)*

1. **Histoire : registre déclaré, mais sans liste officielle.** Les seules sources exploitées (revue
   Akiri n° 5 de 2024, qui cite le programme consolidé IGEN / CNHG d'octobre 2006, et sa notice
   UNESCO de 27 p. non numérisée) donnent le découpage chronologique et des compteurs (6ᵉ 22 leçons/37 h,
   5ᵉ 22/37, 4ᵉ 24/48, 3ᵉ 22/43, 2ᵈᵉ 25/48, 1ʳᵉ 23/44, Tle 19/38 — 157 leçons) et non une liste
   d'intitulés. Le registre affiche donc 56 **repères rédigés par Jàngalekat**, statut
   `sans_source` explicite à l'écran Programmes et sur l'accueil : la liste n'est pas le cahier de
   textes du ministère et doit être confirmée par un professeur.
2. **Physique-chimie 6ᵉ et 5ᵉ absentes** : le document d'août 2008 ne couvre pas le cycle moyen pour
   cette matière. Écart écrit dans l'en-tête du registre. Recoupement ajouté le 20 octobre 2026 : le
   dépôt institutionnel SENPROF publie des fascicules ADEM de physique-chimie pour 4ᵉ et 3ᵉ, mais de
   maths, SVT et français de 6ᵉ à 3ᵉ — rien n'a donc été inventé pour ces deux niveaux.
3. **Mathématiques 5ᵉ** : liste issue du seul guide d'usage 2012, statut ravalé en
   `fascicule_pedagogique`.
4. **Les questions ne sont pas relues par un enseignant.** C'est le principal risque éditorial du
   projet, affiché à l'écran.
5. **Réforme PARC** : les programmes relevés sont antérieurs à la mise en œuvre PARC ; les intitulés
   peuvent avoir bougé. L'application ne prétend pas à l'exhaustivité réglementaire.
6. **Pas de synchronisation, pas d'installation hors-ligne, pas d'impression.**
7. **[v3.5] Fiches : 144 leçons sur 539 en ont une (27 %).** L'objectif n° 2 du §2 n'est donc que
   partiellement rempli : 395 leçons n'ont pas de fiche et affichent « Pas encore de fiche ». Ce n'est
   pas un quiz manquant (les 539/539 sont couvertes), c'est un **support de lecture** manquant. La
   ventilation 53 = 36 + 17 est celle du §9.2. Priorité de production : les fiches d'histoire et de
   physique-chimie (§16 item 6). Le corpus de quiz, lui, n'est plus incomplet : les 1668 questions sont
   rédigées, mais auto-rédigées — seule l'item 4 les fait passer d'un entraînement à une évaluation.
8. **Un détail d'accessibilité reste ouvert** : les micro-libellés en gris `#64748B` posés sur le fond
   de page sont à **4,43:1**, sous le seuil AA de 4,5:1 (4,76:1 sur les cartes blanches). Le correctif
   est une ligne de CSS (assombrir `--gris` ou ces usages précis), pas une refonte. Le vert `#13845B`
   posé sur le fond de page est à 4,36:1 : même famille d'usage, à contrôler lors du correctif.
9. *Item ouvert en v3.5, **clos en v3.6*** : `'unsafe-inline'` ne figure plus dans `style-src`. Les onze
   écritures de style en ligne du projet (une dans le markup, dix passées en props à `h()`) ont été
   converties — détail et mesures au §6, commandes au §12.2 et au §13.4. Ce qui reste à surveiller : les
   largeurs calculées s'écrivent désormais en JavaScript par la CSSOM (`element.style.width`), que la CSP
   ne filtre pas et ne filtrera pas. Un composant futur qui remettrait `h('span', { style: … })` ne
   serait donc pas bloqué par le navigateur ; c'est `grep -rn "style:" js/*.js` du §12.2, qui doit rendre
   une sortie vide, qui le signale.

## 16. Évolutions proposées, non engagées

**[v3.5]** *(modifié — item 6 chiffré, item 7 rendu vérifiable, item 8 ajouté)*
**[v3.6]** *(item 8 retiré de la liste : il est livré)*

Par ordre de rentabilité pour un usage scolaire réel :

1. **Relecture enseignant** d'un échantillon (une classe entière, une matière) et correction du
   libellé de provenance en conséquence. Sans elle, le projet reste un outil d'entraînement, pas
   d'évaluation.
2. Test d'usage avec 5 à 10 élèves sur téléphone, en `file://`, sur réseau réel.
3. Passer le registre d'histoire de `sans_source` à `programme_officiel` : obtenir le programme
   consolidé de 2006 en intégral (notice UNESCO `ark:/48223/pf0000191113`, exemplaire non numérisé) ou
   le cahier de textes d'un professeur, puis réaligner les 56 repères dessus.
4. PWA / service worker pour l'installation et un cache robuste, si l'on renonce au `file://`.
5. Publication HTTPS sur un hébergement gratuit, avec une copie locale toujours disponible.
6. **[v3.5]** Fiches de physique-chimie et d'histoire au niveau des fiches de géographie, pour réduire
   les 395 leçons sans fiche ; cible mesurable : **300 leçons reliées (56 %)** avant toute nouvelle
   matière, contrôle `JK.toutesLesLecons().filter(l => l.f).length` (§12.2).
7. **Espacement adaptatif** : la règle du §8.4 est un délai fixe — 7 ou 2 jours — calculé sur la dernière
   tentative seulement. Un vrai calendrier de révision pondérerait le score et le nombre de tentatives.
   Le module `js/progression.js` est fait pour être remplacé ; le contrat d'interface du §7.2 (dix noms,
   aucune dépendance interne) le rend vérifiable : la commande `grep` du §12.2 ne doit renvoyer que les
   noms de ce contrat, avant comme après le remplacement.
*Pour mémoire, hors liste :* l'item 8 proposé par la v3.5 — retirer `'unsafe-inline'` de `style-src` en
convertissant l'unique attribut `style="…"` de `index.html:61` — est **livré en v3.6**, et son périmètre
a été élargi au passage : ce ne sont pas un mais onze styles en ligne qu'il a fallu convertir (les dix
autres étaient passés en props à `h()` et la v3.5 ne les comptait pas). Détail au §6, commandes au §12.2
et au §13.4. Cette liste ne garde donc que ce qui n'est pas engagé.

## 17. Copier le projet sur un autre ordinateur

**[v3.5]** *(modifié — chemin unique, aligné sur le §12.1)*

Tout le projet tient dans un dossier, cité de la même façon qu'au §12.1 :

```
C:\Users\papad\OneDrive\Documents\Jangalekat
```

Copier **l'intégralité** de ce dossier sur l'autre poste, puis ouvrir `index.html`. Rien d'autre n'est
nécessaire pour faire fonctionner l'application : les outils de production de l'atelier
(`check-quiz.js`, `lit-registres.js`, `brief-matiere.js`, `ajoute-quiz.js`,
`verifie-liens-de-fiches.js`, `serve-test.js`, les sources PDF du dossier `programmes-sn/`) ne sont pas
des dépendances d'exécution. Seul `verifier-quiz.js` voyage avec le dépôt, parce que c'est le contrôle
d'intégrité du corpus ; il n'est jamais chargé par une page. Le périmètre exact de ce qui est copié est
**P2 = 77 fichiers** (annexe A).
