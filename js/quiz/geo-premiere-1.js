/* Quiz des leçons 1 à 14 de géographie de la classe de Première (Jàngalekat) : introduction,
   population mondiale et milieu rural. Une leçon = un quiz = 3 questions.
   Les leçons geo-premiere-c2-l2 et geo-premiere-c3-l5 ont déjà une question dans herites.js :
   ce fichier les complète par deux questions nouvelles, sans les répéter.
   Contenu auto-rédigé par Jàngalekat, non relu par un enseignant. */
(function () {
  'use strict';

  JK.quizDeLecon("geo-premiere-c1-l1", [
    {
      "enonce": "Que distingue le programme entre développement et croissance ?",
      "options": [
        "Ce sont deux noms pour la même réalité mesurée par le PIB",
        "La croissance concerne les services, le développement l’industrie",
        "Le développement améliore durablement les conditions de vie, la croissance désigne seulement l’augmentation des richesses produites",
        "Le développement mesure le PIB, la croissance mesure l’IDH"
      ],
      "correct": 2,
      "explication": "La fiche pose la distinction : santé, éducation, revenus et droits pour le développement ; une hausse des richesses produites en un point donné pour la croissance. Croire que les deux mots se recouvrent est le premier piège de la leçon."
    },
    {
      "enonce": "Où se situe cette leçon 1 (2 h) dans le programme de Première ?",
      "options": [
        "En conclusion, après les espaces d’intégration économique",
        "En introduction, avant la première partie consacrée à la population mondiale",
        "Au cœur de la deuxième partie sur le milieu rural",
        "Juste avant le TP sur les pyramides des âges"
      ],
      "correct": 1,
      "explication": "La leçon 1 ouvre l’année en introduction : elle reprend les inégalités de développement étudiées en 3ᵉ avant la partie sur la population mondiale. La conclusion du programme est la leçon 23 sur les espaces d’intégration."
    },
    {
      "enonce": "Pourquoi un revenu par habitant élevé ne prouve-t-il pas qu’une population est riche ?",
      "options": [
        "Parce que les pays exportateurs de pétrole n’exportent jamais rien",
        "Parce que le revenu par habitant n’est jamais calculé",
        "Parce que seul le nombre d’habitants compte",
        "Parce que c’est une moyenne, qui peut masquer une richesse captée par un petit nombre ou par l’État"
      ],
      "correct": 3,
      "explication": "C’est la Vigilance de la fiche : un État exportateur de pétrole peut afficher un revenu moyen élevé pendant que les inégalités internes restent fortes. L’IDH oblige justement à regarder aussi la santé et l’éducation, pas le seul revenu."
    }
  ]);

  JK.quizDeLecon("geo-premiere-c2-l1", [
    {
      "enonce": "Que retient la leçon 2 sur les religions universelles — christianisme, islam, hindouisme, bouddhisme ?",
      "options": [
        "Elles ne se superposent pas aux frontières politiques",
        "Chaque État ne connaît qu’une seule religion",
        "Elles épousent exactement les limites des États",
        "Elles sont apparues avec la colonisation"
      ],
      "correct": 0,
      "explication": "La fiche insiste : les grandes religions universelles traversent les frontières, la carte religieuse ne recouvre pas la carte politique. Assimiler un État, une langue et une religion est le contresens que la leçon veut faire éviter."
    },
    {
      "enonce": "Quelle place occupe la leçon 2 (1 h) dans la première partie du programme ?",
      "options": [
        "Elle conclut la partie par la répartition mondiale",
        "C’est un travail pratique de deux heures",
        "Elle ouvre la partie en décrivant la composition de la population, avant la leçon 3 sur l’accroissement",
        "Elle se place après le TP sur les densités"
      ],
      "correct": 2,
      "explication": "La leçon 2 est la première de la partie « La population mondiale » : groupes humains, langues et religions. Viennent ensuite l’accroissement et les politiques démographiques en leçon 3, avec ses deux heures et ses courbes d’évolution."
    },
    {
      "enonce": "Que dit la leçon 2 sur les langues du monde ?",
      "options": [
        "Il n’existe que quatre langues dans le monde",
        "On en compte quelques milliers, dominées par trois ou quatre grandes familles linguistiques",
        "Toutes les langues appartiennent à une seule famille",
        "Les langues suivent toujours les frontières des États"
      ],
      "correct": 1,
      "explication": "La fiche retient quelques milliers de langues et trois ou quatre grandes familles dominantes ; elles ne se superposent ni aux religions ni aux frontières. Confondre espace linguistique et État est le piège de cette leçon de composition."
    }
  ]);

  JK.quizDeLecon("geo-premiere-c2-l2", [
    {
      "enonce": "Outre l’accroissement et les politiques démographiques, que demande le libellé officiel de la leçon 3 ?",
      "options": [
        "Le calcul de densités de population",
        "La construction d’une pyramide des âges",
        "Une carte muette des religions du monde",
        "La construction de courbes d’évolution"
      ],
      "correct": 3,
      "explication": "Le titre officiel de la leçon 3 (2 h) associe accroissement, politiques démographiques et construction de courbes d’évolution. La pyramide des âges se construit au TP de la leçon 6, les densités au TP de la leçon 8."
    },
    {
      "enonce": "Une baisse durable de la fécondité réduit-elle immédiatement la population ?",
      "options": [
        "Non : l’inertie démographique fait continuer la croissance pendant des décennies",
        "Oui : la population diminue dès l’année suivante",
        "Oui, mais seulement dans les pays à fécondité élevée",
        "Non : la fécondité n’a aucun effet sur la population"
      ],
      "correct": 0,
      "explication": "C’est la Vigilance de la leçon : les naissances déjà enregistrées engagent l’avenir, si bien qu’une fécondité qui baisse produit encore une population qui monte. Inversement, nier tout effet de la fécondité serait une seconde erreur."
    }
  ]);

  JK.quizDeLecon("geo-premiere-c2-l3", [
    {
      "enonce": "Qu’est-ce qui distingue une migration internationale d’une migration interne ?",
      "options": [
        "La première est toujours définitive, la seconde jamais",
        "La première change de pays, la seconde change de région à l’intérieur du même pays",
        "La première concerne le travail, la seconde uniquement les études",
        "Il n’y a aucune différence, c’est un même mouvement"
      ],
      "correct": 1,
      "explication": "La fiche fait passer la frontière par le changement de pays ou de région ; l’urbanisation est la forme la plus visible des migrations internes. Une migration de travail vers un pays voisin, elle, reste internationale."
    },
    {
      "enonce": "Que souligne la leçon 4 sur le sens des grands flux de migration internationale ?",
      "options": [
        "Ils sont surtout Sud-Sud, alors qu’on les imagine d’abord Sud-Nord",
        "Ils vont uniquement du Nord vers le Sud",
        "Ils ne concernent que les étudiants",
        "Ils sont tous provoqués par la guerre"
      ],
      "correct": 0,
      "explication": "La leçon décrit des migrations massives et multidirectionnelles — travail, guerre, climat, études — et insiste : l’essentiel des flux internationaux se fait entre pays du Sud. Ne voir que le Sud-Nord est le piège classique."
    },
    {
      "enonce": "Quel lien la leçon 4 établit-elle entre migrations internes et villes ?",
      "options": [
        "Les migrations internes vident les villes",
        "L’urbanisation provoque l’immigration internationale",
        "Les migrations internes nourrissent l’urbanisation, qui en est la forme la plus visible",
        "Elles n’ont aucun rapport avec la croissance des villes"
      ],
      "correct": 2,
      "explication": "La fiche présente l’urbanisation comme la forme la plus visible de la migration interne : des ruraux rejoignent les villes du même pays. Confondre ce mouvement interne avec l’immigration internationale est l’erreur que la leçon dénonce."
    }
  ]);

  JK.quizDeLecon("geo-premiere-c2-l4", [
    {
      "enonce": "Quelle opposition la leçon 5 pose-t-elle entre deux mondes démographiques ?",
      "options": [
        "Une population mondiale jeune, dont la moitié a moins d’une trentaine d’années, et des pays au sommet de pyramide large",
        "Des pays sans enfants et des pays sans personnes âgées",
        "Une population mondiale âgée partout, sauf en Europe",
        "Des pays entièrement ruraux contre des pays entièrement urbains"
      ],
      "correct": 0,
      "explication": "La fiche sépare deux mondes : la jeunesse démographique d’une part, et d’autre part des pays où les personnes âgées, nombreuses au sommet de la pyramide, coûtent cher en santé et en retraites. Les structures ne se réduisent ni à la ruralité ni à un continent."
    },
    {
      "enonce": "Entre quelles leçons se place la leçon 5 sur les structures de la population mondiale (2 h) ?",
      "options": [
        "Avant la leçon 2 sur les groupes humains",
        "Après le TP sur les densités de la leçon 8",
        "Entre le TP de la leçon 6 et la leçon 7 sur la répartition",
        "Après les migrations (leçon 4) et avant le TP sur les pyramides (leçon 6)"
      ],
      "correct": 3,
      "explication": "L’ordre officiel de la première partie est : groupes humains, accroissement, migrations, structures, TP pyramides, répartition, TP densités. Le TP de la leçon 6 met en pratique ce que la leçon 5 décrit en théorie."
    },
    {
      "enonce": "Si le sommet d’une pyramide des âges s’élargit, que faut-il conclure ?",
      "options": [
        "La natalité vient d’augmenter fortement",
        "La population vieillit, avec un coût croissant en santé et en retraites",
        "Le pays reçoit davantage de nouveau-nés",
        "La base de la pyramide disparaît"
      ],
      "correct": 1,
      "explication": "Le sommet porte les âges élevés : son élargissement signale le vieillissement, alors qu’une vague de naissances gonflerait la base. La confusion base/sommet est l’erreur de lecture que la leçon 5 veut faire éviter."
    }
  ]);

  JK.quizDeLecon("geo-premiere-c2-l5", [
    {
      "enonce": "Que représente une pyramide des âges ?",
      "options": [
        "La population par année de naissance et par commune",
        "Les flux migratoires entrants et sortants d’un pays",
        "La population par âge et par sexe, la base pour les jeunes et le sommet pour les âgés",
        "Le revenu moyen des ménages d’un État"
      ],
      "correct": 2,
      "explication": "C’est la définition de la fiche, et la lecture se fait par classes d’âges, un sexe de chaque côté. Le diagramme triangulaire, que le TP manie aussi, montre quant à lui la répartition d’une population active en trois secteurs."
    },
    {
      "enonce": "Que teste le TP de la leçon 6 (2 h) ?",
      "options": [
        "Construire une pyramide à partir d’un tableau et lire un rapport de masculinité ou de dépendance",
        "Calculer des densités et les cartographier par classes",
        "Tracer une courbe d’évolution de la population mondiale",
        "Localiser les grands foyers de densité sur une carte muette"
      ],
      "correct": 0,
      "explication": "La fiche qualifie les TP des leçons 6 et 8 d’épreuves de méthode : ici construction et commentaire des pyramides et des diagrammes triangulaires. Le calcul de densités est le TP de la leçon 8, les courbes relèvent de la leçon 3."
    },
    {
      "enonce": "Sur une pyramide des âges, une large bosse signale quoi ?",
      "options": [
        "Une catastrophe naturelle survenue cette année-là",
        "Un afflux récent de migrants âgés",
        "Une erreur de construction du graphique",
        "Une génération nombreuse, lue en âges et non en années"
      ],
      "correct": 3,
      "explication": "La Vigilance impose de lire les âges et non les années : une bosse est une cohorte marquée dans le passé, comme un baby-boom, pas un événement daté sur l’axe. C’est le contresens de lecture le plus fréquent au TP."
    }
  ]);

  JK.quizDeLecon("geo-premiere-c2-l6", [
    {
      "enonce": "Quels sont les grands foyers de densité retenus par la leçon 7 ?",
      "options": [
        "L’Asie du Sud et de l’Est, l’Europe et le nord-est des États-Unis",
        "Le Sahara, l’Amazonie et la Sibérie",
        "L’Himalaya et les hautes montagnes d’Asie",
        "La forêt équatoriale dense d’Afrique centrale"
      ],
      "correct": 0,
      "explication": "La leçon conclut sur une répartition très inégale ; les espaces cités en contre-exemple — déserts, forêts équatoriales, hautes montagnes — sont précisément les vides démographiques que la fiche oppose aux foyers."
    },
    {
      "enonce": "Dans la première partie du programme, que prépare la leçon 7 (2 h) ?",
      "options": [
        "La leçon 2 sur les groupes humains et les religions",
        "Le TP de la leçon 6 sur les pyramides des âges",
        "Le TP de la leçon 8 sur le calcul et la carte des densités",
        "La leçon 3 sur les politiques démographiques"
      ],
      "correct": 2,
      "explication": "L’ordre officiel place la répartition (leçon 7) juste avant le TP sur les densités (leçon 8) : la leçon décrit les grands contrastes, le TP les mesure et les cartographie par classes."
    },
    {
      "enonce": "Parmi ces facteurs, lequel explique un foyer de densité plutôt qu’un vide démographique ?",
      "options": [
        "L’aridité, qui interdit l’eau potable",
        "Des plaines irriguées de riziculture intensive",
        "Le froid extrême des hautes latitudes",
        "Le relief accidenté et les sols maigres"
      ],
      "correct": 1,
      "explication": "L’exercice de la fiche l’enseigne : la riziculture intensive nourrit beaucoup de monde sur peu d’espace, comme dans la vallée du Gange ou le delta du Mékong, tandis que l’aridité, le froid et la montagne repoussent l’installation."
    }
  ]);

  JK.quizDeLecon("geo-premiere-c2-l7", [
    {
      "enonce": "Qu’est-ce que la densité de population ?",
      "options": [
        "Le nombre de naissances pour mille habitants et par an",
        "La différence entre les entrées et les sorties de migrants",
        "La part des citadins dans la population totale",
        "Le rapport de la population à la surface"
      ],
      "correct": 3,
      "explication": "La fiche donne la définition simple : population divisée par la surface, en habitants au kilomètre carré. Les trois autres réponses définissent la natalité, le solde migratoire et le taux d’urbanisation, étudiés ailleurs."
    },
    {
      "enonce": "D’après la fiche, de quel ordre est la densité moyenne du monde ?",
      "options": [
        "De l’ordre de cinquante habitants au kilomètre carré",
        "De l’ordre de cinq cents habitants au kilomètre carré",
        "Inférieure à un habitant au kilomètre carré",
        "Exactement cent habitants au kilomètre carré"
      ],
      "correct": 0,
      "explication": "La formule prudentielle « de l’ordre de » est celle de la fiche, qui ajoute que ce chiffre cache les vides et les concentrations : c’est le premier enseignement du TP de la leçon 8, qui préfère des classes de densité à une moyenne unique."
    },
    {
      "enonce": "Que faut-il dire d’un chiffre de densité moyenne ?",
      "options": [
        "Il prouve que le territoire est uniformément peuplé",
        "Il dispense de construire une carte",
        "Il ne dit rien de la répartition : il faut l’accompagner d’un minimum et d’un maximum",
        "Il se confond avec le taux d’urbanisation"
      ],
      "correct": 2,
      "explication": "C’est la Vigilance de la leçon 8 : la moyenne arithmétique masque à la fois les vides et les foyers. Le TP exige d’accompagner toujours le chiffre moyen d’un minimum et d’un maximum, et de cartographier par classes plutôt que de s’arrêter à la moyenne."
    }
  ]);

  JK.quizDeLecon("geo-premiere-c3-l1", [
    {
      "enonce": "Qu’est-ce que la culture itinérante sur brûlis ?",
      "options": [
        "Une culture permanente conduite sous grande irrigation",
        "Un système qui déplace le champ quand la jachère raccourcit, sur une terre abondante et une population faible",
        "Une monoculture d’exportation conduite en plantation",
        "Une mécanisation lourde de grandes parcelles familiales"
      ],
      "correct": 1,
      "explication": "La définition de la fiche relie le système au milieu : il lui faut de la place pour laisser la terre se reposer. Quand la pression démographique raccourcit la jachère, le système devient insuffisant — c’est ce qu’annonce la leçon."
    },
    {
      "enonce": "Quelle place la leçon 9 (2 h) occupe-t-elle dans la deuxième partie du programme ?",
      "options": [
        "Elle ouvre la série des pays tropicaux, avant les cultures commerciales puis les mutations récentes",
        "Elle clôt la partie rurale, après la pêche",
        "Elle traite déjà de l’agriculture européenne",
        "Elle se place après la leçon 13 sur les pays neufs"
      ],
      "correct": 0,
      "explication": "Le programme suit un ordre chronologique : formes traditionnelles (9), cultures commerciales installées par la colonisation (10), mutations récentes (11), puis Europe (12), pays neufs (13) et pêche (14)."
    },
    {
      "enonce": "Les formes traditionnelles d’agriculture tropicale sont-elles archaïques ?",
      "options": [
        "Oui : elles ignorent toute technique",
        "Oui : elles ont totalement disparu du monde tropical",
        "Non : elles sont plus rentables que l’agriculture commerciale",
        "Non : elles sont adaptées à un milieu à cycles courts, sols fragiles et peu de capital"
      ],
      "correct": 3,
      "explication": "La fiche refuse le jugement : le système traditionnel correspond à des conditions précises et ne devient insuffisant que sous pression démographique. Le mépriser, ou inversement le croire optimal en toute circonstance, sont les deux pièges."
    }
  ]);

  JK.quizDeLecon("geo-premiere-c3-l2", [
    {
      "enonce": "Qu’associe le système de plantation selon la fiche ?",
      "options": [
        "Une monoculture d’exportation, une main-d’œuvre nombreuse et un capital venu d’ailleurs",
        "Une parcelle familiale tournée vers l’autoconsommation",
        "Une riziculture irriguée à faible densité de population",
        "Un élevage extensif mécanisé des pays neufs"
      ],
      "correct": 0,
      "explication": "C’est la définition en trois termes de la plantation. L’autoconsommation relève de la vivrière et de la leçon 9, l’extension mécanisée de la leçon 13 sur les pays neufs ; les deux premières leçons du chapitre sont à distinguer."
    },
    {
      "enonce": "Que fait la culture commerciale au village, selon la leçon 10 ?",
      "options": [
        "Elle le protège de toute variation des prix mondiaux",
        "Elle remplace partout la culture vivrière",
        "Elle l’insère dans le marché mondial mais rend le revenu dépendant des cours et des normes phytosanitaires",
        "Elle supprime le besoin d’exporter"
      ],
      "correct": 2,
      "explication": "Cacao, café, arachide, coton, canne, hévéa, palmier à huile et banane relient le producteur au marché mondial : le débouché s’achète au prix d’une double dépendance, aux cours et aux exigences sanitaires."
    },
    {
      "enonce": "Dans la deuxième partie du programme, où se place la leçon 10 (2 h) ?",
      "options": [
        "Après les mutations récentes (leçon 11) et avant les formes traditionnelles (leçon 9)",
        "Après les formes traditionnelles (leçon 9) et avant les mutations récentes (leçon 11)",
        "À la fin de la partie rurale, après la pêche",
        "Entre la leçon 12 sur l’Europe et la leçon 13 sur les pays neufs"
      ],
      "correct": 1,
      "explication": "L’ordre chronologique du programme est traditionnel, commercial, mutations : la leçon 10 occupe le milieu de la série consacrée aux pays tropicaux, la leçon 14 de la pêche la ferme."
    }
  ]);

  JK.quizDeLecon("geo-premiere-c3-l3", [
    {
      "enonce": "En quoi les mutations récentes des pays tropicaux sont-elles doubles ?",
      "options": [
        "Elles ne touchent que les techniques",
        "Elles ne concernent que le foncier",
        "Elles se limitent aux engrais",
        "Elles sont techniques — variétés, petite irrigation, engrais, machette motorisée — et sociales : salariat agricole, terres accaparées, horticulture d’exportation, agrocarburants"
      ],
      "correct": 3,
      "explication": "La fiche range d’un côté les nouveautés techniques, de l’autre les recompositions sociales. Retenir l’un des deux volets seulement, comme le font les distracteurs, est le piège de cette leçon."
    },
    {
      "enonce": "Que ferme la leçon 11 dans la série consacrée aux pays tropicaux ?",
      "options": [
        "Elle l’ouvre, avant la leçon 9",
        "Elle la ferme, avant la leçon 12 sur l’Europe",
        "Elle remplace le TP de la leçon 6",
        "Elle introduit la partie sur le milieu urbain"
      ],
      "correct": 1,
      "explication": "Les leçons 9, 10 et 11 forment un triptyque chronologique sur les pays tropicaux ; la leçon 12 passe ensuite à l’Europe, la 13 aux pays neufs, la 14 à la pêche, et la partie urbaine ne commence qu’à la leçon 15."
    },
    {
      "enonce": "Comment la fiche demande-t-elle de traiter la révolution verte ?",
      "options": [
        "En pesant ses effets et ses limites : récoltes accrues, mais écarts creusés, nappes polluées et dépendance aux intrants",
        "En la condamnant sans nuance",
        "En la présentant comme un succès sans contrepartie",
        "En affirmant qu’elle n’a rien changé aux récoltes"
      ],
      "correct": 0,
      "explication": "Variétés à haut rendement, irrigation, engrais et pesticides du paquet technique des années 1960-70 ont augmenté les récoltes ; la Vigilance exige le même bilan en négatif. Le programme demande des effets et des limites, pas un verdict."
    }
  ]);

  JK.quizDeLecon("geo-premiere-c3-l4", [
    {
      "enonce": "Selon la leçon 12, quelle évolution traverse l’agriculture européenne ?",
      "options": [
        "Elle abandonne la mécanisation",
        "Elle redevient traditionnelle et vivrière",
        "Elle passe de productiviste à multifonctionnelle : rendements élevés, excédents, aides contestées, normes environnementales et départ des jeunes",
        "Elle se tourne entièrement vers l’exportation tropicale"
      ],
      "correct": 2,
      "explication": "C’est la trajectoire décrite par la fiche : à force de produire, l’Europe a engendré des excédents et un débat sur les aides, d’où les normes environnementales et le renouvellement générationnel difficile. Le mot « multifonctionnelle » désigne cette conversion."
    },
    {
      "enonce": "Quel espace la fiche propose-t-elle comme exemple de la leçon sur l’agriculture européenne ?",
      "options": [
        "Le Cerrado brésilien",
        "La plaine du Pô",
        "Le bassin arachidier du Sine",
        "Le delta du Mékong"
      ],
      "correct": 1,
      "explication": "L’exercice d’association de la fiche répond : plaine du Pô pour l’Europe laitière et céréalière encadrée, Cerrado pour les pays neufs en leçon 13, Sine pour l’arachide en leçons 9 et 10, delta du Mékong pour la riziculture tropicale en leçons 9 et 11."
    },
    {
      "enonce": "Pourquoi le caractère très productif de l’agriculture européenne pose-t-il problème ?",
      "options": [
        "Il produit trop peu pour nourrir les villes",
        "Il est entièrement tourné vers l’exportation hors d’Europe",
        "Il ignore totalement les aides publiques",
        "Il engendre des excédents et des aides contestées, sous la pression de normes environnementales"
      ],
      "correct": 3,
      "explication": "La leçon 12 associe des rendements élevés à leurs effets : surplus, dépendance aux aides et normes environnementales, avec un départ des jeunes. Croire que le problème vient d’un manque de production est l’erreur classique sur ce chapitre."
    }
  ]);

  JK.quizDeLecon("geo-premiere-c3-l5", [
    {
      "enonce": "Qu’est-ce qu’un « pays neuf » au sens de la leçon 13 ?",
      "options": [
        "Un espace de colonisation récente aux grandes propriétés mécanisées : pampas argentines, Midwest, Cerrado brésilien, terres rouges d’Australie",
        "Un État devenu récemment indépendant",
        "Une région européenne aux villages reconstruits",
        "Un pays tropical à culture itinérante récente"
      ],
      "correct": 0,
      "explication": "La fiche définit un espace agraire, non une date d’indépendance : grandes exploitations, mécanisation, science agronomique et exportation massive. Confondre « neuf » avec « jeune État » est le contresens attendu."
    },
    {
      "enonce": "Quelles contraintes la leçon 13 associe-t-elle aux formes modernes de mise en valeur des pays neufs ?",
      "options": [
        "L’absence totale de mécanisation",
        "Le refus de toute exportation",
        "La déforestation, la concentration foncière et la consommation d’eau",
        "La domination de la culture sur brûlis"
      ],
      "correct": 2,
      "explication": "Deux faces d’un même système : intégration industrielle et exportation massive, mais aussi déforestation, terres concentrées et forte consommation d’eau. Le brûlis relève de la leçon 9, pas de la leçon 13."
    }
  ]);

  JK.quizDeLecon("geo-premiere-c3-l6", [
    {
      "enonce": "Quels traits caractérisent la pêche artisanale, telle que la leçon 14 l’oppose à la pêche moderne ?",
      "options": [
        "Le navire-usine et la congélation à bord",
        "La pirogue, un équipage familial, le marché local et la femme transformatrice",
        "Les flottes longue distance et les accords entre États",
        "La production de farines de poisson destinées à l’exportation"
      ],
      "correct": 1,
      "explication": "La leçon sépare deux pêches : l’une artisanale et locale, l’autre industrielle avec navires-usines, thon, congélation et accords de pêche. Trois des réponses décrivent la forme moderne, la bonne réponse est le versant artisanal."
    },
    {
      "enonce": "Pourquoi le programme termine-t-il la partie rurale par la pêche ?",
      "options": [
        "Parce qu’elle applique la grille traditionnel contre moderne à une ressource mobile et commune",
        "Parce que la pêche pèse plus lourd que l’agriculture",
        "Parce qu’elle ouvre directement la partie sur le milieu urbain",
        "Parce qu’aucune autre activité ne se prête à la comparaison"
      ],
      "correct": 0,
      "explication": "La correction de la fiche est sans ambiguïté : la ressource mobile et commune fait retrouver la question du droit, du capital, du marché et de la surexploitation, la même grille que les leçons 9 à 13."
    },
    {
      "enonce": "Que faut-il distinguer quand on compare des chiffres de pêche ?",
      "options": [
        "Les captures du Nord et celles du Sud",
        "Le poids vif et le poids séché du poisson",
        "Le thon et les autres espèces",
        "Le tonnage capturé, le tonnage débarqué et le tonnage transformé"
      ],
      "correct": 3,
      "explication": "C’est une Vigilance de la leçon : une flotte peut capturer en zone étrangère, débarquer ailleurs et transformer sur un autre continent ; les trois chiffres ne racontent pas la même chose. S’arrêter à un seul fausse toute la comparaison."
    }
  ]);
})();
