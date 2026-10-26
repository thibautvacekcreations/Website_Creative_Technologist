/* =========================================================================
   i18n.js — bascule EN / FR (à charger AVANT script.js sur chaque page)

   Principe : le HTML reste en anglais. Quand la langue est « fr », chaque
   texte trouvé dans le dictionnaire FR ci-dessous est remplacé (texte,
   alt, aria-label, title…). Un texte absent du dictionnaire reste en anglais.

   Pour traduire une nouvelle phrase : ajoute  "English text": "Texte français",
   (la clé = le texte anglais exact, espaces multiples ignorés).
   Astuce : ouvre une page avec  ?i18n-debug  pour voir dans la console
   les textes qui n'ont pas encore de traduction.

   Les pages projets (project.html) sont traduites via le champ  fr:{…}
   de projects-data.js.

   API : window.TV = { lang, set('fr'|'en'), t('English text') }
   Événement : window 'tv:lang' à chaque changement de langue.
   ========================================================================= */
(() => {
  const KEY = 'tv-lang';

  const FR = {
    /* ---------- Navigation / footer (toutes les pages) ---------- */
    'HOME': 'ACCUEIL',
    'PROJECTS': 'PROJETS',
    'MUSIC': 'MUSIQUE',
    'ABOUT': 'À PROPOS',
    'CONTACT': 'CONTACT',
    'Creative Technologist': 'Technologue créatif',
    'Menu': 'Menu',
    'Language': 'Langue',

    /* ---------- Titres d'onglet / meta ---------- */
    'Home — Thibaut Vacek': 'Accueil — Thibaut Vacek',
    'Projects — Thibaut Vacek': 'Projets — Thibaut Vacek',
    'Music — Thibaut Vacek': 'Musique — Thibaut Vacek',
    'About — Thibaut Vacek': 'À propos — Thibaut Vacek',
    'Project — Thibaut Vacek': 'Projet — Thibaut Vacek',
    'Thibaut Vacek — creative technologist, musician and scientist.': 'Thibaut Vacek — technologue créatif, musicien et scientifique.',

    /* ---------- Bandeaux défilants ---------- */
    'SIGNAL PROCESSING': 'TRAITEMENT DU SIGNAL',
    'RECORD & MIX': 'ENREGISTREMENT & MIX',
    'LIVE SHOWS': 'CONCERTS',
    'PROJECT MANAGEMENT': 'GESTION DE PROJET',

    /* ---------- HOME ---------- */
    'View projects': 'Voir les projets',
    'FROM IDEAS TO IMPACT,': 'DES IDÉES À L’IMPACT,',
    'THROUGH ART & SCIENCE': 'PAR L’ART & LA SCIENCE',
    'Creative Technologist — I bring my scientific knowledge and engineering background together with my creative practice to develop technological solutions that serve the project and turn ideas into meaningful experiences.':
      'Technologue créatif — Je réunis mes connaissances scientifiques et ma formation d’ingénieur avec ma pratique créative pour développer des solutions technologiques au service du projet et transformer des idées en expériences qui comptent.',
    '10+ years of making': 'Plus de 10 ans de création',
    'International Experience': 'Expérience internationale',
    '100% self-directed creation': '100 % de création autodirigée',
    'SELECTED WORK': 'PROJETS SÉLECTIONNÉS',
    'Projects': 'Des projets',
    'that speak for themselves.': 'qui parlent d’eux-mêmes.',
    'EXPERTISE': 'EXPERTISE',
    'Ways': 'Comment',
    'I can help.': 'je peux aider.',
    'Signal Processing': 'Traitement du signal',
    'Filters, spectral analysis, and real-time processing for sound and research.': 'Filtres, analyse spectrale et traitement en temps réel pour le son et la recherche.',
    'Project Management & Strategy': 'Gestion de projet & stratégie',
    'Scoping, planning and delivering complex projects from concept to operations.': 'Cadrage, planification et réalisation de projets complexes, du concept à l’exploitation.',
    'Sound Production': 'Production sonore',
    'Recording, mixing, and artistic direction for live performances and studio releases.': 'Enregistrement, mixage et direction artistique pour des performances live et des sorties studio.',
    'Creative Technology': 'Technologie créative',
    'Combining deep knowledge of physics and digital audio with a high-level understanding of project development to design and build innovative technological experiences.':
      'Allier une connaissance approfondie de la physique et de l’audio numérique à une vision globale du développement de projet pour concevoir et construire des expériences technologiques innovantes.',
    'Let’s make': 'Créons',
    'something people': 'quelque chose dont',
    'remember.': 'on se souviendra.',

    /* ---------- PROJECTS ---------- */
    'A selection of work from the last few years. Installations, live shows, scientific projects and sound pieces.':
      'Une sélection de travaux de ces dernières années. Installations, concerts, projets scientifiques et pièces sonores.',
    'LIVE SESSION': 'SESSION LIVE',
    'COLLABORATIONS': 'COLLABORATIONS',
    'AUDIO SOURCE SEPARATION': 'SÉPARATION DE SOURCES AUDIO',
    'EM IMPULSE': 'IMPULSION EM',
    'VARIABLE BAND-PASS': 'PASSE-BANDE VARIABLE',
    'EARLY WORKS': 'PREMIERS TRAVAUX',
    'FM PLUGIN CODING': 'CODAGE DE PLUGIN FM',

    /* ---------- MUSIC ---------- */
    'An atmospheric blend of electronic music, indie influences and organic instrumentation, combining intimate vocals, guitar and layered production with rhythmic, immersive textures.':
      'Un mélange atmosphérique de musique électronique, d’influences indie et d’instrumentation organique, mêlant voix intimistes, guitare et production en couches à des textures rythmiques et immersives.',
    'Position in the track': 'Position dans le morceau',
    'Play / Pause': 'Lecture / Pause',
    'Listen everywhere': 'Écouter partout',
    'LISTEN': 'ÉCOUTER',
    'EVERYWHERE': 'PARTOUT',
    'Shows': 'Concerts',
    'Upcoming': 'À venir',
    'Past': 'Passés',
    'Other works': 'Autres travaux',
    '27 Nov 2026': '27 nov. 2026',
    '6 March 2026': '6 mars 2026',

    /* ---------- ABOUT ---------- */
    'Hi, I’m Thibaut,': 'Bonjour, je suis Thibaut,',
    'A musician, creative technologist and scientist exploring the intersection of':
      'Musicien, technologue créatif et scientifique, j’explore l’intersection du',
    'sound, technology, and live performance': 'son, de la technologie et de la performance live',
    'DOWNLOAD RESUME': 'TÉLÉCHARGER LE CV',
    'Based in': 'Basé à',
    'Working': 'Disponible',
    'Worldwide, remote or on site': 'Dans le monde entier, à distance ou sur site',
    'BIO': 'BIO',
    'Engineering and Sound, in whatever the project needs.': 'Ingénierie et son, selon ce dont le projet a besoin.',
    'I’m a creative technologist with a background in fundamental physics and project management in complex transport projects. My work sits at the intersection of science, technology, and creative practice, combining analytical thinking with a hands-on approach to sound, live performance, and emerging technologies.':
      'Je suis technologue créatif, avec une formation en physique fondamentale et en gestion de projet dans des projets de transport complexes. Mon travail se situe à l’intersection de la science, de la technologie et de la pratique créative, en alliant réflexion analytique et approche concrète du son, de la performance live et des technologies émergentes.',
    'My experience spans scientific research, large-scale infrastructure, and multidisciplinary project delivery. I’m interested in turning complex ideas into tangible experiences — from systems and tools to music and interactive projects.':
      'Mon expérience couvre la recherche scientifique, les infrastructures de grande envergure et la conduite de projets pluridisciplinaires. J’aime transformer des idées complexes en expériences tangibles — des systèmes et outils à la musique et aux projets interactifs.',
    'EXPERIENCE': 'EXPÉRIENCE',
    'STUDIES': 'FORMATION',

    /* Expérience */
    'Operations Engineer': 'Ingénieur exploitation',
    'Sydney, Australia': 'Sydney, Australie',
    'March 2025 - today': 'Mars 2025 - aujourd’hui',
    'Project Management': 'Gestion de projet',
    'Project Readiness': 'Préparation à la mise en service',
    'Stakeholder Management & Operational Planning': 'Gestion des parties prenantes & planification opérationnelle',
    'Tools: PowerQuery, PowerAutomate, Power BI, Python': 'Outils : PowerQuery, PowerAutomate, Power BI, Python',

    'Plasma Physicist': 'Physicien des plasmas',
    'March 2024 - October 2024': 'Mars 2024 - octobre 2024',
    'Plasma Physics': 'Physique des plasmas',
    'Advanced Imaging & Diagnostics': 'Imagerie avancée & diagnostics',
    'Experimental Research & Development': 'Recherche & développement expérimental',
    'Tools: Python, High-Voltage Generator, Nanosecond Camera': 'Outils : Python, générateur haute tension, caméra nanoseconde',

    'Physics Engineer': 'Ingénieur physicien',
    'April 2023 - July 2023': 'Avril 2023 - juillet 2023',
    'Laser–Matter Interaction': 'Interaction laser-matière',
    'Electromagnetic Modelling & Simulation': 'Modélisation & simulation électromagnétiques',
    'Computational Plasma Physics (PIC Simulations)': 'Physique des plasmas numérique (simulations PIC)',
    'Tools: Matlab, Radia, Python': 'Outils : Matlab, Radia, Python',

    'Data Engineer': 'Ingénieur data',
    'Audio Data Analysis and Signal Processing, Laboratoire Traitement et Apprentissage':
      'Analyse de données audio et traitement du signal, Laboratoire Traitement et Apprentissage',
    'April 2022 - Sept 2022': 'Avril 2022 - sept. 2022',
    'Machine Learning & Audio AI': 'Machine learning & IA audio',
    'Real-Time Audio Processing': 'Traitement audio temps réel',
    'Audio Source Separation': 'Séparation de sources audio',
    'Tools: Tensorflow, Docker, Python': 'Outils : Tensorflow, Docker, Python',

    'Social Affairs Assistant': 'Assistant affaires sociales',
    'Roma, Italy': 'Rome, Italie',
    'June 2021 - August 2021': 'Juin 2021 - août 2021',
    'Policy Research & Government Relations': 'Recherche en politiques publiques & relations institutionnelles',
    'Public Health Intelligence & Monitoring': 'Veille & suivi en santé publique',
    'Strategic Reporting & Stakeholder Briefings': 'Rapports stratégiques & notes de synthèse',

    /* Formation */
    'General Engineering Master Degree': 'Master d’ingénierie générale',
    'Strong Scientific & Mathematical Foundations': 'Solides bases scientifiques & mathématiques',
    'Signal Processing & Systems Analysis': 'Traitement du signal & analyse de systèmes',
    'Computer Science & Computational Methods': 'Informatique & méthodes numériques',
    'Acoustics & Sound Engineering (M1)': 'Acoustique & ingénierie sonore (M1)',
    'Audio Engineering & Studio Recording': 'Ingénierie audio & enregistrement en studio',
    'Acoustics & Psychoacoustics': 'Acoustique & psychoacoustique',
    'Digital Audio Systems & Spatial Sound': 'Systèmes audio numériques & son spatialisé',
    'Fusion and Plasma Physics': 'Fusion et physique des plasmas',
    'Institut Polytechnique de Paris | Master Degree': 'Institut Polytechnique de Paris | Master',
    'Fusion & Plasma Physics': 'Fusion & physique des plasmas',
    'Magnetohydrodynamics & Astrophysical Plasmas': 'Magnétohydrodynamique & plasmas astrophysiques',
    'Cold Plasma Physics & Plasma Jets': 'Plasmas froids & jets de plasma',
    'Advanced Mathematics & Physics': 'Mathématiques & physique avancées',
    'Electromagnetism & Thermodynamics': 'Électromagnétisme & thermodynamique',
    'Organic Chemistry & Chemical Equilibria': 'Chimie organique & équilibres chimiques',

    /* Contact */
    'Have an idea?': 'Une idée ?',
    'Tell me about it.': 'Parlez-m’en.',
    'NAME': 'NOM',
    'EMAIL': 'EMAIL',
    'PROJECT': 'PROJET',
    'What are we making, where, and when?': 'Que fait-on, où et quand ?',
    'SEND': 'ENVOYER',
    'SENT ✓': 'ENVOYÉ ✓'
  };

  /* Dictionnaire inverse : retrouve l'anglais d'un nœud cloné (bandeaux) */
  const REV = {};
  Object.keys(FR).forEach(k => { if (!(FR[k] in REV)) REV[FR[k]] = k; });

  const norm = s => s.replace(/\s+/g, ' ').trim();
  const SKIP = 'script,style,noscript,.lang,.nav-lang,#project-root,[data-no-i18n]';
  const ATTRS = ['alt', 'aria-label', 'title', 'placeholder'];
  const debug = /[?&]i18n-debug\b/.test(location.search);

  let lang = 'en';
  try {
    const q = new URLSearchParams(location.search).get('lang');
    const saved = localStorage.getItem(KEY);
    lang = q || saved || 'en';   /* anglais par défaut, quelle que soit la langue du navigateur */
    if (q) localStorage.setItem(KEY, q === 'fr' ? 'fr' : 'en');
  } catch (e) {}
  if (lang !== 'fr') lang = 'en';

  const orig = n => {
    if (n.__en === undefined) {
      const m = /^(\s*)([\s\S]*?)(\s*)$/.exec(n.nodeValue), k = norm(m[2]);
      /* nœud cloné déjà en français (bandeaux) : on retrouve l'anglais */
      n.__en = REV[k] !== undefined && FR[k] === undefined ? m[1] + REV[k] + m[3] : n.nodeValue;
    }
    return n.__en;
  };
  const tr = (text, fr) => {
    const m = /^(\s*)([\s\S]*?)(\s*)$/.exec(text);
    const k = norm(m[2]);
    return fr && FR[k] !== undefined ? m[1] + FR[k] + m[3] : text;
  };

  const missing = new Set();
  function applyText(fr) {
    const w = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
      acceptNode(n) {
        if (!/\S/.test(n.nodeValue)) return NodeFilter.FILTER_REJECT;
        const p = n.parentElement;
        return p && !p.closest(SKIP) ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT;
      }
    });
    let n;
    while ((n = w.nextNode())) {
      const en = orig(n), out = tr(en, fr);
      if (n.nodeValue !== out) n.nodeValue = out;
      if (debug && fr && out === en && /[A-Za-z]{3,}/.test(en)) missing.add(norm(en));
    }
  }
  function applyAttrs(fr) {
    document.querySelectorAll('[alt],[aria-label],[title],[placeholder]').forEach(el => {
      if (el.closest(SKIP)) return;
      el.__enAttr = el.__enAttr || {};
      ATTRS.forEach(a => {
        if (!el.hasAttribute(a)) return;
        if (el.__enAttr[a] === undefined) el.__enAttr[a] = el.getAttribute(a);
        el.setAttribute(a, tr(el.__enAttr[a], fr));
      });
    });
  }
  function applyHead(fr) {
    if (document.__enTitle === undefined) document.__enTitle = document.title;
    document.title = tr(document.__enTitle, fr);
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      if (meta.__en === undefined) meta.__en = meta.getAttribute('content');
      meta.setAttribute('content', tr(meta.__en, fr));
    }
  }
  function markSwitchers() {
    document.querySelectorAll('.lang a, .nav-lang a').forEach(a => {
      const l = norm(a.textContent).toLowerCase();
      if (l !== 'en' && l !== 'fr') return;
      const on = l === lang;
      a.classList.toggle('on', on);
      a.setAttribute('lang', l);
      a.setAttribute('hreflang', l);
      a.setAttribute('aria-current', on ? 'true' : 'false');
    });
  }

  function apply() {
    const fr = lang === 'fr';
    document.documentElement.lang = lang;
    applyHead(fr);
    applyText(fr);
    applyAttrs(fr);
    markSwitchers();
    if (debug && fr && missing.size) console.info('[i18n] textes sans traduction :', [...missing]);
  }

  function set(l) {
    l = l === 'fr' ? 'fr' : 'en';
    if (l === lang) return;
    lang = l;
    try { localStorage.setItem(KEY, l); } catch (e) {}
    apply();
    window.TV.lang = l;
    window.dispatchEvent(new CustomEvent('tv:lang', { detail: l }));
  }

  /* Sélecteur de langue dans le menu mobile (injecté, aucun HTML à ajouter) */
  function injectNavSwitcher() {
    const nav = document.querySelector('.site-header .nav');
    if (!nav || nav.querySelector('.nav-lang')) return;
    const d = document.createElement('div');
    d.className = 'nav-lang';
    d.setAttribute('role', 'group');
    d.setAttribute('aria-label', 'Language');
    d.innerHTML = '<a href="#">EN</a><span aria-hidden="true">|</span><a href="#">FR</a>';
    nav.appendChild(d);
  }

  function bindSwitchers() {
    document.addEventListener('click', e => {
      const a = e.target.closest('.lang a, .nav-lang a');
      if (!a) return;
      const l = norm(a.textContent).toLowerCase();
      if (l !== 'en' && l !== 'fr') return;
      e.preventDefault();
      set(l);
    });
  }

  window.TV = { lang, set, t: s => tr(s, lang === 'fr') };

  injectNavSwitcher();
  bindSwitchers();
  apply();
})();
