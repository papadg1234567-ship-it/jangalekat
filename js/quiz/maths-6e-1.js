/* Quiz des leçons 1 à 10 (chapitre I, activités numériques) de mathématiques de la classe de 6ᵉ
   — Jàngalekat. Une leçon = un quiz = 3 questions.
   Les intitulés et l’ordre des leçons viennent du programme officiel sénégalais de mathématiques du
   premier cycle (MEN / IGEN / Commission nationale des programmes, classe de Sixième, 2006) et du
   guide d’usage des programmes de ce même document.
   Les énoncés, options et explications sont des contenus de démonstration rédigés par un modèle :
   ils reprennent les notions, commentaires et compétences exigibles du programme détaillé, mais
   aucun n’a été relu par un enseignant. Ils ne sont ni un sujet officiel ni une évaluation de
   référence. */
(function () {
  'use strict';

  JK.quizDeLecon("maths-6e-c1-l1", [
    {
      "enonce": "Dans le nombre décimal 7,032, quelle est la partie décimale ?",
      "options": [
        "032",
        "7",
        "7,032",
        "32"
      ],
      "correct": 0,
      "explication": "Le guide d’usage donne cet exemple : dans 7,032, 7 est la partie entière et 032 la partie décimale. Le 0 placé des centièmes fait partie de la partie décimale, il ne se retire pas, et le nombre s’écrit tout entier 7,032."
    },
    {
      "enonce": "Que dit la leçon à propos d’un nombre entier comme 2 ?",
      "options": [
        "Ce n’est pas un nombre décimal, puisqu’il n’a pas de virgule",
        "C’est un décimal dont on ne connaît pas la partie entière",
        "C’est un nombre décimal particulier : 2 = 2,0, de partie entière 2 et de partie décimale 0",
        "C’est un décimal dont la partie décimale est 2"
      ],
      "correct": 2,
      "explication": "Le commentaire de la leçon 1 fait remarquer qu’un nombre entier est aussi un nombre décimal : 2 s’écrit 2,0. C’est exactement ce qui permet d’écrire IN ⊂ D, l’ensemble IN des entiers naturels étant contenu dans l’ensemble D des décimaux arithmétiques."
    },
    {
      "enonce": "Quel symbole utilise-t-on pour écrire que 2,5 appartient à l’ensemble D des décimaux arithmétiques ?",
      "options": [
        "⊂",
        "∈",
        "∉",
        "⊄"
      ],
      "correct": 1,
      "explication": "Le symbole ∈ relie un élément à un ensemble : on écrit 2,5 ∈ D. Les symboles ⊂ et ⊄ relient deux ensembles entre eux, comme IN ⊂ D, et ∉ sert à nier une appartenance, par exemple pour un nombre qui n’est pas décimal."
    }
  ]);

  JK.quizDeLecon("maths-6e-c1-l2", [
    {
      "enonce": "Avant d’additionner en colonne 12,5 et 3,72, que faut-il faire ?",
      "options": [
        "Additionner les chiffres alignés à droite, sans tenir compte de la virgule",
        "Transformer les deux nombres en fractions",
        "Arrondir les deux nombres puis additionner les arrondis",
        "Aligner les virgules, donc les unités sous les unités, en écrivant au besoin 12,5 = 12,50"
      ],
      "correct": 3,
      "explication": "12,5 vaut 12,50 : on additionne alors rang par rang, unités contre unités, dixièmes contre dixièmes, centièmes contre centièmes, et l’on trouve 16,22. Une élève qui aligne à droite calcule 125 + 372 = 497 et écrit 4,97, résultat faux."
    },
    {
      "enonce": "Quelle propriété permet d’affirmer que 4,8 + 2,5 donne la même somme que 2,5 + 4,8 ?",
      "options": [
        "La distributivité",
        "La commutativité",
        "L’associativité",
        "Le rôle de zéro dans l’addition"
      ],
      "correct": 1,
      "explication": "La commutativité dit que l’on peut intervertir les termes d’une addition sans changer la somme : ici 4,8 + 2,5 = 2,5 + 4,8 = 7,3. L’associativité porte sur le groupement de plusieurs termes, et la distributivité mêle multiplication et addition."
    },
    {
      "enonce": "Avant de calculer 19,8 + 30,4, un élève cherche un ordre de grandeur de la somme. Quelle estimation est correcte ?",
      "options": [
        "Environ 50, car 19,8 est proche de 20 et 30,4 proche de 30",
        "Environ 30, car le second terme est proche de 30",
        "Environ 20, car le premier terme est proche de 20",
        "Environ 60, car 19,8 dépasse 19 et 30,4 dépasse 30"
      ],
      "correct": 0,
      "explication": "Le calcul mental doit servir à apprécier l’ordre de grandeur d’une somme : on remplace chaque terme par un nombre proche, 20 + 30 = 50, et le calcul exact donne 19,8 + 30,4 = 50,2. Retenir 20 ou 30, c’est oublier qu’une somme fait intervenir les deux termes."
    }
  ]);

  JK.quizDeLecon("maths-6e-c1-l3", [
    {
      "enonce": "Dans l’opération 9,4 − 3,25 = 6,15, quel nom porte le résultat 6,15 ?",
      "options": [
        "La somme",
        "Le terme",
        "La différence",
        "Le reste"
      ],
      "correct": 2,
      "explication": "Le vocabulaire de la soustraction donne « différence » pour le résultat ; 9,4 et 3,25 sont les termes, et le calcul est juste : 9,40 − 3,25 = 6,15. Le mot « reste » appartient, lui, au vocabulaire de la division."
    },
    {
      "enonce": "On ajoute 1,5 aux deux termes de la soustraction 9,4 − 3,25. Que devient la différence ?",
      "options": [
        "Elle ne change pas",
        "Elle augmente de 1,5",
        "Elle diminue de 1,5",
        "Elle augmente de 3"
      ],
      "correct": 0,
      "explication": "C’est la propriété énoncée par la leçon : la différence de deux nombres décimaux ne change pas si l’on ajoute un même nombre à chacun des deux termes. Vérification : 9,4 − 3,25 = 6,15 et 10,9 − 4,75 = 6,15."
    },
    {
      "enonce": "Pourquoi la leçon fait-elle remarquer que la soustraction n’est pas partout définie dans les décimaux arithmétiques ?",
      "options": [
        "Parce qu’il faut une calculatrice pour l’effectuer",
        "Parce qu’elle n’a aucune propriété commune avec l’addition",
        "Parce que le nombre 0 n’y joue aucun rôle",
        "Parce que 3,5 − 5,2 ne se calcule pas dans D, ce qui amènera plus tard les décimaux relatifs"
      ],
      "correct": 3,
      "explication": "Les décimaux arithmétiques sont tous positifs ou nuls : aucun d’eux ne vaut 3,5 − 5,2, et le commentaire de la leçon 3 annonce que c’est cette limite qui justifiera l’introduction des décimaux relatifs. Le même commentaire signale que la soustraction n’est pas commutative, contrairement à l’addition."
    }
  ]);

  JK.quizDeLecon("maths-6e-c1-l4", [
    {
      "enonce": "Quel rangement donne les nombres 0,4, 0,35 et 0,5 dans l’ordre croissant ?",
      "options": [
        "0,4 ; 0,35 ; 0,5",
        "0,35 ; 0,4 ; 0,5",
        "0,5 ; 0,4 ; 0,35",
        "0,35 ; 0,5 ; 0,4"
      ],
      "correct": 1,
      "explication": "On compare les parties décimales au même nombre de chiffres : 0,35 ; 0,40 ; 0,50, donc 0,35 < 0,4 < 0,5. Croire que 0,4 est plus petit que 0,35, c’est comparer 4 et 35 comme des entiers ; commencer par 0,5, c’est ranger dans l’ordre décroissant."
    },
    {
      "enonce": "Quel symbole écrit-on pour dire qu’un nombre a est inférieur ou égal à un nombre b ?",
      "options": [
        ">",
        "≠",
        "≥",
        "≤"
      ],
      "correct": 3,
      "explication": "Le symbole ≤ se lit « inférieur ou égal » et n’exclut pas l’égalité a = b ; < est la comparaison strictement inférieure, ≥ son contraire « supérieur ou égal », et ≠ ne fait que nier l’égalité."
    },
    {
      "enonce": "Sur une droite graduée en dixièmes, entre quelles graduations consécutives se place le nombre 3,47 ?",
      "options": [
        "3 et 4",
        "3,5 et 3,6",
        "3,4 et 3,5",
        "34 et 35"
      ],
      "correct": 2,
      "explication": "3,47 s’écrit aussi 34,7 dixièmes : il vient donc après 3,4 et avant 3,5, l’encadrement 3,4 < 3,47 < 3,5 est bien l’encadrement au dixième. L’encadrement par 3 et 4 est celui à l’unité, et 34 et 35 provient d’une confusion de rang."
    }
  ]);

  JK.quizDeLecon("maths-6e-c1-l5", [
    {
      "enonce": "Que donne le produit 3,5 × 1,2 ?",
      "options": [
        "4,2",
        "42",
        "0,42",
        "4,7"
      ],
      "correct": 0,
      "explication": "On calcule 35 × 12 = 420, puis on place la virgule : les deux facteurs ont ensemble deux chiffres après la virgule, donc le produit compte deux chiffres après la virgule et vaut 4,2. Oublier ce décalage mène à 42, et 4,7 est la somme des deux facteurs, pas leur produit."
    },
    {
      "enonce": "Dans un calcul mental, que fait la multiplication d’un nombre par 100 ?",
      "options": [
        "Elle déplace la virgule de deux rangs vers la gauche : 24,6 × 100 = 0,246",
        "Elle déplace la virgule d’un rang vers la droite : 24,6 × 100 = 246",
        "Elle déplace la virgule de deux rangs vers la droite : 24,6 × 100 = 2460",
        "Elle ajoute des zéros à la partie décimale : 24,6 × 100 = 24,600"
      ],
      "correct": 2,
      "explication": "Multiplier par 10, 100 ou 1000 décale la virgule d’un, deux ou trois rangs vers la droite, donc 24,6 × 100 = 2460. Un seul rang correspond à × 10, deux rangs vers la gauche divisent par 100, et écrire 24,600 ne change rien : 24,600 = 24,6."
    },
    {
      "enonce": "La leçon fait calculer des carrés et des cubes de décimaux sans étudier les puissances de façon générale. À quoi servent-ils ?",
      "options": [
        "À résoudre des équations",
        "À comparer deux nombres décimaux",
        "À repérer un point dans le plan",
        "À calculer des aires et des volumes"
      ],
      "correct": 3,
      "explication": "Le commentaire de la leçon 5 est net : les puissances étudiées sont un outil pour les calculs d’aire et de volume. Un carré de côté 4 m a une aire de 4 × 4 = 16 m², un cube d’arête 3 cm un volume de 3 × 3 × 3 = 27 cm³."
    }
  ]);

  JK.quizDeLecon("maths-6e-c1-l6", [
    {
      "enonce": "Dans la division euclidienne de 17 par 5, quels sont le quotient et le reste ?",
      "options": [
        "Quotient 2 et reste 7",
        "Quotient 3 et reste 2",
        "Quotient 3 et reste 7",
        "Quotient 3,4 et reste 2"
      ],
      "correct": 1,
      "explication": "On a 17 = 5 × 3 + 2 : le quotient est 3 et le reste 2, et le reste reste toujours plus petit que le diviseur, ce qui élimine les restes 7. Quand la division se termine, comme ici avec 17 ÷ 5 = 3,4, on parle de quotient exact et il n’y a plus de reste."
    },
    {
      "enonce": "On cherche le quotient approché à l’unité près par défaut de 22 ÷ 5, dont la valeur exacte est 4,4. Quelle valeur convient ?",
      "options": [
        "4",
        "4,5",
        "5",
        "4,4"
      ],
      "correct": 0,
      "explication": "Par défaut veut dire que l’encadrement ne dépasse pas la valeur exacte : 4 < 4,4 < 5, donc 4 est la valeur par défaut et 5 la valeur par excès à l’unité près. 4,4 est le quotient exact, et 4,5 dépasse la valeur."
    },
    {
      "enonce": "Laquelle de ces écritures fractionnaires a pour valeur le décimal 0,75 ?",
      "options": [
        "75/10",
        "7/5",
        "3/4",
        "1/4"
      ],
      "correct": 2,
      "explication": "Le passage de l’écriture décimale à l’écriture fractionnaire demande 0,75 = 75/100 = 3/4, car 3 ÷ 4 = 0,75. Dans cette fraction 3 est le numérateur et 4 le dénominateur, et le dénominateur ne peut jamais être nul ; 75/10 vaut 7,5, 7/5 vaut 1,4 et 1/4 vaut 0,25."
    }
  ]);

  JK.quizDeLecon("maths-6e-c1-l7", [
    {
      "enonce": "Dans le calcul 2 × 0,75 + 4 − 2,3, que traite-t-on en premier selon les règles de priorité ?",
      "options": [
        "La soustraction 4 − 2,3",
        "L’addition 0,75 + 4",
        "Les opérations de gauche à droite, sans distinguer leur nature",
        "La multiplication 2 × 0,75"
      ],
      "correct": 3,
      "explication": "Multiplications et divisions sont prioritaires sur additions et soustractions : on calcule d’abord 2 × 0,75 = 1,5, puis 1,5 + 4 − 2,3 = 3,2, qui est le résultat donné en exemple dans le guide d’usage."
    },
    {
      "enonce": "Que changent les parenthèses dans le calcul (2 + 3) × 4 ?",
      "options": [
        "Rien : on calcule toujours de gauche à droite",
        "Elles imposent de calculer d’abord 2 + 3 = 5, donc (2 + 3) × 4 = 20",
        "Elles indiquent qu’il faut multiplier avant d’additionner",
        "Elles transforment le produit en somme"
      ],
      "correct": 1,
      "explication": "Les parenthèses lèvent la priorité : l’intérieur se calcule le premier. Sans elles, la multiplication l’emporterait et 2 + 3 × 4 vaudrait 14 ; avec elles, on fait 5 × 4 = 20."
    },
    {
      "enonce": "Le guide traduit l’énoncé « le cube du carré de a » par une écriture en ligne. Laquelle ?",
      "options": [
        "(a²)³",
        "(a³)²",
        "3 × a²",
        "a² + 3"
      ],
      "correct": 0,
      "explication": "Passer du registre verbal au registre figural se fait dans l’ordre des mots : on met a au carré, puis on élève ce résultat au cube, ce qui donne (a²)³, l’exemple même du commentaire. (a³)² est le carré du cube, et 3 × a² est le triple du carré de a."
    }
  ]);

  JK.quizDeLecon("maths-6e-c1-l8", [
    {
      "enonce": "Des mangues coûtent 600 F pour 2 kg, 800 F pour 3 kg, 1 300 F pour 5 kg. Ce tableau de correspondance est-il un tableau de proportionnalité ?",
      "options": [
        "Oui, car la quantité et le prix augmentent en même temps",
        "Oui, car de 2 kg à 3 kg on ajoute 1 kg et de 600 F à 800 F on ajoute 200 F",
        "Non, car 600 ÷ 2, 800 ÷ 3 et 1 300 ÷ 5 ne donnent pas le même nombre",
        "Non, car un tableau de prix et de quantités n’est jamais proportionnel"
      ],
      "correct": 2,
      "explication": "Un tableau est proportionnel quand le coefficient prix ÷ quantité est le même partout : ici 600 ÷ 2 = 300, 800 ÷ 3 ≈ 266,7 et 1 300 ÷ 5 = 260. Augmenter ensemble ou ajouter toujours la même quantité ne suffit pas, et le prix au kilogramme devrait être unique."
    },
    {
      "enonce": "Un article coûte 4 000 F et subit une réduction de 25 %. Quel est le montant de cette réduction ?",
      "options": [
        "1 000 F",
        "100 F",
        "3 000 F",
        "2 000 F"
      ],
      "correct": 0,
      "explication": "25 % s’écrit 25/100, c’est-à-dire 0,25, et 4 000 × 0,25 = 1 000 : c’est le quart du prix. 3 000 F est ce qui reste à payer après la réduction, pas la réduction elle-même, et 100 F correspond à une erreur de un rang sur la virgule."
    },
    {
      "enonce": "Dans un tableau de proportionnalité, que désigne le mot « coefficient de proportionnalité » ?",
      "options": [
        "La somme des deux lignes du tableau",
        "Le nombre de colonnes que compte le tableau",
        "La différence entre la plus grande et la plus petite valeur",
        "Le nombre constant qui multiplie chaque valeur d’une ligne pour donner la valeur correspondante"
      ],
      "correct": 3,
      "explication": "On passe d’une ligne à l’autre en multipliant par le même décimal : ce nombre constant est le coefficient de proportionnalité. Le chercher, c’est compléter une égalité du type a × … = b, exercice que la leçon met en avant."
    }
  ]);

  JK.quizDeLecon("maths-6e-c1-l9", [
    {
      "enonce": "Quel est l’opposé du nombre décimal relatif 2,5 ?",
      "options": [
        "2,5",
        "−2,5",
        "0",
        "0,25"
      ],
      "correct": 1,
      "explication": "Deux décimaux relatifs opposés ont la même partie décimale et des signes contraires : l’opposé de 2,5 est −2,5, et leur somme est nulle, car 2,5 + (−2,5) = 0. Sur la droite graduée, ils sont à la même distance de l’origine, de part et d’autre."
    },
    {
      "enonce": "Que donne la somme (−4) + (+1,5) ?",
      "options": [
        "−5,5",
        "5,5",
        "2,5",
        "−2,5"
      ],
      "correct": 3,
      "explication": "Les valeurs absolues sont 4 et 1,5 : on retranche la plus petite de la plus grande, 4 − 1,5 = 2,5, et l’on garde le signe du terme de plus grande valeur absolue, ici négatif, donc (−4) + (+1,5) = −2,5. Ajouter 4 + 1,5 = 5,5 sans tenir compte des signes est l’erreur classique."
    },
    {
      "enonce": "Lequel de ces nombres appartient à l’ensemble Z sans appartenir à IN ?",
      "options": [
        "7",
        "0,5",
        "−3",
        "3,5"
      ],
      "correct": 2,
      "explication": "Le programme fait remarquer IN ⊂ Z ⊂ ID : −3 est un entier relatif mais n’est pas un entier naturel, alors que 7 appartient déjà à IN. 0,5 et 3,5 ne sont pas des entiers relatifs du tout : ils appartiennent seulement aux décimaux."
    }
  ]);

  JK.quizDeLecon("maths-6e-c1-l10", [
    {
      "enonce": "Dans un repère du plan, comment nomme-t-on la première coordonnée d’un point, celle que l’on lit sur l’axe horizontal ?",
      "options": [
        "L’abscisse",
        "L’ordonnée",
        "L’origine",
        "L’unité"
      ],
      "correct": 0,
      "explication": "Les coordonnées d’un point sont le couple (abscisse, ordonnée) : l’abscisse se lit sur l’axe horizontal, l’ordonnée sur l’axe vertical. L’origine est le point (0, 0) où se coupent les deux axes, et l’unité est la longueur choisie pour les graduer."
    },
    {
      "enonce": "Sur une droite graduée, un point M a pour abscisse 2,7. Entre quels entiers ce point se place-t-il ?",
      "options": [
        "Entre 0 et 1",
        "Entre 1 et 2",
        "Entre 2 et 3",
        "Entre 3 et 4"
      ],
      "correct": 2,
      "explication": "Encadrer une abscisse positive, c’est la serrer entre deux graduations consécutives : 2 < 2,7 < 3, donc M se place après 2 et avant 3. Comme 3 − 2,7 = 0,3 alors que 2,7 − 2 = 0,7, le point est plus proche de 3."
    },
    {
      "enonce": "D’après le commentaire de la leçon sur le repérage, repérer un point, c’est…",
      "options": [
        "Mesurer la distance qui le sépare de l’origine",
        "Déterminer les coordonnées de ce point",
        "Tracer la droite qui passe par ce point",
        "Calculer l’aire de la figure qui le contient"
      ],
      "correct": 1,
      "explication": "Le commentaire le dit textuellement : repérer un point, c’est déterminer les coordonnées de ce point. La finalité affichée de la leçon est de savoir se repérer sur une route rectiligne, sur une carte ou sur un plan cadastral, à l’aide d’une droite graduée ou d’un repère orthonormal."
    }
  ]);
})();
