/* Icônes : un jeu de traits cohérent, en SVG local, sans police d'icônes ni CDN. */
(function () {
  'use strict';

  const NS = 'http://www.w3.org/2000/svg';

  /* Chaque tracé tient dans une boîte de 24 x 24 et n'utilise ni fond ni couleur :
     le trait suit la couleur du texte, donc chaque contexte garde son contraste. */
  const SYMBOLS = {
    accueil: '<path d="M4 10.8 12 4.2l8 6.6"/><path d="M6.4 9.6V19.4h11.2V9.6"/><path d="M10 19.4v-4.6h4v4.6"/>',
    tableau: '<rect x="4" y="4" width="7" height="7" rx="1.8"/><rect x="13" y="4" width="7" height="7" rx="1.8"/><rect x="4" y="13" width="7" height="7" rx="1.8"/><rect x="13" y="13" width="7" height="7" rx="1.8"/>',
    livre: '<path d="M12 6.5c-2-1.6-4.6-2-8-1.8v13c3.4-.2 6 .2 8 1.8 2-1.6 4.6-2 8-1.8v-13c-3.4-.2-6 .2-8 1.8z"/><path d="M12 6.5v13"/>',
    liste: '<path d="M9 6.5h11M9 12h11M9 17.5h11"/><circle cx="5" cy="6.5" r="1.1"/><circle cx="5" cy="12" r="1.1"/><circle cx="5" cy="17.5" r="1.1"/>',
    cocher: '<rect x="3.5" y="3.5" width="17" height="17" rx="4"/><path d="m8 12.4 2.8 2.8L16.4 9.2"/>',
    calendrier: '<rect x="3.5" y="5.5" width="17" height="15" rx="3"/><path d="M3.5 10.5h17M8 3.5v4M16 3.5v4"/>',
    fleche: '<path d="M4.5 12h14"/><path d="m13 6.5 5.8 5.5-5.8 5.5"/>',
    cadenas: '<rect x="4.5" y="10.5" width="15" height="10" rx="2.6"/><path d="M8 10.5V8a4 4 0 0 1 8 0v2.5"/>',
    horsligne: '<path d="M7.6 18.5h9.2a3.9 3.9 0 0 0 .5-7.8 5.4 5.4 0 0 0-8-3.4"/><path d="M6.4 10.4a4.2 4.2 0 0 0 1.2 8.1"/><path d="M3.5 3.5l17 17"/>',
    telephone: '<rect x="6.5" y="2.8" width="11" height="18.4" rx="2.6"/><path d="M10.4 18.4h3.2"/>',
    accessible: '<circle cx="12" cy="4.6" r="2.1"/><path d="M5.2 8.8c4.4 1.4 9.2 1.4 13.6 0"/><path d="M12 8.9v4.4"/><path d="m8.6 20.6 3.4-7.3 3.4 7.3"/>',
    maths: '<path d="M17 5.5H7.4l4.6 6.5-4.6 6.5H17"/>',
    atome: '<circle cx="12" cy="12" r="2.2"/><ellipse cx="12" cy="12" rx="9.4" ry="4.2" transform="rotate(28 12 12)"/><ellipse cx="12" cy="12" rx="9.4" ry="4.2" transform="rotate(-28 12 12)"/>',
    feuille: '<path d="M19.6 4.4C10.4 5.3 5 10.6 4.6 19.6c9-.4 14.4-5.8 15-15.2z"/><path d="M8.4 15.6c1.8-3.6 4.2-5.8 7.6-7.2"/>',
    globe: '<circle cx="12" cy="12" r="9"/><path d="M3 12h18"/><path d="M12 3c2.6 2.6 2.6 15.4 0 18M12 3c-2.6 2.6-2.6 15.4 0 18"/>',
    rafraichir: '<path d="M19.6 12a7.6 7.6 0 1 1-2.3-5.4"/><path d="M20 4.4v4.4h-4.4"/>',
    info: '<circle cx="12" cy="12" r="9"/><path d="M12 11v5.4"/><circle cx="12" cy="7.8" r="1"/>',
    cible: '<circle cx="12" cy="12" r="8.4"/><circle cx="12" cy="12" r="4"/><circle cx="12" cy="12" r="1"/>',
    horloge: '<circle cx="12" cy="12" r="8.6"/><path d="M12 7.4V12l3.4 2.2"/>',
    profil: '<circle cx="12" cy="8" r="3.6"/><path d="M5.4 20.4a6.8 6.8 0 0 1 13.2 0"/>'
  };

  function installeSprite() {
    if (document.getElementById('i-livre')) return;
    const marque = Object.keys(SYMBOLS)
      .map((nom) => '<symbol id="i-' + nom + '" viewBox="0 0 24 24">' + SYMBOLS[nom] + '</symbol>')
      .join('');
    const source = new DOMParser().parseFromString(
      '<svg xmlns="' + NS + '">' + marque + '</svg>',
      'image/svg+xml'
    );
    /* Un SVG mal formé est remplacé par un document « parsererror » : on laisse alors les
       libellés texte seuls, sans icône, au lieu de casser la page. */
    if (source.querySelector('parsererror')) return;
    const sprite = document.createElementNS(NS, 'svg');
    sprite.setAttribute('class', 'sprite');
    sprite.setAttribute('aria-hidden', 'true');
    Array.from(source.documentElement.childNodes).forEach((n) => sprite.append(document.importNode(n, true)));
    document.body.append(sprite);
  }

  function icon(nom, classe) {
    const svg = document.createElementNS(NS, 'svg');
    svg.setAttribute('class', 'ico' + (classe ? ' ' + classe : ''));
    svg.setAttribute('viewBox', '0 0 24 24');
    svg.setAttribute('aria-hidden', 'true');
    svg.setAttribute('focusable', 'false');
    const use = document.createElementNS(NS, 'use');
    use.setAttribute('href', '#i-' + nom);
    svg.append(use);
    return svg;
  }

  installeSprite();

  window.JK = window.JK || {};
  JK.icon = icon;
  JK.installeSprite = installeSprite;
})();
