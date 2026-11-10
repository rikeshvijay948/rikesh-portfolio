# Deployment & CI/CD Pipeline Guide

This document outlines the deployment workflows, continuous integration/continuous delivery (CI/CD) pipelines, and hosting configurations for the **Rikesh V — Software Engineer & AI Systems Developer Portfolio**.

---

## 1. Hosting Architecture Overview

The portfolio is architected for zero-latency, high-availability global edge distribution:

- **Primary Production Host**: GitHub Pages ([`https://rikeshvijay948.github.io/rikesh-portfolio/`](https://rikeshvijay948.github.io/rikesh-portfolio/))
- **Secondary / Edge Mirror**: Vercel Edge Network
- **Build Engine**: Vite + Terser minifier producing an optimized static asset bundle (`dist/`)
- **DNS & SSL**: Enforced HTTPS with automated TLS 1.3 certificate rotation

---

## 2. GitHub Pages Automated Deployment (GitHub Actions)

Deployments to GitHub Pages are managed via GitHub Actions workflow configured in `.github/workflows/deploy.yml`.

### Workflow Lifecycle:
1. **Trigger**: Push to the `main` branch.
2. **Setup**: Provisions a lightweight Ubuntu runner with Node.js LTS (v18.x or v20.x).
3. **Dependency Resolution**: Runs `npm ci` for deterministic package installations.
4. **Production Build**: Executes `npm run build` targeting modern ESNext syntax with asset fingerprinting.
5. **Artifact Upload**: Deploys the generated `dist/` directory to GitHub Pages via `actions/deploy-pages`.

### Manual Trigger:
You can also trigger a manual deployment under **Actions** > **Deploy to GitHub Pages** > **Run workflow** on GitHub.

---

## 3. Vercel Edge Deployment

The repository includes a root `vercel.json` configuration for zero-configuration deployments:

```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "framework": "vite"
}
```

### Git Integration:
- Every push to `main` creates an instant production deployment with preview URLs generated for pull requests.

---

## 4. Local Build Verification & Preview

Always test the compiled bundle locally before publishing production updates:

```bash
# 1. Clean build
npm run build

# 2. Spin up local Vite preview server
npm run preview
```

### Build Health Verification Checklist:
- [ ] Asset bundle size remains under 50 kB gzip.
- [ ] No broken relative asset references or 404 console errors.
- [ ] Service worker / manifest registration behaves correctly.
- [ ] Lighthouse Performance and Best Practices score >= 95.

---

## 5. Environment Variables & Secrets

Because this portfolio is built with pure client-side web standards, sensitive secrets (e.g., API keys, private credentials) must never be committed to repository code. Public configuration (e.g., analytics IDs or public email endpoints) are declared in `vite.config.js`.
