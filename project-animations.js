/* =========================================================================
   ANIMATIONS CANVAS pour les pages projets.
   Pour en créer une : ajoute une entrée dans PROJECT_ANIMATIONS puis
   utilise { type:"animation", name:"monNom" } dans projects-data.js.

   Chaque animation est une fonction (ctx, w, h) qui prépare son état
   et renvoie une fonction frame(t) appelée à chaque image (t en secondes).
   ========================================================================= */
window.PROJECT_ANIMATIONS = {

  // Particules lumineuses qui suivent un front de plasma
  plasma(ctx, w, h){
    const N = 140, ps = Array.from({length:N}, () => ({u:Math.random(), v:(Math.random()-.5), s:.04+Math.random()*.1}));
    return t => {
      ctx.globalCompositeOperation = 'source-over';
      ctx.fillStyle = 'rgba(14,6,60,.16)'; ctx.fillRect(0,0,w,h);
      ctx.globalCompositeOperation = 'lighter';
      for (const p of ps){
        p.u += p.s * .006; if (p.u > 1) { p.u = 0; p.v = (Math.random()-.5); }
        const x = p.u * w;
        const y = h * (.15 + .7*Math.pow(p.u,.8)) + Math.sin(t*1.5 + p.u*9 + p.v*5) * 24 * (1-p.u) + p.v * 40;
        const r = 3 + (1-p.u) * 10;
        const g = ctx.createRadialGradient(x,y,0,x,y,r*2.4);
        g.addColorStop(0, `hsla(${30 + p.u*20},100%,${60 - p.u*20}%,.9)`);
        g.addColorStop(1, 'hsla(280,100%,50%,0)');
        ctx.fillStyle = g; ctx.beginPath(); ctx.arc(x,y,r*2.4,0,7); ctx.fill();
      }
    };
  },

  // Spectrogramme qui défile
  spectrogram(ctx, w, h){
    const cols = Math.floor(w/3), rows = 48, data = Array.from({length:cols}, () => new Float32Array(rows));
    let last = 0;
    return t => {
      if (t - last > .045){
        last = t; data.shift();
        const col = new Float32Array(rows);
        const f0 = (Math.sin(t*.8)+1)/2 * rows * .5;
        for (let r=0;r<rows;r++){
          const d = Math.abs(r - f0);
          col[r] = Math.max(0, Math.exp(-d*.25) + Math.exp(-Math.abs(r-f0*2)*.35)*.6 + Math.random()*.08);
        }
        data.push(col);
      }
      ctx.fillStyle = '#0b0618'; ctx.fillRect(0,0,w,h);
      const cw = w/cols, ch = h/rows;
      for (let c=0;c<cols;c++) for (let r=0;r<rows;r++){
        const v = Math.min(1, data[c][r]); if (v < .05) continue;
        ctx.fillStyle = `hsl(${270 - v*240},100%,${15 + v*50}%)`;
        ctx.fillRect(c*cw, h - (r+1)*ch, cw+1, ch+1);
      }
    };
  }
};
