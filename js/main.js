// Theme toggle (persists via localStorage would be nice, but we keep it
// simple/in-memory-safe for static hosting; falls back to light on reload).
(function () {
  const root = document.documentElement;
  const btn = document.getElementById('theme-toggle');
  const stored = window.localStorage ? localStorage.getItem('theme') : null;
  if (stored) {
    root.setAttribute('data-theme', stored);
    btn.textContent = stored === 'dark' ? '☀ light' : '☾ dark';
  }
  btn.addEventListener('click', () => {
    const next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    root.setAttribute('data-theme', next);
    btn.textContent = next === 'dark' ? '☀ light' : '☾ dark';
    try { localStorage.setItem('theme', next); } catch (e) {}
  });
})();

// Highlight nav link for section currently in view
(function () {
  const links = document.querySelectorAll('.sidebar nav a');
  const sections = Array.from(links).map(a => document.querySelector(a.getAttribute('href')));

  function onScroll() {
    let currentIndex = 0;
    sections.forEach((sec, i) => {
      if (sec && sec.getBoundingClientRect().top - 120 <= 0) currentIndex = i;
    });
    links.forEach((a, i) => a.classList.toggle('active', i === currentIndex));
  }
  document.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
})();

// Footer year
document.getElementById('year').textContent = new Date().getFullYear();
