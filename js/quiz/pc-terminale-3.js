/* Quiz de Physique-Chimie Terminale — chapitre de chimie (une leçon = trois questions).
   Les intitulés et l’ordre des leçons viennent de copies du programme sénégalais de sciences
   physiques datées d’août 2008 (fascicule pédagogique, autorité non imprimée : ni page de garde,
   ni mention d’un ministère, ni IGEN, ni Commission des programmes). La pagination imprimée court
   en continu de la page 20 à la page 228, signe d’un extrait d’un fascicule national plus vaste
   (tome 1) ; les copies ne sont donc jamais désignées ici comme un programme officiel.
   Réserves du registre reprises telles quelles : seule la série scientifique (S1, S2) est retenue,
   la variante L2 du même fascicule est exclue ; pour plusieurs chapitres de physique la durée du
   sommaire diffère de celle du relevé de chapitre. En conséquence, aucune question de ce fichier
   ne porte sur une durée, un nombre d’heures ou une répartition horaire.
   Les énoncés portent uniquement sur ce que détaillent ces copies (chapitres C1 à C9 du programme
   de chimie) ; le fascicule d’appui n’est jamais cité comme référence validée. Les énoncés, options
   et explications sont des contenus de démonstration auto-rédigés par un modèle : ils reprennent les
   notions de ces copies, mais aucun n’a été relu par un enseignant. Ils ne sont ni un sujet officiel
   ni une évaluation de référence. Les espèces chimiques sont nommées en toutes lettres. */
(function () {
  'use strict';

  JK.quizDeLecon("pc-terminale-c2-l1", [
    {
      "enonce": "Par quelle réaction le programme permet-il de distinguer les trois classes d’alcools ?",
      "options": [
        "La déshydratation",
        "L’estérification directe",
        "L’oxydation ménagée",
        "La saponification"
      ],
      "correct": 2,
      "explication": "Le chapitre insiste sur les réactions d’oxydation ménagée et montre comment elles permettent de distinguer les trois classes d’alcools : un alcool premier donne un aldéhyde puis un acide carboxylique, un alcool second une cétone, tandis qu’un alcool tiers ne s’oxyde pas en ménagement."
    },
    {
      "enonce": "Comment le programme qualifie-t-il la réaction d’estérification directe entre un acide carboxylique et un alcool ?",
      "options": [
        "Lente, limitée et réversible",
        "Rapide et totale",
        "Instantanée et irréversible",
        "Totale dès que l’on chauffe"
      ],
      "correct": 0,
      "explication": "L’estérification directe est présentée comme une réaction lente et limitée : elle s’arrête avant la consommation complète des réactifs et conduit, avec l’hydrolyse réciproque, à un équilibre chimique que l’on peut déplacer en éliminant de l’eau."
    },
    {
      "enonce": "Que prépare-t-on principalement, d’après le programme, par déshydratation d’un alcool ?",
      "options": [
        "Un acide carboxylique",
        "Un alcène",
        "Un ester",
        "Un aldéhyde"
      ],
      "correct": 1,
      "explication": "Le chapitre souligne l’utilisation des réactions de déshydratation des alcools pour la préparation des alcènes, en prolongeant l’obtention des alcools par hydratation inverse des alcènes vue en première."
    }
  ]);

  JK.quizDeLecon("pc-terminale-c2-l2", [
    {
      "enonce": "De quelle molécule les amines dérivent-elles selon le programme ?",
      "options": [
        "L’éthanol",
        "L’ammoniac",
        "L’acide éthanoïque",
        "Le benzène"
      ],
      "correct": 1,
      "explication": "Les amines sont les dérivés organiques de l’ammoniac : on remplace un, deux ou trois atomes d’hydrogène de l’ammoniac par des groupes hydrocarbonés, d’où les trois classes d’amines étudiées avec la méthanamine et l’éthanamine comme exemples."
    },
    {
      "enonce": "Dans l’eau, que vaut l’ionisation d’une amine ?",
      "options": [
        "Elle est totale, comme celle d’un électrolyte fort",
        "Elle est nulle, l’amine ne réagit pas avec l’eau",
        "Elle est immédiate et irréversible",
        "Elle est partielle, le programme insiste sur son caractère limité"
      ],
      "correct": 3,
      "explication": "L’étude des propriétés basiques des amines est limitée à leur ionisation dans l’eau, dont le programme signale expressément le caractère partiel : à la manière d’un électrolyte faible, l’amine ne se transforme que pour une partie en ion ammonium substitué."
    },
    {
      "enonce": "Que met en évidence la structure de Lewis du groupe amine, et plus précisément le doublet non liant de l’azote ?",
      "options": [
        "Le caractère basique des amines",
        "Le caractère acide des amines",
        "Le pouvoir oxydant des amines",
        "La neutralité chimique des amines"
      ],
      "correct": 0,
      "explication": "Le programme annonce que la représentation de la structure de Lewis des amines permettra de prévoir leur caractère basique, le doublet non liant porté par l’azote expliquant l’action des amines sur les indicateurs colorés et sur les solutions d’ions métalliques."
    }
  ]);

  JK.quizDeLecon("pc-terminale-c2-l3", [
    {
      "enonce": "Quel groupe caractéristique porte un acide carboxylique ?",
      "options": [
        "Le groupe hydroxyle",
        "Le groupe carbonyle seul",
        "Le groupe amine",
        "Le groupe carboxyle"
      ],
      "correct": 3,
      "explication": "Le chapitre rappelle d’abord le groupe carboxyle, porté par les acides carboxyliques, puis étudie ses transformations en d’autres groupes, l’acide du vinaigre dérivant de l’éthanol et relevant de l’acide éthanoïque."
    },
    {
      "enonce": "Comparée à l’estérification directe, comment le programme décrit-il l’estérification indirecte, c’est-à-dire l’action d’un chlorure ou d’un anhydride d’acide sur un alcool ?",
      "options": [
        "Lente et limitée",
        "Rapide et totale",
        "Inexistante",
        "Réversible et équilibrée"
      ],
      "correct": 1,
      "explication": "Le passage à l’ester donne l’occasion de comparer l’estérification directe, action d’un acide carboxylique sur un alcool, réaction lente et limitée, et l’estérification indirecte, action d’un chlorure ou d’un anhydride d’acide sur un alcool, réaction rapide et totale."
    },
    {
      "enonce": "Que sont les corps gras, d’après le programme ?",
      "options": [
        "Des monoesters d’un alcool simple",
        "Des polyamides comme le Nylon",
        "Des triesters du glycérol et des acides gras",
        "Des amines aromatiques"
      ],
      "correct": 2,
      "explication": "À propos de la saponification, réalisée sur l’huile, le programme présente les corps gras comme des triesters du glycérol et des acides gras ; la fabrication industrielle des savons, des polyesters et du Nylon est donnée comme application du chapitre."
    }
  ]);

  JK.quizDeLecon("pc-terminale-c2-l4", [
    {
      "enonce": "La quantité de matière d’un produit formé passe de 0 à 0,08 mole en 40 s. Quelle est la vitesse moyenne de formation de ce produit ?",
      "options": [
        "0,002 mole par seconde",
        "3,2 mole par seconde",
        "500 mole par seconde",
        "0,02 mole par seconde"
      ],
      "correct": 0,
      "explication": "La vitesse moyenne de formation d’un produit est la quantité formée divisée par la durée, soit 0,08 / 40 = 0,002 ; le programme demande de préciser l’unité, ici mole par seconde. Multiplier les deux nombres ou diviser la durée par la quantité sont les erreurs classiques."
    },
    {
      "enonce": "Que nomme-t-on le temps de demi-réaction ?",
      "options": [
        "La durée totale de la réaction jusqu’à l’arrêt complet",
        "Le temps au bout duquel tout le réactif limitant a disparu",
        "La durée au bout de laquelle la moitié du réactif limitant a réagi",
        "L’intervalle de temps entre deux mesures de pH"
      ],
      "correct": 2,
      "explication": "Le programme met l’accent sur la notion de temps de réaction et le définit comme la durée nécessaire pour que la moitié du réactif limitant ait disparu, ce qui permet aussi de souligner la relativité du caractère rapide ou lent d’une réaction."
    },
    {
      "enonce": "Quels facteurs cinétiques le programme fait-il varier pour accélérer ou ralentir une réaction ?",
      "options": [
        "La couleur et l’odeur du milieu réactionnel",
        "La masse et le volume du récipient",
        "La seule nature du solvant",
        "La concentration des réactifs, la température et la présence d’un catalyseur"
      ],
      "correct": 3,
      "explication": "Expérimentalement, le chapitre dégage l’influence des facteurs cinétiques sur la vitesse de réaction : la concentration des réactifs, la température du milieu et les catalyseurs, avec l’action des ions fer comme exemple d’accélération et l’autocuiseur ou la conservation des aliments comme applications."
    }
  ]);

  JK.quizDeLecon("pc-terminale-c2-l5", [
    {
      "enonce": "Par quelle réaction le programme explique-t-il la faible conductibilité de l’eau pure ?",
      "options": [
        "La saponification",
        "L’autoprotolyse de l’eau",
        "L’estérification",
        "La décarboxylation"
      ],
      "correct": 1,
      "explication": "La conductibilité électrique de l’eau, mise en évidence par la mesure de son pH, est interprétée par la réaction d’autoprotolyse de l’eau, ou équilibre d’ionisation de l’eau, qui forme en très faible quantité les ions hydronium et les ions hydroxyde."
    },
    {
      "enonce": "Une solution aqueuse à 25 °C contient des ions hydronium à la concentration de 10⁻³ mole par litre. Quel est son pH ?",
      "options": [
        "3",
        "11",
        "30",
        "0,003"
      ],
      "correct": 0,
      "explication": "Le programme définit le pH comme l’opposé du logarithme décimal de la concentration en ions hydronium, pH = - log des ions hydronium, d’où - log de 10⁻³ = 3. La valeur 11 correspondrait plutôt au pH d’une solution de même basicité, et non d’une solution acide."
    },
    {
      "enonce": "Comment le produit ionique de l’eau Ke varie-t-il avec la température ?",
      "options": [
        "Il reste rigoureusement constant quelle que soit la température",
        "Il diminue lorsque la température augmente",
        "Il dépend uniquement du pH de la solution",
        "Il augmente lorsque la température s’élève"
      ],
      "correct": 3,
      "explication": "Le produit ionique Ke, égal au produit des concentrations en ions hydronium et hydroxyde et valant 10⁻¹⁴ à 25 °C, est une fonction de la température : le programme donne des valeurs indicatives croissantes, plus faible à 0 °C et nettement plus grande à 100 °C."
    }
  ]);

  JK.quizDeLecon("pc-terminale-c2-l6", [
    {
      "enonce": "Que traduit la mise en réaction de l’acide chlorhydrique, acide fort, dans l’eau ?",
      "options": [
        "Une réaction partielle et limitée",
        "L’absence de réaction avec l’eau",
        "Une réaction totale : l’acide se dissocie entièrement en ions",
        "Une précipitation de l’acide dans l’eau"
      ],
      "correct": 2,
      "explication": "En appliquant les équations d’électroneutralité et de conservation de la matière aux concentrations mesurées, le programme conclut que la réaction de l’acide chlorhydrique avec l’eau est totale, d’où la définition de l’acide fort par une dissociation complète en ions."
    },
    {
      "enonce": "Une solution d’hydroxyde de sodium, base forte, a une concentration de 10⁻² mole par litre à 25 °C. Quel est son pH ?",
      "options": [
        "2",
        "7",
        "14",
        "12"
      ],
      "correct": 3,
      "explication": "Pour une monobase forte ni trop concentrée ni trop diluée, le programme donne la relation pH = 14 + logC. Ici log de 10⁻² vaut -2, donc pH = 14 - 2 = 12, ce qui est bien le pH basique d’une solution de soude diluée."
    },
    {
      "enonce": "Lors du dosage d’un acide fort par une base forte, que vaut le pH à l’équivalence à 25 °C ?",
      "options": [
        "7",
        "6",
        "8",
        "14"
      ],
      "correct": 0,
      "explication": "Le programme retient expressément qu’à l’équivalence du mélange d’un acide fort et d’une base forte le pH est égal à 7 à 25 °C, le point d’équivalence étant déterminé sur la courbe par la méthode des tangentes ou à l’aide d’un indicateur coloré."
    }
  ]);

  JK.quizDeLecon("pc-terminale-c2-l7", [
    {
      "enonce": "Dans l’eau, que vaut la dissociation d’un acide faible comme l’acide éthanoïque ?",
      "options": [
        "Partielle : son ionisation est limitée",
        "Totale, comme celle d’un acide fort",
        "Nulle : l’acide ne réagit pas avec l’eau",
        "Immédiate et irréversible"
      ],
      "correct": 0,
      "explication": "Le chapitre vérifie expérimentalement qu’un acide faible est partiellement dissocié en ions dans l’eau : la conductibilité d’une solution d’acide éthanoïque est plus faible que celle d’un acide fort à concentration égale, ce qui traduit une ionisation limitée."
    },
    {
      "enonce": "Pour un couple acide/base, la relation pH = pKa + log du rapport de la base conjuguée sur l’acide donne, lorsque les concentrations de l’acide et de sa base conjuguée sont égales :",
      "options": [
        "pH = 0",
        "pH = pKa",
        "pH = pKa + 1",
        "pH = 14 - pKa"
      ],
      "correct": 1,
      "explication": "Quand les concentrations de l’acide et de sa base conjuguée sont égales, le rapport vaut 1 et son logarithme décimal est nul ; la relation pH = pKa + log du rapport se réduit alors à pH = pKa, ce qui sert aussi à situer le domaine de prédominance de chaque espèce."
    },
    {
      "enonce": "Parmi deux acides faibles, comment le programme reconnaît-il le plus fort ?",
      "options": [
        "À celui dont le couple a le pKa le plus élevé",
        "À celui dont le couple a la constante d’acidité Ka la plus faible",
        "À celui dont le couple a la constante d’acidité Ka la plus élevée, donc le pKa le plus faible",
        "À celui dont le produit ionique Ke est le plus grand"
      ],
      "correct": 2,
      "explication": "Le programme énonce que, de deux acides faibles, le plus fort est celui du couple dont la constante d’acidité Ka est plus élevée, donc le pKa plus faible ; symétriquement, de deux bases faibles, la plus forte est celle du couple dont le Ka est plus faible."
    }
  ]);

  JK.quizDeLecon("pc-terminale-c2-l8", [
    {
      "enonce": "Lors du dosage d’un acide faible par une base forte, que vaut le pH à l’équivalence ?",
      "options": [
        "Égal à 7",
        "Inférieur à 7",
        "Nul",
        "Supérieur à 7"
      ],
      "correct": 3,
      "explication": "Le programme demande de faire remarquer que le pH à l’équivalence d’un dosage d’acide faible par base forte est supérieur à 7, et d’en donner la justification théorique, par opposition au mélange acide fort et base forte où ce pH vaudrait 7."
    },
    {
      "enonce": "Que permet de déterminer le point de demi-équivalence d’un dosage d’un acide faible par une base forte ?",
      "options": [
        "La concentration exacte du catalyseur",
        "Le temps de demi-réaction",
        "Le pKa du couple acide/base considéré",
        "La masse molaire de l’acide dosé"
      ],
      "correct": 2,
      "explication": "Au point de demi-équivalence, l’acide et sa base conjuguée sont en quantités égales, ce qui donne pH = pKa ; le chapitre fait déterminer les points d’équivalence et de demi-équivalence sur la courbe, puis en déduire le pKa et la constante d’acidité Ka du couple."
    },
    {
      "enonce": "Quelle est la propriété d’une solution tampon ?",
      "options": [
        "Son pH change fortement à la moindre dilution",
        "Son pH varie très peu par dilution ou par addition de petites quantités d’acide ou de base",
        "Il colore toujours la solution en rose",
        "Il ne contient jamais d’ions hydronium"
      ],
      "correct": 1,
      "explication": "Le professeur définit une solution tampon puis en dégage les propriétés : son pH reste pratiquement stable quand on la dilue ou quand on lui ajoute de faibles quantités d’acide ou de base, comme l’illustre le sang humain tamponné autour de 7,4."
    }
  ]);

  JK.quizDeLecon("pc-terminale-c2-l9", [
    {
      "enonce": "Quelles deux fonctions porte une molécule d’acide α-aminé ?",
      "options": [
        "Une fonction aldéhyde et une fonction cétone",
        "Une fonction amine et une fonction acide carboxylique",
        "Deux fonctions ester",
        "Une fonction éther et une fonction peroxyde"
      ],
      "correct": 1,
      "explication": "Le programme définit l’acide α-aminé par la présence simultanée, dans la même molécule, d’un groupement amine et d’un groupement carboxyle, avec la glycine, l’alanine, la valine et la leucine comme exemples, et montre que plusieurs groupes fonctionnels peuvent coexister."
    },
    {
      "enonce": "Qu’appelle-t-on un carbone asymétrique dans une molécule ?",
      "options": [
        "Un carbone lié à quatre groupes différents",
        "Un carbone portant une double liaison",
        "Le carbone du groupement carboxyle",
        "Un carbone du noyau benzénique"
      ],
      "correct": 0,
      "explication": "Le chapitre met à profit l’étude des acides α-aminés pour compléter la stéréochimie : le carbone asymétrique, lié à quatre groupes différents, fonde la chiralité et l’énantiomérie, illustrées par la représentation de Fischer et les configurations D ou L."
    },
    {
      "enonce": "Dans un milieu très acide, quelle espèce d’un acide α-aminé prédomine ?",
      "options": [
        "L’amphion",
        "La base conjuguée de l’amphion",
        "Aucune espèce ne prédomine",
        "L’acide conjugué de l’amphion"
      ],
      "correct": 3,
      "explication": "Par les règles de prédominance, le programme montre que dans un milieu très acide la forme prépondérante est l’acide conjugué de l’amphion, que dans un milieu très basique c’est la base conjuguée, et qu’en zone intermédiaire l’espèce majoritaire est l’amphion."
    }
  ]);
})();
