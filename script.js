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

  // Forme d'onde + lecteur (page Music)
  const player = document.querySelector('.player');
  if (player) {
    const wave = player.querySelector('.wave');
    const N = innerWidth < 640 ? 36 : 72;
    for (let i = 0; i < N; i++) {
      const b = document.createElement('i');
      const h = 18 + Math.abs(Math.sin(i * .9) * 28) + Math.random() * 30;
      b.style.setProperty('--h', h + '%'); b.style.setProperty('--i', i);
      wave.appendChild(b);
    }
    const audio = new Audio(player.dataset.src);
    const btn = player.querySelector('.play');
    btn.addEventListener('click', () => {
      const playing = player.classList.toggle('playing');
      if (playing) audio.play().catch(() => {}); else audio.pause();
    });
    audio.addEventListener('ended', () => player.classList.remove('playing'));
  }

  // Formulaire : retour visuel à l'envoi
  document.querySelector('.cf-form')?.addEventListener('submit', e => {
    const b = e.target.querySelector('button'); b.textContent = 'SENT ✓';
  });
})();
