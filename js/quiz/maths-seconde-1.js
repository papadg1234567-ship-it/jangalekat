/* Quiz de Mathématiques Seconde (Jàngalekat) — une leçon = trois questions.
   Tranche couverte : géométrie plane, chapitres I à V du programme (maths-seconde-c1-l1 à
   maths-seconde-c5-l1), soit 13 leçons et 39 questions. Les autres leçons de la classe sont dans
   un autre fichier.
   Les intitulés et l’ordre des leçons viennent du programme officiel sénégalais de mathématiques
   du second cycle, série S : Programmes de mathématiques du second cycle — Seconde S, MEN / APAMS,
   octobre 2006 (PDF), colonne « Contenus », complété par les commentaires et les compétences
   exigibles du même document. Le Guide d’usage des programmes – Mathématiques (DEMSG,
   septembre 2012) ne traite que le premier cycle : il n’a donc servi à rien ici.
   Réserves reprises du registre js/programmes/maths.js : le titre « 1) Consolidation » revient
   deux fois dans le document, une fois au chapitre I de la géométrie plane et une fois en
   statistique — les deux leçons ne portent pas du tout le même contenu ; et le programme ne
   prescrit aucun ordre annuel pour le lycée, il laisse au professeur « la meilleure répartition
   horaire » : l’ordre des leçons ci-dessous est celui du papier, pas celui d’une année scolaire.
   Les énoncés, options et explications sont des contenus de démonstration rédigés par un modèle :
   ils reprennent les notions du programme détaillé, mais aucun n’a été relu par un enseignant.
   Ils ne sont ni un sujet officiel ni une évaluation de référence. */
(function () {
  'use strict';

  JK.quizDeLecon('maths-seconde-c1-l1', [
    {
      enonce: 'A, B et C étant trois points du plan, que donne la somme des deux vecteurs AB + BC ?',
      options: [
        'AC',
        'CA',
        'CB',
        '0'
      ],
      correct: 0,
      explication: 'C’est la relation de Chasles, que le programme met au nombre des acquis à consolider : AB + BC = AC, parce que le trajet de A vers B puis de B vers C revient au trajet direct de A vers C. Écrire CA change le point de départ, et écrire 0 supposerait un retour au point de départ.'
    },
    {
      enonce: 'Pour démontrer, avec l’outil vectoriel, que trois points A, B et C sont alignés, que montre-t-on sur les vecteurs AB et AC ?',
      options: [
        'qu’ils ont la même longueur',
        'qu’ils sont opposés',
        'qu’ils sont colinéaires',
        'que leur somme est nulle'
      ],
      correct: 2,
      explication: 'Deux vecteurs colinéaires ont la même direction ; comme AB et AC partagent le point A, les points A, B et C sont alors alignés. Le programme range précisément la démonstration de l’alignement parmi les utilisations de l’outil vectoriel. Une même longueur ne dit rien de la direction, et deux vecteurs opposés ou de somme nulle se retrouvent en des points distincts.'
    },
    {
      enonce: 'Le programme demande de passer d’une relation vectorielle à une relation entre longueurs. Si AC = 3 AB, que retrouve-t-on sur les longueurs AC et AB ?',
      options: [
        'AC = AB ÷ 3',
        'AC = 3 × AB',
        'AB = 3 × AC',
        'AC = AB + 3'
      ],
      correct: 1,
      explication: 'Le vecteur AC est trois fois le vecteur AB : il a même direction, même sens, et une longueur trois fois plus grande, d’où AC = 3 × AB. Inverser les deux longueurs, diviser au lieu de multiplier, ou ajouter le coefficient sont les trois confusions classiques entre écriture vectorielle et écriture algébrique.'
    }
  ]);

  JK.quizDeLecon('maths-seconde-c1-l2', [
    {
      enonce: 'Le point G est le barycentre du point A affecté du coefficient a et du point B affecté du coefficient b, avec a + b non nul. Quelle relation vectorielle le caractérise ?',
      options: [
        'a GA + b GB = AB',
        'a GA + b GB = 0',
        'GA + GB = 0',
        'a GA − b GB = 0'
      ],
      correct: 1,
      explication: 'Le barycentre s’écrit comme une combinaison linéaire de vecteurs dont la somme des coefficients n’est pas nulle : a GA + b GB = 0, ce qui donne GA = −b ÷ (a + b) × AB. Oublier les coefficients ne décrit que le milieu de [AB] ; les écrire en sens contraire placerait G hors du segment.'
    },
    {
      enonce: 'G étant le barycentre de A affecté de 2 et de B affecté de 3, que devient la somme vectorielle V = 2 MA + 3 MB, où M est un point du plan ?',
      options: [
        'V = 6 MG',
        'V = MG',
        'V = 5 GM',
        'V = 5 MG'
      ],
      correct: 3,
      explication: 'Le programme demande explicitement la réduction de ce type de somme : 2 MA + 3 MB = (2 + 3) MG, soit 5 MG. Le sens des vecteurs compte : GM est l’opposé de MG, et multiplier les coefficients entre eux au lieu de les additionner conduirait à un facteur 6.'
    },
    {
      enonce: 'G est le barycentre de A affecté de 2 et de B affecté de 3. Où se place le point G sur la droite (AB) ?',
      options: [
        'à l’extérieur du segment [AB], du côté de A',
        'entre A et B, plus près de A',
        'entre A et B, plus près de B',
        'au milieu exact du segment [AB]'
      ],
      correct: 2,
      explication: 'On a AG = 3 ÷ 5 × AB : G est donc entre A et B, à 3/5 du trajet de A vers B et à 2/5 seulement de B, donc plus près de B, le point le plus fortement pondéré. Deux coefficients de même signe placent toujours le barycentre entre les deux points ; un coefficient négatif le sortirait du segment.'
    }
  ]);

  JK.quizDeLecon('maths-seconde-c2-l1', [
    {
      enonce: 'Dans un repère du plan, le point A a pour coordonnées (1 ; 2) et le point B (5 ; 6). Quelles sont les coordonnées du vecteur AB ?',
      options: [
        '(6 ; 8)',
        '(−4 ; −4)',
        '(4 ; 8)',
        '(4 ; 4)'
      ],
      correct: 3,
      explication: 'Les coordonnées d’un vecteur AB se calculent en retranchant celles du départ de celles de l’arrivée : (5 − 1 ; 6 − 2) = (4 ; 4). Additionner les coordonnées des deux points, ou faire l’opération dans l’autre sens, donne respectivement (6 ; 8) et le vecteur BA, soit (−4 ; −4).'
    },
    {
      enonce: 'Dans un repère, le vecteur u a pour coordonnées (2 ; 5) et le vecteur v (3 ; 7). Que vaut le déterminant det(u, v) = xy’ − x’y ?',
      options: [
        '1',
        '−1',
        '29',
        '−29'
      ],
      correct: 1,
      explication: 'Le déterminant vaut 2 × 7 − 3 × 5 = 14 − 15 = −1 : il est non nul, donc les deux vecteurs ne sont pas colinéaires, ce que le programme utilise comme critère de colinéarité. Le nombre 29 vient de l’addition 14 + 15 au lieu de la soustraction, et changer l’ordre des deux produits revient à prendre l’opposé.'
    },
    {
      enonce: 'Le point O’ a pour coordonnées (2 ; 3) dans le repère de base (O ; i ; j), et le point M a pour coordonnées (x’ ; y’) dans le repère d’origine O’ et de mêmes vecteurs de base. Quelles sont les formules de changement d’origine ?',
      options: [
        'x = x’ + 2 et y = y’ + 3',
        'x = x’ − 2 et y = y’ − 3',
        'x = 2 − x’ et y = 3 − y’',
        'x = x’ + 3 et y = y’ + 2'
      ],
      correct: 0,
      explication: 'Comme M = O’ + (x’ ; y’), la relation de Chasles donne OM = OO’ + O’M, soit x = x’ + 2 et y = y’ + 3, exactement la formule de changement d’origine attendue au programme. Soustraire les coordonnées de O’ revient à changer le sens du passage d’un repère à l’autre, et échanger 2 et 3 mélange les deux axes.'
    }
  ]);

  JK.quizDeLecon('maths-seconde-c3-l1', [
    {
      enonce: 'Un cercle a pour rayon 10 cm. Quelle est la longueur, en cm, de l’arc intercepté par un angle au centre de 60° ?',
      options: [
        '20π ÷ 3',
        '10π',
        '10π ÷ 3',
        '5π ÷ 3'
      ],
      correct: 2,
      explication: 'Le tour complet mesure 2π × 10 = 20π cm, et 60° en représentent la sixième partie puisque 60 ÷ 360 = 1 ÷ 6 : la longueur de l’arc est donc 20π ÷ 6 = 10π ÷ 3, environ 10,5 cm. Oublier la division par 6 laisse le tour complet, et utiliser 1/3 ou 1/12 revient mal à convertir les degrés en radians.'
    },
    {
      enonce: 'Combien de radians mesure un angle de 45° ?',
      options: [
        'π ÷ 4',
        'π ÷ 6',
        'π ÷ 3',
        'π ÷ 8'
      ],
      correct: 0,
      explication: 'Le programme impose la conversion des degrés en radians et inversement : 180° correspondent à π radians, donc 45° valent 45 × π ÷ 180 = π ÷ 4. Les angles remarquables voisins sont 30° soit π ÷ 6, et 60° soit π ÷ 3 ; diviser par 8 revient à confondre avec un demi angle de 45 degrés.'
    },
    {
      enonce: 'Dans un même cercle, comment s’exprime la mesure d’un angle inscrit par rapport à celle de l’angle au centre qui interceptent le même arc ?',
      options: [
        'elles sont égales',
        'l’angle au centre mesure la moitié de l’angle inscrit',
        'elles sont supplémentaires',
        'l’angle inscrit mesure la moitié de l’angle au centre'
      ],
      correct: 3,
      explication: 'L’angle inscrit au cercle mesure la moitié de l’angle au centre qui intercepte le même arc : un angle inscrit de 30° correspond à un arc et à un angle au centre de 60°. Inverser les deux rôles et les déclarer égaux sont les deux contresens habituels ; la supplémentarité, elle, concerne les angles opposés d’un quadrilatère inscriptible.'
    }
  ]);

  JK.quizDeLecon('maths-seconde-c3-l2', [
    {
      enonce: 'Dans le plan muni de l’orientation habituelle, quel sens le programme nomme-t-il sens direct ?',
      options: [
        'le sens inverse des aiguilles d’une montre',
        'le sens des aiguilles d’une montre',
        'le sens horizontal de gauche à droite',
        'le sens vertical du haut vers le bas'
      ],
      correct: 0,
      explication: 'Le sens direct, ou trigonométrique, est le sens inverse des aiguilles d’une montre ; le sens contraire est appelé sens rétrograde, ou indirect, dans la liste du programme. Une orientation ne décrit pas un déplacement rectiligne : elle indique seulement de quel sens on fait tourner une demi-droite pour en amener une autre dessus.'
    },
    {
      enonce: 'Un angle orienté a pour mesure 5π ÷ 3. Quelle est sa mesure principale, comprise dans l’intervalle ]−π ; π] ?',
      options: [
        'π ÷ 3',
        '−π ÷ 3',
        '−2π ÷ 3',
        '2π ÷ 3'
      ],
      correct: 1,
      explication: 'Les mesures d’un même angle orienté diffèrent de 2π, donc on retire un tour complet : 5π ÷ 3 − 2π = 6π ÷ 3 − 2π = −π ÷ 3, valeur bien comprise dans ]−π ; π]. L’opposé π ÷ 3 correspondrait au sens inverse, et 2π ÷ 3 ou −2π ÷ 3 sont d’autres angles.'
    },
    {
      enonce: 'Dans le cadre des angles orientés, que signifie dire que deux angles sont complémentaires ?',
      options: [
        'leurs mesures sont opposées',
        'leurs mesures diffèrent de π',
        'la somme de leurs mesures vaut π ÷ 2 à 2π près',
        'la somme de leurs mesures vaut π à 2π près'
      ],
      correct: 2,
      explication: 'Le programme généralise les notions d’angles complémentaires et supplémentaires aux angles orientés : complémentaires veut dire somme égale à π ÷ 2, c’est-à-dire à un quart de tour, à 2π près puisque les mesures d’un angle orienté sont définies modulo 2π. Une somme égale à π définit des angles supplémentaires, et des mesures opposées définissent des angles opposés.'
    }
  ]);

  JK.quizDeLecon('maths-seconde-c3-l3', [
    {
      enonce: 'Sur le cercle trigonométrique, que donne le cosinus de la mesure x d’un angle orienté ?',
      options: [
        'l’ordonnée du point associé à x',
        'l’abscisse du point associé à x',
        'la distance du point associé au centre',
        'la longueur de l’arc intercepté'
      ],
      correct: 1,
      explication: 'Le cercle trigonométrique est le cercle de rayon 1 et de centre l’origine, muni du sens direct : le point M associé à x a pour abscisse cos x et pour ordonnée sin x, ce qui donne d’abord la définition du cosinus. La distance OM vaut 1 quelle que soit la mesure x, et la longueur de l’arc vaut x en radians.'
    },
    {
      enonce: 'Que vaut sin²x + cos²x pour la mesure x = π ÷ 5 ?',
      options: [
        '0',
        '2',
        'sin(2π ÷ 5)',
        '1'
      ],
      correct: 3,
      explication: 'C’est la relation fondamentale cos²x + sin²x = 1, que le programme demande de connaître et d’utiliser : elle est vraie pour toute mesure d’angle orienté, y compris π ÷ 5, parce que le point du cercle trigonométrique est à une distance 1 de l’origine. Elle sert ensuite à trouver sin x quand on connaît cos x, en choisissant le signe selon le quadrant.'
    },
    {
      enonce: 'Une mesure x d’un angle orienté vérifie π ÷ 2 < x < π. Quels sont les signes de cos x et de sin x ?',
      options: [
        'cos x est négatif et sin x est positif',
        'cos x est positif et sin x est positif',
        'cos x est négatif et sin x est négatif',
        'cos x est positif et sin x est négatif'
      ],
      correct: 0,
      explication: 'Entre π ÷ 2 et π, le point du cercle trigonométrique occupe le deuxième quadrant : il est à gauche de l’axe des ordonnées, donc d’abscisse cos x négative, et au-dessus de l’axe des abscisses, donc d’ordonnée sin x positive. Le programme range cette étude du signe dans les quatre quadrants parmi les compétences exigibles.'
    }
  ]);

  JK.quizDeLecon('maths-seconde-c4-l1', [
    {
      enonce: 'A, B et C sont trois points du plan, et H est le projeté orthogonal de C sur la droite (AB). D’après la définition posée en cours, que vaut le produit scalaire AB · AC ?',
      options: [
        'AB × AC',
        'AC × CH',
        'AB × AH',
        'AB × BH'
      ],
      correct: 2,
      explication: 'La définition du programme est celle du projeté orthogonal : AB · AC = AB × AH, H étant le pied de la perpendiculaire à (AB) passant par C, les deux longueurs étant prise en mesures algébriques sur la droite (AB). Remplacer AH par AC revient à oublier la projection, et BH n’est pas mesurée à partir de A.'
    },
    {
      enonce: 'Dans cette définition, que vaut le produit scalaire AB · AC lorsque le point B est confondu avec le point A ?',
      options: [
        'AC',
        'AC²',
        'AB × AC',
        '0'
      ],
      correct: 3,
      explication: 'Le programme traite ce cas à part, avant toute formule : si A = B, alors AB est le vecteur nul et AB · AC = 0. Le produit scalaire du vecteur nul par n’importe quel vecteur reste nul, quelles que soient les positions de A et de C.'
    },
    {
      enonce: 'Le produit scalaire de deux vecteurs est-il un vecteur ou un nombre ?',
      options: [
        'un vecteur',
        'un nombre réel',
        'une longueur exprimée en unités',
        'une mesure d’angle'
      ],
      correct: 1,
      explication: 'Le document écrit que le produit scalaire de AB et AC « est le réel noté AB · AC » : c’est un nombre, pas un vecteur, même quand les deux facteurs sont des vecteurs. Comme c’est un réel, il peut être négatif, ce qui exclut d’y voir une longueur ou une mesure d’angle.'
    }
  ]);

  JK.quizDeLecon('maths-seconde-c4-l2', [
    {
      enonce: 'Que vaut le produit scalaire U · U d’un vecteur par lui-même, appelé carré scalaire ?',
      options: [
        '0',
        'le carré de la norme de U',
        'la norme de U',
        'le vecteur nul'
      ],
      correct: 1,
      explication: 'Le carré scalaire est l’une des propriétés listées au programme : U · U = U², c’est-à-dire le carré de la norme, ce qui en fait un nombre positif ou nul. Confondre le carré scalaire avec la norme elle-même est l’erreur fréquente, et un produit scalaire ne peut pas être un vecteur.'
    },
    {
      enonce: 'U et V étant deux vecteurs, que vaut la différence (U + V)² − (U − V)² ?',
      options: [
        '2 U · V',
        'U² + V²',
        '0',
        '4 U · V'
      ],
      correct: 3,
      explication: 'Le cours demande d’établir les identités remarquables (U + V)² = U² + 2 U · V + V² et (U − V)² = U² − 2 U · V + V² ; en les soustrayant, les carrés se compensent et il reste 2 U · V + 2 U · V, soit 4 U · V. Oublier un des deux termes doubles conduit au facteur 2.'
    },
    {
      enonce: 'Quelle expression du produit scalaire utilise-t-on pour déterminer une mesure d’angle géométrique ?',
      options: [
        'AB · AC = AB × AC × cos(AB, AC)',
        'AB · AC = AB × AC × sin(AB, AC)',
        'AB · AC = (AB + AC) × cos(AB, AC)',
        'AB · AC = AB × AC ÷ cos(AB, AC)'
      ],
      correct: 0,
      explication: 'Le programme donne cette autre expression, avec les longueurs AB et AC multipliées par le cosinus de l’angle des deux vecteurs : c’est exactement elle qui permet d’isoler le cosinus puis de retrouver l’angle. Le sinus n’intervient pas dans le produit scalaire, et multiplier par les longueurs au lieu de diviser change tout.'
    }
  ]);

  JK.quizDeLecon('maths-seconde-c4-l3', [
    {
      enonce: 'Que désigne-t-on par la norme d’un vecteur ?',
      options: [
        'sa direction et son sens',
        'le produit scalaire de ce vecteur par lui-même',
        'la longueur de n’importe quel segment représentant ce vecteur',
        'la somme de ses coordonnées'
      ],
      correct: 2,
      explication: 'La norme d’un vecteur est sa longueur : si U = AB, alors U désigne la distance AB, et cette longueur ne dépend pas du segment choisi pour représenter le vecteur. Le produit scalaire de U par lui-même en est le carré, et direction et sens décrivent la direction du vecteur, pas sa taille.'
    },
    {
      enonce: 'U est un vecteur de norme 2. Que vaut la norme du vecteur −3 U ?',
      options: [
        '6',
        '−6',
        '2',
        '9'
      ],
      correct: 0,
      explication: 'Multiplier un vecteur par un réel change sa norme en la multipliant par la valeur absolue de ce réel, propriété notée λU = λ U au programme : ici |−3| × 2 = 6. Une norme est une longueur, elle ne peut donc pas être négative, et 9 correspondrait à élever le coefficient au carré.'
    },
    {
      enonce: 'U et V étant deux vecteurs du plan, comment la norme de U + V se compare-t-elle à la somme de leurs normes ?',
      options: [
        'elle lui est toujours égale',
        'elle lui est supérieure ou égale',
        'elle peut lui être strictement supérieure',
        'elle lui est inférieure ou égale'
      ],
      correct: 3,
      explication: 'C’est l’inégalité triangulaire U + V ≤ U + V, inscrite dans les propriétés de la norme : deux trajets consécutifs ne sont jamais plus longs que le trajet direct additionné. L’égalité n’est atteinte que lorsque les deux vecteurs ont le même sens, ce qui exclut les deux affirmations plus fortes.'
    }
  ]);

  JK.quizDeLecon('maths-seconde-c4-l4', [
    {
      enonce: 'Deux vecteurs U et V sont orthogonaux si et seulement si quelle égalité est vérifiée ?',
      options: [
        'U · V = 1',
        'U = V',
        'U + V = 0',
        'U · V = 0'
      ],
      correct: 3,
      explication: 'L’orthogonalité se reconnaît par un produit scalaire nul, ce que le programme place sous le titre même de l’orthogonalité ; deux vecteurs non nuls perpendiculaires forment un angle de 90° et le cosinus de cet angle vaut 0. Des vecteurs opposés ou égaux ont un produit scalaire non nul, égal à −U² ou à U².'
    },
    {
      enonce: 'Un triangle a pour côtés 7 cm, 24 cm et 25 cm. Que conclut-on par la réciproque du théorème de Pythagore ?',
      options: [
        'il est rectangle',
        'il est quelconque',
        'il est obtusangle',
        'il est équilatéral'
      ],
      correct: 0,
      explication: 'Le plus grand côté est 25 cm, et 7² + 24² = 49 + 576 = 625 = 25² : la somme des carrés des deux petits côtés égale le carré du plus grand, donc la réciproque du théorème de Pythagore, traitée avec le théorème direct dans cette leçon, assure que le triangle est rectangle.'
    },
    {
      enonce: 'Qu’appelle-t-on un vecteur normal à une droite ?',
      options: [
        'un vecteur non nul porté par cette droite',
        'un vecteur non nul orthogonal à cette droite',
        'un vecteur de norme 1',
        'le vecteur reliant l’origine du repère à un point de la droite'
      ],
      correct: 1,
      explication: 'Le vocabulaire de l’orthogonalité comprend l’expression de vecteur normal à une droite : c’est tout vecteur non nul orthogonal à cette droite, donc orthogonal à un de ses vecteurs directeurs, et non pas un vecteur de la droite lui-même. Une norme égale à 1 n’a rien à voir avec l’orthogonalité.'
    }
  ]);

  JK.quizDeLecon('maths-seconde-c4-l5', [
    {
      enonce: 'Dans un repère orthonormal, u a pour coordonnées (2 ; −3) et v (4 ; 1). Que vaut leur produit scalaire u · v ?',
      options: [
        '5',
        '11',
        '−10',
        '−5'
      ],
      correct: 0,
      explication: 'L’expression analytique demande de multiplier les abscisses entre elles et les ordonnées entre elles, puis d’additionner : 2 × 4 + (−3) × 1 = 8 − 3 = 5. Soustraire les deux produits au lieu de les additionner donne 11, et croiser abscisses et ordonnées mène à −10.'
    },
    {
      enonce: 'Dans un repère orthonormal, A a pour coordonnées (1 ; 2) et B (4 ; 6). Que vaut la distance AB ?',
      options: [
        '7',
        '5',
        '25',
        '√7'
      ],
      correct: 1,
      explication: 'La formule de la distance donne AB = √((4 − 1)² + (6 − 2)²) = √(9 + 16) = √25 = 5. Le nombre 25 est la valeur de la distance au carré, et 7 ou √7 proviennent de l’addition des écarts 3 + 4, qui ne passe pas par les carrés.'
    },
    {
      enonce: 'Dans un repère orthonormal, quelle est une équation cartésienne du cercle de centre C(1 ; 2) et de rayon 3 ?',
      options: [
        '(x − 1)² + (y − 2)² = 3',
        '(x + 1)² + (y + 2)² = 9',
        '(x − 1)² + (y − 2)² = 9',
        '(x − 1) + (y − 2) = 9'
      ],
      correct: 2,
      explication: 'Le point M(x ; y) est sur le cercle quand MC = 3, donc MC² = 9, ce qui s’écrit (x − 1)² + (y − 2)² = 9, l’équation établie par le programme à partir de OM² = R². Écrire 3 au lieu de 9 oublie le carré du rayon, et garder les signes + correspond au centre (−1 ; −2).'
    }
  ]);

  JK.quizDeLecon('maths-seconde-c4-l6', [
    {
      enonce: 'ABC est un triangle rectangle en A, et H est le pied de la hauteur issue de A. Quelle relation métrique le programme associe-t-il au côté AB ?',
      options: [
        'AB² = BC × CH',
        'AB² = BH × CH',
        'AB² = BC × BH',
        'AB = BC × BH'
      ],
      correct: 2,
      explication: 'Chaque côté de l’angle droit a un carré égal au produit de l’hypoténuse par la projection de ce côté sur l’hypoténuse : AB² = BC × BH, tandis que AC² = CB × CH. Écrire BH × CH, c’est employer la relation de la hauteur AH², et oublier le carré change la nature de l’égalité.'
    },
    {
      enonce: 'ABC est rectangle en A, avec AB = 3 cm, AC = 4 cm et BC = 5 cm. Que vaut la longueur AH de la hauteur issue de A ?',
      options: [
        '2,5 cm',
        '3,5 cm',
        '1,2 cm',
        '2,4 cm'
      ],
      correct: 3,
      explication: 'La relation AB × AC = BC × AH donne AH = 3 × 4 ÷ 5 = 12 ÷ 5 = 2,4 cm. On retrouve le même nombre par l’aire du triangle, égale à 3 × 4 ÷ 2 = 6 cm² aussi bien qu’à BC × AH ÷ 2, ce qui valide la relation métrique du programme.'
    },
    {
      enonce: 'Dans un triangle rectangle, le carré de l’hypoténuse est égal à quoi, d’après les relations métriques de la leçon ?',
      options: [
        'la somme des deux autres côtés',
        'la somme des carrés des deux autres côtés',
        'le produit des deux autres côtés',
        'la différence des carrés des deux autres côtés'
      ],
      correct: 1,
      explication: 'Le triangle étudié est rectangle en A, donc l’hypoténuse est BC et la relation s’écrit BC² = AB² + AC², ce qui n’est autre que le théorème de Pythagore placé dans cette leçon avec les relations issues de la hauteur. Additionner les côtés sans les mettre au carré, ou les multiplier, ne donne pas la même longueur.'
    }
  ]);

  JK.quizDeLecon('maths-seconde-c5-l1', [
    {
      enonce: 'Le programme demande d’introduire le mot transformation en justifiant le vocabulaire. Quelle application du plan est donnée comme contre-exemple de transformation ?',
      options: [
        'la translation',
        'la symétrie centrale',
        'la projection orthogonale',
        'l’homothétie'
      ],
      correct: 2,
      explication: 'La projection orthogonale sur une droite envoie tous les points d’une même perpendiculaire sur un seul point : plusieurs antécédents pour une image, ce qui la place hors des transformations, dont le programme attend qu’elles agissent comme des bijections du plan. Translation, symétrie centrale et homothétie sont les transformations étudiées.'
    },
    {
      enonce: 'Dans un repère, quelle est l’image du point M(x ; y) par la translation de vecteur u de coordonnées (3 ; −2) ?',
      options: [
        '(x − 2 ; y + 3)',
        '(3 − x ; −2 − y)',
        '(x − 3 ; y + 2)',
        '(x + 3 ; y − 2)'
      ],
      correct: 3,
      explication: 'Déterminer analytiquement une translation, c’est ajouter les coordonnées du vecteur à celles du point : M’ a pour coordonnées (x + 3 ; y − 2). Soustraire au lieu d’ajouter, ou intervertir abscisse et ordonnée du vecteur, sont les erreurs attendues ; (3 − x ; −2 − y) est un point obtenu symétriquement.'
    },
    {
      enonce: 'Une figure subit une homothétie de rapport 3. Comment ses longueurs et ses mesures d’angles sont-elles transformées ?',
      options: [
        'les longueurs sont multipliées par 3 et les mesures d’angles restent les mêmes',
        'les longueurs et les mesures d’angles sont multipliées par 3',
        'les longueurs sont multipliées par 3 et les mesures d’angles sont divisées par 3',
        'les longueurs restent les mêmes et les mesures d’angles sont multipliées par 3'
      ],
      correct: 0,
      explication: 'L’homothétie, dont le programme rattache l’étude à Thalès, multiplie toutes les longueurs par la valeur absolue du rapport, ici 3, tout en conservant les mesures d’angles, l’alignement et le parallélisme : les images des figures sont donc des agrandissements de même forme. Un angle ne change pas de mesure par homothétie.'
    }
  ]);
})();
