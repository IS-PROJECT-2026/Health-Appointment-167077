# 🔄 Git Workflow Diagram

## 📊 Complete Workflow Visualization

```
┌─────────────────────────────────────────────────────────────┐
│                     START: SETUP PHASE                      │
└─────────────────────────────────────────────────────────────┘
                            │
                            ▼
┌─────────────────────────────────────────────────────────────┐
│  1. CREATE GITHUB STRUCTURE (30 min)                        │
│     • 3 Milestones                                          │
│     • 15+ Issues (linked to milestones)                     │
│     • Project Board (To Do, In Progress, Done)              │
│     • Branch Protection (main branch)                       │
└─────────────────────────────────────────────────────────────┘
                            │
                            ▼
┌─────────────────────────────────────────────────────────────┐
│  2. SETUP FIREBASE (20 min)                                 │
│     • Create Firebase project                               │
│     • Enable Realtime Database                              │
│     • Add 6 sample doctors                                  │
│     • Copy config for later                                 │
└─────────────────────────────────────────────────────────────┘
                            │
                            ▼
┌─────────────────────────────────────────────────────────────┐
│              NOW: DEVELOPMENT PHASE (15+ hours)             │
│        Repeat this cycle for EACH issue (#1-15+)            │
└─────────────────────────────────────────────────────────────┘
                            │
                            ▼
        ╔═══════════════════════════════════════╗
        ║   SINGLE ISSUE WORKFLOW (repeat)      ║
        ╚═══════════════════════════════════════╝
                            │
          ┌─────────────────┴─────────────────┐
          │                                   │
          ▼                                   ▼
    ┌─────────┐                         ┌─────────┐
    │ GitHub  │                         │  Local  │
    │         │                         │ Machine │
    └─────────┘                         └─────────┘
          │                                   │
          │  STEP 1: Move Issue               │
          │  to "In Progress"                 │
          │                                   │
          │                                   ▼
          │                         ┌──────────────────┐
          │                         │ git checkout main│
          │                         │ git pull         │
          │                         └──────────────────┘
          │                                   │
          │                                   ▼
          │                         ┌──────────────────────────────┐
          │                         │ git checkout -b              │
          │                         │ feat/[issue-#]-[description] │
          │                         │                              │
          │                         │ Example:                     │
          │                         │ feat/1-project-structure     │
          │                         └──────────────────────────────┘
          │                                   │
          │                                   ▼
          │                         ┌──────────────────┐
          │                         │  MAKE CHANGES    │
          │                         │  • Edit files    │
          │                         │  • Add features  │
          │                         │  • Fix bugs      │
          │                         └──────────────────┘
          │                                   │
          │                                   ▼
          │                         ┌──────────────────┐
          │                         │  TEST IN BROWSER │
          │                         │  • Open index    │
          │                         │  • Check console │
          │                         │  • Test mobile   │
          │                         └──────────────────┘
          │                                   │
          │                                   ▼
          │                         ┌──────────────────────────┐
          │                         │ git add [specific files] │
          │                         │                          │
          │                         │ ✅ git add index.html    │
          │                         │ ✅ git add style.css     │
          │                         │ ❌ git add . (avoid!)    │
          │                         └──────────────────────────┘
          │                                   │
          │                                   ▼
          │                 ┌─────────────────────────────────────┐
          │                 │ git commit -m "conventional format" │
          │                 │                                     │
          │                 │ feat(scope): description            │
          │                 │                                     │
          │                 │ [optional body]                     │
          │                 │                                     │
          │                 │ Closes #X                           │
          │                 └─────────────────────────────────────┘
          │                                   │
          │                                   ▼
          │                         ┌───────────────────────┐
          │                         │ git push -u origin    │
          │                         │ feat/[branch-name]    │
          │                         └───────────────────────┘
          │                                   │
          ▼                                   ▼
    ┌─────────────────────────────────────────────┐
    │  STEP 2: CREATE PULL REQUEST on GitHub     │
    │  • Click "Compare & pull request"           │
    │  • Review changes in diff view              │
    │  • Verify issue is linked                   │
    │  • Click "Create pull request"              │
    └─────────────────────────────────────────────┘
          │
          ▼
    ┌─────────────────────────────────────────────┐
    │  STEP 3: REVIEW YOUR OWN PR                 │
    │  • Check "Files changed" tab                │
    │  • Verify no unwanted changes               │
    │  • Ensure code quality                      │
    └─────────────────────────────────────────────┘
          │
          ▼
    ┌─────────────────────────────────────────────┐
    │  STEP 4: MERGE PULL REQUEST                 │
    │  • Click "Merge pull request"               │
    │  • Click "Confirm merge"                    │
    │  • Click "Delete branch" (cleanup)          │
    └─────────────────────────────────────────────┘
          │
          ▼
    ┌─────────────────────────────────────────────┐
    │  STEP 5: VERIFY ISSUE CLOSED                │
    │  • Issue should auto-close (Closes #X)      │
    │  • If not, manually close it                │
    └─────────────────────────────────────────────┘
          │
          ▼
    ┌─────────────────────────────────────────────┐
    │  STEP 6: UPDATE PROJECT BOARD               │
    │  • Move issue to "Done" column              │
    └─────────────────────────────────────────────┘
          │
          ▼
    ┌─────────────────────────────────────────────┐
    │  STEP 7: UPDATE LOCAL MAIN (local machine)  │
    │  git checkout main                          │
    │  git pull origin main                       │
    └─────────────────────────────────────────────┘
          │
          ▼
        ╔═════════════════════════════════════╗
        ║   REPEAT FOR NEXT ISSUE!            ║
        ║   Continue until all 15+ done       ║
        ╚═════════════════════════════════════╝
                            │
                            ▼
┌─────────────────────────────────────────────────────────────┐
│              FINAL PHASE: POLISH & SUBMIT                   │
└─────────────────────────────────────────────────────────────┘
                            │
                            ▼
┌─────────────────────────────────────────────────────────────┐
│  CREATE MERGE CONFLICT (Required Evidence)                  │
│                                                             │
│  1. Create branch-A:                                        │
│     git checkout -b branch-A                                │
│     [modify line 1 of style.css]                            │
│     git commit -m "feat: version A"                         │
│     git push origin branch-A                                │
│                                                             │
│  2. Create branch-B from main:                              │
│     git checkout main                                       │
│     git checkout -b branch-B                                │
│     [modify SAME line 1 of style.css]                       │
│     git commit -m "feat: version B"                         │
│                                                             │
│  3. Try to merge branch-A:                                  │
│     git merge branch-A                                      │
│     >>> CONFLICT! <<<                                       │
│                                                             │
│  4. 📸 SCREENSHOT conflict markers in VS Code               │
│     Save as: evidence/conflict_evidence.png                 │
│                                                             │
│  5. Resolve conflict:                                       │
│     [Edit file, remove markers, keep final version]         │
│     git add style.css                                       │
│     git commit -m "fix: resolve merge conflict"             │
│     git push origin branch-B                                │
│                                                             │
│  6. Merge branch-B via PR on GitHub                         │
└─────────────────────────────────────────────────────────────┘
                            │
                            ▼
┌─────────────────────────────────────────────────────────────┐
│  CAPTURE ALL SCREENSHOTS                                    │
│  1. Milestones page                                         │
│  2. Project board                                           │
│  3. Branch list (git branch -a)                             │
│  4. Pull Request with issue link                            │
│  5. Conflict markers (already done)                         │
│  6. Git graph after resolution                              │
└─────────────────────────────────────────────────────────────┘
                            │
                            ▼
┌─────────────────────────────────────────────────────────────┐
│  DEPLOY TO GITHUB PAGES                                     │
│  1. Settings → Pages                                        │
│  2. Source: Deploy from branch                              │
│  3. Branch: main, Folder: / (root)                          │
│  4. Save                                                    │
│  5. Wait 2-5 minutes                                        │
│  6. Visit: https://is-project-2026.github.io/               │
│            Health-Appointment-167077/                       │
└─────────────────────────────────────────────────────────────┘
                            │
                            ▼
┌─────────────────────────────────────────────────────────────┐
│  FILL SUBMISSION.MD                                         │
│  • Add student details                                      │
│  • Add live GitHub Pages URL                                │
│  • Document 4 key learnings                                 │
│  • Paste all screenshots                                    │
│  • Add captions                                             │
│  • Complete merge conflict chronology                       │
└─────────────────────────────────────────────────────────────┘
                            │
                            ▼
┌─────────────────────────────────────────────────────────────┐
│  FINAL VERIFICATION                                         │
│  ✅ All milestones completed                                │
│  ✅ All issues closed                                       │
│  ✅ Project board shows "Done"                              │
│  ✅ Clean commit history (conventional)                     │
│  ✅ Zero direct commits to main                             │
│  ✅ All PRs merged                                          │
│  ✅ Conflict evidence saved                                 │
│  ✅ Live site working                                       │
│  ✅ submission.md completed                                 │
└─────────────────────────────────────────────────────────────┘
                            │
                            ▼
                    ┌───────────────┐
                    │   SUBMIT!     │
                    │   🎉 DONE! 🎉 │
                    └───────────────┘
```

---

## 🎯 Commit Types Visual Guide

```
┌─────────────────────────────────────────────────────┐
│  COMMIT TYPE DECISION TREE                          │
└─────────────────────────────────────────────────────┘

What did you change?
│
├─ Added a NEW feature/functionality?
│  └─> Use: feat
│      Example: feat(nav): add mobile hamburger menu
│
├─ Fixed a BUG or error?
│  └─> Use: fix
│      Example: fix(modal): resolve close button not working
│
├─ Changed APPEARANCE only (CSS/layout)?
│  └─> Use: style
│      Example: style(cards): improve hover effects
│
├─ Updated DOCUMENTATION (README, comments)?
│  └─> Use: docs
│      Example: docs(readme): add Firebase setup guide
│
├─ Rewrote code WITHOUT changing behavior?
│  └─> Use: refactor
│      Example: refactor(firebase): reorganize database queries
│
└─ Changed CONFIG/TOOLING (gitignore, settings)?
   └─> Use: chore
       Example: chore(config): update .gitignore
```

---

## 📊 Branch Naming Visual Guide

```
┌─────────────────────────────────────────────────────┐
│  BRANCH NAMING PATTERN                              │
└─────────────────────────────────────────────────────┘

Format: <type>/<issue-number>-<short-description>

Examples:
│
├─ feat/1-project-structure
│  ├─ Type: feat (new feature)
│  ├─ Issue: #1
│  └─ Description: project-structure
│
├─ feat/2-header-navigation
│  ├─ Type: feat
│  ├─ Issue: #2
│  └─ Description: header-navigation
│
├─ fix/18-tablet-layout
│  ├─ Type: fix (bug fix)
│  ├─ Issue: #18
│  └─ Description: tablet-layout
│
├─ style/19-loading-animations
│  ├─ Type: style (visual changes)
│  ├─ Issue: #19
│  └─ Description: loading-animations
│
└─ docs/16-readme-update
   ├─ Type: docs (documentation)
   ├─ Issue: #16
   └─ Description: readme-update
```

---

## 🔄 Project Board Movement

```
┌──────────────┐    ┌────────────────┐    ┌──────────┐
│   TO DO      │    │  IN PROGRESS   │    │   DONE   │
│              │    │                │    │          │
│  Issue #1 ───┼───▶│                │    │          │
│  Issue #2    │    │  Issue #1 ─────┼───▶│          │
│  Issue #3    │    │                │    │  Issue #1│
│  Issue #4    │    │                │    │          │
│  ...         │    │                │    │          │
│  Issue #15   │    │                │    │          │
│              │    │                │    │          │
└──────────────┘    └────────────────┘    └──────────┘

When to move:
• To Do → In Progress: When you create feature branch
• In Progress → Done: After PR is merged and issue closed
```

---

## 📈 Git History Visualization (What You Want)

```
Good Git History (Linear, Clean):

* commit abc123 (main, origin/main)
│ fix: resolve merge conflict in CSS variables
│
* commit def456
│ Merge pull request #15 from feat/15-view-appointments
│
* commit ghi789
│ feat(appointments): implement view appointments functionality
│ Closes #15
│
* commit jkl012
│ Merge pull request #14 from feat/14-booking-confirmation
│
* commit mno345
│ feat(booking): add confirmation modal and feedback
│ Closes #14
│
* commit pqr678
│ Merge pull request #13 from feat/13-store-appointments
│
...continues with all features...

✅ Clean
✅ Conventional commits
✅ Each feature isolated
✅ Issues properly closed
```

```
Bad Git History (Messy, Avoid This):

* commit zzz999 (main)
│ fixed stuff
│
* commit yyy888
│ updates
│
* commit xxx777
│ more changes
│
* commit www666
│ WIP
│
* commit vvv555
│ asdfasdf

❌ Vague messages
❌ No conventional format
❌ Direct commits to main
❌ No issue tracking
```

---

## 🎨 File Structure Evolution

```
AFTER ISSUE #1:
Health-Appointment-167077/
├── index.html (basic structure)
├── style.css (CSS reset)
├── script.js (empty framework)
├── .gitignore
└── docs/ (all guide files)

AFTER MILESTONE 1 (Issues #1-5):
Health-Appointment-167077/
├── index.html (header, hero, footer)
├── style.css (full styling, responsive)
├── script.js (basic navigation)
├── assets/
│   └── images/
│       ├── hero-bg.jpg
│       └── logo.png
└── docs/

AFTER MILESTONE 2 (Issues #6-10):
Health-Appointment-167077/
├── index.html (+ doctor section)
├── style.css (+ doctor cards, modal)
├── script.js (+ Firebase, fetch doctors)
├── assets/
│   └── images/
│       ├── hero-bg.jpg
│       ├── logo.png
│       └── doctor-placeholder.jpg
└── docs/

AFTER MILESTONE 3 (Issues #11-15):
Health-Appointment-167077/
├── index.html (+ booking form, appointments)
├── style.css (+ form styling)
├── script.js (+ validation, save appointments)
├── assets/
│   └── images/ (all images)
├── evidence/
│   └── conflict_evidence.png
└── docs/

FINAL (After deployment):
Health-Appointment-167077/
├── index.html (complete)
├── style.css (complete)
├── script.js (complete)
├── assets/ (all assets)
├── evidence/ (conflict screenshot)
├── submission.md (filled)
├── README.md (updated)
└── docs/ (all guides)
```

---

## 🔧 Local Development Flow

```
Browser (Testing)           VS Code (Editing)         Terminal (Git)
┌────────────┐             ┌────────────┐            ┌──────────────┐
│            │             │            │            │              │
│ Open       │◀───────────▶│ Edit       │───────────▶│ git add      │
│ index.html │             │ index.html │            │ index.html   │
│            │             │            │            │              │
│ Check      │◀───────────▶│ Edit       │───────────▶│ git commit   │
│ Console    │             │ style.css  │            │ -m "..."     │
│ (F12)      │             │            │            │              │
│            │             │ Edit       │            │ git push     │
│ Toggle     │◀───────────▶│ script.js  │            │              │
│ Mobile     │             │            │            │              │
│ View       │             │ Save (Ctrl │            │              │
│            │             │ + S)       │            │              │
└────────────┘             └────────────┘            └──────────────┘
     │                           │                          │
     └───────────────────────────┴──────────────────────────┘
                    Repeat cycle for each change
```

---

## ⏱️ Time Estimates Per Issue

```
Issue #1  [████████░░] 1 hour    - Project structure
Issue #2  [███████████] 1.5 hours - Header/nav
Issue #3  [███████████] 1.5 hours - Hero section
Issue #4  [████████░░] 1 hour    - Footer
Issue #5  [█████████░] 1-2 hours - CSS system
Issue #6  [████████░░] 1 hour    - Firebase setup
Issue #7  [███░░░░░░░] 30 min    - Doctor schema
Issue #8  [██████████████] 2 hours - Doctor cards
Issue #9  [███████████] 1.5 hours - Fetch data
Issue #10 [██████████████] 2 hours - Doctor modal
Issue #11 [███████████] 1.5 hours - Booking form
Issue #12 [██████████████] 2 hours - Form validation
Issue #13 [███████████] 1.5 hours - Save appointments
Issue #14 [████████░░] 1 hour    - Confirmation
Issue #15 [██████████████] 2 hours - View appointments

Total: 18-20 hours development time
+ 1 hour setup
+ 2-3 hours polish/submit
─────────────────────────────
TOTAL: 21-24 hours

Recommended pace: 1-2 hours per day for 12-14 days
```

---

## 🎯 Success Metrics

```
YOUR GOAL:

GitHub Profile
├── ✅ 15+ green squares (commits)
├── ✅ 15+ closed issues
├── ✅ 15+ merged PRs
└── ✅ 1 deployed project

Repository
├── ✅ 3 completed milestones
├── ✅ Clean commit history
├── ✅ Zero direct commits to main
└── ✅ All conventional commits

Live Site
├── ✅ Loads without errors
├── ✅ Responsive design
├── ✅ Firebase connected
└── ✅ Booking system works

Documentation
├── ✅ submission.md complete
├── ✅ All screenshots captured
├── ✅ Merge conflict documented
└── ✅ Learnings articulated
```

---

## 🚀 You're Ready!

This workflow will become second nature by Issue #5.

**Next step:** Open `README_FIRST.md` and start your journey!
