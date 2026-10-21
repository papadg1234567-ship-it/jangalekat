/* Quiz de Mathématiques 4ᵉ (Jàngalekat) — une leçon = trois questions.
   Les intitulés et l’ordre des leçons viennent du programme officiel sénégalais de mathématiques
   du premier cycle (MEN / IGEN / Commission nationale des programmes, Programmes de mathématiques,
   classe de 4ᵉ, octobre 2006 ; Guide d’usage des programmes – Mathématiques, DEMSG, septembre 2012,
   PDF).
   Les énoncés, options et explications sont des contenus de démonstration rédigés par un modèle :
   ils reprennent les notions, commentaires et compétences exigibles du programme détaillé de 4ᵉ,
   mais aucun n’a été relu par un enseignant. Ils ne sont ni un sujet officiel ni une évaluation de
   référence. */
(function () {
  "use strict";

  JK.quizDeLecon("maths-4e-c1-l1", [
    {
      "enonce": "Qu’est-ce qu’un nombre rationnel ?",
      "options": [
        "Un nombre qui s’écrit a ÷ b avec a et b entiers relatifs et b ≠ 0",
        "Un nombre qui s’écrit a ÷ b avec a et b entiers relatifs et a ≠ 0",
        "Un nombre dont l’écriture décimale se termine",
        "Un nombre plus petit que 1"
      ],
      "correct": 0,
      "explication": "Le programme définit le rationnel comme le quotient a ÷ b de deux entiers relatifs avec b ≠ 0 : c’est le dénominateur qui ne peut pas être nul, jamais le numérateur. Tout entier et tout décimal sont rationnels, donc IN ⊂ Z ⊂ ID ⊂ Q ; les nombres à virgule infinie comme 1 ÷ 3 restent rationnels."
    },
    {
      "enonce": "Quelle est la forme irréductible du rationnel 18 ÷ 42 ?",
      "options": [
        "7 ÷ 3",
        "9 ÷ 21",
        "3 ÷ 7",
        "6 ÷ 14"
      ],
      "correct": 2,
      "explication": "On divise les deux termes par 6, leur plus grand commun diviseur : 18 ÷ 6 = 3 et 42 ÷ 6 = 7. Les écritures 9 ÷ 21 et 6 ÷ 14 leur sont égales mais restent réductibles, et inverser les termes donne un nombre différent."
    },
    {
      "enonce": "Que vaut la somme 1 ÷ 2 + 1 ÷ 3 ?",
      "options": [
        "2 ÷ 5",
        "5 ÷ 6",
        "1 ÷ 6",
        "2 ÷ 6"
      ],
      "correct": 1,
      "explication": "On réduit au même dénominateur 6 : 1 ÷ 2 = 3 ÷ 6 et 1 ÷ 3 = 2 ÷ 6, puis 3 ÷ 6 + 2 ÷ 6 = 5 ÷ 6. Additionner numérateurs et dénominateurs, ou soustraire au lieu d’ajouter, sont les deux erreurs classiques."
    }
  ]);

  JK.quizDeLecon("maths-4e-c1-l2", [
    {
      "enonce": "Que devient le produit (x + 3)² une fois développé ?",
      "options": [
        "x² + 9",
        "x² + 6x + 9",
        "x² + 3x + 9",
        "x² + 6x + 3"
      ],
      "correct": 1,
      "explication": "L’égalité usuelle (a + b)² = a² + 2ab + b², donnée au programme, donne x² + 2 × 3 × x + 3², soit x² + 6x + 9. Oublier le double produit 2ab est l’erreur la plus fréquente."
    },
    {
      "enonce": "En utilisant les égalités usuelles, comment factoriser x² − 25 ?",
      "options": [
        "(x − 5)²",
        "(x + 5)²",
        "(x − 25)(x + 1)",
        "(x − 5)(x + 5)"
      ],
      "correct": 3,
      "explication": "x² − 25 s’écrit x² − 5², et les égalités usuelles fonctionnent dans les deux sens : a² − b² = (a − b)(a + b). Le carré (x − 5)² développe en x² − 10x + 25, qui n’est pas le même calcul."
    },
    {
      "enonce": "Que vaut 101² − 99² calculé avec les égalités usuelles ?",
      "options": [
        "400",
        "4",
        "200",
        "2"
      ],
      "correct": 0,
      "explication": "(101 − 99)(101 + 99) = 2 × 200 = 400. Ne retenir que la somme 101 + 99 ou que la différence 101 − 99, ou encore élever la différence au carré, sont les trois erreurs possibles sur cette égalité usuelle."
    }
  ]);

  JK.quizDeLecon("maths-4e-c1-l3", [
    {
      "enonce": "Quelle est la solution dans Q de l’équation 3x − 12 = 0 ?",
      "options": [
        "x = −4",
        "x = 36",
        "x = 4",
        "x = −12"
      ],
      "correct": 2,
      "explication": "On isole x : 3x = 12, puis on multiplie 12 par l’inverse de 3, d’où x = 12 ÷ 3 = 4. Garder le signe moins en passant de l’autre côté, ou multiplier au lieu de diviser, donnent les valeurs erronées."
    },
    {
      "enonce": "Quelles sont les solutions de l’équation (2x − 6)(x + 5) = 0 ?",
      "options": [
        "x = 3 et x = −5",
        "x = 6 et x = −5",
        "x = 3 et x = 5",
        "x = −3 et x = 5"
      ],
      "correct": 0,
      "explication": "Un produit est nul si au moins un facteur est nul : 2x − 6 = 0 donne x = 3, et x + 5 = 0 donne x = −5. Le programme limite ce type d’équations au cas où chaque facteur est du premier degré."
    },
    {
      "enonce": "Pourquoi résout-on (2x − 6)(x + 5) = 0 en annulant chaque facteur séparément ?",
      "options": [
        "Parce que les deux facteurs doivent être nuls en même temps",
        "Parce que les facteurs doivent être égaux entre eux",
        "Parce que seul le premier facteur peut être nul",
        "Parce qu’un produit de deux facteurs est nul quand au moins l’un des deux est nul"
      ],
      "correct": 3,
      "explication": "C’est la propriété du produit nul : un produit est nul si et seulement si au moins un de ses facteurs est nul. Exiger les deux facteurs nuls en même temps, comme le suggère une autre proposition, mène à chercher une solution commune aux deux facteurs, ce qui n’est pas demandé."
    }
  ]);

  JK.quizDeLecon("maths-4e-c1-l4", [
    {
      "enonce": "Quel est l’ensemble des solutions dans Q de l’inéquation −2x + 6 > 0 ?",
      "options": [
        "x > 3",
        "x > −3",
        "x < −3",
        "x < 3"
      ],
      "correct": 3,
      "explication": "On obtient −2x > −6 ; comme le facteur −2 est strictement négatif, la compatibilité de la multiplication et de l’inégalité impose de changer le sens : x < 3. Oublier ce changement de sens est l’erreur que le programme signale expressément."
    },
    {
      "enonce": "Quelle notation d’intervalle correspond aux nombres rationnels inférieurs ou égaux à 5 ?",
      "options": [
        "]−∞, 5[",
        "]−∞, 5]",
        "[5, +∞[",
        "]5, +∞["
      ],
      "correct": 1,
      "explication": "« Inférieurs ou égaux à 5 » inclut 5 : on ferme le crochet du côté de 5 et on garde ]−∞ ouvert, car l’infini ne fait jamais partie de l’ensemble des solutions. C’est la phrase-type que le programme exige de savoir retourner."
    },
    {
      "enonce": "Que doit vérifier un nombre rationnel pour être solution d’un système de deux inéquations à une inconnue ?",
      "options": [
        "Vérifier au moins une des deux inéquations",
        "Vérifier exactement une des deux inéquations",
        "Vérifier les deux inéquations en même temps",
        "Ne vérifier aucune des deux inéquations"
      ],
      "correct": 2,
      "explication": "Un système impose ses conditions simultanément : l’ensemble des solutions est l’intersection des solutions de chaque inéquation, représentée sur la droite graduée. Retenir « au moins une » correspond à une réunion, pas à un système."
    }
  ]);

  JK.quizDeLecon("maths-4e-c1-l5", [
    {
      "enonce": "Une application linéaire f, d’expression f(x) = ax, vérifie f(4) = 20. Quel est son coefficient a ?",
      "options": [
        "5",
        "80",
        "16",
        "24"
      ],
      "correct": 0,
      "explication": "f(4) = a × 4 = 20, donc a = 20 ÷ 4 = 5 : dans un tableau de proportionnalité, le coefficient est le quotient d’une valeur par son antécédent. Soustraire, additionner ou multiplier 20 et 4 sont les erreurs à éviter sur ce calcul."
    },
    {
      "enonce": "f est l’application linéaire de coefficient 3. Que vaut f(6) ?",
      "options": [
        "12",
        "8",
        "18",
        "36"
      ],
      "correct": 2,
      "explication": "Une application linéaire multiplie par son coefficient : f(6) = 3 × 6 = 18. La linéarité f(ax) = af(x) donne le même résultat, et le tableau de proportionnalité de la leçon le confirme."
    },
    {
      "enonce": "Que représente graphiquement une application linéaire ?",
      "options": [
        "Une droite parallèle à l’axe des abscisses",
        "Un cercle de centre l’origine du repère",
        "Une droite qui ne passe pas par l’origine",
        "Une droite qui passe par l’origine du repère"
      ],
      "correct": 3,
      "explication": "Le commentaire du programme est net : la représentation graphique d’une application linéaire est une droite qui passe par l’origine, obtenue point par point à partir du tableau de proportionnalité. Une droite qui ne passe pas par l’origine est une application affine, étudiée en 3ᵉ."
    }
  ]);

  JK.quizDeLecon("maths-4e-c1-l6", [
    {
      "enonce": "Sur 25 élèves d’un lycée de Dakar, 10 pratiquent la lutte. Quelle est la fréquence de cette valeur du caractère ?",
      "options": [
        "15",
        "0,4",
        "2,5",
        "40"
      ],
      "correct": 1,
      "explication": "La fréquence est l’effectif divisé par l’effectif total : 10 ÷ 25 = 0,4. Le nombre 40 est le pourcentage correspondant, pas une fréquence ; 15 est l’effectif des autres élèves et 2,5 provient de la division inversée 25 ÷ 10."
    },
    {
      "enonce": "Dans une enquête de classe, la couleur des yeux des élèves est quel type de caractère ?",
      "options": [
        "Un caractère qualitatif",
        "Un caractère quantitatif discret",
        "Un échantillon",
        "Une moyenne"
      ],
      "correct": 0,
      "explication": "Une couleur ne se mesure pas par un nombre : c’est un caractère qualitatif ; un caractère quantitatif discret serait une note ou un nombre d’absences. Un échantillon est la partie de la population étudiée, pas une propriété des élèves."
    },
    {
      "enonce": "Cinq élèves ont obtenu les notes 10, 12, 14, 15 et 19. Quelle est la moyenne de cette série ?",
      "options": [
        "15",
        "70",
        "14",
        "19"
      ],
      "correct": 2,
      "explication": "La somme des notes est 10 + 12 + 14 + 15 + 19 = 70, la moyenne est 70 ÷ 5 = 14. Oublier la division par le nombre de valeurs, ou prendre la valeur maximale, sont les erreurs les plus fréquentes sur les paramètres de position."
    }
  ]);

  JK.quizDeLecon("maths-4e-c2-l1", [
    {
      "enonce": "Deux cercles ont des rayons 3 cm et 5 cm et leurs centres sont à 8 cm l’un de l’autre. Quelle est leur position relative ?",
      "options": [
        "Deux cercles sécants",
        "Deux cercles disjoints",
        "Deux cercles tangents intérieurement",
        "Deux cercles tangents extérieurement"
      ],
      "correct": 3,
      "explication": "Le programme compare la distance des centres à la somme et à la différence des rayons : ici 8 = 3 + 5, donc les cercles sont tangents extérieurement. Une distance de 2 cm correspondrait à une tangence intérieure, une distance inférieure à 8 cm à des cercles sécants."
    },
    {
      "enonce": "Quel triplet de longueurs permet de construire un triangle ?",
      "options": [
        "4 cm, 5 cm et 8 cm",
        "3 cm, 4 cm et 8 cm",
        "2 cm, 3 cm et 6 cm",
        "1 cm, 5 cm et 6 cm"
      ],
      "correct": 0,
      "explication": "Le critère du programme impose que la plus grande mesure soit strictement inférieure à la somme des deux autres : ici 8 < 4 + 5. Les triplets 3-4-8 et 2-3-6 violent ce critère, et 1 + 5 = 6 ne forme aucun triangle car l’inégalité doit être stricte."
    },
    {
      "enonce": "Qu’appelle-t-on la distance d’un point M à une droite (D) ?",
      "options": [
        "La longueur MH, où H est un point quelconque de (D)",
        "La longueur MH, où H est le pied de la perpendiculaire à (D) passant par M",
        "La plus grande des distances de M aux points de (D)",
        "La mesure de l’angle entre (D) et la droite (MH)"
      ],
      "correct": 1,
      "explication": "Le programme montre en activité que, parmi les points de (D), le plus proche de M est le pied H de la perpendiculaire : la distance est la longueur MH. La distance la plus grande n’existe pas sur une droite et un angle n’est pas une longueur."
    }
  ]);

  JK.quizDeLecon("maths-4e-c2-l2", [
    {
      "enonce": "Dans un triangle ABC, I est le milieu de [AB] et J le milieu de [AC], avec BC = 9 cm. Que vaut IJ ?",
      "options": [
        "9 cm",
        "18 cm",
        "4,5 cm",
        "3 cm"
      ],
      "correct": 2,
      "explication": "Le segment joignant les milieux de deux côtés a pour longueur la moitié du troisième côté : 9 ÷ 2 = 4,5 cm. Le confondre avec le troisième côté entier, ou lui appliquer un tiers hérité du centre de gravité, sont les erreurs plausibles."
    },
    {
      "enonce": "La droite qui passe par les milieux de deux côtés d’un triangle est quelle droite par rapport au troisième côté ?",
      "options": [
        "Perpendiculaire au troisième côté",
        "Parallèle au troisième côté",
        "Une médiatrice du triangle",
        "Une bissectrice du triangle"
      ],
      "correct": 1,
      "explication": "Le premier théorème des droites des milieux, que le programme fait démontrer, énonce ce parallélisme ; le deuxième ajoute que le segment est la moitié du troisième côté. Médiatrices et bissectrices sont des droites remarquables d’un autre chapitre."
    },
    {
      "enonce": "Dans un triangle ABC, I est le milieu de [AB] ; la droite passant par I et parallèle à (BC) coupe [AC] en J, avec AC = 10 cm. Que vaut AJ ?",
      "options": [
        "2,5 cm",
        "10 cm",
        "20 cm",
        "5 cm"
      ],
      "correct": 3,
      "explication": "Le troisième théorème des droites des milieux affirme que cette droite coupe le troisième côté en son milieu : J est le milieu de [AC] et AJ = 10 ÷ 2 = 5 cm. Ce théorème sert précisément à démontrer qu’un point est milieu d’un segment."
    }
  ]);

  JK.quizDeLecon("maths-4e-c2-l3", [
    {
      "enonce": "AM est une médiane de longueur 9 cm et G le centre de gravité du triangle. Que vaut AG ?",
      "options": [
        "6 cm",
        "3 cm",
        "4,5 cm",
        "12 cm"
      ],
      "correct": 0,
      "explication": "Le centre de gravité est situé aux deux tiers de chaque médiane à partir du sommet : AG = 2 × 9 ÷ 3 = 6 cm, et GM = 3 cm. Le placer au milieu de la médiane est l’erreur classique."
    },
    {
      "enonce": "Le point commun aux trois bissectrices d’un triangle est quel point ?",
      "options": [
        "Le centre de gravité",
        "Le centre du cercle circonscrit",
        "Le centre du cercle inscrit",
        "Le milieu du plus grand côté"
      ],
      "correct": 2,
      "explication": "Les trois bissectrices sont concourantes et leur point commun est le centre du cercle inscrit, car tout point d’une bissectrice est équidistant des deux côtés de l’angle. Le centre de gravité vient des médianes ; ce n’est pas le même concours de droites."
    },
    {
      "enonce": "Dans un triangle isocèle, les deux angles à la base mesurent 40° chacun. Que vaut l’angle au sommet ?",
      "options": [
        "40°",
        "100°",
        "140°",
        "80°"
      ],
      "correct": 1,
      "explication": "La somme des angles d’un triangle est 180°, donc l’angle au sommet vaut 180 − 40 − 40 = 100°. Le calcul de reconnaissance du triangle isocèle par ses droites remarquables utilise ce même partage des angles."
    }
  ]);

  JK.quizDeLecon("maths-4e-c2-l4", [
    {
      "enonce": "Un triangle ABC est rectangle en A, avec AB = 6 cm et AC = 8 cm. Que vaut BC ?",
      "options": [
        "2 cm",
        "10 cm",
        "14 cm",
        "4,8 cm"
      ],
      "correct": 1,
      "explication": "Le théorème de Pythagore donne BC² = 6² + 8² = 36 + 64 = 100, d’où BC = 10 cm, une valeur entière choisie pour éviter toute extraction de racine. Additionner les deux côtés de l’angle droit (14), les soustraire (2) ou appliquer la relation de la hauteur (4,8) sont les erreurs plausibles."
    },
    {
      "enonce": "Un triangle ABC est rectangle en A, avec AB = 3 cm, AC = 4 cm et BC = 5 cm ; H est le pied de la hauteur issue de A. Que vaut AH ?",
      "options": [
        "12 cm",
        "7 cm",
        "3,5 cm",
        "2,4 cm"
      ],
      "correct": 3,
      "explication": "La relation AB × AC = AH × BC du programme donne 3 × 4 = AH × 5, donc AH = 12 ÷ 5 = 2,4 cm. Oublier la division par l’hypoténuse revient à répondre 12 ; faire la moyenne des côtés de l’angle droit mène à 3,5."
    },
    {
      "enonce": "Quel triangle est rectangle d’après la réciproque du théorème de Pythagore ?",
      "options": [
        "Un triangle de côtés 9 cm, 12 cm et 15 cm",
        "Un triangle de côtés 7 cm, 8 cm et 9 cm",
        "Un triangle de côtés 4 cm, 5 cm et 6 cm",
        "Un triangle de côtés 5 cm, 6 cm et 7 cm"
      ],
      "correct": 0,
      "explication": "Réciproque du théorème de Pythagore : 9² + 12² = 81 + 144 = 225 = 15², donc le triangle est rectangle et son plus grand côté est l’hypoténuse. Pour les trois autres triplets, la somme des carrés des deux petits côtés n’est pas égale au carré du plus grand côté."
    }
  ]);

  JK.quizDeLecon("maths-4e-c2-l5", [
    {
      "enonce": "Un cercle de centre O et de rayon 2,5 cm subit une translation. Que devient son image ?",
      "options": [
        "Un cercle de rayon 2,5 cm dont le centre n’est pas l’image de O",
        "Un cercle de rayon 5 cm",
        "Un cercle de rayon 2,5 cm dont le centre est l’image de O",
        "Un disque de rayon 2,5 cm"
      ],
      "correct": 2,
      "explication": "Une translation conserve les longueurs : l’image d’un cercle est un cercle de même rayon, et son centre est l’image du centre. Le rayon double seulement si l’on confond rayon et diamètre."
    },
    {
      "enonce": "ABCD est un parallélogramme. Quelle égalité de vecteurs est correcte ?",
      "options": [
        "AB = DC",
        "AB = CD",
        "AC = BD",
        "AB = AD"
      ],
      "correct": 0,
      "explication": "Dans un parallélogramme ABCD, les vecteurs AB et DC ont même direction, même sens et même longueur, d’où AB = DC. Écrire AB = CD conserve la longueur mais inverse le sens, et AC = BD compare les diagonales, qui ne sont pas égales en général."
    },
    {
      "enonce": "I est le milieu du segment [AB]. Quelle égalité de vecteurs est correcte ?",
      "options": [
        "AI = BI",
        "AI = IB",
        "AI = IA",
        "BI = IA"
      ],
      "correct": 1,
      "explication": "I milieu de [AB] signifie que les vecteurs AI et IB ont même direction, même sens et même longueur : AI = IB. Les vecteurs AI et BI sont de sens contraires, tout comme AI et IA."
    }
  ]);

  JK.quizDeLecon("maths-4e-c2-l6", [
    {
      "enonce": "Que vaut la longueur d’un arc de cercle de rayon 6 cm intercepté par un angle au centre de 90° ?",
      "options": [
        "6π cm",
        "9π cm",
        "12π cm",
        "3π cm"
      ],
      "correct": 3,
      "explication": "Le tour complet du cercle de rayon 6 cm mesure 2π × 6 = 12π cm ; un angle au centre de 90° représente un quart du tour, donc l’arc mesure 12π ÷ 4 = 3π cm, la règle de trois demandée par le programme. Les autres longueurs correspondent à la moitié (6π), aux trois quarts (9π) ou au tour entier (12π)."
    },
    {
      "enonce": "Quelle rotation de centre O permet de construire un hexagone régulier à partir d’un sommet ?",
      "options": [
        "Une rotation d’angle 60°",
        "Une rotation d’angle 120°",
        "Une rotation d’angle 90°",
        "Une rotation d’angle 72°"
      ],
      "correct": 0,
      "explication": "Le programme utilise une rotation de centre O et d’angle 360 ÷ n pour construire un polygone régulier à n côtés : pour n = 6, cela donne 60°. L’angle 72° correspondrait à un pentagone, 90° à un carré et 120° à un triangle équilatéral."
    },
    {
      "enonce": "Qu’est-ce qu’un polygone régulier ?",
      "options": [
        "Un polygone dont tous les côtés sont égaux",
        "Un polygone dont tous les angles et tous les côtés sont égaux",
        "Un polygone dont les côtés sont deux à deux parallèles",
        "Un polygone possédant un centre de gravité"
      ],
      "correct": 1,
      "explication": "La définition exige les deux conditions en même temps : tous les angles égaux et tous les côtés égaux. Un losange a ses côtés égaux sans ses angles, un rectangle ses angles sans ses côtés ; le programme ne traite que les polygones convexes."
    }
  ]);

  JK.quizDeLecon("maths-4e-c2-l7", [
    {
      "enonce": "Dans un repère orthonormal, A a pour coordonnées (2 ; 3) et B (8 ; 5). Quelles sont les coordonnées du milieu I de [AB] ?",
      "options": [
        "(5 ; 4)",
        "(10 ; 8)",
        "(6 ; 2)",
        "(4 ; 5)"
      ],
      "correct": 0,
      "explication": "Les coordonnées du milieu sont les demi-sommes des coordonnées : (2 + 8) ÷ 2 = 5 et (3 + 5) ÷ 2 = 4. Additionner sans diviser ou faire des différences sont les erreurs visées par la leçon sur la projection orthogonale."
    },
    {
      "enonce": "Dans un repère orthonormal, A(1 ; 2) et B(4 ; 6). Que vaut la distance AB ?",
      "options": [
        "25",
        "7",
        "5",
        "√7"
      ],
      "correct": 2,
      "explication": "La formule du programme donne AB² = (4 − 1)² + (6 − 2)² = 9 + 16 = 25, donc AB = 5. Donner 25, c’est oublier la racine ; additionner les écarts 3 + 4 sans les carrés est l’autre erreur."
    },
    {
      "enonce": "Dans quel cas le projeté orthogonal d’un segment sur une droite se réduit-il à un point ?",
      "options": [
        "Quand le segment est parallèle à la droite",
        "Quand le segment est perpendiculaire à la droite",
        "Quand le segment et la droite sont non coplanaires",
        "Quand le segment et la droite n’ont aucun point commun"
      ],
      "correct": 1,
      "explication": "Le programme précise que le projeté d’un segment est un segment qui peut se réduire à un point : cela arrive quand les deux extrémités ont le même projeté, c’est-à-dire quand le segment est perpendiculaire à la droite. Une droite et un segment du plan ne peuvent pas être non coplanaires."
    }
  ]);

  JK.quizDeLecon("maths-4e-c2-l8", [
    {
      "enonce": "Que peut-on dire de la section d’une sphère par un plan ?",
      "options": [
        "Ce n’est un cercle que si le plan passe par le centre de la sphère",
        "C’est toujours un cercle",
        "C’est toujours un cercle de même rayon que la sphère",
        "C’est un carré ou un rectangle"
      ],
      "correct": 1,
      "explication": "Le programme énonce : la section d’une sphère par un plan est toujours un cercle ; ce cercle est un grand cercle uniquement quand le plan passe par le centre, et son rayon varie sinon. Le fruit de forme sphérique coupé en classe sert exactement à le montrer."
    },
    {
      "enonce": "Un plan coupe une sphère de rayon 5 cm à une distance de 3 cm du centre. Quel est le rayon du cercle d’intersection ?",
      "options": [
        "8 cm",
        "√34 cm",
        "2 cm",
        "4 cm"
      ],
      "correct": 3,
      "explication": "Le rayon du cercle, la distance du centre au plan et le rayon de la sphère forment un triangle rectangle : rayon = √(5² − 3²) = √16 = 4 cm, le théorème de Pythagore servant à justifier la section. Soustraire ou additionner les deux longueurs sont les erreurs attendues."
    },
    {
      "enonce": "Quand une droite est-elle perpendiculaire à un plan ?",
      "options": [
        "Quand elle est perpendiculaire à deux droites sécantes de ce plan",
        "Quand elle rencontre une droite de ce plan",
        "Quand elle est parallèle à deux droites sécantes de ce plan",
        "Quand elle rencontre simplement ce plan en un point"
      ],
      "correct": 0,
      "explication": "La définition du programme demande la perpendicularité avec deux droites sécantes du plan ; croiser une seule droite ou toucher le plan en un point ne suffit pas. Le codage de l’angle droit sur la figure est un point de vigilance de la leçon."
    }
  ]);
})();
