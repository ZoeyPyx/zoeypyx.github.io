// Lightweight script for illustration project sub-pages: theme toggle only.
(function () {
  const root = document.documentElement;
  const btn = document.getElementById('theme-toggle');
  if (!btn) return;
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
