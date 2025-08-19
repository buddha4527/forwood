// Hamburger menu toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('nav ul.nav-links');

hamburger.addEventListener('click', () => {
  const expanded = hamburger.getAttribute('aria-expanded') === 'true' || false;
  hamburger.setAttribute('aria-expanded', !expanded);
  navLinks.classList.toggle('show');
});

// Smooth scroll for nav links (existing)
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', function(e) {
    const id = this.getAttribute('href');
    if (id.startsWith('#')) {
      e.preventDefault();
      navLinks.classList.remove('show'); // Close menu on click
      hamburger.setAttribute('aria-expanded', false);
      document.querySelector(id).scrollIntoView({behavior: 'smooth'});
    }
  });
});
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', function(e) {
    const id = this.getAttribute('href');
    if (id.startsWith('#')) {
      e.preventDefault();
      document.querySelector(id).scrollIntoView({behavior: 'smooth'});
    }
  });
});

// Simple (no back-end) contact form handler
document.querySelector('.inquiry-form').addEventListener('submit', function(e) {
  e.preventDefault();
  alert("Thank you for your inquiry! We'll get back to you soon.");
  this.reset();
});
