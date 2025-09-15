// neovaq website enhancements
//
// This script enables smooth scrolling for anchor links and triggers
// animations on elements when they enter the viewport. It uses the
// Intersection Observer API which is supported by modern browsers.

document.addEventListener('DOMContentLoaded', () => {
  // Enable smooth scrolling for in‑page anchor links
  document.documentElement.style.scrollBehavior = 'smooth';

  // Collect all elements that should animate on scroll. These elements
  // start out hidden via CSS (opacity and translateY). When they
  // intersect the viewport, we add the 'in‑view' class to start the
  // transition defined in CSS.
  const animatedItems = document.querySelectorAll('.feature-item, .product-item, .usage-item, .cert-item');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
      }
    });
  }, {
    threshold: 0.2
  });

  animatedItems.forEach(item => {
    observer.observe(item);
  });
});