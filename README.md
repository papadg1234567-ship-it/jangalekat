# Jàngalekat — prototype local (phase 1)

Plateforme de révision pour les élèves du Sénégal : fiches par matière, quiz corrigés et
planificateur de révisions. 100 % local, sans serveur, sans bibliothèque externe, sans connexion
Internet une fois la page ouverte.

Cahier des charges de référence : **`CAHIER_DES_CHARGES.md`**, version 3.6 du 20 octobre 2026. Il
reprend à l'identique les six contraintes non négociables du cahier client version 1.0 du
17 octobre 2026 et y ajoute les spécifications techniques réellement en vigueur dans le code.

`PROMPT.md` reprend toutes les exigences du projet en un seul prompt réutilisable : contraintes
techniques, identité, pages, architecture du quiz par leçon, règles d'honnêteté et chiffres de contrôle.

## Ouvrir le prototype

Double-cliquez sur `index.html` : c'est la page d'accueil. Les boutons « Commencer à apprendre » et
les cartes de matières mènent aux trois pages de travail (`cours.html`, `exercices.html`,
`profil.html`). Aucune installation, aucune commande, aucun serveur n'est nécessaire.

> Sur certains navigateurs, l'ouverture en `file://` peut désactiver `localStorage`.
> Si le bandeau « stockage local indisponible » s'affiche, servez le dossier avec
> `python -m http.server` puis ouvrez `http://localhost:8000`.

## Ce que fait la version 0.10

La version 0.10 (20 octobre 2026) ne change rien à ce que voit l'élève, sauf un détail : elle durcit la
politique de sécurité. Les quatre pages déclarent désormais `style-src 'self'`, **sans** `'unsafe-inline'` :
plus aucun style en ligne, ni dans le markup (`index.html`), ni dans les appels à `h()` des quatre
modules qui en passaient (`app.js`, `quiz.js`, `planning.js`, `fiches.js`). Six classes les remplacent dans
`css/style.css`, et les largeurs de barres se règlent en JavaScript par l'API des styles, que la CSP ne
filtre pas — vérifié en navigateur sur les quatre pages, console vide. Le rendu qui change : sous 560 px,
le champ « Tâche de révision » du planificateur prend désormais la pleine largeur, comme les deux autres
champs du même formulaire, au lieu de rester bloqué à 240 px par un attribut `style`.

Quatre pages, une seule feuille de style, aucun framework. La version 0.9 (20 octobre 2026) déclarait un
cinquième registre de leçons : l'**histoire**, de la 6ᵉ à la Terminale — 56 repères, huit par classe,
chacun avec ses trois questions, soit 156 questions. Le statut affiché sous la liste est « aucune source
officielle jointe : liste de démonstration » : seul le découpage chronologique par classe, avec le
nombre de leçons et d'heures prescrits (22 leçons et 37 h en 6ᵉ … 19 leçons et 38 h en Terminale), est
documenté ; les intitulés sont rédigés par Jàngalekat dans l'ordre des périodes prescrites. L'écran
Programmes et l'accueil le disent en toutes lettres — la liste n'est pas présentée comme celle d'un
arrêté. Les quatre fiches d'histoire de la bibliothèque sont rattachées à leur leçon, et leurs douze
questions déjà rédigées ont été déplacées sans réécriture vers ces identifiants.

La version 0.8 du 18 octobre ajoutait la reprise et les dates de revue, sans créer une sixième clé de
stockage : `js/progression.js` (nouveau module, 77 lignes) calcule, pour chaque leçon déjà quizée, une
date de revue — 7 jours après un quiz sans faute, 2 jours après un quiz avec des erreurs — et l'écrit
dans l'entrée de cette leçon, avec le nombre de tentatives. Trois écrans lisent ces valeurs : l'écran de
correction (« Revue conseillée le … »), la liste des leçons d'une classe (badge « À revoir le … » et puce
« À revoir d'abord »), le tableau de bord (compteur et liste « Leçons à revoir ») et l'accueil (compteur
et bouton « Reprendre », qui rouvre la dernière leçon quizée). Stockage vide ou indisponible : compteur à
0, bouton masqué, et rien qui ressemblerait à une progression inventée.

La version 0.7 du même jour avait durci le noyau (garde-fous sur les adresses, une ancre mal échappée
ne casse plus la page, un échec de sauvegarde local s'affiche) et déclaré une politique de sécurité de
contenu dans les quatre pages — détail au §Sécurité.

| Page | Contenu |
| --- | --- |
| `index.html` | accueil : barre de navigation, titre « Ton avenir commence par un bon apprentissage. », cartes Collège et Lycée, cartes des quatre matières ouvertes, avantages, ressources et sources, pied de page. Les compteurs (fiches, questions, leçons reliées, leçons à revoir sur cet appareil) sont lus dans les fichiers de données et dans le stockage : ils ne sont pas écrits à la main. Bouton « Reprendre : <leçon> » uniquement s'il existe une leçon déjà quizée sur cet appareil |
| `cours.html` | bibliothèque de 53 fiches (recherche, filtres cycle / matière / classe, fiche détaillée, mode mémorisation) et listes de leçons des cinq programmes déclarés (Géographie, Histoire, Mathématiques, Physique-Chimie, SVT), avec leur statut de provenance |
| `exercices.html` | un quiz par leçon : on choisit la classe (6ᵉ → Terminale), puis une leçon, et on ne répond qu'aux questions de cette leçon. Score enregistré leçon par leçon, correction avec explication, date de revue conseillée, et puce « À revoir d'abord » qui remonte les leçons venues à leur date sans casser l'ordre du programme |
| `profil.html` | tableau de bord (fiches étudiées, tâches, dernier score, leçons à revoir, lignes mémorisées, conseil « prochaine étape ») et planificateur de révisions |

Le bouton « Effacer ma progression locale » du pied de page est présent sur les trois pages de
travail. La sauvegarde utilise `localStorage`, préfixe `jangalekat.v1.`, clés `studied`, `tasks`,
`lastScore`, `recall`, `scores` — cinq clés, pas une de plus : `scores` porte le dernier score de
chaque leçon, son nombre de tentatives et sa date de revue, `lastScore` porte l'identifiant de la
dernière leçon quizée pour que l'accueil puisse proposer de reprendre.

Les pages communiquent par de simples liens, y compris des liens précis :
`cours.html?fiche=derivation` ouvre une fiche, `cours.html?matiere=SVT` filtre une matière,
`cours.html?cycle=Coll%C3%A8ge` filtre un cycle, `cours.html#programmes` ouvre l'onglet Programmes,
`exercices.html?lecon=geo-5e-c1-l3` ouvre le quiz de cette seule leçon,
`exercices.html?fiche=milieu-physique-senegal-5e` liste les leçons couvertes par cette fiche.
Ces liens fonctionnent aussi en `file://`.

## Le quiz : une leçon = un quiz

Chaque ligne de leçon du programme reçoit un identifiant permanent fabriqué à l'enregistrement du
registre (`js/programmes/geo.js` et ses quatre camarades : `geo-5e-c1-l3` = 5ᵉ, premier chapitre,
troisième leçon ; `fiche-derivation` pour les matières sans liste officielle, où une fiche tient lieu
de leçon). Les questions sont rangées dans des fichiers de
données sous `js/quiz/`, un par classe ou par groupe de matières, et s'enregistrent avec
`JK.quizDeLecon('geo-5e-c1-l3', [ … ])`. Le registre `js/quiz-lecons.js` refuse une question
mal formée (énoncé vide, moins de deux options, index hors tableau).

Conséquences pratiques : aucune question ne se mélange entre deux leçons ni entre deux classes ;
une leçon sans questions affiche « Quiz en cours de rédaction » au lieu d'un quiz inventé ; la note
d'un quiz ne remplace pas les autres, elle est stockée sous son identifiant de leçon. Le message
reste la règle pour toute leçon ajoutée plus tard : à ce jour les 556 supports ont tous leurs trois
questions, donc aucun ne l'affiche.

État du corpus (20 octobre 2026, mesuré par `verifier-quiz.js`) : **les 539 leçons des cinq
registres** — Géographie 133, Histoire 56, Mathématiques 135, Physique-Chimie 95, SVT 120 — ont un quiz,
à quoi s'ajoutent 17 quiz de fiches qui tiennent lieu de leçon : **556 supports, 1668 questions,
exactement trois par support**. Les trois fichiers hérités de la phase 1 (`herites.js`,
`sciences-maths-pc.js`, `sciences-svt-histoire.js`) portent les **91 questions** rédigées avant ce
découpage, chacune rangée sous la leçon ou la fiche qu'elle évalue ; les fichiers par classe (`geo-6e.js`,
`maths-4e.js`, `pc-3e.js`, `histoire-4e.js`, `svt-terminale-1.js` …) les complètent sans jamais les
répéter. Les deux jeux se
partagent les questions d'un même support (une leçon héritée d'une question n'en reçoit que deux
autres) : un
support compte toujours **exactement trois questions**, jamais davantage — `verifier-quiz.js` le
signale pour chaque leçon d'un registre (les 17 supports de fiche hors registre sont mesurés par le
même comptage du registre, cf. §13 du cahier des charges).

Contrôle à faire après chaque ajout de questions : `node verifier-quiz.js`, à la racine du projet. Ce
script charge les 53 fichiers de questions et vérifie les identifiants, la forme des questions, les
doublons d'énoncé dans une leçon, la présence de la balise `<script>` de chaque fichier dans
`exercices.html` et `index.html`, et la **position** de la bonne réponse. Il sort 0 s'il n'a rien à
signaler (actuellement 556 supports, 1668 questions, positions réparties 26,0 % / 26,6 % / 24,8 % /
22,7 %).

La position de la bonne réponse doit rester partagée entre les quatre cases : si un fichier met trop
souvent la bonne réponse en premier, l'élève peut réussir sans réviser. On corrige en faisant tourner
circulairement le tableau `options` d'une question et en ajustant `correct` en conséquence — les textes
ne changent pas, donc un ordre logique (chronologie, du plus petit au plus grand) est conservé.
Ne tournent pas les questions dont l'explication mentionne « la deuxième option », « le dernier
distracteur » : la position y a un sens.

Attention : l'identifiant dépend de l'ordre des lignes dans le registre de la matière
(`js/programmes/maths.js` par exemple). Si l'on insère une
leçon dans un chapitre, celles du dessous changent d'identifiant et leurs quiz doivent être renommés.

## Identité visuelle

- Couleurs : bleu principal `#123B70`, vert secondaire `#13845B`, fond `#F4F7FB`, texte `#172B4D`,
  texte secondaire `#586A82` (5,14:1 sur le fond de page, 4,92:1 sur la puce des badges). Toutes les
  valeurs sont dans les jetons `:root` de `css/style.css`.
- Le vert `#13845B` donne 4,5:1 avec le blanc, ce qui est limite pour du petit texte : les surfaces
  cliquables vertes utilisent `--vert-action: #0e6a49` (6,6:1) et `#13845B` reste réservé aux accents,
  aux bordures et aux grands chiffres.
- Typographie : polices du système (`Segoe UI`, puis `system-ui`), aucune police téléchargée.
- Icônes : SVG dessinés à la main dans `js/icons.js` (traits de 1,7 px, couleur héritée du texte),
  injectés dans chaque page. Aucun CDN d'icônes ; si le SVG échoue, les libellés texte suffisent.
- Mise en page en Flexbox et Grid, testée à 360, 768 et 1440 px sans débordement horizontal.
- Accessibilité : contraste AA vérifié sur les textes, navigation clavier avec anneau de focus
  visible, lien d'évitement, régions `aria-live`, libellés explicites sur tous les champs,
  boutons d'au moins 44 px, `prefers-reduced-motion` respecté.
- Aucune fonctionnalité fictive n'est affichée comme disponible : il n'y a pas de « Se connecter »
  ni de « S'inscrire », parce qu'il n'existe pas de comptes. La page `profil.html` est nommée
  « Progression » et l'explique.

## Mode mémorisation

Dans chaque fiche, sous les rubriques : chaque ligne de *Vocabulaire*, *Faits et analyses*,
*Leçons et repères* et *Vigilance* devient une carte que l'on peut masquer, réciter, puis noter
« Je sais » ou « À revoir ». Les réponses sont stockées dans `jangalekat.v1.recall` sous la forme
`idFiche|rubrique|numero`. Une barre de progression affiche le taux d'éléments sues, la carte de la
bibliothèque affiche « Mémorisé 12 / 24 », et le tableau de bord propose les trois fiches avec le
plus de « À revoir ». Rien n'est calculé automatiquement : c'est l'élève qui s'auto-évalue.

## Contenu disponible

| Matière | 6ᵉ | 5ᵉ | 4ᵉ | 3ᵉ | Seconde | Première | Terminale |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Mathématiques | Divisibilité | Relatifs | Fractions | Pythagore | Ensembles de nombres | Dérivation, suites | Second degré, trigo, probas |
| Physique-Chimie | États de la matière | Masse volumique | Circuits électriques | Combustion | Structure de l'atome | — | Radioactivité |
| SVT | La cellule | Photosynthèse | Reproduction des plantes | Hérédité | Constituants du vivant | — | — |
| Histoire (HG) | Premières civilisations | Islam et empires d'Afrique de l'Ouest | Traite négrière et abolitions | Colonisation et indépendance | — | — | — |
| Géographie (HG) | Milieu proche et six régions géographiques + fiche méthode | Sénégal : physique, humains, économies, synthèse | Afrique de l'Ouest, Afrique, Europe, Amérique, Asie et Océanie | Terre-planète, ressources et climat, inégalités, solidarité | Géographie physique : Terre et océans, climats, reliefs, régions naturelles | Population mondiale, milieu rural, milieu urbain, échanges et intégration | Système-monde et Amérique du Nord, Europe, Asie-Pacifique, Amérique latine, Afrique, Sénégal |

Les cinq matières déclarées ont **toutes** leurs leçons dotées d'un quiz : Géographie 133/133,
Histoire 56/56, Mathématiques 135/135, Physique-Chimie 95/95, SVT 120/120. L'Histoire n'est pas une
copie d'un arrêté : aucun document officiel accessible ne publie ses listes d'intitulés, et le registre
affiche en clair « aucune source officielle jointe : liste de démonstration » sous ses 56 repères. Le
registre de physique-chimie ne couvre que 4ᵉ → Terminale : aucun document
obtenu ne donne la liste des leçons de 6ᵉ et de 5ᵉ pour cette matière.

Chiffres du corpus, mesurés par `node verifier-quiz.js` le 20 octobre 2026 : **539 leçons**
au programme (Géo 133 · Histoire 56 · Maths 135 · PC 95 · SVT 120), **toutes couvertes**, plus 17 quiz
de fiches hors registre, soit **556 supports / 1668 questions**, trois par support. Répartition
des bonnes réponses par case : 434 / 443 / 413 / 378 (maximum 26,6 %, plafond du règlement 45 %).

Les questions déposées sous un identifiant de fiche (`fiche-*`) ne sont plus acceptées quand cette
fiche est référencée par une leçon du registre : le quiz devenait inatteignable. Les groupes
doublant une leçon ont donc été retirés et `verifier-quiz.js` le signale désormais. Sur les 53 fiches,
17 servent de leçon à part entière et gardent leur quiz ; leurs questions sont réparties dans
`herites.js` (55 questions), `sciences-maths-pc.js` (26 questions) et
`sciences-svt-histoire.js` (10 questions), les fichiers par classe apportant le reste.

Les rubriques sont les mêmes pour toutes les matières, mais l'Histoire-Géo renomme les titres
(« Repères chronologiques », « Faits et analyses », « Étude guidée », « Leçons du programme (ordre
officiel) ») grâce au champ facultatif `libelles`. Les autres matières du programme (Anglais,
Technologie, SES) restent à ajouter.

## Structure

```
Jangalekat/
├── index.html        accueil (sections A à F de la charte)
├── cours.html        fiches + programmes
├── exercices.html    quiz corrigés
├── profil.html       tableau de bord + planificateur
├── verifier-quiz.js  contrôle du corpus de quiz à la racine (node verifier-quiz.js)
├── CAHIER_DES_CHARGES.md  spécifications de référence (v3.7, 21 octobre 2026)
├── PROMPT.md         toutes les exigences du projet en un seul prompt réutilisable
├── css/
│   └── style.css     jetons de la charte, composants, responsive
├── js/
│   ├── app.js        navigation multi-pages, stockage, tableau de bord
│   ├── progression.js règle des dates de revue, compteur de tentatives, reprise (§ 8.4 du cahier)
│   ├── icons.js      jeu d'icônes SVG + JK.icon()
│   ├── landing.js    compteurs réels de la page d'accueil
│   ├── fiches.js     données des fiches, bibliothèque, mode mémorisation
│   ├── programmes.js écran Programmes : affiche les registres et leurs statuts de provenance
│   ├── programmes/   un registre déclaratif par matière (geo.js, histoire.js, svt.js, maths.js, pc.js)
│   ├── quiz-lecons.js registre « une leçon = un quiz »
│   ├── quiz/         un fichier de questions par matière et classe (geo-6e.js, maths-4e.js, pc-3e.js, sciences-maths-pc.js…)
│   ├── quiz.js       écran du quiz : classe → leçon → questions → correction
│   └── planning.js   tâches de révision
├── assets/
│   ├── icons/logo.svg
│   └── images/       (vide pour l'instant)
└── README.md
```

Le cahier des charges visuel demandait `js/cours.js` et `js/exercices.js` : ces rôles sont déjà
remplis par `fiches.js` + `programmes.js` et par `quiz.js`, qui contiennent le contenu pédagogique.
Renommer ces fichiers ne changerait rien et ferait perdre l'historique des corrections apportées au
programme de géographie.

Ordre de chargement identique sur les quatre pages : `app.js` définit l'objet global `JK` (store,
navigation, composant `h`), puis `progression.js` y ajoute `JK.progression` — il ne fait que lire les
clés déjà définies par `app.js`, il ne doit donc pas être chargé avant lui. `icons.js` installe le
sprite SVG ; `fiches.js` déclare `JK.FICHES` ; `programmes.js` lit `JK.FICHES` pour savoir quelles
leçons sont couvertes ; `quiz.js` et `planning.js` déclarent leurs données. Chacun enregistre son écran
avec `JK.registerView(id, { render })`, et `app.js` sait qu'un écran donné appartient à une autre page
(`PAGE_DES_VUES`) : il envoie alors un lien au lieu de rester bloqué.

## Comment ajouter une fiche

Éditez `js/fiches.js` et ajoutez un objet dans `JK.FICHES`. Les champs attendus sont ceux du
modèle de la section 8 du cahier des charges : `id`, `titre`, `matiere`, `niveau`, `chapitre`,
`type`, `difficulte`, `verif`, `objectif`, `definitions`, `proprietes`, `formules`, `conditions`,
`exemple`, `exercices`. L'`id` doit être unique ; les filtres cycle, matière et classe se
construisent tout seuls à partir des données.

Trois champs facultatifs :

- `libelles` pour renommer des rubriques (matières littéraires) ;
- `branche` (`'Histoire'`, `'Géographie'`, `'EC'`) pour afficher le badge de sous-discipline ;
- `source` pour la référence exacte du programme. Sans `source`, la fiche affiche la mention
  « aucun programme officiel publié n'a pu être joint » — c'est le cas de toutes les fiches de
  mathématiques, physique-chimie, SVT et histoire.

Le `niveau` détermine le cycle (`6ᵉ`, `5ᵉ`, `4ᵉ`, `3ᵉ` = Collège ; `Seconde`, `Première`,
`Terminale` = Lycée).

Pour le quiz, on n'édite plus `js/quiz.js` (qui ne fait que dessiner l'écran) mais un fichier de
`js/quiz/` : `JK.quizDeLecon('geo-5e-c1-l3', [ … ])` avec, par question, `enonce`, `options` (tableau de
textes), `correct` (index de la bonne réponse) et `explication`. L'identifiant de la leçon doit exister
dans un registre de `js/programmes/` ou correspondre à une fiche (`fiche-…`) ; sinon le quiz est ignoré
par l'application. La balise `<script>` du nouveau fichier doit être présente dans `exercices.html` et
`index.html` — l'outil d'atelier `ajoute-quiz.js` la déclare pour tous les fichiers du dossier.

Pour ajouter des leçons à la section Programmes, éditez le registre de la matière dans
`js/programmes/` (`geo.js`, `svt.js`, `maths.js`, `pc.js`) : chaque classe contient
des `chapitres`, chaque chapitre des leçons écrites avec `lecon('Leçon 5 — …', 'idDeLaFiche')` ; le
second argument est facultatif et doit correspondre à un `id` de `JK.FICHES`.

## Provenance du contenu, à lire avant de publier

Cinq registres de leçons sont déclarés dans `js/programmes/`, chacun avec un statut de provenance
affiché à l'écran Programmes. Le détail complet est dans `CAHIER_DES_CHARGES.md`, §9.

**Géographie — vérifiée.** Les listes de leçons proviennent du programme officiel du ministère de
l'Éducation nationale du Sénégal, édition 2004, reproduit dans les annexes du rapport de recherche
PURGES / AUF (2020) consacré aux pratiques curiculaires des enseignants d'histoire-géographie. Nombre
de leçons par classe, intitulés, volumes horaires et compétences exigibles en sont tirés directement.

**SVT — officiel.** Le programme de l'enseignement moyen (MEN / IGEN / Commission nationale des
programmes, mai 2008) et celui du second cycle (septembre 2015) ont été téléchargés en PDF, et les
120 leçons déclarées en sont recopiées.

**Mathématiques — officiel au collège et au lycée, avec réserves.** Programmes APAMS d'octobre 2006
et le *Guide d'usage des programmes — Mathématiques* (DEMSG, septembre 2012). La classe de 5ᵉ
n'apparaît que dans le guide d'usage : son statut est ravalé à « fascicule pédagogique ».

**Physique-Chimie — fascicule, pas arrêté.** Des copies dactylographiées datées d'août 2008, sans
page de garde ni autorité imprimée. Le registre ne couvre 4ᵉ → Terminale que parce que le document
s'arrête là : **rien n'a été inventé pour la 6ᵉ et la 5ᵉ**, et l'absence est écrite dans le fichier.
Deuxième preuve, recoupée le 20 octobre 2026 : le dépôt institutionnel SENPROF publie des fascicules
ADEM de physique-chimie pour la 4ᵉ et la 3ᵉ seulement, alors qu'il publie maths, SVT et français de la
6ᵉ à la 3ᵉ — la discipline n'est tout simplement pas listée à ces deux niveaux.

**Histoire — registre déclaré, sans source officielle jointe.** Le découpage chronologique de chaque
classe, le nombre de leçons et les volumes horaires (22 leçons et 37 h en 6ᵉ, 22 et 37 h en 5ᵉ, 24 et
48 h en 4ᵉ, 22 et 43 h en 3ᵉ, 25 et 48 h en Seconde, 23 et 44 h en Première, 19 et 38 h en Terminale,
soit 157 leçons) viennent des tableaux 1 et 2 de l'article de la revue **Akiri n° 5** (janvier 2024)
sur le programme d'histoire sénégalais, qui cite lui-même le programme consolidé d'histoire (Sénégal /
MEN / IGEN / CNHG, octobre 2006). La notice de ce programme figure au catalogue de l'UNESCO (2004,
27 p.), mais l'exemplaire n'est pas numérisé : aucune liste d'intitulés n'a pu être ouverte. Les 56
leçons du registre sont donc des **repères rédigés par Jàngalekat** dans l'ordre des périodes prescrites
— statut « aucune source officielle jointe : liste de démonstration », répété sur l'accueil.

**Ce qui n'est pas vérifié, à aucun niveau : les questions.** Toutes les questions de quiz du projet
sont des contenus de démonstration auto-rédigés à partir des intitulés du programme et des fiches.
Aucune n'a été relue par un enseignant, aucune n'est un sujet d'examen. L'avertissement est dans
l'en-tête de chaque fichier de quiz et sur l'écran de choix des leçons. Les 53 fiches et les
1668 questions ne doivent pas être présentées comme un cours officiellement validé.

**La cible bouge.** Le rapport PURGES / AUF décrit la réforme PARC (redéfinition du milieu proche,
problématisation des leçons, allègement du nombre de leçons) et une révision curriculaire 2026-2028 :
un libellé de 2004 ou 2008 peut ne plus être celui du manuel utilisé cette année.

## Sécurité

Il n'y a ni compte, ni serveur, ni base : les risques classiques d'un site en ligne n'ont pas de
support ici. Ce qui est protégé, et comment (détail et commandes de re-vérification dans
`CAHIER_DES_CHARGES.md`, §13) :

- **0 occurrence** de `innerHTML`, `outerHTML`, `insertAdjacentHTML`, `document.write` ou `eval` dans
  les 73 fichiers du périmètre P1 — ce que le navigateur charge : 4 pages, `css/style.css`,
  `assets/icons/`, 9 modules de `js/`, 5 registres, 53 fichiers de quiz (périmètres P1/P2/P3 :
  `CAHIER_DES_CHARGES.md`, annexe A), re-mesuré le 20 octobre 2026 ; tout le DOM est construit par `h()`
  et tout le texte passe par `textContent` ;
- les quatre pages déclarent une politique de sécurité de contenu : aucun script en ligne, pas
  d'`object`, pas de `fetch` ni de WebSocket (`connect-src 'none'`), `base-uri` et `form-action`
  neutralisés, et `style-src 'self'` **sans `'unsafe-inline'`** — aucun style en ligne depuis la v0.10
  (`grep -o 'style="' *.html` et `grep -rn "style:" js/*.js` rendent vide) ;
- `href`, `src`, `action` et `formaction` refusent les schémas `javascript:`, `vbscript:`,
  `livescript:`, `data:`, `file:` et `blob:` — y compris quand un saut de ligne est glissé au milieu
  pour tromper un test simple ;
- les liens sortants vers les documents sources portent `rel="noopener"` ;
- une ancre mal échappée (`cours.html#%zz`) laisse la page démarrer sur sa vue par défaut au lieu de
  rester vide ;
- si l'écriture locale échoue (quota saturé, stockage coupé), le bandeau d'avertissement s'affiche au
  lieu de laisser croire que la progression est sauvée.

Ce que le local ne peut pas garantir, mesuré le 18 octobre 2026 : en `file://`, tout document ouvert
dans le même navigateur lit les clés `jangalekat.v1.*`. C'est pourquoi il n'y a ni mot de passe, ni
identifiant, ni information personnelle dans le stockage — et pourquoi il n'y a pas de « connexion » :
un contrôle qui tournerait sur la machine même de celui qui cherche à le contourner n'est pas un
contrôle, et le faire croire serait une fonctionnalité fictive.

## Limites assumées de cette phase

Pas de comptes utilisateurs, pas de synchronisation entre appareils, pas d'espace enseignant,
pas de paiement, pas de correction de réponses libres, pas de publication en ligne, pas
d'impression, pas de mode installé hors connexion.

Les dates de revue appliquent un délai fixe — 7 jours après un quiz sans faute, 2 jours après un quiz
avec des erreurs — calculé sur la dernière tentative seulement : ce n'est pas un calendrier de révision
adaptatif, et l'écran le dit en toutes lettres plutôt que de promettre une méthode scientifique.

La progression est stockée dans le navigateur : elle disparaît si l'on vide les données du site,
change d'appareil ou change de navigateur.

Toutes les leçons des cinq registres déclarés ont désormais leurs trois questions : il ne reste
aucune leçon en attente de quiz. L'Education civique, l'Anglais, la Technologie et les SES n'ont pas de
registre, la physique-chimie de 6ᵉ et de 5ᵉ n'a pas de liste de leçons sourcée, et les 56 repères
d'histoire restent une progression interne tant qu'un professeur ou un texte officiel ne les a pas
confirmés.

## Étapes suivantes (voir `CAHIER_DES_CHARGES.md`, §16)

1. **Faire relire et valider un échantillon par un enseignant** (une classe entière, une matière) et
   corriger les libellés de provenance en conséquence. C'est le principal risque éditorial du projet :
   le volume de quiz est terminé, sa fiabilité ne l'est pas.
2. Faire confirmer les 56 repères d'histoire classe par classe par un professeur, ou récupérer le
   programme consolidé de 2006 en intégral (27 p., exemplaire non numérisé à la bibliothèque de
   l'UNESCO) ; seulement à cette condition le statut du registre passe de « sans source officielle
   jointe » à « programme officiel ».
3. Enrichir les fiches de physique-chimie et d'histoire, qui restent derrière la géographie.
4. Tester avec 5 à 10 élèves volontaires sur téléphone, en `file://`, et corriger les difficultés
   de navigation.
5. Ajouter un manifeste PWA et un service worker, puis publier en HTTPS — seulement après validation
   du prototype.

## Copier le projet sur un autre ordinateur

Tout tient dans ce dossier : copiez `Jangalekat/` sur une clé USB, ou envoyez-le en archive ZIP,
puis ouvrez `index.html`. La progression, elle, ne se copie pas : elle appartient au navigateur
de départ.
