// Mobile menu toggle
const toggleBtn = document.getElementById('mobileToggle');
const navMenu = document.getElementById('navMenu');
if(toggleBtn && navMenu){
  toggleBtn.addEventListener('click', ()=> navMenu.classList.toggle('active'));
  document.querySelectorAll('.nav-menu a').forEach(link => link.addEventListener('click', ()=> navMenu.classList.remove('active')));
}

// Contact form toggle to WhatsApp
const contactForm = document.getElementById('contactForm');
if(contactForm){
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
    if(target){ e.preventDefault(); target.scrollIntoView({ behavior: 'smooth' }); }
  });
});