/* Bibliothèque de fiches (section 4.2) et contenu pédagogique (section 8). */
(function () {
  'use strict';

  const { h, KEYS } = JK;

  const VERIF_A_VERIFIER = { statut: 'À vérifier par un enseignant', date: '17 octobre 2026' };

  /* Les intitulés de nos fiches de géographie viennent du programme officiel reproduit dans le rapport PURGES / AUF. */
  const NOTE_PROGRAMME = 'Source des intitulés : programme officiel de géographie (MEN, 2004) tel que reproduit dans le rapport de recherche PURGES / AUF (2020). La réforme PARC est en cours et réorganise ces leçons : vérifiez la liste en vigueur auprès de votre enseignant.';
  const SANS_PROGRAMME = 'Aucun programme officiel publié n’a pu être joint pour cette fiche : contenu de démonstration, à comparer avec le manuel en usage dans votre classe.';

  JK.FICHES = [
    {
      id: 'derivation',
      titre: 'Dérivation et sens de variation',
      matiere: 'Mathématiques',
      niveau: 'Terminale',
      chapitre: 'Étude des fonctions',
      type: 'Fiche de cours',
      difficulte: 'Moyen',
      verif: VERIF_A_VERIFIER,
      objectif: 'Calculer la dérivée d’une fonction et en déduire son sens de variation.',
      definitions: [
        'Le nombre dérivé f′(a) est le coefficient directeur de la tangente à la courbe au point d’abscisse a.',
        'La fonction dérivée f′ associe à tout réel a le nombre dérivé f′(a). f est dérivable sur un intervalle si elle est dérivable en tout point de cet intervalle.'
      ],
      proprietes: [
        'Si f′(x) > 0 sur un intervalle, alors f est strictement croissante sur cet intervalle.',
        'Si f′(x) < 0 sur un intervalle, alors f est strictement décroissante sur cet intervalle.',
        'Si f′(x) = 0, la tangente est horizontale. Attention : la réciproque est fausse, f′(x) = 0 ne garantit pas un extremum.',
        'Un extremum local est un point où f′ s’annule en changeant de signe.'
      ],
      formules: [
        '(xⁿ)′ = n · xⁿ⁻¹',
        '(k)′ = 0 et (k·u)′ = k·u′',
        '(u + v)′ = u′ + v′',
        '(u·v)′ = u′·v + u·v′',
        '(u / v)′ = (u′·v − u·v′) / v²   avec v ≠ 0',
        '(√x)′ = 1 / (2√x)   avec x > 0'
      ],
      conditions: [
        'Les règles de dérivation s’appliquent sur un intervalle ouvert (jamais en un bord fermé).',
        '(√x)′ n’existe qu’en x > 0 : la fonction racine carrée n’est pas dérivable en 0.',
        'Pour (u / v)′, il faut exclure les valeurs qui annulent v.'
      ],
      exemple: {
        enonce: 'Étudier les variations de f(x) = x³ − 3x² + 2 sur ℝ.',
        etapes: [
          'f est polynôme, donc dérivable sur ℝ. f′(x) = 3x² − 6x.',
          'On factorise : f′(x) = 3x(x − 2). Les valeurs annulant f′ sont x = 0 et x = 2.',
          'Le trinôme 3x² − 6x est du signe de 3 (positif) à l’extérieur des racines et négatif entre elles.',
          'Donc f′ > 0 sur ]−∞ ; 0[, f′ < 0 sur ]0 ; 2[, f′ > 0 sur ]2 ; +∞[.'
        ],
        conclusion: 'f est croissante sur ]−∞ ; 0], décroissante sur [0 ; 2], croissante sur [2 ; +∞[. Maximum local f(0) = 2, minimum local f(2) = 8 − 12 + 2 = −2.'
      },
      exercices: [
        {
          enonce: 'Dériver g(x) = (2x + 1)(x² − 3).',
          corrige: 'On applique (uv)′ avec u = 2x + 1 (u′ = 2) et v = x² − 3 (v′ = 2x) : g′(x) = 2(x² − 3) + (2x + 1)(2x) = 2x² − 6 + 4x² + 2x = 6x² + 2x − 6.'
        },
        {
          enonce: 'Dériver h(x) = (3x + 1) / (x − 2) sur ]−∞ ; 2[ et sur ]2 ; +∞[, puis donner le sens de variation.',
          corrige: 'h′(x) = [3(x − 2) − (3x + 1)] / (x − 2)² = (3x − 6 − 3x − 1) / (x − 2)² = −7 / (x − 2)². Le dénominateur est strictement positif, donc h′ < 0 : h est strictement décroissante sur ]−∞ ; 2[ et sur ]2 ; +∞[. On ne dit pas qu’elle est décroissante sur ℝ privé de 2 au sens d’un seul intervalle.'
        }
      ]
    },
    {
      id: 'second-degre',
      titre: 'Second degré : discriminant et signe',
      matiere: 'Mathématiques',
      niveau: 'Terminale',
      chapitre: 'Polynômes du second degré',
      type: 'Fiche de cours',
      difficulte: 'Moyen',
      verif: VERIF_A_VERIFIER,
      objectif: 'Résoudre une équation du second degré et étudier le signe d’un trinôme.',
      definitions: [
        'Une fonction du second degré s’écrit f(x) = ax² + bx + c avec a ≠ 0. Si a = 0, l’expression n’est plus du second degré.',
        'Le discriminant est Δ = b² − 4ac. Il indique le nombre de racines réelles.'
      ],
      proprietes: [
        'Δ > 0 : deux racines réelles distinctes x₁ et x₂.',
        'Δ = 0 : une racine réelle double x₀ = −b / (2a).',
        'Δ < 0 : aucune racine réelle.',
        'Somme des racines S = −b / a, produit P = c / a (lorsqu’elles existent).',
        'Si a > 0, le trinôme est du signe de a à l’extérieur des racines et négatif entre elles ; si a < 0, c’est l’inverse.',
        'La parabole a un sommet d’abscisse −b / (2a) : minimum si a > 0, maximum si a < 0.'
      ],
      formules: [
        'Δ = b² − 4ac',
        'Si Δ ≥ 0 : x = (−b ± √Δ) / (2a)',
        'Forme factorisée (si Δ ≥ 0) : ax² + bx + c = a(x − x₁)(x − x₂)',
        'Forme canonique : a(x + b/2a)² − Δ/4a'
      ],
      conditions: [
        'Toujours vérifier que a ≠ 0 avant d’utiliser le discriminant.',
        'Les formules des racines ne s’utilisent que si Δ ≥ 0 dans ℝ.',
        'En contexte géométrique, écarter les racines negatives qui n’ont pas de sens (une longueur, une aire).'
      ],
      exemple: {
        enonce: 'Résoudre 2x² − 5x − 3 = 0.',
        etapes: [
          'a = 2, b = −5, c = −3 : a ≠ 0, on peut calculer le discriminant.',
          'Δ = (−5)² − 4 × 2 × (−3) = 25 + 24 = 49 > 0, donc deux racines distinctes.',
          '√Δ = 7, donc x = (5 ± 7) / 4.',
          'x₁ = 12 / 4 = 3 et x₂ = −2 / 4 = −1/2.'
        ],
        conclusion: 'Vérification : 2 × 9 − 5 × 3 − 3 = 0 et 2 × 1/4 − 5 × (−1/2) − 3 = 1/2 + 5/2 − 3 = 0. S = 5/2 et P = −3/2, ce qui correspond bien à −b/a et c/a.'
      },
      exercices: [
        {
          enonce: 'Résoudre x² − 6x + 9 = 0.',
          corrige: 'Δ = 36 − 36 = 0 : racine double x₀ = 6 / 2 = 3. On reconnaît (x − 3)².'
        },
        {
          enonce: 'Résoudre 3x² + 2x + 1 = 0 dans ℝ.',
          corrige: 'Δ = 4 − 12 = −8 < 0 : aucune solution réelle. De plus a = 3 > 0 et Δ < 0, donc 3x² + 2x + 1 > 0 pour tout réel x.'
        },
        {
          enonce: 'Un rectangle a une aire de 15 cm² et sa longueur dépasse la largeur de 2 cm. Trouver les dimensions.',
          corrige: 'Notons x la largeur : x(x + 2) = 15, soit x² + 2x − 15 = 0. Δ = 4 + 60 = 64, x = (−2 ± 8) / 2. La solution positive est x = 3 : largeur 3 cm, longueur 5 cm. On rejette x = −5, une longueur ne peut pas être négative.'
        }
      ]
    },
    {
      id: 'suites',
      titre: 'Suites arithmétiques et géométriques',
      matiere: 'Mathématiques',
      niveau: 'Première',
      chapitre: 'Suites numériques',
      type: 'Fiche de cours',
      difficulte: 'Facile',
      verif: VERIF_A_VERIFIER,
      objectif: 'Reconnaître une suite arithmétique ou géométrique, calculer un terme et une somme.',
      definitions: [
        'Arithmétique : chaque terme s’obtient en ajoutant un même nombre r, u(n+1) = u(n) + r.',
        'Géométrique : chaque terme s’obtient en multipliant par un même nombre q ≠ 0, u(n+1) = q · u(n).',
        'Une suite est croissante si u(n+1) ≥ u(n) à partir d’un rang ; elle est bornée si elle est majorée et minorée.'
      ],
      proprietes: [
        'Une suite géométrique de raison q > 1 et à termes positifs est strictement croissante.',
        'Si |q| < 1 alors qⁿ tend vers 0 ; si q > 1 alors qⁿ tend vers +∞.',
        'Une suite arithmétique est croissante si r > 0, décroissante si r < 0, constante si r = 0.',
        'Passage d’une suite arithmétique à une somme : on multiplie le nombre de termes par la demi-somme du premier et du dernier.'
      ],
      formules: [
        'u(n) = u(0) + n·r',
        'u(n) = u(0) · qⁿ, et plus généralement u(n) = u(p) · qⁿ⁻ᵖ',
        'Somme arithmétique : u(p) + … + u(n) = (n − p + 1) · [u(p) + u(n)] / 2',
        'Somme géométrique : 1 + q + … + qⁿ = (qⁿ⁺¹ − 1) / (q − 1)   avec q ≠ 1'
      ],
      conditions: [
        'La formule u(n) = u(0)·qⁿ suppose q ≠ 0.',
        'La somme géométrique avec (qⁿ⁺¹ − 1)/(q − 1) exclut q = 1 ; dans ce cas la somme vaut simplement n + 1.',
        'Pour tester la monotonie d’une suite géométrique, il faut connaître le signe du premier terme.'
      ],
      exemple: {
        enonce: 'Soit u(0) = 3 et r = 4. Calculer u(10) puis S = u(0) + u(1) + … + u(10).',
        etapes: [
          'u(10) = 3 + 10 × 4 = 43.',
          'Il y a 11 termes (de 0 à 10), donc on n’oublie pas que le nombre de termes est n − p + 1 = 10 − 0 + 1 = 11.',
          'S = 11 × (3 + 43) / 2 = 11 × 23 = 253.'
        ],
        conclusion: 'u(10) = 43 et S = 253.'
      },
      exercices: [
        {
          enonce: 'Une suite géométrique vérifie v(1) = 2 et q = 3. Exprimer v(n) puis calculer v(5).',
          corrige: 'v(n) = v(1) · qⁿ⁻¹ = 2 × 3ⁿ⁻¹. Donc v(5) = 2 × 3⁴ = 2 × 81 = 162.'
        },
        {
          enonce: 'Calculer 1 + 2 + 4 + 8 + 16.',
          corrige: 'Somme géométrique de raison 2 à partir de 1, avec 5 termes : (2⁵ − 1) / (2 − 1) = 31. Addition directe : 1 + 2 + 4 + 8 + 16 = 31.'
        },
        {
          enonce: 'Une population de 12 000 élèves augmente de 5 % par an. Au bout de combien d’années dépasse-t-elle 15 000 ?',
          corrige: 'Modèle géométrique u(n) = 12 000 × 1,05ⁿ. On cherche 12 000 × 1,05ⁿ > 15 000, soit 1,05ⁿ > 1,25. n = 4 : 12 000 × 1,2155 ≈ 14 586 ; n = 5 : 12 000 × 1,2763 ≈ 15 315. Le seuil est dépassé la 5ᵉ année.'
        }
      ]
    },
    {
      id: 'trigonometrie',
      titre: 'Trigonométrie : valeurs remarquables et équations',
      matiere: 'Mathématiques',
      niveau: 'Première',
      chapitre: 'Trigonométrie',
      type: 'Fiche de cours',
      difficulte: 'Moyen',
      verif: VERIF_A_VERIFIER,
      objectif: 'Utiliser le cercle trigonométrique, la relation fondamentale et résoudre sin x = a, cos x = a.',
      definitions: [
        'Le cercle trigonométrique est le cercle de centre O et de rayon 1, muni du sens direct (anti-horaire).',
        'Un angle de 180° vaut π radian, donc 1° = π/180 rad et 1 rad = 180/π ≈ 57,3°.',
        'Pour un point M du cercle d’angle x, cos x est l’abscisse de M et sin x son ordonnée.'
      ],
      proprietes: [
        'cos x et sin x sont compris entre −1 et 1, donc sin x = a n’a de solution que si a ∈ [−1 ; 1].',
        'Les deux solutions de sin x = a dans [0 ; 2π[ sont x et π − x ; celles de cos x = a sont x et −x (soit 2π − x).',
        'On ajoute 2kπ (k entier relatif) pour décrire toutes les solutions.',
        'sin et cos sont périodiques de période 2π.'
      ],
      formules: [
        'sin²x + cos²x = 1',
        'tan x = sin x / cos x   (cos x ≠ 0)',
        'sin(π − x) = sin x ; cos(π − x) = −cos x',
        'sin(π + x) = −sin x ; cos(π + x) = −cos x',
        'sin(π/2 − x) = cos x ; cos(π/2 − x) = sin x',
        'sin(2x) = 2 sin x cos x',
        'cos(2x) = cos²x − sin²x = 2cos²x − 1 = 1 − 2sin²x'
      ],
      conditions: [
        'tan x n’existe pas quand cos x = 0, c’est-à-dire pour x = π/2 + kπ.',
        'Avant de résoudre sin x = a ou cos x = a, vérifier que a ∈ [−1 ; 1], sinon l’équation n’a pas de solution.',
        'Sur un intervalle donné, on ne garde que les valeurs de k qui placent la solution dans cet intervalle.'
      ],
      exemple: {
        enonce: 'Résoudre sin x = 1/2 dans ℝ.',
        etapes: [
          '1/2 ∈ [−1 ; 1], l’équation admet des solutions. Une solution particulière est x = π/6.',
          'La deuxième solution sur [0 ; 2π] est π − π/6 = 5π/6.',
          'On traduit la périodicité en ajoutant 2kπ.'
        ],
        conclusion: 'S = { π/6 + 2kπ ; 5π/6 + 2kπ }, k ∈ ℤ. Dans [0 ; 2π] : S = { π/6 ; 5π/6 }.'
      },
      exercices: [
        {
          enonce: 'On sait que cos a = 3/5 et que a ∈ ]0 ; π/2[. Calculer sin a puis tan a.',
          corrige: 'sin²a = 1 − cos²a = 1 − 9/25 = 16/25. Comme a est dans le premier quadrant, sin a > 0, donc sin a = 4/5. tan a = (4/5) / (3/5) = 4/3.'
        },
        {
          enonce: 'Calculer sin(2a) sachant que sin a = 3/5 et cos a = 4/5.',
          corrige: 'sin(2a) = 2 sin a cos a = 2 × (3/5) × (4/5) = 24/25.'
        },
        {
          enonce: 'Convertir 75° en radians et π/4 en degrés.',
          corrige: '75° = 75 × π/180 = 5π/12 rad. π/4 = 180/4 = 45°.'
        }
      ]
    },
    {
      id: 'denombrement-proba',
      titre: 'Dénombrement et probabilités conditionnelles',
      matiere: 'Mathématiques',
      niveau: 'Terminale',
      chapitre: 'Probabilités',
      type: 'Fiche de cours',
      difficulte: 'Avancé',
      verif: VERIF_A_VERIFIER,
      objectif: 'Compter avec arrangements et combinaisons, puis calculer une probabilité conditionnelle.',
      definitions: [
        'n! (factorielle) = 1 × 2 × … × n, avec la convention 0! = 1. Factorielle uniquement pour un entier naturel.',
        'Arrangement A(n, p) : nombre de tirages ordonnés de p objets parmi n, sans remise.',
        'Combinaison C(n, p) : nombre de sélections de p objets parmi n, sans tenir compte de l’ordre.',
        'Probabilité conditionnelle P(A|B) : probabilité de A sachant que B est réalisé.'
      ],
      proprietes: [
        'On choisit les combinaisons quand l’ordre n’intervient pas (tirage simultané, équipe), les arrangements quand l’ordre compte (classement, codes).',
        'P(A ∪ B) = P(A) + P(B) − P(A ∩ B) ; si A et B sont incompatibles, P(A ∪ B) = P(A) + P(B).',
        'A et B sont indépendants si et seulement si P(A ∩ B) = P(A) × P(B).',
        'Formule des probabilités totales : si B et son complémentaire forment une partition, P(A) = P(A∩B) + P(A∩complément de B).',
        'C(n, p) = C(n, n − p).'
      ],
      formules: [
        'A(n, p) = n! / (n − p)!',
        'C(n, p) = n! / [ p! (n − p)! ]',
        'P(A|B) = P(A ∩ B) / P(B)   avec P(B) ≠ 0',
        'Relation de Pascal : C(n, p) + C(n, p − 1) = C(n + 1, p)'
      ],
      conditions: [
        'Il faut 0 ≤ p ≤ n pour qu’un arrangement ou une combinaison ait un sens.',
        'La condition P(B) ≠ 0 est obligatoire dans P(A|B) : on ne conditionne pas par un événement impossible.',
        'Indépendance et incompatibilité ne sont pas la même chose : deux événements de probabilité non nulle ne peuvent pas être à la fois indépendants et incompatibles.'
      ],
      exemple: {
        enonce: 'Une urne contient 4 boules rouges et 6 boules bleues. On tire simultanément 3 boules. Calculer la probabilité d’obtenir 3 boules rouges.',
        etapes: [
          'Tirage simultané : l’ordre ne compte pas, on utilise les combinaisons.',
          'Nombre total de tirages : C(10, 3) = 10! / (3! 7!) = (10 × 9 × 8) / (3 × 2 × 1) = 120.',
          'Tirages favorables : C(4, 3) = 4.',
          'Probabilité = 4 / 120 = 1/30 ≈ 0,033.'
        ],
        conclusion: 'P(3 rouges) = 1/30. On peut contrôler : P = (4/10) × (3/9) × (2/8) = 24/720 = 1/30.'
      },
      exercices: [
        {
          enonce: 'Calculer C(6, 2) et A(6, 2), puis expliquer la différence.',
          corrige: 'C(6, 2) = 15 : deux boules tirées simultanément. A(6, 2) = 6 × 5 = 30 : une première puis une seconde boule, l’ordre compte. On retrouve A(6, 2) = 2! × C(6, 2).'
        },
        {
          enonce: 'Dans un lycée, 40 % des élèves sont en filière scientifique. 70 % des scientifiques réussissent un test, contre 30 % des non-scientifiques. Un élève est pris au hasard : calculer P(réussir), puis la probabilité qu’il soit scientifique sachant qu’il a réussi.',
          corrige: 'P(S) = 0,40, P(non S) = 0,60. P(R) = 0,40 × 0,70 + 0,60 × 0,30 = 0,28 + 0,18 = 0,46. P(S|R) = 0,28 / 0,46 = 14/23 ≈ 0,61. La filière scientifique augmente la chance de réussite, mais ne la garantit pas.'
        }
      ]
    },
    {
      id: 'noyaux',
      titre: 'Transformations nucléaires et décroissance radioactive',
      matiere: 'Physique-Chimie',
      niveau: 'Terminale',
      chapitre: 'Noyaux et radioactivité',
      type: 'Fiche de cours',
      difficulte: 'Moyen',
      verif: VERIF_A_VERIFIER,
      objectif: 'Écrire une équation de désintégration et utiliser la loi de décroissance radioactive.',
      definitions: [
        'Un noyau s’écrit ᴬ₂X avec A le nombre de nucleons et Z le nombre de protons ; le nombre de neutrons est A − Z.',
        'Des isotopes ont le même Z et un nombre de neutrons différent.',
        'La radioactivité est une désintégration spontanée et aléatoire d’un noyau instable.',
        'La période (demi-vie) t½ est le temps au bout duquel la moitié des noyaux d’un échantillon se sont désintégrés.'
      ],
      proprietes: [
        'Dans une réaction nucléaire, A et Z se conservent (lois de Soddy), ainsi que l’énergie et la quantité de mouvement.',
        'Émission α : le noyau perd 4 nucleons et 2 protons, A diminue de 4 et Z de 2.',
        'Émission β⁻ : un neutron devient un proton, Z augmente de 1 et A reste constant (un électron et un antineutrino sont émis).',
        'Émission β⁺ : un proton devient un neutron, Z diminue de 1 et A reste constant.',
        'Émission γ : seul l’état énergétique du noyau change, A et Z restent inchangés.',
        'Après n périodes, il reste (1/2)ⁿ des noyaux initiaux.'
      ],
      formules: [
        'N(t) = N₀ · e^(−λt)',
        't½ = (ln 2) / λ ≈ 0,693 / λ',
        'Activité A(t) = λ · N(t), exprimée en becquerels (Bq)',
        'Défaut de masse : Δm = Z·m(proton) + (A − Z)·m(neutron) − m(noyau)',
        'Énergie de liaison : E = Δm · c², avec 1 u ≈ 931,5 MeV/c²'
      ],
      conditions: [
        'La loi exponentielle est statistique : elle suppose un grand nombre de noyaux. Elle ne prédit pas la désintégration d’un noyau isolé.',
        'λ > 0 et s’exprime en s⁻¹ si t est en secondes.',
        'Il faut équilibrer A et Z dans toute équation, y compris pour l’électron β⁻ (noté ⁻¹₋₁e ou β⁻).'
      ],
      exemple: {
        enonce: 'Écrire la désintégration α de l’uranium 238 et calculer la période radioactive du carbone 14 sachant λ ≈ 1,21 × 10⁻⁴ an⁻¹.',
        etapes: [
          'L’émission α enlève 4 à A et 2 à Z : ²³⁸₉₂U → ²³⁴₉₀Th + ⁴₂He.',
          'Vérification : 238 = 234 + 4 et 92 = 90 + 2, les deux lois de Soddy sont respectées.',
          't½ = 0,693 / (1,21 × 10⁻⁴) ≈ 5 730 ans.'
        ],
        conclusion: '²³⁸₉₂U → ²³⁴₉₀Th + ⁴₂He, et la demi-vie du carbone 14 est d’environ 5 730 ans : après ce délai il reste la moitié des noyaux, après 11 460 ans il en reste un quart.'
      },
      exercices: [
        {
          enonce: 'Compléter : ²³⁴₉₀Th → ²³⁴₉₁Pa + ? et préciser le type de désintégration.',
          corrige: 'A reste 234 mais Z passe de 90 à 91 : il est émis un électron ⁰₋₁e. Il s’agit d’une désintégration β⁻ (avec aussi un antineutrino).'
        },
        {
          enonce: 'Un échantillon contient N₀ noyaux. Quelle fraction reste-t-il après 3 périodes ?',
          corrige: 'N(3t½) = N₀ × (1/2)³ = N₀/8, soit 12,5 % des noyaux initiaux.'
        }
      ]
    },

    /* ---------- Mathématiques, collège et Seconde ------------------- */
    {
      id: 'divisibilite',
      titre: 'Divisibilité et critères de partage',
      matiere: 'Mathématiques',
      niveau: '6ᵉ',
      chapitre: 'Nombres et calculs',
      type: 'Fiche de cours',
      difficulte: 'Facile',
      verif: VERIF_A_VERIFIER,
      objectif: 'Reconnaître si un entier est divisible par 2, 3, 4, 5, 9 ou 10 sans poser la division.',
      definitions: [
        'Un entier b est un multiple de a si b = a × k avec k entier : on dit que a divise b, ou que b est divisible par a.',
        'Un diviseur de b est un nombre qui divise b sans reste. Tout entier non nul admet au moins 1 et lui-même comme diviseurs.',
        'Un nombre premier est un entier strictement supérieur à 1 qui admet exactement deux diviseurs : 1 et lui-même (2, 3, 5, 7, 11, 13…).'
      ],
      proprietes: [
        'Si a divise b et a divise c, alors a divise b + c et b − c.',
        'Si a divise b, alors a divise tout multiple de b, c’est-à-dire b × k.',
        '2 est le seul nombre premier pair. 0 est multiple de tous les entiers non nuls.',
        'Les critères de 2, 4, 5 et 10 se lisent sur les derniers chiffres ; ceux de 3 et 9 se lisent sur la somme des chiffres.'
      ],
      formules: [
        'par 2 : le chiffre des unités est 0, 2, 4, 6 ou 8 (nombre pair)',
        'par 5 : le chiffre des unités est 0 ou 5',
        'par 10 : le chiffre des unités est 0',
        'par 4 : le nombre formé par les deux derniers chiffres est divisible par 4',
        'par 3 (ou 9) : la somme des chiffres est divisible par 3 (ou 9)'
      ],
      conditions: [
        'Ces critères s’appliquent à des entiers écrits en base 10, pas aux nombres à virgule.',
        'Pour 4, on regarde les deux derniers chiffres ensemble, jamais le chiffre des unités seul.',
        'Un nombre divisible par 9 est divisible par 3 ; la réciproque est fausse (12 l’est par 3, pas par 9).'
      ],
      exemple: {
        enonce: 'Sans calculatrice, décider si 4 158 est divisible par 2, 3, 4, 5, 9 et 10.',
        etapes: [
          'Chiffre des unités = 8, il est pair : 4 158 est divisible par 2. Comme 8 n’est ni 0 ni 5, il n’est divisible ni par 5 ni par 10.',
          'Somme des chiffres : 4 + 1 + 5 + 8 = 18. Or 18 = 3 × 6 = 9 × 2 : donc 4 158 est divisible par 3 et par 9.',
          'Deux derniers chiffres : 58 = 4 × 14 + 2, il reste 2 : 4 158 n’est pas divisible par 4.',
          'Vérification : 4 158 = 2 × 2 079 = 9 × 462, les divisions sont bien exactes.'
        ],
        conclusion: '4 158 est divisible par 2, 3 et 9 ; il n’est divisible ni par 4, ni par 5, ni par 10.'
      },
      exercices: [
        {
          enonce: 'Le nombre 7 365 est-il divisible par 3 ? par 9 ? par 5 ? par 10 ?',
          corrige: 'Somme des chiffres : 7 + 3 + 6 + 5 = 21 = 3 × 7, donc divisible par 3. 21 n’est pas un multiple de 9, donc 7 365 n’est pas divisible par 9. Le chiffre des unités est 5 : divisible par 5. Il n’est pas 0 : pas divisible par 10.'
        },
        {
          enonce: 'Trouver le chiffre A tel que 5A3 soit divisible par 9.',
          corrige: 'La somme des chiffres est 5 + A + 3 = 8 + A. Elle doit être un multiple de 9. Pour A compris entre 0 et 9, la seule possibilité est A = 1 (8 + 1 = 9). On obtient 513 = 9 × 57.'
        }
      ]
    },
    {
      id: 'relatifs',
      titre: 'Nombres relatifs : additions et règles de signes',
      matiere: 'Mathématiques',
      niveau: '5ᵉ',
      chapitre: 'Nombres relatifs',
      type: 'Fiche de cours',
      difficulte: 'Facile',
      verif: VERIF_A_VERIFIER,
      objectif: 'Additionner, soustraire, multiplier et diviser des relatifs en appliquant correctement les règles de signes.',
      definitions: [
        'Un entier relatif est un entier précédé d’un signe : positif (+3, 0, +12) ou négatif (−5, −204). L’ensemble est noté ℤ.',
        'Deux relatifs sont opposés quand ils sont à la même distance de 0 : l’opposé de −7 est 7, et −(−7) = 7.',
        'La distance à zéro d’un relatif est la valeur positive de ce nombre : distance à zéro de −12 = 12.',
        'Une somme algébrique est une écriture sans parenthèses comme −3 + 8 − 5, obtenue après suppression des parenthèses.'
      ],
      proprietes: [
        'Addition de deux relatifs de même signe : on additionne les distances à zéro et on garde le signe commun.',
        'Addition de deux relatifs de signes contraires : on soustrait les distances à zéro et on prend le signe de la plus grande.',
        'Soustraire un relatif, c’est additionner son opposé : a − b = a + (−b).',
        'Dans une multiplication ou division : « moins × moins = plus » ; un produit est négatif si les facteurs sont de signes contraires.'
      ],
      formules: [
        '(+a) + (+b) = +(a + b) et (−a) + (−b) = −(a + b)',
        '(−a) + (+b) = signe de la plus grande distance à zéro',
        'a − (−b) = a + b',
        '(+a) × (+b) = (−a) × (−b) = +(a × b)',
        '(+a) × (−b) = −(a × b)'
      ],
      conditions: [
        'La règle des signes « moins × moins = plus » ne s’applique qu’aux multiplications et divisions, jamais aux additions.',
        'Pour transformer une soustraction en addition, on change le signe de tout ce qui est dans la parenthèse.',
        '0 n’est ni positif ni négatif ; il est son propre opposé.'
      ],
      exemple: {
        enonce: 'Calculer A = (−7) + 12 − (−5) et B = (−3) × (−4) ÷ 6.',
        etapes: [
          'A : on transforme la soustraction en addition de l’opposé, A = −7 + 12 + 5.',
          'On regroupe les positifs : 12 + 5 = 17, puis A = −7 + 17 : signes contraires, on soustrait 17 − 7 = 10 et le signe le plus fort est +.',
          'A = 10.',
          'B : les deux signes négatifs donnent un produit positif, (−3) × (−4) = 12, puis 12 ÷ 6 = 2. B = 2.'
        ],
        conclusion: 'A = 10 et B = 2. La température qui était de −7 °C et qui monte de 12 °C puis encore de 5 °C vaut +10 °C.'
      },
      exercices: [
        {
          enonce: 'Calculer (−15) + 6 − (−9) + (−4).',
          corrige: 'On écrit sans parenthèses : −15 + 6 + 9 − 4. Positifs : 6 + 9 = 15 ; négatifs : −15 − 4 = −19. Reste −19 + 15 = −4 (signes contraires, 19 − 15 = 4, signe − car la distance à zéro de −19 est la plus grande).'
        },
        {
          enonce: 'Dans un jeu, une bonne réponse rapporte 5 points et une erreur retire 3 points. Un joueur répond juste 7 fois et se trompe 6 fois. Quel est son score ?',
          corrige: 'Score = 7 × 5 + 6 × (−3) = 35 − 18 = 17 points. Attention au piège : 6 × (−3) = −18, et « moins × moins = plus » n’intervient pas ici puisqu’on additionne des gains et des pertes.'
        }
      ]
    },
    {
      id: 'fractions',
      titre: 'Fractions : simplifier, additionner, multiplier',
      matiere: 'Mathématiques',
      niveau: '4ᵉ',
      chapitre: 'Fractions',
      type: 'Fiche de cours',
      difficulte: 'Moyen',
      verif: VERIF_A_VERIFIER,
      objectif: 'Mener une suite de calculs sur des fractions en utilisant la bonne opération selon le cas.',
      definitions: [
        'Une fraction a/b représente le partage de l’unité en b parts égales, dont on prend a parts. a est le numérateur, b le dénominateur (b ≠ 0).',
        'Deux fractions sont égales si elles représentent le même nombre : c’est le cas quand on multiplie (ou divise) le numérateur et le dénominateur par un même nombre non nul.',
        'Simplifier une fraction, c’est diviser son numérateur et son dénominateur par un même diviseur commun jusqu’à obtenir la fraction irréductible.',
        'Un nombre entier s’écrit toujours sous forme de fraction : 5 = 5/1.'
      ],
      proprietes: [
        'Addition et soustraction : il faut obligatoirement le même dénominateur, on additionne alors les numérateurs.',
        'Multiplication : on multiplie les numérateurs entre eux et les dénominateurs entre eux, sans chercher de dénominateur commun.',
        'Division : diviser par une fraction, c’est multiplier par sa fraction inverse : (a/b) ÷ (c/d) = (a/b) × (d/c).',
        'On simplifie avant de multiplier quand c’est possible : les calculs sont plus courts et les erreurs plus rares.'
      ],
      formules: [
        'a/b + c/b = (a + c)/b',
        'a/b × c/d = (a × c)/(b × d)',
        '(a/b) ÷ (c/d) = (a/b) × (d/c)   avec c ≠ 0',
        '(a × k)/(b × k) = a/b   avec k ≠ 0'
      ],
      conditions: [
        'Un dénominateur ne peut jamais être nul : 5/0 n’existe pas.',
        'Ne jamais « additionner les dénominateurs » : a/b + c/d n’est pas (a + c)/(b + d).',
        'Pour additionner des fractions de dénominateurs différents, on prend un multiple commun (idéalement le plus petit).'
      ],
      exemple: {
        enonce: 'Calculer A = 2/3 + 5/6 et B = 3/4 × 8/9 ÷ 2/5.',
        etapes: [
          'A : les dénominateurs diffèrent. 6 est un multiple de 3, donc 2/3 = (2 × 2)/(3 × 2) = 4/6.',
          'A = 4/6 + 5/6 = 9/6, puis on simplifie par 3 : A = 3/2 = 1,5.',
          'B : on remplace la division par la multiplication inverse, B = 3/4 × 8/9 × 5/2.',
          'On simplifie en croisant : 3 et 9 donnent 1 et 3 ; 8 et 4 donnent 2 et 1. B = (1 × 2 × 5)/(1 × 3 × 2) = 10/6 = 5/3.'
        ],
        conclusion: 'A = 3/2 et B = 5/3. En révisant 3/4 d’une heure puis en la partageant ainsi, on garde un résultat exact sans arrondi.'
      },
      exercices: [
        {
          enonce: 'Simplifier 42/70 puis calculer 42/70 + 1/5.',
          corrige: '42 et 70 ont 14 pour diviseur commun : 42/70 = 3/5. Alors 3/5 + 1/5 = 4/5. Vérification sans simplification : 42/70 + 14/70 = 56/70 = 4/5, le même résultat.'
        },
        {
          enonce: 'Une citerne est remplie aux 3/5 ; on en retire les 2/3 du contenu. Quelle fraction de la citerne reste-t-il ?',
          corrige: 'On retire 2/3 de ce qui est contenu, donc il reste 1/3 des 3/5 : (3/5) × (1/3) = 3/15 = 1/5 de la citerne. Le piège est de soustraire 3/5 − 2/3 : cela n’a pas de sens ici, car 2/3 porte sur le contenu, pas sur la citerne entière.'
        }
      ]
    },
    {
      id: 'pythagore',
      titre: 'Théorème de Pythagore et sa réciproque',
      matiere: 'Mathématiques',
      niveau: '3ᵉ',
      chapitre: 'Géométrie et triangles rectangles',
      type: 'Fiche de cours',
      difficulte: 'Moyen',
      verif: VERIF_A_VERIFIER,
      objectif: 'Calculer la longueur d’un côté d’un triangle rectangle et prouver qu’un triangle est rectangle.',
      definitions: [
        'Dans un triangle rectangle, l’hypoténuse est le côté le plus long, situé en face de l’angle droit.',
        'Le théorème de Pythagore relie les trois côtés : le carré de l’hypoténuse est égal à la somme des carrés des deux autres côtés.',
        'La réciproque sert à prouver que le triangle est rectangle à partir des trois longueurs connues.',
        'La contraposée (cas d’inégalité) sert à prouver qu’un triangle n’est PAS rectangle.'
      ],
      proprietes: [
        'Pythagore ne s’applique qu’aux triangles rectangles : c’est la condition de départ.',
        'On calcule une longueur avec une racine carrée : BC² = 25 donne BC = √25 = 5, et BC est positif.',
        'Pour la réciproque, on compare le PLUS GRAND carré à la somme des deux autres carrés.',
        'Si le plus grand carré est différent de la somme, alors le triangle n’est pas rectangle (contraposée).'
      ],
      formules: [
        'BC² = AB² + AC²   (A rectangle)',
        'BC = √(AB² + AC²)',
        'AB = √(BC² − AC²)   (BC hypoténuse)',
        'Réciproque : si BC² = AB² + AC², alors le triangle est rectangle en A'
      ],
      conditions: [
        'Toujours vérifier que la formule employée utilise bien l’hypoténuse (le plus long côté) seule d’un côté du signe égal.',
        'Les longueurs doivent être dans la même unité avant de calculer.',
        'La réciproque s’énonce : « si l’égalité est vraie, alors le triangle est rectangle », l’angle droit est en face de l’hypoténuse.'
      ],
      exemple: {
        enonce: 'Un triangle ABC rectangle en A a AB = 6 cm et AC = 8 cm. Calculer BC, puis décider si un triangle de côtés 5 cm, 7 cm, 9 cm est rectangle.',
        etapes: [
          'Rectangle en A, donc BC est l’hypoténuse : BC² = AB² + AC² = 6² + 8² = 36 + 64 = 100.',
          'BC = √100 = 10 cm.',
          'Deuxième triangle : le plus grand côté est 9, donc on compare 9² = 81 avec 5² + 7² = 25 + 49 = 74.',
          '81 ≠ 74 : par la contraposée du théorème de Pythagore, ce triangle n’est pas rectangle.'
        ],
        conclusion: 'BC = 10 cm. Le triangle (5 ; 7 ; 9) n’est pas rectangle, car le carré du plus grand côté n’est pas égal à la somme des deux autres carrés.'
      },
      exercices: [
        {
          enonce: 'Une échelle de 5 m est appuyée contre un mur, son pied est à 3 m du mur. À quelle hauteur touche-t-elle le mur ?',
          corrige: 'Le sol, le mur et l’échelle forment un triangle rectangle ; l’échelle est l’hypoténuse. h² = 5² − 3² = 25 − 9 = 16, donc h = √16 = 4 m. Repère utile : 3-4-5 est le triangle rectangle le plus connu.'
        },
        {
          enonce: 'Un triangle MNP mesure MN = 4,5 cm, NP = 6 cm, MP = 7,5 cm. Est-il rectangle ? Si oui, en quel sommet ?',
          corrige: 'Plus grand côté : MP = 7,5. MP² = 56,25 et MN² + NP² = 20,25 + 36 = 56,25. L’égalité est vraie, donc par la réciproque le triangle est rectangle, et l’angle droit est en N, en face de l’hypoténuse MP.'
        }
      ]
    },
    {
      id: 'ensembles-nombres',
      titre: 'Ensembles de nombres et intervalles',
      matiere: 'Mathématiques',
      niveau: 'Seconde',
      chapitre: 'Ensembles de nombres',
      type: 'Fiche de cours',
      difficulte: 'Moyen',
      verif: VERIF_A_VERIFIER,
      objectif: 'Rattacher un nombre à l’ensemble le plus petit auquel il appartient et écrire un intervalle correctement.',
      definitions: [
        'ℕ est l’ensemble des entiers naturels (0, 1, 2, 3…). ℤ ajoute les entiers négatifs. D est l’ensemble des nombres décimaux (virgule avec un nombre fini de chiffres). ℚ est l’ensemble des rationnels (fractions a/b avec b ≠ 0).',
        'Un nombre rationnel s’écrit comme fraction ; un nombre irrationnel (comme √2 ou π) ne peut pas s’écrire ainsi : ses décimales ne se répètent jamais.',
        'ℝ est l’ensemble des nombres réels : il contient tous les précédents et s’identifie aux points d’une droite graduée.',
        'Un intervalle est un ensemble de réels compris entre deux bornes ; l’ensemble des réels est ℝ = ]−∞ ; +∞[.'
      ],
      proprietes: [
        'Les ensembles sont imbriqués : ℕ ⊂ ℤ ⊂ D ⊂ ℚ ⊂ ℝ. Un entier est donc aussi un décimal et un rationnel.',
        'Toute fraction dont le dénominateur se réduit à 1 est un entier : 12/4 = 3 ∈ ℕ.',
        'Un nombre dont les décimales sont périodiques (0,333…) est rationnel mais pas décimal : 1/3 ∉ D.',
        '∞ n’est pas un nombre : il n’est jamais inclus, on met obligatoirement une parenthèse côté infini.'
      ],
      formules: [
        'ℕ ⊂ ℤ ⊂ D ⊂ ℚ ⊂ ℝ',
        '[a ; b] = {x ∈ ℝ : a ≤ x ≤ b}   bornes incluses',
        ']a ; b[ = {x ∈ ℝ : a < x < b}   bornes exclues',
        '[a ; +∞[ = {x ∈ ℝ : x ≥ a}   et   ]−∞ ; b] = {x ∈ ℝ : x ≤ b}'
      ],
      conditions: [
        'Un intervalle a toujours une parenthèse du côté de ±∞ : jamais de crochet.',
        'Il faut a ≤ b pour que [a ; b] ait un sens ; [3 ; 1] est vide.',
        'La question « à quel ensemble appartient √8 ? » se traite en cherchant d’abord si 8 est un carré parfait (non : √8 ∈ ℝ \\ ℚ).'
      ],
      exemple: {
        enonce: 'Classer −7, 3/4, 2,5, √16 et π dans les plus petits ensembles possibles, puis écrire l’intervalle des x tels que 2 ≤ x < 5.',
        etapes: [
          '−7 ∈ ℤ : il est négatif, donc pas dans ℕ, mais il est décimal (−7 = −7,0).',
          '3/4 = 0,75 : décimal, donc aussi rationnel. Le plus petit ensemble est D.',
          '2,5 = 5/2 : décimal (D), il n’est pas entier.',
          '√16 = 4 : c’est un carré parfait, donc 4 ∈ ℕ (et a priori dans tous les ensembles au-dessus). π et √2 en revanche ne s’écrivent pas en fraction : ils sont seulement dans ℝ.'
        ],
        conclusion: 'L’ensemble demandé s’écrit [2 ; 5[ : crochet en 2 car 2 est autorisé, parenthèse en 5 car 5 est exclu.'
      },
      exercices: [
        {
          enonce: 'Dire si chaque affirmation est vraie ou fausse : « 0 ∈ ℕ », « 1/3 ∈ D », « √2 ∈ ℚ », « −5 ∈ ℤ ».',
          corrige: 'Vrai : 0 est un entier naturel. Faux : 1/3 = 0,333… a des décimales périodiques, il est dans ℚ mais pas dans D. Faux : √2 est irrationnel, il n’est pas dans ℚ. Vrai : −5 est un entier relatif.'
        },
        {
          enonce: 'Écrire en notation d’intervalle, puis sur une droite : x tel que −2 ≤ x ≤ 7 ; et x tel que x > 3.',
          corrige: 'x ∈ [−2 ; 7] (deux crochets, les bornes sont prises). x ∈ ]3 ; +∞[ : parenthèse en 3 (exclue) et parenthèse obligatoire en +∞. Dans les deux cas on remplit la droite entre les bornes, pas les points isolés.'
        }
      ]
    },

    /* ---------- Physique-Chimie, collège et Seconde ----------------- */
    {
      id: 'etats-matiere',
      titre: 'Les trois états de la matière et leurs changements',
      matiere: 'Physique-Chimie',
      niveau: '6ᵉ',
      chapitre: 'États de l’eau',
      type: 'Fiche de cours',
      difficulte: 'Facile',
      verif: VERIF_A_VERIFIER,
      objectif: 'Décrire un état de la matière et nommer le changement d’état correspondant à une expérience.',
      definitions: [
        'La matière existe sous trois états : solide (forme propre, non compressible), liquide (prend la forme du récipient, volume propre, non compressible) et gazeux (occupe tout le volume disponible, compressible).',
        'Un changement d’état est le passage d’un état à un autre pour une même espèce : il ne crée pas de nouvelle matière.',
        'La fusion est le passage solide → liquide, la solidification le passage inverse. La vaporisation est liquide → gaz, la liquéfaction (ou condensation) gaz → liquide.',
        'La sublimation est le passage direct solide → gaz, sans passer par l’état liquide (le givre correspond au passage direct gaz → solide).',
      ],
      proprietes: [
        'La masse est conservée pendant un changement d’état : 200 g de glace fondus donnent 200 g d’eau liquide.',
        'Pour un corps pur, la température reste constante pendant tout le changement d’état : c’est le palier.',
        'À pression normale, l’eau pure fond à 0 °C et bout à 100 °C ; ces deux températures sont des repères pour la reconnaître.',
        'Les gaz sont compressibles, les liquides et les solides ne le sont pas de façon sensible.'
      ],
      formules: [
        'solide → liquide : fusion (il faut chauffer)',
        'liquide → solide : solidification (il faut refroidir)',
        'liquide → gaz : vaporisation (évaporation ou ébullition)',
        'gaz → liquide : liquéfaction / condensation',
        'solide → gaz : sublimation'
      ],
      conditions: [
        'Les paliers de température ne sont valables que pour un corps pur : l’eau salée bout au-dessus de 100 °C et gèle en dessous de 0 °C.',
        'L’évaporation se produit à toute température en surface ; l’ébullition seulement à la température d’ébullition et dans tout le liquide.',
        'La température de changement d’état dépend de la pression : en altitude, l’eau bout avant 100 °C.'
      ],
      exemple: {
        enonce: 'On place un bac de glace à 0 °C dans une pièce à 25 °C et on note la température toutes les minutes.',
        etapes: [
          'Pendant que la glace fond, le thermomètre reste bloqué à 0 °C : le chauffage sert au changement d’état, pas à la montée en température.',
          'Dès que toute la glace a fondu, la température de l’eau liquide recommence à monter vers 25 °C.',
          'La masse du contenu du bac ne change pas entre le début et la fin (mêmes grams avant et après).'
        ],
        conclusion: 'Le palier à 0 °C prouve une fusion de l’eau pure : la masse est conservée et la température reste constante tant qu’il reste de la glace.'
      },
      exercices: [
        {
          enonce: 'Une casserole d’eau bout et la vapeur mouille un couvercle froid posé dessus. Nommer les deux changements d’état successifs.',
          corrige: 'L’eau liquide devient vapeur : c’est la vaporisation (ébullition). La vapeur redevient liquide au contact du couvercle froid : c’est la liquéfaction, aussi appelée condensation.'
        },
        {
          enonce: 'On pèse 150 g de glace, on la laisse fondre puis on évapore toute l’eau. Quelle masse obtient-on dans chaque cas, et pourquoi ?',
          corrige: '150 g d’eau liquide après fusion, puis 150 g de vapeur si la totalité s’évapore : la masse se conserve au cours des changements d’état, seule l’organisation de la matière change.'
        }
      ]
    },
    {
      id: 'masse-volumique',
      titre: 'Masse volumique : ρ = m / V',
      matiere: 'Physique-Chimie',
      niveau: '5ᵉ',
      chapitre: 'Masse et volume',
      type: 'Fiche de cours',
      difficulte: 'Facile',
      verif: VERIF_A_VERIFIER,
      objectif: 'Calculer une masse volumique et prévoir si un solide flotte ou coule dans un liquide.',
      definitions: [
        'La masse volumique ρ (lettre grecque rhô) d’un matériau est sa masse par unité de volume : elle indique quelle masse occupe un litre (ou un cm³) de ce matériau.',
        'Elle se note ρ = m / V, où m est la masse et V le volume.',
        'Un liquide est dit miscible à un autre s’il se mélange avec lui sans former de couches distinctes.',
        'Flotter signifie rester à la surface ; couler signifie aller au fond du récipient.'
      ],
      proprietes: [
        'La masse volumique est une caractéristique du matériau : elle ne dépend pas de la taille de l’échantillon.',
        'Un solide dont ρ est plus grande que celle du liquide coule ; s’il est plus petit, il flotte.',
        'L’eau douce a une masse volumique d’environ 1,0 kg/L ; l’eau de mer environ 1,03 kg/L, ce qui explique une meilleure flottaison.',
        'Deux liquides non miscibles se rangent du plus lourd (en bas) au plus léger (en haut).'
      ],
      formules: [
        'ρ = m / V',
        'm = ρ × V',
        'V = m / ρ',
        '1 g/cm³ = 1 kg/L = 1000 kg/m³'
      ],
      conditions: [
        'Il faut utiliser des unités cohérentes : si ρ est en kg/L, la masse doit être en kg et le volume en L.',
        'La formule ne s’applique à un gaz que si le volume est mesuré dans les mêmes conditions de température et de pression.',
        'Pour un objet creux, on calcule la masse volumique moyenne de l’objet complet, pas celle du matériau.'
      ],
      exemple: {
        enonce: 'Un solide de 540 g occupe un volume de 200 cm³. Calculer sa masse volumique et dire s’il flotte dans l’eau.',
        etapes: [
          'On applique ρ = m / V, en unités cohérentes : ρ = 540 / 200.',
          '540 ÷ 200 = 2,7, donc ρ = 2,7 g/cm³, soit 2,7 kg/L.',
          'L’eau a une masse volumique de 1,0 g/cm³ ; or 2,7 > 1,0.',
          '2,7 g/cm³ correspond à celle de l’aluminium : la valeur permet de proposer le matériau.'
        ],
        conclusion: 'ρ = 2,7 g/cm³ : ce solide est plus dense que l’eau, il coule.'
      },
      exercices: [
        {
          enonce: 'Une bidon de 5 L contient 4,25 kg d’huile. Calculer la masse volumique de l’huile et dire si elle flotte sur l’eau.',
          corrige: 'ρ = m / V = 4,25 / 5 = 0,85 kg/L. Comme 0,85 < 1,0 (masse volumique de l’eau), l’huile flotte : elle forme une couche à la surface, ce que l’on observe dans un bol de soupe.'
        },
        {
          enonce: 'Quelle masse d’eau contient une piscine de 40 m³ ? (ρ eau = 1000 kg/m³)',
          corrige: 'm = ρ × V = 1000 × 40 = 40 000 kg, soit 40 tonnes. On garde la cohérence des unités : kg/m³ avec m³ donne bien des kg.'
        }
      ]
    },
    {
      id: 'circuits-electriques',
      titre: 'Circuits en série et en dérivation : intensité et tension',
      matiere: 'Physique-Chimie',
      niveau: '4ᵉ',
      chapitre: 'Électricité',
      type: 'Fiche de cours',
      difficulte: 'Moyen',
      verif: VERIF_A_VERIFIER,
      objectif: 'Distinguer montage série et dérivation et appliquer la loi des nœuds et l’additivité des tensions.',
      definitions: [
        'Un dipôle est un composant branché par deux bornes : lampe, résistance, moteur, diode, pile.',
        'Un circuit en série ne forme qu’une seule boucle : les dipôles sont placés à la suite. Un circuit en dérivation comporte au moins deux boucles reliées par des nœuds.',
        'L’intensité du courant I se mesure en ampère (A) avec un ampèremètre branché en série.',
        'La tension U entre deux bornes se mesure en volt (V) avec un voltmètre branché en dérivation.'
      ],
      proprietes: [
        'En série, l’intensité est la même partout ; si un dipôle est démonté, le circuit est ouvert et plus rien ne fonctionne.',
        'En série, la tension aux bornes du générateur est égale à la somme des tensions de chaque dipôle.',
        'En dérivation, la tension aux bornes de chaque branche est la même ; une lampe grillée dans une branche n’éteint pas les autres.',
        'Loi des nœuds : l’intensité qui arrive à un nœud est égale à la somme des intensités qui en partent (I = I₁ + I₂).'
      ],
      formules: [
        'Série : I = I₁ = I₂',
        'Série : U(total) = U₁ + U₂',
        'Dérivation : U = U₁ = U₂',
        'Dérivation (loi des nœuds) : I = I₁ + I₂'
      ],
      conditions: [
        'L’ampèremètre se branche toujours en série (fil coupé), le voltmètre toujours en dérivation (entre deux points) : les inverser abîme l’appareil.',
        'Il faut choisir un calibre supérieur à la valeur attendue, en commençant par le plus grand.',
        'Une diode ne laisse passer le courant que dans un sens : les lois ne s’appliquent que si elle est passante.',
        'La loi des nœuds suppose qu’aucun courant ne « disparaît » : tous les départs du nœud sont comptés.'
      ],
      exemple: {
        enonce: 'Deux lampes L1 et L2 sont en dérivation sur une pile de 6 V. L’ampèremètre placé avant le nœud indique 0,5 A et celui de la branche de L1 indique 0,3 A. Que valent U₂ et I₂ ?',
        etapes: [
          'En dérivation, chaque branche est soumise à la tension du générateur : U₂ = U₁ = 6 V.',
          'Au nœud, l’intensité totale arrive et se répartit : I = I₁ + I₂.',
          'Donc I₂ = I − I₁ = 0,5 − 0,3 = 0,2 A.',
          'Si l’on démonte L1, la branche est coupée (I₁ = 0) mais L2 reste éclairée, ce qui est impossible en série.'
        ],
        conclusion: 'U₂ = 6 V et I₂ = 0,2 A : l’installation domestique est en dérivation pour cette raison — les appareils fonctionnent indépendamment sous la même tension.'
      },
      exercices: [
        {
          enonce: 'Trois dipôles en série sur 12 V. U₁ = 4 V, U₂ = 3 V. Calculer U₃ et donner I₃ si I₁ = 0,2 A.',
          corrige: 'Additivité des tensions : U₃ = 12 − (4 + 3) = 5 V. En série l’intensité est la même partout, donc I₃ = I₁ = 0,2 A.'
        },
        {
          enonce: 'Un nœud reçoit 1,2 A et deux départs : I₁ = 0,7 A. Calculer I₂, puis dire ce qui se passe si I₂ vaut 0 A.',
          corrige: 'Loi des nœuds : I₂ = 1,2 − 0,7 = 0,5 A. Si I₂ = 0 A, la branche correspondante est ouverte (conducteur coupé, ampoule grillée) et tout le courant passe dans l’autre branche : 1,2 A.'
        }
      ]
    },
    {
      id: 'combustion',
      titre: 'Combustion du carbone et conservation de la masse',
      matiere: 'Physique-Chimie',
      niveau: '3ᵉ',
      chapitre: 'Combustions',
      type: 'Fiche de cours',
      difficulte: 'Moyen',
      verif: VERIF_A_VERIFIER,
      objectif: 'Écrire une équation de combustion simple et l’utiliser pour prévoir les masses de réactifs et de produits.',
      definitions: [
        'Une combustion est une réaction qui dégage de l’énergie (chaleur et souvent lumière) ; elle nécessite un comburant, en général le dioxygène O₂ de l’air.',
        'Le combustible est l’espèce qui brûle (carbone, méthane, bois, essence). Les réactifs sont présents avant la réaction, les produits après.',
        'Une combustion est complète quand tout le combustible réagit avec suffisamment de dioxygène ; elle est incomplète quand le dioxygène manque, et peut alors former du monoxyde de carbone CO, toxique.',
        'L’équation de réaction note les réactifs à gauche, les produits à droite, avec les espèces chimiques et non les noms.'
      ],
      proprietes: [
        'Au cours d’une transformation chimique, la masse totale se conserve : c’est la loi de Lavoisier.',
        'Les atomes ne disparaissent pas : ils se réarrangent, ce qui impose l’équilibrage de l’équation.',
        'Le réactif qui s’épuise en premier (réactif limitant) arrête la réaction ; l’autre est en excès.',
        'La masse d’air n’apparaît pas seule dans le bilan : il faut compter la masse du dioxygène consommé.'
      ],
      formules: [
        'C + O₂ → CO₂ (combustion complète du carbone)',
        '« Rien ne se perd, rien ne se crée, tout se transforme » — Lavoisier',
        'm(C) consommée + m(O₂) consommée = m(CO₂) formée',
        'Proportions de l’équation : 12 g de C réagissent avec 32 g de O₂ pour donner 44 g de CO₂'
      ],
      conditions: [
        'L’équation n’est utilisable en masses que si elle est équilibrée : même nombre d’atomes de chaque élément des deux côtés.',
        'La conservation de la masse ne vaut que si le système est fermé : un gaz qui s’échappe fausse la pesée.',
        'Dans l’air, seule environ 1/5 du volume est du dioxygène : brûler dans un bocal fermé s’arrête quand O₂ est épuisé.'
      ],
      exemple: {
        enonce: 'On brûle complètement 6 g de carbone dans un récipient fermé contenant le dioxygène nécessaire. Quelle masse de dioxygène est consommée et quelle masse de dioxyde de carbone est produite ?',
        etapes: [
          'Équation équilibrée : C + O₂ → CO₂ ; un atome de C pour une molécule de CO₂.',
          'Repère de proportion : 12 g de C demandent 32 g de O₂ et donnent 44 g de CO₂.',
          'On a 6 g de C, soit la moitié : donc 16 g de O₂ consommés et 22 g de CO₂ produits.',
          'Vérification par la loi de Lavoisier : 6 + 16 = 22, la masse totale est conservée.'
        ],
        conclusion: '6 g de carbone exigent 16 g de dioxygène et produisent 22 g de dioxyde de carbone : la masse des produits égale la masse des réactifs consommés.'
      },
      exercices: [
        {
          enonce: 'Un bocal fermé contient 3 g de carbone et 3 g de dioxygène. Tout le carbone peut-il brûler ? Justifier.',
          corrige: 'Non. Avec 12 g de C il faut 32 g de O₂ ; donc pour 3 g de C il faudrait 8 g de O₂. Il n’y en a que 3 g : le dioxygène est le réactif limitant. Il brûle 3 × (12/32) = 1,1 g de carbone et il reste du carbone non consumé.'
        },
        {
          enonce: 'Une bougie brûle dans l’air et sa masse diminue. La loi de Lavoisier est-elle violée ?',
          corrige: 'Non : la bougie et le dioxygène forment du CO₂ et de la vapeur d’eau qui s’échappent. Si l’on pesait l’ensemble dans un récipient fermé, la masse totale resterait identique. La masse apparente baisse seulement parce que des produits gazeux quittent le système.'
        }
      ]
    },
    {
      id: 'structure-atome',
      titre: 'Structure de l’atome et classification périodique',
      matiere: 'Physique-Chimie',
      niveau: 'Seconde',
      chapitre: 'Organisation de la matière',
      type: 'Fiche de cours',
      difficulte: 'Moyen',
      verif: VERIF_A_VERIFIER,
      objectif: 'Décrire un atome (Z, A, couches électroniques) et retrouver sa place dans la classification périodique.',
      definitions: [
        'L’atome comporte un noyau central (protons chargés + et neutrons neutres) entouré d’électrons chargés − répartis en couches K, L, M…',
        'Le numéro atomique Z est le nombre de protons du noyau ; il identifie l’élément chimique.',
        'Le nombre de masse A est le total des nucléons : A = Z + N, où N est le nombre de neutrons.',
        'Une couche saturée contient au maximum 2 électrons pour K, 8 pour L et M. Une couche incomplète se nomme couche externe.'
      ],
      proprietes: [
        'L’atome est électriquement neutre : il y a autant d’électrons que de protons, donc Z électrons.',
        'Presque toute la masse de l’atome est dans le noyau ; le volume est presque tout dans le nuage électronique.',
        'Deux isotopes ont le même Z mais des A différents (même élément, nombre de neutrons différent).',
        'Un ion se forme quand l’atome perd des électrons (cation, charge +) ou en gagne (anion, charge −) : le noyau ne change pas.',
        'Dans la classification, les cases sont rangées par Z croissant ; la ligne indique le nombre de couches remplies et la colonne le nombre d’électrons de la couche externe.'
      ],
      formules: [
        'A = Z + N, donc N = A − Z',
        'Atome neutre : nombre d’électrons = Z',
        'Remplissage des couches : K ≤ 2, L ≤ 8, M ≤ 8 (pour les 20 premiers éléments)',
        'Ion : Na⁺ = 11 protons, 10 électrons ; Cl⁻ = 17 protons, 18 électrons'
      ],
      conditions: [
        'Le remplissage K, L, M en 2/8/8 ne vaut que pour les 20 premiers éléments ; au-delà, la répartition est plus subtile.',
        'Z déduit l’élément : changer Z change l’élément, changer N ne donne qu’un isotope.',
        'La charge d’un ion se lit sur sa formule : le nombre d’électrons est Z − charge pour un cation.'
      ],
      exemple: {
        enonce: 'L’atome de chlore a pour symbole ³⁵₁₇Cl. Donner sa composition, sa répartition en couches, et expliquer sa place dans la classification.',
        etapes: [
          'Z = 17 : 17 protons, donc 17 électrons pour un atome neutre. A = 35, donc N = 35 − 17 = 18 neutrons.',
          'Remplissage : K prend 2, L prend 8, il reste 17 − 10 = 7 électrons en M. Répartition : (2) (8) (7).',
          'Trois couches occupées → période 3 ; sept électrons sur la couche externe → colonne 17 (les halogènes).',
          'Comme il manque 1 électron pour saturer M (8), le chlore a tendance à former l’ion Cl⁻.'
        ],
        conclusion: '³⁵₁₇Cl : 17 protons, 18 neutrons, 17 électrons répartis 2-8-7. Il est en période 3, colonne 17, et devient facilement Cl⁻.'
      },
      exercices: [
        {
          enonce: 'Un atome possède 11 protons et 12 neutrons. Donner Z, A, la répartition électronique et l’élément.',
          corrige: 'Z = 11, A = 11 + 12 = 23 : c’est le sodium ²³₁₁Na. Répartition : K = 2, L = 8, M = 1. Une couche externe avec 1 seul électron, donc période 3, colonne 1 (alcalins) ; il forme facilement Na⁺.'
        },
        {
          enonce: 'Les espèces ¹²₆C et ¹⁴₆C sont-elles deux éléments différents ? Et ¹⁴₆C et ¹⁴₇N ?',
          corrige: '¹²₆C et ¹⁴₆C ont le même Z = 6 : c’est le même élément (carbone), ce sont deux isotopes qui diffèrent par les neutrons (6 et 8). ¹⁴₆C et ¹⁴₇N ont le même A mais des Z différents : ce sont deux éléments différents, ils ne sont pas des isotopes.'
        }
      ]
    },

    /* ---------- Sciences de la Vie et de la Terre -------------------- */
    {
      id: 'cellule',
      titre: 'La cellule, unité de base des êtres vivants',
      matiere: 'SVT',
      niveau: '6ᵉ',
      chapitre: 'Le monde vivant',
      type: 'Fiche de cours',
      difficulte: 'Facile',
      verif: VERIF_A_VERIFIER,
      objectif: 'Reconnaître les constituants communs d’une cellule et distinguer une cellule animale d’une cellule végétale.',
      definitions: [
        'La cellule est la plus petite unité vivante capable de se nourrir, de grandir et de se reproduire. Tous les êtres vivants sont formés de une ou plusieurs cellules.',
        'Un être unicellulaire est formé d’une seule cellule (amibe, levure) ; un être pluricellulaire en comporte des milliards (animal, plante).',
        'Quatre constituants se retrouvent dans toute cellule vivante : la membrane plasmique, le cytoplasme, le matériel génétique (dans un noyau ou non) et des organites qui réalisent les fonctions de la cellule.',
        'La paroi est un enveloppe rigide externe, présente chez les cellules végétales ; les chloroplastes sont les organites verts où se fabrique la matière organique de la plante.'
      ],
      proprietes: [
        'Les cellules d’un même organisme ont des formes différentes (muscle, peau, feuille) mais gardent les mêmes constituants de base.',
        'La cellule végétale possède une paroi et souvent des chloroplastes ; la cellule animale n’a ni paroi rigide ni chloroplaste.',
        'La taille d’une cellule est en général de l’ordre du centième de millimètre : elle est invisible à l’œil nu, sauf exceptions.',
        'Une cellule nouvelle provient de la division d’une cellule existante.'
      ],
      formules: [
        'Toute cellule : membrane plasmique + cytoplasme + matériel génétique',
        'Cellule végétale : + paroi + (souvent) chloroplastes + vacuole',
        'Cellule animale : pas de paroi, pas de chloroplastes',
        '1 mm = 1000 µm ; une cellule animale ≈ 10 à 30 µm'
      ],
      conditions: [
        'L’observation nécessite un microscope : la préparation doit être fine et transparente pour laisser passer la lumière.',
        'Une coloration (bleu de méthylène, eau iodée) rend visible le noyau et les parois, sinon tout paraît transparent.',
        'Il ne faut pas confondre une cellule (vivante) avec une cavité ou un vaisceau mort de bois.'
      ],
      exemple: {
        enonce: 'Comparer au microscope une peau d’oignon et une cellule de joue humaine.',
        etapes: [
          'Sur la peau d’oignon, on observe des cases bien rangées, séparées par des traits nets : ce sont les parois, et chaque case est une cellule.',
          'Après coloration au bleu de méthylène, un point foncé apparaît dans chaque cellule : le noyau.',
          'Sur la cellule de joue, pas de paroi : la limite est souple, la cellule est étalée et isolée ; le noyau est aussi coloré.',
          'Les deux préparations montrent membrane, cytoplasme et noyau : les constituants communs de toute cellule.'
        ],
        conclusion: 'Oignon et joue partagent les mêmes constituants de base ; la cellule végétale se reconnaît à sa paroi rigide qui lui donne une forme régulière.'
      },
      exercices: [
        {
          enonce: 'Un élève affirme : « une feuille est verte parce que ses cellules contiennent du colorant vert ajouté par la plante ». Corriger à l’aide d’un vocabulaire précis.',
          corrige: 'La couleur verte vient des chloroplastes, organites présents dans le cytoplasme de certaines cellules végétales et qui contiennent de la chlorophylle. Ce n’est pas un colorant libre : c’est une structure cellulaire, absente des cellules animales.'
        },
        {
          enonce: 'Classer : amibe, sapin, champignon, levure — lesquels sont unicellulaires, lesquels pluricellulaires ?',
          corrige: 'L’amibe et la levure sont unicellulaires (une seule cellule assure toutes les fonctions). Le sapin est pluricellulaire, avec des cellules végétales à paroi et chloroplastes. Le champignon est le plus souvent pluricellulaire (mycélium formé de filaments), ses cellules ont une paroi mais pas de chloroplastes.'
        }
      ]
    },
    {
      id: 'photosynthese',
      titre: 'La photosynthèse : la plante fabrique sa matière',
      matiere: 'SVT',
      niveau: '6ᵉ',
      chapitre: 'SVT 6ᵉ — Production d’aliments',
      type: 'Fiche de cours',
      difficulte: 'Facile',
      verif: VERIF_A_VERIFIER,
      objectif: 'Identifier les entrées et les sorties d’une plante verte et écrire le bilan de la photosynthèse.',
      definitions: [
        'La matière organique (sucres, amidon, cellulose) est fabriquée par le vivant et contient du carbone ; la matière minérale (eau, sels minéraux, dioxygène, dioxyde de carbone) est présente dans le milieu.',
        'La photosynthèse est la fabrication de matière organique par une plante verte à partir de matière minérale, grâce à la lumière et à la chlorophylle.',
        'La chlorophylle est le pigment vert des chloroplastes qui capte l’énergie lumineuse.',
        'Un être autotrophe fabrique lui-même sa matière organique ; un hétérotrophe doit la puiser dans son alimentation.'
      ],
      proprietes: [
        'Les entrées de la photosynthèse sont le dioxyde de carbone (par les feuilles) et l’eau avec les sels minéraux (par les racines).',
        'Les sorties sont la matière organique, utilisée pour la croissance et le stockage, et le dioxygène rejeté dans l’air.',
        'La plante respire aussi en permanence : la nuit, sans photosynthèse, elle consomme du dioxygène et rejette du CO₂.',
        'La matière organique produite est de l’amidon stocké dans les feuilles, graines et tubercules ; il se révèle par l’eau iodée.'
      ],
      formules: [
        'dioxyde de carbone + eau → (lumière + chlorophylle) matière organique + dioxygène',
        '6 CO₂ + 6 H₂O → C₆H₁₂O₆ + 6 O₂ (bilan simplifié du glucose)',
        'Eau iodée + amidon → couleur bleu foncé (test de repérage)'
      ],
      conditions: [
        'Sans lumière, la photosynthèse ne se fait pas, même si le CO₂ et l’eau sont disponibles.',
        'Sans chlorophylle (feuille blanche d’un variegata, ou partie souterraine), la photosynthèse ne fonctionne pas.',
        'Le test à l’eau iodée ne colore que l’amidon : il faut décolorer la feuille dans l’alcool chaud avant de l’observer.',
        'La photosynthèse ne remplace pas la respiration : les deux processus coexistent.'
      ],
      exemple: {
        enonce: 'On garde un géranium 48 h à l’obscurité, puis on couvre une feuille d’un morceau de papier percé d’une étoile, on éclaire 4 h, on décolore la feuille et on la traite à l’eau iodée.',
        etapes: [
          'Le séjour à l’obscurité épuise les réserves d’amidon de la feuille : elle sert de témoin « départ à zéro ».',
          'Seule la zone en forme d’étoile, non cachée, a reçu de la lumière : c’est le test « lumière présente / absente ».',
          'Après décoloration et eau iodée, l’étoile devient bleu foncé, le reste de la feuille reste brun-jaune.',
          'Bleu foncé = amidon présent. Or l’amidon n’a pu être fabriqué que là où il y avait de la lumière.'
        ],
        conclusion: 'La photosynthèse a besoin de lumière : c’est dans les parties éclairées et vertes que la plante fabrique et stocke sa matière organique.'
      },
      exercices: [
        {
          enonce: 'Dans une serre close et bien éclairée, le dioxyde de carbone diminue le jour et augmente la nuit. Expliquer ces deux variations.',
          corrige: 'Le jour, la photosynthèse fonctionne : la plante consomme du CO₂ et rejette du dioxygène, donc le CO₂ baisse. La nuit, sans lumière, il n’y a plus de photosynthèse mais la respiration continue : la plante prélève du dioxygène et rejette du CO₂, donc il remonte.'
        },
        {
          enonce: 'Un camarade dit : « les plantes nous donnent de l’oxygène, il faut donc dormir avec beaucoup de plantes dans la chambre ». Nuancer.',
          corrige: 'Le jour, oui : la photosynthèse dégage du dioxygène. Mais la nuit, les plantes ne font que respirer : elles consomment du dioxygène et rejettent du CO₂. Dans une chambre fermée, l’effet beneficial du jour disparaît la nuit ; il ne faut donc pas en mettre une grande quantité.'
        }
      ]
    },
    {
      id: 'reproduction-plantes',
      titre: 'La reproduction des plantes à fleurs',
      matiere: 'SVT',
      niveau: '5ᵉ',
      chapitre: 'SVT 5ᵉ — Fonction de reproduction',
      type: 'Fiche de cours',
      difficulte: 'Moyen',
      verif: VERIF_A_VERIFIER,
      objectif: 'Relier la structure de la fleur à la fécondation, puis à la formation de la graine et du fruit.',
      definitions: [
        'La fleur est l’organe de reproduction de la plante à fleurs. Mâle = étamines, femelle = pistil (ou style et ovaire).',
        'Chaque étamine porte une anthère qui libère le pollen ; le pollen contient le gamète mâle.',
        'Le pistil comporte le stigmate (sommet collant), le style et l’ovaire ; l’ovaire renferme un ou plusieurs ovules, chaque ovule contenant un gamète femelle.',
        'La pollinisation est le transport du pollen d’une anthère jusqu’au stigmate. La fécondation est la fusion du gamète mâle et du gamète femelle dans l’ovule.',
        'La dissémination est l’éparpillement des graines ou des fruits loin du pied mère.'
      ],
      proprietes: [
        'La fécondation transforme l’ovule en graine, et l’ovaire en fruit ; le fruit protège et favorise la dissémination des graines.',
        'La pollinisation est assurée par le vent (plantes à pollen léger) ou par les insectes (fleurs colorées, nectar, pollen collant).',
        'Une reproduction sexuée mélange les caractères des deux parents : la descendance est différente des parents.',
        'La reproduction végétative (bouture, marcottage, tubercule) est asexuée : le nouveau pied est un clone du parent.'
      ],
      formules: [
        'Anthère → pollen → stigmate → tube pollinique → ovule',
        'fécondation : gamète mâle + gamète femelle → cellule-œuf',
        'ovule fécondé → graine ; ovaire → fruit ; fleur → fruit',
        'graine = embryon + réserves + tégument'
      ],
      conditions: [
        'Pour obtenir un fruit, il faut que la pollinisation puis la fécondation aient eu lieu ; une fleur isolée sous cloche ne fructifie généralement pas.',
        'Dans une fleurs sans pépins (agrumes, banane), il y a avortement ou parthénocarpie : on ne peut pas conclure « pas de fécondation » sans vérifier.',
        'Le pollen d’une espèce ne féconde pas l’ovule d’une autre espèce : la reproduction sexuée conserve l’espèce.'
      ],
      exemple: {
        enonce: 'Au verger, on couvre une branche de pommier en fleur avec une pochette de tulle (insectes exclus), et on laisse une branche témoin à l’air libre. Que constate-t-on et pourquoi ?',
        etapes: [
          'La branche couverte reçoit de la lumière et de l’eau mais aucun insecte : le pollen ne peut pas passer d’une fleur à une autre.',
          'À l’automne, la branche témoin porte des pommes ; la branche couverte reste presque sans fruit, ou donne des fruits avortés.',
          'Les conditions de culture sont identiques ailleurs : la seule différence est la pollinisation.',
          'On confirme en déposant soi-même du pollen sur les fleurs couvertes : les fruits se forment à nouveau.'
        ],
        conclusion: 'Le fruit ne se développe qu’après pollinisation et fécondation : ce sont les insectes qui assurent le transport du pollen, d’où l’intérêt des ruchers près des vergers.'
      },
      exercices: [
        {
          enonce: 'Une pomme contient plusieurs pépins ; une cerise n’en contient qu’un. Que peut-on en déduire sur les ovaires de ces deux fleurs ?',
          corrige: 'Chaque pépin provient d’un ovule fécondé. La fleur de pommier comportait donc plusieurs ovules dans l’ovaire, alors que la fleur de cerisier n’en avait qu’un (ovaire à un seul ovule). Le fruit, lui, vient de l’ovaire dans les deux cas.'
        },
        {
          enonce: 'Un planteur de manioc coupe des tiges et les replante au lieu de semer. Nommer le mode de reproduction et donner un avantage et un inconvénient.',
          corrige: 'C’est une reproduction végétative (asexuée) : chaque bouture donne un clone du pied d’origine. Avantage : on conserve exactement les qualités de la plante mère, et c’est rapide. Inconvénient : toute la plantation est génétiquement identique, donc une seule maladie peut tout détruire.'
        }
      ]
    },
    {
      id: 'heredite',
      titre: 'Hérédité : gènes, allèles et caryotype',
      matiere: 'SVT',
      niveau: '4ᵉ',
      chapitre: 'SVT 4ᵉ — Génétique',
      type: 'Fiche de cours',
      difficulte: 'Difficile',
      verif: VERIF_A_VERIFIER,
      objectif: 'Suivre la transmission d’un caractère simple et prévoir les phénotypes de la descendance.',
      definitions: [
        'Un caractère héréditaire (couleur des yeux, groupe sanguin) est transmis des parents à l’enfant par les chromosomes.',
        'Un gène est une portion d’ADN portant l’information d’un caractère ; il existe souvent en plusieurs versions appelées allèles.',
        'Un allèle est dominant s’il s’exprime même en un seul exemplaire ; un allèle récessif ne s’exprime que s’il est présent en deux exemplaires.',
        'Le génotype est la composition allélique (Aa), le phénotype est ce qui est observable (caractère dominant).',
        'Le caryotype est la photo classée des chromosomes d’une cellule : chez l’être humain, 46 chromosomes, soit 23 paires (22 paires + 1 paire sexuelle).'
      ],
      proprietes: [
        'Sur chaque paire de chromosomes homologue, un exemplaire vient du père, l’autre de la mère : chaque parent transmet 23 chromosomes.',
        'Les gamètes (spermatozoïde, ovule) ne contiennent que 23 chromosomes, un par paire : c’est le effet de la méiose.',
        'La fécondation rétablit 46 chromosomes : c’est pourquoi le nombre est constant d’une génération à la suivante.',
        'Un individu homozygote porte deux fois le même allèle (AA ou aa) ; un individu hétérozygote porte deux allèles différents (Aa).',
        'Chez les Individus de génotype Aa, seul le caractère dominant est visible : l’allèle récessif est caché mais reste transmissible.'
      ],
      formules: [
        '46 chromosomes = 23 paires chez l’humain ; gamète = 23 chromosomes',
        'Aa × Aa → AA, Aa, Aa, aa : 3 enfants à phénotype dominant sur 4 en moyenne',
        'Aa × aa → 1/2 Aa, 1/2 aa',
        'Notation : un allèle dominant en majuscule (A), un allèle récessif en minuscule (a)'
      ],
      conditions: [
        'Les proportions 3/1 et 1/1 sont des probabilités par conception, pas des garanties : sur une petite famille, le résultat peut être différent.',
        'Un tableau de croisement n’a de sens que si l’on connaît les génotypes des parents, pas seulement leurs phénotypes.',
        'Beaucoup de caractères (taille, couleur de peau) ne suivent pas une dominance simple : ils dépendent de plusieurs gènes et du milieu.',
        'Une anomalie chromosomique comme la trisomie 21 provient d’un chromosome surnuméraire, pas d’un allèle dominant ou récessif.'
      ],
      exemple: {
        enonce: 'Chez les pois, la couleur jaune (allèle Y dominant) masque la couleur verte (allèle y). Croiser deux plantes jaunes issues l’une d’un croisement pur jaune × vert, donc toutes deux Yy. Quels sont les phénotypes attendus ?',
        etapes: [
          'Génotypes des parents : Yy × Yy (les deux sont jaunes, mais portent chacune un allèle vert caché).',
          'Chaque parent donne soit Y soit y ; on construit l’échiquier : YY, Yy, yY, yy.',
          'Trois combinaisons sur quatre comportent au moins un Y : elles sont jaunes. Une seule (yy) est verte.',
          'Ratio de phénotypes : 3 jaunes pour 1 vert (3/1). Le caractère vert n’a pas disparu, il était masqué chez les parents.'
        ],
        conclusion: 'Deux parents jaunes peuvent donner un enfant vert : c’est la preuve que les allèles se transmettent sans nécessairement s’exprimer.'
      },
      exercices: [
        {
          enonce: 'Deux parents de groupe A et B ont un enfant de groupe O (allèle O récessif). Est-ce possible ? Justifier par un génotype.',
          corrige: 'Oui, si chacun des parents porte un allèle O caché : le parent A est AO, le parent B est BO. Le croisement AO × BO donne AB, AO, BO, OO : un enfant sur quatre en moyenne est de groupe O. Les génotypes cachent des allèles non exprimés.'
        },
        {
          enonce: 'Un caryotype montre 46 chromosomes avec une paire 21 formée de trois chromosomes. Corriger l’affirmation « il manque un chromosome ».',
          corrige: 'Ce n’est pas un manque mais un excès : la paire 21 compte trois chromosomes au lieu de deux, soit 47 chromosomes au total. On parle de trisomie 21. Le caryotype se lit par paires homologues et par chromosome sexuel (XX ou XY).'
        }
      ]
    },
    {
      id: 'constituants-vivant',
      titre: 'Les constituants chimiques du vivant et leurs tests',
      matiere: 'SVT',
      niveau: 'Première',
      chapitre: 'SVT Première — Aliments et nutrition',
      type: 'Fiche de cours',
      difficulte: 'Moyen',
      verif: VERIF_A_VERIFIER,
      objectif: 'Associer chaque grande famille de molécules organiques à un test de mise en évidence et à son rôle.',
      definitions: [
        'Les glucides (sucres) apportent de l’énergie : le glucose est un ose simple, l’amidon est un polymère de glucose.',
        'Les lipides (graisses et huiles) sont stockées et isolantes ; elles sont insolubles dans l’eau.',
        'Les protides (protéines) sont construits à partir d’acides aminés et jouent un rôle structurel et fonctionnel (enzymes, muscles).',
        'Les acides nucléiques (ADN, ARN) portent l’information génétique ; ce sont aussi des polymères (nucléotides).',
        'Un polymère est une longue molécule formée par la répétition de petits maillons appelés monomères.'
      ],
      proprietes: [
        'Toutes ces molécules organiques contiennent du carbone, de l’hydrogène et de l’oxygène ; les protides ajoutent de l’azote, parfois du soufre.',
        'L’eau est le constituant le plus abondant du vivant, mais ce n’est pas une matière organique.',
        'Un aliment est un mélange : il contient presque toujours plusieurs familles de molécules, dans des proportions variables.',
        'Les tests chimiques ne donnent qu’une présomption de présence : ils ne dosent pas et ne prouvent pas l’absence des autres molécules.'
      ],
      formules: [
        'Glucose (ose réducteur) + liqueur de Fehling chauffée → précipité brique',
        'Amidon + eau iodée → couleur bleu-noir',
        'Lipides + éthanol puis eau → émulsion blanchâtre ; ou tache translucide sur papier',
        'Protéines + biuret → coloration violetée',
        'Énergie immédiate : glucose ; énergie de réserve : lipides et amidon'
      ],
      conditions: [
        'La réaction de Fehling nécessite une chauffe au bain-marie : sans elle, le test reste négatif.',
        'Le test à l’eau iodée ne colore que l’amidon, pas le glucose : un résultat négatif ne signifie pas absence de sucre.',
        'Il faut un témoin (eau distillée + même réactif) pour comparer la couleur obtenue.',
        'Le biuret réagit sur les liaisons peptidiques : il détecte les protéines, pas un acide aminé isolé.'
      ],
      exemple: {
        enonce: 'On broie une graine de haricot, on filtre, puis on teste le filtrat : Fehling chauffé donne un précipité brique, eau iodée reste brun-jaune, biuret devient violet.',
        etapes: [
          'Précipité brique avec Fehling : présence d’un ose réducteur (glucose).',
          'Aucune coloration bleue avec l’eau iodée : pas d’amidon dans ce filtrat.',
          'Coloration violet au biuret : présence de protéines, abondantes chez les légumineuses.',
          'On compare chaque tube à un témoin (eau distillée + réactif) pour ne pas confondre la couleur du réactif seul et la réaction.'
        ],
        conclusion: 'La graine de haricot contient des oses simples et des protéines mais pas d’amidon : c’est ce qui explique la valeur nutritive des légumineuses.'
      },
      exercices: [
        {
          enonce: 'Un test Fehling est négatif mais le biuret positif sur un lait. Que conclure, et que ne peut-on pas conclure ?',
          corrige: 'On conclut la présence de protéines (normal pour le lait) et l’absence de glucose libre en quantité détectable. On ne peut PAS conclure à l’absence de tout sucre : le lactose est un glucide, et le test de Fehling n’est pas fait pour doser ni pour détecter tous les oses.'
        },
        {
          enonce: 'Expliquer pourquoi l’huile laisse une tache translucide sur du papier alors que l’eau laisse une tache qui sèche et disparaît.',
          corrige: 'Les lipides ne s’évaporent pas : ils imprègnent le papier et restent translucides. L’eau s’évapore à l’air libre, la tache disparaît. C’est un test physique simple de présence de lipides, sans réactif.'
        }
      ]
    },

    /* ---------- Histoire-Géographie (rubriques renommées) ------------ */
    {
      id: 'premieres-civilisations',
      titre: 'Les premières civilisations et l’invention de l’écriture',
      matiere: 'Histoire-Géo',
      niveau: '6ᵉ',
      chapitre: 'Avant l’histoire, puis l’histoire',
      branche: 'Histoire',
      type: 'Fiche de cours',
      difficulte: 'Facile',
      verif: VERIF_A_VERIFIER,
      libelles: {
        definitions: 'Vocabulaire',
        proprietes: 'Faits et analyses',
        formules: 'Repères chronologiques',
        conditions: 'Vigilance sur les dates et les mots',
        exemple: 'Étude guidée',
        exercices: 'Questions d’entraînement'
      },
      objectif: 'Expliquer en quoi l’écriture, les villes et l’État caractérisent les premières civilisations.',
      definitions: [
        'La Préhistoire désigne la période sans écriture, connue seulement par les fouilles (outils, ossements, peinture). L’Histoire commence avec l’invention de l’écriture.',
        'Le Néolithique (à partir d’environ −10 000) est la période où l’homme devient producteur : agriculture, élevage, villages sédentaires, poterie.',
        'Une cité est une ville organisée avec un territoire, des institutions et des artisans spécialisés ; un État est un pouvoir central qui lève l’impôt et commande.',
        'Une écriture est un système de signes notant la langue : cunéiforme (Mésopotamie), hiéroglyphes (Égypte), puis alphabet.',
        'Un empire est un État qui commande à plusieurs peuples et territoires conquis.'
      ],
      proprietes: [
        'L’écriture naît d’un besoin de gestion : compter les récoltes, enregistrer les taxes et les réserves des temples.',
        'Les premiers États apparaissent dans les vallées des grands fleuves (Tigre et Euphrate, Nil, Indus, fleuve Jaune), où l’irrigation nourrit une population dense.',
        'La spécialisation des métiers et le stockage des surplus permettent de financer des monuments, une armée et des scribes.',
        'Le pharaon d’Égypte cumule le pouvoir politique, militaire et religieux ; ses écrits et ses tombeaux documentent son règne.',
        'Une civilisation se reconnaît aussi à ses techniques : métallurgie du bronze puis du fer, roue, voile, briques cuites.'
      ],
      formules: [
        'vers −10 000 : début du Néolithique, agriculture et premiers villages',
        'vers −3300 : première écriture cunéiforme en Mésopotamie (Sumer)',
        'vers −3200 : hiéroglyphes en Égypte ; unification de l’Égypte vers −3100',
        'vers −2550 : pyramide de Khéops à Gizeh',
        'vers −1790 : code de Hammurabi à Babylone (loi écrite)'
      ],
      conditions: [
        'Les dates « vers −3300 » sont approximatives : en histoire ancienne, on écrit « environ » ou « vers », jamais une date sèche.',
        'Il ne faut pas dire qu’un peuple « n’a pas d’histoire » avant l’écriture : il a une Préhistoire, donc un passé',
        'Un document écrit est une source parmi d’autres : archéologie, ossements et objets complètent ou contredisent les textes.',
        'Le mot « civilisation » ne désigne pas un modèle supérieur, mais une façon d’organiser une société.'
      ],
      exemple: {
        enonce: 'Une tablette sumérienne liste des quantités d’orge livrées à un temple. Que peut en déduire un historien ?',
        etapes: [
          'La tablette est un compte, pas un poème : l’écriture sert d’abord à enregistrer des biens et des obligations.',
          'Elle suppose une récolte excédentaire, donc une agriculture organisée et un lieu de stockage (temple ou palais).',
          'Elle implique une personne qui sait écrire et compter : le scribe, donc un métier spécialisé et une formation.',
          'Elle montre enfin un pouvoir capable de demander et de recevoir ces livraisons : l’impôt existe déjà.'
        ],
        conclusion: 'Un simple compte d’orge documente à lui seul écriture, surplus agricole, spécialisation des métiers et pouvoir d’État : ce sont les traits d’une première civilisation.'
      },
      exercices: [
        {
          enonce: 'Un camarade affirme : « l’écriture a été inventée pour raconter des histoires ». Discuter.',
          corrige: 'Les plus anciens textes connus sont surtout des listes de comptes et des documents administratifs. Raconter vient après (L’Épopée de Gilgamesh). L’écriture répond d’abord à un besoin de gestion des sociétés urbaines et des États.'
        },
        {
          enonce: 'Pourquoi les premières civilisations sont-elles nées près des fleuves ? Donner trois raisons.',
          corrige: 'Terres fertiles renouvelées par les crues ; eau disponible pour l’irrigation en saison sèche ; voie de transport pour les marchandises ; poisson et gibier d’eau complètent l’alimentation.'
        }
      ]
    },
    {
      id: 'islam-empires-ouest-africains',
      titre: 'L’islam et les grands empires d’Afrique de l’Ouest',
      matiere: 'Histoire-Géo',
      niveau: '5ᵉ',
      chapitre: 'Monde musulman et Afrique de l’Ouest',
      branche: 'Histoire',
      type: 'Fiche de cours',
      difficulte: 'Moyen',
      verif: VERIF_A_VERIFIER,
      libelles: {
        definitions: 'Vocabulaire',
        proprietes: 'Faits et analyses',
        formules: 'Repères chronologiques',
        conditions: 'Vigilance sur les dates et les mots',
        exemple: 'Étude guidée',
        exercices: 'Questions d’entraînement'
      },
      objectif: 'Relier la diffusion de l’islam aux routes commerciales et à la puissance des empires du Mali et de Songhaï.',
      definitions: [
        'L’islam est une religion monothéiste née à La Mecque ; le Coran en est le livre sacré, écrit en arabe.',
        'Les cinq piliers de l’islam sont : la profession de foi (shahada), la prière (salat), l’aumône (zakat), le jeûne du ramadan et le pèlerinage à La Mecque (hadj).',
        'Le calife est le successeur du Prophète à la tête de la communauté musulmane.',
        'Une caravane transsaharienne transporte or, esclaves, ivoire et produits manufacturés du sud vers le nord ; le sel descend du Sahara vers la savane.',
        'Un griot est un spécialiste de la mémoire orale : il raconte l’histoire des familles et des souverains d’Afrique de l’Ouest.'
      ],
      proprietes: [
        'L’islam arrive en Afrique de l’Ouest par le commerce, avec les marchands berbères et dyoula, bien plus que par la conquête : les souverains adoptent la religion pour les échanges et l’écrit.',
        'Trois empires se succèdent sur la boucle du Niger : Ghana (Koumbi Saleh, environ VIIIe-XIIIe siècle), Mali (à partir de 1235), puis Songhaï.',
        'L’or du Bambouk, de Bouré et du Akan passe par Tombouctou et Gao ; ces villes deviennent des centres marchands et savants.',
        'Tombouctou attire des savants, des copies de manuscrits et un commerce du livre : la ville est un foyer de l’écrit arabe en Afrique.',
        'La puissance du Mali repose aussi sur une organisation politique et militaire locale (chefs de clans, armée du farba), pas seulement sur le commerce.',
        'Les sociétés conservent leurs croyances traditionnelles à côté de l’islam : l’histoire est aussi celle de syncrétismes et de cohabitations.'
      ],
      formules: [
        '571 (environ) : naissance de Muhammad à La Mecque',
        '622 : l’hégire, départ à Médine ; an 1 du calendrier musulman',
        '632 : mort du Prophète ; débuts des califes',
        'vers 1235 : bataille de Kirina, Soundiata Keïta fonde l’Empire du Mali',
        '1324 : pèlerinage (hadj) de Kankou Moussa au Caire et à La Mecque',
        '1493-1528 : Askia Mohamed organise l’Empire de Songhaï et développe Tombouctou',
        '1591 : bataille de Tondibi, la défaite de Songhaï face aux troupes marocaines'
      ],
      conditions: [
        'Les dates anciennes de l’Afrique de l’Ouest sont souvent « environ » : deux sources peuvent donner des années différentes.',
        'Il faut distinguer ce que disent les textes arabes des marchands et ce que transmet la tradition orale des griots.',
        'Présenter l’arrivée de l’islam comme une « civilisation venue de l’extérieur » masque les sociétés savantes déjà organisées de la boucle du Niger.',
        'Le mot « empire » désigne ici des ensembles politiques instables, avec des provinces dont l’allégeance changeait.'
      ],
      exemple: {
        enonce: 'Kankou Moussa traverse le Sahara en 1324 avec une caravane immense et distribue de l’or au Caire. Que révèle ce pèlerinage ?',
        etapes: [
          'Le hadj est un pilier de l’islam : le souverain du Mali s’y rend comme musulman, ce qui montre l’adoption de la religion au sommet de l’État.',
          'Une telle caravane exige des vivres, des guides et des gardes : seule un État riche et organisé peut financer un tel trajet.',
          'Les quantités d’or offertes déstabilisent le marché au Caire : l’Empire du Mali est à un centre majeur de production.',
          'Les récits arabes de ce voyage font connaître le Mali hors d’Afrique : l’écrit devient une source sur notre propre histoire.'
        ],
        conclusion: 'Le pèlerinage de 1324 montre à la fois la place de l’islam dans l’État malien et la puissance liée au commerce transsaharien de l’or.'
      },
      exercices: [
        {
          enonce: 'Expliquer pourquoi le sel avait autant de valeur dans la savane que l’or au Sahara.',
          corrige: 'Le sel est indispensable à l’alimentation et à la conservation des poissons et des viandes, et il n’existe pas localement au sud du Sahara. Il est extrait des mines du désert (Taghaza), donc rare au sud. En échange, l’or est abondant au sud et recherché au nord pour la monnaie et les bijoux : les deux marchandises se rencontrent sur les marchés de Tombouctou et de Gao.'
        },
        {
          enonce: 'Nommer deux éléments qui font de Tombouctou un foyer intellectuel du XIVe-XVe siècle.',
          corrige: 'La présence de mosquées-écoles (dont la Sankoré), une activité de copie et de vente de manuscrits, des savants venus du Maghreb et du Machrek, et la protection des souverains — Askia Mohamed favorise l’enseignement et les livres vers 1500.'
        }
      ]
    },
    {
      id: 'traite-negriere',
      titre: 'La traite négrière, l’esclavage et les abolitions',
      matiere: 'Histoire-Géo',
      niveau: '4ᵉ',
      chapitre: 'XVIIe-XIXe siècles : traite et abolitions',
      branche: 'Histoire',
      type: 'Fiche de cours',
      difficulte: 'Moyen',
      verif: VERIF_A_VERIFIER,
      libelles: {
        definitions: 'Vocabulaire',
        proprietes: 'Faits et analyses',
        formules: 'Repères chronologiques',
        conditions: 'Vigilance sur les dates et les mots',
        exemple: 'Étude guidée',
        exercices: 'Questions d’entraînement'
      },
      objectif: 'Décrire le fonctionnement de la traite atlantique et comprendre pourquoi l’abolition de 1848 est une date fondatrice.',
      definitions: [
        'L’esclavage est une situation de domination où une personne est traitée comme un bien : elle peut être vendue, et ses enfants aussi.',
        'La traite est le commerce et le transport des personnes esclaves. La traite atlantique (XVIe-XIXe siècle) déporte des Africains vers les Amériques.',
        'Le « triangle » désigne le circuit des navires : produits manufacturés vers l’Afrique, captifs vers l’Amérique, denrées coloniales vers l’Europe.',
        'L’« effroyable passage » (middle passage) est la traversée du navire, où les captifs sont entassés ; la mortalité y est élevée.',
        'Une habitation est une exploitation coloniale (sucre, café, indigo, coton) dont le travail est fait par des personnes esclaves.'
      ],
      proprietes: [
        'Entre le XVIe et le XIXe siècle, environ 12 à 15 millions de personnes sont déportées d’Afrique vers les Amériques : la traite atlantique est un commerce à grande échelle.',
        'Les captifs sont le plus souvent achetés à des marchands et à des souverains côtiers ; des guerres, des raids et des dettes alimentent la capture.',
        'Le Code noir (1685) fixe le statut des esclaves dans les colonies françaises : il les définit comme des biens meubles et encadre les châtiments.',
        'Gorée, Aoudia, Ouidah, Lomboko sont des comptoirs de la traite ; l’île de Gorée, proche de Dakar, en est devenue le lieu de mémoire.',
        'Les personnes esclavisées résistent dès le départ : marronnage, révoltes à bord, insurrections comme Saint-Domingue à partir de 1791.',
        'L’abolition n’est pas un don : elle résulte des luttes des personnes esclavisées, de l’action des abolitionnistes et d’intérêts économiques qui changent.'
      ],
      formules: [
        '1444 : premiers marchés d’esclaves organisés par les Portugais (Lisbonne, Lagos)',
        '1685 : Code noir dans les colonies françaises',
        '1791 : insurrection de Saint-Domingue',
        '1794 : 1re abolition par la France, puis rétablissement de l’esclavage par Bonaparte en 1802',
        '27 avril 1848 : décret d’abolition en France, signé sous la IIe République, avec Victor Schœlcher',
        '1848 : les îles de Gorée, Saint-Louis et dépendances sont représentées à l’Assemblée française'
      ],
      conditions: [
        'On écrit « personnes esclavisées » ou « esclaves » selon le sujet : les unes insistent sur la violence subie, les autres sur le statut juridique.',
        'La date du 27 avril 1848 est celle du décret ; elle n’est pas appliquée partout le même jour dans toutes les colonies.',
        'Traite intérieure (saharienne, orientale) et traite atlantique sont des phénomènes distincts : ne pas confondre les chiffres.',
        'Le rôle des marchands et des pouvoirs africains est attesté mais ne déplace pas la responsabilité sur les sociétés africaines : la demande et le financement sont européens.'
      ],
      exemple: {
        enonce: 'Sur l’île de Gorée, la « Maison des esclaves » présente une porte ouverte sur la mer, appelée porte du non-retour. Que peut et que ne peut pas enseigner ce lieu ?',
        etapes: [
          'Les murs, les cellules et les comptes des négociants prouvent l’existence d’un comptoir où des personnes étaient gardées avant l’embarquement.',
          'Le lieu sert de point de rassemblement pour commémorer : chaque 27 avril, la mémoire de l’abolition y est célébrée au Sénégal.',
          'Mais les historiens rappellent que la plus grande partie de la traite passait par d’autres comptoirs de la côte : Gorée n’était pas le principal port de départ.',
          'Le musée doit donc expliquer la traite atlantique dans son ensemble, pas laisser croire que tout partait de cette île.'
        ],
        conclusion: 'Gorée est un lieu de mémoire essentiel, à condition de l’inscrire dans l’ensemble des comptoirs de la côte et dans les chiffres réels de la traite.'
      },
      exercices: [
        {
          enonce: 'Expliquer le mot « triangle » et donner une denrée de chaque côté du circuit.',
          corrige: 'Côté Europe → Afrique : tissus, alcool, armes, fer. Côté Afrique → Amériques : personnes captives transportées dans les navires négriers. Côté Amériques → Europe : sucre, café, indigo, coton produits par le travail esclaves. Le navire revient ensuite en Europe.'
        },
        {
          enonce: 'Pourquoi parle-t-on du 27 avril 1848 comme d’une date fondatrice au Sénégal ?',
          corrige: 'C’est la date du décret français qui abolit l’esclavage dans les colonies, appliqué à Saint-Louis et Gorée et commémoré chaque année au Sénégal. Elle marque aussi l’accès à la citoyenneté et aux sièges de députés attribués aux Quatre Communes.'
        }
      ]
    },
    {
      id: 'colonisation-independance',
      titre: 'Colonisation, résistances et indépendance du Sénégal',
      matiere: 'Histoire-Géo',
      niveau: '3ᵉ',
      chapitre: 'De la colonisation à l’indépendance',
      branche: 'Histoire',
      type: 'Fiche de cours',
      difficulte: 'Difficile',
      verif: VERIF_A_VERIFIER,
      libelles: {
        definitions: 'Vocabulaire',
        proprietes: 'Faits et analyses',
        formules: 'Repères chronologiques',
        conditions: 'Vigilance sur les dates et les mots',
        exemple: 'Étude guidée',
        exercices: 'Questions d’entraînement'
      },
      objectif: 'Expliquer l’organisation de l’AOF, les formes de résistance et le chemin vers l’indépendance de 1960.',
      definitions: [
        'La colonisation est une domination politique, militaire et économique d’une société par un État étranger installé sur son territoire.',
        'L’AOF (Afrique-Occidentale française), créée en 1895, regroupe plusieurs territoires sous un gouvernement général installé à Dakar.',
        'Le travail forcé et l’impôt de capitation sont deux obligations imposées aux populations colonisées.',
        'Une résistance peut être armée (combats), religieuse (guides et confréries) ou politique (élus, syndicats, presse).',
        'L’indépendance est la conquête de la souveraineté : un État propre, son armée, sa monnaie et ses lois.'
      ],
      proprietes: [
        'La conquête est achevée à la fin du XIXe siècle, mais n’est pas totale immédiatement : Lat Dior est tué à Démbé en 1886 et Ahmadou Bamba est déporté en 1895.',
        'L’économie coloniale est spécialisée dans un seul produit d’exportation, l’arachide, avec chemin de fer Dakar-Niger et port de Dakar ; les cultures vivrières sont délaissées.',
        'Faidherbe, gouverneur à partir de 1854, a développé Saint-Louis et Dakar et engagé la conquête ; son nom est aujourd’hui discuté par les mémoires.',
        'Les Sénégalais disposent d’un statut particulier : les Quatre Communes (Saint-Louis, Gorée, Rufisque, Dakar) sont représentées à l’Assemblée française, avec Blaise Diagne élu député en 1914.',
        'La résistance religieuse des confréries (mouridisme avec Ahmadou Bamba, tidjaniya avec Ibrahima Niasse) organise la société coloniale et protège des identités.',
        'Après la Seconde Guerre mondiale (loi Lamine Guèye 1946, grève des cheminots 1947-48, Union française puis Communauté 1958), le chemin vers l’indépendance est politique.',
        'La Fédération du Mali (Sénégal et Soudan français) accède à l’indépendance le 20 juin 1960 ; après son éclatement, la république du Sénégal est proclamée le 20 août 1960 et Léopold Sédar Senghor en devient le premier président.'
      ],
      formules: [
        '1885 : conférence de Berlin : règles de partage de l’Afrique',
        '1895 : création de l’AOF, gouvernement général à Dakar',
        '1886 : mort de Lat Dior à Démbé ; 1895 : déportation de Ahmadou Bamba au Gabon',
        '1914 : Blaise Diagne, premier député noir d’Afrique française à l’Assemblée',
        '1946 : loi Lamine Guèye (citoyenneté) et création de l’Union française',
        '1956 : loi-cadre : autonomie interne des territoires africains',
        '4 avril 1959 : Fédération du Mali (Sénégal et Soudan français)',
        '20 juin 1960 : indépendance de la Fédération ; 20 août 1960 : république du Sénégal seule'
      ],
      conditions: [
        'Les dates de 1960 sont souvent citées ensemble (20 juin, puis retrait de la Fédération) : préciser de quel État on parle (Sénégal ou Mali).',
        'Le mot « assimilation » désigne un projet juridique (faire des colonisés des citoyens français) ; il ne décrit pas la réalité vécue par la majorité.',
        'Les grands hommes de la résistance ne doivent pas faire oublier les résistances quotidiennes : refus de l’impôt, exode vers les territoires voisins.',
        'L’histoire coloniale est écrite en partie par l’administration coloniale : croiser avec les sources orales et africaines.'
      ],
      exemple: {
        enonce: 'Un village du Cayor refuse de payer l’impôt de capitation et de fournir des porteurs pour le chemin de fer. Que risque-t-il et quelles sont ses options ?',
        etapes: [
          'L’impôt de capitation est dû par personne ; le non-paiement expose à des amendes, des peines de prison et à la saisie de biens.',
          'Le travail forcé fournit gratuitement des porteurs et des manœuvres : s’y soustraire, c’est aussi risquer des sanctions.',
          'Les villageois peuvent refuser en bloc, partir vers une zone moins contrôlée, ou faire appel à un guide religieux ou à un élu pour négocier.',
          'Ces résistances sont difficiles à dater car elles n’étaient pas écrites : c’est l’administration coloniale qui les enregistre, dans ses rapports.'
        ],
        conclusion: 'La domination coloniale tient par l’impôt et le travail forcé ; lui résister suppose de choisir entre refus ouvert, exode et recours aux nouvelles voix politiques.'
      },
      exercices: [
        {
          enonce: 'Donner trois différences entre la conquête (jusqu’aux années 1890) et la période coloniale d’administration (à partir de 1895).',
          corrige: 'La conquête est militaire et mobile ; l’administration installe des chefs de canton, des postes et des frontières. La conquête détruit des pouvoirs (Lat Dior, Samory Touré), l’administration s’appuie sur un pouvoir local, indirect. La conquête prélève un butin ; l’administration organise une économie (impôt, arachide, chemin de fer).'
        },
        {
          enonce: 'Pourquoi 1960 n’est-elle pas la fin des liens entre le Sénégal et la France ?',
          corrige: 'L’indépendance donne la souveraineté politique, mais les accords de coopération maintiennent des liens monétaires (le franc CFA), militaires, éducatifs et économiques. La souveraineté complète suppose de longs débats sur la monnaie, les bases et les langues d’enseignement : ces questions restent ouvertes après 1960.'
        }
      ]
    },
    /* ---------- Histoire-Géographie : géographie (programme 2004) ----- */
    {
      id: 'milieu-proche-6e',
      titre: 'Le milieu proche : les six régions géographiques du Sénégal',
      matiere: 'Histoire-Géo',
      branche: 'Géographie',
      niveau: '6ᵉ',
      chapitre: 'Géographie 6ᵉ — le milieu proche',
      type: 'Fiche de cours',
      difficulte: 'Facile',
      verif: VERIF_A_VERIFIER,
      source: 'Géographie, classe de 6ᵉ (2004) : l’année est organisée autour de six « régions géographiques » (A à F), chacune décrite par des leçons de 1 à 8. Annexe 1 du programme : correspondance avec le découpage administratif de 2004.',
      libelles: {
        definitions: 'Vocabulaire',
        proprietes: 'Faits et analyses',
        formules: 'Leçons du programme (ordre officiel)',
        conditions: 'Vigilance sur les mots et les choix',
        exemple: 'Étude guidée',
        exercices: 'Questions d’entraînement'
      },
      objectif: 'Comprendre ce que le programme appelle « milieu proche » et savoir décrire la région géographique où se trouve son établissement.',
      definitions: [
        'Le « milieu proche », dans le programme de 6ᵉ, n’est pas seulement le village ou la commune de l’élève : il est assimilé, par convention, à une « région géographique » du Sénégal, un espace plus vaste dont l’originalité tient à plusieurs spécificités (naturelles, humaines, économiques et sociales).',
        'Une région géographique n’est pas une région administrative : la première est un découpage fait pour enseigner, la seconde un découpage de l’État. Le rapport d’enquête note que la confusion est fréquente et gêne le choix des leçons.',
        'Une étude de situation est la première leçon de chaque région : on y localise l’espace sur une carte, avec les notions d’orientation et de représentation.',
        'Les conditions physiques d’un milieu regroupent la topographie (relief), le climat, les sols (critères édaphiques), l’hydrographie (eaux) et la biogéographie (végétation et sols vivants).',
        'Une monoculture est une région organisée autour d’une seule culture marchande, ici l’arachide ; la diversification est le passage à plusieurs cultures ou activités.'
      ],
      proprietes: [
        'Six régions géographiques structurent le programme de 6ᵉ, chacune avec un thème officiel : A le Bassin arachidier (« La culture sous-pluie : de la monoculture à la diversification »), B Dakar et le littoral central (« Les activités urbaines et suburbaines »), C le Ferlo (« Le problème de l’eau et l’activité pastorale »), D la vallée du Sénégal (« La vallée du fleuve et son aménagement »), E la Casamance (« Étude d’un écosystème humide »), F le Haut-Sénégal, au Sud-Est (« Une région de contact »).',
        'Prescription claire du programme : l’enseignant part de la région géographique qui abrite l’établissement, puis s’ouvre progressivement aux autres régions et à d’autres espaces du territoire national.',
        'Chaque région suit la même grille : étude de situation, conditions physiques, population, organisation de l’espace, activités, puis une dernière leçon de « Problèmes et perspectives de développement ».',
        'La démarche prescrite dans le cycle moyen est « empirico-inductive » : on part de l’observation d’un milieu connu de l’élève avant de généraliser, à l’inverse du lycée où domine la démarche hypothético-déductive.',
        'Le programme avertit lui-même que tout découpage régional est « nécessairement artificiel et provisoire », parce que les éléments de l’espace agissent les uns sur les autres.',
        'Le tableau de correspondance de l’annexe 1 associe par exemple le Bassin arachidier aux régions administratives de Kaolack, Fatick et Diourbel, et l’arrondissement de Koumpentoum (département de Tambacounda) à une autre région géographique : une région géographique peut donc couvrir plusieurs régions administratives, ou n’en couvrir qu’une partie.',
        'La première leçon de géographie de 6ᵉ est donc une leçon de méthode : orienter, mesurer, localiser et représenter un espace, compétences reprises tout le collège.'
      ],
      formules: [
        'Leçon 1 — Étude de situation : localisation-carte (notions d’orientation et de représentation)',
        'Leçon 2 — Connaissance des plantes : arachide, mil et autres (Bassin arachidier)',
        'Leçon 3 — Conditions physiques (topographiques, climatiques, édaphiques, hydrographiques, biogéographiques)',
        'Leçon 4 — Population : composition ethnique, évolution, répartition, structures, migrations',
        'Leçon 5 — Organisation de l’espace : étude des localités, de leurs fonctions, de leurs relations, de leur urbanisme',
        'Leçon 6 — Activités rurales : paysages agraires, conditions techniques, structures d’encadrement, circuits commerciaux',
        'Leçon 7 — Structures de transformation artisanales et modernes',
        'Leçon 8 — Problèmes et perspectives de développement',
        'Le programme de 6ᵉ compte 20 leçons de géographie, en plus des leçons d’histoire et d’éducation civique'
      ],
      conditions: [
        'Partir de sa propre région n’est pas un détail : c’est la règle du programme, et les enquêtes montrent que les classes qui la respectent progressent mieux.',
        'Les enseignants déclarent souvent ne dérouler que deux des six régions dans une année normale : les leçons non faites ne sont pas un manquement, mais une donnée réelle du calendrier scolaire.',
        'La réforme PARC (Appui au Renouveau des Curricula) prévoit de redéfinir le « milieu proche », de problématiser les leçons et d’alléger le programme : vos intitulés peuvent donc avoir changé depuis 2004.',
        'Sur une copie, on écrit le nom exact de la région géographique (« le Ferlo », « le Bassin arachidier »), pas un nom inventé comme « le Sud » ou « le Nord ».'
      ],
      exemple: {
        enonce: 'Un élève de 6ᵉ est scolarisé à Kaolack. Par quelle région et quel thème doit-il commencer l’année de géographie ?',
        etapes: [
          'L’annexe 1 du programme place les régions administratives de Kaolack, Fatick et Diourbel dans la région géographique A : le Bassin arachidier.',
          'Le thème officiel de cette région est « La culture sous-pluie : de la monoculture à la diversification » : c’est l’axe de toute la partie.',
          'On commence par la leçon 1, l’étude de situation : localiser Kaolack, situer la région par rapport à Dakar et au fleuve, orienter la carte.',
          'Puis les leçons 2 et 3 donnent les bases : les plantes cultivées (arachide, mil) et les conditions physiques qui les expliquent, dont la pluviométrie de la culture sous-pluie.',
          'Les leçons 4 à 7 décrivent la population, l’organisation de l’espace, les activités rurales et les structures de transformation ; la leçon 8 discute les problèmes et les perspectives.'
        ],
        conclusion: 'Le « milieu proche » de cet élève est le Bassin arachidier : il l’étudie comme un système reliant la pluie, l’arachide, les villageois, les marchés et les usines de transformation, et non comme une liste de noms.'
      },
      exercices: [
        {
          enonce: 'Citer les six régions géographiques du programme de 6ᵉ et le thème officiel de deux d’entre elles.',
          corrige: 'A le Bassin arachidier (la culture sous-pluie, de la monoculture à la diversification), B Dakar et le littoral central (les activités urbaines et suburbaines), C le Ferlo (le problème de l’eau et l’activité pastorale), D la vallée du Sénégal (la vallée du fleuve et son aménagement), E la Casamance (étude d’un écosystème humide), F le Haut-Sénégal (une région de contact).'
        },
        {
          enonce: 'Un camarade affirme : « le milieu proche, c’est mon quartier ». Discuter avec les termes du programme.',
          corrige: 'Le quartier relève du milieu local, à l’échelle de la commune ou du village. Le programme de 6ᵉ assimile conventionnellement le milieu proche à une région géographique, c’est-à-dire un espace beaucoup plus vaste, défini par une ou plusieurs spécificités naturelles, humaines et économiques. Le quartier peut servir d’observation de départ, mais l’étude porte sur la région, et commence par une étude de situation sur la carte.'
        }
      ]
    },
    {
      id: 'methode-region-6e',
      titre: 'Méthode : étudier une région géographique en 6ᵉ',
      matiere: 'Histoire-Géo',
      branche: 'Géographie',
      niveau: '6ᵉ',
      chapitre: 'Géographie 6ᵉ — grille commune des six régions',
      type: 'Fiche méthode',
      difficulte: 'Facile',
      verif: VERIF_A_VERIFIER,
      source: 'Géographie, classe de 6ᵉ (2004) : la grille de leçons appliquée à chaque région géographique (expose en exemple au programme pour le Bassin arachidier, avec la liste indicative d’objectifs spécifiques de l’annexe 2).',
      libelles: {
        definitions: 'Vocabulaire',
        proprietes: 'Les étapes de la leçon',
        formules: 'Leçons du programme (ordre officiel)',
        conditions: 'Vigilance sur la méthode',
        exemple: 'Application : le Ferlo',
        exercices: 'Questions d’entraînement'
      },
      objectif: 'Savoir conduire, étape par étape, l’étude d’une région géographique : localiser, décrire le milieu, la population, l’organisation de l’espace et les activités, puis discuter les problèmes.',
      definitions: [
        'Un paysage agraire est l’aspect visible d’un espace cultivé : champs, haies, arbres, villages et pistes, qui racontent comment on y produit.',
        'Une structure d’encadrement est un organisme qui accompagne les producteurs : services agricoles, coopérative, groupement, ONG.',
        'Un circuit commercial est le chemin suivi par une marchandise du producteur jusqu’à l’acheteur, avec les intermédiaires.',
        'Une structure de transformation passe de la matière première au produit fini : moulin, usine d’huile, séchage, fumage, conservserie.',
        'Une région de « contact » est un espace où se rencontrent deux mondes : deux climats, deux types d’agriculture, deux groupes de langues ou deux pays.',
        'Mettre en valeur un espace, c’est mobiliser ses ressources pour en tirer des activités : défricher, irriguer, forer, construire un port.'
      ],
      proprietes: [
        'Le programme impose la même suite pour les six régions : situation, conditions physiques, population, organisation de l’espace, activités, transformation, problèmes et perspectives.',
        'Il recommande avec insistance de commencer par l’étude de situation : localiser la région, l’orienter, la représenter en carte avant d’expliquer quoi que ce soit.',
        'Les conditions physiques ne sont pas un décor : le programme demande de montrer comment la pluie, le sol, l’eau et la végétation créent des conditions d’occupation différentes.',
        'La population s’étudie en quatre mouvements : qui (composition), combien (évolution), où (répartition), pourquoi (migrations).',
        'L’organisation de l’espace observe les localités, leurs fonctions, leurs relations et leur urbanisme : un marché, un port, une capitale, un village de culture.',
        'La dernière leçon de chaque région ramasse tout : « Problèmes et perspectives de développement ». Elle attend un raisonnement, pas une liste.',
        'La logique du programme est celle d’un système : production, tissu social et cadre naturel sont liés ; c’est le lien qu’il faut écrire, pas les trois séparément.'
      ],
      formules: [
        'Leçon 2 — Connaissance des plantes cultivées et des espèces animales (arachide, mil et autres au Bassin arachidier)',
        'Leçon 3 — Conditions physiques : topographiques, climatiques, édaphiques, hydrographiques, biogéographiques',
        'Leçon 4 — Population : composition ethnique, évolution, répartition, structures, migrations',
        'Leçon 5 — Organisation de l’espace : localités, fonctions, relations, urbanisme',
        'Leçon 6 — Activités rurales : paysages agraires, conditions techniques, structures d’encadrement, circuits commerciaux',
        'Leçon 7 — Structures de transformation artisanales et modernes',
        'Leçon 8 — Problèmes et perspectives de développement',
        'Le thème change de région, la grille reste : le Ferlo ajoute une leçon sur l’activité pastorale, la vallée du Sénégal une leçon sur les aménagements modernes'
      ],
      conditions: [
        'L’ordre et la formulation des sous-thèmes ne sont pas impératifs : le programme laisse l’enseignant les organiser avec la classe, à condition de garder l’étude de situation en premier.',
        'Énumérer ne suffit pas : le programme écarte expressément « les vaines activités d’énumération ». Chaque élément doit être décrit puis expliqué.',
        'Ne pas survoler trois éléments quand on peut en approfondir un : une copie de 6ᵉ qui relie la pluie, l’arachide, le marché et l’usine d’huile est déjà une bonne copie.',
        'Chaque région a son thème directeur : le rappeler au début de la leçon, sinon les détails se perdent.'
      ],
      exemple: {
        enonce: 'Appliquer la grille au Ferlo, dont le thème officiel est « le problème de l’eau et l’activité pastorale ».',
        etapes: [
          'Étude de situation : situer le Ferlo entre le fleuve Sénégal et le Bassin arachidier, orienter, estimer l’espace sur la carte.',
          'Conditions physiques : pluviométrie sahélienne faible et irrégulière, sols sableux, végétation de steppe et de brousse clairsemée, presque pas d’écoulement permanent, mares temporaires.',
          'Population : composition et évolution, répartition très lâche, migrations liées à la sécheresse et aux campagnes de fixations.',
          'Organisation de l’espace : localités espacées, fonctions marchandes et administratives faibles, pistes plus que routes.',
          'Activités : élevage bovin, ovin et caprin, transhumance, pratiques traditionnelles, points d’eau aménagés (forages, bassins, puits pastorals).',
          'Transformation et problèmes : lait et viande peu transformés sur place, surcharge des pâturages, sécheresse, sécurité de l’eau ; perspectives : forages, bassins de rétention, routes à bétail, marchés, appui aux éleveurs.'
        ],
        conclusion: 'En suivant la grille, l’eau du Ferlo explique presque tout : la rareté des hommes, la forme de l’élevage, la dispersion de l’habitat et la nature des problèmes de développement.'
      },
      exercices: [
        {
          enonce: 'Un camarade dit : « la leçon sur le climat, c’est seulement pour apprendre les pluies par cœur ». Que répondriez-vous avec les termes du programme ?',
          corrige: 'Le climat est une condition physique : il sert à expliquer l’occupation. Dans le Ferlo, la faible pluviométrie rend l’agriculture incertaine et favorise l’élevage mobile ; dans le Bassin arachidier, la pluie sous-pluie permet la culture attelée. On décrit la pluie pour comprendre les hommes, pas pour la réciter.'
        },
        {
          enonce: 'Classez ces mots dans la bonne leçon de la grille : moulin, piste, borehole (forage), mil, diourbel (marché), transhumance.',
          corrige: 'Mil → leçon 2 (connaissance des plantes). Transhumance → leçons 2 et 6 pour le Ferlo (activités pastorales). Forage → leçon 6 (conditions techniques) et leçon 8 (problème de l’eau). Piste et marché → leçon 5 (organisation de l’espace et relations entre localités). Moulin → leçon 7 (structures de transformation).'
        }
      ]
    },
    {
      id: 'milieu-physique-senegal-5e',
      titre: 'Le Sénégal : structure géologique, relief, climat, sols, eaux et écosystèmes',
      matiere: 'Histoire-Géo',
      branche: 'Géographie',
      niveau: '5ᵉ',
      chapitre: 'Géographie 5ᵉ — chapitre I, les aspects physiques',
      type: 'Fiche de cours',
      difficulte: 'Moyen',
      verif: VERIF_A_VERIFIER,
      source: 'Géographie, classe de 5ᵉ (2004), thème « Le Sénégal », chapitre I « Les aspects physiques » (leçons 1 à 7), sur un programme de 26 leçons.',
      libelles: {
        definitions: 'Vocabulaire',
        proprietes: 'Faits et analyses',
        formules: 'Leçons du programme (ordre officiel)',
        conditions: 'Vigilance sur les mots et les chiffres',
        exemple: 'Étude guidée',
        exercices: 'Questions d’entraînement'
      },
      objectif: 'Décrire les composantes du milieu physique sénégalais et expliquer comment elles influencent le peuplement et les activités.',
      definitions: [
        'La structure géologique désigne la nature et la disposition des couches du sous-sol ; le programme la fait suivre de la « processus de formation du relief ».',
        'Le relief est l’ensemble des formes de la surface (plaines, plateaux, dunes, vallées) ; le modelé en décrit les détails et les hauteurs.',
        'Le climat est la moyenne des états de l’atmosphère sur une longue période ; la saison des pluies est appelée hivernage au Sénégal.',
        'Le mot « édaphique » désigne ce qui concerne les sols, et « biogéographique » ce qui concerne le couvert végétal.',
        'L’hydrographie est l’étude des eaux de surface : fleuves, cours d’eau, lacs, mares et nappes.',
        'Un écosystème est un système formé par un milieu physique et les êtres vivants qui y sont liés par des échanges.'
      ],
      proprietes: [
        'Le chapitre I est analytique : une leçon par composante (structure géologique, relief, climat, sols-végétation, hydrographie, écosystèmes), après une étude de situation sur le territoire du Sénégal.',
        'Le programme demande expressément d’éviter « les vaines activités d’énumération » : pour le relief, il faut expliquer les facteurs (nature et disposition des couches) et chercher les implications humaines et économiques, pas seulement lister.',
        'Le Sénégal est un pays de faible altitude, dominé par les plaines, les bas plateaux et les dunes fixées ; les différences de relief s’expriment surtout en mètres, pas en montagnes.',
        'La pluie diminue du sud vers le nord : on passe d’un domaine soudanais humide en Casamance et au Sud-Est à un domaine sahélien sec au nord et à l’est ; l’hivernage est unique, de juin à octobre environ.',
        'Le couvert végétal suit la pluie : steppe et brousse clairsemée au nord, savanes arborées au centre, forêts denses et mangroves au sud.',
        'Le fleuve Sénégal, le lac de Guiers, la Casamance et la Gambie structurent l’occupation : l’eau de surface concentre l’irrigation, les villages et les cultures.',
        'Le chapitre II (leçons 8 à 13) prolonge par les aspects humains, le chapitre III (leçons 14 à 20) par les aspects économiques, le chapitre IV (leçons 21 à 26) par des synthèses, dont « Le Sénégal dans l’Afrique et dans le monde ».'
      ],
      formules: [
        'Leçon 1 — Étude de situation : localisation-carte (notions d’orientation et de représentation)',
        'Leçon 2 — Structure géologique (processus de formation du relief, nature et disposition des couches)',
        'Leçon 3 — Relief · Leçon 4 — Climat · Leçon 5 — Sol – végétation · Leçon 6 — Hydrographie · Leçon 7 — Les écosystèmes',
        'Chapitre II, aspects humains : leçons 8 à 13 (peuplement et religions, accroissement, structures, répartition, mobilité, villes)',
        'Chapitre III, aspects économiques : leçons 14 à 20 (agriculture, élevage, pêche, artisanat et industrie, tourisme, transports et commerce intérieur, échanges extérieurs)',
        'Chapitre IV, synthèse : leçons 21 à 26 (jeunesse, relations villes-campagnes, disparités régionales, régionalisation, environnement, Le Sénégal dans l’Afrique et dans le monde)',
        'Les leçons 1 à 7 pèsent environ un quart des 26 leçons de l’année'
      ],
      conditions: [
        'Beaucoup de classes ne dépassent pas cette « description physique du Sénégal » dans l’année : le chapitre I est en réalité le point d’arrivée fréquent, pas une simple introduction.',
        'Les chiffres de pluviométrie dépendent de la station et de l’année : écrire « environ », préciser la période, et ne jamais présenter une année sèche comme la normale.',
        'Une composante physique ne s’explique pas toute seule : le programme veut des interactions (relief → sols → végétation → activités).',
        'Ne pas confondre le nom d’un fleuve et celui de la région qu’il traverse : la vallée du Sénégal et la Casamance sont des espaces, pas seulement des cours d’eau.'
      ],
      exemple: {
        enonce: 'Expliquer, en suivant les leçons 2 à 7, pourquoi la riziculture et la mangrove se rencontrent en Casamance et non dans le Ferlo.',
        etapes: [
          'Leçon 4 — climat : la Casamance reçoit une pluviométrie de domaine soudanais, nettement plus élevée que celle du Ferlo, sahélien.',
          'Leçon 6 — hydrographie : la Casamance forme un réseau de cours d’eau et de zones humides où l’eau stagne ; le Ferlo n’a presque pas d’écoulement permanent et des mares temporaires.',
          'Leçon 5 — sols et végétation : les sols humides et les palmeraies à nypa correspondent à la mangrove du sud ; le Ferlo est couvert de steppe et de sols de sable.',
          'Leçon 2 et 3 — structure géologique et relief : une surface presque plate retenant l’eau favorise les bas-fonds cultivés en riz.',
          'Leçon 7 — écosystème : ces éléments pris ensemble forment un système, et c’est le système qui explique les activités (riziculture de bas-fond, pêche), pas un seul facteur.'
        ],
        conclusion: 'Le milieu physique sénégalais s’explique par la pluie et l’eau de surface ; les activités traditionnelles du sud et du nord en sont la conséquence directe.'
      },
      exercices: [
        {
          enonce: 'Ranger dans l’ordre officiel les leçons du chapitre I et dire ce que chacune étudie.',
          corrige: '1 étude de situation (localiser le Sénégal sur une carte) ; 2 structure géologique (formation du relief, nature et disposition des couches) ; 3 relief ; 4 climat ; 5 sol – végétation ; 6 hydrographie ; 7 écosystèmes.'
        },
        {
          enonce: 'Pourquoi le programme insiste-t-il pour éviter « les vaines activités d’énumération » ?',
          corrige: 'Lister les rivières, les sols ou les espèces sans les relier entre eux ne fait pas comprendre le milieu : l’élève retient des noms, pas des explications. La leçon doit décrire puis expliquer les facteurs et chercher les implications humaines et économiques, ce que le programme appelle une approche intégrée de l’espace.'
        }
      ]
    },
    {
      id: 'peuplement-senegal-5e',
      titre: 'Le Sénégal : population, peuplement et villes',
      matiere: 'Histoire-Géo',
      branche: 'Géographie',
      niveau: '5ᵉ',
      chapitre: 'Géographie 5ᵉ — chapitre II, les aspects humains',
      type: 'Fiche de cours',
      difficulte: 'Moyen',
      verif: VERIF_A_VERIFIER,
      source: 'Géographie, classe de 5ᵉ (2004), thème « Le Sénégal », chapitre II « Les aspects humains » (leçons 8 à 13), sur un programme de 26 leçons.',
      libelles: {
        definitions: 'Vocabulaire',
        proprietes: 'Faits et analyses',
        formules: 'Leçons du programme (ordre officiel)',
        conditions: 'Vigilance sur les mots et les chiffres',
        exemple: 'Étude guidée',
        exercices: 'Questions d’entraînement'
      },
      objectif: 'Décrire la mise en place du peuplement sénégalais, mesurer sa croissance, expliquer sa répartition et son urbanisation.',
      definitions: [
        'Le peuplement désigne l’ensemble des habitants d’un territoire ; « sa mise en place » raconte comment ces groupes se sont installés au fil du temps.',
        'Un groupe ethnique est un ensemble d’habitants qui se reconnaissent une origine, une langue et des coutumes communes.',
        'Un ménage (ou foyer) est l’unité de base du recensement : on dénombre des ménages, pas seulement des individus.',
        'L’accroissement naturel est la différence entre les naissances et les décès ; l’accroissement total y ajoute le solde des migrations.',
        'La structure de la population décrit sa composition par âge et par sexe ; une population jeune se lit par une base large de pyramide des âges.',
        'La densité est le nombre d’habitants au kilomètre carré : population divisée par superficie.',
        'L’exode rural désigne le départ durable des campagnes vers les villes ; il se distingue des migrations saisonnières de travail.',
        'Une ville est un espace concentré dont les habitants vivent surtout d’activités non agricoles ; on retient ses fonctions, pas seulement sa taille.'
      ],
      proprietes: [
        'Le chapitre II compte six leçons et suit une progression logique : qui vit là (8), combien et comment cela augmente (9), de quel âge et quel sexe (10), où (11), comment cela se déplace (12), et où cela se concentre (13).',
        'Les groupes humains sont multiples et se répartissent sur de grands domaines : monde wolof du centre-ouest, populations pulaar de la vallée du fleuve, sérères du bassin arachidier et du Sine-Saloum, jolas de la Casamance, mandingues et soninkés du Sud-Est et des cités marchandes.',
        'L’islam, très majoritaire, est structuré par les confréries (tidiane, mouride, layène et khadre) dont les grands rassemblements — Magal de Touba, Gamou, Ndakka — provoquent chaque année des mouvements de population considérables ; le christianisme et les croyances traditionnelles restent présents, surtout au Sud.',
        'La population augmente vite : le pays comptait environ six millions d’habitants à la fin des années 1980 et plus de quinze millions au début des années 2020, avec une fécondité encore élevée hors des grandes villes.',
        'Elle est très jeune : une large part des Sénégalais a moins de vingt ans, ce qui pèse sur l’école, la santé et l’emploi, et fait débat entre « fardeau » et « potentialité » (le programme y consacre la leçon 21).',
        'La répartition est inégale : Dakar rassemble sur une superficie minime une part très forte des habitants du pays, les terroirs irrigués de la vallée et du littoral attirent, le Ferlo et une partie du Sud-Est restent faiblement peuplés.',
        'La croissance des villes combine l’exode rural, l’accroissement naturel et l’immigration ouest-africaine ; Dakar, Touba, Thiès, Mbour, Saint-Louis, Ziguinchor, Kaolack et Diourbel croissent à des rythmes différents, avec des fonctions de capitale, de ville sainte, de port, de carrefour ou de marché de bassin.'
      ],
      formules: [
        'Leçon 8 — Mise en place du peuplement, composition, peuples, langues et religions',
        'Leçon 9 — Accroissement de la population',
        'Leçon 10 — Structures de la population',
        'Leçon 11 — Répartition géographique de la population',
        'Leçon 12 — Mobilité de la population',
        'Leçon 13 — Les villes'
      ],
      conditions: [
        'Un chiffre de population sans année n’a pas de sens : citez toujours le recensement (RGPH) dont il vient et rappelez que la superficie du Sénégal est d’environ 196 700 km².',
        'Ne dites pas « les Wolofs sontmajoritaires » sans préciser : on parle de groupes linguistiques et culturels, dont les proportions varient selon les sources et les années.',
        'Dakar-ville et Dakar-région n’ont pas le même nombre d’habitants : une agglomération, une ville et une région administrative sont trois échelles distinctes.',
        'Les migrations ne sont pas à sens unique : il part des habitants vers l’Europe et il arrive des ressortissants des pays voisins, sans compter les retours et la diaspora.'
      ],
      exemple: {
        enonce: 'Expliquer, en s’appuyant sur les leçons 9, 11 et 12, pourquoi Dakar concentre une part si forte de la population du Sénégal.',
        etapes: [
          'Leçon 9 — accroissement : la capitale capte une croissance naturelle élevée et une immigration importante, donc son solde est doublement positif.',
          'Leçon 11 — répartition : la densité dakaroise s’explique par l’histoire (comptoir, capitale, port), par l’emploi (administrations, industries, commerces) et par les équipements (universités, hôpitaux).',
          'Leçon 12 — mobilité : l’exode rural des campagnes proches, la fuite des terroirs dégradés et l’arrivée de migrants ouest-africains alimentent la ville chaque année.',
          'Leçon 13 — villes : cette concentration produit des fonctions de commandement mais aussi des charges : logement, eau, transports, déchets, emplois informels.',
          'Leçon 8 — peuplement : la ville recompose le peuplement, car quartiers et ménages mélangent des origines ethniques et religieuses que la campagne séparait davantage.'
        ],
        conclusion: 'La concentration dakaroise n’est pas un accident : elle est la rencontre d’une croissance démographique, d’un déséquilibre régional et de migrations dirigées vers l’emploi et les services.'
      },
      exercices: [
        {
          enonce: 'Rangez les six leçons du chapitre II dans l’ordre officiel et dites la question posée par chacune.',
          corrige: '8 qui est là et d’où viennent les groupes (peuplement, langues, religions) ; 9 combien sont-ils et comment le nombre augmente ; 10 composition par âge et par sexe ; 11 répartition sur le territoire et densités ; 12 départs, arrivées, migrations ; 13 villes, tailles et fonctions.'
        },
        {
          enonce: 'Que montre une pyramide des âges à base très large, et qu’implique-t-elle pour un pays comme le Sénégal ?',
          corrige: 'Une base large indique beaucoup de jeunes, donc une fécondité élevée. Cela implique des besoins immédiats en écoles, en santé maternelle et infantile, puis une arrivée massive de nouveaux actifs sur le marché du travail ; c’est ce que la leçon 21 appelle le débat entre fardeau et potentialité.'
        },
        {
          enonce: 'Distinguez exode rural et migration saisonnière, et donnez un exemple de chacune pris au Sénégal.',
          corrige: 'L’exode rural est un déplacement définitif d’un ménage de la campagne vers la ville, par exemple un jeune qui s’installe à Dakar pour y chercher un emploi. La migration saisonnière est un aller-retour lié au calendrier : migration de travail vers les champs d’arachide ou les zones maraîchères, transhumance des troupeaux vers les parcours après la récolte.'
        }
      ]
    },
    {
      id: 'economies-senegal-5e',
      titre: 'Le Sénégal : agriculture, élevage, pêche, industrie, tourisme et échanges',
      matiere: 'Histoire-Géo',
      branche: 'Géographie',
      niveau: '5ᵉ',
      chapitre: 'Géographie 5ᵉ — chapitre III, les aspects économiques',
      type: 'Fiche de cours',
      difficulte: 'Difficile',
      verif: VERIF_A_VERIFIER,
      source: 'Géographie, classe de 5ᵉ (2004), thème « Le Sénégal », chapitre III « Les aspects économiques » (leçons 14 à 20), sur un programme de 26 leçons.',
      libelles: {
        definitions: 'Vocabulaire',
        proprietes: 'Faits et analyses',
        formules: 'Leçons du programme (ordre officiel)',
        conditions: 'Vigilance sur les mots et les chiffres',
        exemple: 'Étude guidée',
        exercices: 'Questions d’entraînement'
      },
      objectif: 'Décrire les activités économiques du Sénégal, distinguer formes traditionnelles et modernes, et relier chaque secteur à un espace et à des acteurs.',
      definitions: [
        'Une culture vivrière nourrit ceux qui la produisent (mil, niébé, maïs) ; une culture commerciale est vendue, localement ou à l’exportation (arachide, coton, produits maraîchers).',
        'La monoculture est la culture dominante d’un terroir, qui concentre les sols et les revenus sur une seule plante.',
        'L’agropastoralisme associe cultures et élevage sur un même espace ; la transhumance déplace les troupeaux vers de nouveaux parcours.',
        'Une filière est la chaîne complète, de la production à la transformation et à la vente, avec ses intermédiaires et ses prix.',
        'La pêche artisanale utilise de petites embarcations et des équipages locaux ; la pêche industrielle emploie des navires de grande taille et des engins lourds.',
        'L’informel désigne les activités non enregistrées : petit commerce, transformation à domicile, transport par minibus, vente ambulante.',
        'La balance commerciale compare les exportations et les importations ; un déficit signifie que le pays achète plus qu’il ne vend.',
        'Les recettes d’exportation proviennent des ventes de marchandises, mais le pays reçoit aussi des transferts de la diaspora et des recettes touristiques.'
      ],
      proprietes: [
        'Le chapitre III consacre une leçon à chaque secteur, dans un ordre qui va du primaire vers les échanges : agriculture (14), élevage (15), pêche (16), artisanat et industrie (17), tourisme (18), transports et commerce intérieur (19), échanges extérieurs (20).',
        'L’arachide a longtemps organisé le bassin arachidier : elle a payé l’impôt, fixé les familles à la terre et saturé les sols ; la diversification (mil, maïs, niébé, coton, maraîchage, riz de vallée) reste le mot d’ordre des politiques agricoles.',
        'La riziculture occupe une place stratégique pour l’alimentation : elle s’est développée dans les périmètres irrigués de la vallée du fleuve Sénégal (Donaye, Baghagha, Gorgendal), en Casamance dans les bas-fonds, autour du lac de Guiers et dans le Saloum, mais le pays continue d’importer du riz.',
        'L’élevage, bovin surtout dans le Ferlo et les Niayes, ovin et caprin presque partout, fournit lait, viande et bétail sur pied exporté ; il subit la réduction des parcours, les sécheresses et les conflits avec les cultivateurs.',
        'La pêche est un pilier de l’alimentation en protéines : thiof, sardinelle, albacore, maquereau, poulpe, avec une flottille artisanale nombreuse, des navires industriels thoniers et des chalutiers étrangers, et une transformation très féminine (poisson séché, yet, yagg).',
        'L’industrie reste concentrée à Dakar et autour (agroalimentaire, matériaux de construction, raffinage, chimie, textile, produits de la mer), historiquement tournée vers la transformation des matières premières locales et vers un marché intérieur étroit ; l’extraction des phosphates, du zircon et, plus récemment, du pétrole et du gaz change l’équilibre.',
        'Le tourisme repose sur le soleil, le sable et la mer mais aussi sur Gorée, les parcs et réserves, les festivals religieux et culturels ; il est saisonnier, concentré sur le petit cordon de la Petite Côte et sensible aux crises et à la concurrence.',
        'Les transports séparent un pays bien équipé autour de Dakar (aéroport international, port autonome, autoroutes, train express régional) de régions enclavées où la route, le taxi-brousse et le marché restent les vrais liens économiques.',
        'Les échanges extérieurs exportent peu de produits transformés et importent hydrocarbures, biens d’équipement et produits alimentaires, ce qui rend la balance commerciale déficitaire et le pays dépendant des prix mondiaux.'
      ],
      formules: [
        'Leçon 14 — Agriculture · Leçon 15 — Élevage · Leçon 16 — Pêche',
        'Leçon 17 — Artisanat et industrie · Leçon 18 — Tourisme',
        'Leçon 19 — Transports et commerce intérieur',
        'Leçon 20 — Échanges extérieurs',
        'Ordre du chapitre : d’abord ce qui sort du sol et de l’eau, puis ce qui transforme, puis ce qui déplace et vend, enfin ce qui passe les frontières',
        'Chaque leçon du programme se construit en trois temps : où et comment (formes traditionnelles, puis modernes) ; qui (acteurs et structures) ; quels problèmes et quelles perspectives'
      ],
      conditions: [
        'Les rendements, les surfaces et les tonnages varient fortement d’une année à l’autre avec la pluie : écrivez « environ » et donnez l’année de la statistique.',
        'Ne confondez pas le poids économique d’un secteur et le nombre de personnes qu’il fait vivre : l’agriculture et la pêche employent beaucoup de monde mais rapportent peu par tête.',
        '« Moderne » ne veut pas dire « meilleur partout » : la pêche artisanale nourrit le pays, même si la pêche industrielle exporte davantage.',
        'Le tourisme et les mines créent des emplois souvent saisonniers ou peu nombreux : ne promettez pas une solution miracle là où le programme demande des problèmes et des perspectives.'
      ],
      exemple: {
        enonce: 'Expliquer pourquoi le Sénégal importe du riz alors qu’il en cultive et que la vallée du fleuve est aménagée.',
        etapes: [
          'Leçon 14 — agriculture : la consommation de riz par habitant a augmenté plus vite que la production, pour des raisons démographiques et de goût urbain.',
          'Leçon 14 et 3ᵉ chapitre du milieu physique — eau et sols : l’irrigation de vallée dépend du débit du fleuve, des aménagements et de leur entretien ; les surfaces réellement mises en valeur restent limitées.',
          'Leçon 19 — transports et commerce intérieur : le riz importé arrive par le port de Dakar, est bon marché, régulier et facile à vendre en ville, alors que le riz local est plus cher et irrégulier.',
          'Leçon 20 — échanges extérieurs : importer du riz coûte des devises et creuse la balance commerciale, mais répond à une demande immédiate et politique.',
          'Leçon 17 — industrie : la transformation (décorticage, conditionnement, brisures) et la logistique pèsent sur le prix final autant que la production agricole elle-même.'
        ],
        conclusion: 'Le déficit rizicole n’est pas seulement un problème de terre ou d’eau : c’est un système où la demande, les prix mondiaux, le port et les habitudes alimentaires s’enchaînent.'
      },
      exercices: [
        {
          enonce: 'Classez ces activités en primaire, secondaire et tertiaire : pêche artisanale, conserverie de poisson, culture de l’arachide, vente au marché, raffinage du pétrole, transport par taxi-brousse.',
          corrige: 'Primaire (extraction et production agricole ou halieutique) : pêche artisanale, culture de l’arachide. Secondaire (transformation industrielle) : conserverie, raffinage. Tertiaire (services et échanges) : vente au marché, transport.'
        },
        {
          enonce: 'Donnez deux conséquences de la réduction des parcours pastoraux et une perspective prévue par les politiques publiques.',
          corrige: 'Conséquences : conflits entre éleveurs et cultivateurs autour des champs et des points d’eau ; baisse des effectifs ou engraissement des animaux, donc moins de lait et de viande. Perspective : aménagement de couloirs de transhumance, sécurisation foncière, culture fourragère et valorisation des produits locaux, ce que la leçon 24 aborde sous le mot de développement communautaire.'
        },
        {
          enonce: 'Reliez chaque espace à la ou aux activités dominantes : Ferlo, vallée du fleuve Sénégal, Petite Côte, Casamance.',
          corrige: 'Ferlo : élevage transhumant et parcours, problème de l’eau. Vallée du fleuve : riziculture irriguée, maraîchage, pêche du fleuve. Petite Côte : pêche, tourisme, maraîchage et horticulture d’exportation, arachide. Casamance : riz de bas-fond, arachide, palmier, mangrove et pêche lagunaire.'
        }
      ]
    },
    {
      id: 'synthese-senegal-5e',
      titre: 'Le Sénégal : jeunesse, disparités régionales, environnement et place dans le monde',
      matiere: 'Histoire-Géo',
      branche: 'Géographie',
      niveau: '5ᵉ',
      chapitre: 'Géographie 5ᵉ — chapitre IV, synthèse',
      type: 'Fiche de cours',
      difficulte: 'Moyen',
      verif: VERIF_A_VERIFIER,
      source: 'Géographie, classe de 5ᵉ (2004), thème « Le Sénégal », chapitre IV « Synthèse » (leçons 21 à 26), chaque leçon étant dotée de 2 heures, sur un programme de 26 leçons.',
      libelles: {
        definitions: 'Vocabulaire',
        proprietes: 'Faits et analyses',
        formules: 'Leçons du programme (ordre officiel)',
        conditions: 'Vigilance sur les mots et les chiffres',
        exemple: 'Étude guidée',
        exercices: 'Questions d’entraînement'
      },
      objectif: 'Relier les chapitres physique, humain et économique en six synthèses : jeunesse, relations villes-campagnes, disparités, régionalisation, environnement, insertion mondiale.',
      definitions: [
        'Une disparité régionale est un écart de richesse, d’équipement ou d’accès aux services entre deux espaces d’un même pays.',
        'Le terme de « macrocéphalie urbaine » désigne la situation d’un pays dont la première ville écrase toutes les autres.',
        'La décentralisation transfère des compétences de l’État aux collectivités locales ; la régionalisation organise le territoire autour des régions.',
        'Un développement communautaire associe les habitants d’un terroir à la décision et à la gestion de leurs équipements.',
        'Une aire protégée (parc national, réserve) est un espace dont l’usage est réglementé pour préserver la faune, la flore ou les paysages.',
        'Une ressource est « durable » quand son rythme d’usage ne dépasse pas son rythme de renouvellement.',
        'L’intégration régionale désigne les organisations qui rapprochent les États voisins : CEDEAO et UEMOA pour le Sénégal.'
      ],
      proprietes: [
        'Le chapitre IV ferme l’année en reliant ce que les chapitres I, II et III ont séparé : chaque leçon est une question, pas une liste de faits nouveaux.',
        'La leçon 21 est la seule à être posée comme un débat (« fardeau ou potentialité ? ») : une jeunesse nombreuse coûte cher en écoles et en santé, mais elle fournit la main-d’œuvre et l’énergie du pays si elle est formée et employée.',
        'Les relations villes-campagnes vont dans les deux sens : la campagne nourrit et loge la ville, la ville fournit emploi, services, marché et argent ; les envois d’argent des citadins vers le village comptent autant que l’exode rural.',
        'Les disparités régionales se lisent en trois contrastes : le triangle Dakar-Thiès-Mbour-Saly suréquipé, la vallée irriguée et les bassins de production bien reliés, et les espaces pastoraux du Nord et de l’Est peu denses et moins dotés.',
        'La régionalisation et la décentralisation sont les réponses institutionnelles à ces écarts : transférer décisions et budgets aux régions et aux communes, associer les communautés à la gestion des ressources.',
        'Les problèmes d’environnement reprennent les leçons physiques et économiques : baisse de la pluviométrie, désertification, surpâturage, coupes pour la briqueterie et le charbon, surexploitation du stock halieutique, pollution et déchets urbains, érosion du littoral.',
        'La dernière leçon replace le Sénégal dans l’Afrique et dans le monde : pays côtier ouest-africain de la CEDEAO et de l’UEMOA, membre de l’Union africaine et de la francophonie, carrefour entre l’Europe, l’Amérique et l’Afrique, avec une diaspora active et des projets d’infrastructures tournés vers l’hinterland.'
      ],
      formules: [
        'Leçon 21 — La jeunesse de la population : fardeau ou potentialité ? (2 h)',
        'Leçon 22 — Les relations villes-campagnes (2 h)',
        'Leçon 23 — Les disparités régionales (2 h)',
        'Leçon 24 — Régionalisation et développement communautaire (2 h)',
        'Leçon 25 — Les problèmes d’environnement et de protection de la nature (2 h)',
        'Leçon 26 — Le Sénégal dans l’Afrique et dans le monde (2 h)'
      ],
      conditions: [
        'Une synthèse ne répète pas le cours : elle montre un enchaînement (pluie → sols → culture → marché → migration), sinon elle redevient une énumération.',
        '« Fardeau » et « potentialité » sont deux lectures d’un même fait : présentez les arguments des deux positions avant de conclure.',
        'Les noms des régions administratives et des collectivités changent avec les réformes : vérifiez la carte officielle en vigueur dans votre manuel.',
        'Un problème d’environnement n’est pas naturel : il vient de décisions et de besoins humains, et sa solution non plus.'
      ],
      exemple: {
        enonce: 'Rédiger le plan d’un devoir de synthèse : « Expliquez les disparités régionales du Sénégal et les réponses apportées. »',
        etapes: [
          'Introduction : rappeler le contraste entre un espace de concentration et des espaces faibles (leçons 11 et 23).',
          'Deuxième partie, les faits : comparer deux régions en densité, équipements, emplois et accès à l’eau et à la route (leçons 9, 11, 13, 19).',
          'Troisième partie, les causes : climat et eau (leçons 3 à 6), héritage des choix coloniaux et des investissements, spécialisation arachidière puis déclin (leçon 14).',
          'Quatrième partie, les conséquences : migrations vers Dakar, sous-emploi, pression sur les ressources des régions de départ (leçons 12 et 25).',
          'Cinquième partie, les réponses : décentralisation et régionalisation, développement communautaire, désenclavement, politiques agricoles (leçons 24 et 26).',
          'Conclusion : la réduction des écarts dépend autant de la gouvernance locale que de la pluie et des cours mondiaux.'
        ],
        conclusion: 'Une bonne synthèse de 5ᵉ relie toujours au moins trois chapitres et aboutit à des réponses, pas à un constat.'
      },
      exercices: [
        {
          enonce: 'Donnez trois arguments pour la thèse du « fardeau » et trois pour celle de la « potentialité ».',
          corrige: 'Fardeau : dépenses scolaires et sanitaires fortes ; emploi insuffisant et émigration des jeunes ; pression sur les terres et les ressources. Potentialité : main-d’œuvre abondante et énergie du pays ; marché intérieur qui grandit ; dividendes démographiques si la formation et l’emploi suivent, et innovation par le numérique et l’agriculture.'
        },
        {
          enonce: 'Citez deux flux ville-campagne dans chaque sens.',
          corrige: 'Campagne vers ville : produits agricoles et bétail, main-d’œuvre et migrants, argent des marchés. Ville vers campagne : envois d’argent et équipements, produits manufacturés et services, techniciens et encadrement, retours au village pendant les vacances et les cérémonies.'
        },
        {
          enonce: 'Pourquoi la leçon 26 est-elle placée à la toute fin de l’année ?',
          corrige: 'Parce qu’elle suppose tout le reste : on ne peut situer le Sénégal dans l’Afrique et dans le monde qu’après avoir décrit son milieu, sa population, son économie et ses déséquilibres. Elle ferme le cycle 6ᵉ-5ᵉ, qui allait du milieu proche au pays entier, en ouvrant sur le monde traité en 4ᵉ et en 3ᵉ.'
        }
      ]
    },
    {
      id: 'terre-planete-3e',
      titre: 'La Terre : une planète du système solaire, une planète menacée',
      matiere: 'Histoire-Géo',
      branche: 'Géographie',
      niveau: '3ᵉ',
      chapitre: 'Géographie 3ᵉ — chapitres I et II',
      type: 'Fiche de cours',
      difficulte: 'Moyen',
      verif: VERIF_A_VERIFIER,
      source: 'Géographie, classe de 3ᵉ (2004), thème « Le monde », chapitre I « La Terre, une planète du système solaire » (leçons 1 et 2) et chapitre II « La Terre, une planète menacée » (leçons 3 et 4), sur un programme de 10 leçons.',
      libelles: {
        definitions: 'Vocabulaire',
        proprietes: 'Faits et analyses',
        formules: 'Leçons du programme (ordre officiel)',
        conditions: 'Vigilance sur les mots et les chiffres',
        exemple: 'Étude guidée',
        exercices: 'Questions d’entraînement'
      },
      objectif: 'Situer la Terre dans le système solaire, expliquer les équilibres qui la rendent habitable, puis montrer comment l’exploitation économique les menace.',
      definitions: [
        'Le système solaire est formé du Soleil et des planètes qui l’orbitent ; la Terre est la troisième planète en partant du Soleil.',
        'Une ressource renouvelable se reconstitue si on la prélève à un rythme raisonnable (forêt, poisson, eau de nappe) ; une ressource non renouvelable se forme trop lentement pour être reconstituée (pétrole, charbon, minerais).',
        'Le potentiel d’une planète est l’ensemble de ce qu’elle peut fournir : énergie, matières, sols, eau, travail des habitants.',
        'Un équilibre est un état où les prélèvements et la capacité de renouvellement se compensent ; le dépasser, c’est surexploiter.',
        'L’effet de serre est le réchauffement produit par les gaz qui retiennent la chaleur de la Terre au lieu de la laisser repartir vers l’espace.',
        'Le réchauffement climatique désigne la hausse durable des températures moyennes, avec ses dérèglements : sécheresses, pluies violentes, montée du niveau de la mer.',
        'L’aridité est la faiblesse durable de l’eau disponible ; la désertification est la dégradation des terres des zones sèches.'
      ],
      proprietes: [
        'Le chapitre I pose le cadre : la place de la Terre dans le système solaire, l’influence du Soleil et les caractéristiques de la planète (leçon 1), puis son potentiel et ses équilibres (leçon 2).',
        'La Terre doit sa vie à un faisceau de conditions : une distance au Soleil qui permet l’eau liquide, une rotation en vingt-quatre heures qui alternate jour et nuit, une révolution en un an qui donne les saisons, un axe incliné qui les accentue, une atmosphère qui respire et protège.',
        'Le Soleil est la source d’énergie première : lumière pour la photosynthèse, chaleur pour les vents et le cycle de l’eau ; les énergies fossiles en sont une forme stockée depuis des millions d’années.',
        'Le chapitre II montre la pression humaine : la leçon 3 énumère cinq familles de ressources surexploitées (énergies, ressources minières, halieutiques, forestières, hydrauliques), la leçon 4 en tire les conséquences climatiques (pollution, réchauffement, menace d’aridité).',
        'La surexploitation n’est pas uniforme : elle est plus forte dans les pays riches et rapide dans les pays émergents, mais ses effets frappent d’abord les plus pauvres, y compris au Sénégal.',
        'La menace d’aridité concerne directement le Sahel : la baisse de la pluviométrie depuis les années 1970, le surpâturage et les coupes ont avancé la désertification, dégradé les sols et provoqué des conflits d’usage.',
        'Les pollutions ont des échelles emboîtées : locale (déchets, eaux usées, poussière), régionale (pluies acides, brumes de sable, fumées) et mondiale (gaz à effet de serre, plastiques en mer).',
        'La leçon 4 prépare la leçon 10 de Terminale sur le système-monde : la planète est un seul espace de contraintes partagées, même si les responsabilités et les moyens de répondre sont inégaux.'
      ],
      formules: [
        'Leçon 1 — Étude de situation : place de la Terre dans le système solaire, influence du Soleil, caractéristiques de la Terre (2 h)',
        'Leçon 2 — La Terre, une planète du système solaire : potentiel et équilibres (3 h)',
        'Leçon 3 — La surexploitation des ressources et ses conséquences : énergies, ressources minières, halieutiques, forestières, hydrauliques (5 h)',
        'Leçon 4 — Les conséquences climatiques de l’exploitation économique de la planète : pollution, réchauffement, menace d’aridité (5 h)',
        'Retenez les cinq familles de ressources de la leçon 3 dans l’ordre du programme : énergie, mines, poissons, forêts, eau',
        'Les leçons 3 et 4 pèsent ensemble la moitié des heures du chapitre : ce sont les deux plus longues du niveau'
      ],
      conditions: [
        'Ne confondez pas météo et climat : un hiver froid n’invalide pas un réchauffement de moyenne globale.',
        'Les ordres de grandeur varient selon les sources et les années : gardez les repères stables (distance Terre-Soleil d’environ 150 millions de km, rotation d’environ 24 h, révolution d’environ 365 jours) et dites « environ » pour le reste.',
        '« Ressource menacée » ne veut pas dire « ressource interdite » : le programme attend les raisons du prélèvement excessif (demande, gaspillage, prix, manque de régulation).',
        'La désertification n’est pas une mer de sable qui avance régulièrement : c’est d’abord une dégradation des sols et du couvert végétal des zones sèches.'
      ],
      exemple: {
        enonce: 'Relier la leçon 3 à la leçon 4 : que produit la surpêche sur l’alimentation et sur le climat ?',
        etapes: [
          'Leçon 3 — ressource halieutique : des prises supérieures au renouvellement du stock réduisent la taille des poissons et font disparaître des espèces côtières.',
          'Leçon 3 — conséquences sociales : les communautés côtières perdent une protéine bon marché, ce qui pousse à importer du poisson congelé et à déplacer l’effort de pêche plus loin.',
          'Leçon 3 — énergie : la pêche industrielle consomme du carburant, et la congélation-exportation ajoute de la distance parcourue.',
          'Leçon 4 — pollution et réchauffement : ces émissions de gaz à effet de serre participent au dérèglement, qui modifie la température et la chimie de l’eau.',
          'Leçon 4 — cercle : un milieu marin réchauffé se repeuple moins vite, donc la ressource se rarefie encore : la menace climatique et la surexploitation s’aggravent l’une l’autre.'
        ],
        conclusion: 'Les deux leçons forment une boucle : l’exploitation épuise la ressource et réchauffe la planète, et le réchauffement rend la ressource plus fragile.'
      },
      exercices: [
        {
          enonce: 'Citez les cinq familles de ressources surexploitées telles que le programme les énonce dans la leçon 3.',
          corrige: 'Les énergies (pétrole, charbon, gaz), les ressources minières, les ressources halieutiques (poissons), les ressources forestières et les ressources hydrauliques (eau).'
        },
        {
          enonce: 'Expliquez en trois phrases pourquoi la Terre est habitable.',
          corrige: 'Elle reçoit du Soleil une énergie suffisante pour maintenir l’eau à l’état liquide, ni trop ni trop peu du fait de sa distance. Son atmosphère, grâce à l’effet de serre naturel, retient la chaleur et fournit les gaz nécessaires au vivant. Sa rotation et sa révolution rythment jour, nuit et saisons, ce qui limite les écarts de température.'
        },
        {
          enonce: 'Donnez trois manifestations locales du problème traité par la leçon 4 au Sénégal et une réponse possible pour chacune.',
          corrige: 'Baisse et irrégularité de la pluviométrie, avec repli de l’hivernage : barrages, semences adaptées, calendrier agricole révisé. Avancée de la désertification et sols dégradés : boisement, parcelles protégées, foyers améliorés, gestion communautaire. Érosion et submersion du littoral : rechargement de plage, retrait des constructions, plantations de mangroves.'
        }
      ]
    },
    {
      id: 'planete-solidaire-3e',
      titre: 'La Terre, une planète solidaire ? Coopération, communication et village planétaire',
      matiere: 'Histoire-Géo',
      branche: 'Géographie',
      niveau: '3ᵉ',
      chapitre: 'Géographie 3ᵉ — chapitre IV',
      type: 'Fiche de cours',
      difficulte: 'Moyen',
      verif: VERIF_A_VERIFIER,
      source: 'Géographie, classe de 3ᵉ (2004), thème « Le monde », chapitre IV « La Terre, une planète solidaire ? » (leçons 7 à 10), sur un programme de 10 leçons.',
      libelles: {
        definitions: 'Vocabulaire',
        proprietes: 'Faits et analyses',
        formules: 'Leçons du programme (ordre officiel)',
        conditions: 'Vigilance sur les mots et les chiffres',
        exemple: 'Étude guidée',
        exercices: 'Questions d’entraînement'
      },
      objectif: 'Distinguer coopération bilatérale et multilatérale, décrire les formes et les problèmes des communications, et discuter la formule de la planète-village.',
      definitions: [
        'Une coopération bilatérale est un accord entre deux États : aide, prêt, accord de coopération militaire, culturelle ou économique.',
        'Une coopération multilatérale engage plusieurs États ou institutions dans un même cadre :Organisation des Nations unies, Union africaine, CEDEAO, UEMOA, Banque mondiale, Organisation mondiale du commerce.',
        'L’aide publique au développement (APD) est l’argent que les États et les institutions publiques consacrent au développement d’autres pays ; elle se distingue des prêts commerciaux.',
        'Une infrastructure est un équipement de base qui permet les activités : route, port, chemin de fer, réseau électrique, antenne, câble.',
        'Le désenclavement est l’action de relier un espace isolé aux grands axes et aux marchés.',
        'La fracture numérique désigne l’écart entre ceux qui ont accès à Internet et aux services numériques, à un prix et une qualité acceptables, et les autres.',
        'La mondialisation est l’intensification des échanges et des circulations (marchandises, capitaux, informations, hommes) qui relie les espaces de la planète.'
      ],
      proprietes: [
        'Le chapitre IV répond au chapitre III : après avoir montré les inégalités, il demande si la planète s’organise pour y remédier — d’où le point d’interrogation du titre.',
        'La leçon 7 traite la coopération entre deux États : elle peut financer un hôpital, une école, un barrage ou une ligne électrique, mais elle s’accompagne de conditions, de contreparties et quelquefois d’intérêts stratégiques.',
        'La leçon 8 traite la coopération par les organisations : elle produit des normes, des sommets et des programmes ; ses forces sont la légitimité et la mise en commun, ses faiblesses la lenteur, les rapports de pouvoir et le financement dépendant des contributeurs.',
        'La leçon 9 distingue deux familles de communications : transporter des hommes et des marchandises (route, rail, mer, air) et transporter de l’information (téléphone, radio, télévision, Internet, câbles sous-marins).',
        'Les problèmes de communication sont géographiques : distances, coûts, enclavement des pays sahéliens sans littoral, manque d’entretien, tarifs, couverture inégale et dépendance aux opérateurs et aux câbles étrangers.',
        'Le Sénégal illustre à la fois les progrès et les limites : port et aéroport internationaux, fibre et câbles sous-marins, téléphonie mobile très répandue et paiement par téléphone, mais routes secondaires difficiles et inégalités entre Dakar et les régions.',
        'La leçon 10 discute la formule « la planète Terre, un village » : le temps des distances a beaucoup diminué et l’information circule en direct, mais les personnes, les richesses et la connexion restent très inégalement réparties.',
        'Le programme consacre une seule heure à cette dernière leçon : c’est une discussion à conduire, avec des arguments pour et contre, appuyés sur les leçons précédentes.'
      ],
      formules: [
        'Leçon 7 — La coopération bilatérale (2 h)',
        'Leçon 8 — La coopération multilatérale (2 h)',
        'Leçon 9 — Les formes et problèmes de communication (2 h)',
        'Leçon 10 — La planète Terre, un village ? (1 h)',
        'Ordre du chapitre : accords entre deux États, puis organisations communes, puis moyens de circulation, puis discussion d’ensemble',
        'Le chapitre IV est le plus court en heures du programme de 3ᵉ : la solidarité est traitée comme une question ouverte'
      ],
      conditions: [
        '« Aide » ne veut pas dire « don gratuit » : une partie est remboursable et parfois assortie de conditions ; gardez le mot juste selon le document.',
        'Ne confondez pas l’Union africaine, la CEDEAO et l’UEMOA : la première couvre le continent, la deuxième l’Afrique de l’Ouest, la troisième la zone franc ouest-africaine.',
        'Une communication rapide ne fait pas une planète solidaire : le programme attend des exemples où la connexion existe mais l’inégalité persiste.',
        'Sur les chiffres d’aide, de connexions ou d’utilisateurs d’Internet, donnez toujours l’année et la source.'
      ],
      exemple: {
        enonce: 'Discuter la formule « la planète est un village » à partir d’un exemple sénégalais : la connexion d’un lycée de région au monde.',
        etapes: [
          'Leçon 9 — formes : câble sous-marin, fibre, antenne mobile ; le lycée peut être connecté, comme un élève consulte une vidéo au même instant qu’un élève d’une autre région du monde.',
          'Leçon 9 — problèmes : débit irrégulier, abonnement cher pour un ménage, pannes, électricité coupée, langue des ressources, matériel partagé à plusieurs.',
          'Leçon 7 — coopération bilatérale : un accord entre deux États peut financer les salles, les ordinateurs et la formation des enseignants.',
          'Leçon 8 — coopération multilatérale : organisations régionales et programmes internationaux fixent des objectifs d’accès et mutualisent l’expérience.',
          'Leçon 10 — discussion : l’information circule comme dans un village, mais le coût, la maîtrise et la retombée économique ne sont pas également partagés, donc la solidarité reste à construire.'
        ],
        conclusion: 'La planète-village est vraie pour le temps de l’information et fausse pour l’égalité des accès : c’est précisément ce que la leçon 10 met en discussion par son point d’interrogation.'
      },
      exercices: [
        {
          enonce: 'Classez ces actions en coopération bilatérale ou multilatérale : un prêt d’un État étranger pour un barrage ; un programme de la CEDEAO sur les normes douanières ; un accord sanitaire entre deux ministères ; une conférence de l’ONU sur le climat.',
          corrige: 'Bilatéral : prêt d’un État pour un barrage, accord sanitaire entre deux ministères. Multilatéral : programme de la CEDEAO sur les normes douanières, conférence de l’ONU sur le climat.'
        },
        {
          enonce: 'Donnez trois problèmes de communication d’un pays sahélien enclavé et une conséquence économique pour chacun.',
          corrige: 'Absence de façade maritime, donc fret routier ou ferroviaire cher et prix des importations gonflés. Routes et voies ferrées d’accès uniques et mal entretenues, donc rupture d’approvisionnement et récoltes invendues. Dépendance des câbles et opérateurs étrangers, donc coût des télécommunications et service irrégulier pour les entreprises.'
        },
        {
          enonce: 'Pourquoi le programme intitule-t-il la leçon 10 par une question ?',
          corrige: 'Parce qu’il ne veut pas une réponse apprise : les progrès de la communication rendent la planète plus proche, mais les inégalités de richesses, d’accès et de pouvoir montrent qu’elle n’est pas solidaire. L’élève doit peser les deux séries de faits et conclure prudemment.'
        }
      ]
    },
    {
      id: 'regions-naturelles-seconde',
      titre: 'Les régions naturelles du globe : intertropicales, tempérées, polaires, montagnes et littoraux',
      matiere: 'Histoire-Géo',
      branche: 'Géographie',
      niveau: 'Seconde',
      chapitre: 'Géographie Seconde — troisième partie',
      type: 'Fiche de cours',
      difficulte: 'Difficile',
      verif: VERIF_A_VERIFIER,
      source: 'Géographie, classe de Seconde (2004), troisième partie « Les “régions naturelles” du globe et leurs potentialités », leçons 17 à 20, sur un programme de 20 leçons.',
      libelles: {
        definitions: 'Vocabulaire',
        proprietes: 'Faits et analyses',
        formules: 'Leçons du programme (ordre officiel)',
        conditions: 'Vigilance sur les mots et les chiffres',
        exemple: 'Étude guidée',
        exercices: 'Questions d’entraînement'
      },
      objectif: 'Définir ce qu’est une région naturelle, distinguer les quatre grands ensembles du globe et évaluer leurs potentialités et leurs contraintes.',
      definitions: [
        'Une région naturelle est un espace homogène défini par la combinaison du climat, du relief, des sols, des eaux et du couvert végétal.',
        'Une potentialité est un possible : une ressource ou un avantage exploitable, à condition que l’eau, l’énergie, les transports et les capitaux existent.',
        'L’étagement désigne la succession des milieux en altitude, qui reproduit en miniature le passage des latitudes chaudes aux latitudes froides.',
        'Le pergélisol (ou sol gelé permanent) est un sol resté gelé en permanence en dessous d’une couche active qui dégèle l’été.',
        'La banquise est de la mer gelée ; un glacier est de la glace formée sur la terre ferme à partir de neige compactée.',
        'Un milieu équatorial est chaud et humide toute l’année ; un milieu tropical connaît une alternance de saison sèche et de saison humide.',
        'Un littoral est la zone de contact entre la terre et la mer ; son érosion et sa submersion dépendent des vagues, des courants et du niveau de la mer.'
      ],
      proprietes: [
        'La troisième partie ferme l’année de géographie physique : après les climats (leçons 7 à 10) et les reliefs (leçons 11 à 16), elle rassemble les éléments par grands ensembles du globe.',
        'Les régions intertropicales, entre les tropiques, combinent chaleur et, selon la pluviométrie, forêt dense, savanes ou désert chaud ; elles concentrent une biodiversité et des ressources minières et agricoles considérables, mais l’eau, les sols lessivés et les maladies limitent l’usage.',
        'Les régions tempérées des moyennes latitudes connaissent une alternance de saisons, des pluies régulières, de bons sols et des fleuves navigables : elles réunissent les grandes terres agricoles, les premiers foyers industriels et les ports du monde.',
        'Les régions polaires et subpolaires sont définies par le froid, la nuit et le jour polaires, la banquise et le pergélisol ; leur vie est possible par adaptation, mais les coûts de transport, de chauffage et de construction sont très élevés.',
        'Ces régions ne sont plus isolées : la fonte de la banquise, la montée du niveau de la mer et l’ouverture de routes maritimes en font des espaces exposés et stratégiques, où les États se disputent l’accès aux ressources.',
        'La leçon 20 traite les deux espaces qui ne rentrent pas dans les zones latitudinales : la montagne, par l’étagement, et le littoral, par le contact terre-mer ; tous deux cumulent des atouts et des risques.',
        'La montagne fournit eau, pâturages d’été, bois, hydroélectricité, alpinisme et tourisme, mais impose pente, froid, éclatement de l’habitat et risques (avalanches, glissements, crues).',
        'Le littoral concentre ports, pêcheries, tourisme et villes, alors qu’il est mobile : érosion, submersion, élévation du niveau de la mer et surfréquentation en font une région naturelle à risque.',
        'Le Sénégal relève de trois de ces ensembles : région intertropicale sèche à humide du sud au nord, littoral atlantique, et aucun relief de montagne — ce qui explique l’importance des leçons 4 à 7 de 5ᵉ.'
      ],
      formules: [
        'Leçon 17 — Les régions intertropicales (3 h)',
        'Leçon 18 — Les régions tempérées (2 h)',
        'Leçon 19 — Les régions polaires (2 h)',
        'Leçon 20 — L’originalité des montagnes et des littoraux (2 h)',
        'Ordre de la troisième partie : chaud, tempéré, froid, puis les deux espaces à part que sont l’altitude et le rivage',
        'Chaque leçon suit le même plan : délimiter, expliquer le fonctionnement, évaluer les potentialités, peser les contraintes'
      ],
      conditions: [
        'Une région naturelle n’est pas une région administrative ni un pays : ses limites sont progressives, jamais nettes sur une carte.',
        'Ne réduisez pas l’intertropical à la forêt : la savane et le désert chaud appartiennent aussi à cette zone, par la quantité et le calendrier de la pluie.',
        '« Potentialités » n’est pas « richesse » : une ressource non exploitée faute d’eau, d’énergie ou de route reste un possible.',
        'En géographie physique, les climats et les reliefs des chapitres précédents expliquent les régions : une fiche de troisième partie qui n’utilise pas les leçons 7 à 16 est hors sujet.'
      ],
      exemple: {
        enonce: 'Appliquer le plan de la leçon 17 à l’Afrique de l’Ouest intertropicale.',
        etapes: [
          'Délimiter : de l’équateur aux tropiques, avec en Afrique de l’Ouest une large bande sahélienne puis soudanienne et guinéenne.',
          'Expliquer : chaleur constante, pluie très inégale selon la saison et la latitude, d’où trois milieux emboîtés — forêt humide au sud, savanes au centre, steppe désertique au nord.',
          'Potentialités : sols fertiles de bas-fond, pluies utiles au coton, à la canne et à l’horticulture, forêts et ressources halieutiques, énergie hydroélectrique des fleuves, biodiversité et troupeaux.',
          'Contraintes : saison sèche qui impose le calendrier agricole, sols lessivés, maladies liées à l’humidité, insectes, routes rares en saison des pluies, coupes et feux de brousse.',
          'Ouverture : ces contraintes sont précisément ce que décrivent les leçons 3 et 4 de 3ᵉ sur la surexploitation et la menace d’aridité.'
        ],
        conclusion: 'Une région naturelle se définit par un fonctionnement climatique, non par une richesse : ses potentialités dépendent des moyens mis en face des contraintes.'
      },
      exercices: [
        {
          enonce: 'Expliquez pourquoi l’étagement de la montagne est comparé à la succession des latitudes.',
          corrige: 'En montant, la température baisse et les milieux se succèdent comme en allant de l’équateur vers les pôles : agriculture et forêt de base, pâturages, puis roches et neiges permanentes. Chaque étage offre donc un usage différent sur une faible distance, ce qui explique la diversité des activités montagnardes.'
        },
        {
          enonce: 'Classez ces phrases en « potentialité » ou « contrainte » : fleuves à fort dénivelé, nuit polaire de plusieurs mois, sols de bas-fond humides, pentes qui rendent la route coûteuse, mers poissonneuses.',
          corrige: 'Potentialités : fleuves à fort dénivelé (hydroélectricité), sols de bas-fond humides (riziculture), mers poissonneuses (pêche). Contraintes : nuit polaire de plusieurs mois (vie, chantier, agriculture), pentes qui rendent la route coûteuse (enclavement).'
        },
        {
          enonce: 'Pourquoi le littoral est-il qualifié d’espace « original » dans la leçon 20 ?',
          corrige: 'Parce qu’il n’appartient à aucune zone latitudinale : il existe à toutes les latitudes et se définit par un contact entre deux milieux. Il combine des atouts forts (ports, pêche, tourisme, villes) et des risques spécifiques (érosion, submersion, élévation du niveau de la mer), ce qui oblige à le traiter à part.'
        }
      ]
    },
    {
      id: 'afrique-ouest-integration-4e',
      titre: 'L’Afrique de l’Ouest : problèmes de développement et intégration régionale',
      matiere: 'Histoire-Géo',
      branche: 'Géographie',
      niveau: '4ᵉ',
      chapitre: 'Géographie 4ᵉ — chapitre I, l’Afrique de l’Ouest',
      type: 'Fiche de cours',
      difficulte: 'Moyen',
      verif: VERIF_A_VERIFIER,
      source: 'Géographie, classe de 4ᵉ (2004), thème « L’Afrique et le monde », chapitre I « L’Afrique de l’Ouest » : leçon 2 « Les problèmes de développement » (3 h) et leçon 3 « Les problèmes d’intégration » (2 h), sur un programme de 22 leçons.',
      libelles: {
        definitions: 'Vocabulaire',
        proprietes: 'Faits et analyses',
        formules: 'Leçons du programme (ordre officiel)',
        conditions: 'Vigilance sur les mots et les chiffres',
        exemple: 'Étude guidée',
        exercices: 'Questions d’entraînement'
      },
      objectif: 'Expliquer pourquoi l’intégration économique de l’Afrique de l’Ouest reste difficile malgré les organisations régionales.',
      definitions: [
        'L’intégration régionale est la construction progressive d’un espace où les États facilitent la circulation des personnes, des marchandises et des capitaux, et coordonnent leurs politiques.',
        'La CEDEAO (Communauté économique des États de l’Afrique de l’Ouest), créée en 1975, regroupe les États ouest-africains, francophones, anglophones et lusophones.',
        'L’UEMOA regroupe huit États francophones autour d’une monnaie commune gérée par la BCEAO : elle est plus intégrée monétairement, mais plus petite que la CEDEAO.',
        'Un droit de douane est une taxe prélevée à la frontière sur les marchandises importées ; un obstacle non tarifaire est une contrainte sans taxe officielle : formalités, contrôles de police, état des routes et petites taxes illégales aux postes.',
        'Un pays enclavé n’a pas de façade maritime ; le désenclavement désigne les routes, rails et ports qui lui donnent accès à la mer.',
        'La ZLECAf (zone de libre-échange continentale africaine), opérationnelle depuis 2021, vise un marché libre à l’échelle de tout le continent.'
      ],
      proprietes: [
        'Le chapitre I de la classe de 4ᵉ est court (3 leçons) mais décisif : étude de situation de l’Afrique de l’Ouest, problèmes de développement, problèmes d’intégration et « perspectives de solution ».',
        'Les économies ouest-africaines exportent surtout des matières premières (bruts agricoles, minerai, pétrole) vers l’Europe et l’Asie, et échangent peu entre elles : la part des échanges intra-régionaux reste faible, de l’ordre d’un dixième à un sixième selon les sources et les années.',
        'Trois héritages pèsent sur l’intégration : des frontières coloniales qui coupent des espaces vécus, des langues administratives différentes (français, anglais, portugais), et plusieurs monnaies ou zones monétaires.',
        'Le protocole de la CEDEAO sur la libre circulation reconnaît le droit de séjour et un passeport communautaire ; en pratique, les contrôles, les taxes illégales aux postes et les tracasseries administratives limitent la circulation réelle.',
        'Les infrastructures de transport relient l’intérieur des pays aux ports d’exportation plus qu’entre les pays voisins : les grands corridors (Dakar–Bamako, Abidjan–Lagos) restent inachevés ou mal entretenus.',
        'L’instabilité politique et l’insécurité (Liptako-Gourma, golfe de Guinée) détournent l’investissement ; les suspensions et retraits d’États membres (Mali, Burkina Faso, Niger) ont modifié la composition de la CEDEAO après 2022 : vérifier la situation à la date de l’examen.',
        'Le programme traite « Les problèmes d’intégration » pour chaque grand espace régional étudié (Afrique de l’Ouest leçon 3, Afrique, Europe leçon 11, Amérique leçon 16, Asie leçon 20, Océanie leçon 22) : la grille se répète, changez seulement d’échelle.'
      ],
      formules: [
        'Leçon 1 — Étude de situation : localisation-carte (notions d’orientation et de représentation) — Afrique de l’Ouest',
        'Leçon 2 — Les problèmes de développement (3 h)',
        'Leçon 3 — Les problèmes d’intégration (2 h)',
        'Chapitre II : L’Afrique (leçons 4 à 7 : étude de situation, diversité physique et humaine, pauvreté et dépendance, coopération internationale et aide au développement)',
        'Chapitre III : les autres espaces régionaux du monde — Europe (8-11), Amérique (12-16), Asie (17-20), Océanie (21-22)',
        '1975 : création de la CEDEAO · 1994 : traité révisé et protocole sur la libre circulation · 1999 : création de l’UEMOA'
      ],
      conditions: [
        'Ne pas confondre CEDEAO (15 États signataires de l’Afrique de l’Ouest, mandat politique et économique) et UEMOA (8 États, monnaie commune) : toute réponse qui les mélange est incomplète.',
        'La composition de la CEDEAO est mouvante depuis 2022 : annoncez l’année de votre source plutôt qu’un nombre d’États présenté comme définitif.',
        'Une organisation régionale signée n’est pas une organisation appliquée : distinguer les textes (traités, protocoles) des pratiques (postes, taxes, routes).',
        'Les pourcentages d’échanges intra-régionaux varient fortement selon qu’on inclut ou non le commerce informel : préciser la source.'
      ],
      exemple: {
        enonce: 'Un camarade de 4ᵉ affirme : « la CEDEAO a supprimé les droits de douane, donc le commerce ouest-africain est facile ». Discuter.',
        etapes: [
          'Sur le papier, l’affirmation est en partie juste : les droits de douane sur les produits originaires de la région ont été progressivement supprimés, et le réseau des postes de contrôle « intelligents » est censé fluidifier les passage.',
          'Mais le commerce se heurte à d’autres obstacles : formalités multiples, contrôles de police, restrictions de poids et de dimension sur les routes, taxes illégales aux postes, et des temps d’attente qui renchérissent le transport.',
          'Les monnaies diffèrent entre zones : les changes et les paiements transfrontaliers coûtent, ce qui freine les petits commerçants.',
          'Enfin, les économies se ressemblent plutôt qu’elles ne se complètent : chacune exporte des matières premières hors de la région, donc peu de produits manufacturés à échanger entre voisins.',
          'Conclusion : supprimer une taxe ne suffit pas ; l’intégration demande des routes, une monnaie, des normes communes et une stabilité politique.'
        ],
        conclusion: 'La libre circulation juridique et la réalité des échanges sont deux choses différentes : c’est précisément ce que le programme appelle « les problèmes d’intégration et leurs perspectives de solution ».'
      },
      exercices: [
        {
          enonce: 'Citer trois obstacles à l’intégration ouest-africaine et une perspective de solution pour chacun.',
          corrige: 'Frontières et contrôles multiples → corridors et postes simplifiés ; monnaies et langues différentes → harmonisation monétaire et langues de travail ; économies peu complémentaires et routes vers l’export → industrialisation régionale et routes inter-États ; instabilité et insécurité → coopération sécuritaire. Une seule solution par obstacle suffit dans une copie, à condition de la relier à l’obstacle.'
        },
        {
          enonce: 'Pourquoi l’étude de situation (leçon 1) vient-elle avant les problèmes de développement (leçon 2) ?',
          corrige: 'Sans localisation, aucune analyse n’est possible : il faut situer l’Afrique de l’Ouest, ses façades maritimes, ses pays enclavés et ses voisins pour comprendre ensuite pourquoi les routes, les ports et les échanges posent problème. C’est la méthode du programme : orienter et représenter avant d’expliquer.'
        }
      ]
    },
    /* ---------- Géographie de 4ᵉ : les grands espaces régionaux ------- */
    {
      id: 'afrique-pauvrete-4e',
      titre: 'L’Afrique : diversité physique et humaine, pauvreté, dépendance et aide',
      matiere: 'Histoire-Géo',
      branche: 'Géographie',
      niveau: '4ᵉ',
      chapitre: 'Géographie 4ᵉ — chapitre II, l’Afrique',
      type: 'Fiche de cours',
      difficulte: 'Difficile',
      verif: VERIF_A_VERIFIER,
      source: 'Géographie, classe de 4ᵉ (2004), thème « L’Afrique et le monde », chapitre II « L’Afrique » : leçon 4 « Étude de situation » (1 h), leçon 5 « La diversité physique et humaine » (3 h), leçon 6 « La pauvreté et la dépendance : facteurs, manifestations et conséquences » (4 h), leçon 7 « La coopération internationale et l’aide au développement » (3 h).',
      libelles: {
        definitions: 'Vocabulaire',
        proprietes: 'Faits et analyses',
        formules: 'Leçons du programme (ordre officiel)',
        conditions: 'Vigilance sur les mots et les chiffres',
        exemple: 'Étude guidée',
        exercices: 'Questions d’entraînement'
      },
      objectif: 'Décrire la diversité du continent africain, expliquer les facteurs de la pauvreté et de la dépendance, puis discuter le rôle de l’aide au développement.',
      definitions: [
        'Le « continent » désigne ici l’ensemble des cinquante et un États d’Afrique, avec leurs contrastes ; le programme l’étudie comme un espace régional, pas comme un pays.',
        'Une dépendance économique est une situation où un extérieur décide : prix mondiaux fixés ailleurs, aide conditionnelle, entreprises et techniques venues de l’étranger.',
        'Une monoculture d’exportation est une culture vendue à l’étranger qui occupe une part excessive du territoire, des revenus et des transports.',
        'Le terme « termes de l’échange » compare le prix de ce qu’un pays vend à celui de ce qu’il achète ; quand ils se dégradent, il faut vendre plus pour acheter autant.',
        'La dette publique est l’argent emprunté par les États ; son service est la partie du budget consacrée aux intérêts et au remboursement.',
        'L’aide publique au développement prend plusieurs formes : dons, prêts à taux réduit, aide technique, aide d’urgence humanitaire.',
        'La conditionnalité désigne les réformes exigées par les bailleurs en échange du financement.'
      ],
      proprietes: [
        'Le chapitre II applique à l’Afrique la grille déjà utilisée pour l’Afrique de l’Ouest en chapitre I : situation, milieu, population, économie, problèmes et coopération.',
        'La diversité physique est commandée par la latitude et la pluie : désert chaud au nord, Sahel, savanes soudanaises, forêts humides guinéennes et congolaises, hauts plateaux de l’Est, caps méditerranéens au nord et au sud.',
        'La diversité humaine est tout aussi forte : milliers de langues et de groupes, inégale répartition entre littoraux, vallées, hauts plateaux et déserts, et croissance démographique parmi les plus rapides du monde.',
        'Le programme pose la pauvreté comme un système, avec des facteurs internes et externes : héritage des frontières et des spécialisations coloniales, prix mondiaux, gouvernance et conflits, enclavement, sécheresses, poids de la dette, faible transformation locale.',
        'Les manifestations sont visibles et cumulatives : dépendance alimentaire et importations, sous-équipement en santé et en école, électricité rare hors des villes, emplois informels, migrations des cadres et des jeunes.',
        'Les conséquences enchaînent : fragilité face aux crises mondiales, instabilité politique, pression sur les sols et les forêts, perte de recettes, dépendance de l’aide elle-même parfois.',
        'La leçon 7 distingue deux lectures de l’aide : elle sauve des vies, forme et finance des infrastructures ; mais elle peut aussi déséquilibrer les budgets, maintenir la dépendance, financer des projets inadaptés et se faire conditionnelle.',
        'Les perspectives mentionnées par le programme sont l’intégration régionale, la transformation sur place des matières premières, la coopération Sud-Sud, et de nouveaux partenaires venus d’Asie et du Golfe.'
      ],
      formules: [
        'Leçon 4 — Étude de situation : localisation-carte',
        'Leçon 5 — La diversité physique et humaine (3 h)',
        'Leçon 6 — La pauvreté et la dépendance : facteurs, manifestations et conséquences (4 h)',
        'Leçon 7 — La coopération internationale et l’aide au développement (3 h)',
        'Plan obligatoire de la leçon 6 : facteurs → manifestations → conséquences, dans cet ordre',
        'Repères de situation à savoir placer : l’Afrique traversée presque symétriquement par l’équateur, bordée par deux océans, avec le Sahara au nord et l’Afrique du Sud au sud'
      ],
      conditions: [
        'Ne dites jamais « l’Afrique » comme s’il s’agissait d’un seul pays : le programme commence justement par la diversité.',
        '« Pauvreté » n’est pas synonyme d’« absence de richesses » : le continent exporte des matières précieuses et ses populations sont pauvres parce que la valeur est capturée ailleurs.',
        'Toutes les aides ne se ressemblent : distinguez don, prêt, aide technique, aide d’urgence, et distinguez les bailleurs publics et privés.',
        'Les pourcentages d’aide, de dette ou de croissance changent chaque année : donnez l’année et la source, et rappelez qu’un taux peut s’améliorer alors que la situation des ménages ne change pas.'
      ],
      exemple: {
        enonce: 'Appliquer le plan facteurs → manifestations → conséquences à un pays exportateur de cacao.',
        etapes: [
          'Facteur — héritage : la culture du cacao a été installée pour l’exportation, avec routes tournées vers le port plutôt que vers l’intérieur.',
          'Facteur — prix mondial : le cours du cacao se fixe à l’étranger ; le producteur ne maîtrise pas son revenu et le pays encaisse peu quand le cours baisse.',
          'Manifestation — dépendance : le pays vend des fèves brutes et achète du chocolat transformé, donc il exporte de l’emploi et importe de la valeur.',
          'Manifestation — équipements : les recettes d’exportation varient, d’où des budgets incertains pour l’école, l’hôpital et l’entretien des routes.',
          'Conséquences — sociales et politiques : précarité des planteurs, exode rural, contestation, et besoin de recours à l’aide ou à l’emprunt.',
          'Leçon 7 — discussion : une usine locale de transformation et une intégration régionale qui ouvre un plus grand marché changent-elles la dépendance, ou seulement sa forme ?'
        ],
        conclusion: 'La pauvreté d’un pays de monoculture s’explique par un enchaînement de facteurs anciens et de mécanismes actuels, pas par un manque de travail des producteurs.'
      },
      exercices: [
        {
          enonce: 'Donnez quatre facteurs de la pauvreté africaine : deux internes, deux externes.',
          corrige: 'Internes : enclavement de plusieurs États et coûts de transport ; gouvernance faible, conflits et corruption ; sécheresses et sols dégradés ; démographie rapide à scolariser et employer. Externes : prix mondiaux des matières premières ; poids de la dette et service payé en devises ; concurrence de produits importés subventionnés ; héritage des spécialisations coloniales.'
        },
        {
          enonce: 'Citez trois formes d’aide au développement et un limite de chacune.',
          corrige: 'Le don, utile mais parfois insuffisant et détourné ; le prêt, qui finance mais alourdit la dette future ; l’aide technique, qui forme mais dépend d’expatriés et se termine avec le projet. On peut ajouter l’aide d’urgence, vitale mais qui n’installe pas le long terme, et l’aide conditionnelle, qui peut imposer des réformes sociales coûteuses.'
        },
        {
          enonce: 'Pourquoi le programme place-t-il la leçon 7 après celle sur la pauvreté ?',
          corrige: 'Parce que l’aide se comprend comme une réponse à un diagnostic déjà posé. En traitant la coopération après les facteurs et les conséquences de la dépendance, l’élève peut discuter son efficacité au lieu de la recevoir comme une donnée.'
        }
      ]
    },
    {
      id: 'europe-integration-4e',
      titre: 'L’Europe : milieu, population et problèmes d’intégration',
      matiere: 'Histoire-Géo',
      branche: 'Géographie',
      niveau: '4ᵉ',
      chapitre: 'Géographie 4ᵉ — chapitre III, 1/ L’Europe',
      type: 'Fiche de cours',
      difficulte: 'Moyen',
      verif: VERIF_A_VERIFIER,
      source: 'Géographie, classe de 4ᵉ (2004), chapitre III « Les autres espaces régionaux du monde : 1/ L’Europe », leçons 8 à 11 (étude de situation, relief et climat, population, problèmes d’intégration).',
      libelles: {
        definitions: 'Vocabulaire',
        proprietes: 'Faits et analyses',
        formules: 'Leçons du programme (ordre officiel)',
        conditions: 'Vigilance sur les mots et les chiffres',
        exemple: 'Étude guidée',
        exercices: 'Questions d’entraînement'
      },
      objectif: 'Expliquer comment le milieu et la population européens favorisent une intégration réussie mais incomplète.',
      definitions: [
        'Une presqu’île est une grande terre presque entourée de mer ; l’Europe est décrite comme une « presqu’île de l’Asie » par sa continuité terrestre avec le continent asiatique.',
        'Une plaine d’érosion et une plaine d’accumulation ne se forment pas de la même façon ; le relief européen combine de vieux massifs usés et de jeunes chaînes plissées (Alpes, Pyrénées, Carpates).',
        'Le climat océanique apporte des pluies régulières et des hivers doux ; le climat continental exagère les écarts de température vers l’est ; le climat méditerranéen donne des étés secs.',
        'Le niveau de vie mesure ce qu’un ménage peut acheter ; l’IDH ajoute santé et éducation ; les deux sont élevés en Europe mais inégaux d’un État à l’autre.',
        'Une intégration régionale est un processus qui rapproche des États : marché commun, monnaie partagée, libre circulation, institutions communes.',
        'L’élargissement désigne l’entrée de nouveaux États membres dans une organisation.'
      ],
      proprietes: [
        'L’étude de situation (leçon 8) localise l’Europe : à l’ouest de l’Asie, ouverte sur l’Atlantique, découpée en grandes péninsules, avec une latitude favorable aux échanges.',
        'Le relief et le climat (leçon 9) s’expliquent l’un l’autre : une large plaine ouverte d’ouest en est laisse pénétrer les influences océaniques, qui adoucissent l’ouest et durcissent l’est.',
        'Les fleuves européen sont navigables, réguliers et proches des bassins industriels et agricoles : le Rhin, la Danube, la Seine, la Volga structurent des espaces économiques.',
        'La leçon 10 montre une population nombreuse, dense et ancienne, urbaine, mais vieillissante : faible fécondité, immigration venue d’Afrique, d’Asie et de l’Est, et tension sur les retraites et les services.',
        'L’Europe cumule des atouts majeurs : sols et climats favorables à l’agriculture, énergie et minerais historiquement exploités, ports et façade atlantique, capital humain et technique.',
        'La leçon 11 pose les problèmes d’intégration : une Union qui a réussi le marché, la monnaie pour une partie des États et la libre circulation, mais qui bute sur les écarts de richesse entre Ouest et Est, les souverainetés fiscales et sociales, les frontières extérieures et les opinions publiques.',
        'Le parallèle avec la leçon 3 sur l’Afrique de l’Ouest est intentionnel : mêmes mots, « intégration », mais des obstacles de natures différentes : ici institutionnels et politiques, là fondés sur les infrastructures et les tarifs.',
        'Le Sénégal regarde l’Europe comme premier partenaire commercial et touristique, source d’aide, de migration et de transferts : la comparaison éclaire aussi les programmes de 5ᵉ et de Terminale.'
      ],
      formules: [
        'Leçon 8 — Étude de situation : localisation-carte',
        'Leçon 9 — Le relief et le climat',
        'Leçon 10 — La population',
        'Leçon 11 — Les problèmes d’intégration',
        'Grille du chapitre III, identique pour chaque espace : situation, milieu, population, disparités, intégration',
        'Repères : plaine centrale ouverte, vieilles montagnes de l’ouest et du centre, jeunes Alpes au sud, fleuves navigables, façade atlantique'
      ],
      conditions: [
        '« Europe » désigne plusieurs espaces : le continent géographique, l’Union européenne et la zone euro ; précisez toujours lequel.',
        'Ne confondez pas densité et population totale : un État peut être peu peuplé et très dense, ou l’inverse.',
        'Le vieillissement démographique n’est pas qu’un problème : il s’accompagne de santé plus longue, de scolarisation élevée et de pouvoir d’achat.',
        'Les succès de l’intégration européenne ne doivent pas faire oublier les échecs partiels : monnaie sans union budgétaire, frontière sans politique migratoire commune.'
      ],
      exemple: {
        enonce: 'Expliquer, en reliant les leçons 9 et 10, pourquoi l’Europe occidentale est à la fois agricole, industrielle et dense.',
        etapes: [
          'Leçon 9 — climat : l’océan adoucit les hivers et donne des pluies régulières, favorables aux prairies, aux céréales et à l’élevage laitier.',
          'Leçon 9 — relief : plaines et collines peu coupées facilitent la route, le rail, le canal et le fleuve navigable.',
          'Leçon 10 — population : ces terres bien mises en valeur ont nourri une population dense, puis concentré les ateliers, les mines et les ports.',
          'Leçon 11 — intégration : la proximité et les échanges faciles ont rendu les accords utiles, donc denses : normes, marché, transports partagés.',
          'Boucle de retour : la densité et le marché attirent à leur tour les investissements et l’immigration, ce qui accentue l’écart avec les marges orientales et méridionales.'
        ],
        conclusion: 'Le milieu européen n’explique pas tout, mais il a offert des conditions favorables que l’histoire et l’intégration ont amplifiées.'
      },
      exercices: [
        {
          enonce: 'Reprenez la grille du chapitre III et dites ce que chaque leçon demande pour l’Europe.',
          corrige: 'Situation : localiser l’Europe et ses péninsules. Milieu : relier relief et climat, expliquer la circulation des influences océaniques. Population : densité, urbanisation, vieillissement, immigration. Intégration : décrire l’Union, ses réussites et ses obstacles.'
        },
        {
          enonce: 'Comparez les obstacles à l’intégration en Europe et en Afrique de l’Ouest.',
          corrige: 'En Afrique de l’Ouest : routes et chemins de fer insuffisants, droits de douane et postes multiples, monnaies et normes différentes, produits peu complémentaires, méfiance entre États. En Europe : arbitrage entre souverainetés budgétaire et sociale, écarts de niveau de vie entre membres, contrôles aux frontières extérieures, opinion publique et questions migratoires.'
        }
      ]
    },
    {
      id: 'amerique-disparites-4e',
      titre: 'L’Amérique : unités naturelles, peuples, disparités et intégration',
      matiere: 'Histoire-Géo',
      branche: 'Géographie',
      niveau: '4ᵉ',
      chapitre: 'Géographie 4ᵉ — chapitre III, 2/ L’Amérique',
      type: 'Fiche de cours',
      difficulte: 'Moyen',
      verif: VERIF_A_VERIFIER,
      source: 'Géographie, classe de 4ᵉ (2004), chapitre III « Les autres espaces régionaux du monde : 2/ L’Amérique », leçons 12 à 16 (étude de situation, unités naturelles, diversité des peuples, disparités économiques et sociales, problèmes d’intégration).',
      libelles: {
        definitions: 'Vocabulaire',
        proprietes: 'Faits et analyses',
        formules: 'Leçons du programme (ordre officiel)',
        conditions: 'Vigilance sur les mots et les chiffres',
        exemple: 'Étude guidée',
        exercices: 'Questions d’entraînement'
      },
      objectif: 'Décrire l’Amérique comme un contraste : milieux extrêmes, peuples mêlés, économie très inégale, intégration à deux vitesses.',
      definitions: [
        'Une unité naturelle est un grand ensemble de relief et de climat homogène : cordillère, bouclier, grande plaine, bassin amazonien.',
        'La cordillère des Andes est une chaîne jeune, élevée et continue le long du Pacifique sud ; elle porte des ressources minières et des populations d’altitude.',
        'Le terme « Amériques » (au pluriel) rappelle la division entre Amérique du Nord développée et Amérique latine émergente ou pauvre.',
        'Une maquila est une usine d’assemblage installée près des États-Unis pour profiter d’un coût de travail plus bas et exporter sans droits de douane.',
        'Une megacité est une très grande agglomération ; Mexico, São Paulo, Buenos Aires, New York et Los Angeles en font partie.',
        'L’agro-industrie désigne une agriculture mécanisée, spécialisée et tournée vers l’exportation ou la transformation industrielle (soja, canne, café, élevage bovin).'
      ],
      proprietes: [
        'La leçon 12 situe l’Amérique : deux continents allongés nord-sud, entre deux océans, presque sans passage terrestre facile vers l’Ancien Monde.',
        'Les unités naturelles (leçon 13) s’ordonnent simplement : montagnes jeunes à l’ouest, vastes plaines et boucliers à l’est, grands fleuves (Mississippi, Amazonie, Paraná, Orénoque), et contrastes de climat de la zone arctique à la zone tempérée australe.',
        'La diversité des peuples (leçon 14) résulte de trois couches : populations autochtones souvent décimées puis marginalisées, migrations européennes, et déportations africaines suivies de migrations asiatiques et caribéennes.',
        'Il en résulte une carte linguistique et religieuse divisée : nord anglophone et protestant, centre et sud hispanophones et lusophones catholiques, avec des héritages africains et amérindiens très vivants.',
        'Les disparités économiques et sociales (leçon 15) sont le cœur du chapitre : É.-Unis et Canada très riches, Amérique latine à revenu moyen avec une des inégalités de propriété les plus fortes du monde.',
        'La leçon 15 demande de relier les faits à la ville : megacités à quartiers d’affaires et favelas voisines, agriculture exportatrice performante entourée de paysans sans terre, emploi informel très majoritaire.',
        'Les problèmes d’intégration (leçon 16) s’opposent en deux modèles : l’ALENA/États-Unis-Mexique-Canada, intégré par l’investissement et les chaînes d’assemblage, contre le Mercosur et la CAN, où la route, la douane, la méfiance politique et la faiblesse des échanges intra-régionaux freinent.',
        'En classe de 3ᵉ, la Terminale reprendra l’espace nord-américain en premier partie ; cette fiche de 4ᵉ pose le vocabulaire du contraste.'
      ],
      formules: [
        'Leçon 12 — Étude de situation : localisation-carte',
        'Leçon 13 — Les unités naturelles',
        'Leçon 14 — La diversité des peuples',
        'Leçon 15 — Les disparités économiques et sociales',
        'Leçon 16 — Les problèmes d’intégration',
        'Ordre logique : le sol, puis les hommes, puis l’économie, puis les organisations d’États'
      ],
      conditions: [
        'Ne dites pas « l’Amérique » pour les États-Unis : le mot désigne les deux continents et le programme les traite ensemble.',
        '« Amérique latine » est une aire culturelle et linguistique, pas une organisation économique : le Mexique est en Amérique du Nord géographiquement.',
        'Les richesses minières et agricoles d’un pays n’impliquent pas le bien-être de sa population : la leçon 15 porte précisément sur cet écart.',
        'Comparez toujours des ordres de grandeur et des années : les statistiques d’inégalité, d’urbanisation et d’échanges bougent vite.'
      ],
      exemple: {
        enonce: 'Expliquer pourquoi la cordillère des Andes concentre à la fois pauvreté et richesse d’exportation.',
        etapes: [
          'Leçon 13 — unités naturelles : la chaîne est jeune et haute, riche en minerais (cuivre, étain, argent, lithium des salars) et en verticalité des étages.',
          'Leçon 14 — peuples : les populations andines, héritières d’États précolombiens, restent souvent rurales, quechuas ou aymaras, moins bien dotées en écoles et en routes.',
          'Leçon 15 — disparités : l’extraction minière est intensive en capital, peu employeuse, et la rente part souvent hors du pays ou vers une élite urbaine.',
          'Leçon 15 — ville : les capitales andines, Lima, La Paz, Quito, grossissent par migration et développent des ceintures informelles.',
          'Leçon 16 — intégration : les pays andins échangent peu entre eux, leurs ports et routes partent vers l’extérieur, donc la région reste exposée aux prix mondiaux.'
        ],
        conclusion: 'La cordillère illustre la leçon 15 : un espace riche en ressources peut produire de la pauvreté quand la valeur, la propriété et la décision ne sont pas locales.'
      },
      exercices: [
        {
          enonce: 'Placez ces espaces dans la leçon 13 : bouclier guyanais, pampas, grand Bassin, Amazonie, Appalaches.',
          corrige: 'Bouclier guyanais : vieilles roches, relief usé, forêt et or. Pampas : plaine tempérée Argentine, blé et élevage. Grand Bassin : dépression aride intérieure des États-Unis de l’Ouest. Amazonie : plus grand bassin fluvial tropical du monde. Appalaches : vieilles montagnes usées de l’est de l’Amérique du Nord.'
        },
        {
          enonce: 'Donnez trois raisons pour lesquelles l’intégration de l’Amérique latine est plus difficile que celle de l’Amérique du Nord.',
          corrige: 'Des réseaux de transport tournés vers les ports d’exportation plutôt que d’un pays à l’autre ; des échanges intra-régionaux faibles et des produits similaires, donc concurrents ; des différences de taille, de régime politique et de monnaie, plus la méfiance historique et les barrières douanières.'
        },
        {
          enonce: 'En quoi la leçon 14 explique-t-elle des situations économiques actuelles ?',
          corrige: 'Parce que l’origine des groupes a déterminé l’accès à la terre, à l’école et au crédit : héritage de l’époque coloniale, latifundia, populations autochtones isolées, populations afro-descendantes concentrées dans les régions sucrières et minières. Les inégalités de la leçon 15 ont une histoire, que la leçon 14 donne.'
        }
      ]
    },
    {
      id: 'asie-oceanie-4e',
      titre: 'L’Asie et l’Océanie : contrastes naturels, populations, disparités et intégration',
      matiere: 'Histoire-Géo',
      branche: 'Géographie',
      niveau: '4ᵉ',
      chapitre: 'Géographie 4ᵉ — chapitre III, 3/ L’Asie et 4/ L’Océanie',
      type: 'Fiche de cours',
      difficulte: 'Difficile',
      verif: VERIF_A_VERIFIER,
      source: 'Géographie, classe de 4ᵉ (2004), chapitre III « Les autres espaces régionaux du monde », 3/ L’Asie (leçons 17 à 20 : étude de situation, contrastes naturels 2 h, populations 2 h, disparités économiques et sociales et problèmes d’intégration 2 h) et 4/ L’Océanie (leçons 21 et 22 : étude de situation, disparités économiques et sociales et problèmes d’intégration 2 h).',
      libelles: {
        definitions: 'Vocabulaire',
        proprietes: 'Faits et analyses',
        formules: 'Leçons du programme (ordre officiel)',
        conditions: 'Vigilance sur les mots et les chiffres',
        exemple: 'Étude guidée',
        exercices: 'Questions d’entraînement'
      },
      objectif: 'Rendre compte de l’immensité asiatique et océanienne : milieux extrêmes, poids démographique, trajectoires économiques contrastées, intégrations inachevées.',
      definitions: [
        'La mousson est un vent qui inverse de sens entre l’hiver et l’été et qui amène la saison des pluies en Asie méridionale et orientale.',
        'Le « riz de plaine irrigué » désigne une culture intensive qui demande de l’eau maîtrisée, beaucoup de travail et de petites parcelles.',
        'Un pays neuf, au sens géographique, est un espace de peuplement récent et de mise en valeur mécanisée, comme l’Australie ou le sud sibérien.',
        'Une zone économique spéciale est un territoire attractif pour les exportations : fiscalité légère, infrastructures, main-d’œuvre à bas coût.',
        'Le terme « Tigres et dragons » désigne les économies d’Asie de l’Est qui se sont industrialisées rapidement à partir des années 1960-1990.',
        'L’ANASE (ASEAN) est l’organisation des États d’Asie du Sud-Est ; l’Australie et la Nouvelle-Zélande appartiennent au Forum des îles du Pacifique avec les petits États insulaires.'
      ],
      proprietes: [
        'L’Asie est traitée en quatre leçons, l’Océanie en deux : le programme reconnaît ainsi une différence d’échelle, la première étant la moitié de l’humanité, la seconde une mer d’îles.',
        'Les contrastes naturels (leçon 18) tiennent à trois facteurs : l’étendue du nord au sud et de l’est à l’ouest, le relief (Himalaya, Tibet, déserts d’altitude) et la mousson, qui arrose le sud et l’est et laisse l’intérieur aride.',
        'Il en résulte une Asie d’extrêmes : glaciers et steppe, désert chaud et forêt équatoriale, fleuves géants et mers intérieures sans débouché, séismes et tsunamis sur les rivages et les arcs insulaires actifs.',
        'Les populations (leçon 19) sont la première richesse et le premier défi : deux milliards et demi d’habitants, l’Inde et la Chine en tête, des densités fortes dans les plaines rizicoles et les deltas, faibles dans le désert et la montagne.',
        'La diversité est culturelle et religieuse : hindouisme, islam, bouddhisme, confucianisme et christianisme se superposent à une mosaïque de langues ; la croissance démographique ralentit fortement en Asie de l’Est, mais reste forte dans plusieurs pays du Sud.',
        'Les disparités économiques (leçon 20) dessinent trois Asie : les économies industrielles et technologiques de l’Est et du Golfe, les ateliers exportateurs d’Asie du Sud-Est, et les régions rurales pauvres de l’Asie du Sud et centrale.',
        'Leçon 20 aussi : les mêmes États cumulent des mégapoles mondiales et des bidonvilles, une classe moyenne qui consomme et des travailleurs migrants sans protection.',
        'Les problèmes d’intégration de l’Asie sont doubles : des organisations commerciales efficaces mais une politique fragile (différends de frontières, poids de la Chine, présence des puissances extérieures), et une intégration financière et normative beaucoup plus faible que celle de l’Europe.',
        'L’Océanie oppose deux mondes : l’Australie et la Nouvelle-Zélande, pays développés, miniers et agricoles, et une vingtaine de petits États insulaires dont l’éloignement, la surface maritime, les cyclones et la montée des eaux posent des problèmes de survie autant que d’économie.',
        'L’intégration océanienne se joue sur les infrastructures sous-marines (câbles), le transport aérien et maritime, l’aide, l’éducation et la formation, et l’accord sur la pêche thonière.'
      ],
      formules: [
        'Leçon 17 — Étude de situation : localisation-carte',
        'Leçon 18 — Les contrastes naturels (2 h)',
        'Leçon 19 — Les populations de l’Asie (2 h)',
        'Leçon 20 — Les disparités économiques et sociales et les problèmes d’intégration (2 h)',
        'Leçon 21 — Étude de situation : localisation-carte (Océanie)',
        'Leçon 22 — Les disparités économiques et sociales et les problèmes d’intégration (2 h, Océanie)',
        'En Asie comme en Océanie, le programme regroupe la troisième et la quatrième question dans une seule leçon : c’est une demande d’articuler économie et intégration'
      ],
      conditions: [
        '« L’Asie » n’est pas un tout homogène : le programme parle de contrastes ; nommez au moins trois sous-ensembles (Asie de l’Est, du Sud-Est, du Sud, centrale, de l’Ouest).',
        'Ne réduisez pas l’Océanie à l’Australie : les petits États insulaires, leurs zones maritimes et leurs risques sont une part entière de la leçon 22.',
        'Le poids démographique n’explique pas à lui seul la puissance économique : la croissance chinoise et indienne dépend de choix d’investissement, d’éducation et d’ouverture.',
        'Un chiffre de PIB ou de population sans année ni source n’a pas de valeur : l’Inde et la Chine se disputent la première place selon la période retenue.'
      ],
      exemple: {
        enonce: 'Expliquer pourquoi le Bangladesh cumule densité très forte, riziculture performante et pauvreté persistante.',
        etapes: [
          'Leçon 18 — contrastes naturels : le pays occupe le delta le plus vaste du monde, formé par le Gange et le Brahmapoutre, avec des sols renouvelés par les crues.',
          'Leçon 18 — risques : cyclones, inondations et submersion salée frappent régulièrement les mêmes terres.',
          'Leçon 19 — populations : la plaine rizicole nourrit une des plus fortes densités rurales du monde, avec un habitat très dispersé.',
          'Leçon 20 — économie : le riz a gagné en rendement, l’industrie textile d’exportation emploie beaucoup de jeunes femmes, mais les salaires restent bas et les accidents industriels fréquents.',
          'Leçon 20 — intégration : le pays dépend de ses clients étrangers, de l’aide et des transferts de sa main-d’œuvre partie vers le Golfe, ce qui limite sa marge de manœuvre.'
        ],
        conclusion: 'La densité n’est pas une fatalité : elle résulte d’un milieu favorable et d’une agriculture intensive, et la pauvreté tient aux risques, aux salaires et à la dépendance commerciale.'
      },
      exercices: [
        {
          enonce: 'Donnez trois sous-ensembles asiatiques et une caractéristique économique pour chacun.',
          corrige: 'Asie de l’Est : industrialisation ancienne et haute technologie (Japon, Corée du Sud, Chine côtière). Asie du Sud-Est : ateliers d’assemblage exportateurs et économie de plantations (Thaïlande, Viêt Nam, Malaisie, Indonésie). Asie du Sud : densité rurale rizicole, services informatiques et industrie textile (Inde, Bangladesh, Pakistan).'
        },
        {
          enonce: 'Que change la montée du niveau de la mer pour un petit État insulaire du Pacifique ?',
          corrige: 'Elle menace les terres habitables et les cultures vivrières par le sel, les réservoirs d’eau douce et les infrastructures côtières ; elle pose la question juridique de la zone maritime et de l’existence même de l’État, et elle oblige à l’adaptation ou à la migration, ce qui explique que ces États portent le sujet dans les négociations climatiques.'
        },
        {
          enonce: 'Pourquoi la leçon 20 regroupe-t-elle disparités et intégration dans une seule leçon ?',
          corrige: 'Parce que le programme attend un lien de causalité : les écarts de développement entre États et à l’intérieur des États rendent l’intégration plus difficile (niveaux différents, méfiances, avantages asymétriques), et une bonne intégration peut au contraire réduire les écarts par les marchés, les normes et les infrastructures partagées.'
        }
      ]
    },
    {
      id: 'inegalites-developpement-3e',
      titre: 'La Terre, une planète divisée : les inégalités de développement',
      matiere: 'Histoire-Géo',
      branche: 'Géographie',
      niveau: '3ᵉ',
      chapitre: 'Géographie 3ᵉ — chapitre III, le monde',
      type: 'Fiche de cours',
      difficulte: 'Difficile',
      verif: VERIF_A_VERIFIER,
      source: 'Géographie, classe de 3ᵉ (2004), thème « Le monde », chapitre III « La Terre, une planète divisée » : leçon 5 « Inégalités de développement (niveaux de vie, revenus, démographie, échanges, exploitation) » (4 h) et leçon 6 « Les systèmes économiques » (4 h).',
      libelles: {
        definitions: 'Vocabulaire',
        proprietes: 'Faits et analyses',
        formules: 'Leçons du programme (ordre officiel)',
        conditions: 'Vigilance sur les mots et les chiffres',
        exemple: 'Étude guidée',
        exercices: 'Questions d’entraînement'
      },
      objectif: 'Mesurer les inégalités de développement dans le monde et expliquer leurs facteurs historiques et économiques.',
      definitions: [
        'Le développement désigne l’amélioration durable des conditions de vie (santé, éducation, revenus, droits) ; la croissance désigne seulement l’augmentation des richesses produites, en un point donné.',
        'Le PIB ou le PNB par habitant est une moyenne arithmétique : il ne dit rien de la répartition entre les habitants.',
        'L’indice de développement humain (IDH) combine trois dimensions : la santé (durée de vie), l’éducation (années de scolarisation) et le revenu par habitant.',
        'Les termes de l’échange sont le rapport entre le prix des produits qu’un pays exporte et celui des produits qu’il importe ; quand ils se dégradent, le pays travaille plus pour acheter autant.',
        'La dette publique correspond aux emprunts d’un État ; son service est le paiement des intérêts, qui réduit le budget de l’école ou de la santé.',
        'L’« exploitation » du programme désigne le prélèvement des ressources et du travail d’un territoire au profit d’acteurs extérieurs ou d’une minorité.'
      ],
      proprietes: [
        'Le programme de 3ᵉ étudie le monde en quatre chapitres : la Terre, planète du système solaire (leçons 1-2) ; planète menacée (3-4 : surexploitation des ressources, conséquences climatiques de l’exploitation économique) ; planète divisée (5-6) ; planète solidaire ? (7-10 : coopérations bilatérale et multilatérale, formes et problèmes de communication, « La planète Terre, un village ? »).',
        'Les inégalités se lisent à toutes les échelles : entre espaces mondiaux, entre États d’une même région, à l’intérieur d’un pays (capitale / intérieur), et à l’intérieur d’une ville (quartiers équipés / habitats informels).',
        'Quatre familles de facteurs sont attendues en leçon 5 : l’histoire (traite, colonisation, frontières héritées), la spécialisation dans des matières premières dont les cours sont instables, l’endettement et le poids des entreprises étrangères, et l’enclavement ou les contraintes naturelles.',
        'La démographie est une variable, pas une fatalité : une population jeune peut être un atout si elle est formée et employée, et une pression si les écoles et les emplois manquent — le programme de 5ᵉ pose la même question pour le Sénégal.',
        'Le chapitre III s’achève sur les systèmes économiques (leçon 6) : les structures économiques et sociales et leur évolution, y compris les mutations des systèmes de type socialiste et la diffusion du capitalisme.',
        'Les indicateurs sont des constructions : un classement d’IDH dépend du calcul retenu ; comparer des pays suppose la même année et la même source.'
      ],
      formules: [
        'Leçon 3 — La surexploitation des ressources et ses conséquences (énergies, ressources minières, halieutiques, forestières, hydrauliques)',
        'Leçon 4 — Les conséquences climatiques de l’exploitation économique de la planète (pollution, réchauffement, menace d’aridité)',
        'Leçon 5 — Inégalités de développement : niveaux de vie, revenus, démographie, échanges, exploitation (4 h)',
        'Leçon 6 — Les systèmes économiques : structures économiques et sociales et leur évolution (4 h)',
        'Leçons 7 à 10 — coopération bilatérale, coopération multilatérale, formes et problèmes de communication, La planète Terre, un village ?',
        'Les compétences exigibles : « Comprendre les inégalités de développement dans le monde » et « Comprendre les systèmes économiques, leurs dimensions sociales et leur évolution »'
      ],
      conditions: [
        'Éviter les mots « pays développés » et « pays sous-développés » comme des catégories naturelles : le programme parle d’inégalités de développement, donc de situations qui changent.',
        'Un revenu par habitant élevé ne prouve pas qu’une population est riche : l’Arabie saoudite ou la Guinée équatoriale exportent du pétrole, et les inégalités internes restent fortes.',
        'Les chiffres du monde bougent : dater l’année et la source, écrire « environ » et préférer des ordres de grandeur aux nombres à virgule.',
        'Ne pas tout expliquer par l’histoire coloniale ni tout expliquer par les politiques intérieures : le programme attend plusieurs facteurs articulés.'
      ],
      exemple: {
        enonce: 'Deux États exportateurs de pétrole ont un revenu par habitant voisin ; l’un scolarise presque tous ses enfants jusqu’au secondaire, l’autre non. Que conclure ?',
        etapes: [
          'Le revenu par habitant est une moyenne : il peut masquer une richesse captée par un petit nombre ou par l’État, sans investissement social.',
          'L’IDH oblige à regarder trois dimensions : la santé, l’éducation et le revenu. À revenu comparable, deux pays peuvent donc avoir des niveaux de développement très différents.',
          'Le choix d’utiliser ou non la rente pétrolière pour les écoles et les hôpitaux relève des politiques publiques et du poids des acteurs étrangers qui exploitent le brut.',
          'Les cours du pétrole, eux, dépendent du marché mondial : un pays peut voir ses recettes chuter sans rien changer à sa politique.'
        ],
        conclusion: 'La richesse exportée n’est pas le développement : les inégalités se mesurent d’abord à l’école, à l’hôpital et à la répartition, pas seulement à la production.'
      },
      exercices: [
        {
          enonce: 'Replacer la leçon 5 dans la suite du programme de 3ᵉ et justifier cet ordre.',
          corrige: 'Le thème « Le monde » commence par la place de la Terre dans le système solaire et ses potentialités (leçons 1-2), montre ensuite une planète menacée par la surexploitation et le changement climatique (3-4), puis une planète divisée par les inégalités de développement et les systèmes économiques (5-6), et se termine par la question de la solidarité : coopérations, communications, système-monde (7-10). L’ordre va donc du cadre planétaire aux clivages, puis aux réponses.'
        },
        {
          enonce: 'Donner trois limites de l’IDH comme mesure des inégalités.',
          corrige: 'C’est une moyenne nationale, donc elle cache les inégalités internes entre régions et entre quartiers ; elle ne mesure que trois dimensions (santé, éducation, revenu) et ignore l’emploi, l’environnement ou les libertés ; et ses valeurs dépendent des années et des méthodes de calcul, donc les classements sont fragiles. On peut la compléter par des indicateurs de répartition ou de pauvreté.'
        }
      ]
    },

    {
      id: 'terre-solaire-oceans-seconde',
      titre: 'La Terre dans le système solaire, les continents et les océans',
      matiere: 'Histoire-Géo',
      branche: 'Géographie',
      niveau: 'Seconde',
      chapitre: 'Géographie Seconde — première partie et chapitre I',
      type: 'Fiche de cours',
      difficulte: 'Moyen',
      verif: VERIF_A_VERIFIER,
      source: 'Géographie, classe de Seconde (2004), première partie « La Terre dans le système solaire » (leçons 1 à 3) et deuxième partie, chapitre I « Continents, océans et mers » (leçons 4 à 6). Programme de 20 leçons, entièrement consacré à la géographie physique.',
      libelles: {
        definitions: 'Vocabulaire',
        proprietes: 'Faits et analyses',
        formules: 'Leçons du programme (ordre officiel)',
        conditions: 'Vigilance sur les mots et les chiffres',
        exemple: 'Étude guidée',
        exercices: 'Questions d’entraînement'
      },
      objectif: 'Utiliser les coordonnées géographiques et les projections pour localiser un point, et décrire la répartition des continents, des océans et des eaux marines.',
      definitions: [
        'Les parallèles sont des cercles imaginaires parallèles à l’équateur ; la latitude mesure la distance angulaire au nord ou au sud de l’équateur, de 0° à 90°.',
        'Les méridiens joignent les pôles ; la longitude mesure l’angle à l’est ou à l’ouest du méridien d’origine (Greenwich), de 0° à 180°.',
        'Une projection cartographique est un mode de représentation plane d’une surface courbe : elle choisit ce qu’elle conserve (aires, distances ou angles) et donc ce qu’elle déforme.',
        'Un planisphère est une carte du monde entier ; un globe est la seule représentation sans déformation des formes, mais elle est difficile à imprimer.',
        'La salinité est la masse de sels dissous dans un litre d’eau de mer, exprimée en grammes par litre (g/L) ou en pour mille (‰).',
        'Les mouvements de la mer désignent les vagues, les courants et les marées, dont les conséquences se lisent sur le climat des côtes et sur la navigation.'
      ],
      proprietes: [
        'La leçon 1 énumère les moyens de connaissance de l’Univers : l’observation visuelle, les instruments (lunette, télescope), les sondes et satellites, et les moyens modernes de mesure utilisés en géographie (télédétection, GPS, systèmes d’information géographique).',
        'La rotation de la Terre sur elle-même en environ 24 heures explique l’alternance du jour et de la nuit et le décalage des fuseaux horaires.',
        'La translation autour du Soleil en environ 365,25 jours, combinée à l’inclinaison de l’axe de rotation, explique la succession des saisons et la variation de la durée du jour selon la latitude.',
        'Les coordonnées géographiques sont un outil, pas une définition : le programme les place dans un travail pratique de représentation de la Terre, avec les projections.',
        'La répartition des terres et des mers est inégale : l’hémisphère nord porte la plus grande part des continents, l’océan Pacifique est le plus vaste, et le Sénégal regarde l’océan Atlantique.',
        'Les eaux marines sont salées parce que les roches continentales, érodées, apportent en continu des sels dissous ; leur salinité moyenne est de l’ordre de 35 g/L, avec des écarts selon l’évaporation, les apports de fleuves et les glaces.',
        'Le TP de leçon 6 demande un planisphère schématique des océans, des mers et des courants marins : c’est une compétence de construction graphique, notée, et le rapport d’enquête montre que beaucoup de classes s’arrêtent avant ou autour de cette leçon.'
      ],
      formules: [
        'Leçon 1 — Les moyens de connaissance de l’Univers (1 h)',
        'Leçon 2 — Les mouvements de la Terre (2 h)',
        'Leçon 3 — TP : a) Les planètes du système solaire ; b) Les formes de représentation de la Terre, y compris les coordonnées géographiques (3 h)',
        'Leçon 4 — La répartition des continents et des océans (1 h)',
        'Leçon 5 — Les eaux marines (2 h)',
        'Leçon 6 — TP : planisphère schématique de la répartition des océans, des mers et des courants marins (1 h)',
        'Compétences exigibles : « Connaître la répartition et la localisation des continents et des océans ainsi que la composition des eaux marines » et « Comprendre les mouvements de la mer et leurs conséquences »'
      ],
      conditions: [
        'Le programme de Seconde est une année de géographie physique : les leçons sur la population, l’agriculture ou les villes relèvent de la Première, pas de la Seconde.',
        'Latitude se mesure du nord au sud, longitude de l’ouest à l’est : les échanger est l’erreur la plus fréquente en étude de situation.',
        'Toute carte est une déformation choisie : annoncer le type de projection quand on compare des surfaces, sinon le Groenland paraît aussi grand que l’Afrique.',
        'Les valeurs chiffrées (durées de rotation et de translation, salinité moyenne, superficies) sont des ordres de grandeur : les élèves doivent les vérifier dans leur manuel.'
      ],
      exemple: {
        enonce: 'Un élève doit placer Dakar (environ 14,7° N et 17,4° O) sur un planisphère et expliquer pourquoi la ville a un climat plus sec que Ziguinchor.',
        etapes: [
          'On porte d’abord la latitude : 14,7° nord, donc au nord de l’équateur, en descendant depuis le tropique du Cancer vers l’équateur.',
          'On porte ensuite la longitude : 17,4° ouest, donc à l’ouest du méridien de Greenwich, en allant vers la gauche.',
          'Le point obtenu est sur la façade atlantique, à la hauteur de la boucle du fleuve Sénégal et au sud du Sahara.',
          'La position en latitude place Dakar dans une zone à pluviométrie sahélienne, alors que Ziguinchor, plus au sud, reçoit les pluies du domaine soudanais.',
          'L’ouverture sur l’Atlantique explique en plus des brises maritimes, des brouillards côtiers et des températures adoucies, sans compenser le déficit de pluie.'
        ],
        conclusion: 'Localiser avec les coordonnées, puis relier la position au milieu : c’est exactement l’enchaînement que le programme attend entre la leçon 3 (représentation) et la leçon 4 (répartition des continents et des océans).'
      },
      exercices: [
        {
          enonce: 'Un camarade dit : « la longitude indique combien de degrés séparent un lieu de l’équateur ». Corriger.',
          corrige: 'C’est la latitude qui se mesure par rapport à l’équateur. La longitude se mesure par rapport au méridien d’origine (Greenwich), vers l’est ou vers l’ouest, de 0° à 180°. Dakar est à environ 14,7° de latitude nord et 17,4° de longitude ouest.'
        },
        {
          enonce: 'Donner deux moyens modernes de connaissance de l’Univers ou de la Terre et une utilisation concrète en géographie.',
          corrige: 'Le satellite d’observation (télédétection) sert à cartographier les cultures, l’urbanisation ou les inondations ; le GPS donne une position précise sur le terrain et équipe les relevés de terrain et les SIG ; le télescope et les sondes documentent l’Univers. Le programme de la leçon 1 attend l’inventaire, puis le lien avec le travail pratique de carte.'
        }
      ]
    },
    {
      id: 'climats-seconde',
      titre: 'L’atmosphère, les facteurs du climat et la construction des diagrammes',
      matiere: 'Histoire-Géo',
      branche: 'Géographie',
      niveau: 'Seconde',
      chapitre: 'Géographie Seconde — chapitre II, les climats de la Terre',
      type: 'Fiche de cours',
      difficulte: 'Moyen',
      verif: VERIF_A_VERIFIER,
      source: 'Géographie, classe de Seconde (2004), deuxième partie, chapitre II « Les climats de la Terre » : leçon 7 « L’atmosphère : structure et composition », leçon 8 « Les facteurs du climat », leçon 9 « Les éléments du climat », leçon 10 TP « Carte de la répartition des climats de la terre et construction de diagrammes ».',
      libelles: {
        definitions: 'Vocabulaire',
        proprietes: 'Faits et analyses',
        formules: 'Leçons du programme (ordre officiel)',
        conditions: 'Vigilance sur les mots et les méthodes',
        exemple: 'Étude guidée',
        exercices: 'Questions d’entraînement'
      },
      objectif: 'Distinguer temps et climat, expliquer les facteurs du climat et construire correctement un diagramme ombrothermique.',
      definitions: [
        'L’atmosphère est l’enveloppe gazeuse de la Terre ; sa couche la plus basse, la troposphère, est celle où se forment les phénomènes météorologiques.',
        'Le temps météorologique décrit l’état de l’atmosphère à un moment précis ; le climat est la combinaison des états moyens sur une longue période (environ trente ans).',
        'Les éléments du climat sont ce que l’on mesure : température, précipitations, pression, vent, humidité, ensoleillement.',
        'Les facteurs du climat sont ce qui explique ces mesures : latitude, altitude, distance à la mer (continentalité), courants marins, exposition des versants et couvert végétal.',
        'Un diagramme ombrothermique (ou climogramme) représente, mois par mois, la courbe des températures et les barres des précipitations sur la même base horizontale.',
        'Une isotherme relie les points de même température, une isohyète les points de même pluie : ce sont les procédés de la carte de répartition des climats.'
      ],
      proprietes: [
        'La structure verticale de l’atmosphère commande la lecture du climat : la température baisse avec l’altitude dans la troposphère, alors qu’elle remonte dans la stratosphère où se trouve la couche d’ozone.',
        'La latitude est le facteur principal : l’angle des rayons solaires diminue de l’équateur vers les pôles, donc l’énergie reçue et la température moyenne baissent.',
        'Les masses d’air et leur circulation, l’inégale chauffe des terres et des mers, et les courants marins chauds ou froids redistribuent la chaleur à la surface du globe.',
        'L’altitude refroidit (ordre de grandeur usuel : environ 0,6 °C tous les 100 m) et le relief force l’air à s’élever : le versant exposé au vent reçoit les pluies, le versant abrité reste sec.',
        'La zonation classique des climats suit la latitude : équatorial, tropical à saison sèche (soudanien et sahélien), désertique, méditerranéen, tempéré océanique et continental, polaire — avec des montagnards qui superposent des étages.',
        'Le Sénégal illustre la zonation : une saison des pluies unique d’environ juin à octobre, une pluviométrie qui décroît du sud vers le nord, et trois domaines sahélien, soudanien et guinéen selon le seuil de pluie.',
        'Le TP de leçon 10 combine deux savoir-faire notés au brevet et au bac : la carte de répartition des climats et la construction du diagramme ; le rapport d’enquête montre que les enseignants ajoutent des séances de graphiques parce que les élèves en manquent.',
        'La leçon 10 est le point d’arrêt réel de nombreuses classes de Seconde : plusieurs cahiers de texte et rapports d’inspection relevés en 2019 s’arrêtent à cette leçon, soit environ la moitié du programme de 20 leçons.'
      ],
      formules: [
        'Leçon 7 — L’atmosphère : structure et composition (1 h)',
        'Leçon 8 — Les facteurs du climat (3 h)',
        'Leçon 9 — Les éléments du climat (1 h)',
        'Leçon 10 — TP : carte de la répartition des climats de la Terre et construction de diagrammes (2 h)',
        'Échelles du diagramme ombrothermique, convention usuelle : température en courbe, 10 °C pour 1 cm ; précipitations en barres, 20 mm pour 1 cm ; douze mois sur la même largeur',
        'Lecture de l’aridité : un mois est dit sec quand la courbe de température passe au-dessus des barres de précipitations (méthode utilisée pour compter les mois arides)'
      ],
      conditions: [
        'Ne jamais confondre temps et climat : une année sèche n’est pas un changement de climat, et un orage de juillet n’est pas une « saison ».',
        'Les échelles du diagramme ne sont pas libres : doubler la hauteur des pluies ou changer la courbe fait disparaître la lecture des mois secs. Vérifier 10 °C/cm et 20 mm/cm avec le manuel utilisé.',
        'Un climat ne se résume pas à « chaud et sec » : la copie doit associer un niveau de température, un total de pluie et une répartition annuelle.',
        'Les seuils des domaines sahélien, soudanien et guinéen et les normales pluviométriques sont des chiffres de référence à vérifier dans le manuel et sur une période longue.'
      ],
      exemple: {
        enonce: 'Construire et commenter le diagramme ombrothermique d’une station à températures maximales en avril-mai et à pluies concentrées de juillet à septembre.',
        etapes: [
          'Tracer l’axe horizontal des douze mois, à largeur égale, puis l’axe de gauche pour la température (10 °C par centimètre) et celui de droite pour les précipitations (20 mm par centimètre).',
          'Placer les douze points de température moyenne et les joindre par une courbe continue, sans angles aigus.',
          'Dessiner les douze barres de précipitations, en partant de la ligne des mois et non de la base du graphique si le professeur l’exige : suivre la convention du manuel.',
          'Repérer les mois où la courbe dépasse les barres : ils donnent la longueur de la saison sèche ; ici, l’essentiel de l’année, de novembre à juin environ.',
          'Noter le maximum de température avant le maximum de pluie (avril-mai contre juillet-septembre), caractéristique d’un climat tropical à saison sèche unique.',
          'Conclure avec trois mots-clés : chaud, pluie concentrée en un seul hivernage, longue saison sèche.'
        ],
        conclusion: 'Le diagramme se lit en trois gestes : une amplitude de température, un total annuel de pluie, une saison sèche mesurée en mois. C’est ce triptyque que demande la correction.'
      },
      exercices: [
        {
          enonce: 'Deux stations ont le même total annuel de 800 mm ; l’une a 800 mm en six mois, l’autre répartit toute l’année. Leur climat est-il le même ?',
          corrige: 'Non. Le total annuel ne suffit pas : la répartition mensuelle distingue un climat à saison sèche marquée, où l’agriculture et la végétation souffrent de la sécheresse une partie de l’année, d’un climat à pluies régulières, plus favorable aux cultures et aux forêts. Le diagramme ombrothermique existe précisément pour montrer cette répartition.'
        },
        {
          enonce: 'Expliquer pourquoi la ville de Dakar, en bord de mer, connaît des maximales de température plus tardives qu’une ville de l’intérieur à même latitude.',
          corrige: 'L’océan se chauffe et se refroidit plus lentement que la terre (continentalité) : il retarde et atténue le maximum, avec des brises marines et des brouillards côtiers qui rafraîchissent l’air. Dans l’intérieur, la terre monte vite en température et le maximum avance. Le courant marin de la côte ouest africaine, frais, renforce cet effet.'
        }
      ]
    },
    {
      id: 'reliefs-seconde',
      titre: 'Tectonique des plaques, roches, érosion et coupe topographique',
      matiere: 'Histoire-Géo',
      branche: 'Géographie',
      niveau: 'Seconde',
      chapitre: 'Géographie Seconde — chapitre III, les reliefs de la Terre',
      type: 'Fiche de cours',
      difficulte: 'Difficile',
      verif: VERIF_A_VERIFIER,
      source: 'Géographie, classe de Seconde (2004), deuxième partie, chapitre III « Les reliefs de la Terre » : leçons 11 à 16, dont la leçon 16 TP « Carte de localisation des formes de relief » et « Initiation à la coupe topographique ».',
      libelles: {
        definitions: 'Vocabulaire',
        proprietes: 'Faits et analyses',
        formules: 'Leçons du programme (ordre officiel)',
        conditions: 'Vigilance sur les mots et les gestes techniques',
        exemple: 'Étude guidée',
        exercices: 'Questions d’entraînement'
      },
      objectif: 'Relier tectonique des plaques, types de roches et formes de relief, et savoir réaliser une coupe topographique à partir d’une carte.',
      definitions: [
        'La lithosphère est l’enveloppe rigide de surface, faite de la croûte et du manteau supérieur ; elle est découpée en plaques qui se déplacent sur l’asthénosphère plus ductile.',
        'La tectonique des plaques est la théorie qui explique la formation des reliefs, des séismes et des volcans par le mouvement de ces plaques.',
        'L’isostasie désigne l’équilibre entre les masses continentales, plus épaisses sous les hautes montagnes, et le manteau sur lequel elles « flottent ».',
        'Une roche magmatique provient du refroidissement d’un magma : grenue si elle refroidit en profondeur (granite), fine ou vitreuse si elle refroidit en surface (basalte).',
        'Une roche sédimentaire se forme par accumulation et cimentation de sédiments (grès, calcaire, argile) ; une roche métamorphique est une roche transformée par la pression et la température (gneiss, marbre).',
        'L’érosion comprend l’altération des roches, le transport des matériaux par l’eau, le vent ou la glace, et la sédimentation qui dépose ces matériaux ailleurs.',
        'Une coupe topographique (ou profil topographique) est le dessin de la surface du relief le long d’une ligne tracée sur une carte ; elle se lit avec une échelle horizontale et une échelle des altitudes.'
      ],
      proprietes: [
        'La dérive des continents, formulée par Alfred Wegener au début du XXe siècle, est reprise et expliquée par la tectonique des plaques à partir des années 1960 : c’est l’exemple typique d’une science qui corrige son modèle.',
        'Trois types de frontières de plaques produisent trois effets : à l’écartement (dorsales) la croûte neuve et le volcanisme ; à la convergence la subduction (Andes, fosses, arcs volcaniques) ou la collision (Himalaya, Alpes) ; au coulissage (faille de San Andreas) des séismes sans création de relief.',
        'Les plissements, les failles, les horsts et les grabens sont les traces visibles des contraintes tectoniques enregistrées dans les roches.',
        'Le cycle lithologique relie les trois familles de roches : le magma donne des roches magmatiques, l’érosion les transforme en sédiments puis en roches sédimentaires, la pression et la chaleur en roches métamorphiques, et la fusion recommence le cycle.',
        'Les formes de relief sont le produit combiné de la tectonique (qui soulève) et de l’érosion (qui abat) : montagnes jeunes à pentes fortes, vieilles masses érodées, plateaux, plaines alluviales et littoraux.',
        'La coupe topographique est une compétence exigeante : elle demande une carte topographique, une feuille millimétrée, un choix d’échelle des altitudes et un calcul d’exagération verticale. Le rapport d’enquête montre que beaucoup d’enseignants, sans matériel ou sans formation de géographe, déclarent ne jamais la faire.',
        'Les leçons 11 et 12 (« La tectonique des plaques et l’isostasie », « Les roches ») sont citées par les professeurs comme les plus difficiles de l’année, et certaines classes les remplacent par des exposés d’élèves.',
        'La troisième partie du programme (leçons 17 à 20) applique ces acquis aux « régions naturelles » du globe : régions intertropicales, tempérées, polaires, et l’originalité des montagnes et des littoraux.'
      ],
      formules: [
        'Leçon 11 — La tectonique des plaques et l’isostasie (2 h)',
        'Leçon 12 — Les roches (2 h)',
        'Leçon 13 — Les grands types de structure et leur répartition (2 h)',
        'Leçon 14 — L’érosion (2 h)',
        'Leçon 15 — Les formes de relief terrestre et leur répartition (2 h)',
        'Leçon 16 — TP : 1) carte de localisation des formes de relief ; 2) initiation à la coupe topographique',
        'Compétence exigible : « Appliquer les méthodes de représentation cartographique et topographique à l’étude du relief »',
        'Le point culminant du Sénégal dépasse à peine 500 m : le pays est un bon exemple de relief vieux et érodé — à confirmer avec le manuel'
      ],
      conditions: [
        'Une coupe topographique n’est pas un schéma : elle se construit à partir des points d’intersection entre le profil et les courbes de niveau, reportés un par un sur la feuille millimétrée.',
        'L’échelle verticale est presque toujours plus grande que l’échelle horizontale : c’est l’exagération verticale. L’annoncer, sinon le relief paraît artificiellement abrupt.',
        'Ne pas confondre roche et relief : un calcaire peut former une plaine comme une montagne ; la nature de la roche explique la résistance à l’érosion, pas l’altitude.',
        'Tectonique et érosion agissent en même temps : écrire « d’abord la tectonique, puis l’érosion » comme deux étapes séparées est une simplification.',
        'Les leçons 17 à 20 du programme (régions intertropicales, tempérées, polaires, montagnes et littoraux) ne sont pas encore couvertes par la bibliothèque.'
      ],
      exemple: {
        enonce: 'Réaliser la coupe topographique le long du profil AB d’une carte au 1/50 000 où les courbes de niveau sont équidistantes de 5 m, entre 15 m et 95 m d’altitude.',
        etapes: [
          'Tracer la ligne AB sur la carte avec un trait fin et léger, et repérer le sens de lecture (A à gauche, B à droite).',
          'Poser la feuille millimétrée le long de AB et marquer, au crayon, chaque intersection avec une courbe de niveau, en écrivant son altitude.',
          'Dessiner l’axe horizontal de la coupe à la même échelle que la carte (le 1/50 000 devient par exemple 1 cm pour 500 m) et porter les points repérés.',
          'Choisir une échelle des altitudes plus généreuse, par exemple 1 cm pour 10 m, et l’indiquer en légende avec le coefficient d’exagération verticale.',
          'Placer chaque point à son altitude, sur la verticale correspondante, puis les joindre par une courbe continue qui respecte les pentes : serrées pour un versant raide, larges pour une plaine.',
          'Compléter le dessin : altitude maximale et minimale, nom des lieux traversés, hachures ou teinte sous la surface, échelles et titre.'
        ],
        conclusion: 'La coupe se juge sur trois choses : l’exactitude des points reportés, le choix assumé des deux échelles et la lisibilité du titre et de la légende.'
      },
      exercices: [
        {
          enonce: 'Associer chaque frontière de plaques à un relief ou à un phénomène : écartement, convergence océanique-continente, collision continentale, coulissage.',
          corrige: 'Écartement → dorsale océanique, volcanisme et croûte neuve. Convergence avec subduction → fosse océanique, chaîne volcanique de type Andes. Collision continentale → plissement de haute montagne, Himalaya, Alpes. Coulissage → faille transformante, séismes, sans relief majeur (faille de San Andreas).'
        },
        {
          enonce: 'Un camarade affirme : « le granite est une roche sédimentaire parce qu’on le trouve dans des montagnes ». Expliquer son erreur.',
          corrige: 'La famille d’une roche se décide par sa genèse, pas par sa position actuelle. Le granite est magmatique grenu : il a cristallisé lentement en profondeur. On le voit en montagne parce que la tectonique l’a soulevé et que l’érosion a dégagé la couverture qui le recouvrait. Une roche sédimentaire, elle, est faite de sédiments accumulés et cimentés, souvent en couches.'
        }
      ]
    },

    /* ---------- Géographie de Terminale ----------------------------- */
    {
      id: 'afrique-geographie',
      titre: 'L’Afrique : problèmes et perspectives de développement du continent',
      matiere: 'Histoire-Géo',
      branche: 'Géographie',
      niveau: 'Terminale',
      chapitre: 'Géographie Terminale — cinquième partie, l’Afrique',
      type: 'Fiche de cours',
      difficulte: 'Moyen',
      verif: VERIF_A_VERIFIER,
      source: 'Géographie, classe de Terminale (2004), cinquième partie « L’Afrique », chapitre I : leçon 15 « Les problèmes et perspectives de développement du continent africain » (3 h). Le chapitre II est l’étude monographique du Sénégal : leçons 16 « Milieux naturels et populations », 17 « La question de l’eau », 18 « Les problèmes économiques et les politiques de développement ».',
      libelles: {
        definitions: 'Vocabulaire',
        proprietes: 'Faits et analyses',
        formules: 'Repères chiffrés',
        conditions: 'Vigilance sur les mots et les chiffres',
        exemple: 'Étude guidée',
        exercices: 'Questions d’entraînement'
      },
      objectif: 'Décrire les dynamiques démographiques et urbaines de l’Afrique et expliquer les contrastes de développement.',
      definitions: [
        'La démographie est l’étude des populations : naissance, mortalité, croissance et migration.',
        'La transition démographique est le passage d’une forte mortalité et fécondité à une mortalité puis une fécondité plus faibles ; l’Afrique est dans une phase tardive de cette transition.',
        'L’urbanisation est l’augmentation de la part des villes dans la population ; une métropole est une grande ville qui commande à un territoire.',
        'L’indice de développement humain (IDH) combine revenu, éducation et santé ; le PNB par habitant ne mesure que le revenu.',
        'La ZLECAf (zone de libre-échange continentale africaine), lancée en 2021, vise à supprimer les droits de douane entre pays africains.'
      ],
      proprietes: [
        'L’Afrique est le deuxième continent par la superficie (environ 30,3 millions de km²) et le deuxième par la population (environ 1,4 à 1,5 milliard d’habitants).',
        'Elle compte 54 États, soit le plus grand nombre d’États d’un continent, avec des tailles très inégales.',
        'La population est jeune : une part importante des habitants a moins de 25 ans, ce qui est à la fois une chance et un défi (écoles, emplois).',
        'L’urbanisation est rapide ; Lagos, Kinshasa, Le Caire, Dar es Salaam, Johannesburg sont des métropoles régionales, souvent avec des quartiers informels.',
        'Les ressources sont abondantes : pétrole et gaz (golfe de Guinée, Libye, Algérie, Mozambique), minerais (cobalt et cuivre de RDC, or du Ghana, du Mali et d’Afrique du Sud, phosphate du Maroc), terres agricoles et énergie solaire.',
        'Les contrastes sont forts entre États exportateurs de pétrole, économies agricoles et pays enclavés ; les inégalités se lisent aussi à l’intérieur des villes.',
        'Le climat et la sécheresse menacent la sécurité alimentaire (Sahel, Corne de l’Afrique), tandis que le continent produit très peu des émissions mondiales de gaz à effet de serre.'
      ],
      formules: [
        'Superficie : environ 30,3 millions de km² (2e continent)',
        'Population : environ 1,4 à 1,5 milliard d’habitants (2e continent)',
        'États : 54 (le plus grand nombre au monde) ; près de la moitié de la population vit en ville et cette part augmente vite',
        'Jeunesse : environ 60 % de la population a moins de 25 ans (ordre de grandeur)',
        'Densité : forte sur le golfe de Guinée et le Nil, très faible au Sahara et dans le Kalahari'
      ],
      conditions: [
        'Les chiffres de population africaine changent vite et selon les sources : écrire « environ », et dater la source.',
        '« Le continent » est trompeur : l’Afrique regroupe 54 États et des réalités très différentes ; éviter le singulier.',
        'Un PNB par habitant élevé (Guinée équatoriale) ne signifie pas que la population est riche : la répartition compte.',
        'Ne pas présenter l’Afrique comme uniquement victime ou uniquement « continent d’avenir » : la réalité est les deux à la fois.'
      ],
      exemple: {
        enonce: 'Une classe compare deux cartes de l’Afrique : densité de population et richesse par habitant. Les deux ne correspondent pas. Expliquer.',
        etapes: [
          'Les densités élevées se concentrent sur le golfe de Guinée, le Nil, les hauts plateaux (Éthiopie, Rwanda) et les littoraux, grâce à l’eau et aux sols fertiles.',
          'La carte de la richesse suit surtout les ressources exportables : pétrole, gaz, mines — donc des zones parfois peu peuplées.',
          'Le port et la capitale peuvent concentrer les revenus sans que l’intérieur du pays en bénéficie.',
          'Conclusion : la densité dépend de l’eau, des sols et de l’histoire ; la richesse monétaire dépend des exportations et des prix mondiaux.'
        ],
        conclusion: 'Deux cartes, deux logiques : l’une explique où vivent les habitants, l’autre où circulent l’argent et les matières premières.'
      },
      exercices: [
        {
          enonce: 'Donner trois raisons qui expliquent la forte croissance des villes africaines.',
          corrige: 'Une fécondité encore élevée et une population jeune ; l’exode rural provoqué par le manque de terres, la sécheresse et les écoles ou emplois du côté de la ville ; et la concentration des investissements, des universités et des services publics dans les capitales économiques.'
        },
        {
          enonce: 'Un camarade dit : « l’Afrique est pauvre, donc il n’y a rien d’intéressant à y étudier ». Répondre avec trois arguments tirés de la géographie.',
          corrige: 'Le continent est riche de ressources stratégiques (cobalt pour les batteries, pétrole, gaz, terres, énergie solaire) et il pèse démographiquement : une personne sur cinq dans le monde en 2050 environ y vivra. Il abrite des métropoles majeures et des organisations régionales (UA, CEDEAO, ZLECAf) qui décident de notre avenir commun. Enfin les enjeux du climat, de l’eau et de l’alimentation s’y jouent en partie.'
        }
      ]
    },
    /* ---------- Géographie de Première : géographie humaine ---------- */
    {
      id: 'population-mondiale-1ere',
      titre: 'La population mondiale : groupes, croissance, migrations, structures et répartition',
      matiere: 'Histoire-Géo',
      branche: 'Géographie',
      niveau: 'Première',
      chapitre: 'Géographie Première — première partie, la population mondiale',
      type: 'Fiche de cours',
      difficulte: 'Difficile',
      verif: VERIF_A_VERIFIER,
      source: 'Géographie, classe de Première (2004), géographie humaine, première partie « La population mondiale », leçons 2 à 8 (groupes humains et religions, accroissement et politiques démographiques, migrations, structures, TP pyramides, répartition, TP densités) ; la leçon 1 d’introduction est traitée dans la fiche sur les inégalités de développement.',
      libelles: {
        definitions: 'Vocabulaire',
        proprietes: 'Faits et analyses',
        formules: 'Leçons du programme (ordre officiel)',
        conditions: 'Vigilance sur les mots et les chiffres',
        exemple: 'Étude guidée',
        exercices: 'Questions d’entraînement'
      },
      objectif: 'Maîtriser les outils de description d’une population mondiale de huit milliards d’habitants et les lecture graphiques exigées au baccalauréat.',
      definitions: [
        'Le taux de natalité et le taux de mortalité s’expriment en nombre de naissances ou de décès pour mille habitants et par an.',
        'La croissance naturelle est la différence entre les deux taux ; la croissance totale y ajoute le solde migratoire.',
        'L’indice synthétique de fécondité (ISF) est le nombre moyen d’enfants par femme ; le seuil de renouvellement des générations se situe autour de deux enfants.',
        'L’espérance de vie à la naissance mesure la durée de vie moyenne d’une génération dans les conditions de l’année observée.',
        'Une politique démographique est un ensemble de mesures volontaristes visant à accélérer ou à freiner la croissance : congés, aides, contraception, âge légal du mariage, contrôle des naissances.',
        'Une migration internationale change de pays ; une migration interne change de région, et l’urbanisation en est la forme la plus visible.',
        'Une pyramide des âges représente la population par âge et par sexe, la base pour les jeunes et le sommet pour les âgés.',
        'Un diagramme triangulaire (ou de composition) montre la répartition d’une population active en trois secteurs ; la densité est le rapport de la population à la surface.'
      ],
      proprietes: [
        'La leçon 2 décrit la composition : quelques milliers de langues, trois ou quatre grandes familles linguistiques dominantes, et les religions universelles (christianisme, islam, hindouisme, bouddhisme) qui ne se superposent pas aux frontières politiques.',
        'La leçon 3 traite la croissance : le rythme s’est accéléré au XXᵉ siècle puis ralentit, mais l’augmentation reste forte en Afrique subsaharienne et en Asie du Sud, là où la fécondité baisse lentement.',
        'Les politiques démographiques ont des effets contrastés : les campagnes de planning familial et la scolarisation des filles ont fait baisser la fécondité au Bangladesh, en Indonésie et en Iran ; la politique de l’enfant unique en Chine a accéléré le vieillissement et déséquilibré le rapport de masculinité à la naissance.',
        'La leçon 4 montre des migrations massives et multidirectionnelles : travail, guerre, climat, études ; Sud-Nord, mais surtout Sud-Sud, plus une migration interne qui nourrit l’urbanisation.',
        'Les structures (leçon 5) séparent deux mondes : une population mondiale jeune dont la moitié a moins d’une trentaine d’années, et des pays à sommet de pyramide large où les âgés coûtent cher en santé et en retraites.',
        'Les deux travaux pratiques (leçons 6 et 8) sont des épreuves de méthode : construire une pyramide à partir d’un tableau, lire un rapport de masculinité et un rapport de dépendance, calculer des densités et les cartographier par classes.',
        'La leçon 7 conclut sur une répartition très inégale : les foyers de densité sont l’Asie du Sud et de l’Est, l’Europe et le nord-est des États-Unis, tandis que déserts, forêts équatoriales et hautes montagnes se vident.',
        'La densité moyenne du monde est de l’ordre de cinquante habitants au kilomètre carré, mais le chiffre cach les vides et les concentrations : c’est un des premiers enseignements de la leçon 8.'
      ],
      formules: [
        'Leçon 2 — La population : groupes humains, langues et religions (1 h)',
        'Leçon 3 — L’accroissement de la population mondiale et les politiques démographiques, construction de courbes d’évolution (2 h)',
        'Leçon 4 — Les migrations (2 h)',
        'Leçon 5 — Les structures de la population mondiale (2 h)',
        'Leçon 6 — TP : construction et commentaire de pyramides des âges et de diagrammes triangulaires sur les structures socioprofessionnelles (2 h)',
        'Leçon 7 — La répartition de la population mondiale (2 h)',
        'Leçon 8 — TP : calcul et carte des densités de population (2 h)'
      ],
      conditions: [
        'Ne confondez jamais solde naturel et solde migratoire : un pays peut se peupler sans faire d’enfants, et l’inverse.',
        'Une baisse de fécondité ne réduit pas immédiatement la population : l’inertie démographique fait continuer la croissance pendant des décennies.',
        'Sur une pyramide, lisez les âges et non les années : une large bosse signale une génération, pas une date.',
        'La densité moyenne ne dit rien de la répartition : accompagnez toujours le chiffre d’un minimum et d’un maximum.'
      ],
      exemple: {
        enonce: 'Commenter une pyramide des âges d’un pays sahélien puis d’un pays européen (leçon 5 et 6).',
        etapes: [
          'Forme : base très large et sommets pointus pour le pays sahélien ; base rétrécie, corps renflé et sommet arrondi pour le pays européen.',
          'Lecture des âges : moins de quinze ans autour de la moitié de la population dans le premier cas, plus de soixante ans autour d’un cinquième dans le second.',
          'Sexe : comparer les deux côtés ; une disparité chez les jeunes adultes signale souvent une migration de travail masculine.',
          'Rapports : calculer le rapport de dépendance des jeunes (moins de quinze ans sur les quinze-soixante-quatre ans) et celui des âgés.',
          'Conséquences : écoles, santé maternelle et création d’emplois massifs dans le premier cas ; retraites, dépendance et main-d’œuvre dans le second.',
          'Explication : fécondité, mortalité, migrations et héritage des baby-booms ; puis perspective : la transition se poursuit, mais à des rythmes très différents.'
        ],
        conclusion: 'Une pyramide bien lue donne à elle seule le diagnostic démographique et trois problèmes économiques : école, emploi, retraites.'
      },
      exercices: [
        {
          enonce: 'Un pays enregistre 32 naissances pour mille et 8 décès pour mille, avec un solde migratoire nul. Calculez la croissance naturelle en pourcentage.',
          corrige: 'Solde naturel = 32 − 8 = 24 pour mille, soit 2,4 % par an. Pourcentage = taux pour mille divisé par dix ; on peut vérifier avec la règle de trois : 24 × 100 / 1000 = 2,4.'
        },
        {
          enonce: 'Pourquoi le seuil de renouvellement des générations est-il supérieur à deux enfants par femme dans les pays à forte mortalité infantile ?',
          corrige: 'Parce que toutes les enfants ne parviennent pas à l’âge adulte : il faut naître plus pour que deux générations se succèdent. Le seuil est d’environ deux enfants ailleurs, et davantage quand la mortalité est élevée ; il dépend aussi du rapport de masculinité à la naissance.'
        },
        {
          enonce: 'Citez trois facteurs qui expliquent un vide démographique et un facteur qui explique un foyer de densité.',
          corrige: 'Vides : l’aridité qui empêche l’agriculture et l’eau potable (Sahara, désert d’Atacama), le froid extrême (Sibérie, Canada nord), le relief accidenté et les sols maigres (Himalaya, Andes) ou la forêt équatoriale dense et ses maladies. Foyer de densité : des plaines irriguées de riziculture intensive qui nourrissent beaucoup de monde sur peu d’espace (Gange, delta du Mékong).'
        }
      ]
    },
    {
      id: 'milieu-rural-1ere',
      titre: 'Milieu rural : formes de mise en valeur agricole et pêche dans le monde',
      matiere: 'Histoire-Géo',
      branche: 'Géographie',
      niveau: 'Première',
      chapitre: 'Géographie Première — deuxième partie, population et activités en milieu rural',
      type: 'Fiche de cours',
      difficulte: 'Difficile',
      verif: VERIF_A_VERIFIER,
      source: 'Géographie, classe de Première (2004), deuxième partie « Population et activités en milieu rural », leçons 9 à 14 : formes traditionnelles dans les pays tropicaux (2 h), cultures commerciales des pays tropicaux (2 h), mutations récentes (2 h), évolution en Europe (2 h), pays neufs (2 h), pêche traditionnelle et moderne (2 h).',
      libelles: {
        definitions: 'Vocabulaire',
        proprietes: 'Faits et analyses',
        formules: 'Leçons du programme (ordre officiel)',
        conditions: 'Vigilance sur les mots et les chiffres',
        exemple: 'Étude guidée',
        exercices: 'Questions d’entraînement'
      },
      objectif: 'Comparer les formes de mise en valeur agricole du monde — traditionnelles, commerciales, européennes, pays neufs — et distinguer pêche traditionnelle et moderne.',
      definitions: [
        'Une agriculture vivrière produit pour nourrir ceux qui cultivent ; une agriculture commerciale produit pour vendre, localement ou à l’exportation.',
        'La culture itinérante sur brûlis déplace le champ quand la jachère raccourcit ; elle suppose une terre abondante et une population faible.',
        'Le système de plantation associe une monoculture d’exportation, une main-d’œuvre nombreuse et un capital venu d’ailleurs.',
        'L’agriculture intensive recherche le maximum de rendement par hectare, par intrants (engrais, irrigation, semences) et par mécanisation.',
        'L’agriculture extensive recherche le maximum par travailleur ou par tête de bétail, sur de grandes surfaces à faible intrant.',
        'Un « pays neuf » est un espace de colonisation récente aux grandes propriétés mécanisées : pampas argentines, Midwest, Cerrado brésilien, terres rouges d’Australie.',
        'La révolution verte désigne le paquet technique des années 1960-70 : variétés à haut rendement, irrigation, engrais et pesticides.',
        'Les OGM sont des organismes dont le matériel génétique a été modifié par transgénèse ; la pêche lointaine s’exerce hors des eaux nationales, la pêche industrielle transforme à bord.'
      ],
      proprietes: [
        'Les leçons 9 à 11 portent sur les pays tropicaux, et le programme y suit un ordre chronologique : d’abord les formes traditionnelles, puis les cultures commerciales installées par la colonisation, enfin les mutations récentes.',
        'Les formes traditionnelles ne sont pas archaïques : elles sont adaptées à un milieu (cycles courts, sols fragiles, peu de capital) et deviennent insuffisantes quand la pression démographique raccourcit la jachère.',
        'Les cultures commerciales — cacao, café, arachide, coton, canne, hévéa, palmier à huile, banane — insèrent le village dans le marché mondial mais rendent le revenu dépendant des cours et des phytosanitaires.',
        'Les mutations récentes (leçon 11) sont doubles : techniques (variétés, petite irrigation, engrais, machette motorisée) et sociales (salariat agricole, terres accaparées, horticulture d’exportation, agrocarburants).',
        'La leçon 12 traite l’Europe : l’agriculture passe de productiviste à multifonctionnelle, avec des rendements élevés mais des excédents, des aides contestées, des normes environnementales et un départ des jeunes.',
        'La leçon 13 traite les pays neufs : grandes exploitations, mécanisation, science agronomique, intégration industrielle et exportation massive, avec déforestation, concentration foncière et consommation d’eau.',
        'La leçon 14 sépare deux pêches : artisanale (pirogue, équipage familial, marché local, femme transformatrice) et moderne (navire-usine, congélation, thon, farines, flottes longue distance et accords).',
        'Le programme attend des cartes et des schémas de systèmes : un paysage agraire se lit par ses parcelles, son habitat, ses cultures et ses circuits, pas seulement par ses rendements.',
        'Le Sénégal sert d’application à chaque leçon : arachide (forme traditionnelle et commerciale), niébé et maraîchage d’exportation (mutation), périmètres irrigués de la vallée, pêche thonière et artisanale de Thiaroye.'
      ],
      formules: [
        'Leçon 9 — Les formes de mise en valeur agricole dans les pays tropicaux : les formes traditionnelles (2 h)',
        'Leçon 10 — Les pays tropicaux : les cultures commerciales (2 h)',
        'Leçon 11 — Les pays tropicaux : les mutations récentes (2 h)',
        'Leçon 12 — L’évolution des formes de mise en valeur agricole en Europe (2 h)',
        'Leçon 13 — Les formes modernes de mise en valeur agricole dans les pays neufs (2 h)',
        'Leçon 14 — La pêche : formes traditionnelle et moderne (2 h)',
        'Ces six leçons ferment la première moitié du programme de Première ; d’après les cahiers de texte cités dans le rapport PURGES, beaucoup de classes s’arrêtent à la leçon 9.'
      ],
      conditions: [
        'Ne confondez pas rendement (par hectare) et productivité (par travailleur) : l’agriculture extensive des pays neufs a un faible rendement et une forte productivité.',
        'Une culture d’exportation n’est pas en soi une oppression, ni la culture vivrière une sécurité : posez la question de qui possède, qui transforme et qui décide.',
        'La révolution verte a augmenté les récoltes et creusé les écarts, pollué des nappes et dépendance aux intrants : le programme demande des effets et des limites, pas un verdict.',
        'Pour la pêche, distinguez le tonnage capturé, le tonnage débarqué et le tonnage transformé : les trois chiffres ne racontent pas la même chose.'
      ],
      exemple: {
        enonce: 'Construire le plan comparatif demandé par les leçons 9, 12 et 13 : trois systèmes agricoles face au marché.',
        etapes: [
          'Ligne 1 — acteur et dimension : cultivateur tropical sur parcelle familiale ; exploitation européenne souvent familiale ou sociétaire, très encadrée ; grande exploitation des pays neufs, société ou ferme d’un millier d’hectares.',
          'Ligne 2 — techniques : traction animale et outil manuel, intrants limités ; mécanisation lourde, itinéraire technique précis, normes ; semoirs et moissonneuses-batteuses, aviation agricole, OGM.',
          'Ligne 3 — finalité : autoconsommation et marché local d’abord ; production vendue sous cahier des charges et aides ; exportation de masse vers les marchés mondiaux.',
          'Ligne 4 — main-d’œuvre : familiale, saisonnière, femmes ; peu d’actifs, qualifiés et contrôlés ; salariat saisonnier et logistique, très peu d’emplois par tonne produite.',
          'Ligne 5 — contraintes : pluie, cours mondiaux, foncier ; normes environnementales, prix bas, générations qui ne succèdent ; sécheresse, coût du carburant, accusation de déforestation.',
          'Conclusion : les trois systèmes nourrissent le marché mondial, mais à des coûts sociaux et écologiques très différents, et les politiques agricoles ne pèsent pas sur eux de la même manière.'
        ],
        conclusion: 'Le comparatif ne juge pas : il montre qu’une même finalité — vendre — s’obtient par des logiques de taille, de technique et de pouvoir différentes.'
      },
      exercices: [
        {
          enonce: 'Associez chaque espace à la leçon qui le traite : Cerrado, Sine (Sénégal), plaine du Pô, delta du Mékong.',
          corrige: 'Cerrado → leçon 13, pays neuf brésilien, soja et élevage mécanisés. Sine → leçons 9 et 10, bassin arachidier sénégombien sur culture commerciale vivrière. Plaine du Pô → leçon 12, agriculture européenne intensive, laitière et céréalière encadrée. Delta du Mékong → leçons 9 et 11, riziculture tropicale de dense en mutation.'
        },
        {
          enonce: 'Donnez deux avantages et deux inconvénients de l’horticulture d’exportation pour un pays ouest-africain.',
          corrige: 'Avantages : devises, emplois salariés notamment féminins, et désenclavement par la chaîne du froid. Inconvénients : forte dépendance aux normes et aux clients européens, pression sur l’eau et les sols, concurrence avec le marché local et volatilité des prix.'
        },
        {
          enonce: 'Pourquoi le programme termine-t-il la partie rurale par la pêche ?',
          corrige: 'Parce qu’elle permet d’appliquer la même grille — forme traditionnelle contre forme moderne — à une ressource mobile et commune : on retrouve la question du droit, du capital, du marché et de la surexploitation, ce qui prépare les leçons de 3ᵉ et de Terminale sur les ressources et le système-monde.'
        }
      ]
    },
    {
      id: 'milieu-urbain-1ere',
      titre: 'Milieu urbain : villes, urbanisation mondiale et activités',
      matiere: 'Histoire-Géo',
      branche: 'Géographie',
      niveau: 'Première',
      chapitre: 'Géographie Première — troisième partie, population et activités en milieu urbain',
      type: 'Fiche de cours',
      difficulte: 'Moyen',
      verif: VERIF_A_VERIFIER,
      source: 'Géographie, classe de Première (2004), troisième partie « Population et activités en milieu urbain », leçons 15 à 19 : définition et fonctions (1 h), diversité des processus et formes d’urbanisation (2 h), industrie et ses mutations (2 h), commerce, services et leurs mutations (2 h), dynamique urbaine et problèmes des villes en insistant sur les villes du tiers monde (2 h).',
      libelles: {
        definitions: 'Vocabulaire',
        proprietes: 'Faits et analyses',
        formules: 'Leçons du programme (ordre officiel)',
        conditions: 'Vigilance sur les mots et les chiffres',
        exemple: 'Étude guidée',
        exercices: 'Questions d’entraînement'
      },
      objectif: 'Définir la ville et ses fonctions, expliquer l’urbanisation mondiale et ses formes, et analyser les problèmes spécifiques des villes du tiers monde.',
      definitions: [
        'Le taux d’urbanisation est la part de citadins dans la population totale ; le taux d’accroissement urbain mesure la vitesse à laquelle les villes grandissent.',
        'Une fonction urbaine est un service que la ville rend au-delà d’elle-même : politique, portuaire, industrielle, universitaire, religieuse, touristique.',
        'Une agglomération est un espace bâti continu ; une aire urbaine y ajoute les communes où l’on vient travailler.',
        'Une mégapole est une très grande concentration urbaine ; une mégalopole est un chapelet de villes continues, comme Boston-Washington ou le littoral japonais.',
        'L’étalement urbain désigne l’extension de la ville sur les terres agricoles ou naturelles voisines.',
        'Le secteur informel regroupe les activités non enregistrées : petit commerce, atelier, transport par minibus, emploi domestique, auto-construction.',
        'La périurbanisation est le départ des citadins vers les couronnes périphériques, avec_retour_ quotidien vers le centre pour le travail.'
      ],
      proprietes: [
        'La leçon 15 fixe les définitions : la ville se reconnaît à un seuil administratif, à un paysage, à des densités et surtout à des fonctions ; le statut juridique de « commune » ne suffit pas toujours.',
        'La leçon 16 montre que l’urbanisation n’est pas un modèle unique : elle a été longue et liée à l’industrie en Europe et en Amérique du Nord, elle est très rapide et parfois sans industrialisation en Afrique et en Asie.',
        'Les formes séparent trois cas : la ville-planifiée et ses quartiers administratifs, la ville-européenne à centre historique dense, et la ville spontanée avec ses lotissements irréguliers et ses bidonvilles.',
        'La leçon 17 traite l’industrie urbaine : localisation passée près du port, de la voie ferrée et de l’énergie, délocalisation des ateliers, quartiers reconvertis, et persistance des emplois ouvriers dans les zones industrielles périphériques.',
        'La leçon 18 traite le tertiaire : commerce de détail et grande surface, banques, administrations, universités, télécommunications et tourismes d’affaires ; la ville devient un lieu de consommation et de décision.',
        'La leçon 19 ferme la partie : la dynamique urbaine crée de la richesse et de l’innovation, mais produit aussi des problèmes, et le programme demande d’insister sur les villes du tiers monde.',
        'Ces problèmes forment une liste à connaître : logement insuffisant et cher, eau et électricité irrégulières, gestion des déchets, embouteillages et transports collectifs saturés, pollution, inondation sur sols imperméabilisés, emploi informel et inégalités, ségrégation spatiale.',
        'Les réponses existent et sont géographiques : plans d’urbanisme, transports en commun et bus à haut niveau de service, réhabilitation de quartiers, dessalement et forages, tri et valorisation des déchets, sécurisation foncière, et décentralisation de capitales vers des villes secondaires.',
        'Le Sénégal est un bon terrain d’application : Dakar saturée, Thiès et Mbour en croissance rapide, Touba ville sainte à croissance démographique forte, et les villes nouvelles annoncées pour désengorger la capitale.'
      ],
      formules: [
        'Leçon 15 — La ville : définition et fonctions (1 h)',
        'Leçon 16 — Diversité des processus et des formes d’urbanisation dans le monde (2 h)',
        'Leçon 17 — Les activités urbaines : l’industrie et ses mutations (2 h)',
        'Leçon 18 — Les activités urbaines : le commerce, les services et leurs mutations (2 h)',
        'Leçon 19 — La dynamique urbaine et les problèmes des villes, en insistant sur les villes du tiers monde (2 h)',
        'Ordre de la partie : définir, comparer les trajectoires, décrire les activités, puis discuter les problèmes'
      ],
      conditions: [
        'Comparer des taux d’urbanisation suppose la même définition du citadin : les seuils administratifs diffèrent selon les pays.',
        'Une ville qui croît vite n’est pas forcément pauvre, et une ville riche n’est pas forcément bien gérée : distinguez la croissance de la capacité à équiper.',
        'Le secteur informel n’est pas une anomalie : il fournit emplois et logements, et le programme demande d’en mesurer l’ampleur sans le mépriser.',
        'Ne généralisez pas « les villes du tiers monde » : Dakar, Dhaka, Lagos, Lima et Le Caire ont des trajectoires et des problèmes distincts.'
      ],
      exemple: {
        enonce: 'Expliquer et proposer des remèdes pour trois problèmes dakarois (leçon 19).',
        etapes: [
          'Problème 1 — logement : l’offre formelle est hors de portée, donc construction spontanée en périphérie et densification des anciens quartiers ; remède : sécurisation foncière, terrains viabilisés et réhabilitation.',
          'Problème 2 — transport : la ville s’étale, les déplacements augmentent, la route est saturée ; remède : transport collectif structurant, couloirs réservés, desserte des nouveaux pôles et urbanisme orienté autour des stations.',
          'Problème 3 — eau et déchets : demande urbaine forte, réseau inégal, déchets non collectés dans les lotissements irréguliers ; remède : extension et entretien du réseau, tri à la source, collecte privée organisée, assainissement des bas-fonds.',
          'Fil conducteur : chaque remède déplace la contrainte (financement, entretien, expropriation, acceptation sociale), ce que la leçon 19 demande de discuter et non d’ignorer.'
        ],
        conclusion: 'Les problèmes urbains sont liés entre eux : l’étalement aggrave le transport, qui aggrave l’étalement ; une politique de la ville doit donc traiter plusieurs boutons à la fois.'
      },
      exercices: [
        {
          enonce: 'Classez ces fonctions : capitale, port autonome, université, cité religieuse, station balnéaire, centre administratif régional.',
          corrige: 'Fonction politique et administrative : capitale, centre administratif régional. Fonction économique : port autonome, station balnéaire (tourisme). Fonction culturelle et religieuse : université, cité religieuse. Précisez qu’une ville cumule presque toujours plusieurs fonctions, et que la hiérarchie des fonctions change avec le temps.'
        },
        {
          enonce: 'Pourquoi l’urbanisation africaine est-elle qualifiée de « rapide sans industrialisation » ?',
          corrige: 'Parce que les villes grossissent par migration et croissance naturelle plus vite que l’industrie ne crée d’emplois : le tertiaire et l’informel absorbent les arrivants. Le résultat est une urbanisation avancée avec des revenus faibles, ce que la leçon 19 distingue du cas européen, où l’industrie a d’abord appelé les populations.'
        }
      ]
    },
    {
      id: 'echanges-integration-1ere',
      titre: 'Population et vie de relation : communications, échanges et espaces d’intégration',
      matiere: 'Histoire-Géo',
      branche: 'Géographie',
      niveau: 'Première',
      chapitre: 'Géographie Première — quatrième partie et conclusion',
      type: 'Fiche de cours',
      difficulte: 'Difficile',
      verif: VERIF_A_VERIFIER,
      source: 'Géographie, classe de Première (2004), quatrième partie « Population et vie de relation », leçons 20 à 22 (moyens de communication 2 h, techniques d’échanges : troc, monnaie, bourse 1 h, organisation du commerce mondial et échange inégal 2 h) et conclusion, leçon 23 « Les espaces d’intégration économique : problématique et organisation » (1 h), avec les dossiers CEDEAO, UEMOA, Union européenne et ALENA.',
      libelles: {
        definitions: 'Vocabulaire',
        proprietes: 'Faits et analyses',
        formules: 'Leçons du programme (ordre officiel)',
        conditions: 'Vigilance sur les mots et les chiffres',
        exemple: 'Étude guidée',
        exercices: 'Questions d’entraînement'
      },
      objectif: 'Expliquer comment les transports, la monnaie et le commerce organisent le monde, et construire un dossier sur un espace d’intégration économique.',
      definitions: [
        'Une chaîne de transport relie modes et maillons : route, camion, port, navire, entrepôt, douane, client ; le coût se mesure du tout au tout, pas par kilomètre seul.',
        'Le conteneur a standardisé les tailles, accéléré le chargement et fait baisser le coût du transport maritime, donc allongé les distances de production.',
        'Le fret aérien transporte vite et cher : il convient aux produits lourds de valeur, périssables ou urgents.',
        'Le troc échange des biens sans monnaie ; la monnaie sert d’unité de compte, de réserve de valeur et d’intermédiaire des échanges.',
        'Une bourse de valeurs est un marché où s’échètent des parts d’entreprises et des titres ; le cours y reflète une anticipisation des profits.',
        'La balance commerciale compare exportations et importations de marchandises ; le compte courant y ajoute services, revenus et transferts.',
        'L’échange inégal est une thèse selon laquelle les produits primaires se dégradent par rapport aux produits manufacturés et technologiques, ce qui transfère de la valeur vers les pays qui transforment.',
        'Une zone de libre-échange supprime les droits de douane entre membres, sans tarif extérieur commun ; une union douanière ajoute ce tarif commun ; un marché unique ajoute la libre circulation des personnes et des capitaux.'
      ],
      proprietes: [
        'La leçon 20 sépare deux familles de communication : transporter des marchandises et des hommes, et transporter de l’information ; les deux produisent de la hiérarchie entre espaces bien reliés et espaces à l’écart.',
        'Le monde se lit par ses nœuds : détroits, canaux, grands ports, plaques tournantes aériennes et câbles sous-marins ; celui qui contrôle un passage ou un câble contrôle une partie du commerce.',
        'Les coûts de transport expliquent la localisation des activités : un port en eau profonde attire l’industrie, une route de montagne enclave une région, un aéroport international installe une zone d’affaires.',
        'La leçon 21 retrace l’histoire des techniques d’échange : du troc à la monnaie métallique, au papier, à l’écriture comptable, à la banque, à la bourse et aujourd’hui au paiement mobile et électronique.',
        'La leçon 22 décrit l’organisation du commerce mondial : entreprises transnationales, normes, organisations (OMC, CNUCED, accords régionaux), matières premières, produits manufacturés et services ; et pose la controverse de l’échange inégal.',
        'La conclusion (leçon 23) est une leçon de méthode : elle demande une problématique, puis l’organisation concrète d’un espace d’intégration, choisi parmi CEDEAO, UEMOA, Union européenne et ALENA.',
        'Le plan type d’un dossier d’intégration est le suivant : genèse et membres, objectifs et instruments (tarif, monnaie, libre circulation, institutions), bilan commercial et humain, difficultés et perspectives.',
        'Comparaison attendue : l’UEMOA partage une monnaie et un tarif extérieur mais un marché étroit et des infrastructures faibles ; la CEDEAO couvre plus d’États et de monnaies, donc avance par projets de routes et d’énergie ; l’Union européenne a marché, monnaie et juridiction commune ; l’ALENA/ACEUM repose surtout sur l’intégration productive autour des États-Unis.'
      ],
      formules: [
        'Leçon 20 — Les moyens de communication : transports et télécommunications (2 h)',
        'Leçon 21 — Les techniques d’échanges : troc et monnaie, bourse de valeurs (1 h)',
        'Leçon 22 — L’organisation du commerce mondial et l’échange inégal (2 h)',
        'Leçon 23 — Les espaces d’intégration économique : problématique et organisation (1 h)',
        'Dossiers exigés par le programme : CEDEAO, UEMOA, Union européenne, ALENA',
        'Ordre de la partie : circuler, payer, échanger, puis s’organiser entre États'
      ],
      conditions: [
        'Une statistic de commerce est une valeur ou un volume ? Précisez : un prix qui baisse peut masquer des quantités qui montent.',
        '« Échange inégal » est une interprétation, pas un fait brut : présentez la thèse, les indicateurs qui la soutiennent et les objections (qualité, productivité, services).',
        'Ne confondez pas libre-échange, union douanière et marché unique : les mots désignent des degrés différents d’intégration.',
        'Distinguez les organisations régionales : la CEDEAO et l’UEMOA n’ont ni les mêmes membres ni les mêmes compétences, et l’ALENA a été remplacée par l’ACEUM.'
      ],
      exemple: {
        enonce: 'Construire la problématique et le plan du dossier UEMOA exigé par la leçon 23.',
        etapes: [
          'Problématique : dans quelle mesure une monnaie commune et un tarif extérieur commun suffisent-ils à intégrer des économies peu complémentaires ?',
          'Partie 1 — genèse et membres : huit États, deux fois le franc CFA, commission, parlement, banque centrale commune, marché commun annoncé.',
          'Partie 2 — instruments : union monétaire, union douanière, programme de convergence budgétaire, libre circulation, normes et juridiction de justice.',
          'Partie 3 — bilan : échanges intra-zone encore modestes, transports et énergie insuffisants, divergence des économies autour des matières premières, poids des frontières avec la CEDEAO.',
          'Partie 4 — difficultés et perspectives : sécurité et instabilité politique de plusieurs membres, projet de monnaie commune de la CEDEAO, zones industrielles et corridors Dakar-Bamako ou Abidjan-Lagos.',
          'Conclusion : l’intégration monétaire est réelle, l’intégration productive reste à construire, donc la monnaie ne suffit pas sans routes, énergie et marchés.'
        ],
        conclusion: 'Un dossier de leçon 23 se juge sur la problématique et l’articulation instruments → bilan → limites, non sur l’accumulation de dates et de sigles.'
      },
      exercices: [
        {
          enonce: 'Pourquoi la standardisation du conteneur a-t-elle changé la géographie mondiale de l’industrie ?',
          corrige: 'Elle a rendu le transport maritime rapide, fiable et bon marché, donc il devenait rentable de délocaliser la fabrication loin du marché, à condition de disposer d’un port efficace. Cela a favorisé les littoraux bien équipés de l’Asie de l’Est, les grands ports de transbordement, et a creusé l’écart avec les États enclavés et les ports mal dragués.'
        },
        {
          enonce: 'Donnez un argument pour et un argument contre la thèse de l’échange inégal.',
          corrige: 'Pour : le prix des produits primaires tend à se dégrader face aux produits manufacturés et technologiques, et le pouvoir de fixation des prix est détenu ailleurs, donc le producteur primaire travaille plus pour importer autant. Contre : la baisse des prix profite au consommateur, les pays exportateurs de pétrole ou de minerais ont parfois beaucoup enrichi, et la qualité, la productivité ou les services comptent dans la valeur — certains pays exportateurs de produits primaires ont connu une industrialisation rapide.'
        },
        {
          enonce: 'Classez ces flux dans la leçon 20 ou la leçon 21 : paiement mobile entre particuliers, câble sous-marin, camion sur route bitumée, inscription en bourse, liaison téléphonique, fret aérien de haricots verts.',
          corrige: 'Leçon 20, moyens de communication : câble sous-marin, route bitumée et camion, liaison téléphonique, fret aérien. Leçon 21, techniques d’échanges : paiement mobile entre particuliers et inscription en bourse, parce qu’ils portent la valeur, pas l’objet.'
        }
      ]
    },
    /* ---------- Géographie de Terminale ------------------------------ */
    {
      id: 'systeme-monde-amerique-nord-tle',
      titre: 'Le système-monde et l’espace nord-américain',
      matiere: 'Histoire-Géo',
      branche: 'Géographie',
      niveau: 'Terminale',
      chapitre: 'Géographie Terminale — introduction et première partie',
      type: 'Fiche de cours',
      difficulte: 'Difficile',
      verif: VERIF_A_VERIFIER,
      source: 'Géographie, classe de Terminale (2004), introduction « Le système-monde : des espaces interdépendants » (leçon 1, 2 h) et première partie « L’espace nord-américain » : leçons 2 à 5 (atouts et handicaps de la nature ; populations, villes et sociétés ; construction de l’espace économique ; modèle économique américain, 4 h).',
      libelles: {
        definitions: 'Vocabulaire',
        proprietes: 'Faits et analyses',
        formules: 'Leçons du programme (ordre officiel)',
        conditions: 'Vigilance sur les mots et les chiffres',
        exemple: 'Étude guidée',
        exercices: 'Questions d’entraînement'
      },
      objectif: 'Penser le monde comme un système d’interdépendances, puis analyser l’Amérique du Nord comme espace dominant de ce système.',
      definitions: [
        'Le système-monde désigne un espace unique où les parties sont reliées par des flux et hiérarchisées : centres, périphéries, espaces dominés.',
        'Une interdépendance est une dépendance réciproque : chacun a besoin des autres, mais pas de la même façon ni avec le même pouvoir.',
        'Un flux mesure un mouvement entre deux lieux : marchandises, capitaux, informations, migrants, énergie ; on le qualifie par son sens, son volume et sa nature.',
        'La puissance désigne la capacité à peser sur les autres : militaire, économique, technologique, monétaire, culturelle et diplomatique.',
        'Le « Rust Belt » (ceinture rouillée) nomme les vieux districts industriels du nord-est des États-Unis en reconversion.',
        'La Sun Belt désigne la bande sud et ouest, attractive par le climat, la défense, la technologie et les coûts.',
        'Une aire métropolitaine est un centre urbain et ses couronnes ; le megalopolis enchaîne plusieurs aires qui se touchent.'
      ],
      proprietes: [
        'La leçon 1 est une leçon de cadre : elle installe la grille de lecture de toute l’année, en montrant que l’interdépendance n’implique pas l’égalité.',
        'Elle demande de croiser trois séries de faits : ce qui circule (flux), qui décide (firmes transnationales, États, places financières, organisations), et où se concentre la valeur (métropoles mondiales, littoraux, bassins technologiques).',
        'La leçon 2 dresse le bilan naturel de l’Amérique du Nord : une façade atlantique ouverte sur l’Europe, une façade pacifique, de grands ensembles — Appalaches usées, Bouclier canadien, grandes plaines, cordillère de l’Ouest — et un Mississippi navigable.',
        'Atouts : eau, terres, énergie, forêts, minerais, climats variés et fleuves ; handicaps : froid du nord, aridité de l’Ouest, ouragans du Golfe, incendies de Californie, sécheresse et dépendance énergétique.',
        'La leçon 3 traite les populations : immigration choisie et subie, poids démographique des États-Unis, diversité ethno-raciale et religieuse, ségrégations persistantes, et inégalités d’accès à l’école et à la santé.',
        'Les villes nord-américaines sont l’objet central de la leçon 3 : très urbanisées, étalées, dominées par le centre d’affaires, la voiture et la banlieue, avec Boston-New York-Washington en megalopolis et Los Angeles en modèle polycentrique.',
        'La leçon 4 raconte la construction de l’espace économique : avance de l’Est industriel, poussée vers l’Ouest et le Sud, intégration du Mexique par les maquilas, et traités successifs (ALÉNA puis ACEUM).',
        'La leçon 5, la plus lourde en heures, analyse le modèle : marché financier et bourses, grandes firmes, innovation et brevets, agriculture exportatrice, coût social des restructurations, poids du dollar, et dépendance du reste du monde vis-à-vis du marché américain.',
        'Il faut aussi en mesurer les problèmes : désindustrialisation de certaines régions, inégalités de revenus et de patrimoine, dette publique, fractures politiques et sociales, et exposition aux crises venues de la finance américaine.'
      ],
      formules: [
        'Leçon 1 — Le système-monde : des espaces interdépendants (2 h)',
        'Leçon 2 — Atouts et handicaps de la nature',
        'Leçon 3 — Populations, villes et sociétés (1 h)',
        'Leçon 4 — La construction de l’espace économique : États-Unis, Canada et Mexique (1 h)',
        'Leçon 5 — Le modèle économique américain : caractéristiques et problèmes (4 h)',
        'La leçon 5 concentre les heures de la première partie : c’est la leçon la plus probable au baccalauréat',
        'Vocabulaire du système-monde à réutiliser dans chaque partie de l’année : flux, hiérarchie, centre, périphérie, interdépendance'
      ],
      conditions: [
        '« Atouts et handicaps » n’est pas une liste de paysages : chaque fait naturel doit être relié à une activité et à un coût.',
        'Ne confondez pas les trois États : le Canada est peu peuplé et fédéral, le Mexique est émergent et faiblement intégré au marché du Nord, les États-Unis dominent l’ensemble.',
        'Le vocabulaire de la puissance doit être mesuré : un PIB, une monnaie de réserve, un portefeuille de bases militaires, un nombre d’étudiants étrangers.',
        'Une interdépendance asymétrique reste une interdépendance : le programme attend que vous montriez les dépendances réciproques, y compris celles du centre.'
      ],
      exemple: {
        enonce: 'Répondre à un sujet de synthèse : « En quoi l’espace nord-américain est-il à la fois le centre du système-monde et un espace de contrastes ? »',
        etapes: [
          'Introduction : définir le système-monde (leçon 1) et poser la question de la domination exercée par un espace lui-même divisé.',
          'Partie 1 — les bases de la puissance : nature (leçon 2), taille du marché, agriculture exportatrice, innovation, dollar, places financières, forces armées (leçon 5).',
          'Partie 2 — un espace organisé et intégré : migration et urbanisation (leçon 3), avance de l’Est puis poussée vers le Sud et l’Ouest, traités avec le Canada et le Mexique (leçon 4).',
          'Partie 3 — les contrastes internes : ceinture rouillée contre Sun Belt, quartiers d’affaires contre pauvreté urbaine, inégalités de revenu et d’accès aux soins, populations autochtones marginalisées, Mexique frontalier des maquilas.',
          'Partie 4 — les limites de la domination : dette, contestation politique, dépendance aux importations, concurrence chinoise, exposition du monde aux crises américaines.',
          'Conclusion : l’Amérique du Nord est un centre réel mais relatif ; le système-monde se transforme avec la montée de l’Asie-Pacifique, traitée en troisième partie.'
        ],
        conclusion: 'Le sujet demande une dialectique : puissance et fragmentation sont les deux faces du même espace, et la leçon 1 fournit le vocabulaire pour l’écrire.'
      },
      exercices: [
        {
          enonce: 'Donnez trois exemples de flux qui relient le Sénégal au système-monde et indiquez pour chacun qui en décide.',
          corrige: 'Exportations de produits de la mer et de phosphates, dont le prix se fixe sur les marchés mondiaux ; transferts de la diaspora, décidés par les ménages migrés et dépendants des politiques d’immigration européennes ; importations d’hydrocarbures et de riz, dépendantes des cours et des fournisseurs ; câbles sous-marins et opérateurs, dont l’abonnement et les normes viennent des entreprises et des accords internationaux.'
        },
        {
          enonce: 'Expliquez le déplacement du centre de gravité économique des États-Unis de l’Est vers le Sud et l’Ouest.',
          corrige: 'La vieille ceinture industrielle a souffert de la concurrence, de la robotisation et de la délocalisation ; le Sud et l’Ouest ont attiré les dépenses de défense, les universités et la haute technologie, une main-d’œuvre issue de l’immigration, un coût du travail et du foncier plus bas, et le climat. La voiture et l’aviation ont permis l’étalement, donc la Sun Belt a cru plus vite que le Rust Belt.'
        },
        {
          enonce: 'Que change l’ALENA/ACEUM pour le Mexique ? Donnez un avantage et une limite.',
          corrige: 'Avantage : industrialisation des régions frontalières par les usines d’assemblage, emplois salariés et exportations manufacturées. Limite : les maquilas dépendent de donneurs d’ordre étrangers, importent leurs composants, paient des salaires faibles, peu de valeur ajoutée locale, et la fracture reste grande avec le Sud mexicain agricole et pauvre.'
        }
      ]
    },
    {
      id: 'espace-europeen-tle',
      titre: 'L’espace européen : milieux, construction et couple franco-allemand',
      matiere: 'Histoire-Géo',
      branche: 'Géographie',
      niveau: 'Terminale',
      chapitre: 'Géographie Terminale — deuxième partie',
      type: 'Fiche de cours',
      difficulte: 'Moyen',
      verif: VERIF_A_VERIFIER,
      source: 'Géographie, classe de Terminale (2004), deuxième partie « L’espace européen » : leçon 6 « Milieux naturels et populations » (1 h), leçon 7 « La construction européenne : réalités et perspectives » (2 h), leçon 8 « Étude économique alternée entre la France et l’Allemagne » (3 h).',
      libelles: {
        definitions: 'Vocabulaire',
        proprietes: 'Faits et analyses',
        formules: 'Leçons du programme (ordre officiel)',
        conditions: 'Vigilance sur les mots et les chiffres',
        exemple: 'Étude guidée',
        exercices: 'Questions d’entraînement'
      },
      objectif: 'Décrire l’Europe comme espace aménagé et vieillissant, analyser sa construction et comparer les deux moteurs économiques, France et Allemagne.',
      definitions: [
        'La « banane bleue » (ou dorsale européenne) désigne l’arc très peuplé et très équipé qui va du nord-ouest de l’Italie aux Pays-Bas en passant par la vallée du Rhin.',
        'Une périphérie européenne désigne les marges moins denses et moins riches : nord scandinave, sud méditerranéen, est continental.',
        'Le vieillissement démographique combine baisse de la fécondité et allongement de la vie ; il se mesure par les rapports de dépendance.',
        'La PAC est la politique agricole commune : elle organise aides et marchés agricoles à l’échelle européenne.',
        'Une étude « alternée » compare deux pays en successions de points communs et de différences, au lieu de les décrire séparément.',
        'Le modèle rhénan désigne une économie de compromis social, d’entreprises de taille moyenne, de formation professionnelle et d’exportation industrielle ; le modèle français est plus centralisé, avec de grands groupes et un poids fort de l’État et des services.'
      ],
      proprietes: [
        'La leçon 6 relie milieu et population : plaines ouvertes, climats doux et réguliers, fleuves navigables, puis un peuplement ancien et dense, urbanisé, aujourd’hui vieillissant et dépendant de l’immigration.',
        'Le repeuplement européen est faible sans apports extérieurs : plusieurs pays ont un solde naturel proche de zéro ou négatif, ce qui pose la question des retraites, de la main-d’œuvre et de l’accueil.',
        'La leçon 7 est une leçon de processus : elle part des Communautés après 1945, suit les élargissements, la chute du mur, l’acte unique, Maastricht, l’euro, et les traités qui ont suivi jusqu’à aujourd’hui.',
        'Les réussites sont réelles : marché sans droits de douane intérieurs, monnaie pour une partie des membres, libre circulation, programmes de recherche et de régions, normes communes, paix durable entre membres.',
        'Les fragilités le sont aussi : politique étrangère et fiscale encore intergouvernementales, écarts de richesse entre Nord et Sud comme entre Ouest et Est, crise grecque, migrations et montée des euroscepticismes,Brexit.',
        'La leçon 8 demande une comparaison alternée France-Allemagne : les deux économies sont voisines et complémentaires, mais diffèrent par la structure industrielle, le système de formation, le poids de l’État et la démographie.',
        'Points communs : membres fondateurs, euro, puissance agricole, place dans le commerce mondial, dépendance énergétique partielle, vieillissement et tension sur les budgets sociaux.',
        'Différences : l’Allemagne exporte davantage de biens industriels et a un réseau de villes moyennes performant, la France a une base plus tertiaire, des grandes firmes concentrées, une démographie relative meilleure et un poids agricole et touristique très fort.',
        'Perspectives à discuter : politique industrielle et numérique commune, armée et diplomatie, frontière orientale, relations avec l’Afrique et avec le Sénégal — l’Europe reste le premier partenaire commercial et touristique.'
      ],
      formules: [
        'Leçon 6 — Milieux naturels et populations (1 h)',
        'Leçon 7 — La construction européenne : réalités et perspectives (2 h)',
        'Leçon 8 — Étude économique alternée entre la France et l’Allemagne (3 h)',
        'Le verbe « alterner » est une consigne de méthode : composer des paragraphes comparatifs, pas deux monographies',
        'Repères à connaître : date des traités, nombre d’États membres, zone euro, dorsale européenne, PAC et politique régionale'
      ],
      conditions: [
        'Ne dites pas « l’Europe » sans dire laquelle : géographique, Union à vingt-sept, ou zone euro.',
        'Une comparaison alternée n’est réussie que si chaque paragraphe contient les deux pays : préparez un tableau à double entrée.',
        'La réussite économique n’implique pas le consensus politique : le programme attend les perspectives, donc les débats et les doutes.',
        'Les chiffres de la PAC, du commerce ou de la démographie sont instables : indiquez l’année, et évitez « l’Europe est riche » sans nuance régionale.'
      ],
      exemple: {
        enonce: 'Rédiger un paragraphe alterné France-Allemagne sur la base industrielle (leçon 8).',
        etapes: [
          'Annonce de la comparaison : les deux pays exportent de l’industrie, mais pas la même, ni avec les mêmes acteurs.',
          'France : concentration sur de très grands groupes, aéronautique, nucléaire, agroalimentaire, luxe et défense ; poids de la commande publique et des politiques industrielles d’État.',
          'Allemagne : tissu de Mittelstand, machines-outils, automobile et chimie, formation professionnelle dualisée, exportation de biens d’équipement.',
          'Point commun : les deux dépendent de l’énergie importée et subissent la concurrence asiatique et les normes européennes.',
          'Conséquence géographique : l’Allemagne a une base industrielle répartie entre régions moyennes, la France concentre une part de l’industrie dans quelques bassins et l’Île-de-France.',
          'Discussion : la convergence franco-allemande sur l’énergie, le numérique et la défense est-elle une réalité ou une intention ?'
        ],
        conclusion: 'Un paragraphe alterné se reconnaît à ce que chaque phrase compare ; sinon, la leçon 8 n’est pas faite.'
      },
      exercices: [
        {
          enonce: 'Donnez trois effets géographiques de la libre circulation à l’intérieur de l’Union.',
          corrige: 'Des migrations de travail internes qui vident certaines régions de l’Est et remplissent les villes de l’Ouest ; un aménagement de corridors et de réseaux transeuropéens de transport ; la périurbanisation et l’achat de résidences secondaires dans les campagnes périphériques et sur les littoraux du Sud ; et une pression sur le logement dans les métropoles attractives.'
        },
        {
          enonce: 'Quels deux problèmes communs à la France et à l’Allemagne attendent une réponse européenne plutôt que nationale ?',
          corrige: 'La transition énergétique et le prix de l’électricité, parce que les réseaux et les marchés sont interconnectés ; et la compétitivité numérique et industrielle face aux puissances américaine et chinoise, qui suppose des normes, des financements et une commande publique communs.'
        }
      ]
    },
    {
      id: 'asie-pacifique-tle',
      titre: 'L’Asie-Pacifique : émergence, Japon et Chine',
      matiere: 'Histoire-Géo',
      branche: 'Géographie',
      niveau: 'Terminale',
      chapitre: 'Géographie Terminale — troisième partie',
      type: 'Fiche de cours',
      difficulte: 'Difficile',
      verif: VERIF_A_VERIFIER,
      source: 'Géographie, classe de Terminale (2004), troisième partie « L’Asie-Pacifique » : leçon 9 « Les facteurs d’émergence et leurs limites » (2 h), leçon 10 « Le modèle économique japonais : caractéristiques et problèmes » (3 h), leçon 11 « La Chine : les problèmes démographiques » (2 h), leçon 12 « La Chine : le modèle de développement économique et social » (2 h).',
      libelles: {
        definitions: 'Vocabulaire',
        proprietes: 'Faits et analyses',
        formules: 'Leçons du programme (ordre officiel)',
        conditions: 'Vigilance sur les mots et les chiffres',
        exemple: 'Étude guidée',
        exercices: 'Questions d’entraînement'
      },
      objectif: 'Expliquer l’émergence de l’Asie-Pacifique, ses facteurs et ses limites, puis analyser les modèles japonais et chinois.',
      definitions: [
        'Une puissance émergente est un État dont le poids économique et politique augmente rapidement sans avoir atteint celui des puissances établies.',
        'L’industrialisation par exportation consiste à produire pour le marché mondial en s’appuyant sur un avantage de coût et sur la demande extérieure.',
        'Les « Tigres » désignent Singapour, la Corée du Sud, Taïwan et Hong Kong ; l’ASEAN regroupe les États d’Asie du Sud-Est.',
        'Le keiretsu est un groupe japonais d’entreprises liées par des participations croisées autour d’une banque et d’une maison de commerce (sogo shosha).',
        'Le « just-in-time » et la qualité totale sont des méthodes d’organisation du travail et de production qui ont fait la force de l’industrie japonaise.',
        'Le hukou est le registre d’état civil chinois qui attachait l’accès aux services publics au lieu d’origine, ce qui distingue travailleurs migrants et citadins.',
        'Une ZES est une zone économique spéciale chinoise, créée à partir de 1980, ouverte aux capitaux étrangers avec des règles fiscales attractives.',
        'Le vieillissement et la sex-ratio déséquilibrée sont les deux héritages démographiques de la politique de limitation des naissances en Chine.'
      ],
      proprietes: [
        'La leçon 9 cherche les facteurs de l’émergence : États développistes qui planifient et protègent, épargne et travail, education et formation technique, accueil des investissements étrangers, exportations, puis montée en gamme technologique.',
        'Les facteurs sont aussi géographiques : littoraux, ports, proximité du Japon puis des marchés américains, et insertion dans les chaînes d’assemblage régionales.',
        'Les limites sont celles que le programme exige de discuter : revenus par habitant encore modestes, dépendance à la demande et à la technologie extérieures, déséquilibres régionaux, tension sur l’énergie et les matières premières, pollution, vieillissement rapide et contestations politiques.',
        'La leçon 10 décrit le modèle japonais : reconstruction après 1945, croissance tirée par l’investissement et l’exportation, qualité, organisation du travail, coopération banque-industrie, puis bulle immobilière et financière éclatée au début des années 1990.',
        'Le Japon cumule aujourd’hui des problèmes structurants : dette publique très élevée, démographie vieillissante et population qui diminue, croissance faible, marché intérieur qui se contracte, et concurrence de la Corée du Sud et de la Chine.',
        'Malgré cela, le Japon reste une puissance : avance technologique et de recherche, poids financier à l’étranger, industrie automobile et électronique, aide publique au développement et influence culturelle.',
        'La leçon 11 pose la question démographique chinoise : le pays le plus peuplé du monde, ou dépassé par l’Inde selon les estimations, avec une politique de limitation des naissances abandonnée, un vieillissement rapide, une sex-ratio déséquilibrée et une main-d’œuvre qui se raréfie.',
        'La leçon 12 analyse le modèle chinois : ouverture progressive depuis 1978, industrialisation par exportation sur les côtes, urbanisation massive, infrastructures, éducation et recherche, puis montée en gamme, demande intérieure, « Nouvelle route de la soie » et tensions commerciales.',
        'Les déséquilibres sont géographiques et sociaux : littoral riche contre intérieur, villes contre campagnes, inégalités de revenu et de hukou, endettement local, immobilier, pollution, vieillissement avant enrichissement complet.'
      ],
      formules: [
        'Leçon 9 — Les facteurs d’émergence et leurs limites (2 h)',
        'Leçon 10 — Le modèle économique japonais : caractéristiques et problèmes (3 h)',
        'Leçon 11 — La Chine : les problèmes démographiques (2 h)',
        'Leçon 12 — La Chine : le modèle de développement économique et social (2 h)',
        'Ordre de la partie : d’abord la région, ensuite le modèle avancé, enfin le géant démographique puis son modèle',
        'La leçon 10 est la plus lourde en heures de la partie : le Japon est traité comme un modèle, la Chine comme un couple de leçons'
      ],
      conditions: [
        '« Émergence » n’est pas un classement : précisez l’indicateur (PIB total, PIB par habitant, commerce, armée, recherche).',
        'Ne décrivez pas la Chine et le Japon comme des modèles opposés : les deux combinent État, exportation et montée en gamme, à des dates différentes.',
        'Les chiffres chinois et japonais sont sensibles aux méthodes : PIB en parité de pouvoir d’achat ou en dollars courants, population selon l’année et la source.',
        'Le vocabulaire de la géographie est obligatoire : nommez les littoraux, les villes, les façades et les flux, sinon la leçon devient une fiche d’économie.'
      ],
      exemple: {
        enonce: 'Étudier la dimension géographique de l’émergence du Viêt Nam (leçon 9 appliquée).',
        etapes: [
          'Facteur de situation : un long littoral sur la mer de Chine méridionale, des golfs profonds proches de la Chine et des routes maritimes mondiales.',
          'Facteur de politique : ouverture progressive, accueil des investissements étrangers, zones industrielles exportatrices dans le nord autour de Hanoï et dans le sud autour d’Hô Chi Minh-Ville.',
          'Facteur humain : population jeune, scolarisation et formation technique, salaires compétitifs qui déplacent des ateliers depuis la Chine.',
          'Limites : dépendance aux donneurs d’ordre étrangers et aux composants importés, productivité agricole fragile, inégalités entre villes et montagnes, tension foncière, pollution des fleuves.',
          'Limites stratégiques : contentieux maritimes, dépendance d’un voisin géant, normes sociales et environnementales exigées par les clients.',
          'Bilan : le pays illustre la leçon 9 — l’émergence est possible par le littoral, l’État et l’exportation, mais elle reste incomplète et vulnérable.'
        ],
        conclusion: 'La grille « facteurs / limites » de la leçon 9 s’applique à n’importe quel État asiatique ; c’est elle qui est évaluée, pas la connaissance d’un pays précis.'
      },
      exercices: [
        {
          enonce: 'Classez ces éléments en facteur ou limite de l’émergence : épargne élevée, dépendance aux exportations,Ports performants, vieillissement, investissement étranger, pollution industrielle.',
          corrige: 'Facteurs : épargne élevée, ports performants, investissement étranger (et aussi éducation, État développiste). Limites : dépendance aux exportations, vieillissement, pollution industrielle (et aussi déséquilibres régionaux, dépendance technologique, tension sur l’énergie).'
        },
        {
          enonce: 'Donnez trois problèmes du Japon actuel et indiquez pour chacun la manifestation géographique.',
          corrige: 'Vieillissement et baisse de la population : villages qui se vident, maisons abandonnées, coûts de santé et de retraite, villes qui se contractent hors de Tokyo. Croissance faible et dette élevée : impôts et budgets sous tension, politique monétaire exceptionnelle, investissement public limité dans les régions. Concurrence coréenne et chinoise : fermetures ou délocalisations d’ateliers électroniques et automobiles, recentrage sur les équipements de pointe et la recherche.'
        },
        {
          enonce: 'Expliquez pourquoi le hukou est un fait de géographie sociale.',
          corrige: 'Parce qu’il attache les droits à un lieu d’origine : des dizaines de millions de travailleurs vivent et produisent en ville sans accès équivalent à l’école, aux soins et au logement de leurs enfants. Cela crée une urbanisation incomplète, des quartiers de migrants, et une séparation spatiale entre citadins enregistrés et travailleurs migrants.'
        }
      ]
    },
    {
      id: 'amerique-latine-bresil-tle',
      titre: 'L’Amérique latine et le Brésil : milieux, populations et puissance du tiers monde',
      matiere: 'Histoire-Géo',
      branche: 'Géographie',
      niveau: 'Terminale',
      chapitre: 'Géographie Terminale — quatrième partie',
      type: 'Fiche de cours',
      difficulte: 'Moyen',
      verif: VERIF_A_VERIFIER,
      source: 'Géographie, classe de Terminale (2004), quatrième partie « L’Amérique latine » : leçon 13 « Milieux naturels et populations » (1 h) et leçon 14 « Le Brésil : une puissance du tiers monde » (2 h).',
      libelles: {
        definitions: 'Vocabulaire',
        proprietes: 'Faits et analyses',
        formules: 'Leçons du programme (ordre officiel)',
        conditions: 'Vigilance sur les mots et les chiffres',
        exemple: 'Étude guidée',
        exercices: 'Questions d’entraînement'
      },
      objectif: 'Décrire l’Amérique latine comme un espace de contrastes et analyser le Brésil comme puissance émergente aux fragilités persistantes.',
      definitions: [
        'L’Amérique latine désigne les pays d’Amérique hispanophones et lusophones, héritiers des colonies espagnole et portugaise.',
        'Le latifundium (grand domaine) s’oppose au minifundium (petite parcelle) et explique une partie des conflits agraires.',
        'L’agrobusiness brésilien associe grande propriété, science agronomique, mécanisation et exportation de soja, canne, viande et coton.',
        'L’« Amazonie » désigne le plus grand bassin fluvial et la plus vaste forêt tropicale humide du monde, partagée entre plusieurs États.',
        'Une favela est un quartier d’habitat irrégulier ou précaire, souvent sur une pente ou une frange urbaine.',
        'Le Mercosur est le marché commun du Sud (Brésil, Argentine, Uruguay, Paraguay, Bolivie) ; l’Alliance du Pacifique rassemble le Chili, la Colombie, le Pérou et le Mexique.',
        'Une puissance du tiers monde est un État du Sud qui acquiert un poids économique, démographique, agricole, énergétique ou diplomatique planétaire sans avoir un revenu par habitant de pays riche.'
      ],
      proprietes: [
        'La leçon 13 combine deux inventaires rapides : les milieux — Andes, pampas, Amazonie, désert de la côte ouest, bassin du Plateau des Guyanes, littoraux longuement découpés — et les populations, concentrées sur les côtes, les hauts plateaux andins et quelques bassins.',
        'Les populations latinas sont urbanisées à plus de quatre-vingts pour cent, avec de très grandes villes pauvres, des héritages autochtones et africains et une inégalité de foncier historique.',
        'La leçon 14 traite le Brésil : dimension continentale, cinquième ou sixième population mondiale, huit millions et demi de kilomètres carrés, un territoire presque entier sous les tropiques.',
        'Milieux et ressources : l’Amazonie pour la forêt, l’eau et la biodiversité, le Cerrado pour le soja et l’élevage, le Nordeste sec pour ses contraintes, le Sud tempéré pour les coopératives.',
        'Puissance agricole et minière : exportations de soja, canne à sucre et éthanol, café, viande bovine et volaille, minerai de fer, pétrole offshore en eaux profondes, et électricité largement hydraulique et biomasse.',
        'Puissance industrielle et technologique : bases automobiles, aéronautique régionale, agro-industrie, recherche agricole tropicale qui a rendu le Cerrado cultivable.',
        'Puissance diplomatique : poids dans les organisations du Sud, négociations climatiques, voisinage hégémonique au Mercosur et présence en Afrique lusophone — dont les liens avec le Sénégal par l’océan Atlantique.',
        'Les limites du statut de puissance : inégalités de revenu et de terre parmi les plus fortes, favelas et violences urbaines, dépendance aux cours des matières premières, déforestation et sécheresse, infrastructures de transport insuffisantes, crises politiques et endettement.',
        'L’organisation de l’espace explique une partie des problèmes : la concentration littorale historique, la capitale transférée à Brasília en 1960 pour pousser vers l’intérieur, et les fronts de pionniers qui avancent sur la forêt.'
      ],
      formules: [
        'Leçon 13 — Milieux naturels et populations (1 h)',
        'Leçon 14 — Le Brésil : une puissance du tiers monde (2 h)',
        'Le titre est une thèse à discuter : « puissance » d’un côté, « du tiers monde » de l’autre, donc richesses et inégalités',
        'Plan attendu : atouts et bases de la puissance, puis fragilités et limites, puis perspectives'
      ],
      conditions: [
        'La formule « puissance du tiers monde » est une consigne : chaque atout doit être contre-balancé par une limite.',
        'Ne confondez pas l’Amazonie (bassin et forêt) et la région administrative brésilienne du même nom.',
        'Les données de déforestation, de production et de population changent selon l’année et le gouvernement : citez la source.',
        'Le vocabulaire de la leçon 13 (milieux et populations) doit revenir dans la leçon 14 : le Cerrado cultivé, le Nordeste sec et le littoral peuplé sont des faits de géographie physique autant qu’économique.'
      ],
      exemple: {
        enonce: 'Discuter : « Le Brésil est une puissance agricole qui n’a pas résolu ses inégalités. »',
        etapes: [
          'Atouts physiques : climats chauds et pluvieux, superficies immenses, eau abondante, sols de Cerrado corrigés par la recherche.',
          'Atouts économiques et techniques : agro-industrie, science agronomique publique, ports et logistique de soja, firmes exportatrices, énergie hydraulique et éthanol.',
          'Poids mondial : premier ou deuxième exportateur de plusieurs produits, influence sur les prix agricoles, acteur des négociations climatiques.',
          'Limites sociales : concentration de la propriété foncière, conflits agraires et sans-terre, favelas, emploi informel, violence urbaine, inégalités régionales entre Sud-Sud-Est développés et Nord-Est pauvre.',
          'Limites écologiques et politiques : déforestation et feux, sécheresses, pression sur les terres autochtones, dépendance aux prix mondiaux, instabilité budgétaire et alternatives politiques.',
          'Conclusion nuancée : le Brésil pèse sur le marché mondial et sur la géopolitique du climat, mais son statut de puissance reste inachevé parce qu’il n’intègre pas sa population et ne maîtrise pas sa dynamique territoriale.'
        ],
        conclusion: 'C’est exactement le mouvement de la leçon 14 : établir la puissance, puis en montrer les limites, sans supprimer le mot « tiers monde » du titre.'
      },
      exercices: [
        {
          enonce: 'Reliez chaque espace brésilien à sa spécialisation : Cerrado, littoral du Sud-Est, Amazonie, Nordeste.',
          corrige: 'Cerrado : soja, coton et élevage mécanisés sur grandes exploitations. Littoral du Sud-Est : métropole de São Paulo, industrie, port et services. Amazonie : forêt, extraction, hydrocarbures, front pionnier et réserve de biodiversité. Nordeste : canne, élevage extensif, pêche, contraintes de sécheresse et émigration.'
        },
        {
          enonce: 'Donnez deux raisons pour lesquelles le transfert de la capitale à Brasília n’a pas résolu la concentration littorale.',
          corrige: 'Les emplois, les ports et les industries sont restés autour de São Paulo et Rio, donc les flux continuaient de passer par le littoral ; Brasília a créé une ville administrative isolée, entourée d’une région agricole, sans devenir le centre logistique du pays, et l’intérieur a été ouvert par la route et le soja plutôt que par la capitale.'
        }
      ]
    },
    {
      id: 'senegal-monographie-tle',
      titre: 'Étude monographique du Sénégal : milieux, eau et problèmes économiques',
      matiere: 'Histoire-Géo',
      branche: 'Géographie',
      niveau: 'Terminale',
      chapitre: 'Géographie Terminale — cinquième partie',
      type: 'Fiche de cours',
      difficulte: 'Difficile',
      verif: VERIF_A_VERIFIER,
      source: 'Géographie, classe de Terminale (2004), cinquième partie, après leçon 15 sur le continent africain : leçon 16 « Le Sénégal : milieux naturels et populations » (2 h), leçon 17 « Le Sénégal : la question de l’eau » (2 h), leçon 18 « Le Sénégal : les problèmes économiques et les politiques de développement » (3 h).',
      libelles: {
        definitions: 'Vocabulaire',
        proprietes: 'Faits et analyses',
        formules: 'Leçons du programme (ordre officiel)',
        conditions: 'Vigilance sur les mots et les chiffres',
        exemple: 'Étude guidée',
        exercices: 'Questions d’entraînement'
      },
      objectif: 'Mener une monographie complète du Sénégal en Terminale : milieux et populations, eau, économie et politiques de développement.',
      definitions: [
        'Une monographie est l’étude approfondie d’un seul espace : on y relie tous les facteurs physiques, humains et économiques.',
        'La pluviométrie sahélienne est faible et irrégulière ; elle diminue du sud au nord et connaît une reprise partielle depuis les années 1990 sans retrouver les normales anciennes.',
        'Un aquifère est une couche de roche qui contient de l’eau souterraine ; une nappe phréatique est le plus souvent proche de la surface.',
        'L’intrusion saline est l’avancée de l’eau de mer dans les nappes côtières quand on pompe trop.',
        'Un bassin versant est l’espace dont toutes les eaux convergent vers un même cours d’eau.',
        'La sécurisation foncière garantit juridiquement le droit d’occuper ou de cultiver une terre.',
        'Un plan de développement national est la stratégie d’investissement et de réformes de l’État, avec ses programmes, ses financements et ses partenaires.'
      ],
      proprietes: [
        'La leçon 16 reprend en Terminale ce que la 5ᵉ a découvert : elle ne décrit plus seulement le milieu, elle l’explique et relie milieu, population et mise en valeur.',
        'Milieux : plateau sédimentaire peu élevé, plaines et bas plateaux, dunes fixées des Niayes, vallée du fleuve Sénégal, lac de Guiers, Saloum et Casamance, climat sahélien au nord et soudanais au sud, végétation qui suit la pluie.',
        'Populations : croissance rapide et population jeune, plusieurs groupes ethniques et langues nationales, urbanisation forte autour de Dakar, Touba, Thiès et Mbour, densités contrastées entre littoral, bassin arachidier et Ferlo.',
        'La leçon 17 est la plus spécifique du programme sénégalais : l’eau y est traitée comme un problème de développement, non comme un simple élément du milieu physique.',
        'Quatre problèmes d’eau : une ressource pluviométrique rare et irrégulière au Nord ; des eaux de surface inégalement réparties, avec un fleuve partiellement domanial et un débit maîtrisé par les barrages ; des nappes menacées par les pompages urbains et l’intrusion saline ; et une eau de mauvaise qualité ou mal répartie, avec maladies d’origine hydrique, moustiques et pertes de réseau.',
        'Réponses et aménagements : barrages de la vallée du fleuve et de Soussousamba, lac de Guiers comme réservoir d’eau douce pour Dakar, forages et adductions villageoises, dessalement sur le littoral, assainissement et traitement des déchets, entretien des bas-fonds et des mares.',
        'La question est aussi politique : l’eau du fleuve Sénégal engage la Mauritanie, le Mali et les pays amont, donc la gestion des bassins versants est une coopération régionale.',
        'La leçon 18 dresse les problèmes économiques : dépendance alimentaire (riz importé), faiblesse de la transformation locale, emploi informel majoritaire, énergie chère et réseau inégal, dette et besoin de financements, inégalités régionales et pression urbaine.',
        'Politiques de développement attendues : modernisation agricole et maîtrise de l’eau, industrialisation et transformation locale, infrastructures de transport et d’énergie, tourisme et services, formation et emploi des jeunes, décentralisation, exploitation des hydrocarbures et politique de revenus, et plans nationaux successifs avec les partenaires.'
      ],
      formules: [
        'Leçon 16 — Le Sénégal : milieux naturels et populations (2 h)',
        'Leçon 17 — Le Sénégal : la question de l’eau (2 h)',
        'Leçon 18 — Le Sénégal : les problèmes économiques et les politiques de développement (3 h)',
        'Ces trois leçons ferment l’année de Terminale : le baccalauréat attend une monographie, donc des liaisons entre les trois',
        'La leçon 18 a le plus d’heures : c’est la leçon de synthèse du pays'
      ],
      conditions: [
        'Une monographie ne juxtapose pas trois fiches : la leçon 17 doit utiliser la leçon 16, et la leçon 18 doit utiliser les deux.',
        'Tous les chiffres (pluie, population, surface irriguée, production, dette) exigent une année et une source ; préférez « environ » à un chiffre faux.',
        'Ne présentez pas l’eau comme seulement une pénurie naturelle : les pompages, les réseaux, les barrages et les accords internationaux font partie du problème.',
        'Parler de politiques de développement demande de nommer les instruments et les limites : financements, délais, entretien, acceptation locale.'
      ],
      exemple: {
        enonce: 'Sujet de synthèse : « montrez que la question de l’eau commande le développement économique du Sénégal » (leçons 16, 17 et 18).',
        etapes: [
          'Introduction : rappeler le gradient de pluie (leçon 16), définir la monographie et annoncer la thèse à discuter.',
          'Partie 1 — l’eau conditionne l’agriculture : pluie unique de l’hivernage, rendements dépendants de la date des pluies, irrigation de vallée et de bas-fond, maraîchage des Niayes sur nappe.',
          'Partie 2 — l’eau conditionne l’industrie, l’énergie et les villes : besoins des sites industriels et touristiques, eau de Dakar, tension sur les nappes et intrusion saline, hydroélectricité et eau des barrages.',
          'Partie 3 — l’eau conditionne la santé, l’habitat et les migrations : maladies d’origine hydrique, inondations urbaines, exode rural quand la pluie ou le niveau du fleuve baisse, pression sur les villes.',
          'Partie 4 — les réponses et leurs limites : barrages, adductions, forages, dessalement, assainissement, prix et entretien de la dette, et gestion transfrontalière du bassin du fleuve Sénégal et du lac de Guiers.',
          'Conclusion : la ressource n’est pas seulement naturelle ; le développement dépend de la capacité à financer, entretenir et partager l’eau, ce qui renvoie à la leçon 18.'
        ],
        conclusion: 'Une monographie réussie relie trois leçons par un fil unique et aboutit aux politiques, pas aux constats.'
      },
      exercices: [
        {
          enonce: 'Donnez quatre usages concurrents de l’eau au Sénégal et une zone où la concurrence est vive.',
          corrige: 'Boisson et usage domestique, irrigation et riziculture, maraîchage et horticulture, industrie et tourisme, élevage, et maintien des écosystèmes (mangrove, lac, delta). Concurrence vive dans la vallée du fleuve Sénégal entre irrigation, besoins des villes et écoulement naturel vers l’embouchure, et dans la presqu’île de Cap Skirring comme autour de Dakar entre tourisme et agriculture.'
        },
        {
          enonce: 'Citez trois contraintes qui expliquent le faible niveau de transformation industrielle locale.',
          corrige: 'Marché intérieur étroit et pouvoir d’achat limité ; énergie et logistique coûteuses, avec ports et routes saturés autour de Dakar ; dépendance aux composants et aux machines importés, donc peu de valeur ajoutée locale ; et concurrence de produits importés à bas prix, parfois facilitée par les normes et le change.'
        },
        {
          enonce: 'Pourquoi la leçon 15 sur l’Afrique précède-t-elle immédiatement la monographie du Sénégal ?',
          corrige: 'Pour situer le pays dans son continent : l’intégration régionale, les organisations, les flux et les problèmes de développement africains sont le cadre dans lequel s’expliquent les choix sénégalais. Le baccalauréat attend que la monographie utilise ce cadre au lieu de l’ignorer.'
        }
      ]
    }
  ];

  /* Vue : liste filtrable puis fiche ouverte (section 4.2) ------------ */

  const view = { selected: null, cycle: 'Tous', matiere: 'Toutes', niveau: 'Tous', q: '' };

  /* Le champ de recherche est recréé à chaque dessin : on remet le curseur dedans après une frappe. */
  let relancerRecherche = false;

  const ORDRE_NIVEAUX = ['6ᵉ', '5ᵉ', '4ᵉ', '3ᵉ', 'Seconde', 'Première', 'Terminale'];
  const CYCLE_DE = { '6ᵉ': 'Collège', '5ᵉ': 'Collège', '4ᵉ': 'Collège', '3ᵉ': 'Collège', Seconde: 'Lycée', Première: 'Lycée', Terminale: 'Lycée' };

  /* Le cycle se déduit de la classe : pas besoin de le saisir fiche par fiche. */
  function cycleDe(fiche) {
    return CYCLE_DE[fiche.niveau] || 'Lycée';
  }

  const LIBELLES = {
    objectif: 'Objectif d’apprentissage',
    definitions: 'Définitions',
    proprietes: 'Propriétés',
    formules: 'Formules',
    conditions: 'Conditions d’application',
    exemple: 'Exemple détaillé',
    exercices: 'Exercices d’entraînement'
  };

  function libelle(fiche, cle) {
    return (fiche.libelles && fiche.libelles[cle]) || LIBELLES[cle];
  }

  const RUBRIQUES = ['objectif', 'definitions', 'proprietes', 'formules', 'conditions', 'exemple', 'exercices'];

  function unique(cle, base) {
    const valeurs = [...new Set((base || JK.FICHES).map((f) => f[cle]))];
    if (cle === 'niveau') return valeurs.sort((a, b) => ORDRE_NIVEAUX.indexOf(a) - ORDRE_NIVEAUX.indexOf(b));
    return valeurs.sort((a, b) => a.localeCompare(b, 'fr'));
  }

  function isStudied(id) {
    return JK.read(KEYS.studied, []).includes(id);
  }

  function setStudied(id, value) {
    const set = new Set(JK.read(KEYS.studied, []));
    if (value) set.add(id);
    else set.delete(id);
    JK.write(KEYS.studied, [...set]);
    JK.refresh();
  }

  function badge(text, cls) {
    return h('span', { class: 'badge ' + (cls || ''), text });
  }

  function chip(label, pressed, onClick) {
    return h('button', {
      class: 'chip', type: 'button', 'aria-pressed': String(pressed), text: label,
      onclick: () => { onClick(); JK.refresh(); }
    });
  }

  function sansAccents(s) {
    return String(s).toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  }

  /* Un mot suffit : on cherche aussi dans le texte des rubriques, pas seulement dans le titre. */
  function correspond(fiche) {
    const q = sansAccents(view.q.trim());
    if (!q) return true;
    const texte = [fiche.titre, fiche.objectif, fiche.chapitre, fiche.matiere, fiche.niveau, fiche.branche || '', fiche.source || '']
      .concat(fiche.definitions || [], fiche.proprietes || [], fiche.formules || [], fiche.conditions || [])
      .join(' ');
    return sansAccents(texte).includes(q);
  }

  function filtered(base) {
    return (base || JK.FICHES).filter((f) =>
      (view.cycle === 'Tous' || cycleDe(f) === view.cycle) &&
      (view.matiere === 'Toutes' || f.matiere === view.matiere) &&
      (view.niveau === 'Tous' || f.niveau === view.niveau) &&
      correspond(f));
  }

  /* --- Mémorisation active : les cartes se construisent à partir des rubriques existantes --- */

  function cartes(fiche) {
    const liste = [];
    ['definitions', 'proprietes', 'formules', 'conditions'].forEach((cle) => {
      (fiche[cle] || []).forEach((t, i) => liste.push({
        key: fiche.id + '|' + cle + '|' + i,
        rubrique: libelle(fiche, cle),
        numero: i + 1,
        texte: t
      }));
    });
    return liste;
  }

  function memorisation(fiche) {
    const notes = JK.read(KEYS.recall, {});
    const liste = cartes(fiche);
    const su = liste.filter((c) => notes[c.key] === 1).length;
    const aRevoir = liste.filter((c) => notes[c.key] === 0).length;
    return { total: liste.length, su, aRevoir, pct: liste.length ? Math.round((su / liste.length) * 100) : 0 };
  }

  JK.cartes = cartes;
  JK.memorisation = memorisation;

  /* Une puce « matière » ne propose que les matières du cycle choisi, idem pour les classes. */
  function puces() {
    const duCycle = JK.FICHES.filter((f) => view.cycle === 'Tous' || cycleDe(f) === view.cycle);
    const deLaMatiere = duCycle.filter((f) => view.matiere === 'Toutes' || f.matiere === view.matiere);
    return {
      cycle: [...new Set(JK.FICHES.map(cycleDe))].sort((a, b) => a.localeCompare(b, 'fr')),
      matiere: unique('matiere', duCycle),
      niveau: unique('niveau', deLaMatiere)
    };
  }

  function open(id) {
    view.selected = id;
    JK.refresh();
  }

  function resetFiltres() {
    view.cycle = 'Tous';
    view.matiere = 'Toutes';
    view.niveau = 'Tous';
    view.q = '';
  }

  JK.openFiche = (id) => {
    if (!JK.hebergeIci('fiches')) {
      JK.changerDePage('fiches', 'fiche=' + encodeURIComponent(id));
      return;
    }
    resetFiltres(); open(id); JK.go('fiches');
  };
  JK.fichesDe = (matiere) => {
    if (!JK.hebergeIci('fiches')) {
      JK.changerDePage('fiches', 'matiere=' + encodeURIComponent(matiere));
      return;
    }
    resetFiltres(); view.matiere = matiere; JK.go('fiches');
  };

  /* Un lien profond (cours.html?fiche=…, ?cycle=…, ?matiere=…) place la bibliothèque au bon endroit. */
  JK.applyQuery = function () {
    const fiches = JK.FICHES || [];
    const id = JK.params.get('fiche');
    if (id && fiches.some((f) => f.id === id)) {
      resetFiltres();
      view.selected = id;
      return;
    }
    const cycle = JK.params.get('cycle');
    if (cycle === 'Collège' || cycle === 'Lycée') view.cycle = cycle;
    const matiere = JK.params.get('matiere');
    if (matiere && fiches.some((f) => f.matiere === matiere)) view.matiere = matiere;
  };

  /* Le dessin de la vue recrée le champ : on lui rend le focus et le curseur après une frappe. */
  function reprendreRecherche() {
    if (!relancerRecherche) return;
    relancerRecherche = false;
    const champ = document.getElementById('fiches-q');
    if (!champ) return;
    champ.focus({ preventScroll: true });
    const n = champ.value.length;
    try { champ.setSelectionRange(n, n); } catch (err) { /* type « search » sensible sur la sélection */ }
  }

  function renderList(host) {
    const fiches = filtered();
    const nbEtudiees = fiches.filter((f) => isStudied(f.id)).length;
    const opts = puces();

    host.append(
      h('h1', { text: 'Bibliothèque de fiches' }),
      h('p', { class: 'lede', text: JK.FICHES.length + ' fiches dans la bibliothèque · ' + fiches.length + ' affichée(s) · ' + nbEtudiees + ' étudiée(s).' }),
      h('div', { class: 'card filters' },
        h('div', { class: 'field' },
          h('label', { class: 'stat-label', for: 'fiches-q', text: 'Recherche' }),
          h('div', { class: 'search-row' },
            h('input', {
              class: 'input', id: 'fiches-q', type: 'search', value: view.q,
              placeholder: 'Un mot : pyramide, CEDEAO, dérivée, arachide…',
              oninput: (e) => { view.q = e.target.value; relancerRecherche = true; JK.refresh(); }
            }),
            view.q ? h('button', {
              class: 'btn btn-ghost btn-sm', type: 'button', text: 'Effacer',
              onclick: () => { view.q = ''; relancerRecherche = true; JK.refresh(); }
            }) : null)),
        h('div', { class: 'field' },
          h('span', { class: 'stat-label', text: 'Cycle' }),
          h('div', { class: 'chips', role: 'group', 'aria-label': 'Filtrer par cycle scolaire' },
            chip('Tous', view.cycle === 'Tous', () => { view.cycle = 'Tous'; view.matiere = 'Toutes'; view.niveau = 'Tous'; }),
            opts.cycle.map((c) => chip(c, view.cycle === c, () => {
              view.cycle = c; view.matiere = 'Toutes'; view.niveau = 'Tous';
            })))),
        h('div', { class: 'field' },
          h('span', { class: 'stat-label', text: 'Matière' }),
          h('div', { class: 'chips', role: 'group', 'aria-label': 'Filtrer par matière' },
            chip('Toutes', view.matiere === 'Toutes', () => { view.matiere = 'Toutes'; view.niveau = 'Tous'; }),
            opts.matiere.map((m) => chip(m, view.matiere === m, () => { view.matiere = m; view.niveau = 'Tous'; })))),
        h('div', { class: 'field' },
          h('span', { class: 'stat-label', text: 'Classe' }),
          h('div', { class: 'chips', role: 'group', 'aria-label': 'Filtrer par niveau scolaire' },
            chip('Toutes', view.niveau === 'Tous', () => { view.niveau = 'Tous'; }),
            opts.niveau.map((n) => chip(n, view.niveau === n, () => { view.niveau = n; }))))));

    if (!fiches.length) {
      host.append(
        h('p', { class: 'empty', text: view.q ? 'Aucune fiche ne contient « ' + view.q + ' » avec ces filtres.' : 'Aucune fiche ne correspond à cette combinaison de filtres.' }),
        h('button', { class: 'btn btn-ghost', type: 'button', text: 'Réinitialiser les filtres', onclick: () => { resetFiltres(); JK.refresh(); } }));
      reprendreRecherche();
      return;
    }

    host.append(h('div', { class: 'grid grid-cards' }, fiches.map((f) => {
      const done = isStudied(f.id);
      const m = memorisation(f);
      return h('article', { class: 'card fiche-card' },
        h('div', { class: 'badges' },
          badge(f.matiere), badge(f.niveau, 'badge-out'), badge(f.difficulte, 'badge-out'),
          m.su ? badge('Mémorisé ' + m.su + ' / ' + m.total, m.aRevoir ? 'badge-out' : 'badge-done') : null,
          done && badge('Étudiée', 'badge-done')),
        h('h3', null, h('button', {
          class: 'open', type: 'button', text: f.titre,
          'aria-label': 'Ouvrir la fiche ' + f.titre,
          onclick: () => open(f.id)
        })),
        h('p', { text: f.objectif }),
        h('button', {
          class: 'btn btn-ghost btn-sm toggle', type: 'button',
          text: done ? 'Retirer des étudiées' : 'Marquer étudiée',
          'aria-pressed': String(done),
          onclick: () => setStudied(f.id, !done)
        }));
    })));
    reprendreRecherche();
  }

  /* --- Carte de mémorisation : on cache, on récitez, on s’auto-évalue ------------ */

  function carteMemo(c, maj) {
    const notes = JK.read(KEYS.recall, {});
    const texte = h('p', { class: 'memo-texte', text: c.texte });
    const cache = h('p', { class: 'memo-cache', text: 'Ligne masquée : récitez-la de mémoire, puis affichez-la pour vous corriger.', hidden: true });
    const masquer = h('button', { class: 'btn btn-ghost btn-sm', type: 'button', text: 'Masquer la ligne', 'aria-pressed': 'false' });
    const saisi = h('button', { class: 'btn btn-secondary btn-sm', type: 'button', text: 'Je sais', 'aria-pressed': String(notes[c.key] === 1) });
    const revoir = h('button', { class: 'btn btn-secondary btn-sm', type: 'button', text: 'À revoir', 'aria-pressed': String(notes[c.key] === 0) });

    masquer.addEventListener('click', () => {
      const masque = !texte.hidden;
      texte.hidden = masque;
      cache.hidden = !masque;
      masquer.textContent = masque ? 'Afficher la ligne' : 'Masquer la ligne';
      masquer.setAttribute('aria-pressed', String(masque));
    });

    function noter(valeur) {
      const etat = JK.read(KEYS.recall, {});
      if (etat[c.key] === valeur) delete etat[c.key];
      else etat[c.key] = valeur;
      JK.write(KEYS.recall, etat);
      saisi.setAttribute('aria-pressed', String(etat[c.key] === 1));
      revoir.setAttribute('aria-pressed', String(etat[c.key] === 0));
      saisi.classList.toggle('is-on', etat[c.key] === 1);
      revoir.classList.toggle('is-danger', etat[c.key] === 0);
      maj();
    }

    saisi.addEventListener('click', () => noter(1));
    revoir.addEventListener('click', () => noter(0));

    return h('li', { class: 'memo-item' },
      h('p', { class: 'stat-label', text: c.rubrique + ' · ligne ' + c.numero }),
      texte, cache,
      h('div', { class: 'memo-actions' }, masquer, saisi, revoir));
  }

  function blocMemo(fiche) {
    const liste = cartes(fiche);
    const barre = h('span');
    const compteur = h('p', { class: 'stat-note', text: '' });
    const progress = h('div', {
      class: 'progress', role: 'progressbar', 'aria-valuemin': '0', 'aria-valuemax': '100',
      'aria-label': 'Part des éléments de cette fiche que vous marquez comme sues'
    }, barre);

    function basculer(afficher) {
      carte.querySelectorAll('.memo-item').forEach((item) => {
        const t = item.querySelector('.memo-texte');
        const c = item.querySelector('.memo-cache');
        const b = item.querySelector('.memo-actions button');
        const masque = !afficher;
        t.hidden = masque;
        c.hidden = !masque;
        b.textContent = masque ? 'Afficher la ligne' : 'Masquer la ligne';
        b.setAttribute('aria-pressed', String(masque));
      });
    }

    function maj() {
      const m = memorisation(fiche);
      barre.style.width = m.pct + '%';
      progress.setAttribute('aria-valuenow', String(m.pct));
      compteur.textContent = m.su + ' / ' + m.total + ' élément(s) marqué(s) « je sais »'
        + (m.aRevoir ? ' · ' + m.aRevoir + ' à revoir' : ' · rien à revoir') + '.';
    }

    const carte = h('div', { class: 'card memo', id: 'bloc-memo' },
      h('h2', { text: 'Mode mémorisation' }),
      h('p', { class: 'lede', text: 'Lisez la fiche, puis cachez une ligne et récitez-la. Notez « Je sais » ou « À revoir » : ce sont vos propres jugements, ils restent sur cet appareil.' }),
      progress, compteur,
      h('div', { class: 'back-row' },
        h('button', { class: 'btn btn-secondary btn-sm', type: 'button', text: 'Tout masquer', onclick: () => basculer(false) }),
        h('button', { class: 'btn btn-secondary btn-sm', type: 'button', text: 'Tout afficher', onclick: () => basculer(true) }),
        h('button', {
          class: 'btn btn-ghost btn-sm', type: 'button', text: 'Oublier mes réponses',
          onclick: () => {
            if (!window.confirm('Oublier mes réponses de mémorisation pour cette fiche ?')) return;
            const etat = JK.read(KEYS.recall, {});
            Object.keys(etat).forEach((k) => { if (k.indexOf(fiche.id + '|') === 0) delete etat[k]; });
            JK.write(KEYS.recall, etat);
            JK.refresh();
          }
        })),
      h('ul', { class: 'memo-liste' }, liste.map((c) => carteMemo(c, maj))));

    maj();
    return carte;
  }

  function block(id, title, ...children) {
    return h('div', { class: 'fiche-block', id: 'bloc-' + id },
      h('h4', { text: title }), ...children);
  }

  function blockList(id, title, items) {
    return block(id, title, h('ul', null, items.map((t) => h('li', { text: t }))));
  }

  function bloc(fiche, cle) {
    const titre = libelle(fiche, cle);
    if (cle === 'objectif') return blockList('objectif', titre, [fiche.objectif]);
    if (cle === 'formules') {
      return block('formules', titre, h('div', { class: 'grid' }, fiche.formules.map((f) => h('p', { class: 'formula', text: f }))));
    }
    if (cle === 'exemple') {
      return block('exemple', titre,
        h('p', { text: fiche.exemple.enonce }),
        h('ol', null, fiche.exemple.etapes.map((t) => h('li', { text: t }))),
        h('p', { class: 'formula', text: fiche.exemple.conclusion }));
    }
    if (cle === 'exercices') {
      return block('exercices', titre,
        h('p', { class: 'stat-note', text: 'Cherchez d’abord, puis dépliez le corrigé.' }),
        h('div', { class: 'grid' }, fiche.exercices.map((ex) => h('div', { class: 'exercice' },
          h('p', { text: ex.enonce }),
          h('details', { class: 'corrige' },
            h('summary', { text: 'Voir le corrigé expliqué' }),
            h('p', { class: 'corrige', text: ex.corrige }))))));
    }
    return blockList(cle, titre, fiche[cle]);
  }

  function renderDetail(host, fiche) {
    const done = isStudied(fiche.id);
    const liste = filtered();
    const index = liste.findIndex((f) => f.id === fiche.id);
    const precedente = index > 0 ? liste[index - 1] : null;
    const suivante = index >= 0 && index < liste.length - 1 ? liste[index + 1] : null;

    const backToList = () => { view.selected = null; JK.refresh(); };

    host.append(
      h('div', { class: 'actionbar' },
        h('button', { class: 'btn btn-secondary btn-sm', type: 'button', text: '← Toutes les fiches', onclick: backToList }),
        h('button', {
          class: 'btn btn-sm', type: 'button', 'aria-pressed': String(done),
          text: done ? 'Fiche étudiée' : 'Marquer comme étudiée',
          onclick: () => setStudied(fiche.id, !done)
        }),
        h('button', {
          class: 'btn btn-ghost btn-sm', type: 'button', text: 'Planifier cette fiche',
          onclick: () => {
            const message = JK.addTask('Revoir la fiche « ' + fiche.titre + ' »', fiche.matiere, '');
            if (message) window.alert(message);
            else JK.go('planning');
          }
        }),
        h('button', {
          class: 'btn btn-ghost btn-sm', type: 'button', text: 'Quiz de la leçon',
          'aria-label': 'Faire le quiz qui ne porte que sur cette leçon',
          onclick: () => JK.changerDePage('quiz', 'fiche=' + encodeURIComponent(fiche.id))
        })),
      h('h1', { text: fiche.titre }),
      h('div', { class: 'badges' },
        badge(fiche.matiere), badge(cycleDe(fiche) + ' · ' + fiche.niveau, 'badge-out'),
        fiche.branche && badge('Branche : ' + fiche.branche, 'badge-out'),
        badge(fiche.chapitre, 'badge-out'), badge(fiche.type, 'badge-out'),
        badge(fiche.difficulte, 'badge-out'),
        done && badge('Étudiée', 'badge-done')),
      h('p', { class: 'alert alert-warn', text: 'Vérification : ' + fiche.verif.statut + ' — dernière relecture ' + fiche.verif.date + '.' }),
      h('p', { class: 'stat-note' },
        h('strong', { text: 'Référence programme : ' }),
        h('span', { text: fiche.source || SANS_PROGRAMME })),
      fiche.source ? h('p', { class: 'stat-note', text: NOTE_PROGRAMME }) : null,
      h('nav', { class: 'sommaire', 'aria-label': 'Rubriques de la fiche' },
        RUBRIQUES.map((id) => h('a', { href: '#bloc-' + id, text: libelle(fiche, id) })),
        h('a', { href: '#bloc-memo', text: 'Mode mémorisation' })),
      h('div', { class: 'card prose' }, RUBRIQUES.map((id) => bloc(fiche, id))),
      blocMemo(fiche));
    host.append(h('div', { class: 'back-row' },
      precedente && h('button', {
        class: 'btn btn-secondary', type: 'button', text: '← ' + precedente.titre,
        onclick: () => open(precedente.id)
      }),
      suivante && h('button', {
        class: 'btn', type: 'button', text: suivante.titre + ' →',
        onclick: () => open(suivante.id)
      }),
      !precedente && !suivante && h('button', { class: 'btn btn-secondary', type: 'button', text: '← Retour aux fiches', onclick: backToList })));
  }

  JK.registerView('fiches', {
    onNavEnter() { view.selected = null; },
    render(host) {
      const fiche = view.selected ? JK.FICHES.find((f) => f.id === view.selected) : null;
      if (fiche) renderDetail(host, fiche);
      else renderList(host);
    }
  });
})();
