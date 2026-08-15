# Firebase Setup Guide

## 🔥 Step 1: Create Firebase Project

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Click **"Add project"** or **"Create a project"**
3. Enter project name: `health-appointment-system`
4. Accept terms and click **Continue**
5. Disable Google Analytics (not needed for this project)
6. Click **Create project**
7. Wait for setup to complete, then click **Continue**

---

## 🌐 Step 2: Register Web App

1. In Firebase Console, click the **Web icon** (`</>`) to add a web app
2. App nickname: `Health Appointment Web App`
3. **Do NOT** check "Also set up Firebase Hosting" (we're using GitHub Pages)
4. Click **Register app**
5. **COPY** the Firebase configuration code (you'll need this!)
6. Click **Continue to console**

---

<!-- Add these script tags to your index.html <head> section -->

<!-- Firebase App (the core Firebase SDK) -->
<script src="https://www.gstatic.com/firebasejs/9.23.0/firebase-app-compat.js"></script>

<!-- Firebase Realtime Database -->
<script src="https://www.gstatic.com/firebasejs/9.23.0/firebase-database-compat.js"></script>

<script>
  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyC4oPI9yt5ILmfPw0tY2XFmLHvaJQq7rFg",
    authDomain: "health-appointment-syste-cc503.firebaseapp.com",
    databaseURL: "https://health-appointment-syste-cc503-default-rtdb.firebaseio.com/"
    projectId: "health-appointment-syste-cc503",
    storageBucket: "health-appointment-syste-cc503.firebasestorage.app",
    messagingSenderId: "167855005777",
    appId: "1:167855005777:web:14b0a5be75884c18a79870"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  const database = firebase.database();
  
  console.log("Firebase initialized successfully!");
</script>


## 💾 Step 3: Enable Realtime Database

1. In left sidebar, click **Build** → **Realtime Database**
2. Click **Create Database**
3. Select location: **United States (us-central1)** (or closest to you)
4. Click **Next**
5. Start in **Test mode** (for development)
6. Click **Enable**

---

## 🔒 Step 4: Configure Database Rules (Development)

1. In Realtime Database, click **Rules** tab
2. Replace the rules with:

```json
{
  "rules": {
    ".read": true,
    ".write": true
  }
}
```

3. Click **Publish**

⚠️ **Warning:** These rules allow anyone to read/write. For production, implement proper security rules!

---

## 📊 Step 5: Add Sample Doctor Data

1. Click **Data** tab in Realtime Database
2. Click the **"+"** icon next to your database URL
3. Create the following structure:

### Name: `doctors`
Click **"+"** and add each doctor as follows:

#### Doctor 1:
- Name: `doc1`
- Click **"+"** to add fields:

```json
{
  "id": "doc1",
  "name": "Dr. Sarah Johnson",
  "specialty": "Cardiologist",
  "experience": "15 years",
  "education": "MD from Harvard Medical School",
  "rating": 4.8,
  "patients": 2500,
  "description": "Specialized in heart disease prevention and treatment. Expert in cardiac imaging and interventional cardiology.",
  "photo": "https://randomuser.me/api/portraits/women/44.jpg",
  "available": true,
  "fees": "$150",
  "languages": "English, Spanish"
}
```

#### Doctor 2:
```json
{
  "id": "doc2",
  "name": "Dr. Michael Chen",
  "specialty": "Pediatrician",
  "experience": "12 years",
  "education": "MD from Johns Hopkins University",
  "rating": 4.9,
  "patients": 3200,
  "description": "Passionate about child health and development. Specializes in preventive care and childhood diseases.",
  "photo": "https://randomuser.me/api/portraits/men/32.jpg",
  "available": true,
  "fees": "$120",
  "languages": "English, Mandarin"
}
```

#### Doctor 3:
```json
{
  "id": "doc3",
  "name": "Dr. Emily Rodriguez",
  "specialty": "Dermatologist",
  "experience": "10 years",
  "education": "MD from Stanford University",
  "rating": 4.7,
  "patients": 1800,
  "description": "Expert in skin conditions, cosmetic dermatology, and skin cancer screening. Board-certified dermatologist.",
  "photo": "https://randomuser.me/api/portraits/women/68.jpg",
  "available": true,
  "fees": "$130",
  "languages": "English, Spanish, Portuguese"
}
```

#### Doctor 4:
```json
{
  "id": "doc4",
  "name": "Dr. James Wilson",
  "specialty": "Orthopedic Surgeon",
  "experience": "18 years",
  "education": "MD from Yale School of Medicine",
  "rating": 4.9,
  "patients": 2100,
  "description": "Specializes in sports medicine and joint replacement. Expert in minimally invasive orthopedic procedures.",
  "photo": "https://randomuser.me/api/portraits/men/52.jpg",
  "available": true,
  "fees": "$200",
  "languages": "English"
}
```

#### Doctor 5:
```json
{
  "id": "doc5",
  "name": "Dr. Priya Patel",
  "specialty": "Neurologist",
  "experience": "14 years",
  "education": "MD from Columbia University",
  "rating": 4.8,
  "patients": 1950,
  "description": "Specialized in treating neurological disorders, headaches, and stroke prevention. Research focus on Alzheimer's disease.",
  "photo": "https://randomuser.me/api/portraits/women/89.jpg",
  "available": true,
  "fees": "$175",
  "languages": "English, Hindi, Gujarati"
}
```

#### Doctor 6:
```json
{
  "id": "doc6",
  "name": "Dr. David Kim",
  "specialty": "General Physician",
  "experience": "8 years",
  "education": "MD from University of California",
  "rating": 4.6,
  "patients": 2800,
  "description": "Primary care physician focused on preventive medicine and chronic disease management. Family medicine specialist.",
  "photo": "https://randomuser.me/api/portraits/men/71.jpg",
  "available": true,
  "fees": "$100",
  "languages": "English, Korean"
}
```

---

## 🔗 Step 6: Get Your Firebase Config

Your Firebase config should look like this:

```javascript
// Firebase Configuration
const firebaseConfig = {
  apiKey: "AIzaSyXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
  authDomain: "your-project.firebaseapp.com",
  databaseURL: "https://your-project-default-rtdb.firebaseio.com",
  projectId: "your-project-id",
  storageBucket: "your-project.appspot.com",
  messagingSenderId: "123456789012",
  appId: "1:123456789012:web:abcdef123456"
};
```

---

## 📝 Step 7: Integrate Into Your Project

Add this to your `script.js`:

```javascript
// Initialize Firebase
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  databaseURL: "YOUR_DATABASE_URL",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const database = firebase.database();

// Test connection
console.log("Firebase initialized successfully!");

// Fetch doctors
function loadDoctors() {
  const doctorsRef = database.ref('doctors');
  
  doctorsRef.on('value', (snapshot) => {
    const doctors = snapshot.val();
    console.log("Doctors loaded:", doctors);
    // Display doctors on page
  });
}

// Call on page load
window.addEventListener('DOMContentLoaded', loadDoctors);
```

---

## 🔍 Step 8: Verify Setup

1. Open your `index.html` in a browser
2. Open Developer Console (F12)
3. You should see:
   - "Firebase initialized successfully!"
   - "Doctors loaded: {doc1: {...}, doc2: {...}, ...}"

If you see errors, check:
- Firebase config values are correct
- Database URL ends with `.firebaseio.com`
- Database rules allow read/write
- Internet connection is active

---

## 📚 Database Structure Reference

```
health-appointment-system/
├── doctors/
│   ├── doc1/
│   │   ├── id: "doc1"
│   │   ├── name: "Dr. Sarah Johnson"
│   │   ├── specialty: "Cardiologist"
│   │   └── ... (other fields)
│   ├── doc2/
│   └── doc6/
└── appointments/
    ├── apt1/
    │   ├── doctorId: "doc1"
    │   ├── patientName: "John Doe"
    │   ├── date: "2024-12-20"
    │   ├── time: "10:00 AM"
    │   └── timestamp: 1234567890
    └── apt2/
```

---

## 🎯 Next Steps

1. ✅ Firebase project created
2. ✅ Realtime Database enabled
3. ✅ Sample doctors added
4. ✅ Config copied to script.js
5. ⏭️ Start building your HTML structure
6. ⏭️ Implement doctor display functionality
7. ⏭️ Create appointment booking form
8. ⏭️ Save appointments to Firebase

---

## 🆘 Troubleshooting

### Issue: "Permission Denied"
**Solution:** Check database rules allow `.read: true` and `.write: true`

### Issue: "Firebase is not defined"
**Solution:** Ensure Firebase SDK scripts are loaded in `index.html` before your `script.js`

### Issue: "Database URL invalid"
**Solution:** Make sure databaseURL ends with `.firebaseio.com` and has `https://`

### Issue: "Data not loading"
**Solution:** 
- Check browser console for errors
- Verify database has data in Firebase Console
- Ensure internet connection is active

---

## 🔐 Production Security (After Project Completion)

For a production app, update rules to:

```json
{
  "rules": {
    "doctors": {
      ".read": true,
      ".write": false
    },
    "appointments": {
      ".read": "auth != null",
      ".write": "auth != null"
    }
  }
}
```

This ensures:
- Anyone can read doctor info
- Only authenticated users can manage appointments
