/* Quiz de Mathématiques Première (Jàngalekat) — leçons c1 à c4, une leçon = trois questions.
   Les intitulés et l’ordre des leçons viennent du programme officiel sénégalais de mathématiques du
   second cycle (MEN / IGEN / Commission nationale des programmes, Programmes de mathématiques,
   Premières S2 et S4, octobre 2006, APAMS), domaine Analyse : I. Généralités sur les fonctions
   numériques d’une variable réelle, II. Limites, III. Continuité, IV. Dérivation. Le Guide d’usage
   des programmes – Mathématiques (DEMSG, septembre 2012, APAMS) sert d’appui pour les acquis du
   premier cycle ; il ne traite ni des limites, ni de la continuité, ni de la dérivation.
   Réserves du registre des programmes (js/programmes/maths.js), reprises ici : au lycée, le document
   ne prescrit aucun ordre annuel — l’introduction générale des Premières S2 et S4 écrit que « le
   professeur choisira la progression de son choix » — aussi l’ordre des leçons ci-dessous est celui
   du papier, pas celui d’une année de classe ; les coquilles du document et les signes d’écriture
   perdus lors de l’extraction du texte du PDF (flèches, numérotation) ont été relus ou corrigés à la
   recopie ; enfin, au chapitre « II. L’outil métrique », le bloc « Produit scalaire » apparaît sans
   numéro (leçon hors de ce fichier, signalée pour mémoire).
   Les énoncés, options et explications sont des contenus auto-rédigés par un modèle, non relus par un
   enseignant. Ils ne sont ni un sujet officiel ni une évaluation de référence, et aucune question ne
   provient d’un texte officiel. */
(function () {
  'use strict';

  JK.quizDeLecon('maths-premiere-c1-l1', [
    {
      enonce: "À partir de la courbe représentative de f, comment obtenir celle de la fonction x ↦ f(x) + b ?",
      options: [
        "Par une translation verticale : chaque point monte ou descend de b",
        "Par une réflexion d’axe l’axe des abscisses",
        "Par une homothétie de rapport b et de centre O",
        "Par une translation horizontale de b"
      ],
      correct: 0,
      explication: "Le point d’abscisse x prend pour ordonnée f(x) + b : il glisse de b unités à la verticale, c’est la translation de vecteur (0 ; b), vers le haut si b est positif et vers le bas sinon. Le programme demande de construire ainsi les courbes des fonctions associées à partir de celle de f, sans recherche systématique."
    },
    {
      enonce: "La courbe de la fonction x ↦ f(x − 3) s’obtient à partir de celle de f par quelle transformation ?",
      options: [
        "Une translation de 3 unités vers la gauche",
        "Une translation de 3 unités vers le haut",
        "Une translation de 3 unités vers la droite",
        "Une réflexion d’axe la droite d’équation x = 3"
      ],
      correct: 2,
      explication: "La nouvelle fonction vaut f(a) dès que x = a + 3, puisque (a + 3) − 3 = a : chaque point de f se retrouve 3 unités plus à droite, ce qui est la translation de vecteur (3 ; 0). C’est la voie que le programme propose, changement de repère ou formules usuelles, avant l’application aux fonctions du second degré."
    },
    {
      enonce: "À quelles familles de fonctions le programme réserve-t-il l’application des fonctions associées ?",
      options: [
        "Aux fonctions sinus, cosinus et tangente",
        "Aux polynômes du second degré et à quelques fonctions homographiques",
        "Aux fonctions racine carrée uniquement",
        "Aux fonctions exponentielles"
      ],
      correct: 1,
      explication: "Le contenu est explicite : « application à la représentation graphique des fonctions polynômes du second degré et de quelques fonctions homographiques ». Écrire un trinôme sous la forme a(x − b)² + c, c’est partir de la courbe de x ↦ x², la translater puis la modifier par l’homothétie de rapport a."
    }
  ]);

  JK.quizDeLecon('maths-premiere-c1-l2', [
    {
      enonce: "Que traduit l’égalité f(a + x) + f(a − x) = 2 b, vérifiée pour tout x de l’ensemble de définition ?",
      options: [
        "La droite d’équation x = a est un axe de symétrie de la courbe",
        "La fonction f est continue au point a",
        "Le point d’abscisse b et d’ordonnée a est un centre de symétrie",
        "Le point de coordonnées (a ; b) est un centre de symétrie de la courbe"
      ],
      correct: 3,
      explication: "Les deux points d’abscisses a + x et a − x ont des ordonnées dont la moyenne vaut b : le milieu du segment qui les joint est toujours le point (a ; b), et la courbe se retourne sur elle-même par la symétrie centrale de centre (a ; b). La formule des ordonnées égales, f(a + x) = f(a − x), concernerait un axe."
    },
    {
      enonce: "Les égalités f(a + x) = f(a − x), ou de façon équivalente f(2a − x) = f(x), traduisent quoi pour la courbe de f ?",
      options: [
        "Elle admet le point (a ; 0) comme centre de symétrie",
        "Elle admet la droite d’équation x = a comme axe de symétrie",
        "Elle admet la droite d’équation y = a comme asymptote",
        "Elle est nécessairement monotone"
      ],
      correct: 1,
      explication: "Deux points situés à la même distance de a, de part et d’autre, ont la même ordonnée : la courbe se replie exactement sur elle-même par la réflexion d’axe la droite verticale d’équation x = a. Ce sont les formules usuelles que le programme demande d’établir et d’utiliser pour démontrer une symétrie."
    },
    {
      enonce: "La fonction f définie par f(x) = (x − 1)² vérifie f(1 + x) = f(1 − x) pour tout réel x ; que peut-on en déduire ?",
      options: [
        "Le point (1 ; 0) est un centre de symétrie de sa courbe",
        "La droite d’équation y = 1 est un axe de symétrie de sa courbe",
        "La droite d’équation x = 1 est un axe de symétrie de sa courbe",
        "Sa courbe ne présente aucun élément de symétrie"
      ],
      correct: 2,
      explication: "Ici a = 1, et les deux images valent x² l’une et l’autre : la condition d’axe de symétrie est remplie, avec le sommet de la parabole en (1 ; 0), posé sur cet axe. C’est la démarche attendue, vérifier la formule puis conclure sur la droite."
    }
  ]);

  JK.quizDeLecon('maths-premiere-c1-l3', [
    {
      enonce: "Dans un repère orthonormal, par quelle transformation obtient-on la courbe de la fonction réciproque d’une fonction bijective f ?",
      options: [
        "Une translation de vecteur (1 ; 1)",
        "Une rotation d’angle 90° et de centre O",
        "Une symétrie orthogonale par rapport à la droite d’équation y = x",
        "Une homothétie de rapport 2 et de centre O"
      ],
      correct: 2,
      explication: "La réciproque échange les abscisses et les ordonnées : le point (x ; y) de la courbe de f devient (y ; x) sur celle de la réciproque, et ces deux points sont symétriques par rapport à la première bissectrice d’équation y = x. D’où la construction graphique demandée par le programme."
    },
    {
      enonce: "Le point de coordonnées (2 ; 5) appartient à la courbe d’une fonction bijective f ; quel point appartient à la courbe de sa réciproque ?",
      options: [
        "(2 ; −5)",
        "(−2 ; −5)",
        "(5 ; 5)",
        "(5 ; 2)"
      ],
      correct: 3,
      explication: "f(2) = 5 signifie que la réciproque envoie 5 sur 2 : les coordonnées s’échangent, ce qui est la trace, point par point, de la symétrie par rapport à la droite d’équation y = x."
    },
    {
      enonce: "Pourquoi le programme parle-t-il de la réciproque d’une fonction bijective plutôt que de celle d’une fonction quelconque ?",
      options: [
        "Parce qu’une fonction bijective est toujours croissante",
        "Parce que la bijection assure une image réciproque unique : la réciproque est alors une fonction",
        "Parce que les fonctions bijectives sont les seules à posséder une courbe",
        "Parce qu’une fonction bijective admet toujours un centre de symétrie"
      ],
      correct: 1,
      explication: "Si un même réel possédait deux antécédents, l’image par la prétendue réciproque ne serait pas unique et ne définirait plus une fonction. La bijection sur l’ensemble d’arrivée garantit un antécédent et un seul par élément, donc une courbe exploitable pour la construction graphique."
    }
  ]);

  JK.quizDeLecon('maths-premiere-c2-l1', [
    {
      enonce: "Que veut dire, d’après le programme, « la fonction f admet pour limite le réel l au point a » ?",
      options: [
        "Les valeurs de f(x) peuvent être aussi proches de l que l’on veut dès que x est assez proche de a, à condition de rester différent de a",
        "f(a) existe et vaut l",
        "f(x) devient plus grand que tout réel quand x s’approche de a",
        "L’égalité f(x) = l est vérifiée pour tout x voisin de a"
      ],
      correct: 0,
      explication: "C’est l’approche intuitive écrite au programme : on observe les images lorsque l’abscisse s’approche de a sans jamais prendre la valeur a ; la valeur de f en a, si elle existe, ne change rien à la limite, et aucune théorie n’est demandée sur ce point."
    },
    {
      enonce: "Pour parler de la limite de f au point a, que faut-il savoir sur l’existence de f(a) ?",
      options: [
        "f(a) doit exister et être égal à la limite",
        "f(a) doit exister et être nul",
        "f(a) doit exister, mais peut être différent de la limite",
        "Rien n’est exigé : f peut même ne pas être définie en a"
      ],
      correct: 3,
      explication: "La définition étudiée fait tendre x vers a « en restant différente de a » : seul le comportement autour du point compte, et le programme ajoute qu’on se place d’abord dans le cas de la limite finie en un point réel. Une courbe qui présente un trou juste au-dessus de a illustrerait cette indépendance entre limite et valeur de la fonction."
    },
    {
      enonce: "D’après le programme, quand une fonction admet une limite en un point, combien de valeurs cette limite peut-elle prendre ?",
      options: [
        "deux, une pour chaque sens d’approche",
        "une seule",
        "autant qu’il y a de points voisins de a",
        "aucune, on ne peut pas la fixer"
      ],
      correct: 1,
      explication: "Il est écrit qu’on admettra que lorsqu’une fonction admet une limite, cette limite est unique : on peut donc parler de LA limite de f en a. Deux valeurs différentes suivant qu’on approche par valeurs plus petites ou plus grandes correspondent en réalité aux limites à gauche et à droite, dont l’égalité est justement la condition d’existence."
    }
  ]);

  JK.quizDeLecon('maths-premiere-c2-l2', [
    {
      enonce: "Que lit-on exactement dans la notation « lim f(x) = l » accompagnée de « x → a » ?",
      options: [
        "Que f(a) vaut l",
        "Que x tend vers l et que la limite vaut a",
        "Que la limite de f(x) lorsque x tend vers a vaut l",
        "Que f(x) reste plus petit que l pour tout x"
      ],
      correct: 2,
      explication: "Le réel noté a, accompagnant la flèche x → a, est celui que la variable approche, donc le point où l’on étudie la limite ; le réel l placé après le signe égal est la limite elle-même, le nombre que les images approchent. Ce sont précisément les deux écritures que le programme inscrit dans ce paragraphe."
    },
    {
      enonce: "Dans la notation de la limite en a, que désigne la lettre a ?",
      options: [
        "le point en lequel on étudie la limite",
        "la valeur de la limite cherchée",
        "la plus grande valeur de f",
        "le coefficient directeur de la tangente"
      ],
      correct: 0,
      explication: "Le programme écrit lim f(x) avec « x → a » et l’autre notation lim f avec a sous le signe : dans les deux cas a est l’abscisse visée par la variable, tandis que la limite est le réel obtenu en définitive, jamais une pente."
    },
    {
      enonce: "Quelle notation écrit « la limite de f en 2 vaut 7 » ?",
      options: [
        "f(2) = 7",
        "lim f(x) = 7 avec x → 7",
        "lim f(x) = 2 avec x → 7",
        "lim f(x) = 7 avec x → 2"
      ],
      correct: 3,
      explication: "Le nombre que x approche se place sur la flèche, donc ici x → 2, et le nombre que les images approchent se place après le signe égal, donc 7. Écrire f(2) = 7 affirmerait une valeur de la fonction, ce qui est une assertion différente et indépendante de la limite."
    }
  ]);

  JK.quizDeLecon('maths-premiere-c2-l3', [
    {
      enonce: "Que désigne la limite à droite de f au point a ?",
      options: [
        "La limite de f(x) quand x tend vers a avec x < a",
        "La limite de f(x) quand x tend vers plus l’infini",
        "La limite de f(x) quand x tend vers a avec x > a",
        "La valeur de f prise exactement en a"
      ],
      correct: 2,
      explication: "« À droite » se lit sur l’axe des abscisses : x approche a par valeurs strictement supérieures à a, c’est-à-dire depuis la droite de a. Le programme introduit cette variante par la même approche intuitive que la limite ordinaire, avec des illustrations graphiques."
    },
    {
      enonce: "Dans les notations du programme, que signifie lim f affecté de a − ?",
      options: [
        "la limite de f à l’infini moins a",
        "la limite à droite de f en a",
        "la valeur de f en a moins un",
        "la limite à gauche de f en a"
      ],
      correct: 3,
      explication: "Le signe − placé sur a indique que x s’approche de a en restant plus petit que a ; le programme écrit cette limite à gauche en la complétant par x < a, par symétrie avec la notation a + réservée aux abscisses plus grandes que a."
    },
    {
      enonce: "Si la limite à gauche et la limite à droite de f en a existent et sont égales, que conclut le théorème admis par le programme ?",
      options: [
        "f est continue en a",
        "f admet une limite en a, égale à cette valeur commune",
        "f est dérivable en a",
        "f n’admet pas de limite en a"
      ],
      correct: 1,
      explication: "Le programme admet que cette valeur commune est la limite de f en a, et demande de l’illustrer graphiquement. La continuité réclamerait en plus que f(a) existe et égale cette valeur, et la dérivabilité davantage encore : ce sont des notions distinctes, traitées plus loin."
    }
  ]);

  JK.quizDeLecon('maths-premiere-c2-l4', [
    {
      enonce: "Qu’appelle-t-on asymptote horizontale à la courbe représentative de f ?",
      options: [
        "La droite d’équation y = l quand f(x) tend vers l lorsque x tend vers l’infini",
        "La droite d’équation x = a quand f(x) tend vers l’infini lorsque x tend vers a",
        "La tangente à la courbe au point d’abscisse nulle",
        "L’axe des ordonnées dès que f n’est pas définie en 0"
      ],
      correct: 0,
      explication: "L’extension de la notion de limite au programme porte sur trois cas : la limite finie à l’infini, la limite infinie en un point fini et la limite infinie à l’infini, et il demande de définir les asymptotes. Une asymptote horizontale est une droite parallèle à l’axe des abscisses, ce qui exclut le cas vertical."
    },
    {
      enonce: "Dans quel cas la droite d’équation x = 2 est-elle asymptote verticale à la courbe de f ?",
      options: [
        "f(x) tend vers 0 quand x tend vers 2",
        "f(2) vaut 2",
        "f(x) tend vers l’infini quand x tend vers 2",
        "f(x) tend vers l’infini quand x tend vers 0"
      ],
      correct: 2,
      explication: "C’est le cas « limite infinie en a fini » des extensions prévues par le programme : les images deviennent plus grandes que tout réel quand l’abscisse se rapproche de 2, et la courbe longe alors la verticale d’équation x = 2, qui lui sert d’asymptote."
    },
    {
      enonce: "Que vaut la limite de (3x + 1) ÷ x quand x tend vers plus l’infini ?",
      options: [
        "0",
        "1",
        "plus l’infini",
        "3"
      ],
      correct: 3,
      explication: "On écrit (3x + 1) ÷ x = 3 + 1 ÷ x, et 1 ÷ x tend vers 0 à l’infini, ce qui donne 3. Autrement dit la droite d’équation y = 3 est asymptote horizontale à la courbe de x ↦ (3x + 1) ÷ x, qui est une fonction homographique."
    }
  ]);

  JK.quizDeLecon('maths-premiere-c2-l5', [
    {
      enonce: "En utilisant les théorèmes sur la somme et le produit par une constante, que vaut la limite de 2x + 3 quand x tend vers 5 ?",
      options: [
        "3",
        "13",
        "10",
        "15"
      ],
      correct: 1,
      explication: "La limite de x en 5 vaut 5, celle de 2x vaut donc 2 × 5 = 10, puis la somme avec la fonction constante 3 donne 13. L’opération sur les limites est licite ici car les deux limites sont finies, ce qui évite toute forme indéterminée."
    },
    {
      enonce: "Que vaut la limite de (x² − 4) ÷ (x − 2) quand x tend vers 2 ?",
      options: [
        "4",
        "0",
        "2",
        "Elle n’existe pas"
      ],
      correct: 0,
      explication: "Numérateur et dénominateur tendent vers 0 : c’est la forme indéterminée à lever. Pour x différent de 2, x² − 4 = (x − 2)(x + 2), donc le quotient vaut x + 2, dont la limite en 2 est bien 4 ; le point manquant sur la courbe ne gêne pas la limite."
    },
    {
      enonce: "Si f admet pour limite 9 en a et reste positive au voisinage de a, que dit le programme sur la racine carrée de f ?",
      options: [
        "Elle n’admet pas de limite en a",
        "Sa limite en a vaut 9",
        "Sa limite en a vaut 81",
        "Sa limite en a vaut 3"
      ],
      correct: 3,
      explication: "Les théorèmes opératoires du programme portent aussi sur la racine carrée d’une fonction : on passe la limite dans la racine, soit √9 = 3. Il faut que f reste positive pour que √f(x) ait un sens au voisinage du point étudié."
    }
  ]);

  JK.quizDeLecon('maths-premiere-c3-l1', [
    {
      enonce: "D’après la définition du programme, combien de conditions faut-il vérifier pour affirmer que f est continue en a ?",
      options: [
        "une seule",
        "deux",
        "trois",
        "aucune"
      ],
      correct: 2,
      explication: "Le texte détaille trois exigences : f(a) existe, la limite de f en a existe, et enfin ces deux valeurs sont égales. Si l’une d’elles manque, le point n’est pas un point de continuité, et le programme demande de savoir le démontrer."
    },
    {
      enonce: "Parmi ces affirmations, laquelle correspond à ce que le programme donne comme acquis sur les fonctions continues ?",
      options: [
        "Seules les fonctions affines sont continues",
        "Les polynômes, les fonctions rationnelles, les racines carrées et les homographiques sont continues dans leur ensemble de définition",
        "Aucune fonction n’est continue sans démonstration préalable",
        "Une fonction continue est toujours monotone"
      ],
      correct: 1,
      explication: "Il est écrit qu’on admettra cette continuité pour ces quatre familles, l’objectif étant de faire percevoir le lien avec le tracé de la courbe. La continuité n’entraîne en revanche ni la monotonie ni la dérivabilité en tout point."
    },
    {
      enonce: "La fonction f définie par f(x) = (x² − 1) ÷ (x − 1) n’est pas continue en 1 ; quelle condition de la définition manque ?",
      options: [
        "La limite de f en 1 n’existe pas",
        "Le numérateur ne s’annule pas en 1",
        "La dérivée de f n’existe pas en 1",
        "f(1) n’existe pas"
      ],
      correct: 3,
      explication: "Le dénominateur s’annule en 1, donc f(1) n’a pas de sens : la première condition de la continuité tombe, même si la limite existe, car pour x différent de 1 on a f(x) = x + 1 et donc lim f en 1 vaut 2. Le calcul montre bien que limite et valeur de la fonction sont deux choses distinctes."
    }
  ]);

  JK.quizDeLecon('maths-premiere-c3-l2', [
    {
      enonce: "Si f et g sont continues sur un intervalle I, que dit le paragraphe sur les opérations ?",
      options: [
        "La fonction f + g est continue sur I",
        "La fonction f + g n’est continue qu’au voisinage de 0",
        "La fonction f + g est nécessairement dérivable sur I",
        "La fonction f + g est constante sur I"
      ],
      correct: 0,
      explication: "Le programme traite les opérations sur les fonctions continues sur un intervalle, et la somme de deux fonctions continues reste continue sur ce même intervalle. En revanche, être continue sur I ne donne aucune garantie de dérivabilité en tout point."
    },
    {
      enonce: "La fonction f définie par f(x) = x² est continue sur l’intervalle [−2 ; 3]. Quel est l’intervalle image de [−2 ; 3] par f ?",
      options: [
        "[4 ; 9]",
        "[0 ; 9]",
        "[0 ; 4]",
        "[−2 ; 3]"
      ],
      correct: 1,
      explication: "Le théorème admis affirme que l’image d’un intervalle par une fonction continue est un intervalle. Ici le minimum 0 est pris en x = 0, qui appartient à l’intervalle, et le maximum 9 en x = 3, puisque f(−2) = 4 ; l’image est donc [0 ; 9], et non [4 ; 9], ce qui oublierait les carrés obtenus entre −2 et 0."
    },
    {
      enonce: "Une fonction f est continue et strictement monotone sur un intervalle I ; que conclut le théorème admis du programme ?",
      options: [
        "f est une bijection de I sur IR",
        "f est dérivable sur I",
        "f est constante sur I",
        "f est une bijection de I sur f(I)"
      ],
      correct: 3,
      explication: "La phrase du programme est exactement celle-là, et son image est nécessairement un intervalle d’après le théorème précédent. Rien n’oblige cette image à être IR tout entier, et la stricte monotonie ne donne pas la dérivabilité."
    }
  ]);

  JK.quizDeLecon('maths-premiere-c4-l1', [
    {
      enonce: "Le nombre dérivé de f au point a est la limite, quand h tend vers 0, de quelle expression ?",
      options: [
        "(f(a + h) + f(a)) ÷ h",
        "(f(a + h) − f(a)) ÷ h",
        "(f(a) − f(a + h)) ÷ h",
        "(f(a + h) − f(a)) × h"
      ],
      correct: 1,
      explication: "C’est le taux d’accroissement de f entre a et a + h, pente de la sécante, dont on admet la limite : elle porte le nom de nombre dérivé et se note f′(a). Inverser les deux termes du numérateur change le signe, et multiplier par h donnerait une quantité tendant vers 0."
    },
    {
      enonce: "Si f est dérivable au point a, que garantit le théorème admis par le programme ?",
      options: [
        "f est continue au point a",
        "f est continue sur IR",
        "f est croissante au voisinage de a",
        "f admet en a une tangente horizontale"
      ],
      correct: 0,
      explication: "Le théorème est écrit au contenu : si f est dérivable en x₀, alors f est continue en x₀. Il ne porte que sur ce point, non sur tout IR, et sa réciproque est fausse : une fonction peut être continue sans être dérivable. En contraposée, une fonction discontinue en a ne peut pas y être dérivable."
    },
    {
      enonce: "Que vaut le nombre dérivé en 2 de la fonction f définie par f(x) = x² ?",
      options: [
        "2",
        "8",
        "0",
        "4"
      ],
      correct: 3,
      explication: "Le taux d’accroissement vaut ((2 + h)² − 4) ÷ h = (4h + h²) ÷ h = 4 + h pour h non nul, et sa limite quand h tend vers 0 est 4. Le nombre 8 correspondrait à 2 × f(2) et non au nombre dérivé, qui est ici le coefficient directeur de la tangente au point d’abscisse 2."
    }
  ]);

  JK.quizDeLecon('maths-premiere-c4-l2', [
    {
      enonce: "Que représente le nombre dérivé f′(a) sur la courbe représentative de f ?",
      options: [
        "L’ordonnée du point d’abscisse a",
        "La longueur du segment joignant ce point à l’origine",
        "Le coefficient directeur de la tangente à la courbe au point d’abscisse a",
        "L’abscisse du point où la courbe coupe l’axe des abscisses"
      ],
      correct: 2,
      explication: "C’est l’interprétation géométrique attendue au programme : f′(a) est la pente de la tangente en ce point, d’où l’équation y = f(a) + f′(a)(x − a) pour déterminer une tangente. L’ordonnée du point, elle, est f(a), une quantité indépendante de la pente."
    },
    {
      enonce: "Quelle est l’équation de la tangente à la courbe de f définie par f(x) = x² au point d’abscisse 1 ?",
      options: [
        "y = 2x − 1",
        "y = 2x + 1",
        "y = 2x",
        "y = x − 1"
      ],
      correct: 0,
      explication: "Le point est (1 ; 1) et le nombre dérivé en 1 vaut 2, donc la tangente a pour équation y = 1 + 2(x − 1) = 2x − 1. On vérifie que cette droite passe bien par le point de contact : pour x = 1, 2 × 1 − 1 = 1."
    },
    {
      enonce: "Si f′(a) = 0 pour une fonction dérivable en a, que peut-on dire de la tangente à la courbe au point d’abscisse a ?",
      options: [
        "Elle n’existe pas",
        "Elle est horizontale",
        "Elle est verticale",
        "Elle est confondue avec l’axe des ordonnées"
      ],
      correct: 1,
      explication: "Une tangente de coefficient directeur nul est parallèle à l’axe des abscisses, et son équation se réduit à y = f(a). La courbe peut d’ailleurs traverser sa tangente, ce qui arrive aux points d’inflexion à tangente horizontale."
    }
  ]);

  JK.quizDeLecon('maths-premiere-c4-l3', [
    {
      enonce: "Comment définit-on le nombre dérivé à droite de f au point a ?",
      options: [
        "La limite de (f(a + h) − f(a)) ÷ h quand h tend vers 0 par valeurs positives",
        "La limite de (f(a + h) − f(a)) ÷ h quand h tend vers 0 par valeurs négatives",
        "La limite de (f(a + h) − f(a)) ÷ h quand h tend vers l’infini",
        "La valeur de f(a) multipliée par le nombre dérivé à gauche"
      ],
      correct: 0,
      explication: "Le taux d’accroissement est calculé cette fois avec des points placés à droite de a, donc avec h > 0 ; c’est la pente de la demi-tangente droite. Le programme met en avant le lien entre les deux expressions et demande de savoir calculer ces deux nombres."
    },
    {
      enonce: "On définit f par f(x) = 2x si x ≤ 0 et f(x) = x si x > 0. Que vaut le nombre dérivé à gauche de f en 0 ?",
      options: [
        "1",
        "0",
        "2",
        "Il n’existe pas"
      ],
      correct: 2,
      explication: "Pour h négatif, f(h) = 2h et f(0) = 0, donc le taux d’accroissement vaut 2h ÷ h = 2 : le nombre dérivé à gauche est 2, alors que le nombre dérivé à droite, obtenu avec f(h) = h, vaut 1. Les deux étant distincts, f n’est pas dérivable en 0 et sa courbe y présente deux demi-tangentes."
    },
    {
      enonce: "Que se passe-t-il, d’après les théorèmes du programme, si les nombres dérivés à gauche et à droite de f en x₀ sont distincts ?",
      options: [
        "f est dérivable en x₀ et f′(x₀) est leur moyenne",
        "f est dérivable en x₀ et f′(x₀) est le plus grand des deux",
        "f n’est pas continue en x₀",
        "f n’est pas dérivable en x₀ et la courbe admet deux demi-tangentes en ce point"
      ],
      correct: 3,
      explication: "Le texte l’écrit explicitement : l’égalité des deux nombres dérivés est nécessaire pour la dérivabilité, et leur divergence laisse un point anguleux avec deux demi-tangentes au point d’abscisse x₀. Le point reste pourtant continu, comme le montre la fonction égale à 2x pour x ≤ 0 et à x pour x > 0 : elle est continue en 0 et n’y est pas dérivable."
    }
  ]);

  JK.quizDeLecon('maths-premiere-c4-l4', [
    {
      enonce: "Que désigne la fonction dérivée f′ d’une fonction dérivable sur un intervalle I ?",
      options: [
        "la fonction qui, à tout x de I, associe le nombre dérivé de f en x",
        "la pente de la tangente prise en un seul point fixe de I",
        "la somme des valeurs prises par f sur I",
        "la fonction qui, à x, associe l’aire sous la courbe de f"
      ],
      correct: 0,
      explication: "Le programme passe du nombre dérivé, fixé en un point, à la fonction dérivée en définissant la dérivabilité sur un intervalle : à chaque abscisse correspond son nombre dérivé, d’où une nouvelle fonction notée f′. L’aire sous la courbe relève, elle, du calcul intégral."
    },
    {
      enonce: "Que vaut la dérivée de la fonction f définie par f(x) = x³ ?",
      options: [
        "x²",
        "3x",
        "3x²",
        "2x³"
      ],
      correct: 2,
      explication: "C’est une dérivée des fonctions élémentaires du programme : pour tout x, le taux d’accroissement (x + h)³ − x³ divisé par h devient 3x² + 3xh + h², dont la limite quand h tend vers 0 est 3x². On retrouve le même calcul pour x ↦ x², dont la dérivée est 2x."
    },
    {
      enonce: "f est une fonction dérivable et g est définie par g(x) = f(3x + 2). Que vaut g′(x) ?",
      options: [
        "f′(3x + 2)",
        "3 f′(3x + 2)",
        "(3x + 2) f′(x)",
        "f′(x) ÷ 3"
      ],
      correct: 1,
      explication: "Le programme prévoit la règle de dérivation de x ↦ f(ax + b) : la dérivée de la fonction affine intérieure, ici 3, multiplie la dérivée de f évaluée en 3x + 2. Oublier ce facteur 3 reviendrait à écrire seulement f′(3x + 2)."
    }
  ]);

  JK.quizDeLecon('maths-premiere-c4-l5', [
    {
      enonce: "Un maraîcher de la banlieue de Dakar clôt un jardin potager rectangulaire avec 60 m de grillage, et un côté mesure x mètres. Quelle valeur de x donne la plus grande surface ?",
      options: [
        "10 m",
        "15 m",
        "20 m",
        "30 m"
      ],
      correct: 1,
      explication: "Le demi-périmètre vaut 30 m, donc la surface s’écrit A(x) = x(30 − x) = 30x − x² et A′(x) = 30 − 2x, qui s’annule en 15 en passant de positif à négatif : le théorème sur le changement de signe y place un maximum, soit 225 m² pour un potager carré. Avec 10 m ou 20 m de côté, la surface retombe à 200 m², et avec 30 m elle devient nulle."
    },
    {
      enonce: "f est dérivable sur un intervalle I et sa dérivée est strictement positive sur I ; que conclut le théorème admis ?",
      options: [
        "f est constante sur I",
        "f est strictement décroissante sur I",
        "f est strictement croissante sur I",
        "f admet un maximum sur I"
      ],
      correct: 2,
      explication: "Le programme distingue trois niveaux : dérivée nulle sur I, f constante ; dérivée positive ou négative, f croissante ou décroissante ; dérivée strictement positive ou strictement négative, f strictement croissante ou strictement décroissante. Le sens de variation est le premier usage de la dérivée, avant les extremums."
    },
    {
      enonce: "f est dérivable sur un intervalle I et sa dérivée est nulle en tout point de I ; que dit le théorème admis ?",
      options: [
        "f est constante sur I",
        "f est nulle sur I",
        "f est strictement croissante sur I",
        "f admet un extremum en chaque point de I"
      ],
      correct: 0,
      explication: "C’est le premier des théorèmes donnés sur le sens de variation : une dérivée nulle sur I entraîne f constante sur I, c’est-à-dire que f prend la même valeur en tout point de I. Rien ne force cette constante à être 0, et la réciproque est immédiate, car une fonction constante a une dérivée nulle."
    }
  ]);

  JK.quizDeLecon('maths-premiere-c4-l6', [
    {
      enonce: "Que dit le théorème admis reliant dérivée et bijection ?",
      options: [
        "Si f est dérivable sur I et si f′ s’annule sur I, alors f est bijective",
        "Si f est dérivable sur I et strictement monotone sur I, alors f est une bijection de I sur f(I)",
        "Si f est dérivable sur I, alors f est bijective de I sur IR",
        "Si f est strictement monotone sur I, alors f est dérivable sur I"
      ],
      correct: 1,
      explication: "La stricte monotonie rend deux abscisses distinctes incompatibles avec la même image, donc f est injective, et toute valeur de f(I) possède un antécédent, donc f est surjective sur son image. Le théorème ne dit rien de plus : la bijection vise f(I), jamais IR tout entier, et la monotonie seule ne garantit pas la dérivabilité."
    },
    {
      enonce: "f est dérivable et strictement croissante sur un intervalle I ; que peut-on dire de l’équation f(x) = m, d’inconnue x dans I ?",
      options: [
        "Elle admet au plus une solution, et exactement une si m appartient à f(I)",
        "Elle admet toujours deux solutions",
        "Elle admet une solution pour toute valeur réelle de m",
        "Elle admet une infinité de solutions"
      ],
      correct: 0,
      explication: "Le programme signale que ce théorème sert à résoudre des équations et des inéquations : la bijection de I sur f(I) donne une solution, une seule, dès que m tombe dans l’ensemble d’arrivée, et aucune en dehors. La stricte croissance interdit en effet deux solutions distinctes."
    },
    {
      enonce: "La fonction f définie par f(x) = x² est dérivable et strictement croissante sur [0 ; +∞[. Que conclut le théorème sur cet intervalle ?",
      options: [
        "f est une bijection de [0 ; +∞[ sur IR",
        "f n’est pas injective sur cet intervalle",
        "f est une bijection de [0 ; +∞[ sur [0 ; +∞[",
        "f admet un maximum sur cet intervalle"
      ],
      correct: 2,
      explication: "Le théorème assure une bijection de l’intervalle sur son image, or les carrés des réels positifs ou nuls remplissent exactement [0 ; +∞[ : le réel m négatif n’a pas d’antécédent. Sur IR tout entier la fonction ne serait d’ailleurs pas injective, car x et −x donnent le même carré."
    }
  ]);
})();
