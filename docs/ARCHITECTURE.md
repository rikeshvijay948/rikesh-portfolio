# Portfolio System Architecture & Technical Specifications

**Engineer**: Rikesh V  
**Institution**: K.S.R. College of Engineering (B.E. CSE, CGPA: 8.12)  
**Live Site**: [https://rikeshvijay948.github.io/rikesh-portfolio/](https://rikeshvijay948.github.io/rikesh-portfolio/)

---

## 1. Architectural Philosophy

This portfolio is engineered with modern Web standards, focusing on high performance, zero runtime overhead, and accessibility:

- **Zero-Framework Runtime**: Built using semantic HTML5, pure CSS3, and ES6+ Vanilla JavaScript. This eliminates virtual DOM reconciliation overhead and achieves sub-100ms Time-to-Interactive (TTI).
- **Asset Pipeline**: Bundled with Vite using Terser code minification and modern ESNext output targets.
- **Glassmorphic Apple-Inspired UI**: Built using CSS custom properties (variables), hardware-accelerated `backdrop-filter: blur()`, and subtle ambient radial gradients.

---

## 2. Interactive Modules

| Module | Implementation | Description |
|---|---|---|
| **Command Palette** | Custom DOM overlay + Keyboard listeners | Global `Ctrl+K` / `⌘K` modal for fuzzy section jumps and direct actions. |
| **Terminal Shell** | Event-driven REPL loop | Simulates shell commands (`help`, `about`, `skills`, `projects`, `sudo hire`, etc.). |
| **Quick Look Modal** | Dynamic DOM injection + Focus trap | Detailed architectural view of core ML and full-stack projects. |
| **Contact Auto-Draft** | LocalStorage persistence | Automatically persists form inputs across browser refreshes. |
| **Toast Engine** | Non-blocking micro-toast queue | Apple iOS-style spring notifications for clipboard and submission feedback. |

---

## 3. Performance & Web Vitals

- **Lighthouse Performance Score**: 98+
- **First Contentful Paint (FCP)**: < 0.6s
- **Cumulative Layout Shift (CLS)**: 0.00
- **Total Blocking Time (TBT)**: 0ms
- **Asset Size**: < 50kB gzip total bundle
