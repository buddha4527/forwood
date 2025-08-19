// Hamburger menu toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('nav ul.nav-links');

if (hamburger && navLinks) {
  hamburger.addEventListener('click', () => {
    const expanded = hamburger.getAttribute('aria-expanded') === 'true' || false;
    hamburger.setAttribute('aria-expanded', !expanded);
    navLinks.classList.toggle('show');
  });

  // Smooth scroll and close menu on nav link click
  document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function(e) {
      const id = this.getAttribute('href');
      if (id.startsWith('#')) {
        e.preventDefault();
        navLinks.classList.remove('show'); // Close menu
        hamburger.setAttribute('aria-expanded', false);
        document.querySelector(id).scrollIntoView({behavior: 'smooth'});
      }
    });
  });
}

// Contact form handler
const inquiryForm = document.querySelector('.inquiry-form');
if (inquiryForm) {
  inquiryForm.addEventListener('submit', function(e) {
    e.preventDefault();
    alert("Thank you for your inquiry! We'll get back to you soon.");
    this.reset();
  });
}
