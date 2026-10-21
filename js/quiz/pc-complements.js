/* Leçons complémentaires de physique-chimie, rédigées par Jàngalekat.
   Elles enrichissent les révisions sans être présentées comme une liste officielle.
   Chaque leçon possède trois questions auto-rédigées, non relues par un enseignant. */
(function () {
  'use strict';

  let numeroQuestion = 0;
  function quiz(id, lignes) {
    const questions = lignes.map(([enonce, reponse, distracteurs, explication]) => {
      const correct = numeroQuestion % 4;
      numeroQuestion += 1;
      const options = distracteurs.slice();
      options.splice(correct, 0, reponse);
      return { enonce, options, correct, explication };
    });
    JK.quizDeLecon(id, questions);
  }

  quiz('pc-6e-c1-l1', [
    ['Quels sont les trois états courants de la matière ?', 'solide, liquide et gazeux', ['solide, chaud et froid', 'dur, mou et gazeux', 'liquide, léger et lourd'], 'Les solides, les liquides et les gaz sont les trois états étudiés dans cette leçon.'],
    ['Quelle propriété décrit un liquide dans un récipient ?', 'Il prend la forme du récipient et garde son volume.', ['Il garde toujours sa forme propre.', 'Il remplit tout le récipient sans limite.', 'Il ne peut pas s’écouler.'], 'Un liquide est déformable et s’écoule, mais son volume reste déterminé.'],
    ['Que devient généralement un glaçon laissé dans une pièce chaude ?', 'Il fond et devient de l’eau liquide.', ['Il se transforme directement en air.', 'Il devient plus solide.', 'Il disparaît sans changement d’état.'], 'La fusion est le passage de l’état solide à l’état liquide.']
  ]);
  quiz('pc-6e-c1-l2', [
    ['Quel instrument convient pour mesurer la longueur d’une table ?', 'une règle graduée ou un mètre', ['un thermomètre', 'une balance', 'un chronomètre'], 'Une règle ou un mètre gradué sert à mesurer une longueur.'],
    ['Quelle unité usuelle convient à la masse d’un cartable ?', 'le kilogramme', ['le litre', 'le mètre', 'la seconde'], 'La masse d’un cartable se mesure couramment en kilogrammes.'],
    ['Quel instrument sert à mesurer la durée d’une course ?', 'un chronomètre', ['une éprouvette graduée', 'un dynamomètre', 'un thermomètre'], 'Le chronomètre mesure une durée, par exemple celle d’une course.']
  ]);
  quiz('pc-6e-c1-l3', [
    ['De quoi est constitué un mélange homogène après agitation ?', 'On ne distingue pas ses constituants à l’œil nu.', ['On distingue toujours chaque grain.', 'Il ne contient qu’un seul corps pur.', 'Ses constituants sont tous solides.'], 'Dans un mélange homogène, les constituants ne sont pas distinguables à l’œil nu.'],
    ['Quelle méthode peut séparer du sable et de l’eau ?', 'la filtration', ['la fusion', 'la distillation du sable', 'la solidification de l’eau'], 'Le filtre retient le sable tandis que l’eau traverse le papier filtrant.'],
    ['Comment séparer deux liquides non miscibles comme l’eau et l’huile ?', 'par décantation', ['par aimantation', 'par tamisage', 'par dissolution'], 'L’eau et l’huile forment deux couches qui peuvent être séparées par décantation.']
  ]);
  quiz('pc-6e-c1-l4', [
    ['Comment appelle-t-on le passage de l’eau liquide en vapeur ?', 'la vaporisation', ['la fusion', 'la solidification', 'la liquéfaction'], 'La vaporisation transforme un liquide en gaz ou en vapeur.'],
    ['Que se passe-t-il lors de la solidification de l’eau ?', 'L’eau liquide devient de la glace.', ['La glace devient de la vapeur.', 'La vapeur devient liquide.', 'L’eau liquide devient du sel.'], 'La solidification est le passage de l’état liquide à l’état solide.'],
    ['À pression ordinaire, à quelle température l’eau pure bout-elle environ ?', '100 °C', ['0 °C', '20 °C', '50 °C'], 'À pression atmosphérique normale, l’ébullition de l’eau pure se produit vers 100 °C.']
  ]);
  quiz('pc-6e-c1-l5', [
    ['Quel gaz est le plus abondant dans l’air sec ?', 'le diazote', ['le dioxygène', 'le dioxyde de carbone', 'la vapeur d’eau'], 'L’air sec contient environ quatre fois plus de diazote que de dioxygène.'],
    ['Quelle observation montre que l’air occupe un volume ?', 'Un ballon gonflé prend de la place.', ['Un ballon vide pèse toujours plus.', 'L’air n’entre pas dans un récipient.', 'L’air ne peut pas être comprimé du tout.'], 'Le ballon se gonfle parce que l’air introduit occupe l’espace intérieur.'],
    ['Quel gaz de l’air est nécessaire à la respiration humaine ?', 'le dioxygène', ['le diazote uniquement', 'l’hélium', 'la vapeur d’eau uniquement'], 'Le dioxygène de l’air est utilisé par l’organisme lors de la respiration.']
  ]);
  quiz('pc-6e-c1-l6', [
    ['Quelles conditions sont nécessaires pour allumer une ampoule dans un circuit simple ?', 'Une pile, une ampoule et des fils formant une boucle fermée.', ['Une pile seule, sans connexion.', 'Une ampoule reliée à un seul fil.', 'Un circuit ouvert avec un interrupteur ouvert.'], 'Le courant circule dans une boucle conductrice fermée alimentée par la pile.'],
    ['Dans un schéma électrique, que représente généralement une pile ?', 'un générateur électrique', ['un isolant', 'un interrupteur ouvert', 'un récepteur lumineux'], 'La pile fournit l’énergie électrique au circuit : c’est un générateur.'],
    ['Que fait un interrupteur ouvert dans le circuit ?', 'Il interrompt le circuit et le courant ne circule plus.', ['Il augmente la tension de la pile.', 'Il remplace les fils conducteurs.', 'Il transforme le courant en lumière.'], 'Un interrupteur ouvert crée une coupure dans la boucle électrique.']
  ]);
  quiz('pc-6e-c1-l7', [
    ['Comment voit-on un objet qui ne produit pas sa propre lumière ?', 'Il diffuse vers l’œil une partie de la lumière qu’il reçoit.', ['Il fabrique toujours sa propre lumière.', 'Il absorbe toute lumière et reste visible.', 'Il envoie de la lumière uniquement vers le Soleil.'], 'Un objet non lumineux est visible lorsqu’il diffuse de la lumière vers l’œil.'],
    ['Quand une ombre nette se forme-t-elle derrière un objet opaque ?', 'Quand l’objet intercepte la lumière provenant d’une source.', ['Quand aucune source n’éclaire la scène.', 'Quand l’objet est transparent.', 'Quand la lumière traverse l’objet sans déviation.'], 'L’objet opaque bloque une partie de la lumière et crée une zone d’ombre.'],
    ['Quel objet est une source primaire de lumière ?', 'une lampe allumée', ['la Lune', 'un cahier éclairé', 'un mur blanc éclairé'], 'Une source primaire produit elle-même la lumière qu’elle émet.']
  ]);
  quiz('pc-6e-c1-l8', [
    ['Quel instrument mesure la durée d’un trajet ?', 'un chronomètre', ['une balance', 'un voltmètre', 'une éprouvette'], 'Une durée se mesure avec une montre ou un chronomètre.'],
    ['Comment décrit-on la trajectoire d’un mobile qui suit une ligne droite ?', 'rectiligne', ['circulaire', 'elliptique', 'immobile'], 'Une trajectoire rectiligne est formée par une ligne droite.'],
    ['Un élève parcourt 12 m en 4 s à vitesse constante. Quelle est sa vitesse moyenne ?', '3 m/s', ['8 m/s', '16 m/s', '48 m/s'], 'La vitesse moyenne vaut distance divisée par durée : 12 m divisés par 4 s donnent 3 m/s.']
  ]);

  quiz('pc-5e-c1-l1', [
    ['Comment calcule-t-on la masse volumique d’un échantillon ?', 'en divisant sa masse par son volume', ['en multipliant sa masse par son volume', 'en divisant son volume par sa masse', 'en additionnant masse et volume'], 'La masse volumique est le quotient de la masse par le volume occupé.'],
    ['Deux objets ont le même volume. Lequel a la plus grande masse volumique ?', 'celui qui a la plus grande masse', ['celui qui a la plus petite masse', 'ils ont toujours la même masse volumique', 'celui qui est le plus clair'], 'À volume égal, la plus grande masse correspond à la plus grande masse volumique.'],
    ['Quelle unité peut exprimer une masse volumique ?', 'g/cm³', ['cm/g', 'g + cm³', 'cm³/g²'], 'Le gramme par centimètre cube est une unité usuelle de masse volumique.']
  ]);
  quiz('pc-5e-c1-l2', [
    ['Dans une solution d’eau salée, quel est le soluté ?', 'le sel dissous', ['l’eau', 'le récipient', 'le filtre'], 'Le soluté est la substance dissoute, ici le sel.'],
    ['Que signifie « solution aqueuse » ?', 'Une solution dont le solvant est l’eau.', ['Une solution qui ne contient aucun liquide.', 'Un mélange formé uniquement de gaz.', 'De l’eau pure sans substance dissoute.'], 'Aqueuse indique que l’eau joue le rôle de solvant.'],
    ['Après dissolution complète du sucre dans l’eau, où se trouve le sucre ?', 'Il est réparti dans toute la solution.', ['Il disparaît et cesse d’exister.', 'Il reste uniquement au fond.', 'Il se transforme en eau.'], 'La dissolution disperse le soluté dans le solvant sans le faire disparaître.']
  ]);
  quiz('pc-5e-c1-l3', [
    ['La glace fond dans un verre. De quel type de transformation s’agit-il ?', 'd’une transformation physique', ['d’une transformation nucléaire', 'd’une réaction de combustion', 'd’une transformation chimique'], 'La fusion change l’état de l’eau mais ne crée pas une nouvelle substance.'],
    ['Quel indice peut signaler une transformation chimique ?', 'L’apparition d’un gaz ou d’un nouveau solide.', ['Un changement de forme sans autre changement.', 'Un objet qui se déplace.', 'Une dissolution sans nouvelle substance.'], 'Une transformation chimique peut former des produits nouveaux, parfois visibles comme un gaz.'],
    ['Lors d’une transformation chimique, comment appelle-t-on les substances présentes au départ ?', 'les réactifs', ['les produits', 'les solvants uniquement', 'les résidus obligatoirement'], 'Les réactifs sont les substances consommées ou transformées au cours de la réaction.']
  ]);
  quiz('pc-5e-c1-l4', [
    ['Dans un circuit en série, que devient le circuit si une lampe est retirée ?', 'La boucle est ouverte et les autres lampes s’éteignent.', ['Les autres lampes brillent toujours de la même façon.', 'La pile devient un interrupteur.', 'Le courant circule sans boucle.'], 'Retirer un dipôle d’une boucle en série ouvre le circuit entier.'],
    ['Dans un montage en dérivation, comment sont reliées les branches ?', 'Elles sont connectées entre les mêmes deux points.', ['Elles sont placées l’une après l’autre dans une seule boucle.', 'Elles ne touchent jamais le générateur.', 'Elles sont reliées uniquement par leurs extrémités libres.'], 'Les dipôles en dérivation partagent les mêmes bornes de branchement.'],
    ['Quel est un avantage pratique d’un branchement en dérivation pour des lampes ?', 'Une lampe peut rester allumée si une autre branche est coupée.', ['Une seule lampe peut fonctionner à la fois.', 'Le générateur n’est plus nécessaire.', 'Le circuit n’a plus besoin de fils.'], 'Chaque branche constitue un trajet distinct pour le courant électrique.']
  ]);
  quiz('pc-5e-c1-l5', [
    ['Avec quel appareil mesure-t-on l’intensité du courant ?', 'un ampèremètre', ['un voltmètre', 'un thermomètre', 'une balance'], 'L’ampèremètre mesure une intensité électrique et se branche en série.'],
    ['Quelle unité utilise-t-on pour l’intensité du courant ?', 'l’ampère', ['le volt', 'l’ohm', 'le joule'], 'L’unité SI de l’intensité électrique est l’ampère, de symbole A.'],
    ['Quelle règle de sécurité faut-il appliquer avant de modifier un circuit de mesure ?', 'Couper le générateur avant de changer les branchements.', ['Toucher les bornes nues pour vérifier le courant.', 'Court-circuiter directement les bornes de la pile.', 'Mesurer avec les mains mouillées.'], 'On coupe l’alimentation avant de modifier un montage pour éviter court-circuit et accident.']
  ]);
  quiz('pc-5e-c1-l6', [
    ['Que fait un miroir plan à une partie de la lumière qui le reçoit ?', 'Il la réfléchit.', ['Il la transforme en son.', 'Il la fait disparaître toujours entièrement.', 'Il la produit sans éclairage.'], 'Un miroir plan renvoie la lumière : ce phénomène est la réflexion.'],
    ['Quel angle mesure-t-on entre le rayon incident et la normale au miroir ?', 'l’angle d’incidence', ['l’angle de dispersion', 'l’angle de pesanteur', 'l’angle de masse'], 'L’angle d’incidence est défini entre le rayon incident et la normale.'],
    ['Dans la réflexion sur un miroir plan, que vaut l’angle de réflexion ?', 'Il est égal à l’angle d’incidence.', ['Il vaut toujours 90 degrés.', 'Il est toujours le double de l’incidence.', 'Il est indépendant de la normale.'], 'La loi de la réflexion établit l’égalité des angles mesurés par rapport à la normale.']
  ]);
  quiz('pc-5e-c1-l7', [
    ['Comment calcule-t-on une vitesse moyenne ?', 'distance parcourue divisée par la durée', ['durée divisée par la distance', 'distance multipliée par la durée', 'masse divisée par le volume'], 'La vitesse moyenne est égale au quotient de la distance par le temps du trajet.'],
    ['Quelle unité SI convient à une vitesse ?', 'le mètre par seconde', ['le mètre par kilogramme', 'la seconde par litre', 'le newton par mètre'], 'Le mètre par seconde, noté m/s, est l’unité SI de la vitesse.'],
    ['Un cycliste parcourt 30 km en 2 h. Quelle est sa vitesse moyenne ?', '15 km/h', ['28 km/h', '32 km/h', '60 km/h'], 'On divise 30 km par 2 h : la vitesse moyenne est de 15 km/h.']
  ]);
  quiz('pc-5e-c1-l8', [
    ['Quel instrument sert à mesurer la température ?', 'un thermomètre', ['un baromètre uniquement', 'un ampèremètre', 'une balance'], 'Le thermomètre indique la température d’un corps ou d’un milieu.'],
    ['Quelle unité est couramment utilisée pour une température en classe ?', 'le degré Celsius', ['le kilogramme', 'le newton', 'le mètre cube'], 'Le degré Celsius est une unité usuelle de température.'],
    ['Quand une cuillère froide est placée dans une boisson chaude, dans quel sens se fait le transfert thermique spontané ?', 'de la boisson chaude vers la cuillère plus froide', ['de la cuillère froide vers la boisson chaude', 'sans échange d’énergie', 'uniquement vers l’air, jamais vers la cuillère'], 'L’énergie thermique se transfère spontanément du corps le plus chaud vers le plus froid.']
  ]);

  quiz('pc-4e-c3-l1', [
    ['Combien de mètres contient un kilomètre ?', '1 000 m', ['100 m', '10 m', '10 000 m'], 'Le préfixe kilo signifie mille : un kilomètre vaut mille mètres.'],
    ['Quelle est l’écriture scientifique de 4 500 ?', '4,5 × 10³', ['45 × 10³', '0,45 × 10³', '4,5 × 10²'], 'L’écriture scientifique place le nombre décimal entre 1 et 10, puis utilise une puissance de dix.'],
    ['Pourquoi estime-t-on un ordre de grandeur avant de calculer ?', 'Pour vérifier si le résultat est plausible.', ['Pour remplacer toute mesure par une devinette.', 'Pour changer les unités au hasard.', 'Pour rendre une mesure exacte.'], 'Un ordre de grandeur aide à repérer un résultat incompatible avec la situation.']
  ]);
  quiz('pc-4e-c3-l2', [
    ['Un solide a une masse de 200 g et un volume de 100 cm³. Quelle est sa masse volumique ?', '2 g/cm³', ['0,5 g/cm³', '100 g/cm³', '20 000 g/cm³'], 'La masse volumique vaut masse divisée par volume : 200 divisé par 100 égale 2 g/cm³.'],
    ['À volume égal, un matériau de masse volumique plus grande est généralement comment ?', 'plus massif', ['sans masse', 'toujours gazeux', 'nécessairement transparent'], 'À volume égal, une masse volumique supérieure correspond à une masse supérieure.'],
    ['Pour calculer une masse à partir de la masse volumique et du volume, quelle relation utilise-t-on ?', 'm = ρ × V', ['m = ρ ÷ V', 'm = V ÷ ρ', 'm = ρ + V'], 'La relation de définition se réarrange en multipliant la masse volumique par le volume.']
  ]);
  quiz('pc-4e-c3-l3', [
    ['Quel appareil mesure l’intensité électrique ?', 'un ampèremètre', ['un voltmètre', 'un ohmmètre uniquement', 'un dynamomètre'], 'Un ampèremètre sert à mesurer l’intensité du courant.'],
    ['Comment branche-t-on un ampèremètre pour mesurer le courant dans une branche ?', 'en série dans cette branche', ['en dérivation aux bornes du générateur', 'sans le relier au circuit', 'en parallèle avec l’interrupteur ouvert'], 'L’ampèremètre est traversé par le courant qu’il mesure : il se place en série.'],
    ['Comment branche-t-on un voltmètre pour mesurer la tension d’une lampe ?', 'en dérivation aux bornes de la lampe', ['en série dans le fil de retour', 'à la place de la pile', 'sans connexion aux bornes'], 'Le voltmètre compare les potentiels de deux points et se branche aux bornes du dipôle.']
  ]);
  quiz('pc-4e-c3-l4', [
    ['Quel procédé sépare un solide non dissous d’un liquide ?', 'la filtration', ['la fusion', 'l’aimantation du liquide', 'la vaporisation du solide'], 'La filtration retient les particules solides et laisse passer le liquide.'],
    ['Quelle technique permet de récupérer un solide dissous en faisant partir le solvant ?', 'l’évaporation', ['la décantation seule', 'le tamisage', 'la sédimentation seule'], 'Lors de l’évaporation, le solvant s’échappe et le soluté solide peut rester.'],
    ['Pourquoi la décantation peut-elle séparer l’eau et l’huile ?', 'Ces liquides non miscibles forment deux couches.', ['L’huile se dissout complètement dans l’eau.', 'L’eau est attirée par un aimant.', 'Les deux liquides ont toujours la même masse volumique.'], 'Les liquides non miscibles se superposent selon leur masse volumique et peuvent être séparés.']
  ]);

  quiz('pc-3e-c3-l1', [
    ['Quel type d’image une lentille convergente peut-elle former sur un écran ?', 'une image réelle', ['une image toujours virtuelle', 'une image sonore', 'une image sans lumière'], 'Une image réelle peut être recueillie sur un écran lorsque l’objet est placé au-delà du foyer.'],
    ['Où se trouve le foyer image d’une lentille convergente pour des rayons incidents parallèles à l’axe ?', 'au point où les rayons émergents convergent', ['au centre de l’objet', 'sur la source lumineuse', 'à l’infini dans toutes les situations'], 'Les rayons parallèles à l’axe convergent au foyer image d’une lentille convergente.'],
    ['Quel instrument courant utilise une lentille convergente ?', 'une loupe', ['un miroir plan seul', 'un thermomètre', 'un prisme sans lentille'], 'Une loupe est une lentille convergente utilisée pour observer un objet proche agrandi.']
  ]);
  quiz('pc-3e-c3-l2', [
    ['Quelle relation exprime la loi d’Ohm pour une résistance ?', 'U = R × I', ['U = R + I', 'I = U × R', 'R = U × I'], 'Pour un conducteur ohmique, la tension est le produit de la résistance par l’intensité.'],
    ['Une résistance de 4 Ω est traversée par 2 A. Quelle tension mesure-t-on ?', '8 V', ['2 V', '6 V', '0,5 V'], 'La loi d’Ohm donne U = R × I, soit 4 Ω multipliés par 2 A : 8 V.'],
    ['Quelle unité exprime la résistance électrique ?', 'l’ohm', ['l’ampère', 'le volt', 'le wattheure'], 'L’ohm, de symbole Ω, est l’unité de la résistance électrique.']
  ]);
  quiz('pc-3e-c3-l3', [
    ['Quelle valeur de pH caractérise une solution neutre à température ambiante ?', 'pH 7', ['pH 1', 'pH 3', 'pH 14'], 'À température ambiante, une solution neutre a un pH voisin de 7.'],
    ['Une solution a un pH égal à 3. Comment la classe-t-on ?', 'acide', ['neutre', 'basique', 'sans eau nécessairement'], 'Un pH inférieur à 7 indique une solution acide dans les conditions usuelles.'],
    ['Quelle précaution est nécessaire lors de la manipulation d’une solution acide ?', 'Porter les protections prescrites et suivre les consignes du laboratoire.', ['La goûter pour identifier son acidité.', 'La toucher à mains nues.', 'La mélanger sans consigne à un produit inconnu.'], 'Une solution acide peut être dangereuse : les protections et consignes du laboratoire sont indispensables.']
  ]);
  quiz('pc-3e-c3-l4', [
    ['Quelle relation relie puissance électrique, tension et intensité ?', 'P = U × I', ['P = U + I', 'P = U ÷ I', 'P = I − U'], 'La puissance électrique d’un dipôle est le produit de sa tension par le courant qui le traverse.'],
    ['Une lampe de 12 W fonctionne pendant 2 h. Quelle énergie consomme-t-elle ?', '24 Wh', ['6 Wh', '14 Wh', '24 W'], 'L’énergie est la puissance multipliée par la durée : 12 W × 2 h = 24 Wh.'],
    ['Quelle unité exprime une puissance électrique ?', 'le watt', ['le joule par kilogramme', 'l’ampère-heure uniquement', 'le volt par seconde'], 'Le watt, symbole W, est l’unité de puissance.']
  ]);

  quiz('pc-seconde-c3-l1', [
    ['Comment définit-on le vecteur vitesse instantanée en un point ?', 'Il est tangent à la trajectoire et orienté dans le sens du mouvement.', ['Il est toujours perpendiculaire à la trajectoire.', 'Il pointe toujours vers le centre de la Terre.', 'Il ne dépend jamais du référentiel.'], 'Le vecteur vitesse instantanée est tangent à la trajectoire et orienté dans le sens du déplacement.'],
    ['Sur un graphique position-temps rectiligne, que représente la pente ?', 'la vitesse sur l’intervalle considéré', ['la masse du mobile', 'la température du mobile', 'la force électrique uniquement'], 'La variation de position divisée par la variation de temps donne la vitesse moyenne.'],
    ['Un mobile parcourt 20 m en 5 s à vitesse constante. Quelle est sa vitesse ?', '4 m/s', ['15 m/s', '25 m/s', '100 m/s'], 'La vitesse est la distance divisée par la durée : 20 m ÷ 5 s = 4 m/s.']
  ]);
  quiz('pc-seconde-c3-l2', [
    ['Quel principe relie la résultante des forces et l’accélération d’un corps ?', 'la deuxième loi de Newton', ['la loi de réflexion', 'la loi de Snell uniquement', 'la loi de conservation du volume'], 'La deuxième loi de Newton relie la résultante des forces à la variation du mouvement.'],
    ['Dans un référentiel galiléen, si les forces se compensent, que fait un corps initialement au repos ?', 'Il reste au repos.', ['Il accélère spontanément.', 'Il tourne nécessairement.', 'Sa masse devient nulle.'], 'Lorsque la résultante des forces est nulle, un corps au repos conserve son état de repos.'],
    ['Quelle unité convient à une force ?', 'le newton', ['le joule par seconde', 'le kilogramme par mètre', 'le volt'], 'Le newton, symbole N, est l’unité SI de l’intensité d’une force.']
  ]);
  quiz('pc-seconde-c3-l3', [
    ['Comment calcule-t-on la concentration massique d’un soluté ?', 'masse de soluté divisée par volume de solution', ['volume de solution divisé par masse de soluté', 'masse de soluté multipliée par volume', 'masse du solvant moins volume'], 'La concentration massique est le quotient de la masse de soluté par le volume de solution.'],
    ['On dissout 5 g de sel pour obtenir 0,5 L de solution. Quelle est la concentration massique ?', '10 g/L', ['2,5 g/L', '5,5 g/L', '25 g/L'], 'La concentration massique vaut 5 g ÷ 0,5 L, soit 10 g/L.'],
    ['Si on ajoute du solvant sans ajouter de soluté, comment varie la concentration ?', 'Elle diminue.', ['Elle augmente toujours.', 'Elle reste nécessairement identique.', 'Elle devient égale à la masse du soluté.'], 'La même quantité de soluté est répartie dans un volume plus grand, donc la solution est diluée.']
  ]);
  quiz('pc-seconde-c3-l4', [
    ['Dans une équation chimique équilibrée, que conserve-t-on pour chaque élément ?', 'le nombre d’atomes', ['la couleur des réactifs', 'le nombre de molécules inchangé', 'la masse de chaque molécule séparément'], 'L’équilibrage respecte la conservation des atomes de chaque élément.'],
    ['Quel coefficient équilibre l’équation H₂ + O₂ → H₂O ?', '2 devant H₂ et 2 devant H₂O', ['2 devant O₂ et 1 devant H₂O', '1 devant H₂ et 2 devant H₂O', '3 devant chaque formule'], 'L’équation équilibrée est 2 H₂ + O₂ → 2 H₂O : quatre H et deux O de chaque côté.'],
    ['Quand on équilibre une réaction, que modifie-t-on devant les formules ?', 'les coefficients stœchiométriques', ['les indices dans les formules', 'les symboles des éléments', 'la charge des noyaux'], 'On ajuste les coefficients devant les formules sans changer la composition des espèces.']
  ]);

  quiz('pc-premiere-c3-l1', [
    ['Quelle équation traduit la deuxième loi de Newton pour une masse constante ?', 'la somme des forces extérieures vaut m fois l’accélération', ['la somme des forces vaut toujours zéro', 'la vitesse vaut masse fois accélération', 'la masse vaut force fois vitesse'], 'La résultante des forces extérieures est égale au produit de la masse par l’accélération.'],
    ['Un corps de 2 kg subit une résultante de 6 N. Quelle est l’intensité de son accélération ?', '3 m/s²', ['4 m/s²', '8 m/s²', '12 m/s²'], 'La deuxième loi donne a = F/m, soit 6 N ÷ 2 kg = 3 m/s².'],
    ['Dans quel référentiel applique-t-on la forme usuelle de la deuxième loi de Newton ?', 'un référentiel galiléen', ['un référentiel nécessairement accéléré', 'un référentiel lié à une onde sonore', 'aucun référentiel'], 'La forme usuelle de la loi de Newton s’applique dans un référentiel galiléen.']
  ]);
  quiz('pc-premiere-c3-l2', [
    ['Quelle expression donne l’énergie cinétique d’un corps de masse m et de vitesse v ?', 'Eₖ = 1/2 × m × v²', ['Eₖ = m × v', 'Eₖ = m ÷ v²', 'Eₖ = 1/2 × v'], 'L’énergie cinétique dépend de la masse et du carré de la vitesse.'],
    ['Si la vitesse d’un corps double, que devient son énergie cinétique ?', 'Elle est multipliée par quatre.', ['Elle est multipliée par deux.', 'Elle est divisée par deux.', 'Elle ne change pas.'], 'Comme la vitesse est au carré dans la formule, la doubler multiplie l’énergie cinétique par quatre.'],
    ['Quelle unité exprime une énergie ?', 'le joule', ['le newton par seconde', 'le watt par mètre', 'le kilogramme par litre'], 'Le joule, symbole J, est l’unité SI de l’énergie.']
  ]);
  quiz('pc-premiere-c3-l3', [
    ['Quelle relation lie longueur d’onde, célérité et période ?', 'λ = v × T', ['λ = v ÷ T', 'λ = T ÷ v', 'λ = v + T'], 'La distance parcourue par l’onde pendant une période est sa longueur d’onde.'],
    ['Une onde a une fréquence de 5 Hz. Quelle est sa période ?', '0,2 s', ['5 s', '10 s', '25 s'], 'La période est l’inverse de la fréquence : 1 ÷ 5 Hz = 0,2 s.'],
    ['Une onde transporte-t-elle de la matière de façon globale ?', 'Non, elle transporte de l’énergie sans transport global de matière.', ['Oui, toute la matière suit l’onde.', 'Oui, mais seulement dans le vide.', 'Non, elle ne transporte rien.'], 'Une onde progressive transmet une perturbation et de l’énergie sans déplacement global du milieu.']
  ]);
  quiz('pc-premiere-c3-l4', [
    ['Dans une réaction d’oxydoréduction, qu’est-ce qu’un oxydant ?', 'une espèce qui capte des électrons', ['une espèce qui cède toujours des protons', 'une espèce qui ne réagit jamais', 'un ion qui capte des neutrons'], 'L’oxydant gagne des électrons et se réduit au cours de la réaction.'],
    ['Quelle transformation subit un réducteur ?', 'Il cède des électrons et s’oxyde.', ['Il capte toujours des électrons et se réduit.', 'Il devient nécessairement un gaz.', 'Il perd ses noyaux atomiques.'], 'Le réducteur cède des électrons : il s’oxyde.'],
    ['Dans le couple Cu²⁺/Cu, quelle espèce est la forme oxydée ?', 'Cu²⁺', ['Cu', 'les électrons seuls', 'le solvant uniquement'], 'Dans l’écriture oxydant/réducteur, Cu²⁺ est l’oxydant et Cu la forme réduite.']
  ]);

  quiz('pc-terminale-c3-l1', [
    ['Sans frottement de l’air, quelle composante de vitesse reste constante pour un projectile ?', 'la composante horizontale', ['la composante verticale', 'la distance verticale parcourue', 'la force de pesanteur'], 'La pesanteur agit verticalement : la vitesse horizontale reste constante dans ce modèle.'],
    ['Près de la surface terrestre, quelle force agit sur un projectile après son lancement si on néglige l’air ?', 'son poids, dirigé vers le bas', ['une force horizontale constante', 'une force qui pousse vers le haut', 'aucune force'], 'En négligeant les frottements, le poids est la seule force appliquée pendant le vol.'],
    ['Quelle forme a la trajectoire idéale d’un projectile lancé obliquement dans un champ uniforme ?', 'une parabole', ['une droite verticale', 'un cercle parfait', 'une ellipse nécessairement fermée'], 'La combinaison d’un mouvement horizontal uniforme et d’un mouvement vertical accéléré donne une parabole.']
  ]);
  quiz('pc-terminale-c3-l2', [
    ['Que produit une variation du flux magnétique à travers un circuit ?', 'une force électromotrice induite', ['une masse électrique', 'une tension toujours nulle', 'une disparition du champ électrique'], 'Une variation du flux magnétique peut induire une force électromotrice dans le circuit.'],
    ['Que dit la loi de Lenz sur le sens du courant induit ?', 'Il s’oppose à la variation qui lui donne naissance.', ['Il renforce toujours la variation du flux.', 'Il est toujours dans le sens horaire.', 'Il ne dépend pas du mouvement relatif.'], 'Le courant induit crée un effet qui s’oppose à la cause de son apparition.'],
    ['Que peut-on faire pour induire une tension dans une bobine ?', 'déplacer un aimant par rapport à la bobine', ['maintenir tout immobile dans un champ constant', 'retirer les spires sans changer le flux', 'mesurer uniquement la masse de la bobine'], 'Le mouvement relatif modifie le flux magnétique et peut produire une tension induite.']
  ]);
  quiz('pc-terminale-c3-l3', [
    ['Que devient le nombre de noyaux radioactifs non désintégrés après une demi-vie ?', 'Il est divisé par deux.', ['Il est multiplié par deux.', 'Il devient toujours nul.', 'Il reste constant.'], 'Par définition, une demi-vie réduit de moitié le nombre de noyaux radioactifs non désintégrés.'],
    ['Après deux demi-vies, quelle fraction des noyaux initiaux reste en moyenne ?', 'un quart', ['une moitié', 'trois quarts', 'aucun noyau dans tous les cas'], 'Chaque demi-vie divise la quantité par deux ; après deux, il reste un quart.'],
    ['La demi-vie d’un isotope dépend-elle de la quantité initiale de l’échantillon ?', 'Non, elle est caractéristique de l’isotope.', ['Oui, elle double si la masse double.', 'Oui, elle dépend de la forme du récipient.', 'Elle vaut toujours une seconde.'], 'La demi-vie est une propriété caractéristique du noyau radioactif considéré.']
  ]);
  quiz('pc-terminale-c3-l4', [
    ['Comment repère-t-on l’équivalence d’un dosage acido-basique ?', 'Les réactifs ont été introduits dans les proportions stœchiométriques.', ['Le pH est toujours égal à 7.', 'La solution devient nécessairement incolore.', 'Le volume versé est égal au volume initial.'], 'À l’équivalence, les réactifs ont été mélangés selon les proportions de l’équation de réaction.'],
    ['Lors d’un dosage, que représente le volume équivalent ?', 'le volume de solution titrante versé à l’équivalence', ['le volume total du laboratoire', 'le volume de solvant évaporé', 'le volume initial de solution titrante'], 'Le volume équivalent est lu au point où les réactifs sont en proportions stœchiométriques.'],
    ['Quel outil aide à suivre l’évolution du pH pendant un dosage ?', 'un pH-mètre', ['un ampèremètre', 'un dynamomètre', 'un chronomètre uniquement'], 'Le pH-mètre mesure le pH au cours de l’ajout progressif de la solution titrante.']
  ]);
})();
