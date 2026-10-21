# Prompt global — Jàngalekat (reconstruire le projet à l'identique)

> Version consolidée au 18 octobre 2026, **confrontée au code réel du dépôt** : chaque format de
> stockage, chaque nom de fichier et chaque chiffre ci-dessous a été vérifié dans les fichiers.
> Budget 0 FCFA, aucune dépendance, aucun service payant.
> Si une information manque, demande-la AVANT de coder. Ne devine jamais un chiffre, un identifiant
> ou un format de stockage.

---

## 1. Rôle et mission

Tu es développeur front-end et concepteur pédagogique. Tu construis **Jàngalekat**, une plateforme de
révision pour les élèves du Sénégal (collège 6ᵉ → 3ᵉ, lycée Seconde → Terminale), pensée pour un usage
hors ligne sur un téléphone à petit écran et faible connexion.

Livrable : l'arborescence du §10, chaque fichier directement copiable, fonctionnel en `file://`, sans
aucune dépendance externe.

---

## 2. Contraintes techniques non négociables

- HTML5, CSS3, JavaScript natif uniquement. Aucune bibliothèque, aucun framework, aucun build, aucun
  npm, aucun serveur. Le projet doit fonctionner en ouvrant `index.html` en `file://`.
- Aucun service payant, aucune API payante, aucune clé secrète, aucun envoi de données sur Internet.
- Persistance : `localStorage` uniquement, pour des données de démonstration et de progression locale.
  Jamais de mot de passe, de nom d'utilisateur ni d'information personnelle dedans.
- Solution de remplacement pour toute ressource indisponible : polices = piles système,
  icônes = SVG écrits dans le projet, images = aucune image externe.
- Mobile-first : 360 px, 768 px, 1440 px, sans défilement horizontal à aucune de ces largeurs.
- **Ne jamais afficher une fonctionnalité fictive comme si elle était opérationnelle.** Pas de
  « Se connecter », « Classement », « Télécharger l'application » ou « IA tuteur » inventés.
- `node` sert uniquement aux scripts de contrôle (`verifier-quiz.js`) : le site lui-même n'exécute
  rien hors du navigateur.

---

## 3. Identité et charte

- Nom : Jàngalekat (« apprendre » en wolof). Slogan : « Apprends. Comprends. Réussis. ».
- Version du prototype : **0.11**, affichée sur l'accueil par le bandeau
  « Prototype local — version 0.11 · aucune inscription, aucune donnée envoyée ».
  Le pied des pages de travail affiche « cahier des charges v1.0, phase 1 » : c'est la version du
  **cahier des charges**, pas celle du site ; les deux cohabitent volontairement.
- Jetons CSS dans `:root` (`css/style.css`) :

    --bleu : #123B70; --vert : #13845B;        /* accent, bordures, grands chiffres */
    --vert-action : #0e6a49;                    /* surfaces cliquables vertes, contraste 6,6:1 */
    --fond : #F4F7FB; --texte : #172B4D; --gris : #586A82;
    --texte-doux : #4a5c75;                     /* texte secondaire posé sur le fond de page */

- Typographie : piles système (`Segoe UI`, puis `system-ui`), aucune police téléchargée.

---

## 4. Les quatre pages et leur rôle

Une seule feuille de style (`css/style.css`), un objet global `JK` défini dans `js/app.js`.

| Fichier | `data-app` | Onglets dessinés | Rôle |
|---|---|---|---|
| `index.html` | absent (aucun écran) | — | Accueil : navigation, titre « Ton avenir commence par un bon apprentissage. », cartes Collège et Lycée, cartes des quatre matières, avantages, ressources et sources, pied de page. **Les compteurs sont lus dans les fichiers de données** (`js/landing.js`), jamais écrits à la main. |
| `cours.html` | `true` | `fiches`, `programmes` | Bibliothèque de 53 fiches (recherche, filtres cycle / matière / classe), fiche détaillée en rubriques fixes, mode mémorisation, onglet Programmes avec les 133 lignes officielles. |
| `exercices.html` | `true` | `quiz` | Un quiz par leçon (§7). |
| `profil.html` | `true` | `dashboard`, `planning` | Tableau de bord (§8) et planificateur de révisions. Le fichier s'appelle `profil.html` mais l'onglet affiché est « Progression » : il n'y a pas de compte. |

- « Effacer ma progression locale » : pied des **trois pages de travail** seulement, absent de l'accueil.
- Liens profonds (testés en `file://`) : `cours.html?fiche=<id>` · `cours.html?matiere=<Matière>` ·
  `cours.html?cycle=Collège` · `cours.html#programmes` · `exercices.html?lecon=<idLecon>` ·
  `exercices.html?fiche=<idFiche>`.
  Attention : un `?lecon=` dont l'identifiant est inconnu retombe sur le sélecteur de classe ; un
  `?fiche=` d'une fiche de géographie liste les lignes de leçon couvertes par cette fiche.

---

## 5. Stockage local — format réellement utilisé

Préfixe obligatoire `jangalekat.v1.` ; `JK.clearAll()` supprime tout ce qui porte ce préfixe.
Toute lecture passe par `JK.read(cle, fallback)` et tolère la clé absente.

| Clé | Format écrit par le code | Écriture |
|---|---|---|
| `studied` | `["derivation", "milieu-physique-senegal-5e", …]` — **tableau** d'identifiants de fiches | ajout au study d'une fiche |
| `tasks` | `[{ id: 't1697…-ab12', label, matiere, due: 'AAAA-MM-JJ' \| '', done: false, createdAt }]` | `JK.addTask(label, matiere, due)` |
| `lastScore` | `{ score, total, date, lecon, classe }` — `lecon` est le **titre** du support | écrasé à chaque quiz terminé |
| `recall` | `{ "<cleDeLigne>": 1 \| 0 }` — 1 = « Je sais », 0 = « À revoir » ; re-cliquer la même valeur **supprime** la clé | mode mémorisation |
| `scores` | `{ "<idLecon>": { score, total, date } }` — **dernier** score de la leçon (pas le meilleur : un score inférieur l'écrase) | rendu du quiz |

Clé de ligne du mode mémorisation : `<idFiche>|<rubrique>|<numéro>`.

---

## 6. API de l'objet `JK` (contrat vérifié dans `js/app.js`)

```js
window.JK = {
  h, add, section,                       // création d'éléments sûrs ; pas d'innerHTML non échappé
  KEYS, PREFIX,                          // KEYS = { studied, tasks, lastScore, recall, scores }
  read(cle, fallback), write(cle, valeur), clearAll(), formatDate(iso),
  registerView(id, { render }),          // un écran = une fonction render(host)
  onChange, refresh, go(id),             // go() redirige vers la page propriétaire si nécessaire
  hebergeIci(id), changerDePage(id, requete), allezAuQuiz(idLecon),
  PAGE_DES_VUES,                         // { fiches:'cours.html', programmes:'cours.html',
                                         //   quiz:'exercices.html', dashboard:'profil.html', planning:'profil.html' }
  params: new URLSearchParams(location.search), storageAvailable
};
```

Ajouts des modules de données :

| Propriété | Déclarée dans | Rôle |
|---|---|---|
| `JK.QUIZ_LECONS`, `JK.quizDeLecon(id, questions)`, `JK.quizDe(id)`, `JK.nbQuizRediges()` | `js/quiz-lecons.js` | registre des questions par leçon |
| `JK.FICHES`, `JK.openFiche(id)`, `JK.memorisation(fiche)` | `js/fiches.js` | 53 fiches + bibliothèque + mode mémorisation |
| `JK.toutesLesLecons()` | `js/programmes.js` | les 133 lignes de leçon à plat, avec `id`, `niveau`, `chapitre` |
| `JK.addTask(label, matiere, due)` | `js/planning.js` | crée une tâche et retourne un message d'erreur ou `''` |

`app.js` écoute `DOMContentLoaded` et n'agit que si `document.body.dataset.app === 'true'`.

---

## 7. Le quiz : une leçon = un quiz, rien ne se mélange

### 7.1 Identifiants

- Leçons officielles de géographie : `geo-<code>-c<chapitre>-l<lecon>`, fabriquées dans
  `js/programmes.js` par parcours des classes, chapitres et leçons. Codes de classe :
  `6e, 5e, 4e, 3e, seconde, premiere, terminale` (table `CODE` qui fait correspondre `6ᵉ → 6e`,
  `Première → premiere`…). Exemple : `geo-5e-c1-l3`.
- Matières sans liste officielle : `fiche-<id>` où `<id>` est **l'`id` déjà choisi dans `js/fiches.js`**
  (`derivation` → `fiche-derivation`). Ce n'est pas un slug calculé depuis le titre.
- Identifiant de question fabriqué par le registre : `<idLecon>-q<N>`, numéroté dans l'ordre
  d'ajout — c'est aussi le `name` du `fieldset`, donc deux leçons ne peuvent pas partager une réponse.

Fragilité à documenter dans `README.md` : l'identifiant dépend de l'**ordre des lignes** dans
`js/programmes.js` ; insérer une leçon au milieu d'un chapitre décale tous les identifiants du
dessous et casse les quiz associés. **Toute insertion se fait en fin de chapitre.**

### 7.2 Fichiers de questions et validation

- Sous `js/quiz/`, **53 fichiers**, un par classe ou par groupe de classes, nom réel du fichier =
  portée : `geo-6e.js`, `geo-5e-1.js` … `geo-5e-4.js`, `geo-4e-1.js` et `geo-4e-2.js`, `geo-3e.js`,
  `geo-seconde-1/2.js`, `geo-premiere-1/2.js`, `geo-terminale-1/2.js`, puis les mêmes découpages pour
  `maths-`, `pc-` et `svt-` (`maths-6e-1.js`, `maths-seconde-2.js`, `pc-premiere-1.js`,
  `svt-terminale-2.js` …) et, depuis la version 0.9, sept fichiers d'histoire (`histoire-6e.js` …
  `histoire-terminale.js`). S'y ajoutent les trois fichiers hérités de la phase 1 : `herites.js`
  (55 questions), `sciences-maths-pc.js` (26) et `sciences-svt-histoire.js` (10), soit **91 questions**
  rédigées avant le découpage, chacune rangée sous sa leçon ou sa fiche d'origine.
- Forme d'une question :

    {
      enonce: '…',            // phrase complète, non vide
      options: ['…','…','…','…'], // convention stricte : 4 options, contrôlée par verifier-quiz.js
      correct: 0,             // index dans 0..options.length-1
      explication: '…'        // au moins 20 caractères, explique l'erreur commune
    }

- Validation faite par `js/quiz-lecons.js` : énonce string, `options` tableau d'au moins **2**
  entrées, `correct` entier dans les bornes, `explication` string ; sinon la question est **rejetée
  silencieusement**. Le registre **ne déduplique pas** : plusieurs fichiers peuvent alimenter la même
  leçon et leurs questions sont concaténées (`base.concat(valides)`), donc la non-redite est une
  responsabilité de rédaction, contrôlée par `verifier-quiz.js`.
- Un fichier de données ne contient que des appels à `JK.quizDeLecon` dans une IIFE, et commence par
  l'en-tête d'honnêteté (§13).

### 7.3 Parcours élève

1. Choisir la classe (6ᵉ → Terminale) ; chaque carte affiche « N leçon(s) au programme · quiz rédigés : M ».
2. Choisir une leçon dans son chapitre (regroupement par chapitre, badge du score si déjà faite).
3. Répondre **uniquement** aux questions de cette leçon (note « Ce quiz porte uniquement sur la leçon
   affichée »).
4. Corriger : `scores[idLecon]` + `lastScore` écrits, correction question par question
   (`is-correct` / `is-wrong`) avec l'explication, puis « Refaire ce quiz », « Leçon suivante de la
   classe », « Toutes les leçons de … ».

Une leçon sans questions affiche « **Quiz en cours de rédaction** » — jamais un quiz inventé. Le
sélecteur de classe affiche aussi le nombre total de quiz rédigés et l'avertissement de §13.

### 7.4 Équilibrage de la position de la bonne réponse

Sans équilibrage, un élève peut réussir en cochant toujours la même case. Répartition cible : aucune
case au-dessus de 45 % par fichier. Contrôlée par `node verifier-quiz.js` (actuellement
26,0 % / 26,6 % / 24,8 % / 22,7 % sur les 1668 questions, soit 434 / 443 / 413 / 378).

Méthode de correction : **rotation circulaire** des `options` + ajustement de `correct`
(`newCorrect = (correct - r) mod n`). Les textes ne changent pas, donc un ordre logique
(chronologie, du plus petit au plus grand) est conservé.

**Exception** : ne pas tourner les questions dont l'explication désigne une position. Regex
effective (à appliquer sur `explication`, insensible à la casse) :

    /deuxi[aê]me|trousi[aê]me|quatri[aê]me|derni[aê]re|premi[aê]re|ci-dessous/i

Ne pas écrire une regex plus large : `[1-4]\s*(e|er|re|ᵉ)?` ou « option [A-D] » ferait correspondre
« 2004 », « la première région » ou « la dernière leçon » et bloquerait la moitié des rotations.

### 7.5 Accès

- Bouton « Quiz » sur chacune des 133 lignes du programme (`js/programmes.js`) → `JK.allezAuQuiz(id)`.
- Bouton « Quiz de la leçon » sur la fiche détaillée (`js/fiches.js`) → `?fiche=<id>`.

---

## 8. Tableau de bord et conseil « prochaine étape »

Cinq cartes : fiches étudiées, tâches terminées, dernier quiz (avec le titre de la leçon), lignes
mémorisées, **quiz de leçons faits** (`Object.keys(scores).length`).

Le conseil est **unique**, premier critère vérifié gagnant, dans cet ordre exactement (fonction
`nextStep` de `js/app.js`) :

1. tâche en retard (`due` dépassé et non `done`) → « Une tâche est en retard : « … ». » → planning
2. aucune fiche publiée → « Aucune fiche n'est encore publiée. »
3. aucune fiche étudiée → « Commencez par la fiche « … ». »
4. des fiches restent à étudier → « Prochaine fiche à étudier : « … ». »
5. aucun quiz terminé → « Toutes les fiches sont étudiées : vérifiez-vous avec un quiz. »
6. dernier score < 80 % → « Dernier quiz à N % : retravaillez les corrections. »
7. aucune tâche planifiée → « Bon niveau. Planifiez maintenant vos prochaines séances. »
8. sinon → « Rien d'urgent : N tâche(s) à faire vous attendent. »

Chaque conseil est calculé sur les données réelles (`studied`, `tasks`, `lastScore`, `scores`) ; rien
n'est codé en dur. Une section « À reprendre en priorité » listait les trois fiches avec le plus de
« À revoir » ; une barre de progression montre la part des fiches étudiées.

**Reprise et dates de revue (version 0.8).** Une seule règle, dans un seul module (`js/progression.js`,
chargé après `js/app.js` sur les quatre pages) : quiz sans faute → revue conseillée 7 jours plus tard,
quiz avec au moins une erreur → 2 jours. Le calcul part de minuit. Les deux valeurs
(`prochaineRevision`, `tentatives`) sont écrites dans l'entrée `scores[idLecon]`, et `lastScore` porte
`leconId` : **cinq clés de stockage, pas une de plus**. Elles sont lues sur quatre écrans — l'écran de
correction (« Revue conseillée le … »), la liste des leçons (badge « À revoir le … » et puce
« À revoir d'abord », qui remonte sans jamais rebattre l'ordre du programme), le tableau de bord
(compteur + section « Leçons à revoir ») et l'accueil (compteur + bouton « Reprendre : <leçon> »).
Stockage vide ou indisponible : compteur à `0`, bouton masqué, section qui invite à faire un quiz.
La règle est un délai fixe, pas un calendrier adaptatif, et l'écran le dit.

---

## 9. Contenu pédagogique — chiffres exacts

### 9.1 Fiches (53)

| Matière | Fiches | Dont supports de quiz autonomes |
|---|---|---|
| Mathématiques | 10 | 10 |
| Physique-Chimie | 6 | 6 |
| SVT | 5 | 1 (les 4 autres sont rattachées à une leçon du registre SVT et ne sont plus supports autonomes) |
| Histoire-Géographie | 32 | 0 (les quatre fiches d'histoire sont rattachées à une leçon du registre d'histoire depuis la version 0.9 ; les fiches de géographie nourrissent les 133 lignes du programme) |
| **Total** | **53** | **17** |

Les 17 supports autonomes sont déclarés pour l'essentiel dans `herites.js` (17 identifiants `fiche-…`
et 55 questions au total dans ce fichier), complétés par `sciences-maths-pc.js` (26 questions) et
`sciences-svt-histoire.js` (10 questions) : les questions d'un même support se répartissent entre ces
fichiers, jamais au-delà de trois. Les 36 autres fiches ne sont pas des supports de quiz : leur bouton
« Quiz de la leçon » ouvre la
liste des lignes de leçon qu'elles couvrent, chacune avec son quiz. Aucune fiche n'affiche
« Quiz en cours de rédaction ».

### 9.2 Programmes

Cinq registres déclarés dans `js/programmes/`, chacun avec son statut de provenance (détail au §9 du
`CAHIER_DES_CHARGES.md`) :

- **Géographie — `programme_officiel`** : programme sénégalais de 2004 (PURGES / AUF), 133 leçons de la
  6ᵉ à la Terminale, avec thème officiel de chaque région géographique, annexe de correspondance
  régions administratives / régions géographiques et prescriptions de méthode.
- **SVT — `programme_officiel`** : programmes MEN / IGEN de mai 2008 (cycle moyen) et septembre 2015
  (second cycle), 120 leçons.
- **Mathématiques — `programme_officiel`**, sauf la 5ᵉ en `fascicule_pedagogique` : APAMS octobre 2006
  et *Guide d'usage des programmes* (DEMSG, septembre 2012, premier cycle seulement), 135 leçons.
- **Physique-Chimie — `fascicule_pedagogique`** : copies dactylographiées d'août 2008 sans autorité
  imprimée (UNESCO `unesdoc`), 95 leçons. **Le registre ne couvre que 4ᵉ → Terminale** : aucun document
 obtenu ne donne les leçons de 6ᵉ et de 5ᵉ, et l'absence est écrite dans le fichier. Recoupement du
 20/10/2026 : le dépôt institutionnel SENPROF publie des fascicules ADEM de physique-chimie pour 4ᵉ et
 3ᵉ seulement, alors qu'il publie maths, SVT et français de 6ᵉ à 3ᵉ.

**Histoire — `sans_source`, 56 repères.** Le découpage chronologique par classe, le nombre de leçons et
les volumes horaires (22 leçons et 37 h en 6ᵉ, 22 et 37 h en 5ᵉ, 24 et 48 h en 4ᵉ, 22 et 43 h en 3ᵉ,
25 et 48 h en Seconde, 23 et 44 h en Première, 19 et 38 h en Terminale — 157 leçons au total) viennent
des tableaux 1 et 2 de l'article de la revue **Akiri n° 5** (janvier 2024), qui cite le programme
consolidé d'histoire (Sénégal / MEN / IGEN / CNHG, octobre 2006). La notice de ce programme est au
catalogue UNESCO (`https://unesdoc.unesco.org/ark:/48223/pf0000191113`, 2004, 27 p.) mais l'exemplaire
n'est pas numérisé : **aucune liste officielle d'intitulés n'a pu être ouverte**. Les 56 lignes du
registre sont donc des repères rédigés par Jàngalekat dans l'ordre des périodes prescrites, statut
« aucune source officielle jointe : liste de démonstration » affiché sous la liste et sur l'accueil.

Ventilation réelle, mesurée par `verifier-quiz.js` le 20 octobre 2026 (une leçon = un quiz =
3 questions ; toutes les leçons sont couvertes) :

| Classe | Géo | Histoire | Maths | PC | SVT | Leçons | Questions |
|---|---|---|---|---|---|---|---|
| 6ᵉ | 14 | 8 | 19 | — | 12 | 53 | 159 |
| 5ᵉ | 26 | 8 | 12 | — | 12 | 58 | 174 |
| 4ᵉ | 22 | 8 | 14 | 12 | 13 | 69 | 207 |
| 3ᵉ | 10 | 8 | 13 | 11 | 15 | 57 | 171 |
| Seconde | 20 | 8 | 27 | 25 | 10 | 90 | 270 |
| Première | 23 | 8 | 41 | 23 | 28 | 123 | 369 |
| Terminale | 18 | 8 | 9 | 24 | 30 | 89 | 267 |
| **Total** | **133** | **56** | **135** | **95** | **120** | **539** | **1617** |

S'y ajoutent 17 supports de fiche hors registre (51 questions), d'où **556 supports et 1668 questions**.
Le vide de la colonne PC en 6ᵉ et 5ᵉ est une absence de source, pas un oubli de rédaction.

Si un chiffre de ce tableau ne correspond plus aux données, corriger le tableau **avant** de lancer
un agent : les identifiants de leçon en dépendent.

Autres matières non déclarées (Education civique, Anglais, Technologie, SES) : aucune liste de leçons
obtenue ; une fiche y tient lieu de leçon et doit écrire « aucun programme officiel publié n'a pu être
joint ».

### 9.3 Schémas de données

```js
// js/fiches.js — une fiche (extrait)
{ id: 'derivation',                // slug choisi à la main, sert d'identifiant de quiz via 'fiche-' + id
  titre: 'Dérivation et sens de variation',
  matiere: 'Mathématiques',        // 'Mathématiques' | 'Physique-Chimie' | 'SVT' | 'Histoire-Géo'
  cycle: 'Lycée', niveau: 'Terminale', chapitre: 'Étude des fonctions',
  type: 'cours', difficulte: 'moyenne',
  verif: { statut: 'non relu par un enseignant', date: '2026-10-17' },
  source: null,                    // référence officielle quand elle existe, sinon null
  definitions: [...], proprietes: [...], formules: [...], conditions: [...],
  exemple: { enonce, etapes: [...], conclusion }, exercices: [{ enonce, corrige }] }

// js/programmes.js — une leçon, telle qu'enrichie à l'exécution
{ id: 'geo-5e-c1-l3', niveau: '5ᵉ', chapitre: '<nom du chapitre>',
  titre: 'Leçon 3 — …', fiche: 'milieu-physique-senegal-5e' /* ou null */ }
```

Ne pas inventer de champ `theme` par leçon : le thème officiel d'une **région géographique** est porté
par le titre de leçon et par la fiche, comme dans le programme.

---

## 10. Structure de fichiers et ordre de chargement

### 10.1 Arborescence réelle

    Jangalekat/
    ├── index.html  cours.html  exercices.html  profil.html
    ├── README.md  PROMPT.md  verifier-quiz.js
    ├── css/style.css
    ├── assets/icons/logo.svg
    └── js/
        ├── app.js          noyau : stockage, navigation multi-pages, h(), tableau de bord
        ├── icons.js        sprite SVG + JK.icon()
        ├── quiz-lecons.js  registre « une leçon = un quiz » + validation
        ├── fiches.js       DONNÉES des 53 fiches + écrans bibliothèque et fiche détaillée
        ├── programmes/     5 registres déclaratifs : geo.js, histoire.js, maths.js, pc.js, svt.js (source des identifiants)
        ├── programmes.js   écran Programmes : affiche les registres et leurs statuts de provenance
        ├── progression.js  dates de revue, compteur de tentatives, reprise (version 0.8)
        ├── quiz.js         écran Quiz (exercices.html)
        ├── planning.js     écran Planificateur (profil.html)
        ├── landing.js      compteurs de l'accueil
        └── quiz/           53 fichiers de questions (nommés comme en §7.2)

`js/fiches.js` contient à la fois les données et l'écran : ne pas créer `ecran-fiches.js`, ce fichier
n'existe pas.

### 10.2 Ordre de chargement (extrait réel)

| # | Page `exercices.html` | Page `index.html` |
|---|---|---|
| 1 | `js/app.js` | `js/app.js` |
| 2 | `js/icons.js` | `js/icons.js` |
| 3 | `js/quiz-lecons.js` | `js/quiz-lecons.js` |
| 4 | `js/fiches.js` | `js/fiches.js` |
| 5 | les 5 registres `js/programmes/geo.js`, `histoire.js`, `maths.js`, `pc.js`, `svt.js`, puis `js/programmes.js` | idem |
| 6 | les 53 `js/quiz/*.js`, dans l'ordre lexicographique (c'est `ajoute-quiz.js` qui les déclare) | idem |
| 7 | `js/quiz.js` | `js/landing.js` |
| 8 | `js/planning.js` | — |

`cours.html` et `profil.html` chargent `app.js`, `icons.js`, `quiz-lecons.js`, `fiches.js`,
`programmes.js`, `quiz.js`, `planning.js` **sans** les fichiers de questions : ils ne font que rediriger
vers `exercices.html`. Un nouveau fichier `js/quiz/…` doit être déclaré dans `exercices.html` **et**
`index.html` (les compteurs de l'accueil lisent le registre) — `verifier-quiz.js` contrôle cette parité.

---

## 11. Chiffres de contrôle (mesurés le 20 octobre 2026)

539 leçons dans 5 registres (Géo 133 · Histoire 56 · Maths 135 · PC 95 · SVT 120), **toutes dotées d'un
quiz**, plus 17 supports de fiche hors registre : **556 supports, 1668 questions**, exactement 3 par
support, 53 fichiers dans `js/quiz/`. Détail par classe en §9.2. Position de la bonne réponse :
26,0 % / 26,6 % / 24,8 % / 22,7 % (434 / 443 / 413 / 378).

Toute question ajoutée ou retirée doit être répercutée ici, dans `README.md` et au §13 du
`CAHIER_DES_CHARGES.md`, après un nouveau passage de `verifier-quiz.js` (les compteurs de l'accueil,
eux, sont lus dans les données et ne se corrigent pas à la main).

### 11.1 Intervalle de caractères autorisés dans les données

Relevé réel sur les données, mesuré le 20 octobre 2026 (53 fichiers de quiz, 53 fiches, 5 registres) :
**103 signes non ASCII
distincts**, tous justifiés par le français, le wolof ou les notations scientifiques. La liste est
donnée par intervalles Unicode (bornes incluses),
et `verifier-quiz.js` la contrôle à la lettre :

| Intervalle | Ce qu'il couvre | Exemples présents |
|---|---|---|
| `U+0020–U+007E` | ASCII imprimable | lettres, chiffres, `( ) / = - + , . ; : ! ?` |
| `U+00A0–U+00FF` | Latin-1 | `à á â ã ç è é ê î ï ô ù û À Â É Î`, `« » ° ± ² ³ ¹ ½ µ · × ÷` |
| `U+0100–U+017F` | Latin étendu-A | `œ` (seul signe réellement présent ; `Œ`, `ñ`, `ë` sont couverts d'avance pour les capitales et le wolof) |
| `U+0370–U+03FF` | grec | `α β γ λ π ρ Δ` (radiations, longueur d'onde, masse volumique) |
| `U+1D00–U+1D7F` | extensions phonétiques | `ᵉ` — l'indice des niveaux « 6ᵉ », « 5ᵉ », « 4ᵉ », « 3ᵉ » |
| `U+2000–U+20CF` | ponctuation générale, exposants/indices, devises | `’ “ ” – — … ‰ ′` et `⁰ ⁴ ⁵ ⁷ ⁸ ⁺ ⁻ ⁿ ₀ ₁ ₂ ₆ ₇ ₉ ₊ ₋` |
| `U+2110–U+214F` | symboles assimilés aux lettres | `ℕ ℚ ℝ ℤ` |
| `U+2190–U+21FF` | flèches | `→` (liquide → gaz, étapes d'une démonstration) |
| `U+2200–U+22FF` | opérateurs mathématiques | `∈ − √ ∞ ∩ ∪ ≈ ≠ ≤ ⊂` |

**Refusés** (le script sort un code 1 et nomme chaque caractère avec son `U+`) : tout autre bloc —
cyrillique `U+0400–U+04FF`, arabe `U+0600–U+06FF`, hébreu, devanagari, CJK `U+3000–U+9FFF`, emoji et
pictogrammes `U+1F300–U+1FAFF`, jetons de remplacement `U+FFFD` (texte mal encodé) — ainsi que
l'apostrophe droite `'` et l'antislash, remplacés respectivement par `’` et par une réécriture.

Deux précisions qui évitent les faux négatifs :
- le `−` (U+2212) des formules n'est **pas** le `-` ASCII : les deux sont autorisés, ne pas « corriger »
  l'un en l'autre dans les explications de calcul ;
- une règle trop étroite du type « Latin-1 + Latin étendu-A uniquement » est **fausse** : elle aurait
  rejeté `’ « » ᵉ ² ∩ ⁻` et la moitié du corpus. La liste ci-dessus est l'inventaire complet, pas une
  approximation.

---

## 12. Vérifications exigées avant livraison

1. `node verifier-quiz.js` à la racine : charge les 53 fichiers, sort code 0, et vérifie
   identifiants au format attendu, énoncés non vides, ≥ 2 options, options non vides et non doublonnées,
   index dans les bornes, explication ≥ 20 caractères, absence de doublon d'énoncé dans une leçon,
   **caractères limités à la liste du §11.1**, pas d'apostrophe droite ni d'antislash, parité des balises
   `<script>`, répartition des positions. Il a été validé en introduisant volontairement un fichier
   piégé contenant `U+65E5 U+672C U+0438 U+1F680` (idéogrammes, cyrillique, fusée) : le script le
   refuse avec le code 1 et signale au passage le fichier non déclaré dans les pages.
   **Angle mort connu** : ce contrôle ne vérifie pas que le second argument de `lecon(...)` résout une
   fiche existante. Après toute modification d'un registre, vérifier à part, par exemple dans la
   console de `cours.html` : les leçons dont `l.f` n'est pas dans `JK.FICHES` (réel au 20 octobre 2026 :
   0 lien cassé sur 539 leçons, 144 leçons reliées à une fiche).
2. Syntaxe : `node --check js/quiz/<fichier>.js` sur chaque fichier, plus `js/quiz.js` et
   `js/programmes.js` après modification.
3. Dans le navigateur, console vide sur les quatre pages, et `localStorage` consultable sous
   l'origine `file://` (les pages testées ouvrent `exercices.html`, pas un serveur).
4. Aucune barre de défilement horizontal à 360, 768 et 1440 px (`document.documentElement.scrollWidth`
   égal à `clientWidth`).
5. Liens profonds testés **en cliquant sur un vrai `<a>`** : beaucoup d'automates de navigation
   suppriment la query et le fragment en `file://`, ce qui masquerait une régression.
6. Bouton « Effacer ma progression locale » testé : toutes les clés `jangalekat.v1.*` disparaissent.
7. Le conseil « prochaine étape » change quand on modifie `studied`, `tasks`, `lastScore` ou `scores`.
8. Progression laissée **vierge** après la démonstration.

---

## 13. Règle d'honnêteté sur le contenu

Tout ce que le projet rédige lui-même est signalé comme tel, partout :

- bandeau « Prototype local — version 0.10 » sur l'accueil ; note « Questions rédigées par le porteur
  du projet, à vérifier par un enseignant » sur la page Quiz ;
- statut de vérification affiché sur chaque fiche, avec sa date de relecture ;
- en-tête de chaque fichier de `js/quiz/` : « Contenu auto-rédigé par Jàngalekat, non relu par un
  enseignant » (et, pour Terminale, « Rien ici n'est un sujet de baccalauréat ») ;
- statut de provenance sous chaque liste de leçons, y compris « aucune source officielle jointe : liste
  de démonstration » pour les 56 repères d'histoire, répété sur l'accueil ;
- aucun chiffre inventé : uniquement ceux des fiches, avec « environ » quand la source est vague ;
- la mention « cahier des charges v1.0 » désigne le document de commande, pas une validation du contenu.

Un contenu auto-rédigé ne doit **jamais** passer pour officiel ou sourcé.

---

## 14. Règles produit et accessibilité

- Mode mémorisation : une ligne masquée, l'élève s'auto-évalue « Je sais » / « À revoir », stocké dans
  `recall`. Rien n'est calculé automatiquement ; une barre montre le taux d'éléments sues.
- Score : calculé par le programme. Pas de compte, pas de classement, pas d'envoi de réponses.
- Planificateur : tâche = `label` (longueur maximale contrôlée), matière, échéance facultative ; les
  retards remontent dans le tableau de bord.
- Accessibilité effective :
  - HTML sémantique ; chaque question est un `fieldset` avec son `legend` numéroté ;
  - `#live-region` (`aria-live="polite"`, hors des vues) annonce le changement de section, l'avancement
    « n / N question(s) répondues » à chaque réponse, puis « Score de la leçon : X sur N. » ;
  - focus visible via `:focus-visible`, cibles tactiles `min-height: 44px`, contrastes AA
    (`--vert-action` pour le vert cliquable), navigation clavier complète au quiz (Tab, flèches, Espace).

---

## 15. README.md — contenu obligatoire

1. Comment lancer le prototype (double-clic sur `index.html`, ou `python -m http.server` si le
   navigateur bloque `localStorage` en `file://`).
2. Arborescence des fichiers et rôle de chacun.
3. Avertissement sur le contenu auto-rédigé (§13) et ses limites.
4. Section « Le quiz : une leçon = un quiz » : identifiants, registre, scores par leçon, règle
   « Quiz en cours de rédaction », équilibrage des positions, fragilité des identifiants (§7.1).
5. Comment ajouter une fiche et comment ajouter un quiz (avec la balise `<script>` à ne pas oublier).
6. Chiffres de contrôle (§11) et liste des vérifications effectuées (§12), y compris ce qui n'a **pas**
   pu être vérifié ici (relecture enseignant, test élèves).
7. Ce qui reste à faire (§16).

---

## 16. Reste à faire — à ne pas présenter comme terminé

- Relecture des 53 fiches et des 1668 questions par un enseignant (aucune ne l'a été).
- Alignement des fiches SVT sur les programmes officiels 2008 (enseignement moyen) et 2015 (second
  cycle), repérés le 18 octobre 2026 mais non encore travaillés leçon par leçon.
- Fiches d'histoire pour Seconde / Première / Terminale (aucune), et confirmation par un professeur des
  56 repères du registre d'histoire avant de le passer en « programme officiel ».
- Listes officielles toujours introuvables : physique-chimie de 6ᵉ et 5ᵉ, anglais, technologie, SES et
  éducation civique. Mathématiques et SVT sont désormais couverts par leurs documents institutionnels.
- Test avec 5 à 10 élèves, en classe réelle, sur téléphone.
- Manifeste PWA et service worker (hors phase 1 : ils exigent un serveur HTTPS).
- Publication en HTTPS après validation — **et** décision explicite sur la perte de la progression,
  car `localStorage` n'est pas transféré d'un appareil à l'autre.

---

## 17. Ce que tu ne dois PAS faire

- Inventer des fonctionnalités (compte, classement, tuteur IA, téléchargement, synchronisation).
- Écrire des compteurs ou des scores en dur dans le HTML : toujours les lire dans les données.
- Utiliser `innerHTML` avec du contenu non échappé (`h()` construit des nœuds, c'est la règle).
- Charger une ressource externe (police, icône, script, image, iframe).
- Laisser une leçon sans questions prétendre à un quiz : afficher « Quiz en cours de rédaction ».
- Ajouter une question sans mettre à jour §11, §9.2 et `README.md`.
- Insérer une leçon au milieu d'un chapitre de `js/programmes.js`.
- Présenter du contenu auto-rédigé comme officiel, ou une vérification non faite comme faite.

---

## 18. Écarts corrigés dans cette version (à ne pas réintroduire)

La version antérieure de ce prompt décrivait un projet voisin mais non conforme au code : formats de
`studied` (objet au lieu d'un tableau), `tasks` (`titre`/`échéance`/`fait` au lieu de
`label`/`due`/`done`), `lastScore` (`leconId`/`correct`), `scores` annoncé comme « meilleur score »
(alors c'est le dernier), une API `JK.store.get/set/clear` et un `JK.VERSION` inexistants, des fiches
sans `id` dérivé du titre, la validation « exactement 4 options » et une déduplication automatique que
le registre ne fait pas, `js/ecran-fiches.js` et des noms de fichiers `geo-2nde.js` / `geo-tle.js` qui
n'existent pas, la répartition 12/24/20/10/21/24/22 leçons par classe (réelle pour la géographie :
14/26/22/10/20/23/18, et 539 leçons au total une fois les cinq registres déclarés), les 25 quiz de
fiches annoncés dans `herites.js` seul (réel : 17 supports autonomes, dont les questions se répartissent
entre
`herites.js`, `sciences-maths-pc.js` et `sciences-svt-histoire.js`), un ordre de
conseil du tableau de bord différent et un seuil de 2/3 au lieu de 80 %, le bandeau de version prétendu
présent sur les quatre pages, une règle de caractères « Latin-1 + Extended-A » qui aurait interdit
`’ « » ᵉ ² ∩ ⁻` présents partout, une regex d'équilibrage trop large, et `aria-live` promis sur chaque
réponse sans être implémenté — il l'est maintenant (§14).
