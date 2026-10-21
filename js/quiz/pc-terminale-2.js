/* Quiz de Physique-Chimie Terminale S (Jàngalekat) — second fichier, chapitres P9 à P15,
   une leçon = trois questions.
   Les identifiants, les intitulés et l’ordre des leçons viennent de copies du programme sénégalais
   de sciences physiques datées d’août 2008 (fascicule pédagogique, autorité non imprimée : ni page
   de garde, ni ministère, ni IGEN). Ces copies servent d’appui documentaire, pas de référence
   validée : elles ne sont jamais désignées ici comme un programme officiel.
   Quatre durées de chapitre diffèrent entre le tableau du sommaire et le relevé de chapitre, dont
   trois concernent ce fichier (P9 : 5 h au sommaire contre 4 h au relevé, P10 : 9 h contre 8 h,
   P15 : 8 h contre 6 h) ; en conséquence, aucune question de ce fichier ne porte sur une durée ou
   un nombre d’heures.
   Les notions interrogées sont prises aux objectifs, aux contenus et aux commentaires des chapitres
   P9 à P15 de ces copies. Quand une précision faisait défaut, le fascicule de physique-chimie de
   Terminale S édité par l’Inspection d’académie de Pikine-Guédiawaye en collaboration avec l’IGEF
   (février 2020) a servi d’appui ; il ne couvre que P9, P10, P12 et P14, les chapitres P11, P13 et
   P15 n’y figurent pas et reposent donc sur le seul texte du programme.
   Les énoncés, options et explications sont des contenus de démonstration auto-rédigés par un
   modèle : ils reprennent ces documents, mais aucun n’a été relu par un enseignant. Ils ne sont ni
   un sujet officiel ni une évaluation de référence. */
(function () {
  'use strict';

  JK.quizDeLecon("pc-terminale-c1-l9", [
    {
      "enonce": "Que montre l’expérience de charge à intensité constante d’un condensateur placé en série avec un conducteur ohmique ?",
      "options": [
        "Que la tension aux bornes du condensateur est proportionnelle à sa charge",
        "Que l’intensité du courant croît régulièrement au cours de la charge",
        "Que la résistance du circuit diminue à mesure que le condensateur se charge",
        "Que l’énergie emmagasinée reste constante pendant toute la charge"
      ],
      "correct": 0,
      "explication": "Le commentaire du chapitre (R, C) décrit cette expérience préalable, dans la continuité de l’étude des condensateurs faite en première : la charge à intensité constante, avec un conducteur ohmique de résistance R en série, permet de montrer la proportionnalité entre la tension aux bornes du condensateur et sa charge, et de définir la capacité C."
    },
    {
      "enonce": "Dans l’étude du dipôle (R, C), que caractérise la constante de temps ?",
      "options": [
        "La valeur de la tension finale aux bornes du condensateur",
        "La valeur de la capacité du condensateur utilisé",
        "La rapidité de l’évolution de la charge ou de la décharge",
        "La valeur de l’énergie emmagasinée en fin de charge"
      ],
      "correct": 2,
      "explication": "Le programme demande de rappeler l’expression de la constante de temps et d’en donner la signification physique, puis d’établir expérimentalement le lien entre cette constante et la durée de la charge ou de la décharge ; le fascicule d’appui reprend la même idée en écrivant que la constante de temps caractérise la rapidité de l’évolution."
    },
    {
      "enonce": "Quelle application du condensateur la liste des contenus du chapitre (R, C) cite-t-elle ?",
      "options": [
        "Le filtre radio",
        "Le flash d’un appareil photographique",
        "L’amortisseur de véhicule",
        "La cellule photovoltaïque"
      ],
      "correct": 1,
      "explication": "Les contenus du chapitre (R, C) se ferment sur une rubrique applications qui nomme le flash d’un appareil photographique. Le filtre radio appartient aux oscillations électriques forcées, l’amortisseur de véhicule aux oscillations mécaniques et la cellule photovoltaïque à l’étude de l’effet photoélectrique."
    }
  ]);

  JK.quizDeLecon("pc-terminale-c1-l10", [
    {
      "enonce": "Lorsqu’on augmente progressivement la résistance du circuit formé par un condensateur qui se décharge dans une bobine, quel passage le commentaire du chapitre décrit-il ?",
      "options": [
        "Du régime apériodique au régime pseudo périodique amorti",
        "Du régime pseudo périodique amorti au régime apériodique",
        "Du régime permanent au régime transitoire",
        "Du régime libre au régime forcé"
      ],
      "correct": 1,
      "explication": "L’étape consacrée aux oscillations libres amorties s’appuie sur la visualisation à l’oscilloscope de la décharge d’un condensateur dans une bobine résistive et précise que l’allure de la courbe dépend de la valeur de la résistance : si celle-ci augmente progressivement, on passe du régime pseudo périodique amorti aux régimes apériodiques, un résistor dissipant de l’énergie par effet joule."
    },
    {
      "enonce": "Dans le cas des oscillations électriques libres non amorties, que le programme demande-t-il d’établir pour l’énergie électrique totale ?",
      "options": [
        "Qu’elle est entièrement dissipée par effet joule",
        "Qu’elle passe par un maximum à la résonance",
        "Qu’elle diminue au cours de chaque pseudo période",
        "Qu’elle se conserve"
      ],
      "correct": 3,
      "explication": "Un objectif du chapitre est formulé ainsi : « Montrer la conservation de l’énergie électrique totale dans le cas des oscillations libres non amorties ». Le commentaire ajoute que l’on retrouve même l’équation différentielle par la méthode énergétique ; la dissipation par effet joule n’intervient que lorsque le circuit comporte une résistance, et la surtension à la résonance relève des oscillations forcées."
    },
    {
      "enonce": "D’après le commentaire du chapitre, que traduit le facteur de qualité de la courbe de résonance ?",
      "options": [
        "La valeur de la tension maximale du générateur",
        "Le déphasage entre l’intensité et la tension",
        "L’acuité de la résonance",
        "La valeur de la résistance critique"
      ],
      "correct": 2,
      "explication": "Après la détermination graphique puis théorique des fréquences limites de la bande passante, le commentaire écrit : « On définira le facteur de qualité Q qui traduit l’acuité de la résonance », puis il relie son importance à la surtension aux bornes de la self et de la capacité et fait étudier l’influence de R sur l’allure de la courbe."
    }
  ]);

  JK.quizDeLecon("pc-terminale-c1-l11", [
    {
      "enonce": "Quel cas du pendule élastique le commentaire du chapitre traite-t-il d’abord en cours ?",
      "options": [
        "Le pendule élastique vertical",
        "Le pendule élastique incliné",
        "Le pendule élastique horizontal",
        "Le pendule de torsion"
      ],
      "correct": 2,
      "explication": "Le chapitre s’ouvre sur le pendule élastique, une petite masse accrochée à un ressort élastique, et le commentaire tranche : « On traitera d’abord le cas du pendule élastique horizontal ». Les cas vertical et incliné sont examinés en exercices, le pendule simple, le pendule pesant et le pendule de torsion restant des études d’exercice ou de travaux pratiques."
    },
    {
      "enonce": "Pour un oscillateur mécanique amorti, sous quelle forme le programme fait-il intervenir l’énergie dissipée ?",
      "options": [
        "Le travail effectué par les forces de frottements",
        "La chaleur produite par effet joule dans le circuit",
        "L’énergie emmagasinée par un condensateur",
        "L’énergie de liaison du système"
      ],
      "correct": 0,
      "explication": "En exercice, l’équation des oscillations amorties se construit avec des forces de frottement fluides proportionnelles à la vitesse, et le commentaire demande de montrer que l’énergie dissipée l’est sous forme de travail effectué par les forces de frottements, en accord avec la non conservation de l’énergie mécanique signalée dans les contenus ; effet joule et condensateur appartiennent aux oscillateurs électriques."
    },
    {
      "enonce": "Quel dispositif figure parmi les applications des oscillations mécaniques citées par le chapitre ?",
      "options": [
        "Le flash d’un appareil photographique",
        "Le filtre radio",
        "Le transport d’énergie électrique",
        "Le galvanomètre balistique"
      ],
      "correct": 3,
      "explication": "La rubrique applications du chapitre en nomme trois : le mouvement d’un flotteur, le galvanomètre balistique et l’amortisseur de véhicule. Le flash vient du chapitre (R, C), le filtre radio et le transport d’énergie électrique du chapitre des oscillations électriques forcées."
    }
  ]);

  JK.quizDeLecon("pc-terminale-c1-l12", [
    {
      "enonce": "Dans l’expérience des fentes de Young, quel phénomène le commentaire place-t-il à l’origine des interférences ?",
      "options": [
        "La dispersion de la lumière par les fentes",
        "La réflexion de la lumière sur les bords des fentes",
        "L’absorption de la lumière par l’écran",
        "La diffraction de la lumière"
      ],
      "correct": 3,
      "explication": "Le chapitre, voulu simple et traité de manière expérimentale avec la seule expérience des fentes de Young, signale que « c’est la diffraction de la lumière qui est à l’origine du phénomène d’interférences ». La dispersion relève du prisme et n’est pas invoquée ici."
    },
    {
      "enonce": "Comment le chapitre explique-t-il la formation des franges observées dans l’expérience de Young ?",
      "options": [
        "Par la réflexion de deux faisceaux sur l’écran",
        "Par une superposition d’ondes lumineuses issues des fentes",
        "Par l’émission de photons par les fentes l’une après l’autre",
        "Par l’absorption sélective de la lumière par l’écran"
      ],
      "correct": 1,
      "explication": "Le commentaire s’appuie sur les acquis de première : par analogie avec les franges déjà observées sur la surface libre d’un liquide, on admet que les franges lumineuses résultent d’une superposition d’ondes lumineuses issues des fentes, ce qu’il résume en écrivant que « c’est admettre que la lumière a une nature ondulatoire »."
    },
    {
      "enonce": "Dans l’interprétation théorique du chapitre, que fait apparaître un ordre d’interférence égal à un demi-nombre entier ?",
      "options": [
        "Une frange obscure",
        "Une frange brillante",
        "La frange centrale",
        "Le champ interférentiel"
      ],
      "correct": 0,
      "explication": "Le programme inscrit la différence de marche, l’ordre d’interférence, l’interfrange et les interférences constructive et destructive dans l’interprétation théorique ; le fascicule pris comme appui définit l’ordre d’interférence par le rapport de la différence de marche à l’interfrange, avec un nombre entier pour une frange brillante, un demi-entier pour une frange sombre, et une frange centrale toujours brillante."
    }
  ]);

  JK.quizDeLecon("pc-terminale-c1-l13", [
    {
      "enonce": "Par quelle théorie le programme demande-t-il d’interpréter l’effet photoélectrique ?",
      "options": [
        "La théorie d’Einstein, avec le photon et le quantum d’énergie",
        "La théorie ondulatoire, avec la diffraction et les franges",
        "La loi de Laplace, avec la force exercée sur un courant",
        "Les postulats de Bohr, avec les niveaux d’énergie de l’atome"
      ],
      "correct": 0,
      "explication": "L’objectif du chapitre est formulé ainsi : « Interpréter l’effet photoélectrique par la théorie d’Einstein », et les contenus alignent photon, quantum d’énergie, constante de Planck, travail d’extraction et électron-volt, ainsi que les notions de fréquence seuil et de longueur d’onde seuil ; les postulats de Bohr appartiennent au chapitre suivant."
    },
    {
      "enonce": "D’après le commentaire du chapitre, comment le travail d’extraction est-il relié à la fréquence seuil ?",
      "options": [
        "Il est égal au quotient de la fréquence seuil par la constante de Planck",
        "Il est proportionnel au carré de la fréquence seuil",
        "Il est égal au produit de la constante de Planck par la fréquence seuil",
        "Il ne dépend pas de la fréquence seuil"
      ],
      "correct": 2,
      "explication": "Le commentaire demande de retenir trois expressions : le quantum d’énergie, égal à la constante de Planck multipliée par la fréquence ; le travail d’extraction, égal à cette même constante multipliée par la fréquence seuil ; et l’énergie cinétique des électrons émis, égale à la constante de Planck multipliée par la différence entre la fréquence de la lumière incidente et la fréquence seuil."
    },
    {
      "enonce": "Quel dispositif le commentaire du chapitre cite-t-il comme introduction à l’énergie solaire ?",
      "options": [
        "Le galvanomètre balistique",
        "Le détecteur de niveau",
        "La bobine d’antenne d’un poste radio",
        "La cellule photovoltaïque"
      ],
      "correct": 3,
      "explication": "Après avoir demandé de citer quelques applications pratiques de l’effet photoélectrique, le commentaire ajoute : « On mentionnera également les cellules photovoltaïques en guise d’introduction à l’énergie solaire et à ses transformations. » Le détecteur de niveau figure bien parmi les applications du chapitre, mais pas comme introduction à l’énergie solaire."
    }
  ]);

  JK.quizDeLecon("pc-terminale-c1-l14", [
    {
      "enonce": "À quelle conclusion l’analyse des spectres de raies d’émission et d’absorption mène-t-elle dans ce chapitre ?",
      "options": [
        "Que tout corps chauffé donne un spectre continu",
        "Qu’un corps atomique n’émet un rayonnement que pour certaines fréquences caractéristiques de ses atomes",
        "Qu’un atome ne peut absorber aucun rayonnement",
        "Que les raies d’émission et les raies d’absorption n’ont aucun rapport"
      ],
      "correct": 1,
      "explication": "Le chapitre débute par la mise en évidence ou l’observation de quelques spectres de raies et leur analyse doit aboutir, selon le commentaire, à la conclusion qu’un corps atomique émet un rayonnement uniquement pour certaines fréquences bien spécifiques, caractéristiques des atomes constitutifs ; cette présence de raies s’explique ensuite par une quantification des niveaux d’énergie."
    },
    {
      "enonce": "Lorsqu’un atome passe du niveau d’énergie En au niveau Ep plus bas, que donne le programme pour la fréquence du photon émis ?",
      "options": [
        "Le produit de la constante de Planck par cette fréquence vaut En plus Ep",
        "Le produit de la constante de Planck par cette fréquence vaut Ep moins En",
        "Le quotient de cette fréquence par la constante de Planck vaut En moins Ep",
        "Le produit de la constante de Planck par cette fréquence vaut En moins Ep"
      ],
      "correct": 3,
      "explication": "Le commentaire demande d’expliquer l’émission d’un photon lorsque l’atome effectue une transition entre deux niveaux En et Ep et de donner la relation liant la constante de Planck, la fréquence et les deux niveaux, avec En supérieur à Ep : l’énergie du photon est égale à la perte d’énergie de l’atome, et non à l’un des niveaux pris isolément."
    },
    {
      "enonce": "Pour l’atome d’hydrogène, le programme donne En = moins 13,6 sur n² électronvolts ; que vaut le niveau d’énergie d’ordre n = 2 ?",
      "options": [
        "− 6,8 eV",
        "− 13,6 eV",
        "− 3,4 eV",
        "− 27,2 eV"
      ],
      "correct": 2,
      "explication": "Le nombre quantique principal intervient au carré : 2 au carré vaut 4 et 13,6 divisé par 4 donne 3,4, le niveau d’ordre 2 vaut donc − 3,4 électronvolts. Le même calcul, pour n = 1, place le niveau le plus bas à − 13,6 électronvolts, valeur dont le programme fait déduire l’énergie d’ionisation de l’atome d’hydrogène."
    }
  ]);

  JK.quizDeLecon("pc-terminale-c1-l15", [
    {
      "enonce": "D’après le chapitre, que sont les rayonnements alpha émis par un radioélément ?",
      "options": [
        "Des électrons",
        "Des photons",
        "Des noyaux d’hélium",
        "Des protons"
      ],
      "correct": 2,
      "explication": "Après l’analyse d’un rayonnement radioactif à l’aide d’un champ électrique puis d’un champ magnétique, le commentaire donne composition et caractéristiques des trois rayonnements : le rayonnement alpha est formé de noyaux d’hélium, très ionisant mais peu pénétrant ; les électrons correspondent au rayonnement bêta, peu ionisant mais pénétrant, et les photons au rayonnement gamma, très pénétrant."
    },
    {
      "enonce": "Selon le commentaire du chapitre, qu’est-ce qui rend un noyau plus stable ?",
      "options": [
        "Une énergie de liaison par nucléon plus grande",
        "Un nombre de neutrons toujours égal au nombre de protons",
        "Une masse du noyau égale à la somme des masses de ses nucléons",
        "Une interaction électrostatique qui l’emporte à courte distance"
      ],
      "correct": 0,
      "explication": "Le chapitre écrit qu’un noyau est d’autant plus stable que l’énergie de liaison par nucléon est plus grande, après avoir défini cette énergie de liaison à partir de la relation d’Einstein et du défaut de masse : la masse d’un noyau est justement inférieure à la somme des masses de ses nucléons, et c’est une interaction forte attractive de très courte portée qui l’emporte à courte distance sur l’interaction électrostatique."
    },
    {
      "enonce": "Quel radioélément l’activité préparatoire du chapitre met-elle en avant, dans le laboratoire du professeur Cheikh Anta Diop de Dakar, pour dater des matériaux organiques ?",
      "options": [
        "L’uranium 235",
        "Le carbone 14",
        "Le deutérium",
        "Le tritium"
      ],
      "correct": 1,
      "explication": "L’activité préparatoire situe au laboratoire du carbone 14 du professeur Cheikh Anta Diop, à Dakar, l’usage de ce radioélément pour dater la mort de matériaux organiques, végétaux ou animaux, en remontant jusqu’à environ 40 000 ans ; l’uranium 235 et les noyaux de deutérium et de tritium apparaissent ailleurs dans le chapitre, à propos de la fission et de la fusion nucléaires."
    }
  ]);
})();
