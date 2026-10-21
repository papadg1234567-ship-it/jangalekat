/* Quiz de Physique-Chimie 3ᵉ — une leçon = trois questions.
   Les intitulés et l’ordre des leçons viennent de copies du programme sénégalais de sciences
   physiques datées d’août 2008 (fascicule pédagogique, autorité non imprimée) : aucune page de
   garde, aucun nom de ministère ou d’inspection n’y figure, ces copies ne sont donc pas désignées
   ici comme un programme officiel. Les durées relevées dans ces copies sont incohérentes entre le
   sommaire et le détail, et le chapitre d’énergie y apparaît tantôt sous le titre
   « Transformations d’énergies », tantôt sous le titre « Énergie et rendement » : en conséquence,
   aucune question de ce fichier ne porte sur une durée ou un nombre d’heures.
   Les énoncés, options et explications sont des contenus de démonstration auto-rédigés par un
   modèle : ils reprennent les notions de ces copies, mais aucun n’a été relu par un enseignant.
   Ils ne sont ni un sujet officiel ni une évaluation de référence. */
(function () {
  'use strict';

  JK.quizDeLecon("pc-3e-c1-l1", [
    {
      "enonce": "Quel type de lentille rabat un faisceau de lumière parallèle vers son axe optique ?",
      "options": [
        "Une lentille divergente",
        "Une lentille convergente",
        "Un miroir plan",
        "Un prisme"
      ],
      "correct": 1,
      "explication": "Le programme fait distinguer en travaux pratiques les lentilles convergentes des lentilles divergentes par leur action sur un faisceau parallèle ou cylindrique : la convergente rabat le faisceau, la divergente l’ouvre. Un miroir plan renvoie la lumière par réflexion et un prisme l’écarte de son axe sans la ramener en un point."
    },
    {
      "enonce": "Dans quelle unité le programme de troisième donne-t-il la vergence d’une lentille ?",
      "options": [
        "La dioptrie",
        "Le newton (N)",
        "Le watt (W)",
        "L’ohm (Ω)"
      ],
      "correct": 0,
      "explication": "À partir de la distance focale, le programme définit la vergence et lui donne la dioptrie pour unité, la distance focale et la vergence étant positives pour une lentille convergente, négatives pour une lentille divergente. Le newton mesure une force, le watt une puissance et l’ohm une résistance."
    },
    {
      "enonce": "Quel appareil d’usage courant figure parmi les applications des lentilles citées par le programme de troisième ?",
      "options": [
        "Le périscope",
        "La chambre noire",
        "Le four solaire",
        "La loupe"
      ],
      "correct": 3,
      "explication": "Le programme cite les verres correcteurs pour la myopie, l’hypermétropie et la presbytie, la loupe, l’objectif photographique et les lentilles de projection. Le périscope et le four solaire relèvent de la réflexion et de la réflexion totale, la chambre noire de la propagation rectiligne de la lumière."
    }
  ]);

  JK.quizDeLecon("pc-3e-c1-l2", [
    {
      "enonce": "Que fait apparaître une expérience de dispersion réalisée avec un prisme ?",
      "options": [
        "Que la lumière blanche ne contient qu’une seule couleur",
        "Qu’un prisme absorbe toute la lumière qui le traverse",
        "Que la lumière blanche se décompose en plusieurs couleurs",
        "Que la lumière blanche se réfléchit entièrement sur les faces du prisme"
      ],
      "correct": 2,
      "explication": "La dispersion est la décomposition de la lumière blanche en plusieurs couleurs, observée avec un prisme, un verre d’eau légèrement incliné ou des bulles de savon. Le programme la fait obtenir, qualitativement, quand la lumière tombe sur des faces non parallèles d’un milieu transparent et subit au moins deux réfractions, sans donner de valeurs d’angle ni parler d’indices de réfraction."
    },
    {
      "enonce": "Comment le programme appelle-t-il une lumière formée d’une seule couleur ?",
      "options": [
        "Une lumière polychromatique",
        "Une lumière monochromatique",
        "Une lumière blanche",
        "Une lumière dispersée"
      ],
      "correct": 1,
      "explication": "Une lumière monochromatique est formée d’une seule couleur, par opposition à la lumière polychromatique, qui en rassemble plusieurs. C’est avec ces deux notions que le spectre continu et l’arc-en-ciel sont expliqués : dans les gouttes d’eau, la lumière se réfracte au moins deux fois et subit une dispersion comme dans un prisme."
    },
    {
      "enonce": "Par quel moyen le programme montre-t-il expérimentalement la recomposition de la lumière ?",
      "options": [
        "Avec une lentille convergente ou le disque de Newton",
        "Avec un prisme à faces parallèles",
        "Avec un miroir plan et deux bougies",
        "Avec un écran opaque percé d’une petite ouverture"
      ],
      "correct": 0,
      "explication": "Le programme demande de montrer la recomposition de la lumière blanche à l’aide d’une lentille convergente ou du disque de Newton. Un prisme à faces parallèles ne réalise pas les conditions de la dispersion, deux bougies devant un miroir plan relèvent de la réflexion, et un écran percé relève de la propagation rectiligne ; la couleur d’un objet peut aussi changer selon la lumière qui l’éclaire."
    }
  ]);

  JK.quizDeLecon("pc-3e-c1-l3", [
    {
      "enonce": "Dans quelle unité le programme impose-t-il d’exprimer l’intensité d’une force ?",
      "options": [
        "Le kilogramme-force",
        "Le joule (J)",
        "Le volt (V)",
        "Le newton (N)"
      ],
      "correct": 3,
      "explication": "L’intensité d’une force se mesure avec un dynamomètre et s’exprime en newton ; le programme interdit formellement de parler de kilogramme-force. Le joule est l’unité du travail mécanique et le volt celle de la tension électrique."
    },
    {
      "enonce": "Quelles sont les caractéristiques d’une force que le programme demande de donner ?",
      "options": [
        "Sa masse, son volume, sa température et sa couleur",
        "Son unité, son symbole, sa formule et son calibre",
        "Sa droite d’action, son point d’application, son sens et son intensité",
        "Sa vitesse, son accélération, sa durée et son parcours"
      ],
      "correct": 2,
      "explication": "Une force est définie à partir de ses effets dynamiques et statiques, puis décrite par sa droite d’action, son point d’application, son sens et son intensité ; le programme insiste pour distinguer la droite d’action du sens, les forces à distance des forces de contact, les forces localisées des forces réparties."
    },
    {
      "enonce": "Un solide est en équilibre sous l’action de deux forces seulement. Que dit le programme ?",
      "options": [
        "Les deux forces ont même droite d’action, même intensité et des sens opposés",
        "Les deux forces ont même sens et des intensités différentes",
        "Les deux forces n’ont aucun lien entre elles",
        "Les deux forces ne peuvent s’équilibrer que si le solide est lourd"
      ],
      "correct": 0,
      "explication": "Ce sont les conditions nécessaires d’équilibre : les deux forces sont directement opposées, et le programme signale que la réciproque est fausse. L’exemple d’étude proposé est l’araignée suspendue à son fil, où la tension du fil compense le poids."
    }
  ]);

  JK.quizDeLecon("pc-3e-c1-l4", [
    {
      "enonce": "Une force constante de 5 N, colinéaire et de même sens que le déplacement, anime ce déplacement sur 2 m. Quel est son travail ?",
      "options": [
        "10 J",
        "7 J",
        "2,5 J",
        "10 W"
      ],
      "correct": 0,
      "explication": "Le programme donne l’expression W = F × L pour une force constante colinéaire au déplacement, soit ici 5 × 2 = 10 ; le travail s’exprime en joule, jamais en kilogramme-mètre. Une force qui agit dans le sens du déplacement réalise un travail moteur, dans le sens contraire un travail résistant."
    },
    {
      "enonce": "Quand la droite d’action d’une force constante est perpendiculaire au déplacement, que vaut le travail de cette force ?",
      "options": [
        "Il est moteur",
        "Il est nul",
        "Il est résistant",
        "Il vaut le produit de la force par la distance"
      ],
      "correct": 1,
      "explication": "Le programme admet que le travail d’une force dont la droite d’action est normale au déplacement est nul : c’est l’une des conditions de nullité du travail qu’il demande d’énoncer. Le travail du poids fait exception à la formule simple, car il ne dépend pas du chemin suivi et s’écrit W = m × g × h."
    },
    {
      "enonce": "Une machine mécanique fournit un travail de 100 J en 20 s. Quelle est sa puissance moyenne ?",
      "options": [
        "2000 W",
        "0,2 W",
        "5 W",
        "5 J"
      ],
      "correct": 2,
      "explication": "La puissance moyenne est P = W / t, soit 100 / 20 = 5, en watt ; multiplier le travail par la durée ou diviser la durée par le travail sont les erreurs classiques. Le programme établit aussi P = F × V quand la force est constante, colinéaire et de même sens qu’un déplacement à vitesse constante, la puissance instantanée étant hors programme."
    }
  ]);

  JK.quizDeLecon("pc-3e-c1-l5", [
    {
      "enonce": "D’après la convention retenue par le programme, que porte un bâton de verre frotté avec de la laine ?",
      "options": [
        "Des charges négatives",
        "Des charges positives",
        "Aucune charge électrique",
        "Des charges neutres réparties"
      ],
      "correct": 1,
      "explication": "Après avoir mis en évidence les deux espèces d’électricité, le programme nomme conventionnellement positives les charges portées par le verre frotté avec de la laine et négatives celles portées par l’ébonite frottée avec une peau de chat. Dans un isolant, ces charges restent localisées sur la partie frottée, alors que dans un conducteur elles se répartissent."
    },
    {
      "enonce": "Que devient un atome lorsqu’il perd ou gagne un ou plusieurs électrons ?",
      "options": [
        "Il reste un atome neutre",
        "Il se transforme en noyau",
        "Il se transforme en molécule",
        "Il devient un ion"
      ],
      "correct": 3,
      "explication": "L’atome est neutre parce que la charge de ses électrons compense celle de son noyau central ; par perte ou gain d’un ou plusieurs électrons il devient un ion, positive s’il manque des électrons, négative s’il en possède en excès. C’est ce rappel sur les ions qui permet d’interpréter l’électrisation et la conductibilité des solutions."
    },
    {
      "enonce": "Dans une solution conductrice, un électrolyte, par quoi le courant électrique est-il assuré ?",
      "options": [
        "Par le déplacement des électrons libres du métal",
        "Par le déplacement des molécules d’eau",
        "Par le déplacement d’ions",
        "Par le déplacement des noyaux d’atomes"
      ],
      "correct": 2,
      "explication": "Le programme donne la nature du courant électrique : déplacement d’électrons dans les conducteurs métalliques, déplacement d’ions dans les électrolytes, d’où la conductibilité de certaines solutions ; le terme de porteurs de charge résume les deux cas. L’intensité se mesure avec un ampèremètre et relie la charge et la durée par I = q / t, avec q = n × e."
    }
  ]);

  JK.quizDeLecon("pc-3e-c1-l6", [
    {
      "enonce": "Pour un conducteur ohmique, que relie la loi d’Ohm ?",
      "options": [
        "La tension et l’intensité, par U = R × I",
        "La puissance et la tension, par P = U × I",
        "Le travail et la durée, par P = W / t",
        "L’énergie dissipée et la durée, par W = R × I² × t"
      ],
      "correct": 0,
      "explication": "La loi d’Ohm relie la tension aux bornes d’un conducteur ohmique et l’intensité du courant qui le traverse, R étant la résistance en ohm ; le tracé de la caractéristique U = f(I), limité à la partie où U et I sont positifs, permet de la dégager. La relation P = U × I est celle de la puissance électrique et W = R × I² × t celle de la loi de Joule."
    },
    {
      "enonce": "Un conducteur ohmique a une résistance de 20 Ω et laisse passer un courant de 0,5 A. Quelle tension a-t-il à ses bornes ?",
      "options": [
        "0,025 V",
        "40 V",
        "10 V",
        "20,5 V"
      ],
      "correct": 2,
      "explication": "Avec U = R × I, on obtient 20 × 0,5 = 10, en volt. Diviser l’intensité par la résistance, diviser la résistance par l’intensité ou additionner les deux valeurs sont trois erreurs de relation ; la résistance d’un fil cylindrique homogène de section constante dépend elle de sa longueur, de sa section et de sa résistivité."
    },
    {
      "enonce": "Deux résistors de 4 Ω et de 6 Ω sont montés en série. Quelle résistance équivalente obtient-on ?",
      "options": [
        "2,4 Ω",
        "10 Ω",
        "24 Ω",
        "10 V"
      ],
      "correct": 1,
      "explication": "Pour un montage en série, la résistance équivalente est la somme des résistances, soit 4 + 6 = 10 ohm. La valeur 2,4 correspondrait au montage en parallèle, où l’inverse de la résistance équivalente égale la somme des inverses ; 24 vient d’une multiplication et une résistance ne s’exprime pas en volt. Le rhéostat est une application du conducteur ohmique, utilisé pour faire varier l’intensité dans un circuit."
    }
  ]);

  JK.quizDeLecon("pc-3e-c1-l7", [
    {
      "enonce": "D’après le programme, quand un système possède-t-il de l’énergie ?",
      "options": [
        "Quand il est chaud",
        "Quand il est immobile",
        "Quand il est très volumineux",
        "Quand il peut produire du travail"
      ],
      "correct": 3,
      "explication": "Le programme arrive à la notion d’énergie par des systèmes susceptibles de produire du travail : un système possède de l’énergie s’il peut produire du travail, d’où le choix du joule comme unité commune du travail et de l’énergie. Il distingue ensuite plusieurs formes, électrique, thermique ou calorifique, lumineuse, éolienne, chimique, potentielle de pesanteur ou élastique, cinétique."
    },
    {
      "enonce": "Un appareil électrique fonctionne sous une tension de 12 V et est traversé par un courant de 2 A. Quelle puissance électrique met-il en jeu ?",
      "options": [
        "24 W",
        "14 W",
        "6 W",
        "24 J"
      ],
      "correct": 0,
      "explication": "Le programme donne l’expression de la puissance électrique P = U × I, soit ici 12 × 2 = 24, en watt. L’énergie correspondante sur une durée s’en déduit par W = U × I × t, avec le kilowattheure comme unité usuelle, et l’énergie dissipée par effet Joule dans un résistor par W = R × I² × t : le joule est une énergie, pas une puissance."
    },
    {
      "enonce": "Le long d’une transformation d’énergie, que vaut le rendement du dispositif ?",
      "options": [
        "Le produit de l’énergie reçue par l’énergie utile",
        "La différence entre l’énergie reçue et l’énergie utile",
        "Le rapport de l’énergie utile à l’énergie reçue, toujours inférieur à 1",
        "La somme de l’énergie utile et de l’énergie perdue"
      ],
      "correct": 2,
      "explication": "En analysant des transformations d’énergie dans des moteurs, des turbines ou des pompes, le programme distingue l’énergie utile de l’énergie reçue et définit le rendement comme leur rapport, toujours inférieur à 1 et exprimé en pourcentage. Une partie de l’énergie est en effet perdue sous forme de chaleur, forme dégradée appelée énergie calorifique ou thermique."
    }
  ]);

  JK.quizDeLecon("pc-3e-c2-l1", [
    {
      "enonce": "Qu’est-ce qu’une solution, d’après le programme ?",
      "options": [
        "Un mélange hétérogène dont on distingue les constituants à l’œil nu",
        "Un mélange homogène de deux ou plusieurs corps",
        "Un corps pur dont on ne peut extraire deux fractions",
        "Un solide que l’on fait fondre dans l’eau"
      ],
      "correct": 1,
      "explication": "Le programme définit la solution comme un mélange homogène de deux ou plusieurs corps, à partir de la dissolution du sel de cuisine dans l’eau. Il l’illustre aussi pour un solide dans un liquide, un liquide dans un liquide comme l’eau et l’alcool, ou un gaz comme le dioxyde de carbone dans l’eau, et rattache saturation et solubilité à la température."
    },
    {
      "enonce": "Dans la dissolution du sel de cuisine dans l’eau, quel corps le programme appelle-t-il le soluté ?",
      "options": [
        "L’eau",
        "La solution obtenue",
        "Le sel",
        "L’ensemble sel et eau"
      ],
      "correct": 2,
      "explication": "Le soluté est le corps dissous, ici le sel, le solvant étant le dissolvant, ici l’eau ; le mélange homogène obtenu est la solution. Cette distinction est reprise pour le sucre ou l’alcool dissous dans l’eau, et commande le choix rationnel des produits lors de la préparation d’une solution."
    },
    {
      "enonce": "Une solution contient un soluté de masse molaire 40 g par mole, à la concentration molaire volumique de 0,5 mole par litre. Quelle est sa concentration massique volumique ?",
      "options": [
        "80 g par litre",
        "40,5 g par litre",
        "0,0125 g par litre",
        "20 g par litre"
      ],
      "correct": 3,
      "explication": "Le programme établit la relation entre les deux concentrations, Cm = M × C, avec M la masse molaire du soluté : 40 × 0,5 = 20 g par litre. Diviser M par C, additionner les deux nombres ou inverser le rapport sont les erreurs classiques ; les unités usuelles retenues sont la mole par litre pour C et le gramme par litre pour Cm."
    }
  ]);

  JK.quizDeLecon("pc-3e-c2-l2", [
    {
      "enonce": "Avec le BBT, quelle coloration prend une solution acide ?",
      "options": [
        "Jaune",
        "Bleue",
        "Verte",
        "Rose"
      ],
      "correct": 0,
      "explication": "Le classement retenu par le programme donne une coloration jaune avec une solution acide, bleue avec une solution basique et verte avec une solution neutre, ce qui permet de classer des produits courants. Le jus de citron, le vinaigre, l’infusion d’oseille et le jus de tamarin sont acides, la lessive, la cendre et l’eau de chaux sont basiques, et le jus de bissap blanc est signalé comme autre indicateur coloré."
    },
    {
      "enonce": "Que donne la réaction entre une solution d’acide chlorhydrique et une solution d’hydroxyde de sodium, la soude ?",
      "options": [
        "Du dihydrogène dégagé et un sel",
        "Un précipité et du dioxygène",
        "Rien, les deux solutions ne réagissent pas",
        "De l’eau et un sel, avec échauffement"
      ],
      "correct": 3,
      "explication": "Le programme réalise cette neutralisation, y met en évidence un effet thermique, donc un caractère exothermique, et le sel formé ; l’équation ionique d’interprétation réunit les ions H+ de l’acide et les ions HO− de la base pour donner de l’eau. Les acides ont aussi une action sur le calcaire, propriété utilisée pour le détartrage."
    },
    {
      "enonce": "À l’équivalence d’un dosage, 0,02 L d’acide chlorhydrique ont réagi avec 0,01 L d’une solution de soude de concentration 0,1 mole par litre. Quelle était la concentration de l’acide ?",
      "options": [
        "0,1 mole par litre",
        "0,05 mole par litre",
        "0,2 mole par litre",
        "0,001 mole par litre"
      ],
      "correct": 1,
      "explication": "À l’équivalence acido-basique, la quantité de matière d’ions H+ est égale à celle d’ions HO− ajoutés, d’où la relation CA × VA = CB × VB : 0,1 × 0,01 / 0,02 = 0,05 mole par litre. Le produit 0,1 × 0,01 = 0,001 est une quantité de matière et non une concentration."
    }
  ]);

  JK.quizDeLecon("pc-3e-c2-l3", [
    {
      "enonce": "Que devient un objet en fer laissé exposé à l’air humide ?",
      "options": [
        "Il se dissout dans la vapeur d’eau de l’air",
        "Il se transforme en aluminium",
        "Il s’oxyde : c’est le phénomène de corrosion",
        "Il perd sa conductibilité électrique"
      ],
      "correct": 2,
      "explication": "Le programme étudie l’action de l’air sur les métaux, avec l’oxydation à froid et à chaud, et écrit celle du fer comme celle de l’aluminium pour aboutir à un oxyde ; il demande d’expliquer la corrosion et les moyens de lutter contre. La conductibilité électrique et la conductibilité thermique sont des propriétés physiques que le métal possède avant de s’oxyder."
    },
    {
      "enonce": "Quels corps sont formés quand l’acide chlorhydrique dilué agit à froid sur du zinc ?",
      "options": [
        "De l’oxyde de zinc et du dioxygène",
        "Du dihydrogène et du chlorure de zinc",
        "Du zinc métal et de l’eau",
        "De l’hydroxyde de zinc et du chlore"
      ],
      "correct": 1,
      "explication": "Le programme traduit cette action par une équation ionique où les ions H+ réagissent sur le zinc, ce qui dégage du dihydrogène et forme des ions zinc en solution, ainsi que par l’équation globale donnant le chlorure de zinc. Le bilan se lit donc comme un dégagement de dihydrogène et la formation d’un sel ; la manipulation des acides dilués et l’usage du brûleur exigent des précautions."
    },
    {
      "enonce": "L’action d’un acide dilué à froid sur un morceau de plomb commence puis semble presque s’arrêter. Pourquoi ?",
      "options": [
        "Parce que le plomb ne réagit avec aucun acide",
        "Parce que l’acide dilué se refroidit",
        "Parce que le plomb fond au contact de l’acide",
        "Parce qu’une couche insoluble de chlorure ou de sulfate de plomb se forme et arrête la réaction"
      ],
      "correct": 3,
      "explication": "Le programme le signale expressément : l’action des acides chlorhydrique et sulfurique dilués à froid sur le plomb a bien lieu, mais elle est quasi stoppée par la formation d’une couche insoluble de chlorure ou de sulfate de plomb à la surface du métal. C’est pourquoi il faut éviter de conclure, comme les autres distracteurs, à une absence totale de réaction."
    }
  ]);

  JK.quizDeLecon("pc-3e-c2-l4", [
    {
      "enonce": "Qu’est-ce qu’un hydrocarbure ?",
      "options": [
        "Un composé organique contenant du carbone, de l’hydrogène et de l’oxygène",
        "Un mélange de pétrole et de gaz naturel",
        "Un corps pur simple formé seulement de carbone",
        "Un composé organique dont la molécule renferme uniquement les éléments carbone et hydrogène"
      ],
      "correct": 3,
      "explication": "Le programme définit l’hydrocarbure comme un composé organique dont la molécule renferme uniquement l’élément carbone et l’élément hydrogène ; un composé qui contient aussi de l’oxygène n’en est pas un. Le méthane, l’éthane, le propane, le butane, l’éthylène et l’acétylène en sont les exemples étudiés, avec leurs formules brutes et quelques propriétés physiques."
    },
    {
      "enonce": "Quelles familles d’hydrocarbures le programme de troisième cite-t-il ?",
      "options": [
        "Les alcanes, les alcènes et les alcynes",
        "Les alcools, les acides et les esters",
        "Les oxydes, les hydroxydes et les sels",
        "Les métaux, les non-métaux et les ions"
      ],
      "correct": 0,
      "explication": "Le programme nomme les alcanes, les alcènes et les alcynes et donne leurs formules brutes générales. Il met hors programme l’isomérie, les liaisons, les formules semi-développées ou développées et la nomenclature, et n’évalue pas les élèves sur la nomenclature."
    },
    {
      "enonce": "Quel gaz dangereux, lié à un manque de dioxygène, le programme demande-t-il d’évoquer à propos des combustions d’hydrocarbures ?",
      "options": [
        "Le dioxyde de carbone",
        "Le monoxyde de carbone",
        "Le diazote",
        "Le dioxygène"
      ],
      "correct": 1,
      "explication": "Le programme fait mettre en évidence la combustion incomplète en réglant la flamme d’un bec Bunsen ou d’un réchaud à gaz, et évoque le danger lié à la formation de monoxyde de carbone, sans demander d’écrire son équation-bilan. La combustion complète, elle, s’écrit dans le dioxygène et donne du dioxyde de carbone et de l’eau ; le diazote, lui, est le constituant majoritaire de l’air."
    }
  ]);
})();
