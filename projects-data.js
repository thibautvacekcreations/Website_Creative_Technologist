/* =========================================================================
   DONNÉES DES PROJETS — un seul endroit à éditer.

   Chaque projet = un objet avec :
     slug, title, category, overview, info:[[label, valeur], ...]
     accent   (facultatif) couleur d'accent de la page, ex. "#7fb2ff"
     media    (facultatif) liste de BLOCS affichés dans la colonne de droite.
              Sans "media", la page affiche pictures/<slug>.jpg, -2.jpg, -3.jpg.

   Types de blocs disponibles :
     { type:"image",  src:"plasma.jpg", alt:"…", caption:"…", ratio:"4/5" }
     { type:"pair",   images:[{src:"a.jpg"},{src:"b.jpg"}], caption:"…" }   2 images côte à côte
     { type:"grid",   images:[{src:"a.jpg"},{src:"b.jpg"},{src:"c.jpg"}] }   3 images ou plus
     { type:"video",  src:"clip.mp4", poster:"clip.jpg", ratio:"16/9" }     boucle muette (ajoute controls:true pour le son)
     { type:"embed",  src:"https://www.youtube.com/embed/ID", ratio:"16/9" }  YouTube, Vimeo, Spotify, SoundCloud…
     { type:"animation", name:"plasma", ratio:"1/1" }                        animation canvas (voir project-animations.js)
     { type:"text",   text:"Un paragraphe entre deux visuels." }

   Les "src" sans http sont cherchés dans le dossier pictures/.
   Les textes ci-dessous sont des PLACEHOLDERS à remplacer.
   ========================================================================= */
window.PROJECTS = [


  { slug:"live-session", title:"Live Session", category:"Live shows",
  overview:["A seven-minute live session built around [Sous le Soleil](music.html), produced by [Aled](https://www.instagram.com/aled_production/) and filmed at sunset near the cliffs of Étretat, France.",
  "The performance brings together live vocals, guitar, drum pads and real-time looping, with the arrangement being built and reshaped throughout the session. Loops are recorded, layered and manipulated live, turning the performance into a continuous dialogue between voice, rhythm and guitar.",
  "Shot as the sun sets over the sea, the film deliberately blurs the line between music performance and landscape. The changing light, open horizon and surrounding cliffs become part of the visual and emotional composition — creating a live piece where the environment is not simply a backdrop, but an integral part of the performance."
  ],
    info:[["Role","Artist, producer"],["Date","2026"],["Format","Live video, audio"],["Tools","Ableton Live, modular synth"]],
  hero:{ video:"PROJECTS/extrait_website_livess_comp.mp4", poster:"PROJECTS/Live_plage_mic.png" },
  media:[
    { type:"embed", src:"https://www.youtube.com/embed/JqRjSROH5xQ", ratio:"16/9"},
    { type:"image",  src:"PROJECTS/bateau_livesess.png", ratio:"9/3" }
  ] },

  
  
  {
    slug: "capter-l-eclosion",
    title: "Capter l’Éclosion",
    category: "Record & mix",
    overview: [
  "This 5-track EP was released on March 4, 2026, marking the first release under the eponymous name Signalbo. This 13-minute project was built around the concept of éclosion — the process of coming into one’s own, reaching one’s full potential, and breaking through the barriers of what once seemed out of reach.",
  "Capter l’Éclosion can be understood in several ways. Above all, it refers to understanding the journey and the effort required to make this emergence a reality. On a more tangible level, it also evokes the act of capturing a moment in time, whether through photography, as reflected in the EP's cover art, or more broadly through any form of physical measurement.",
  "Although I handled most of the work on this EP myself, I also wanted to bring together the talents of people I had met along the way to help create a more cohesive universe around the project. I composed, recorded, and mixed all five tracks. Mastering was done by Robin Vandamme ([@robin17v](https://www.instagram.com/robin17v/)), photography by Teo Leguay ([@teo.leg](https://www.instagram.com/teo.leg/)), and the visual identity was developed by Lena ([@nena_studio_](https://www.instagram.com/nena_studio_/))."
      ],
    info: [
      ["Role", "Writing, recording, mixing"],
      ["Date", "March 2026"],
      ["Format", "EP, 5 tracks, 13 min"],
      ["Tools", "Ableton Live, guitar, microphones"]
    ],
    media: [
      { type: "image", src: "PROJECTS/capter_leclosion_cover.jpg", ratio: "4/5" },
      {
        type: "pair",
        images: [
          { src: "capter-l-eclosion-2.jpg" },
          { src: "capter-l-eclosion-3.jpg" }
        ]
      },
      { type: "embed", src: "https://open.spotify.com/intl-fr/embed/album/3vvB6nWjJU7rDXYnzGL4Ar?si=wL1dRHN2RWS2vccHLHoKgQ", height: 352 }
    ]
  },

    { slug:"collaborations", title:"Collaborations", category:"Record & mix",
      overview:"Work done with other artists: production, mixing, sound design and live support. Each collaboration starts from the other person's world and finds the technical way to serve it.",
      info:[["Role","Producer, mixer"],["Date","2023 - today"],["Format","Singles, sessions"],["Tools","Ableton Live, Pro Tools"]],
      media:[
    { type: "section", title:"Duo-Created EP", text:"Neon Ultra is a 4-track EP created under the group name Neo Amber, in collaboration with artist Lyes Kaci. This project explores a mysterious universe, with visuals featuring green and blue neon lights symbolizing the duality between the two members of the duo. The compositions strike a balance between the creative ideas of both artists, reflecting a harmonious collaboration. The songs delve into themes of self-discovery and contemplation, focusing on the process of creating art and music.", src:"PROJECTS/Loop_neoamber.mp4", ratio:"1/1" },
    { type: "section", title:"Producer & Arranger", text:["In 2023/2024, I collaborated with an emerging pop singer named Lisa Stervinou, which gave me valuable insight into a producer's role. My responsibilities were diverse. During live performances, I played guitar and managed the backtracks. In the studio and during rehearsals, I contributed to the songwriting and artistic direction of her project. This included advising on lyrics, suggesting chord progressions and melodies, offering production ideas, and selecting the right sounds. I also re-arranged tracks for live performances and provided input on the visual and sonic direction of the project.",
      "This collaboration culminated in the release of three studio tracks, now available on streaming platforms, and four live concerts in Paris. I thoroughly enjoy the role of artistic direction, finding that it comes naturally to me. Deciding what fits within a broader artistic vision feels intuitive, and I’m confident in making these creative choices while still infusing my own style and ideas into the process."],  
      src:"PROJECTS/lisa_tibo.jpeg", ratio:"4/3" },
  ]},

  { slug:"plasma", title:"Plasma", category:"Scientific project", accent:"#ff9a4d",
    overview:[
  "This project focused on studying the propagation mechanisms of guided streamers in atmospheric-pressure cold plasma jets. The project was motivated by the development of plasma-based medical applications, particularly endoscopic treatments for cancer.",
  "The study investigated a transferred plasma catheter facing a grounded metallic target, with particular emphasis on the influence of the electrode-target distance (gap) on streamer propagation. I worked with three complementary diagnostics: electrical current measurements, a Pockels probe to measure the local electric field, and fast ICCD imaging to resolve streamer propagation on the nanosecond timescale. A significant part of the work involved developing signal-processing and data-analysis methods to distinguish the different electrical contributions generated by the plasma and the high-voltage system. The measurements revealed two main current components: a pre-streamer current associated with capacitive and electromagnetic effects, and a streamer current corresponding to the ionization wave reaching the target.",
  "Overall, the project provided hands-on experience in experimental plasma physics, scientific data analysis and the development of diagnostic methods, while connecting fundamental plasma physics with emerging biomedical applications.",
  "Published Article: [Transferred plasma catheter for endotherapeutic applications: a parametric study of guided streamers dynamics](https://arxiv.org/abs/2504.14637)"
      ],
    info:[["Role","Plasma physicist"],["Date","March 2024 - October 2024"],["Lab","Laboratoire de Physique des Plasmas, Paris"],["Tools","Python, high-voltage generator, nanosecond camera"]],
    hero:{ video:"PROJECTS/video_plasmajet.mp4", ratio:"5/1", position:"top" },
    media:[
      { type:"image", src:"PROJECTS/plasma_pic.jpeg"}
    ] },

  { slug:"audio-source-separation", title:"Audio Source Separation", category:"Signal processing", accent:"#9ab3ff",
    overview:[
  "This project focused on developing a lightweight deep learning model for real-time audio source separation. We explored adapting the Tiny Recurrent U-Net (TrU-Net), originally designed for speech denoising and dereverberation, to separate musical sources such as vocals, guitar and drums. With approximately 380,000 parameters, the model offers a promising alternative to larger neural networks that are computationally expensive. Its architecture combines convolutional and recurrent layers, alongside complex-valued masking to improve audio reconstruction.",
  "The main work involved implementing the model using Python, TensorFlow/Keras and remote computing infrastructure. This included developing data-processing pipelines, managing audio datasets and implementing different model configurations. Initial training experiments were conducted on a limited dataset. Although the loss curves showed encouraging progress, the results did not demonstrate sufficiently clear improvements in audio quality. Time constraints and implementation challenges prevented comprehensive testing and validation. Nevertheless, the internship produced a structured and relatively stable codebase for future development. Further work would involve longer training sessions, objective and perceptual performance evaluation, comparison with the original research, and eventual adaptation to musical source separation.",
  "Overall, the project provided valuable experience in deep learning, audio signal processing and scientific software development, while highlighting the importance of rigorous experimentation and computational efficiency.",
    "Core implementation code: [Tiny Recurrent U-Net](https://github.com/TiboVck/TRU-Net.git)"  
],
    
    info:[["Role","Data engineer"],["Date","April 2022 - Sept 2022"],["Lab","Laboratoire Traitement et Apprentissage, Palaiseau"],["Tools","Tensorflow, Docker, Python"]],
    media:[
      { type:"image", src:"PROJECTS/filter_diagtrunet.png", caption:"Network architecture." },
      { type:"animation", name:"spectrogram", ratio:"16/9" }
    ] },

  { slug:"des-ordres", title:"Des Ordres", category:"Sound piece",
    overview:["The EP Des Ordres consists of 8 tracks, including 6 songs, forming a 26-minute body of work. These songs are connected by a central theme of the disorder present in our lives — something we constantly seek to control or at least manage. Through this overarching theme, the EP explores a variety of topics such as the passage of time, nostalgia, the desire to make the most of youth, and the effort to overcome dark periods. The visuals depict a character hired by 'L'Agence des Ordres', tasked with observing and understanding this disorder.",
              "The front and back illustrations of the album incorporate the scientific aspect of this experience. The front cover features a Fourier transform of an image of a messy room, while the back displays a photograph of the cosmic microwave background. The colors of both images have been recoded to a gradient ranging from pale pink to sky blue, creating a visual cohesion that mirrors the thematic exploration of disorder and control within the album.",
                "You can find the code used to generate the cover art here: [Des Ordres Fourier Art Cover](https://github.com/TiboVck/Des-Ordres-Fourier-Art-Cover.git)"
            ],
    info:[["Role","Composition, sound design"],["Date","2025"],["Format","Sound piece"],["Tools","Python, spectral processing"]],
    media:[
      { type:"pair",
        images: [
          { src: "PROJECTS/cover_desordres.png" , ratio: "1/1"},
          { src: "PROJECTS/Backcoverdesordre.png" , ratio: "1/1" }
        ] },
      { type:"embed", src:"https://open.spotify.com/intl-fr/embed/track/4jksxP3QEtcdT7mcf6Yfij?si=7c0abdd2df8447a5", height:152 },
      { type:"triple", columns:"2fr 2fr 1fr", height:"180px",
  images:[{src:"PROJECTS/SLS.jpg"},{src:"PROJECTS/Screens.png"},{src:"PROJECTS/FDC.png"}] }  

    ] },

  { slug:"em-impulse", title:"EM Impulse", category:"Scientific project",
    overview:[
  "This project focused on studying electromagnetic pulses (EMPs) generated by the interaction between ultra-short, high-intensity laser pulses and solid targets. The research aimed to understand how the geometry of different targets influences the propagation of electromagnetic energy, potentially generating currents of around 1 kA and magnetic fields of 1–10 T. These phenomena could have applications in charged-particle acceleration and the generation of GHz and THz radiation.",
  "The experimental study combined theoretical modelling, numerical simulations and experimental diagnostics to investigate EMP generation. My work primarily involved analysing polarimetry images and experimental calorimeter data. I developed a 3D model of a sinusoidal target loop, adapted the image-processing method to its geometry and analysed the resulting measurements. The polarimetry results indicated magnetic fields of approximately 2 T for a loop-shaped target and 1–2 T for a sinusoidal target, corresponding to currents of around 1 kA. Although these values were below theoretical predictions, they remained within the expected order of magnitude. The THz emission analysis also revealed a resonance at 0.3 THz, which remained unexplained but fell within the expected frequency range. Beyond the technical work, the internship provided insight into the organisation of experimental campaigns and the broader field of laser-plasma physics. It allowed me to apply knowledge from plasma physics, statistical mechanics and field theory to a real research project, while discovering the collaborative environment of scientific research and its connections with other European laboratories.",
  "Overall, this project strengthened my experience in experimental data analysis, physical modelling and scientific investigation, while providing a valuable introduction to research in laser-plasma interactions and potential future studies in plasma physics and fusion."
      ],
    info:[["Role","Physics engineer"],["Date","April 2023 - July 2023"],["Lab","Centre des Lasers Intenses et Applications, Talence"],["Tools","Matlab, Radia, Python"]],
    hero:{ animation:"plasma", ratio:"5/1", position:"top" },

    media:[
      { type:"image", src:"PROJECTS/EM_impulse.jpeg", ratio:"16/9" },
      { type:"videos",
  videos:[
    { src:"PROJECTS/Shot_CELIA.mp4", ratio:"1/1" },
    { src:"PROJECTS/Shot_CELIA_2.mp4", ratio:"1/1" },
    { src:"PROJECTS/Shot_celia_rectangle.mp4", ratio:"16/9" }
  ] }
    ] },

  { slug:"variable-band-pass", title:"Variable Band-Pass", category:"Signal processing",
    overview:["This engineering project focused on the design and construction of an analogue wah-wah effects pedal for electric guitar. The wah-wah effect is produced by a resonant filter whose frequency response changes with the position of a variable resistor controlled by a pedal. Our work involved designing the analogue circuit, divided into several functional blocks, including differential and inverting amplifiers for signal conditioning and isolation, and the main filter responsible for modifying the audio spectrum. We developed the circuit schematic and PCB layout using Eagle, then fabricated the board, soldered the components and tested the circuit using an oscilloscope and signal measurements. During testing, we identified and resolved several issues related to operational amplifier power supplies, adjusting the circuit to obtain a cleaner output signal.",
"Theoretical analysis included deriving the filter's transfer function and plotting Bode diagrams for different potentiometer resistance values. We then compared these predictions with experimental measurements of the frequency response and resonance frequency. The results showed good agreement with the theoretical behaviour, confirming that the resonance frequency varied as expected with the variable resistance.",
"Finally, we tested the completed circuit with an electric guitar and amplifier. Despite some residual noise and distortion, the pedal successfully reproduced the intended wah-wah effect."
],
    info:[["Role","Design, development"],["Date","2025"],["Format","Audio tool"],["Tools","Python, C++, signal processing"]],
    media:[
  { type:"bode", ratio:"16/10",
    caption:"Move your cursor across the diagram to turn the pedal: the resonance sweeps with the potentiometer.",
    captionTouch:"Drag your finger across the diagram to turn the pedal: the resonance sweeps with the potentiometer.",
    options:{ bg:"#170d0a" , } },
  { type:"pair",  images:[{src:"PROJECTS/schema_wahwah.jpg"},{src:"PROJECTS/pcbfinal.png"}], ratio:"5/3"}
]},

  { slug:"early-works", title:"Early Works", category:"Archive",
    overview:[
      "The first experiments, before a clear creative direction had taken shape. I started composing music and exploring recording and mixing at the age of 13, while simultaneously experimenting with video as a way to give these ideas a visual dimension. Under my first artist name, The Triper (see logo on the right), I began developing projects with little formal knowledge of either discipline, learning by making things — trying techniques, building small projects, breaking them, and starting again.",
      "These early projects were less about producing polished work than about discovering what could be done by combining music, recording, editing and image. They became a playground for experimentation, gradually shaping the way I approach creative projects today: learning through practice, connecting different mediums, and using technical constraints as a reason to invent new ideas.",
      "On my [YouTube channel](https://www.youtube.com/@thetriper), I created a series of video projects centred around covers of songs I loved. Rather than simply reproducing the original tracks, I developed a visual concept for each cover, using recording, vocal layering, editing and practical effects to reinterpret the music through my own creative language.",
      "EARFQUAKE – Tyler, The Creator: A vocal cover built around layered harmonies, with the video featuring five versions of myself performing the different recorded parts. The pink T-shirt is a visual reference to the IGOR album cover, creating a playful connection between the original work and my own interpretation.",
      "CASINO – Disiz: An experiment in live looping and performance. I recreated the instrumental by recording and triggering loops in real time, then managed and layered them while performing the vocals over the evolving arrangement. The project became an early exploration of the relationship between composition, performance and technology — an approach that would later become central to my work."  
    ],
    info:[["Role","Artist"],["Date","2013-2022"],["Format","Mixed media"],["Tools","Logic Pro, Ableton Live, iMovie"]],
    media:[
      { type:"image", src:"PROJECTS/early_works.jpg" },
      { type:"pair",  images:[{src:"pictures/PROJECTS/tyler_cover.png"},{src:"pictures/PROJECTS/kaci_vacek.jpeg"}], ratio:"5/3" }
    ] },

  { slug:"fm-plugin-coding", title:"FM Plugin Coding", category:"Code & sound",
    overview:["An experimental Max for Live instrument that combines electric guitar with Frequency Modulation (FM) synthesis. In FM synthesis, a carrier oscillator generates the sound while its frequency is continuously modulated by a second signal, creating complex harmonic spectra. Here, the plugin detects the fundamental frequency of the incoming guitar signal, uses it to tune and trigger an oscillator at the detected note, and applies FM using the guitar signal itself as the modulator. The result is a hybrid instrument where the player's guitar performance directly drives the synthesis and shapes its timbre in real time.",
    "The plugin is currently under development. A free beta version is available for download: [Guitar FM Synth - Max for Live](https://github.com/TiboVck/Guitar-FM-Synth-Max-for-Live.git)"
    ],
      info:[["Role","Design, development"],["Date","2026"],["Format","Audio plugin"],["Tools","Max for Live"]],
    media:[
      { type:"image", src:"pictures/PROJECTS/plugin_FM.png", ratio:"16/3" },
    ] }
];


/* =========================================================================
   VERSION FRANÇAISE DES PROJETS
   Chaque entrée est rattachée à son projet sous forme d'un champ  fr:{…}
   (voir plus bas). Tout champ absent reste en anglais.
     title, category, overview, info  : remplacent les valeurs anglaises
     media : tableau parallèle à "media" — on n'y met que ce qui change
             (caption, captionTouch, title, text) ; {} = rien à traduire
   ========================================================================= */
window.PROJECTS_FR = {

  "live-session": {
    title: "Session live",
    category: "Concerts",
    overview: [
      "Une session live de sept minutes construite autour de [Sous le Soleil](music.html), produite par [Aled](https://www.instagram.com/aled_production/) et filmée au coucher du soleil près des falaises d’Étretat, en France.",
      "La performance réunit voix live, guitare, pads de batterie et looping en temps réel : l’arrangement se construit et se transforme tout au long de la session. Les boucles sont enregistrées, superposées et manipulées en direct, et font de la performance un dialogue continu entre la voix, le rythme et la guitare.",
      "Tourné pendant que le soleil se couche sur la mer, le film brouille volontairement la frontière entre performance musicale et paysage. La lumière changeante, l’horizon ouvert et les falaises alentour font partie intégrante de la composition visuelle et émotionnelle : l’environnement n’est pas un simple décor, mais une part essentielle de la performance."
    ],
    info: [["Rôle", "Artiste, producteur"], ["Date", "2026"], ["Format", "Vidéo live, audio"], ["Outils", "Ableton Live, synthétiseur modulaire"]]
  },

  "capter-l-eclosion": {
    category: "Enregistrement & mix",
    overview: [
      "Cet EP de 5 titres est sorti le 4 mars 2026 : c’est la première sortie sous mon nom d’artiste éponyme, Signalbo. Ce projet de 13 minutes s’articule autour du concept d’éclosion — le processus par lequel on s’affirme, on atteint son plein potentiel et on franchit les barrières de ce qui semblait hors de portée.",
      "Capter l’Éclosion peut se comprendre de plusieurs façons. Avant tout, il s’agit de comprendre le parcours et l’effort nécessaires pour que cette émergence devienne réalité. Plus concrètement, cela évoque aussi l’acte de capturer un instant, que ce soit par la photographie, comme le reflète la pochette de l’EP, ou plus largement par toute forme de mesure physique.",
      "Même si j’ai réalisé l’essentiel du travail moi-même, j’ai voulu réunir les talents de personnes rencontrées en chemin pour construire un univers plus cohérent autour du projet. J’ai composé, enregistré et mixé les cinq titres. Le mastering a été réalisé par Robin Vandamme ([@robin17v](https://www.instagram.com/robin17v/)), la photographie par Teo Leguay ([@teo.leg](https://www.instagram.com/teo.leg/)) et l’identité visuelle a été développée par Lena ([@nena_studio_](https://www.instagram.com/nena_studio_/))."
    ],
    info: [["Rôle", "Écriture, enregistrement, mixage"], ["Date", "Mars 2026"], ["Format", "EP, 5 titres, 13 min"], ["Outils", "Ableton Live, guitare, microphones"]]
  },

  "collaborations": {
    category: "Enregistrement & mix",
    overview: "Travaux réalisés avec d’autres artistes : production, mixage, sound design et accompagnement live. Chaque collaboration part de l’univers de l’autre et cherche le moyen technique de le servir.",
    info: [["Rôle", "Producteur, mixeur"], ["Date", "2023 - aujourd’hui"], ["Format", "Singles, sessions"], ["Outils", "Ableton Live, Pro Tools"]],
    media: [
      { title: "EP créé en duo",
        text: "Neon Ultra est un EP de 4 titres créé sous le nom de groupe Neo Amber, en collaboration avec l’artiste Lyes Kaci. Ce projet explore un univers mystérieux, avec des visuels aux néons verts et bleus qui symbolisent la dualité entre les deux membres du duo. Les compositions trouvent un équilibre entre les idées créatives des deux artistes, reflet d’une collaboration harmonieuse. Les chansons abordent la découverte de soi et la contemplation, en s’intéressant au processus de création artistique et musicale." },
      { title: "Producteur & arrangeur",
        text: [
          "En 2023/2024, j’ai collaboré avec une jeune chanteuse pop, Lisa Stervinou, ce qui m’a donné un aperçu précieux du rôle de producteur. Mes responsabilités étaient variées. En concert, je jouais de la guitare et je gérais les backtracks. En studio et en répétition, je participais à l’écriture et à la direction artistique de son projet : conseils sur les paroles, suggestions de grilles d’accords et de mélodies, idées de production, choix des sons. J’ai aussi réarrangé des morceaux pour la scène et donné mon avis sur la direction visuelle et sonore du projet.",
          "Cette collaboration a abouti à la sortie de trois titres studio, désormais disponibles sur les plateformes de streaming, et à quatre concerts à Paris. J’apprécie beaucoup le rôle de direction artistique, qui me vient naturellement. Décider de ce qui s’inscrit dans une vision artistique plus large me paraît intuitif, et je suis à l’aise pour faire ces choix créatifs tout en y apportant mon style et mes idées."
        ] }
    ]
  },

  "plasma": {
    category: "Projet scientifique",
    overview: [
      "Ce projet portait sur l’étude des mécanismes de propagation des streamers guidés dans des jets de plasma froid à pression atmosphérique. Il est motivé par le développement d’applications médicales du plasma, en particulier des traitements endoscopiques du cancer.",
      "L’étude portait sur un cathéter à plasma transféré face à une cible métallique reliée à la terre, en s’intéressant tout particulièrement à l’influence de la distance électrode-cible (gap) sur la propagation des streamers. J’ai travaillé avec trois diagnostics complémentaires : des mesures de courant électrique, une sonde de Pockels pour mesurer le champ électrique local et de l’imagerie ICCD rapide pour résoudre la propagation des streamers à l’échelle de la nanoseconde. Une part importante du travail a consisté à développer des méthodes de traitement du signal et d’analyse de données pour distinguer les différentes contributions électriques générées par le plasma et par le système haute tension. Les mesures ont mis en évidence deux composantes principales du courant : un courant de pré-streamer, associé à des effets capacitifs et électromagnétiques, et un courant de streamer, correspondant à l’onde d’ionisation atteignant la cible.",
      "Dans l’ensemble, ce projet m’a apporté une expérience concrète en physique expérimentale des plasmas, en analyse de données scientifiques et en développement de méthodes de diagnostic, tout en reliant la physique fondamentale des plasmas à des applications biomédicales émergentes.",
      "Article publié : [Transferred plasma catheter for endotherapeutic applications: a parametric study of guided streamers dynamics](https://arxiv.org/abs/2504.14637)"
    ],
    info: [["Rôle", "Physicien des plasmas"], ["Date", "Mars 2024 - octobre 2024"], ["Laboratoire", "Laboratoire de Physique des Plasmas, Paris"], ["Outils", "Python, générateur haute tension, caméra nanoseconde"]]
  },

  "audio-source-separation": {
    title: "Séparation de sources audio",
    category: "Traitement du signal",
    overview: [
      "Ce projet visait à développer un modèle d’apprentissage profond léger pour la séparation de sources audio en temps réel. Nous avons exploré l’adaptation du Tiny Recurrent U-Net (TrU-Net), conçu à l’origine pour le débruitage et la déréverbération de la parole, afin de séparer des sources musicales comme la voix, la guitare et la batterie. Avec environ 380 000 paramètres, ce modèle est une alternative prometteuse aux réseaux de neurones plus volumineux et coûteux en calcul. Son architecture combine des couches convolutives et récurrentes avec un masquage à valeurs complexes, pour améliorer la reconstruction audio.",
      "Le travail principal a consisté à implémenter le modèle en Python avec TensorFlow/Keras, sur une infrastructure de calcul à distance. Cela comprenait le développement de pipelines de traitement des données, la gestion de jeux de données audio et l’implémentation de différentes configurations du modèle. Les premiers entraînements ont été menés sur un jeu de données limité. Même si les courbes de perte montraient des progrès encourageants, les résultats n’ont pas démontré d’amélioration suffisamment nette de la qualité audio. Les contraintes de temps et les difficultés d’implémentation n’ont pas permis de réaliser des tests et une validation complets. Le stage a néanmoins produit une base de code structurée et relativement stable pour la suite. Les prochaines étapes seraient des entraînements plus longs, une évaluation objective et perceptive des performances, une comparaison avec la recherche d’origine et, à terme, une adaptation à la séparation de sources musicales.",
      "Dans l’ensemble, le projet m’a apporté une expérience précieuse en apprentissage profond, en traitement du signal audio et en développement logiciel scientifique, tout en soulignant l’importance d’une expérimentation rigoureuse et de l’efficacité computationnelle.",
      "Code d’implémentation : [Tiny Recurrent U-Net](https://github.com/TiboVck/TRU-Net.git)"
    ],
    info: [["Rôle", "Ingénieur data"], ["Date", "Avril 2022 - sept. 2022"], ["Laboratoire", "Laboratoire Traitement et Apprentissage, Palaiseau"], ["Outils", "Tensorflow, Docker, Python"]],
    media: [ { caption: "Architecture du réseau." } ]
  },

  "des-ordres": {
    category: "Pièce sonore",
    overview: [
      "L’EP Des Ordres compte 8 titres, dont 6 chansons, pour 26 minutes de musique. Ces chansons sont reliées par un thème central : le désordre présent dans nos vies, que nous cherchons sans cesse à contrôler ou, au moins, à gérer. À travers ce fil conducteur, l’EP explore des sujets variés comme le passage du temps, la nostalgie, l’envie de profiter de sa jeunesse et l’effort pour traverser les périodes sombres. Les visuels mettent en scène un personnage engagé par « L’Agence des Ordres », chargé d’observer et de comprendre ce désordre.",
      "Les illustrations de la face avant et de la face arrière de l’album intègrent la dimension scientifique de cette expérience. La couverture présente la transformée de Fourier d’une image de chambre en désordre, tandis que le verso montre une photographie du fond diffus cosmologique. Les couleurs des deux images ont été recodées selon un dégradé allant du rose pâle au bleu ciel, ce qui crée une cohérence visuelle reflétant l’exploration thématique du désordre et du contrôle dans l’album.",
      "Vous pouvez retrouver le code utilisé pour générer les visuels de la pochette ici : [Des Ordres Fourier Art Cover](https://github.com/TiboVck/Des-Ordres-Fourier-Art-Cover.git)"
    ],
    info: [["Rôle", "Composition, sound design"], ["Date", "2025"], ["Format", "Pièce sonore"], ["Outils", "Python, traitement spectral"]]
  },

  "em-impulse": {
    title: "Impulsion EM",
    category: "Projet scientifique",
    overview: [
      "Ce projet portait sur l’étude des impulsions électromagnétiques (EMP) générées par l’interaction entre des impulsions laser ultra-courtes de forte intensité et des cibles solides. La recherche visait à comprendre comment la géométrie de différentes cibles influence la propagation de l’énergie électromagnétique, avec à la clé des courants d’environ 1 kA et des champs magnétiques de 1 à 10 T. Ces phénomènes pourraient avoir des applications dans l’accélération de particules chargées et la génération de rayonnement GHz et THz.",
      "L’étude expérimentale combinait modélisation théorique, simulations numériques et diagnostics expérimentaux pour étudier la génération d’EMP. Mon travail a principalement consisté à analyser des images de polarimétrie et des données de calorimétrie. J’ai développé un modèle 3D d’une cible en boucle sinusoïdale, adapté la méthode de traitement d’images à sa géométrie et analysé les mesures obtenues. Les résultats de polarimétrie indiquent des champs magnétiques d’environ 2 T pour une cible en boucle et de 1 à 2 T pour une cible sinusoïdale, correspondant à des courants d’environ 1 kA. Bien qu’inférieures aux prédictions théoriques, ces valeurs restent dans l’ordre de grandeur attendu. L’analyse de l’émission THz a aussi révélé une résonance à 0,3 THz, restée inexpliquée mais située dans la gamme de fréquences attendue. Au-delà du travail technique, le stage m’a permis de comprendre l’organisation des campagnes expérimentales et le domaine plus large de la physique laser-plasma. J’ai pu appliquer mes connaissances en physique des plasmas, en physique statistique et en théorie des champs à un véritable projet de recherche, tout en découvrant l’environnement collaboratif de la recherche scientifique et ses liens avec d’autres laboratoires européens.",
      "Dans l’ensemble, ce projet a renforcé mon expérience en analyse de données expérimentales, en modélisation physique et en démarche scientifique, tout en constituant une précieuse introduction à la recherche sur les interactions laser-plasma et à de futures études en physique des plasmas et en fusion."
    ],
    info: [["Rôle", "Ingénieur physicien"], ["Date", "Avril 2023 - juillet 2023"], ["Laboratoire", "Centre des Lasers Intenses et Applications, Talence"], ["Outils", "Matlab, Radia, Python"]]
  },

  "variable-band-pass": {
    title: "Passe-bande variable",
    category: "Traitement du signal",
    overview: [
      "Ce projet d’ingénierie portait sur la conception et la réalisation d’une pédale d’effet wah-wah analogique pour guitare électrique. L’effet wah-wah est produit par un filtre résonant dont la réponse en fréquence change avec la position d’une résistance variable commandée par une pédale. Notre travail a consisté à concevoir le circuit analogique, découpé en plusieurs blocs fonctionnels, dont des amplificateurs différentiels et inverseurs pour le conditionnement et l’isolation du signal, et le filtre principal chargé de modifier le spectre audio. Nous avons réalisé le schéma électrique et le routage du circuit imprimé avec Eagle, puis fabriqué la carte, soudé les composants et testé le circuit à l’oscilloscope et par des mesures du signal. Pendant les tests, nous avons identifié et résolu plusieurs problèmes liés aux alimentations des amplificateurs opérationnels, en ajustant le circuit pour obtenir un signal de sortie plus propre.",
      "L’analyse théorique comprenait le calcul de la fonction de transfert du filtre et le tracé de diagrammes de Bode pour différentes valeurs de résistance du potentiomètre. Nous avons ensuite comparé ces prédictions à des mesures expérimentales de la réponse en fréquence et de la fréquence de résonance. Les résultats ont montré un bon accord avec le comportement théorique et confirmé que la fréquence de résonance variait comme prévu avec la résistance variable.",
      "Enfin, nous avons testé le circuit terminé avec une guitare électrique et un amplificateur. Malgré un léger bruit et un peu de distorsion résiduels, la pédale reproduit bien l’effet wah-wah recherché."
    ],
    info: [["Rôle", "Conception, développement"], ["Date", "2025"], ["Format", "Outil audio"], ["Outils", "Python, C++, traitement du signal"]],
    media: [ {
      caption: "Déplacez le curseur sur le diagramme pour actionner la pédale : la résonance suit le potentiomètre.",
      captionTouch: "Faites glisser votre doigt sur le diagramme pour actionner la pédale : la résonance suit le potentiomètre."
    } ]
  },

  "early-works": {
    title: "Premiers travaux",
    category: "Archives",
    overview: [
      "Les premières expériences, avant qu’une direction créative claire ne prenne forme. J’ai commencé à composer et à explorer l’enregistrement et le mixage à 13 ans, tout en expérimentant la vidéo pour donner une dimension visuelle à ces idées. Sous mon premier nom d’artiste, The Triper (voir le logo à droite), j’ai commencé à développer des projets avec peu de connaissances formelles dans l’une comme dans l’autre discipline, en apprenant par la pratique : essayer des techniques, construire de petits projets, les casser, et recommencer.",
      "Ces premiers projets visaient moins à produire des œuvres abouties qu’à découvrir ce qu’il était possible de faire en combinant musique, enregistrement, montage et image. Ils sont devenus un terrain de jeu et d’expérimentation, et ont peu à peu façonné ma manière d’aborder les projets créatifs aujourd’hui : apprendre en pratiquant, relier les médiums et utiliser les contraintes techniques comme prétexte pour inventer de nouvelles idées.",
      "Sur ma [chaîne YouTube](https://www.youtube.com/@thetriper), j’ai créé une série de projets vidéo autour de reprises de chansons que j’aimais. Plutôt que de simplement reproduire les morceaux originaux, j’ai imaginé un concept visuel pour chaque reprise, en utilisant l’enregistrement, la superposition de voix, le montage et des effets concrets pour réinterpréter la musique avec mon propre langage créatif.",
      "EARFQUAKE – Tyler, The Creator : une reprise vocale construite sur des harmonies superposées, avec une vidéo montrant cinq versions de moi-même interprétant les différentes parties enregistrées. Le t-shirt rose est une référence visuelle à la pochette de l’album IGOR, qui crée un clin d’œil entre l’œuvre originale et ma propre interprétation.",
      "CASINO – Disiz : une expérience de live looping et de performance. J’ai recréé l’instrumental en enregistrant et en déclenchant des boucles en temps réel, que je gérais et superposais tout en chantant par-dessus l’arrangement en évolution. Ce projet a été une première exploration de la relation entre composition, performance et technologie — une approche qui deviendrait plus tard centrale dans mon travail."
    ],
    info: [["Rôle", "Artiste"], ["Date", "2013-2022"], ["Format", "Techniques mixtes"], ["Outils", "Logic Pro, Ableton Live, iMovie"]]
  },

  "fm-plugin-coding": {
    title: "Codage de plugin FM",
    category: "Code & son",
    overview: [
      "Un instrument Max for Live expérimental qui associe guitare électrique et synthèse par modulation de fréquence (FM). En synthèse FM, un oscillateur porteur génère le son pendant que sa fréquence est modulée en continu par un second signal, ce qui crée des spectres harmoniques complexes. Ici, le plugin détecte la fréquence fondamentale du signal de guitare entrant, s’en sert pour accorder et déclencher un oscillateur sur la note détectée, et applique la FM en utilisant le signal de guitare lui-même comme modulateur. Il en résulte un instrument hybride où le jeu du guitariste pilote directement la synthèse et façonne son timbre en temps réel.",
      "Le plugin est actuellement en développement. Une version bêta gratuite est disponible au téléchargement : [Guitar FM Synth - Max for Live](https://github.com/TiboVck/Guitar-FM-Synth-Max-for-Live.git)"
    ],
    info: [["Rôle", "Conception, développement"], ["Date", "2026"], ["Format", "Plugin audio"], ["Outils", "Max for Live"]]
  }
};

/* Rattache chaque traduction à son projet : p.fr */
(window.PROJECTS || []).forEach(p => { if (window.PROJECTS_FR[p.slug]) p.fr = window.PROJECTS_FR[p.slug]; });
