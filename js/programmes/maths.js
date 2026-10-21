/* Programme de Mathématiques : titres de leçons recopiés des textes sénégalais, classe par classe.
   L'écran qui dessine ces listes est dans js/programmes.js ; l'identifiant permanent de chaque
   leçon (maths-<code de classe>-c<chapitre>-l<leçon>) est fabriqué par JK.registreDeProgramme()
   dans js/app.js — il dépend de l'ordre des lignes.

   Provenance, classe par classe :
   - 6ᵉ, 4ᵉ, 3ᵉ : listes « Leçon 1 : … » du Guide d'usage des programmes – Mathématiques
     (DEMSG, République du Sénégal, septembre 2012), publiées par l'APAMS ; recoupées avec la
     progression hebdomadaire des programmes officiels du premier cycle (octobre 2006).
   - 5ᵉ : uniquement le Guide d'usage 2012. Aucun programme officiel de 5ᵉ n'a été trouvé sur le
     site de l'APAMS : cette liste-là a le statut « fascicule pédagogique », pas « arrêté ».
   - Seconde, Première, Terminale : programmes officiels de mathématiques du second cycle,
     octobre 2006 (APAMS), série scientifique seulement (Seconde S, Premières S2 et S4,
     Terminales S2 et S4). Les séries S1/S3, L, T, G existent pour les mêmes classes : elles ne
     sont pas recopiées ici.

   Honnêteté : ce fichier ne contient QUE des titres (domaines, chapitres, leçons) tels que les
   documents les énumèrent, dans leur ordre. Ni volumes horaires par leçon, ni progressions
   annuelles, ni commentaires, ni compétences exigibles. Au lycée, les documents ne prescrivent
   aucun ordre annuel : ils renvoient explicitement au professeur le choix de la progression et
   de la répartition horaire — l'ordre ci-dessous est donc l'ordre du document, pas un ordre de
   l'année. Casse et accents normalisés (les guides composent leurs titres en majuscules sans
   accents) ; les coquilles du guide sont relevées dans SOURCE. Les quiz de ces leçons sont
   auto-rédigés par Jàngalekat : ils n'ont aucune source officielle. */
(function () {
  'use strict';

  const { lecon } = JK;

  JK.registreDeProgramme({
    matiere: 'Mathématiques',
    code: 'maths',
    /* Statut global : programme officiel (préface des programmes 2006, CNREF et commissions
       nationales). Réservoir d'honnêteté : la classe de 5ᵉ, elle, n'est assise que sur le Guide
       d'usage 2012 et relève du fascicule pédagogique, pas de l'arrêté — voir SOURCE. */
    autorite: 'programme_officiel',
    reference: 'MEN / APAMS, Programmes de mathématiques, premier cycle (6ᵉ, 4ᵉ, 3ᵉ) et second cycle série scientifique (Seconde S, Premières S2-S4, Terminales S2-S4), octobre 2006 ; Guide d’usage des programmes – Mathématiques, DEMSG, septembre 2012',
    DOCUMENTS: [
      {
        reference: 'Guide d’usage des programmes – Mathématiques, DEMSG, République du Sénégal, septembre 2012 (listes de leçons des classes de 6ᵉ, 5ᵉ, 4ᵉ, 3ᵉ)',
        url: 'http://www.apams.gouv.sn/content/guide-dusage-math%C3%A9matiques',
        consulteLe: '2026-10-18'
      },
      {
        reference: 'Programme de mathématiques du premier cycle, octobre 2006 — classe de 6ᵉ',
        url: 'http://www.apams.gouv.sn/content/programme-de-math%C3%A9matiques-premier-cycle-octobre-2006-classe-de-6e',
        consulteLe: '2026-10-18'
      },
      {
        reference: 'Programme de mathématiques du premier cycle, octobre 2006 — classe de 4ᵉ',
        url: 'http://www.apams.gouv.sn/content/programme-de-math%C3%A9matiques-premier-cycle-octobre-2006-classe-de-4e',
        consulteLe: '2026-10-18'
      },
      {
        reference: 'Programme de mathématiques du premier cycle, octobre 2006 — classe de 3ᵉ',
        url: 'http://www.apams.gouv.sn/content/programme-de-math%C3%A9matiques-premier-cycle-octobre-2006-classe-de-3e',
        consulteLe: '2026-10-18'
      },
      {
        reference: 'Programmes de mathématiques du second cycle — Seconde S, octobre 2006',
        url: 'http://www.apams.gouv.sn/content/programme-de-math%C3%A9matiques-seconde-s-octobre-2006',
        consulteLe: '2026-10-18'
      },
      {
        reference: 'Programmes de mathématiques du second cycle — Premières S2 et S4, octobre 2006',
        url: 'http://www.apams.gouv.sn/content/programme-de-math%C3%A9matiques-premi%C3%A8res-s2-et-s4-octobre-2006',
        consulteLe: '2026-10-18'
      },
      {
        reference: 'Programmes de mathématiques du second cycle — Terminales S2 et S4, octobre 2006',
        url: 'http://www.apams.gouv.sn/content/programme-de-math%C3%A9matiques-terminales-s2-et-s4-octobre-2006',
        consulteLe: '2026-10-18'
      }
    ],
    SOURCE: 'Ce qui est recopié : les titres des leçons de 6ᵉ, 5ᵉ, 4ᵉ et 3ᵉ sont les lignes « Leçon N : … » du Guide d’usage des programmes – Mathématiques (DEMSG, septembre 2012), regroupées sous les deux domaines du document (Activités numériques, puis Activités géométriques) et dans l’ordre du document — 19 leçons en 6ᵉ, 12 en 5ᵉ, 14 en 4ᵉ, 13 en 3ᵉ, ce que le guide annonce dans sa présentation. Les intitulés sont recoupés avec la progression hebdomadaire des programmes officiels du premier cycle d’octobre 2006 (6ᵉ, 4ᵉ, 3ᵉ) publiés par l’APAMS ; la préface de ces textes, lue dans le volume du second cycle, cite la CNREF et les commissions nationales : c’est ce statut de programme officiel qui est retenu pour ces trois classes. LA 5ᵉ FAIT EXCEPTION : aucun programme officiel de 5ᵉ n’existe sur le site de l’APAMS, sa liste ne vient QUE du Guide d’usage 2012, un fascicule pédagogique institutionnel et non un arrêté — son autorité propre est donc « fascicule_pedagogique », même si le statut affiché ci-dessus est celui de la majorité des classes. Lycée (Seconde S, Premières S2-S4, Terminales S2-S4) : les chapitres sont les subdivisions romaines ou lettrées des programmes officiels d’octobre 2006 (I. CALCUL VECTORIEL, A) GÉOMÉTRIE PLANE…) et les leçons les blocs numérotés de la colonne « Contenus » (1) Consolidation, 2) Barycentre…), avec leur intitulé et leur ordre du document. Ce qui NE vient PAS des documents : les textes du second cycle n’imposent AUCUN ordre annuel — l’introduction générale des Premières S2 et S4 dit expressément que « le professeur choisira la progression de son choix » — et ne donnent qu’un volume horaire hebdomadaire de classe, jamais par leçon ; l’ordre ci-dessous est donc purement l’ordre du papier. Les sous-blocs lettrés (a, b, c…) et les listes à tirets ne sont pas recopiés comme leçons : un chapitre sans bloc numéroté devient une seule leçon portant son titre, et un domaine sans chapitre devient un chapitre d’une seule leçon — d’où les 9 leçons de Terminale. Coquilles relevées plutôt que laissées : le guide compose ses titres en majuscules et écrit « LA GEOMETRE DANS L’ESPACE » (5ᵉ) pour géométrie, « PROPORTIONNALITE » avec deux l, « SYMETRIE » et « PARALLELES » sans accent ; casse et accents ont été remis en forme et ces trois coquilles corrigées. « Repérage » en 6ᵉ est plus court que le « Repérage sur la droite et le plan » des programmes 2006. Au titre « II. L’outil métrique » de Première, le bloc « Produit scalaire » apparaît sans numéro dans le fichier texte extrait du PDF. Enfin, les quiz associés à ces leçons sont auto-rédigés par Jàngalekat : aucune question ne vient des documents officiels, et aucune n’a été relue par un enseignant.',
    CLASSES: [
      {
        niveau: '6ᵉ',
        titre: 'Classe de 6ème',
        nbLecons: '19 leçons (10 numériques + 9 géométriques)',
        note: 'Liste du Guide d’usage 2012, recoupée avec la progression hebdomadaire du programme officiel de 6ᵉ (octobre 2006). Le guide découpe l’année en deux parties, Activités numériques puis Activités géométriques ; chaque leçon porte un numéro dans sa partie.',
        chapitres: [
          {
            nom: 'Activités numériques',
            lecons: [
              lecon('Leçon 1 — Nombres décimaux arithmétiques'),
              lecon('Leçon 2 — Addition de deux nombres décimaux'),
              lecon('Leçon 3 — Soustraction de deux nombres décimaux arithmétiques'),
              lecon('Leçon 4 — Rangement des nombres décimaux arithmétiques'),
              lecon('Leçon 5 — Multiplication des nombres décimaux arithmétiques'),
              lecon('Leçon 6 — Division des nombres décimaux arithmétiques'),
              lecon('Leçon 7 — Organisation d’un calcul'),
              lecon('Leçon 8 — Proportionnalité'),
              lecon('Leçon 9 — Nombres décimaux relatifs', 'relatifs'),
              lecon('Leçon 10 — Repérage')
            ]
          },
          {
            nom: 'Activités géométriques',
            lecons: [
              lecon('Leçon 1 — Introduction à la géométrie'),
              lecon('Leçon 2 — Le cercle'),
              lecon('Leçon 3 — Droites perpendiculaires et droites parallèles'),
              lecon('Leçon 4 — Symétrie orthogonale par rapport à une droite donnée'),
              lecon('Leçon 5 — Les angles'),
              lecon('Leçon 6 — Les polygones'),
              lecon('Leçon 7 — Les aires'),
              lecon('Leçon 8 — La géométrie dans l’espace'),
              lecon('Leçon 9 — Repérage sur la sphère')
            ]
          }
        ]
      },
      {
        niveau: '5ᵉ',
        titre: 'Classe de 5ème',
        nbLecons: '12 leçons (6 numériques + 6 géométriques)',
        note: 'Liste recopiée du seul Guide d’usage 2012 : statut fascicule pédagogique, pas programme officiel — aucun programme de 5ᵉ publié par l’APAMS n’a été retrouvé. Le guide titre ici la seconde partie « Chapitre 2 : Activités géométriques ».',
        chapitres: [
          {
            nom: 'Activités numériques',
            lecons: [
              lecon('Leçon 1 — Puissance dans D'),
              lecon('Leçon 2 — Multiples et diviseurs'),
              lecon('Leçon 3 — Les fractions'),
              lecon('Leçon 4 — La proportionnalité'),
              lecon('Leçon 5 — Nombres décimaux relatifs'),
              lecon('Leçon 6 — Représentation graphique d’un tableau de correspondance')
            ]
          },
          {
            nom: 'Activités géométriques',
            lecons: [
              lecon('Leçon 1 — Symétrie centrale'),
              lecon('Leçon 2 — Les angles'),
              lecon('Leçon 3 — Les parallélogrammes'),
              lecon('Leçon 4 — Les triangles'),
              lecon('Leçon 5 — Les autres quadrilatères'),
              lecon('Leçon 6 — La géométrie dans l’espace')
            ]
          }
        ]
      },
      {
        niveau: '4ᵉ',
        titre: 'Classe de 4ème',
        nbLecons: '14 leçons (6 numériques + 8 géométriques)',
        note: 'Liste du Guide d’usage 2012, recoupée avec le programme officiel de 4ᵉ (octobre 2006), dont la progression hebdomadaire porte les mêmes chapitres (distances, droites des milieux, projection orthogonale…).',
        chapitres: [
          {
            nom: 'Activités numériques',
            lecons: [
              lecon('Leçon 1 — Nombres rationnels'),
              lecon('Leçon 2 — Calcul algébrique'),
              lecon('Leçon 3 — Équations à une inconnue'),
              lecon('Leçon 4 — Inéquations et systèmes de deux inéquations à une inconnue'),
              lecon('Leçon 5 — Applications linéaires'),
              lecon('Leçon 6 — Statistiques')
            ]
          },
          {
            nom: 'Activités géométriques',
            lecons: [
              lecon('Leçon 1 — Distances'),
              lecon('Leçon 2 — Droites des milieux'),
              lecon('Leçon 3 — Droites remarquables dans un triangle ; bissectrices et médianes'),
              lecon('Leçon 4 — Triangle rectangle'),
              lecon('Leçon 5 — Translations et vecteurs'),
              lecon('Leçon 6 — Rotations et polygones réguliers'),
              lecon('Leçon 7 — Projection orthogonale dans le plan'),
              lecon('Leçon 8 — Géométrie dans l’espace')
            ]
          }
        ]
      },
      {
        niveau: '3ᵉ',
        titre: 'Classe de 3ème',
        nbLecons: '13 leçons (6 numériques + 7 géométriques)',
        note: 'Liste du Guide d’usage 2012, recoupée avec le programme officiel de 3ᵉ (octobre 2006). Le théorème de Pythagore, lui, est une leçon de 4ᵉ (« Triangle rectangle ») dans ces textes : la 3ᵉ commence la géométrie par Thalès.',
        chapitres: [
          {
            nom: 'Activités numériques',
            lecons: [
              lecon('Leçon 1 — Racine carrée'),
              lecon('Leçon 2 — Applications affines et applications affines par intervalles'),
              lecon('Leçon 3 — Équations et inéquations à une inconnue'),
              lecon('Leçon 4 — Équations et système d’équations à deux inconnues'),
              lecon('Leçon 5 — Inéquations et système d’inéquations à deux inconnues'),
              lecon('Leçon 6 — Statistiques')
            ]
          },
          {
            nom: 'Activités géométriques',
            lecons: [
              lecon('Leçon 1 — Théorème de Thalès'),
              lecon('Leçon 2 — Relations trigonométriques dans un triangle rectangle'),
              lecon('Leçon 3 — Angle inscrit'),
              lecon('Leçon 4 — Vecteurs'),
              lecon('Leçon 5 — Transformations du plan'),
              lecon('Leçon 6 — Repérage dans le plan'),
              lecon('Leçon 7 — Géométrie dans l’espace')
            ]
          }
        ]
      },
      {
        niveau: 'Seconde',
        titre: 'Seconde S — programme du second cycle, octobre 2006',
        nbLecons: '27 leçons · 5 heures par semaine',
        note: 'Ordre et regroupements du document, aucun ordre annuel n’y est prescrit : l’introduction générale laisse au professeur « la meilleure répartition horaire ». Séries S1/S3, L, T, G non recopiées.',
        chapitres: [
          {
            nom: 'Géométrie plane — I. Calcul vectoriel',
            lecons: [
              lecon('1) Consolidation'),
              lecon('2) Barycentre')
            ]
          },
          {
            nom: 'Géométrie plane — II. Repérage cartésien',
            lecons: [
              lecon('Repérage cartésien')
            ]
          },
          {
            nom: 'Géométrie plane — III. Angles et trigonométrie',
            lecons: [
              lecon('1) Rappels et compléments sur les angles géométriques'),
              lecon('2) Orientation du plan'),
              lecon('3) Lignes trigonométriques')
            ]
          },
          {
            nom: 'Géométrie plane — IV. Produit scalaire',
            lecons: [
              lecon('1) Définition'),
              lecon('2) Propriétés'),
              lecon('3) Norme'),
              lecon('4) Orthogonalité'),
              lecon('5) Expressions analytiques'),
              lecon('6) Relations métriques')
            ]
          },
          {
            nom: 'Géométrie plane — V. Transformations',
            lecons: [
              lecon('Transformations')
            ]
          },
          {
            nom: 'Géométrie dans l’espace',
            lecons: [
              lecon('1. Représentation de l’espace'),
              lecon('2. Positions relatives de droites et de plans dans l’espace'),
              lecon('3) Orthogonalité dans l’espace')
            ]
          },
          {
            nom: 'Activités numériques — I. Calcul dans IR',
            lecons: [
              lecon('Calcul dans IR')
            ]
          },
          {
            nom: 'Activités numériques — II. Intervalles et calcul approché',
            lecons: [
              lecon('Intervalles et calcul approché', 'ensembles-nombres')
            ]
          },
          {
            nom: 'Activités numériques — III. Fonctions numériques d’une variable réelle',
            lecons: [
              lecon('1) Généralités'),
              lecon('2) Étude de fonctions')
            ]
          },
          {
            nom: 'Activités numériques — IV. Équations et inéquations',
            lecons: [
              lecon('1) Équations et inéquations du 2nd degré'),
              lecon('2) Systèmes d’équations et d’inéquations du 1er degré à deux inconnues')
            ]
          },
          {
            nom: 'Activités numériques — V. Polynômes et fractions rationnelles',
            lecons: [
              lecon('1) Polynômes'),
              lecon('2. Fractions rationnelles'),
              lecon('3. Division euclidienne de deux polynômes')
            ]
          },
          {
            nom: 'Statistique',
            lecons: [
              lecon('1) Consolidation'),
              lecon('2) Paramètres de dispersion')
            ]
          }
        ]
      },
      {
        niveau: 'Première',
        titre: 'Premières S2 et S4 — programme du second cycle, octobre 2006',
        nbLecons: '41 leçons · 6 heures par semaine',
        note: 'Le document recommande de commencer par le chapitre « Applications » mais ne prescrit aucune progression annuelle : l’ordre ci-dessus reste l’ordre du papier. Séries S1/S3 non recopiées.',
        chapitres: [
          {
            nom: 'Analyse — I. Généralités sur les fonctions numériques d’une variable réelle',
            lecons: [
              lecon('1) Fonctions associées à une fonction'),
              lecon('2) Éléments de symétrie de la courbe représentative d’une fonction'),
              lecon('3) Représentation graphique de la réciproque d’une fonction bijective')
            ]
          },
          {
            nom: 'Analyse — II. Limites',
            lecons: [
              lecon('1) Approche intuitive'),
              lecon('2) Notation'),
              lecon('3) Limite à droite, à gauche'),
              lecon('4) Extension de la notion de limite'),
              lecon('5) Opérations sur les limites')
            ]
          },
          {
            nom: 'Analyse — III. Continuité',
            lecons: [
              lecon('1) Continuité en un point'),
              lecon('2) Continuité sur un intervalle')
            ]
          },
          {
            nom: 'Analyse — IV. Dérivation',
            lecons: [
              lecon('1) Fonction dérivable en un point'),
              lecon('2) Interprétation géométrique'),
              lecon('3) Nombre dérivé à gauche, nombre dérivé à droite'),
              lecon('4) Fonction dérivée'),
              lecon('5) Dérivée et sens de variation'),
              lecon('6) Dérivée et bijection')
            ]
          },
          {
            nom: 'Analyse — V. Étude et représentation graphique de fonctions',
            lecons: [
              lecon('1) Fonctions polynômes de degré inférieur ou égal à 3'),
              lecon('2) Fonctions rationnelles'),
              lecon('3) Fonctions irrationnelles'),
              lecon('4) Fonctions sinus, cosinus, tangente'),
              lecon('5) Exemple d’utilisation de la représentation graphique pour la résolution d’équations ou d’inéquations')
            ]
          },
          {
            nom: 'Analyse — VI. Suites numériques',
            lecons: [
              lecon('1) Généralités'),
              lecon('2) Suites arithmétiques, suites géométriques'),
              lecon('3) Convergence d’une suite')
            ]
          },
          {
            nom: 'Dénombrement',
            lecons: [
              lecon('1) Notions élémentaires de la théorie des ensembles'),
              lecon('2) Ensemble fini'),
              lecon('3) P-listes'),
              lecon('4) Combinaisons')
            ]
          },
          {
            nom: 'Statistique',
            lecons: [
              lecon('1) Série à une variable'),
              lecon('2) Série à deux variables')
            ]
          },
          {
            nom: 'Algèbre — I. Applications',
            lecons: [
              lecon('Applications')
            ]
          },
          {
            nom: 'Algèbre — II. Équations – Inéquations – Systèmes',
            lecons: [
              lecon('1) Équations – Inéquations'),
              lecon('2) Système d’équations linéaires dans IR'),
              lecon('3) Systèmes d’équations ou d’inéquations, programmation linéaire')
            ]
          },
          {
            nom: 'Géométrie — I. L’outil vectoriel et analytique',
            lecons: [
              lecon('1) Rappels et compléments sur les vecteurs du plan et de l’espace'),
              lecon('2) Barycentre de quatre points pondérés dans le plan')
            ]
          },
          {
            nom: 'Géométrie — II. L’outil métrique',
            lecons: [
              lecon('Produit scalaire'),
              lecon('2) Angles orientés'),
              lecon('3) Trigonométrie')
            ]
          },
          {
            nom: 'Géométrie — III. L’outil des transformations',
            lecons: [
              lecon('L’outil des transformations')
            ]
          },
          {
            nom: 'Géométrie — IV. Compléments de géométrie dans l’espace',
            lecons: [
              lecon('Compléments de géométrie dans l’espace')
            ]
          }
        ]
      },
      {
        niveau: 'Terminale',
        titre: 'Terminales S2 et S4 — programme du second cycle, octobre 2006',
        nbLecons: '9 leçons · 5 heures par semaine',
        note: 'Peu de leçons parce que le document ne numérote pas ses contenus en leçons : hormis le chapitre « Fonctions numériques », ses blocs sont des listes à tirets, qui ne sont pas recopiées. Aucun ordre annuel prescrit.',
        chapitres: [
          {
            nom: 'Analyse — I. Fonctions numériques',
            lecons: [
              lecon('1) Rappels et compléments'),
              lecon('2) Dérivées et primitives'),
              lecon('3) Fonctions usuelles')
            ]
          },
          {
            nom: 'Analyse — II. Suites numériques',
            lecons: [
              lecon('Suites numériques')
            ]
          },
          {
            nom: 'Analyse — III. Calcul intégral',
            lecons: [
              lecon('Calcul intégral')
            ]
          },
          {
            nom: 'Analyse — IV. Équations différentielles linéaires',
            lecons: [
              lecon('Équations différentielles linéaires')
            ]
          },
          {
            nom: 'Organisation de données — I. Statistiques',
            lecons: [
              lecon('Statistiques')
            ]
          },
          {
            nom: 'Organisation de données — II. Probabilités',
            lecons: [
              lecon('Probabilités')
            ]
          },
          {
            nom: 'Algèbre et géométrie',
            lecons: [
              lecon('Algèbre et géométrie')
            ]
          }
        ]
      }
    ]
  });
})();
