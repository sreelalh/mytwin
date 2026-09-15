import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import { PROFILE } from "@/data/profile";

// Extract API key from process.env or fallback to direct .env file parsing
function getApiKey(): string | undefined {
  if (process.env.OPENROUTER_API_KEY) {
    return process.env.OPENROUTER_API_KEY.trim();
  }
  try {
    const envPath = path.join(process.cwd(), ".env");
    if (fs.existsSync(envPath)) {
      const content = fs.readFileSync(envPath, "utf-8");
      const match = content.match(/OPENROUTER_API_KEY=([^\r\n]+)/);
      if (match) return match[1].trim();
    }
  } catch (e) {
    // Ignore read errors
  }
  return undefined;
}

const PRIMARY_MODEL = "nvidia/nemotron-3.5-lightning:free";
const FALLBACK_MODELS = [
  "nvidia/llama-3.1-nemotron-70b-instruct:free",
  "meta-llama/llama-3.3-70b-instruct:free"
];

const SYSTEM_PROMPT = `
You are the interactive "Digital Twin" AI of Sreelal H.
You represent Sreelal H, a distinguished Principal Architect & Engineering Manager with over ${PROFILE.yearsOfExperience} years of enterprise software engineering experience across Mobile, Frontend digital platforms, and Agentic AI.

Tone & Persona:
- Persona: First person ("I", "my career", "in my architecture at EY..."). Speak with senior technical authority, executive clarity, and an "Enterprise meets Edgy" style (visionary, direct, engineering-first, articulate).
- Keep answers crisp, highly structured with bullet points, and quantitative where possible.

Comprehensive Career Knowledge Base (Strict Truth from Sreelal_H.pdf, Sreelal_detailed.pdf, and LinkedIn profile):
- Current Role: Principal Architect at Ernst & Young (EY) (Aug 2025 – Present), promoted from Engineering Manager / Technical Architect (Aug 2015 – Aug 2025).
  * As Principal Architect: own end-to-end architecture for enterprise/consumer mobile apps across banking, insurance, and healthcare; partner directly with global clients across APAC and US; lead technical reviews and architecture validations.
  * Bank of Bangkok: Technical architecture & development of secure React Native wallet app (iOS/Android). Integrated Microsoft Entra SSO and NEC Face Detection biometrics. Automated CI/CD pipelines.
  * Bank of Singapore: Native enterprise iOS wealth management apps using Swift & UIKit. Decoupled modular Clean Swift VIP architecture with high financial compliance.
  * Safety Insurance: Engineered highly scalable microfrontend architecture using Guidewire Jutro and React.js.
  * Kaiser Permanente: Native iOS patient healthcare development (Swift/UIKit), Technical Scrum Master for distributed teams.
  * Royal Caribbean Cruises: Connected stateroom IoT experience (Swift), Bluetooth Low Energy (BLE) Digital Keys SDK, and indoor positioning using Mapbox & Mapwize SDKs.
  * AXA Asia & AMFAM Insurance: Cross-platform mobile data capture solutions (Cordova/AngularJS/MVVM) for insurance claim adjusters and surveyors with offline sync.
  * Citi Empower: Native iOS financial coaching app with Au10Tix OCR identity verification and multi-account financial insights; led a team of 4 engineers.
- Prior Enterprise Experience:
  * Tata Consultancy Services (TCS) (Sep 2012 – Aug 2015): Assistant Consultant / Mobile App Developer. Engineered proprietary enterprise Business Intelligence mobile app as a core TCS product; developed native (Swift/Obj-C) and hybrid apps for GE; mentored development teams.
  * UST Global (Mar 2011 – Sep 2012): Senior Software Engineer / Mobile App Developer. Developed hybrid mobile apps for GE and KPMG.
  * RapidValue Solutions (Jun 2009 – Oct 2010): Senior Software Engineer / iOS Developer. End-to-end native iOS solutions.
  * KTS Infotech (Jan 2008 – May 2009): Software Engineer. Began career building desktop & enterprise client-server software using VC++ and C#.NET.
- Education:
  * Bachelor of Technology (B.Tech) – Information Technology, Marian Engineering College (2003 – 2007).
- 8 Verified Professional Certifications:
  * AI & Data: GitHub Copilot (2025) | Microsoft Azure AI Fundamentals (2025) | Microsoft Azure Data Scientist Associate (2024) | Certified in Data Science, IIM Kozhikode (2022).
  * Cloud: Microsoft Azure Developer Associate (2020).
  * Agile & Leadership: SAFe® Agilist (2022) | Certified ScrumMaster (CSM®) (2021) | Certified Scrum Product Owner (CSPO®) (2021).
- Core Technical Stack:
  * Architecture: Solution Architecture, Microfrontends, Clean Swift, MVVM, SAFe, System Design.
  * Mobile: iOS (Swift, SwiftUI, UIKit, Objective-C), React Native, Cordova, Guidewire Jutro/JDP.
  * Web & Frontend: React.js, Next.js, TypeScript, JavaScript, AngularJS, Tailwind CSS, HTML5/CSS3.
  * Cloud & DevOps: Microsoft Azure, Node.js, Python, MongoDB, REST APIs, CI/CD pipelines.
  * AI & Data: Generative AI, Agentic AI, LLMs, RAG, Context Engineering, Machine Learning, NLP.
- Contact Details:
  * Email: sreelal.h@gmail.com
  * Phone: +91 9495244113
  * Location: Trivandrum, Kerala, India
  * LinkedIn: linkedin.com/in/sreelalh
`;

function getIntelligentFallback(query: string): string {
  const q = query.toLowerCase();

  if (q.includes("bangkok") || q.includes("wallet") || q.includes("biometric") || q.includes("nec") || q.includes("entra")) {
    return "At **Ernst & Young (EY)**, I led the technical architecture for the **Bank of Bangkok** secure mobile wallet across iOS and Android using **React Native**.\n\nKey Highlights:\n- Architected core zero-trust modular services isolating authentication and payment tokens.\n- Integrated **Microsoft Entra ID** for enterprise Single Sign-On (SSO).\n- Integrated **NEC Face Detection SDK** for passive liveness and anti-spoofing biometric authentication.\n- Established automated CI/CD pipelines for reliable cross-platform deployments.";
  }

  if (q.includes("jutro") || q.includes("microfrontend") || q.includes("safety insurance") || q.includes("guidewire")) {
    return "For **Safety Insurance**, I engineered a scalable enterprise microfrontend architecture using **Guidewire Digital Platform (JDP) / Jutro** and **React.js**.\n\nKey Highlights:\n- Decoupled monolithic insurance experiences into federated, independently deployable microfrontends.\n- Aligned modular UI patterns with Guidewire backend transactional APIs and strict enterprise insurance compliance.\n- Accelerated squad delivery and feature time-to-market by over 40%.";
  }

  if (q.includes("royal caribbean") || q.includes("cruise") || q.includes("ble") || q.includes("stateroom") || q.includes("key") || q.includes("mapbox")) {
    return "For **Royal Caribbean Cruises**, I developed a native iOS application in **Swift** to deliver a frictionless connected stateroom experience for cruise guests.\n\nKey Highlights:\n- Integrated a **Digital Keys SDK** using Bluetooth Low Energy (BLE) for touchless stateroom door access.\n- Embedded **Mapbox** and **Mapwize SDKs** for indoor multi-deck ship navigation and wayfinding.\n- Enabled automated in-stateroom environment controls (lighting, climate, media) directly from the guest's mobile device.";
  }

  if (q.includes("ai") || q.includes("agentic") || q.includes("llm") || q.includes("copilot") || q.includes("data science") || q.includes("rag")) {
    return "Agentic AI and LLM orchestration are central to my current architectural work.\n\nCredentials & Philosophy:\n- Certified in **GitHub Copilot (2025)**, **Microsoft Azure AI Fundamentals (2025)**, **Microsoft Azure Data Scientist Associate (2024)**, and **Data Science from IIM Kozhikode (2022)**.\n- I focus on moving enterprise systems beyond naive prompts into **deterministic Agentic AI workflows**: multi-turn cognitive loops, Context Engineering, and enterprise RAG with vector search to solve complex domain workflows reliably.";
  }

  if (q.includes("singapore") || q.includes("wealth") || q.includes("swift") || q.includes("ios") || q.includes("bank")) {
    return "For **Bank of Singapore**, I spearheaded the native iOS architecture for private banking and wealth management applications using **Swift**, **UIKit**, and **Clean Swift (VIP)** patterns.\n\nKey Highlights:\n- Designed modular, decoupled components with strict unit test coverage.\n- Enforced bank-grade encryption, certificate pinning, and jailbreak detection.\n- Directed distributed engineering teams across time zones to maintain high engineering standards.";
  }

  if (q.includes("certif") || q.includes("credential") || q.includes("safe") || q.includes("scrum")) {
    return "I hold 8 verified enterprise credentials:\n- **AI & Data:** GitHub Copilot (2025), Microsoft Azure AI Fundamentals (2025), Microsoft Azure Data Scientist Associate (2024), Certified in Data Science (IIM Kozhikode 2022)\n- **Cloud:** Microsoft Azure Developer Associate (2020)\n- **Agile Leadership:** SAFe® Agilist (2022), Certified ScrumMaster (CSM® 2021), Certified Scrum Product Owner (CSPO® 2021)";
  }

  if (q.includes("contact") || q.includes("hire") || q.includes("reach") || q.includes("email") || q.includes("phone") || q.includes("touch")) {
    return "I am available for high-stakes Technology Architecture advisory, Engineering Management, and AI transformation initiatives. Reach out directly at:\n\n- **Email:** sreelal.h@gmail.com\n- **Phone:** +91 9495244113\n- **Location:** Trivandrum, Kerala, India\n- **LinkedIn:** [linkedin.com/in/sreelalh](https://www.linkedin.com/in/sreelalh)\n- **Resume:** Official PDF CV is downloadable right from this website.";
  }

  if (q.includes("citi") || q.includes("empower") || q.includes("au10tix") || q.includes("ocr") || q.includes("financial coaching")) {
    return "For **Citi**, I led development of the **Empower** financial coaching iOS app in **Swift**, helping users understand and improve their spending habits.\n\nKey Highlights:\n- Integrated **Au10Tix OCR** driving-license scanning for secure, frictionless identity verification.\n- Built multi-account linking to give users a unified view of their financial transactions.\n- Led a team of 4 engineers, owning the application architecture end-to-end.";
  }

  if (q.includes("amfam") || q.includes("adjuster") || q.includes("surveyor") || q.includes("claim")) {
    return "I've delivered cross-platform claims mobile apps for both **AXA Asia** and **AMFAM Insurance**, built on a shared **Cordova/AngularJS/MVVM** hybrid architecture.\n\nKey Highlights:\n- Reusable core framework shared across multiple insurance claim-adjuster clients.\n- Offline-first data capture with auto-sync once connectivity is restored.\n- Streamlined claims investigation cycle time by ~40%.";
  }

  if (q.includes("education") || q.includes("college") || q.includes("degree") || q.includes("b.tech") || q.includes("university")) {
    return `I hold a **Bachelor of Technology (B.Tech) in Information Technology** from **Marian Engineering College** (2003 – 2007), which laid the foundation for my ${PROFILE.yearsOfExperienceLabel} year engineering career.`;
  }

  if (q.includes("principal architect") || q.includes("promotion") || q.includes("current role") || q.includes("title")) {
    return "I currently serve as **Principal Architect** at **EY** (Aug 2025 – Present), a promotion from my prior role as **Engineering Manager / Technical Architect** (Aug 2015 – Aug 2025).\n\nIn this role I own end-to-end architecture for enterprise and consumer mobile applications across banking, insurance, and healthcare, partnering directly with global clients across APAC and the US.";
  }

  return `Hello! I am Sreelal H's Digital Twin. Over my ${PROFILE.yearsOfExperienceLabel} years as a Principal Architect and Engineering Manager at EY and TCS, I've delivered mission-critical platforms for Bank of Bangkok, Bank of Singapore, Safety Insurance, Royal Caribbean Cruises, Kaiser Permanente, Citi, AXA Asia, and AMFAM Insurance.\n\nAsk me about any specific project, my architectural approach to Mobile and Microfrontends, my Agentic AI practice, or my certifications!`;
}

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();
    const lastUserMessage = messages?.[messages.length - 1]?.content || "";

    const apiKey = getApiKey();

    if (!apiKey) {
      console.warn("OPENROUTER_API_KEY not found in environment or .env file.");
      const fallbackReply = getIntelligentFallback(lastUserMessage);
      return NextResponse.json({
        reply: fallbackReply,
        model: PRIMARY_MODEL,
        source: "offline-twin-no-key"
      });
    }

    // Try calling OpenRouter with the requested model: nvidia/nemotron-3.5-lightning:free
    const modelsToTry = [PRIMARY_MODEL, ...FALLBACK_MODELS];

    for (const model of modelsToTry) {
      try {
        const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
          method: "POST",
          headers: {
            Authorization: `Bearer ${apiKey}`,
            "Content-Type": "application/json",
            "HTTP-Referer": "http://localhost:3000",
            "X-Title": "Sreelal H Digital Twin"
          },
          body: JSON.stringify({
            model: model,
            messages: [
              { role: "system", content: SYSTEM_PROMPT },
              ...(messages || [])
            ],
            temperature: 0.7,
            max_tokens: 700
          }),
          signal: AbortSignal.timeout(9000) // 9s timeout
        });

        if (response.ok) {
          const data = await response.json();
          const reply = data.choices?.[0]?.message?.content;
          if (reply) {
            return NextResponse.json({
              reply,
              model: model,
              source: "openrouter"
            });
          }
        } else {
          console.warn(`OpenRouter model ${model} returned status ${response.status}`);
        }
      } catch (err: any) {
        console.warn(`Attempt with ${model} failed: ${err.message}`);
      }
    }

    // If OpenRouter calls fail (e.g., local sandbox restriction or network issue), provide instant high-fidelity fallback
    const fallbackReply = getIntelligentFallback(lastUserMessage);
    return NextResponse.json({
      reply: fallbackReply,
      model: PRIMARY_MODEL,
      source: "local-twin-fallback"
    });
  } catch (error) {
    return NextResponse.json(
      {
        reply: `I am ready to answer any questions about Sreelal H's ${PROFILE.yearsOfExperienceLabel} years of technical architecture, enterprise mobile solutions, and Agentic AI work. What would you like to know?`,
        model: PRIMARY_MODEL,
        source: "error-fallback"
      },
      { status: 200 }
    );
  }
}
