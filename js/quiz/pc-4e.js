/* Quiz de physique-chimie de la classe de 4ᵉ (Jàngalekat) — une leçon = trois questions.
   Les identifiants, les intitulés et les horaires des douze leçons viennent de copies du programme
   sénégalais de sciences physiques datées d’août 2008 (fascicule pédagogique, autorité non imprimée :
   ni page de garde, ni ministère, ni IGEN), recoupées avec la table des matières et les exercices du
   fascicule ADEM-Dakar de sciences physiques 4ème. Aucun de ces documents ne nomme une autorité qui
   l’aurait publié : ils servent d’appui documentaire, pas de référence validée.
   Les énoncés, options et explications sont des contenus de démonstration auto-rédigés par un modèle :
   ils reprennent les notions de ces copies, mais aucun n’a été relu par un enseignant. Ils ne sont ni un
   sujet officiel ni une évaluation de référence. */
(function () {
  'use strict';

  JK.quizDeLecon("pc-4e-c1-l1", [
    {
      "enonce": "Parmi les phénomènes cités dans le chapitre d’introduction, lequel est un phénomène chimique ?",
      "options": [
        "l’action du jus de citron sur le calcaire",
        "la dissolution du sucre dans l’eau",
        "la dilatation d’une barre de fer",
        "la vaporisation d’un peu d’eau"
      ],
      "correct": 0,
      "explication": "Le chapitre d’introduction range l’effet du jus de citron ou du vinaigre sur le calcaire parmi les phénomènes chimiques, alors que la dissolution du sucre, la dilatation et les changements d’état ne modifient pas la nature des corps étudiés."
    },
    {
      "enonce": "Avant l’étude qualitative des changements d’état, quels sont les trois états de la matière rappelés par le chapitre ?",
      "options": [
        "solide, liquide et dissous",
        "solide, liquide et gazeux",
        "dur, mou et fluide",
        "chaud, tiède et froid"
      ],
      "correct": 1,
      "explication": "Le commentaire du chapitre P1 annonce que l’étude qualitative des changements d’état sera précédée d’un rappel sur les trois états de la matière : solide, liquide et gazeux, ce qui permet ensuite de nommer la fusion ou la vaporisation."
    },
    {
      "enonce": "Comment nomme-t-on le changement d’état qui fait passer un corps de l’état solide à l’état liquide ?",
      "options": [
        "la vaporisation",
        "la condensation",
        "la fusion",
        "la solidification"
      ],
      "correct": 2,
      "explication": "Le chapitre P1 propose d’illustrer les changements d’état par des expériences simples telles que la fusion et la vaporisation ; la fusion est le passage de l’état solide à l’état liquide, la vaporisation le passage du liquide à la vapeur."
    }
  ]);

  JK.quizDeLecon("pc-4e-c1-l2", [
    {
      "enonce": "D’après le chapitre P2 sur les grandeurs physiques, comment faut-il considérer une mesure faite avec un instrument familier ?",
      "options": [
        "toujours exacte quand l’élève est attentif",
        "sans intérêt tant qu’elle n’est pas répétée dix fois",
        "fausse et donc inutilisable en classe",
        "toujours entachée d’erreur"
      ],
      "correct": 3,
      "explication": "Le commentaire du chapitre P2 demande de montrer aux élèves que toute mesure est entachée d’erreur, sans formules ni calcul d’incertitude, puis d’insister sur l’ordre de grandeur, les chiffres significatifs et la vraisemblance des résultats."
    },
    {
      "enonce": "Pour faire apparaître la notion de grandeur physique, quel instrument le chapitre P2 cite-t-il comme instrument de mesure des longueurs ?",
      "options": [
        "un chronomètre",
        "une verrerie graduée",
        "une règle graduée",
        "une montre"
      ],
      "correct": 2,
      "explication": "Le programme part des mesures effectuées par les élèves avec des instruments familiers, et cite la règle pour la longueur ; le chronomètre et la montre relèvent de la durée, la verrerie graduée du volume."
    },
    {
      "enonce": "Dans l’écriture scientifique d’un nombre étudiée au chapitre P2, entre quelles valeurs doit se situer le nombre décimal utilisé ?",
      "options": [
        "0 et 1",
        "1 et 10",
        "10 et 100",
        "1 et 100"
      ],
      "correct": 1,
      "explication": "Le fascicule ADEM définit l’écriture scientifique comme le produit d’un nombre décimal compris entre 1 et 10 par une puissance entière de 10 ; c’est le même usage qui sert ensuite aux conversions avec les puissances de dix."
    }
  ]);

  JK.quizDeLecon("pc-4e-c1-l3", [
    {
      "enonce": "Dans le Système International, quelle est l’unité de la masse volumique retenue par le programme ?",
      "options": [
        "le kilogramme par mètre cube (kg/m³)",
        "le kilogramme (kg)",
        "le litre (L)",
        "le newton (N)"
      ],
      "correct": 0,
      "explication": "Le chapitre P3 définit la masse volumique comme la masse d’une unité de volume de la substance et donne le kilogramme par mètre cube comme unité du Système International, avec des unités usuelles telles que kg/L, g/L, kg/dm³ ou g/cm³."
    },
    {
      "enonce": "Le chapitre P3 exprime la densité par le rapport de deux masses volumiques. Pour un liquide ou un solide, quelle substance est prise comme référence ?",
      "options": [
        "l’huile",
        "l’eau",
        "le mercure",
        "l’air"
      ],
      "correct": 1,
      "explication": "Le document signale que pour les liquides et les solides l’eau est en général prise comme référence et que c’est l’air qui sert de référence pour les gaz ; la même grandeur permet de prévoir la disposition des liquides non miscibles."
    },
    {
      "enonce": "Dans un exercice du chapitre P3, 0,46 kg d’huile occupent un volume de 0,5 L. Que vaut la masse volumique de cette huile ?",
      "options": [
        "1,09 kg/L",
        "0,23 kg/L",
        "0,92 kg/L",
        "2,30 kg/L"
      ],
      "correct": 2,
      "explication": "La masse volumique est la masse divisée par le volume : 0,46 ÷ 0,5 = 0,92, soit 0,92 kg/L. Diviser le volume par la masse donne 1,09, et multiplier les deux nombres donne 0,23 : ce ne sont pas des masses volumiques."
    }
  ]);

  JK.quizDeLecon("pc-4e-c1-l4", [
    {
      "enonce": "Quel appareil le chapitre P4 présente-t-il comme l’appareil de mesure de l’intensité du poids ?",
      "options": [
        "une balance",
        "un dynamomètre",
        "un chronomètre",
        "une éprouvette graduée"
      ],
      "correct": 1,
      "explication": "Le document présente le dynamomètre comme l’appareil de mesure de l’intensité du poids, alors que la balance, vue au chapitre précédent, sert à déterminer la masse du corps."
    },
    {
      "enonce": "Dans le Système International, quelle est l’unité de l’intensité du poids d’un corps ?",
      "options": [
        "le newton (N)",
        "le kilogramme (kg)",
        "le litre (L)",
        "l’ampère (A)"
      ],
      "correct": 0,
      "explication": "Le chapitre P4 donne l’unité du Système International de l’intensité du poids, le newton (N) ; le kilogramme reste l’unité de la masse, grandeur que l’on détermine avec une balance."
    },
    {
      "enonce": "Un objet a une masse de 2 kg. Avec g = 9,8 N/kg, que vaut l’intensité de son poids ?",
      "options": [
        "11,8 N",
        "4,9 N",
        "0,20 N",
        "19,6 N"
      ],
      "correct": 3,
      "explication": "La relation P = m × g établie expérimentalement donne 2 × 9,8 = 19,6 N. Le rapport P/m est justement l’intensité de la pesanteur du lieu, ici 19,6 ÷ 2 = 9,8 N/kg ; ajouter 9,8 à 2 ou diviser à l’envers ne correspond à aucune de ces grandeurs."
    }
  ]);

  JK.quizDeLecon("pc-4e-c1-l5", [
    {
      "enonce": "Comment branche-t-on un ampèremètre dans un circuit électrique ?",
      "options": [
        "en série, sur la branche dont on veut mesurer le courant",
        "en dérivation, aux bornes du dipôle",
        "à la place du récepteur le plus proche du générateur",
        "hors du circuit, sans contact avec les fils"
      ],
      "correct": 0,
      "explication": "Le chapitre P5 demande d’insister sur le mode de branchement de l’ampèremètre et du voltmètre : l’ampèremètre se branche en série dans la branche parcourue par le courant mesuré, le voltmètre en dérivation aux bornes du dipôle."
    },
    {
      "enonce": "Que vérifie la loi d’unicité de l’intensité dans un circuit en série ?",
      "options": [
        "l’intensité se partage entre les dipôles du circuit",
        "l’intensité est nulle dans les fils de connexion",
        "l’intensité a la même valeur en tout point du circuit",
        "l’intensité ne dépend que de la tension du générateur"
      ],
      "correct": 2,
      "explication": "Le programme fait montrer expérimentalement la loi d’unicité de l’intensité dans un circuit série : la grandeur mesurée par l’ampèremètre garde la même valeur en tout point de ce circuit ; le partage entre branches est l’objet de la loi des nœuds."
    },
    {
      "enonce": "Lequel de ces dipôles met en œuvre l’effet chimique du courant électrique ?",
      "options": [
        "une lampe de poche",
        "un fer à repasser",
        "un moteur",
        "un électrolyseur"
      ],
      "correct": 3,
      "explication": "Le chapitre P5 cite les effets calorifiques, lumineux, chimiques et magnétiques du courant : l’électrolyseur, utilisé pour l’électrolyse, relève de l’effet chimique, la lampe de l’effet lumineux, le fer à repasser de l’effet calorifique et le moteur de l’effet magnétique."
    }
  ]);

  JK.quizDeLecon("pc-4e-c1-l6", [
    {
      "enonce": "Pourquoi le chapitre P6 classe-t-il la Lune parmi les sources apparentes, ou secondaires, de lumière ?",
      "options": [
        "parce qu’elle fabrique sa propre lumière pendant la nuit",
        "parce qu’elle renvoie la lumière qu’elle reçoit",
        "parce qu’elle subit une transformation sous la lumière",
        "parce qu’elle est une source artificielle de lumière"
      ],
      "correct": 1,
      "explication": "Le document range le Soleil, les étoiles, les corps incandescents et la luciole parmi les sources réelles ou primaires, qui produisent la lumière, et la Lune avec les planètes parmi les sources apparentes ou secondaires, qui renvoient la lumière."
    },
    {
      "enonce": "Parmi ces objets, lequel est un récepteur de lumière naturel ?",
      "options": [
        "les feuilles d’une plante chlorophyllienne",
        "une paire de lunettes photosensibles",
        "une pellicule photographique",
        "un échantillon de chlorure d’argent"
      ],
      "correct": 0,
      "explication": "Le chapitre P6 donne comme récepteurs naturels les feuilles des plantes chlorophylliennes et l’œil, et comme récepteurs artificiels les pellicules photographiques, le chlorure d’argent ou les lunettes photosensibles : un récepteur subit une transformation sous l’effet de la lumière."
    },
    {
      "enonce": "Qu’est-ce qu’une source réelle, ou primaire, de lumière ?",
      "options": [
        "une source qui renvoie la lumière reçue",
        "une source construite par l’élève",
        "une source qui produit la lumière",
        "une source qui absorbe toute la lumière"
      ],
      "correct": 2,
      "explication": "Le document dégage la notion de source réelle ou primaire à partir du filament de la lampe ou de la flamme d’une allumette : ces corps produisent la lumière, alors que les objets environnants, qui la renvoient, sont des sources apparentes ou secondaires."
    }
  ]);

  JK.quizDeLecon("pc-4e-c1-l7", [
    {
      "enonce": "Quel milieu laisse passer une partie de la lumière sans permettre de distinguer les corps qui l’émettent ?",
      "options": [
        "un milieu translucide",
        "un milieu transparent",
        "un milieu opaque",
        "un milieu homogène"
      ],
      "correct": 0,
      "explication": "Le fascicule ADEM fait compléter ce vocabulaire : le milieu translucide laisse passer une partie de la lumière sans faire distinguer les corps, le verre dépoli ou le papier huilé en sont des exemples, le milieu opaque ne laisse rien passer."
    },
    {
      "enonce": "Le chapitre P7 donne une valeur approchée de la vitesse de la lumière dans le vide. Laquelle ?",
      "options": [
        "environ 3000 km/s",
        "environ 300000 km/s",
        "environ 3000000 km/s",
        "environ 30000000 km/s"
      ],
      "correct": 1,
      "explication": "Le programme de quatrième donne la valeur approchée de la vitesse de la lumière dans le vide, 300000 km/s, et relie cette grandeur à la définition de l’année de lumière, utilisée pour exprimer des distances astronomiques."
    },
    {
      "enonce": "Quels phénomènes le chapitre P7 explique-t-il en s’appuyant sur la propagation rectiligne de la lumière ?",
      "options": [
        "la décomposition de la lumière blanche en couleurs",
        "l’échauffement d’un conducteur parcouru par un courant",
        "la superposition des liquides non miscibles dans un bécher",
        "la formation des ombres, des pénombres et des éclipses"
      ],
      "correct": 3,
      "explication": "Le chapitre P7 traite de la propagation rectiligne : après avoir visualisé sur un écran l’ombre portée et la pénombre portées d’un objet, les élèves voient expliquer la formation des images dans une chambre noire, puis les éclipses de Lune et de Soleil."
    }
  ]);

  JK.quizDeLecon("pc-4e-c1-l8", [
    {
      "enonce": "Dans le chapitre P8, comment nomme-t-on la réflexion assurée par un miroir ?",
      "options": [
        "la réflexion diffuse",
        "la réflexion totale",
        "la réflexion spéculaire",
        "la réfraction"
      ],
      "correct": 2,
      "explication": "Le commentaire du chapitre met d’abord en évidence la réflexion diffuse, puis la réflexion spéculaire, définie dans le document comme la réflexion par un miroir ; le même passage annonce ensuite la réflexion totale."
    },
    {
      "enonce": "Comment nomme-t-on le rayon lumineux renvoyé par la surface de séparation de deux milieux ?",
      "options": [
        "le rayon incident",
        "le rayon réfracté",
        "la normale au point d’incidence",
        "le rayon réfléchi"
      ],
      "correct": 3,
      "explication": "Le fascicule ADEM fait compléter ce vocabulaire : le rayon arrivant sur la surface de séparation est le rayon incident, le rayon renvoyé par cette surface est le rayon réfléchi, le rayon qui traverse la surface est le rayon réfracté."
    },
    {
      "enonce": "Le chapitre range la pêche au harpon parmi les applications de la réflexion et de la réfraction. Que doit faire le pêcheur qui vise un poisson sous l’eau ?",
      "options": [
        "viser en dessous du point lumineux qu’il voit",
        "viser exactement le point lumineux qu’il voit",
        "viser au-dessus du point lumineux qu’il voit",
        "attendre que le poisson monte à la surface"
      ],
      "correct": 0,
      "explication": "Le récit du fascicule fait viser le pêcheur en dessous des deux points lumineux qu’il aperçoit : en passant de l’eau à l’air, la lumière venue du poisson change de direction, c’est le phénomène de réfraction que le chapitre met en évidence par l’expérience du bâton paraissant brisé."
    }
  ]);

  JK.quizDeLecon("pc-4e-c2-l1", [
    {
      "enonce": "Dans le chapitre C1, comment nomme-t-on un mélange dont on peut distinguer certains constituants à l’œil nu ?",
      "options": [
        "un mélange hétérogène",
        "un mélange homogène",
        "un corps pur simple",
        "un corps pur composé"
      ],
      "correct": 0,
      "explication": "Le programme définit le mélange hétérogène à partir de la décantation d’une eau boueuse et salée : on y distingue certains constituants à l’œil nu ; le mélange homogène, lui, est obtenu après la filtration."
    },
    {
      "enonce": "Lors de l’électrolyse de l’eau, lequel des deux gaz recueillis ravive un point incandescent ?",
      "options": [
        "le diazote",
        "le dioxygène",
        "le dihydrogène",
        "le dioxyde de carbone"
      ],
      "correct": 1,
      "explication": "Le document identifie expérimentalement les deux gaz de l’électrolyse : le dihydrogène provoque une légère détonation au contact d’une flamme, le dioxygène ravive un point incandescent ; les deux sont des corps purs simples."
    },
    {
      "enonce": "Quelle méthode de séparation, citée dans le chapitre C1, laisse les particules les plus lourdes se déposer au fond d’un récipient ?",
      "options": [
        "la filtration",
        "le tamisage",
        "la distillation fractionnée",
        "la décantation"
      ],
      "correct": 3,
      "explication": "Le chapitre C1 fait réaliser la décantation, puis la filtration et la distillation : la décantation laisse les particules lourdes tomber au fond du récipient, la filtration retient les particules sur un milieu poreux, la distillation sépare par vaporisation puis liquéfaction."
    }
  ]);

  JK.quizDeLecon("pc-4e-c2-l2", [
    {
      "enonce": "Dans le chapitre C2, que devient un atome qui perd ou gagne un ou plusieurs électrons ?",
      "options": [
        "un atome resté neutre",
        "un noyau central",
        "un ion",
        "une molécule d’eau"
      ],
      "correct": 2,
      "explication": "Le document explique qu’à l’état normal la charge des électrons compense celle du noyau, puis que, par perte ou gain d’un ou de plusieurs électrons, l’atome donne un ion positif ou un ion négatif ; l’ion polyatomique relève de la même notation."
    },
    {
      "enonce": "Dans le chapitre C2, par quelle composition un corps pur simple se distingue-t-il d’un corps pur composé ?",
      "options": [
        "il est formé d’atomes identiques",
        "il est formé d’atomes de plusieurs espèces",
        "il est formé de deux substances mélangées",
        "il est formé d’ions positifs et d’ions négatifs"
      ],
      "correct": 0,
      "explication": "Le chapitre C2 distingue le corps pur simple du corps pur composé par la nature et le nombre des atomes qui les constituent : le premier ne comporte qu’une sorte d’atomes, le second plusieurs ; un mélange, lui, n’est pas un corps pur."
    },
    {
      "enonce": "Dans le modèle de l’atome que le chapitre C2 demande de retenir, comment est chargé le noyau central ?",
      "options": [
        "négativement",
        "sans aucune charge",
        "de façon variable selon le lieu",
        "positivement"
      ],
      "correct": 3,
      "explication": "Le document demande d’apprendre aux élèves que l’atome comprend un noyau central chargé positivement et des électrons chargés négativement qui gravitent autour de ce noyau, les deux charges se compensant à l’état normal."
    }
  ]);

  JK.quizDeLecon("pc-4e-c2-l3", [
    {
      "enonce": "Dans le chapitre C3, quelle est l’unité de la quantité de matière ?",
      "options": [
        "le gramme (g)",
        "la mole (mol)",
        "le litre (L)",
        "la mole par litre (mol/L)"
      ],
      "correct": 1,
      "explication": "Le programme définit la mole comme l’unité de quantité de matière choisie pour les atomes et les molécules, avec la constante d’Avogadro ; mol/L est l’unité usuelle d’une concentration, pas d’une quantité de matière."
    },
    {
      "enonce": "La molécule d’eau renferme deux atomes d’hydrogène et un atome d’oxygène. Avec M(H) = 1 g/mol et M(O) = 16 g/mol, que vaut sa masse molaire moléculaire ?",
      "options": [
        "16 g/mol",
        "17 g/mol",
        "34 g/mol",
        "18 g/mol"
      ],
      "correct": 3,
      "explication": "Le chapitre C3 fait calculer les masses molaires à partir des formules des corps courants comme l’eau : deux atomes d’hydrogène et un atome d’oxygène donnent 2 × 1 + 16 = 18, soit 18 g/mol ; oublier de compter les deux atomes d’hydrogène conduit à 17 g/mol."
    },
    {
      "enonce": "Que donne l’énoncé de la loi d’Avogadro-Ampère repris dans le chapitre C3 ?",
      "options": [
        "des volumes égaux de gaz différents renferment des quantités de matière différentes",
        "le volume d’un gaz ne dépend pas de sa température",
        "des volumes égaux de gaz différents, dans les mêmes conditions de température et de pression, renferment la même quantité de matière",
        "tous les gaz occupent un même volume quelle que soit leur quantité de matière"
      ],
      "correct": 2,
      "explication": "C’est l’énoncé que le fascicule ADEM fait compléter : des volumes égaux de différents gaz, mesurés dans les mêmes conditions de température et de pression, renferment la même quantité de matière ; le volume molaire de 22,4 L/mol correspond aux conditions normales de température et de pression."
    }
  ]);

  JK.quizDeLecon("pc-4e-c2-l4", [
    {
      "enonce": "Le chapitre C4 demande de vérifier expérimentalement la loi de conservation de la matière, ou loi de Lavoisier. Que dit cette loi ?",
      "options": [
        "la masse totale augmente pendant une réaction chimique",
        "la masse totale diminue dès qu’un gaz se dégage",
        "seuls les réactifs possèdent une masse",
        "la masse totale des corps mis en jeu se conserve au cours d’une réaction chimique"
      ],
      "correct": 3,
      "explication": "Le programme fait vérifier expérimentalement la loi de conservation de la matière, ce qui se traduit par une équation-bilan équilibrée : dans l’expérience du fascicule, la masse perdue par le mélange chauffé correspond exactement au dioxyde de carbone échappé du tube."
    },
    {
      "enonce": "Dans une réaction chimique, comment le chapitre C4 nomme-t-il les espèces chimiques qui disparaissent ?",
      "options": [
        "les produits",
        "les corps purs formés",
        "les réactifs",
        "les équations-bilans"
      ],
      "correct": 2,
      "explication": "La phrase à compléter du fascicule est nette : il y a transformation chimique lorsque des espèces chimiques appelées réactifs disparaissent et que d’autres, appelées produits, apparaissent ; la réaction chimique est la transformation limitée à ces réactifs et à ces produits."
    },
    {
      "enonce": "Le chapitre C4 classe les réactions chimiques selon leur aspect énergétique. Comment nomme-t-on une réaction qui dégage de la chaleur ?",
      "options": [
        "une réaction endothermique",
        "une réaction exothermique",
        "une réaction athermique",
        "une réaction de synthèse"
      ],
      "correct": 1,
      "explication": "Le programme définit à partir d’exemples les réactions exothermique, endothermique et athermique selon l’aspect énergétique : une réaction qui dégage de la chaleur est exothermique, la neutralisation vue en 3ème en est un exemple."
    }
  ]);
})();
