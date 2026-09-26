const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;

const io = new IntersectionObserver(entries => {
  for (const e of entries) {
    if (!e.isIntersecting) continue;
    e.target.classList.add('is-in');
    io.unobserve(e.target);
  }
}, { rootMargin: '0px 0px -10% 0px' });
document.querySelectorAll('[data-reveal]').forEach(el => io.observe(el));

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

const bar = document.querySelector('.progress');
const fill = document.querySelector('[data-progress]');
const current = document.querySelector('[data-current]');
const toc = document.querySelector('.toc');
const tocLinks = [...toc.querySelectorAll('a')];
const chapters = [...document.querySelectorAll('[data-chapter]')];
const drifts = [...document.querySelectorAll('[data-drift]')];
const cover = document.querySelector('.cover');
let active = '';

const onScroll = () => {
  const vh = innerHeight;
  const max = document.documentElement.scrollHeight - vh;
  fill.style.setProperty('--p', (scrollY / max).toFixed(4));

  const past = cover.getBoundingClientRect().bottom < 0;
  bar.classList.toggle('show', past);
  toc.classList.toggle('show', past);

  let now = chapters[0];
  for (const c of chapters) if (c.getBoundingClientRect().top < vh * .4) now = c;
  if (now.dataset.chapter !== active) {
    active = now.dataset.chapter;
    current.textContent = active;
    tocLinks.forEach(a => a.classList.toggle('on', '#' + now.id === a.getAttribute('href')));
  }

  if (reduce) return;
  if (statement) {
    const r = statement.getBoundingClientRect();
    const p = (vh * .85 - r.top) / (vh * .5 + r.height * .5);
    const lit = Math.round(Math.min(1, Math.max(0, p)) * words.length);
    words.forEach((w, i) => w.classList.toggle('lit', i < lit));
  }
  for (const d of drifts) {
    const r = d.getBoundingClientRect();
    if (r.bottom < -200 || r.top > vh + 200) continue;
    d.style.setProperty('--drift', ((r.top - vh / 2) * -.12).toFixed(1) + 'px');
  }
};
addEventListener('scroll', onScroll, { passive: true });
addEventListener('resize', onScroll);
onScroll();

document.querySelector('[data-print]')?.addEventListener('click', () => print());
