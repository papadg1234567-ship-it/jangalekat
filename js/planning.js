/* Planificateur de révisions (section 4.4) et sauvegarde locale (section 4.5). */
(function () {
  'use strict';

  const { h, KEYS } = JK;

  const MAX_LABEL = 120;
  const matieres = () => [...new Set(JK.FICHES.map((f) => f.matiere))];

  const state = { error: '', filtre: 'Toutes' };

  function tasks() {
    return JK.read(KEYS.tasks, []);
  }

  function save(list) {
    JK.write(KEYS.tasks, list);
  }

  function addTask(label, matiere, due) {
    const cleaned = label.trim().replace(/\s+/g, ' ');
    if (!cleaned) return 'Écrivez d’abord l’objet de la tâche, par exemple « Revoir la fiche dérivation ».';
    if (cleaned.length > MAX_LABEL) return 'La tâche est trop longue : ' + cleaned.length + ' caractères, maximum ' + MAX_LABEL + '.';
    const list = tasks();
    list.push({
      id: 't' + Date.now() + '-' + Math.random().toString(36).slice(2, 7),
      label: cleaned,
      matiere,
      due,
      done: false,
      createdAt: new Date().toISOString()
    });
    save(list);
    return '';
  }

  function update(id, patch) {
    save(tasks().map((t) => (t.id === id ? Object.assign({}, t, patch) : t)));
    JK.refresh();
  }

  function removeTask(id) {
    save(tasks().filter((t) => t.id !== id));
    JK.refresh();
  }

  /* Jours restants avant l’échéance : négatif quand la date est passée. */
  function echeance(due) {
    if (!due) return null;
    const d = new Date(due + 'T00:00:00');
    if (Number.isNaN(d.getTime())) return null;
    const ceMatin = new Date();
    ceMatin.setHours(0, 0, 0, 0);
    return Math.round((d - ceMatin) / 86400000);
  }

  function dueLabel(due) {
    const jours = echeance(due);
    if (jours === null) return '';
    const date = new Date(due + 'T00:00:00').toLocaleDateString('fr-FR', { day: 'numeric', month: 'short' });
    if (jours < 0) return 'Prévue le ' + date + ' (' + Math.abs(jours) + ' j de retard)';
    if (jours === 0) return 'Prévue aujourd’hui';
    if (jours === 1) return 'Prévue demain';
    return 'Prévue le ' + date + ' (dans ' + jours + ' j)';
  }

  const FILTRES = ['Toutes', 'À faire', 'Terminées', 'En retard'];

  function estEnRetard(t) {
    return !t.done && echeance(t.due) !== null && echeance(t.due) < 0;
  }

  function selectionne(liste) {
    if (state.filtre === 'À faire') return liste.filter((t) => !t.done);
    if (state.filtre === 'Terminées') return liste.filter((t) => t.done);
    if (state.filtre === 'En retard') return liste.filter(estEnRetard);
    return liste;
  }

  function chip(label, pressed, onClick) {
    return h('button', {
      class: 'chip', type: 'button', 'aria-pressed': String(pressed), text: label,
      onclick: () => { onClick(); JK.refresh(); }
    });
  }

  JK.registerView('planning', {
    render(host) {
      const liste = tasks();
      const nbFaites = liste.filter((t) => t.done).length;
      const nbRetard = liste.filter(estEnRetard).length;
      const visibles = selectionne(liste);

      const form = h('form', {
        class: 'card task-form',
        onsubmit: (e) => {
          e.preventDefault();
          const data = new FormData(form);
          const message = addTask(String(data.get('label') || ''), String(data.get('matiere') || 'Général'), String(data.get('due') || ''));
          if (message) {
            state.error = message;
            JK.refresh();
            return;
          }
          form.reset();
          state.error = '';
          JK.refresh();
        }
      },
        h('div', { class: 'field col-souple' },
          h('label', { for: 'task-label', text: 'Tâche de révision' }),
          h('input', { id: 'task-label', name: 'label', required: true, maxlength: String(MAX_LABEL), placeholder: 'Revoir la fiche second degré' })),
        h('div', { class: 'field' },
          h('label', { for: 'task-matiere', text: 'Matière' }),
          h('select', { id: 'task-matiere', name: 'matiere' },
            h('option', { value: 'Général', text: 'Général' }),
            matieres().map((m) => h('option', { value: m, text: m })))),
        h('div', { class: 'field' },
          h('label', { for: 'task-due', text: 'Date limite (facultative)' }),
          h('input', { id: 'task-due', name: 'due', type: 'date' })),
        h('button', { class: 'btn', type: 'submit', text: 'Ajouter la tâche' }));

      host.append(
        h('h1', { text: 'Planifier mes révisions' }),
        h('p', { class: 'lede', text: 'Découpez le travail en tâches simples. Tout reste enregistré dans ce navigateur.' }),
        state.error && h('p', { class: 'alert alert-error', text: state.error }),
        form,
        h('div', { class: 'grid grid-stats' },
          h('div', { class: 'card stat' },
            h('p', { class: 'stat-label', text: 'Tâches terminées' }),
            h('p', { class: 'stat-value', text: nbFaites + ' / ' + liste.length }),
            h('p', { class: 'stat-note', text: liste.length ? Math.round((nbFaites / liste.length) * 100) + ' % du plan réalisé.' : 'Ajoutez une première tâche ci-dessus.' })),
          h('div', { class: 'card stat' },
            h('p', { class: 'stat-label', text: 'En retard' }),
            h('p', { class: 'stat-value', text: String(nbRetard) }),
            h('p', { class: 'stat-note', text: 'Tâches non terminées dont la date limite est passée.' }))),
        h('div', { class: 'chips', role: 'group', 'aria-label': 'Filtrer les tâches' },
          FILTRES.map((f) => chip(f + (f === 'En retard' && nbRetard ? ' (' + nbRetard + ')' : ''), state.filtre === f, () => { state.filtre = f; }))));

      if (!visibles.length) {
        host.append(h('div', { class: 'card' },
          h('p', { class: 'empty sans-marge', text: liste.length ? 'Aucune tâche dans « ' + state.filtre + ' ».' : 'Aucune tâche pour l’instant.' }),
          !liste.length && h('p', { class: 'marge-haute' },
            h('button', { class: 'btn btn-secondary btn-sm', type: 'button', text: 'Choisir une fiche à réviser', onclick: () => JK.go('fiches') }))));
        return;
      }

      host.append(h('ul', { class: 'task-list' }, visibles.map((t) => {
        const note = dueLabel(t.due);
        const li = h('li', { class: 'task' + (t.done ? ' is-done' : '') + (estEnRetard(t) ? ' is-late' : '') },
          h('input', {
            type: 'checkbox', 'aria-label': 'Marquer « ' + t.label + ' » comme terminée',
            checked: t.done, onchange: () => update(t.id, { done: !t.done })
          }),
          h('p', { class: 'task-label' }, h('span', { text: t.label }),
            h('small', { text: [t.matiere, note].filter(Boolean).join(' · ') })),
          h('button', {
            class: 'task-del', type: 'button', 'aria-label': 'Supprimer la tâche', title: 'Supprimer', text: '×',
            onclick: () => { if (window.confirm('Supprimer « ' + t.label + ' » ?')) removeTask(t.id); }
          }));
        return li;
      })));
    }
  });

  /* Réutilisé par la fiche détaillée pour créer une tâche en un geste. */
  JK.addTask = addTask;
})();
