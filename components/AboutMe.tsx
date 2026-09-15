import React from "react";
import { PROFILE } from "@/data/profile";
import { CpuIcon, ShieldIcon, SparklesIcon, LayersIcon, AwardIcon } from "./Icons";

export const AboutMe: React.FC = () => {
  const pillarIcons = [
    <ShieldIcon key="1" className="w-5 h-5 text-cyan-400" />,
    <CpuIcon key="2" className="w-5 h-5 text-emerald-400" />,
    <SparklesIcon key="3" className="w-5 h-5 text-purple-400" />,
    <LayersIcon key="4" className="w-5 h-5 text-blue-400" />
  ];

  return (
    <section id="about" className="py-14 md:py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-start gap-2 mb-12">
          <span className="text-xs font-mono tracking-widest text-cyan-400 uppercase bg-cyan-500/10 px-3 py-1 rounded-md border border-cyan-500/20">
            // 01 ARCHITECT PROFILE
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            About Me & Leadership Philosophy
          </h2>
          <p className="text-gray-400 max-w-2xl text-sm sm:text-base">
            From low-level systems programming to driving global architecture for Tier-1 banks, insurance providers, and luxury cruise lines.
          </p>
        </div>

        {/* Narrative & Highlights */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Executive Summary Card */}
          <div className="lg:col-span-7 space-y-6">
            <div className="glass-panel p-8 rounded-2xl border border-white/10 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/5 rounded-full blur-2xl" />
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-cyan-400" />
                Executive Summary
              </h3>
              <p className="text-gray-300 leading-relaxed text-sm sm:text-base font-normal">
                {PROFILE.summary}
              </p>

              <div className="mt-6 pt-6 border-t border-white/10 grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-gray-300 font-mono">
                <div className="flex items-center gap-2">
                  <span className="text-cyan-400 font-bold">&bull;</span>
                  <span>Education: {PROFILE.education.degree}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-cyan-400 font-bold">&bull;</span>
                  <span>Discipline: {PROFILE.education.field}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-cyan-400 font-bold">&bull;</span>
                  <span>Institution: {PROFILE.education.institution} ({PROFILE.education.period})</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-cyan-400 font-bold">&bull;</span>
                  <span>Location: {PROFILE.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-cyan-400 font-bold">&bull;</span>
                  <span>Frameworks: SAFe, Scrum, Jutro, Guidewire</span>
                </div>
              </div>
            </div>

            {/* Guiding Principles / Edgy quotes */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="glass-panel p-5 rounded-xl border border-white/10">
                <span className="text-xs font-mono text-cyan-400">// ARCHITECTURE PRINCIPLE</span>
                <h4 className="text-sm font-semibold text-white mt-1">Decoupled Resilience</h4>
                <p className="text-xs text-gray-400 mt-1 leading-relaxed">
                  Design systems where microfrontends and mobile modules fail independently without cascading outages.
                </p>
              </div>
              <div className="glass-panel p-5 rounded-xl border border-white/10">
                <span className="text-xs font-mono text-emerald-400">// AI INTEGRATION PRINCIPLE</span>
                <h4 className="text-sm font-semibold text-white mt-1">Context Over Hype</h4>
                <p className="text-xs text-gray-400 mt-1 leading-relaxed">
                  Harness LLMs not as toys, but as deterministically bounded agentic workers integrated with enterprise RAG pipelines.
                </p>
              </div>
            </div>
          </div>

          {/* 4 Pillars Bento Grid */}
          <div className="lg:col-span-5 space-y-4">
            <h3 className="text-xs font-mono uppercase tracking-wider text-gray-400 mb-2">
              CORE PILLARS OF MASTERY
            </h3>
            {PROFILE.pillars.map((pillar, idx) => (
              <div
                key={idx}
                className="glass-panel glass-panel-hover p-5 rounded-xl border border-white/10 group cursor-default"
              >
                <div className="flex items-start gap-3.5">
                  <div className="p-2 rounded-lg bg-white/5 border border-white/10 group-hover:border-cyan-400/50 group-hover:bg-cyan-500/10 transition-all">
                    {pillarIcons[idx]}
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-white group-hover:text-cyan-300 transition-colors">
                      {pillar.title}
                    </h4>
                    <p className="text-xs text-gray-400 mt-1 leading-relaxed">
                      {pillar.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
