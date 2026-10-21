/* Programme de SVT : listes de leçons recopiées des deux programmes officiels sénégalais.
   L'écran qui dessine ces listes est dans js/programmes.js ; l'identifiant permanent de chaque
   leçon (svt-<code de classe>-c<chapitre>-l<leçon>) est fabriqué par JK.registreDeProgramme()
   dans js/app.js.

   Documents source, tous deux en-têtés « République du Sénégal / Commission nationale des
   programmes » :
   - Programme des SVT de l'enseignement moyen, mai 2008 (6ᵉ → 3ᵉ) ;
   - Programme des SVT du second cycle, septembre 2015 (Seconde → Terminale).
   Les intitulés, l'ordre et les volumes horaires ci-dessous sont recopiés de ces documents.
   Au lycée, la liste retenue est celle de la série scientifique (Seconde S, Première S2,
   Terminale S2) ; les séries L sont allégées mais reprennent les mêmes titres de leçons.
*/
(function () {
  'use strict';

  const { lecon } = JK;

  JK.registreDeProgramme({
    matiere: 'SVT',
    code: 'svt',
    autorite: 'programme_officiel',
    reference: 'Programme des SVT, MEN / IGEN / Commission nationale des programmes — enseignement moyen (mai 2008) et second cycle (septembre 2015)',
    DOCUMENTS: [
      {
        reference: 'Programme des SVT de l’enseignement moyen, mai 2008 (6ᵉ → 3ᵉ)',
        url: 'https://svtdakar.e-monsite.com/medias/files/programme-svt2008.pdf',
        consulteLe: '2026-10-18'
      },
      {
        reference: 'Programme des SVT des classes de Seconde, Première et Terminale, septembre 2015',
        url: 'https://svtdakar.e-monsite.com/medias/files/programme-svt-2e-cycle-2016-2017.pdf',
        consulteLe: '2026-10-18'
      }
    ],
    SOURCE: 'Programmes officiels de Sciences de la Vie et de la Terre du ministère de l’Éducation du Sénégal : cycle moyen (mai 2008) et second cycle (septembre 2015), édités par l’Inspection générale de l’Éducation nationale avec la Commission nationale des programmes.',
    CLASSES: [
      {
        niveau: '6ᵉ',
        titre: 'Découvrir le monde vivant et le milieu proche',
        nbLecons: '12 leçons · 62 heures',
        note: 'Deux parties : Sciences de la vie (54 h) puis Sciences de la Terre (8 h). Le programme demande de faire découvrir et aimer la nature, d’initier à la démarche scientifique et de renforcer l’éducation environnementale. 2 heures par semaine.',
        chapitres: [
          {
            nom: 'Thème 1 — Environnement (14 heures)',
            lecons: [
              lecon('Leçon 1 — Les composantes de l’environnement (4 h)'),
              lecon('Leçon 2 — Classification et répartition des êtres vivants (4 h)'),
              lecon('Leçon 3 — Les relations dans l’environnement (6 h)')
            ]
          },
          {
            nom: 'Thème 2 — Production d’aliments (10 heures)',
            lecons: [
              lecon('Leçon 4 — La production d’aliments par les végétaux chlorophylliens (6 h)', 'photosynthese'),
              lecon('Leçon 5 — L’amélioration de la production d’aliments par les animaux et les végétaux (4 h)')
            ]
          },
          {
            nom: 'Thème 3 — Fonction de relation : le déplacement (10 heures)',
            lecons: [
              lecon('Leçon 6 — Déplacement chez les animaux : adaptation aux déplacements dans différents milieux (10 h)')
            ]
          },
          {
            nom: 'Thème 4 — Fonction de reproduction : production de nouvelles plantes (12 heures)',
            lecons: [
              lecon('Leçon 7 — Introduction aux notions de cellules et de division cellulaire (4 h)', 'cellule'),
              lecon('Leçon 8 — Comment obtenir une nouvelle plante ? (8 h)')
            ]
          },
          {
            nom: 'Thème 5 — Les agressions contre l’homme (8 heures)',
            lecons: [
              lecon('Leçon 9 — Le paludisme (4 h)'),
              lecon('Leçon 10 — L’ascaridiase (2 h)'),
              lecon('Leçon 11 — Le choléra (2 h)')
            ]
          },
          {
            nom: 'Thème 6 — Les paysages (8 heures) — Sciences de la Terre',
            lecons: [
              lecon('Leçon 12 — Les éléments du paysage et la diversité des paysages (8 h)')
            ]
          }
        ]
      },
      {
        niveau: '5ᵉ',
        titre: 'Environnement, fonctions de nutrition et de reproduction, sols et roches sédimentaires',
        nbLecons: '12 leçons · 62 heures',
        note: 'Sciences de la vie (46 h) puis Sciences de la Terre (16 h), limitées à la notion de sol et aux roches sédimentaires. Le programme attend que l’élève s’interroge sur les problèmes environnementaux et propose des solutions réalistes. 2 heures par semaine.',
        chapitres: [
          {
            nom: 'Thème 1 — Environnement (8 heures)',
            lecons: [
              lecon('Leçon 1 — Le cadre de vie (6 h)'),
              lecon('Leçon 2 — Les pollutions et leurs conséquences (2 h)')
            ]
          },
          {
            nom: 'Thème 2 — Fonction de nutrition (22 heures)',
            lecons: [
              lecon('Leçon 3 — L’alimentation chez les animaux : adaptation aux différents régimes alimentaires (8 h)'),
              lecon('Leçon 4 — Les besoins de l’organisme et conséquences d’une mauvaise alimentation chez l’espèce humaine (10 h)'),
              lecon('Leçon 5 — La respiration chez les animaux : adaptation aux différents milieux (4 h)')
            ]
          },
          {
            nom: 'Thème 3 — Fonction de reproduction (16 heures)',
            lecons: [
              lecon('Leçon 6 — La reproduction chez les animaux (8 h)'),
              lecon('Leçon 7 — La reproduction chez les plantes à fleurs (6 h)', 'reproduction-plantes'),
              lecon('Leçon 8 — La reproduction chez les plantes sans fleurs (2 h)')
            ]
          },
          {
            nom: 'Thème 4 — Les sols (8 heures) — Sciences de la Terre',
            lecons: [
              lecon('Leçon 9 — Les sols (4 h)'),
              lecon('Leçon 10 — La genèse et l’évolution des sols (4 h)')
            ]
          },
          {
            nom: 'Thème 5 — Les roches sédimentaires (8 heures)',
            lecons: [
              lecon('Leçon 11 — Origine des roches sédimentaires (6 h)'),
              lecon('Leçon 12 — Importance et gestion des roches sédimentaires (2 h)')
            ]
          }
        ]
      },
      {
        niveau: '4ᵉ',
        titre: 'Nutrition, reproduction humaine, génétique, volcanisme et séismes',
        nbLecons: '13 leçons · 72 heures',
        note: 'L’éducation environnementale insiste sur les ressources naturelles et le développement durable. Les Sciences de la Terre traitent du volcanisme, des roches magmatiques, des séismes et de la structure du globe. 4 heures par semaine.',
        chapitres: [
          {
            nom: 'Thème 1 — Environnement (4 heures)',
            lecons: [
              lecon('Leçon 1 — Les ressources naturelles et leur gestion durable (4 h)')
            ]
          },
          {
            nom: 'Thème 2 — Fonction de nutrition (22 heures)',
            lecons: [
              lecon('Leçon 2 — Digestion et absorption intestinale chez l’espèce humaine (10 h)'),
              lecon('Leçon 3 — Le sang : composition et maladies (4 h)'),
              lecon('Leçon 4 — La circulation et le rôle du sang (4 h)'),
              lecon('Leçon 5 — Pression artérielle et maladies cardiovasculaires (4 h)')
            ]
          },
          {
            nom: 'Thème 3 — Fonction de reproduction chez l’espèce humaine (12 heures)',
            lecons: [
              lecon('Leçon 6 — La puberté et le rôle des organes génitaux (4 h)'),
              lecon('Leçon 7 — De la fécondation à l’accouchement (6 h)'),
              lecon('Leçon 8 — Comment éviter une grossesse ? (2 h)')
            ]
          },
          {
            nom: 'Thème 4 — Génétique (6 heures)',
            lecons: [
              lecon('Leçon 9 — La transmission des caractères héréditaires (6 h)', 'heredite')
            ]
          },
          {
            nom: 'Thème 5 — Les agressions contre l’homme (6 heures)',
            lecons: [
              lecon('Leçon 10 — La contamination par les micro-organismes (6 h)')
            ]
          },
          {
            nom: 'Thème 6 — Volcanisme et formation des roches magmatiques (14 heures) — Sciences de la Terre',
            lecons: [
              lecon('Leçon 11 — Le volcanisme (10 h)'),
              lecon('Leçon 12 — La formation des roches magmatiques (4 h)')
            ]
          },
          {
            nom: 'Thème 7 — Séismes et structure du globe (8 heures)',
            lecons: [
              lecon('Leçon 13 — Les séismes et la structure du globe (8 h)')
            ]
          }
        ]
      },
      {
        niveau: '3ᵉ',
        titre: 'Grandes fonctions biologiques, immunologie et géologie',
        nbLecons: '15 leçons · 78 heures',
        note: 'Respiration, fermentation, excrétion, système nerveux, vision et immunologie — avec une part importante consacrée au VIH/SIDA. Les Sciences de la Terre portent sur le métamorphisme, la tectonique des plaques et la chronologie. 4 heures par semaine.',
        chapitres: [
          {
            nom: 'Thème 1 — Fonction de relation (12 heures)',
            lecons: [
              lecon('Leçon 1 — Le fonctionnement du système nerveux (8 h)'),
              lecon('Leçon 2 — Étude de la vision (4 h)')
            ]
          },
          {
            nom: 'Thème 2 — Fonction de nutrition (24 heures)',
            lecons: [
              lecon('Leçon 3 — La respiration chez l’espèce humaine (8 h)'),
              lecon('Leçon 4 — Les phénomènes énergétiques accompagnant la respiration (6 h)'),
              lecon('Leçon 5 — La fermentation : un autre moyen de se procurer de l’énergie (4 h)'),
              lecon('Leçon 6 — Le rôle du rein dans l’excrétion urinaire et la régulation du milieu intérieur (6 h)')
            ]
          },
          {
            nom: 'Thème 3 — Immunité et infection au VIH/SIDA (22 heures)',
            lecons: [
              lecon('Leçon 7 — L’immunité et la réponse immunitaire (6 h)'),
              lecon('Leçon 8 — Le système immunitaire (4 h)'),
              lecon('Leçon 9 — Un autre exemple de spécificité immunologique (4 h)'),
              lecon('Leçon 10 — Aide à l’immunité (4 h)'),
              lecon('Leçon 11 — Dysfonctionnement du système immunitaire : cas de l’infection au VIH (4 h)')
            ]
          },
          {
            nom: 'Thème 4 — Tectonique des plaques et roches métamorphiques (14 heures) — Sciences de la Terre',
            lecons: [
              lecon('Leçon 12 — La tectonique des plaques (8 h)'),
              lecon('Leçon 13 — La formation des roches métamorphiques (6 h)')
            ]
          },
          {
            nom: 'Thème 5 — Le cycle des roches (2 heures)',
            lecons: [
              lecon('Leçon 14 — Le cycle des roches (2 h)')
            ]
          },
          {
            nom: 'Thème 6 — La chronologie (4 heures)',
            lecons: [
              lecon('Leçon 15 — La chronologie en géologie (4 h)')
            ]
          }
        ]
      },
      {
        niveau: 'Seconde',
        titre: 'Écologie, ressources naturelles, aménagement de l’espace, espèce et évolution (série S)',
        nbLecons: '10 leçons · 58 heures',
        note: 'Quatre parties : notions fondamentales d’écologie, ressources naturelles et leur gestion, aménagement de l’espace, espèce-variation-évolution. Le programme du second cycle (2015) distingue les séries L et S ; la liste ci-dessous est celle de la série S.',
        chapitres: [
          {
            nom: 'Première partie — Les notions fondamentales d’écologie',
            lecons: [
              lecon('Leçon 1 — Structure d’un écosystème (8 h)'),
              lecon('Leçon 2 — Fonctionnement et évolution de l’écosystème (20 h)'),
              lecon('Leçon 3 — Diversité et répartition des écosystèmes au Sénégal (4 h)')
            ]
          },
          {
            nom: 'Deuxième partie — Les ressources naturelles et leur gestion',
            lecons: [
              lecon('Leçon 4 — Les sols (4 h)'),
              lecon('Leçon 5 — L’eau (4 h)'),
              lecon('Leçon 6 — L’énergie (4 h)')
            ]
          },
          {
            nom: 'Troisième partie — Aménagement de l’espace',
            lecons: [
              lecon('Leçon 7 — L’espace rural (4 h)'),
              lecon('Leçon 8 — L’espace urbain (4 h)')
            ]
          },
          {
            nom: 'Quatrième partie — L’espèce, la variation, l’évolution',
            lecons: [
              lecon('Leçon 9 — L’espèce et la variation (3 h)'),
              lecon('Leçon 10 — L’évolution (3 h)')
            ]
          }
        ]
      },
      {
        niveau: 'Première',
        titre: 'Cytologie, physiologie et géologie (série S2)',
        nbLecons: '28 leçons · 71 heures',
        note: 'Trois parties : la cytologie et la biologie cellulaire, la physiologie (alimentation, libération d’énergie, besoins), puis la géologie (carte géologique, roches, datation, structure du globe, ressources du Sénégal). Séries L2 et S1 : mêmes parties, nombre de leçons réduit.',
        chapitres: [
          {
            nom: 'Première partie — La cytologie · Thème 1 : organisation de la cellule',
            lecons: [
              lecon('Leçon 1 — Les techniques d’étude de la cellule vivante'),
              lecon('Leçon 2 — Organisation de la cellule', 'cellule'),
              lecon('Leçon 3 — Cas particulier des bactéries et des virus')
            ]
          },
          {
            nom: 'Thème 2 — La biologie cellulaire',
            lecons: [
              lecon('Leçon 4 — Les mouvements cellulaires'),
              lecon('Leçon 5 — Les échanges cellulaires'),
              lecon('Leçon 6 — La synthèse des protéines'),
              lecon('Leçon 7 — La division cellulaire'),
              lecon('Leçon 8 — Les chromosomes')
            ]
          },
          {
            nom: 'Deuxième partie — La physiologie · Thème 3 : alimentation et nutrition chez l’espèce humaine',
            lecons: [
              lecon('Leçon 9 — Les aliments chez l’espèce humaine'),
              lecon('Leçon 10 — Des aliments aux nutriments'),
              lecon('Leçon 11 — La destinée des nutriments')
            ]
          },
          {
            nom: 'Thème 4 — La libération d’énergie',
            lecons: [
              lecon('Leçon 12 — La libération d’énergie par la respiration'),
              lecon('Leçon 13 — La libération d’énergie par la fermentation')
            ]
          },
          {
            nom: 'Thème 5 — Besoins en matière et en énergie',
            lecons: [
              lecon('Leçon 14 — Les besoins de l’organisme'),
              lecon('Leçon 15 — Les rations alimentaires')
            ]
          },
          {
            nom: 'Troisième partie — La géologie · Thème 6 : introduction à la géologie',
            lecons: [
              lecon('Leçon 16 — Introduction à la géologie'),
              lecon('Leçon 17 — Étude de la carte géologique'),
              lecon('Leçon 18 — La géologie du Sénégal')
            ]
          },
          {
            nom: 'Thème 7 — Roches : constitution et genèse',
            lecons: [
              lecon('Leçon 19 — Les différents types de roches'),
              lecon('Leçon 20 — Étude des roches magmatiques : le granite et le basalte'),
              lecon('Leçon 21 — Étude des roches sédimentaires et résiduelles'),
              lecon('Leçon 22 — Étude des roches métamorphiques'),
              lecon('Leçon 23 — Le cycle des roches')
            ]
          },
          {
            nom: 'Thème 8 — Histoire géologique',
            lecons: [
              lecon('Leçon 24 — Principes et méthodes de datation en géologie'),
              lecon('Leçon 25 — La reconstitution des anciens milieux, ou paléogéographie')
            ]
          },
          {
            nom: 'Thème 9 — Structure interne du globe : fonctionnement et conséquences',
            lecons: [
              lecon('Leçon 26 — Structure interne du globe terrestre'),
              lecon('Leçon 27 — La tectonique des plaques et ses conséquences')
            ]
          },
          {
            nom: 'Thème 10 — Ressources géologiques du Sénégal',
            lecons: [
              lecon('Leçon 28 — Les ressources géologiques du Sénégal')
            ]
          }
        ]
      },
      {
        niveau: 'Terminale',
        titre: 'Relations avec le milieu intérieur, intégrité de l’organisme, reproduction, hérédité, biotechnologies (série S2)',
        nbLecons: '30 leçons · 122 heures',
        note: 'Six parties : relations de l’organisme avec le milieu extérieur (système nerveux, muscle), activité cardiaque et pression artérielle, intégrité de l’organisme (milieu intérieur, glycémie, immunologie), reproduction, hérédité, biotechnologies. C’est le programme le plus lourd du second cycle.',
        chapitres: [
          {
            nom: 'Première partie — Relations de l’organisme avec le milieu extérieur · Thème 1 : organisation du système nerveux cérébro-spinal',
            lecons: [
              lecon('Leçon 1 — Organisation de l’encéphale'),
              lecon('Leçon 2 — Organisation de la moelle épinière')
            ]
          },
          {
            nom: 'Thème 2 — Tissu nerveux et ses propriétés',
            lecons: [
              lecon('Leçon 3 — Structure du tissu nerveux'),
              lecon('Leçon 4 — Propriétés du tissu nerveux'),
              lecon('Leçon 5 — Phénomènes électriques en rapport avec l’influx nerveux'),
              lecon('Leçon 6 — Conduction de l’influx nerveux'),
              lecon('Leçon 7 — Notion de synapse')
            ]
          },
          {
            nom: 'Thème 3 — Rôle du système nerveux dans le comportement moteur',
            lecons: [
              lecon('Leçon 8 — Mouvements involontaires ou réflexes'),
              lecon('Leçon 9 — Mouvements volontaires ou spontanés')
            ]
          },
          {
            nom: 'Thème 4 — Activité du muscle strié squelettique',
            lecons: [
              lecon('Leçon 10 — Structure du muscle strié squelettique'),
              lecon('Leçon 11 — Différents aspects du fonctionnement du muscle squelettique')
            ]
          },
          {
            nom: 'Deuxième partie — Activité cardiaque et pression artérielle',
            lecons: [
              lecon('Leçon 12 — Automatisme cardiaque'),
              lecon('Leçon 13 — Activité cardiaque et pression artérielle')
            ]
          },
          {
            nom: 'Troisième partie — Intégrité de l’organisme · Thème 6 : milieu intérieur',
            lecons: [
              lecon('Leçon 14 — Composition et rôles du milieu intérieur'),
              lecon('Leçon 15 — Régulation de la constance du milieu intérieur, ou homéostasie')
            ]
          },
          {
            nom: 'Thème 7 — Régulation de la glycémie',
            lecons: [
              lecon('Leçon 16 — Régulation de la glycémie')
            ]
          },
          {
            nom: 'Thème 8 — Immunologie',
            lecons: [
              lecon('Leçon 17 — Système immunitaire'),
              lecon('Leçon 18 — Réponse immunitaire'),
              lecon('Leçon 19 — Exemple de dysfonctionnement du système immunitaire : cas de l’infection au VIH/SIDA'),
              lecon('Leçon 20 — Aides à la réponse immunitaire')
            ]
          },
          {
            nom: 'Quatrième partie — Reproduction · Thème 9 : reproduction chez les mammifères',
            lecons: [
              lecon('Leçon 21 — Organes reproducteurs, gamètes et gamétogenèse'),
              lecon('Leçon 22 — Fécondation et problèmes liés à la fécondation'),
              lecon('Leçon 23 — Régulation du fonctionnement des appareils reproducteurs'),
              lecon('Leçon 24 — Gestation et accouchement'),
              lecon('Leçon 25 — Lactation'),
              lecon('Leçon 26 — Quelques méthodes contraceptives')
            ]
          },
          {
            nom: 'Thème 10 — Reproduction chez les spermatophytes',
            lecons: [
              lecon('Leçon 27 — Reproduction des spermatophytes', 'reproduction-plantes')
            ]
          },
          {
            nom: 'Cinquième partie — Hérédité · Thème 11 : génétique',
            lecons: [
              lecon('Leçon 28 — Lois statistiques de la transmission des caractères héréditaires', 'heredite')
            ]
          },
          {
            nom: 'Thème 12 — Hérédité humaine',
            lecons: [
              lecon('Leçon 29 — Hérédité chez l’espèce humaine')
            ]
          },
          {
            nom: 'Sixième partie — Biotechnologies',
            lecons: [
              lecon('Leçon 30 — Biotechnologies')
            ]
          }
        ]
      }
    ]
  });
})();
