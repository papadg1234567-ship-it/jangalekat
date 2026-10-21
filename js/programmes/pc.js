/* Programme de Physique-Chimie : listes de leçons recopiées des copies du programme sénégalais
   d'août 2008 (cycle moyen 4ᵉ-3ᵉ, Seconde, Première S1-S2, Terminale S1-S2), recoupées pour le
   cycle moyen avec les fascicules ADEM-Dakar. L'écran qui dessine ces listes est dans
   js/programmes.js ; l'identifiant permanent de chaque leçon (pc-<code de classe>-c<chapitre>-
   l<leçon>) est fabriqué par JK.registreDeProgramme() dans js/app.js.

   Ces copies ne portent ni page de garde, ni en-tête « République du Sénégal », ni mention du
   ministère ou de l'IGEN : la pagination imprimée court en continu de la page 20 à la page 228,
   ce qui correspond à un extrait d'un fascicule national plus vaste (tome 1). Elles sont donc
   enregistrées comme fascicule pédagogique et jamais comme arrêté.

   Méthode de relevé, appliquée partout :
   - une leçon par chapitre du document, dans l'ordre du document, sous le chapitre parent
     « Programme de physique » puis « Programme de chimie » tel que le document le titre ;
   - titre pris au relevé de chapitre quand il y est complet (4ᵉ et 3ᵉ, confirmé par les
     fascicules ADEM), sinon au tableau du sommaire quand le relevé est coupé en fin de ligne
     (Seconde, Première, Terminale) ;
   - durée toujours prise à la colonne « Horaire » du tableau du sommaire : c'est la seule dont
     les chiffres reproduisent les totaux imprimés par classe ;
   - série scientifique seule (S, S1, S2) : les variantes L2, présentes dans le même fascicule,
     sont exclues ;
   - les titres supplémentaires de révision sont rédigés par Jàngalekat et séparés des chapitres
     relevés dans le fascicule ; ils ne sont pas présentés comme des leçons prescrites ;
   - les parcours de 6ᵉ et de 5ᵉ sont des compléments de découverte, faute de liste de programme
     de ces niveaux trouvée dans les documents consultés.
*/
(function () {
  'use strict';

  const { lecon } = JK;

  JK.registreDeProgramme({
    matiere: 'Physique-Chimie',
    code: 'pc',
    autorite: 'fascicule_pedagogique',
    reference: 'Programmes de sciences physiques des cycles moyen et secondaire général, copies datées d’août 2008 (tome 1, pages 20 à 228, page de garde absente)',
    url: 'https://unesdoc.unesco.org/ark:/48223/pf0000191124',
    consulteLe: '2026-10-18',
    DOCUMENTS: [
      {
        reference: 'Programmes de sciences physiques, cycle moyen (4ᵉ, 3ᵉ) puis Seconde, Première S1-S2 et Terminale S1-S2 — copies dactylographiées d’août 2008',
        url: 'https://unesdoc.unesco.org/ark:/48223/pf0000191124',
        consulteLe: '2026-10-18'
      },
      {
        reference: 'Fascicule ADEM-Dakar de sciences physiques, classe de 4ᵉ, v10.17 (recoupement des titres de 4ᵉ et de 3ᵉ)',
        url: 'https://senprof.education.sn/ADEM/Physique-chimie%203e/res/ADEM_FASCICULE_PC_4eme_v10_17.pdf',
        consulteLe: '2026-10-18'
      }
    ],
    SOURCE: 'Titres et ordres des chapitres principaux recopiés des copies dactylographiées des « Programmes de sciences physiques » du Sénégal datées d’août 2008 : cycle moyen (4ᵉ et 3ᵉ), puis classes de Seconde S, de Première S1-S2 et de Terminale S1-S2. Ces copies n’affichent ni ministère, ni IGEN, ni Commission des programmes : la page de garde manque et la pagination imprimée suit un fil continu de la page 20 à la page 228, signe d’un extrait de fascicule plus vaste. Le statut retenu est donc celui d’un fascicule pédagogique, et le mot « officiel » n’est pas employé ici. La notice du dépôt numérique qui publie le tome 1 l’attribue au ministère sénégalais de l’Éducation, mais cette attribution vient du catalogue et non d’une page imprimée dans l’extrait. Les chapitres de 4ᵉ et de 3ᵉ ont été recoupés avec les fascicules ADEM-Dakar de sciences physiques (Ministère de l’Éducation nationale, Inspection d’académie de Dakar, Agence Française de Développement, v10.17), qui reprennent les mêmes titres dans le même ordre. Les leçons des chapitres complémentaires de 4ᵉ à Terminale et les parcours de découverte de 6ᵉ et 5ᵉ sont rédigés par Jàngalekat pour enrichir les révisions ; ils ne viennent pas d’une liste officielle et ne sont pas relus par un enseignant. Aucune liste de programme vérifiable de 6ᵉ ou de 5ᵉ n’a été retrouvée.',
    CLASSES: [
      {
        niveau: '6ᵉ',
        titre: 'Compléments de découverte en sciences physiques, rédigés par Jàngalekat',
        nbLecons: '8 leçons complémentaires',
        note: 'Aucune liste de leçons de physique-chimie de 6ᵉ n’a été retrouvée dans les documents consultés. Ces huit leçons de découverte sont rédigées par Jàngalekat, hors programme vérifié ; elles n’ont ni horaire officiel ni statut de liste ministérielle.',
        chapitres: [
          {
            nom: 'Parcours de découverte Jàngalekat — contenu complémentaire, hors liste de programme vérifiée',
            lecons: [
              lecon('Découvrir la matière et ses trois états'),
              lecon('Mesurer une longueur, une masse et un volume'),
              lecon('Mélanges et méthodes simples de séparation'),
              lecon('L’eau : états et changements d’état'),
              lecon('L’air : un mélange de gaz qui occupe un volume'),
              lecon('Construire et schématiser un circuit électrique simple'),
              lecon('Sources de lumière, ombres et objets éclairés'),
              lecon('Décrire un mouvement et mesurer une durée')
            ]
          }
        ]
      },
      {
        niveau: '5ᵉ',
        titre: 'Compléments de découverte en sciences physiques, rédigés par Jàngalekat',
        nbLecons: '8 leçons complémentaires',
        note: 'Aucune liste de leçons de physique-chimie de 5ᵉ n’a été retrouvée dans les documents consultés. Ces huit leçons de découverte sont rédigées par Jàngalekat, hors programme vérifié ; elles n’ont ni horaire officiel ni statut de liste ministérielle.',
        chapitres: [
          {
            nom: 'Parcours de découverte Jàngalekat — contenu complémentaire, hors liste de programme vérifiée',
            lecons: [
              lecon('Masse, volume et masse volumique'),
              lecon('Dissolution, soluté et solution aqueuse'),
              lecon('Transformations physiques et transformations chimiques'),
              lecon('Circuits en série et en dérivation'),
              lecon('Intensité du courant et sécurité des mesures'),
              lecon('Réflexion de la lumière sur un miroir plan'),
              lecon('Trajectoire, durée et vitesse moyenne'),
              lecon('Température, thermomètre et transferts thermiques')
            ]
          }
        ]
      },
      {
        niveau: '4ᵉ',
        titre: 'Programme de physique et de chimie de la classe de quatrième',
        nbLecons: '12 chapitres + 4 compléments · 48 h (2 h / élève)',
        note: 'Deux parties, physique puis chimie, chacune précédée d’un tableau de sommaire donnant l’horaire de chaque chapitre : totaux imprimés 30 h de physique et 18 h de chimie, pour 2 h par élève. Les titres du tableau et ceux des relevés de chapitre coïncident, et le fascicule ADEM-Dakar de 4ᵉ reprend les mêmes douze chapitres dans le même ordre.',
        chapitres: [
          {
            nom: 'Programme de physique (30 h)',
            lecons: [
              lecon('Chapitre P1 — Introduction aux sciences physiques (2 h)'),
              lecon('Chapitre P2 — Grandeurs physiques et mesures (2 h)'),
              lecon('Chapitre P3 — Masse, masse volumique et densité (5 h)'),
              lecon('Chapitre P4 — Poids, relation entre poids et masse (5 h)'),
              lecon('Chapitre P5 — Introduction à l’électricité (9 h)'),
              lecon('Chapitre P6 — Sources et récepteurs de lumière (1 h)'),
              lecon('Chapitre P7 — Propagation rectiligne de la lumière (4 h)'),
              lecon('Chapitre P8 — Réflexion et réfraction de la lumière (2 h)')
            ]
          },
          {
            nom: 'Programme de chimie (18 h)',
            lecons: [
              lecon('Chapitre C1 — Mélanges et corps purs (6 h)'),
              lecon('Chapitre C2 — Structure de la matière (3 h)'),
              lecon('Chapitre C3 — Mole et grandeurs molaires (3 h)'),
              lecon('Chapitre C4 — Réaction chimique (6 h)')
            ]
          },
          {
            nom: 'Compléments de révision Jàngalekat — hors relevé du fascicule',
            lecons: [
              lecon('Conversions d’unités et ordre de grandeur'),
              lecon('Masse volumique : mesurer, calculer et comparer'),
              lecon('Mesurer une intensité et une tension dans un circuit'),
              lecon('Séparer les constituants d’un mélange')
            ]
          }
        ]
      },
      {
        niveau: '3ᵉ',
        titre: 'Programme de physique et de chimie de la classe de troisième',
        nbLecons: '11 chapitres + 4 compléments · 42 h (2 h / élève)',
        note: 'Même présentation : 24 h de physique, 18 h de chimie, 2 h par élève. Trois titres diffèrent entre le tableau du sommaire et le relevé du chapitre (« Énergie et rendement » d’un côté, « Transformations d’énergies » de l’autre ; « Notion de solution » / « Solutions aqueuses » ; « Quelques propriétés chimiques des métaux » / « Propriétés chimiques des métaux usuels ») : la forme du relevé de chapitre est retenue, car le fascicule ADEM-Dakar de 3ᵉ la confirme. Pour la dispersion de la lumière, le tableau donne 2 h, chiffre qui fait le total imprimé de 24 h, alors que le relevé du chapitre porte « Durée : 1 heure ».',
        chapitres: [
          {
            nom: 'Programme de physique (24 h)',
            lecons: [
              lecon('Chapitre P1 — Les lentilles minces (4 h)'),
              lecon('Chapitre P2 — Dispersion de la lumière (2 h)'),
              lecon('Chapitre P3 — Forces (3 h)'),
              lecon('Chapitre P4 — Travail et puissance mécaniques (3 h)'),
              lecon('Chapitre P5 — Électrisation par frottement, le courant électrique (4 h)'),
              lecon('Chapitre P6 — Résistance électrique (6 h)'),
              lecon('Chapitre P7 — Transformations d’énergies (2 h)')
            ]
          },
          {
            nom: 'Programme de chimie (18 h)',
            lecons: [
              lecon('Chapitre C1 — Solutions aqueuses (6 h)'),
              lecon('Chapitre C2 — Acides et bases (4 h)'),
              lecon('Chapitre C3 — Propriétés chimiques des métaux usuels (4 h)'),
              lecon('Chapitre C4 — Les hydrocarbures (4 h)')
            ]
          },
          {
            nom: 'Compléments de révision Jàngalekat — hors relevé du fascicule',
            lecons: [
              lecon('Construire l’image d’un objet par une lentille convergente'),
              lecon('Loi d’Ohm : tension, intensité et résistance'),
              lecon('pH : comparer des solutions acides et basiques'),
              lecon('Énergie électrique : puissance et consommation')
            ]
          }
        ]
      },
      {
        niveau: 'Seconde',
        titre: 'Programme de sciences physiques des classes de Seconde S',
        nbLecons: '25 chapitres + 4 compléments · 120 h (5 h / élève)',
        note: 'Le sommaire groupe les quinze chapitres de physique en trois domaines (électricité et électronique, mécanique, optique) et les dix chapitres de chimie sans subdivision ; totaux imprimés 72 h et 48 h pour 5 h par élève. Les durées du tableau et celles des relevés de chapitre concordent. La variante de la série L2, plus allégée, est exclue.',
        chapitres: [
          {
            nom: 'Programme de physique (72 h)',
            lecons: [
              lecon('Chapitre P1 — Phénomènes d’électrisation (3 h)'),
              lecon('Chapitre P2 — Généralités sur le courant électrique (3 h)'),
              lecon('Chapitre P3 — Intensité du courant électrique (5 h)'),
              lecon('Chapitre P4 — Tension électrique (5 h)'),
              lecon('Chapitre P5 — Dipôles passifs (6 h)'),
              lecon('Chapitre P6 — Dipôles actifs (4 h)'),
              lecon('Chapitre P7 — Amplificateur opérationnel : amplification d’une tension (rentrée 2000) (6 h)'),
              lecon('Chapitre P8 — Généralités sur le mouvement (5 h)'),
              lecon('Chapitre P9 — Généralités sur les forces (4 h)'),
              lecon('Chapitre P10 — Le poids, la masse, relation entre poids et masse (5 h)'),
              lecon('Chapitre P11 — Équilibre d’un solide soumis à des forces non parallèles (6 h)'),
              lecon('Chapitre P12 — Équilibre d’un solide mobile autour d’un axe (5 h)'),
              lecon('Chapitre P13 — Propagation rectiligne de la lumière (3 h)'),
              lecon('Chapitre P14 — Réflexion de la lumière (5 h)'),
              lecon('Chapitre P15 — Réfraction – dispersion de la lumière (7 h)')
            ]
          },
          {
            nom: 'Programme de chimie (48 h)',
            lecons: [
              lecon('Chapitre C1 — Mélanges et corps purs, introduction aux sciences (5 h)'),
              lecon('Chapitre C2 — Éléments, atomes, classification périodique des éléments (5 h)'),
              lecon('Chapitre C3 — Liaisons chimiques (4 h)'),
              lecon('Chapitre C4 — Mole, grandeurs molaires (4 h)'),
              lecon('Chapitre C5 — Réactions chimiques, équation-bilan (5 h)'),
              lecon('Chapitre C6 — Généralités sur les solutions aqueuses (4 h)'),
              lecon('Chapitre C7 — Solutions aqueuses acides (6 h)'),
              lecon('Chapitre C8 — Solutions aqueuses basiques (6 h)'),
              lecon('Chapitre C9 — Notion de pH, indicateurs colorés (6 h)'),
              lecon('Chapitre C10 — Caractérisation de quelques ions (3 h)')
            ]
          },
          {
            nom: 'Compléments de révision Jàngalekat — hors relevé du fascicule',
            lecons: [
              lecon('Vecteur vitesse et lecture d’un graphique de mouvement'),
              lecon('Bilan des forces et principe d’inertie : premiers repères'),
              lecon('Concentration massique d’une solution'),
              lecon('Équilibrer une équation de réaction simple')
            ]
          }
        ]
      },
      {
        niveau: 'Première',
        titre: 'Programme de sciences physiques des classes de Première S1 et S2',
        nbLecons: '23 chapitres + 4 compléments · 116 h',
        note: 'Le document ne précise pas l’horaire hebdomadaire. Totaux imprimés : 62 h de physique, réparties en quatre domaines (énergie-champs, électronique, phénomènes vibratoires et propagation, optique), et 54 h de chimie (chimie organique, électrochimie). Le chapitre C12, traité en exposés et visites, n’apparaît que dans le tableau du sommaire, sans relevé de chapitre développé dans le document.',
        chapitres: [
          {
            nom: 'Programme de physique (62 h)',
            lecons: [
              lecon('Chapitre P1 — Travail et puissance (6 h)'),
              lecon('Chapitre P2 — Énergie cinétique (5 h)'),
              lecon('Chapitre P3 — Énergie potentielle, énergie mécanique (6 h)'),
              lecon('Chapitre P4 — Calorimétrie (6 h)'),
              lecon('Chapitre P5 — Force et champ électrostatiques (6 h)'),
              lecon('Chapitre P6 — Travail de la force électrostatique, énergie potentielle électrostatique (5 h)'),
              lecon('Chapitre P7 — Énergie électrique mise en jeu dans un circuit électrique (6 h)'),
              lecon('Chapitre P8 — Condensateurs : capacité, énergie emmagasinée (4 h)'),
              lecon('Chapitre P9 — Amplificateur opérationnel : montages dérivateur et intégrateur, applications (6 h)'),
              lecon('Chapitre P10 — Propagation des signaux, ondes progressives mécaniques, interférences (6 h)'),
              lecon('Chapitre P11 — Étude expérimentale des lentilles minces (6 h)')
            ]
          },
          {
            nom: 'Programme de chimie (54 h)',
            lecons: [
              lecon('Chapitre C1 — Généralités sur la chimie organique (3 h)'),
              lecon('Chapitre C2 — Les alcanes (4 h)'),
              lecon('Chapitre C3 — Les chaînes carbonées insaturées : alcènes et alcynes (5 h)'),
              lecon('Chapitre C4 — Le benzène (3 h)'),
              lecon('Chapitre C5 — Les composés oxygénés (6 h)'),
              lecon('Chapitre C6 — Notion de couple oxydant-réducteur (4 h)'),
              lecon('Chapitre C7 — Classification qualitative des couples oxydant-réducteur ion métallique / métal (6 h)'),
              lecon('Chapitre C8 — Classification quantitative des couples oxydant-réducteur ion métallique / métal (6 h)'),
              lecon('Chapitre C9 — Généralisation de l’oxydoréduction en solution aqueuse (5 h)'),
              lecon('Chapitre C10 — Électrolyse, bilan quantitatif (6 h)'),
              lecon('Chapitre C11 — Oxydoréduction par voie sèche (4 h)'),
              lecon('Chapitre C12 — Thèmes : phosphates, engrais, matières plastiques, exposés et visites (2 h)')
            ]
          },
          {
            nom: 'Compléments de révision Jàngalekat — hors relevé du fascicule',
            lecons: [
              lecon('Deuxième loi de Newton et mouvement rectiligne'),
              lecon('Énergie mécanique : conservation et variations'),
              lecon('Ondes mécaniques : période, fréquence et longueur d’onde'),
              lecon('Oxydoréduction : identifier oxydant et réducteur')
            ]
          }
        ]
      },
      {
        niveau: 'Terminale',
        titre: 'Programmes de sciences physiques des classes de Terminales S1 et S2',
        nbLecons: '24 chapitres + 4 compléments · 143 h (7 h / élève)',
        note: 'Totaux imprimés : 90 h de physique, groupées en mécanique et dynamique, électromagnétisme, oscillations et optique, phénomènes corpusculaires, puis 53 h de chimie (chimie organique, puis acides et bases). Quatre durées diffèrent entre le tableau du sommaire et le relevé de chapitre : P2 « 4 h » contre « 4 + 1 = 5 », P9 4 h contre 5 h, P10 8 h contre 9 h, P15 6 h contre 8 h. La colonne du tableau est retenue, car elle est la seule à reproduire le total imprimé de 90 h.',
        chapitres: [
          {
            nom: 'Programme de physique (90 h)',
            lecons: [
              lecon('Chapitre P1 — Cinématique du point (6 h)'),
              lecon('Chapitre P2 — Bases de la dynamique (5 h)'),
              lecon('Chapitre P3 — Applications des bases de la dynamique (10 h)'),
              lecon('Chapitre P4 — Gravitation universelle (6 h)'),
              lecon('Chapitre P5 — Généralités sur les champs magnétiques, champs magnétiques des courants (6 h)'),
              lecon('Chapitre P6 — Mouvement d’une particule chargée dans un champ magnétique uniforme (6 h)'),
              lecon('Chapitre P7 — Loi de Laplace (5 h)'),
              lecon('Chapitre P8 — Induction magnétique, étude d’un dipôle (R, L) (6 h)'),
              lecon('Chapitre P9 — Étude du dipôle (R, C) (5 h)'),
              lecon('Chapitre P10 — Oscillations électriques libres et oscillations électriques forcées (9 h)'),
              lecon('Chapitre P11 — Oscillations mécaniques libres (4 h)'),
              lecon('Chapitre P12 — Interférences lumineuses (6 h)'),
              lecon('Chapitre P13 — Effet photoélectrique : mise en évidence et interprétation (4 h)'),
              lecon('Chapitre P14 — Niveaux d’énergie de l’atome (4 h)'),
              lecon('Chapitre P15 — Réactions nucléaires (8 h)')
            ]
          },
          {
            nom: 'Programme de chimie (53 h)',
            lecons: [
              lecon('Chapitre C1 — Alcools (6 h)'),
              lecon('Chapitre C2 — Amines (4 h)'),
              lecon('Chapitre C3 — Acides carboxyliques et dérivés (5 h)'),
              lecon('Chapitre C4 — Cinétique chimique (5 h)'),
              lecon('Chapitre C5 — Autoprotolyse de l’eau, pH d’une solution aqueuse, indicateurs colorés (6 h)'),
              lecon('Chapitre C6 — Acide fort, base forte, réaction entre acide fort et base forte, dosage (7 h)'),
              lecon('Chapitre C7 — Acides et bases faibles, couples acide-base, constante d’acidité et classification des couples acide-base (8 h)'),
              lecon('Chapitre C8 — Réaction acide faible / base forte et réciproque, effet tampon, dosage (7 h)'),
              lecon('Chapitre C9 — Acides aminés, éléments de stéréochimie (5 h)')
            ]
          },
          {
            nom: 'Compléments de révision Jàngalekat — hors relevé du fascicule',
            lecons: [
              lecon('Mouvement d’un projectile dans un champ de pesanteur'),
              lecon('Induction électromagnétique : flux et loi de Faraday'),
              lecon('Désintégration radioactive et décroissance exponentielle'),
              lecon('Dosage acido-basique : équivalence et exploitation')
            ]
          }
        ]
      }
    ]
  });
})();
