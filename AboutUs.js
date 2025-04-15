// scripts.js
document.querySelector('.cta-btn').addEventListener('click', () => {
  alert('Thank you for your interest! We will get back to you shortly.');
});

const counters = document.querySelectorAll('.count');
let countersStarted = false;

function animateCounters() {
  counters.forEach(counter => {
    const updateCount = () => {
      const target = +counter.getAttribute('data-target');
      const count = +counter.innerText;
      const increment = Math.ceil(target / 200);

      if (count < target) {
        counter.innerText = count + increment;
        setTimeout(updateCount, 20);
      } else {
        counter.innerText = target;
      }
    };

    updateCount();
  });
}

// Scroll trigger using IntersectionObserver
const statsSection = document.querySelector('.stats-section');

const observer = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !countersStarted) {
        animateCounters();
        countersStarted = true;
        observer.unobserve(statsSection); // Stop observing after first run
      }
    });
  },
  {
    threshold: 0.4, // Trigger when 40% of section is visible
  }
);

observer.observe(statsSection);
