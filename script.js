// ===================================
// Health Appointment Booking System
// Main JavaScript File
// ===================================

console.log('Health Appointment System Initialized');

// Wait for DOM to load
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM fully loaded and parsed');
    
    // Initialize navigation
    initNavigation();
});

// ===================================
// Navigation Functions
// ===================================

function initNavigation() {
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    const navClose = document.getElementById('nav-close');
    const navLinks = document.querySelectorAll('.nav__link');

    // Show mobile menu
    if (navToggle) {
        navToggle.addEventListener('click', () => {
            navMenu.classList.add('show-menu');
        });
    }

    // Hide mobile menu
    if (navClose) {
        navClose.addEventListener('click', () => {
            navMenu.classList.remove('show-menu');
        });
    }

    // Close menu when clicking nav links
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('show-menu');
        });
    });

    // Active link on scroll
    window.addEventListener('scroll', scrollActive);
    
    console.log('Navigation initialized successfully');
}

// ===================================
// Scroll Active Link
// ===================================

function scrollActive() {
    const scrollY = window.pageYOffset;
    const sections = document.querySelectorAll('section[id]');
    
    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 100;
        const sectionId = current.getAttribute('id');
        const navLink = document.querySelector(`.nav__link[href*=${sectionId}]`);
        
        if (navLink) {
            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                navLink.classList.add('active-link');
            } else {
                navLink.classList.remove('active-link');
            }
        }
    });
}
