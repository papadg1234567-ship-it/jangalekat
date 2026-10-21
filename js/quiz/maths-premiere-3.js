/* Quiz de Mathématiques Première S (Jàngalekat) — une leçon = trois questions.
   Chapitres couverts ici : Algèbre II « Équations – Inéquations – Systèmes », Géométrie I
   « L’outil vectoriel et analytique », Géométrie II « L’outil métrique », Géométrie III
   « L’outil des transformations » et Géométrie IV « Compléments de géométrie dans l’espace ».
   Les intitulés et l’ordre des leçons viennent du programme officiel sénégalais de mathématiques
   des classes de Premières S2 et S4 (MEN / IGEN / Commission nationale des programmes,
   Programmes de mathématiques du second cycle – Premières S2 et S4, APAMS, octobre 2006 ;
   Guide d’usage des programmes – Mathématiques, DEMSG, septembre 2012, en appui).
   Deux particularités du document sont rappelées telles quelles : au chapitre « Géométrie – II.
   L’outil métrique », le contenu « Produit scalaire » est le seul à ne porter aucun numéro, alors
   que les deux leçons suivantes sont numérotées 2) et 3) ; et l’introduction générale précise que
   « le professeur choisira la progression de son choix », aucun ordre annuel de chapitres n’étant
   donc imposé au lycée, y compris pour les leçons de ce fichier.
   Les énoncés, options et explications sont des contenus de démonstration rédigés par un modèle :
   ils reprennent les contenus, commentaires et compétences exigibles du programme détaillé, mais
   aucun n’a été relu par un enseignant. Ils ne sont ni un sujet officiel ni une évaluation de
   référence. */
(function () {
  "use strict";

  JK.quizDeLecon("maths-premiere-c10-l1", [
    {
      "enonce": "Quelle est la solution de l’équation √(2x − 3) = 3 ?",
      "options": [
        "S = {6}",
        "S = {3}",
        "S = {12}",
        "S = {−6}"
      ],
      "correct": 0,
      "explication": "On élève au carré en exigeant 2x − 3 ≥ 0 : 2x − 3 = 9, donc 2x = 12 et x = 6 ; la valeur convient car 2 × 6 − 3 = 9 et √9 = 3. Le nombre 12 correspond à l’oubli de la division par 2, et 3 est la valeur du radical, pas celle de x."
    },
    {
      "enonce": "Pour quelle valeur du paramètre réel m l’équation x² − 2x + m = 0 admet-elle une solution double ?",
      "options": [
        "m = −1",
        "m = 1",
        "m = 2",
        "m = 0"
      ],
      "correct": 1,
      "explication": "Une solution double impose un discriminant nul : Δ = (−2)² − 4m = 4 − 4m, et 4 − 4m = 0 donne m = 1 ; l’équation s’écrit alors x² − 2x + 1 = (x − 1)². Avec m = −1 le discriminant vaut 8 et il existe deux solutions distinctes, avec m = 2 il vaut −4 et aucune solution réelle n’existe."
    },
    {
      "enonce": "Quelles sont les solutions réelles de l’équation x⁴ − 5x² + 4 = 0 ?",
      "options": [
        "S = {1 ; 4}",
        "S = {−1 ; 1}",
        "S = {−2 ; −1 ; 1 ; 2}",
        "S = {−2 ; 2}"
      ],
      "correct": 2,
      "explication": "Le programme autorise ce changement de variable : avec X = x², on obtient X² − 5X + 4 = 0, de discriminant 25 − 16 = 9, donc X = 1 ou X = 4 ; il reste x = ±1 et x = ±2, que l’on vérifie en remplaçant. S’arrêter à 1 et 4, c’est oublier de revenir à x."
    }
  ]);

  JK.quizDeLecon("maths-premiere-c10-l2", [
    {
      "enonce": "Dans la méthode du pivot de Gauss appliquée à un système de trois équations à trois inconnues, quel est le but des opérations sur les lignes ?",
      "options": [
        "Amener le système à une forme triangulaire en éliminant progressivement les inconnues",
        "Additionner les trois équations pour n’en garder qu’une seule",
        "Multiplier chaque équation par un réel choisi au hasard",
        "Isoler les trois inconnues dans une même équation"
      ],
      "correct": 0,
      "explication": "Le pivot de Gauss procède par élimination : on annule les coefficients placés sous le pivot, ligne après ligne, jusqu’à un système triangulaire que l’on achève par la dernière équation à une inconnue, puis par substitution descendante. Regrouper les équations ou multiplier au hasard détruirait l’équivalence du système."
    },
    {
      "enonce": "Quel triplet (x ; y ; z) est solution du système x + y + z = 6, x + y − z = 0 et x − y + z = 2 ?",
      "options": [
        "(2 ; 1 ; 3)",
        "(3 ; 2 ; 1)",
        "(1 ; 2 ; 3)",
        "(1 ; 3 ; 2)"
      ],
      "correct": 2,
      "explication": "En additionnant les deux premières équations on obtient 2x + 2y = 6, soit x + y = 3, et en les soustrayant 2z = 6, donc z = 3 ; la troisième équation devient x − y = −1, d’où x = 1 et y = 2. Le triplet (2 ; 1 ; 3) satisfait les deux premières équations mais pas la troisième."
    },
    {
      "enonce": "Un système de deux équations du premier degré à deux inconnues dont les droites représentatives sont parallèles et distinctes admet combien de solutions ?",
      "options": [
        "Une solution",
        "Deux solutions",
        "Une infinité de solutions",
        "Aucune solution"
      ],
      "correct": 3,
      "explication": "Résoudre un tel système, c’est chercher l’intersection des deux droites : des droites parallèles distinctes n’ont aucun point commun, donc le système n’admet aucun couple solution. Si les deux droites étaient confondues, les solutions seraient en infinité, et si elles étaient sécantes, il y en aurait exactement une."
    }
  ]);

  JK.quizDeLecon("maths-premiere-c10-l3", [
    {
      "enonce": "Un maraîcher de la vallée du fleuve Sénégal dispose de 2 hectares au plus pour cultiver le melon et l’oignon ; si x et y sont ces surfaces en hectares, quelle inéquation traduit la contrainte ?",
      "options": [
        "x + y = 2",
        "x + y ≤ 2",
        "x + y ≥ 2",
        "x × y ≤ 2"
      ],
      "correct": 1,
      "explication": "« Au plus 2 hectares » borne la surface totale : la somme des deux surfaces ne dépasse pas 2, d’où x + y ≤ 2, avec x et y positifs puisqu’il s’agit de surfaces. Écrire une égalité obligerait à exploiter exactement 2 hectares, et le produit des deux surfaces n’a ici aucune signification."
    },
    {
      "enonce": "Dans un problème de programmation linéaire résolu graphiquement, où cherche-t-on en général la valeur optimale de la fonction économique ?",
      "options": [
        "Au centre du polygone des solutions admissibles",
        "Sur n’importe quel point du plan",
        "À un sommet du polygone des solutions admissibles",
        "Uniquement sur les axes de coordonnées"
      ],
      "correct": 2,
      "explication": "L’ensemble des couples vérifiant toutes les contraintes est un polygone, et une fonction linéaire y atteint son extremum sur la frontière, donc sur l’un des sommets que l’on compare un à un. C’est parce que le programme limite ces exemples à des solutions déterminées graphiquement que l’on procède par lecture du domaine."
    },
    {
      "enonce": "Le couple (2 ; 1) est-il solution du système d’inéquations x + y ≤ 4 et 2x − y ≤ 3 ?",
      "options": [
        "Non, car la première inéquation n’est pas vérifiée",
        "Non, car la seconde inéquation n’est pas vérifiée",
        "Non, car aucune des deux inéquations n’est vérifiée",
        "Oui, car les deux inéquations sont vérifiées"
      ],
      "correct": 3,
      "explication": "En substituant : x + y = 2 + 1 = 3 et 3 ≤ 4 est vrai ; 2x − y = 4 − 1 = 3 et 3 ≤ 3 est vrai aussi, car le signe large accepte l’égalité. Un couple est solution d’un système d’inéquations lorsqu’il vérifie simultanément toutes les contraintes, ce que le régionnement du plan montre comme une région commune."
    }
  ]);

  JK.quizDeLecon("maths-premiere-c11-l1", [
    {
      "enonce": "Pour trois points A, B et C quelconques, que vaut la somme de vecteurs AB + BC ?",
      "options": [
        "AC",
        "CA",
        "CB",
        "BA"
      ],
      "correct": 0,
      "explication": "La relation de Chasles donne AB + BC = AC : on part de A et l’on arrive en C en passant par B, quel que soit le placement des trois points. Écrire CA, c’est inverser le sens du vecteur obtenu, et CB ou BA ne correspondent à aucun parcours de A vers C."
    },
    {
      "enonce": "Dans l’espace, si u, v et w sont trois vecteurs non coplanaires, que peut-on affirmer de tout vecteur de l’espace ?",
      "options": [
        "Il est toujours colinéaire à l’un des trois vecteurs u, v ou w",
        "Il s’écrit de manière unique sous la forme x u + y v + z w",
        "Il a nécessairement la même norme que u + v + w",
        "Il ne peut s’écrire qu’à l’aide de deux des trois vecteurs"
      ],
      "correct": 1,
      "explication": "Trois vecteurs non coplanaires forment une base de l’espace : la décomposition x u + y v + z w existe pour tout vecteur et elle est unique, ce qui permet de repérer ce vecteur par le triplet de ses coordonnées. Croire qu’un vecteur quelconque reste colinéaire à un vecteur de base, ou qu’il ne faut que deux vecteurs, sont les confusions visées."
    },
    {
      "enonce": "Pour deux points B et C, que vaut la différence de vecteurs 2 AB − 2 AC ?",
      "options": [
        "2 BC",
        "2 CA",
        "2 AB",
        "2 CB"
      ],
      "correct": 3,
      "explication": "On factorise le coefficient : 2 AB − 2 AC = 2(AB − AC), et AB − AC = AB + CA = CB, le vecteur qui va de C vers B. Retenir 2 BC revient à inverser ce sens : dans une différence de deux vecteurs de même origine, le résultat part de l’extrémité du second pour aller à celle du premier."
    }
  ]);

  JK.quizDeLecon("maths-premiere-c11-l2", [
    {
      "enonce": "Si G est le barycentre des points pondérés (A ; 1), (B ; 2), (C ; 3) et (D ; 4), que vaut le vecteur MA + 2 MB + 3 MC + 4 MD pour tout point M ?",
      "options": [
        "10 MG",
        "6 MG",
        "10 GM",
        "MG"
      ],
      "correct": 0,
      "explication": "La somme des coefficients vaut 1 + 2 + 3 + 4 = 10, non nulle, donc G existe et la réduction s’écrit MA + 2 MB + 3 MC + 4 MD = 10 MG, valable pour tout point M du plan comme de l’espace. Le facteur 6 correspond à l’oubli du coefficient de D, et GM inverse le sens du vecteur obtenu."
    },
    {
      "enonce": "Quelles sont les coordonnées du barycentre G des points A(1 ; 2), B(3 ; 4), C(5 ; 0) et D(−1 ; 2), tous affectés du coefficient 1 ?",
      "options": [
        "G(4 ; 4)",
        "G(2 ; 4)",
        "G(2 ; 2)",
        "G(1 ; 2)"
      ],
      "correct": 2,
      "explication": "La somme des coefficients vaut 4, donc G est le centre d’inertie des quatre points et ses coordonnées sont la moyenne des coordonnées : (1 + 3 + 5 − 1) ÷ 4 = 2 en abscisse et (2 + 4 + 0 + 2) ÷ 4 = 2 en ordonnée. Ajouter les coordonnées sans diviser par 4 conduit au couple (4 ; 4)."
    },
    {
      "enonce": "Le barycentre des points pondérés (A ; 2), (B ; −1), (C ; 3) et (D ; −4) existe-t-il ?",
      "options": [
        "Oui, c’est le milieu du segment [AC]",
        "Oui, un barycentre de quatre points existe toujours",
        "Oui, c’est le point d’intersection des droites (AC) et (BD)",
        "Non, car la somme des coefficients est nulle"
      ],
      "correct": 3,
      "explication": "Un barycentre n’est défini que si la somme des coefficients est non nulle ; ici 2 − 1 + 3 − 4 = 0, donc ce point n’existe pas. C’est précisément pourquoi le programme parle de construire, s’il existe, le barycentre de quatre points."
    }
  ]);

  JK.quizDeLecon("maths-premiere-c12-l1", [
    {
      "enonce": "Dans un repère orthonormal du plan, que traduit la relation u · v = 0 entre deux vecteurs u et v non nuls ?",
      "options": [
        "Que les vecteurs u et v sont colinéaires",
        "Que les vecteurs u et v sont orthogonaux",
        "Que les vecteurs u et v ont la même norme",
        "Que les vecteurs u et v sont égaux"
      ],
      "correct": 1,
      "explication": "La traduction analytique de l’orthogonalité est une compétence exigible : dans un repère orthonormal, u · v = xx′ + yy′ et cette somme s’annule exactement quand les deux vecteurs sont orthogonaux. Un produit nul ne renseigne ni sur les normes ni sur l’égalité des vecteurs, et la colinéarité se reconnaît autrement."
    },
    {
      "enonce": "Dans l’espace muni d’un repère orthonormal, que vaut la distance AB pour les points A(1 ; 1 ; 1) et B(4 ; 1 ; 5) ?",
      "options": [
        "3",
        "4",
        "5",
        "25"
      ],
      "correct": 2,
      "explication": "Le programme demande de calculer la distance de deux points dans l’espace : AB = √(3² + 0² + 4²) = √(9 + 16) = √25 = 5. Les nombres 3 et 4 sont les écarts de coordonnées pris séparément, et 25 est le carré de la distance, la racine ayant été oubliée."
    },
    {
      "enonce": "Que représente l’ensemble des points M tels que MA² + MB² = k, où A et B sont deux points fixes et k un réel ?",
      "options": [
        "Une droite perpendiculaire à (AB)",
        "La médiatrice du segment [AB]",
        "Un cercle de diamètre [AB]",
        "Un cercle de centre le milieu du segment [AB]"
      ],
      "correct": 3,
      "explication": "En notant I le milieu de [AB], la relation de la médiane donne MA² + MB² = 2 MI² + AB² ÷ 2, donc la condition s’écrit MI² = constante : l’ensemble est un cercle de centre I, réduit au point I ou vide selon la valeur de k. Ce sont les lignes de niveau du type a MA² + b MB² = k que le programme place dans ce chapitre."
    }
  ]);

  JK.quizDeLecon("maths-premiere-c12-l2", [
    {
      "enonce": "Pour trois droites (d), (d′) et (d″), que vaut la somme (d, d′) + (d′, d″) d’après la relation de Chasles ?",
      "options": [
        "(d, d″)",
        "(d′, d)",
        "(d″, d)",
        "(d, d′)"
      ],
      "correct": 0,
      "explication": "Le programme exige de connaître la relation de Chasles pour les angles orientés : quand l’arrivée du premier angle coïncide avec le départ du second, la droite intermédiaire disparaît et l’on obtient (d, d″). Pour des droites, cette égalité se lit modulo π, et l’inverser en (d″, d) revient à changer le signe."
    },
    {
      "enonce": "Quelle est la mesure principale de l’angle orienté dont une mesure vaut 5π ÷ 4 ?",
      "options": [
        "3π ÷ 4",
        "−3π ÷ 4",
        "π ÷ 4",
        "5π ÷ 4"
      ],
      "correct": 1,
      "explication": "Une mesure principale s’obtient en retirant ou en ajoutant des tours complets pour rester entre −π et π : 5π ÷ 4 − 2π = −3π ÷ 4. Conserver 5π ÷ 4 laisse une mesure au-delà de π, et retenir 3π ÷ 4 oublie que le retrait d’un tour change le signe."
    },
    {
      "enonce": "Si (v, u) = π ÷ 3 [2π], que vaut (u, v) [2π] ?",
      "options": [
        "π ÷ 3 [2π]",
        "2π ÷ 3 [2π]",
        "−π ÷ 3 [2π]",
        "0 [2π]"
      ],
      "correct": 2,
      "explication": "Changer le sens d’un angle orienté change son signe : (u, v) = −(v, u), donc (u, v) vaut −π ÷ 3 modulo 2π, ce qui s’écrit aussi 5π ÷ 3 [2π] d’après les règles d’utilisation de la congruence, addition et multiplication, que le programme met au contenu. Garder π ÷ 3 revient à confondre un angle orienté avec son opposé."
    }
  ]);

  JK.quizDeLecon("maths-premiere-c12-l3", [
    {
      "enonce": "Pour tout réel x, que vaut le produit 2 sin x cos x ?",
      "options": [
        "sin 2x",
        "cos 2x",
        "2 cos x",
        "1 − cos 2x"
      ],
      "correct": 0,
      "explication": "C’est la formule de duplication, dite de multiplication par 2, que le programme met au contenu : 2 sin x cos x = sin 2x. La confusion porte sur cos 2x, qui vaut cos²x − sin²x, et sur 1 − cos 2x, rattaché à 2 sin²x."
    },
    {
      "enonce": "Quelles sont les solutions dans IR de l’équation cos x = 1 ÷ 2 ?",
      "options": [
        "x = π ÷ 6 + 2kπ, k entier",
        "x = π ÷ 3 + 2kπ, k entier",
        "x = π ÷ 3 + 2kπ ou x = −π ÷ 3 + 2kπ, k entier",
        "x = 2π ÷ 3 + 2kπ ou x = π ÷ 3 + 2kπ, k entier"
      ],
      "correct": 2,
      "explication": "Le programme attend la maîtrise de l’équation fondamentale cos x = cos a, dont les solutions sont x = a + 2kπ ou x = −a + 2kπ ; comme cos(π ÷ 3) = 1 ÷ 2, on obtient ±π ÷ 3 modulo 2π. Omettre la solution opposée, c’est oublier que le cosinus est une fonction paire ; π ÷ 6 est l’angle dont le sinus vaut 1 ÷ 2, et 2π ÷ 3 celui dont le cosinus vaut −1 ÷ 2."
    },
    {
      "enonce": "D’après la formule de linéarisation, que vaut cos²x ?",
      "options": [
        "(1 − cos 2x) ÷ 2",
        "(1 + sin 2x) ÷ 2",
        "2 cos²x − 1",
        "(1 + cos 2x) ÷ 2"
      ],
      "correct": 3,
      "explication": "Le programme limite la linéarisation à cos²x et sin²x : cos²x = (1 + cos 2x) ÷ 2, tandis que (1 − cos 2x) ÷ 2 linéarise sin²x. L’écriture 2 cos²x − 1 est la formule de duplication de cos 2x, elle ne supprime donc pas la puissance du cosinus."
    }
  ]);

  JK.quizDeLecon("maths-premiere-c13-l1", [
    {
      "enonce": "Que représente la composée de deux symétries axiales dont les axes sont parallèles ?",
      "options": [
        "Une translation",
        "Une symétrie axiale",
        "Une rotation",
        "Une homothétie"
      ],
      "correct": 0,
      "explication": "Le programme étudie la composition de deux symétries orthogonales : deux axes parallèles donnent une translation, de direction perpendiculaire aux axes et de longueur double de la distance qui les sépare. Si les axes étaient sécants, la composée serait une rotation de centre leur point d’intersection."
    },
    {
      "enonce": "Dans un repère du plan, quelle transformation est définie par x′ = x + 2 et y′ = y − 1 ?",
      "options": [
        "Une rotation de centre l’origine",
        "La translation de vecteur de coordonnées (2 ; −1)",
        "Une homothétie de centre l’origine",
        "La symétrie axiale d’axe la droite d’équation y = x"
      ],
      "correct": 1,
      "explication": "Reconnaître une transformation par son expression analytique est une compétence exigible : ici chaque coordonnée de l’image s’obtient en ajoutant une même constante, sans coefficient multiplicateur ni mélange de x et y, ce qui caractérise la translation de vecteur (2 ; −1). Une homothétie ou une rotation ferait intervenir un facteur devant x ou y."
    },
    {
      "enonce": "Que représente la composée de deux rotations de même centre, d’angles α et β ?",
      "options": [
        "Une translation",
        "Une homothétie",
        "Une symétrie axiale",
        "Une rotation de même centre, d’angle α + β"
      ],
      "correct": 3,
      "explication": "La composition de deux rotations de même centre est au commentaire du programme : les angles s’ajoutent et le centre est conservé, la composée est donc la rotation de même centre et d’angle α + β, sauf quand α + β est congru à 0 modulo 2π, auquel cas tout point est invariant. Une translation ou une homothétie ne conserveraient pas la distance à ce centre."
    }
  ]);

  JK.quizDeLecon("maths-premiere-c14-l1", [
    {
      "enonce": "Que peut-on dire des points appartenant au plan médiateur d’un segment [AB] de l’espace ?",
      "options": [
        "Ils sont tous situés sur la droite (AB)",
        "Ils sont tous à égale distance de A et de B",
        "Ils sont tous à la même distance du milieu de [AB]",
        "Ils sont tous confondus avec A ou avec B"
      ],
      "correct": 1,
      "explication": "Le programme demande de connaître et d’utiliser la notion de plan médiateur : c’est le plan perpendiculaire à (AB) passant par son milieu, et il contient exactement les points équidistants de A et de B. Un point de (AB) autre que le milieu n’est pas équidistant des extrémités, et l’ensemble des points situés à distance fixe du milieu est une sphère."
    },
    {
      "enonce": "Une sphère de centre O et de rayon 5 cm est coupée par un plan situé à 3 cm de O ; quel est le rayon du cercle intersection ?",
      "options": [
        "2 cm",
        "8 cm",
        "4 cm",
        "5 cm"
      ],
      "correct": 2,
      "explication": "Le rayon r du cercle intersection vérifie r² + d² = R², car la distance au plan, le rayon du cercle et un rayon de la sphère forment un triangle rectangle : r = √(25 − 9) = √16 = 4 cm. Soustraire 3 de 5 donne 2 cm sans justification, et 5 cm est le rayon de la sphère, pas celui du cercle d’intersection."
    },
    {
      "enonce": "Dans l’espace muni d’un repère orthonormal, quelles sont les coordonnées du produit vectoriel u ∧ v pour u(1 ; 0 ; 0) et v(0 ; 1 ; 0) ?",
      "options": [
        "(0 ; 0 ; −1)",
        "(1 ; 1 ; 0)",
        "(1 ; 0 ; 0)",
        "(0 ; 0 ; 1)"
      ],
      "correct": 3,
      "explication": "Le produit vectoriel de i par j donne k, soit (0 ; 0 ; 1) : le résultat est orthogonal aux deux vecteurs de départ, et le programme justifie cette notion par ses applications en sciences physiques. Intervertir les facteurs changerait le signe du produit vectoriel, et (1 ; 1 ; 0) est la somme u + v, pas son produit vectoriel."
    }
  ]);
})();
