# Arif Afzal — Editorial Developer Portfolio

A production-ready, individually art-directed personal portfolio engineered for **Arif Afzal**—Software Developer, Computer Science Instructor, and Founder from West Champaran, Bihar, India.

Built with Next.js 15 (App Router), TypeScript, Tailwind CSS, and Framer Motion, utilizing an editorial-meets-technical design language inspired by Swiss editorial typography, minimalist architectural grid systems, and technical documentation aesthetics.

---

## 1. Design Direction & Visual Identity

- **Strictly Zero AI Slop:** No generic SaaS landing page tropes, no purple-blue gradients, no random glowing blobs or neon cards, no generic floating icons.
- **Palette:**
  - **Warm Paper Base (`#FAF9F5`):** Tactile, high-legibility publication aesthetic.
  - **Deep Charcoal Typography (`#141413`):** High contrast, crisp hierarchy.
  - **Botanical Forest Green Accent (`#284E3A` / `#4E8767`):** Deliberate, restrained accent color used strictly for verified credentials and interactive states.
  - **Nocturnal Dark Mode (`#111211`):** Purpose-designed deep slate/warm night theme (not an automated inversion).
- **Typography:**
  - Display: `Instrument Serif` / `Newsreader` (Google Fonts with system serif fallbacks).
  - Body: `Plus Jakarta Sans` / modern sans-serif.
  - Technical Data & Metadata: `JetBrains Mono` / monospace.

---

## 2. Key Sections

1. **Navigation Bar (`Navbar.tsx`):**
   - Personal wordmark `ARIF AFZAL` with subtle availability indicator (`Available for engineering roles`).
   - Section indices (`00` through `05`), zero-flash light/dark theme toggle, and mobile menu.
2. **Editorial Hero (`Hero.tsx`):**
   - Asymmetric composition with bold headline: *"Building things. Solving problems. Sharing knowledge."*
   - Live IST timekeeper, geo-coordinates (`26°48' N, 84°30' E`), and high-level telemetry card (400+ DSA, 150+ Mentored, ₹10L Seed Funding).
3. **About & Background (`AboutSection.tsx`):**
   - Verified academic dossier: B.Tech in CSE from GLA University, Mathura (Graduated June 2024).
   - Core engineering principles: First-Principles Engineering, Pedagogical Clarity, and Zero Artificial Fluff.
4. **Selected Projects (`SelectedWork.tsx`):**
   - **01. BubbleChat:** Real-time messaging platform with WebSocket simulation, sub-50ms latency telemetry, and serverless AWS Lambda routing.
   - **02. Deal Detective:** Automated price intelligence with Amazon & Flipkart scrapers, dynamic SVG trend sparklines, and email alert engine.
   - **03. SkySight:** Zero-dependency atmospheric client utilizing OpenWeather API with live weather sensor card.
5. **Experience Ledger (`ExperienceSection.tsx`):**
   - Computer Science Instructor & Technical Trainer at Champaran Group of Institutions (150+ students mentored, coached State Rank 2 Bihar Polytechnic).
   - Frontend Developer at Octanet (20% page performance uplift, ReactJS + Tailwind).
   - Frontend Developer Intern at Bharat Intern.
6. **Problem Solving & DSA Control Center (`ProblemSolvingSection.tsx`):**
   - Prominent **400+** total problem count.
   - Platform breakdown: LeetCode 175+, GeeksforGeeks 80+, HackerRank 120+.
   - Algorithmic competency matrix (Arrays, Linked Lists, Trees, Graphs, DP).
   - Java algorithmic specimen with interactive tabs (`SlidingWindow`, `TreeDFS`).
7. **Technical Competencies Matrix (`TechnicalSkillsSection.tsx`):**
   - Categorized grids for Languages, Frontend, Backend & Cloud, Core CS, Tooling, and AI-Assisted Workflows.
   - Zero fake progress bars or percentages.
8. **Leadership & Achievements (`LeadershipAchievementsSection.tsx`):**
   - **₹10,00,000 Seed Funding:** Startup Bihar grant awarded in March 2025 for **Essence Royale** (Fragrance E-commerce) as sole founder.
   - GDSC Cloud Lead, Google Cloud Career Practitioner Pathway Facilitator, Arcade Facilitator.
   - Verified certifications: Great Learning UI/UX, Cisco Cybersecurity Essentials.
9. **Contact & Colophon (`ContactSection.tsx`):**
   - One-click tactile "Copy Email" and "Copy Phone" interactions.
   - Direct transmission drafting form generating prefilled mailto clients.
   - Direct links to GitHub and LinkedIn.

---

## 3. Technology Stack

- **Framework:** Next.js 15.5.x (App Router)
- **Runtime & UI:** React 19, TypeScript
- **Styling:** Tailwind CSS, PostCSS, Autoprefixer
- **Icons:** Lucide React + custom inline SVGs for brand marks
- **SEO & Schema:** JSON-LD Person Schema, OpenGraph, Twitter Cards, `robots.txt`, dynamic `sitemap.xml`

---

## 4. Local Execution & Build

```bash
# Install dependencies
npm install

# Run development server (on safe dev port 3000)
npm run dev

# Compile production bundle
npm run build

# Start production server
npm run start
```

---

## 5. Directory Structure

```
arif/
├── public/                 # Static public assets
├── src/
│   ├── app/
│   │   ├── globals.css     # Design tokens, variables, typography
│   │   ├── layout.tsx      # Root layout, fonts, JSON-LD metadata
│   │   ├── page.tsx        # Homepage composition
│   │   ├── robots.ts       # SEO robots route
│   │   └── sitemap.ts      # SEO sitemap route
│   ├── components/
│   │   ├── icons.tsx       # Sharp SVG brand icons (GitHub, LinkedIn)
│   │   ├── Navbar.tsx      # Minimalist sticky navigation
│   │   ├── ThemeToggle.tsx # Light/dark mode toggle with state persistence
│   │   ├── Hero.tsx        # Editorial asymmetric hero
│   │   ├── AboutSection.tsx# Dossier & pedagogical philosophy
│   │   ├── SelectedWork.tsx# Interactive project showcase & bespoke mockups
│   │   ├── ExperienceSection.tsx # Chronological career ledger
│   │   ├── ProblemSolvingSection.tsx # 400+ DSA showcase & code specimen
│   │   ├── TechnicalSkillsSection.tsx # Categorized capabilities matrix
│   │   ├── LeadershipAchievementsSection.tsx # Seed funding & Google leadership
│   │   └── ContactSection.tsx # Tactile copy actions & contact channels
│   ├── data/
│   │   └── portfolioData.ts# Structured factual portfolio content
│   └── lib/
│       └── utils.ts        # Helper routines and timezone utilities
├── next.config.mjs         # Next.js build configuration
├── tailwind.config.ts      # Tailwind design system configuration
├── tsconfig.json           # Strict TypeScript configuration
└── package.json            # Project manifest
```
