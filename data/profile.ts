export interface ProjectItem {
  id: string;
  title: string;
  category: "Mobile Architecture" | "Enterprise Microfrontends" | "Agentic AI & ML" | "IoT & Travel";
  description: string;
  tags: string[];
  metrics: string;
  clientOrOrg?: string;
  architectureHighlights: string[];
  link?: string;
  status: "Production Enterprise" | "Architecture Prototype" | "Active Research";
}

export interface CareerRole {
  company: string;
  role: string;
  period: string;
  location?: string;
  summary: string;
  achievements: string[];
  projects?: {
    client: string;
    industry: "Banking" | "Insurance" | "Healthcare" | "Travel" | "Enterprise Tech";
    tech: string[];
    description: string;
    keyDeliverables: string[];
  }[];
  skillsUsed: string[];
}

export interface Certification {
  title: string;
  issuer: string;
  year: string;
  category: "AI & Data Science" | "Cloud Architecture" | "Agile & Leadership";
  badgeColor: string;
}

// Career started January 2008; experience is computed dynamically so it never goes stale.
const CAREER_START_DATE = new Date(2008, 0, 1);

function getYearsOfExperience(asOf: Date = new Date()): number {
  let years = asOf.getFullYear() - CAREER_START_DATE.getFullYear();
  const beforeAnniversary =
    asOf.getMonth() < CAREER_START_DATE.getMonth() ||
    (asOf.getMonth() === CAREER_START_DATE.getMonth() && asOf.getDate() < CAREER_START_DATE.getDate());
  if (beforeAnniversary) years--;
  return years;
}

const YEARS_OF_EXPERIENCE = getYearsOfExperience();
const YEARS_OF_EXPERIENCE_LABEL = `${YEARS_OF_EXPERIENCE}+`;

export const PROFILE = {
  name: "SREELAL H",
  roleTitle: "Principal Architect & Engineering Manager",
  subtitle: "Mobile, Enterprise Frontend & Agentic AI Systems",
  location: "Trivandrum, Kerala, India",
  phone: "+91 9495244113",
  email: "sreelal.h@gmail.com",
  linkedin: "https://www.linkedin.com/in/sreelalh",
  linkedinDisplay: "linkedin.com/in/sreelalh",
  resumePdfUrl: "/Sreelal_H.pdf",
  status: "Available for Architecture Advisory & Leadership Roles",
  yearsOfExperience: YEARS_OF_EXPERIENCE,
  yearsOfExperienceLabel: YEARS_OF_EXPERIENCE_LABEL,
  stats: [
    { label: "Years Experience", value: YEARS_OF_EXPERIENCE_LABEL, detail: "Enterprise software & platform engineering" },
    { label: "Global Enterprises", value: "8+", detail: "Banking, Insurance, Healthcare, Travel" },
    { label: "AI & Cloud Credentials", value: "8", detail: "Microsoft Azure, GitHub Copilot, IIM Kozhikode" },
    { label: "Engineering Scope", value: "Global", detail: "Leading distributed cross-functional teams" }
  ],
  summary:
    `Visionary Technical Architect and Engineering Leader with over ${YEARS_OF_EXPERIENCE} years of experience in software engineering, specializing in Solution Architecture, Enterprise Applications, and Mobile & Frontend digital platforms. Experienced in leading distributed teams, defining scalable microfrontend architectures, driving technical decisions, and delivering high-impact enterprise solutions for global clients across Banking, Insurance, Healthcare, and Travel. Deeply experienced in modern technology stacks including React Native, Swift, SwiftUI, and enterprise frameworks (Jutro/Guidewire). Passionate about driving next-generation digital transformations by leveraging Agentic AI, LLMs, and Machine Learning to architect intelligent, future-proof solutions.`,
  pillars: [
    {
      title: "Enterprise Architecture",
      desc: "Architecting resilient, compliant multi-tier platforms with strict SLAs, microfrontend federation, and clean architectural boundaries."
    },
    {
      title: "Mobile & Digital Engineering",
      desc: "Delivering high-security native (Swift/SwiftUI) and cross-platform (React Native) applications with biometric identity and offline-first data sync."
    },
    {
      title: "Agentic AI & Machine Learning",
      desc: "Transforming enterprise workflows with context engineering, LLM orchestration, RAG architectures, and autonomous multi-agent pipelines."
    },
    {
      title: "Engineering Leadership",
      desc: "Empowering global high-performing squads across Agile/SAFe frameworks, driving DevOps CI/CD excellence and mentoring future architects."
    }
  ],
  skills: {
    architecture: [
      "Solution & Technical Architecture",
      "Microfrontend & Modular Architecture",
      "System Design (MVVM, MVP, Clean Swift)",
      "Engineering Management & Team Scaling",
      "Agile/Scrum & SAFe Frameworks",
      "Enterprise Security & Governance"
    ],
    mobile: [
      "iOS (Swift, SwiftUI, UIKit, Objective-C)",
      "React Native (iOS & Android)",
      "Cordova & Hybrid Frameworks",
      "Guidewire Digital Platform (JDP) / Jutro",
      "Digital Key & BLE Hardware Integration",
      "Biometric SDKs (NEC Face ID, MS Entra)"
    ],
    web: [
      "React.js & Next.js",
      "TypeScript & JavaScript (ESNext)",
      "Tailwind CSS, HTML5, CSS3",
      "AngularJS & Microfrontends",
      "State Management & Web Workers"
    ],
    cloudAndDevOps: [
      "Microsoft Azure Cloud",
      "RESTful APIs & Microservices",
      "Node.js & Python",
      "MongoDB & SQL Databases",
      "CI/CD Pipeline Automation (GitHub Actions, Azure DevOps)",
      "Containerization & Monitoring"
    ],
    aiAndData: [
      "Generative AI & Agentic Systems",
      "Large Language Models (LLMs) & RAG",
      "Context Engineering & Prompt Architecture",
      "Machine Learning & Data Science",
      "NLP & Vector Search",
      "AI-Assisted Engineering (GitHub Copilot, Cursor)"
    ]
  },
  career: [
    {
      company: "Ernst & Young (EY)",
      role: "Principal Architect",
      period: "Aug 2025 – Present",
      location: "India / Global Clients (APAC & US)",
      summary:
        "Promoted to Principal Architect to lead end-to-end architecture for enterprise and consumer mobile applications spanning banking, insurance, and healthcare, partnering directly with global clients across APAC and US.",
      achievements: [
        "Own architecture and technical direction for digital wallets, native financial platforms, and AI-powered applications across Tier-1 global clients.",
        "Translate business requirements into scalable, secure, performance-driven mobile architectures for global stakeholders.",
        "Lead technical reviews, architecture validations, and QA assessments ensuring continuous alignment between technology and business goals.",
        "Drive the hybrid application design strategy for insurance adjuster and surveyor field solutions, enabling seamless on-the-go claim processing."
      ],
      skillsUsed: ["Solution Architecture", "Stakeholder Management", "React Native", "Swift", "AI-Powered Applications", "APAC/US Client Delivery"]
    },
    {
      company: "Ernst & Young (EY)",
      role: "Engineering Manager / Technical Architect",
      period: "Aug 2015 – Aug 2025",
      location: "India / Global Clients",
      summary:
        "Drove architecture, technical delivery, and engineering initiatives for complex, mission-critical enterprise platforms across Tier-1 global clients.",
      achievements: [
        "Architected core modules for Bank of Bangkok secure React Native digital wallet with Microsoft Entra & NEC biometric authentication.",
        "Spearheaded enterprise iOS banking apps for Bank of Singapore utilizing Swift, modular clean architecture, and rigorous security standards.",
        "Engineered scalable enterprise microfrontend architecture using Jutro and React.js for Safety Insurance.",
        "Orchestrated native iOS development for Kaiser Permanente as Technical Scrum Master, aligning distributed engineering squads.",
        "Delivered cross-platform mobile solutions for AXA Asia and AMFAM Insurance adjusters/surveyors to streamline claim data capture workflows.",
        "Developed a guest-facing native iOS app for Royal Caribbean Cruises, enabling frictionless boarding, digital keys, connected stateroom controls, and onboard wayfinding.",
        "Built the Citi Empower financial coaching iOS app, integrating Au10Tix OCR identity verification and multi-account financial insights, while leading a team of four engineers."
      ],
      projects: [
        {
          client: "Bank of Bangkok",
          industry: "Banking",
          tech: ["React Native", "TypeScript", "Microsoft Entra", "NEC Face Detection", "CI/CD"],
          description: "Technical architecture and development of a next-generation secure mobile wallet application across iOS and Android.",
          keyDeliverables: [
            "Architected modular multi-tier wallet infrastructure with zero-trust biometric verification.",
            "Unified enterprise single sign-on (SSO) with Microsoft Entra ID integration.",
            "Automated multi-stage CI/CD pipelines enabling rapid automated releases."
          ]
        },
        {
          client: "Bank of Singapore",
          industry: "Banking",
          tech: ["Swift", "UIKit", "Clean Swift", "Enterprise Security", "Modular Architecture"],
          description: "Spearheaded native iOS enterprise wealth management and banking applications.",
          keyDeliverables: [
            "Designed decoupled modular components with strict unit test coverage.",
            "Directed distributed development teams across regional time zones.",
            "Ensured financial compliance, end-to-end data encryption, and sub-second transaction times."
          ]
        },
        {
          client: "Safety Insurance",
          industry: "Insurance",
          tech: ["Jutro Framework", "Guidewire (JDP)", "React.js", "Microfrontends"],
          description: "Engineered scalable digital microfrontend architectures for modern policyholder and agent experiences.",
          keyDeliverables: [
            "Delivered reusable microfrontend component libraries aligned with Guidewire backend APIs.",
            "Decreased time-to-market for insurance claims and policy changes."
          ]
        },
        {
          client: "Royal Caribbean Cruises",
          industry: "Travel",
          tech: ["Swift", "Digital Keys SDK", "Mapbox", "Mapwize SDK", "BLE / IoT"],
          description: "Developed a native iOS application that streamlined guest boarding and delivered a connected stateroom experience across Royal Caribbean Cruises' fleet.",
          keyDeliverables: [
            "Integrated the Digital Keys SDK for secure, smartphone-based Bluetooth Low Energy (BLE) stateroom access.",
            "Enabled stateroom automation and multi-deck indoor wayfinding with Mapbox and Mapwize SDKs."
          ]
        },
        {
          client: "Kaiser Permanente",
          industry: "Healthcare",
          tech: ["Swift", "UIKit", "HIPAA Compliance", "Technical Scrum Master"],
          description: "Native iOS patient care and provider communications platform.",
          keyDeliverables: [
            "Led Agile ceremonies and sprint execution for global engineering teams.",
            "Adhered to stringent HIPAA and healthcare data privacy guidelines."
          ]
        },
        {
          client: "AXA Asia",
          industry: "Insurance",
          tech: ["Cordova", "AngularJS", "Mobile Data Capture", "Offline Sync"],
          description: "Cross-platform mobile solution for insurance claim adjusters and on-site surveyors.",
          keyDeliverables: [
            "Built robust offline data collection engine with auto-sync when network connectivity is restored.",
            "Streamlined claims investigation cycle time by 40%."
          ]
        },
        {
          client: "AMFAM Insurance",
          industry: "Insurance",
          tech: ["Cordova", "AngularJS", "MVVM", "Mobile Data Capture"],
          description: "Adjuster/surveyor mobile app for property and casualty claims settlement, built on a shared cross-platform hybrid architecture.",
          keyDeliverables: [
            "Designed reusable MVVM core framework shared across multiple insurance claim-adjuster clients.",
            "Enabled on-the-go claim settlement workflows for field adjusters."
          ]
        },
        {
          client: "Citi",
          industry: "Banking",
          tech: ["Swift", "Au10Tix OCR", "Financial APIs", "iOS"],
          description: "Citi Empower financial coaching iOS app helping users track spending, link accounts, and save smarter using integrated financial APIs.",
          keyDeliverables: [
            "Integrated Au10Tix OCR driving-license scanning for secure user authentication.",
            "Built multi-account linking for a unified view of spending and financial health.",
            "Led a team of four engineers delivering the application architecture end-to-end."
          ]
        }
      ],
      skillsUsed: ["Solution Architecture", "React Native", "Swift", "Jutro", "Azure", "CI/CD", "Team Leadership"]
    },
    {
      company: "Tata Consultancy Services (TCS)",
      role: "Assistant Consultant / Mobile App Developer",
      period: "Sep 2012 – Aug 2015",
      location: "India",
      summary:
        "Engineered proprietary enterprise mobility solutions and spearheaded native mobile developments for Fortune 50 enterprise accounts.",
      achievements: [
        "Engineered a proprietary enterprise Business Intelligence mobile app as a flagship TCS product.",
        "Contributed to native (Swift/Objective-C) and hybrid mobile application development for major clients including General Electric (GE).",
        "Mentored and guided cross-functional mobile development teams in architecture and code quality."
      ],
      skillsUsed: ["Swift", "Objective-C", "Business Intelligence", "Enterprise Mobility", "Technical Mentorship"]
    },
    {
      company: "UST Global",
      role: "Senior Software Engineer / Mobile App Developer",
      period: "Mar 2011 – Sep 2012",
      location: "India",
      summary:
        "Developed and integrated mission-critical hybrid and web mobile applications for prominent global clients.",
      achievements: [
        "Built enterprise mobile applications for high-profile accounts including GE and KPMG.",
        "Engineered responsive web-to-native bridges for seamless enterprise workflow integration."
      ],
      skillsUsed: ["Hybrid Apps", "JavaScript", "HTML5", "Enterprise Integration", "Client Engagement"]
    },
    {
      company: "RapidValue Solutions",
      role: "Senior Software Engineer / iOS Developer",
      period: "Jun 2009 – Oct 2010",
      location: "India",
      summary:
        "Delivered end-to-end native iOS application development solutions for diverse international customer portfolios.",
      achievements: [
        "Architected and released first-generation enterprise iOS applications on the App Store.",
        "Optimized mobile memory management, view rendering, and SQLite persistence."
      ],
      skillsUsed: ["iOS SDK", "Objective-C", "Cocoa Touch", "App Store Deployment"]
    },
    {
      company: "KTS Infotech",
      role: "Software Engineer",
      period: "Jan 2008 – May 2009",
      location: "India",
      summary:
        "Initiated engineering career developing high-performance Windows desktop and enterprise client-server applications.",
      achievements: [
        "Developed, debugged, and maintained robust business applications using VC++ and C#.NET.",
        "Gained foundational mastery in low-level systems programming, algorithms, and database design."
      ],
      skillsUsed: ["VC++", "C#.NET", "Object-Oriented Programming", "Relational Databases"]
    }
  ] as CareerRole[],
  portfolio: [
    {
      id: "biometric-wallet",
      title: "Biometric Zero-Trust Enterprise Wallet",
      category: "Mobile Architecture",
      description:
        "High-security financial wallet architecture integrating Microsoft Entra ID and NEC Face Detection biometrics. Features end-to-end payload encryption and hardware keychain isolation.",
      tags: ["React Native", "Microsoft Entra", "NEC Biometrics", "iOS / Android", "CI/CD"],
      metrics: "Enterprise Banking Grade • Multi-Factor Bio-Auth",
      clientOrOrg: "Bank of Bangkok",
      architectureHighlights: [
        "Hardware-backed secure enclave integration for cryptographic key pairs",
        "Passive liveness detection & anti-spoofing facial biometric pipelines",
        "Decoupled micro-module architecture with automated end-to-end pipeline validation"
      ],
      status: "Production Enterprise"
    },
    {
      id: "iot-stateroom-keys",
      title: "Guest-Facing Mobile Experience for Connected Cruise Staterooms",
      category: "IoT & Travel",
      description:
        "Native iOS product for Royal Caribbean Cruises that supports frictionless boarding, secure digital stateroom access, connected room controls, and multi-deck onboard navigation.",
      tags: ["Swift", "Digital Keys SDK", "Mapbox SDK", "Mapwize", "BLE / IoT"],
      metrics: "Native iOS • Guest Boarding, Digital Keys & Wayfinding",
      clientOrOrg: "Royal Caribbean Cruises",
      architectureHighlights: [
        "Integrated the Digital Keys SDK to provide secure BLE-based stateroom access.",
        "Enabled connected-stateroom automation directly from the guest mobile experience.",
        "Implemented indoor positioning and multi-deck wayfinding with Mapbox and Mapwize SDKs."
      ],
      status: "Production Enterprise"
    },
    {
      id: "jutro-microfrontend-platform",
      title: "Scalable Enterprise Microfrontend Platform",
      category: "Enterprise Microfrontends",
      description:
        "Multi-tenant, modular microfrontend architecture for global insurance operations leveraging Guidewire Jutro and React.js to accelerate autonomous squad delivery.",
      tags: ["Jutro / Guidewire (JDP)", "React.js", "Microfrontends", "Design Systems", "TypeScript"],
      metrics: "Unified Multi-Brand Platform • 40% Faster Release Cycles",
      clientOrOrg: "Safety Insurance",
      architectureHighlights: [
        "Runtime federated module loading with sandboxed state boundaries",
        "Strict enterprise design system compliance and accessible UI patterns",
        "Contract-first API integration with enterprise Guidewire policy engines"
      ],
      status: "Production Enterprise"
    },
    {
      id: "agentic-digital-twin",
      title: "Enterprise Agentic AI Twin & Knowledge Orchestrator",
      category: "Agentic AI & ML",
      description:
        "Autonomous digital twin system integrating context engineering, retrieval-augmented generation (RAG), and multi-turn LLM reasoning to represent technical leadership profiles.",
      tags: ["Agentic AI", "LLMs", "RAG", "Next.js", "OpenRouter", "Context Engineering"],
      metrics: "Sub-second Streaming AI • Real-time Persona Emulation",
      clientOrOrg: "Digital Twin R&D Initiative",
      architectureHighlights: [
        `Dynamic prompt injection with semantic chunking of ${YEARS_OF_EXPERIENCE}+ years of technical case studies`,
        "Resilient edge API route with graceful offline failover mechanisms",
        "Contextual memory and targeted career advisory Q&A capabilities"
      ],
      status: "Architecture Prototype"
    },
    {
      id: "wealth-ios-platform",
      title: "Mission-Critical Private Wealth iOS Platform",
      category: "Mobile Architecture",
      description:
        "Highly hardened enterprise iOS application for private wealth management, executing large-scale portfolio analytics and high-value transactional flows.",
      tags: ["Swift", "UIKit", "Clean Swift VIP", "Security Hardening", "Unit Testing"],
      metrics: "High Net Worth Banking • 99.99% Reliability",
      clientOrOrg: "Bank of Singapore",
      architectureHighlights: [
        "Clean Swift VIP unidirectional architecture isolating business logic from views",
        "App shielding, certificate pinning, and jailbreak detection heuristics",
        "Modular framework packaging facilitating parallel distributed squad development"
      ],
      status: "Production Enterprise"
    },
    {
      id: "citi-empower-coaching",
      title: "Citi Empower Financial Coaching App",
      category: "Mobile Architecture",
      description:
        "Native iOS financial coaching application enabling users to link accounts, track spending, and build smarter savings habits through integrated financial APIs and secure identity verification.",
      tags: ["Swift", "Au10Tix OCR", "Financial APIs", "iOS", "Team Leadership"],
      metrics: "Multi-Account Insights • Secure OCR Identity Verification",
      clientOrOrg: "Citi",
      architectureHighlights: [
        "Au10Tix OCR-based driving license scanning for secure, frictionless authentication",
        "Unified multi-account financial data aggregation for spending analytics",
        "Led a 4-engineer team through end-to-end architecture and delivery"
      ],
      status: "Production Enterprise"
    }
  ] as ProjectItem[],
  certifications: [
    {
      title: "GitHub Copilot",
      issuer: "GitHub / Microsoft",
      year: "2025",
      category: "AI & Data Science",
      badgeColor: "from-cyan-500 to-blue-600"
    },
    {
      title: "Microsoft Azure AI Fundamentals",
      issuer: "Microsoft",
      year: "2025",
      category: "AI & Data Science",
      badgeColor: "from-blue-500 to-indigo-600"
    },
    {
      title: "Microsoft Azure Data Scientist Associate",
      issuer: "Microsoft",
      year: "2024",
      category: "AI & Data Science",
      badgeColor: "from-emerald-500 to-teal-600"
    },
    {
      title: "Certified in Data Science",
      issuer: "IIM Kozhikode",
      year: "2022",
      category: "AI & Data Science",
      badgeColor: "from-purple-500 to-pink-600"
    },
    {
      title: "Microsoft Azure Developer Associate",
      issuer: "Microsoft",
      year: "2020",
      category: "Cloud Architecture",
      badgeColor: "from-blue-600 to-cyan-500"
    },
    {
      title: "SAFe® Agilist",
      issuer: "Scaled Agile",
      year: "2022",
      category: "Agile & Leadership",
      badgeColor: "from-amber-500 to-orange-600"
    },
    {
      title: "Certified ScrumMaster (CSM®)",
      issuer: "Scrum Alliance",
      year: "2021",
      category: "Agile & Leadership",
      badgeColor: "from-green-500 to-emerald-600"
    },
    {
      title: "Certified Scrum Product Owner (CSPO®)",
      issuer: "Scrum Alliance",
      year: "2021",
      category: "Agile & Leadership",
      badgeColor: "from-teal-500 to-cyan-600"
    }
  ] as Certification[],
  education: {
    degree: "Bachelor of Technology (B.Tech)",
    field: "Information Technology",
    institution: "Marian Engineering College",
    period: "2003 – 2007"
  }
};
