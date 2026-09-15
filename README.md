# Sreelal H Digital Twin

A modern personal portfolio and AI-powered digital twin for Sreelal H — built with Next.js, TypeScript, and Tailwind CSS.

This project presents:
- Executive profile and career overview
- Digital architecture and engineering leadership narrative
- Portfolio highlights across banking, insurance, healthcare, travel, and enterprise mobility
- An AI chat experience that answers questions about the profile, work history, and technical expertise
- A polished, dark “enterprise meets edgy” visual design

---

## Live Overview

This site is designed as a premium digital presence for a Principal Architect and Engineering Manager, combining:
- storytelling and professional positioning
- portfolio showcases
- technical credibility and certifications
- an interactive “Digital Twin” assistant

The app works both with and without an OpenRouter API key:
- With a valid key, the Digital Twin uses the live model
- Without a key, it gracefully falls back to a local intelligence layer so the experience still works

---

## Tech Stack

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS v4
- App Router architecture
- OpenRouter API integration for AI chat
- Static profile data centralized in a single source of truth

---

## Features

### Portfolio website
- Hero section with strong personal positioning
- About section and executive summary
- Career journey timeline
- Core skills and capability areas
- Portfolio cards and project case studies
- Certifications and credentials
- Contact and resume download actions

### Digital Twin AI chat
- Ask questions about:
  - career history
  - architecture experience
  - mobile engineering
  - microfrontend strategy
  - AI / Agentic AI work
  - certifications and credentials
- Uses OpenRouter if configured
- Falls back automatically when no API key is available

---

## Project Structure

```bash
.
├── app/
│   ├── api/
│   │   └── chat/
│   │       └── route.ts
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── AboutMe.tsx
│   ├── CareerJourney.tsx
│   ├── Certifications.tsx
│   ├── DigitalTwinChat.tsx
│   ├── DigitalTwinSection.tsx
│   ├── Footer.tsx
│   ├── Hero.tsx
│   ├── Icons.tsx
│   ├── Navbar.tsx
│   ├── PortfolioSection.tsx
│   └── SkillsBento.tsx
├── data/
│   └── profile.ts
├── public/
├── reference/
├── .env
├── next.config.ts
├── package.json
├── postcss.config.mjs
├── tsconfig.json
├── next-env.d.ts
├── AGENTS.md
├── CLAUDE.md
└── README.md
```

---

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Configure environment variables

Create a `.env` file in the project root:

```bash
OPENROUTER_API_KEY=your_api_key_here
```

> The app is designed to keep working even if this key is not configured, using a local fallback response system.

### 3. Run the app locally

```bash
npm run dev
```

Then open:

```bash
http://localhost:3000
```

---

## Production Build

```bash
npm run build
```

Then start the production server:

```bash
npm run start
```

---

## Scripts

```bash
npm run dev     # run local development server
npm run build   # generate production build
npm run start   # run production build
```

---

## Environment Notes

The AI chat route is implemented in:

```bash
app/api/chat/route.ts
```

It:
- reads the OpenRouter API key from environment variables
- falls back to parsing `.env` if needed
- retries with a few free model options
- uses a local fallback response when no valid API key or live model is available

This makes the site resilient in offline or restricted environments.

---

## Profile Data

The app’s content is driven from:

```bash
data/profile.ts
```

This acts as the single source of truth for:
- personal details
- resume summary
- experience timeline
- skills
- certifications
- projects
- portfolio narrative

This keeps the site maintainable and avoids scattering profile facts across components.

---

## Design Direction

The visual system is intended to feel:
- premium and executive
- modern and high-tech
- dark-mode-focused
- confident, technical, and future-oriented

Includes:
- glassmorphism panels
- cyan/emerald accent gradients
- structured content blocks
- strong typography hierarchy
- enterprise-ready UX patterns

---

## Notes

- The source resume/reference PDFs are kept in the `reference/` folder and are not served as part of the app.
- The public resume file is used for download links and site presentation.
- The Digital Twin is intentionally grounded in profile data and designed to answer questions about the person’s work with authority and clarity.

---

## License

This project is intended for personal portfolio and professional presentation use.

---

## Contact

For project-related discussion, hiring inquiries, architecture advisory, or collaboration opportunities, use the contact details embedded in the site or profile data.
