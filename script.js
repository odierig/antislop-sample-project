// ===== Hullwater Interactive Features =====
// Smooth scroll reveal, FAQ accordion, and animated counters for a premium feel ✨

document.addEventListener('DOMContentLoaded', () => {
  // Scroll reveal animation
  const revealElements = document.querySelectorAll('.reveal');

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  revealElements.forEach((el) => revealObserver.observe(el));

  // FAQ accordion
  document.querySelectorAll('.faq-q').forEach((button) => {
    button.addEventListener('click', () => {
      const item = button.parentElement;
      const isOpen = item.classList.contains('open');
      document.querySelectorAll('.faq-item').forEach((i) => i.classList.remove('open'));
      if (!isOpen) item.classList.add('open');
    });
  });

  // Animated counter for stats
  const counters = document.querySelectorAll('.stat-num[data-target]');

  const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const target = parseInt(el.dataset.target, 10);
        let current = 0;
        const step = Math.max(1, Math.ceil(target / 40));
        const tick = setInterval(() => {
          current += step;
          if (current >= target) {
            current = target;
            clearInterval(tick);
          }
          el.textContent = current;
        }, 30);
        counterObserver.unobserve(el);
      }
    });
  }, { threshold: 0.5 });

  counters.forEach((counter) => counterObserver.observe(counter));
});
