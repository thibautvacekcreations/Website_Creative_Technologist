/* Construit project.html à partir de projects-data.js et du #slug de l'URL.
   Chaque projet décrit ses propres blocs visuels (image, pair, grid, video, embed, animation, text). */
(() => {
  const list = window.PROJECTS || [];
  const slug = decodeURIComponent(location.hash.slice(1));
  const i = list.findIndex(p => p.slug === slug);
  const root = document.getElementById('project-root');
  if (i < 0) { location.replace('projects.html'); return; }

  // Langue (i18n.js) : on applique le champ fr:{…} de projects-data.js
  const LANG = (window.TV && window.TV.lang) || 'en';
  const loc = q => {
    const t = LANG === 'fr' && q.fr;
    if (!t) return q;
    return { ...q, ...t, media: q.media && t.media ? q.media.map((m, k) => ({ ...m, ...(t.media[k] || {}) })) : q.media };
  };
  const UI = LANG === 'fr' ? { overview: 'APERÇU', back: 'RETOUR AUX PROJETS', next: 'SUIVANT :' }
                           : { overview: 'OVERVIEW', back: 'BACK TO PROJECTS', next: 'NEXT:' };
  const touch = matchMedia('(hover:none)').matches;
  const p = loc(list[i]), next = loc(list[(i + 1) % list.length]);
  const esc = s => String(s ?? '').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/"/g,'&quot;');
const rich = s => esc(s).replace(/\[([^\]]+)\]\(((?:https?:\/\/|\/|\.\/|\.\.\/|#)[^)\s]+|[\w-]+\.html(?:#[\w-]+)?)\)/g, (m, t, u) => {
  const ext = /^https?:/.test(u);
  return `<a href="${u}"${ext ? ' target="_blank" rel="noopener"' : ''}>${t}</a>`;
});  const path = s => /^(https?:)?\/\//.test(s) || s.startsWith('/') || s.startsWith('pictures/') ? s : `pictures/${s}`;
  const ratio = r => r ? `style="aspect-ratio:${esc(r)}"` : '';
  const num = r => { const [a, b = 1] = String(r).split('/').map(Number); return a / b; };
  const gone = `onerror="this.closest('figure,.pj-cell').remove()"`;
  document.title = `${p.title} — Thibaut Vacek`;
  if (p.accent) { root.style.setProperty('--gold', p.accent); root.style.setProperty('--gold-soft', p.accent); root.style.setProperty('--gold-line', p.accent + '99'); }

  const cap = c => c ? `<figcaption>${esc(c)}</figcaption>` : '';
  const img = (o, extra='') => `<img src="${path(o.src)}" alt="${esc(o.alt || p.title)}" loading="lazy" ${extra}>`;
  let n = 0;
  const wrap = (cls, inner, c) => `<figure class="pj-block ${cls} reveal" style="--d:${(n++ % 3) * 100}ms">${inner}${cap(c)}</figure>`;
  const bodes = [];

  const blocks = {
    image:  o => wrap('b-image', `<div class="pj-cell" ${ratio(o.ratio)}>${img(o, gone)}</div>`, o.caption),
    pair:   o => wrap('b-pair',  `<div class="pj-cols c2">${o.images.map(x => `<div class="pj-cell" ${ratio(x.ratio || o.ratio || '4/5')}>${img(x, gone)}</div>`).join('')}</div>`, o.caption),
  triple: o => wrap('b-triple', `<div class="pj-cols c3" style="${o.columns ? `grid-template-columns:${esc(o.columns)};` : ''}${o.height ? `grid-auto-rows:${esc(o.height)};` : ''}">${o.images.slice(0, 3).map(x => `<div class="pj-cell" ${o.height ? '' : ratio(x.ratio || o.ratio || '4/5')}>${img(x, gone)}</div>`).join('')}</div>`, o.caption),    videos: o => wrap('b-videos', `<div class="pj-flex">${o.videos.map(v => { const r = v.ratio || o.ratio || '9/16'; return `<div class="pj-cell" style="flex:${num(r)} 1 0;aspect-ratio:${esc(r)}"><video ${(v.controls || o.controls) ? 'controls' : 'autoplay muted loop'} playsinline preload="metadata" ${v.poster ? `poster="${path(v.poster)}"` : ''}><source src="${path(v.src)}"></video></div>`; }).join('')}</div>`, o.caption),
    audio: o => wrap('b-audio', `<div class="pj-audio">${o.title ? `<p class="pj-audio-title">${esc(o.title)}</p>` : ''}<audio controls preload="none" src="${path(o.src)}" onerror="this.closest('figure').remove()"></audio></div>`, o.caption),
    grid:   o => wrap('b-grid',  `<div class="pj-cols c${Math.min(o.images.length,3) >= 3 ? 3 : 2}">${o.images.map(x => `<div class="pj-cell" ${ratio(x.ratio || o.ratio || '1/1')}>${img(x, gone)}</div>`).join('')}</div>`, o.caption),
    section: o => {
  const isVideo = /\.(mp4|webm)(\?.*)?$/i.test(o.src);
  const visual = isVideo
    ? `<video ${o.controls ? 'controls' : 'autoplay muted loop'} playsinline preload="metadata" ${o.poster ? `poster="${path(o.poster)}"` : ''}><source src="${path(o.src)}"></video>`
    : img({ src:o.src, alt:o.alt || o.title }, gone);
  const ps = [].concat(o.text || []).map(t => `<p class="pj-subtext">${rich(t)}</p>`).join('');
  return wrap('b-section', `${o.label ? `<p class="pj-label">${esc(o.label)}</p>` : ''}<h2 class="pj-sub">${esc(o.title)}</h2>${ps}<div class="pj-cell" ${ratio(o.ratio || '4/3')}>${visual}</div>`, o.caption);
},
    video:  o => wrap('b-video', `<div class="pj-cell" ${ratio(o.ratio || '16/9')}><video ${o.controls ? 'controls' : 'autoplay muted loop'} playsinline preload="metadata" ${o.poster ? `poster="${path(o.poster)}"` : ''}><source src="${path(o.src)}"></video></div>`, o.caption),
    bode: o => { bodes.push({ ...(o.options || {}), lang: LANG }); return wrap('b-bode', `<div class="pj-cell" data-bode="${bodes.length - 1}" ${ratio(o.ratio || '16/10')}></div>`, (touch && o.captionTouch) || o.caption); },
    embed:  o => wrap('b-embed', `<div class="pj-cell" style="${o.height ? `height:${+o.height}px` : `aspect-ratio:${esc(o.ratio || '16/9')}`}"><iframe src="${esc(o.src)}" loading="lazy" allow="autoplay; encrypted-media; fullscreen; picture-in-picture" allowfullscreen title="${esc(o.alt || p.title)}"></iframe></div>`, o.caption),
    animation: o => wrap('b-anim', `<div class="pj-cell" ${ratio(o.ratio || '1/1')}><canvas data-anim="${esc(o.name)}"></canvas></div>`, o.caption),
    text:   o => `<p class="pj-note reveal">${esc(o.text)}</p>`
  };

  const media = (p.media && p.media.length ? p.media
    : [p.slug + '.jpg', p.slug + '-2.jpg', p.slug + '-3.jpg'].map(src => ({ type:'image', src, ratio:'4/5' })))
    .map(o => (blocks[o.type] || (() => ''))(o)).join('');

  const rows = p.info.map(([k,v]) => `<li class="reveal"><span>${esc(k)}</span><strong>${esc(v)}</strong></li>`).join('');
  
  const paras = (Array.isArray(p.overview) ? p.overview : [p.overview]);
  const longText = paras.join(' ').length > 350;
const wide = p.hero ? `<section class="pj-hero reveal${p.hero.position === 'bottom' ? ' bottom' : ''}" ${p.hero.ratio ? `style="aspect-ratio:${esc(p.hero.ratio)}"` : ''}>${p.hero.animation ? `<canvas data-anim="${esc(p.hero.animation)}"></canvas>` : `<video ${p.hero.controls ? 'controls' : 'autoplay muted loop'} playsinline preload="auto" ${p.hero.poster ? `poster="${path(p.hero.poster)}"` : ''}><source src="${path(p.hero.video)}"></video>`}</section>` : '';  const atTop = p.hero && p.hero.position !== 'bottom';  

  root.innerHTML = `
    ${atTop ? wide : ''}
  <section class="pj${atTop ? ' has-hero' : ''}">
    <div class="pj-text${longText ? ' long' : ''}">
      <div>
        <p class="eyebrow reveal">${UI.overview} · ${esc(p.category.toUpperCase())}</p>
        <h1 class="pj-title reveal">${esc(p.title)}</h1>
        ${paras.map(t => `<p class="pj-overview reveal">${rich(t)}</p>`).join('')}
      </div>
      <ul class="pj-info">${rows}</ul>
    </div>
    <div class="pj-media">${media}</div>
  </section>
  ${!atTop ? wide : ''}
  <section class="pj-nav">
    <a class="pj-back reveal" href="projects.html"><span class="arrow">←</span> ${UI.back}</a>
    <a class="pj-next reveal" href="project.html#${next.slug}">${UI.next} ${esc(next.title.toUpperCase())} <span class="arrow">→</span></a>
  </section>`;

  // Vidéo dont le fichier est absent : on retire le bloc
  root.querySelectorAll('video').forEach(v => {
    if (!v.controls) { v.muted = true; v.play().catch(e => console.warn('Lecture bloquée :', e)); }
    v.querySelector('source')?.addEventListener('error', e => {
      console.warn('Vidéo introuvable ou illisible :', e.target.src);
      (v.closest('.pj-cell') || v.closest('figure, .pj-hero'))?.remove()
    });
  });
  root.querySelectorAll('[data-bode]').forEach(el => window.BodeWah && BodeWah.init(el, bodes[+el.dataset.bode]));
  // Animations canvas : redimensionnement net, pause hors écran, image fixe si "reduced motion"
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  root.querySelectorAll('canvas[data-anim]').forEach(cv => {
    const init = (window.PROJECT_ANIMATIONS || {})[cv.dataset.anim];
    if (!init) { cv.closest('figure, .pj-hero')?.remove(); return; }
    const ctx = cv.getContext('2d');
    let frame, visible = true, raf, t0 = performance.now();
    const setup = () => {
    const dpr = Math.min(devicePixelRatio || 1, 2), r = cv.parentElement.getBoundingClientRect();      cv.width = Math.max(1, r.width * dpr); cv.height = Math.max(1, r.height * dpr);
      ctx.setTransform(dpr,0,0,dpr,0,0);
      frame = init(ctx, r.width, r.height);
      for (let k = 0; k < (reduce ? 60 : 1); k++) frame(k / 30);
    };
    const loop = now => { if (visible && !reduce) frame((now - t0) / 1000); raf = requestAnimationFrame(loop); };
    setup(); new ResizeObserver(setup).observe(cv.parentElement);    new IntersectionObserver(e => { visible = e[0].isIntersecting; }).observe(cv);
    raf = requestAnimationFrame(loop);
  });

  // Titre : la taille s'adapte à la largeur de sa colonne (le plus long mot doit tenir sans être coupé).
  // On mesure dans le DOM avec la vraie police ; on recalcule dès qu'elle est chargée.
  const fitTitle = () => {
    const h = root.querySelector('.pj-title');
    if (!h || !h.clientWidth) return;
    const MAX = innerWidth < 900 ? 48 : 110, MIN = 22;           // px : tailles min / max
    const probe = h.cloneNode(false);
    probe.style.cssText = 'position:absolute;visibility:hidden;white-space:nowrap;width:auto;margin:0;font-size:100px';
    h.parentNode.appendChild(probe);
    let widest = 1;
    h.textContent.split(/\s+/).filter(Boolean).forEach(w => { probe.textContent = w; widest = Math.max(widest, probe.getBoundingClientRect().width); });
    probe.remove();
    h.style.fontSize = Math.max(MIN, Math.min(MAX, h.clientWidth / widest * 100 * .97)) + 'px';
  };
  fitTitle();
  document.fonts?.load('1em "Revive80 Wide"').then(fitTitle, () => {});
  document.fonts?.ready.then(fitTitle);
  document.fonts?.addEventListener?.('loadingdone', fitTitle);
  new ResizeObserver(fitTitle).observe(root.querySelector('.pj-text') || root);

  window.addEventListener('hashchange', () => { location.reload(); window.scrollTo(0,0); });
  window.addEventListener('tv:lang', () => location.reload());   // changement de langue : on reconstruit la page
})();
