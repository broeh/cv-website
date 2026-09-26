const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;

const io = new IntersectionObserver(entries => {
  for (const e of entries) {
    if (!e.isIntersecting) continue;
    e.target.classList.add('is-in');
    io.unobserve(e.target);
  }
}, { rootMargin: '0px 0px -10% 0px' });
document.querySelectorAll('[data-reveal], .case').forEach(el => io.observe(el));

const people = document.querySelector('.people');
for (let i = 0; i < 22; i++) {
  const dot = document.createElement('i');
  dot.style.setProperty('--d', i);
  people.append(dot);
}

// Cursor spotlight on cards.
document.querySelectorAll('[data-spot]').forEach(group => {
  const cards = [...group.querySelectorAll('.card')];
  group.addEventListener('pointermove', e => {
    for (const card of cards) {
      const r = card.getBoundingClientRect();
      card.style.setProperty('--mx', e.clientX - r.left + 'px');
      card.style.setProperty('--my', e.clientY - r.top + 'px');
    }
  });
});

const nav = document.querySelector('[data-nav]');
const navLinks = [...nav.querySelectorAll('nav a')];
const targets = navLinks.map(a => document.querySelector(a.getAttribute('href')));
const rail = document.querySelector('[data-rail]');
const railWrap = rail.closest('.rail');
const cases = [...document.querySelectorAll('.case')];

const onScroll = () => {
  const vh = innerHeight;
  nav.classList.toggle('scrolled', scrollY > 20);

  let on = -1;
  targets.forEach((t, i) => { if (t.getBoundingClientRect().top < vh * .4) on = i; });
  navLinks.forEach((a, i) => a.classList.toggle('on', i === on));

  if (reduce) return;
  const r = railWrap.getBoundingClientRect();
  rail.style.setProperty('--p', Math.min(1, Math.max(0, (vh * .7 - r.top) / r.height)).toFixed(3));

  // Dim and shrink a stacked case card while the next one slides over it.
  cases.forEach((c, i) => {
    const next = cases[i + 1];
    if (!next || getComputedStyle(c).position !== 'sticky') { c.style.removeProperty('--cover'); return; }
    const overlap = c.getBoundingClientRect().top + c.offsetHeight - next.getBoundingClientRect().top;
    c.style.setProperty('--cover', Math.min(1, Math.max(0, overlap / c.offsetHeight)).toFixed(3));
  });
};
addEventListener('scroll', onScroll, { passive: true });
addEventListener('resize', onScroll);
onScroll();

document.querySelector('[data-print]')?.addEventListener('click', () => print());

// Hero matrix: people form teams (columns), and a discipline (row) lights up across all teams.
const canvas = document.querySelector('[data-matrix]');
const ctx = canvas.getContext('2d');
const ROWS = ['Ontwikkeling', 'Test', 'Analyse', 'Data', 'Scrum'];
const GREEN = '79, 210, 124';
let W = 0, H = 0, cols = 5, L = null, nodes = [], hover = null, bandY = null, visible = true, frame = 0;
const t0 = performance.now();

const clamp = (v, a = 0, b = 1) => Math.min(b, Math.max(a, v));
const ease = p => 1 - Math.pow(1 - p, 3);

function resize() {
  const dpr = Math.min(2, devicePixelRatio || 1);
  W = canvas.clientWidth; H = canvas.clientHeight;
  canvas.width = Math.round(W * dpr); canvas.height = Math.round(H * dpr);
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  const narrow = W < 460;
  cols = narrow ? 4 : 5;
  const padL = narrow ? 92 : 118, padT = 58, padB = 26, padR = 18;
  L = { narrow, padL, padT, cw: (W - padL - padR) / cols, rh: (H - padT - padB) / ROWS.length };
  nodes = [];
  for (let c = 0; c < cols; c++) for (let r = 0; r < ROWS.length; r++) {
    nodes.push({ c, r, tx: padL + L.cw * (c + .5), ty: padT + L.rh * (r + .5), sx: Math.random() * W, sy: Math.random() * H, ph: Math.random() * 6.3, delay: c * 110 + r * 70 });
  }
  if (reduce) draw(t0 + 1e5);
}

function draw(now) {
  const t = now - t0;
  const { narrow, padL, padT, cw, rh } = L;
  const settle = reduce ? 1 : clamp((t - 1500) / 900);
  const bandIn = reduce ? 1 : clamp((t - 2100) / 900);
  const cycled = reduce ? 1 : Math.floor(Math.max(0, t - 2100) / 3400) % ROWS.length;
  const row = hover ? hover.r : cycled;
  const targetY = padT + rh * (row + .5);
  bandY = bandY === null || reduce ? targetY : bandY + (targetY - bandY) * .09;

  ctx.clearRect(0, 0, W, H);
  ctx.textBaseline = 'middle';

  // Teams: column outlines.
  for (let c = 0; c < cols; c++) {
    const x = padL + cw * c + 7, w = cw - 14, y = padT - 34, h = rh * ROWS.length + 44;
    const hot = hover && hover.c === c;
    ctx.beginPath(); ctx.roundRect(x, y, w, h, 14);
    ctx.fillStyle = `rgba(233, 242, 236, ${(hot ? .06 : .02) * settle})`; ctx.fill();
    ctx.strokeStyle = `rgba(233, 242, 236, ${(hot ? .45 : .13) * settle})`; ctx.lineWidth = 1; ctx.stroke();
    ctx.fillStyle = `rgba(149, 170, 156, ${settle})`;
    ctx.font = '500 11px "Geist Mono", monospace'; ctx.textAlign = 'center';
    ctx.fillText('team ' + String.fromCharCode(65 + c), x + w / 2, y + 17);
  }

  // Chapter band across all teams.
  ctx.save();
  ctx.globalAlpha = bandIn;
  const bh = Math.min(rh * .7, 46);
  const grad = ctx.createLinearGradient(0, 0, W, 0);
  grad.addColorStop(0, `rgba(${GREEN}, .22)`); grad.addColorStop(1, `rgba(${GREEN}, .05)`);
  ctx.beginPath(); ctx.roundRect(10, bandY - bh / 2, W - 20, bh, bh / 2);
  ctx.fillStyle = grad; ctx.shadowColor = `rgba(${GREEN}, .5)`; ctx.shadowBlur = 24; ctx.fill();
  ctx.shadowBlur = 0; ctx.strokeStyle = `rgba(${GREEN}, .45)`; ctx.stroke();
  ctx.restore();

  // Discipline labels.
  ctx.textAlign = 'left';
  ROWS.forEach((name, r) => {
    const on = r === row && bandIn > .5;
    ctx.font = `${on ? 600 : 400} ${narrow ? 10.5 : 12}px "Geist Mono", monospace`;
    ctx.fillStyle = on ? '#b8f5c9' : `rgba(149, 170, 156, ${.35 + .65 * settle})`;
    ctx.fillText(name, 22, padT + rh * (r + .5));
  });

  // Node positions.
  const pos = nodes.map(n => {
    const p = reduce ? 1 : ease(clamp((t - n.delay) / 1500));
    const wob = reduce ? 0 : 1.6 * settle;
    return { n, x: n.sx + (n.tx - n.sx) * p + Math.sin(t / 900 + n.ph) * wob, y: n.sy + (n.ty - n.sy) * p + Math.cos(t / 1100 + n.ph) * wob };
  });

  // Team links (vertical), faint.
  ctx.strokeStyle = `rgba(233, 242, 236, ${.08 * settle})`; ctx.lineWidth = 1;
  for (let c = 0; c < cols; c++) {
    const col = pos.filter(p => p.n.c === c);
    ctx.beginPath(); col.forEach((p, i) => i ? ctx.lineTo(p.x, p.y) : ctx.moveTo(p.x, p.y)); ctx.stroke();
  }

  // Chapter links (horizontal), glowing, with a travelling pulse.
  const inRow = pos.filter(p => p.n.r === row);
  if (bandIn > 0) {
    ctx.save();
    ctx.globalAlpha = bandIn;
    ctx.strokeStyle = `rgba(${GREEN}, .85)`; ctx.lineWidth = 2; ctx.shadowColor = `rgb(${GREEN})`; ctx.shadowBlur = 12;
    ctx.beginPath(); inRow.forEach((p, i) => i ? ctx.lineTo(p.x, p.y) : ctx.moveTo(p.x, p.y)); ctx.stroke();
    if (!reduce) {
      const f = (t / 1700) % 1, a = inRow[0], b = inRow[inRow.length - 1];
      ctx.beginPath(); ctx.arc(a.x + (b.x - a.x) * f, a.y + (b.y - a.y) * f, 4, 0, 6.3);
      ctx.fillStyle = '#e6ffee'; ctx.shadowBlur = 20; ctx.fill();
    }
    ctx.restore();
  }

  // People.
  for (const p of pos) {
    const on = p.n.r === row && bandIn > .5;
    const hot = hover && hover.c === p.n.c && hover.r === p.n.r;
    ctx.beginPath(); ctx.arc(p.x, p.y, on ? 6.5 : 4.5, 0, 6.3);
    ctx.fillStyle = on ? `rgb(${GREEN})` : 'rgba(233, 242, 236, .62)';
    ctx.shadowColor = `rgb(${GREEN})`; ctx.shadowBlur = on ? 16 : 0; ctx.fill(); ctx.shadowBlur = 0;
    if (hot) { ctx.beginPath(); ctx.arc(p.x, p.y, 13, 0, 6.3); ctx.strokeStyle = '#b8f5c9'; ctx.lineWidth = 1.5; ctx.stroke(); }
  }

  // Tooltip for the hovered person.
  if (hover) {
    const p = pos.find(q => q.n.c === hover.c && q.n.r === hover.r);
    const label = `team ${String.fromCharCode(65 + hover.c)} · ${ROWS[hover.r].toLowerCase()}`;
    ctx.font = '500 12px "Geist Mono", monospace';
    const tw = ctx.measureText(label).width + 20;
    const x = clamp(p.x - tw / 2, 6, W - tw - 6), y = p.y - 44;
    ctx.beginPath(); ctx.roundRect(x, y, tw, 26, 8); ctx.fillStyle = 'rgba(5, 12, 8, .92)'; ctx.fill();
    ctx.strokeStyle = `rgba(${GREEN}, .6)`; ctx.lineWidth = 1; ctx.stroke();
    ctx.fillStyle = '#e9f2ec'; ctx.textAlign = 'left'; ctx.fillText(label, x + 10, y + 13);
  }
}

function loop(now) {
  frame = 0;
  if (!visible) return;
  draw(now);
  frame = requestAnimationFrame(loop);
}

canvas.addEventListener('pointermove', e => {
  const r = canvas.getBoundingClientRect(), x = e.clientX - r.left, y = e.clientY - r.top;
  let best = null, dist = 30;
  for (const n of nodes) { const d = Math.hypot(n.tx - x, n.ty - y); if (d < dist) { dist = d; best = n; } }
  hover = best && { c: best.c, r: best.r };
  canvas.style.cursor = best ? 'pointer' : '';
  if (reduce) draw(t0 + 1e5);
});
canvas.addEventListener('pointerleave', () => { hover = null; if (reduce) draw(t0 + 1e5); });

new IntersectionObserver(([e]) => {
  visible = e.isIntersecting;
  if (visible && !reduce && !frame) frame = requestAnimationFrame(loop);
}).observe(canvas);

addEventListener('resize', resize);
document.fonts.ready.then(() => { resize(); if (!reduce && !frame) frame = requestAnimationFrame(loop); });
resize();
