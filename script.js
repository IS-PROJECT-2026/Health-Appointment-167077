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
    
    // Load doctors from Firebase
    loadDoctors();
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
// Load and Display Doctors
// ===================================

function loadDoctors() {
    console.log('Loading doctors from Firebase...');
    
    const doctorsContainer = document.getElementById('doctors-container');
    const loadingElement = document.getElementById('doctors-loading');
    const emptyElement = document.getElementById('doctors-empty');
    
    // Show loading state
    loadingElement.classList.remove('hidden');
    doctorsContainer.classList.add('hidden');
    emptyElement.classList.add('hidden');
    
    // Reference to doctors in Firebase (at root level)
    const doctorsRef = database.ref('/');
    
    doctorsRef.once('value')
        .then((snapshot) => {
            const doctorsData = snapshot.val();
            
            // Hide loading
            loadingElement.classList.add('hidden');
            
            if (doctorsData && typeof doctorsData === 'object') {
                const doctorKeys = Object.keys(doctorsData);
                
                if (doctorKeys.length > 0) {
                    // Show container
                    doctorsContainer.classList.remove('hidden');
                    
                    // Clear existing cards
                    doctorsContainer.innerHTML = '';
                    
                    // Create card for each doctor
                    doctorKeys.forEach((key) => {
                        const doctor = doctorsData[key];
                        if (doctor && doctor.name) {
                            const card = createDoctorCard(doctor);
                            doctorsContainer.appendChild(card);
                        }
                    });
                    
                    console.log(`✅ Successfully loaded ${doctorKeys.length} doctors`);
                } else {
                    // Show empty state
                    emptyElement.classList.remove('hidden');
                    console.log('No doctors found in database');
                }
            } else {
                // Show empty state
                emptyElement.classList.remove('hidden');
                console.log('Invalid data format from Firebase');
            }
        })
        .catch((error) => {
            // Hide loading
            loadingElement.classList.add('hidden');
            
            // Show error message
            doctorsContainer.innerHTML = `
                <div class="error-state">
                    <p>❌ Error loading doctors: ${error.message}</p>
                    <button onclick="loadDoctors()" class="btn-card">Retry</button>
                </div>
            `;
            doctorsContainer.classList.remove('hidden');
            
            console.error('Error loading doctors:', error);
        });
}

// ===================================
// Create Doctor Card Element
// ===================================

function createDoctorCard(doctor) {
    const card = document.createElement('div');
    card.className = 'doctor-card';
    card.setAttribute('data-doctor-id', doctor.id);
    
    // Build card HTML
    card.innerHTML = `
        <div class="doctor-card__image">
            <img src="${doctor.photo || 'https://via.placeholder.com/300x280?text=Doctor'}" 
                 alt="${doctor.name}"
                 onerror="this.src='https://via.placeholder.com/300x280?text=Doctor'">
            <span class="doctor-card__badge ${doctor.available ? '' : 'unavailable'}">
                ${doctor.available ? 'Available' : 'Unavailable'}
            </span>
        </div>
        <div class="doctor-card__content">
            <h3 class="doctor-card__name">${doctor.name}</h3>
            <p class="doctor-card__specialty">${doctor.specialty}</p>
            <div class="doctor-card__info">
                <div class="doctor-card__info-item">
                    <span class="doctor-card__icon">⭐</span>
                    <span>${doctor.rating || 'N/A'} Rating</span>
                </div>
                <div class="doctor-card__info-item">
                    <span class="doctor-card__icon">👥</span>
                    <span>${formatNumber(doctor.patients)}+ Patients</span>
                </div>
                <div class="doctor-card__info-item">
                    <span class="doctor-card__icon">💼</span>
                    <span>${doctor.experience || 'N/A'}</span>
                </div>
            </div>
            <div class="doctor-card__footer">
                <span class="doctor-card__fees">${doctor.fees || 'Contact'}</span>
                <button class="btn-card" onclick="viewDoctorProfile('${doctor.id}')">
                    View Profile
                </button>
            </div>
        </div>
    `;
    
    return card;
}

// ===================================
// Helper Functions
// ===================================

function formatNumber(num) {
    if (!num) return '0';
    if (num >= 1000) {
        return (num / 1000).toFixed(1) + 'k';
    }
    return num.toString();
}

function viewDoctorProfile(doctorId) {
    console.log('View profile for doctor:', doctorId);
    // This will be implemented in Issue #10 (Doctor Modal)
    alert(`Doctor profile modal coming in Issue #10!\nDoctor ID: ${doctorId}`);
}
