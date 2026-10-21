/* Registre des quiz : une liste de questions par leçon. Rien n'est jamais mélangé entre classes ou entre leçons. */
(function () {
  'use strict';

  JK.QUIZ_LECONS = {};

  /* Un fichier de quiz appelle ceci : JK.quizDeLecon('geo-5e-c1-l4', [ {…}, {…} ]).
     Les identifiants des questions sont fabriqués ici, à partir de la leçon et de l'ordre. */
  JK.quizDeLecon = function (idLecon, questions) {
    if (!idLecon || !Array.isArray(questions)) return;
    const valides = questions.filter((q) => q
      && typeof q.enonce === 'string'
      && Array.isArray(q.options) && q.options.length >= 2
      && Number.isInteger(q.correct) && q.correct >= 0 && q.correct < q.options.length
      && typeof q.explication === 'string');
    if (!valides.length) return;
    const base = JK.QUIZ_LECONS[idLecon] || [];
    valides.forEach((q, i) => {
      q.id = idLecon + '-q' + (base.length + i + 1);
      q.lecon = idLecon;
    });
    JK.QUIZ_LECONS[idLecon] = base.concat(valides);
  };

  JK.quizDe = (idLecon) => JK.QUIZ_LECONS[idLecon] || null;

  JK.nbQuizRediges = () => Object.keys(JK.QUIZ_LECONS).length;
})();
