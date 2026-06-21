document.addEventListener('DOMContentLoaded', () => {
  // Mobile Menu Toggle
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const navLinks = document.getElementById('nav-links');
  
  if (mobileMenuBtn && navLinks) {
    mobileMenuBtn.addEventListener('click', () => {
      navLinks.classList.toggle('active');
      mobileMenuBtn.textContent = navLinks.classList.contains('active') ? '✕' : '☰';
    });
  }

  // Dropdown toggle on mobile
  const dropdowns = document.querySelectorAll('.dropdown');
  dropdowns.forEach(dropdown => {
    dropdown.addEventListener('click', (e) => {
      if (window.innerWidth <= 768) {
        dropdown.classList.toggle('active');
      }
    });
  });

  // Sticky header scroll effect
  const header = document.querySelector('app-navbar header');
  if (header) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        header.style.boxShadow = '0 10px 15px rgba(0, 0, 0, 0.05)';
        header.style.height = '70px';
      } else {
        header.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.05)';
        header.style.height = '80px';
      }
    });
  }
});
