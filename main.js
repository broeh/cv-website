const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;

const io = new IntersectionObserver(entries => {
  for (const e of entries) {
    if (!e.isIntersecting) continue;
    e.target.classList.add('is-in');
    io.unobserve(e.target);
  }
}, { rootMargin: '0px 0px -12% 0px' });
document.querySelectorAll('[data-reveal], .clover-center').forEach(el => io.observe(el));

const countIO = new IntersectionObserver(entries => {
  for (const e of entries) {
    if (!e.isIntersecting) continue;
    countIO.unobserve(e.target);
    const el = e.target, to = +el.dataset.count, from = +(el.dataset.from || 0);
    if (reduce) continue;
    const t0 = performance.now(), dur = 1400;
    const tick = now => {
      const p = Math.min(1, (now - t0) / dur), eased = 1 - Math.pow(1 - p, 4);
      el.textContent = Math.round(from + (to - from) * eased);
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }
}, { threshold: .6 });
document.querySelectorAll('[data-count]').forEach(el => countIO.observe(el));

// Split the statement into words that light up while it scrolls past.
const statement = document.querySelector('[data-words]');
const words = [];
if (statement) {
  const text = statement.textContent.trim();
  const accentFrom = text.indexOf('Omdat');
  statement.textContent = '';
  let pos = 0;
  for (const w of text.split(' ')) {
    const span = document.createElement('span');
    span.className = 'word' + (pos >= accentFrom ? ' accent' : '');
    span.textContent = w;
    statement.append(span, ' ');
    words.push(span);
    pos += w.length + 1;
  }
}

const topbar = document.querySelector('[data-topbar]');
const hero = document.querySelector('.hero');
const stem = document.querySelector('[data-stem]');
const stemWrap = stem && stem.closest('.stem-wrap');
const onScroll = () => {
  topbar.classList.toggle('scrolled', scrollY > hero.offsetHeight - 90);
  if (stem && !reduce) {
    const r = stemWrap.getBoundingClientRect();
    const p = Math.min(1, Math.max(0, (innerHeight * .7 - r.top) / r.height));
    stem.style.setProperty('--p', p.toFixed(3));
  }
  if (statement && !reduce) {
    const r = statement.getBoundingClientRect();
    const p = (innerHeight * .85 - r.top) / (innerHeight * .5 + r.height * .5);
    const lit = Math.round(Math.min(1, Math.max(0, p)) * words.length);
    words.forEach((w, i) => w.classList.toggle('lit', i < lit));
  }
};
addEventListener('scroll', onScroll, { passive: true });
addEventListener('resize', onScroll);
onScroll();

document.querySelector('[data-print]')?.addEventListener('click', () => print());
