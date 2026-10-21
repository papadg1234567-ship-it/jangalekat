/* Programme de géographie : listes de leçons recopiées d'une source, reliées aux fiches.
   L'écran qui dessine ces listes est dans js/programmes.js. L'identifiant permanent de chaque
   leçon (geo-<code de classe>-c<chapitre>-l<leçon>) est fabriqué par JK.registreDeProgramme()
   dans js/app.js, à partir du champ code ci-dessous.

   Source : le programme officiel de géographie du MEN (édition 2004), reproduit in extenso dans
   les annexes du rapport de recherche PURGES / AUF (2020) « Pratiques curiculaires des
   enseignants d'histoire-géographie... au Sénégal ». Le rapport ne publie que la géographie.
*/
(function () {
  'use strict';

  const { lecon } = JK;

  JK.registreDeProgramme({
    matiere: 'Géographie',
    code: 'geo',
    autorite: 'programme_officiel',
    reference: 'MEN, programme de géographie, édition 2004 (reproduit dans le rapport PURGES / AUF, 2020)',
    url: 'https://apprendre.auf.org/wp-content/uploads/2021/05/AAP1-17-Senegal-Geographie-Rapport-final-de-recherche.pdf',
    consulteLe: '2026-10-18',
    SOURCE: 'Programme officiel de géographie, ministère de l’Éducation nationale du Sénégal, édition 2004, reproduit dans les annexes du rapport de recherche PURGES / AUF (2020).',
    CLASSES: [
    {
      niveau: '6ᵉ',
      titre: 'Le milieu proche, les autres espaces du territoire national',
      nbLecons: '20 leçons de géographie (plus 20 leçons d’histoire et 10 d’éducation civique)',
      note: 'Le programme découpe le Sénégal en six « régions géographiques ». On part de la région qui abrite l’établissement, puis on s’ouvre aux autres. La grille de leçons est la même pour toutes les régions.',
      chapitres: [
        {
          nom: 'Les six régions géographiques et leur thème officiel',
          lecons: [
            lecon('A — Le Bassin arachidier : la culture sous-pluie, de la monoculture à la diversification', 'milieu-proche-6e'),
            lecon('B — Dakar et le littoral central : les activités urbaines et suburbaines', 'milieu-proche-6e'),
            lecon('C — Le Ferlo : le problème de l’eau et l’activité pastorale', 'milieu-proche-6e'),
            lecon('D — La vallée du Sénégal : la vallée du fleuve et son aménagement', 'milieu-proche-6e'),
            lecon('E — La Casamance : étude d’un écosystème humide', 'milieu-proche-6e'),
            lecon('F — Le Haut-Sénégal (Sud-Est) : une région de contact', 'milieu-proche-6e')
          ]
        },
        {
          nom: 'Grille de leçons commune (exemple du Bassin arachidier)',
          lecons: [
            lecon('Leçon 1 — Étude de situation : localisation-carte, notions d’orientation et de représentation', 'milieu-proche-6e'),
            lecon('Leçon 2 — Connaissance des plantes : arachide, mil et autres', 'methode-region-6e'),
            lecon('Leçon 3 — Conditions physiques : topographiques, climatiques, édaphiques, hydrographiques, biogéographiques', 'methode-region-6e'),
            lecon('Leçon 4 — Population : composition ethnique, évolution, répartition, structures, migrations', 'methode-region-6e'),
            lecon('Leçon 5 — Organisation de l’espace : localités, fonctions, relations, urbanisme', 'methode-region-6e'),
            lecon('Leçon 6 — Activités rurales : paysages agraires, conditions techniques, structures d’encadrement, circuits commerciaux', 'methode-region-6e'),
            lecon('Leçon 7 — Structures de transformation artisanales et modernes', 'methode-region-6e'),
            lecon('Leçon 8 — Problèmes et perspectives de développement', 'methode-region-6e')
          ]
        }
      ]
    },
    {
      niveau: '5ᵉ',
      titre: 'Le Sénégal',
      nbLecons: '26 leçons',
      note: 'Approche par composantes (leçons analytiques) puis synthèses. Les enquêtes montrent que beaucoup de classes s’arrêtent au chapitre I.',
      chapitres: [
        {
          nom: 'Chapitre I — Les aspects physiques',
          lecons: [
            lecon('Leçon 1 — Étude de situation : localisation-carte', 'milieu-physique-senegal-5e'),
            lecon('Leçon 2 — Structure géologique : processus de formation du relief, nature et disposition des couches', 'milieu-physique-senegal-5e'),
            lecon('Leçon 3 — Relief', 'milieu-physique-senegal-5e'),
            lecon('Leçon 4 — Climat', 'milieu-physique-senegal-5e'),
            lecon('Leçon 5 — Sol – végétation', 'milieu-physique-senegal-5e'),
            lecon('Leçon 6 — Hydrographie', 'milieu-physique-senegal-5e'),
            lecon('Leçon 7 — Les écosystèmes', 'milieu-physique-senegal-5e')
          ]
        },
        {
          nom: 'Chapitre II — Les aspects humains',
          lecons: [
            lecon('Leçon 8 — Mise en place du peuplement, composition, peuples, langues et religions', 'peuplement-senegal-5e'),
            lecon('Leçon 9 — Accroissement de la population', 'peuplement-senegal-5e'),
            lecon('Leçon 10 — Structures de la population', 'peuplement-senegal-5e'),
            lecon('Leçon 11 — Répartition géographique de la population', 'peuplement-senegal-5e'),
            lecon('Leçon 12 — Mobilité de la population', 'peuplement-senegal-5e'),
            lecon('Leçon 13 — Les villes', 'peuplement-senegal-5e')
          ]
        },
        {
          nom: 'Chapitre III — Les aspects économiques',
          lecons: [
            lecon('Leçon 14 — Agriculture', 'economies-senegal-5e'),
            lecon('Leçon 15 — Élevage', 'economies-senegal-5e'),
            lecon('Leçon 16 — Pêche', 'economies-senegal-5e'),
            lecon('Leçon 17 — Artisanat et industrie', 'economies-senegal-5e'),
            lecon('Leçon 18 — Tourisme', 'economies-senegal-5e'),
            lecon('Leçon 19 — Transports et commerce intérieur', 'economies-senegal-5e'),
            lecon('Leçon 20 — Échanges extérieurs', 'economies-senegal-5e')
          ]
        },
        {
          nom: 'Chapitre IV — Synthèse',
          lecons: [
            lecon('Leçon 21 — La jeunesse de la population : fardeau ou potentialité ? (2 h)', 'synthese-senegal-5e'),
            lecon('Leçon 22 — Les relations villes-campagnes (2 h)', 'synthese-senegal-5e'),
            lecon('Leçon 23 — Les disparités régionales (2 h)', 'synthese-senegal-5e'),
            lecon('Leçon 24 — Régionalisation et développement communautaire (2 h)', 'synthese-senegal-5e'),
            lecon('Leçon 25 — Les problèmes d’environnement et de protection de la nature (2 h)', 'synthese-senegal-5e'),
            lecon('Leçon 26 — Le Sénégal dans l’Afrique et dans le monde (2 h)', 'synthese-senegal-5e')
          ]
        }
      ]
    },
    {
      niveau: '4ᵉ',
      titre: 'L’Afrique et le monde',
      nbLecons: '22 leçons',
      note: 'Même grille pour chaque grand espace régional : étude de situation, milieu, population, disparités économiques et sociales, problèmes d’intégration.',
      chapitres: [
        {
          nom: 'Chapitre I — L’Afrique de l’Ouest',
          lecons: [
            lecon('Leçon 1 — Étude de situation : localisation-carte', 'afrique-ouest-integration-4e'),
            lecon('Leçon 2 — Les problèmes de développement (3 h)', 'afrique-ouest-integration-4e'),
            lecon('Leçon 3 — Les problèmes d’intégration (2 h)', 'afrique-ouest-integration-4e')
          ]
        },
        {
          nom: 'Chapitre II — L’Afrique',
          lecons: [
            lecon('Leçon 4 — Étude de situation : localisation-carte', 'afrique-pauvrete-4e'),
            lecon('Leçon 5 — La diversité physique et humaine (3 h)', 'afrique-pauvrete-4e'),
            lecon('Leçon 6 — La pauvreté et la dépendance : facteurs, manifestations et conséquences (4 h)', 'afrique-pauvrete-4e'),
            lecon('Leçon 7 — La coopération internationale et l’aide au développement (3 h)', 'afrique-pauvrete-4e')
          ]
        },
        {
          nom: 'Chapitre III — Les autres espaces régionaux du monde : 1/ L’Europe',
          lecons: [
            lecon('Leçon 8 — Étude de situation : localisation-carte', 'europe-integration-4e'),
            lecon('Leçon 9 — Le relief et le climat', 'europe-integration-4e'),
            lecon('Leçon 10 — La population', 'europe-integration-4e'),
            lecon('Leçon 11 — Les problèmes d’intégration', 'europe-integration-4e')
          ]
        },
        {
          nom: '2/ L’Amérique',
          lecons: [
            lecon('Leçon 12 — Étude de situation : localisation-carte', 'amerique-disparites-4e'),
            lecon('Leçon 13 — Les unités naturelles', 'amerique-disparites-4e'),
            lecon('Leçon 14 — La diversité des peuples', 'amerique-disparites-4e'),
            lecon('Leçon 15 — Les disparités économiques et sociales', 'amerique-disparites-4e'),
            lecon('Leçon 16 — Les problèmes d’intégration', 'amerique-disparites-4e')
          ]
        },
        {
          nom: '3/ L’Asie',
          lecons: [
            lecon('Leçon 17 — Étude de situation : localisation-carte', 'asie-oceanie-4e'),
            lecon('Leçon 18 — Les contrastes naturels (2 h)', 'asie-oceanie-4e'),
            lecon('Leçon 19 — Les populations de l’Asie (2 h)', 'asie-oceanie-4e'),
            lecon('Leçon 20 — Les disparités économiques et sociales et les problèmes d’intégration (2 h)', 'asie-oceanie-4e')
          ]
        },
        {
          nom: '4/ L’Océanie',
          lecons: [
            lecon('Leçon 21 — Étude de situation : localisation-carte', 'asie-oceanie-4e'),
            lecon('Leçon 22 — Les disparités économiques et sociales et les problèmes d’intégration (2 h)', 'asie-oceanie-4e')
          ]
        }
      ]
    },
    {
      niveau: '3ᵉ',
      titre: 'Le monde',
      nbLecons: '10 leçons',
      note: 'Quatre chapitres : la Terre comme planète, une planète menacée, une planète divisée, une planète solidaire ?',
      chapitres: [
        {
          nom: 'Chapitre I — La Terre, une planète du système solaire',
          lecons: [
            lecon('Leçon 1 — Étude de situation : place de la Terre dans le système solaire, influence du Soleil, caractéristiques de la Terre (2 h)', 'terre-planete-3e'),
            lecon('Leçon 2 — La Terre, une planète du système solaire : potentiel et équilibres (3 h)', 'terre-planete-3e')
          ]
        },
        {
          nom: 'Chapitre II — La Terre, une planète menacée',
          lecons: [
            lecon('Leçon 3 — La surexploitation des ressources et ses conséquences : énergies, ressources minières, halieutiques, forestières, hydrauliques (5 h)', 'terre-planete-3e'),
            lecon('Leçon 4 — Les conséquences climatiques de l’exploitation économique de la planète : pollution, réchauffement, menace d’aridité (5 h)', 'terre-planete-3e')
          ]
        },
        {
          nom: 'Chapitre III — La Terre, une planète divisée',
          lecons: [
            lecon('Leçon 5 — Inégalités de développement : niveaux de vie, revenus, démographie, échanges, exploitation (4 h)', 'inegalites-developpement-3e'),
            lecon('Leçon 6 — Les systèmes économiques : structures économiques et sociales et leur évolution (4 h)', 'inegalites-developpement-3e')
          ]
        },
        {
          nom: 'Chapitre IV — La Terre, une planète solidaire ?',
          lecons: [
            lecon('Leçon 7 — La coopération bilatérale (2 h)', 'planete-solidaire-3e'),
            lecon('Leçon 8 — La coopération multilatérale (2 h)', 'planete-solidaire-3e'),
            lecon('Leçon 9 — Les formes et problèmes de communication (2 h)', 'planete-solidaire-3e'),
            lecon('Leçon 10 — La planète Terre, un village ? (1 h)', 'planete-solidaire-3e')
          ]
        }
      ]
    },
    {
      niveau: 'Seconde',
      titre: 'Géographie physique générale',
      nbLecons: '20 leçons',
      note: 'Année entièrement consacrée à la géographie physique : la géographie humaine est traitée en Première, l’Afrique et le Sénégal en Terminale.',
      chapitres: [
        {
          nom: 'Première partie — La Terre dans le système solaire',
          lecons: [
            lecon('Leçon 1 — Les moyens de connaissance de l’Univers (1 h)', 'terre-solaire-oceans-seconde'),
            lecon('Leçon 2 — Les mouvements de la Terre (2 h)', 'terre-solaire-oceans-seconde'),
            lecon('Leçon 3 — TP : les planètes du système solaire ; les formes de représentation de la Terre, y compris les coordonnées géographiques (3 h)', 'terre-solaire-oceans-seconde')
          ]
        },
        {
          nom: 'Deuxième partie, chapitre I — Continents, océans et mers',
          lecons: [
            lecon('Leçon 4 — La répartition des continents et des océans (1 h)', 'terre-solaire-oceans-seconde'),
            lecon('Leçon 5 — Les eaux marines (2 h)', 'terre-solaire-oceans-seconde'),
            lecon('Leçon 6 — TP : planisphère schématique des océans, des mers et des courants marins (1 h)', 'terre-solaire-oceans-seconde')
          ]
        },
        {
          nom: 'Deuxième partie, chapitre II — Les climats de la Terre',
          lecons: [
            lecon('Leçon 7 — L’atmosphère : structure et composition (1 h)', 'climats-seconde'),
            lecon('Leçon 8 — Les facteurs du climat (3 h)', 'climats-seconde'),
            lecon('Leçon 9 — Les éléments du climat (1 h)', 'climats-seconde'),
            lecon('Leçon 10 — TP : carte de la répartition des climats de la Terre et construction de diagrammes (2 h)', 'climats-seconde')
          ]
        },
        {
          nom: 'Deuxième partie, chapitre III — Les reliefs de la Terre',
          lecons: [
            lecon('Leçon 11 — La tectonique des plaques et l’isostasie (2 h)', 'reliefs-seconde'),
            lecon('Leçon 12 — Les roches (2 h)', 'reliefs-seconde'),
            lecon('Leçon 13 — Les grands types de structure et leur répartition (2 h)', 'reliefs-seconde'),
            lecon('Leçon 14 — L’érosion (2 h)', 'reliefs-seconde'),
            lecon('Leçon 15 — Les formes de relief terrestre et leur répartition (2 h)', 'reliefs-seconde'),
            lecon('Leçon 16 — TP : carte de localisation des formes de relief ; initiation à la coupe topographique', 'reliefs-seconde')
          ]
        },
        {
          nom: 'Troisième partie — Les « régions naturelles » du globe et leurs potentialités',
          lecons: [
            lecon('Leçon 17 — Les régions intertropicales (3 h)', 'regions-naturelles-seconde'),
            lecon('Leçon 18 — Les régions tempérées (2 h)', 'regions-naturelles-seconde'),
            lecon('Leçon 19 — Les régions polaires (2 h)', 'regions-naturelles-seconde'),
            lecon('Leçon 20 — L’originalité des montagnes et des littoraux (2 h)', 'regions-naturelles-seconde')
          ]
        }
      ]
    },
    {
      niveau: 'Première',
      titre: 'Géographie humaine : population et activités',
      nbLecons: '23 leçons',
      note: 'Beaucoup de classes s’arrêtent vers la leçon 9 (mises en valeur agricoles dans les pays tropicaux) : environ 39 % du programme déroulé, d’après les cahiers de texte cités dans le rapport.',
      chapitres: [
        {
          nom: 'Introduction',
          lecons: [lecon('Leçon 1 — Les inégalités de développement dans le monde (2 h)', 'inegalites-developpement-3e')]
        },
        {
          nom: 'Première partie — La population mondiale',
          lecons: [
            lecon('Leçon 2 — La population : groupes humains, langues et religions (1 h)', 'population-mondiale-1ere'),
            lecon('Leçon 3 — L’accroissement de la population mondiale et les politiques démographiques, construction de courbes d’évolution (2 h)', 'population-mondiale-1ere'),
            lecon('Leçon 4 — Les migrations (2 h)', 'population-mondiale-1ere'),
            lecon('Leçon 5 — Les structures de la population mondiale (2 h)', 'population-mondiale-1ere'),
            lecon('Leçon 6 — TP : construction et commentaire de pyramides des âges et de diagrammes triangulaires sur les structures socioprofessionnelles (2 h)', 'population-mondiale-1ere'),
            lecon('Leçon 7 — La répartition de la population mondiale (2 h)', 'population-mondiale-1ere'),
            lecon('Leçon 8 — TP : calcul et carte des densités de population (2 h)', 'population-mondiale-1ere')
          ]
        },
        {
          nom: 'Deuxième partie — Population et activités en milieu rural',
          lecons: [
            lecon('Leçon 9 — Les formes de mise en valeur agricole dans les pays tropicaux : les formes traditionnelles (2 h)', 'milieu-rural-1ere'),
            lecon('Leçon 10 — Les pays tropicaux : les cultures commerciales (2 h)', 'milieu-rural-1ere'),
            lecon('Leçon 11 — Les pays tropicaux : les mutations récentes (2 h)', 'milieu-rural-1ere'),
            lecon('Leçon 12 — L’évolution des formes de mise en valeur agricole en Europe (2 h)', 'milieu-rural-1ere'),
            lecon('Leçon 13 — Les formes modernes de mise en valeur agricole dans les pays neufs (2 h)', 'milieu-rural-1ere'),
            lecon('Leçon 14 — La pêche : formes traditionnelle et moderne (2 h)', 'milieu-rural-1ere')
          ]
        },
        {
          nom: 'Troisième partie — Population et activités en milieu urbain',
          lecons: [
            lecon('Leçon 15 — La ville : définition et fonctions (1 h)', 'milieu-urbain-1ere'),
            lecon('Leçon 16 — Diversité des processus et des formes d’urbanisation dans le monde (2 h)', 'milieu-urbain-1ere'),
            lecon('Leçon 17 — Les activités urbaines : l’industrie et ses mutations (2 h)', 'milieu-urbain-1ere'),
            lecon('Leçon 18 — Les activités urbaines : le commerce, les services et leurs mutations (2 h)', 'milieu-urbain-1ere'),
            lecon('Leçon 19 — La dynamique urbaine et les problèmes des villes, en insistant sur les villes du tiers monde (2 h)', 'milieu-urbain-1ere')
          ]
        },
        {
          nom: 'Quatrième partie — Population et vie de relation',
          lecons: [
            lecon('Leçon 20 — Les moyens de communication : transports et télécommunications (2 h)', 'echanges-integration-1ere'),
            lecon('Leçon 21 — Les techniques d’échanges : troc et monnaie, bourse de valeurs (1 h)', 'echanges-integration-1ere'),
            lecon('Leçon 22 — L’organisation du commerce mondial et l’échange inégal (2 h)', 'echanges-integration-1ere')
          ]
        },
        {
          nom: 'Conclusion',
          lecons: [lecon('Leçon 23 — Les espaces d’intégration économique : problématique et organisation (1 h). Dossiers demandés : CEDEAO, UEMOA, Union européenne, ALENA', 'echanges-integration-1ere')]
        }
      ]
    },
    {
      niveau: 'Terminale',
      titre: 'Le monde actuel : grands espaces et Sénégal',
      nbLecons: '18 leçons',
      note: 'Les contenus vont du général au particulier ; les enseignants privilégient les leçons jugées susceptibles de tomber au baccalauréat.',
      chapitres: [
        {
          nom: 'Introduction',
          lecons: [lecon('Leçon 1 — Le système-monde : des espaces interdépendants (2 h)', 'systeme-monde-amerique-nord-tle')]
        },
        {
          nom: 'Première partie — L’espace nord-américain',
          lecons: [
            lecon('Leçon 2 — Atouts et handicaps de la nature', 'systeme-monde-amerique-nord-tle'),
            lecon('Leçon 3 — Populations, villes et sociétés (1 h)', 'systeme-monde-amerique-nord-tle'),
            lecon('Leçon 4 — La construction de l’espace économique : États-Unis, Canada et Mexique (1 h)', 'systeme-monde-amerique-nord-tle'),
            lecon('Leçon 5 — Le modèle économique américain : caractéristiques et problèmes (4 h)', 'systeme-monde-amerique-nord-tle')
          ]
        },
        {
          nom: 'Deuxième partie — L’espace européen',
          lecons: [
            lecon('Leçon 6 — Milieux naturels et populations (1 h)', 'espace-europeen-tle'),
            lecon('Leçon 7 — La construction européenne : réalités et perspectives (2 h)', 'espace-europeen-tle'),
            lecon('Leçon 8 — Étude économique alternée entre la France et l’Allemagne (3 h)', 'espace-europeen-tle')
          ]
        },
        {
          nom: 'Troisième partie — L’Asie-Pacifique',
          lecons: [
            lecon('Leçon 9 — Les facteurs d’émergence et leurs limites (2 h)', 'asie-pacifique-tle'),
            lecon('Leçon 10 — Le modèle économique japonais : caractéristiques et problèmes (3 h)', 'asie-pacifique-tle'),
            lecon('Leçon 11 — La Chine : les problèmes démographiques (2 h)', 'asie-pacifique-tle'),
            lecon('Leçon 12 — La Chine : le modèle de développement économique et social (2 h)', 'asie-pacifique-tle')
          ]
        },
        {
          nom: 'Quatrième partie — L’Amérique latine',
          lecons: [
            lecon('Leçon 13 — Milieux naturels et populations (1 h)', 'amerique-latine-bresil-tle'),
            lecon('Leçon 14 — Le Brésil : une puissance du tiers monde (2 h)', 'amerique-latine-bresil-tle')
          ]
        },
        {
          nom: 'Cinquième partie — L’Afrique, puis étude monographique du Sénégal',
          lecons: [
            lecon('Leçon 15 — Les problèmes et perspectives de développement du continent africain (3 h)', 'afrique-geographie'),
            lecon('Leçon 16 — Le Sénégal : milieux naturels et populations (2 h)', 'senegal-monographie-tle'),
            lecon('Leçon 17 — Le Sénégal : la question de l’eau (2 h)', 'senegal-monographie-tle'),
            lecon('Leçon 18 — Le Sénégal : les problèmes économiques et les politiques de développement (3 h)', 'senegal-monographie-tle')
          ]
        }
      ]
    }
    ]
  });
})();
