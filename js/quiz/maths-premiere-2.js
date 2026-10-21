/* Quiz de Mathématiques Première (Jàngalekat) — leçons maths-premiere-c5-l1 à maths-premiere-c9-l1,
   une leçon = trois questions.
   Les intitulés, les chapitres et l’ordre des leçons viennent du programme officiel sénégalais de
   mathématiques du second cycle, Premières S2 et S4 (MEN / IGEN / APAMS, Programmes de mathématiques
   du second cycle — Premières S2 et S4, octobre 2006, PDF). Les questions interrogent uniquement les
   colonnes Contenus, Commentaires et Compétences exigibles de ces cinq chapitres : Analyse V. Étude
   et représentation graphique de fonctions, Analyse VI. Suites numériques, Dénombrement, Statistique,
   Algèbre I. Applications.
   Réserves reprises du registre js/programmes/maths.js : le document ne prescrit AUCUN ordre annuel —
   l’introduction générale dit expressément que « le professeur choisira la progression de son choix » —
   donc l’ordre ci-dessous est l’ordre du papier, pas celui d’une année ; le document recommande
   seulement de commencer par le chapitre Applications. Le Guide d’usage des programmes – Mathématiques
   (DEMSG, septembre 2012), cité dans la référence du registre, ne détaille que le cycle moyen (6ᵉ à
   3ᵉ) et ne sert pas de source pour ces leçons de Première. Les sous-blocs lettrés et les listes à
   tirets du document ne sont pas recopiés comme leçons ; casse et accents ont été remis en forme.
   Les énoncés, options et explications sont des contenus de démonstration auto-rédigés par un modèle :
   ils reprennent les notions du programme détaillé, mais aucun n’a été relu par un enseignant. Ils ne
   sont ni un sujet officiel ni une évaluation de référence, et ne proviennent d’aucun sujet d’examen. */
(function () {
  "use strict";

  JK.quizDeLecon("maths-premiere-c5-l1", [
    {
      "enonce": "Que désigne-t-on par fonction polynôme de degré inférieur ou égal à 3 ?",
      "options": [
        "Une fonction de la forme f(x) = ax³ + bx² + cx + d, où a, b, c, d sont des réels",
        "Une fonction de la forme f(x) = (ax + b) ÷ (cx + d), définie quand cx + d est non nul",
        "Une fonction de la forme f(x) = √(ax² + bx + c), définie quand ax² + bx + c est positif ou nul",
        "Une fonction de la forme f(x) = a cos x + b sin x"
      ],
      "correct": 0,
      "explication": "Le titre de la leçon borne l’étude aux polynômes de degré inférieur ou égal à 3, c’est-à-dire aux sommes de termes constants, en x, en x² et en x³ affectés de coefficients réels. Les trois autres écritures sont celles des leçons voisines du même chapitre : le quotient de deux polynômes donne une fonction rationnelle, la racine carrée une fonction irrationnelle, sinus et cosinus une fonction circulaire."
    },
    {
      "enonce": "Quel est l’ensemble de définition d’une fonction polynôme ?",
      "options": [
        "L’ensemble des réels strictement positifs",
        "L’ensemble privé des valeurs qui annulent le dénominateur",
        "L’ensemble ℝ de tous les réels",
        "L’ensemble des réels pour lesquels l’expression sous la racine est positive ou nulle"
      ],
      "correct": 2,
      "explication": "Calculer ax³ + bx² + cx + d n’impose aucune restriction : tout réel possède une image, donc l’ensemble de définition est ℝ tout entier. C’est pourquoi le document admet les fonctions polynômes continues dans leur ensemble de définition. Les exclusions de valeurs viennent du dénominateur d’une fonction rationnelle ou de la racine carrée d’une fonction irrationnelle."
    },
    {
      "enonce": "On considère la fonction f définie par f(x) = x³ − x. Quelles sont ses racines ?",
      "options": [
        "0 et 1",
        "0, 1 et −1",
        "1 et −1",
        "−1 et 0"
      ],
      "correct": 1,
      "explication": "x³ − x = x(x² − 1) = x(x − 1)(x + 1) : un produit est nul si et seulement si l’un au moins de ses facteurs est nul, ce qui donne x = 0, x = 1 et x = −1. Réduire les réponses à 1 et −1 revient à résoudre seulement x² − 1 = 0 et à oublier le facteur x ; 1 et 0 seuls oublient la racine négative."
    }
  ]);

  JK.quizDeLecon("maths-premiere-c5-l2", [
    {
      "enonce": "Qu’est-ce qu’une fonction rationnelle, telle que l’étudie ce chapitre ?",
      "options": [
        "Une fonction de la forme f(x) = ax³ + bx² + cx + d, avec a, b, c, d réels",
        "Une fonction définie à l’aide d’une racine carrée d’un polynôme",
        "Une fonction périodique de période 2π",
        "Une fonction qui s’écrit comme quotient de deux polynômes, définie là où le dénominateur n’est pas nul"
      ],
      "correct": 3,
      "explication": "Une fonction rationnelle est un quotient de deux polynômes, et le document limite ici l’étude aux cas où numérateur et dénominateur sont de degré inférieur ou égal à 2 ; les valeurs qui annulent le dénominateur sont exclues de l’ensemble de définition. Une somme de puissances de x relève des polynômes, la racine carrée des fonctions irrationnelles et la période 2π des fonctions circulaires."
    },
    {
      "enonce": "On considère f(x) = (2x + 1) ÷ (x − 3). Quelle asymptote parallèle à l’axe des ordonnées possède sa courbe ?",
      "options": [
        "La droite d’équation y = 2",
        "La droite d’équation x = 3",
        "La droite d’équation x = −3",
        "La droite d’équation x = −1 ÷ 2"
      ],
      "correct": 1,
      "explication": "La valeur qui annule le dénominateur, ici x = 3, est exclue de l’ensemble de définition et f(x) y tend vers ±∞ : la droite verticale x = 3 est asymptote parallèle à l’axe des ordonnées, compétence que le programme demande de déterminer et de représenter. La droite horizontale y = 2 est, elle, asymptote parallèle à l’axe des abscisses parce que (2x + 1) ÷ (x − 3) tend vers 2 quand x tend vers ±∞ ; x = −1 ÷ 2 annule le numérateur et donne le point de rencontre avec l’axe des abscisses."
    },
    {
      "enonce": "Pour justifier que la droite d’équation y = ax + b est asymptote oblique à la courbe de f, que faut-il établir ?",
      "options": [
        "Que la droite et la courbe ont un point commun",
        "Que f(x) − (ax + b) tend vers ±∞ quand x tend vers +∞",
        "Que f(x) − (ax + b) tend vers 0 quand x tend vers +∞ ou vers −∞",
        "Que l’équation f(x) = ax + b admet exactement deux solutions"
      ],
      "correct": 2,
      "explication": "Le critère donné au programme est l’écriture f(x) = ax + b + r(x) avec lim r = 0 en +∞ ou en −∞ : la distance verticale entre la courbe et la droite s’annule à l’infini, et la droite y = ax + b est alors asymptote oblique dans cette direction. Le document écarte d’ailleurs toute recherche systématique des asymptotes obliques pour les fonctions rationnelles de ce chapitre."
    }
  ]);

  JK.quizDeLecon("maths-premiere-c5-l3", [
    {
      "enonce": "Quel est l’ensemble de définition de la fonction f définie par f(x) = √(x − 2) ?",
      "options": [
        "ℝ",
        "L’intervalle [2 ; +∞[",
        "L’intervalle ]−∞ ; 2[",
        "L’intervalle ]−∞ ; 2]"
      ],
      "correct": 1,
      "explication": "Une racine carrée n’existe que si ce qui est placé sous le signe est positif ou nul : il faut x − 2 ≥ 0, soit x ≥ 2. La valeur 2 est bien admise puisque √0 = 0, d’où le crochet fermé en 2, et les réels strictement inférieurs à 2 sont exclus."
    },
    {
      "enonce": "Quel est l’ensemble de définition de la fonction f définie par f(x) = √(x² + 1) ?",
      "options": [
        "L’intervalle [1 ; +∞[",
        "L’ensemble ℝ privé de 0",
        "La réunion ]−∞ ; −1] ∪ [1 ; +∞[",
        "L’ensemble ℝ de tous les réels"
      ],
      "correct": 3,
      "explication": "Pour tout réel x, x² est positif ou nul, donc x² + 1 est strictement positif : la condition de positivité sous le radical est satisfaite pour chaque réel et l’ensemble de définition est ℝ entier. Cette expression ne s’annule jamais, et aucune valeur n’est à exclure ici."
    },
    {
      "enonce": "Dans quel ensemble le programme admet-il que la fonction racine carrée est continue ?",
      "options": [
        "Dans son ensemble de définition",
        "Uniquement sur l’ensemble des entiers naturels",
        "Sur ℝ entier, même aux valeurs où le radical n’a pas de sens",
        "Uniquement aux points où elle est dérivable"
      ],
      "correct": 0,
      "explication": "Le document admet que les fonctions polynômes, rationnelles, racines carrées et homographiques sont continues dans leurs ensembles de définition ; pour la racine carrée, cela couvre les valeurs où l’expression sous le signe est positive ou nulle. Le lien attendu avec le cours est celui entre un tracé sans rupture de la courbe et la continuité."
    }
  ]);

  JK.quizDeLecon("maths-premiere-c5-l4", [
    {
      "enonce": "Quelle est la période de la fonction sinus ?",
      "options": [
        "π",
        "π ÷ 2",
        "2π",
        "4π"
      ],
      "correct": 2,
      "explication": "sin(x + 2π) = sin x pour tout réel x et 2π est la plus petite période positive de sinus ; cosinus possède la même période, ce que le programme range sous la notion de périodicité des fonctions sinus, cosinus et tangente. La valeur π est la période de la tangente, pas celle des deux premières fonctions."
    },
    {
      "enonce": "Pourquoi la fonction tangente n’est-elle pas définie en π ÷ 2 ?",
      "options": [
        "Parce que cos(π ÷ 2) = 0 et que la tangente est le quotient de sinus par cosinus",
        "Parce que sin(π ÷ 2) = 0",
        "Parce que la tangente ne peut pas dépasser 1 en valeur absolue",
        "Parce que π ÷ 2 n’appartient pas à l’ensemble de définition de sinus"
      ],
      "correct": 0,
      "explication": "tan x = sin x ÷ cos x : la fonction n’existe que là où le cosinus est non nul, et en π ÷ 2 le cosinus vaut 0, ce qui place une valeur interdite et une asymptote verticale. En ce point le sinus vaut au contraire 1, et contrairement à sinus et cosinus la tangente n’est pas bornée en valeur absolue."
    },
    {
      "enonce": "On considère f(x) = sin(2x). Quelle est la période de cette fonction, composée d’une fonction circulaire et d’une fonction affine ?",
      "options": [
        "2π",
        "4π",
        "π ÷ 2",
        "π"
      ],
      "correct": 3,
      "explication": "sin(2(x + π)) = sin(2x + 2π) = sin 2x, et aucune valeur plus petite que π ne convient : le facteur 2 de la fonction affine accélère le cycle de sinus et la période devient 2π ÷ 2 = π. Le document prévoit des exemples de représentation graphique de fonctions composées d’une fonction circulaire et d’une fonction affine, exactement ce type de cas ; 2π reste la période de sinus tout seul."
    }
  ]);

  JK.quizDeLecon("maths-premiere-c5-l5", [
    {
      "enonce": "Que signifie résoudre graphiquement l’équation f(x) = g(x) ?",
      "options": [
        "Relever les abscisses des points communs aux deux courbes",
        "Relever les ordonnées des points communs aux deux courbes",
        "Évaluer l’aire comprise entre les deux courbes",
        "Calculer les limites des deux fonctions à l’infini"
      ],
      "correct": 0,
      "explication": "Un point commun aux deux courbes a pour coordonnées (x ; y) avec y = f(x) = g(x) : la solution est l’abscisse de ce point, jamais son ordonnée. C’est la compétence placée en clôture du chapitre sur l’étude et la représentation graphique des fonctions, et les ordonnées ne servent qu’à lire la valeur commune prise par les deux fonctions."
    },
    {
      "enonce": "Que signifie résoudre graphiquement l’inéquation f(x) > g(x) ?",
      "options": [
        "Relever les abscisses des points communs aux deux courbes",
        "Relever les intervalles où la courbe de f est située sous celle de g",
        "Relever les intervalles où les deux fonctions sont positives",
        "Relever les valeurs de x pour lesquelles la courbe de f est située au-dessus de celle de g"
      ],
      "correct": 3,
      "explication": "À abscisse fixée, comparer f(x) et g(x) revient à comparer les hauteurs des deux courbes : l’inégalité est vraie là où la courbe de f domine celle de g, et les abscisses d’intersection servent de bornes aux intervalles de solutions. Une courbe de f sous celle de g correspondrait à f(x) < g(x), et la positivité des deux fonctions n’est pas la question posée."
    },
    {
      "enonce": "On discute, selon la valeur du réel m, le nombre de solutions de l’équation f(x) = m. Quel procédé graphique utilise-t-on ?",
      "options": [
        "On fait varier la pente d’une droite passant par l’origine",
        "On fait glisser la droite horizontale d’équation y = m et on compte ses points communs avec la courbe de f",
        "On translate la courbe de f de m unités vers le haut",
        "On relève les ordonnées des extremums de f et on les compare à 0"
      ],
      "correct": 1,
      "explication": "Les solutions de f(x) = m sont les abscisses des points communs à la courbe de f et à la droite horizontale d’équation y = m ; en faisant varier m, le nombre de points communs change et la discussion se lit directement sur le graphique. Le programme prévoit expressément quelques cas de discussion d’une équation paramétrique du type f(x) = m."
    }
  ]);

  JK.quizDeLecon("maths-premiere-c6-l1", [
    {
      "enonce": "On définit la suite (uₙ) par u₀ = 2 et uₙ₊₁ = 3uₙ − 1. Que vaut u₂ ?",
      "options": [
        "5",
        "14",
        "17",
        "8"
      ],
      "correct": 1,
      "explication": "Une suite récurrente se calcule terme à terme à partir du rang précédent : u₁ = 3 × 2 − 1 = 5, puis u₂ = 3 × 5 − 1 = 14. Déterminer les termes d’une suite récurrente est une compétence exigible de cette leçon ; la valeur 5 est le terme u₁, pas u₂, et 17 correspond à une erreur de signe sur le retrait."
    },
    {
      "enonce": "Qu’appelle-t-on une suite majorée ?",
      "options": [
        "Une suite dont tous les termes sont positifs ou nuls",
        "Une suite dont deux termes consécutifs diffèrent toujours de la même constante",
        "Une suite pour laquelle il existe un réel M tel que tous les termes soient inférieurs ou égaux à M",
        "Une suite dont tous les termes sont compris entre deux réels fixés à l’avance"
      ],
      "correct": 2,
      "explication": "Être majorée veut dire rester sous une même borne M, ce que le programme demande de savoir faire en même temps que minorer une suite. Rester encadrée par deux réels fixes décrit une suite bornée, à la fois majorée et minorée ; des termes positifs ou nuls ne donnent aucune borne supérieure, et un pas constant entre termes consécutifs décrit une suite arithmétique."
    },
    {
      "enonce": "On définit la suite (uₙ) par u₀ = 2 et uₙ₊₁ = 1 ÷ (1 − uₙ). Que montrent les calculs de u₁, u₂ et u₃ ?",
      "options": [
        "Que u₃ retrouve la valeur de u₀, donc que la suite est périodique de période 3",
        "Que la suite est croissante et converge vers 1",
        "Que la suite est décroissante et converge vers 0",
        "Que la suite est arithmétique de raison −1"
      ],
      "correct": 0,
      "explication": "u₁ = 1 ÷ (1 − 2) = −1, puis u₂ = 1 ÷ (1 + 1) = 1 ÷ 2, puis u₃ = 1 ÷ (1 − 1 ÷ 2) = 2 : on retombe sur u₀ et les termes se répètent par blocs de trois. C’est l’allure d’une suite périodique, notion que le document introduit sans théorie sur des exemples significatifs, et les écarts successifs 3 ÷ 2 puis −1 ÷ 2 excluent toute suite arithmétique."
    }
  ]);

  JK.quizDeLecon("maths-premiere-c6-l2", [
    {
      "enonce": "Une suite arithmétique a pour premier terme u₀ = 5 et pour raison 3. Que vaut u₁₀ ?",
      "options": [
        "30",
        "33",
        "15",
        "35"
      ],
      "correct": 3,
      "explication": "Le terme général d’une suite arithmétique s’obtient en ajoutant la raison autant de fois que l’indique le rang : uₙ = u₀ + 3n, d’où u₁₀ = 5 + 3 × 10 = 35. Le document demande cette expression du terme général en fonction du premier terme, du rang et de la raison ; 30 oublierait le premier terme et 33 ajouterait une fois de trop."
    },
    {
      "enonce": "Une suite géométrique a pour premier terme v₀ = 2 et pour raison 3. Que vaut v₄ ?",
      "options": [
        "162",
        "54",
        "81",
        "14"
      ],
      "correct": 0,
      "explication": "Pour une suite géométrique on multiplie le premier terme par la raison élevée au rang : vₙ = v₀ × 3ⁿ, donc v₄ = 2 × 3⁴ = 2 × 81 = 162. Oublier le premier terme laisse 3⁴ = 81, se tromper de rang donne v₃ = 54, et 14 applique la formule des suites arithmétiques 2 + 4 × 3 à une suite géométrique."
    },
    {
      "enonce": "Que vaut la somme 1 + 2 + 3 + … + 10 ?",
      "options": [
        "50",
        "54",
        "55",
        "110"
      ],
      "correct": 2,
      "explication": "Les termes forment une progression arithmétique de raison 1 : on multiplie le nombre de termes par la demi-somme du premier et du dernier, soit 10 × (1 + 10) ÷ 2 = 55. Le programme place le calcul de la somme de p termes consécutifs d’une suite arithmétique parmi les compétences, avec la notation indicielle et la notation ∑."
    }
  ]);

  JK.quizDeLecon("maths-premiere-c6-l3", [
    {
      "enonce": "Pour n strictement positif, on pose uₙ = 3 + 1 ÷ n. Vers quelle limite cette suite converge-t-elle ?",
      "options": [
        "0",
        "1",
        "3",
        "Elle ne converge pas"
      ],
      "correct": 2,
      "explication": "Quand n grandit, 1 ÷ n devient aussi proche de 0 que l’on veut, donc uₙ se rapproche de 3 : la suite est convergente vers 3. Le document demande d’introduire la convergence par des exemples simples de ce type, de manière calculatoire et graphique, et de déterminer des limites de suites convergentes ; 0 est la limite du seul terme 1 ÷ n, pas celle de uₙ."
    },
    {
      "enonce": "Comment le programme nomme-t-il une suite qui n’est pas convergente ?",
      "options": [
        "Une suite monotone",
        "Une suite divergente",
        "Une suite bornée",
        "Une suite périodique"
      ],
      "correct": 1,
      "explication": "Le document le dit expressément : une suite non convergente est divergente. Monotonie, bornitude et périodicité sont d’autres qualificatifs indépendants de la convergence, et une suite divergente peut fort bien être bornée, comme celle qui alterne entre 1 et −1 sans se rapprocher d’une limite."
    },
    {
      "enonce": "On pose vₙ = 2ⁿ. Que peut-on dire de cette suite ?",
      "options": [
        "Elle converge vers 0",
        "Elle converge vers 1",
        "Elle converge vers 2",
        "Elle diverge : ses termes dépassent toute borne"
      ],
      "correct": 3,
      "explication": "La raison 2 est supérieure à 1 : v₁ = 2, v₅ = 32, v₁₀ = 1024, et les termes croissent sans limite ; la suite n’admet pas de limite finie, elle est donc divergente, ce que le document demande d’aborder par le calcul et par la lecture graphique. C’est le comportement inverse des suites géométriques de raison comprise entre 0 et 1, dont les termes tendent vers 0."
    }
  ]);

  JK.quizDeLecon("maths-premiere-c7-l1", [
    {
      "enonce": "Que signifie l’écriture a ∈ E ?",
      "options": [
        "L’objet a est un élément de l’ensemble E",
        "a est une partie de l’ensemble E",
        "E est un élément de l’ensemble a",
        "a est égal à l’ensemble E"
      ],
      "correct": 0,
      "explication": "Le signe ∈ note l’appartenance d’un objet à un ensemble, c’est le vocabulaire d’appartenance que le programme demande expressément de connaître ; l’inclusion d’un sous-ensemble s’écrit elle avec ⊂. Le document précise qu’aucun développement théorique n’est fait sur la théorie des ensembles : l’approche passe par des jeux de cartes, des boules colorées ou numérotées et des tableaux à organiser."
    },
    {
      "enonce": "Que contient la réunion A ∪ B de deux ensembles ?",
      "options": [
        "Les éléments communs à A et à B",
        "Les éléments de A qui n’appartiennent pas à B",
        "Les éléments qui appartiennent à A, à B, ou aux deux à la fois",
        "Les éléments qui n’appartiennent ni à A ni à B"
      ],
      "correct": 2,
      "explication": "Dans une réunion on conserve tout ce qui se trouve dans au moins l’un des deux ensembles, le « ou » étant inclusif, ce qui donne l’union des deux collections sans double compte. L’intersection A ∩ B ne garde, elle, que les éléments communs ; la différence A privée de B ne garde que les éléments de A seuls."
    },
    {
      "enonce": "On considère E = {1 ; 2 ; 3} et F = {3 ; 4}. Que vaut l’intersection E ∩ F ?",
      "options": [
        "{1 ; 2}",
        "{1 ; 2 ; 3 ; 4}",
        "{4}",
        "{3}"
      ],
      "correct": 3,
      "explication": "L’intersection ne garde que les éléments présents dans les deux ensembles à la fois, ici le seul nombre 3 ; la réunion E ∪ F vaudrait de son côté {1 ; 2 ; 3 ; 4}. Une représentation par tableau ou par arbre, comme le suggère le document, fait immédiatement apparaître cet unique élément commun."
    }
  ]);

  JK.quizDeLecon("maths-premiere-c7-l2", [
    {
      "enonce": "Qu’appelle-t-on le cardinal d’un ensemble fini ?",
      "options": [
        "Le plus grand élément de cet ensemble",
        "Le nombre d’éléments de cet ensemble",
        "Le nombre de parties de cet ensemble",
        "La moyenne des éléments de cet ensemble"
      ],
      "correct": 1,
      "explication": "Le cardinal d’un ensemble fini est le nombre de ses éléments, notion que le programme veut faire manipuler par le dénombrement d’objets concrets plutôt que par une théorie. Le nombre de parties d’un ensemble à n éléments vaut 2ⁿ, ce qui est une question différente, et la moyenne ou le plus grand élément sont des calculs portant sur des nombres, pas sur un ensemble."
    },
    {
      "enonce": "Soient A = {a ; b ; c} et B = {1 ; 2}. Combien de couples ordonnés contient le produit cartésien A × B ?",
      "options": [
        "5",
        "3",
        "2",
        "6"
      ],
      "correct": 3,
      "explication": "Le cardinal d’un produit cartésien est le produit des cardinaux : 3 × 2 = 6 couples, obtenus en associant chaque élément de A à chacun des deux éléments de B. Ajouter les cardinaux, ce qui donne 5, est l’erreur classique ; le document demande précisément de connaître le cardinal de A × B comme opération sur les cardinaux."
    },
    {
      "enonce": "Dans un lycée de Thiès, 12 élèves pratiquent le football, 9 pratiquent le basketball et 4 pratiquent les deux sports. Combien d’élèves pratiquent au moins un de ces deux sports ?",
      "options": [
        "17",
        "21",
        "13",
        "25"
      ],
      "correct": 0,
      "explication": "On ajoute les deux effectifs puis on retire une fois les élèves comptés dans les deux groupes : 12 + 9 − 4 = 17. C’est l’opération sur les cardinaux que le programme met en avant, et 21 correspondrait à deux groupes sans aucun élève commun ; un tableau à double entrée ou un diagramme évite ici tout problème d’interprétation."
    }
  ]);

  JK.quizDeLecon("maths-premiere-c7-l3", [
    {
      "enonce": "Combien de 3-listes peut-on former avec les quatre lettres a, b, c et d, les répétitions étant admises ?",
      "options": [
        "12",
        "24",
        "64",
        "40"
      ],
      "correct": 2,
      "explication": "Une p-liste est une suite ordonnée de p éléments pris dans un ensemble, avec possibilité de répétition : les trois places se remplissent chacune de 4 façons, soit 4 × 4 × 4 = 64, ce que la formule card(Aᵖ) = card(A)ᵖ demandée par le programme résume. Sans répétition on ne trouverait plus que 4 × 3 × 2 = 24 listes."
    },
    {
      "enonce": "Un jury doit classer les deux premiers d’une promotion de 5 candidats. Combien de classements différents peut-il établir ?",
      "options": [
        "20",
        "10",
        "25",
        "120"
      ],
      "correct": 0,
      "explication": "Ici l’ordre compte et un même candidat ne peut pas occuper les deux places : le premier rang se choisit parmi 5, le second parmi les 4 restants, soit 5 × 4 = 20 arrangements. Ignorer l’ordre conduirait aux 10 combinaisons de deux candidats, et 5! = 120 classerait les cinq candidats les uns derrière les autres."
    },
    {
      "enonce": "Quatre personnes s’assoient sur quatre chaises alignées. Combien de dispositions différentes sont possibles ?",
      "options": [
        "16",
        "24",
        "12",
        "4"
      ],
      "correct": 1,
      "explication": "Il s’agit d’une permutation de 4 éléments distincts : 4 × 3 × 2 × 1 = 24, ce que la notation 4! demandée par le programme condense. La première personne a 4 choix, la suivante 3, puis 2 et 1 ; une liste de longueur 4 avec répétitions aurait donné 4⁴ = 256 dispositions, ce qui n’a pas de sens ici."
    }
  ]);

  JK.quizDeLecon("maths-premiere-c7-l4", [
    {
      "enonce": "Une urne contient 5 boules numérotées. Combien de tirages simultanés de 2 boules peut-on obtenir ?",
      "options": [
        "20",
        "25",
        "5",
        "10"
      ],
      "correct": 3,
      "explication": "Un tirage simultané ne dépend pas de l’ordre dans lequel les boules sortent : chaque paire est comptée deux fois dans 5 × 4 = 20 tirages successifs ordonnés, d’où (5 × 4) ÷ 2 = 10 combinaisons de 2 boules parmi 5. Le nombre 25 correspondrait, lui, à des tirages successifs avec remise."
    },
    {
      "enonce": "Pour choisir 6 élèves parmi 8, la propriété de symétrie des combinaisons renvoie à un calcul plus simple. Lequel ?",
      "options": [
        "Choisir 8 élèves parmi 6",
        "Choisir 2 élèves parmi 8",
        "Choisir 6 élèves parmi 2",
        "Choisir 16 élèves parmi 8"
      ],
      "correct": 1,
      "explication": "Désigner 6 élèves revient à laisser 2 élèves de côté, donc choisir 6 parmi 8 revient à choisir 2 parmi 8 : (8 × 7) ÷ 2 = 28, la même valeur que le calcul direct. C’est la propriété de symétrie attendue par le programme, et un ensemble de 6 éléments ne peut pas être choisi parmi un ensemble de 2."
    },
    {
      "enonce": "Dans le développement de (a + b)³ par la formule du binôme de Newton, quel est le coefficient du terme a²b ?",
      "options": [
        "1",
        "4",
        "3",
        "6"
      ],
      "correct": 2,
      "explication": "Le développement donne a³ + 3a²b + 3ab² + b³ : le coefficient 3 compte le nombre de façons de choisir le facteur qui fournira b parmi les trois facteurs, et la ligne du triangle de Pascal 1, 3, 3, 1 le retrouve. Les coefficients 1 encadrent le développement, et 6 appartient à une autre ligne du triangle."
    }
  ]);

  JK.quizDeLecon("maths-premiere-c8-l1", [
    {
      "enonce": "Dans une série statistique à une variable, qu’appelle-t-on l’effectif d’une valeur ?",
      "options": [
        "Le nombre de fois que cette valeur apparaît dans la série",
        "La proportion que cette valeur représente dans la série",
        "L’écart entre la plus grande et la plus petite valeur observée",
        "La valeur centrale de l’intervalle qui regroupe les données"
      ],
      "correct": 0,
      "explication": "L’effectif est un décompte : il indique combien d’individus prennent cette valeur. La proportion correspond à la fréquence, l’écart entre les deux valeurs extrêmes à l’étendue, et le milieu de l’intervalle au centre de classe. Le document demande ici de faire fonctionner les acquis de seconde sur des situations réelles empruntées à d’autres disciplines, sans reprendre le cours."
    },
    {
      "enonce": "À Thiès, une enquête suivie durant l’année porte sur 40 élèves, dont 14 viennent en classe à pied. Quelle est la fréquence de ce mode de déplacement ?",
      "options": [
        "0,14",
        "2,86",
        "0,35",
        "1,4"
      ],
      "correct": 2,
      "explication": "La fréquence est le quotient de l’effectif partiel par l’effectif total : 14 ÷ 40 = 0,35, soit 35 % des élèves enquêtés. La somme des fréquences d’une série vaut toujours 1, et 2,86 provient de la division inverse 40 ÷ 14, qui ne peut pas être une fréquence puisqu’elle dépasse 1."
    },
    {
      "enonce": "Que désigne une série statistique classée « d’inégales amplitudes » ?",
      "options": [
        "Une série dont toutes les valeurs observées sont différentes",
        "Une série dont les classes n’ont pas toutes la même largeur",
        "Une série dont tous les effectifs sont égaux",
        "Une série qui ne possède pas de valeur extrême"
      ],
      "correct": 1,
      "explication": "L’amplitude d’une classe est l’écart entre ses deux bornes ; une série est classée d’inégales amplitudes lorsque ces largeurs varient d’une classe à l’autre, et c’est un des contenus de cette leçon. Un regroupement de ce type se rencontre par exemple quand on rassemble des âges ou des durées en tranches inégales plutôt qu’en intervalles tous pareils."
    }
  ]);

  JK.quizDeLecon("maths-premiere-c8-l2", [
    {
      "enonce": "Que représente-t-on par un nuage de points ?",
      "options": [
        "Une série à une variable déjà regroupée en classes",
        "Une série à deux variables, chaque observation donnant un point de coordonnées (x ; y)",
        "La courbe représentative d’une fonction dérivable",
        "Le diagramme en barres des effectifs d’une série qualitative"
      ],
      "correct": 1,
      "explication": "Pour une série à deux variables, chaque observation fournit deux nombres et se place comme un point du plan : c’est la représentation que le programme demande de savoir tracer. Barres et classes relèvent de la série à une variable, et un nuage n’est pas une courbe, les points n’étant pas reliés entre eux."
    },
    {
      "enonce": "Trois observations donnent les points de coordonnées (1 ; 2), (3 ; 4) et (5 ; 9). Quelles sont les coordonnées du point moyen ?",
      "options": [
        "(2 ; 4)",
        "(3 ; 9)",
        "(4 ; 5)",
        "(3 ; 5)"
      ],
      "correct": 3,
      "explication": "Le point moyen a pour coordonnées les moyennes des deux listes de valeurs : (1 + 3 + 5) ÷ 3 = 3 en abscisse et (2 + 4 + 9) ÷ 3 = 15 ÷ 3 = 5 en ordonnée. Le calcul des coordonnées de ce point est une compétence exigible, et il sert ensuite de repère pour tracer la droite d’ajustement."
    },
    {
      "enonce": "Par quelle méthode le programme de Premières S2 et S4 propose-t-il de déterminer la droite d’ajustement affine d’un nuage de points ?",
      "options": [
        "Par un tracé à main levée ou par la méthode de Mayer",
        "Par la méthode des moindres carrés",
        "Par la méthode du pivot de Gauss",
        "Par la formule du binôme de Newton"
      ],
      "correct": 0,
      "explication": "Le document met la droite d’ajustement tracée à main levée et celle obtenue par la méthode de Mayer parmi les compétences, et il écarte expressément la méthode des moindres carrés du programme de Premières S2 et S4. Le pivot de Gauss concerne la résolution de systèmes d’équations linéaires et le binôme de Newton le dénombrement."
    }
  ]);

  JK.quizDeLecon("maths-premiere-c9-l1", [
    {
      "enonce": "Soit f une application de A dans B et B’ une partie de B. Que désigne l’image réciproque de B’ ?",
      "options": [
        "L’ensemble des éléments de B qui ont une image dans A",
        "La partie de B formée par les valeurs effectivement prises par f",
        "L’ensemble des éléments de A dont l’image appartient à B’",
        "L’ensemble des couples (x ; f(x)) représentés dans le plan"
      ],
      "correct": 2,
      "explication": "L’image réciproque de B’ rassemble les éléments de départ dont l’image tombe dans B’ : un élément x y appartient si et seulement si f(x) appartient à B’. L’ensemble des valeurs effectivement prises par f est l’image directe de A, et les couples (x ; f(x)) forment le graphe de f. Le programme demande de déterminer graphiquement ces deux images pour une partie d’un ensemble."
    },
    {
      "enonce": "Quelle application de ℝ dans ℝ n’est pas injective ?",
      "options": [
        "x ↦ x²",
        "x ↦ 2x + 1",
        "x ↦ x³",
        "x ↦ x ÷ 3"
      ],
      "correct": 0,
      "explication": "Être injective, c’est envoyer deux éléments distincts sur deux images distinctes ; or 2² et (−2)² valent tous deux 4, donc deux réels différents ont la même image. Avec 2x + 1, x³ ou x ÷ 3, l’égalité des images force l’égalité des départs : ces applications-là sont injectives, et le programme demande de les reconnaître aussi sur un graphe."
    },
    {
      "enonce": "Qu’appelle-t-on la restriction d’une application f définie sur A à une partie A’ de A ?",
      "options": [
        "La même application, mais avec A’ comme ensemble d’arrivée",
        "L’application qui envoie chaque élément de A’ sur lui-même",
        "La partie du graphe de f située au-dessus de A’",
        "L’application définie par la même règle, mais dont l’ensemble de départ est A’"
      ],
      "correct": 3,
      "explication": "Restreindre f à A’, c’est conserver la règle qui associe f(x) à x et changer seulement l’ensemble de départ, qui devient A’ ; l’ensemble d’arrivée reste le même et les éléments hors de A’ ne sont plus interrogés. Le programme place « déterminer et reconnaître la restriction d’une application » dans les compétences de ce chapitre, dont l’introduction générale conseille de commencer l’année."
    }
  ]);
})();
