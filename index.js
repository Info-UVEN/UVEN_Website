const elementsToAnimate = document.querySelectorAll(
  '.sec1, .rightsec, .sub, .btn, .subsec2, .subsec2 h1, .col'
);

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      } else {
        entry.target.classList.remove('visible'); // remove if scrolled out
      }
    });
  },
  { threshold: 0.3 }
);

elementsToAnimate.forEach(el => observer.observe(el));
