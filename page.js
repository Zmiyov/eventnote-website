// ===== Simple pages (FAQ, About): mobile nav, footer year, language choice =====

const toggle = document.querySelector('.nav-toggle');
const links = document.querySelector('.nav-links');
toggle.addEventListener('click', () => {
  const open = links.classList.toggle('open');
  toggle.setAttribute('aria-expanded', String(open));
});

document.getElementById('year').textContent = new Date().getFullYear();

// Highlight this page's language; the links remember the choice so the English page stops sending this visitor away
document.querySelectorAll('.lang-btn').forEach((btn) => {
  btn.classList.toggle('is-active', btn.dataset.lang === document.documentElement.lang);
  btn.addEventListener('click', () => {
    try {
      localStorage.setItem('lang', btn.dataset.lang);
    } catch (e) {
      /* ignore */
    }
  });
});
