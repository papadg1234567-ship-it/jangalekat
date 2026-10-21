/* Quiz de Mathématiques Seconde S — fichier 2 sur 2 : partie B) Géométrie dans l’espace,
   activités numériques I à V (calcul dans IR, intervalles et calcul approché, fonctions numériques,
   équations et inéquations, polynômes et fractions rationnelles) et statistique.
   Une leçon = un quiz = trois questions, couvrant maths-seconde-c6-l1 à maths-seconde-c12-l2.

   Provenance des leçons : programme officiel sénégalais de mathématiques du second cycle,
   classe de Seconde S, MEN / IGEN / Commission nationale des programmes, APAMS, octobre 2006
   (intitulés, contenus, commentaires et compétences exigibles de la colonne « Contenus »).
   Les énoncés, options et explications sont des contenus de démonstration auto-rédigés par un
   modèle : ils reprennent les notions écrites dans ce texte, mais aucun n’a été relu par un
   enseignant. Ils ne sont ni un sujet officiel ni une évaluation de référence, et aucune question
   ci-dessous ne provient d’un examen.

   Appui documentaire et réserves, à lire avant de faire confiance à une question :
   - Le Guide d’usage des programmes – Mathématiques (DEMSG, septembre 2012), qui détaille les
     notions leçon par leçon, ne couvre que le premier cycle : pour la Seconde, seul le texte
     d’octobre 2006 appuie ce fichier. Une leçon y tient parfois lieu de leçon entière (Calcul dans
     IR, Intervalles et calcul approché) : les trois questions portent alors sur le chapitre.
   - Le document ne prescrit aucun ordre annuel : l’introduction générale laisse au professeur le
     choix de « la meilleure répartition horaire ». L’ordre des leçons ici est l’ordre du papier,
     pas celui d’une année scolaire.
   - Doublon du document : le titre « 1) Consolidation » désigne deux leçons différentes, la
     première du chapitre Géométrie plane — I. Calcul vectoriel et la première du chapitre
     Statistique. Ce fichier traite la seconde (maths-seconde-c12-l1) et ne touche pas la première.
   - Trois exclusions du programme sont interrogées telles quelles, parce qu’elles sont écrites
     dans le texte : l’étude des vecteurs de l’espace est hors programme, les notions de limite ne
     sont pas au programme, et les compétences sur l’incertitude absolue comme sur l’incertitude
     relative ne sont pas exigibles. */
(function () {
  "use strict";

  JK.quizDeLecon("maths-seconde-c6-l1", [
    {
      "enonce": "Quel mode de représentation le programme impose-t-il pour dessiner les solides de l’espace ?",
      "options": [
        "La vue de face dessinée à l’échelle",
        "La perspective cavalière",
        "Le patron déplié du solide",
        "L’esquisse en coupe colorée"
      ],
      "correct": 1,
      "explication": "La compétence exigible demande de connaître les règles de perspective cavalière et de représenter dans ce mode les solides usuels ; le patron et la vue de face ne sont pas le procédé que le chapitre met en avant."
    },
    {
      "enonce": "Pour quelle raison le programme demande-t-il d’extraire une figure plane d’une figure de l’espace en faisant une coupe ?",
      "options": [
        "Pour calculer le volume du solide représenté",
        "Pour contrôler les règles de la perspective cavalière",
        "Pour utiliser un raisonnement de géométrie plane dans l’espace",
        "Pour remplacer le dessin du solide par un tableau de valeurs"
      ],
      "correct": 2,
      "explication": "La coupe est un instrument de raisonnement : elle ramène une question touchant un solide à une figure plane où les propriétés connues du plan s’appliquent, ce que le document énonce comme compétence de la représentation de l’espace."
    },
    {
      "enonce": "Quels solides le chapitre cite-t-il parmi ceux à représenter en perspective cavalière ?",
      "options": [
        "La boule, le pavé droit et le tronc de cône",
        "Le prisme, le tétraèdre et le polyèdre régulier",
        "Le cube, le parallélépipède rectangle et la sphère",
        "Le cube, la pyramide, le prisme, le cylindre et le cône"
      ],
      "correct": 3,
      "explication": "Ce sont les cinq solides énumérés par la compétence du document ; la boule et la sphère n’y apparaissent pas, même si le premier cycle les avait manipulées."
    }
  ]);

  JK.quizDeLecon("maths-seconde-c6-l2", [
    {
      "enonce": "Un plan (P) et un point A étant donnés, que garantit le théorème admis rappelé par le chapitre ?",
      "options": [
        "Il existe un plan unique parallèle à (P) et passant par A",
        "Il existe une droite unique parallèle à (P) et passant par A",
        "Il existe une infinité de plans parallèles à (P) et passant par A",
        "Il existe deux plans parallèles à (P) et passant par A"
      ],
      "correct": 0,
      "explication": "Le document inscrit ce théorème admis parmi les propriétés de base de la géométrie dans l’espace : existence et unicité du plan parallèle à (P) passant par A. Parler d’une infinité de tels plans contredirait l’unicité affirmée."
    },
    {
      "enonce": "Quels solides le chapitre met-il en avant pour les applications sur l’intersection d’un solide avec un plan ?",
      "options": [
        "Le cube et le pavé droit",
        "Le cylindre et le cône",
        "Le prisme et la pyramide",
        "La sphère et le cylindre"
      ],
      "correct": 2,
      "explication": "Les applications annoncées dans les contenus portent sur les intersections de prismes et de pyramides avec des plans ; les solides à surface courbe ne sont cités, eux, que pour la représentation en perspective cavalière."
    },
    {
      "enonce": "D’après les compétences exigibles, que doit-on savoir établir pour deux droites de l’espace ?",
      "options": [
        "Qu’elles sont sécantes ou perpendiculaires",
        "Qu’elles sont congruentes ou alignées",
        "Qu’elles sont confondues ou équidistantes",
        "Qu’elles sont parallèles ou orthogonales"
      ],
      "correct": 3,
      "explication": "L’énoncé de la compétence porte sur les deux cas parallèles ou orthogonales. Dans l’espace, deux droites peuvent être orthogonales sans se couper, ce que le seul vocabulaire du plan ne disait pas."
    }
  ]);

  JK.quizDeLecon("maths-seconde-c6-l3", [
    {
      "enonce": "Dans l’espace, comment le programme nomme-t-il deux droites qu’aucun plan ne peut contenir ?",
      "options": [
        "Elles sont non coplanaires",
        "Elles sont parallèles",
        "Elles sont concourantes",
        "Elles sont confondues"
      ],
      "correct": 0,
      "explication": "Le chapitre consacre sa partie orthogonalité à la compétence « montrer que deux droites sont non coplanaires » : faute de plan commun, ces deux droites-là ne se coupent pas non plus."
    },
    {
      "enonce": "Que le document prévoit-il pour les propriétés de position déjà rencontrées au premier cycle dans cette leçon ?",
      "options": [
        "Elles sont toutes remplacées par le calcul vectoriel",
        "Leurs énoncés sont formalisés et servent au raisonnement sur les objets de l’espace",
        "Elles sont abandonnées comme trop expérimentales",
        "Elles sont renvoyées au programme de la classe de première"
      ],
      "correct": 1,
      "explication": "Le commentaire de la leçon est clair : cette partie entraîne au raisonnement sur les objets de l’espace et les énoncés des propriétés vues au premier cycle y sont formalisés. Le document ajoute que l’étude des vecteurs de l’espace reste hors programme."
    },
    {
      "enonce": "Une droite (D) et un point A étant donnés, que garantit le théorème admis que le chapitre range parmi les propriétés de base ?",
      "options": [
        "Il existe une droite unique perpendiculaire à (D) et passant par A",
        "Il existe une infinité de plans perpendiculaires à (D) et passant par A",
        "Il existe un plan unique parallèle à (D) et passant par A",
        "Il existe un plan unique perpendiculaire à (D) et passant par A"
      ],
      "correct": 3,
      "explication": "Le texte énonce l’existence et l’unicité du plan perpendiculaire à (D) passant par A. Les droites perpendiculaires à (D) passant par A sont, elles, innombrables : elles remplissent précisément ce plan."
    }
  ]);

  JK.quizDeLecon("maths-seconde-c7-l1", [
    {
      "enonce": "Que le programme propose-t-il d’interpréter pour la valeur absolue d’un réel ?",
      "options": [
        "La distance, sur une droite, du point portant ce réel pour abscisse jusqu’à l’origine",
        "L’opposé du réel lorsque celui-ci est négatif",
        "Le carré du réel privé de son signe",
        "La partie entière du réel"
      ],
      "correct": 0,
      "explication": "Le chapitre étudie la valeur absolue comme outil de résolution de problèmes et l’attache à la distance sur une droite : elle mesure l’écart entre le point d’abscisse considérée et l’origine, d’où l’égalité des valeurs absolues de deux réels opposés."
    },
    {
      "enonce": "En utilisant la relation avec les radicaux que le programme demande de connaître, que donne √48 ?",
      "options": [
        "6√2",
        "4√3",
        "3√4",
        "2√6"
      ],
      "correct": 1,
      "explication": "48 = 16 × 3 = 4² × 3, donc √48 = 4√3 ; la relation du programme est donnée avec b positif ou nul, ce qui est le cas du facteur 3. Les trois autres écritures correspondent à 72, 36 et 24 placés sous le radical."
    },
    {
      "enonce": "Que signifie l’inéquation |x − 2| ≤ 3 d’après l’usage de la valeur absolue prévu par le programme ?",
      "options": [
        "x est à distance au plus 3 de 2, donc 2 ≤ x ≤ 5",
        "x est à distance au moins 3 de 2, donc x ≤ −1 ou x ≥ 5",
        "x est à distance au plus 3 de 2, donc −1 ≤ x ≤ 5",
        "x est à distance au plus 2 de 3, donc 1 ≤ x ≤ 5"
      ],
      "correct": 2,
      "explication": "La valeur absolue donnant une distance, l’énoncé impose que l’écart entre x et 2 reste inférieur ou égal à 3, ce qui enferme x entre 2 − 3 = −1 et 2 + 3 = 5. Confondre au plus avec au moins, ou échanger les deux nombres, sont les deux erreurs fréquentes."
    }
  ]);

  JK.quizDeLecon("maths-seconde-c8-l1", [
    {
      "enonce": "Pour l’intervalle borné [−3 ; 7], quels sont le centre et le rayon que le programme demande de connaître ?",
      "options": [
        "centre 5 et rayon 2",
        "centre 2 et rayon 5",
        "centre 2 et rayon 10",
        "centre 4 et rayon 5"
      ],
      "correct": 1,
      "explication": "Le centre est la demi-somme des bornes, (−3 + 7) ÷ 2 = 2, et le rayon la demi-amplitude, (7 − (−3)) ÷ 2 = 5 ; 10 est l’amplitude complète de l’intervalle, et non son rayon."
    },
    {
      "enonce": "Un réel x vérifie 2,3 ≤ x ≤ 2,7. Quel encadrement de 2x le chapitre attend-il ?",
      "options": [
        "2,3 ≤ 2x ≤ 2,7",
        "2,6 ≤ 2x ≤ 5,4",
        "4,6 ≤ 2x ≤ 5,4",
        "1,15 ≤ 2x ≤ 1,35"
      ],
      "correct": 2,
      "explication": "On multiplie les deux bornes par 2, le sens des inégalités étant conservé car 2 est positif : 2 × 2,3 = 4,6 et 2 × 2,7 = 5,4. L’encadrement d’une somme, d’une différence ou d’un produit fait partie des compétences exigibles du chapitre."
    },
    {
      "enonce": "Que le document dit-il des compétences relatives à l’incertitude dans ce chapitre ?",
      "options": [
        "Elles sont exigibles et évaluées à chaque contrôle",
        "Seule l’incertitude relative est exigible",
        "Elles sont remplacées par l’usage de la calculatrice",
        "L’incertitude absolue et l’incertitude relative ne sont pas exigibles"
      ],
      "correct": 3,
      "explication": "La notion d’incertitude figure dans les contenus, mais le commentaire écarte explicitement les compétences d’incertitude absolue et d’incertitude relative du niveau exigible en seconde ; la calculatrice, elle, reste un instrument de travail conseillé."
    }
  ]);

  JK.quizDeLecon("maths-seconde-c9-l1", [
    {
      "enonce": "Que pose le programme à propos des notions de limite dans ce chapitre ?",
      "options": [
        "Elles ne sont pas au programme de la classe de seconde",
        "Elles sont introduites de façon intuitive pour les fonctions usuelles",
        "Elles servent de support au calcul du taux de variation",
        "Elles sont exigibles lors des contrôles écrits"
      ],
      "correct": 0,
      "explication": "Le commentaire de la leçon l’écrit sans détour : les notions de limite ne sont pas au programme. Seule la notion d’asymptote parallèle aux axes est abordée, et encore sous une approche intuitive."
    },
    {
      "enonce": "Que demande le programme quand il invite à déterminer la parité d’une fonction ?",
      "options": [
        "De vérifier que la fonction est définie sur IR tout entier",
        "De calculer le taux de variation entre deux points",
        "De faire le lien entre la parité de la fonction et la symétrie de sa courbe",
        "De déterminer l’ensemble de définition de la fonction"
      ],
      "correct": 2,
      "explication": "Deux compétences voisines sont écrites dans le document : déterminer la parité, puis relier cette propriété à l’existence d’un centre ou d’un axe de symétrie de la courbe représentative. Une fonction paire se lit sur un axe, une fonction impaire sur un centre."
    },
    {
      "enonce": "Que désigne la notation (f ∘ g)(x) que le programme fait introduire dans cette leçon ?",
      "options": [
        "g [f(x)]",
        "f(x) × g(x)",
        "f(x) − g(x)",
        "f [g(x)]"
      ],
      "correct": 3,
      "explication": "Le document présente le mot composée, le symbole de composition et la définition écrivant (f ∘ g)(x) égale à f [g(x)] : on évalue d’abord g, puis on applique f au résultat. L’ordre des deux fonctions n’est donc pas interchangeable."
    }
  ]);

  JK.quizDeLecon("maths-seconde-c9-l2", [
    {
      "enonce": "Quelle fonction ouvre, dans le document, la liste des fonctions de la leçon Étude de fonctions ?",
      "options": [
        "La fonction partie entière",
        "La fonction inverse",
        "La fonction racine carrée",
        "La fonction cube"
      ],
      "correct": 0,
      "explication": "Le bloc étude de fonctions commence par la fonction partie entière, puis vient le tour des polynômes du second degré, de la fonction cube, des fonctions rationnelles et enfin des fonctions irrationnelles."
    },
    {
      "enonce": "Quelle symétrie de courbes le commentaire du chapitre propose-t-il de constater ?",
      "options": [
        "La symétrie par rapport à l’axe des ordonnées entre la courbe de la fonction carré et celle de la fonction cube",
        "La symétrie par rapport à la première bissectrice entre la courbe de la fonction carré restreinte aux abscisses positives et la courbe de la fonction racine carrée",
        "La symétrie par rapport à l’origine entre la courbe de la fonction carré restreinte aux abscisses positives et celle de la fonction inverse",
        "La symétrie par rapport à la deuxième bissectrice entre la courbe de la fonction racine carrée et celle de la fonction carré"
      ],
      "correct": 1,
      "explication": "Le document invite à constater cette symétrie par rapport à la première bissectrice entre la restriction aux abscisses positives de la courbe du carré et la courbe de la racine carrée : elle dit que les deux opérations se défont l’une l’autre."
    },
    {
      "enonce": "Parmi les fonctions du chapitre, laquelle le document range-t-il dans les fonctions rationnelles ?",
      "options": [
        "La fonction racine carrée x ↦ √x",
        "La fonction partie entière",
        "La fonction cube x ↦ x³",
        "La fonction inverse x ↦ 1 ÷ x"
      ],
      "correct": 3,
      "explication": "Le texte classe la fonction inverse x ↦ 1 ÷ x et la fonction x ↦ k ÷ x parmi les fonctions rationnelles ; la racine carrée relève des fonctions irrationnelles et la fonction partie entière ouvre la liste à un autre titre."
    }
  ]);

  JK.quizDeLecon("maths-seconde-c10-l1", [
    {
      "enonce": "Quelles sont les solutions de l’équation x² − 5x + 6 = 0 ?",
      "options": [
        "2 et 3",
        "−2 et −3",
        "1 et 6",
        "−1 et −6"
      ],
      "correct": 0,
      "explication": "Le discriminant vaut 25 − 24 = 1, les racines sont donc (5 − 1) ÷ 2 = 2 et (5 + 1) ÷ 2 = 3 ; on contrôle par la somme 5 et le produit 6. Le signe des racines est l’erreur la plus fréquente."
    },
    {
      "enonce": "Quelle méthode le document désigne-t-il pour résoudre une équation du second degré ?",
      "options": [
        "la méthode de Cramer",
        "la méthode du discriminant",
        "la méthode de Horner",
        "la méthode d’identification des coefficients"
      ],
      "correct": 1,
      "explication": "La compétence exigible est littéralement « résoudre une équation du 2nd degré par la méthode du discriminant », le commentaire évoquant aussi le déterminant réduit. Horner et l’identification des coefficients appartiennent au chapitre sur les polynômes, Cramer aux systèmes."
    },
    {
      "enonce": "Un champ rectangulaire près de Thiès a deux dimensions dont la somme vaut 7 dam et une aire de 12 dam². Quelle est sa longueur ?",
      "options": [
        "3 dam",
        "6 dam",
        "4 dam",
        "5 dam"
      ],
      "correct": 2,
      "explication": "Les deux dimensions ont pour somme 7 et pour produit 12 : ce sont les racines de t² − 7t + 12 = 0, soit 3 et 4, la longueur étant la plus grande. La vérification demandée par le programme tient en 4 + 3 = 7 et 4 × 3 = 12."
    }
  ]);

  JK.quizDeLecon("maths-seconde-c10-l2", [
    {
      "enonce": "Au marché de Ziguinchor, un kilogramme de riz et un kilogramme de sucre coûtent ensemble 1 150 F CFA, et trois kilogrammes de riz avec un kilogramme de sucre coûtent 2 050 F CFA. Que coûte un kilogramme de riz ?",
      "options": [
        "400 F CFA",
        "450 F CFA",
        "700 F CFA",
        "900 F CFA"
      ],
      "correct": 1,
      "explication": "En soustrayant la première équation de la seconde, il reste deux kilogrammes de riz pour 900 F CFA, soit 450 F CFA, et le sucre vaut 700 F CFA. La vérification donne 450 + 700 = 1 150 et 3 × 450 + 700 = 2 050 ; retenir 700, c’est confondre les deux inconnues. Les prix sont ceux que pose l’énoncé, pas un tarif réel."
    },
    {
      "enonce": "Quelle méthode le commentaire du chapitre réserve-t-il aux systèmes d’ordre deux ?",
      "options": [
        "la méthode du discriminant réduit",
        "la méthode de Horner",
        "la méthode de Cramer",
        "la méthode d’identification des coefficients"
      ],
      "correct": 2,
      "explication": "Le document indique que la méthode de Cramer sera utilisée dans le cas des systèmes d’ordre deux, c’est-à-dire deux équations à deux inconnues. Le discriminant réduit concerne le second degré et Horner la factorisation des polynômes."
    },
    {
      "enonce": "Que demande le document pour un système de deux ou trois inéquations à deux inconnues ?",
      "options": [
        "une résolution par le discriminant",
        "une résolution exclusive par substitution",
        "une interprétation dans l’espace par des plans",
        "une résolution graphique par régionnement du plan"
      ],
      "correct": 3,
      "explication": "Le chapitre traite les systèmes d’inéquations dans IR² par interprétation graphique, régionnement du plan et résolution graphique, avec application à des problèmes concrets ; le commentaire cite même des exemples de programmation linéaire."
    }
  ]);

  JK.quizDeLecon("maths-seconde-c11-l1", [
    {
      "enonce": "Jusqu’à quel degré le commentaire du chapitre limite-t-il les polynômes étudiés en seconde ?",
      "options": [
        "aux polynômes de degré 4 au plus",
        "aux polynômes de degré 2 au plus",
        "aux polynômes de degré 3 au plus",
        "aux polynômes de degré 5 au plus"
      ],
      "correct": 0,
      "explication": "Le document est explicite : on se limitera aux polynômes de degré inférieur ou égal à 4, et il demande d’éviter toute généralité sur les polynômes."
    },
    {
      "enonce": "Le réel 2 est un zéro du polynôme x² + x − 6. Quelle factorisation par (x − 2) le programme attend-il ?",
      "options": [
        "(x + 2)(x − 3)",
        "(x − 2)(x − 3)",
        "(x − 2)(x + 3)",
        "(x − 2)(x + 5)"
      ],
      "correct": 2,
      "explication": "P(2) = 4 + 2 − 6 = 0, donc (x − 2) est un facteur. Le second facteur s’en déduit : les deux nombres cherchés ont pour somme le coefficient de x, soit 1, et pour produit le terme constant, soit −6, ce qui donne 3 et −2. Le développement de (x − 2)(x + 3) rend bien x² + x − 6 ; les trois autres écritures donnent x² − x − 6, x² − 5x + 6 et x² + 3x − 10."
    },
    {
      "enonce": "Quelles deux écritures d’un polynôme le contenu du chapitre met-il en parallèle ?",
      "options": [
        "la forme canonique et la forme paramétrique",
        "la forme réduite et la forme développée",
        "la forme factorisée et la forme canonique",
        "la forme réduite et la forme factorisée"
      ],
      "correct": 3,
      "explication": "Le bloc intitulé « différentes écritures d’un polynôme » nomme exactement la forme réduite et la forme factorisée. La forme canonique est mentionnée ailleurs, pour les expressions du second degré, et « développée » n’est pas le terme du document."
    }
  ]);

  JK.quizDeLecon("maths-seconde-c11-l2", [
    {
      "enonce": "Quelle condition d’existence le programme attend-il pour la fraction rationnelle (x + 1) ÷ (x − 2) ?",
      "options": [
        "x ≠ 2",
        "x ≠ −1",
        "x ≠ −2",
        "x ≠ 0"
      ],
      "correct": 0,
      "explication": "Établir la condition d’existence passe par le dénominateur : il faut x − 2 ≠ 0, soit x ≠ 2. La valeur −1 annule le numérateur, elle donne un zéro de la fraction et non une valeur interdite."
    },
    {
      "enonce": "Quels sont les zéros de la fraction rationnelle x(x − 3) ÷ (x + 1) ?",
      "options": [
        "−1 uniquement",
        "0 et 3",
        "0, 3 et −1",
        "3 uniquement"
      ],
      "correct": 1,
      "explication": "Un zéro annule le numérateur en restant dans l’ensemble de définition : x(x − 3) = 0 donne 0 et 3, toutes deux différentes de −1, la valeur que le dénominateur interdit."
    },
    {
      "enonce": "Que permet d’écrire, selon le document, la décomposition par division euclidienne de la fraction A(x) ÷ B(x) ?",
      "options": [
        "le produit du quotient par le reste",
        "la différence de deux polynômes de même degré",
        "une somme de deux fractions de même dénominateur",
        "un polynôme ajouté à une fraction dont le numérateur est de degré inférieur à celui de B"
      ],
      "correct": 3,
      "explication": "Le texte écrit cette décomposition A(x) ÷ B(x) = Q(x) + R(x) ÷ B(x) en posant la condition de degré sur le reste R, plus petit que celui de B ; c’est le travail de la division euclidienne, traité dans la leçon suivante."
    }
  ]);

  JK.quizDeLecon("maths-seconde-c11-l3", [
    {
      "enonce": "Quel quotient obtient-on en divisant le polynôme x² + 3x − 10 par x − 2 ?",
      "options": [
        "x + 5",
        "x − 5",
        "x + 3",
        "x − 3"
      ],
      "correct": 0,
      "explication": "(x − 2)(x + 5) = x² + 5x − 2x − 10 = x² + 3x − 10 : le reste est nul et le quotient est x + 5. C’est l’exemple même de l’application « factorisation » que le document attache à la technique de calcul."
    },
    {
      "enonce": "Dans la division euclidienne de A(x) par B(x), quelle quantité le document exige-t-il de degré strictement inférieur à celui de B ?",
      "options": [
        "le quotient Q(x)",
        "le reste R(x)",
        "le dividende A(x)",
        "le diviseur B(x)"
      ],
      "correct": 1,
      "explication": "La condition posée par le texte porte sur le reste : son degré doit être inférieur à celui du diviseur. C’est elle qui rend la décomposition en un polynôme plus une fraction propre utilisable."
    },
    {
      "enonce": "Quelle application du calcul de la division euclidienne le chapitre cite-t-il ?",
      "options": [
        "l’étude de la parité d’une fonction",
        "le calcul de l’écart-type d’une série",
        "la factorisation d’un polynôme",
        "le changement d’origine d’un repère"
      ],
      "correct": 2,
      "explication": "Les applications énumérées sont la factorisation et la décomposition d’une fraction rationnelle. Le changement d’origine relève du repérage cartésien et l’écart-type de la statistique."
    }
  ]);

  JK.quizDeLecon("maths-seconde-c12-l1", [
    {
      "enonce": "Quelle représentation graphique la compétence de cette consolidation demande-t-elle de savoir tracer ?",
      "options": [
        "une boîte à moustaches",
        "un histogramme",
        "un diagramme en secteurs",
        "un graphique en nuage de points"
      ],
      "correct": 1,
      "explication": "Le document demande de représenter un diagramme cumulatif et un histogramme, puis d’utiliser le diagramme cumulatif des effectifs comme celui des fréquences. La boîte à moustaches, le diagramme en secteurs et le nuage de points ne font pas partie des représentations exigées ici."
    },
    {
      "enonce": "Que le programme demande-t-il de déterminer graphiquement dans cette partie de statistique ?",
      "options": [
        "la variance",
        "l’écart-type",
        "les quartiles",
        "la moyenne de la série"
      ],
      "correct": 2,
      "explication": "La compétence est littérale : déterminer graphiquement les quartiles, en s’appuyant sur le diagramme des effectifs cumulés. Elle accompagne l’interprétation des caractères de position que sont le mode, la moyenne, la médiane et les quartiles."
    },
    {
      "enonce": "Un élève de seconde a obtenu 12, 14, 9, 11 et 14 en mathématiques sur cinq devoirs. Quelle moyenne le programme attend-il pour cette série ?",
      "options": [
        "11",
        "13",
        "14",
        "12"
      ],
      "correct": 3,
      "explication": "La moyenne est la somme des valeurs divisée par leur nombre : (12 + 14 + 9 + 11 + 14) ÷ 5 = 60 ÷ 5 = 12. Dans la même série, le mode est 14, la seule valeur répétée, et la médiane est encore 12 après classement en 9, 11, 12, 14, 14."
    }
  ]);

  JK.quizDeLecon("maths-seconde-c12-l2", [
    {
      "enonce": "Quel symbole le commentaire de cette leçon annonce-t-il comme étant celui de l’écart-type ?",
      "options": [
        "σ",
        "π",
        "ν",
        "θ"
      ],
      "correct": 0,
      "explication": "Le document signale l’introduction de la notation indicielle et du symbole σ, l’écart-type étant nommé avec la variance dans le vocabulaire des paramètres de dispersion."
    },
    {
      "enonce": "Comment l’écart-type se déduit-il de la variance ?",
      "options": [
        "en prenant le carré de la variance",
        "en retranchant la moyenne de la variance",
        "en prenant la racine carrée de la variance",
        "en doublant la variance"
      ],
      "correct": 2,
      "explication": "Variance et écart-type sont les deux paramètres de dispersion du chapitre et l’écart-type est la racine carrée de la variance : c’est ce qui lui rend l’unité des observations, que la variance perd en élevant les écarts au carré."
    },
    {
      "enonce": "Que le programme propose-t-il de faire remarquer sur l’intervalle allant de la moyenne moins 2σ à la moyenne plus 2σ ?",
      "options": [
        "il contient obligatoirement toutes les valeurs de la série",
        "il contient toujours exactement la moitié des valeurs",
        "il ne contient que les valeurs extrêmes de la série",
        "il laisse dehors, en général, un pourcentage de valeurs petit"
      ],
      "correct": 3,
      "explication": "La remarque du document reste prudente : en général, le pourcentage des valeurs n’appartenant pas à cet intervalle construit avec la moyenne et l’écart-type est petit. Elle n’affirme ni une proportion exacte ni une certitude sur chaque valeur."
    }
  ]);
})();
