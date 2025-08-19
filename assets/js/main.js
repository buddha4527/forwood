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
