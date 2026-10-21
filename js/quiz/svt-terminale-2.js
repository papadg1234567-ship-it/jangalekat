/* Quiz des leçons 16 à 30 de SVT Terminale (Jàngalekat). Une leçon = un quiz = 3 questions.
   Les intitulés et l’ordre des leçons viennent du programme officiel sénégalais de SVT du second
   cycle de l’enseignement secondaire général (MEN / IGEN / Commission nationale des programmes,
   Dakar, septembre 2015, PDF), programme global et détaillé de Terminale S2, thèmes 7 à 13 :
   régulation de la glycémie, immunologie, reproduction chez les mammifères et les spermatophytes,
   génétique, hérédité humaine et biotechnologies.
   Les énoncés, options et explications sont des contenus de démonstration rédigés par un modèle :
   ils reprennent les notions du programme détaillé, mais aucun n’a été relu par un enseignant.
   Ils ne sont ni un sujet officiel ni une évaluation de référence. Les leçons 1 à 15 sont
   rédigées dans un autre fichier. */
(function () {
  'use strict';

  JK.quizDeLecon("svt-terminale-c7-l1", [
    {
      "enonce": "Quel organe le programme met-il en évidence pour corriger un excès de glycémie, c’est-à-dire une hyperglycémie ?",
      "options": [
        "Le pancréas",
        "Le rein",
        "Le poumon",
        "La thyroïde"
      ],
      "correct": 0,
      "explication": "L’activité du programme montre l’intervention du pancréas en cas d’hyperglycémie : cette glande libère dans le sang l’insuline, hormone du système hypoglycémiant, qui fait baisser la glycémie."
    },
    {
      "enonce": "Quel est l’effet de l’insuline sur l’organisme ?",
      "options": [
        "Elle augmente la glycémie en libérant le glucose stocké",
        "Elle n’agit pas sur le glucose, seulement sur les lipides",
        "Elle abaisse la glycémie : c’est la principale hormone du système hypoglycémiant",
        "Elle détruit le glucose au niveau du rein"
      ],
      "correct": 2,
      "explication": "Le contenu « origine et rôle de l’insuline » la définit comme l’agent du système hypoglycémiant : elle abaisse la glycémie en favorisant l’utilisation et le stockage du glucose par ses organes-cibles. L’effet inverse, libérer le glucose stocké, est celui du glucagon."
    },
    {
      "enonce": "Quel phénomène, cité parmi les dysfonctionnements de la régulation, trahit une glycémie dépassant les capacités de la régulation ?",
      "options": [
        "L’homéostasie",
        "La tension artérielle",
        "La diurèse",
        "La glycosurie"
      ],
      "correct": 3,
      "explication": "La glycosurie, présence de glucose dans les urines, signale que la glycémie dépasse les limites de la régulation, comme dans certains diabètes liés à un dysfonctionnement du système régulateur. L’homéostasie désigne au contraire la constance entretenue du milieu intérieur."
    }
  ]);

  JK.quizDeLecon("svt-terminale-c8-l1", [
    {
      "enonce": "En immunologie, que distingue l’opposition entre le « soi » et le « non-soi » ?",
      "options": [
        "Deux groupes sanguins de l’espèce humaine",
        "Ce que l’organisme reconnaît comme lui appartenant et ce qu’il rejette comme étranger",
        "Deux étapes de la phagocytose",
        "Deux organes de l’appareil digestif"
      ],
      "correct": 1,
      "explication": "La leçon pose la notion d’intégrité de l’organisme par la distinction soi et non-soi : l’organisme défend ce qui est le sien contre ce qu’il identifie comme étranger. Cette notion ne désigne ni un groupe sanguin ni un organe digestif."
    },
    {
      "enonce": "Que regroupent les éléments composant le système immunitaire selon la leçon ?",
      "options": [
        "Les globules rouges et le plasma sanguin uniquement",
        "Les organes digestifs et leurs sécrétions",
        "Des organes et des cellules du système immunitaire, dont les leucocytes",
        "Le tissu nerveux et le muscle cardiaque"
      ],
      "correct": 2,
      "explication": "Le contenu du programme cite les organes du système immunitaire, les cellules immunitaires et le rôle des leucocytes : la défense repose sur un ensemble d’organes et de cellules spécialisés."
    },
    {
      "enonce": "Quelles cellules du sang se voient attribuer le rôle de défense dans le système immunitaire ?",
      "options": [
        "Les leucocytes",
        "Les globules rouges",
        "Les plaquettes de la coagulation",
        "Les cellules musculaires lisses"
      ],
      "correct": 0,
      "explication": "La leçon insiste sur le rôle des leucocytes : ce sont les cellules qui assurent les fonctions de défense, notamment la phagocytose. Les globules rouges transportent l’oxygène et les plaquettes interviennent dans la coagulation, sans rôle défensif comparable."
    }
  ]);

  JK.quizDeLecon("svt-terminale-c8-l2", [
    {
      "enonce": "Comment s’appelle la réaction de défense immédiate, sans distinction de la cible, dont le mécanisme central est la phagocytose ?",
      "options": [
        "La réponse immunitaire spécifique",
        "L’immunité à médiation humorale",
        "La vaccination",
        "La réponse immunitaire non spécifique"
      ],
      "correct": 3,
      "explication": "Le programme range la phagocytose dans la réponse immunitaire non spécifique : elle s’exerce sur tout élément étranger rencontré, sans reconnaissance préalable. Les réponses à médiation humorale et cellulaire sont, elles, spécifiques."
    },
    {
      "enonce": "Que se passe-t-il au cours d’une phagocytose ?",
      "options": [
        "Une cellule fabrique du glucose à partir des réserves",
        "Une cellule absorbe puis digère un micro-organisme ou un débris",
        "Un vaccin est injecté pour prévenir une maladie",
        "Le rein élimine l’excès d’eau du milieu intérieur"
      ],
      "correct": 1,
      "explication": "La leçon détaille les étapes de la phagocytose : le phagocyte capte l’élément étranger, l’enferme puis le digère. C’est un mécanisme de la réponse non spécifique, décrit avant les réponses spécifiques."
    },
    {
      "enonce": "Qu’est-ce qui caractérise la réponse immunitaire spécifique à médiation humorale ?",
      "options": [
        "Elle n’intervient qu’après la digestion des aliments",
        "Elle détruit les cellules du soi",
        "Elle est assurée par des molécules de défense circulant dans le sang, les anticorps",
        "Elle se limite aux organes reproducteurs"
      ],
      "correct": 2,
      "explication": "L’immunité à médiation humorale est portée par des molécules libérées dans les humeurs, c’est-à-dire le sang et la lymphe : les anticorps agissent contre le non-soi. La médiation cellulaire est l’autre branche de la réponse spécifique, avec coopération entre cellules immunitaires."
    }
  ]);

  JK.quizDeLecon("svt-terminale-c8-l3", [
    {
      "enonce": "Quelle est l’origine du SIDA, telle que la présente la leçon sur le dysfonctionnement du système immunitaire ?",
      "options": [
        "Une infection due au virus de l’immunodéficience humaine (VIH)",
        "Un excès de glucose dans le sang",
        "Une maladie héréditaire sans agent infectieux",
        "Une intoxication alimentaire par des bactéries"
      ],
      "correct": 0,
      "explication": "Le contenu « origine du SIDA » l’attribue à l’infection par le VIH, qui détruit progressivement le système immunitaire ; des maladies opportunistes se déclarent alors sur ce terrain affaibli, signe du dysfonctionnement immunitaire."
    },
    {
      "enonce": "Quand le VIH infecte l’organisme, quelles cellules cible-t-il en priorité ?",
      "options": [
        "Les fibres musculaires striées",
        "Certaines cellules de l’immunité, les lymphocytes qui coordonnent les défenses",
        "Les globules rouges transporteurs d’oxygène",
        "Les neurones du cerveau"
      ],
      "correct": 1,
      "explication": "La leçon dresse la liste des cellules-cibles du VIH : le virus attaque les lymphocytes qui organisent la réponse immunitaire, d’où l’effondrement progressif des défenses. Les cellules musculaires ou nerveuses ne sont pas les cibles décrites."
    },
    {
      "enonce": "Parmi les situations suivantes, laquelle correspond à un mode de transmission du VIH reconnu par le programme ?",
      "options": [
        "Une poignée de main entre deux personnes",
        "Le partage des couverts à table",
        "Respirer le même air qu’une personne infectée",
        "Un rapport sexuel sans protection ou une transmission de la mère à l’enfant pendant la grossesse ou l’accouchement"
      ],
      "correct": 3,
      "explication": "La leçon énumère les modes de transmission du VIH : rapports sexuels non protégés, sang contaminé, seringues partagées, et transmission de la mère à l’enfant. Les contacts ordinaires de la vie sociale ne transmettent pas le virus ; le dépistage et la prévention reposent sur cette distinction."
    }
  ]);

  JK.quizDeLecon("svt-terminale-c8-l4", [
    {
      "enonce": "Qu’est-ce qu’un vaccin, d’après la leçon consacrée à la vaccination ?",
      "options": [
        "Une injection d’anticorps tout prêts contre une maladie déclarée",
        "Une opération qui retire un organe infecté",
        "Un traitement préventif qui apprend à l’organisme à fabriquer lui-même ses défenses contre un agent pathogène",
        "Un médicament qui abaisse la glycémie"
      ],
      "correct": 2,
      "explication": "Le programme présente la vaccination comme une aide préventive : le vaccin stimule la réponse immunitaire et la mémoire de l’organisme, qui réagira vite lors d’une infection réelle. L’apport d’anticorps tout prêts relève de la sérothérapie, l’autre aide étudiée."
    },
    {
      "enonce": "Quelle différence le programme demande-t-il d’établir entre un sérum et un vaccin ?",
      "options": [
        "Le sérum apporte des anticorps tout prêts et agit en curatif, alors que le vaccin pousse l’organisme à produire ses propres défenses de façon préventive",
        "Aucune différence : seuls les noms changent",
        "Le vaccin soigne une maladie déjà déclarée et le sérum la prévient",
        "Le sérum ne s’emploie que chez les plantes"
      ],
      "correct": 0,
      "explication": "L’activité « comparer sérum et vaccin » repose sur le principe de la sérothérapie : le sérum contient des anticorps prêts à neutraliser l’agent pathogène, avec une action immédiate mais passagère ; le vaccin prépare une défense durable propre à l’organisme."
    },
    {
      "enonce": "Que cherche à obtenir l’asepsie, telle que la définit la leçon ?",
      "options": [
        "Augmenter la température du corps pour détruire les microbes",
        "L’ensemble des procédés qui empêchent les micro-organismes de pénétrer dans l’organisme",
        "Injecter un vaccin au bon moment",
        "Mesurer la pression artérielle avant une intervention"
      ],
      "correct": 1,
      "explication": "La leçon distingue l’asepsie, qui prévient l’arrivée des micro-organismes, et l’antisepsie, qui traite un milieu déjà souillé pour les détruire. Ces deux procédés complètent les aides apportées à la réponse immunitaire, avec la chimiothérapie et l’antibiothérapie."
    }
  ]);

  JK.quizDeLecon("svt-terminale-c9-l1", [
    {
      "enonce": "Que désigne la gamétogenèse étudiée dans la leçon ?",
      "options": [
        "La fusion des deux gamètes formant l’œuf",
        "La transformation du muscle en énergie",
        "L’implantation de l’embryon dans l’utérus",
        "L’ensemble des phénomènes qui aboutissent à la formation des gamètes mâle ou femelle"
      ],
      "correct": 3,
      "explication": "La gamétogenèse est la formation des gamètes : la leçon en suit deux déroulements, la spermatogenèse dans le testicule et l’ovogenèse dans l’ovaire, puis les compare."
    },
    {
      "enonce": "Chez le mammifère mâle, quel organe produit les spermatozoïdes ?",
      "options": [
        "La vessie",
        "La glande surrénale",
        "Le testicule",
        "L’hypophyse"
      ],
      "correct": 2,
      "explication": "Le contenu liste le testicule comme siège de la spermatogenèse, en plus de son rôle endocrine. La vessie appartient à l’appareil urinaire et l’hypophyse à la régulation hormonale."
    },
    {
      "enonce": "Qu’est-ce que la méiose, décrite comme la phase de maturation de la gamétogenèse ?",
      "options": [
        "Une division de maturation au cours de laquelle le nombre de chromosomes est réduit de moitié",
        "Une phase de sécrétion des hormones mâles",
        "La fusion des deux noyaux des gamètes",
        "La division qui répare les tissus après l’effort"
      ],
      "correct": 0,
      "explication": "La leçon présente la méiose comme la phase de maturation qui donne des cellules à garniture chromosomique réduite de moitié, avec des brassages chromosomiques dont le crossing-over, visible aux chiasmas. Cette réduction permet le rétablissement du nombre de chromosomes à la fécondation."
    }
  ]);

  JK.quizDeLecon("svt-terminale-c9-l2", [
    {
      "enonce": "Que désigne la monospermie dans le déroulement de la fécondation ?",
      "options": [
        "La production d’un seul gamète par cycle",
        "Le fait qu’un seul spermatozoïde fusionne normalement avec l’ovule",
        "La présence d’un seul type de gamète dans l’espèce",
        "La fusion de deux spermatozoïdes avec l’ovule"
      ],
      "correct": 1,
      "explication": "La leçon inscrit la monospermie parmi les étapes de la fécondation : un seul gamète mâle pénètre l’ovule, les autres étant écartés. La fusion des noyaux mâle et femelle rétablit alors le nombre de chromosomes de l’espèce."
    },
    {
      "enonce": "Dans quelle partie de l’appareil génital de la femme la fécondation de l’ovule se déroule-t-elle normalement ?",
      "options": [
        "Dans les premières portions de l’oviducte, là où le spermatozoïde rencontre l’ovule",
        "Dans la vessie",
        "Dans le muscle utérin, dès l’ovulation",
        "Dans l’ovaire qui libère les ovules"
      ],
      "correct": 0,
      "explication": "L’activité « décrire le trajet des gamètes » situe le lieu de la fécondation dans l’oviducte ; la migration tubulaire de l’œuf fécondé vers l’utérus vient ensuite, avant l’implantation."
    },
    {
      "enonce": "Parmi les situations suivantes, laquelle le programme range-t-il parmi les entraves à la rencontre des gamètes ?",
      "options": [
        "La sécrétion d’hormones par le testicule",
        "La formation d’un ovule par la méiose",
        "Un obstacle qui empêche le spermatozoïde d’atteindre l’ovule ou une absence d’ovulation",
        "Le passage du spermatozoïde dans l’oviducte"
      ],
      "correct": 2,
      "explication": "La leçon cherche les causes de l’infécondité dans les facteurs qui empêchent la rencontre des gamètes ou rendent les conditions défavorables à une reproduction saine. La sécrétion hormonale, la méiose et le trajet des gamètes décrivent au contraire un fonctionnement normal."
    }
  ]);

  JK.quizDeLecon("svt-terminale-c9-l3", [
    {
      "enonce": "Quelles sont les deux fonctions du testicule distinguées par la leçon ?",
      "options": [
        "Urinaire et digestive",
        "Respiratoire et cardiaque",
        "Exocrine, produire les spermatozoïdes, et endocrine, libérer les hormones mâles dans le sang",
        "Visuelle et auditive"
      ],
      "correct": 2,
      "explication": "Le contenu sépare le rôle exocrine du testicule, la fabrication des gamètes, de son rôle endocrine, la sécrétion d’hormones mâles vers le sang. Ces deux fonctions sont elles-mêmes sous le contrôle de l’hypophyse."
    },
    {
      "enonce": "Dans la régulation des appareils reproducteurs, quel rôle la leçon attribue-t-elle à l’hypothalamus ?",
      "options": [
        "Il produit les spermatozoïdes",
        "Il stocke les réserves de l’embryon",
        "Il filtre le sang comme le rein",
        "Il commande l’hypophyse, qui stimule ensuite les glandes reproductrices"
      ],
      "correct": 3,
      "explication": "La leçon décrit la commande hypothalamique du fonctionnement ovarien et son rôle dans la régulation testiculaire : l’hypothalamus agit par l’intermédiaire de l’hypophyse, relais direct des glandes reproductrices, et le système nerveux intervient dans cet ensemble."
    },
    {
      "enonce": "Quel mécanisme permet de maintenir constantes les quantités d’hormones sécrétées par les glandes reproductrices ?",
      "options": [
        "L’absence complète de stimuli nerveux",
        "Le rétrocontrôle : les hormones sexuelles agissent en retour sur l’hypothalamus et l’hypophyse",
        "La destruction continue des glandes qui les sécrètent",
        "L’augmentation permanente de la glycémie"
      ],
      "correct": 1,
      "explication": "La notion de rétrocontrôle est au centre de la leçon : quand le taux d’hormones sexuelles s’élève trop, il atténue la commande de l’hypophyse, et inversement. C’est le principe des schémas fonctionnels de régulation que l’élève doit construire."
    }
  ]);

  JK.quizDeLecon("svt-terminale-c9-l4", [
    {
      "enonce": "Après la migration tubulaire, où l’œuf fécondé vient-il s’implanter pour amorcer la vie intra-utérine ?",
      "options": [
        "Dans la paroi de l’utérus",
        "Dans l’ovaire",
        "Dans la vessie",
        "Dans la lumière de l’oviducte"
      ],
      "correct": 0,
      "explication": "La migration tubulaire, première étape du devenir de l’œuf selon la leçon, conduit l’œuf jusqu’à l’utérus où il s’implante ; la vie intra-utérine et les transformations de l’embryon commencent alors."
    },
    {
      "enonce": "Que devient le cycle sexuel d’une femme à la suite d’une fécondation réussie ?",
      "options": [
        "Il s’accélère pendant les trois premiers mois",
        "Il est bloqué pendant toute la durée de la grossesse",
        "Il se poursuit exactement comme avant",
        "Il s’arrête une fois puis reprend chaque mois"
      ],
      "correct": 1,
      "explication": "La leçon demande d’expliquer l’origine du blocage du cycle durant la grossesse et de comparer un cycle normal à un cycle après fécondation : la gestation entretient un état hormonal qui empêche le retour du cycle jusqu’à l’accouchement."
    },
    {
      "enonce": "Que désigne le terme de parturition ?",
      "options": [
        "L’implantation de l’œuf dans la paroi utérine",
        "La formation des gamètes chez le fœtus",
        "L’accouchement, expulsion du fœtus arrivé à terme en fin de gestation",
        "La première sécrétion de lait après la naissance"
      ],
      "correct": 2,
      "explication": "La parturition est l’accouchement, dernier épisode de la gestation : la leçon en décrit le déroulement, les étapes, et recherche la nature du mécanisme, à commande nerveuse et hormonale, qui le déclenche."
    }
  ]);

  JK.quizDeLecon("svt-terminale-c9-l5", [
    {
      "enonce": "Quelle glande assure la production du lait chez la femelle mammifère qui allaite ?",
      "options": [
        "L’ovaire",
        "L’hypophyse",
        "Le testicule",
        "La glande mammaire"
      ],
      "correct": 3,
      "explication": "La leçon s’organise autour de la glande mammaire : elle en décrit l’organisation, puis le mécanisme de la production et de l’éjection du lait, et le développement de la glande pendant la grossesse."
    },
    {
      "enonce": "Quel facteur entretient la sécrétion de lait après la naissance du petit ?",
      "options": [
        "La tétée régulière du nouveau-né, qui relance le message nerveux et hormonal",
        "La baisse de la glycémie de la mère",
        "L’arrêt de toute activité hormonale",
        "La digestion du dernier repas pris pendant la grossesse"
      ],
      "correct": 0,
      "explication": "La leçon distingue la mise en route de la sécrétion et son maintien : la tétée relance en permanence, par le système nerveux et l’hypophyse, le mécanisme hormonal qui entretient la production de lait."
    },
    {
      "enonce": "Dans cette leçon, que désigne l’éjection du lait ?",
      "options": [
        "La fabrication du lait dans la glande",
        "Le développement de la glande pendant la grossesse",
        "La sortie du lait hors de la glande mammaire jusqu’au mamelon",
        "La transformation du lait en sang"
      ],
      "correct": 2,
      "explication": "La leçon sépare la production du lait, sécrété dans la glande mammaire, et son éjection, qui l’amène à la surface pour l’allaitement : deux mécanismes distincts, tous deux sous dépendance hormonale."
    }
  ]);

  JK.quizDeLecon("svt-terminale-c9-l6", [
    {
      "enonce": "Que désigne la contraception d’après la leçon ?",
      "options": [
        "Un traitement contre les infections sexuellement transmissibles",
        "L’ensemble des moyens qui empêchent volontairement une grossesse",
        "L’ablation chirurgicale des glandes reproductrices",
        "Le traitement de l’infécondité du couple"
      ],
      "correct": 1,
      "explication": "La leçon définit d’abord la contraception comme la prévention volontaire de la grossesse, puis identifie les principales méthodes contraceptives ; elle ne confond pas cette prévention avec un soin de l’infécondité."
    },
    {
      "enonce": "Sur quelle étape de la reproduction la contraception hormonale, comme la pilule, agit-elle principalement ?",
      "options": [
        "La destruction définitive des gamètes déjà formés",
        "L’élimination du lait après l’accouchement",
        "L’ovulation, qu’elle bloque pour qu’aucun ovule ne soit disponible",
        "La fermeture du testicule pendant les rapports"
      ],
      "correct": 2,
      "explication": "Rattachée à la régulation du fonctionnement des ovaires étudiée à la leçon précédente, la contraception hormonale agit sur le cycle sexuel en empêchant l’ovulation ; la rencontre des gamètes ne peut alors pas se produire."
    },
    {
      "enonce": "Comment agit une méthode contraceptive de barrière comme le préservatif ?",
      "options": [
        "Il arrête les règles",
        "Il détruit les gamètes déjà formés",
        "Il bloque la sécrétion de l’hypophyse",
        "Il empêche mécaniquement la rencontre des gamètes"
      ],
      "correct": 3,
      "explication": "La méthode de barrière intervient sur l’étape même que la leçon sur la fécondation nomme la rencontre des gamètes : le spermatozoïde ne peut atteindre l’ovule. Le préservatif est aussi un moyen reconnu de prévention de l’infection au VIH, ce qui relie contraception et prévention."
    }
  ]);

  JK.quizDeLecon("svt-terminale-c10-l1", [
    {
      "enonce": "Chez une plante à fleurs, qu’est-ce que la pollinisation ?",
      "options": [
        "Le transport du grain de pollen de l’anthère jusqu’au pistil",
        "La dispersion des graines par le vent",
        "La formation de l’enveloppe de la graine",
        "La fusion des deux noyaux mâles dans le sac embryonnaire"
      ],
      "correct": 0,
      "explication": "La leçon place la pollinisation avant la fécondation : le grain de pollen quitte l’anthère, organe reproducteur mâle de la fleur, pour atteindre le pistil. Le programme demande d’identifier les agents de la pollinisation et d’en distinguer les formes."
    },
    {
      "enonce": "Que devient l’ovaire de la fleur après la fécondation ?",
      "options": [
        "La graine",
        "Le grain de pollen",
        "Le gamétophyte mâle",
        "Le fruit"
      ],
      "correct": 3,
      "explication": "La leçon explique l’origine du fruit et de la graine : l’ovaire se développe en fruit, tandis que les ovules fécondés deviennent les graines, dont la leçon décrit ensuite les parties et les types."
    },
    {
      "enonce": "Que signifie la « double fécondation » chez les spermatophytes ?",
      "options": [
        "La fécondation de deux fleurs par un seul insecte",
        "L’intervention de deux noyaux mâles dans le sac embryonnaire, l’un formant l’embryon, l’autre participant à la formation des réserves",
        "Deux pollinisations successives du même pistil",
        "La fusion de deux fleurs entre elles"
      ],
      "correct": 1,
      "explication": "Le contenu inscrit la double fécondation parmi les étapes de la fécondation de la fleur : deux noyaux mâles agissent dans le sac embryonnaire, l’un uni à l’ovule pour former l’embryon, l’autre associé aux réserves de la graine."
    }
  ]);

  JK.quizDeLecon("svt-terminale-c11-l1", [
    {
      "enonce": "Que porte à étudier le monohybridisme du programme ?",
      "options": [
        "La transmission de deux caractères à la fois",
        "La transmission des caractères acquis pendant la vie",
        "La transmission d’un seul caractère héréditaire",
        "La transmission du seul patrimoine lié au sexe"
      ],
      "correct": 2,
      "explication": "La leçon commence par la transmission d’un seul caractère, le monohybridisme, avec les notions de race pure, de dominance et de codominance ; le dihybridisme, transmission de deux caractères, vient dans un second temps."
    },
    {
      "enonce": "Qu’appelle-t-on un test-cross dans le vocabulaire de la leçon ?",
      "options": [
        "Le croisement de deux races pures",
        "Le croisement d’un individu de génotype inconnu avec un individu récessif homozygote",
        "La mesure de la taille des descendants",
        "L’observation des chromosomes au microscope"
      ],
      "correct": 1,
      "explication": "Le programme liste le test-cross parmi les outils du monohybridisme : il sert à déterminer le génotype d’un individu dont on connaît le phénotype, car la descendance révèle les gamètes que produit l’individu testé. Le back-cross est le retour au parent, notion voisine mais distincte."
    },
    {
      "enonce": "Quelle proportion phénotypique attend-on en F2 dans un dihybridisme à double dominance avec ségrégation indépendante des allèles ?",
      "options": [
        "9:3:3:1",
        "3:1",
        "1:1:1:1",
        "1:2:1"
      ],
      "correct": 0,
      "explication": "La ségrégation indépendante des allèles combine deux ratios monohybrides 3:1 et donne 9:3:3:1 en F2. Le programme fait comparer ce résultat aux dihybridismes avec linkage absolu ou partiel, où les deux gènes, situés sur le même chromosome, ne se répartissent plus indépendamment."
    }
  ]);

  JK.quizDeLecon("svt-terminale-c12-l1", [
    {
      "enonce": "Pourquoi l’étude de l’hérédité humaine repose-t-elle sur le pedigree plutôt que sur des croisements expérimentaux ?",
      "options": [
        "Parce que les chromosomes humains sont invisibles",
        "Parce que des croisements dirigés sont impossibles, avec peu de descendants et des générations espacées",
        "Parce que l’espèce humaine ne possède pas de patrimoine génétique",
        "Parce que les maladies humaines échappent aux lois de la génétique"
      ],
      "correct": 1,
      "explication": "La leçon ouvre sur les difficultés liées à l’étude de l’hérédité humaine : on ne programme pas les mariages, les enfants sont peu nombreux et les générations longues. D’où la méthode d’étude retenue, le pedigree ou arbre généalogique."
    },
    {
      "enonce": "L’hémophilie et le daltonisme, dont la leçon étudie le mode de transmission, sont des exemples de quel type d’hérédité ?",
      "options": [
        "Une hérédité liée au sexe",
        "Une hérédité des groupes sanguins",
        "Une anomalie chromosomique",
        "Une hérédité du facteur rhésus"
      ],
      "correct": 0,
      "explication": "Le programme range l’hémophilie et le daltonisme dans l’hérédité liée au sexe, portée par les chromosomes sexuels, avec les notions de porteur et de vecteur. L’albinisme et les groupes sanguins relèvent au contraire de l’hérédité autosomale."
    },
    {
      "enonce": "La trisomie 21, le syndrome de Turner et le syndrome de Klinefelter appartiennent à quelle catégorie étudiée par la leçon ?",
      "options": [
        "Les groupes sanguins de l’espèce humaine",
        "Les maladies de la nutrition",
        "Les hérédités liées au sexe simples",
        "Les anomalies chromosomiques"
      ],
      "correct": 3,
      "explication": "La leçon classe ces trois cas parmi les anomalies chromosomiques, dues à une variation du nombre de chromosomes, et cherche leur cause. Elles se distinguent des transmissions monogéniques comme l’hémophilie ; le programme note aussi que les mariages consanguins augmentent le risque de certaines atteintes héréditaires."
    }
  ]);

  JK.quizDeLecon("svt-terminale-c13-l1", [
    {
      "enonce": "Que désigne le terme de biotechnologies, tel que la leçon pose sa définition ?",
      "options": [
        "Les techniques qui remplacent les êtres vivants par des machines",
        "La seule étude des organismes fossiles",
        "L’ensemble des techniques qui utilisent des organismes vivants, ou leurs composantes, pour obtenir des produits utiles à l’homme",
        "Les appareils de mesure du milieu intérieur"
      ],
      "correct": 2,
      "explication": "La première séquence de la leçon demande ce que signifie « biotechnologies » : le vivant sert d’outil de production, qu’il s’agisse des biotechnologies anciennes ou des techniques modernes issues du génie génétique."
    },
    {
      "enonce": "Parmi les exemples suivants, lequel relève des biotechnologies anciennes citées par la leçon ?",
      "options": [
        "Le clonage d’un mammifère",
        "La culture in vitro de plantes",
        "La fécondation in vitro chez les animaux",
        "La panification par la levure ou la fabrication de produits fermentés"
      ],
      "correct": 3,
      "explication": "Le contenu oppose biotechnologies anciennes et modernes : la fermentation traditionnelle du pain ou des produits laitiers utilise le vivant sans manipulation du matériel génétique, alors que la culture in vitro, la fécondation in vitro et le clonage comptent parmi les techniques modernes."
    },
    {
      "enonce": "Chez un animal, qu’est-ce que le clonage étudié par la leçon ?",
      "options": [
        "Le croisement de deux variétés pour obtenir un hybride",
        "La production d’un individu génétiquement identique à partir d’une cellule d’un individu donneur",
        "La réunion de deux gamètes dans une éprouvette",
        "Le traitement d’une maladie par des vitamines"
      ],
      "correct": 1,
      "explication": "La leçon place le clonage parmi les biotechnologies modernes, aux côtés de la culture in vitro, de la fécondation in vitro et des manipulations génétiques : il vise un individu dont l’information héréditaire est celle du donneur."
    }
  ]);
})();
