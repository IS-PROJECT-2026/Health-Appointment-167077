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
    console.log('Opening profile for doctor:', doctorId);
    
    // Fetch doctor data from Firebase
    const doctorRef = database.ref(`/${doctorId}`);
    
    doctorRef.once('value')
        .then((snapshot) => {
            const doctor = snapshot.val();
            if (doctor) {
                showDoctorModal(doctor);
            } else {
                alert('Doctor not found');
            }
        })
        .catch((error) => {
            console.error('Error fetching doctor:', error);
            alert('Error loading doctor details');
        });
}

// ===================================
// Doctor Modal Functions
// ===================================

function showDoctorModal(doctor) {
    const modalOverlay = document.getElementById('doctor-modal-overlay');
    const modalContent = document.getElementById('modal-content');
    
    // Build modal content
    modalContent.innerHTML = `
        <div class="modal__header">
            <img src="${doctor.photo || 'https://via.placeholder.com/250?text=Doctor'}" 
                 alt="${doctor.name}"
                 class="modal__doctor-image"
                 onerror="this.src='https://via.placeholder.com/250?text=Doctor'">
            <div class="modal__doctor-info">
                <h2 class="modal__doctor-name">${doctor.name}</h2>
                <p class="modal__doctor-specialty">${doctor.specialty}</p>
                <div class="modal__stats">
                    <div class="modal__stat">
                        <span class="modal__stat-icon">⭐</span>
                        <span class="modal__stat-value">${doctor.rating || 'N/A'}</span>
                        <span class="modal__stat-label">Rating</span>
                    </div>
                    <div class="modal__stat">
                        <span class="modal__stat-icon">👥</span>
                        <span class="modal__stat-value">${formatNumber(doctor.patients)}+</span>
                        <span class="modal__stat-label">Patients</span>
                    </div>
                    <div class="modal__stat">
                        <span class="modal__stat-icon">💼</span>
                        <span class="modal__stat-value">${doctor.experience}</span>
                        <span class="modal__stat-label">Experience</span>
                    </div>
                    <div class="modal__stat">
                        <span class="modal__stat-icon">💰</span>
                        <span class="modal__stat-value">${doctor.fees}</span>
                        <span class="modal__stat-label">Consultation</span>
                    </div>
                </div>
            </div>
        </div>

        <div class="modal__section">
            <h3 class="modal__section-title">
                <span class="modal__section-icon">📋</span>
                About
            </h3>
            <p class="modal__description">${doctor.description || 'No description available.'}</p>
        </div>

        <div class="modal__section">
            <h3 class="modal__section-title">
                <span class="modal__section-icon">ℹ️</span>
                Details
            </h3>
            <div class="modal__details">
                <div class="modal__detail-item">
                    <span class="modal__detail-icon">🎓</span>
                    <div class="modal__detail-content">
                        <div class="modal__detail-label">Education</div>
                        <div class="modal__detail-value">${doctor.education || 'Not specified'}</div>
                    </div>
                </div>
                <div class="modal__detail-item">
                    <span class="modal__detail-icon">🗣️</span>
                    <div class="modal__detail-content">
                        <div class="modal__detail-label">Languages</div>
                        <div class="modal__detail-value">${doctor.languages || 'Not specified'}</div>
                    </div>
                </div>
                <div class="modal__detail-item">
                    <span class="modal__detail-icon">${doctor.available ? '✅' : '❌'}</span>
                    <div class="modal__detail-content">
                        <div class="modal__detail-label">Availability</div>
                        <div class="modal__detail-value">${doctor.available ? 'Currently Available' : 'Not Available'}</div>
                    </div>
                </div>
                <div class="modal__detail-item">
                    <span class="modal__detail-icon">🆔</span>
                    <div class="modal__detail-content">
                        <div class="modal__detail-label">Doctor ID</div>
                        <div class="modal__detail-value">${doctor.id}</div>
                    </div>
                </div>
            </div>
        </div>

        <div class="modal__actions">
            <button class="btn btn-primary" onclick="bookAppointment('${doctor.id}')">
                📅 Book Appointment
            </button>
            <button class="btn btn-outline" onclick="closeModal()">
                Close
            </button>
        </div>
    `;
    
    // Show modal with animation
    modalOverlay.classList.add('active');
    document.body.style.overflow = 'hidden'; // Prevent background scroll
}

function closeModal() {
    const modalOverlay = document.getElementById('doctor-modal-overlay');
    modalOverlay.classList.remove('active');
    document.body.style.overflow = ''; // Restore scroll
}

function bookAppointment(doctorId) {
    console.log('Opening booking form for doctor:', doctorId);
    
    // Close doctor modal first
    closeModal();
    
    // Fetch doctor data to show in booking form
    const doctorRef = database.ref(`/${doctorId}`);
    
    doctorRef.once('value')
        .then((snapshot) => {
            const doctor = snapshot.val();
            if (doctor) {
                showBookingModal(doctor);
            } else {
                alert('Doctor not found');
            }
        })
        .catch((error) => {
            console.error('Error fetching doctor for booking:', error);
            alert('Error loading booking form');
        });
}

// ===================================
// Booking Form Functions
// ===================================

function showBookingModal(doctor) {
    const bookingModalOverlay = document.getElementById('booking-modal-overlay');
    const bookingDoctorName = document.getElementById('booking-doctor-name');
    const bookingDoctorId = document.getElementById('booking-doctor-id');
    const appointmentDate = document.getElementById('appointment-date');
    
    // Set doctor information
    bookingDoctorName.textContent = `Booking appointment with ${doctor.name} - ${doctor.specialty}`;
    bookingDoctorId.value = doctor.id;
    
    // Set minimum date to today
    const today = new Date().toISOString().split('T')[0];
    appointmentDate.setAttribute('min', today);
    
    // Show modal
    bookingModalOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeBookingModal() {
    const bookingModalOverlay = document.getElementById('booking-modal-overlay');
    const bookingForm = document.getElementById('booking-form');
    
    bookingModalOverlay.classList.remove('active');
    document.body.style.overflow = '';
    
    // Reset form
    bookingForm.reset();
    clearFormErrors();
}

function clearFormErrors() {
    const errorElements = document.querySelectorAll('.form-error');
    errorElements.forEach(el => el.textContent = '');
    
    const inputElements = document.querySelectorAll('.form-input');
    inputElements.forEach(el => el.classList.remove('error'));
}

// ===================================
// Form Validation Functions
// ===================================

function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function validatePhone(phone) {
    // Remove all non-digit characters
    const cleaned = phone.replace(/\D/g, '');
    // Check if it's 10 digits
    return cleaned.length === 10;
}

function validateDate(dateString) {
    const selectedDate = new Date(dateString);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    return selectedDate >= today;
}

function showError(fieldId, message) {
    const errorElement = document.getElementById(`${fieldId}-error`);
    const inputElement = document.getElementById(fieldId);
    
    if (errorElement) {
        errorElement.textContent = message;
    }
    if (inputElement) {
        inputElement.classList.add('error');
    }
}

function clearError(fieldId) {
    const errorElement = document.getElementById(`${fieldId}-error`);
    const inputElement = document.getElementById(fieldId);
    
    if (errorElement) {
        errorElement.textContent = '';
    }
    if (inputElement) {
        inputElement.classList.remove('error');
    }
}

function validateBookingForm() {
    let isValid = true;
    
    // Clear all previous errors
    clearFormErrors();
    
    // Get form values
    const patientName = document.getElementById('patient-name').value.trim();
    const patientEmail = document.getElementById('patient-email').value.trim();
    const patientPhone = document.getElementById('patient-phone').value.trim();
    const appointmentDate = document.getElementById('appointment-date').value;
    const appointmentTime = document.getElementById('appointment-time').value;
    const appointmentReason = document.getElementById('appointment-reason').value.trim();
    
    // Validate patient name
    if (!patientName) {
        showError('patient-name', 'Please enter your full name');
        isValid = false;
    } else if (patientName.length < 2) {
        showError('patient-name', 'Name must be at least 2 characters long');
        isValid = false;
    }
    
    // Validate email
    if (!patientEmail) {
        showError('patient-email', 'Please enter your email address');
        isValid = false;
    } else if (!validateEmail(patientEmail)) {
        showError('patient-email', 'Please enter a valid email address');
        isValid = false;
    }
    
    // Validate phone
    if (!patientPhone) {
        showError('patient-phone', 'Please enter your phone number');
        isValid = false;
    } else if (!validatePhone(patientPhone)) {
        showError('patient-phone', 'Please enter a valid 10-digit phone number');
        isValid = false;
    }
    
    // Validate date
    if (!appointmentDate) {
        showError('appointment-date', 'Please select an appointment date');
        isValid = false;
    } else if (!validateDate(appointmentDate)) {
        showError('appointment-date', 'Please select a future date');
        isValid = false;
    }
    
    // Validate time
    if (!appointmentTime) {
        showError('appointment-time', 'Please select an appointment time');
        isValid = false;
    }
    
    // Validate reason
    if (!appointmentReason) {
        showError('appointment-reason', 'Please provide a reason for your visit');
        isValid = false;
    } else if (appointmentReason.length < 10) {
        showError('appointment-reason', 'Please provide more details (at least 10 characters)');
        isValid = false;
    }
    
    return isValid;
}

// ===================================
// Real-time Validation (on blur)
// ===================================

function setupFieldValidation() {
    // Name validation
    document.getElementById('patient-name').addEventListener('blur', function() {
        const value = this.value.trim();
        if (value && value.length >= 2) {
            clearError('patient-name');
        }
    });
    
    // Email validation
    document.getElementById('patient-email').addEventListener('blur', function() {
        const value = this.value.trim();
        if (value && validateEmail(value)) {
            clearError('patient-email');
        }
    });
    
    // Phone validation
    document.getElementById('patient-phone').addEventListener('blur', function() {
        const value = this.value.trim();
        if (value && validatePhone(value)) {
            clearError('patient-phone');
        }
    });
    
    // Date validation
    document.getElementById('appointment-date').addEventListener('change', function() {
        const value = this.value;
        if (value && validateDate(value)) {
            clearError('appointment-date');
        }
    });
    
    // Time validation
    document.getElementById('appointment-time').addEventListener('change', function() {
        if (this.value) {
            clearError('appointment-time');
        }
    });
    
    // Reason validation
    document.getElementById('appointment-reason').addEventListener('blur', function() {
        const value = this.value.trim();
        if (value && value.length >= 10) {
            clearError('appointment-reason');
        }
    });
}

// Close modal when clicking overlay
document.addEventListener('DOMContentLoaded', function() {
    const modalOverlay = document.getElementById('doctor-modal-overlay');
    const modalClose = document.getElementById('modal-close');
    const bookingModalOverlay = document.getElementById('booking-modal-overlay');
    const bookingModalClose = document.getElementById('booking-modal-close');
    
    // Close doctor modal on overlay click
    modalOverlay.addEventListener('click', function(e) {
        if (e.target === modalOverlay) {
            closeModal();
        }
    });
    
    // Close doctor modal on X button click
    modalClose.addEventListener('click', closeModal);
    
    // Close booking modal on overlay click
    bookingModalOverlay.addEventListener('click', function(e) {
        if (e.target === bookingModalOverlay) {
            closeBookingModal();
        }
    });
    
    // Close booking modal on X button click
    bookingModalClose.addEventListener('click', closeBookingModal);
    
    // Close modals on ESC key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            if (bookingModalOverlay.classList.contains('active')) {
                closeBookingModal();
            } else if (modalOverlay.classList.contains('active')) {
                closeModal();
            }
        }
    });
    
    // Handle booking form submission
    const bookingForm = document.getElementById('booking-form');
    bookingForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        console.log('Form submitted, validating...');
        
        // Validate form
        if (validateBookingForm()) {
            console.log('✅ Form is valid!');
            
            // Get form data
            const formData = {
                doctorId: document.getElementById('booking-doctor-id').value,
                patientName: document.getElementById('patient-name').value.trim(),
                patientEmail: document.getElementById('patient-email').value.trim(),
                patientPhone: document.getElementById('patient-phone').value.trim(),
                appointmentDate: document.getElementById('appointment-date').value,
                appointmentTime: document.getElementById('appointment-time').value,
                appointmentReason: document.getElementById('appointment-reason').value.trim(),
                timestamp: Date.now()
            };
            
            console.log('Form data:', formData);
            
            // This will be implemented in Issue #13 (Save to Firebase)
            alert('✅ Form validation successful!\n\nData will be saved to Firebase in Issue #13.\n\nYour appointment details:\n' +
                  `Doctor ID: ${formData.doctorId}\n` +
                  `Name: ${formData.patientName}\n` +
                  `Email: ${formData.patientEmail}\n` +
                  `Phone: ${formData.patientPhone}\n` +
                  `Date: ${formData.appointmentDate}\n` +
                  `Time: ${formData.appointmentTime}`);
        } else {
            console.log('❌ Form has errors');
        }
    });
    
    // Setup real-time field validation
    setupFieldValidation();
});
