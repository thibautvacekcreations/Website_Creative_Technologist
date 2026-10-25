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
    { type:"embed", src:"embed", src:"https://www.youtube.com/embed/JqRjSROH5xQ", ratio:"16/9"},
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
                "You can find the code used to generate the cover art here:: [Des Ordres Fourier Art Cover](https://github.com/TiboVck/Des-Ordres-Fourier-Art-Cover.git)"
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
      info:[["Role","Design, development"],["Date","2026"],["Format","Audio plugin"],["Max for Live"]],
    media:[
      { type:"image", src:"pictures/PROJECTS/plugin_FM.png", ratio:"16/3" },
    ] }
];
