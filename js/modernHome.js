// Modern Home UI — active nav on scroll
(() => {
  const links = Array.from(document.querySelectorAll('[data-nav]'));
  const map = new Map(links.map(a => [a.getAttribute('href').replace('#',''), a]));

  const sections = Array.from(document.querySelectorAll('section[id]'))
    .filter(s => map.has(s.id));

  if (!('IntersectionObserver' in window) || sections.length === 0) return;

  const setActive = (id) => {
    links.forEach(a => a.classList.toggle('is-active', a.getAttribute('href') === `#${id}`));
  };

  const io = new IntersectionObserver((entries) => {
    // pick the most visible section
    const visible = entries
      .filter(e => e.isIntersecting)
      .sort((a,b) => b.intersectionRatio - a.intersectionRatio)[0];
    if (visible?.target?.id) setActive(visible.target.id);
  }, { root: null, threshold: [0.25, 0.35, 0.5, 0.65] });

  sections.forEach(s => io.observe(s));
})();
