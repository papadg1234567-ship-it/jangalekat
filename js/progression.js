/* Progression : la seule règle de revue de l'application, calculée sur l'appareil de l'élève.
   Chargée après js/app.js. Aucune clé de stockage nouvelle : les dates de revue vivent dans les
   entrées de « jangalekat.v1.scores », déjà indexées par identifiant de leçon. */
(function () {
  'use strict';

  const { KEYS } = JK;

  /* Quiz sans faute : revue conseillée 7 jours plus tard. S'il reste des erreurs : 2 jours.
     Le calcul part de minuit pour que « date atteinte » ne dépende pas de l'heure de passage. */
  const JOURS_SANS_FAUTE = 7;
  const JOURS_AVEC_ERREUR = 2;

  function minuit(date) {
    const d = new Date(date);
    if (Number.isNaN(d.getTime())) return null;
    d.setHours(0, 0, 0, 0);
    return d;
  }

  function calculerRevue(score, total, date) {
    const d = minuit(date);
    if (!d) return null;
    d.setDate(d.getDate() + (score === total ? JOURS_SANS_FAUTE : JOURS_AVEC_ERREUR));
    return d.toISOString();
  }

  function carte() {
    return JK.read(KEYS.scores, {}) || {};
  }

  /* Une leçon déjà quizée avant cette règle n'a pas de date enregistrée : on la déduit de sa
     date de passage, sinon elle resterait comptée comme « jamais revue ». */
  function dateDeRevue(entree) {
    if (!entree) return null;
    return entree.prochaineRevision || calculerRevue(entree.score, entree.total, entree.date);
  }

  function estDue(entree) {
    const revue = minuit(dateDeRevue(entree));
    const aujourdhui = minuit(new Date().toISOString());
    return Boolean(revue) && revue.getTime() <= aujourdhui.getTime();
  }

  /* Leçons dues, la plus ancienne d'abord. */
  function aRevoir() {
    return Object.entries(carte())
      .filter(([, entree]) => estDue(entree))
      .map(([id, entree]) => ({ id, entree, revue: dateDeRevue(entree) }))
      .sort((x, y) => new Date(x.revue) - new Date(y.revue));
  }

  function nbTentatives() {
    return Object.values(carte()).reduce((n, entree) => n + (entree.tentatives || 1), 0);
  }

  /* Titre d'une leçon : le registre d'abord, la fiche qui sert de support sinon. */
  function titreDe(id) {
    const lecon = (JK.toutesLesLecons ? JK.toutesLesLecons() : []).find((l) => l.id === id);
    if (lecon) return lecon.t;
    const fiche = id.indexOf('fiche-') === 0 ? id.slice(6) : null;
    const f = fiche && (JK.FICHES || []).find((x) => x.id === fiche);
    return f ? f.titre : id;
  }

  /* Où reprendre : la dernière leçon quizée. Rien d'autre n'est deviné, pour ne pas proposer
     une reprise inventée à l'élève qui ouvre l'accueil. */
  function reprendre() {
    const derniere = JK.read(KEYS.lastScore, null);
    return derniere && derniere.leconId ? derniere : null;
  }

  JK.progression = {
    JOURS_SANS_FAUTE, JOURS_AVEC_ERREUR,
    calculerRevue, carte, dateDeRevue, estDue, aRevoir, nbTentatives, titreDe, reprendre
  };
})();
