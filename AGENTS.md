# AGENTS.md — How This Project Was Built

This document records the prompts and agentic workflow used to design, build, and evolve
the Sreelal H Digital Twin portfolio website with an AI coding agent (GitHub Copilot).
It exists so the build process is reproducible and auditable.

## Stack

- **Framework:** Next.js 16 (App Router, Webpack)
- **Language:** TypeScript, React 19
- **Styling:** Tailwind CSS v4
- **AI Chat:** OpenRouter API (`app/api/chat/route.ts`), with an offline local fallback
  responder so the chat still works without a live API key/connection.
- **Data Source:** All resume/profile content is centralized in [`data/profile.ts`](../data/profile.ts)
  and consumed by the section components in `components/`.

## Build Timeline (Prompts Used)

### Prompt #1 — Initial site generation
> Please build me a professional website running locally. My profile is in Sreelal.pdf.
> Make the website stunning: enterprise meets edgy. It should include about me, my career
> journey, links to portfolio (for future). Iterate to make it as slick and professional
> as possible and let me know only when complete. Use nextJS.

**What the agent did:**
- Scaffolded a Next.js + TypeScript + Tailwind project.
- Extracted structured resume data (career history, skills, certifications, education)
  from the source PDF into `data/profile.ts` as a single typed source of truth.
- Built section components: `Hero`, `AboutMe`, `CareerJourney`, `SkillsBento`,
  `PortfolioSection`, `Certifications`, `Footer`, `Navbar`.
- Iterated on visual design toward a dark, glassmorphic "enterprise meets edgy" theme
  (cyan/emerald accent gradients, glass panels, mono/sans type pairing).

### Prompt #2 — Digital Twin AI chat
> That's great. Please now add the ability to have an AI chat with a "Digital Twin"
> which can answer questions about my career. Please use OpenRouter. My
> OPENROUTER_API_KEY is in the .env file in the project root. Please use the model
> named "opena/gpt-oss-120b". Make the changes, make sure it works, let me know when
> ready for me.

**What the agent did:**
- Added `app/api/chat/route.ts`, a server route that calls the OpenRouter chat
  completions API using the API key from `.env` (with a manual `.env` parser fallback
  in case `process.env` isn't populated).
- Embedded a detailed system prompt encoding Sreelal's verified career facts so the
  model answers in first person with accurate, source-grounded details.
- Added an intelligent local fallback responder (keyword-matched canned answers) used
  when no API key is present or the OpenRouter call fails, so the chat experience never
  breaks.
- Built `components/DigitalTwinChat.tsx` and `components/DigitalTwinSection.tsx` for the
  chat UI.

### Prompt #3 — Profile enrichment from additional source documents
> I am adding Sreelal_detailed.pdf and linkedin.pdf, which had detailed resume and
> current linkedin profile, review those as well and add any missing items onto the
> portal. Also create an AGENTS.md documenting how this project was built.

**What the agent did:**
- Extracted text from `Sreelal_detailed.pdf` and `linkedin.pdf` (via a temporary,
  isolated `pdf-parse` script — no permanent dependency was added to the project).
- Diffed the extracted content against `data/profile.ts` and reconciled gaps:
  - Updated current title to **Principal Architect** (promoted Aug 2025), while
    preserving the prior **Engineering Manager / Technical Architect** role
    (Aug 2015 – Aug 2025) as a distinct career timeline entry.
  - Added the **Citi Empower** financial-coaching iOS project (Au10Tix OCR identity
    verification, multi-account insights, 4-engineer team lead) as both a career
    project and a portfolio card.
  - Added the **AMFAM Insurance** claims adjuster/surveyor project alongside the
    existing AXA Asia entry.
  - Corrected education details: **Marian Engineering College, B.Tech Information
    Technology (2003–2007)** (previously a generic placeholder).
- Updated the Digital Twin chat's system prompt and offline fallback responses to stay
  consistent with the corrected profile data.
- Created this `doc/AGENTS.md` file.

### Prompt #4 — Organize reference source PDFs
> move all the reference pdfs to a reference folder

**What the agent did:**
- Moved the source resume PDFs (`Sreelal_H.pdf`, `Sreelal_detailed.pdf`, `linkedin.pdf`)
  from the project root into `reference/`. These are only used as source material for
  populating `data/profile.ts` and are not served by the app.
- Left `public/Sreelal_H.pdf` untouched — that copy is the one linked/downloaded from
  the live site (Navbar, Hero, Footer "Download Resume" actions).

## Working Conventions for Future Updates

- Treat `data/profile.ts` as the single source of truth for all resume content; UI
  components should only render from it, not hardcode facts.
- Keep the Digital Twin chat's `SYSTEM_PROMPT` and `getIntelligentFallback()` in
  `app/api/chat/route.ts` in sync with `data/profile.ts` whenever career facts change.
- When ingesting new source PDFs, extract text into a scratch location outside the
  project (avoid adding one-off parsing dependencies to `package.json`), reconcile
  facts manually, then discard the scratch tooling.
- Run `npm run build` after data/content changes to confirm the app still compiles and
  statically generates correctly.
