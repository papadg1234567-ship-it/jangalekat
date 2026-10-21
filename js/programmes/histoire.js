/* Registre d'Histoire, de la 6ᵉ à la Terminale.

   Ce qui est documenté : le découpage chronologique par classe et le nombre de leçons et
   d'heures de chaque classe (22 leçons et 37 h en 6ᵉ, 22 et 37 h en 5ᵉ, 24 et 48 h en 4ᵉ,
   22 et 43 h en 3ᵉ, 25 et 48 h en Seconde, 23 et 44 h en Première, 19 et 38 h en Terminale),
   d'après les tableaux 1 et 2 de l'article de la revue Akiri n° 5 (janvier 2024) consacré au
   programme d'histoire sénégalais, qui cite lui-même le programme consolidé d'histoire
   (Sénégal / MEN / IGEN / CNHG, octobre 2006). La notice de ce programme figure à la
   bibliothèque de l'UNESCO (27 p., exemplaire physique seulement, non téléchargeable).

   Ce qui ne l'est pas : le programme officiel compte 157 leçons et ses listes d'intitulés
   n'ont pu être jointes à ce projet. Les 56 leçons ci-dessous sont donc des REPÈRES rédigés
   pour la bibliothèque et le quiz, dans l'ordre chronologique prescrit, et non la copie du
   cahier de textes du ministère. Le statut affiché à l'écran est « sans source officielle
   jointe : liste de démonstration ». À confirmer classe par classe avec le professeur. */
(function () {
  'use strict';

  const { lecon } = JK;

  JK.registreDeProgramme({
    matiere: 'Histoire',
    code: 'histoire',
    autorite: 'sans_source',
    reference: 'Trame chronologique et volumes horaires d’après le programme d’histoire du Sénégal (IGEN / CNHG, 2006), cité dans la revue Akiri n° 5 (2024) ; intitulés de leçons rédigés pour l’application',
    SOURCE: 'Le découpage chronologique de chaque classe et le nombre de leçons et d’heures viennent du programme d’histoire (IGEN / CNHG, 2006) tel que reproduit dans la revue Akiri n° 5 de janvier 2024. En revanche, aucune liste officielle d’intitulés de leçons n’a pu être jointe au projet : les 56 leçons ci-dessous sont des repères de démonstration, rédigés par Jàngalekat dans l’ordre des périodes prescrites, et non la copie du programme. Le programme officiel compte 157 leçons (22 en 6ᵉ, 22 en 5ᵉ, 24 en 4ᵉ, 22 en 3ᵉ, 25 en Seconde, 23 en Première, 19 en Terminale). Aucune de ces leçons n’a été relue par un enseignant.',
    DOCUMENTS: [
      {
        reference: 'Sénégal / Ministère de l’éducation / Inspection générale de l’éducation nationale / Commission nationale d’histoire et de géographie, « Programme d’histoire », 2004, 27 p. (notice de catalogue, exemplaire non numérisé)',
        url: 'https://unesdoc.unesco.org/ark:/48223/pf0000191113',
        consulteLe: '20/10/2026'
      },
      {
        reference: 'Revue Akiri n° 5, janvier 2024, article sur l’enseignement de l’histoire au Sénégal : tableau 1 (leçons et heures par classe) et tableau 2 (répartition chronologique et thématique)',
        url: 'https://revue.akiri-uao.org/wp-content/uploads/journal/published_paper/volume-5/issue-1/ZfnC7Yn9.pdf',
        consulteLe: '20/10/2026'
      }
    ],
    CLASSES: [
      {
        niveau: '6ᵉ',
        titre: 'Des origines à la fin de l’Antiquité : méthodologie de l’histoire, Préhistoire, civilisations anciennes',
        nbLecons: '8 repères · le programme prescrit 22 leçons et 37 h',
        note: 'Période prescrite : du début de la préhistoire à la fin de l’Antiquité, avec l’étude des civilisations préhistoriques et antiques d’Afrique, d’Asie et d’Europe.',
        chapitres: [
          {
            nom: 'Méthodologie de l’histoire et Préhistoire',
            lecons: [
              lecon('L’histoire, la mémoire et les sources : document écrit, vestige, tradition orale', null),
              lecon('Mesurer le temps historique : année, siècle, millénaire, avant et après Jésus-Christ', null),
              lecon('Les plus anciennes traces humaines en Afrique et le peuplement du continent', null),
              lecon('La révolution néolithique : agriculture, élevage et premiers villages', null)
            ]
          },
          {
            nom: 'Les civilisations de l’Antiquité',
            lecons: [
              lecon('L’invention de l’écriture, les premières villes et les premières lois', 'premieres-civilisations'),
              lecon('L’Égypte antique, le Nil et l’Afrique du Nord', null),
              lecon('La Grèce et Rome : la cité, la République, l’empire', null),
              lecon('L’Asie ancienne (Inde, Chine) et le monde méditerranéen à la fin de l’Antiquité', null)
            ]
          }
        ]
      },
      {
        niveau: '5ᵉ',
        titre: 'Du VIᵉ au XVIᵉ siècle : civilisation musulmane, Afrique de l’Ouest, Sénégambie, Europe et Amérique',
        nbLecons: '8 repères · le programme prescrit 22 leçons et 37 h',
        note: 'Période prescrite : du VIᵉ au XVIᵉ siècle, avec la civilisation musulmane, les civilisations de l’Afrique de l’Ouest et de la Sénégambie, puis celles de l’Europe et de l’Amérique.',
        chapitres: [
          {
            nom: 'Civilisation musulmane et Afrique de l’Ouest',
            lecons: [
              lecon('La naissance de l’islam en Arabie et la constitution du monde musulman', null),
              lecon('Bagdad, Le Caire, Cordoue : villes, savoirs et commerce (VIIᵉ-XIIIᵉ s.)', null),
              lecon('L’islam en Afrique de l’Ouest et au Sénégal : routes, marchands et lettrés', null),
              lecon('Les empires du Ghana, du Mali et du Songhaï', 'islam-empires-ouest-africains')
            ]
          },
          {
            nom: 'Sénégambie, Europe et Amérique (Xᵉ-XVIᵉ s.)',
            lecons: [
              lecon('Les États de Sénégambie : Tekrour, le Djolof et les royaumes sérères', null),
              lecon('Peuplement, villages et activités au Sénégal avant 1600', null),
              lecon('L’Europe des XIᵉ au XVᵉ siècle : villes, monarchies et chrétienté', null),
              lecon('L’Amérique avant et après 1492 : peuples, empires et premiers contacts', null)
            ]
          }
        ]
      },
      {
        niveau: '4ᵉ',
        titre: 'Du XVIᵉ au XIXᵉ siècle : traite négrière, Sénégambie, Afrique, Asie, Amérique et Europe',
        nbLecons: '8 repères · le programme prescrit 24 leçons et 48 h',
        note: 'Période prescrite : du XVIᵉ au XIXᵉ siècle, avec la traite négrière, la Sénégambie des XVIIᵉ au XIXᵉ siècles et les évolutions des autres continents sur la même durée.',
        chapitres: [
          {
            nom: 'La traite négrière et les Amériques',
            lecons: [
              lecon('Les Européens sur les côtes d’Afrique de l’Ouest : comptoirs et premiers échanges', null),
              lecon('La traite négrière atlantique : captifs, routes et ports', null),
              lecon('Le commerce triangulaire et les ports sénégalais : Saint-Louis, Gorée, Rufisque', null),
              lecon('Esclavage, résistances et abolitions', 'traite-negriere')
            ]
          },
          {
            nom: 'Sénégambie et monde aux XVIIᵉ-XIXᵉ siècles',
            lecons: [
              lecon('Les royaumes de Sénégambie face aux Européens (XVIIᵉ-XVIIIᵉ s.)', null),
              lecon('Les révolutions en Europe et en Amérique (fin XVIIIᵉ-début XIXᵉ s.)', null),
              lecon('La révolution industrielle : usines, villes et sociétés en Europe', null),
              lecon('L’impérialisme européen en Afrique et en Asie au XIXᵉ siècle', null)
            ]
          }
        ]
      },
      {
        niveau: '3ᵉ',
        titre: 'Du XIXᵉ au milieu du XXᵉ siècle : colonisation, résistances, conflits mondiaux, décolonisation',
        nbLecons: '8 repères · le programme prescrit 22 leçons et 43 h',
        note: 'Période prescrite : du XIXᵉ au XXᵉ siècle — révolution industrielle, impérialisme, conflits et révolutions du XXᵉ siècle, décolonisation.',
        chapitres: [
          {
            nom: 'La colonisation du Sénégal et les résistances',
            lecons: [
              lecon('La conquête du Sénégal : Faidherbe, Dakar et l’avancée vers l’intérieur', null),
              lecon('Les résistances africaines à la conquête coloniale', null),
              lecon('L’AOF : administration, impôt, travail forcé et culture de l’arachide', null),
              lecon('Missions, écoles et société coloniale au Sénégal', null)
            ]
          },
          {
            nom: 'Le XXᵉ siècle : conflits, révolutions et décolonisation',
            lecons: [
              lecon('La Première Guerre mondiale et les tirailleurs sénégalais', null),
              lecon('1919-1939 : crises économiques et premières revendications coloniales', null),
              lecon('La Seconde Guerre mondiale et le monde de 1945', null),
              lecon('De la colonisation à l’indépendance du Sénégal', 'colonisation-independance')
            ]
          }
        ]
      },
      {
        niveau: 'Seconde',
        titre: 'Reprise approfondie : des origines au XIXᵉ siècle',
        nbLecons: '8 repères · le programme prescrit 25 leçons et 48 h',
        note: 'Au second cycle, le programme reprend celui du premier cycle en l’approfondissant : méthodologie, civilisations anciennes, empires d’Afrique occidentale (VIIᵉ-XVIIᵉ s.), traite négrière, Afrique à la veille de l’impérialisme, révolutions d’Europe et d’Amérique.',
        chapitres: [
          {
            nom: 'Méthodologie, Préhistoire et Afrique ancienne',
            lecons: [
              lecon('Le métier d’historien : sources, critique et chronologie', null),
              lecon('Le peuplement de la Terre et l’Afrique des premiers humains', null),
              lecon('Préhistoire et protohistoire africaines : Sahara, Néolithique et métaux', null),
              lecon('L’Égypte, Carthage et les échanges transsahariens', null)
            ]
          },
          {
            nom: 'Empires, traite et révolutions (VIIᵉ-début XIXᵉ s.)',
            lecons: [
              lecon('Les empires de l’Afrique occidentale du VIIᵉ au XVIIᵉ siècle', null),
              lecon('La traite négrière : ampleur et conséquences pour l’Afrique', null),
              lecon('Les révolutions en Europe et en Amérique de la fin du XVIIIᵉ au début du XIXᵉ siècle', null),
              lecon('Les sociétés africaines à la veille de la conquête coloniale', null)
            ]
          }
        ]
      },
      {
        niveau: 'Première',
        titre: 'Du XIXᵉ siècle à 1945 : révolution industrielle, impérialisme, deux guerres mondiales',
        nbLecons: '8 repères · le programme prescrit 23 leçons et 44 h',
        note: 'Période prescrite : du XIXᵉ siècle à 1945 — la révolution industrielle, l’impérialisme et les deux guerres mondiales.',
        chapitres: [
          {
            nom: 'Révolution industrielle et impérialisme',
            lecons: [
              lecon('La seconde révolution industrielle : charbon, acier, chimie, électricité', null),
              lecon('Sociétés urbaines et divisions du travail en Europe (1850-1914)', null),
              lecon('L’impérialisme européen et le partage de l’Afrique', null),
              lecon('La conférence de Berlin (1884-1885) et l’Afrique-Occidentale française', null)
            ]
          },
          {
            nom: 'Guerres mondiales et crises (1914-1945)',
            lecons: [
              lecon('La Première Guerre mondiale : un conflit qui devient mondial', null),
              lecon('Les révolutions russes et l’entre-deux-guerres', null),
              lecon('La crise de 1929 et la montée des régimes autoritaires', null),
              lecon('La Seconde Guerre mondiale : bilans et nouveaux équilibres en 1945', null)
            ]
          }
        ]
      },
      {
        niveau: 'Terminale',
        titre: 'De 1945 à 1990 : Guerre froide, décolonisation, civilisations africaine et musulmane',
        nbLecons: '8 repères · le programme prescrit 19 leçons et 38 h',
        note: 'Période prescrite : de 1945 à 1990 — le monde au lendemain de la Seconde Guerre mondiale, la décolonisation, les civilisations africaines et musulmane.',
        chapitres: [
          {
            nom: 'La Guerre froide (1947-1990)',
            lecons: [
              lecon('Les origines de la Guerre froide et la bipolarisation du monde', null),
              lecon('Deux blocs, deux alliances : Berlin, Cuba, les crises', null),
              lecon('Bandung (1955), le tiers monde et le non-alignement', null),
              lecon('De la détente aux années 1985-1990 : la fin du monde bipolaire', null)
            ]
          },
          {
            nom: 'Décolonisation et Sénégal (1945-1990)',
            lecons: [
              lecon('La décolonisation en Afrique noire', null),
              lecon('Le Sénégal de 1946 à 1960 : Union française, Communauté, indépendance', null),
              lecon('Les nouveaux États africains : choix de développement et crises', null),
              lecon('Le monde musulman et l’Afrique de 1945 à 1990', null)
            ]
          }
        ]
      }
    ]
  });
})();
