/* Tram Tram — i18n IT/EN, nav mobile, reveal */
(function () {
  'use strict';

  /* ---------- i18n ---------- */

  var translations = {
    it: {
      skip: 'Salta al contenuto',
      menu: 'Menu',
      nav_kitchen: 'La cucina',
      nav_menu: 'Il menù',
      nav_table: 'In tavola',
      nav_hours: 'Orari e dove',
      call_short: 'Chiama',
      call_cta: 'Chiama',
      see_menu: 'Guarda il menù',
      board: 'CUCINA ROMANA · VIA LAZZARETTO 16 · MILANO PORTA VENEZIA',
      board2: 'PROSSIMA FERMATA ⟶ IL MENÙ',
      board3: 'PROSSIMA FERMATA ⟶ IN TAVOLA',
      board4: 'CAPOLINEA ⟶ VIA LAZZARETTO 16',
      hero_sub: 'Trattoria romana',
      hero_motto: '«Pochi piatti. Semplici. Buoni.»',
      hero_lead: 'La cucina segue il binario della tradizione romana, casalinga — fermata dopo fermata, da via Lazzaretto a Trastevere e ritorno.',
      hero_proof: '4,5 su 5 · 355 recensioni su TripAdvisor',
      stop1: 'Fermata 01',
      stop2: 'Fermata 02',
      stop3: 'Fermata 03',
      stop4: 'Fermata 04',
      kitchen_title: 'La cucina',
      kitchen_pull: 'Un menù stagionale con un’anima romana: cacio e pepe, carciofi, puntarelle e le specialità del Lazio.',
      kitchen_p1: 'Alla guida c’è Francesco d’Argenzio, padrone di casa con un passato da regista e radici romane: il menù cambia con le stagioni ma l’anima resta quella — la cucina di casa, quella delle domeniche, portata a Milano senza traduzioni.',
      kitchen_p2: 'In tavola passano i tonnarelli cacio e pepe, la carbonara, i carciofi alla giudia e alla romana quando è stagione, le puntarelle, la cicoria, i saltimbocca e l’agnello. Pochi piatti, appunto. Semplici. Buoni.',
      stat1: 'su 5, in 355 recensioni TripAdvisor',
      stat2: 'aperti pranzo e cena, da martedì a domenica',
      stat3: 'binario: Roma–Milano, senza cambi',
      menu_title: 'I classici della casa',
      m1: 'Tonnarelli cacio e pepe',
      m2: 'Carbonara',
      m3: 'Amatriciana',
      m4: 'Carciofi alla giudia — quando è stagione',
      m5: 'Puntarelle con alici',
      m6: 'Saltimbocca alla romana',
      m7: 'Agnello — secondo tradizione',
      menu_note: 'Il menù è stagionale e cambia spesso: i piatti sono quelli veri della casa, i prezzi qui sono indicativi. Per il menù del giorno, una telefonata.',
      table_title: 'In tavola',
      alt1: 'I tonnarelli cacio e pepe di Tram Tram, serviti nel piatto fondo',
      dish_caption: 'I tonnarelli cacio e pepe — fotografia di Liana Solis, dal servizio del ristorante.',
      g_note: 'Il resto del servizio fotografico arriva col primo sopralluogo: carbonara, sala e cantina meritano il loro ritratto.',
      hours_title: 'Orari e dove',
      hours_caption: 'Orari di apertura',
      mon: 'Lunedì',
      tue_sun: 'Martedì — Domenica',
      dinner: 'e a cena',
      closed: 'chiuso',
      hours_note: 'Per i tavoli del weekend meglio prenotare: si fa presto, al telefono.',
      metro: 'M1 Porta Venezia, cinque minuti a piedi',
      maps: 'Apri in Google Maps',
      f_contacts: 'Contatti',
      f_where: 'Dove',
      f_what: 'Trattoria romana',
      f_line: 'Cucina romana casalinga, da martedì a domenica.',
      aria_top: 'Tram Tram — torna su',
      aria_nav: 'Navigazione principale'
    },
    en: {
      skip: 'Skip to content',
      menu: 'Menu',
      nav_kitchen: 'The kitchen',
      nav_menu: 'The menu',
      nav_table: 'At the table',
      nav_hours: 'Hours & location',
      call_short: 'Call',
      call_cta: 'Call',
      see_menu: 'See the menu',
      board: 'ROMAN CUISINE · VIA LAZZARETTO 16 · MILANO PORTA VENEZIA',
      board2: 'NEXT STOP ⟶ THE MENU',
      board3: 'NEXT STOP ⟶ AT THE TABLE',
      board4: 'LAST STOP ⟶ VIA LAZZARETTO 16',
      hero_sub: 'Roman trattoria',
      hero_motto: '“Few dishes. Simple. Good.”',
      hero_lead: 'The kitchen runs on the rails of homestyle Roman tradition — stop after stop, from Via Lazzaretto to Trastevere and back.',
      hero_proof: '4.5 out of 5 · 355 reviews on TripAdvisor',
      stop1: 'Stop 01',
      stop2: 'Stop 02',
      stop3: 'Stop 03',
      stop4: 'Stop 04',
      kitchen_title: 'The kitchen',
      kitchen_pull: 'A seasonal menu with a Roman soul: cacio e pepe, artichokes, puntarelle and the specialities of Lazio.',
      kitchen_p1: 'At the helm is Francesco d’Argenzio, host and former film director with Roman roots: the menu changes with the seasons, but the soul stays put — Sunday home cooking, brought to Milan untranslated.',
      kitchen_p2: 'Across the table: tonnarelli cacio e pepe, carbonara, Jewish-style and Roman-style artichokes in season, puntarelle, chicory, saltimbocca and lamb. Few dishes, as promised. Simple. Good.',
      stat1: 'out of 5, across 355 TripAdvisor reviews',
      stat2: 'open for lunch and dinner, Tuesday to Sunday',
      stat3: 'line: Rome–Milan, no changes',
      menu_title: 'The house classics',
      m1: 'Tonnarelli cacio e pepe',
      m2: 'Carbonara',
      m3: 'Amatriciana',
      m4: 'Jewish-style artichokes — in season',
      m5: 'Puntarelle with anchovies',
      m6: 'Saltimbocca alla romana',
      m7: 'Lamb — the traditional way',
      menu_note: 'The menu is seasonal and changes often: the dishes are the house’s real ones, the prices here are indicative. For today’s menu, just call.',
      table_title: 'At the table',
      alt1: 'Tram Tram’s tonnarelli cacio e pepe, served in a deep plate',
      dish_caption: 'The tonnarelli cacio e pepe — photograph by Liana Solis, from the restaurant’s own shoot.',
      g_note: 'The rest of the photo shoot arrives with our first visit: the carbonara, the dining room and the cellar deserve their portraits.',
      hours_title: 'Hours & location',
      hours_caption: 'Opening hours',
      mon: 'Monday',
      tue_sun: 'Tuesday — Sunday',
      dinner: 'and for dinner',
      closed: 'closed',
      hours_note: 'For weekend tables it’s best to book — it takes a minute on the phone.',
      metro: 'M1 Porta Venezia, a five-minute walk',
      maps: 'Open in Google Maps',
      f_contacts: 'Contact',
      f_where: 'Find us',
      f_what: 'Roman trattoria',
      f_line: 'Homestyle Roman cooking, Tuesday to Sunday.',
      aria_top: 'Tram Tram — back to top',
      aria_nav: 'Main navigation'
    }
  };

  var current = 'it';
  try {
    var saved = localStorage.getItem('tramtram-lang');
    if (saved === 'en' || saved === 'it') current = saved;
  } catch (e) { /* storage non disponibile: si resta in IT */ }

  function applyLang(lang) {
    var dict = translations[lang];
    if (!dict) return;
    current = lang;
    document.documentElement.lang = lang;
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      if (dict[key] !== undefined) el.textContent = dict[key];
    });
    document.querySelectorAll('[data-i18n-aria]').forEach(function (el) {
      var key = el.getAttribute('data-i18n-aria');
      if (dict[key] !== undefined) el.setAttribute('aria-label', dict[key]);
    });
    document.querySelectorAll('[data-i18n-alt]').forEach(function (el) {
      var key = el.getAttribute('data-i18n-alt');
      if (dict[key] !== undefined) el.setAttribute('alt', dict[key]);
    });
    document.querySelectorAll('.lang-btn').forEach(function (btn) {
      var active = btn.getAttribute('data-lang') === lang;
      btn.classList.toggle('is-active', active);
      btn.setAttribute('aria-pressed', String(active));
    });
    try { localStorage.setItem('tramtram-lang', lang); } catch (e) { /* ok */ }
  }

  document.querySelectorAll('.lang-btn').forEach(function (btn) {
    btn.addEventListener('click', function () {
      applyLang(btn.getAttribute('data-lang'));
    });
  });

  if (current !== 'it') applyLang(current);

  /* ---------- intro "il capolinea" ---------- */

  var intro = document.getElementById('intro');
  if (intro) {
    var introReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (introReduced) {
      intro.remove();
    } else {
      var introDone = false;
      var openIntro = function () {
        intro.classList.add('intro--open');
        document.documentElement.classList.add('intro-done');
      };
      var finishIntro = function () {
        if (introDone) return;
        introDone = true;
        clearTimeout(openTimer);
        clearTimeout(endTimer);
        document.documentElement.classList.add('intro-done');
        document.body.classList.remove('intro-lock');
        intro.remove();
        window.removeEventListener('pointerdown', finishIntro, true);
        window.removeEventListener('keydown', finishIntro, true);
      };
      document.documentElement.classList.add('has-intro');
      document.body.classList.add('intro-lock');
      var openTimer = setTimeout(openIntro, 1650);
      var endTimer = setTimeout(finishIntro, 2500);
      window.addEventListener('pointerdown', finishIntro, true);
      window.addEventListener('keydown', finishIntro, true);
    }
  }

  /* ---------- copyright dinamico ---------- */

  var nowYear = new Date().getFullYear();
  document.querySelectorAll('[data-current-year]').forEach(function (el) {
    el.textContent = String(nowYear);
  });

  /* ---------- nav mobile ---------- */

  var nav = document.querySelector('.nav');
  var toggle = document.querySelector('.nav-toggle');
  if (nav && toggle) {
    toggle.addEventListener('click', function () {
      var open = nav.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', String(open));
    });
    nav.querySelectorAll('.nav-menu a').forEach(function (link) {
      link.addEventListener('click', function () {
        nav.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  /* ---------- reveal on scroll ---------- */

  var prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (!prefersReduced && 'IntersectionObserver' in window) {
    var targets = document.querySelectorAll('.section-head, .split-main, .split-side, .ledger, .dish, .gallery-attesa, .hours, .where');
    targets.forEach(function (t) { t.classList.add('reveal'); });
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    targets.forEach(function (t) { io.observe(t); });
  }
})();
