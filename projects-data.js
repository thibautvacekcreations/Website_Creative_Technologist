/* =====================================================
   DONNÉES DES PROJETS — un seul endroit à éditer.
   Pour ajouter un projet : copie un bloc, change le slug,
   et ajoute l'image pictures/<slug>.jpg (+ <slug>-2.jpg, <slug>-3.jpg
   facultatives). Le lien est project.html#<slug>.
   Les textes ci-dessous sont des PLACEHOLDERS à remplacer.
   ===================================================== */
window.PROJECTS = [
  { slug:"live-session", title:"Live Session", category:"Live shows",
    overview:"A live set recorded on the cliffs, with vocals, guitar and a modular rig performing in front of the sea. A short film where the landscape becomes part of the instrument.",
    info:[["Role","Artist, producer"],["Date","2026"],["Format","Live video, audio"],["Tools","Ableton Live, modular synth"]] },
  { slug:"capter-l-eclosion", title:"Capter l’éclosion", category:"Record & mix",
    overview:"An EP built around the moment something starts to open. Five tracks mixing intimate vocals, guitar and layered electronic textures, written, recorded and mixed end to end.",
    info:[["Role","Writing, recording, mixing"],["Date","2026"],["Format","EP, 5 tracks"],["Tools","Ableton Live, guitar, microphones"]] },
  { slug:"collaborations", title:"Collaborations", category:"Record & mix",
    overview:"Work done with other artists: production, mixing, sound design and live support. Each collaboration starts from the other person's world and finds the technical way to serve it.",
    info:[["Role","Producer, mixer"],["Date","2023 - today"],["Format","Singles, sessions"],["Tools","Ableton Live, Pro Tools"]] },
  { slug:"plasma", title:"Plasma", category:"Scientific project",
    overview:"Imaging of cold plasma jets with a nanosecond camera, to understand how discharges propagate. The image shown is a time-resolved diagnostic of the plasma front.",
    info:[["Role","Plasma physicist"],["Date","March 2024 - October 2024"],["Lab","Laboratoire de Physique des Plasmas, Paris"],["Tools","Python, high-voltage generator, nanosecond camera"]] },
  { slug:"audio-source-separation", title:"Audio Source Separation", category:"Signal processing",
    overview:"A neural network that separates the sources of a music mix in real time. The project covers the architecture, the training pipeline and the constraints of low-latency audio.",
    info:[["Role","Data engineer"],["Date","April 2022 - Sept 2022"],["Lab","Laboratoire Traitement et Apprentissage, Palaiseau"],["Tools","Tensorflow, Docker, Python"]] },
  { slug:"des-ordres", title:"Des ordres", category:"Sound piece",
    overview:"A sound piece working with spectral structures and ordered patterns, between noise and rhythm. The visual is a spectrogram of the piece.",
    info:[["Role","Composition, sound design"],["Date","2025"],["Format","Sound piece"],["Tools","Python, spectral processing"]] },
  { slug:"em-impulse", title:"EM Impulse", category:"Scientific project",
    overview:"A study of electromagnetic impulses and how they can be measured and visualised. The colour map shows the field intensity at the moment of the pulse.",
    info:[["Role","Physics engineer"],["Date","April 2023 - July 2023"],["Lab","Centre des Lasers Intenses et Applications, Talence"],["Tools","Matlab, Mathematica, Python"]] },
  { slug:"variable-band-pass", title:"Variable Band-Pass", category:"Signal processing",
    overview:"A filter whose pass band moves continuously, designed to shape sound in real time. The project explores how a simple filter becomes expressive when it is made to move.",
    info:[["Role","Design, development"],["Date","2025"],["Format","Audio tool"],["Tools","Python, C++, signal processing"]] },
  { slug:"early-works", title:"Early Works", category:"Archive",
    overview:"The first pieces, before the current direction took shape. A collection of sketches, drawings and early recordings that still feed what comes next.",
    info:[["Role","Artist"],["Date","Before 2022"],["Format","Mixed media"],["Tools","Various"]] },
  { slug:"fm-plugin-coding", title:"FM Plugin Coding", category:"Code & sound",
    overview:"A frequency modulation synthesizer coded from scratch as an audio plugin. The goal: understand FM from the maths up and build an instrument that is pleasant to play.",
    info:[["Role","Design, development"],["Date","2026"],["Format","Audio plugin"],["Tools","C++, JUCE"]] }
];
