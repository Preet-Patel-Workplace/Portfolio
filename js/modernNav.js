// Modern pages: set active nav based on body[data-page]
(() => {
  const page = document.body.getAttribute('data-page');
  if (!page) return;

  const links = document.querySelectorAll('[data-nav]');
  links.forEach(a => {
    a.classList.toggle('is-active', a.getAttribute('data-nav') === page);
  });

  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();
})();
