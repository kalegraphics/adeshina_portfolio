// Simple interactivity (you can expand later)

// Example: Show an alert when clicking "See More"
document.querySelectorAll(".skill a").forEach(button => {
  button.addEventListener("click", (event) => {
    console.log(`Navigating to: ${event.target.getAttribute("href")}`);
  });
});

// Mobile nav toggle
const toggleBtn = document.querySelector('.menu-toggle');
const navLinks = document.getElementById('primary-nav');

if (toggleBtn && navLinks) {
  toggleBtn.addEventListener('click', () => {
    const opened = navLinks.classList.toggle('open');
    toggleBtn.classList.toggle('active', opened);
    toggleBtn.setAttribute('aria-expanded', String(opened));
  });

  // Close menu when clicking outside
  document.addEventListener('click', (e) => {
    if (!e.target.closest('.navbar')) {
      navLinks.classList.remove('open');
      toggleBtn.classList.remove('active');
      toggleBtn.setAttribute('aria-expanded', 'false');
    }
  });

  // Reset on resize to desktop
  window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
      navLinks.classList.remove('open');
      toggleBtn.classList.remove('active');
      toggleBtn.setAttribute('aria-expanded', 'false');
    }
  });
}

