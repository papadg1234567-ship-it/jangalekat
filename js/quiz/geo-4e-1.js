/* Quiz des leçons 1 à 11 de géographie de la classe de 4ᵉ — Jàngalekat. Une leçon = un quiz = 3 questions.
   Contenu auto-rédigé par Jàngalekat d’après les fiches du projet ; non relu par un enseignant.
   Les leçons déjà partiellement couvertes dans js/quiz/herites.js (c1-l3, c2-l3, c3-l2) sont complétées
   ici à trois questions, sans répéter les questions écrites. */
(function () {
  'use strict';

  JK.quizDeLecon("geo-4e-c1-l1", [
    {
      "enonce": "Que demande exactement la leçon 1 du chapitre I de 4ᵉ sur l’Afrique de l’Ouest ?",
      "options": [
        "Les problèmes de développement et leurs perspectives",
        "Une étude de situation : localisation-carte, avec les notions d’orientation et de représentation",
        "Un plan facteurs, manifestations, conséquences",
        "L’inventaire des organisations régionales ouest-africaines"
      ],
      "correct": 1,
      "explication": "La leçon 1 est une localisation-carte fondée sur l’orientation et la représentation. Le plan facteurs-manifestations-conséquences est celui de la leçon 6 sur l’Afrique, et les organisations régionales relèvent de la leçon 3."
    },
    {
      "enonce": "Pourquoi l’étude de situation de la leçon 1 est-elle placée avant les problèmes de développement de la leçon 2 ?",
      "options": [
        "Parce qu’elle est la plus courte des trois leçons du chapitre",
        "Parce qu’elle présente d’abord les organisations régionales",
        "Parce qu’elle remplace la leçon 3 sur l’intégration",
        "Parce qu’il faut situer les façades maritimes, les pays enclavés et les voisins pour expliquer ensuite routes, ports et échanges"
      ],
      "correct": 3,
      "explication": "C’est la méthode du programme : orienter et représenter avant d’expliquer. Le chapitre I compte trois leçons, de la leçon 1 à la leçon 3, et le volume horaire n’explique pas cet ordre."
    },
    {
      "enonce": "Un élève rédige son étude de situation. Lequel de ces gestes est une analyse et non une localisation ?",
      "options": [
        "Indiquer les limites de l’espace étudié",
        "Placer les pays enclavés",
        "Nommer les façades maritimes",
        "Expliquer pourquoi les échanges intra-régionaux restent faibles"
      ],
      "correct": 3,
      "explication": "Les trois premiers gestes sont de la localisation ; expliquer un niveau d’échanges relève des leçons 2 et 3. C’est le hors sujet classique de la leçon 1."
    }
  ]);

  JK.quizDeLecon("geo-4e-c1-l2", [
    {
      "enonce": "Qu’appelle-t-on le désenclavement d’un pays ?",
      "options": [
        "Les routes, rails et ports qui donnent accès à la mer à un pays sans façade maritime",
        "La suppression des droits de douane entre voisins",
        "Le regroupement de plusieurs États autour d’une monnaie commune",
        "L’ouverture d’un port à l’investissement étranger"
      ],
      "correct": 0,
      "explication": "Un pays enclavé n’a pas de façade maritime : le désenclavement désigne les infrastructures qui lui ouvrent un accès à la mer, pas une mesure douanière ou monétaire."
    },
    {
      "enonce": "Quel volume horaire le programme de 4ᵉ consacre-t-il à la leçon 2, et quelle leçon la suit ?",
      "options": [
        "2 h, puis la leçon 4 sur l’Afrique",
        "3 h, puis la leçon 3 sur les problèmes d’intégration",
        "4 h, puis la leçon 3",
        "3 h, puis directement le chapitre III sur l’Europe"
      ],
      "correct": 1,
      "explication": "Le chapitre I tient en trois leçons : étude de situation, problèmes de développement (3 h), problèmes d’intégration (2 h). Les 4 h correspondent à la leçon 6 du chapitre II."
    },
    {
      "enonce": "Un camarade écrit : « l’Afrique de l’Ouest échange surtout avec ses voisins ». Que répond la fiche ?",
      "options": [
        "Oui, ces échanges dépassent la moitié des flux régionaux",
        "Oui, depuis que la ZLECAf est opérationnelle",
        "Non : elle exporte surtout des matières premières vers l’Europe et l’Asie, avec des échanges intra-régionaux faibles, de l’ordre d’un dixième à un sixième selon les sources et les années",
        "Non : elle n’exporte que du pétrole brut"
      ],
      "correct": 2,
      "explication": "L’ordre de grandeur est prudentiel dans la fiche : les pourcentages varient selon qu’on inclut ou non le commerce informel, donc on cite la source et l’année au lieu d’afficher un chiffre définitif."
    }
  ]);

  /* Leçon déjà ouverte par une question sur la CEDEAO dans js/quiz/herites.js : on complète sans la répéter. */
  JK.quizDeLecon("geo-4e-c1-l3", [
    {
      "enonce": "Un camarade affirme : « la CEDEAO a supprimé les droits de douane, donc le commerce ouest-africain est facile ». Que répondre ?",
      "options": [
        "Il a raison : aucune taxe ne subsiste dans la région",
        "Il a tort : la CEDEAO n’a jamais signé de protocole sur les droits de douane",
        "En partie seulement : formalités, contrôles de police, état des routes et taxes illégales aux postes limitent les échanges",
        "Il a raison pour l’UEMOA, qui dispose d’une monnaie commune"
      ],
      "correct": 2,
      "explication": "Une organisation signée n’est pas une organisation appliquée : il faut distinguer les textes des pratiques. Le protocole de 1994 reconnaît le droit de séjour et un passeport communautaire, et la composition de la CEDEAO est mouvante depuis 2022."
    },
    {
      "enonce": "La grille « problèmes d’intégration » se répète d’un espace régional à l’autre en 4ᵉ. Où trouve-t-on cette leçon pour l’Europe et pour l’Amérique ?",
      "options": [
        "Leçon 5 et leçon 7",
        "Leçon 8 et leçon 12",
        "Leçon 11 et leçon 16",
        "Leçon 9 et leçon 14"
      ],
      "correct": 2,
      "explication": "Mêmes mots, mais on change seulement d’échelle : Afrique de l’Ouest leçon 3, Europe leçon 11, Amérique leçon 16 ; en Asie (leçon 20) et en Océanie (leçon 22), la leçon regroupe aussi les disparités économiques et sociales."
    }
  ]);

  JK.quizDeLecon("geo-4e-c2-l1", [
    {
      "enonce": "Quels repères de situation de l’Afrique le programme demande-t-il de savoir placer ?",
      "options": [
        "Le Sahara au nord, l’Afrique du Sud au sud, deux océans, et un continent traversé presque symétriquement par l’équateur",
        "Une seule façade océanique et un désert central",
        "L’équateur au nord et le Sahara au centre",
        "La liste des capitales des cinquante et un États"
      ],
      "correct": 0,
      "explication": "La leçon 4 est une localisation-carte : on place les limites et les grands repères. Apprendre cinquante et un capitales n’est pas attendu ; le nombre d’États sert à rappeler la diversité du continent."
    },
    {
      "enonce": "Combien d’heures compte la leçon 4, et que traite la leçon 5 qui la suit ?",
      "options": [
        "1 h ; la diversité physique et humaine (3 h)",
        "2 h ; la pauvreté et la dépendance",
        "3 h ; la coopération internationale",
        "4 h ; la diversité physique et humaine"
      ],
      "correct": 0,
      "explication": "Ordre du chapitre II : leçon 4 étude de situation (1 h), leçon 5 diversité physique et humaine (3 h), leçon 6 pauvreté et dépendance (4 h), leçon 7 coopération et aide (3 h)."
    },
    {
      "enonce": "Un devoir commence par : « l’Afrique est un grand pays pauvre ». Que corrige d’abord la leçon 4 ?",
      "options": [
        "Rien : le mot pays reste commode",
        "L’Afrique est un espace régional de cinquante et un États très contrastés, et le programme commence justement par sa diversité",
        "Il faut écrire « l’Afrique du Nord »",
        "Le continent n’est pas pauvre"
      ],
      "correct": 1,
      "explication": "Vigilance : ne jamais parler de l’Afrique comme d’un seul pays. La leçon 4 pose les limites et la variété des États avant toute explication."
    }
  ]);

  JK.quizDeLecon("geo-4e-c2-l2", [
    {
      "enonce": "Dans la leçon 5, que commandent principalement les contrastes physiques du continent africain ?",
      "options": [
        "La latitude et la pluie",
        "La seule altitude",
        "Les frontières héritées de la colonisation",
        "La distance aux océans"
      ],
      "correct": 0,
      "explication": "De là vient l’étagement des milieux : désert chaud au nord, Sahel, savanes soudanaises, forêts humides guinéennes et congolaises, hauts plateaux de l’Est, caps méditerranéens au nord et au sud."
    },
    {
      "enonce": "Quelle grille le chapitre II applique-t-il à l’Afrique, et que couvre la leçon 5 ?",
      "options": [
        "Une grille inédite ; la leçon 5 couvre la pauvreté",
        "La grille du chapitre I, déjà utilisée pour l’Afrique de l’Ouest — situation, milieu, population, économie, problèmes, coopération — et la leçon 5 couvre le milieu et les hommes",
        "La grille du chapitre III ; la leçon 5 couvre les organisations régionales",
        "La grille du chapitre I ; la leçon 5 couvre la coopération"
      ],
      "correct": 1,
      "explication": "On répète la même méthode en changeant d’échelle : leçon 4 situation, leçon 5 milieu et hommes, leçon 6 pauvreté et dépendance, leçon 7 coopération et aide."
    },
    {
      "enonce": "Un camarade conclut : « l’Afrique a un climat désertique et une population à peu près uniforme ». Que rappelle la leçon 5 ?",
      "options": [
        "Rien : les deux affirmations sont justes",
        "Seule la population est diverse, le climat est uniforme",
        "Les milieux vont du désert à la forêt humide, et la diversité humaine est tout aussi forte : milliers de langues et de groupes, répartition inégale, croissance démographique parmi les plus rapides du monde",
        "Les déserts couvrent la moitié du continent"
      ],
      "correct": 2,
      "explication": "La dernière option est un chiffre inventé : la fiche n’en donne aucun, et c’est précisément le genre d’affirmation à éviter en copie."
    }
  ]);

  /* La question sur le plan facteurs-manifestations-conséquences de cette leçon est déjà dans js/quiz/herites.js. */
  JK.quizDeLecon("geo-4e-c2-l3", [
    {
      "enonce": "Au sens de la leçon 6, qu’est-ce qu’une dépendance économique ?",
      "options": [
        "Une situation où un extérieur décide : prix mondiaux fixés ailleurs, aide conditionnelle, entreprises et techniques venues de l’étranger",
        "Une situation où un État n’a pas de façade maritime",
        "L’obligation d’emprunter seulement aux pays voisins",
        "Un prêt sans intérêts ni remboursement"
      ],
      "correct": 0,
      "explication": "L’enclavement est un handicap de transport, pas une dépendance économique. La dépendance se reconnaît au fait que la décision — prix, conditions, techniques — se prend hors du pays."
    },
    {
      "enonce": "Un élève écrit : « l’Afrique est pauvre, donc elle manque de richesses ». Que corrige la vigilance de la leçon 6 ?",
      "options": [
        "Il a raison : le continent n’exporte rien",
        "La pauvreté vient seulement du climat",
        "Il faut écrire « l’Afrique rurale est pauvre »",
        "Pauvreté n’est pas synonyme d’absence de richesses : le continent exporte des matières précieuses et la valeur est capturée ailleurs"
      ],
      "correct": 3,
      "explication": "Le renversement attendu : des recettes d’exportation, mais une transformation et une décision prises ailleurs. La pauvreté s’explique par un enchaînement de facteurs anciens et de mécanismes actuels, pas par un manque de travail des producteurs."
    }
  ]);

  JK.quizDeLecon("geo-4e-c2-l4", [
    {
      "enonce": "Que désigne la conditionnalité de l’aide au développement ?",
      "options": [
        "Le versement d’un don sans aucune contrepartie",
        "L’obligation d’acheter les produits du bailleur",
        "Les réformes exigées par les bailleurs en échange du financement",
        "La conversion de la dette en monnaie locale"
      ],
      "correct": 2,
      "explication": "La conditionnalité porte sur les réformes demandées. Elle illustre le double visage étudié en leçon 7 : une aide qui finance et forme, mais peut aussi déséquilibrer les budgets et imposer des réformes sociales coûteuses."
    },
    {
      "enonce": "Pourquoi le programme place-t-il la leçon 7 sur la coopération après la leçon 6 sur la pauvreté et la dépendance ?",
      "options": [
        "Parce que l’aide se comprend comme une réponse à un diagnostic déjà posé : l’élève peut en discuter l’efficacité au lieu de la recevoir comme une donnée",
        "Parce qu’elle est la plus courte des quatre leçons du chapitre",
        "Parce qu’elle ne suppose aucune connaissance des leçons précédentes",
        "Parce qu’elle clôt toujours l’année scolaire"
      ],
      "correct": 0,
      "explication": "Le chapitre II court de la leçon 4 à la leçon 7 : 4 h pour la leçon 6, 3 h pour la leçon 7, qui arrive après le plan facteurs, manifestations, conséquences."
    },
    {
      "enonce": "Un devoir résume : « l’aide sauve des vies, donc elle est toujours bénéfique ». Que demande la leçon 7 ?",
      "options": [
        "De conclure qu’il faut la supprimer",
        "De comparer uniquement les bailleurs publics et privés",
        "De distinguer don, prêt, aide technique et aide d’urgence, et de rappeler qu’une aide peut alourdir la dette ou financer des projets inadaptés",
        "De ne retenir que l’aide d’urgence humanitaire"
      ],
      "correct": 2,
      "explication": "Chaque forme a ses limites : le don est utile mais parfois insuffisant ou détourné, le prêt finance mais alourdit la dette future, l’aide technique forme mais dépend d’expatriés et s’arrête avec le projet."
    }
  ]);

  JK.quizDeLecon("geo-4e-c3-l1", [
    {
      "enonce": "Comment la leçon 8 décrit-elle la situation de l’Europe ?",
      "options": [
        "Un archipel isolé de l’Ancien Monde",
        "Une plaine continue sans péninsules",
        "Un continent entièrement méditerranéen",
        "Une « presqu’île de l’Asie », ouverte sur l’Atlantique et découpée en grandes péninsules"
      ],
      "correct": 3,
      "explication": "Le mot presqu’île vient de la continuité terrestre avec l’Asie ; latitude favorable aux échanges et façade atlantique sont les autres repères attendus de la localisation."
    },
    {
      "enonce": "Dans la grille du chapitre III, que traitent les leçons 9 et 10 de l’Europe, entre situation et intégration ?",
      "options": [
        "Le relief et le climat, puis la population",
        "La pauvreté et la dépendance, puis l’aide",
        "Les unités naturelles, puis la diversité des peuples",
        "Les disparités économiques, puis la coopération"
      ],
      "correct": 0,
      "explication": "Même grille pour chaque espace : situation, milieu, population, disparités, intégration. Les leçons 8 à 11 courent de la localisation aux problèmes d’intégration de l’Europe."
    },
    {
      "enonce": "Un élève écrit : « l’Europe a une monnaie unique ». Que faut-il préciser d’abord ?",
      "options": [
        "Que cela vaut pour tout le continent",
        "De quel espace on parle : continent géographique, Union européenne ou zone euro, car la monnaie partagée ne concerne qu’une partie des États",
        "Que la zone euro réunit tous les membres de l’Union",
        "Que l’Europe ne connaît aucune organisation régionale"
      ],
      "correct": 1,
      "explication": "Trois espaces portent le même nom. Cette précision compte dès la leçon 8, car elle conditionne la lecture des leçons 10 et 11."
    }
  ]);

  /* La question reliant plaine ouverte et influences océaniques est déjà dans js/quiz/herites.js. */
  JK.quizDeLecon("geo-4e-c3-l2", [
    {
      "enonce": "Quels fleuves la leçon 9 donne-t-elle comme repères structurants des espaces économiques européens ?",
      "options": [
        "Rhin, Danube, Seine, Volga",
        "Mississippi, Amazonie, Paraná, Orénoque",
        "Sénégal, Niger, Volta, Gambie",
        "Gange, Brahmapoutre, Mékong, Iangtsé"
      ],
      "correct": 0,
      "explication": "Ils sont présentés comme navigables, réguliers et proches des bassins industriels et agricoles. Les autres groupes de fleuves appartiennent aux leçons sur l’Amérique, l’Afrique et l’Asie."
    },
    {
      "enonce": "Un camarade confond climat océanique et climat continental. Lequel décrit le second ?",
      "options": [
        "Des pluies régulières et des hivers doux",
        "Des étés secs",
        "Des écarts de température exagérés vers l’est",
        "Une neige permanente"
      ],
      "correct": 2,
      "explication": "Océanique : ouest, pluies régulières et hivers doux. Méditerranéen : étés secs. Continental : est, écarts de température accentués. La neige permanente relève d’un autre type, et la cause de cette progression est bien l’ouverture de la plaine d’ouest en est."
    }
  ]);

  JK.quizDeLecon("geo-4e-c3-l3", [
    {
      "enonce": "Quelles caractéristiques la leçon 10 retient-elle pour la population européenne ?",
      "options": [
        "Jeune, rurale et en forte croissance",
        "Nombreuse, dense, ancienne, urbaine, mais vieillissante",
        "Peu nombreuse et très dispersée",
        "Presque uniquement née sur place"
      ],
      "correct": 1,
      "explication": "Faible fécondité, immigration venue d’Afrique, d’Asie et de l’Est, tension sur les retraites et les services : ce sont les quatre faits attendus de la leçon 10."
    },
    {
      "enonce": "Le chapitre III consacre quatre leçons à l’Europe, de la leçon 8 à la leçon 11. Quelle leçon porte sur les problèmes d’intégration ?",
      "options": [
        "La leçon 11",
        "La leçon 10",
        "La leçon 9",
        "La leçon 8"
      ],
      "correct": 0,
      "explication": "Situation (8), relief et climat (9), population (10), intégration (11) : la leçon 11 conclut la grille appliquée à l’Europe."
    },
    {
      "enonce": "Un camarade écrit : « le Luxembourg est peu peuplé, donc il est peu dense ». Que corrige la vigilance ?",
      "options": [
        "Rien : un petit État est forcément peu dense",
        "La densité est calculée avec la population des capitales",
        "Le Luxembourg est l’État le plus peuplé d’Europe",
        "Densité et population totale ne se confondent pas : un État peut être peu peuplé et très dense, ou l’inverse"
      ],
      "correct": 3,
      "explication": "Ce qui compte est le rapport population / superficie. La fiche ne donne aucun chiffre : l’exemple sert seulement à distinguer les deux notions."
    }
  ]);

  JK.quizDeLecon("geo-4e-c3-l4", [
    {
      "enonce": "Que reconnaît la leçon 11 comme réussites de l’intégration européenne ?",
      "options": [
        "Le marché, la monnaie pour une partie des États et la libre circulation",
        "Une armée unique",
        "Une union budgétaire achevée",
        "Une politique migratoire commune"
      ],
      "correct": 0,
      "explication": "Les trois autres items sont précisément ce qui manque : monnaie sans union budgétaire, frontière extérieure sans politique migratoire commune."
    },
    {
      "enonce": "Un devoir conclut : « l’intégration européenne est réussie, donc elle est achevée ». Que répond la vigilance ?",
      "options": [
        "Il a raison : le marché et la monnaie règlent tout",
        "Les succès ne font pas oublier les échecs partiels : monnaie sans union budgétaire, frontière sans politique migratoire commune",
        "L’Union n’a jamais réalisé la libre circulation",
        "L’élargissement constitue un échec complet"
      ],
      "correct": 1,
      "explication": "La leçon 11 fait aussi buter l’Union sur les écarts de richesse entre Ouest et Est, les souverainetés fiscales et sociales et les opinions publiques."
    },
    {
      "enonce": "Pourquoi comparer la leçon 11 avec la leçon 3 sur l’Afrique de l’Ouest ?",
      "options": [
        "Parce que l’Europe et l’Afrique de l’Ouest forment un seul espace régional",
        "Parce que la leçon 11 répète la leçon 3 sans changement",
        "Parce que la leçon 3 est une version abrégée de la leçon 11",
        "Parce que le parallèle est intentionnel : mêmes obstacles nommés « intégration », mais institutionnels et politiques en Europe, fondés sur les infrastructures et les tarifs en Afrique de l’Ouest"
      ],
      "correct": 3,
      "explication": "L’exercice comparatif attendu porte sur la nature des obstacles, et non sur un simple rappel de vocabulaire."
    }
  ]);
})();
