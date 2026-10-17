/* ============================================================
   bode-wah.js — Diagramme de Bode interactif (pédale wah-wah)
   Aucune dépendance. La fonction de transfert est calculée en
   direct (même formule que BodeWahWah.py), donc pas de JSON,
   pas d'images : R varie en continu avec la souris.

   Usage :
     const bode = BodeWah.init(document.querySelector('.bode'));
     // bode.destroy() pour nettoyer
   ============================================================ */
(function (root) {
  // --- Circuit (mêmes valeurs que le script Python) -----------
  const CIRCUIT = { R9: 470e3, R10: 100e3, C1: 6.8e-9, C5: 47e-9, C6: 22e-9 };

  const DEFAULTS = {
    rMin: 1e3, rMax: 499e3,            // plage du potentiomètre R1
    fMin: 10, fMax: 25000,             // axe des fréquences
    dbMin: -30, dbMax: 35,             // axe du gain
    points: 480,                       // résolution de la courbe
    trail: 14,                         // longueur max de la traînée
    smoothing: 0.1,                    // 0..1 : petit = plus "liquide"
    reverse: true,                     // true : souris vers la droite => R diminue (pic monte en fréquence)
    autoplay: true,                    // balayage automatique quand personne n'interagit
    idleDelay: 2500,                   // ms avant la reprise de l'autoplay
    bg: '#101010',
    grid: 'rgba(255,255,255,0.16)',
    gridMinor: 'rgba(255,255,255,0.06)',
    text: 'rgba(255,255,255,0.75)',
    hueLow: 205, hueHigh: 325          // teinte (bleu -> rose) selon R
  };

  // --- Fonction de transfert : gain en dB ---------------------
  // H = -jωC5/(1+jωC5R10) * [R9 + jωR1R9(C1+C6)] / [1 - ω²R1R9C1C6 + jωR1(C1+C6)]
  function gainDb(f, R1, c) {
    c = c || CIRCUIT;
    const w = 2 * Math.PI * f;
    const n1 = w * c.C5;
    const d1 = Math.hypot(1, w * c.C5 * c.R10);
    const n2 = Math.hypot(c.R9, w * R1 * c.R9 * (c.C1 + c.C6));
    const d2 = Math.hypot(1 - w * w * R1 * c.R9 * c.C1 * c.C6, w * R1 * (c.C1 + c.C6));
    return 20 * Math.log10((n1 / d1) * (n2 / d2));
  }

  function init(el, userOpts) {
    const o = Object.assign({}, DEFAULTS, userOpts || {});
    const reduced = root.matchMedia && root.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced) { o.trail = 1; o.smoothing = 1; o.autoplay = false; }

    // Canvas
    const canvas = document.createElement('canvas');
    canvas.style.cssText = 'display:block;width:100%;height:100%;touch-action:pan-y;cursor:ew-resize;';
    el.appendChild(canvas);
    const ctx = canvas.getContext('2d');
    const bg = document.createElement('canvas');           // grille pré-rendue
    const bgx = bg.getContext('2d');

    // Fréquences (échelle log)
    const N = o.points;
    const lf0 = Math.log10(o.fMin), lf1 = Math.log10(o.fMax);
    const freqs = new Float64Array(N);
    for (let i = 0; i < N; i++) freqs[i] = Math.pow(10, lf0 + (lf1 - lf0) * i / (N - 1));

    // Géométrie
    let W = 0, H = 0, dpr = 1;
    const m = { l: 52, r: 18, t: 16, b: 38 };
    const xOf = f => m.l + (Math.log10(f) - lf0) / (lf1 - lf0) * (W - m.l - m.r);
    const yOf = db => m.t + (o.dbMax - db) / (o.dbMax - o.dbMin) * (H - m.t - m.b);

    function resize() {
      const r = el.getBoundingClientRect();
      W = Math.max(200, r.width); H = Math.max(140, r.height);
      dpr = Math.min(root.devicePixelRatio || 1, 2);
      canvas.width = W * dpr; canvas.height = H * dpr;
      bg.width = W * dpr; bg.height = H * dpr;
      drawGrid();
    }

    function drawGrid() {
      const g = bgx;
      g.setTransform(dpr, 0, 0, dpr, 0, 0);
      g.fillStyle = o.bg; g.fillRect(0, 0, W, H);
      g.font = '11px system-ui, sans-serif';
      g.lineWidth = 1;
      // verticales : mineures puis décades
      for (let dec = 1; dec <= 4; dec++) {
        for (let k = 1; k <= 9; k++) {
          const f = k * Math.pow(10, dec);
          if (f < o.fMin || f > o.fMax) continue;
          const x = Math.round(xOf(f)) + 0.5;
          g.strokeStyle = k === 1 ? o.grid : o.gridMinor;
          g.beginPath(); g.moveTo(x, m.t); g.lineTo(x, H - m.b); g.stroke();
        }
      }
      // horizontales tous les 10 dB
      g.textAlign = 'right'; g.textBaseline = 'middle'; g.fillStyle = o.text;
      for (let db = -30; db <= 30; db += 10) {
        const y = Math.round(yOf(db)) + 0.5;
        g.strokeStyle = db === 0 ? 'rgba(255,255,255,0.3)' : o.grid;
        g.beginPath(); g.moveTo(m.l, y); g.lineTo(W - m.r, y); g.stroke();
        g.fillText(String(db), m.l - 8, y);
      }
      // labels fréquence
      g.textAlign = 'center'; g.textBaseline = 'top';
      [['10', 10], ['100', 100], ['1k', 1e3], ['10k', 1e4]].forEach(([t, f]) => g.fillText(t, xOf(f), H - m.b + 8));
      g.fillText('Hz', W - m.r - 8, H - m.b + 22);
      g.save(); g.translate(14, (m.t + H - m.b) / 2); g.rotate(-Math.PI / 2);
      g.fillText('Gain (dB)', 0, 0); g.restore();
      // cadre
      g.strokeStyle = 'rgba(255,255,255,0.35)';
      g.strokeRect(m.l + 0.5, m.t + 0.5, W - m.l - m.r, H - m.t - m.b);
    }

    // --- État ----------------------------------------------------
    // s ∈ [0,1] : position le long du potentiomètre, R = rMin·(rMax/rMin)^s
    const R_of = s => o.rMin * Math.pow(o.rMax / o.rMin, s);
    let target = o.reverse ? 0.2 : 0.8, current = target, last = current;
    let manual = false, idleTimer = null, visible = true, raf = 0;
    const history = [];                                     // traînée

    function onMove(e) {
      const r = canvas.getBoundingClientRect();
      const x = Math.min(1, Math.max(0, (e.clientX - r.left) / r.width));
      target = o.reverse ? 1 - x : x;
      manual = true; clearTimeout(idleTimer);
    }
    function onLeave() {
      clearTimeout(idleTimer);
      idleTimer = setTimeout(() => { manual = false; }, o.idleDelay);
    }
    canvas.addEventListener('pointermove', onMove);
    canvas.addEventListener('pointerdown', onMove);
    canvas.addEventListener('pointerleave', onLeave);
    canvas.addEventListener('pointerup', e => { if (e.pointerType === 'touch') onLeave(); });

    const ro = new ResizeObserver(resize); ro.observe(el);
    const io = new IntersectionObserver(es => { visible = es[0].isIntersecting; }); io.observe(el);

    // --- Boucle --------------------------------------------------
    function frame(now) {
      raf = requestAnimationFrame(frame);
      if (!visible) return;

      if (o.autoplay && !manual) target = 0.5 + 0.5 * Math.sin(now * 0.00032 - Math.PI / 2);
      current += (target - current) * o.smoothing;

      // calcule la courbe courante
      const R = R_of(current);
      const db = new Float32Array(N);
      let peak = 0;
      for (let i = 0; i < N; i++) { db[i] = gainDb(freqs[i], R); if (db[i] > db[peak]) peak = i; }
      const hue = o.hueLow + (o.hueHigh - o.hueLow) * current;

      // traînée : s'allonge quand ça bouge, se résorbe quand ça s'arrête
      history.unshift({ db, hue });
      if (Math.abs(current - last) <= 2e-4) history.length = Math.max(1, history.length - 2);
      if (history.length > o.trail) history.length = o.trail;
      last = current;

      // rendu
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.drawImage(bg, 0, 0, W, H);
      ctx.save();
      ctx.beginPath(); ctx.rect(m.l, m.t, W - m.l - m.r, H - m.t - m.b); ctx.clip();
      ctx.lineJoin = 'round'; ctx.lineCap = 'round';

      for (let h = history.length - 1; h >= 0; h--) {
        const { db: d, hue: hh } = history[h];
        const a = h === 0 ? 1 : Math.pow(1 - h / history.length, 2) * 0.45;
        ctx.globalAlpha = a;
        ctx.strokeStyle = `hsl(${hh} 85% 62%)`;
        ctx.lineWidth = h === 0 ? 2.6 : 2;
        ctx.shadowColor = `hsl(${hh} 90% 60%)`;
        ctx.shadowBlur = h === 0 ? 14 : 0;
        ctx.beginPath();
        for (let i = 0; i < N; i++) {
          const x = xOf(freqs[i]), y = yOf(d[i]);
          i ? ctx.lineTo(x, y) : ctx.moveTo(x, y);
        }
        ctx.stroke();
      }
      ctx.restore();

      // pic de résonance
      ctx.globalAlpha = 1; ctx.shadowBlur = 0;
      const px = xOf(freqs[peak]), py = yOf(db[peak]);
      ctx.strokeStyle = 'rgba(255,255,255,0.25)'; ctx.setLineDash([3, 4]);
      ctx.beginPath(); ctx.moveTo(px, py); ctx.lineTo(px, H - m.b); ctx.stroke(); ctx.setLineDash([]);
      ctx.fillStyle = '#fff'; ctx.shadowColor = `hsl(${hue} 90% 65%)`; ctx.shadowBlur = 16;
      ctx.beginPath(); ctx.arc(px, py, 3.5, 0, 7); ctx.fill();
      ctx.shadowBlur = 0;

      // lecture
      const rTxt = (R / 1e3).toFixed(R < 1e4 ? 1 : 0);
      const fTxt = freqs[peak] >= 1000 ? (freqs[peak] / 1000).toFixed(2) + ' kHz' : Math.round(freqs[peak]) + ' Hz';
      ctx.font = '600 13px system-ui, sans-serif';
      ctx.textAlign = 'right'; ctx.textBaseline = 'top'; ctx.fillStyle = `hsl(${hue} 85% 70%)`;
      ctx.fillText(`R = ${rTxt} kΩ`, W - m.r - 10, m.t + 10);
      ctx.font = '12px system-ui, sans-serif'; ctx.fillStyle = o.text;
      ctx.fillText(`pic ${fTxt} · ${db[peak].toFixed(1)} dB`, W - m.r - 10, m.t + 29);
    }

    resize();
    raf = requestAnimationFrame(frame);

    return {
      destroy() {
        cancelAnimationFrame(raf); clearTimeout(idleTimer); ro.disconnect(); io.disconnect(); canvas.remove();
      }
    };
  }

  root.BodeWah = { init, gainDb, CIRCUIT };
})(typeof window !== 'undefined' ? window : globalThis);
