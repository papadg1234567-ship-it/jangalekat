/* Module quiz : une leçon = un quiz. Les questions d'une classe ne se mélangent jamais
   à celles d'une autre classe, ni à celles d'une autre leçon. */
(function () {
  'use strict';

  const { h, KEYS } = JK;

  const NIVEAUX = ['6ᵉ', '5ᵉ', '4ᵉ', '3ᵉ', 'Seconde', 'Première', 'Terminale'];
  const CODES = { '6e': '6ᵉ', '5e': '5ᵉ', '4e': '4ᵉ', '3e': '3ᵉ', seconde: 'Seconde', premiere: 'Première', terminale: 'Terminale' };

  const etat = {
    classe: null, leconId: null, phase: 'classe',
    answers: {}, result: null, error: '', missing: [], filtreFiche: null, matiere: 'Toutes',
    revueAvant: false
  };

  function scores() {
    return JK.read(KEYS.scores, {}) || {};
  }

  /* Toutes les leçons qui peuvent recevoir un quiz : d'abord les lignes des programmes déclarés
     (js/programmes/*.js), ensuite une entrée par fiche qu'aucun programme ne couvre encore —
     dans ce cas la fiche tient lieu de leçon. Une classe ne se mélange jamais à une autre. */
  function supportsDe(classe) {
    const lecons = JK.toutesLesLecons ? JK.toutesLesLecons() : [];
    const couvertes = new Set(lecons.map((l) => l.f).filter(Boolean));
    const duProgramme = lecons
      .filter((l) => l.niveau === classe)
      .map((l) => ({
        id: l.id, titre: l.t, groupe: l.chapitre, matiere: l.matiere, fiche: l.f, niveau: classe
      }));
    const autres = (JK.FICHES || [])
      .filter((f) => f.niveau === classe && !couvertes.has(f.id))
      .map((f) => ({
        id: 'fiche-' + f.id, titre: f.titre, groupe: f.matiere, matiere: f.matiere, fiche: f.id, niveau: classe
      }));
    return duProgramme.concat(autres);
  }

  const index = {};
  const parFiche = {};
  function construitIndex() {
    if (Object.keys(index).length) return;
    NIVEAUX.forEach((n) => supportsDe(n).forEach((s) => {
      index[s.id] = s;
      if (s.fiche && !parFiche[s.fiche]) parFiche[s.fiche] = s;
    }));
  }

  function soutienDe(id) {
    construitIndex();
    return index[id] || null;
  }

  /* Le support qui porte une fiche : la leçon du programme si une leçon la référence,
     sinon le support « fiche-… » fabriqué à partir de la fiche elle-même. */
  function soutienDeFiche(idFiche) {
    construitIndex();
    return parFiche[idFiche] || null;
  }

  function questionsCourantes() {
    return (etat.leconId && JK.quizDe(etat.leconId)) || [];
  }

  function nombreQuiz(classe) {
    const s = supportsDe(classe);
    return { total: s.length, redis: s.filter((x) => JK.quizDe(x.id)).length };
  }

  /* ---------- Entrée directe : ?lecon=…, ?fiche=…, ?classe=… ---------- */
  function resoudreEntree() {
    const lecon = JK.params.get('lecon');
    if (lecon) {
      const s = soutienDe(lecon);
      if (s) {
        etat.classe = s.niveau;
        etat.leconId = lecon;
        etat.phase = JK.quizDe(lecon) ? 'form' : 'lecons';
        return;
      }
    }
    const fiche = JK.params.get('fiche');
    if (fiche) {
      const s = soutienDeFiche(fiche);
      if (s && JK.quizDe(s.id)) {
        etat.classe = s.niveau;
        etat.leconId = s.id;
        etat.phase = 'form';
        return;
      }
      const f = (JK.FICHES || []).find((x) => x.id === fiche);
      if (f) {
        etat.classe = f.niveau;
        etat.filtreFiche = fiche;
        etat.phase = 'lecons';
        return;
      }
    }
    const code = JK.params.get('classe');
    if (code && CODES[code]) {
      etat.classe = CODES[code];
      etat.phase = 'lecons';
    }
  }

  /* ---------- Écran 1 : la classe ---------- */
  function renderClasse(host) {
    const nb = JK.nbQuizRediges ? JK.nbQuizRediges() : 0;
    host.append(
      h('h1', { text: 'Quiz par leçon' }),
      h('p', { class: 'lede', text: 'Une leçon = un quiz. Choisissez d’abord la classe : les questions d’une leçon ne se mélangent jamais à celles d’une autre, ni à celles d’une autre classe.' }),
      h('p', { class: 'alert alert-warn', text: nb + ' leçons disposent d’un quiz rédigé. Les intitulés de leçons viennent des programmes quand ils existent ; les questions, elles, sont auto-rédigées d’après ces intitulés et les fiches de Jàngalekat : aucune n’a été relue par un enseignant. Servez-vous-en pour vous entraîner, pas comme d’un sujet officiel. Une leçon sans quiz affiche « Quiz en cours de rédaction ».' }),
      h('div', { class: 'grille grille-2' }, NIVEAUX.map((n) => {
        const stats = nombreQuiz(n);
        return h('button', {
          class: 'carte carte-niveau carte-btn', type: 'button',
          onclick: () => { etat.classe = n; etat.filtreFiche = null; etat.phase = 'lecons'; JK.refresh(); }
        },
          h('h3', { text: n }),
          h('p', { text: stats.total + ' leçon(s) au programme · quiz rédigés : ' + stats.redis }),
          stats.redis
            ? h('span', { class: 'badge badge-done', text: 'Prêt à réviser' })
            : h('span', { class: 'badge badge-out', text: 'Quiz en cours de rédaction' }));
      })));
  }

  /* ---------- Écran 2 : les leçons de la classe ---------- */
  function renderLecons(host) {
    const soutiens = supportsDe(etat.classe);
    const matieres = [...new Set(soutiens.map((s) => s.matiere))];
    const filtre = etat.matiere !== 'Toutes' && matieres.indexOf(etat.matiere) >= 0 ? etat.matiere : 'Toutes';
    const dansFiltre = soutiens.filter((s) => filtre === 'Toutes' || s.matiere === filtre);
    const redis = dansFiltre.filter((s) => JK.quizDe(s.id)).length;
    const sauvegarde = scores();

    /* Ordre affiché : l'ordre du registre par défaut, les leçons venues à leur date de revue
       en tête quand l'élève a demandé « à revoir d'abord ». Rien n'est mélangé sans qu'il le sache. */
    const dansSelection = etat.filtreFiche
      ? dansFiltre.filter((s) => s.fiche === etat.filtreFiche)
      : dansFiltre;
    const dues = dansSelection.filter((s) => sauvegarde[s.id] && JK.progression.estDue(sauvegarde[s.id]));
    const visibles = etat.revueAvant
      ? dues.concat(dansSelection.filter((s) => !dues.includes(s)))
      : dansSelection;

    /* host.append transforme un enfant null en texte « null » : on filtre avant d'insérer. */
    host.append(...[
      h('div', { class: 'back-row' },
        h('button', {
          class: 'btn btn-ghost', type: 'button', text: '← Changer de classe',
          onclick: () => { etat.classe = null; etat.phase = 'classe'; etat.filtreFiche = null; etat.matiere = 'Toutes'; etat.revueAvant = false; JK.refresh(); }
        })),
      h('h1', { text: 'Quiz de la classe de ' + etat.classe }),
      h('p', { class: 'lede', text: dansFiltre.length + ' leçon(s) au programme de ' + etat.classe + (filtre === 'Toutes' ? '' : ' en ' + filtre) + ' · ' + redis + ' quiz rédigé(s). Chaque quiz ne porte que sur sa leçon.' }),
      matieres.length > 1
        ? h('div', { class: 'chips', role: 'group', 'aria-label': 'Filtrer par matière' },
          h('button', {
            class: 'chip', type: 'button', text: 'Toutes les matières', 'aria-pressed': String(filtre === 'Toutes'),
            onclick: () => { etat.matiere = 'Toutes'; JK.refresh(); }
          }),
          matieres.map((m) => h('button', {
            class: 'chip', type: 'button', text: m, 'aria-pressed': String(filtre === m),
            onclick: () => { etat.matiere = m; JK.refresh(); }
          })))
        : null,
      dues.length
        ? h('div', { class: 'chips' }, h('button', {
          class: 'chip', type: 'button', 'aria-pressed': String(etat.revueAvant),
          text: (etat.revueAvant ? 'Tout afficher' : 'À revoir d’abord (' + dues.length + ')'),
          onclick: () => { etat.revueAvant = !etat.revueAvant; JK.refresh(); }
        }))
        : null,
      etat.filtreFiche
        ? h('p', { class: 'alert', text: 'Leçons couvertes par la fiche sélectionnée. ' })
        : null,
      etat.filtreFiche
        ? h('div', { class: 'back-row' }, h('button', {
          class: 'btn btn-ghost btn-sm', type: 'button', text: 'Voir toutes les leçons de la classe',
          onclick: () => { etat.filtreFiche = null; JK.refresh(); }
        }))
        : null
    ].filter(Boolean));

    if (!visibles.length) {
      host.append(h('p', { class: 'card', text: 'Aucune leçon listée pour cette sélection.' }));
      return;
    }

    const groupes = [];
    visibles.forEach((s) => {
      let g = groupes.find((x) => x.nom === s.groupe && x.matiere === s.matiere);
      if (!g) { g = { nom: s.groupe, matiere: s.matiere, items: [] }; groupes.push(g); }
      g.items.push(s);
    });

    groupes.forEach((g) => {
      host.append(h('div', { class: 'card' },
        h('h2', { text: (filtre === 'Toutes' ? g.matiere + ' · ' : '') + g.nom }),
        h('div', { class: 'programme-liste' }, h('ul', null, g.items.map((s) => {
          const quiz = JK.quizDe(s.id);
          const note = sauvegarde[s.id];
          const revue = note && JK.progression.estDue(note);
          return h('li', { class: 'programme-lecon' },
            h('span', { text: s.titre }),
            note
              ? h('span', {
                class: 'badge ' + (note.score === note.total ? 'badge-done' : 'badge-warn'),
                text: 'Fait : ' + note.score + ' / ' + note.total
                  + ((note.tentatives || 1) > 1 ? ' · ' + note.tentatives + ' tentatives' : '')
              })
              : null,
            revue
              ? h('span', { class: 'badge badge-warn', text: 'À revoir le ' + JK.formatDate(JK.progression.dateDeRevue(note)) })
              : null,
            quiz
              ? h('button', {
                class: 'btn btn-sm', type: 'button', text: 'Faire le quiz (' + quiz.length + ' questions)',
                'aria-label': 'Faire le quiz de la leçon : ' + s.titre,
                onclick: () => ouvrir(s.id)
              })
              : h('span', { class: 'badge badge-out', text: 'Quiz en cours de rédaction' }),
            s.fiche && (JK.FICHES || []).some((f) => f.id === s.fiche)
              ? h('button', {
                class: 'btn btn-ghost btn-sm', type: 'button', text: 'Fiche',
                'aria-label': 'Ouvrir la fiche de cette leçon', onclick: () => JK.openFiche(s.fiche)
              })
              : null);
        })))));
    });
  }

  function ouvrir(idLecon) {
    etat.leconId = idLecon;
    etat.answers = {};
    etat.result = null;
    etat.error = '';
    etat.missing = [];
    etat.phase = 'form';
    JK.refresh();
  }

  /* ---------- Écran 3 : les questions de la leçon ---------- */
  function renduQuestion(s, i) {
    return h('fieldset', { class: 'card question', id: 'question-' + (i + 1) },
      h('legend', { text: (i + 1) + '. ' + s.enonce }),
      h('div', { class: 'options' }, s.options.map((label, index2) => {
        const input = h('input', { type: 'radio', name: s.id, value: String(index2), checked: etat.answers[s.id] === index2 });
        input.addEventListener('change', () => {
          etat.answers[s.id] = index2;
          input.closest('.question').classList.remove('is-missing');
          updateCompteur();
        });
        return h('label', { class: 'option' }, input, h('span', { text: label }));
      })));
  }

  function updateCompteur() {
    const questions = questionsCourantes();
    const n = questions.filter((q) => etat.answers[q.id] !== undefined).length;
    const texte = n + ' / ' + questions.length + ' question(s) répondues';
    const texteEl = document.getElementById('quiz-count');
    const barre = document.getElementById('quiz-bar');
    if (texteEl) texteEl.textContent = texte;
    if (barre) barre.style.width = Math.round((n / questions.length) * 100) + '%';
    annonce(texte);
  }

  /* Zone aria-live#live-region déclarée dans la page : elle annonce l'avancement puis le score. */
  function annonce(message) {
    const live = document.getElementById('live-region');
    if (live) live.textContent = message;
  }

  function enTeteLecon(host, sousTitre) {
    const s = soutienDe(etat.leconId);
    host.append(
      h('div', { class: 'back-row' },
        h('button', {
          class: 'btn btn-ghost', type: 'button', text: '← Les leçons de ' + (etat.classe || 'la classe'),
          onclick: () => { etat.phase = 'lecons'; etat.leconId = null; JK.refresh(); }
        })),
      h('h1', { text: s ? s.titre : 'Quiz' }),
      h('p', { class: 'stat-label', text: (s ? s.matiere + ' · ' + etat.classe : '') + (sousTitre ? ' · ' + sousTitre : '') }));
    return s;
  }

  function renderForm(host) {
    const questions = questionsCourantes();
    if (!questions.length) { renderLecons(host); return; }
    const soutien = enTeteLecon(host, questions.length + ' question(s) sur cette leçon seule');

    const form = h('form', {
      class: 'grid',
      onsubmit: (e) => {
        e.preventDefault();
        const manquantes = questions
          .map((q, i) => ({ q, numero: i + 1 }))
          .filter(({ q }) => etat.answers[q.id] === undefined);
        if (manquantes.length) {
          etat.error = 'Il reste ' + manquantes.length + ' question(s) sans réponse. La première est affichée en rouge.';
          etat.missing = manquantes.map(({ numero }) => numero);
          JK.refresh();
          return;
        }
        const score = questions.filter((q) => etat.answers[q.id] === q.correct).length;
        etat.result = { score, total: questions.length };
        etat.error = '';
        etat.missing = [];
        etat.phase = 'result';
        const date = new Date().toISOString();
        const tout = scores();
        const deja = tout[etat.leconId];
        tout[etat.leconId] = {
          score, total: questions.length, date,
          tentatives: (deja && deja.tentatives ? deja.tentatives : 0) + 1,
          prochaineRevision: JK.progression.calculerRevue(score, questions.length, date)
        };
        JK.write(KEYS.scores, tout);
        JK.write(KEYS.lastScore, {
          score, total: questions.length, date, leconId: etat.leconId,
          lecon: soutien ? soutien.titre : etat.leconId, classe: etat.classe
        });
        JK.refresh();
        annonce('Score de la leçon : ' + score + ' sur ' + questions.length + '.');
      }
    },
      etat.error && h('p', { class: 'alert alert-error', text: etat.error }),
      questions.map((q, i) => renduQuestion(q, i)),
      h('div', { class: 'back-row' },
        h('button', { class: 'btn', type: 'submit', text: 'Corriger mes réponses' }),
        h('button', {
          class: 'btn btn-ghost', type: 'button', text: 'Annuler',
          onclick: (e) => { e.preventDefault(); etat.phase = 'lecons'; etat.answers = {}; etat.error = ''; etat.missing = []; JK.refresh(); }
        })));

    host.append(
      h('div', { class: 'card quiz-progress' },
        h('p', { class: 'stat-note', id: 'quiz-count', text: '' }),
        h('div', { class: 'progress' }, h('span', { id: 'quiz-bar' }))),
      h('p', { class: 'note note-court', text: 'Ce quiz porte uniquement sur la leçon affichée : aucune question d’une autre leçon ou d’une autre classe ne s’y ajoute.' }),
      form);

    updateCompteur();

    if (etat.missing.length) {
      const premier = document.getElementById('question-' + etat.missing[0]);
      etat.missing.forEach((n) => {
        const champ = document.getElementById('question-' + n);
        if (champ) champ.classList.add('is-missing');
      });
      if (premier) {
        premier.scrollIntoView({ block: 'center', behavior: 'smooth' });
        premier.querySelector('input').focus({ preventScroll: true });
      }
    }
  }

  /* ---------- Écran 4 : la correction ---------- */
  function renderResult(host) {
    const questions = questionsCourantes();
    const { score, total } = etat.result;
    const pct = Math.round((score / total) * 100);
    const soutien = enTeteLecon(host, 'Résultat');

    const erreurCount = questions.filter((q) => etat.answers[q.id] !== q.correct).length;
    const suivantes = soutiensApres();
    const note = scores()[etat.leconId];
    const revue = note ? JK.formatDate(JK.progression.dateDeRevue(note)) : '';

    const barreScore = h('span');
    barreScore.style.width = pct + '%';

    host.append(
      h('div', { class: 'card score-hero' },
        h('div', { class: 'stat' },
          h('p', { class: 'stat-label', text: 'Score de la leçon' }),
          h('p', { class: 'stat-value', text: score + ' / ' + total })),
        h('div', { class: 'stat col-souple-etroite' },
          h('p', { class: 'stat-note', text: pct + ' % de bonnes réponses · ' + erreurCount + ' erreur(s) à retravailler.' }),
          h('div', { class: 'progress' }, barreScore)),
        revue
          ? h('p', {
            class: 'stat-note col-pleine',
            text: 'Revue conseillée le ' + revue + ' : '
              + (score === total ? JK.progression.JOURS_SANS_FAUTE : JK.progression.JOURS_AVEC_ERREUR)
              + ' jour(s) après ce quiz. La date est calculée sur cet appareil, sans compte ni serveur.'
          })
          : null));

    if (soutien && soutien.fiche && (JK.FICHES || []).some((f) => f.id === soutien.fiche) && erreurCount > 0) {
      host.append(h('div', { class: 'card' },
        h('h2', { text: 'Que retravailler maintenant' }),
        h('p', { class: 'lede', text: 'Revenez aux rubriques de la fiche, puis refaites ce quiz.' }),
        h('button', { class: 'btn btn-secondary', type: 'button', text: 'Ouvrir la fiche de la leçon', onclick: () => JK.openFiche(soutien.fiche) })));
    }

    host.append(
      h('p', { class: 'lede', text: 'Comparez votre réponse à la bonne réponse, puis relisez la fiche concernée.' }),
      h('div', { class: 'grid' }, questions.map((q, i) => {
        const mine = etat.answers[q.id];
        const reussi = mine === q.correct;
        return h('div', { class: 'card question' },
          h('div', { class: 'badges' },
            h('span', { class: 'badge ' + (reussi ? 'badge-done' : 'badge-warn'), text: reussi ? 'Correcte' : 'À revoir' }),
            h('span', { class: 'badge badge-out', text: (soutien ? soutienCourt(soutien) : '') })),
          h('h3', { text: (i + 1) + '. ' + q.enonce }),
          h('div', { class: 'options' }, q.options.map((label, index2) => {
            const cls = index2 === q.correct ? 'option is-correct' : (index2 === mine ? 'option is-wrong' : 'option');
            const marque = index2 === q.correct ? 'Bonne réponse : ' : (index2 === mine ? 'Votre réponse : ' : '');
            return h('p', { class: cls }, h('span', { text: marque + label }));
          })),
          h('p', { class: 'explication', text: 'Explication : ' + q.explication }));
      })),
      h('div', { class: 'back-row' },
        h('button', {
          class: 'btn', type: 'button', text: 'Refaire ce quiz',
          onclick: () => { etat.answers = {}; etat.result = null; etat.missing = []; etat.phase = 'form'; JK.refresh(); }
        }),
        suivantes.length
          ? h('button', {
            class: 'btn btn-secondary', type: 'button', text: 'Leçon suivante de la classe',
            onclick: () => ouvrir(suivantes[0].id)
          })
          : null,
        h('button', {
          class: 'btn btn-ghost', type: 'button', text: 'Toutes les leçons de ' + etat.classe,
          onclick: () => { etat.phase = 'lecons'; etat.leconId = null; JK.refresh(); }
        })));
  }

  function soutienCourt(s) {
    return s.matiere + ' · ' + s.groupe;
  }

  /* La leçon suivante du même classe qui a un quiz rédigé. */
  function soutiensApres() {
    const liste = supportsDe(etat.classe).filter((s) => JK.quizDe(s.id));
    const place = liste.findIndex((s) => s.id === etat.leconId);
    return place >= 0 ? liste.slice(place + 1, place + 2) : [];
  }

  JK.registerView('quiz', {
    render(host) {
      if (!etat.classe && etat.phase === 'classe') resoudreEntree();
      if (etat.phase === 'form') renderForm(host);
      else if (etat.phase === 'result') renderResult(host);
      else if (etat.classe) renderLecons(host);
      else renderClasse(host);
    }
  });
})();
