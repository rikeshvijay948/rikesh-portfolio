# Changelog

All notable changes to the **Rikesh V — Software Engineer & AI Systems Developer Portfolio** are documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/), and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

---

## [1.2.6] - 2026-11-10

### Added
- **Deployment & CI/CD Architecture Guide (`docs/DEPLOYMENT.md`)**:
  - Detailed documentation covering automated GitHub Pages Actions workflow, Vercel zero-config edge hosting, production verification checklist, and security policies.
- **Sitemap & SEO Sync (`sitemap.xml`)**:
  - Refreshed XML search indexing timestamp to ensure fresh search crawler activity.
- **Package Version Sync (`package.json`)**:
  - Synchronized portfolio package version to `1.2.6`.

## [1.2.5] - 2026-11-05

### Added
- **Open Source Contribution Guidelines (`CONTRIBUTING.md`)**:
  - Detailed local development workflow, code of conduct, and pull request checklist.
  - Conventional Commits specification for contributors and issue tracking standards.
- **Sitemap & SEO Sync (`sitemap.xml`)**:
  - Refreshed XML search engine indexing timestamp to ensure search crawler freshness.
- **Package Version Sync (`package.json`)**:
  - Synchronized package version to `1.2.5` to align with semver milestone tracking.

## [1.2.4] - 2026-11-02

### Added
- **Featured Project — Taskflow Pro Suite (`Taskflow-pro`)**:
  - Upgraded productivity showcase to Taskflow Pro featuring dynamic multi-view architecture (List, Kanban, Month Calendar, Eisenhower Matrix, Analytics).
  - Highlighted integrated Pomodoro Focus Timer with Web Audio API harmonic chimes, active task linking, and confetti engine.
  - Linked official repository [rikeshvijay948/Taskflow-pro](https://github.com/rikeshvijay948/Taskflow-pro).
- **Featured Project — EstateHub Portal (`EstateHub-Real-Estate-Listing-Portal`)**:
  - Added EstateHub to the engineering portfolio with multi-facet filtering, Grid/List view switcher, interactive property comparison drawer, and star review system.
  - Linked official repository [rikeshvijay948/EstateHub-Real-Estate-Listing-Portal](https://github.com/rikeshvijay948/EstateHub-Real-Estate-Listing-Portal).
- **Interactive Terminal Updates**:
  - Synchronized `projects` CLI command to output the updated 5-project catalog with direct deep dive inspection.

## [1.2.3] - 2026-11-01

### Added
- **PWA Web App Manifest (`site.webmanifest`)**: Added official web app manifest and custom terminal-monogram SVG favicon (`favicon.svg`) with maskable icon support.
- **Reading & Scroll Progress Indicator**: Fixed gradient reading progress tracker across top of viewport updating fluidly on scroll.
- **Floating Back-to-Top Action**: Apple-style floating action pill button appearing at 400px scroll threshold with smooth return animation.
- **Hero Code Inspector Copy Action**: Integrated 1-click clipboard copy button on the macOS window title bar with active-pane code extraction and toast notification feedback.

## [1.2.2] - 2026-10-24

### Added
- **FormGuard Validation Integration**: Architectural documentation for FormGuard JS — an enterprise zero-dependency client-side validation system with async checks and ARIA accessibility.
- **Security Policy (`SECURITY.md`)**: Responsible vulnerability disclosure framework and support matrix for open-source portfolio assets.

## [1.2.1] - 2026-10-16

### Added
- **Mobile PWA & Apple Web App Meta Tags**: Support for standalone home-screen saving and iOS translucent status bar.
- **Print Optimization**: Dedicated `@media print` styling for clean, recruiter-friendly PDF resumes and physical exports.
- **Motion Accessibility**: `@media (prefers-reduced-motion)` honoring user motion sensitivity preferences.
- **System Architecture Spec**: Comprehensive architectural documentation and Web Vitals metrics in `docs/ARCHITECTURE.md`.

## [1.2.0] - 2026-10-15

### Added
- **Curated Projects Showcase**:
  - *Modern E-Commerce Web Application* with dynamic filtering, live cart subtotaling, and responsive UI.
  - *Interactive To-Do List & Task Management App* with priority filters and LocalStorage persistence.
- **Enhanced Search Engine & Recruiter Optimization**:
  - Open Graph meta tags, Twitter card previews, and `schema.org/Person` JSON-LD structured data.
- **Accessibility & UX**:
  - Focus-visible rings for keyboard-only navigation.
  - Smooth custom dark-mode scrollbars and Cupertino-blue selection styling.

### Changed
- **Unified Navigation Header**: Removed redundant secondary menu bar and consolidated all navigation into a single modern glass header pinned at `top: 0`.
- **Project Milestones**: Updated *ResQNet — Disaster Management System* status to **Completed**.
- **Academic Credentials**: Synchronized B.E. Computer Science CGPA to **8.12 / 10** across hero metrics, terminal CLI, and timeline.

---

## [1.1.0] - 2026-08-18

### Added
- **Resume-Integrated Profile**:
  - Direct contact links: Email, Phone, LinkedIn, and GitHub.
  - Education profile: Bachelor of Engineering in Computer Science, K.S.R. College of Engineering (2024–2028).
  - Verified certifications: NPTEL IoT & Cloud Computing, PSG College of Technology React Workshop, CSC Diploma in C Programming (DCP), and Hindustan Institute of Technology Code Debugging competition.
- **Interactive Developer Console**:
  - Custom terminal simulator with commands (`about`, `education`, `skills`, `projects`, `certifications`, `contact`, `sudo hire`).
- **Command Palette**:
  - Instant Spotlight-style search modal invoked via `Ctrl + K` or `⌘ + K`.

---

## [1.0.0] - 2026-08-17

### Initial Release
- Modern Apple-inspired dark aesthetic featuring frosted glass acrylics, responsive grids, and typography hierarchy.
- Zero-dependency Vanilla JS architecture bundled with Vite.
- Automated GitHub Actions deployment pipeline to GitHub Pages.
