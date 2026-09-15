import React from "react";
import { PROFILE } from "@/data/profile";
import {
  CpuIcon,
  ShieldIcon,
  SmartphoneIcon,
  SparklesIcon,
  DatabaseIcon,
  LayersIcon,
  ZapIcon
} from "./Icons";

export const SkillsBento: React.FC = () => {
  return (
    <section id="competencies" className="py-14 md:py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-start gap-2 mb-12">
          <span className="text-xs font-mono tracking-widest text-cyan-400 uppercase bg-cyan-500/10 px-3 py-1 rounded-md border border-cyan-500/20">
            // 03 CORE COMPETENCIES & STACK
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Technical Architecture & Competencies
          </h2>
          <p className="text-gray-400 max-w-2xl text-sm sm:text-base">
            Engineered through {PROFILE.yearsOfExperienceLabel} years of battle-tested enterprise implementations and relentless adoption of bleeding-edge paradigms.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Bento Card 1: AI & Data Engineering (Large Hero Tile) */}
          <div className="md:col-span-7 glass-panel p-7 rounded-2xl border border-white/10 relative overflow-hidden group hover:border-purple-500/40 transition-all">
            <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2.5 rounded-xl bg-purple-500/10 border border-purple-500/30 text-purple-400">
                <SparklesIcon className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[11px] font-mono text-purple-400 uppercase tracking-wider">
                  FRONTIER PARADIGM
                </span>
                <h3 className="text-lg font-bold text-white">AI & Data Engineering</h3>
              </div>
            </div>

            <p className="text-sm text-gray-300 mb-6 leading-relaxed">
              Architecting next-generation intelligent applications. Specializing in LLM orchestration, Agentic multi-turn loops, Context Engineering, and RAG retrieval pipelines.
            </p>

            <div className="flex flex-wrap gap-2">
              {PROFILE.skills.aiAndData.map((item, i) => (
                <span
                  key={i}
                  className="px-3 py-1.5 rounded-lg text-xs font-mono bg-purple-500/10 border border-purple-500/20 text-purple-200 group-hover:border-purple-500/40 transition-all"
                >
                  {item}
                </span>
              ))}
            </div>

            <div className="mt-6 pt-5 border-t border-white/10 flex items-center justify-between text-xs font-mono text-gray-400">
              <span className="text-purple-300">Azure Data Scientist & Copilot Certified</span>
              <span className="text-emerald-400 flex items-center gap-1">
                <ZapIcon className="w-3.5 h-3.5" /> High Demand
              </span>
            </div>
          </div>

          {/* Bento Card 2: Architecture & Leadership */}
          <div className="md:col-span-5 glass-panel p-7 rounded-2xl border border-white/10 relative overflow-hidden group hover:border-cyan-500/40 transition-all">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2.5 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400">
                <ShieldIcon className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[11px] font-mono text-cyan-400 uppercase tracking-wider">
                  ENTERPRISE FOUNDATION
                </span>
                <h3 className="text-lg font-bold text-white">Architecture & Leadership</h3>
              </div>
            </div>

            <p className="text-sm text-gray-300 mb-6 leading-relaxed">
              Leading distributed multi-shore teams, setting technical directions, and ensuring zero-trust enterprise compliance.
            </p>

            <div className="flex flex-wrap gap-2">
              {PROFILE.skills.architecture.map((item, i) => (
                <span
                  key={i}
                  className="px-3 py-1.5 rounded-lg text-xs font-mono bg-cyan-500/10 border border-cyan-500/20 text-cyan-200"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* Bento Card 3: Mobile & Digital Platforms */}
          <div className="md:col-span-5 glass-panel p-7 rounded-2xl border border-white/10 relative overflow-hidden group hover:border-emerald-500/40 transition-all">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400">
                <SmartphoneIcon className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[11px] font-mono text-emerald-400 uppercase tracking-wider">
                  CLIENT EXCELLENCE
                </span>
                <h3 className="text-lg font-bold text-white">Mobile & Digital Platforms</h3>
              </div>
            </div>

            <p className="text-sm text-gray-300 mb-6 leading-relaxed">
              Deep iOS native and cross-platform React Native engineering with biometric SDKs and Guidewire Jutro integration.
            </p>

            <div className="flex flex-wrap gap-2">
              {PROFILE.skills.mobile.map((item, i) => (
                <span
                  key={i}
                  className="px-3 py-1.5 rounded-lg text-xs font-mono bg-emerald-500/10 border border-emerald-500/20 text-emerald-200"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* Bento Card 4: Web & Microfrontends */}
          <div className="md:col-span-4 glass-panel p-7 rounded-2xl border border-white/10 relative overflow-hidden group hover:border-blue-500/40 transition-all">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2.5 rounded-xl bg-blue-500/10 border border-blue-500/30 text-blue-400">
                <LayersIcon className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[11px] font-mono text-blue-400 uppercase tracking-wider">
                  MODULAR INTERFACES
                </span>
                <h3 className="text-lg font-bold text-white">Frontend & Web</h3>
              </div>
            </div>

            <p className="text-sm text-gray-300 mb-6 leading-relaxed">
              Modern React ecosystem, Next.js App Router, modular microfrontends, high-performance styling.
            </p>

            <div className="flex flex-wrap gap-2">
              {PROFILE.skills.web.map((item, i) => (
                <span
                  key={i}
                  className="px-2.5 py-1.5 rounded-lg text-xs font-mono bg-blue-500/10 border border-blue-500/20 text-blue-200"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* Bento Card 5: Cloud & Backend DevOps */}
          <div className="md:col-span-3 glass-panel p-7 rounded-2xl border border-white/10 relative overflow-hidden group hover:border-amber-500/40 transition-all">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2.5 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-400">
                <DatabaseIcon className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[11px] font-mono text-amber-400 uppercase tracking-wider">
                  INFRASTRUCTURE
                </span>
                <h3 className="text-lg font-bold text-white">Cloud & DevOps</h3>
              </div>
            </div>

            <p className="text-sm text-gray-300 mb-6 leading-relaxed">
              Microsoft Azure, Node.js, Python, automated CI/CD pipelines, containerized microservices.
            </p>

            <div className="flex flex-wrap gap-2">
              {PROFILE.skills.cloudAndDevOps.map((item, i) => (
                <span
                  key={i}
                  className="px-2.5 py-1.5 rounded-lg text-xs font-mono bg-amber-500/10 border border-amber-500/20 text-amber-200"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
