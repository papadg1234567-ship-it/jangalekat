/* Quiz des leçons de géographie de la classe de Seconde — fichier 1 sur 2 :
   première partie « La Terre dans le système solaire », deuxième partie chapitre I
   « Continents, océans et mers » et chapitre II « Les climats de la Terre ».
   Une leçon = un quiz = 3 questions. Les leçons déjà entamées dans herites.js
   (c1-l2, c3-l4) sont complétées ici. Contenu auto-rédigé par Jàngalekat,
   non relu par un enseignant. */
(function () {
  'use strict';

  JK.quizDeLecon("geo-seconde-c1-l1", [
    {
      enonce: "Que compte la leçon 1 parmi les moyens de connaissance de l’Univers ?",
      options: [
        "L’observation visuelle, les instruments comme la lunette et le télescope, les sondes et satellites, et les moyens modernes de mesure utilisés en géographie",
        "Seule l’observation visuelle à l’œil nu, complétée par le globe terrestre",
        "Exclusivement les satellites et le GPS, le reste appartenant à l’astronomie",
        "Le planisphère et les coordonnées géographiques calculées en TP"
      ],
      correct: 0,
      explication: "La fiche énumère quatre niveaux : observation visuelle, instruments (lunette, télescope), sondes et satellites, puis les moyens modernes de mesure comme la télédétection, le GPS et les systèmes d’information géographique. Réduire la leçon aux seuls satellites est un contresens : l’inventaire complet est attendu."
    },
    {
      enonce: "D’après l’exercice de la fiche, à quoi sert concrètement le GPS en géographie ?",
      options: [
        "Il mesure la salinité moyenne des eaux marines",
        "Il donne une position précise sur le terrain et équipe les relevés de terrain et les SIG",
        "Il remplace le télescope pour observer les planètes",
        "Il prévoit la date de la saison des pluies"
      ],
      correct: 1,
      explication: "Le corrigé de la fiche associe le GPS au positionnement de terrain et aux SIG ; le satellite d’observation (télédétection) sert, lui, à cartographier cultures, urbanisation ou inondations. Le GPS n’est ni un instrument astronomique ni un appareil météo."
    },
    {
      enonce: "Laquelle de ces leçons n’appartient PAS à la géographie de Seconde d’après la Vigilance de la fiche ?",
      options: [
        "La leçon sur les mouvements de la Terre",
        "Le TP sur les océans, les mers et les courants",
        "Une leçon sur la population ou les villes",
        "La leçon sur les eaux marines"
      ],
      correct: 2,
      explication: "Le programme de Seconde est une année de géographie physique : les leçons sur la population, l’agriculture ou les villes relèvent de la Première. Les trois autres propositions sont bien des leçons de cette année, consacrée à la Terre, aux climats, aux reliefs et aux régions naturelles."
    }
  ]);

  JK.quizDeLecon("geo-seconde-c1-l2", [
    {
      enonce: "Qu’expliquent la translation autour du Soleil (environ 365,25 jours) combinée à l’inclinaison de l’axe de rotation ?",
      options: [
        "L’alternance du jour et de la nuit",
        "La succession des saisons et la variation de la durée du jour selon la latitude",
        "Les marées et les courants marins",
        "Le décalage des fuseaux horaires"
      ],
      correct: 1,
      explication: "La translation, combinée à l’inclinaison de l’axe, donne les saisons et la variation de la durée du jour selon la latitude. Le jour/nuit et les fuseaux horaires relèvent de la rotation (environ 24 heures) : c’est le piège classique de cette leçon."
    },
    {
      enonce: "Comment la fiche présente-t-elle les durées de rotation et de translation (environ 24 heures, environ 365,25 jours) ?",
      options: [
        "Comme des ordres de grandeur à vérifier dans le manuel",
        "Comme des valeurs exactes à réciter sans contrôle",
        "Comme des dates inscrites au programme de 2004",
        "Comme des mesures réalisées à Dakar"
      ],
      correct: 0,
      explication: "La Vigilance est explicite : durées, salinité moyenne et superficies sont des ordres de grandeur que les élèves doivent vérifier dans leur manuel. Les réciter comme des certitudes absolues est l’erreur que la fiche signale."
    }
  ]);

  JK.quizDeLecon("geo-seconde-c1-l3", [
    {
      enonce: "Que mesure la latitude d’un lieu ?",
      options: [
        "La distance angulaire au nord ou au sud de l’équateur, de 0° à 90°, le long de cercles parallèles à l’équateur",
        "L’angle à l’est ou à l’ouest du méridien de Greenwich, de 0° à 180°",
        "La distance en kilomètres jusqu’à l’équateur, mesurée sur la carte",
        "L’altitude du lieu au-dessus du niveau de la mer"
      ],
      correct: 0,
      explication: "Les parallèles sont des cercles imaginaires parallèles à l’équateur ; la latitude se compte de 0° à 90° vers le nord ou le sud. La deuxième définition est celle de la longitude, et la latitude n’est pas une distance en kilomètres."
    },
    {
      enonce: "Dans quel cadre le programme de Seconde place-t-il les coordonnées géographiques ?",
      options: [
        "Dans une leçon de calcul pur, détachée du travail de carte",
        "Dans le TP de la leçon 6 sur les courants marins",
        "Dans le TP de la leçon 3, avec les formes de représentation de la Terre : les coordonnées sont un outil, pas une définition",
        "Dans la leçon 8, parmi les facteurs du climat"
      ],
      correct: 2,
      explication: "La fiche est nette : les coordonnées géographiques sont un outil, pas une définition ; le programme les place dans le TP de représentation de la Terre, avec les projections, en 3 heures. Les réciter sans les utiliser sur une carte manque l’objectif de la leçon."
    },
    {
      enonce: "Un camarade dit : « la longitude indique combien de degrés séparent un lieu de l’équateur ». Que lui répond-on d’après la fiche ?",
      options: [
        "Il a raison, mais seulement dans l’hémisphère sud",
        "C’est la latitude qui se mesure par rapport à l’équateur ; la longitude se mesure par rapport au méridien d’origine, vers l’est ou l’ouest",
        "La longitude se mesure du nord au sud, comme la latitude",
        "La longitude s’exprime de 0° à 90° comme la latitude"
      ],
      correct: 1,
      explication: "Échanger latitude et longitude est signalé comme l’erreur la plus fréquente en étude de situation. La longitude se mesure de 0° à 180° par rapport à Greenwich : Dakar est à environ 14,7° de latitude nord et 17,4° de longitude ouest."
    }
  ]);

  JK.quizDeLecon("geo-seconde-c2-l1", [
    {
      enonce: "Que retient la leçon 4 sur la répartition des terres et des mers à la surface du globe ?",
      options: [
        "Elle est inégale : l’hémisphère nord porte la plus grande part des continents et le Pacifique est le plus vaste océan",
        "Elle est équilibrée entre les deux hémisphères",
        "Les terres se concentrent surtout autour du pôle Sud",
        "L’océan Pacifique est le plus petit des océans"
      ],
      correct: 0,
      explication: "La fiche décrit une répartition inégale : continents surtout dans l’hémisphère nord, Pacifique le plus vaste, et le Sénégal qui regarde l’océan Atlantique. Parler d’équilibre entre hémisphères est l’image fausse la plus courante."
    },
    {
      enonce: "Quelle compétence exigible du chapitre I la leçon 4 couvre-t-elle directement ?",
      options: [
        "Appliquer la coupe topographique à l’étude du relief",
        "Construire un diagramme ombrothermique",
        "Connaître la répartition et la localisation des continents et des océans",
        "Compter les mois arides sur une carte"
      ],
      correct: 2,
      explication: "La fiche donne deux compétences exigibles pour le chapitre I ; celle de la leçon 4 est la répartition et la localisation des continents et des océans, complétée par la composition des eaux marines en leçon 5. La coupe topographique relève du TP de leçon 16, le diagramme du TP de leçon 10."
    },
    {
      enonce: "Vers quel océan le Sénégal regarde-t-il, d’après la fiche ?",
      options: [
        "L’océan Indien",
        "L’océan Pacifique",
        "L’océan Glacial arctique",
        "L’océan Atlantique"
      ],
      correct: 3,
      explication: "La fiche inscrit le Sénégal sur la façade atlantique : Dakar, à environ 14,7° N et 17,4° O, est ouverte sur l’Atlantique. Le piège vient de l’étude de situation : sans repérer le méridien de Greenwich, on place mal le pays."
    }
  ]);

  JK.quizDeLecon("geo-seconde-c2-l2", [
    {
      enonce: "Qu’est-ce que la salinité de l’eau de mer ?",
      options: [
        "La masse de sels dissous dans un litre d’eau de mer, exprimée en grammes par litre ou en pour mille",
        "La température moyenne des eaux de surface",
        "La hauteur moyenne des vagues près des côtes",
        "La quantité d’eau douce apportée par les fleuves"
      ],
      correct: 0,
      explication: "C’est la définition de la fiche : une masse de sels par litre, en g/L ou ‰. La salinité moyenne est de l’ordre de 35 g/L, un ordre de grandeur à vérifier dans le manuel."
    },
    {
      enonce: "Que désigne l’expression « les mouvements de la mer » et quelle compétence leur est associée dans le chapitre I ?",
      options: [
        "Les marées seulement ; le programme demande de savoir les calculer",
        "Les vagues, les courants et les marées ; le programme demande de comprendre leurs conséquences sur le climat des côtes et la navigation",
        "Les mouvements de la Terre appliqués aux océans",
        "La seule houle, sans lien avec le climat"
      ],
      correct: 1,
      explication: "La définition de la fiche est un trio — vagues, courants, marées — et la compétence exigible est : « Comprendre les mouvements de la mer et leurs conséquences ». Réduire l’expression aux marées est une amputation fréquente des copies."
    },
    {
      enonce: "Pourquoi les eaux marines sont-elles salées, et cette salinité est-elle identique partout ?",
      options: [
        "Le sel vient du fond océanique volcanique et la salinité ne varie jamais",
        "L’eau devient salée à cause des marées qui broient les roches",
        "Les roches continentales érodées apportent en continu des sels dissous ; la salinité moyenne, de l’ordre de 35 g/L, varie selon l’évaporation, les apports de fleuves et les glaces",
        "La salinité est exactement de 35 g/L dans toutes les mers du globe"
      ],
      correct: 2,
      explication: "La fiche relie la salure à l’érosion continue des roches continentales et précise des écarts locaux liés à l’évaporation, aux fleuves et aux glaces. Écrire « exactement 35 g/L partout » transforme un ordre de grandeur moyen en loi immuable : c’est le piège signalé."
    }
  ]);

  JK.quizDeLecon("geo-seconde-c2-l3", [
    {
      enonce: "Que doit réaliser l’élève au TP de la leçon 6 ?",
      options: [
        "Une coupe topographique du relief côtier",
        "Un diagramme ombrothermique de Dakar",
        "Une carte de la répartition des climats du monde",
        "Un planisphère schématique des océans, des mers et des courants marins"
      ],
      correct: 3,
      explication: "C’est exactement le libellé de la leçon 6 (1 h) : construire un planisphère schématique portant océans, mers et courants. Les trois autres opérations viennent d’autres leçons : coupe en leçon 16, diagramme et carte des climats en leçon 10."
    },
    {
      enonce: "Quelle distinction la fiche pose-t-elle entre planisphère et globe ?",
      options: [
        "Le planisphère est une carte du monde entier ; le globe est la seule représentation sans déformation des formes, mais difficile à imprimer",
        "Le globe déforme plus qu’un planisphère, c’est pourquoi on le préfère sur papier",
        "Les deux sont équivalents dès qu’on annonce la projection",
        "Un planisphère est une carte d’un seul océan"
      ],
      correct: 0,
      explication: "La définition est celle de la fiche : planisphère = carte du monde entier ; globe = seule forme sans déformation, mais impossible à imprimer. Croire qu’un planisphère ne déforme rien est le contresens que la leçon sur les projections combat."
    },
    {
      enonce: "Que relève le rapport d’enquête cité par la fiche au sujet de la leçon 6 ?",
      options: [
        "Que toutes les classes la terminent avant le conseil de février",
        "Que les élèves la réussissent sans séance de graphiques supplémentaire",
        "Que beaucoup de classes s’arrêtent avant ou autour de cette leçon",
        "Que le TP a été remplacé par un exposé d’élèves dans le programme"
      ],
      correct: 2,
      explication: "La propriété est explicitement notée : le TP de leçon 6 est une compétence de construction graphique notée, et le rapport montre que beaucoup de classes s’arrêtent avant ou autour de cette leçon. Rien n’indique une suppression : le constat porte sur l’exécution réelle des programmes."
    }
  ]);

  JK.quizDeLecon("geo-seconde-c3-l1", [
    {
      enonce: "Qu’est-ce que la troposphère ?",
      options: [
        "La couche la plus basse de l’atmosphère, où se forment les phénomènes météorologiques",
        "La couche où se trouve la couche d’ozone",
        "L’enveloppe gazeuse entière de la Terre",
        "La couche d’air en contact direct avec les océans uniquement"
      ],
      correct: 0,
      explication: "L’atmosphère est l’enveloppe gazeuse de la Terre ; la troposphère en est la couche la plus basse, siège de la météo. La couche d’ozone se situe dans la stratosphère : confondre les deux est l’erreur visée."
    },
    {
      enonce: "Quelle place la leçon 7 occupe-t-elle dans le programme de Seconde ?",
      options: [
        "Elle clôt la troisième partie, après les régions polaires",
        "Elle ouvre le chapitre II « Les climats de la Terre », après le TP de planisphère des océans et courants de la leçon 6",
        "Elle ouvre le chapitre III « Les reliefs de la Terre »",
        "Elle suit la leçon 10 dans le même chapitre"
      ],
      correct: 1,
      explication: "Le chapitre II compte quatre séances : leçon 7 (atmosphère, 1 h), leçon 8 (facteurs, 3 h), leçon 9 (éléments, 1 h), leçon 10 (TP carte des climats et diagrammes, 2 h). La leçon 7 arrive juste après le TP de leçon 6 qui clôt le chapitre I."
    },
    {
      enonce: "Un élève écrit : « la température baisse avec l’altitude dans toute l’atmosphère ». Que corrige la fiche ?",
      options: [
        "Rien : c’est exact dans toutes les couches",
        "La température monte dans la troposphère et baisse partout au-dessus",
        "La température baisse dans la troposphère mais remonte dans la stratosphère, où se trouve la couche d’ozone",
        "La température reste constante au-dessus de la troposphère"
      ],
      correct: 2,
      explication: "La propriété de la fiche est précise : la structure verticale commande la lecture du climat — baisse dans la troposphère, remontée dans la stratosphère. Écrire une baisse générale est une simplification qui devient une erreur dès qu’on parle de l’ozone."
    }
  ]);

  JK.quizDeLecon("geo-seconde-c3-l2", [
    {
      enonce: "Que sont les facteurs du climat d’après la leçon 8 ?",
      options: [
        "Ce que l’on mesure : température, précipitations, pression, vent",
        "Ce qui explique les mesures : latitude, altitude, distance à la mer, courants marins, exposition des versants et couvert végétal",
        "Les saisons telles qu’elles apparaissent sur un diagramme",
        "Les lignes d’égales pluies sur une carte"
      ],
      correct: 1,
      explication: "La fiche sépare deux vocabulaires : les facteurs expliquent, les éléments se mesurent. Rendre une liste de mesures quand on demande les facteurs est le contresens le plus fréquent de cette leçon de 3 heures."
    },
    {
      enonce: "Quel est le facteur principal du climat d’après la fiche, et pourquoi ?",
      options: [
        "La latitude, car l’angle des rayons solaires diminue de l’équateur vers les pôles, réduisant l’énergie reçue",
        "L’altitude, car elle rafraîchit l’air de façon générale",
        "La distance à la mer, car elle règle seule les températures",
        "Le couvert végétal, car il détermine la pluie"
      ],
      correct: 0,
      explication: "La latitude est désignée comme facteur principal : l’inégale chauffe selon l’angle d’incidence commande la zonation des climats. Altitude, continentalité et courants redistribuent ou modifient localement, mais n’expliquent pas la zonation d’ensemble."
    },
    {
      enonce: "Le relief force l’air à s’élever. Que retient la fiche pour les deux versants d’une montagne ?",
      options: [
        "Les deux versants reçoivent les mêmes pluies",
        "Le versant abrité du vent reçoit les pluies, le versant exposé reste sec",
        "Le versant exposé au vent reçoit les pluies, le versant abrité reste sec",
        "Le relief n’a aucun effet sur les pluies, seulement sur les températures"
      ],
      correct: 2,
      explication: "La propriété est celle de la fiche : air forcé de s’élever, pluies sur le versant au vent, sécheresse sur le versant abrité — l’ordre des deux versants est l’inverse exact du piège. L’altitude rafraîchit aussi (ordre de grandeur usuel : environ 0,6 °C tous les 100 m)."
    }
  ]);

  JK.quizDeLecon("geo-seconde-c3-l3", [
    {
      enonce: "Quels sont les éléments du climat, c’est-à-dire ce que l’on mesure ?",
      options: [
        "Latitude, altitude, distance à la mer et courants marins",
        "Température, précipitations, pression, vent, humidité et ensoleillement",
        "Isothermes, isohyètes et planisphères",
        "Saison sèche, hivernage et mois arides"
      ],
      correct: 1,
      explication: "La définition de la fiche est simple à retenir par opposition : les éléments se mesurent, les facteurs expliquent. La première proposition est la liste des facteurs, celle qu’il ne faut pas recopier ici."
    },
    {
      enonce: "Que distingue le temps météorologique du climat ?",
      options: [
        "Le temps décrit l’état de l’atmosphère à un moment précis ; le climat est la combinaison des états moyens sur une longue période, environ trente ans",
        "Le temps concerne les pluies, le climat les températures",
        "C’est la même chose selon une échelle différente de carte",
        "Le climat décrit une année exceptionnelle, le temps la moyenne mobile"
      ],
      correct: 0,
      explication: "La Vigilance est explicite : ne jamais confondre — une année sèche n’est pas un changement de climat et un orage de juillet n’est pas une saison. La notion de période longue (environ trente ans) est le repère de la définition."
    },
    {
      enonce: "Dans le chapitre II, quelle séance met en pratique, sur papier, les notions des leçons 7 à 9 ?",
      options: [
        "Le TP de la leçon 3 sur les représentations de la Terre",
        "La leçon 11 sur la tectonique des plaques",
        "Le TP de la leçon 10 : carte de la répartition des climats et construction de diagrammes",
        "La leçon 16 sur la coupe topographique"
      ],
      correct: 2,
      explication: "Après la leçon 9 (1 h) vient le TP de leçon 10 (2 h), qui combine deux savoir-faire graphiques : la carte de répartition des climats, avec isothermes et isohyètes, et le diagramme ombrothermique. Les autres TP cités appartiennent aux chapitres I et III."
    }
  ]);

  JK.quizDeLecon("geo-seconde-c3-l4", [
    {
      enonce: "Quelles échelles la fiche donne-t-elle comme convention usuelle du diagramme ombrothermique ?",
      options: [
        "Des échelles libres, choisies par l’élève selon ses goûts",
        "20 °C par centimètre pour la température et 10 mm par centimètre pour les pluies",
        "10 °C par centimètre pour les pluies et 20 mm par centimètre pour la température",
        "10 °C par centimètre pour la courbe de température, 20 mm par centimètre pour les barres de précipitations, sur douze mois à largeur égale"
      ],
      correct: 3,
      explication: "La convention usuelle est celle de la fiche : courbe en 10 °C/cm, barres en 20 mm/cm, douze mois sur la même largeur. La Vigilance ajoute que ces échelles ne sont pas libres : les changer fait disparaître la lecture des mois secs, et il faut vérifier la convention du manuel utilisé."
    },
    {
      enonce: "Deux stations reçoivent toutes deux 800 mm par an : l’une en six mois, l’autre réparties toute l’année. Ont-elles le même climat ?",
      options: [
        "Oui, car le total annuel est identique",
        "Non : le total annuel ne suffit pas, la répartition mensuelle distingue un climat à saison sèche marquée d’un climat à pluies régulières",
        "Oui, dès lors que leurs températures moyennes sont proches",
        "Non, parce que la première station reçoit un volume d’eau supérieur"
      ],
      correct: 1,
      explication: "C’est l’exercice de la fiche : le diagramme ombrothermique existe précisément pour montrer la répartition. Le même total peut cacher une saison sèche qui pèse sur l’agriculture et la végétation, ou des pluies régulières plus favorables aux forêts."
    }
  ]);
})();
