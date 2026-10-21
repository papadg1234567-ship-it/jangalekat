/* Quiz des leçons de mathématiques et de physique-chimie couvertes par une fiche de révision.
   Une leçon = un quiz = 3 questions, jamais de mélange entre leçons ni entre niveaux.
   Aucune question ne revendique une référence officielle : ces matières n’ont pas de programme
   officiel joint, elles portent sur les définitions, les formules, les calculs et les conditions
   d’application indiquées par la fiche.
   Contenu auto-rédigé par Jàngalekat, non relu par un enseignant. */
(function () {
  'use strict';

  JK.quizDeLecon("fiche-derivation", [
    {
      "enonce": "On sait que f′(2) = 0. Que peut-on affirmer avec certitude ?",
      "options": [
        "La tangente à la courbe au point d’abscisse 2 est horizontale",
        "f admet un extremum en 2",
        "f est décroissante au voisinage de 2",
        "f est constante au voisinage de 2"
      ],
      "correct": 0,
      "explication": "f′(a) est le coefficient directeur de la tangente : s’il vaut 0, la tangente est horizontale, rien de plus. Pour un extremum il faut en plus que f′ change de signe en a. Sur f(x) = x³, on a f′(x) = 3x² donc f′(0) = 0, et la courbe traverse une tangente horizontale sans aucun extremum en 0 : la réciproque est fausse."
    }
  ]);

  JK.quizDeLecon("fiche-second-degre", [
    {
      "enonce": "Dans ℝ, l’équation 3x² + 2x + 1 = 0 admet :",
      "options": [
        "deux solutions distinctes, car Δ = 16",
        "aucune solution réelle, car Δ = −8 < 0",
        "une solution double x₀ = 1/3",
        "une solution, x = −1"
      ],
      "correct": 1,
      "explication": "Δ = b² − 4ac = 2² − 4 × 3 × 1 = 4 − 12 = −8 : négatif, donc aucune racine réelle. Comme a = 3 > 0 et Δ < 0, le trinôme garde le signe de a et 3x² + 2x + 1 > 0 pour tout réel x. Le piège est d’écrire 4 + 12 = 16 : le terme −4ac est négatif ici, car ac = 3 × 1 est positif. Une racine double n’existe que si Δ = 0, et elle vaudrait −b / (2a) = −1/3, pas 1/3 ; x = −1 ne vérifie pas l’équation, car 3 − 2 + 1 = 2."
    }
  ]);

  JK.quizDeLecon("fiche-suites", [
    {
      "enonce": "Une suite géométrique vérifie v(1) = 2 et q = 3. Que vaut v(5) ?",
      "options": [
        "54",
        "162",
        "243",
        "486"
      ],
      "correct": 1,
      "explication": "On part de l’indice 1, donc v(n) = v(1) × q^(n−1) : il faut 5 − 1 = 4 multiplications pour passer de v(1) à v(5). v(5) = 2 × 3⁴ = 2 × 81 = 162. 486 = 2 × 3⁵ est l’erreur classique qui compte n pas au lieu de n − 1 ; 54 correspond à 2 × 3³ ; 243 = 3⁵ oublie le premier terme."
    }
  ]);

  JK.quizDeLecon("fiche-trigonometrie", [
    {
      "enonce": "Dans [0 ; 2π], quelles sont les solutions de sin x = 1/2 ?",
      "options": [
        "π/6 seulement",
        "π/6 et 7π/6",
        "π/6 et 5π/6",
        "π/3 et 2π/3"
      ],
      "correct": 2,
      "explication": "1/2 appartient à [−1 ; 1], l’équation admet donc des solutions. Une solution particulière est π/6 ; la deuxième sur [0 ; 2π] est son symétrique par rapport à l’axe des ordonnées, π − π/6 = 5π/6. 7π/6 a un sinus négatif, égal à −1/2 ; π/3 et 2π/3 correspondent à √3/2 ; une seule valeur oublie la seconde solution. Dans ℝ on ajoute 2kπ aux deux familles."
    }
  ]);

  JK.quizDeLecon("fiche-denombrement-proba", [
    {
      "enonce": "A et B sont deux événements de probabilité non nulle. Ils sont indépendants quand :",
      "options": [
        "P(A ∩ B) = P(A) × P(B)",
        "A et B ne peuvent pas se réaliser en même temps",
        "P(A ∪ B) = P(A) + P(B)",
        "P(A|B) = 0"
      ],
      "correct": 0,
      "explication": "L’indépendance se traduit par P(A ∩ B) = P(A) × P(B). Les deuxième et troisième propositions décrivent l’incompatibilité : si A et B sont incompatibles alors P(A ∩ B) = 0, alors que P(A) × P(B) > 0 puisque les deux probabilités sont non nulles. Les deux situations s’excluent donc : c’est la confusion la plus fréquente. La dernière option serait le cas d’un événement de probabilité nulle."
    }
  ]);

  JK.quizDeLecon("fiche-noyaux", [
    {
      "enonce": "Compléter l’équation ²³⁴₉₀Th → ²³⁴₉₁Pa + ? et nommer le type de désintégration.",
      "options": [
        "⁰₋₁e : désintégration β⁻, un neutron du noyau devient un proton",
        "⁴₂He : désintégration α, le noyau perd 4 nucléons",
        "⁰₊₁e : désintégration β⁺, un proton devient un neutron",
        "rien : émission γ, seul l’état énergétique du noyau change"
      ],
      "correct": 0,
      "explication": "Les lois de Soddy obligent A et Z à se conserver de chaque côté : 234 = 234 + 0 et 90 = 91 + (−1). La particule manquante est donc un électron ⁰₋₁e, ce qui correspond à une désintégration β⁻ (un antineutrino est émis en même temps). Une α ferait passer A de 234 à 230, une β⁺ donnerait Z = 89, et γ ne change ni A ni Z."
    }
  ]);

  JK.quizDeLecon("fiche-divisibilite", [
    {
      "enonce": "Pour décider si un entier écrit en base 10 est divisible par 4, on regarde :",
      "options": [
        "le chiffre des unités, qui doit être 0, 2, 4, 6 ou 8",
        "le nombre formé par les deux derniers chiffres, qui doit être divisible par 4",
        "la somme des chiffres, qui doit être divisible par 4",
        "le chiffre des unités, qui doit être 0 ou 5"
      ],
      "correct": 1,
      "explication": "100 est divisible par 4 : les centaines, milliers et au-delà ne comptent pas, seules les deux derniers chiffres décident. Exemple du cours : 4 158 se termine par 58 = 4 × 14 + 2, il reste 2, donc 4 158 n’est pas divisible par 4 même s’il est pair. Le premier choix est le critère de 2, le troisième celui de 3 et 9, le dernier celui de 5."
    },
    {
      "enonce": "Quel chiffre faut-il mettre à la place de A pour que 5A3 soit divisible par 9 ?",
      "options": [
        "0",
        "1",
        "3",
        "9"
      ],
      "correct": 1,
      "explication": "Critère de 9 : la somme des chiffres doit être un multiple de 9. Ici 5 + A + 3 = 8 + A. Les quatre candidats donnent 8, 9, 11 et 17 : seul A = 1 convient, et l’on obtient 513 = 9 × 57. Vérification par 3 : 8 + 1 = 9 est bien divisible par 3 aussi. Un nombre divisible par 9 est toujours divisible par 3, mais l’inverse est faux (12 l’est par 3, pas par 9)."
    }
  ]);

  JK.quizDeLecon("fiche-relatifs", [
    {
      "enonce": "Que vaut (−3) × (−4) ÷ 6 ?",
      "options": [
        "−2",
        "2",
        "12",
        "−7"
      ],
      "correct": 1,
      "explication": "Les deux facteurs sont de même signe, donc (−3) × (−4) = 12, puis 12 ÷ 6 = 2. La règle « moins × moins = plus » s’applique ici parce qu’il s’agit d’une multiplication : −2 est le résultat obtenu par un élève qui l’oublie ; 12 est le produit avant la division par 6 ; −7 vient de l’addition (−3) + (−4) au lieu de la multiplication."
    },
    {
      "enonce": "Dans un jeu, une bonne réponse rapporte 5 points et une erreur en retire 3. Un joueur répond juste 7 fois et se trompe 6 fois. Quel est son score ?",
      "options": [
        "53",
        "17",
        "5",
        "−1"
      ],
      "correct": 1,
      "explication": "Score = 7 × 5 + 6 × (−3) = 35 − 18 = 17 points. Compter 53, c’est additionner les 18 points au lieu de les retrancher ; 5, c’est retirer 6 × 5 au lieu de 6 × 3 ; −1, c’est s’arrêter à 6 − 7 sans jamais multiplier par les valeurs du jeu. Ici on additionne des gains et des pertes : la règle « moins × moins = plus » n’intervient pas, 6 × (−3) reste égal à −18."
    }
  ]);

  JK.quizDeLecon("fiche-fractions", [
    {
      "enonce": "Que vaut 2/3 + 5/6 ?",
      "options": [
        "7/6",
        "7/9",
        "3/2",
        "5/9"
      ],
      "correct": 2,
      "explication": "Les dénominateurs diffèrent, il faut les mettre communs : 6 est un multiple de 3, donc 2/3 = (2 × 2)/(3 × 2) = 4/6, puis 4/6 + 5/6 = 9/6 = 3/2 après simplification par 3. 7/6 vient d’un numérateur oublié (2/3 transformé en 2/6) ; 7/9 additionne numérateurs et dénominateurs, ce qui n’existe pas ; 5/9 est le produit des deux fractions."
    },
    {
      "enonce": "Que vaut (3/4) ÷ (2/5) ?",
      "options": [
        "15/8",
        "3/10",
        "8/15",
        "10/3"
      ],
      "correct": 0,
      "explication": "Diviser par une fraction, c’est multiplier par son inverse : (3/4) ÷ (2/5) = (3/4) × (5/2) = 15/8. 3/10 = 6/20 est le résultat de ceux qui multiplient par la fraction donnée sans l’inverser ; 8/15 = 4/3 × 2/5 inverse la mauvaise fraction, on retourne le diviseur jamais le dividende ; 10/3 = 4/3 × 5/2 inverse les deux. Aucune de ces erreurs ne cherche de dénominateur commun : la division et la multiplication n’en exigent pas."
    }
  ]);

  JK.quizDeLecon("fiche-pythagore", [
    {
      "enonce": "Un triangle a pour côtés 5 cm, 7 cm et 9 cm. Est-il rectangle ?",
      "options": [
        "Oui, car 5 + 7 est plus grand que 9",
        "Non : 9² = 81 alors que 5² + 7² = 25 + 49 = 74",
        "Oui, car 5² + 7² = 74 est plus grand que 9",
        "On ne peut pas décider sans connaître la mesure d’un angle"
      ],
      "correct": 1,
      "explication": "La réciproque du théorème décide à partir des trois longueurs seules, sans mesurer d’angle : on compare le carré du plus grand côté à la somme des carrés des deux autres. Ici 9² = 81 et 5² + 7² = 74, l’égalité n’est pas vraie, donc par la contraposée le triangle n’est pas rectangle. « 5 + 7 > 9 » est la condition d’existence d’un triangle, pas celle d’un angle droit ; comparer 74 à 9, c’est oublier de mettre le plus grand côté au carré."
    },
    {
      "enonce": "Une échelle de 5 m est appuyée contre un mur vertical, son pied est à 3 m du mur. À quelle hauteur touche-t-elle le mur ?",
      "options": [
        "4 m",
        "√34 m",
        "8 m",
        "16 m"
      ],
      "correct": 0,
      "explication": "Le sol, le mur et l’échelle forment un triangle rectangle, l’échelle est l’hypoténuse : h² = 5² − 3² = 25 − 9 = 16, donc h = √16 = 4 m. Répondre √34, c’est appliquer 5² + 3² : on n’ajoute les carrés que lorsque l’on cherche l’hypoténuse, jamais un côté de l’angle droit. 16 est le carré, pas la longueur, et 8 vient de 5 + 3. Repère utile : 3-4-5 est le triangle rectangle le plus connu."
    }
  ]);

  JK.quizDeLecon("fiche-ensembles-nombres", [
    {
      "enonce": "Quelle inclusion est correcte ?",
      "options": [
        "ℚ ⊂ ℤ",
        "ℤ ⊂ ℕ",
        "D ⊂ ℚ",
        "ℝ ⊂ ℚ"
      ],
      "correct": 2,
      "explication": "Les ensembles sont imbriqués : ℕ ⊂ ℤ ⊂ D ⊂ ℚ ⊂ ℝ. Tout décimal s’écrit a/10ⁿ, donc en fraction : il est rationnel. La réciproque est fausse, 1/3 est rationnel mais pas décimal. ℤ ⊂ ℕ est faux car ℤ contient les négatifs, ℚ ⊂ ℤ est faux car 3/4 est rationnel et non entier, et ℝ contient les irrationnels comme √2 ou π, donc ℝ ⊂ ℚ est faux."
    },
    {
      "enonce": "Comment note-t-on l’ensemble des réels x tels que 2 ≤ x < 5 ?",
      "options": [
        "]2 ; 5[",
        "[2 ; 5[",
        "[2 ; 5]",
        "]2 ; 5]"
      ],
      "correct": 1,
      "explication": "Le crochet signale une borne incluse : 2 est autorisé car 2 ≤ x, donc crochet en 2 ; 5 est exclu car x < 5, donc parenthèse en 5. Le sens compte : [2 ; 5[ n’est pas [5 ; 2[, et il faut a ≤ b pour que [a ; b] ait un sens, sinon l’intervalle est vide. Du côté de ±∞ on met toujours une parenthèse, jamais un crochet, car ∞ n’est pas un nombre."
    }
  ]);

  JK.quizDeLecon("fiche-etats-matiere", [
    {
      "enonce": "On pèse 150 g de glace, on la fait fondre puis on évapore toute l’eau obtenue. Quelle masse de vapeur récupère-t-on ?",
      "options": [
        "0 g, car un gaz ne pèse rien",
        "75 g, car la chaleur allège la matière",
        "150 g",
        "300 g, car la vapeur occupe plus de place"
      ],
      "correct": 2,
      "explication": "La masse se conserve pendant un changement d’état : 150 g de glace donnent 150 g d’eau liquide, puis 150 g de vapeur. Ce qui change est l’organisation de la matière et le volume occupé, pas la masse. Croire qu’un gaz ne pèse rien est le contre-sens classique : c’est justement parce qu’il est compressible et occupe tout le volume disponible qu’on le croit sans poids."
    },
    {
      "enonce": "Quelle est la différence entre évaporation et ébullition ?",
      "options": [
        "L’évaporation se produit en surface et à toute température ; l’ébullition demande la température d’ébullition et gagne tout le liquide",
        "L’évaporation et l’ébullition sont le même changement d’état, et l’évaporation est la plus rapide",
        "L’ébullition est un changement d’état, l’évaporation non : la matière y disparaît",
        "L’évaporation ne se produit que sur l’eau salée, l’ébullition seulement sur l’eau pure"
      ],
      "correct": 0,
      "explication": "Les deux sont une vaporisation, passage liquide → gaz, et dans les deux cas la masse est conservée. Mais l’évaporation reste en surface et marche à toute température (une flaque sèche), alors que l’ébullition atteint toute la masse du liquide à la température d’ébullition, 100 °C pour l’eau pure à pression normale. C’est l’ébullition qui est rapide ; rien ne disparaît, et l’eau salée s’évapore très bien."
    }
  ]);

  JK.quizDeLecon("fiche-masse-volumique", [
    {
      "enonce": "On coupe un échantillon de fer en deux morceaux identiques. Que devient sa masse volumique ?",
      "options": [
        "Elle est divisée par 2, comme la masse",
        "Elle est multipliée par 2, le volume diminue",
        "Elle ne change pas",
        "Elle dépend de la forme du morceau restant"
      ],
      "correct": 2,
      "explication": "ρ = m / V : quand on divise l’échantillon par deux, la masse et le volume sont divisés par deux, et le rapport reste identique. La masse volumique est une caractéristique du matériau, pas de l’échantillon, ce qui permet de l’utiliser pour identifier une substance (le corrigé du cours reconnaît 2,7 g/cm³ comme celle de l’aluminium). Attention au cas d’un objet creux : on calcule alors une masse volumique moyenne de l’objet complet, qui elle dépend du vide."
    },
    {
      "enonce": "Une piscine contient 40 m³ d’eau, avec ρ(eau) = 1 000 kg/m³. Quelle masse d’eau cela représente-t-il ?",
      "options": [
        "40 kg",
        "40 000 kg",
        "25 kg",
        "400 000 kg"
      ],
      "correct": 1,
      "explication": "m = ρ × V = 1 000 × 40 = 40 000 kg, soit 40 tonnes. Les unités sont cohérentes : des kg/m³ multipliés par des m³ donnent des kg, et l’on retrouve 40 000 L car 1 g/cm³ = 1 kg/L = 1 000 kg/m³. 25 kg vient de ρ ÷ V = 1 000 ÷ 40, l’inverse de la formule ; 40 kg ignore la masse volumique ; 400 000 kg signe une erreur de facteur 10 dans la conversion."
    }
  ]);

  JK.quizDeLecon("fiche-circuits-electriques", [
    {
      "enonce": "Comment branche-t-on un ampèremètre et un voltmètre, et dans quelles unités ?",
      "options": [
        "Ampèremètre en série, voltmètre en dérivation ; l’intensité en ampère (A), la tension en volt (V)",
        "Ampèremètre en dérivation, voltmètre en série ; l’intensité en volt, la tension en ampère",
        "Les deux en série, puisqu’ils mesurent le courant qui les traverse",
        "Les deux en dérivation, en choisissant le plus petit calibre d’abord"
      ],
      "correct": 0,
      "explication": "L’ampèremètre mesure l’intensité qui traverse un dipôle : il se branche sur le fil coupé, en série, et donne des ampères. Le voltmètre mesure une différence de potentiel entre deux bornes : il se branche en dérivation et donne des volts. Inverser les branchements risque d’abîmer l’appareil, et il faut commencer par le plus grand calibre puis resserrer sur un calibre encore supérieur à la valeur attendue."
    },
    {
      "enonce": "Deux lampes L1 et L2 sont en dérivation sur une pile de 6 V. Avant le nœud l’intensité vaut 0,5 A et la branche de L1 reçoit 0,3 A. Que valent U₂ et I₂ ?",
      "options": [
        "U₂ = 6 V et I₂ = 0,2 A",
        "U₂ = 3 V et I₂ = 0,2 A",
        "U₂ = 6 V et I₂ = 0,5 A",
        "U₂ = 3 V et I₂ = 0,3 A"
      ],
      "correct": 0,
      "explication": "En dérivation, chaque branche est soumise à la tension du générateur : U₂ = U₁ = 6 V. Au nœud, l’intensité arrivante se répartit : I₂ = I − I₁ = 0,5 − 0,3 = 0,2 A. Répondre 3 V, c’est partager la tension comme en série (U = U₁ + U₂) ; répondre 0,5 A, c’est oublier la loi des nœuds. Si l’on démonte L1, sa branche est coupée mais L2 reste éclairée, ce qui est impossible en série."
    }
  ]);

  JK.quizDeLecon("fiche-combustion", [
    {
      "enonce": "Un bocal fermé contient 3 g de carbone et 3 g de dioxygène. Tout le carbone peut-il brûler ?",
      "options": [
        "Oui, les deux masses sont égales",
        "Non, le dioxygène est le réactif limitant : il en faudrait 8 g",
        "Non, le carbone est le réactif limitant : il en faudrait plus",
        "Oui, à condition que la combustion soit complète"
      ],
      "correct": 1,
      "explication": "Les proportions de C + O₂ → CO₂ sont 12 g de carbone pour 32 g de dioxygène. Pour 3 g de carbone il faut donc 3 × (32/12) = 8 g de dioxygène, et il n’y en a que 3 g : le dioxygène s’épuise en premier et il reste du carbone non consumé (3 g de O₂ ne brûlent que 3 × (12/32) ≈ 1,1 g de carbone). Des masses égales ne disent rien : c’est l’équation équilibrée qui fixe les proportions."
    },
    {
      "enonce": "Une bougie brûle à l’air libre et sa masse diminue. La loi de Lavoisier est-elle violée ?",
      "options": [
        "Oui : la matière disparaît dans la flamme",
        "Oui : la loi ne vaut que pour les réactions en solution",
        "Non : les produits gazeux s’échappent, mais dans un récipient fermé la masse totale resterait identique",
        "Non : la masse baisse seulement quand la combustion est incomplète"
      ],
      "correct": 2,
      "explication": "« Rien ne se perd, rien ne se crée, tout se transforme » suppose le système fermé. La bougie consomme du dioxygène et produit du dioxyde de carbone et de la vapeur d’eau qui quittent l’air : la masse apparente baisse parce que des produits s’échappent, pas parce que la matière disparaît. Les atomes se réarrangent, ils ne s’anéantissent pas, et la loi ne se limite pas aux solutions. Une combustion incomplète, elle, produit du monoxyde de carbone CO, toxique."
    }
  ]);

  JK.quizDeLecon("fiche-structure-atome", [
    {
      "enonce": "Les espèces ¹²₆C et ¹⁴₆C sont :",
      "options": [
        "deux isotopes du même élément : même Z = 6, mais 6 et 8 neutrons",
        "deux éléments différents, puisque A diffère de 2",
        "deux ions du carbone, l’un ayant gagné deux électrons",
        "deux noyaux de même nombre de neutrons"
      ],
      "correct": 0,
      "explication": "C’est Z qui identifie l’élément : les deux noyaux ont 6 protons, donc c’est du carbone dans les deux cas. N = A − Z donne 12 − 6 = 6 puis 14 − 6 = 8 : seule la population de neutrons change, ce sont des isotopes. Changer Z changerait l’élément : ¹⁴₆C et ¹⁴₇N ont le même A mais des Z différents, donc deux éléments différents qui ne sont pas des isotopes. La masse A n’est pas un critère de reconnaissance, et un ion se reconnaît à sa charge, pas à son A."
    },
    {
      "enonce": "L’ion chlorure Cl⁻ est formé à partir de l’atome de chlore ³⁵₁₇Cl. Que contient-il ?",
      "options": [
        "17 protons et 16 électrons",
        "17 protons et 18 électrons",
        "18 protons et 17 électrons",
        "17 protons, 19 neutrons et 17 électrons"
      ],
      "correct": 1,
      "explication": "Le signe − indique un excès d’un électron : Cl⁻ garde ses 17 protons (le noyau ne change pas) et compte 17 + 1 = 18 électrons. Un cation comme Na⁺ serait l’inverse, 11 protons et 10 électrons. Ajouter un proton changerait l’élément, ce n’est pas ce qui se passe lors d’une ionisation : seuls les électrons circulent. Le nombre de neutrons reste N = A − Z = 35 − 17 = 18."
    }
  ]);
})();
