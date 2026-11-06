// ===== Simple pages (About): mobile nav, footer year, language choice =====

const toggle = document.querySelector('.nav-toggle');
const links = document.querySelector('.nav-links');
toggle.addEventListener('click', () => {
  const open = links.classList.toggle('open');
  toggle.setAttribute('aria-expanded', String(open));
});

document.getElementById('year').textContent = new Date().getFullYear();

// Language links remember the choice so the English page stops sending this visitor away
document.querySelectorAll('.lang-btn').forEach((btn) =>
  btn.addEventListener('click', () => {
    try {
      localStorage.setItem('lang', btn.dataset.lang);
    } catch (e) {
      /* ignore */
    }
  })
);
