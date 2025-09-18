  // Navbar scroll effect
  window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.nav-bar');
    const topbar = document.querySelector('.top-bar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
        if (topbar) topbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
        if (topbar) topbar.classList.remove('scrolled');
    }
});

// Hamburger menu toggle
const hamburger = document.getElementById('hamburger');
const navMenu = document.querySelector('.nav-menu');


hamburger.addEventListener('click', function() {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', function() {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Close mobile menu when clicking outside
document.addEventListener('click', function(event) {
    if (!hamburger.contains(event.target) && !navMenu.contains(event.target)) {
        hamburger.classList.remove('active');
            navMenu.classList.remove('active');
    }
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

//for testimonials 

document.addEventListener('DOMContentLoaded', () => {

    const carousel = document.getElementById('.testimonial-carousel');
    const wrapper = carousel.querySelector('.carousel-wrapper');
    const slides = Array.from(carousel.querySelectorAll('.carousel-slide'));
    const nextButton = carousel.querySelector('.next-button');
    const prevButton = carousel.querySelector('.prevButton');
    const dotsContainer = carousel.querySelector('.carousel-dots');



});