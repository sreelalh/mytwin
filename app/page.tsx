"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { DigitalTwinSection } from "@/components/DigitalTwinSection";
import { AboutMe } from "@/components/AboutMe";
import { CareerJourney } from "@/components/CareerJourney";
import { SkillsBento } from "@/components/SkillsBento";
import { PortfolioSection } from "@/components/PortfolioSection";
import { Certifications } from "@/components/Certifications";
import { Footer } from "@/components/Footer";
import { DigitalTwinChat } from "@/components/DigitalTwinChat";

export default function Home() {
  const [chatOpen, setChatOpen] = useState(false);

  return (
    <main className="min-h-screen relative flex flex-col bg-[#06080d] selection:bg-cyan-400 selection:text-black">
      {/* Top Fixed Navbar */}
      <Navbar onOpenChat={() => setChatOpen(true)} />

      {/* Hero Section with Interactive Telemetry Terminal */}
      <Hero onOpenChat={() => setChatOpen(true)} />

      {/* Embedded High-Impact Digital Twin AI Console */}
      <DigitalTwinSection />

      {/* About Me & Executive Philosophy */}
      <AboutMe />

      {/* Career Journey & Enterprise Client Milestones */}
      <CareerJourney />

      {/* Core Competencies Bento Grid */}
      <SkillsBento />

      {/* Flagship Portfolio & Future Works */}
      <PortfolioSection />

      {/* Enterprise Certifications & Credentials */}
      <Certifications />

      {/* Footer & Direct Contact Channels */}
      <Footer />

      {/* Floating Digital Twin AI Chat Drawer */}
      <DigitalTwinChat isOpen={chatOpen} onClose={() => setChatOpen(false)} />
    </main>
  );
}
