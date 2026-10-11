/* Construit la page project.html à partir de projects-data.js et du #slug de l'URL */
(() => {
  const list = window.PROJECTS || [];
  const slug = decodeURIComponent(location.hash.slice(1));
  const i = list.findIndex(p => p.slug === slug);
  const root = document.getElementById('project-root');
  if (i < 0) { location.replace('projects.html'); return; }

  const p = list[i], next = list[(i + 1) % list.length];
  const esc = s => String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;');
  document.title = `${p.title} — Thibaut Vacek`;

  const rows = p.info.map(([k,v]) => `<li><span>${esc(k)}</span><strong>${esc(v)}</strong></li>`).join('');
  const imgs = [`${p.slug}.jpg`, `${p.slug}-2.jpg`, `${p.slug}-3.jpg`].map((f,n) =>
    `<figure class="reveal" style="--d:${n*120}ms"><img src="pictures/${f}" alt="${esc(p.title)} ${n+1}" ${n? 'onerror="this.parentNode.remove()"':''}></figure>`).join('');

  root.innerHTML = `
  <section class="pj">
    <div class="pj-text">
      <div>
        <p class="eyebrow reveal">OVERVIEW · ${esc(p.category.toUpperCase())}</p>
        <h1 class="pj-title reveal">${esc(p.title)}</h1>
        <p class="pj-overview reveal">${esc(p.overview)}</p>
      </div>
      <ul class="pj-info">${rows.replace(/<li>/g,'<li class="reveal">')}</ul>
    </div>
    <div class="pj-media">${imgs}</div>
  </section>
  <section class="pj-nav">
    <a class="pj-back reveal" href="projects.html"><span class="arrow">←</span> BACK TO PROJECTS</a>
    <a class="pj-next reveal" href="project.html#${next.slug}">NEXT: ${esc(next.title.toUpperCase())} <span class="arrow">→</span></a>
  </section>`;
  window.addEventListener('hashchange', () => { location.reload(); window.scrollTo(0,0); });
})();
