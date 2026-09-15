"use client";

import React, { useState } from "react";
import { PROFILE } from "@/data/profile";
import {
  TerminalIcon,
  SparklesIcon,
  ChevronRightIcon,
  DownloadIcon,
  CheckIcon,
  CopyIcon,
  ArrowUpRightIcon
} from "./Icons";

interface HeroProps {
  onOpenChat: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenChat }) => {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(PROFILE.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Ambient background glow orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[400px] h-[300px] bg-purple-500/8 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top Badges / Operational Status */}
        <div className="flex flex-wrap items-center gap-3 mb-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium bg-emerald-500/10 border border-emerald-500/30 text-emerald-400">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <span>OPERATIONAL // ENTERPRISE ARCHITECT</span>
          </div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium bg-white/[0.04] border border-white/10 text-gray-400">
            <span>{PROFILE.yearsOfExperienceLabel} YRS EXPERIENCE</span>
          </div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium bg-cyan-500/10 border border-cyan-500/20 text-cyan-300">
            <SparklesIcon className="w-3 h-3 text-cyan-400" />
            <span>AGENTIC AI & MOBILE SPECIALIST</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Main Headline & Intro */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-2">
              <h2 className="text-sm font-mono uppercase tracking-[0.25em] text-cyan-400">
                {PROFILE.name} &bull; {PROFILE.roleTitle}
              </h2>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.1]">
                Enterprise Rigor.{" "}
                <span className="cyber-gradient-text block">
                  Modern Velocity.
                </span>
              </h1>
            </div>

            <p className="text-base sm:text-lg text-gray-300 leading-relaxed max-w-2xl font-normal">
              Architecting mission-critical platforms across Banking, Insurance, Healthcare, and Travel. 
              Bridging high-scale mobile & microfrontend ecosystems with the frontier of{" "}
              <span className="text-cyan-300 font-semibold">Agentic AI & LLMs</span>.
            </p>

            {/* Quick Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={onOpenChat}
                className="flex items-center gap-2.5 px-6 py-3.5 rounded-xl font-medium text-sm text-black bg-cyan-400 hover:bg-cyan-300 transition-all font-mono glow-box-cyan hover:scale-[1.02] cursor-pointer shadow-lg shadow-cyan-400/20"
              >
                <SparklesIcon className="w-4 h-4 text-black" />
                <span>ENGAGE DIGITAL TWIN</span>
              </button>

              <a
                href="#career"
                className="flex items-center gap-2 px-5 py-3.5 rounded-xl font-medium text-sm text-gray-200 bg-white/[0.05] border border-white/10 hover:bg-white/[0.1] hover:border-cyan-500/40 hover:text-white transition-all"
              >
                <span>Career Milestones</span>
                <ChevronRightIcon className="w-4 h-4 text-cyan-400" />
              </a>

              <a
                href="/Sreelal_H.pdf"
                download
                className="flex items-center gap-2 px-5 py-3.5 rounded-xl font-medium text-sm text-gray-300 bg-transparent border border-white/10 hover:border-white/30 hover:text-white transition-all"
                title="Download Official PDF Resume"
              >
                <DownloadIcon className="w-4 h-4 text-gray-400" />
                <span>Resume (PDF)</span>
              </a>
            </div>

            {/* Quick Contact Chips */}
            <div className="flex flex-wrap items-center gap-4 pt-3 text-xs text-gray-400 font-mono">
              <button
                onClick={copyEmail}
                className="flex items-center gap-2 hover:text-cyan-300 transition-colors group cursor-pointer"
              >
                <span className="text-gray-500 group-hover:text-cyan-400">email:</span>
                <span className="text-gray-300">{PROFILE.email}</span>
                {copied ? (
                  <CheckIcon className="w-3.5 h-3.5 text-emerald-400" />
                ) : (
                  <CopyIcon className="w-3.5 h-3.5 text-gray-500 group-hover:text-cyan-400" />
                )}
              </button>
              <span className="text-gray-700">•</span>
              <a
                href={PROFILE.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 hover:text-cyan-300 transition-colors"
              >
                <span className="text-gray-500">linkedin:</span>
                <span className="text-gray-300">{PROFILE.linkedinDisplay}</span>
                <ArrowUpRightIcon className="w-3.5 h-3.5 text-cyan-400" />
              </a>
            </div>
          </div>

          {/* Interactive Architect Terminal Card */}
          <div className="lg:col-span-5">
            <div className="glass-panel rounded-2xl overflow-hidden shadow-2xl border border-white/10 relative">
              {/* Terminal Titlebar */}
              <div className="bg-[#0b0f19] px-4 py-3 flex items-center justify-between border-b border-white/10">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  <span className="ml-2 font-mono text-[11px] text-gray-400 flex items-center gap-1">
                    <TerminalIcon className="w-3 h-3 text-cyan-400" />
                    sreelal-core::telemetry
                  </span>
                </div>
                <span className="font-mono text-[10px] text-cyan-400/80 uppercase">
                  NODE: ACTIVE
                </span>
              </div>

              {/* Terminal Body */}
              <div className="p-5 font-mono text-xs space-y-3 bg-[#080b12]/95 text-gray-300 leading-relaxed">
                <div>
                  <span className="text-cyan-400 font-semibold">$</span>{" "}
                  <span className="text-gray-200">whoami --verbose</span>
                </div>
                <div className="pl-3 border-l-2 border-cyan-500/30 text-gray-300 space-y-1">
                  <p>
                    <span className="text-gray-500">Name:</span> SREELAL H
                  </p>
                  <p>
                    <span className="text-gray-500">Designation:</span> Technology Architect | Engineering Manager
                  </p>
                  <p>
                    <span className="text-gray-500">Tenure:</span> {PROFILE.yearsOfExperienceLabel} Years Across Global Enterprise Deployments
                  </p>
                  <p>
                    <span className="text-gray-500">Core Focus:</span> Agentic AI, Mobile Ecosystems, Microfrontends
                  </p>
                </div>

                <div>
                  <span className="text-cyan-400 font-semibold">$</span>{" "}
                  <span className="text-gray-200">system.list_enterprise_clients()</span>
                </div>
                <div className="pl-3 border-l-2 border-emerald-500/30 text-emerald-300/90 grid grid-cols-2 gap-1 text-[11px]">
                  <span>&gt; Bank of Bangkok</span>
                  <span>&gt; Royal Caribbean</span>
                  <span>&gt; Bank of Singapore</span>
                  <span>&gt; Safety Insurance</span>
                  <span>&gt; Kaiser Permanente</span>
                  <span>&gt; AXA Asia / GE / KPMG</span>
                </div>

                <div>
                  <span className="text-cyan-400 font-semibold">$</span>{" "}
                  <span className="text-gray-200">certifications.status()</span>
                </div>
                <div className="pl-3 border-l-2 border-purple-500/30 text-purple-300/90 text-[11px]">
                  <span>8 Verified: GitHub Copilot, Azure AI, Azure Data Scientist, IIM Kozhikode, SAFe, CSM, CSPO</span>
                </div>

                <div className="pt-2 flex items-center justify-between border-t border-white/10 text-[11px] text-gray-500">
                  <span className="flex items-center gap-1.5 text-emerald-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    All Systems Nominal
                  </span>
                  <button
                    onClick={onOpenChat}
                    className="text-cyan-400 hover:text-cyan-300 underline underline-offset-4 cursor-pointer"
                  >
                    Query Sreelal Twin &rarr;
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16 pt-10 border-t border-white/10">
          {PROFILE.stats.map((stat, i) => (
            <div
              key={i}
              className="glass-panel p-5 rounded-xl border border-white/[0.08] hover:border-cyan-500/30 transition-all"
            >
              <div className="text-3xl sm:text-4xl font-extrabold text-white font-mono tracking-tight text-cyan-400">
                {stat.value}
              </div>
              <div className="text-sm font-semibold text-gray-200 mt-1">{stat.label}</div>
              <div className="text-xs text-gray-400 mt-0.5">{stat.detail}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
