/* Quiz de Physique-Chimie Seconde — chapitre de physique (programmes P1 à P15), Jàngalekat.
   Une leçon = trois questions.
   Les identifiants, les intitulés et l’ordre des quinze chapitres de physique viennent de copies
   dactylographiées du programme sénégalais de sciences physiques datées d’août 2008 (fascicule
   pédagogique, autorité non imprimée : ni page de garde, ni ministère, ni IGEN), série S. Ces copies
   ne nomment aucune autorité qui les aurait publiées : elles servent d’appui documentaire, pas de
   référence validée. Comme dans le registre des programmes, elles valent pour le titre et l’ordre des
   chapitres : la pagination imprimée y est coupée (extrait d’un fascicule plus vaste), le titre d’un
   chapitre est parfois repris du tableau du sommaire quand son relevé s’arrête en fin de ligne, et la
   durée n’est lue que dans la colonne « Horaire » du sommaire, jamais dans la ligne « Durée » du
   chapitre, les deux pouvant se contredire. C’est pourquoi aucune question de ce fichier ne porte sur
   une durée ou un nombre d’heures ; les leçons réduites à un intitulé ne sont interrogées que sur des
   notions qualitatives explicitement écrites dans le relevé de chapitre.
   Les énoncés, options et explications sont des contenus de démonstration rédigés par un modèle,
   non relus par un enseignant : ils ne sont ni un sujet officiel ni une évaluation de référence. */
(function () {
  'use strict';

  JK.quizDeLecon("pc-seconde-c1-l1", [
    {
      "enonce": "Deux corps électrisés portent des charges de signes contraires : que se passe-t-il ?",
      "options": [
        "Ils s’attirent l’un l’autre",
        "Ils se repoussent l’un l’autre",
        "Ils n’exercent aucune action l’un sur l’autre",
        "Ils se repoussent quel que soit leur signe"
      ],
      "correct": 0,
      "explication": "Le chapitre P1 fait retenir que deux charges de même signe se repoussent et que deux charges de signes contraires s’attirent : l’action mutuelle est ici une attraction."
    },
    {
      "enonce": "Quels sont les trois modes d’électrisation distingués par le chapitre P1 ?",
      "options": [
        "Frottement, conduction et convection",
        "Contact, induction magnétique et rayonnement",
        "Frottement, contact et influence",
        "Friction, diffusion et polarisation"
      ],
      "correct": 2,
      "explication": "Les contenus du chapitre P1 listent trois modes d’électrisation : par frottement, par contact et par influence, illustrés par le stylo frotté, le pendule électrique et l’électroscope."
    },
    {
      "enonce": "D’après l’interprétation électronique du chapitre P1, électriser un corps revient essentiellement à quoi ?",
      "options": [
        "Ajouter des protons à son noyau",
        "Lui transférer des électrons",
        "Changer la charge de son noyau",
        "Détruire une partie de sa matière"
      ],
      "correct": 1,
      "explication": "Le document explique que l’électrisation résulte d’un transfert d’électrons : le noyau reste chargé positivement et le cortège électronique négativement, l’atome étant neutre à l’état fondamental."
    }
  ]);

  JK.quizDeLecon("pc-seconde-c1-l2", [
    {
      "enonce": "Dans le circuit pile-ampoule étudié au chapitre P2, quel rôle joue la pile ?",
      "options": [
        "Un rôle de récepteur qui consomme le courant",
        "Un rôle d’interrupteur qui ouvre le circuit",
        "Un rôle de conducteur de liaison",
        "Un rôle de générateur de courant électrique"
      ],
      "correct": 3,
      "explication": "Le commentaire du chapitre P2 fait découvrir expérimentalement le rôle de générateur de courant électrique joué par la pile, les autres dipôles jouant le rôle de récepteurs."
    },
    {
      "enonce": "Dans un conducteur métallique parcouru par un courant, le chapitre P2 interprète le courant comme un déplacement de quoi ?",
      "options": [
        "De protons",
        "D’électrons",
        "D’atomes entiers",
        "De molécules d’eau"
      ],
      "correct": 1,
      "explication": "Le document interprète le courant en termes de porteurs de charges : des électrons dans les conducteurs métalliques, des ions dans les électrolytes."
    },
    {
      "enonce": "Quels deux types principaux de circuits électriques le chapitre P2 demande-t-il de réaliser et de comparer ?",
      "options": [
        "Les circuits ouverts et les circuits fermés",
        "Les circuits série et les circuits courts",
        "Les circuits série et les circuits en dérivation",
        "Les circuits en boucle et les circuits mixtes"
      ],
      "correct": 2,
      "explication": "Les contenus du chapitre P2 donnent deux types de circuit, série et dérivation, et demandent d’en retenir les avantages et les inconvénients, par exemple sur la maquette du circuit d’une maison."
    }
  ]);

  JK.quizDeLecon("pc-seconde-c1-l3", [
    {
      "enonce": "Le chapitre P3 définit l’intensité du courant électrique comme quoi ?",
      "options": [
        "La tension existant entre deux bornes d’un dipôle",
        "La résistance rencontrée par les porteurs de charges",
        "Un débit de porteurs de charges",
        "La quantité d’énergie consommée par un récepteur"
      ],
      "correct": 2,
      "explication": "Le document relie l’intensité au débit de porteurs de charges : les variations des effets du courant, obtenues avec un rhéostat ou un électrolyseur, servent à définir cette intensité."
    },
    {
      "enonce": "Dans un circuit série, que vérifie la loi de l’unicité de l’intensité ?",
      "options": [
        "L’intensité a la même valeur en tout point du circuit",
        "L’intensité se répartit entre les différents dipôles",
        "L’intensité diminue à chaque dipôle traversé",
        "L’intensité ne dépend que de la tension du générateur"
      ],
      "correct": 0,
      "explication": "Le chapitre P3 fait vérifier la propriété d’unicité en circuit série : la grandeur mesurée par l’ampèremètre garde la même valeur en tout point, ce que le document interprète par la conservation de la charge."
    },
    {
      "enonce": "Quel ordre de grandeur d’intensité le chapitre P3 donne-t-il pour le démarreur d’une automobile ?",
      "options": [
        "Quelques milliampères",
        "Entre 1 et 5 ampères",
        "Environ 1 ampère",
        "De 50 à 100 ampères"
      ],
      "correct": 3,
      "explication": "Le document cite des ordres de grandeur d’intensité : de 10 à 20 milliampères pour un tube de télévision, de 50 à 100 ampères pour un démarreur d’automobile."
    }
  ]);

  JK.quizDeLecon("pc-seconde-c1-l4", [
    {
      "enonce": "Quelle valeur de tension le chapitre P4 retient-il comme tension de sécurité pour le corps humain ?",
      "options": [
        "230 volts",
        "24 volts",
        "12 volts",
        "240 volts"
      ],
      "correct": 1,
      "explication": "Le commentaire du chapitre P4 demande de donner l’ordre de grandeur de quelques tensions d’usage courant ainsi que la tension de sécurité, fixée à 24 volts pour le corps humain."
    },
    {
      "enonce": "Quel appareil le chapitre P4 met-il en avant pour visualiser les tensions variables et en déduire valeur maximale, période et fréquence ?",
      "options": [
        "L’ampèremètre",
        "La balance",
        "Le rhéostat",
        "L’oscilloscope"
      ],
      "correct": 3,
      "explication": "Le document s’appuie sur l’oscillographe pour visualiser les tensions variables : à partir de la trace, les élèves apprennent à déduire la valeur maximale, la période et la fréquence d’une tension sinusoïdale ou rectangulaire."
    },
    {
      "enonce": "Que traduit la loi d’additivité des tensions vérifiée au chapitre P4 ?",
      "options": [
        "La tension totale aux bornes de dipôles montés en série vaut la somme des tensions partielles",
        "L’intensité se conserve en chaque nœud d’un circuit",
        "Deux dipôles en dérivation ont des tensions différentes",
        "La tension aux bornes d’une pile est toujours nulle"
      ],
      "correct": 0,
      "explication": "Le chapitre P4 fait vérifier la loi d’additivité pour la tension : la tension entre les bornes d’un ensemble de dipôles en série se obtient en additionnant les tensions aux bornes de chacun ; l’unicité entre branches parallèles est une autre propriété."
    }
  ]);

  JK.quizDeLecon("pc-seconde-c1-l5", [
    {
      "enonce": "Le chapitre P5 qualifie la caractéristique courant-tension d’un conducteur ohmique comment ?",
      "options": [
        "Non linéaire et dissymétrique",
        "Circulaire",
        "Linéaire et symétrique",
        "Aléatoire"
      ],
      "correct": 2,
      "explication": "L’exploitation de la caractéristique du conducteur ohmique fait découvrir le caractère linéaire et symétrique de ce dipôle et confirme son caractère passif, d’où la loi d’Ohm."
    },
    {
      "enonce": "Lequel de ces dipôles le chapitre P5 range-t-il parmi les dipôles passifs non linéaires ?",
      "options": [
        "Le conducteur ohmique",
        "La pile",
        "L’ampèremètre",
        "La diode à jonction"
      ],
      "correct": 3,
      "explication": "Après le conducteur ohmique linéaire, le document étudie d’autres dipôles passifs non linéaires, la varistance (symétrique) et les diodes à jonction (non symétriques)."
    },
    {
      "enonce": "Un conducteur ohmique de résistance 20 ohm est parcouru par un courant de 0,5 A. D’après la loi d’Ohm, que vaut la tension à ses bornes ?",
      "options": [
        "100 V",
        "10 V",
        "40 V",
        "0,025 V"
      ],
      "correct": 1,
      "explication": "La loi d’Ohm donne U = R × I = 20 × 0,5 = 10 V ; multiplier les deux valeurs donne 100 et les diviser à l’envers ne correspond à la tension d’aucun des deux calculs."
    }
  ]);

  JK.quizDeLecon("pc-seconde-c1-l6", [
    {
      "enonce": "La relation U = E – r I écrite au chapitre P6 suppose d’utiliser quelle convention ?",
      "options": [
        "La convention générateur",
        "La convention récepteur",
        "La règle du parallélogramme",
        "La loi des nœuds"
      ],
      "correct": 0,
      "explication": "Le document écrit U = E – r I sous convention générateur, puis U = r I – E sous convention récepteur ; la relation demandée correspond donc à la convention générateur."
    },
    {
      "enonce": "Quel générateur usuel le chapitre P6 cite-t-il pour le chauffage ou l’électricité domestique à partir de la lumière ?",
      "options": [
        "Le redresseur",
        "L’accumulateur d’automobile",
        "La pile",
        "La photopile"
      ],
      "correct": 3,
      "explication": "Parmi les générateurs usuels, le document souligne l’usage des accumulateurs pour l’automobile, des redresseurs pour les chargeurs de batteries et des photopiles pour le chauffage et l’électricité domestique."
    },
    {
      "enonce": "Une pile a une force électromotrice de 6 V et une résistance interne de 2 ohm. En court-circuit, la tension à ses bornes est nulle : que vaut l’intensité d’après U = E – r I ?",
      "options": [
        "12 A",
        "3 A",
        "4 A",
        "8 A"
      ],
      "correct": 1,
      "explication": "En court-circuit la tension U est nulle, ce qui donne E – r I = 0, soit I = E ÷ r = 6 ÷ 2 = 3 A, l’intensité de court-circuit du dipôle actif linéaire."
    }
  ]);

  JK.quizDeLecon("pc-seconde-c1-l7", [
    {
      "enonce": "Pour un amplificateur opérationnel parfait fonctionnant en régime linéaire, que vaut la différence de tension entre ses deux entrées ?",
      "options": [
        "Elle est égale à la tension de sortie",
        "Elle est très grande devant la tension de sortie",
        "Elle est égale à la tension d’alimentation",
        "Elle est nulle, les deux entrées étant au même potentiel"
      ],
      "correct": 3,
      "explication": "Le chapitre P7 retient le cas idéal de l’amplificateur opérationnel parfait en régime linéaire : les deux entrées sont au même potentiel, ce que le document écrit U Entrée plus = U Entrée moins, et les courants d’entrée sont nuls."
    },
    {
      "enonce": "Quelles sont les trois bornes essentielles d’un amplificateur opérationnel pour le traitement du signal ?",
      "options": [
        "L’entrée inverseuse, l’entrée non inverseuse et la sortie",
        "Les deux bornes d’alimentation et la masse",
        "L’anode, la cathode et la grille",
        "Le collecteur, la base et l’émetteur"
      ],
      "correct": 0,
      "explication": "Le document fait découvrir les huit bornes de l’amplificateur opérationnel et à distinguer surtout les entrées inverseuse et non inverseuse et la sortie, les tensions étant évaluées par rapport à la masse."
    },
    {
      "enonce": "Sur les huit bornes d’un amplificateur opérationnel, à quoi servent les deux bornes d’alimentation ?",
      "options": [
        "À régler le gain de l’amplification",
        "À recevoir le signal d’entrée",
        "À polariser l’amplificateur par des alimentations symétriques",
        "À court-circuiter la sortie"
      ],
      "correct": 2,
      "explication": "Le chapitre P7 fait distinguer les bornes d’alimentation et explique la polarisation de l’amplificateur opérationnel par des alimentations symétriques, nécessaires pour qu’il fonctionne."
    }
  ]);

  JK.quizDeLecon("pc-seconde-c1-l8", [
    {
      "enonce": "Le mouvement étant relatif, que faut-il obligatoirement choisir pour l’étudier, d’après le chapitre P8 ?",
      "options": [
        "Uniquement une règle graduée",
        "Un référentiel et un repère qui lui est associé",
        "La masse du mobile",
        "La couleur du mobile"
      ],
      "correct": 1,
      "explication": "Le commentaire du chapitre P8 montre le caractère relatif du mouvement à partir d’exemples familiers, puis justifie la nécessité du choix d’un référentiel et d’un repère d’espace et de temps associé."
    },
    {
      "enonce": "Quels trois référentiels le chapitre P8 donne-t-il en exemple ?",
      "options": [
        "Centré, torricellien et newtonien",
        "Absolu, relatif et inertiel",
        "Terrestre, géocentrique et héliocentrique",
        "Solaire, galactique et cosmique"
      ],
      "correct": 2,
      "explication": "Les contenus du chapitre P8 relient le concept de référentiel à des exemples nommés dans le document : le référentiel terrestre, le référentiel géocentrique et le référentiel héliocentrique."
    },
    {
      "enonce": "Un mobile parcourt 60 km en une demi-heure. Que vaut la vitesse moyenne qu’il a maintenue ?",
      "options": [
        "120 km/h",
        "30 km/h",
        "60 km/h",
        "1200 km/h"
      ],
      "correct": 0,
      "explication": "Le chapitre P8 introduit la vitesse moyenne à partir de l’exploitation de mesures et d’enregistrements : distance ÷ durée = 60 ÷ 0,5 = 120 km/h ; parcourir 60 km en une demi-heure revient à en parcourir 120 en une heure."
    }
  ]);

  JK.quizDeLecon("pc-seconde-c1-l9", [
    {
      "enonce": "Quel appareil le chapitre P9 présente-t-il comme servant à mesurer l’intensité d’une force ?",
      "options": [
        "La balance",
        "L’ampèremètre",
        "Le dynamomètre",
        "Le chronomètre"
      ],
      "correct": 2,
      "explication": "Le commentaire du chapitre P9 présente le dynamomètre comme l’appareil servant à mesurer l’intensité d’une force, après en avoir brièvement expliqué le principe et donné des exemples."
    },
    {
      "enonce": "Le chapitre P9 caractérise une force par ses effets dynamiques et statiques. À quoi correspond un effet dynamique ?",
      "options": [
        "À une modification du mouvement de l’objet",
        "À une simple déformation sans changement de mouvement",
        "À un changement de température",
        "À une modification de la masse du corps"
      ],
      "correct": 0,
      "explication": "Le document montre que la force se définit par ses effets : l’effet dynamique porte sur le mouvement de l’objet, tandis que l’effet statique se traduit par une déformation, comme celle d’un ressort."
    },
    {
      "enonce": "D’après le principe des interactions énoncé au chapitre P9, si un objet A agit sur un objet B, que se passe-t-il ?",
      "options": [
        "A subit seul les effets de cette action",
        "B reste sans réaction envers A",
        "La force disparaît dès que le contact cesse",
        "B exerce en retour une action sur A"
      ],
      "correct": 3,
      "explication": "Le chapitre P9 formule un principe des interactions et l’illustre par des cas simples, comme raquette et balle de tennis ou aimant et aimant : l’action d’un objet sur un autre s’accompagne d’une action réciproque de ce second objet sur le premier."
    }
  ]);

  JK.quizDeLecon("pc-seconde-c1-l10", [
    {
      "enonce": "Un corps a une masse de 5 kg. Avec g = 9,8 N/kg, que vaut l’intensité de son poids d’après la relation P = m × g ?",
      "options": [
        "5 N",
        "9,8 N",
        "14,8 N",
        "49 N"
      ],
      "correct": 3,
      "explication": "Le chapitre P10 établit expérimentalement la relation P = m × g, g étant l’intensité de la pesanteur du lieu : 5 × 9,8 = 49 N ; confondre poids et masse reviendrait à répondre 5 N ou à additionner les deux nombres."
    },
    {
      "enonce": "Une substance solide a une masse de 240 g pour un volume de 200 cm³. Que vaut sa masse volumique ?",
      "options": [
        "0,83 g/cm³",
        "1,2 g/cm³",
        "40 g/cm³",
        "48000 g/cm³"
      ],
      "correct": 1,
      "explication": "Le document définit la masse volumique comme le rapport de la masse sur le volume : 240 ÷ 200 = 1,2, soit 1,2 g/cm³, une des unités usuelles citées ; l’inverse, 200 ÷ 240, donne 0,83 et ne correspond pas à la définition."
    },
    {
      "enonce": "D’après le chapitre P10, quel est le point d’application du poids d’un corps ?",
      "options": [
        "Toujours à sa base",
        "Le centre de son volume apparent",
        "Son centre de gravité",
        "Un point indéterminé"
      ],
      "correct": 2,
      "explication": "Le chapitre P10 fait dégager expérimentalement les caractéristiques du poids : sa droite d’action, son sens, son intensité et son point d’application, le centre de gravité, avant sa représentation vectorielle."
    }
  ]);

  JK.quizDeLecon("pc-seconde-c1-l11", [
    {
      "enonce": "Pour établir les conditions nécessaires d’équilibre, le chapitre P11 étudie successivement un solide soumis à quoi ?",
      "options": [
        "À deux forces, puis à trois forces concourantes",
        "À une seule force, puis à une force nulle",
        "À un couple de forces uniquement",
        "À des forces strictement parallèles"
      ],
      "correct": 0,
      "explication": "Le commentaire du chapitre P11 traite dans l’ordre le cas d’un solide soumis à deux forces puis celui d’un solide soumis à trois forces concourantes, les résultats obtenus étant ensuite généralisés."
    },
    {
      "enonce": "Quelle règle de construction le chapitre P11 donne-t-il pour obtenir la résultante de deux forces concourantes ?",
      "options": [
        "La règle de l’échelle",
        "Le théorème des moments",
        "La loi des nœuds",
        "La règle du parallélogramme"
      ],
      "correct": 3,
      "explication": "Le document précise la signification physique de la résultante de deux forces après en avoir donné la règle de construction, la règle du parallélogramme, et rappelle les rappels de géométrie et de trigonométrie utiles aux résolutions."
    },
    {
      "enonce": "Le chapitre P11 signale que les conditions d’équilibre établies sont nécessaires mais non suffisantes. Quel cas sert de contre-exemple ?",
      "options": [
        "Un solide soumis à une force unique",
        "Un solide en translation rectiligne",
        "Un solide soumis à un couple de forces",
        "Un solide posé sur un plan horizontal"
      ],
      "correct": 2,
      "explication": "Le chapitre P11 insiste sur le fait que les conditions d’équilibre sont nécessaires mais non suffisantes, la preuve en étant donnée par des contre-exemples ; le couple de forces en est l’exemple cité, car sa résultante est nulle alors que le solide tourne."
    }
  ]);

  JK.quizDeLecon("pc-seconde-c1-l12", [
    {
      "enonce": "Le chapitre P12 fait dépendre le moment d’une force par rapport à un axe fixe de quoi ?",
      "options": [
        "De la seule intensité de la force",
        "De l’intensité de la force et de la distance de sa ligne d’action à l’axe",
        "De la masse du solide uniquement",
        "De la couleur du solide"
      ],
      "correct": 1,
      "explication": "Le document cherche les facteurs dont dépend l’effet de rotation d’une force, retient la force orthogonale à l’axe et la distance de la ligne d’action à l’axe, puis montre que des forces ayant même effet de rotation ont le même produit de la force par cette distance."
    },
    {
      "enonce": "Une force de 20 N agit perpendiculairement à un bras de levier, à 0,5 m de l’axe. Que vaut le moment de cette force ?",
      "options": [
        "40 N·m",
        "20,5 N·m",
        "0,025 N·m",
        "10 N·m"
      ],
      "correct": 3,
      "explication": "Le moment retenu au chapitre P12 est le produit de l’intensité de la force par la distance de sa ligne d’action à l’axe : 20 × 0,5 = 10 ; diviser au lieu de multiplier donne 0,025 et additionner les deux nombres 20,5."
    },
    {
      "enonce": "Que traduit le théorème des moments, vérifié avec le disque mobile autour d’un axe ?",
      "options": [
        "Pour un solide en équilibre de rotation, la somme algébrique des moments des forces est nulle",
        "Le moment augmente avec la masse du disque",
        "Tous les moments ont le même signe",
        "La force doit toujours être parallèle à l’axe"
      ],
      "correct": 0,
      "explication": "Le document établit le théorème des moments avec le disque homogène en équilibre sous l’action de plusieurs forces : la somme algébrique des moments est nulle, ce qui exprime la non rotation du solide autour de l’axe."
    }
  ]);

  JK.quizDeLecon("pc-seconde-c1-l13", [
    {
      "enonce": "Quelle valeur approchée de la vitesse de la lumière dans le vide le chapitre P13 donne-t-il ?",
      "options": [
        "340 m/s",
        "3000 km/s",
        "300000 km/s",
        "300000 m/s"
      ],
      "correct": 2,
      "explication": "Le commentaire du chapitre P13 donne la valeur approchée de la vitesse de la lumière dans le vide, 300000 km/s, et la relie à la définition de l’année de lumière pour exprimer des distances astronomiques."
    },
    {
      "enonce": "Quels trois milieux, du point de vue de la lumière, le chapitre P13 fait-il identifier expérimentalement ?",
      "options": [
        "Transparent, translucide et opaque",
        "Homogène, diffusant et absorbant",
        "Réfringent, réfléchissant et dispersif",
        "Solide, liquide et gazeux"
      ],
      "correct": 0,
      "explication": "Les objectifs et les contenus du chapitre P13 demandent d’identifier expérimentalement des milieux transparents, translucides et opaques, puis de restituer le principe de la propagation rectiligne de la lumière dans un milieu homogène."
    },
    {
      "enonce": "Les éclipses de Lune et de Soleil, citées en application du chapitre P13, s’expliquent par quel phénomène ?",
      "options": [
        "La dispersion de la lumière blanche",
        "La réflexion sur un miroir plan",
        "La réfraction à la surface de l’eau",
        "La propagation rectiligne et la formation des ombres et pénombres"
      ],
      "correct": 3,
      "explication": "Le chapitre P13 explique la formation des ombres et des pénombres, portées et propres, puis s’en sert, avec la propagation rectiligne, pour expliquer les éclipses de Lune et de Soleil."
    }
  ]);

  JK.quizDeLecon("pc-seconde-c1-l14", [
    {
      "enonce": "Comment le chapitre P14 nomme-t-il la réflexion régulière assurée par un miroir ?",
      "options": [
        "La réflexion diffuse",
        "La réflexion spéculaire",
        "La réfraction",
        "La dispersion"
      ],
      "correct": 1,
      "explication": "Le commentaire du chapitre P14 démarre par la mise en évidence et la distinction de la réflexion diffuse et de la réflexion spéculaire, définie dans le document comme la réflexion par un miroir, ce qui permet de définir les miroirs plans."
    },
    {
      "enonce": "Que dit la loi de Descartes pour la réflexion que les élèves vérifient en travaux pratiques au chapitre P14 ?",
      "options": [
        "L’angle de réflexion est le double de l’angle d’incidence",
        "Le rayon réfléchi est perpendiculaire au rayon incident",
        "L’angle de réflexion est égal à l’angle d’incidence",
        "L’angle de réflexion est nul quelle que soit l’incidence"
      ],
      "correct": 2,
      "explication": "Le chapitre P14 fait définir le rayon incident, le rayon réfléchi, l’angle d’incidence et l’angle de réflexion, puis établir les lois de Descartes pour la réflexion en travaux pratiques à l’aide du Kitoptic ou du tableau magnétique."
    },
    {
      "enonce": "Que donne un miroir plan quand l’objet est réel ?",
      "options": [
        "Une image réelle",
        "Aucune image",
        "Une image de taille différente",
        "Une image virtuelle"
      ],
      "correct": 3,
      "explication": "Le chapitre P14 fait distinguer objet réel et objet virtuel, image réelle et image virtuelle, et demande les caractéristiques de l’image d’un objet réel donnée par un miroir plan : cette image est virtuelle, comme le confirme l’expérience des deux bougies."
    }
  ]);

  JK.quizDeLecon("pc-seconde-c1-l15", [
    {
      "enonce": "Comment nomme-t-on le phénomène par lequel un prisme décompose la lumière blanche en plusieurs couleurs ?",
      "options": [
        "La dispersion de la lumière",
        "La réflexion totale",
        "La diffraction",
        "L’interférence"
      ],
      "correct": 0,
      "explication": "Le chapitre P15 fait découvrir expérimentalement, avec le Kitoptic, la décomposition de la lumière blanche en plusieurs couleurs par un prisme, phénomène nommé dispersion, et retient que la lumière blanche est formée de plusieurs radiations de fréquences déterminées."
    },
    {
      "enonce": "Comment appelle-t-on une lumière formée d’une seule radiation, c’est-à-dire d’une seule couleur ?",
      "options": [
        "Une lumière polychromatique",
        "Une lumière monochromatique",
        "Une lumière blanche",
        "Une lumière infrarouge"
      ],
      "correct": 1,
      "explication": "Le commentaire du chapitre P15 fait distinguer la lumière monochromatique, formée d’une seule radiation, de la lumière polychromatique comme la lumière blanche ; il ajoute que les formules du prisme ne sont pas traitées."
    },
    {
      "enonce": "La fibre optique, citée en application du chapitre P15, met en œuvre quel phénomène ?",
      "options": [
        "La diffusion de la lumière",
        "La dispersion de la lumière blanche",
        "La réflexion totale",
        "La propagation rectiligne dans un milieu homogène"
      ],
      "correct": 2,
      "explication": "Le chapitre P15 introduit l’angle limite de réfraction et la réflexion totale, puis demande d’expliquer le principe des fibres optiques et des fontaines lumineuses parmi les applications de la réfraction."
    }
  ]);
})();
