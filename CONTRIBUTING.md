# Contributing to Rikesh V — Developer Portfolio

Thank you for your interest in contributing to this portfolio and developer ecosystem! We welcome suggestions, improvements, bug reports, and optimizations from the developer community.

---

## Code of Conduct

This project adheres to open, respectful, and professional standards. By participating, you agree to treat all contributors with kindness, constructive feedback, and mutual respect.

---

## How Can You Contribute?

1. **Reporting Bugs**: Found an issue, responsive layout quirk, or broken link? Open an issue with reproduction steps and browser details.
2. **Performance & Accessibility Optimizations**: Suggestions to improve Web Vitals (LCP, CLS, FID/INP) or screen-reader accessibility (WCAG 2.1 AA compliance).
3. **Documentation Enhancements**: Improving developer guides, architecture documentation, or inline comments.
4. **Interactive Feature Ideas**: Proposing new commands for the interactive terminal console or command palette (`Ctrl+K`).

---

## Local Development Workflow

### Prerequisites
- Node.js (v18.x or v20.x LTS recommended)
- npm (v9.x or higher)
- Modern web browser (Chrome, Edge, Firefox, or Safari)

### Setup Instructions

```bash
# 1. Fork and clone the repository
git clone https://github.com/rikeshvijay948/rikesh-portfolio.git
cd rikesh-portfolio

# 2. Install dependencies
npm install

# 3. Start local Vite development server
npm run dev

# 4. Build and verify production bundle
npm run build

# 5. Preview production build locally
npm run preview
```

---

## Commit Guidelines (Conventional Commits)

We follow the [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) specification:

- `feat(scope)`: A new feature or user-facing enhancement
- `fix(scope)`: A bug fix
- `docs(scope)`: Documentation changes only (e.g., README, CHANGELOG, ARCHITECTURE)
- `style(scope)`: Changes that do not affect code logic (formatting, whitespace, CSS tweaks)
- `perf(scope)`: Performance optimization affecting loading or runtime speed
- `refactor(scope)`: Code refactoring without behavioral alterations
- `chore(scope)`: Maintenance tasks, dependency updates, or build configs

**Example:**
```bash
git commit -m "docs(contributing): add open-source contribution guidelines"
```

---

## Pull Request Checklist

Before submitting a Pull Request, ensure:
- [ ] Code builds without errors via `npm run build`.
- [ ] No unhandled JavaScript console errors or warnings exist.
- [ ] Semantic HTML and accessibility standards (ARIA landmarks, contrast ratios) are preserved.
- [ ] Responsive layout adapts gracefully on desktop, tablet, and mobile breakpoints.
- [ ] Commit messages follow the conventional commit format.

---

## Questions or Support?

Reach out directly via:
- **Email**: [rikeshvijay948@gmail.com](mailto:rikeshvijay948@gmail.com)
- **LinkedIn**: [linkedin.com/in/rikesh-v-63715338a](https://www.linkedin.com/in/rikesh-v-63715338a)
