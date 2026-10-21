/* Quiz de Physique-Chimie Première S — partie physique, chapitres P1 à P11 : une leçon = trois questions.
   Les intitulés et l’ordre des leçons viennent de copies du programme sénégalais de sciences physiques
   datées d’août 2008 (fascicule pédagogique, autorité non imprimée : ni page de garde, ni ministère,
   ni IGEN), consultables sous la référence unesdoc UNESCO ark:/48223/pf0000191124. Ces copies ne sont
   donc jamais désignées ici comme un programme officiel.
   Quand la copie ne donnait que le titre ou que les objectifs d’un chapitre, les notions ont été cherchées
   dans le Fascicule de Sciences Physiques de Première S de l’Inspection d’académie de Pikine-Guédiawaye
   avec la Caisse des Dépôts et Consignations (2018). Ce fascicule n’est qu’un appui documentaire : il
   n’est pas une référence validée : c’est toujours la copie d’août 2008 qui prime pour les notions interrogées.
   Réserves de relevé reprises ici :
   - l’horaire du chapitre P6 diffère entre le tableau du sommaire (5 h) et le relevé du chapitre (6 h) :
     aucune question de ce fichier ne porte sur une durée ni sur un nombre d’heures ;
   - le fascicule d’appui expose le théorème de Huygens, que la copie du programme met hors programme :
     il n’est pas interrogé ;
   - la copie du programme suspend le chapitre P9 : « jusqu’à nouvel ordre le chapitre P9 qui traite des
     montages électroniques réalisés avec l’amplificateur opérationnel n’est pas à dérouler », et le
     fascicule d’appui ne consacre aucune page à ce chapitre. Les trois questions ne prennent appui que
     sur le texte du chapitre lui-même ;
   - la relation E = U / d est écartée du chapitre P5 par le document, qui la renvoie au chapitre suivant :
     elle n’est donc questionnée qu’au chapitre P6.
   Les énoncés, options et explications sont des contenus de démonstration rédigés par un modèle, non relus
   par un enseignant : ils ne constituent ni un sujet officiel ni une évaluation de référence. */
(function () {
  'use strict';

  JK.quizDeLecon('pc-premiere-c1-l1', [
    {
      "enonce": "Une force constante de 20 N, de même sens que le déplacement, anime un chariot sur une distance rectiligne de 3 m. Que vaut le travail de cette force ?",
      "options": [
        "60 J",
        "6,7 J",
        "23 J",
        "60 W"
      ],
      "correct": 0,
      "explication": "Le document donne le travail d’une force constante sur un déplacement rectiligne comme le produit scalaire de la force et du déplacement, soit ici 20 × 3 = 60 ; angle nul, cosinus égal à 1. Le résultat s’exprime en joule, jamais en watt, qui est l’unité de la puissance."
    },
    {
      "enonce": "Que dit le chapitre sur travail et puissance du travail du poids d’un corps entre deux positions d’altitudes z1 et z2 ?",
      "options": [
        "Il dépend de la longueur du chemin suivi entre les deux positions",
        "Il vaut m × g × (z1 - z2) et ne dépend pas du chemin suivi",
        "Il est toujours nul, car le poids est une force conservative",
        "Il faut le calculer force par force, position par position"
      ],
      "correct": 1,
      "explication": "Le texte écrit le travail du poids sous la forme mg(z1 - z2), soit -mg(z2 - z1), puis en conclut que ce travail est indépendant du chemin suivi : le poids est une force conservative. C’est justement parce qu’il est conservative que son travail se réduit aux deux altitudes."
    },
    {
      "enonce": "Par quelle relation le document exprime-t-il la puissance instantanée d’une force constante dont le point d’application se meut avec la vitesse V ?",
      "options": [
        "Le quotient du travail par la durée",
        "Le produit de la force par la distance parcourue",
        "Le produit de la force par la vitesse",
        "Le quotient de la force par la vitesse"
      ],
      "correct": 2,
      "explication": "Le document distingue la puissance moyenne, Pm = W / t, de la puissance instantanée, notée p = F × V. Le produit de la force par la distance donne un travail et le quotient du travail par la durée une puissance moyenne, non instantanée."
    }
  ]);

  JK.quizDeLecon('pc-premiere-c1-l2', [
    {
      "enonce": "Un solide de masse 2 kg est en translation à la vitesse de 3 m/s. Quelle est son énergie cinétique ?",
      "options": [
        "6 J",
        "9 J",
        "18 J",
        "36 J"
      ],
      "correct": 1,
      "explication": "Le fascicule d’appui, comme le chapitre, donne pour la translation Ec = 0,5 × M × V², soit 0,5 × 2 × 9 = 9, en joule. Oublier le facteur 0,5 mène à 18 J et oublier le carré de la vitesse à 3 J, deux erreurs classiques."
    },
    {
      "enonce": "Quelle propriété de l’énergie cinétique le document du chapitre retient-il ?",
      "options": [
        "Elle renseigne sur le sens du mouvement",
        "Elle ne dépend pas du référentiel choisi",
        "C’est une grandeur scalaire positive, dont la valeur dépend du référentiel",
        "Elle devient négative lorsque le mobile ralentit"
      ],
      "correct": 2,
      "explication": "Le texte la décrit comme une grandeur scalaire positive dont la valeur dépend du référentiel, mais qui ne donne aucune information sur le sens ni sur la direction du mouvement. Un même corps n’a donc pas la même énergie cinétique dans le référentiel terrestre et dans le référentiel d’un observateur en mouvement."
    },
    {
      "enonce": "Pour un solide en rotation autour d’un axe fixe, par quelle expression le document donne-t-il l’énergie cinétique de rotation ?",
      "options": [
        "Ec = 0,5 × m × v²",
        "Ec = m × g × z",
        "Ec = J × ω",
        "Ec = 0,5 × J × ω²"
      ],
      "correct": 3,
      "explication": "Le chapitre introduit le moment d’inertie J du solide par rapport à l’axe et donne l’énergie cinétique de rotation sous la forme Ec = 0,5 × J × ω², ω étant la vitesse angulaire ; le fascicule d’appui pose de même Ec = J ω² / 2. L’expression avec la masse et la vitesse linéaire vaut pour la translation, et le théorème de Huygens, développé dans le fascicule, est explicitement hors programme."
    }
  ]);

  JK.quizDeLecon('pc-premiere-c1-l3', [
    {
      "enonce": "Pourquoi le document insiste-t-il sur le choix d’un état de référence pour l’énergie potentielle de pesanteur ?",
      "options": [
        "Parce que l’énergie potentielle n’est définie qu’à une constante additive près",
        "Parce que l’intensité de la pesanteur change avec l’altitude",
        "Parce que la masse du corps dépend de la position de référence",
        "Parce que l’énergie mécanique serait sinon négative"
      ],
      "correct": 0,
      "explication": "Le texte donne Epp = mgz + cte et précise que l’énergie potentielle de pesanteur est définie à une constante additive près : c’est le choix de la référence, état pour lequel Ep = 0, et de l’origine des côtes qui fixe cette constante. Il montre en revanche que la variation d’énergie potentielle, liée au travail du poids par ΔEpp = -W(P), ne dépend pas de ce choix."
    },
    {
      "enonce": "Comment le document définit-il l’énergie mécanique d’un système ?",
      "options": [
        "La variation de son énergie potentielle",
        "Le produit de son poids par son altitude",
        "La somme de son énergie cinétique et de la chaleur échangée",
        "La somme de ses énergies cinétique et potentielle"
      ],
      "correct": 3,
      "explication": "Après avoir défini séparément les deux formes, le chapitre établit l’énergie mécanique comme la somme des énergies cinétique et potentielle, Em = Ec + Ep, puis étudie sa conservation pour un système conservatif, sur des exemples comme le pendule élastique horizontal et le pendule pesant."
    },
    {
      "enonce": "Que prévoit le document pour l’énergie mécanique d’un système réel, soumis à des forces de frottement ?",
      "options": [
        "Elle demeure rigoureusement constante",
        "Elle diminue et se dégrade",
        "Elle augmente, car les frottements apportent de l’énergie",
        "Elle se convertit entièrement en énergie cinétique"
      ],
      "correct": 1,
      "explication": "Le chapitre fait découvrir la dégradation de l’énergie mécanique dans le cas de systèmes réels, et le chapitre suivant l’illustre par le cycliste ou l’automobiliste qui freine : l’énergie mécanique décroît pendant que la température des freins s’élève, la perte se retrouvant en énergie microscopique d’agitation des particules."
    }
  ]);

  JK.quizDeLecon('pc-premiere-c1-l4', [
    {
      "enonce": "Selon la convention de signe que le chapitre demande de donner, que vaut la quantité de chaleur échangée par un système qui reçoit de la chaleur du milieu extérieur ?",
      "options": [
        "Elle est nulle",
        "Elle est négative",
        "Elle est positive",
        "Elle est égale à la température du système"
      ],
      "correct": 2,
      "explication": "Le document veut que la quantité de chaleur soit exprimée algébriquement : elle est positive quand le système reçoit de la chaleur, négative quand il en cède. Elle ne se confond pas avec la température, la température absolue étant décrite comme la grandeur macroscopique qui mesure l’énergie microscopique d’agitation des particules."
    },
    {
      "enonce": "Dans quelle unité le chapitre demande-t-il d’habitude les élèves à travailler la quantité de chaleur ?",
      "options": [
        "La calorie",
        "Le watt",
        "Le kilowattheure",
        "Le joule"
      ],
      "correct": 3,
      "explication": "Le texte est explicite : l’unité système international de la quantité de chaleur est le joule ; la calorie n’est signalée que pour des raisons d’interdisciplinarité, et l’on habitue les élèves à travailler avec le joule. Le watt est l’unité de la puissance et le kilowattheure celle d’une énergie électrique."
    },
    {
      "enonce": "Que mesure la chaleur latente de changement d’état d’un corps ?",
      "options": [
        "La quantité de chaleur échangée par unité de masse au cours du changement d’état, à température constante",
        "La température à laquelle un corps pur fond",
        "La quantité de chaleur qui élève de un degré la température du corps",
        "La chaleur dégagée par une réaction chimique"
      ],
      "correct": 0,
      "explication": "Le fascicule d’appui définit la chaleur latente comme la quantité de chaleur échangée par une unité de masse au cours du changement d’état, à température constante, grandeur algébrique positive pour la fusion, la vaporisation et la sublimation ; la copie du programme la met parmi les grandeurs calorimétriques à déterminer expérimentalement. Élever de un degré la température d’un corps relève de la chaleur massique, et la chaleur dégagée par une réaction est la chaleur de réaction."
    }
  ]);

  JK.quizDeLecon('pc-premiere-c1-l5', [
    {
      "enonce": "Comment le fascicule d’appui décrit-il le champ électrique créé par une charge ponctuelle positive ?",
      "options": [
        "Il est convergent vers la charge",
        "Il est divergent à partir de la charge",
        "Il est uniforme autour de la charge",
        "Il est nul en tout point de l’axe passant par la charge"
      ],
      "correct": 1,
      "explication": "Le texte de la partie champ du chapitre P5 indique que le champ est divergent à partir d’une charge source positive et convergent vers une charge source négative ; c’est pourquoi le chapitre demande de traiter séparément, en cours, la charge ponctuelle positive puis la négative."
    },
    {
      "enonce": "Dans quelles unités le fascicule d’appui donne-t-il l’intensité du vecteur champ électrique en un point ?",
      "options": [
        "newton par coulomb ou volt par mètre",
        "coulomb ou farad",
        "joule ou watt",
        "volt par mètre seulement"
      ],
      "correct": 0,
      "explication": "Le champ est défini par la force subie par une charge placée au point, et le document signale pour son intensité les deux unités, newton par coulomb et volt par mètre. Le coulomb mesure une charge électrique et le farad une capacité."
    },
    {
      "enonce": "Pourquoi la relation E = U / d n’apparaît-elle pas dans le chapitre sur la force et le champ électrostatiques ?",
      "options": [
        "Elle ne vaut que pour un champ non uniforme",
        "Elle est réservée à la classe de terminale",
        "Elle est remplacée par la loi de Coulomb",
        "Le document demande de s’abstenir de l’évoquer ici et la renvoie au chapitre suivant"
      ],
      "correct": 3,
      "explication": "À propos du champ régnant entre deux conducteurs métalliques plans parallèles, la copie du programme demande expressément de s’abstenir d’évoquer la relation E = U / d, qui sera établie dans le chapitre suivant, celui du travail de la force électrostatique. Ici on se limite au vecteur champ, aux lignes de champ et au spectre."
    }
  ]);

  JK.quizDeLecon('pc-premiere-c1-l6', [
    {
      "enonce": "Une charge de 2 µC se déplace d’un point A où le potentiel vaut 100 V à un point B où le potentiel est nul. Que vaut le travail de la force électrostatique ?",
      "options": [
        "0,02 mJ",
        "20 mJ",
        "0,2 mJ",
        "0,2 J"
      ],
      "correct": 2,
      "explication": "Le document donne le travail de la force électrostatique entre deux points par W = q(VA - VB), soit ici 2 × 10⁻⁶ × 100 = 2 × 10⁻⁴ J, c’est-à-dire 0,2 mJ. Diviser la charge par la tension ou oublier la conversion des microcoulombs en coulombs sont les fautes qui mènent aux autres valeurs."
    },
    {
      "enonce": "Que dit le document du travail de la force électrostatique entre deux points d’un champ ?",
      "options": [
        "Il dépend de la longueur du trajet suivi par la charge",
        "Il est indépendant du chemin suivi, car la force électrostatique est conservative",
        "Il est toujours négatif",
        "Il dépend de la vitesse de la charge au départ"
      ],
      "correct": 1,
      "explication": "Le chapitre fait montrer que ce travail ne dépend pas du chemin suivi mais des seuls points de départ et d’arrivée, la force électrostatique étant, comme le poids, une force conservative. On peut alors lui faire correspondre une énergie potentielle électrostatique, avec W = -ΔEp."
    },
    {
      "enonce": "D’après le document, que permet de connaître le potentiel électrique V d’un point du champ ?",
      "options": [
        "L’énergie potentielle électrostatique d’une charge placée en ce point",
        "La force électrostatique subie en ce point par toute charge",
        "L’intensité du champ électrique en ce point",
        "La vitesse acquise par une charge qui traverse ce point"
      ],
      "correct": 0,
      "explication": "Le texte range deux grandeurs en tout point d’un champ : le vecteur champ E, qui caractérise la force électrostatique s’exerçant sur une charge, et le potentiel V, qui permet de connaître l’énergie potentielle électrostatique que possède cette charge en ce point. Le potentiel est une grandeur algébrique exprimée en volt, et les surfaces équipotentielles en sont la représentation."
    }
  ]);

  JK.quizDeLecon('pc-premiere-c1-l7', [
    {
      "enonce": "Un dipôle est traversé par un courant de 2 A sous une tension de 12 V à ses bornes. Quelle puissance électrique échange-t-il ?",
      "options": [
        "6 W",
        "14 W",
        "24 J",
        "24 W"
      ],
      "correct": 3,
      "explication": "Le document exprime la puissance échangée par un dipôle par p = u × i, soit 12 × 2 = 24, en watt ; comme la tension et l’intensité, cette puissance est algébrique. Le produit par la durée donnerait une énergie en joule, et 6 ou 14 viennent d’une confusion entre produit, quotient et somme."
    },
    {
      "enonce": "Par quelle relation le document donne-t-il l’énergie électrique échangée par un dipôle AB pendant la durée t ?",
      "options": [
        "W = U / (I × t)",
        "W = U × I",
        "W = U × I × t",
        "W = R × I × t"
      ],
      "correct": 2,
      "explication": "Le chapitre écrit sans démonstration l’énergie échangée par un dipôle sous la forme W = U × I × t, ce qui correspond à la puissance U × I multipliée par la durée. Pour un résistor, cette énergie reçue est cédée au milieu ambiant par effet Joule."
    },
    {
      "enonce": "Comment le document définit-il le rendement d’un récepteur tel qu’un moteur ?",
      "options": [
        "Le rapport de la puissance reçue à la puissance utile",
        "Le rapport de la puissance utile à la puissance totale reçue",
        "La somme de la puissance utile et de la puissance Joule",
        "Le produit de la tension par l’intensité"
      ],
      "correct": 1,
      "explication": "Le texte définit le rendement du récepteur comme le rapport de la puissance utile, la puissance autre que Joule, à la puissance totale reçue. La puissance reçue se partage entre la puissance dissipée par effet Joule, ri², et la puissance utile attachée à la force contre-électromotrice, ce qui rend ce rapport toujours inférieur à 1."
    }
  ]);

  JK.quizDeLecon('pc-premiere-c1-l8', [
    {
      "enonce": "Un condensateur de capacité 100 µF est chargé sous une tension de 5 V. Quelle est la charge de ses armatures ?",
      "options": [
        "500 µC",
        "20 µC",
        "500 C",
        "0,02 µC"
      ],
      "correct": 0,
      "explication": "Le fascicule d’appui pose que la charge du condensateur est proportionnelle à la tension entre ses armatures, Q = C × U, soit 100 × 5 = 500 microcoulombs ; la capacité s’exprime en farad. Diviser la capacité par la tension au lieu de les multiplier donne 20 µC."
    },
    {
      "enonce": "Dans le fascicule d’appui, qu’appelle-t-on la charge d’un condensateur ?",
      "options": [
        "La somme des charges portées par les deux armatures",
        "La valeur absolue de la charge accumulée sur l’une des armatures",
        "L’énergie emmagasinée par le condensateur",
        "Le courant qui traverse le condensateur pendant la charge"
      ],
      "correct": 1,
      "explication": "Le document précise que la charge du condensateur est la valeur absolue de la charge qui s’accumule sur l’une de ses armatures, et il rappelle que la charge totale des deux armatures est nulle. Le condensateur est décrit comme deux surfaces métalliques en regard, les armatures, séparées par un isolant, le diélectrique."
    },
    {
      "enonce": "Que le document réserve-t-il expressément à la classe de terminale dans l’étude des condensateurs ?",
      "options": [
        "La mise en évidence des phénomènes de charge et de décharge",
        "La définition de la capacité",
        "Les facteurs influençant la capacité d’un condensateur plan et les lois d’association",
        "La relation entre la charge et la tension"
      ],
      "correct": 3,
      "explication": "La copie du programme exige en première une présentation simplifiée, avec la relation charge-tension et les expressions de l’énergie emmagasinée données sans démonstration, et renvoie à la terminale les facteurs influençant la capacité d’un condensateur plan, les lois d’association, l’établissement de l’expression de l’énergie et les lois de variation dans le temps."
    }
  ]);

  JK.quizDeLecon('pc-premiere-c1-l9', [
    {
      "enonce": "Quelles opérations sur la tension le chapitre sur l’amplificateur opérationnel attend-il des deux montages étudiés ?",
      "options": [
        "Multiplier et diviser la tension d’entrée par un facteur fixe",
        "Additionner et soustraire deux tensions d’entrée",
        "Dériver et intégrer la tension d’entrée",
        "Redresser et lisser la tension d’entrée"
      ],
      "correct": 2,
      "explication": "Le chapitre porte sur les montages dérivateur et intégrateur, dont le texte dit qu’ils concrétisent les opérations mathématiques de dérivation et d’intégration, considérées comme inverses l’une de l’autre. L’amplification d’une tension, avec les montages direct et inverseur, relevait de la classe de seconde."
    },
    {
      "enonce": "Quel prérequis le document demande-t-il d’expliquer clairement avant d’aborder les montages à amplificateur opérationnel ?",
      "options": [
        "La relation entre l’intensité traversant un condensateur et la dérivée de sa charge par rapport au temps",
        "La loi de Coulomb",
        "Le théorème de l’énergie cinétique",
        "L’expression du champ électrique à l’intérieur d’un condensateur plan"
      ],
      "correct": 0,
      "explication": "Le texte pose comme prérequis l’explication claire de l’intensité instantanée traversant un condensateur et de la dérivée première de sa charge par rapport au temps. Il demande aussi une collaboration avec le professeur de mathématiques, l’étude de la dérivation ne débutant qu’en classe de première."
    },
    {
      "enonce": "Sur quelles tensions le document recommande-t-il de faire porter l’étude expérimentale des montages dérivateur et intégrateur ?",
      "options": [
        "Uniquement la tension du secteur",
        "Des tensions simples comme les dents de scie et les créneaux",
        "Des signaux sinusoïdaux de très haute fréquence",
        "Des impulsions lumineuses courtes"
      ],
      "correct": 1,
      "explication": "Le commentaire du chapitre exige que l’étude reste expérimentale et utilise des exemples simples de tensions, le texte citant les dents de scie et les créneaux, avec réalisation des montages et visualisation à l’oscilloscope, les relations entre tensions d’entrée et de sortie étant établies en cours après vérification en travaux pratiques."
    }
  ]);

  JK.quizDeLecon('pc-premiere-c1-l10', [
    {
      "enonce": "À la surface de l’eau d’une cuve à ondes, une onde entretenue se propage à 0,25 m/s avec une période de 20 ms. Quelle est sa longueur d’onde ?",
      "options": [
        "12,5 mm",
        "0,5 mm",
        "2 mm",
        "5 mm"
      ],
      "correct": 3,
      "explication": "Le fascicule d’appui définit la longueur d’onde comme la distance parcourue par l’onde en un temps égal à sa période temporelle et écrit λ = c × T, soit 0,25 × 0,020 = 0,005 m, c’est-à-dire 5 mm. Multiplier la célérité par la valeur de la période en secondes sans tenir compte des millièmes mène aux autres nombres."
    },
    {
      "enonce": "Que le programme demande-t-il de distinguer entre la propagation d’une onde et le déplacement d’une particule ?",
      "options": [
        "L’onde transporte de la matière, la particule transporte de l’énergie",
        "L’onde transporte de l’énergie, le déplacement d’une particule transporte de la matière",
        "Tous deux transportent de la matière sur toute la distance parcourue",
        "L’un et l’autre ne transportent rien"
      ],
      "correct": 1,
      "explication": "L’objectif du chapitre est écrit textuellement : expliquer la différence entre la propagation d’une onde, transport d’énergie, et le déplacement d’une particule, transport de matière. Le fascicule d’appui reprend cette idée pour l’onde progressive, qui se déplace sans transport de matière et véhicule une énergie."
    },
    {
      "enonce": "Dans le fascicule d’appui, à quelle condition un point de la zone d’interférence est-il une frange d’amplitude maximale ?",
      "options": [
        "Lorsque la différence de marche est un nombre impair de demi-longueurs d’onde",
        "Lorsque les deux ondes superposées ont des fréquences différentes",
        "Lorsque la différence de marche est un multiple entier de la longueur d’onde",
        "Lorsque l’une des deux ondes est amortie"
      ],
      "correct": 2,
      "explication": "Le document appelle différence de marche la différence des distances parcourues par les deux ondes et donne sans démonstration les positions des franges : l’amplitude est maximale quand les ondes arrivent en phase, c’est-à-dire quand δ = d1 - d2 vaut un multiple entier de la longueur d’onde ; un nombre impair de demi-longueurs d’onde correspond aux points d’amplitude nulle."
    }
  ]);

  JK.quizDeLecon('pc-premiere-c1-l11', [
    {
      "enonce": "Dans le fascicule d’appui, comment reconnaît-on une lentille divergente à sa forme ?",
      "options": [
        "Son épaisseur est plus grande à ses bords qu’à son centre",
        "Son épaisseur est plus grande au centre qu’aux bords",
        "Ses deux faces sont parallèles",
        "Elle est limitée par deux calottes sphériques identiques"
      ],
      "correct": 0,
      "explication": "Le document range les lentilles en deux types d’après leur épaisseur : la convergente est plus épaisse au centre que sur les bords, la divergente plus épaisse à ses bords qu’à son centre. Le programme, lui, les fait définir par leur action sur un faisceau de lumière parallèle, en travaux pratiques."
    },
    {
      "enonce": "Une lentille convergente a une distance focale de 10 cm ; un objet perpendiculaire à l’axe est placé à 20 cm avant elle. Où se forme son image ?",
      "options": [
        "À 10 cm après la lentille",
        "À 5 cm avant la lentille",
        "À 20 cm avant la lentille",
        "À 20 cm après la lentille"
      ],
      "correct": 3,
      "explication": "La relation de conjugaison du fascicule, écrite en valeurs algébriques sur un axe orienté dans le sens de propagation de la lumière, donne en centimètres inverses l’inverse de la distance image égal à 1 / 10 moins 1 / 20 : l’image se forme à 20 cm après le centre optique, renversée et de même taille que l’objet, donc recueillable sur un écran, puisque la distance lentille-objet dépasse la distance focale."
    },
    {
      "enonce": "Une lentille a une vergence de 20 dioptries. Quelle est sa distance focale ?",
      "options": [
        "20 cm",
        "200 cm",
        "5 cm",
        "0,5 cm"
      ],
      "correct": 2,
      "explication": "Le fascicule définit la vergence comme l’inverse de la distance focale et l’exprime en dioptries, la distance focale se mesurant en mètres : f = 1 / 20 = 0,05 m, soit 5 cm, valeur que le corrigé d’exercice reprend pour une loupe de 20 dioptries. Croire que la vergence est la distance focale elle-même mène aux deux propositions en 20 et 200 cm."
    }
  ]);
})();
