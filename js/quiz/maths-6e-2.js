/* Quiz de Mathématiques 6ème — Activités géométriques, leçons 1 à 9 (Jàngalekat).
   Les intitulés et l’ordre des leçons viennent du programme officiel sénégalais de mathématiques
   du premier cycle, guide d’usage APAMS (MEN / IGEN / Commission nationale des programmes),
   partie « Activités géométriques » de la classe de 6ème, recoupé avec le programme de 2006.
   Les énoncés, options et explications sont des contenus de démonstration rédigés par un modèle :
   ils reprennent les notions du programme détaillé, mais aucun n’a été relu par un enseignant.
   Ils ne sont ni un sujet officiel ni une évaluation de référence. Une leçon = trois questions. */
(function () {
  'use strict';

  JK.quizDeLecon("maths-6e-c2-l1", [
    {
      "enonce": "Que désigne la notation [AB] en géométrie ?",
      "options": [
        "Le segment d’extrémités A et B",
        "La droite passant par A et B",
        "La demi-droite d’origine A passant par B",
        "La distance entre A et B"
      ],
      "correct": 0,
      "explication": "Le programme fixe ces notations : [AB] est le segment d’extrémités A et B, (AB) la droite passant par A et B, [AB) la demi-droite d’origine A passant par B, et AB, sans crochets, la distance entre les deux points."
    },
    {
      "enonce": "Un point M n’appartient pas au segment [AB]. Que peut-on affirmer ?",
      "options": [
        "MA + MB = AB",
        "MA + MB < AB",
        "MA × MB = AB",
        "MA + MB > AB"
      ],
      "correct": 3,
      "explication": "C’est l’inégalité triangulaire du programme : si M est sur le segment [AB], alors MA + MB = AB ; si M n’est pas sur [AB], alors MA + MB > AB. L’égalité ne se conserve que pour les points du segment."
    },
    {
      "enonce": "Deux droites d’un plan qui ont un point commun sont dites…",
      "options": [
        "parallèles",
        "sécantes",
        "disjointes",
        "confondues"
      ],
      "correct": 1,
      "explication": "Le vocabulaire du plan et de ses parties distingue droites sécantes, droites disjointes et droites confondues : deux droites qui se coupent en un point sont sécantes, des droites parallèles n’ont aucun point commun et des droites confondues ne forment qu’une seule et même droite."
    }
  ]);

  JK.quizDeLecon("maths-6e-c2-l2", [
    {
      "enonce": "Que désigne la notation C(O ; r) ?",
      "options": [
        "Le cercle de centre O et de rayon r",
        "Le cercle de centre O et de diamètre r",
        "Le disque de centre O et de rayon r",
        "La corde de longueur r du cercle de centre O"
      ],
      "correct": 0,
      "explication": "C(O ; r) est le cercle de centre O dont le rayon mesure r ; le rayon joint le centre à un point du cercle et le diamètre en fait le double, c’est la confusion classique. Le disque est la partie du plan limitée par le cercle, pas seulement son contour."
    },
    {
      "enonce": "Un cercle a pour rayon 5 cm. En prenant 3,14 pour la valeur approchée de π, que vaut son périmètre ?",
      "options": [
        "15,7 cm",
        "31,4 cm",
        "62,8 cm",
        "78,5 cm"
      ],
      "correct": 1,
      "explication": "Le périmètre du cercle se calcule par 2 × π × r, soit 2 × 3,14 × 5 = 31,4 cm. Le nombre 78,5 sort de l’aire du disque, π × r² : c’est la confusion entre périmètre et aire ; 15,7 correspond à π × r et 62,8 à 2 × π × d, le diamètre valant 10 cm."
    },
    {
      "enonce": "Deux cercles qui ont exactement un point commun sont dits…",
      "options": [
        "sécants",
        "concentriques",
        "disjoints",
        "tangents"
      ],
      "correct": 3,
      "explication": "Le vocabulaire des positions relatives de deux cercles du programme distingue sécants, deux points communs, tangents, un seul point commun, et disjoints, aucun point commun. Deux cercles concentriques partagent le même centre, ce qui ne les empêche pas d’être disjoints quand leurs rayons diffèrent."
    }
  ]);

  JK.quizDeLecon("maths-6e-c2-l3", [
    {
      "enonce": "Qu’est-ce que la médiatrice d’un segment [AB] ?",
      "options": [
        "La droite perpendiculaire à (AB) qui passe par le milieu du segment [AB]",
        "La droite parallèle à (AB) qui passe par le milieu du segment [AB]",
        "Le segment qui joint A à son symétrique par rapport à B",
        "La droite qui coupe (AB) en un point quelconque"
      ],
      "correct": 0,
      "explication": "Le commentaire du programme retient cette définition : la médiatrice d’un segment [AB] est la droite perpendiculaire à (AB) passant par le milieu de [AB]. Une parallèle à (AB) par le milieu ne convient pas, car elle ne vérifie pas la propriété d’égalité des distances."
    },
    {
      "enonce": "Un point situé sur la médiatrice d’un segment [AB] possède quelle propriété ?",
      "options": [
        "Il est toujours le milieu du segment [AB]",
        "Il est à égale distance de A et de B",
        "Il appartient au segment [AB]",
        "La somme de ses distances à A et à B est égale à AB"
      ],
      "correct": 1,
      "explication": "C’est la propriété de la médiatrice écrite dans le programme : tout point de la médiatrice d’un segment [AB] est à égale distance de A et de B, et réciproquement tout point à égale distance de A et de B appartient à cette médiatrice. Seul le milieu du segment cumule les deux affirmations."
    },
    {
      "enonce": "D’après la définition du programme, deux droites sont parallèles lorsqu’elles sont…",
      "options": [
        "sécantes en un même point",
        "de même longueur",
        "symétriques l’une de l’autre",
        "perpendiculaires à une même droite"
      ],
      "correct": 3,
      "explication": "Le programme définit le parallélisme ainsi : deux droites sont parallèles lorsqu’elles sont perpendiculaires à une même droite. Il ajoute que deux droites parallèles à une même troisième sont parallèles entre elles et que, par un point donné, il passe une parallèle et une seule à une droite donnée."
    }
  ]);

  JK.quizDeLecon("maths-6e-c2-l4", [
    {
      "enonce": "Une symétrie orthogonale conserve…",
      "options": [
        "seulement la longueur des segments",
        "seulement l’alignement des points",
        "la longueur des segments, le milieu d’un segment et l’alignement des points",
        "seulement les aires des disques"
      ],
      "correct": 2,
      "explication": "Le programme place la symétrie orthogonale sous le titre « conservation de la distance » : le symétrique d’un segment a la même longueur, le symétrique du milieu d’un segment est le milieu du segment symétrique, et trois points non alignés ont des symétriques non alignés."
    },
    {
      "enonce": "Le symétrique d’un cercle par rapport à une droite est…",
      "options": [
        "un cercle de même rayon",
        "un cercle de rayon double",
        "un segment de même longueur que le diamètre",
        "une droite parallèle à l’axe"
      ],
      "correct": 0,
      "explication": "La symétrie orthogonale conserve les distances : tout point du cercle a un symétrique situé à la même distance du centre symétrique, on obtient donc un cercle de même rayon. Le programme étudie précisément le symétrique des figures simples : segment, droite, demi-droite, cercle."
    },
    {
      "enonce": "Par quel moyen le programme recommande-t-il d’introduire la symétrie orthogonale ?",
      "options": [
        "Par une démonstration rédigée",
        "Par le calcul de périmètres",
        "Par l’usage de la calculatrice",
        "Par le pliage"
      ],
      "correct": 3,
      "explication": "Le commentaire du programme est explicite : la symétrie orthogonale sera introduite par le pliage, ou par tout autre moyen donnant une approche intuitive. Le pliage sert aussi à établir l’égalité des longueurs de deux segments symétriques."
    }
  ]);

  JK.quizDeLecon("maths-6e-c2-l5", [
    {
      "enonce": "Deux angles complémentaires sont deux angles dont les mesures ont une somme de…",
      "options": [
        "180°",
        "45°",
        "90°",
        "360°"
      ],
      "correct": 2,
      "explication": "Dans le vocabulaire des angles, complémentaires renvoie à l’angle droit, soit 90°, et supplémentaires à l’angle plat, soit 180° ; confondre les deux mots est l’erreur classique. Un angle droit mesure aussi 100 grades."
    },
    {
      "enonce": "Qu’est-ce que la bissectrice d’un angle ?",
      "options": [
        "Le segment reliant les deux côtés de l’angle",
        "La demi-droite qui partage cet angle en deux angles adjacents de même mesure",
        "L’angle adjacent qui complète l’angle droit",
        "La droite perpendiculaire à l’un des côtés de l’angle"
      ],
      "correct": 1,
      "explication": "La bissectrice issue du sommet coupe l’angle en deux angles adjacents superposables, obtenus en divisant sa mesure par deux. Le commentaire du programme note que, selon le contexte, elle peut désigner une demi-droite, une droite ou un segment, et on la construit au rapporteur ou au compas."
    },
    {
      "enonce": "Un angle mesure 60°. Que mesure son angle supplémentaire ?",
      "options": [
        "120°",
        "30°",
        "300°",
        "90°"
      ],
      "correct": 0,
      "explication": "Deux angles supplémentaires ont une somme de 180°, la mesure de l’angle plat, donc 180 - 60 = 120. Le nombre 30 est la mesure de l’angle complémentaire, car 90 - 60 = 30 ; 300 correspond à un tour complet moins l’angle, soit 360 - 60."
    }
  ]);

  JK.quizDeLecon("maths-6e-c2-l6", [
    {
      "enonce": "D’après le programme, qu’est-ce qu’un trapèze ?",
      "options": [
        "Un quadrilatère dont les côtés sont parallèles deux à deux",
        "Un quadrilatère non croisé dont deux côtés sont parallèles et deux côtés non parallèles",
        "Un quadrilatère qui a quatre côtés de même longueur",
        "Un quadrilatère qui a un angle droit"
      ],
      "correct": 1,
      "explication": "C’est la définition écrite dans le programme, qui exclut le parallélogramme, aux côtés parallèles deux à deux, et se place parmi les quadrilatères non croisés. Le trapèze rectangle ajoute des angles droits et le trapèze isocèle possède un axe de symétrie."
    },
    {
      "enonce": "Combien un triangle équilatéral a-t-il d’axes de symétrie ?",
      "options": [
        "Aucun",
        "Un",
        "Quatre",
        "Trois"
      ],
      "correct": 3,
      "explication": "Le programme demande de construire les axes de symétrie du triangle équilatéral : il en a trois, un par sommet, alors que le triangle isocèle n’en a qu’un. Un quadrilatère comme le carré en a quatre."
    },
    {
      "enonce": "Dans la leçon sur les polygones, que désignent les notations ABC, BCA et CAB ?",
      "options": [
        "Trois triangles de sommets différents",
        "Trois angles de même mesure",
        "Le même triangle",
        "Trois demi-droites issues de A"
      ],
      "correct": 2,
      "explication": "Le commentaire de la leçon l’écrit expressément : ABC, BCA et CAB désignent le même triangle, puisque les trois notations listent les mêmes sommets ; la même remarque vaut pour les quadrilatères, ABCD se lisant aussi BCDA ou CDAB. Le piège vient de la leçon sur les angles, où la notation désigne l’angle de sommet B."
    }
  ]);

  JK.quizDeLecon("maths-6e-c2-l7", [
    {
      "enonce": "Un rectangle a 7 cm de longueur et 4 cm de largeur. Que vaut son aire ?",
      "options": [
        "22 cm",
        "14 cm²",
        "28 cm²",
        "32 cm²"
      ],
      "correct": 2,
      "explication": "L’aire d’un rectangle se calcule par longueur × largeur, soit 7 × 4 = 28 cm². Le nombre 22 vient du périmètre, 2 × (7 + 4), et 14 de la moitié du produit, la formule du triangle : ce sont les confusions entre périmètre et aire."
    },
    {
      "enonce": "Par quelle formule calcule-t-on l’aire d’un disque de rayon r ?",
      "options": [
        "2 × π × r",
        "π × r²",
        "π × r",
        "4 × π × r²"
      ],
      "correct": 1,
      "explication": "L’aire du disque est π × r², une grandeur exprimée en unité d’aire comme le cm². Le calcul 2 × π × r donne le périmètre du cercle et 4 × π × r² l’aire de la sphère, étudiée plus loin en géométrie dans l’espace."
    },
    {
      "enonce": "Un triangle a une base de 6 cm et une hauteur de 4 cm. Que vaut son aire ?",
      "options": [
        "24 cm²",
        "10 cm²",
        "18 cm²",
        "12 cm²"
      ],
      "correct": 3,
      "explication": "L’aire d’un triangle se calcule par base × hauteur ÷ 2, soit 6 × 4 ÷ 2 = 12 cm² : le triangle est la moitié du rectangle de mêmes dimensions. Sans la division par deux, on retrouve 24 cm², l’aire du rectangle."
    }
  ]);

  JK.quizDeLecon("maths-6e-c2-l8", [
    {
      "enonce": "Combien de faces un parallélépipède rectangle a-t-il ?",
      "options": [
        "4",
        "8",
        "6",
        "12"
      ],
      "correct": 2,
      "explication": "Le pavé droit a six faces rectangulaires, huit sommets et douze arêtes : le programme demande de le décrire par ces trois éléments, tout comme le cube qui a six faces carrées. Les nombres 8 et 12 correspondent aux sommets et aux arêtes, pas aux faces."
    },
    {
      "enonce": "Un pavé droit mesure 3 cm de long, 2 cm de large et 1 cm de haut. Quel est son volume ?",
      "options": [
        "6 cm³",
        "11 cm³",
        "22 cm³",
        "5 cm³"
      ],
      "correct": 0,
      "explication": "Le volume du pavé droit se calcule par longueur × largeur × hauteur, soit 3 × 2 × 1 = 6 cm³. Le nombre 11 est la somme des aires des trois faces différentes et 22 son double, c’est-à-dire l’aire totale : aire et volume ne se confondent pas."
    },
    {
      "enonce": "En géométrie dans l’espace, le programme admet que l’aire d’une sphère de rayon R se calcule par…",
      "options": [
        "2 × π × R",
        "4 × π × R²",
        "π × R²",
        "4/3 × π × R³"
      ],
      "correct": 1,
      "explication": "Le commentaire du programme donne la formule admise : l’aire de la sphère de rayon R est 4 × π × R², une aire s’exprimant en unité de surface. Le calcul 4/3 × π × R³ est celui du volume de la boule, 2 × π × R le périmètre du cercle et π × R² l’aire du disque."
    }
  ]);

  JK.quizDeLecon("maths-6e-c2-l9", [
    {
      "enonce": "Sur un globe, quel nom porte le cercle situé à égale distance des deux pôles ?",
      "options": [
        "Le méridien origine",
        "L’axe Nord-Sud",
        "Un parallèle",
        "L’équateur"
      ],
      "correct": 3,
      "explication": "Le vocabulaire du repérage sur la sphère place l’équateur à égale distance du pôle Nord et du pôle Sud. L’axe Nord-Sud est la droite qui joint les deux pôles et les parallèles sont les cercles parallèles à l’équateur, celui-ci en étant le plus grand."
    },
    {
      "enonce": "Les coordonnées géographiques d’un point du globe terrestre sont formées…",
      "options": [
        "du rayon et du diamètre de la sphère",
        "de son équateur et de son axe",
        "de sa latitude et de sa longitude",
        "de son pôle Nord et de son pôle Sud"
      ],
      "correct": 2,
      "explication": "Le programme range sous « coordonnées géographiques » la paire latitude et longitude : la latitude se lit sur les parallèles, la longitude sur les méridiens par rapport au méridien origine. C’est ce qui permet de localiser un lieu, par exemple sur un globe ou un planisphère."
    },
    {
      "enonce": "Sur quel tracé lit-on la longitude d’un point sur la sphère ?",
      "options": [
        "Un parallèle",
        "Un méridien",
        "Le disque limité par l’équateur",
        "L’axe Nord-Sud"
      ],
      "correct": 1,
      "explication": "Le contenu du programme associe méridien, méridien origine et longitude d’un côté, parallèle et latitude de l’autre : la longitude se lit sur un méridien, cercle passant par les deux pôles, tandis que le parallèle donne la latitude."
    }
  ]);
})();
