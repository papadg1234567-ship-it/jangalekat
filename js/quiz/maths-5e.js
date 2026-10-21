/* Quiz de mathématiques de 5ᵉ (Jàngalekat) — une leçon = un quiz = 3 questions.
   Les intitulés et l’ordre des leçons suivent le Guide d’usage des programmes – Mathématiques,
   classe de 5ᵉ (DEMSG, septembre 2012), partie 1 Activités numériques et partie 2 Activités
   géométriques, complété par le fascicule ADEM-Dakar de mathématiques de 5ᵉ. Les énoncés, options
   et explications sont des contenus de démonstration rédigés par un modèle : ils reprennent les
   notions et les exemples du guide pédagogique, mais aucun n’a été relu par un enseignant.
   Ils ne sont ni un sujet officiel ni une évaluation de référence. */
(function () {
  'use strict';

  JK.quizDeLecon('maths-5e-c1-l1', [
    {
      enonce: 'Que vaut le carré de 1,5 ?',
      options: ['2,25', '3', '22,5', '1,25'],
      correct: 0,
      explication: 'Élever au carré, c’est multiplier le nombre par lui-même : 1,5 × 1,5 = 2,25. Le résultat 3 correspond au double de 1,5, pas à son carré ; le guide d’usage fait travailler le carré et le cube d’un nombre décimal arithmétique.'
    },
    {
      enonce: 'Que vaut le calcul (2 × 3)² ?',
      options: ['6', '25', '36', '18'],
      correct: 2,
      explication: 'La puissance d’un produit se calcule facteur par facteur : (2 × 3)² = 2² × 3² = 4 × 9 = 36. On obtient 18 en élevant un seul facteur au carré, et 25 en confondant le produit 2 × 3 avec la somme 2 + 3.'
    },
    {
      enonce: 'Que vaut la puissance d’une puissance (2³)² ?',
      options: ['32', '64', '8', '16'],
      correct: 1,
      explication: 'Pour calculer une puissance de puissance, on multiplie les exposants : (2³)² = 2⁶ = 64 ; on peut aussi calculer 2³ = 8 puis 8² = 64. On trouve 32 en ajoutant les exposants au lieu de les multiplier, ce qui donne 2⁵.'
    }
  ]);

  JK.quizDeLecon('maths-5e-c1-l2', [
    {
      enonce: 'Parmi ces nombres, lequel est un multiple commun à 4 et 6 et inférieur à 20 ?',
      options: ['10', '12', '8', '24'],
      correct: 1,
      explication: 'Les multiples de 4 inférieurs à 20 sont 4, 8, 12 et 16 ; ceux de 6 sont 6 et 12, 18. Le seul multiple commun inférieur à 20 est 12. Le nombre 24 est bien multiple commun, mais il n’est pas inférieur à 20.'
    },
    {
      enonce: 'Parmi ces nombres, lequel est premier, c’est-à-dire n’a pour diviseurs que 1 et lui-même ?',
      options: ['97', '91', '57', '51'],
      correct: 0,
      explication: 'Un nombre premier a exactement deux diviseurs, 1 et lui-même : c’est le cas de 97. Le piège est 91, qui se décompose en 7 × 13 ; 57 = 3 × 19 et 51 = 3 × 17 ne sont pas premiers non plus, alors que leur allure de nombre premier surprend souvent.'
    },
    {
      enonce: 'Deux groupes d’amis se réunissent au même endroit, le premier tous les 2 jours, le second tous les 5 jours, et se sont rencontrés le 1er janvier. À quelle date ont-ils leur deuxième rencontre simultanée ?',
      options: ['Le 7 janvier', 'Le 10 janvier', 'Le 11 janvier', 'Le 6 janvier'],
      correct: 2,
      explication: 'Les rencontres simultanées reviennent tous les 10 jours, produit premier commun à 2 et 5 : 10 jours après le 1er janvier, on est le 11 janvier. Le 10 janvier est l’erreur classique, qui compte 10 à partir du 1er jour au lieu de l’ajouter à cette date.'
    }
  ]);

  JK.quizDeLecon('maths-5e-c1-l3', [
    {
      enonce: 'Sous quelle forme irréductible peut-on écrire la fraction 18/30 ?',
      options: ['6/10', '9/15', '3/5', '2/3'],
      correct: 2,
      explication: 'En divisant les deux termes par 6, on obtient 3/5 ; 3 et 5 n’ont plus de diviseur commun autre que 1, la fraction est irréductible. Les écritures 6/10 et 9/15 sont simplifiées mais pas irréductibles, comme le fait remarquer le guide.'
    },
    {
      enonce: 'Écrire la fraction 7/3 sous la forme q + r/b, avec r plus petit que b, donne quelle expression ?',
      options: ['1 + 2/3', '2 + 1/3', '2 + 1/7', '3 + 1/3'],
      correct: 1,
      explication: 'La division euclidienne de 7 par 3 donne le quotient 2 et le reste 1, donc 7/3 = 2 + 1/3 : le reste s’écrit sur le diviseur 3. Poser le reste sur l’ancien numérateur conduit à l’erreur 2 + 1/7.'
    },
    {
      enonce: 'Sur un sac de riz de 30 kg, on consomme les 2/5 du contenu. Combien de kilos ont été consommés ?',
      options: ['12 kg', '18 kg', '15 kg', '6 kg'],
      correct: 0,
      explication: 'Prendre une fraction d’une quantité, c’est multiplier : 30 × 2/5 = 30 ÷ 5 × 2 = 12 kg consommés. Les 18 kg correspondent à la part restante 3/5, et 6 kg au seul 1/5 obtenu en s’arrêtant à la division par le dénominateur.'
    }
  ]);

  JK.quizDeLecon('maths-5e-c1-l4', [
    {
      enonce: 'Dans un CEM de 40 élèves, 25 % pratiquent le handball. Combien d’élèves pratiquent le handball ?',
      options: ['20 élèves', '15 élèves', '25 élèves', '10 élèves'],
      correct: 3,
      explication: '25 % signifie un quart : 40 ÷ 4 = 10 élèves. On trouve 20 en calculant la moitié (50 %) et 25 en recopiant le pourcentage sans le calculer ; 25 % de 40 ne peut pas donner 25, ce qui serait 62,5 %.'
    },
    {
      enonce: 'Un taxi parcourt 180 km en 3 heures. Quelle est sa vitesse moyenne ?',
      options: ['90 km/h', '60 km/h', '540 km/h', '177 km/h'],
      correct: 1,
      explication: 'La vitesse moyenne se calcule par la distance divisée par le temps : 180 ÷ 3 = 60 km/h. On obtient 540 en multipliant la distance par le temps au lieu de diviser, et 90 en divisant par 2 au lieu de 3.'
    },
    {
      enonce: 'Sur une carte à l’échelle 1/100 000, que représente une longueur de 1 cm sur la carte ?',
      options: ['10 m', '100 m', '1 km', '10 km'],
      correct: 2,
      explication: 'À l’échelle 1/100 000, 1 cm sur la carte correspond à 100 000 cm en réalité, soit 1 000 m, c’est-à-dire 1 km. L’erreur fréquente est une conversion de rang mal faite, par exemple 100 m ou 10 km au lieu de 1 000 m.'
    }
  ]);

  JK.quizDeLecon('maths-5e-c1-l5', [
    {
      enonce: 'Sur une droite graduée, quelle est la distance entre le point A d’abscisse −4 et le point B d’abscisse 3 ?',
      options: ['−1', '1', '7', '11'],
      correct: 2,
      explication: 'La distance d’un point à l’origine est sa valeur absolue : A est à 4 unités et B à 3 unités, de part et d’autre de l’origine, donc la distance de A à B est 4 + 3 = 7. Une distance ne peut pas être négative : −1 vient de l’addition −4 + 3.'
    },
    {
      enonce: 'Que vaut le calcul −3 × 4 + 5 ?',
      options: ['7', '−27', '−17', '−7'],
      correct: 3,
      explication: 'La multiplication est prioritaire sur l’addition : −3 × 4 = −12, puis −12 + 5 = −7. On trouve −27 en calculant 4 + 5 d’abord, ce qui inverse les règles de priorité du calcul.'
    },
    {
      enonce: 'Quelle est la valeur absolue du nombre relatif −2,5 ?',
      options: ['−2,5', '2,5', '25', '0'],
      correct: 1,
      explication: 'La valeur absolue d’un relatif est sa distance à l’origine sur la droite graduée, donc une distance toujours positive : celle de −2,5 est 2,5. Deux nombres opposés, comme −2,5 et 2,5, ont la même valeur absolue.'
    }
  ]);

  JK.quizDeLecon('maths-5e-c1-l6', [
    {
      enonce: 'Dans un repère du plan, qu’est-ce que l’abscisse d’un point ?',
      options: ['Le second des deux nombres du couple, qui se lit sur l’axe vertical', 'Le premier des deux nombres du couple, qui se lit sur l’axe horizontal', 'La distance du point à l’origine du repère', 'Le nom inscrit à côté du point sur le graphique'],
      correct: 1,
      explication: 'Dans un repère d’axes perpendiculaires, l’abscisse est la première coordonnée, mesurée selon l’axe horizontal ; la seconde coordonnée, l’ordonnée, se lit selon l’axe vertical. Le point M(−3 ; 5) a pour abscisse −3 et pour ordonnée 5.'
    },
    {
      enonce: 'Quand on place dans un repère les points correspondant à toutes les lignes d’un tableau de proportionnalité, ces points se placent comment ?',
      options: ['Sur une courbe qui se recourbe vers l’axe horizontal', 'Sur une ligne horizontale', 'En un nuage de points sans alignement', 'Sur une droite passant par l’origine'],
      correct: 3,
      explication: 'Les points d’une situation de proportionnalité s’alignent sur une droite passant par l’origine du repère. C’est ce qui distingue la proportionnalité d’un simple tableau de correspondance, dont les points ne sont pas alignés avec l’origine.'
    },
    {
      enonce: 'Des oignons sont vendus 1 000 F CFA le sac de 4 kg. Dans un repère où l’axe horizontal porte la masse en kg et l’axe vertical le prix en F CFA, quelles sont les coordonnées du point correspondant à 3 kg ?',
      options: ['(750 ; 3)', '(3 ; 3 000)', '(3 ; 750)', '(3 ; 250)'],
      correct: 2,
      explication: 'Le prix du kilogramme est 1 000 ÷ 4 = 250 F, donc 3 kg coûtent 3 × 250 = 750 F et le point est (3 ; 750). Inverser les coordonnées donne (750 ; 3) et s’arrêter au prix unitaire donne (3 ; 250).'
    }
  ]);

  JK.quizDeLecon('maths-5e-c2-l1', [
    {
      enonce: 'Que signifie « M′ est le symétrique du point M par rapport au point O » ?',
      options: ['O est le milieu du segment [MM′]', 'M est le milieu du segment [OM′]', 'OM′ = 2 × OM', 'Les droites (OM) et (OM′) sont perpendiculaires'],
      correct: 0,
      explication: 'Le symétrique d’un point par rapport à un centre s’obtient en prolongeant le segment issu de ce centre de sa propre longueur : O devient le milieu de [MM′]. C’est la construction de base de la symétrie centrale de la leçon.'
    },
    {
      enonce: 'Parmi ces figures, laquelle possède un centre de symétrie, c’est-à-dire laquelle est globalement invariante par une symétrie centrale ?',
      options: ['Le triangle équilatéral', 'Le trapèze quelconque', 'Le triangle isocèle non équilatéral', 'Le rectangle'],
      correct: 3,
      explication: 'Le rectangle a pour centre de symétrie le point de rencontre de ses diagonales : la demi-rotation autour de ce point superpose la figure à elle-même. Le triangle isocèle et le triangle équilatéral ont des axes de symétrie, mais pas de centre de symétrie.'
    },
    {
      enonce: 'Quelle est l’image d’un angle de 35° par une symétrie centrale ?',
      options: ['Un angle de 145°', 'Un angle de 55°', 'Un angle de 35°', 'Un angle droit'],
      correct: 2,
      explication: 'La symétrie centrale conserve les mesures des angles, comme elle conserve l’alignement, les longueurs, le parallélisme, l’orthogonalité et les aires : l’image d’un angle de 35° mesure encore 35°. On obtient 145° en confondant avec un angle supplémentaire.'
    }
  ]);

  JK.quizDeLecon('maths-5e-c2-l2', [
    {
      enonce: 'Que peut-on affirmer de deux angles opposés par le sommet ?',
      options: ['Ils sont supplémentaires', 'Ils sont complémentaires', 'Ce sont deux adjacents de mesures différentes', 'Ils ont la même mesure'],
      correct: 3,
      explication: 'Deux angles opposés par le sommet se forment lorsque deux droites se coupent : chacun a pour côtés les demi-droites opposées de l’autre, et la propriété de la leçon est qu’ils ont la même mesure.'
    },
    {
      enonce: 'Deux droites parallèles sont coupées par une sécante ; un angle alterne-interne mesure 40°. Quelle est la mesure de l’angle alterne-interne qui lui correspond ?',
      options: ['40°', '50°', '140°', '320°'],
      correct: 0,
      explication: 'Deux droites parallèles coupées par une sécante forment des angles alternes-internes de même mesure : l’autre angle mesure 40°. Retenir 140° revient à lui appliquer la supplémentarité, qui concerne les angles consécutifs, pas les alternes-internes.'
    },
    {
      enonce: 'Quelle condition sur les angles formés par une sécante permet de démontrer que deux droites sont parallèles ?',
      options: ['Deux angles opposés par le sommet de même mesure', 'Deux angles complémentaires formés par la sécante', 'Deux angles alternes-internes de même mesure', 'Deux angles consécutifs de même mesure'],
      correct: 2,
      explication: 'Si une sécante forme avec deux droites une paire d’angles alternes-internes de même mesure, alors les deux droites sont parallèles : la leçon établit cette propriété par la symétrie centrale et l’utilise pour justifier et construire. Les angles opposés par le sommet sont égaux quel que soit le cas, parallèles ou non, et ne prouvent rien.'
    }
  ]);

  JK.quizDeLecon('maths-5e-c2-l3', [
    {
      enonce: 'Quel point est le centre de symétrie d’un parallélogramme ?',
      options: ['Le milieu d’un côté', 'Le sommet de son plus grand angle', 'Le point de rencontre de ses diagonales', 'Un quelconque point de son intérieur'],
      correct: 2,
      explication: 'Dans un parallélogramme, les diagonales se coupent en leur milieu : ce point de rencontre est le centre de symétrie de la figure, et le guide demande d’appliquer les propriétés de la symétrie centrale au parallélogramme.'
    },
    {
      enonce: 'Dans un parallélogramme ABCD, l’angle ABC mesure 70°. Quelle est la mesure de l’angle consécutif BCD ?',
      options: ['110°', '70°', '20°', '290°'],
      correct: 0,
      explication: 'Dans un parallélogramme, deux angles consécutifs sont supplémentaires : 180° − 70° = 110°. Rester à 70°, c’est confondre avec l’angle opposé à ABC, qui lui a bien la même mesure.'
    },
    {
      enonce: 'Parmi ces phrases, laquelle est une reconnaissance du parallélogramme et non une propriété ?',
      options: ['Dans un parallélogramme, les diagonales se coupent en leur milieu', 'Dans un parallélogramme, deux côtés opposés ont même longueur', 'Dans un parallélogramme, deux angles opposés ont même mesure', 'Si un quadrilatère a ses diagonales de même milieu, alors c’est un parallélogramme'],
      correct: 3,
      explication: 'Une propriété part d’un parallélogramme déjà connu pour en déduire des éléments ; une reconnaissance part d’un quadrilatère quelconque et prouve que c’est un parallélogramme. Le guide insiste : l’élève ne doit pas confondre propriétés et reconnaissances.'
    }
  ]);

  JK.quizDeLecon('maths-5e-c2-l4', [
    {
      enonce: 'Deux angles d’un triangle mesurent 50° et 60°. Quelle est la mesure du troisième angle ?',
      options: ['60°', '70°', '80°', '110°'],
      correct: 1,
      explication: 'La somme des angles d’un triangle est 180° : 50 + 60 = 110, puis 180 − 110 = 70. Conserver 110°, c’est oublier de soustraire cette somme de 180.'
    },
    {
      enonce: 'Le point de rencontre des trois médiatrices d’un triangle est quel point particulier ?',
      options: ['L’orthocentre', 'Le milieu du plus long côté', 'Le point de rencontre des trois hauteurs', 'Le centre du cercle circonscrit'],
      correct: 3,
      explication: 'Les trois médiatrices d’un triangle sont concourantes et leur point de rencontre est le centre du cercle circonscrit, à égale distance des trois sommets. Le point de rencontre des trois hauteurs porte un autre nom, l’orthocentre.'
    },
    {
      enonce: 'Dans un triangle rectangle, que peut-on dire des deux angles aigus ?',
      options: ['Ils sont complémentaires', 'Ils sont supplémentaires', 'Ils sont de même mesure', 'Ils sont opposés par le sommet'],
      correct: 0,
      explication: 'Le triangle rectangle a un angle de 90° et la somme des trois angles vaut 180°, donc la somme des deux angles aigus est 90° : ils sont complémentaires. La réciproque sert de reconnaissance : un triangle qui a deux angles complémentaires est rectangle.'
    }
  ]);

  JK.quizDeLecon('maths-5e-c2-l5', [
    {
      enonce: 'D’après sa définition, que possède un trapèze ?',
      options: ['deux côtés parallèles', 'quatre côtés de même longueur', 'quatre angles droits', 'deux diagonales de même longueur'],
      correct: 0,
      explication: 'Le trapèze se reconnaît à sa définition même : un quadrilatère possédant au moins deux côtés parallèles, appelés bases. Les quatre côtés égaux caractérisent le losange et les quatre angles droits le rectangle.'
    },
    {
      enonce: 'Un parallélogramme dont les diagonales sont perpendiculaires est nécessairement quel quadrilatère particulier ?',
      options: ['Un rectangle', 'Un losange', 'Un trapèze', 'Un quadrilatère quelconque'],
      correct: 1,
      explication: 'Si un parallélogramme a ses diagonales perpendiculaires, alors c’est un losange, d’après la reconnaissance de la leçon. Le rectangle s’obtient par une autre condition, des diagonales de même longueur.'
    },
    {
      enonce: 'D’après le guide pédagogique, un carré est en particulier quel quadrilatère ?',
      options: ['Un trapèze quelconque', 'Un quadrilatère sans côté parallèle', 'Un losange sans angle droit', 'Un losange ayant un angle droit'],
      correct: 3,
      explication: 'Le guide présente le carré comme un losange particulier : si un losange a un angle droit, alors c’est un carré. Un losange sans angle droit reste un losange ordinaire, et un trapèze quelconque n’a ni ses quatre côtés égaux ni ses angles droits.'
    }
  ]);

  JK.quizDeLecon('maths-5e-c2-l6', [
    {
      enonce: 'Dans le dessin d’une représentation plane d’un prisme droit, que figurant les traits en pointillés ?',
      options: ['Les arêtes du dessus du prisme', 'La hauteur du prisme', 'Les côtés de la base visible', 'Les arêtes non visibles'],
      correct: 3,
      explication: 'Le guide demande de distinguer traits pleins et traits pointillés : les pointillés figurent les arêtes cachées, celles que l’on ne voit pas depuis l’observateur. Cette lecture du dessin fait partie des compétences de la leçon sur le prisme droit.'
    },
    {
      enonce: 'Un prisme droit a pour base un triangle. Combien de faces ce prisme possède-t-il ?',
      options: ['5 faces', '3 faces', '4 faces', '6 faces'],
      correct: 0,
      explication: 'Le prisme triangulaire a deux bases triangulaires et trois faces latérales rectangulaires, soit 5 faces au total. Le patron d’un prisme droit à base triangulaire montre bien ces deux triangles et trois rectangles.'
    },
    {
      enonce: 'Un prisme droit a une base d’aire 12 cm² et une hauteur de 5 cm. Quel est son volume ?',
      options: ['17 cm³', '60 cm³', '30 cm³', '600 cm³'],
      correct: 1,
      explication: 'Le volume d’un prisme droit se calcule en multipliant l’aire de la base par la hauteur : 12 × 5 = 60 cm³. Diviser par 2, comme pour un triangle, conduit à l’erreur 30 cm³ et additionner les données conduit à 17 cm³.'
    }
  ]);
})();
