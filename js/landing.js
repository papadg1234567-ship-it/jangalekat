/* Accueil : les compteurs viennent des fichiers de données, jamais d'un texte figé. */
(function () {
  'use strict';

  const fiches = window.JK && JK.FICHES ? JK.FICHES : [];
  const parLecon = window.JK && JK.QUIZ_LECONS ? JK.QUIZ_LECONS : {};
  const classes = window.JK && JK.LECONS ? JK.LECONS : [];

  const ids = new Set(fiches.map((f) => f.id));
  let lecons = 0;
  classes.forEach((c) => (c.chapitres || []).forEach((ch) => {
    (ch.lecons || []).forEach((l) => { if (l.f && ids.has(l.f)) lecons += 1; });
  }));

  const quiz = Object.keys(parLecon);
  let questions = 0;
  quiz.forEach((id) => { questions += parLecon[id].length; });

  const valeurs = { fiches: fiches.length, questions: questions, lecons: lecons, quiz: quiz.length };
  fiches.forEach((f) => {
    const cle = 'mat-' + f.matiere;
    valeurs[cle] = (valeurs[cle] || 0) + 1;
  });

  /* Deux valeurs lues dans le stockage de cet appareil : sans historique, la page garde son
     état neutre (compteur à 0, bouton « Reprendre » masqué). */
  const progression = window.JK && JK.progression ? JK.progression : null;
  valeurs.aRevoir = progression ? progression.aRevoir().length : 0;

  document.querySelectorAll('[data-compteur]').forEach((element) => {
    const valeur = valeurs[element.dataset.compteur];
    if (typeof valeur === 'number') element.textContent = String(valeur);
  });

  const reprendre = progression && progression.reprendre();
  const boutonReprise = document.getElementById('reprendre');
  if (reprendre && boutonReprise) {
    boutonReprise.textContent = 'Reprendre : ' + (reprendre.lecon || reprendre.leconId);
    boutonReprise.href = 'exercices.html?lecon=' + encodeURIComponent(reprendre.leconId);
    boutonReprise.hidden = false;
  }
})();
