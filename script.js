/* THIBAUT VACEK — interactions & animations */
(() => {
  // Header : fond au scroll
  const header = document.querySelector('.site-header');
  const onScroll = () => header.classList.toggle('scrolled', window.scrollY > 30);
  onScroll(); window.addEventListener('scroll', onScroll, {passive:true});

  // Menu mobile
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.nav');
  burger?.addEventListener('click', () => {
    const open = burger.getAttribute('aria-expanded') === 'true';
    burger.setAttribute('aria-expanded', String(!open));
    nav.classList.toggle('open', !open);
    document.body.style.overflow = open ? '' : 'hidden';
  });
  nav?.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    burger?.setAttribute('aria-expanded','false'); nav.classList.remove('open'); document.body.style.overflow='';
  }));

  // Apparition au scroll
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
  }, {threshold:.12, rootMargin:'0px 0px -6% 0px'});
  document.querySelectorAll('.reveal').forEach(el => io.observe(el));

  // Parallaxe douce de l'image hero
  const heroImg = document.querySelector('.hero-img img');
  if (heroImg && matchMedia('(pointer:fine)').matches) {
    window.addEventListener('mousemove', e => {
      const x = (e.clientX / innerWidth - .5) * 14, y = (e.clientY / innerHeight - .5) * 10;
      heroImg.style.translate = `${x}px ${y}px`;
    });
  }

  // Lecteur audio : vraie forme d'onde + déplacement dans le morceau (page Music)
  const player = document.querySelector('.player');
  if (player) {
    const btn = player.querySelector('.play'), wave = player.querySelector('.wave');
    const tip = wave.querySelector('.wave-tip');
    const tCur = player.querySelector('.t-cur'), tDur = player.querySelector('.t-dur');
    const cv = document.createElement('canvas'); wave.prepend(cv);
    const ctx = cv.getContext('2d');
    const audio = new Audio(player.dataset.src); audio.preload = 'metadata';

    const PAD = 10, GAP = 3;
    let W = 0, H = 0, hover = null, seeking = false, raf = 0;
    const fmt = s => isFinite(s) ? Math.floor(s / 60) + ':' + String(Math.floor(s % 60)).padStart(2, '0') : '0:00';
    const prog = () => audio.duration ? audio.currentTime / audio.duration : 0;

    // Onde provisoire, remplacée par la vraie dès que le fichier est décodé
    let peaks = Array.from({length: 300}, (_, i) => .2 + .55 * Math.abs(Math.sin(i * .31) * Math.sin(i * .09 + 1)) + .1 * Math.random());

    const draw = () => {
      const dpr = Math.min(devicePixelRatio || 1, 2);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0); ctx.clearRect(0, 0, W, H);
      const iw = W - PAD * 2, n = Math.max(8, Math.floor(iw / 6)), step = iw / n, bw = Math.max(1.5, step - GAP);
      const p = prog(), mid = H / 2;
      for (let i = 0; i < n; i++) {
        const a = Math.floor(i / n * peaks.length), b = Math.max(a + 1, Math.floor((i + 1) / n * peaks.length));
        let v = 0; for (let k = a; k < b; k++) v = Math.max(v, peaks[k]);
        const h = Math.max(3, v * (H - PAD * 1.6)), pos = (i + .5) / n;
        ctx.globalAlpha = pos <= p ? 1 : (hover !== null && pos <= hover ? .6 : .32);
        ctx.fillStyle = i % 5 === 0 ? '#c98763' : '#e3ddd0';
        ctx.beginPath();
        ctx.roundRect ? ctx.roundRect(PAD + i * step, mid - h / 2, bw, h, 1.5) : ctx.rect(PAD + i * step, mid - h / 2, bw, h);
        ctx.fill();
      }
      ctx.globalAlpha = 1;
      if (hover !== null) { ctx.fillStyle = 'rgba(255,255,255,.4)'; ctx.fillRect(PAD + hover * iw - .5, 4, 1, H - 8); }
      ctx.save(); ctx.shadowColor = '#4f9bc9'; ctx.shadowBlur = 10; ctx.fillStyle = '#4f9bc9';
      ctx.fillRect(PAD + p * iw - 1, 3, 2, H - 6); ctx.restore();
    };
    const updateTime = () => {
      tCur.textContent = fmt(audio.currentTime);
      wave.setAttribute('aria-valuenow', Math.round(prog() * 100));
    };
    const resize = () => {
      const r = wave.getBoundingClientRect(), dpr = Math.min(devicePixelRatio || 1, 2);
      W = r.width; H = r.height; cv.width = W * dpr; cv.height = H * dpr; draw();
    };
    new ResizeObserver(resize).observe(wave);

    // Vraie forme d'onde : on décode le fichier et on garde les crêtes
    fetch(player.dataset.src).then(r => { if (!r.ok) throw 0; return r.arrayBuffer(); })
      .then(buf => { const ac = new (window.AudioContext || window.webkitAudioContext)(); return ac.decodeAudioData(buf).finally(() => ac.close && ac.close()); })
      .then(ab => {
        const ch = ab.getChannelData(0), n = 400, size = Math.floor(ch.length / n), out = [];
        for (let i = 0; i < n; i++) {
          let max = 0; const s = i * size, step = Math.max(1, size >> 6);
          for (let j = 0; j < size; j += step) { const v = Math.abs(ch[s + j]); if (v > max) max = v; }
          out.push(max);
        }
        const top = Math.max(...out) || 1;
        peaks = out.map(v => Math.max(.05, Math.sqrt(v / top)));
        draw();
      }).catch(() => {});

    // Lecture
    const tick = () => { draw(); updateTime(); raf = audio.paused ? 0 : requestAnimationFrame(tick); };
    const toggle = () => audio.paused ? audio.play().catch(() => {}) : audio.pause();
    btn.addEventListener('click', toggle);
    audio.addEventListener('play', () => { player.classList.add('playing'); cancelAnimationFrame(raf); tick(); });
    audio.addEventListener('pause', () => { player.classList.remove('playing'); draw(); });
    audio.addEventListener('ended', () => { player.classList.remove('playing'); audio.currentTime = 0; draw(); updateTime(); });
    audio.addEventListener('loadedmetadata', () => { tDur.textContent = fmt(audio.duration); draw(); });
    audio.addEventListener('timeupdate', () => { if (audio.paused) { draw(); updateTime(); } });
    audio.addEventListener('error', () => player.classList.add('is-error'));

    // Choisir le moment : clic, glisser, tactile, clavier
    const frac = e => { const r = wave.getBoundingClientRect(); return Math.min(1, Math.max(0, (e.clientX - r.left - PAD) / (r.width - PAD * 2))); };
    const seek = f => { if (audio.duration) { audio.currentTime = f * audio.duration; draw(); updateTime(); } };
    wave.addEventListener('pointerdown', e => { seeking = true; wave.setPointerCapture(e.pointerId); seek(frac(e)); });
    wave.addEventListener('pointermove', e => {
      hover = frac(e); if (seeking) seek(hover);
      tip.textContent = fmt(hover * (audio.duration || 0)); tip.style.left = (PAD + hover * (W - PAD * 2)) + 'px'; tip.classList.add('on');
      if (audio.paused) draw();
    });
    wave.addEventListener('pointerup', () => { seeking = false; });
    wave.addEventListener('pointerleave', () => { hover = null; tip.classList.remove('on'); if (audio.paused) draw(); });
    wave.addEventListener('keydown', e => {
      const k = { ArrowLeft: -5, ArrowRight: 5 }[e.key];
      if (k) { audio.currentTime = Math.max(0, Math.min(audio.duration || 0, audio.currentTime + k)); e.preventDefault(); }
      else if (e.key === ' ') { toggle(); e.preventDefault(); }
    });
  }

  // Formulaire : retour visuel à l'envoi
  document.querySelector('.cf-form')?.addEventListener('submit', e => {
    const b = e.target.querySelector('button'); b.textContent = 'SENT ✓';
  });
// Bandeaux défilants : on duplique le contenu pour couvrir n'importe quelle largeur d'écran
document.querySelectorAll('.ticker-track').forEach(track => {
  const base = [...track.children];
  const k = Math.max(2, 2 * Math.ceil(innerWidth / track.scrollWidth));
  for (let i = 1; i < k; i++) base.forEach(li => track.appendChild(li.cloneNode(true)));
});

})();



