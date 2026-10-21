/* Quiz de mathématiques de 3e (Jàngalekat) — une leçon = un quiz = 3 questions.
   Les intitulés et l’ordre des leçons suivent le Programme de Mathématiques du Premier Cycle,
   classe de Troisième, année 2006 (MEN / IGEN / Commission nationale des programmes), complété
   par le Guide d’usage des programmes – Mathématiques, classe de 3e (DEMSG, septembre 2012),
   chapitres Activités numériques puis Activités géométriques. Les énoncés, options et explications
   sont des contenus de démonstration rédigés par un modèle : ils reprennent les notions et les
   objectifs du document officiel, mais aucun n’a été relu par un enseignant.
   Ils ne sont ni un sujet officiel ni une évaluation de référence. */
(function () {
  'use strict';

  JK.quizDeLecon('maths-3e-c1-l1', [
    {
      enonce: 'Que nomme-t-on la racine carrée d’un nombre positif ou nul a ?',
      options: [
        'Le nombre positif ou nul dont le carré donne a',
        'Le nombre obtenu en divisant a par 2',
        'Le nombre négatif dont le carré donne a',
        'Le carré de a'
      ],
      correct: 0,
      explication: 'La racine carrée de a est par définition le nombre positif ou nul qui, multiplié par lui-même, redonne a : celle de 25 est 5 car 5 × 5 = 25. Un nombre négatif comme −5 a bien son carré égal à 25, mais une racine carrée est toujours positive ou nulle.'
    },
    {
      enonce: 'Que vaut √36 + √64 ?',
      options: ['100', '14', '10', '20'],
      correct: 1,
      explication: 'On calcule chaque racine séparément : √36 = 6 et √64 = 8, donc la somme vaut 14. Le résultat 10 correspond au piège classique qui additionne sous le radical, √(36 + 64) = √100 = 10 : la racine carrée d’une somme n’est pas la somme des racines.'
    },
    {
      enonce: 'Que vaut √((−5)²) ?',
      options: ['−5', '25', '5', '−25'],
      correct: 2,
      explication: 'Le carré de −5 vaut 25 et la racine carrée de 25 est 5 : le programme écrivait justement √(a²) = |a|, la racine du carré est la valeur absolue. Retenir −5 est la confusion fréquente entre la racine et le nombre de départ.'
    }
  ]);

  JK.quizDeLecon('maths-3e-c1-l2', [
    {
      enonce: 'Un taxi-moto à Dakar demande 300 francs CFA au départ, puis 200 francs CFA par kilomètre parcouru. Quelle expression donne le prix en fonction de x kilomètres ?',
      options: ['500x', '200x', '300x', '300 + 200x'],
      correct: 3,
      explication: 'Le montant fixe de 300 francs CFA s’ajoute au tarif proportionnel à la distance : le prix vaut 300 + 200x, la forme x ↦ ax + b d’une application affine avec un terme constant non nul. Additionner 300 et 200 pour obtenir 500x est l’erreur classique : elle efface la différence entre la partie fixe et la partie qui dépend de la distance.'
    },
    {
      enonce: 'Pour l’application affine f définie par f(x) = 2x + 3, que vaut l’image de 5 ?',
      options: ['13', '25', '10', '8'],
      correct: 0,
      explication: 'L’image de 5 se calcule en remplaçant x par 5 : 2 × 5 + 3 = 13. On obtient 25 en calculant (2 + 3) × 5, 10 en oubliant le terme constant 3, et 8 en ajoutant 5 et 3 sans multiplier par le coefficient 2.'
    },
    {
      enonce: 'À Thiès, une livraison coûte 1 000 francs CFA pour un colis jusqu’à 5 kilogrammes, puis 1 500 francs CFA de 5 à 10 kilogrammes. Quel type de fonction décrit ce tarif en fonction du poids ?',
      options: [
        'Une application linéaire',
        'Une application constante par intervalles',
        'Une situation de proportionnalité',
        'Une équation du premier degré'
      ],
      correct: 1,
      explication: 'Le prix ne bouge pas quand le poids varie à l’intérieur d’un même intervalle : il vaut 1 000 puis 1 500 francs CFA, cas de l’application constante par intervalles que le programme fait étudier sur des exemples simples. Une application linéaire ferait croître le prix proportionnellement au poids, ce qui n’est pas le cas ici.'
    }
  ]);

  JK.quizDeLecon('maths-3e-c1-l3', [
    {
      enonce: 'Quelles sont les solutions dans l’ensemble des réels de l’équation |2x − 3| = 5 ?',
      options: ['4 uniquement', '−1 uniquement', '4 et −1', '2 et 5'],
      correct: 2,
      explication: 'Une équation du type |ax + b| = c se dédouble en 2x − 3 = 5 puis 2x − 3 = −5, d’où x = 4 et x = −1. On vérifie : |2 × 4 − 3| = |5| = 5 et |2 × (−1) − 3| = |−5| = 5. Ne retenir qu’une seule valeur, c’est oublier la seconde équation issue de la valeur absolue.'
    },
    {
      enonce: 'Résoudre dans l’ensemble des réels l’équation x² − 7 = 0 donne quelles solutions ?',
      options: ['√7 uniquement', '7 et −7', '49 et −49', '√7 et −√7'],
      correct: 3,
      explication: 'L’équation s’écrit x² = 7 : un nombre positif possède deux racines opposées, donc les solutions sont √7 et −√7. Ne garder que √7 est l’oubli classique de la solution négative, et retenir 7 et −7 revient à confondre le carré recherché avec sa racine.'
    },
    {
      enonce: 'Résoudre dans l’ensemble des réels l’inéquation −2x + 1 > 5 donne quel ensemble de solutions ?',
      options: ['x < −2', 'x > −2', 'x < 2', 'x > 2'],
      correct: 0,
      explication: 'On isole x : −2x > 4, puis la division par le nombre négatif −2 change le sens de l’inégalité, d’où x < −2. Tester x = −3 le confirme : −2 × (−3) + 1 = 7, bien supérieur à 5. Oublier d’inverser le signe est l’erreur la plus fréquente sur ce type.'
    }
  ]);

  JK.quizDeLecon('maths-3e-c1-l4', [
    {
      enonce: 'Dans un repère du plan, que représente l’ensemble des couples solutions de l’équation du premier degré 2x + 3y − 6 = 0 ?',
      options: ['Un couple unique de réels', 'Une droite du plan', 'Aucune figure', 'Un demi-plan'],
      correct: 1,
      explication: 'Une équation du premier degré à deux inconnues du type ax + by + c = 0 possède une infinité de couples solutions, tous placés sur une même droite : c’est la résolution graphique demandée par le programme. Le demi-plan, lui, correspond à une inéquation, pas à une équation.'
    },
    {
      enonce: 'Au marché de Sandaga, un élève achète des stylos à 200 francs CFA et des cahiers à 500 francs CFA. Il prend 10 articles pour 3 200 francs CFA. Combien d’articles de chaque sorte ?',
      options: ['4 stylos et 6 cahiers', '5 stylos et 5 cahiers', '6 stylos et 4 cahiers', '7 stylos et 3 cahiers'],
      correct: 2,
      explication: 'Avec x stylos et y cahiers : x + y = 10 et 2x + 5y = 32 en centaines de francs CFA. En doublant la première équation puis en la retirant de la seconde, il reste 3y = 12, donc y = 4 et x = 6. On vérifie : 6 × 200 + 4 × 500 = 1 200 + 2 000 = 3 200. Inverser les deux inconnues est la confusion classique entre stylos et cahiers.'
    },
    {
      enonce: 'Dans un système de deux équations du premier degré à deux inconnues, que se passe-t-il si les deux droites représentées sont strictement parallèles ?',
      options: [
        'Le système a une solution unique',
        'Le système a une infinité de solutions',
        'Le système a exactement deux solutions',
        'Le système n’a pas de solution'
      ],
      correct: 3,
      explication: 'Deux droites parallèles strictes n’ont aucun point commun : aucun couple ne satisfait les deux équations en même temps, le système n’a pas de solution. L’interprétation graphique du programme distingue ce cas des droites sécantes, qui donnent une solution unique, et des droites confondues, qui en donnent une infinité.'
    }
  ]);

  JK.quizDeLecon('maths-3e-c1-l5', [
    {
      enonce: 'Dans un repère du plan, que représente l’ensemble des solutions de l’inéquation à deux inconnues ax + by + c ≤ 0 ?',
      options: [
        'Une moitié du plan délimitée par la droite ax + by + c = 0',
        'La droite ax + by + c = 0 uniquement',
        'Un disque centré sur l’origine',
        'Le couple (0 ; 0) seulement'
      ],
      correct: 0,
      explication: 'Le programme résout ces inéquations par régionnement du plan : la droite d’équation ax + by + c = 0 sert de frontière et partage le plan en deux régions ; avec le symbole ≤, la frontière est comprise dans les solutions. Un couple isolé se vérifie simplement en le substituant dans l’inéquation.'
    },
    {
      enonce: 'Parmi ces couples de réels, lequel est solution de l’inéquation 3x + 4y ≤ 10 ?',
      options: ['(4 ; 1)', '(2 ; 1)', '(1 ; 2)', '(0 ; 3)'],
      correct: 1,
      explication: 'En substituant chaque couple : (2 ; 1) donne 3 × 2 + 4 × 1 = 10, et 10 ≤ 10 est vrai ; les autres couples donnent 16, 11 et 12, tous strictement supérieurs à 10. Le signe large ≤ accepte la valeur limite, détail que les élèves manquent souvent.'
    },
    {
      enonce: 'Un maraîcher de Casamance veut planter x pieds de manguiers et y pieds d’orangers, avec au plus 30 arbres au total. Quelle inéquation exprime cette contrainte ?',
      options: ['x + y ≥ 30', 'x + y = 30', 'x + y ≤ 30', 'x × y ≤ 30'],
      correct: 2,
      explication: '« Au plus 30 » signifie que le nombre total d’arbres ne dépasse pas 30 : on écrit donc x + y ≤ 30, une inéquation à deux inconnues que l’on résout graphiquement par régionnement, en gardant x et y positifs. Le symbole ≥ inverserait la contrainte et ne mettrait plus aucune borne.'
    }
  ]);

  JK.quizDeLecon('maths-3e-c1-l6', [
    {
      enonce: 'Dans un tableau de données regroupées en classes, qu’est-ce que le centre d’une classe ?',
      options: [
        'Son amplitude',
        'Sa fréquence',
        'Son effectif',
        'La valeur située à égale distance des deux bornes de la classe'
      ],
      correct: 3,
      explication: 'Le centre de classe se place pile entre les deux bornes : pour la classe de 10 à 20, il vaut 15, la moyenne des deux bornes. L’amplitude est l’écart entre les bornes, autre mot du vocabulaire que le programme exige de manier, avec effectifs et fréquences cumulées.'
    },
    {
      enonce: 'Dans une série statistique groupée en classes, comment appelle-t-on la classe qui possède le plus grand effectif ?',
      options: ['La classe modale', 'La médiane', 'La moyenne', 'L’amplitude'],
      correct: 0,
      explication: 'La classe qui rassemble le plus d’observations est la classe modale ; déterminer la moyenne et la classe modale fait partie des compétences exigibles de la leçon. La médiane, elle, coupe la série en deux parties d’effectifs égaux et ne cherche pas le plus grand effectif.'
    },
    {
      enonce: 'Dans une classe de 3e à Thiès, cinq élèves ont obtenu les notes 12, 14, 9, 15 et 10 sur 20. Que vaut la moyenne de ces cinq notes ?',
      options: ['11', '12', '13', '10'],
      correct: 1,
      explication: 'On additionne les notes puis on divise par l’effectif total : 12 + 14 + 9 + 15 + 10 = 60, et 60 ÷ 5 = 12. Oublier une note dans la somme ou diviser par un effectif erroné sont les deux fautes classiques de ce calcul.'
    }
  ]);

  JK.quizDeLecon('maths-3e-c2-l1', [
    {
      enonce: 'Dans le triangle ABC, M est un point de (AB), N un point de (AC) et (MN) est parallèle à (BC). Quelle proportionnalité le théorème de Thalès donne-t-il ?',
      options: ['AM/AB = AN/NC', 'AB/MN = AC/AN', 'AM/AB = AN/AC = MN/BC', 'AM/MB = AB/AC'],
      correct: 2,
      explication: 'Le théorème direct donne AM/AB = AN/AC, et la conséquence du programme étend l’égalité au rapport MN/BC des deux bases : les côtés des deux triangles sont proportionnels. Écrire AN/NC mélange une portion de (AC) avec un côté entier, ce qui casse la proportionnalité des côtés correspondants.'
    },
    {
      enonce: 'Dans le triangle ABC, les points A, M, B d’une part et A, N, C d’autre part sont alignés dans le même ordre, et AM/AB = AN/AC. Que peut-on affirmer ?',
      options: [
        'Les droites (MN) et (BC) sont perpendiculaires',
        'Les droites (MN) et (BC) sont sécantes',
        'M est le milieu du segment [AB]',
        'Les droites (MN) et (BC) sont parallèles'
      ],
      correct: 3,
      explication: 'C’est la réciproque du théorème de Thalès : l’égalité des rapports, avec les points placés dans le même ordre, force le parallélisme de (MN) et (BC). Le programme l’emploie précisément pour justifier que deux droites sont parallèles, d’où l’importance de vérifier l’ordre des points.'
    },
    {
      enonce: 'Dans le triangle ABC, (MN) est parallèle à (BC) avec M sur [AB] et N sur [AC] ; on a AB = 9 cm, AC = 6 cm et AM = 3 cm. Que vaut AN ?',
      options: ['2 cm', '4 cm', '3 cm', '1,5 cm'],
      correct: 0,
      explication: 'Le rapport AM/AB = AN/AC donne AN = 6 × 3 ÷ 9 = 2 cm. Trouver 4 cm, c’est utiliser MB = 6 à la place de AM = 3 dans le calcul, l’erreur de segment la plus fréquente ; 3 cm revient à confondre AN avec AM.'
    }
  ]);

  JK.quizDeLecon('maths-3e-c2-l2', [
    {
      enonce: 'Dans un triangle rectangle, le cosinus d’un angle aigu est égal à quel rapport ?',
      options: [
        'Le côté opposé sur l’hypoténuse',
        'Le côté adjacent sur l’hypoténuse',
        'L’hypoténuse sur le côté adjacent',
        'Le côté opposé sur le côté adjacent'
      ],
      correct: 1,
      explication: 'Le cosinus d’un angle aigu est le rapport de la longueur du côté adjacent à celle de l’hypoténuse. Le rapport côté opposé sur hypoténuse définit le sinus, et côté opposé sur côté adjacent définit la tangente : le programme demande de ne pas inverser ces trois définitions.'
    },
    {
      enonce: 'Dans un triangle rectangle, l’hypoténuse mesure 10 cm et le côté adjacent à un angle aigu α mesure 6 cm. Que vaut cos α ?',
      options: ['0,8', '0,75', '0,6', '1,67'],
      correct: 2,
      explication: 'Cosinus = adjacent sur hypoténuse = 6 ÷ 10 = 0,6. La valeur 0,8 correspond au sinus du même angle, car le côté opposé mesure 8 cm d’après le théorème de Pythagore ; 1,67 est l’inverse de 0,6 et ne peut pas convenir, le guide d’usage rappelant que cosinus et sinus d’un angle aigu sont compris entre 0 et 1.'
    },
    {
      enonce: 'Que vaut le sinus de l’angle de 30 degrés ?',
      options: ['√3/2', '√2/2', '1', '1/2'],
      correct: 3,
      explication: 'Le programme demande de connaître les valeurs exactes du sinus, du cosinus et de la tangente pour 30, 45 et 60 degrés : sin 30° = 1/2. On la retrouve par la relation des angles complémentaires, sin 30° = cos 60° ; √3/2 est cos 30° et √2/2 correspond aux angles de 45 degrés.'
    }
  ]);

  JK.quizDeLecon('maths-3e-c2-l3', [
    {
      enonce: 'Dans quel cas dit-on qu’un angle est un angle inscrit ?',
      options: [
        'Quand son sommet est sur le cercle et que ses côtés sont des cordes de ce cercle',
        'Quand son sommet est au centre du cercle',
        'Quand l’angle est droit',
        'Quand ses côtés sont tangents au cercle'
      ],
      correct: 0,
      explication: 'L’angle inscrit se reconnaît à son sommet posé sur le cercle et à ses deux côtés qui sont des cordes ; un angle dont le sommet est au centre est un angle au centre, autre configuration que le programme demande de distinguer. Un angle droit inscrit n’est qu’un cas particulier, pas la définition.'
    },
    {
      enonce: 'Un angle au centre et un angle inscrit interceptent le même arc ; l’angle au centre mesure 100 degrés. Que mesure l’angle inscrit ?',
      options: ['200 degrés', '50 degrés', '100 degrés', '80 degrés'],
      correct: 1,
      explication: 'Le guide d’usage énonce la relation attendue : l’angle au centre est le double de l’angle inscrit interceptant le même arc, donc l’angle inscrit mesure 100 ÷ 2 = 50 degrés. Multiplier par 2 au lieu de diviser, c’est inverser les deux rôles.'
    },
    {
      enonce: 'Que peut-on dire de deux angles inscrits qui interceptent le même arc ?',
      options: [
        'Ils sont supplémentaires',
        'Ils sont complémentaires',
        'Ils sont égaux',
        'Ils ont des mesures différentes'
      ],
      correct: 2,
      explication: 'Les angles inscrits interceptant le même arc sont égaux, propriété que le programme utilise pour justifier une égalité d’angles ou déterminer une mesure sans calculer. Le cas particulier où un côté de l’angle inscrit est un diamètre donne un angle droit, application directe de la relation avec l’angle au centre de 180 degrés.'
    }
  ]);

  JK.quizDeLecon('maths-3e-c2-l4', [
    {
      enonce: 'A, B et C étant trois points quelconques du plan, que donne la somme AB + BC des deux vecteurs ?',
      options: ['CA', 'CB', '0', 'AC'],
      correct: 3,
      explication: 'La relation de Chasles s’écrit AB + BC = AC : partir de A puis aller de B en C revient à aller directement de A en C. Écrire CB, c’est changer le point de départ du trajet, et prétendre que la somme est nulle reviendrait à exiger un retour au point de départ.'
    },
    {
      enonce: 'Deux vecteurs sont dits colinéaires dans quel cas ?',
      options: [
        'S’ils sont tous deux de même direction, ou si l’un d’eux est nul',
        'S’ils ont la même longueur',
        'S’ils ont le même point de départ',
        'Si leur somme est le vecteur nul'
      ],
      correct: 0,
      explication: 'La définition du programme est nette : deux vecteurs sont colinéaires s’ils sont de même direction, ou si l’un d’eux est le vecteur nul. Une même longueur ne suffit pas, et deux vecteurs opposés comme u et −u sont colinéaires bien qu’ils partagent seulement la direction.'
    },
    {
      enonce: 'u étant un vecteur donné, que vaut la combinaison 2u − 3u ?',
      options: ['u', '−u', '5u', '−5u'],
      correct: 1,
      explication: 'On utilise la propriété (k + k’)u = ku + k’u : 2u − 3u = (2 − 3)u = −u, un vecteur de même direction que u mais de sens opposé. Obtenir −5u vient d’une erreur de signe dans la somme des coefficients, et 5u correspond à calculer 2u + 3u.'
    }
  ]);

  JK.quizDeLecon('maths-3e-c2-l5', [
    {
      enonce: 'Que donne la composée de deux symétries orthogonales successives par rapport à deux droites parallèles ?',
      options: ['Une rotation', 'Une symétrie orthogonale', 'Une translation', 'Une projection orthogonale'],
      correct: 2,
      explication: 'Le programme étudie ce cas en premier : deux symétries orthogonales d’axes parallèles produisent une translation, de direction perpendiculaire aux deux axes. C’est la raison pour laquelle les vecteurs sont vus juste avant les transformations du plan.'
    },
    {
      enonce: 'Que donne la composée de deux symétries orthogonales successives par rapport à deux droites perpendiculaires ?',
      options: [
        'Une translation',
        'Une rotation de 90 degrés',
        'Une symétrie orthogonale',
        'Une symétrie centrale'
      ],
      correct: 3,
      explication: 'Deux axes perpendiculaires produisent une symétrie centrale de centre le point d’intersection des droites, c’est-à-dire une rotation de 180 degrés. Avec des axes sécants non perpendiculaires, la composée serait une rotation, mais d’un angle double de celui des axes, et non de 90 degrés.'
    },
    {
      enonce: 'Que donne la composée de deux translations successives ?',
      options: ['Une rotation', 'Une translation', 'Une symétrie orthogonale', 'Une symétrie centrale'],
      correct: 1,
      explication: 'Enchaîner deux translations revient à une seule translation, celle associée au vecteur somme des deux vecteurs donnés ; c’est là que l’addition vectorielle du chapitre précédent prend tout son sens. Une rotation ou une symétrie change un point en un autre de façon circulaire, ce que deux translations ne font pas.'
    }
  ]);

  JK.quizDeLecon('maths-3e-c2-l6', [
    {
      enonce: 'Dans un repère orthonormal, le point A a pour coordonnées (1 ; 2) et le point B (4 ; 6). Que sont les coordonnées du vecteur AB ?',
      options: ['(4 ; 6)', '(3 ; 4)', '(5 ; 8)', '(−3 ; −4)'],
      correct: 1,
      explication: 'Les coordonnées d’un vecteur se calculent en retranchant celles de l’origine de celles de l’extrémité : (4 − 1 ; 6 − 2) = (3 ; 4). Additionner les coordonnées donne (5 ; 8), et inverser l’ordre du départ et de l’arrivée conduit au vecteur BA, noté (−3 ; −4).'
    },
    {
      enonce: 'Dans un repère orthonormal, que vaut la distance entre les points A (1 ; 1) et B (4 ; 5) ?',
      options: ['7', '9', '5', '√7'],
      correct: 2,
      explication: 'La distance s’obtient par √((4 − 1)² + (5 − 1)²) = √(9 + 16) = √25 = 5. Le nombre 7 vient de l’addition des écarts 3 et 4 sans mise au carré, et 9 de l’oubli de la racine carrée ; la formule n’est valable que dans un repère orthonormal, précision que le programme rappelle avec insistance.'
    },
    {
      enonce: 'Dans l’équation réduite y = mx + p d’une droite, que désigne le nombre m ?',
      options: [
        'Le coefficient directeur',
        'L’ordonnée à l’origine',
        'L’abscisse d’un point de la droite',
        'La distance de la droite à l’origine'
      ],
      correct: 0,
      explication: 'm est le coefficient directeur, qui règle l’inclinaison de la droite, et p est l’ordonnée à l’origine, le point où la droite coupe l’axe des ordonnées. Le programme demande de passer de l’équation réduite y = mx + p à l’équation générale ax + by + c = 0 et inversement, et de reconnaître deux droites parallèles grâce à leurs coefficients directeurs.'
    }
  ]);

  JK.quizDeLecon('maths-3e-c2-l7', [
    {
      enonce: 'On multiplie toutes les longueurs d’une pyramide par 2. Par combien son volume est-il multiplié ?',
      options: ['2', '4', '6', '8'],
      correct: 3,
      explication: 'Le programme met en évidence la règle de l’agrandissement : multiplier les longueurs par k multiplie le volume par k au cube, donc ici 2 × 2 × 2 = 8. Le facteur 4 correspond à l’aire, multipliée par k au carré, autre point souligné par la même leçon.'
    },
    {
      enonce: 'Une pyramide est coupée par un plan parallèle à sa base. Que figure la section obtenue ?',
      options: [
        'Une réduction de la base',
        'Un agrandissement de la base',
        'Toujours un disque',
        'Un carré quelle que soit la base'
      ],
      correct: 0,
      explication: 'La section d’une pyramide par un plan parallèle à la base a la même forme que la base mais en plus petit : c’est une réduction, et le théorème de Thalès fournit le rapport de réduction. Le disque appartient au cône de révolution, solide voisin à ne pas confondre avec la pyramide.'
    },
    {
      enonce: 'Que vaut le volume d’un cône de révolution dont l’aire de la base est de 12 centimètres carrés et la hauteur de 9 centimètres ?',
      options: ['108 cm³', '54 cm³', '36 cm³', '21 cm³'],
      correct: 2,
      explication: 'Le volume d’un cône de révolution se calcule comme celui d’une pyramide : aire de la base multipliée par la hauteur, puis divisée par 3, soit 12 × 9 ÷ 3 = 36 cm³. Le résultat 108 cm³ correspond au cylindre de même base et même hauteur, erreur de ceux qui oublient le tiers.'
    }
  ]);
})();
