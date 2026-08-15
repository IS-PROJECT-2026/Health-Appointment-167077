# Conventional Commit Message Guide

## 📋 Format Structure

```
<type>(<optional scope>): <description>

[optional body]

[optional footer]
```

## 🏷️ Required Commit Types

You **MUST** use at least 4 of these types throughout your project:

### `feat` - New Features
Adding new functionality or features
```bash
feat(auth): add password validation logic

Implemented regex check to enforce strong alpha-numeric constraints
for user passwords. Minimum 8 characters required.

Closes #3
```

### `fix` - Bug Fixes
Repairing broken functionality
```bash
fix(modal): resolve doctor modal not closing on overlay click

Added event listener to modal overlay to properly close
modal when user clicks outside the content area.

Closes #18
```

### `docs` - Documentation
Changes to documentation only
```bash
docs(readme): add Firebase setup instructions

Updated README with step-by-step guide for configuring Firebase
Realtime Database and adding sample doctor data.

Closes #16
```

### `style` - Styling Changes
CSS, layout, visual design (no logic changes)
```bash
style(cards): improve doctor card hover effects

Enhanced visual feedback with smooth transitions and shadow effects.
Adjusted card spacing for better responsive layout.

Closes #19
```

### `refactor` - Code Refactoring
Restructuring code without changing behavior
```bash
refactor(firebase): reorganize database queries into separate module

Moved all Firebase operations to firebase-service.js for better
code organization and maintainability.

Closes #17
```

### `chore` - Maintenance Tasks
Project configuration, tooling, dependencies
```bash
chore(config): update .gitignore with Firebase config files

Added firebase-config.js and .env files to .gitignore to prevent
accidental commit of sensitive configuration data.

Closes #20
```

---

## ✅ Good Commit Examples

### Example 1: Initial Setup
```bash
feat(structure): initialize project with base HTML, CSS, and JS files

Created index.html with semantic HTML5 structure, style.css with CSS reset
and base styles, and script.js with initial JavaScript setup. Added .gitignore
for common file exclusions.

Closes #1
```

### Example 2: Navigation Feature
```bash
feat(nav): create responsive header and navigation bar

Implemented mobile-first navigation with:
- Logo and site title in header
- Navigation menu with smooth scroll
- Hamburger menu for mobile devices
- Active page indicator

Closes #2
```

### Example 3: Hero Section
```bash
feat(hero): design hero section with healthcare imagery

Added hero section with:
- Background image with overlay
- Compelling headline and subheadline
- Call-to-action button linking to booking form
- Fully responsive layout for all devices

Closes #3
```

### Example 4: Firebase Connection
```bash
feat(firebase): integrate Firebase Realtime Database SDK

Connected Firebase to project using CDN links. Configured
database connection and verified successful initialization
in browser console.

Closes #6
```

### Example 5: Doctor Cards
```bash
feat(doctors): implement dynamic doctor card generation

Created JavaScript function to fetch doctor data from Firebase
and dynamically generate doctor cards. Added loading state
and error handling for failed requests.

Closes #9
```

### Example 6: Form Validation
```bash
feat(booking): add client-side form validation

Implemented validation for all booking form fields:
- Email format validation with regex
- Phone number format check
- Past date prevention in date picker
- Inline error messages for better UX

Closes #12
```

### Example 7: Bug Fix
```bash
fix(layout): resolve tablet breakpoint layout issues

Fixed doctor card grid collapsing incorrectly on tablet devices
by adjusting media query breakpoints from 768px to 850px and
updating grid-template-columns.

Closes #18
```

### Example 8: Documentation
```bash
docs(readme): add comprehensive project documentation

Updated README with:
- Project overview and features
- Technology stack details
- Installation instructions
- Firebase setup guide
- Development workflow explanation

Closes #16
```

### Example 9: CSS Refactor
```bash
refactor(css): reorganize stylesheet into logical sections

Restructured style.css with clear section comments:
- CSS Reset & Base Styles
- CSS Variables
- Typography
- Layout Components
- Responsive Media Queries

Closes #17
```

### Example 10: Styling Enhancement
```bash
style(animations): add loading animations and transitions

Implemented skeleton loaders for doctor cards while data loads
from Firebase. Added smooth fade-in transitions for improved UX.

Closes #19
```

---

## ❌ Bad Commit Examples (AVOID THESE!)

```bash
❌ "updated files"
❌ "fixed bug"
❌ "changes"
❌ "asdfasdf"
❌ "work in progress"
❌ "final version"
❌ "Update index.html"
```

---

## 🎯 Commit Message Rules

1. **Use imperative mood** in description
   - ✅ "add feature"
   - ❌ "added feature" or "adding feature"

2. **Keep description under 50 characters**
   - Short and descriptive

3. **Capitalize first letter**
   - ✅ "Add doctor modal"
   - ❌ "add doctor modal"

4. **No period at the end of description**
   - ✅ "Fix responsive layout"
   - ❌ "Fix responsive layout."

5. **Use body to explain WHY, not WHAT**
   - The code shows WHAT changed
   - Body explains WHY it was needed

6. **Reference issues in footer**
   - Use `Closes #X` to auto-close issues
   - Can reference multiple: `Closes #1, Closes #2`

---

## 📝 Scope Examples (Optional but Recommended)

Scopes help identify which part of the project changed:

- `feat(structure):` - Project structure files
- `feat(nav):` - Navigation component
- `feat(hero):` - Hero section
- `feat(footer):` - Footer component
- `feat(firebase):` - Firebase integration
- `feat(doctors):` - Doctor listing features
- `feat(booking):` - Appointment booking
- `style(cards):` - Doctor card styling
- `fix(modal):` - Modal-related fixes
- `docs(readme):` - README updates
- `chore(config):` - Configuration files

---

## 🚀 Workflow with Commits

```bash
# 1. Make changes to your files

# 2. Stage specific files (better than git add .)
git add index.html style.css

# 3. Commit with conventional format
git commit -m "feat(nav): create responsive header and navigation bar

Implemented mobile-first navigation with hamburger menu toggle,
smooth scroll behavior, and active page indicators.

Closes #2"

# 4. Push to your feature branch
git push origin feat/2-header-navigation
```

---

## 💡 Pro Tips

1. **Make atomic commits** - One logical change per commit
2. **Commit often** - Don't wait until everything is perfect
3. **Test before committing** - Make sure code works
4. **Write commit message first** - Helps clarify what you're doing
5. **Use git log to review** - Check your commit history: `git log --oneline`

---

## 📊 Tracking Commit Types

Make sure you use at least 4 different types. Track them:

- [ ] `feat` - ✅ (Required - will use multiple times)
- [ ] `fix` - ⚠️ (Use at least once)
- [ ] `docs` - ⚠️ (Use at least once)
- [ ] `style` - ⚠️ (Use at least once)
- [ ] `refactor` - ⚠️ (Optional but recommended)
- [ ] `chore` - ⚠️ (Optional but recommended)

---

## 🎓 Remember

**Your commit history is 70% of your grade!**

Clean, professional commits show:
- Understanding of version control
- Professional development practices
- Clear communication skills
- Attention to detail

Take time to write good commit messages. Future employers will see your GitHub history!
