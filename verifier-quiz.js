/* Contrôle du quiz par leçon. Se lance à la racine du projet, sans dépendance :
     node verifier-quiz.js
   Il charge js/quiz-lecons.js puis tous les fichiers de js/quiz/, vérifie la forme des questions,
   les doublons, l'équilibrage des positions, et que chaque fichier est bien déclaré dans les pages.
   Le code de sortie est 1 si une anomalie est trouvée (utilisable dans un script). */
(function () {
  'use strict';

  const fs = require('fs');
  const path = require('path');
  const racine = __dirname;
  const dossier = path.join(racine, 'js');
  const dossierQuiz = path.join(dossier, 'quiz');

  const problemes = [];
  const alertes = [];

  /* Caractères autorisés dans les données : français (+ wolof ñ/ë), grec et symboles de sciences,
     ponctuation typographique, exposants et indices. Tout le reste est refusé : cyrillique, CJK,
     arabe, hébreu, emoji. Le tableau couvre les 101 signes réellement présents dans les données
     (quiz, fiches et registres), relevés le 18 octobre 2026. */
  const AUTORISES = [
    [0x20, 0x7e],     // ASCII imprimable
    [0x00a0, 0x00ff], // Latin-1 : à é è ç ù î « » ° ± ² ³ µ · ¹ ½ À É × ÷
    [0x0100, 0x017f], // Latin étendu-A : œ Œ ñ ë
    [0x0370, 0x03ff], // grec : α β γ λ π ρ Δ
    [0x1d00, 0x1d7f], // extensions phonétiques : ᵉ
    [0x2000, 0x20cf], // ponctuation générale + exposants/indices + devises : ’ “ ” – — … ‰ ′ ⁺ ⁻ ⁿ ₀ ₁
    [0x2110, 0x214f], // symboles assimilés aux lettres : ℕ ℚ ℝ ℤ
    [0x2190, 0x21ff], // flèches : →
    [0x2200, 0x22ff]  // opérateurs mathématiques : ∈ − √ ∞ ∩ ∪ ≈ ≠ ≤ ⊂
  ];
  function horsAutorises(texte) {
    const vus = new Set();
    for (const ch of String(texte)) {
      const p = ch.codePointAt(0);
      if (p === 0x09 || p === 0x0a || p === 0x0d) continue;
      if (!AUTORISES.some(([a, b]) => p >= a && p <= b)) {
        vus.add(ch + ' (U+' + p.toString(16).toUpperCase() + ')');
      }
    }
    return [...vus];
  }

  /* --- registres de programmes : source des identifiants de leçon valides --- */
  const CODE_CLASSE = {
    '6ᵉ': '6e', '5ᵉ': '5e', '4ᵉ': '4e', '3ᵉ': '3e',
    Seconde: 'seconde', Première: 'premiere', Terminale: 'terminale'
  };
  const dossierProgrammes = path.join(dossier, 'programmes');
  const fichiersProgrammes = fs.existsSync(dossierProgrammes)
    ? fs.readdirSync(dossierProgrammes).filter((n) => n.endsWith('.js')).sort() : [];
  const lecons = [];
  global.JK = {
    lecon: (t, f) => ({ t, f: f || null }),
    registreDeProgramme(registre) {
      if (!registre || !registre.code || !Array.isArray(registre.CLASSES)) return;
      registre.CLASSES.forEach((c) => {
        c.code = CODE_CLASSE[c.niveau];
        if (!c.code) return;
        c.chapitres.forEach((ch, ci) => ch.lecons.forEach((l, li) => {
          lecons.push({
            id: registre.code + '-' + c.code + '-c' + (ci + 1) + '-l' + (li + 1),
            matiere: registre.matiere, code: c.code, titre: l.t
          });
        }));
      });
    }
  };
  fichiersProgrammes.forEach((n) => {
    try { require(path.join(dossierProgrammes, n)); } catch (e) { problemes.push('js/programmes/' + n + ' : lecture impossible — ' + e.message); }
  });

  const IDS_LECONS = new Set(lecons.map((l) => l.id));
  const MATIERE_PAR_CODE = {};
  lecons.forEach((l) => { MATIERE_PAR_CODE[l.id.split('-')[0]] = l.matiere; });

  /* Une fiche peut tenir lieu de leçon tant qu'aucun registre ne la référence. */
  const IDS_FICHES = new Set(
    [...fs.readFileSync(path.join(dossier, 'fiches.js'), 'utf8').matchAll(/\n      id: '([a-z0-9-]+)',/g)]
      .map((m) => 'fiche-' + m[1])
  );

  /* --- chargement isolé, fichier par fichier --- */
  global.JK = {};
  function charger(nom) {
    delete require.cache[require.resolve(path.join(dossier, 'quiz-lecons.js'))];
    global.JK = {};
    require(path.join(dossier, 'quiz-lecons.js'));
    const captures = [];
    const reel = JK.quizDeLecon;
    JK.quizDeLecon = function (id, questions) { reel(id, questions); captures.push({ id, recues: questions }); };
    delete require.cache[require.resolve(nom)];
    require(nom);
    return { captures, registre: JK.QUIZ_LECONS };
  }

  const fichiers = fs.readdirSync(dossierQuiz).filter((n) => n.endsWith('.js')).sort();
  const parLecon = {};
  const compteParLecon = {};
  const parFichier = {};

  fichiers.forEach((n) => {
    const chemin = path.join(dossierQuiz, n);
    let sortie;
    try { sortie = charger(chemin); } catch (e) { problemes.push(n + ' : chargement impossible — ' + e.message); return; }
    const stats = [];
    sortie.captures.forEach(({ id, recues }) => {
      if (!IDS_LECONS.has(id) && !IDS_FICHES.has(id)) {
        problemes.push(n + ' : identifiant inconnu — ni leçon d’un registre de js/programmes/, ni fiche de js/fiches.js — ' + id);
      }
      recues.forEach((q, i) => {
        const ou = id + ' #' + (i + 1) + ' (' + n + ')';
        stats[q.correct] = (stats[q.correct] || 0) + 1;
        if (!q || typeof q.enonce !== 'string' || !q.enonce.trim()) problemes.push('énoncé vide ' + ou);
        const interdits = horsAutorises([q && q.enonce, q && q.explication, (q && q.options || []).join(' ')].join(' '));
        if (interdits.length) problemes.push('caractère hors de la liste autorisée ' + ou + ' : ' + interdits.join(', '));
        if (q && /['\\]/.test(String(q.enonce) + String(q.explication) + (q.options || []).join(''))) {
          problemes.push('apostrophe droite ou antislash ' + ou);
        }
        if (!q || !Array.isArray(q.options) || q.options.length < 2) problemes.push('moins de deux options ' + ou);
        else {
          if (q.options.some((o) => typeof o !== 'string' || !o.trim())) problemes.push('option vide ' + ou);
          const clefs = q.options.map((o) => String(o).trim().toLowerCase());
          if (new Set(clefs).size !== clefs.length) problemes.push('options en doublon ' + ou);
          if (q.options.length !== 4) alertes.push(ou + ' : ' + q.options.length + ' options (la convention est 4)');
          if (!Number.isInteger(q.correct) || q.correct < 0 || q.correct >= q.options.length) problemes.push('index correct hors tableau ' + ou);
        }
        if (!q || typeof q.explication !== 'string' || q.explication.trim().length < 20) problemes.push('explication absente ou trop courte ' + ou);
        const cle = id + '§' + String(q && q.enonce || '').trim().toLowerCase();
        if (parLecon[id] && parLecon[id].has(cle.split('§')[1])) problemes.push('énoncé répété dans la même leçon : ' + ou);
        if (!parLecon[id]) parLecon[id] = new Set();
        parLecon[id].add(cle.split('§')[1]);
        compteParLecon[id] = (compteParLecon[id] || 0) + 1;
      });
    });
    parFichier[n] = stats;
    const total = stats.reduce((a, b) => a + (b || 0), 0);
    const plus = Math.max.apply(null, stats.map((v) => v || 0));
    if (total >= 12 && plus / total > 0.45) {
      alertes.push(n + ' : la bonne réponse tombe dans la même case ' + Math.round(plus / total * 100) + ' % du temps — à rééquilibrer.');
    }
  });

  /* --- liste blanche de caractères aussi sur les données que la boucle ci-dessus ne lit pas ---
     Les fiches et les registres s'affichent tels quels à l'écran : un signe hors liste (le ʳ de
     « 1ᵉʳ », U+02B3) y passerait sans être signalé, alors qu'il est refusé dans une question. */
  [path.join(dossier, 'fiches.js')]
    .concat(fichiersProgrammes.map((n) => path.join(dossierProgrammes, n)))
    .forEach((chemin) => {
      if (!fs.existsSync(chemin)) return;
      const interdits = horsAutorises(fs.readFileSync(chemin, 'utf8'));
      if (interdits.length) {
        problemes.push('caractère hors de la liste autorisée dans ' + path.relative(racine, chemin)
          + ' : ' + interdits.join(', '));
      }
    });

  /* --- parité avec les balises <script> des pages ---
     Les données de quiz ne sont chargées que sur les deux pages qui exécutent le quiz
     (index.html pour les compteurs, exercices.html pour l'écran) ; en revanche les registres
     de programme doivent apparaître sur les quatre pages, avant js/programmes.js. */
  const PAGES_QUIZ = ['index.html', 'exercices.html'];
  const PAGES_TOUTES = ['index.html', 'cours.html', 'exercices.html', 'profil.html'];
  PAGES_QUIZ.forEach((page) => {
    const html = fs.readFileSync(path.join(racine, page), 'utf8');
    fichiers.forEach((n) => {
      if (html.indexOf('js/quiz/' + n) < 0) problemes.push(page + ' : balise <script> manquante pour js/quiz/' + n);
    });
    if (html.indexOf('js/quiz-lecons.js') < 0) problemes.push(page + ' : js/quiz-lecons.js n’est pas chargé avant les données');
  });
  PAGES_TOUTES.forEach((page) => {
    const html = fs.readFileSync(path.join(racine, page), 'utf8');
    const balises = [...html.matchAll(/<script src="([^"]+)">/g)].map((match) => ({
      src: match[1].split(/[?#]/, 1)[0],
      index: match.index
    }));
    const positionDe = (src) => {
      const balise = balises.find((x) => x.src === src);
      return balise ? balise.index : -1;
    };
    const positionEcran = positionDe('js/programmes.js');
    if (positionEcran < 0) { problemes.push(page + ' : js/programmes.js n’est pas chargé'); return; }
    fichiersProgrammes.forEach((n) => {
      const marque = 'js/programmes/' + n;
      const position = positionDe(marque);
      if (position < 0) problemes.push(page + ' : balise <script> manquante pour ' + marque);
      else if (position > positionEcran) problemes.push(page + ' : ' + marque + ' doit être chargé AVANT js/programmes.js');
    });
  });

  /* --- couverture : une leçon des registres doit finir par avoir son quiz --- */
  const sansQuiz = lecons.filter((l) => !parLecon[l.id]);
  lecons.forEach((l) => {
    const n = compteParLecon[l.id] || 0;
    if (n && n !== 3) alertes.push(l.id + ' : ' + n + ' question(s) (la convention est 3 par leçon)');
  });
  const matieres = [...new Set(lecons.map((l) => l.matiere))];
  const couverture = matieres.map((m) => {
    const t = lecons.filter((l) => l.matiere === m);
    return m + ' ' + (t.length - sansQuiz.filter((l) => l.matiere === m).length) + '/' + t.length;
  });

  /* --- liens fiche ↔ leçon : un lien cassé affiche un bouton mort, un lien absorbé cache un quiz --- */
  const fichesReferences = new Set(lecons.map((l) => l.f).filter(Boolean));
  fichesReferences.forEach((id) => {
    if (!IDS_FICHES.has('fiche-' + id)) {
      problemes.push('lien de fiche vers « ' + id + ' » : aucune fiche de la bibliothèque ne porte cet identifiant.');
    }
  });
  /* Une fiche couverte par une leçon disparaît de la liste des supports : son quiz devient inatteignable. */
  Object.keys(parLecon)
    .filter((id) => id.indexOf('fiche-') === 0)
    .forEach((id) => {
      if (fichesReferences.has(id.slice(6))) {
        problemes.push(id + ' : la fiche est référencée par une leçon du registre, son quiz n’est plus accessible — '
          + 'reprise des questions dans la leçon puis suppression de cette déclaration.');
      }
    });

  /* --- compteurs --- */
  const supports = Object.keys(parLecon);
  let questions = 0;
  const positions = [];
  const classes = {};
  supports.forEach((id) => {
    questions += parLecon[id].size;
    const cle = id.indexOf('fiche-') === 0
      ? 'fiches hors-registre'
      : (MATIERE_PAR_CODE[id.split('-')[0]] || id.split('-')[0]) + ' ' + id.split('-')[1];
    classes[cle] = (classes[cle] || 0) + 1;
  });
  fichiers.forEach((n) => {
    const chemin = path.join(dossierQuiz, n);
    const sortie = charger(chemin);
    Object.values(sortie.registre).forEach((liste) => liste.forEach((q) => { positions[q.correct] = (positions[q.correct] || 0) + 1; }));
  });

  console.log('registres de programme : ' + fichiersProgrammes.length + ' (' + fichiersProgrammes.map((n) => n.replace(/\.js$/, '')).join(', ') + ')');
  console.log('leçons au programme : ' + lecons.length + ' · couverture quiz : ' + couverture.join(' · '));
  console.log('fichiers de quiz : ' + fichiers.length);
  console.log('supports avec quiz : ' + supports.length + ' · questions : ' + questions);
  console.log('supports par classe : ' + Object.keys(classes).sort().map((c) => c + ' ' + classes[c]).join(', '));
  console.log('position de la bonne réponse : ' + positions.map((v, i) => (i + 1) + '→' + (v || 0)).join(' · '));
  if (sansQuiz.length) {
    console.log('leçons sans quiz (' + sansQuiz.length + ') : ' + sansQuiz.slice(0, 12).map((l) => l.id).join(', ')
      + (sansQuiz.length > 12 ? ', …' : ''));
  }
  if (alertes.length) {
    console.log('')
    console.log('à surveiller (' + alertes.length + ') :');
    alertes.slice(0, 20).forEach((a) => console.log('  - ' + a));
  }
  console.log('');
  if (problemes.length) {
    console.log('PROBLÈMES (' + problemes.length + ') :');
    problemes.slice(0, 40).forEach((p) => console.log('  - ' + p));
    process.exitCode = 1;
  } else {
    console.log('Aucun problème bloquant.');
  }
})();
