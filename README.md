<div align="center">

  # ⚡ Mantra Enterprise — Modern LED & Solar Landing Page

  **High-Converting, Infographic-Style Architectural Landing Page for Industrial & Commercial Lighting Solutions**

  [![Live Demo](https://img.shields.io/badge/Live%20Demo-manta--enterprice.vercel.app-e2ff54?style=for-the-badge&logo=vercel&logoColor=black)](https://manta-enterprice.vercel.app)
  [![Next.js](https://img.shields.io/badge/Next.js-15.3-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
  [![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-06B6D4?style=for-the-badge&logo=tailwindcss)](https://tailwindcss.com/)
  [![Framer Motion](https://img.shields.io/badge/Framer_Motion-Spring_Physics-0055FF?style=for-the-badge&logo=framer)](https://www.framer.com/motion/)
  [![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)

  ---

  [🌐 **Explore Live Demo**](https://mantra-enterprice.vercel.app) • [📖 **View Specifications**](#-key-features) • [🚀 **Getting Started**](#-getting-started)

</div>

<br />

## 🌟 Overview

**Mantra Enterprise** (Est. 2011, Surat, Gujarat, India) is an **ISO 9001:2008** and **CE Certified** manufacturer specializing in energy-efficient LED luminaires, IP65 outdoor landscape bollards, linear magnetic track systems, and off-grid solar lighting.

This repository contains the complete source code for Mantra Enterprise's high-converting web application, engineered with a **dark industrial aesthetic**, **high information density**, **infographic visual hierarchy**, and **Notion-style spring physics micro-interactions**.

---

## ⚡ Key Features & Highlights

### 1. 🎯 Custom Electric Yellow Glow Cursor
- **Zero-Latency Dot Tracker**: A crisp electric yellow dot (`#E2FF54`) that tracks mouse coordinates instantly.
- **Physics-Based Trailing Aura**: Soft-blurred radial gradient aura (`blur-3xl`, opacity 18-35%) powered by Framer Motion `useSpring` physics (`stiffness: 150`, `damping: 15`).
- **Contextual Magnetic Spotlight**: Dynamically scales and brightens when hovering over interactive elements (`buttons`, `links`, `cards`, `.interactive`).
- **Mobile Touch Safety**: Uses fine pointer media queries (`@media (pointer: fine)`) to ensure native mobile touch responsiveness.

### 2. 🍱 Infographic Bento Grid Product Showcase
- **Category 01**: Outdoor & Landscape Lighting (Bollards, Post Tops, Spikes — IP65 Rated).
- **Category 02**: LED COB & High Bay Lights (Industrial High Bays, Track Spots, Concealed Panels).
- **Category 03**: Linear & Magnetic Track Lights (Modular Hexa Tubes, Triangle Linear, Hanging Systems).
- **Category 04**: Solar Lighting Systems (All-in-One Solar Street Luminaires, PV Arrays).
- **Interactive Specs Popover & Technical Data Sheet Modal**: Hovering over any Bento card triggers a live specification overlay, while clicking the info icon opens a detailed technical modal.

### 3. 🛡️ Trust & Certification Breakdown
- Highlights compliance standards including **ISO 9001:2008**, **CE Certification**, **IP65 Weatherproof Sealing**, and **Energy Rating A+**.
- Dedicated **"Mantra Advantage"** section covering Tailormade Optics/Heights, Cast Aluminum & GI Pole Durability, and Direct Factory Wholesale Rates.

### 4. 📜 Infinite Social Proof Marquee
- Framer Motion horizontal marquee displaying verified client reviews (*Maheshwari V.*, *Madhav*, *Ajay M.*).

### 5. 💼 High-Converting Commercial Proposal Engine
- Split-screen inquiry section with real-time field validation, product category selectors, and direct factory response integration.
- Fixed spring-animated floating WhatsApp button (`+91 99747 79801`) for instant mobile inquiries.

---

## 🛠️ Tech Stack & Architecture

| Layer | Technology |
| :--- | :--- |
| **Framework** | [Next.js (App Router)](https://nextjs.org/) |
| **Language** | [TypeScript](https://www.typescriptlang.org/) |
| **Styling** | [Tailwind CSS v4](https://tailwindcss.com/) with custom design tokens |
| **Animations** | [Framer Motion](https://www.framer.com/motion/) (Spring physics, motion values, layout transitions) |
| **Icons** | [Lucide React](https://lucide.dev/) |
| **Fonts** | Google Fonts (`Inter`, `Space Grotesk`) |
| **Deployment** | [Vercel](https://vercel.app) |

---

## 📁 Repository Directory Structure

```bash
d:\Mantra
├── public/
│   └── images/              # Optimized product category photography
│       ├── outdoor.jpg
│       ├── led-cob.jpg
│       ├── linear.jpg
│       └── solar.jpg
├── src/
│   ├── app/
│   │   ├── globals.css      # Dark tech-grid, custom cursor tokens & glassmorphism
│   │   ├── layout.tsx       # Root layout mounting CustomCursor & SEO metadata
│   │   └── page.tsx         # Main landing page composition
│   ├── components/
│   │   ├── CustomCursor.tsx     # Electric yellow spring-animated glow cursor
│   │   ├── Navbar.tsx           # Sticky glassmorphic header
│   │   ├── HeroSection.tsx      # Staggered entrance hero & key metric counters
│   │   ├── TrustBar.tsx         # ISO, CE, IP65 & Energy A+ trust strip
│   │   ├── BentoShowcase.tsx    # Infographic Bento Grid & Technical Spec Modal
│   │   ├── MantraAdvantage.tsx  # Technical breakdown grid
│   │   ├── SocialProofMarquee.tsx # Infinite scrolling review carousel
│   │   ├── ContactSection.tsx   # Inquiry form & Surat facility metrics
│   │   ├── FloatingWhatsApp.tsx # Fixed spring floating WhatsApp button
│   │   └── Footer.tsx           # Minimalist industrial footer
│   └── lib/
│       └── utils.ts         # Utility class merger (`clsx` + `tailwind-merge`)
├── next.config.ts
├── package.json
└── tsconfig.json
```

---

## 🚀 Getting Started

### Prerequisites

Make sure you have **Node.js** (v18.x or higher) and **npm** installed on your system:

```bash
node -v
npm -v
```

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/YOUR_USERNAME/mantra-enterprise.git
   cd mantra-enterprise
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Run the development server**:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

---

## 📦 Production Build & Verification

To test the optimized production build locally:

```bash
# Build static & server-rendered assets
npm run build

# Start production server
npm run start
```

---

## 🌐 Deployment on Vercel

This app is optimized for seamless zero-config deployment on **Vercel**:

1. Push your code to GitHub.
2. Import the project into the [Vercel Dashboard](https://vercel.com/new).
3. Vercel will automatically detect Next.js and run `npm run build`.
4. Your site will be live at `https://manta-enterprice.vercel.app` (or your custom domain).

---

## 🏭 Company Information

- **Company Name**: Mantra Enterprise (Established 2011)
- **Location**: B/149, Smruti Society, Near Sai Petrol Pump, Gajera Circle, Katargam, Surat, Gujarat 395004, India
- **Certifications**: ISO 9001:2008 Certified | CE Certified
- **Email**: [mantrasolar@yahoo.com](mailto:mantrasolar@yahoo.com)
- **Phone**: [+91 99747 79801](tel:+919974779801)
- **Official Catalog**: [mantraled.in](https://www.mantraled.in/)

---

<div align="center">
  <sub>Designed & Developed with ❤️ for Mantra Enterprise. Target 500+ Crore Turnover by 2028.</sub>
</div>