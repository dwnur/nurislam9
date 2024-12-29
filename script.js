// Select menu toggle button and nav links
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

// Add click event listener to the toggle button
menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});
