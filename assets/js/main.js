// Mobile menu toggle - WORKS ON ALL PAGES
document.addEventListener('DOMContentLoaded', function() {
  const toggleBtn = document.getElementById('mobileToggle');
  const navMenu = document.getElementById('navMenu');
  
  if (toggleBtn && navMenu) {
    // Toggle menu when hamburger is clicked
    toggleBtn.addEventListener('click', function(e) {
      e.stopPropagation();
      navMenu.classList.toggle('active');
      // Change icon when open/closed
      const icon = toggleBtn.querySelector('i');
      if (navMenu.classList.contains('active')) {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-times');
      } else {
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
      }
    });
    
    // Close menu when a link is clicked
    const navLinks = navMenu.querySelectorAll('a');
    navLinks.forEach(link => {
      link.addEventListener('click', function() {
        navMenu.classList.remove('active');
        const icon = toggleBtn.querySelector('i');
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
      });
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
      if (!navMenu.contains(event.target) && !toggleBtn.contains(event.target)) {
        navMenu.classList.remove('active');
        const icon = toggleBtn.querySelector('i');
        if (icon) {
          icon.classList.remove('fa-times');
          icon.classList.add('fa-bars');
        }
      }
    });
  }
});

// Contact form toggle to WhatsApp
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('contactName').value;
    const phone = document.getElementById('contactPhone').value;
    const email = document.getElementById('contactEmail').value;
    const msg = document.getElementById('contactMsg').value;
    const waMessage = `Name: ${name}%0APhone: ${phone}%0AEmail: ${email}%0AMessage: ${msg}`;
    window.open(`https://wa.me/254706572762?text=${waMessage}`, '_blank');
    contactForm.reset();
    alert('Thank you! We will respond via WhatsApp shortly.');
  });
}

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) { 
      e.preventDefault(); 
      target.scrollIntoView({ behavior: 'smooth' }); 
    }
  });
});