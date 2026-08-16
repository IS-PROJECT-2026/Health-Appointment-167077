### **Admission Number:** 167077  
### **GitHub:** [@quantanmreaper](https://github.com/quantanmreaper)  
### **Course:** IS PROJECT 2026
### **LiveDemo** https://is-project-2026.github.io/Health-Appointment-167077/

# Health Appointment Booking System

An online healthcare platform for booking appointments with doctors. Built with HTML, CSS, JavaScript, and Firebase Realtime Database.

## Features

- Browse doctors with detailed profiles (specialty, experience, ratings)
- Book appointments with form validation
- View and manage appointments with filtering options
- Cancel appointments
- Fully responsive design (mobile, tablet, desktop)
- Real-time data sync with Firebase

## Technology Stack

- **Frontend:** HTML5, CSS3, JavaScript (ES6+)
- **Database:** Firebase Realtime Database
- **Version Control:** Git & GitHub
- **Deployment:** GitHub Pages

## Project Structure

```
Health-Appointment-167077/
├── index.html       # Main HTML file
├── style.css        # Styling and design system
├── script.js        # JavaScript logic and Firebase integration
Project documentation
├── .gitignore
└── README.md
```

## Getting Started

### Prerequisites
- Modern web browser
- Git installed
- Firebase account (already configured)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/IS-PROJECT-2026/Health-Appointment-167077.git
cd Health-Appointment-167077
```

2. Open `index.html` in your browser or use a local server:

The Firebase connection is pre-configured and will load data automatically.

## Firebase Data Structure

### Doctors
Stored at root level with unique IDs (doc1, doc2, etc.):

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
    "description": "Specialized in heart disease...",
    "photo": "https://example.com/photo.jpg",
    "available": true,
    "fees": "$150",
    "languages": "English, Spanish"
  }
}
```

### Appointments
Stored under `/appointments` node:

```javascript
{
  "appointments": {
    "-UniqueID": {
      "appointmentId": "-UniqueID",
      "doctorId": "doc1",
      "patientName": "John Doe",
      "patientEmail": "john@example.com",
      "patientPhone": "5551234567",
      "appointmentDate": "2024-12-25",
      "appointmentTime": "10:00",
      "appointmentReason": "Regular checkup",
      "status": "pending",
      "timestamp": 1638360000000,
      "createdAt": 1638360000000
    }
  }
}
```

## Git Workflow

This project follows professional Git practices:
- **Conventional Commits:** `feat`, `fix`, `docs`, `style`, `refactor`, `chore`
- **Feature Branch Workflow:** All work on separate branches
- **Pull Requests:** All changes merged via PRs
- **Branch Protection:** No direct commits to main

Example commit:
```bash
git commit -m "feat(appointments): add booking confirmation modal

Added comprehensive confirmation modal with appointment details,
success animation, and user-friendly formatting.

Closes #14"
```

## Development

### CSS Design System
- **Colors:** Primary, secondary, accent, semantic colors
- **Typography:** 10 font sizes (xs to 6xl)
- **Spacing:** Consistent scale (4px to 96px)
- **Responsive:** Mobile-first breakpoints

### Key Functions (script.js)
- `loadDoctors()` - Fetch and display doctors from Firebase
- `loadAppointments()` - Fetch and display user appointments
- `saveAppointment()` - Save new appointment to Firebase
- `filterAppointments()` - Filter appointments by status/date
- `cancelAppointment()` - Update appointment status to cancelled


## License

This project is created for educational purposes.

