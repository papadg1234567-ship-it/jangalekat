/* Écran « Programmes » : dessine tous les registres déclarés par js/programmes/*.js.
   Ce fichier ne contient aucun contenu pédagogique, seulement l'affichage et les filtres. */
(function () {
  'use strict';

  const { h } = JK;

  const NIVEAUX = ['6ᵉ', '5ᵉ', '4ᵉ', '3ᵉ', 'Seconde', 'Première', 'Terminale'];
  const vue = { niveau: 'Toutes', matiere: 'Toutes' };

  const LIBELLES_AUTORITE = {
    programme_officiel: 'liste recopiée d’un programme officiel',
    fascicule_pedagogique: 'liste recopiée d’un fascicule pédagogique institutionnel, pas d’un arrêté',
    progression_harmonisee: 'progression publiée par une équipe enseignante, autorité non vérifiée',
    sans_source: 'aucune source officielle jointe : liste de démonstration'
  };

  function registres() {
    return (JK.PROGRAMME_REGISTRES || []).filter((r) => vue.matiere === 'Toutes' || r.matiere === vue.matiere);
  }

  function matieres() {
    return [...new Set((JK.PROGRAMME_REGISTRES || []).map((r) => r.matiere))];
  }

  function toutesLesClasses() {
    return (JK.PROGRAMME_REGISTRES || []).reduce((all, r) => all.concat(r.CLASSES), []);
  }

  /* Une fiche appartient à la matière quand elle la porte, directement ou par sa branche. */
  function estDeLaMatiere(fiche, matiere) {
    return fiche.matiere === matiere || fiche.branche === matiere;
  }

  function fichesDe(niveau, matiere) {
    return (JK.FICHES || []).filter((f) => f.niveau === niveau && estDeLaMatiere(f, matiere));
  }

  function ligne(l) {
    const dispo = l.f && (JK.FICHES || []).some((f) => f.id === l.f);
    return h('li', { class: 'programme-lecon' },
      h('span', { text: l.t }),
      dispo
        ? h('button', {
          class: 'btn btn-ghost btn-sm', type: 'button', text: 'Fiche',
          'aria-label': 'Ouvrir la fiche qui couvre cette leçon', onclick: () => JK.openFiche(l.f)
        })
        : h('span', { class: 'badge badge-out', text: 'Pas encore de fiche' }),
      h('button', {
        class: 'btn btn-ghost btn-sm', type: 'button', text: 'Quiz',
        'aria-label': 'Faire le quiz de cette leçon seule', onclick: () => JK.allezAuQuiz(l.id)
      }));
  }

  function sourceBloc(registre) {
    const children = [h('p', { class: 'stat-note', text: 'Source : ' + registre.SOURCE })];
    const docs = registre.DOCUMENTS || (registre.url
      ? [{ reference: registre.reference, url: registre.url, consulteLe: registre.consulteLe }]
      : []);
    docs.forEach((d) => {
      if (!d || !d.url) return;
      children.push(h('p', { class: 'stat-note' },
        h('span', { text: 'Document consulté le ' + (d.consulteLe || '?') + ' : ' }),
        h('a', { href: d.url, target: '_blank', rel: 'noopener', text: d.reference || d.url })));
    });
    children.push(h('p', { class: 'stat-note', text: 'Statut : ' + (LIBELLES_AUTORITE[registre.autorite] || registre.autorite) + '.' }));
    return h('div', { class: 'card' }, children);
  }

  JK.registerView('programmes', {
    onNavEnter() { vue.niveau = 'Toutes'; vue.matiere = 'Toutes'; },
    render(host) {
      const regs = registres();
      const niveaux = [...new Set(toutesLesClasses().map((c) => c.niveau))];
      const nbLecons = regs.reduce((n, r) => n + r.CLASSES.reduce((m, c) => m + c.chapitres
        .reduce((k, ch) => k + ch.lecons.length, 0), 0), 0);

      host.append(
        h('h1', { text: 'Programmes' }),
        h('p', { class: 'lede', text: nbLecons + ' leçons réparties en ' + regs.length + ' matière(s) affichée(s) ici, classe par classe, avec les fiches déjà disponibles dans la bibliothèque.' }),
        h('div', { class: 'chips', role: 'group', 'aria-label': 'Filtrer par matière' },
          h('button', {
            class: 'chip', type: 'button', text: 'Toutes les matières',
            'aria-pressed': String(vue.matiere === 'Toutes'),
            onclick: () => { vue.matiere = 'Toutes'; JK.refresh(); }
          }),
          matieres().map((m) => h('button', {
            class: 'chip', type: 'button', text: m, 'aria-pressed': String(vue.matiere === m),
            onclick: () => { vue.matiere = m; JK.refresh(); }
          }))),
        h('div', { class: 'chips', role: 'group', 'aria-label': 'Filtrer par classe' },
          h('button', {
            class: 'chip', type: 'button', text: 'Toutes les classes', 'aria-pressed': String(vue.niveau === 'Toutes'),
            onclick: () => { vue.niveau = 'Toutes'; JK.refresh(); }
          }),
          NIVEAUX.filter((n) => niveaux.indexOf(n) >= 0).map((n) => h('button', {
            class: 'chip', type: 'button', text: n, 'aria-pressed': String(vue.niveau === n),
            onclick: () => { vue.niveau = n; JK.refresh(); }
          }))),
        h('p', {
          class: 'alert alert-warn',
          text: 'Seuls les titres, l’ordre et les volumes horaires des leçons viennent des documents cités sous chaque liste. Le texte des fiches et les questions de quiz sont des contenus de démonstration : aucun n’a été relu par un enseignant. La réforme PARC révise ces curricula — confirmez la liste en vigueur avec votre professeur.'
        }));

      regs.forEach((r) => {
        host.append(sourceBloc(r));
        r.CLASSES
          .filter((c) => vue.niveau === 'Toutes' || c.niveau === vue.niveau)
          .forEach((c) => {
            const nbFiches = fichesDe(c.niveau, r.matiere).length;
            host.append(
              h('div', { class: 'card' },
                h('h2', null, c.niveau + ' — ' + r.matiere, h('span', { class: 'badge badge-out', text: c.nbLecons })),
                h('p', { class: 'stat-label', text: c.titre }),
                h('p', { class: 'lede', text: c.note }),
                h('p', { class: 'stat-note', text: nbFiches + ' fiche(s) de ' + r.matiere + ' disponible(s) pour cette classe dans Jàngalekat.' }),
                h('div', { class: 'programme-liste' }, c.chapitres.map((ch) => h('div', null,
                  h('h3', { text: ch.nom }),
                  h('ul', null, ch.lecons.map(ligne)))))));
          });
      });

      if (!regs.length) {
        host.append(h('p', { class: 'alert', text: 'Aucune leçon pour cette matière : choisissez « Toutes les matières ».' }));
      }
      host.append(h('p', { class: 'stat-note', text: 'Les durées entre parenthèses sont les volumes horaires indiqués par le document source.' }));
    }
  });

  JK.PROGRAMMES = { registres: JK.PROGRAMME_REGISTRES };
})();
