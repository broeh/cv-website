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
};
addEventListener('scroll', onScroll, { passive: true });
addEventListener('resize', onScroll);
onScroll();

document.querySelector('[data-print]')?.addEventListener('click', () => print());
