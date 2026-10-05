# Sumit Kumar Shah — Software Developer Portfolio

A production-ready, interactive personal portfolio website for **Sumit Kumar Shah**, Software Developer specializing in C# .NET backend engineering, RESTful APIs, PostgreSQL database architecture, and modern React web applications.

![Portfolio Preview Banner](https://img.shields.shields.io/badge/Stack-.NET%208%20%7C%20React%20%7C%20TypeScript%20%7C%20Tailwind%20%7C%20Three.js-8b5cf6?style=for-the-badge)

---

## 🌟 Key Features & Sections

- **Full-Screen Hero Experience**: Featuring real-time availability status, exact career headline, quick action CTAs, and an interactive 3D System Architecture scene built with **React Three Fiber (R3F)** and Three.js (with WebGL & reduced-motion fallback).
- **Recruiter-Friendly About Section**: Grounded in Sumit's academic background (B.Tech in Electronics & Communication Engineering from Delhi Technological University, DTU, CGPA: 8.3/10) and core backend engineering pillars.
- **Structured Technical Skills**: Organized into 7 distinct skill categories (Programming Languages, Backend & Frameworks, Databases, Architecture & Security, Frontend, Tools & Workflows, Computer Science Fundamentals).
- **Verified Professional Experience**: Detailed timeline of engineering contributions at **Mash Virtual** (August 2024 – April 2026), including REST API development, multi-tenant RBAC security models, dynamic PDF generation, and PostgreSQL query optimizations yielding **25–30% performance gains**.
- **Featured Project Case Studies**: Interactive expandable case studies for:
  1. **QardHasana**: Interest-Free Microloan Platform (.NET 8, C#, EF Core, PostgreSQL)
  2. **Setika**: Enterprise HR Management System (.NET 8, C#, 40+ REST APIs, iTextSharp PDF engine)
  3. **SessionFeed**: Dynamic Multi-Tenant Feedback System (C#, ASP.NET MVC, QRCoder)
- **Interactive System Architecture Blueprint**: Interactive backend system diagram component illustrating C# controller endpoints, EF Core LINQ query optimization, PostgreSQL index strategies, and JWT bearer token auth middleware.
- **Education & Achievements**: Highlights Sumit's leadership as General Secretary of Cognitive Minds Society at DTU, mentoring 25+ students, and solving 500+ Data Structures & Algorithms problems across LeetCode & GeeksforGeeks.
- **Direct Contact & Resume Download**: Built-in `mailto:` and `tel:` triggers, clipboard copy helpers, and automatic checking for `/resume.pdf`.

---

## 🛠️ Technology Stack

- **Frontend Core**: React 19 + TypeScript + Vite 5
- **Styling & Design System**: Tailwind CSS v3 + Custom Obsidian Charcoal Glassmorphism
- **3D Graphics & Animations**: Three.js + React Three Fiber (`@react-three/fiber`) + Drei (`@react-three/drei`)
- **Icons**: Lucide React + Custom SVG Icons

---

## 🚀 Quick Start & Development

### 1. Prerequisites
- Node.js (v18+ or v20+)
- npm or pnpm / yarn

### 2. Installation
```bash
# Clone or navigate to project directory
cd sumit-portfolio

# Install dependencies
npm install
```

### 3. Running Locally
```bash
npm run dev
```
Open your browser at `http://localhost:5173` to view the live portfolio.

### 4. Resume Setup
To enable direct resume downloads, place your resume PDF file in the `public` folder named `resume.pdf`:
```text
public/
  └── resume.pdf
```

### 5. Production Build
```bash
npm run build
```
This runs TypeScript checking (`tsc -b`) and generates optimized production static assets inside the `dist/` directory.

---

## 🌐 Deployment Instructions

### Deploying to Vercel
1. Push this code repository to GitHub.
2. Go to [Vercel Dashboard](https://vercel.com/new) and import the repository.
3. Vercel will automatically detect Vite:
   - **Framework Preset**: Vite
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
4. Click **Deploy**.

### Deploying to Netlify
1. Log in to [Netlify](https://app.netlify.com/) and choose **Add new site > Import an existing project**.
2. Select your GitHub repository.
3. Configure settings:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
4. Click **Deploy site**.

---

## 📄 License

This repository is maintained by **Sumit Kumar Shah**. All rights reserved.
