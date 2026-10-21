/* Quiz de Physique-Chimie Terminale — chapitres P1 à P8 du programme de physique, Jàngalekat.
   Une leçon = trois questions.
   Les identifiants, les intitulés et l’ordre des huit chapitres viennent de copies dactylographiées
   du programme sénégalais de sciences physiques datées d’août 2008 (fascicule pédagogique, autorité
   non imprimée : ni page de garde, ni ministère, ni IGEN), classes de Terminale S1 et S2. La
   pagination imprimée y court de la page 20 à la page 228, signe d’un extrait d’un fascicule plus
   vaste ; ces copies ne sont pas désignées ici comme un programme officiel. Comme dans le registre
   des programmes, elles valent pour le titre et l’ordre des chapitres : le titre d’un chapitre est
   repris du tableau du sommaire quand son relevé s’arrête en fin de ligne, et la durée n’est lue que
   dans la colonne « Horaire » du sommaire, jamais dans la ligne « Durée » du chapitre, les deux se
   contredisant pour le chapitre P2 (5 h au sommaire, 4 h au relevé). Aucune question de ce fichier ne
   porte donc sur une durée ni sur un nombre d’heures. Seule la série S (S1, S2) est retenue, les
   variantes L2 du même fascicule étant exclues, et les classes de 6ᵉ et de 5ᵉ restent hors registre
   faute de liste trouvée. Les énoncés s’appuient sur les tableaux « objectifs / contenus / activités »
   et sur les commentaires de ces huit chapitres, qui sont tous développés : aucune leçon n’a été
   réduite à un simple intitulé. Le fascicule de Terminale conservé dans le même dossier ne vaut
   qu’en appui, jamais en référence validée, et il n’a pas pu être lu ici : ses pages sont des images
   sans couche de texte.
   Les énoncés, options et explications sont des contenus de démonstration rédigés par un modèle,
   non relus par un enseignant : ils ne sont ni un sujet officiel ni une évaluation de référence.
   Les chapitres P9 à P15 et la chimie C1 à C9 sont rédigés dans d’autres fichiers. */
(function () {
  'use strict';

  JK.quizDeLecon("pc-terminale-c1-l1", [
    {
      "enonce": "Comment le chapitre P1 définit-il le vecteur vitesse instantanée d’un mobile ?",
      "options": [
        "Comme le quotient du vecteur position par le temps écoulé",
        "Comme la dérivée première du vecteur position par rapport au temps",
        "Comme la dérivée seconde du vecteur position par rapport au temps",
        "Comme une grandeur qui ne dépend pas du référentiel choisi"
      ],
      "correct": 1,
      "explication": "Le commentaire du chapitre P1 reprend l’approche de la classe de seconde pour aboutir à cette définition : le vecteur vitesse instantanée est la dérivée première du vecteur position par rapport au temps. Sa dérivée seconde donne l’accélération, et le mouvement étant relatif, la vitesse dépend du référentiel."
    },
    {
      "enonce": "Un véhicule part du repos sur une route rectiligne en sortant de Dakar et roule avec une accélération constante de 2,0 m/s². Que vaut l’intensité de sa vitesse au bout de 5 s ?",
      "options": [
        "2,5 m/s",
        "20 m/s",
        "50 m/s",
        "10 m/s"
      ],
      "correct": 3,
      "explication": "Pour un mouvement rectiligne uniformément varié, la loi horaire v = v0 + a × t établie au chapitre P1 donne 0 + 2,0 × 5 = 10 m/s. Le calcul x = 0,5 × a × t² porte sur la distance parcourue, soit 25 m et non une vitesse, et diviser ou multiplier les mêmes nombres autrement ne correspond à aucune loi horaire du chapitre."
    },
    {
      "enonce": "Dans l’étude d’un mouvement curviligne, que traduit l’accélération normale ?",
      "options": [
        "Le changement de direction de la vitesse",
        "La variation de l’intensité de la vitesse",
        "La valeur moyenne de la vitesse sur le parcours",
        "Le choix du référentiel d’étude"
      ],
      "correct": 0,
      "explication": "Le chapitre P1 demande de donner les expressions des accélérations tangentielle et normale : la composante normale, perpendiculaire à la vitesse, rend compte du tournant de la trajectoire et fait intervenir le carré de la vitesse ainsi que le rayon de courbure ; la variation de l’intensité de la vitesse, elle, revient à la composante tangentielle."
    }
  ]);

  JK.quizDeLecon("pc-terminale-c1-l2", [
    {
      "enonce": "Où le chapitre P2 situe-t-il le domaine de validité de la relation fondamentale de la dynamique ?",
      "options": [
        "Dans tout référentiel, y compris un référentiel accéléré",
        "Dans le référentiel terrestre, sans aucune approximation",
        "Dans un référentiel galiléen",
        "Seulement dans un référentiel en mouvement rectiligne accéléré"
      ],
      "correct": 2,
      "explication": "Le commentaire insiste sur ce point : la relation fondamentale de la dynamique est un postulat dont la validité est liée à un référentiel galiléen, notion introduite par le principe de l’inertie. Le référentiel géocentrique de Coriolis ou le référentiel terrestre ne sont tenus pour galiléens qu’avec des approximations et des limites d’utilisation précisées au chapitre."
    },
    {
      "enonce": "Un chariot de 4,0 kg roule en ligne droite à 1,5 m/s. Que vaut l’intensité de sa quantité de mouvement ?",
      "options": [
        "6,0 kg·m/s",
        "2,7 kg·m/s",
        "4,5 kg·m/s",
        "9,0 kg·m/s"
      ],
      "correct": 0,
      "explication": "Le chapitre P2 définit le vecteur quantité de mouvement d’un point matériel à partir de sa masse et de sa vitesse : 4,0 × 1,5 = 6,0 kg·m/s. L’énergie cinétique, 0,5 × m × v², vaudrait 4,5 joules pour ce chariot ; diviser la masse par la vitesse donne 2,7 et multiplier la masse par le carré de la vitesse donne 9,0, deux calculs sans grandeur correspondante au chapitre."
    },
    {
      "enonce": "Que dit le principe de l’inertie, première loi de Newton, rappelé au chapitre P2 ?",
      "options": [
        "Un mobile sans moteur finit toujours par s’arrêter",
        "La vitesse d’un système varie dès qu’une force existe, même compensée",
        "Tout corps en mouvement accélère sous l’effet de son poids",
        "Si les forces appliquées à un système se compensent, son centre d’inertie garde une vitesse constante, éventuellement nulle"
      ],
      "correct": 3,
      "explication": "Le principe de l’inertie, illustré au banc à coussin d’air, énonce qu’un système dont les actions extérieures se compensent conserve sa vitesse : le centre d’inertie reste immobile ou poursuit un mouvement rectiligne uniforme. C’est l’existence d’une force non compensée qui, seule, fait varier la vitesse du centre d’inertie."
    }
  ]);

  JK.quizDeLecon("pc-terminale-c1-l3", [
    {
      "enonce": "Une bille est lâchée sans vitesse initiale sur la ligne de plus grande pente d’un plan incliné de 30° sur l’horizontale, frottements négligés. Avec g = 9,8 en unités S.I., que vaut l’accélération du mouvement, en m/s² ?",
      "options": [
        "9,8",
        "8,5",
        "2,45",
        "4,9"
      ],
      "correct": 3,
      "explication": "L’activité préparatoire du chapitre P3 fait établir l’expression théorique de l’accélération d’une chute ralentie sur un plan incliné sans frottement, g × sin(30°), soit 9,8 × 0,5 = 4,9. La valeur 9,8 est celle d’une chute libre verticale, et 9,8 × cos(30°) = 8,5 correspond à l’autre composante du poids."
    },
    {
      "enonce": "Une bille roule horizontalement à 5,0 m/s au bord d’une table et retombe d’une hauteur de 4,9 m. Avec g = 9,8, quelle distance horizontale parcourt-elle avant d’atteindre le sol ?",
      "options": [
        "2,5 m",
        "5,0 m",
        "9,8 m",
        "10 m"
      ],
      "correct": 1,
      "explication": "La chute verticale donne h = 0,5 × g × t², soit t = 1 s pour h = 4,9 m avec g = 9,8 ; le mouvement horizontal reste uniforme, donc la distance cherchée vaut 5,0 × 1 = 5,0 m. Le chapitre P3 range ce genre de trajectoire parmi les chutes paraboliques dans le champ de pesanteur uniforme."
    },
    {
      "enonce": "Quel appareil le chapitre P3 cite-t-il comme application de la déflexion électrique d’une particule chargée dans un champ électrique uniforme ?",
      "options": [
        "Le haut-parleur",
        "Le cyclotron",
        "L’oscillographe cathodique",
        "La balance de Cotton"
      ],
      "correct": 2,
      "explication": "Le document rattache l’étude des mouvements paraboliques dans le champ électrique uniforme à la déflexion électrique et à son usage dans l’oscillographe cathodique. Le haut-parleur et la balance de Cotton relèvent de l’action d’un champ magnétique sur un courant, le cyclotron du mouvement d’une particule chargée dans un champ magnétique."
    }
  ]);

  JK.quizDeLecon("pc-terminale-c1-l4", [
    {
      "enonce": "Le chapitre P4 fait établir l’expression g = g0 × RT² / r² de l’intensité du champ de pesanteur terrestre, r étant la distance au centre de la Terre. Que vaut g pour r = 2 RT ?",
      "options": [
        "Un quart de g0",
        "La moitié de g0",
        "Deux fois g0",
        "Quatre fois g0"
      ],
      "correct": 0,
      "explication": "Le rapport RT² / r² vaut RT² / (2 RT)² = 1 / 4, donc le champ vaut un quart de sa valeur au sol : la distance au centre est doublée et l’intensité diminue avec le carré de cette distance. Les expressions g = G × MT / r² et g = g0 × RT² / r² sont les deux formes données par le chapitre."
    },
    {
      "enonce": "Le chapitre P4 établit la troisième loi de Kepler sous la forme T² / r³ = constante. Si le rayon d’une orbite circulaire est doublé, que devient la période du satellite ?",
      "options": [
        "Elle est multipliée par 2",
        "Elle est multipliée par 4",
        "Elle est multipliée par environ 2,8",
        "Elle est multipliée par environ 1,4"
      ],
      "correct": 2,
      "explication": "Le rayon étant doublé, r³ est multiplié par 8, donc T² l’est aussi par 8 et la période par la racine de 8, soit environ 2,8. Ne pas cuber le rayon conduirait à la racine de 2, environ 1,4, et oublier la racine carrée conduirait à 8."
    },
    {
      "enonce": "Comment le chapitre P4 caractérise-t-il un satellite géostationnaire ?",
      "options": [
        "Il traverse deux fois par jour la verticale du même lieu",
        "Il reste fixe par rapport à un point de la surface de la Terre",
        "Sa période est très inférieure à celle de la rotation terrestre",
        "Il échappe définitivement à l’attraction terrestre"
      ],
      "correct": 1,
      "explication": "Un satellite géostationnaire tourne avec la Terre : sa période est égale à celle de la rotation terrestre, ce qui le maintient fixe au-dessus du même point, d’où l’importance des satellites de communications soulignée par le chapitre, pour la télévision suivie au Sénégal comme pour les liaisons téléphoniques. Échapper définitivement à l’attraction terrestre relèverait de la vitesse minimale de libération, et une période très courte décrirait une orbite ordinaire."
    }
  ]);

  JK.quizDeLecon("pc-terminale-c1-l5", [
    {
      "enonce": "Que permet de lire un spectre magnétique obtenu avec de la limaille de fer, selon le chapitre P5 ?",
      "options": [
        "La valeur de l’intensité du champ en chaque point",
        "La topographie du champ et, localement, une direction privilégiée",
        "Le signe électrique des pôles de l’aimant",
        "La force de Laplace exercée sur chaque grain de limaille"
      ],
      "correct": 1,
      "explication": "Le document explique qu’un spectre magnétique donne la topographie d’un champ et fait découvrir localement une direction privilégiée ; la position d’une aiguille exploratrice précise ensuite le sens des lignes de champ, ce qui amène à caractériser le champ en un point par le vecteur B. Seul un teslamètre mesure l’intensité."
    },
    {
      "enonce": "En un point, deux champs magnétiques de même direction et de même sens valent 20 µT et 30 µT. Que donne la loi de composition des champs apprise au chapitre P5 ?",
      "options": [
        "10 µT",
        "25 µT",
        "30 µT",
        "50 µT"
      ],
      "correct": 3,
      "explication": "La loi de composition des champs faite au chapitre ajoute vectoriellement les deux champs : de même direction et de même sens, ils donnent 20 + 30 = 50 µT. La soustraction, qui supposerait des sens opposés, donnerait 10 µT, et faire la moyenne des deux valeurs ou garder la plus grande ne correspond à aucune composition."
    },
    {
      "enonce": "Quel dispositif le chapitre P5 propose-t-il de montrer pour obtenir un spectre de champ magnétique uniforme ?",
      "options": [
        "Une spire circulaire parcourue par un courant",
        "Un fil rectiligne parcouru par un courant",
        "Les branches d’un aimant en U",
        "Un aimant droit près de l’un de ses pôles"
      ],
      "correct": 2,
      "explication": "Le document demande de réaliser des spectres de champ dus aux aimants et de montrer en particulier un spectre de champ uniforme avec le champ régnant entre les branches d’un aimant en U : le vecteur B y garde même direction, même sens et même valeur. Autour d’un fil, d’une spire ou d’un pôle d’aimant droit, les lignes de champ ne sont pas parallèles et l’intensité change d’un point à l’autre."
    }
  ]);

  JK.quizDeLecon("pc-terminale-c1-l6", [
    {
      "enonce": "Dans un champ magnétique uniforme, que fait la force de Lorentz sur l’énergie cinétique de la particule chargée qui la subit ?",
      "options": [
        "Elle l’augmente régulièrement",
        "Elle la diminue par frottement magnétique",
        "Elle ne travaille pas : l’énergie cinétique reste constante",
        "Elle l’annule dès que la trajectoire devient circulaire"
      ],
      "correct": 2,
      "explication": "La force de Lorentz est perpendiculaire à la vitesse de la particule : son travail est nul, l’intensité de la vitesse et l’énergie cinétique se conservent. L’application de la relation fondamentale de la dynamique fait alors conclure le chapitre à un mouvement plan, circulaire et uniforme."
    },
    {
      "enonce": "Une particule entre dans un champ magnétique uniforme avec une vitesse perpendiculaire au champ. Le document fait déduire l’expression du rayon de la trajectoire. Que devient ce rayon si la vitesse est doublée, le champ et la particule restant les mêmes ?",
      "options": [
        "Il double",
        "Il est divisé par deux",
        "Il est multiplié par quatre",
        "Il ne change pas"
      ],
      "correct": 0,
      "explication": "Le rayon de la trajectoire circulaire est proportionnel à la vitesse de la particule, la masse, la charge et le champ restant les mêmes : deux fois plus de vitesse donne deux fois plus de rayon. La période de rotation, elle, ne dépend pas de la vitesse, ce que le chapitre fait vérifier avec les bobines d’Helmholtz en faisant varier la tension d’accélération des électrons."
    },
    {
      "enonce": "Le chapitre P6 se termine par des applications du mouvement d’une particule chargée dans un champ magnétique : laquelle cite-t-il ?",
      "options": [
        "La balance de Cotton",
        "Le haut-parleur",
        "L’oscillographe cathodique",
        "Le spectrographe de masse"
      ],
      "correct": 3,
      "explication": "Le chapitre se termine par le spectrographe de masse, le cyclotron, le filtre de vitesse et la télévision, la déflexion magnétique servant entre autres à déterminer le signe et la valeur de la charge d’une particule. La balance de Cotton et le haut-parleur viennent du chapitre sur la loi de Laplace, et l’oscillographe cathodique est l’application de la déflexion électrique."
    }
  ]);

  JK.quizDeLecon("pc-terminale-c1-l7", [
    {
      "enonce": "Un conducteur rectiligne de 20 cm, parcouru par un courant de 4,0 A, est placé perpendiculairement à un champ magnétique uniforme de 0,50 T. Que vaut l’intensité de la force de Laplace ?",
      "options": [
        "2,0 N",
        "10 N",
        "0,80 N",
        "0,40 N"
      ],
      "correct": 3,
      "explication": "Le chapitre P7 fait établir l’expression vectorielle de la force de Laplace puis en déterminer les caractéristiques : dans un champ uniforme, et pour un conducteur perpendiculaire aux lignes de champ, la force vaut B × I × L, soit 0,50 × 4,0 × 0,20 = 0,40 N. Oublier la longueur donne 2,0, la diviser au lieu de la multiplier donne 10, et oublier le champ laisse 0,80."
    },
    {
      "enonce": "Comment est orientée la force de Laplace qu’un champ magnétique uniforme exerce sur un conducteur rectiligne parcouru par un courant ?",
      "options": [
        "Selon la direction du champ magnétique",
        "Perpendiculairement à la fois au conducteur et au champ magnétique",
        "Selon la direction du conducteur",
        "Parallèlement à la fois au conducteur et au champ magnétique"
      ],
      "correct": 1,
      "explication": "L’expression vectorielle demandée au chapitre P7 fait intervenir un produit vectoriel : la force est perpendiculaire au conducteur portant le courant et au vecteur B. Le sens se lit avec une règle d’orientation unique et bien maîtrisée, main droite ou bonhomme d’Ampère, le document conseillant de s’en tenir à une ou deux règles."
    },
    {
      "enonce": "Quel appareil, cité en tête du chapitre P7, convertit une tension alternative du domaine audible en énergie mécanique par l’action d’un champ magnétique sur un courant ?",
      "options": [
        "Le haut-parleur",
        "Le spectrographe de masse",
        "Le cyclotron",
        "La sonde de Hall"
      ],
      "correct": 0,
      "explication": "Le chapitre s’ouvre sur le haut-parleur, transducteur électro-acoustique dont la membrane solidaire d’une bobine est entraînée par l’action du champ magnétique sous l’effet d’un courant alternatif du domaine audible. La sonde de Hall, pourtant citée parmi les mêmes applications, sert à explorer un champ magnétique et ne produit aucun son ; le spectrographe de masse et le cyclotron relèvent du mouvement d’une particule chargée dans un champ magnétique."
    }
  ]);

  JK.quizDeLecon("pc-terminale-c1-l8", [
    {
      "enonce": "Dans l’expérience fondamentale du chapitre P8, un aimant droit approché puis éloigné d’une bobine reliée à un microampèremètre, quelle est la cause du courant induit ?",
      "options": [
        "La variation du flux magnétique à travers la bobine",
        "La présence d’un champ magnétique constant dans la bobine",
        "La résistance de la bobine, qui chauffe le circuit",
        "L’annulation du courant dans un générateur placé en série"
      ],
      "correct": 0,
      "explication": "Le document interprète le phénomène en admettant que la cause du courant induit est une variation du flux magnétique à travers la bobine, d’où le choix d’un circuit fermé ne comportant pas de générateur : aimant immobile, l’aiguille ne bouge pas ; aimant approché ou éloigné, le flux change et l’aiguille dévie."
    },
    {
      "enonce": "Que dit la loi de Lenz, dont le chapitre P8 demande de donner la signification du signe moins ?",
      "options": [
        "Le courant induit favorise la variation de flux qui le crée",
        "Le courant induit est indépendant du mouvement de l’aimant",
        "La force électromotrice induite s’oppose à la variation de flux qui lui donne naissance",
        "Le flux magnétique propre d’une bobine est proportionnel à sa résistance"
      ],
      "correct": 2,
      "explication": "Le signe moins de la force électromotrice induite traduit l’opposition à la cause : le courant induit et la tension qu’il produit s’opposent à la variation de flux qui les fait naître. C’est pourquoi le chapitre montre expérimentalement que la bobine s’oppose à l’établissement du courant comme à sa rupture, la rupture provoquant une surtension."
    },
    {
      "enonce": "Une bobine d’inductance 0,50 H et de résistance 100 ohms est reliée à un échelon de tension. Que vaut la constante de temps du dipôle (R, L) ?",
      "options": [
        "50 ms",
        "5,0 ms",
        "200 ms",
        "0,05 ms"
      ],
      "correct": 1,
      "explication": "Le chapitre donne la constante de temps du dipôle (R, L) sous la forme L divisé par R, soit 0,50 ÷ 100 = 0,005 s, c’est-à-dire 5,0 ms. Multiplier les deux grandeurs ou inverser le rapport correspond à une autre grandeur ; le document fait discuter l’influence de R et de L sur la durée du régime transitoire d’établissement ou de rupture du courant."
    }
  ]);
})();
