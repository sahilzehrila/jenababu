# Jena Babu Vlogs - Professional Portfolio 🇮🇳

This is a 100% Free, Zero-maintenance portfolio website built for Suraj Jena (The Funny Blogger).

## 🚀 Quick Start

1. **Install Dependencies**:
   ```bash
   npm install
   ```

2. **Run Locally**:
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000).

---

## 🛠️ Zero-Cost Automation Setup

### 1. YouTube Auto-Updates 📺
- Open `src/lib/youtube.ts`.
- Replace `const CHANNEL_ID = 'UC_REPLACE_WITH_REAL_ID';` with your actual YouTube Channel ID (Find it in your YouTube Studio URL).
- The site will automatically pull your latest 6 videos every 6 hours using Vercel ISR (Incremental Static Regeneration).

### 2. Instagram Gallery 📸
- Currently uses mocked data to ensure 100% uptime with zero API costs.
- To make it real without paid APIs:
  - Generate a `instagram.json` file using a GitHub Action scraper.
  - Fetch that JSON in `src/components/InstagramGallery.tsx`.

### 3. Contact Form 📩
- The form in `Collaboration.tsx` is powered by **Formspree**.
- To activate:
  1. Go to [Formspree.io](https://formspree.io) and create a free form.
  2. Copy the endpoint URL (e.g., `https://formspree.io/f/xyza...`).
  3. Add `action="YOUR_FORMSPREE_URL"` to the `<form>` tag in `src/components/Collaboration.tsx`.

## 🎨 Design System
- **Colors**: Odia Orange (#FF6B35), YouTube Blue (#1A73E8).
- **Fonts**: Baloo 2 (Odia Headers), Inter (Body).
- **Tech Stack**: Next.js 14/16, Tailwind CSS v4, Framer Motion.

## 📱 Features
- **Hero**: Video background + Typing effect + Cursor Food.
- **YouTube Hub**: Auto-sync with latest videos.
- **Journey**: Interactive Timeline.
- **Collaboration**: Professional Media Kit section.
- **Map**: Google Maps Embed for Food Trail.
