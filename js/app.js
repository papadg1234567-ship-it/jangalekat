/* Noyau : navigation, stockage local, tableau de bord. */
(function () {
  'use strict';

  const PREFIX = 'jangalekat.v1.';

  const KEYS = { studied: 'studied', tasks: 'tasks', lastScore: 'lastScore', recall: 'recall', scores: 'scores' };

  function storageWorks() {
    try {
      const probe = PREFIX + '__probe__';
      window.localStorage.setItem(probe, '1');
      window.localStorage.removeItem(probe);
      return true;
    } catch (err) {
      return false;
    }
  }

  const hasStorage = storageWorks();

  function read(key, fallback) {
    if (!hasStorage) return fallback;
    try {
      const raw = window.localStorage.getItem(PREFIX + key);
      return raw === null ? fallback : JSON.parse(raw);
    } catch (err) {
      return fallback;
    }
  }

  function write(key, value) {
    if (!hasStorage) return false;
    try {
      window.localStorage.setItem(PREFIX + key, JSON.stringify(value));
      return true;
    } catch (err) {
      /* Quota saturé ou stockage désactivé en cours de route : on le dit plutôt que de laisser
         l'élève croire que sa progression est sauvée. */
      const bandeau = document.getElementById('storage-warning');
      if (bandeau) bandeau.hidden = false;
      return false;
    }
  }

  function clearAll() {
    if (!hasStorage) return;
    Object.keys(window.localStorage)
      .filter((k) => k.startsWith(PREFIX))
      .forEach((k) => window.localStorage.removeItem(k));
  }

  /* Attributs qui portent une adresse : un schéma dangereux n'y a pas sa place, même si le
     valeur vient d'un fichier de données édité plus tard. Le nettoyage retire les espaces et
     commandes qui servent à contourner un test naive (« java\nscript: »). */
  const ATTRIBUTS_D_ADRESSE = ['href', 'src', 'action', 'formaction'];
  const SCHEMAS_INTERDITS = /^(javascript|vbscript|livescript|data|file|blob):/i;

  function adresseSre(value) {
    return !SCHEMAS_INTERDITS.test(String(value).replace(/[\s\u0000-\u001f]+/g, ''));
  }

  function h(tag, props, ...children) {
    const node = document.createElement(tag);
    for (const [name, value] of Object.entries(props || {})) {
      if (name === 'class') node.className = value;
      else if (name === 'text') node.textContent = value;
      else if (name.startsWith('on')) node.addEventListener(name.slice(2).toLowerCase(), value);
      else if (value === null || value === undefined || value === false) continue;
      else if (ATTRIBUTS_D_ADRESSE.includes(name) && !adresseSre(value)) continue;
      else node.setAttribute(name, value);
    }
    add(node, children);
    return node;
  }

  function add(parent, children) {
    for (const child of children.flat(Infinity)) {
      if (child === null || child === undefined || child === false) continue;
      parent.append(child.nodeType ? child : document.createTextNode(String(child)));
    }
  }

  function section(title, lede, ...blocks) {
    return h('div', { class: 'card' }, h('h2', { text: title }), lede && h('p', { class: 'lede', text: lede }), ...blocks);
  }

  const views = {};
  const changeListeners = [];
  const state = { current: 'dashboard' };

  /* Chaque vue est hébergée par une page du site (cours, exercices, profil). */
  const PAGE_DES_VUES = {
    fiches: 'cours.html',
    programmes: 'cours.html',
    quiz: 'exercices.html',
    dashboard: 'profil.html',
    planning: 'profil.html'
  };

  function hebergeIci(id) {
    return Boolean(document.getElementById('view-' + id));
  }

  function changerDePage(id, requete) {
    const page = PAGE_DES_VUES[id] || 'cours.html';
    window.location.href = requete ? page + '?' + requete : page;
  }

  /* Le quiz d'une seule leçon s'ouvre sur la page Exercices, avec la leçon déjà sélectionnée. */
  function allezAuQuiz(idLecon) {
    changerDePage('quiz', 'lecon=' + encodeURIComponent(idLecon));
  }

  function registerView(id, view) {
    views[id] = view;
  }

  function onChange(fn) {
    changeListeners.push(fn);
  }

  /* Toute modification de la progression repasse par ici : la vue active est redessinée. */
  function refresh() {
    changeListeners.forEach((fn) => fn());
    render(state.current);
  }

  function render(id) {
    const host = document.getElementById('view-' + id);
    if (!host) return;
    host.textContent = '';
    if (!views[id]) {
      host.append(h('p', { class: 'alert alert-error', text: 'Cette section n’a pas pu être chargée. Vérifiez que les fichiers js/ sont tous présents.' }));
      return;
    }
    views[id].render(host);
  }

  function go(id) {
    if (!views[id]) return;
    /* La section demandée vit sur une autre page : on l'y rejoint plutôt que de rester ici. */
    if (!hebergeIci(id)) { changerDePage(id); return; }
    state.current = id;
    for (const host of document.querySelectorAll('.view')) host.hidden = host.id !== 'view-' + id;
    for (const btn of document.querySelectorAll('.nav-btn')) {
      const active = btn.dataset.view === id;
      btn.classList.toggle('is-active', active);
      if (active) btn.setAttribute('aria-current', 'page');
      else btn.removeAttribute('aria-current');
    }
    render(id);
    const bouton = document.querySelector('.nav-btn[data-view="' + id + '"]');
    const live = document.getElementById('live-region');
    if (live) live.textContent = 'Section ' + (bouton ? bouton.textContent : id);
    document.getElementById('view-' + id).focus({ preventScroll: true });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  /* Tableau de bord (section 4.1) ------------------------------------ */

  function statCard(label, value, note, onClick) {
    return h('button', { class: 'card stat stat-link', type: 'button', onclick: onClick },
      h('p', { class: 'stat-label', text: label }),
      h('p', { class: 'stat-value', text: String(value) }),
      note && h('p', { class: 'stat-note', text: note }));
  }

  function formatDate(iso) {
    if (!iso) return '';
    const d = new Date(iso);
    return Number.isNaN(d.getTime()) ? '' : d.toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' });
  }

  /* Une seule action conseillée à la fois, dans l'ordre des besoins. */
  function nextStep(fiches, studied, tasks, score) {
    const restees = fiches.filter((f) => !studied.includes(f.id));
    const enRetard = tasks.find((t) => !t.done && t.due && new Date(t.due + 'T23:59:59') < new Date());

    if (enRetard) return { texte: 'Une tâche est en retard : « ' + enRetard.label + ' ».', label: 'Voir mes révisions', action: () => go('planning') };
    if (!fiches.length) return { texte: 'Aucune fiche n’est encore publiée.', label: '', action: null };
    if (!studied.length) return { texte: 'Commencez par la fiche « ' + fiches[0].titre + ' ».', label: 'Ouvrir cette fiche', action: () => JK.openFiche(fiches[0].id) };
    if (restees.length) return { texte: 'Prochaine fiche à étudier : « ' + restees[0].titre + ' ».', label: 'Continuer', action: () => JK.openFiche(restees[0].id) };
    if (!score) return { texte: 'Toutes les fiches sont étudiées : vérifiez-vous avec un quiz.', label: 'Lancer le quiz', action: () => go('quiz') };
    if (score.score / score.total < 0.8) return { texte: 'Dernier quiz à ' + Math.round((score.score / score.total) * 100) + ' % : retravaillez les corrections.', label: 'Refaire le quiz', action: () => go('quiz') };
    if (!tasks.length) return { texte: 'Bon niveau. Planifiez maintenant vos prochaines séances.', label: 'Ajouter une tâche', action: () => go('planning') };
    return { texte: 'Rien d’urgent : ' + tasks.filter((t) => !t.done).length + ' tâche(s) à faire vous attendent.', label: 'Voir mes révisions', action: () => go('planning') };
  }

  registerView('dashboard', {
    render(host) {
      const fiches = JK.FICHES || [];
      const studied = JK.read(KEYS.studied, []).filter((id) => fiches.some((f) => f.id === id));
      const tasks = JK.read(KEYS.tasks, []);
      const nbTerminees = tasks.filter((t) => t.done).length;
      const score = JK.read(KEYS.lastScore, null);
      const scores = JK.read(KEYS.scores, {}) || {};
      const pct = fiches.length ? Math.round((studied.length / fiches.length) * 100) : 0;
      const conseil = nextStep(fiches, studied, tasks, score);

      const notes = JK.read(KEYS.recall, {});
      const totalNotes = Object.keys(notes).length;
      const memo = fiches.map((f) => ({ fiche: f, m: JK.memorisation(f) })).filter((x) => x.m.aRevoir > 0)
        .sort((a, b) => b.m.aRevoir - a.m.aRevoir).slice(0, 3);
      const dues = JK.progression.aRevoir();
      const barreFiches = h('span');
      barreFiches.style.width = pct + '%';

      host.append(
        h('h1', { text: 'Tableau de bord' }),
        h('p', { class: 'lede', text: 'Un aperçu de votre travail sur cet appareil. Rien n’est envoyé sur Internet.' }),
        h('div', { class: 'card bilan' },
          h('p', { class: 'col-souple sans-marge', text: conseil.texte }),
          conseil.label && h('button', { class: 'btn', type: 'button', text: conseil.label, onclick: conseil.action })),
        h('div', { class: 'grid grid-stats' },
          statCard('Fiches étudiées', studied.length + ' / ' + fiches.length, 'Touchez pour ouvrir la bibliothèque.', () => go('fiches')),
          statCard('Tâches terminées', nbTerminees + ' / ' + tasks.length, 'Touchez pour ouvrir le planificateur.', () => go('planning')),
          statCard('Dernier quiz', score ? score.score + ' / ' + score.total : '—',
            score ? (score.lecon ? score.lecon + ' · ' : '') + formatDate(score.date) + ' · ' + Math.round((score.score / score.total) * 100) + ' %' : 'Aucun quiz terminé pour l’instant.', () => go('quiz')),
          statCard('Quiz de leçons faits', Object.keys(scores).length, 'Cumul des tentatives de quiz sur cet appareil : ' + JK.progression.nbTentatives() + '.', () => go('quiz')),
          statCard('Leçons à revoir', dues.length, dues.length ? 'Touchez pour ouvrir la liste, en haut de l’écran quiz.' : 'Aucune leçon quizée n’a encore atteint sa date de revue.', () => go('quiz')),
          statCard('Lignes mémorisées', totalNotes, 'Réponses données dans le mode mémorisation des fiches.', () => go('fiches'))),
        section('Leçons à revoir', dues.length
          ? 'Le quiz de ces leçons a été passé il y a assez longtemps pour le refaire : '
            + JK.progression.JOURS_SANS_FAUTE + ' jours de délai après un quiz sans faute, '
            + JK.progression.JOURS_AVEC_ERREUR + ' après un quiz avec des erreurs.'
          : 'Une leçon devient « à revoir » ' + JK.progression.JOURS_SANS_FAUTE + ' jours après un quiz sans faute, '
            + JK.progression.JOURS_AVEC_ERREUR + ' jours après un quiz avec des erreurs. Faites un quiz pour remplir cette liste.',
          dues.length
            ? h('div', { class: 'bilan' }, dues.slice(0, 6).map((x) => h('button', {
              class: 'btn btn-secondary', type: 'button',
              text: JK.progression.titreDe(x.id) + ' (' + x.entree.score + ' / ' + x.entree.total + ' · revue le ' + formatDate(x.revue) + ')',
              onclick: () => allezAuQuiz(x.id)
            })))
            : h('p', { class: 'stat-note', text: 'Rien à reprendre pour l’instant : aucune leçon de quiz n’a atteint sa date de revue.' })),
        section('À reprendre en priorité', 'Les lignes que vous avez vous-même marquées « À revoir » dans le mode mémorisation.',
          memo.length
            ? h('div', { class: 'bilan' }, memo.map((x) => h('button', {
              class: 'btn btn-secondary', type: 'button',
              text: x.fiche.titre + ' (' + x.m.aRevoir + ' à revoir)',
              onclick: () => JK.openFiche(x.fiche.id)
            })))
            : h('p', { class: 'stat-note', text: totalNotes ? 'Rien à revoir : toutes vos réponses disent « je sais ».' : 'Pas encore de réponses : ouvrez une fiche, cachez une ligne et notez « Je sais » ou « À revoir ».' })),
        section('Progression personnelle', 'Part des fiches de la bibliothèque que vous avez étudiées.',
          h('div', { class: 'progress', role: 'progressbar', 'aria-valuenow': pct, 'aria-valuemin': '0', 'aria-valuemax': '100', 'aria-label': 'Progression des fiches' },
            barreFiches),
          h('p', { class: 'stat-note', text: pct + ' % des fiches disponibles ont été étudiées.' })),
        section('Raccourcis', null,
          h('div', { class: 'shortcuts' },
            h('button', { class: 'btn', type: 'button', onclick: () => go('fiches'), text: 'Ouvrir les fiches' }),
            h('button', { class: 'btn btn-secondary', type: 'button', onclick: () => go('quiz'), text: 'Lancer un quiz' }),
            h('button', { class: 'btn btn-secondary', type: 'button', onclick: () => go('planning'), text: 'Planifier mes révisions' }))),
        h('p', { class: 'alert alert-warn', text: 'Vos données sont enregistrées dans ce navigateur seulement : elles disparaissent si vous videz les données du site, changez d’appareil ou utilisez un autre navigateur.' }));
    }
  });

  /* ---------- Registres de programme, une entrée par matière ----------
     Chaque fichier js/programmes/<matiere>.js appelle JK.registreDeProgramme() avec des
     listes de leçons recopiées d'une source. Le code de la matière fabrique l'identifiant
     permanent de la leçon (svt-6e-c1-l2), qui sert aussi de clé au quiz de cette leçon.
     Attention : l'identifiant dépend de l'ordre des lignes, insérer une leçon décale
     toutes celles du même chapitre. */
  const CODE_CLASSE = {
    '6ᵉ': '6e', '5ᵉ': '5e', '4ᵉ': '4e', '3ᵉ': '3e',
    Seconde: 'seconde', Première: 'premiere', Terminale: 'terminale'
  };
  const PROGRAMME_REGISTRES = [];
  const TOUTES_LES_LECONS = [];

  function lecon(t, f) { return { t, f: f || null }; }

  function registreDeProgramme(registre) {
    if (!registre || !registre.code || !Array.isArray(registre.CLASSES)) return;
    registre.CLASSES.forEach((c) => {
      c.code = CODE_CLASSE[c.niveau];
      c.matiere = registre.matiere;
      if (!c.code) return;
      c.chapitres.forEach((ch, ci) => (ch.lecons || []).forEach((l, li) => {
        l.id = registre.code + '-' + c.code + '-c' + (ci + 1) + '-l' + (li + 1);
        l.niveau = c.niveau;
        l.chapitre = ch.nom;
        l.matiere = registre.matiere;
        TOUTES_LES_LECONS.push(l);
      }));
    });
    PROGRAMME_REGISTRES.push(registre);
  }

  window.JK = {
    h, add, section, KEYS, PREFIX,
    read, write, clearAll, formatDate,
    registerView, onChange, refresh, go,
    hebergeIci, changerDePage, allezAuQuiz, PAGE_DES_VUES,
    params: new URLSearchParams(window.location.search),
    storageAvailable: hasStorage,
    lecon, registreDeProgramme, PROGRAMME_REGISTRES, CODE_CLASSE,
    toutesLesLecons: () => TOUTES_LES_LECONS,
    /* Classes de tous les registres, lu à l'exécution : les fichiers de données chargent après app.js.
       L'accueil y compte les leçons reliées à une fiche. */
    get LECONS() { return PROGRAMME_REGISTRES.reduce((all, r) => all.concat(r.CLASSES), []); }
  };

  document.addEventListener('DOMContentLoaded', () => {
    /* L'accueil ne charge les modules que pour lire les compteurs : aucun écran à dessiner ici. */
    if (document.body.dataset.app !== 'true') return;

    const avertissement = document.getElementById('storage-warning');
    if (!hasStorage && avertissement) avertissement.hidden = false;

    if (JK.applyQuery) JK.applyQuery();

    for (const btn of document.querySelectorAll('.nav-btn')) {
      btn.addEventListener('click', () => {
        /* Un clic de navigation repart du niveau racine de la section, pas du sous-écran atteint. */
        const vue = views[btn.dataset.view];
        if (vue && vue.onNavEnter) vue.onNavEnter();
        go(btn.dataset.view);
      });
    }

    const reinit = document.getElementById('reset-data');
    if (reinit) reinit.addEventListener('click', () => {
      if (!window.confirm('Effacer les fiches étudiées, les tâches, le dernier score et les réponses de mémorisation sur cet appareil ?')) return;
      clearAll();
      refresh();
    });

    /* Les bandeaux collants s'empilent : leurs hauteurs réelles servent de décalage aux barres sticky. */
    function mesureBandeaux() {
      const barre = document.querySelector('.barre');
      const onglets = document.querySelector('.onglets');
      const racine = document.documentElement.style;
      if (barre) racine.setProperty('--barre-h', barre.offsetHeight + 'px');
      if (onglets) racine.setProperty('--onglets-h', onglets.offsetHeight + 'px');
    }
    window.addEventListener('resize', mesureBandeaux);
    window.addEventListener('load', mesureBandeaux);
    mesureBandeaux();

    /* Vue initiale : l'ancre de l'URL, l'attribut data-view de la page, ou la première section présente.
       decodeURIComponent lève une URIError sur une ancre mal échappée (« #%zz », lien tapé à la main
       ou partagé) : sans ce filet, toute la page restait vide. */
    let ancre = '';
    try {
      ancre = decodeURIComponent(window.location.hash.replace('#', ''));
    } catch (err) {
      ancre = window.location.hash.replace('#', '');
    }
    const vueInitiale = (ancre && hebergeIci(ancre))
      ? ancre
      : (document.body.dataset.view || (document.querySelector('.view') || { dataset: {} }).dataset.view || 'dashboard');
    go(hebergeIci(vueInitiale) ? vueInitiale : 'dashboard');
  });
})();
