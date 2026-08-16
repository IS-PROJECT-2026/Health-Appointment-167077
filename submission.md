# Project Submission Report

## 1. Student Details

- **Full Name:** Mepani Bhavin Ramesh 
- **GitHub Username:** quantanmreaper
- **Email:** bhavin.mepani@strathmore.edu
- **AdmNo:** 167077

---

## 2. Deployed Project Link

- **Live GitHub Pages URL:**  https://is-project-2026.github.io/Health-Appointment-167077/
- **Repository URL:** https://github.com/IS-PROJECT-2026/Health-Appointment-167077

---

## 3. Reflection — Grounded in Your Git History

> **Rules:** Every answer below **must include a direct link** to the specific commit, PR, issue, or branch in your repository that demonstrates what you are describing. Answers without working links will not be graded. Generic explanations that could apply to any project will receive zero marks.
>
> **Marks:** A (2 marks) · B (1 mark) · C (1 mark) · D (1 mark) = **5 marks total**

### A. Your Best Commit

Paste the URL of the commit in your history that you think best demonstrates clean conventional commit practice (good type tag, clear subject, meaningful body or footer).

- **Commit URL:** https://github.com/IS-PROJECT-2026/Health-Appointment-167077/commit/83272c77ab36196bebb3cf15c53866490de318fb
- **Why this one?** This commit really showcases what a well-crafted commit should look like. It has a proper `feat(appointments)` tag that tells you exactly what part of the project changed, and the body is organized beautifully into sections covering UI components, functionality, styling, and real-time integration. You can understand the entire feature just by reading the commit message, which makes it incredibly valuable for anyone reviewing the project history later.

### B. A Mistake or Struggle

Link to a commit, PR, or issue where something went wrong — a bad commit message you had to fix, a branch you had to delete and recreate, a PR that needed rework, or a deployment that broke. 

- **Link to the evidence:** https://github.com/IS-PROJECT-2026/Health-Appointment-167077/commit/aa89fdb41259623ba99a79a32783cc9df31bb8f7
- **What happened and how did you recover?** I accidentally included the git command itself in the commit message - it literally says `git commit -m "feat(hero): design hero section..."` because I was drafting the message in Notepad and copied the entire command instead of just the message part. It was an embarrassing rookie mistake that taught me to be more careful about what I'm copying. I learned from this and made sure all my future commits had clean, proper messages without any command syntax mixed in.

### C. A Pull Request You're Proud Of

Paste the URL of the PR that best shows your self-review process — one where the description is clear, the issue linkage is correct, and the diff tells a coherent story.

- **PR URL:** https://github.com/IS-PROJECT-2026/Health-Appointment-167077/pull/33
- **What did you check before merging?** Before merging, I verified that the PR description accurately matched what the code actually does - all the UI components, filtering logic, and Firebase integration were working as documented. I also made sure the issue linkage was correct (it properly closed #15) and that the three modified files (HTML, CSS, JS) formed a complete, coherent feature without breaking existing functionality.

### D. One Thing You Would Do Differently

If you had to restart this project from scratch with everything you know now, name one specific workflow decision you would change (not a code change — a Git/project management decision).

- **What would you change?** I would set up branch protection rules on main right from the start instead of committing initial files like submission.md directly to main. At the beginning of the project, I wanted to get the essential documentation files in place before locking down the branch, but in hindsight, establishing the feature-branch workflow from day one would have created better habits and a more consistent git history throughout the entire project lifecycle.
- **Link to the evidence of the original decision:** https://github.com/IS-PROJECT-2026/Health-Appointment-167077/commit/fba2d82ca0535a5e5ac784fcdf610de6e87ebced

---

## 4. Screenshots of Key GitHub Features

Demonstrate your workflow mechanics by embedding your screenshots below.

> **CRITICAL FOR WORKING IMAGES:** Do not type manual folder paths. Edit this file directly on the GitHub web interface, click on the blank line below each prompt, and **paste (Ctrl+V / Cmd+V)** your screenshot. GitHub will automatically upload the file and generate a permanent, working image link for you.

### A. Milestones and Issues
*Provide screenshots showing your milestone and issue tracking progress from initial setup to current state.*

#### Before (Initial Setup):
<img width="1912" height="893" alt="Before_Milestones" src="https://github.com/user-attachments/assets/e924ea27-abb4-4e38-ab7a-0774b33c3180" />

* **Caption:** Initial milestone setup showing the project structure at the beginning with issues being created and organized.

#### After (Current State - Milestone Overview):
<img width="1530" height="706" alt="After_Milestone" src="https://github.com/user-attachments/assets/4ed68868-b3b7-4bec-9332-6923ef9672bf" />

* **Caption:** Current milestone progress showing completed and in-progress issues with clear tracking and organization.

#### After (Current State - Closed Issues):
<img width="1556" height="883" alt="ISSUES" src="https://github.com/user-attachments/assets/f77a43d3-3225-4ac2-a947-480983bd962e" />

* **Caption:** Closed issues tab showing completed all tasks that were successfully linked to milestones and merged into the project.

### B. Project Board
*Provide screenshots of your GitHub Project Board showing progression from initial setup to completion.*

#### Before (Initial Setup):
<img width="1910" height="870" alt="Before_ProjectBoard1" src="https://github.com/user-attachments/assets/2a7c6a11-4135-4d62-a7a0-07114751a706" />

* **Caption:** Project board at the start showing issues distributed across To Do and In Progress columns as work began.

#### After (Current State):
<img width="1382" height="773" alt="After_ProjectBoard" src="https://github.com/user-attachments/assets/6f0daeba-b395-4d5f-a34f-7385d57e2ea3" />

* **Caption:** Final project board state with all issues moved to Done column, demonstrating complete workflow tracking and task completion.

### C. Branching Architecture
*Provide a screenshot showing your local or remote Git branch list, highlighting your use of conventional, issue-linked naming patterns (e.g., `feat/`, `fix/`, `style/`).*

<img width="1662" height="840" alt="branch_one" src="https://github.com/user-attachments/assets/15f29b0b-c4a6-4b63-b2a2-ed9d7dc5620a" />
<img width="1602" height="403" alt="branch_two" src="https://github.com/user-attachments/assets/7d6c9375-eac3-4d23-91cd-f848f5136fcb" />
<img width="1613" height="322" alt="branch_three" src="https://github.com/user-attachments/assets/0162e200-df7c-4a50-9435-56b5b10b7aea" />

* **Caption:** Branch list showing consistent use of conventional prefixes (feat/, fix/, style/, refactor/. docs/, chore/) with issue-linked naming.

### D. Pull Requests & Traceability
*Provide a screenshot of a completed or open Pull Request (PR) on GitHub that clearly shows it is linked to a related development issue.*

#### Open Pull Request:
<img width="1297" height="828" alt="Open Pull Request" src="https://github.com/user-attachments/assets/33727d82-b266-430f-b7b3-3f970745298b" />

* **Caption:** Open PR with clear description and issue linkage (Closes #7) showing traceability before merge.

#### Completed Pull Request:
<img width="1130" height="708" alt="ClosedPullRequest" src="https://github.com/user-attachments/assets/76da0ad5-fffd-41a3-ab6c-e2516204ef85" />

* **Caption:** Merged PR demonstrating successful completion with proper issue closure (Closes #2) and commit integration.


---

## 5. Merge Conflict Evidence

You must engineer **three merge conflicts**, each triggered by a **different cause** from those covered in the lecture. For Conflict 1, document the full resolution lifecycle. For Conflicts 2 and 3, provide the conflict marker screenshot and identify the cause.

> **Marks:** Conflict 1 full chronology (2 marks) · Conflict 2 (1 mark) · Conflict 3 (1 mark) · All three use distinct causes (1 mark) = **5 marks total**

---

### Conflict 1 — Full Chronology

**What cause did you use?** 
- Edit-Edit Conflict (Content Conflict)

#### Step 1: Generating the Clash
*Screenshot showing the merge attempt and the conflict warning.*

<img width="1022" height="218" alt="one" src="https://github.com/user-attachments/assets/3a0b13f5-f4fd-4db6-b478-af65fd1ca282" />


* **Caption:** Attempted to merge branch `feature-conflict-demo-2` into `main`. Both branches had modified the exact same lines in the Features section of README.md. Git detected the conflicting changes and halted the automatic merge with the warning "CONFLICT (content): Merge conflict in README.md" and "Automatic merge failed fix conflicts and then commit the result."

#### Step 2: Inside the Code Editor (Conflict Markers)
*Screenshot showing the raw, unresolved conflict markers (`<<<<<<< HEAD`, `=======`, `>>>>>>>`) in your editor.*

<img width="1293" height="843" alt="two_conflict_markers" src="https://github.com/user-attachments/assets/35f79da9-8b7a-4f25-a783-b11f1e9a1ad8" />


* **Caption:** The Features section in README.md showed conflict markers with three versions: HEAD (current main branch) contained enhanced, detailed descriptions with comprehensive form validation and advanced filtering options, the original version had simple feature descriptions and feature-conflict-demo-2 (incoming change) had simplified, concise descriptions. The dispute occurred because both branches rewrote all six feature bullet points differently. I chose to keep the HEAD version because it provided more professional, detailed, and informative descriptions that better communicate the project's capabilities.

#### Step 3: Resolution & Clean Merge
*Screenshot of your clean Git history or completed PR showing the conflict was resolved and merged.*

<img width="966" height="205" alt="three_gitlog" src="https://github.com/user-attachments/assets/8a92f995-effc-4b16-8faa-07a637d7c1f5" />


* **Caption:** The Git history graph shows the successful resolution with merge commit `4a8074d "Merge feature-conflict-demo-2: resolve conflict in Features section"`. Both feature branches are now cleanly integrated into the main branch. The conflict was resolved by selecting the more detailed feature descriptions, and the merge was completed without any remaining conflicts. The graph clearly shows the divergent branch history and their convergence into a unified main branch.

---

### Conflict 2 — Different Cause

**What cause did you use?** [Name the type of conflict cause — must be different from Conflict 1]

**Why does this cause trigger a conflict?** [1–2 sentences explaining the mechanism]

[PASTE SCREENSHOT OF CONFLICT MARKERS FOR CONFLICT 2 HERE]

* **Caption:** [Brief description of the conflicting branches and file]

---

### Conflict 3 — Different Cause

**What cause did you use?** [Name the type of conflict cause — must be different from Conflicts 1 and 2]

**Why does this cause trigger a conflict?** [1–2 sentences explaining the mechanism]

[PASTE SCREENSHOT OF CONFLICT MARKERS FOR CONFLICT 3 HERE]

* **Caption:** [Brief description of the conflicting branches and file]

---
##
## 6. Feedback & Evaluation

To help improve this course for future engineering cohorts, please take 2 minutes to fill out the anonymous feedback form. Your honest review helps shape how this program is taught next semester!
- [ ] **Anonymous Evaluation Form:** [Course & Instructor Evaluation](https://forms.gle/YLybnsyXXErKEg3s9)

---
 
## Final Submission
 
Once your repository is complete, submit your work through the official submission form below. The form will **stop accepting responses after Monday, August 17th, 2026** — no late submissions will be accepted.
 
> **Submission Form:** [https://forms.gle/KrT4VxtFtkU3wtYu8](https://forms.gle/KrT4VxtFtkU3wtYu8)
