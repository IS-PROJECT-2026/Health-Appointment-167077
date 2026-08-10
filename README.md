# Health Appointment Booking System

An online health webpage for booking appointments with doctors and medical professionals. Built with HTML, CSS, JavaScript, and Firebase Realtime Database.

## 🏥 Project Overview

This system provides a user-friendly platform for patients to:
- Browse available doctors with detailed profiles
- View doctor specialties, experience, and ratings
- Book appointments with preferred doctors
- Manage and track their appointments

## 🛠️ Technology Stack

- **Frontend:** HTML5, CSS3, JavaScript (ES6+)
- **Database:** Firebase Realtime Database
- **Deployment:** GitHub Pages
- **Version Control:** Git & GitHub

## ✨ Features

- 📱 Fully responsive design (mobile, tablet, desktop)
- 🔥 Real-time data sync with Firebase
- 🎨 Modern, healthcare-themed UI with comprehensive design system
- 📋 Form validation for appointment booking
- 🔍 Doctor profile modal with detailed information
- ⚡ Fast loading with optimized assets

## 📊 Doctor Data Schema

### Firebase Structure

Doctors are stored in Firebase Realtime Database at the root level as an object with the following structure:

```javascript
{
  "doc1": {
    "id": "doc1",
    "name": "Dr. Sarah Johnson",
    "specialty": "Cardiologist",
    "experience": "15 years",
    "education": "MD from Harvard Medical School",
    "rating": 4.8,
    "patients": 2500,
    "description": "Specialized in heart disease prevention and treatment...",
    "photo": "https://randomuser.me/api/portraits/women/44.jpg",
    "available": true,
    "fees": "$150",
    "languages": "English, Spanish"
  },
  "doc2": { ... },
  // ... more doctors
}
```

### Field Descriptions

| Field | Type | Description |
|-------|------|-------------|
| `id` | String | Unique identifier for the doctor (e.g., "doc1") |
| `name` | String | Full name with title (e.g., "Dr. Sarah Johnson") |
| `specialty` | String | Medical specialization (e.g., "Cardiologist") |
| `experience` | String | Years of experience (e.g., "15 years") |
| `education` | String | Educational background and degree |
| `rating` | Number | Patient rating out of 5.0 |
| `patients` | Number | Total number of patients treated |
| `description` | String | Detailed bio and expertise description |
| `photo` | String | URL to doctor's profile photo |
| `available` | Boolean | Current availability status |
| `fees` | String | Consultation fee (e.g., "$150") |
| `languages` | String | Languages spoken (comma-separated) |


## 📁 Project Structure

```
Health-Appointment-167077/
├── index.html              # Main HTML file
├── style.css               # Styling and responsive design
├── script.js               # JavaScript logic and Firebase integration
├── .gitignore             # Git ignore rules
├── README.md              # Project documentation
└── submission.md          # Assignment submission form
```

## 🚀 Getting Started

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- Git installed on your machine
- Firebase account (already configured)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/IS-PROJECT-2026/Health-Appointment-167077.git
cd Health-Appointment-167077
```

2. Open `index.html` in your browser:
```bash
# Windows
start index.html

# Or use a local server (recommended)
python -m http.server 8000
```

3. The Firebase connection is pre-configured and will load doctors automatically.

## 🔥 Firebase Configuration

The application uses Firebase Realtime Database with the following setup:

- **Database URL:** `https://yoururl.firebaseio.com/`
- **Rules:** Test mode (read/write enabled for development)
- **Data Location:** Doctors stored at root level as object

### Accessing Doctor Data

```javascript
// Reference to all doctors
const doctorsRef = database.ref('/');

// Fetch doctors
doctorsRef.once('value')
  .then((snapshot) => {
    const doctors = snapshot.val();
    // doctors is an object: {doc1: {...}, doc2: {...}, ...}
  });
```

## 🎨 Design System

The project uses a comprehensive CSS design system with:
- **Color Variables:** Primary, secondary, accent, semantic colors
- **Typography Scale:** 10 font sizes from xs to 6xl
- **Spacing System:** Consistent spacing scale (4px to 96px)
- **Utility Classes:** Flex, grid, spacing, colors, shadows
- **Responsive Breakpoints:** Mobile-first approach

See `style.css` for complete design tokens.

## 📝 Development Workflow

This project follows strict Git workflow practices:
- **Conventional Commits:** feat, fix, docs, style, refactor, chore
- **Feature Branch Workflow:** All work on separate branches
- **Pull Request Reviews:** All changes merged via PRs
- **Branch Protection:** No direct commits to main

## 🌐 Live Demo

**GitHub Pages URL:** [To be deployed]

## 👤 Author

**Admission Number:** 167077  
**GitHub:** [@quantanmreaper](https://github.com/quantanmreaper)

## 📄 License

This project is created for educational purposes as part of the IS PROJECT 2026 course.

## 🙏 Acknowledgments

- IS PROJECT 2026 Course Team
- Firebase Documentation
- MDN Web Docs
- Conventional Commits Specification 
