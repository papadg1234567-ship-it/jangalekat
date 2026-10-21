/* Quiz des leçons de SVT et d’histoire de Jàngalekat. Une leçon = un quiz = 3 questions.
   Aucune de ces matières n’a de programme officiel joint ici : les questions ne s’appuient
   que sur le contenu des fiches, sans jamais revendiquer un intitulé ni un libellé de programme.
   Une seule question préexistait par leçon dans herites.js : les deux autres sont ajoutées ici.
   Contenu auto-rédigé par Jàngalekat, non relu par un enseignant. */
(function () {
  'use strict';





  JK.quizDeLecon("fiche-constituants-vivant", [
    {
      "enonce": "Quel couple réactif-résultat signale la présence d’un ose réducteur comme le glucose ?",
      "options": [
        "L’eau iodée, qui donne une couleur bleu-noir",
        "La liqueur de Fehling chauffée au bain-marie, qui donne un précipité brique",
        "Le réactif de biuret, qui donne une coloration violetée",
        "L’éthanol, qui donne une émulsion blanchâtre"
      ],
      "correct": 1,
      "explication": "Fehling détecte un ose réducteur (glucose) et exige une chauffe au bain-marie ; sans elle, le test reste négatif. L’eau iodée révèle l’amidon, le biuret les protéines, l’éthanol les lipides. Le piège est d’oublier la chauffe, ou de confondre le bleu-noir de l’amidon avec le rouge brique du glucose."
    },
    {
      "enonce": "Un aliment donne un test à l’eau iodée négatif (il reste brun-jaune). Peut-on conclure qu’il ne contient aucun sucre ?",
      "options": [
        "Oui : un test négatif prouve l’absence de toute matière organique",
        "Oui : l’eau iodée colore tous les sucres, donc pas de couleur veut dire pas de sucre",
        "Non, mais seulement parce qu’il aurait fallu deux gouttes de réactif",
        "Non : l’eau iodée ne révèle que l’amidon ; un résultat négatif ne prouve pas l’absence d’autres sucres comme le glucose"
      ],
      "correct": 3,
      "explication": "Chaque test cible une seule famille de molécules ; l’eau iodée est propre à l’amidon, pas au glucose. Un aliment est un mélange, et les tests ne donnent qu’une présomption de présence, sans doser ni prouver l’absence des autres. Le piège est de généraliser un test négatif à l’absence de tous les sucres."
    }
  ]);

  JK.quizDeLecon("histoire-6e-c2-l1", [
    {
      "enonce": "D’après la fiche, que marque le repère « environ −10 000 » ?",
      "options": [
        "L’apparition de la première écriture cunéiforme en Mésopotamie",
        "L’édification de la pyramide de Khéops à Gizeh",
        "Le début du Néolithique : agriculture, élevage et premiers villages sédentaires",
        "La rédaction du code de Hammurabi à Babylone"
      ],
      "correct": 2,
      "explication": "Le Néolithique, à partir d’environ −10 000, voit l’homme passer de prédateur à producteur (agriculture, élevage, poterie, villages sédentaires). Les trois autres repères du même chapitre (vers −3300, −2550, −1790) sont beaucoup plus récents et concernent des civilisations urbaines déjà historisées. Le piège est d’assimiler le Néolithique, sans écriture, à l’invention de l’écriture."
    },
    {
      "enonce": "Dire que « l’Histoire commence avec l’invention de l’écriture » signifie-t-il qu’un peuple sans écriture n’a pas de passé ?",
      "options": [
        "Non : ces sociétés ont une Préhistoire, connue par les fouilles (outils, ossements, peintures)",
        "Oui : sans textes écrits, on ne peut rien savoir et leur passé n’existe pas",
        "Oui : Préhistoire et Histoire désignent exactement la même période",
        "Non : l’écriture n’a jamais servi à rien pour connaître le passé"
      ],
      "correct": 0,
      "explication": "La Préhistoire est la période sans écriture, pas une absence de passé : elle se lit dans les vestiges. Un document écrit n’est qu’une source parmi d’autres ; l’archéologie, les ossements et les objets complètent ou contredisent les textes. Le piège est de confondre le sens courant du mot histoire et le découpage conventionnel qui fait commencer l’Histoire avec l’écriture."
    }
  ]);

  JK.quizDeLecon("histoire-5e-c1-l4", [
    {
      "enonce": "Dans cette leçon, que désigne le repère « vers 1235 » ?",
      "options": [
        "La défaite de Songhaï à Tondibi face aux troupes marocaines",
        "Le pèlerinage de Kankou Moussa au Caire et à La Mecque",
        "L’organisation de l’Empire de Songhaï par Askia Mohamed",
        "La bataille de Kirina, avec laquelle Soundiata Keïta fonde l’Empire du Mali"
      ],
      "correct": 3,
      "explication": "Vers 1235, après Kirina, Soundiata Keïta fonde l’Empire du Mali. La défaite de Songhaï à Tondibi est en 1591, le pèlerinage de Kankou Moussa en 1324, et Askia Mohamed organise l’empire entre 1493 et 1528. Le piège est de confondre la fondation de l’empire avec un événement ultérieur ; la date ancienne reste « vers », car deux sources peuvent donner des années différentes."
    },
    {
      "enonce": "Selon la fiche, comment l’islam est-il principalement parvenu jusqu’aux sociétés d’Afrique de l’Ouest ?",
      "options": [
        "Par une conquête militaire venue directement du Moyen-Orient",
        "Surtout par le commerce transsaharien et les marchands ; les souverains l’ont adopté pour les échanges et l’écrit",
        "Par les griots, qui ont fait disparaître les croyances traditionnelles",
        "Par un apport extérieur qui aurait remplacé des sociétés sans organisation"
      ],
      "correct": 1,
      "explication": "La fiche insiste : l’islam arrive surtout par le commerce, avec les marchands berbères et dyoula, plus que par la conquête, et les croyances traditionnelles persistent à côté de lui (cohabitations et syncrétismes). Le piège est double : parler de conquête, ou présenter une « civilisation venue de l’extérieur », ce qui masquerait les sociétés savantes déjà organisées de la boucle du Niger."
    }
  ]);

  JK.quizDeLecon("histoire-4e-c1-l4", [
    {
      "enonce": "Dans la traite atlantique, que désigne le mot « triangle » ?",
      "options": [
        "Le circuit des navires : produits manufacturés vers l’Afrique, captifs vers l’Amérique, denrées coloniales vers l’Europe",
        "Le trajet des captifs entassés dans les navires pendant l’effroyable passage",
        "Le plan des cellules où les captifs étaient gardés dans les comptoirs",
        "La forme des habitations de sucre et de café des colonies"
      ],
      "correct": 0,
      "explication": "Le triangle nomme le circuit complet à trois côtés : Europe vers Afrique (tissus, alcool, armes, fer), Afrique vers Amériques (personnes captives), Amériques vers Europe (sucre, café, indigo, coton). L’effroyable passage n’est qu’un des côtés de ce circuit. Le piège est de réduire le triangle au seul trajet maritime ou à un lieu."
    },
    {
      "enonce": "L’île de Gorée, près de Dakar, est un grand lieu de mémoire de la traite. Peut-on en conclure que la plupart des personnes déportées sont parties de cette île ?",
      "options": [
        "Oui : presque tous les navires négriers partaient uniquement de Gorée",
        "Oui : les chiffres de la traite assignent les 12 à 15 millions de déportés au seul comptoir de Gorée",
        "Non : l’essentiel de la traite passait par d’autres comptoirs de la côte ; Gorée n’était pas le principal port de départ",
        "Non : Gorée n’a jamais été un comptoir de la traite"
      ],
      "correct": 2,
      "explication": "Les historiens le rappellent : d’autres comptoirs comme Ouidah ou Lomboko ont eu une part bien plus grande, et l’estimation d’environ 12 à 15 millions de personnes déportées vaut pour l’ensemble de la traite atlantique, jamais pour un port isolé. Le piège est de confondre un lieu de mémoire essentiel avec une réalité statistique, ou de nier son rôle de comptoir."
    }
  ]);

  JK.quizDeLecon("histoire-3e-c2-l4", [
    {
      "enonce": "Quand la république du Sénégal est-elle seule proclamée, après l’éclatement de la Fédération du Mali ?",
      "options": [
        "Le 20 juin 1960, à l’indépendance de la Fédération",
        "Le 20 août 1960, Léopold Sédar Senghor en devenant le premier président",
        "Le 4 avril 1959, à la naissance de la Fédération",
        "En 1946, avec la loi Lamine Guèye"
      ],
      "correct": 1,
      "explication": "Deux dates de 1960 se suivent : le 20 juin, la Fédération du Mali (Sénégal et Soudan français) accède à l’indépendance ; après son éclatement, le 20 août, la république du Sénégal est proclamée seule, avec Senghor à sa tête. Le 4 avril 1959 crée la Fédération et la loi Lamine Guèye est de 1946. Le piège est de citer « 1960 » sans préciser de quel État on parle."
    },
    {
      "enonce": "Pour écrire l’histoire coloniale du Sénégal, pourquoi la fiche conseille-t-elle de croiser les sources ?",
      "options": [
        "Parce que toutes les archives coloniales ont été détruites et sont inutilisables",
        "Parce que seule la tradition orale fait foi et que les textes sont faux",
        "Parce qu’il ne subsiste aucune source écrite pour la période coloniale",
        "Parce que cette histoire est en partie écrite par l’administration coloniale : il faut la confronter aux sources orales et africaines"
      ],
      "correct": 3,
      "explication": "Les rapports de l’administration enregistrant l’impôt, le travail forcé et les résistances portent son point de vue ; il faut les croiser avec les sources orales et africaines pour restituer le point de vue des colonisés. Le piège symétrique est de prendre ces archives pour une vérité neutre, ou de les rejeter en bloc comme fausses."
    }
  ]);

})();
