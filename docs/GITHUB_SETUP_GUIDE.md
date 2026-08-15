# GitHub Setup Guide - Step by Step

## 🎯 Phase 1: Create Milestones (Do this FIRST on GitHub)

1. Go to your GitHub repository: `https://github.com/IS-PROJECT-2026/Health-Appointment-167077`
2. Click on **Issues** tab
3. Click on **Milestones** (right side)
4. Click **New Milestone** button

### Milestone 1:
- **Title:** `Project Foundation & UI Layout`
- **Due Date:** (Choose appropriate date)
- **Description:**
  ```
  Set up the base HTML structure, responsive navigation, hero section, and footer with core styling framework.
  ```

### Milestone 2:
- **Title:** `Firebase Integration & Data Management`
- **Due Date:** (Choose appropriate date)
- **Description:**
  ```
  Configure Firebase Realtime Database, create doctor data schema, and implement dynamic data fetching and display.
  ```

### Milestone 3:
- **Title:** `Appointment Booking System`
- **Due Date:** (Choose appropriate date)
- **Description:**
  ```
  Create appointment booking form, implement validation, store appointments in Firebase, and add user feedback.
  ```

---

## 📝 Phase 2: Create Issues (Linked to Milestones)

Go to **Issues** → Click **New Issue**

### Issue #1:
- **Title:** `Initialize project structure with HTML, CSS, and JS files`
- **Description:**
  ```
  Create the foundation files for the project:
  - index.html with semantic HTML5 structure
  - style.css with CSS reset and base styles
  - script.js with initial JavaScript setup
  - .gitignore for common exclusions
  
  **Acceptance Criteria:**
  - [ ] index.html exists in root with proper DOCTYPE
  - [ ] style.css linked properly in head
  - [ ] script.js linked before closing body tag
  - [ ] .gitignore includes node_modules, .env, .DS_Store
  ```
- **Labels:** `enhancement`
- **Milestone:** `Project Foundation & UI Layout`

### Issue #2:
- **Title:** `Create responsive header and navigation bar`
- **Description:**
  ```
  Build a responsive navigation system:
  - Header with logo/title
  - Navigation menu (Home, Doctors, Book Appointment, Contact)
  - Mobile hamburger menu
  - Smooth scroll behavior
  
  **Acceptance Criteria:**
  - [ ] Header displays correctly on all screen sizes
  - [ ] Navigation links are functional
  - [ ] Mobile menu toggles properly
  - [ ] Active page indicator works
  ```
- **Labels:** `enhancement`
- **Milestone:** `Project Foundation & UI Layout`

### Issue #3:
- **Title:** `Design hero section with healthcare imagery and CTA`
- **Description:**
  ```
  Create an engaging hero section:
  - Healthcare background image
  - Compelling headline and subheadline
  - "Book Now" call-to-action button
  - Responsive layout
  
  **Acceptance Criteria:**
  - [ ] Hero section is visually appealing
  - [ ] Text is readable over background
  - [ ] CTA button is prominent and clickable
  - [ ] Responsive on mobile, tablet, and desktop
  ```
- **Labels:** `enhancement`
- **Milestone:** `Project Foundation & UI Layout`

### Issue #4:
- **Title:** `Implement footer with contact info and social links`
- **Description:**
  ```
  Add footer section:
  - Contact information (phone, email, address)
  - Social media links
  - Copyright notice
  - Multi-column responsive layout
  
  **Acceptance Criteria:**
  - [ ] Footer displays at bottom of page
  - [ ] Contact info is clearly visible
  - [ ] Social links open in new tabs
  - [ ] Responsive layout works on all devices
  ```
- **Labels:** `enhancement`
- **Milestone:** `Project Foundation & UI Layout`

### Issue #5:
- **Title:** `Set up CSS variables and responsive design system`
- **Description:**
  ```
  Establish CSS foundation:
  - CSS custom properties for colors
  - Typography scale
  - Spacing and layout utilities
  - Responsive breakpoints
  
  **Acceptance Criteria:**
  - [ ] CSS variables defined in :root
  - [ ] Consistent color scheme applied
  - [ ] Typography hierarchy established
  - [ ] Responsive utilities ready for use
  ```
- **Labels:** `enhancement`, `design`
- **Milestone:** `Project Foundation & UI Layout`

### Issue #6:
- **Title:** `Set up Firebase project and integrate SDK`
- **Description:**
  ```
  Connect Firebase to the project:
  - Create Firebase project
  - Add Firebase SDK via CDN
  - Configure Firebase Realtime Database
  - Test connection
  
  **Acceptance Criteria:**
  - [ ] Firebase project created
  - [ ] SDK loaded without errors
  - [ ] Database rules configured
  - [ ] Connection verified in console
  ```
- **Labels:** `enhancement`, `backend`
- **Milestone:** `Firebase Integration & Data Management`

### Issue #7:
- **Title:** `Design and implement doctor data schema in Firebase`
- **Description:**
  ```
  Create doctor data structure:
  - Define doctor object (id, name, specialty, experience, photo, etc.)
  - Create sample doctor data (minimum 6 doctors)
  - Document schema in README
  
  **Acceptance Criteria:**
  - [ ] Schema documented
  - [ ] At least 6 sample doctors added to Firebase
  - [ ] All required fields present
  - [ ] Data accessible via Firebase console
  ```
- **Labels:** `enhancement`, `backend`
- **Milestone:** `Firebase Integration & Data Management`

### Issue #8:
- **Title:** `Create doctor card component structure`
- **Description:**
  ```
  Build doctor display cards:
  - HTML structure for doctor cards
  - CSS Grid/Flexbox layout
  - Hover effects
  - Responsive design
  
  **Acceptance Criteria:**
  - [ ] Card displays doctor info attractively
  - [ ] Cards arranged in responsive grid
  - [ ] Hover effects enhance UX
  - [ ] Mobile layout works properly
  ```
- **Labels:** `enhancement`, `design`
- **Milestone:** `Firebase Integration & Data Management`

### Issue #9:
- **Title:** `Implement data fetching from Firebase Realtime Database`
- **Description:**
  ```
  Connect frontend to Firebase:
  - JavaScript to fetch doctors from Firebase
  - Dynamically generate doctor cards
  - Handle loading states
  - Error handling
  
  **Acceptance Criteria:**
  - [ ] Doctors load from Firebase on page load
  - [ ] Cards generate dynamically
  - [ ] Loading indicator shows while fetching
  - [ ] Errors handled gracefully
  ```
- **Labels:** `enhancement`, `backend`
- **Milestone:** `Firebase Integration & Data Management`

### Issue #10:
- **Title:** `Add doctor detail modal with full information`
- **Description:**
  ```
  Create modal for detailed doctor view:
  - Modal overlay component
  - Display full doctor details
  - "Book Appointment" button
  - Open/close functionality
  
  **Acceptance Criteria:**
  - [ ] Modal opens when card is clicked
  - [ ] Full doctor info displayed
  - [ ] Modal closes properly (X button, overlay click)
  - [ ] Accessible with keyboard
  ```
- **Labels:** `enhancement`
- **Milestone:** `Firebase Integration & Data Management`

### Issue #11:
- **Title:** `Create appointment booking form UI`
- **Description:**
  ```
  Design booking form interface:
  - Form fields (patient name, email, phone, date, time, reason)
  - Consistent styling
  - Accessible labels
  - Responsive layout
  
  **Acceptance Criteria:**
  - [ ] Form includes all required fields
  - [ ] Labels properly associated
  - [ ] Styling matches site design
  - [ ] Form is keyboard accessible
  ```
- **Labels:** `enhancement`
- **Milestone:** `Appointment Booking System`

### Issue #12:
- **Title:** `Implement form validation for booking form`
- **Description:**
  ```
  Add client-side validation:
  - Validate all required fields
  - Email format validation
  - Phone number format validation
  - Prevent past date selection
  - Inline error messages
  
  **Acceptance Criteria:**
  - [ ] All fields validate before submission
  - [ ] Clear error messages displayed
  - [ ] Date picker blocks past dates
  - [ ] Form cannot submit with errors
  ```
- **Labels:** `enhancement`
- **Milestone:** `Appointment Booking System`

### Issue #13:
- **Title:** `Store appointment data in Firebase`
- **Description:**
  ```
  Save appointments to database:
  - Create appointments node in Firebase
  - Function to save appointment data
  - Generate unique appointment IDs
  - Link appointments to doctors
  
  **Acceptance Criteria:**
  - [ ] Appointments save to Firebase successfully
  - [ ] Unique ID generated for each appointment
  - [ ] Doctor ID properly linked
  - [ ] Timestamp recorded
  ```
- **Labels:** `enhancement`, `backend`
- **Milestone:** `Appointment Booking System`

### Issue #14:
- **Title:** `Add booking confirmation modal and feedback`
- **Description:**
  ```
  Provide user feedback after booking:
  - Confirmation modal
  - Display appointment details
  - Success message
  - Reset form after submission
  
  **Acceptance Criteria:**
  - [ ] Confirmation shows after successful booking
  - [ ] All appointment details displayed
  - [ ] Form clears after submission
  - [ ] User can close confirmation
  ```
- **Labels:** `enhancement`
- **Milestone:** `Appointment Booking System`

### Issue #15:
- **Title:** `Implement view appointments functionality`
- **Description:**
  ```
  Allow users to view their appointments:
  - Appointments list section
  - Fetch appointments from Firebase
  - Display appointment cards
  - Basic filtering by date
  
  **Acceptance Criteria:**
  - [ ] Appointments list displays correctly
  - [ ] Data fetched from Firebase
  - [ ] Each appointment shows full details
  - [ ] List updates in real-time
  ```
- **Labels:** `enhancement`, `backend`
- **Milestone:** `Appointment Booking System`

---

## 📊 Phase 3: Create Project Board

1. Go to **Projects** tab in your repository
2. Click **New Project**
3. Choose **Board** template
4. Name it: `Health Appointment System Development`
5. Create three columns:
   - **To Do**
   - **In Progress**
   - **Done**

6. Add all your issues to the "To Do" column:
   - Click **Add item** in To Do column
   - Search for each issue (#1, #2, #3, etc.)
   - Add them one by one

---

## 🔒 Phase 4: Set Up Branch Protection

1. Go to **Settings** → **Branches**
2. Click **Add branch protection rule**
3. Branch name pattern: `main`
4. Check: ☑️ **Require a pull request before merging**
5. **UNCHECK:** ☐ Require approvals (important for solo projects!)
6. Click **Create**

---

## 🚀 Phase 5: Start Working (Example Workflow)

### Working on Issue #1:

```bash
# 1. Make sure you're on main and it's up to date
git checkout main
git pull origin main

# 2. Create feature branch
git checkout -b feat/1-project-structure

# 3. Create your files
# (Create index.html, style.css, script.js, .gitignore)

# 4. Stage files
git add index.html style.css script.js .gitignore

# 5. Commit with conventional format
git commit -m "feat(structure): initialize project with base HTML, CSS, and JS files

Created index.html with semantic HTML5 structure, style.css with CSS reset,
and script.js with initial setup. Added .gitignore for common excludes.

Closes #1"

# 6. Push to GitHub
git push -u origin feat/1-project-structure

# 7. Go to GitHub and create Pull Request
# - Click "Compare & pull request"
# - Verify the changes
# - Click "Create pull request"
# - Click "Merge pull request"
# - Click "Confirm merge"
# - Delete branch on GitHub

# 8. Update local main
git checkout main
git pull origin main

# 9. Move Issue #1 to "Done" on Project Board
```

---

## 📸 Screenshots You Need to Capture

1. **Milestones**: After creating all 3 milestones with issues assigned
2. **Project Board**: Board showing issues in different columns
3. **Branches**: List of your feature branches (use `git branch -a`)
4. **Pull Request**: An open or merged PR showing it closes an issue
5. **Conflict Markers**: The `<<<<<<< HEAD` markers in VS Code
6. **Conflict Resolution**: Git log or network graph after resolution

---

## ✅ Checklist Before You Start Coding

- [ ] All 3 milestones created on GitHub
- [ ] All 15 issues created and linked to milestones
- [ ] Project board set up with To Do, In Progress, Done columns
- [ ] All issues added to "To Do" column
- [ ] Branch protection rule enabled on main
- [ ] Repository added to your team (GROUP 4A-4E)

**Once this checklist is complete, you're ready to start coding! Begin with Issue #1.**
