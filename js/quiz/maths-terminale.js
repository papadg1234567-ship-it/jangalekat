/* Quiz de mathématiques de Terminale (Jàngalekat) — une leçon = un quiz = 3 questions.
   Les intitulés et l’ordre des leçons suivent le programme officiel sénégalais de mathématiques
   des classes de Terminales S2 et S4, année 2006 (MEN / IGEN / Commission nationale des
   programmes ; document transmis dans le projet sous le nom de programme APAMS d’octobre 2006,
   Programmes de mathématiques du second cycle, pages 71 à 80). Le Guide d’usage des programmes –
   Mathématiques (DEMSG, septembre 2012) n’est utilisé qu’en appui de méthode : il ne traite pas la
   Terminale, seule la classe de 3e et le premier cycle y sont détaillés.
   Trois réserves à garder en tête. Le relevé du registre ne donne que neuf leçons pour la
   Terminale : la dotation est faible et le projet ne prétend pas à l’exhaustivité du programme.
   Aucun ordre annuel n’est imposé au lycée, si bien que l’ordre ci-dessous est celui du document,
   pas une progression d’année. Enfin certaines leçons sont sans numéro dans le programme : seules
   les trois leçons de la partie Fonctions numériques portent un numéro 1), 2), 3), les suivantes
   sont données par chapitre.
   Les énoncés, options et explications sont des contenus de démonstration rédigés par un modèle :
   ils reprennent les notions et les compétences exigibles du document officiel, mais aucun n’a été
   relu par un enseignant. Ils ne sont ni un sujet officiel, ni une évaluation de référence, ni un
   sujet du BAC. */
(function () {
  'use strict';

  JK.quizDeLecon('maths-terminale-c1-l1', [
    {
      enonce: 'f est continue sur [1 ; 2], f(1) = −2 et f(2) = 3. Que garantit le théorème des valeurs intermédiaires ?',
      options: [
        'Il existe au moins un réel c de [1 ; 2] tel que f(c) = 0',
        'f est décroissante sur [1 ; 2]',
        'f s’annule exactement une fois sur [1 ; 2]',
        'f admet une dérivée en tout point de [1 ; 2]'
      ],
      correct: 0,
      explication: 'Comme 0 est compris entre −2 et 3 et que f est continue, le théorème des valeurs intermédiaires, admis au programme, assure au moins une solution de f(x) = 0 dans [1 ; 2] ; c’est l’outil que le programme fait utiliser pour chercher une valeur approchée d’un zéro. Sans hypothèse de stricte monotonie on ne peut pas compter les zéros, et la continuité ne dit rien d’une dérivée.'
    },
    {
      enonce: 'On sait que la fonction f a pour limite b quand x tend vers a, et que g est continue en b. Que vaut la limite de g(f(x)) quand x tend vers a ?',
      options: [
        'b',
        'g(a)',
        'g(b)',
        '0'
      ],
      correct: 2,
      explication: 'Le programme énonce ce résultat sur la limite d’une fonction composée : la limite vaut g(b), on peut pousser la limite à l’intérieur de la fonction continue. Évaluer g en a au lieu du point d’arrivée b est la confusion classique, et rien ne force le résultat à être nul.'
    },
    {
      enonce: 'Une fonction f est continue et strictement monotone sur un intervalle I. Que dit le programme de sa fonction réciproque ?',
      options: [
        'Elle est continue mais jamais monotone sur I',
        'Elle existe, elle est continue et strictement monotone, et sa représentation se déduit de celle de f',
        'Elle n’existe que si f est dérivable sur I',
        'Elle existe, mais elle est forcément décroissante'
      ],
      correct: 1,
      explication: 'Le programme admet l’existence et la continuité de la réciproque d’une fonction continue et strictement monotone sur un intervalle, conserve la monotonie et demande de représenter cette réciproque à partir de la courbe de f. Une fonction croissante a une réciproque croissante, et la dérivabilité n’est pas une condition d’existence.'
    }
  ]);

  JK.quizDeLecon('maths-terminale-c1-l2', [
    {
      enonce: 'Que vaut la dérivée de la fonction f définie par f(x) = (2x + 1) au cube ?',
      options: [
        'f′(x) = (2x + 1)²',
        'f′(x) = 2(2x + 1)²',
        'f′(x) = 3(2x + 1)²',
        'f′(x) = 6(2x + 1)²'
      ],
      correct: 3,
      explication: 'On dérive la composée demandée par la leçon : la dérivée de la puissance trois donne 3(2x + 1)², puis on multiplie par la dérivée de 2x + 1, soit 2, d’où 6(2x + 1)². Les réponses 3(2x + 1)² et 2(2x + 1)² sont les deux oublis fréquents, l’un de la dérivée de l’intérieur, l’autre du coefficient 3.'
    },
    {
      enonce: 'Selon la définition donnée par le programme, quand le point d’abscisse x0 de la courbe de f est-il un point d’inflexion ?',
      options: [
        'Lorsque f est discontinue en x0',
        'Lorsque la courbe traverse sa tangente en ce point',
        'Lorsque f s’annule en x0',
        'Lorsque la tangente en ce point est horizontale'
      ],
      correct: 1,
      explication: 'Le programme écrit textuellement que la courbe de f admet un point d’inflexion d’abscisse x0 si la courbe traverse sa tangente, puis donne un critère : f deux fois dérivable sur un intervalle ouvert et f′ qui s’annule en changeant de signe en x0. Une tangente horizontale ou une valeur nulle ne suffisent pas, un maximum local n’est pas un point d’inflexion.'
    },
    {
      enonce: 'Quelle propriété partagent deux primitives d’une même fonction continue sur un intervalle I ?',
      options: [
        'Elles diffèrent sur I d’une constante réelle',
        'Elles sont égales en tout point de I',
        'Elles diffèrent sur I d’un terme en x',
        'Elles sont toujours de même signe sur I'
      ],
      correct: 0,
      explication: 'C’est la propriété des primitives inscrite dans la leçon : si F et G sont deux primitives de f sur I, alors F − G est constante sur I, d’où l’écriture F + C. Deux primitives ne sont donc pas confondues, leur différence ne contient pas de x, et rien n’impose leur signe.'
    }
  ]);

  JK.quizDeLecon('maths-terminale-c1-l3', [
    {
      enonce: 'Comment le programme définit-il la fonction logarithme népérien ln ?',
      options: [
        'comme la dérivée de la fonction exponentielle',
        'comme la fonction définie sur ]0 ; +∞[ qui vaut 1/x',
        'comme la primitive sur ]0 ; +∞[ de la fonction x ↦ 1/x qui s’annule en 1',
        'comme la primitive sur ]0 ; +∞[ de la fonction x ↦ x qui vaut 1 en 1'
      ],
      correct: 2,
      explication: 'Le commentaire du programme définit ln comme la primitive sur ]0 ; +∞[ de la fonction x ↦ 1/x qui s’annule en 1 ; la condition en 1 fixe la constante et donne ln(1) = 0. Dire que ln vaut 1/x confond la fonction avec sa dérivée, et la primitive de x ↦ x vaut x²/2.'
    },
    {
      enonce: 'Par quoi le programme définit-il la fonction exponentielle ?',
      options: [
        'comme la primitive de la fonction carrée sur l’ensemble des réels',
        'comme le logarithme décimal changé de signe',
        'comme la fonction réciproque de la fonction puissance rationnelle',
        'comme la fonction réciproque de la fonction logarithme népérien'
      ],
      correct: 3,
      explication: 'Le texte écrit que la fonction exponentielle est définie comme fonction réciproque de la fonction logarithme népérien, notée x ↦ exp(x), et qu’on démontre ensuite que exp(x) s’écrit aussi e à la puissance x. Comme ln est continue et strictement croissante sur ]0 ; +∞[, sa réciproque est continue et strictement croissante sur R.'
    },
    {
      enonce: 'D’après les limites usuelles du programme, que vaut la limite de ln(x) / x quand x tend vers +∞ ?',
      options: [
        '0 : une puissance de x l’emporte sur le logarithme',
        '+∞ : le logarithme croît sans limite',
        '1 : les deux fonctions croissent à la même vitesse',
        '−∞ : le logarithme devient négatif'
      ],
      correct: 0,
      explication: 'Le programme donne cette limite, généralisée à ln(x) divisé par x à la puissance a avec a rationnel strictement positif : le logarithme croît, mais moins vite qu’une puissance, donc le quotient tend vers 0. Répondre +∞ oublie la vitesse du dénominateur ; au voisinage de +∞ le logarithme reste positif, donc −∞ est impossible.'
    }
  ]);

  JK.quizDeLecon('maths-terminale-c2-l1', [
    {
      enonce: 'Une suite définie par Un+1 = f(Un), avec f continue, converge vers L. Que vérifie alors le réel L ?',
      options: [
        'L est une solution de l’équation x = f(x)',
        'L vaut toujours f(0)',
        'L est la dérivée de f en 0',
        'L est forcément égal à 0'
      ],
      correct: 0,
      explication: 'C’est le résultat énoncé par le programme : si Un converge vers L et si f est continue en L, alors L est solution de x = f(x), ce qui est la façon attendue de déterminer la limite d’une suite récurrente. Cette valeur dépend du point fixe de f, pas de f(0), et elle n’est pas nulle en général.'
    },
    {
      enonce: 'Que dit le théorème admis par le programme au sujet des suites monotones bornées ?',
      options: [
        'Une suite monotone et bornée diverge toujours vers +∞',
        'Une suite croissante majorée, et une suite décroissante minorée, convergent',
        'Une suite bornée est nécessairement monotone',
        'Une suite monotone ne converge que si elle est constante'
      ],
      correct: 1,
      explication: 'Le programme admet ces deux résultats et demande de les utiliser : une suite croissante et majorée converge, une suite décroissante et minorée converge aussi. L’inverse est faux, une suite bornée peut ne pas être monotone, comme celle dont les termes alternent entre 1 et −1 et qui ne converge pas.'
    },
    {
      enonce: 'Une suite géométrique a pour premier terme 2 et pour raison 3. Que vaut le terme obtenu en multipliant trois fois par la raison ?',
      options: [
        '11',
        '18',
        '54',
        '27'
      ],
      correct: 2,
      explication: 'On part de 2 et on multiplie par 3 à chaque rang : 6, puis 18, puis 54, soit 2 × 3 à la puissance 3. Le nombre 18 est le terme précédent, 27 est 3 à la puissance 3 sans le premier terme, et 11 correspond au piège qui traite la suite comme arithmétique avec 2 + 3 × 3.'
    }
  ]);

  JK.quizDeLecon('maths-terminale-c3-l1', [
    {
      enonce: 'À l’aide d’une primitive, que vaut l’intégrale de la fonction x ↦ 2x sur [0 ; 1] ?',
      options: [
        '1',
        '2',
        '1/2',
        '0'
      ],
      correct: 0,
      explication: 'Une primitive de x ↦ 2x est x ↦ x², et le programme donne la règle : si F est une primitive de f sur [a ; b], l’intégrale vaut F(b) − F(a), ici 1² − 0² = 1. Répondre 2 revient à garder F(b) sans soustraire F(a), et 1/2 à prendre la primitive de x au lieu de celle de 2x, soit x²/2.'
    },
    {
      enonce: 'Que dit la relation de Chasles pour l’intégrale d’une fonction continue sur [a ; b] ?',
      options: [
        'Elle ne se décompose que si la fonction est positive sur [a ; b]',
        'Elle est égale au produit de l’intégrale sur [a ; c] et de l’intégrale sur [c ; b]',
        'L’intégrale sur [a ; c] est toujours égale à l’intégrale sur [c ; b]',
        'Elle est égale à la somme de l’intégrale sur [a ; c] et de l’intégrale sur [c ; b]'
      ],
      correct: 3,
      explication: 'La relation de Chasles est une des propriétés de l’intégrale listées avec la linéarité : pour c compris entre a et b, l’intégrale se découpe en une somme sur deux intervalles qui se recollent, sans condition de signe. Ni un produit, ni une égalité entre les deux morceaux ne figurent parmi les propriétés attendues.'
    },
    {
      enonce: 'Dans le programme, quelle formule est donnée pour le volume du solide obtenu en faisant tourner une portion de la courbe de f autour de l’axe des abscisses sur [a ; b] ?',
      options: [
        'le volume vaut l’intégrale de π × f(x) sur [a ; b]',
        'le volume vaut l’intégrale de π × f(x)² sur [a ; b]',
        'le volume vaut 2 × π × l’intégrale de f(x) sur [a ; b]',
        'le volume vaut l’intégrale de f(x)² sur [a ; b], sans facteur π'
      ],
      correct: 1,
      explication: 'La formule remise à l’élève est le volume égal à l’intégrale de π × f(x)² sur [a ; b] : chaque section est un disque d’aire π × f(x)², dans l’esprit du calcul des volumes de type intégrale de S(z) dz, aire de la section plane. Sans le carré on additionnerait des longueurs, et sans π on oublierait l’aire du disque.'
    }
  ]);

  JK.quizDeLecon('maths-terminale-c4-l1', [
    {
      enonce: 'Quelles sont les solutions sur l’ensemble des réels de l’équation différentielle y′ = 2y ?',
      options: [
        'les fonctions constantes uniquement',
        'les fonctions y définies par y(x) = 2 × exp(x)',
        'les fonctions y définies par y(x) = C × exp(2x), où C est un réel',
        'les fonctions y définies par y(x) = C × exp(x / 2), où C est un réel'
      ],
      correct: 2,
      explication: 'Le programme fait résoudre les équations linéaires homogènes du premier ordre à coefficients constants : pour y′ = ay, les solutions s’écrivent y = C × exp(a x), ici avec a = 2. On vérifie par la dérivation : la dérivée de C × exp(2x) vaut 2 × C × exp(2x), ce qui satisfait bien l’équation.'
    },
    {
      enonce: 'Pour l’équation y′ = 2y, que se passe-t-il quand on impose la condition initiale y(0) = 3 ?',
      options: [
        'Aucune solution ne convient, car exp(0) vaut 1',
        'La constante C vaut 3 et une seule solution vérifie la condition',
        'Toutes les fonctions de la forme C × exp(2x) conviennent',
        'Deux solutions conviennent, C égal à 3 et C égal à −3'
      ],
      correct: 1,
      explication: 'Le programme admet l’existence et l’unicité de la solution vérifiant une condition initiale donnée, et annonce une indication pour déterminer la solution particulière : ici y(0) = C × exp(0) = C, donc C = 3 et la solution est y(x) = 3 × exp(2x). Sans condition initiale, la constante C resterait libre.'
    },
    {
      enonce: 'En liaison avec les sciences physiques, que cherchent à faire ressortir les exemples simples de phénomènes continus soumis à une loi d’évolution et à une condition initiale ?',
      options: [
        'La démonstration des lois physiques correspondantes',
        'Le calcul des intégrales des solutions',
        'La théorie générale des équations différentielles',
        'Des phénomènes comme l’amortissement ou l’oscillation'
      ],
      correct: 3,
      explication: 'Le commentaire du programme cite l’amortissement et l’oscillation, sur des exemples simples de mécanique ou d’électricité, et précise qu’aucune connaissance des lois physiques n’est exigible en mathématique. Il écrit aussi qu’aucune théorie générale n’est faite sur ce chapitre : l’objectif reste de savoir résoudre les équations.'
    }
  ]);

  JK.quizDeLecon('maths-terminale-c5-l1', [
    {
      enonce: 'Par quoi le programme recommande-t-il d’introduire les statistiques dans ces classes à vocation scientifique ?',
      options: [
        'À partir d’exemples concrets, en organisant éventuellement une enquête exploitée en classe',
        'Par la démonstration des formules de la corrélation linéaire',
        'Par un cours théorique sur les suites numériques',
        'Par le calcul de volumes de solides'
      ],
      correct: 0,
      explication: 'Le texte est direct : l’introduction se fait à partir d’exemples concrets, le programme propose même d’organiser une enquête qui sera exploitée en cours, et il demande des exemples empruntés aux autres disciplines en évitant ceux qui n’ont aucun support réel. Les formules de la corrélation viennent ensuite, elles ne servent pas d’entrée en matière.'
    },
    {
      enonce: 'Pour un nuage de points, comment le programme fait-il interpréter un coefficient de corrélation linéaire très proche de 1 ou de −1 ?',
      options: [
        'Comme la preuve que les deux variables sont sans rapport',
        'Comme la garantie que tous les points sont exactement alignés',
        'Comme le signe d’une liaison linéaire forte entre les deux variables',
        'Comme la démonstration d’un lien de cause à effet'
      ],
      correct: 2,
      explication: 'Le coefficient de corrélation linéaire, dont le programme demande de connaître la formule et d’interpréter la valeur, mesure l’intensité de la liaison linéaire : proche de 1 ou de −1, les points sont serrés autour d’une droite, et le sens du nombre donne le sens de variation. Très proche de 1 ne veut pas dire parfaitement aligné, et une corrélation ne prouve pas une cause.'
    },
    {
      enonce: 'Le programme demande de déterminer les équations des droites de régression par la méthode des moindres carrés. Que doit-on en faire ensuite ?',
      options: [
        'En déduire que les deux variables sont indépendantes',
        'S’en servir pour faire des prévisions sur la série à deux variables',
        'En tirer l’espérance d’une variable aléatoire',
        'En déduire le volume du solide de révolution'
      ],
      correct: 1,
      explication: 'C’est une compétence exigible écrite telle quelle : utiliser les droites de régression pour faire des prévisions, après avoir déterminé leurs équations et le coefficient de corrélation. Une droite d’ajustement ne prouve aucune indépendance, et l’espérance comme les volumes relèvent d’autres chapitres du programme.'
    }
  ]);

  JK.quizDeLecon('maths-terminale-c6-l1', [
    {
      enonce: 'Dans une classe, un élève est tiré au sort au hasard. Si la probabilité de l’événement A vaut 0,3, que vaut la probabilité de l’événement contraire de A ?',
      options: [
        '0,7',
        '0,3',
        '0,09',
        '1,3'
      ],
      correct: 0,
      explication: 'Le programme met la probabilité de l’événement contraire au nombre des formules à connaître et à utiliser : elle vaut 1 − P(A), soit 1 − 0,3 = 0,7, et les deux probabilités se complètent en 1. Le produit 0,3 × 0,3 = 0,09 n’a pas de sens ici, et une probabilité ne peut pas dépasser 1.'
    },
    {
      enonce: 'A et B sont deux événements incompatibles, avec P(A) = 0,2 et P(B) = 0,5. Que vaut la probabilité de la réunion de A et B ?',
      options: [
        '0,1',
        '0,7',
        '0,8',
        '0,3'
      ],
      correct: 1,
      explication: 'Des événements incompatibles ne peuvent pas se réaliser ensemble : la probabilité de leur intersection est nulle et la formule de la réunion, que le programme distingue selon les cas incompatible ou non, se réduit à 0,2 + 0,5 = 0,7. Soustraire ou multiplier ces deux probabilités ne correspond à aucune des formules du chapitre.'
    },
    {
      enonce: 'Lors d’un dépistage médical, on note A « la personne est atteinte » et B « le test est positif », et on suppose P(A) = 0,4, P(B) = 0,5 et P(A et B) = 0,2. Que montre ce calcul sur les événements A et B ?',
      options: [
        'Les événements A et B sont incompatibles',
        'Les événements A et B sont contraires',
        'Les événements A et B ne sont pas des événements de l’univers',
        'Les événements A et B sont indépendants'
      ],
      correct: 3,
      explication: 'Le critère demandé par le programme pour montrer l’indépendance de deux événements est vérifié : 0,4 × 0,5 = 0,2, égal à la probabilité de leur intersection, et les situations de tests médicaux sont justement citées en commentaire. Les deux événements ne sont pas incompatibles, puisque leur intersection a une probabilité non nulle, et ils ne sont pas contraires.'
    }
  ]);

  JK.quizDeLecon('maths-terminale-c7-l1', [
    {
      enonce: 'Le programme écrit qu’un nombre complexe s’écrit z = a + i b avec a et b réels. Que précise le document sur le nombre noté i ?',
      options: [
        'i est un nombre réel qui ne sert qu’à l’écriture',
        'i est le module de z',
        'i est un nombre tel que son carré vaut −1',
        'i est le conjugué de z'
      ],
      correct: 2,
      explication: 'Le document définit un nombre complexe comme un nombre écrivable z = a + i b, a et b réels, et i comme un nombre dont le carré vaut −1 ; c’est cette propriété qui dépasse l’ensemble des réels et rend possibles certaines équations du second degré à coefficients complexes. i n’est ni un réel, ni le module, ni le conjugué de z.'
    },
    {
      enonce: 'Quel est le module du nombre complexe z = 3 + 4 i ?',
      options: [
        '5',
        '7',
        '1',
        '25'
      ],
      correct: 0,
      explication: 'Le module de a + i b est la racine carrée de a² + b², ici la racine de 3² + 4² = 9 + 16 = 25, soit 5 ; le programme demande de connaître et d’utiliser les propriétés du module, avec son interprétation géométrique en distance. Répondre 25 oublie la racine carrée, et 7 additionne les deux composantes au lieu de les mettre au carré.'
    },
    {
      enonce: 'Pour z = a + i b, que vaut le produit de z par son conjugué ?',
      options: [
        'a² − b²',
        '2 i b',
        'a² + 2 a b i + b²',
        'a² + b²'
      ],
      correct: 3,
      explication: 'Le conjugué de a + i b est a − i b, et le produit donne a² − b² × i², donc a² + b² puisque i² = −1 : ce nombre réel vaut le carré du module, propriété que le programme demande de connaître et d’utiliser. a² − b² est le piège de l’oubli du signe de i², 2 i b ce qui reste quand on additionne au lieu de multiplier.'
    }
  ]);
})();
