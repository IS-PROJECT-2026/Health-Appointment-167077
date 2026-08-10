// ===================================
// Health Appointment Booking System
// Main JavaScript File
// ===================================

console.log('Health Appointment System Initialized');

// ===================================
// Firebase Configuration
// ===================================

/**
 * Doctor Data Schema
 * 
 * Doctors are stored in Firebase Realtime Database at root level as an object.
 * Each doctor has a unique key (doc1, doc2, etc.) with the following structure:
 * 
 * {
 *   id: String          - Unique identifier (e.g., "doc1")
 *   name: String        - Full name with title (e.g., "Dr. Sarah Johnson")
 *   specialty: String   - Medical specialization (e.g., "Cardiologist")
 *   experience: String  - Years of practice (e.g., "15 years")
 *   education: String   - Educational background
 *   rating: Number      - Patient rating (0-5 scale)
 *   patients: Number    - Total patients treated
 *   description: String - Detailed bio and expertise
 *   photo: String       - Profile photo URL
 *   available: Boolean  - Current availability status
 *   fees: String        - Consultation fee (e.g., "$150")
 *   languages: String   - Languages spoken (comma-separated)
 * }
 */

// Firebase configuration object
const firebaseConfig = {
    apiKey: "AIzaSyC4oPI9yt5ILmfPw0tY2XFmLHvaJQq7rFg",
    authDomain: "health-appointment-syste-cc503.firebaseapp.com",
    databaseURL: "https://health-appointment-syste-cc503-default-rtdb.firebaseio.com/",
    projectId: "health-appointment-syste-cc503",
    storageBucket: "health-appointment-syste-cc503.firebasestorage.app",
    messagingSenderId: "167855005777",
    appId: "1:167855005777:web:14b0a5be75884c18a79870"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const database = firebase.database();

console.log('Firebase initialized successfully!');

// ===================================
// Wait for DOM to load
// ===================================

document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM fully loaded and parsed');
    
    // Initialize navigation
    initNavigation();
    
    // Test Firebase connection
    testFirebaseConnection();
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

// ===================================
// Firebase Connection Test
// ===================================

function testFirebaseConnection() {
    console.log('Testing Firebase connection...');
    console.log('Database URL:', firebaseConfig.databaseURL);
    
    // Reference to root (where doctors are stored)
    const doctorsRef = database.ref('/');
    console.log('Fetching doctors from root...');
    
    doctorsRef.once('value')
        .then((snapshot) => {
            const doctorsData = snapshot.val();
            console.log('Doctors data:', doctorsData);
            console.log('Data type:', typeof doctorsData);
            
            if (doctorsData && typeof doctorsData === 'object') {
                // Get all doctor keys (doc1, doc2, etc.)
                const doctorKeys = Object.keys(doctorsData);
                const doctorCount = doctorKeys.length;
                
                console.log(`✅ Firebase connection successful!`);
                console.log(`📊 Found ${doctorCount} doctors in database`);
                console.log('Doctor IDs:', doctorKeys);
                
                // Log each doctor's details
                doctorKeys.forEach((key) => {
                    const doctor = doctorsData[key];
                    if (doctor && doctor.name) {
                        console.log(`${key}: ${doctor.name} - ${doctor.specialty}`);
                    }
                });
                
                console.log('✅ All doctors loaded successfully!');
            } else {
                console.log('⚠️ Firebase connected but doctors data is not in expected format');
                console.log('Data received:', doctorsData);
            }
        })
        .catch((error) => {
            console.error('❌ Firebase connection error:', error);
            console.error('Error code:', error.code);
            console.error('Error message:', error.message);
        });
}
