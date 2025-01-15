// scripts.js

// Burger Menu Toggle (Mobile)
const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');

burger.addEventListener('click', () => {
  navLinks.classList.toggle('active');

  // Animation for burger lines
  burger.classList.toggle('toggle');
});

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();

    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });

    // Close the nav menu if it's open (on mobile)
    if (navLinks.classList.contains('active')) {
      navLinks.classList.remove('active');
      burger.classList.remove('toggle');
    }
  });
});

// Alert on Form Submit
document.querySelector('form').addEventListener('submit', function(e) {
  alert('Cảm ơn bạn đã liên hệ! Tôi sẽ trả lời bạn sớm nhất có thể.');
});
