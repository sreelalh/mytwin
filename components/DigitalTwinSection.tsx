"use client";

import React, { useState } from "react";
import { PROFILE } from "@/data/profile";
import {
  SparklesIcon,
  BotIcon,
  TerminalIcon,
  RefreshCwIcon
} from "./Icons";

const GRADIO_CHAT_URL = "https://mytwinchatdocker.onrender.com";

export const DigitalTwinSection: React.FC = () => {
  const [reloadKey, setReloadKey] = useState(0);

  const sampleTopics = [
    "Bank of Bangkok's biometric wallet architecture",
    "Royal Caribbean's connected stateroom & BLE digital keys",
    "Guidewire Jutro & React microfrontends",
    "Agentic AI, LLMs, and RAG in enterprise platforms",
    "Certifications and credentials"
  ];

  return (
    <section id="digital-twin" className="py-14 md:py-20 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-cyan-500/8 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-[400px] h-[400px] bg-purple-500/8 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-start gap-2 mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md text-xs font-mono font-medium bg-cyan-500/10 border border-cyan-500/30 text-cyan-300">
            <SparklesIcon className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
            <span>// 02 AI DIGITAL TWIN INTERFACE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Consult Sreelal's AI Digital Twin
          </h2>
          <p className="text-gray-400 max-w-2xl text-sm sm:text-base">
            Interrogate an interactive neural persona with deep recall of {PROFILE.yearsOfExperienceLabel} years of enterprise architecture, client case studies, and engineering leadership.
          </p>
          <div className="flex items-center gap-2 text-xs font-mono text-cyan-400/90 pt-1">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>Gradio Twin:</span>
            <code className="bg-white/[0.06] px-2 py-0.5 rounded text-cyan-200 border border-cyan-500/30">
              mytwinchatdocker.onrender.com
            </code>
          </div>
        </div>

        {/* Dual Column Console Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Telemetry & Sample Topics */}
          <div className="lg:col-span-4 space-y-5">
            {/* Persona Telemetry Card */}
            <div className="glass-panel p-6 rounded-2xl border border-white/10 space-y-4">
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <span className="font-mono text-xs uppercase tracking-wider text-gray-400 flex items-center gap-2">
                  <TerminalIcon className="w-4 h-4 text-cyan-400" />
                  Twin Telemetry
                </span>
                <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                  LIVE REASONING
                </span>
              </div>

              <div className="space-y-2.5 text-xs font-mono text-gray-300">
                <div className="flex justify-between">
                  <span className="text-gray-500">Identity:</span>
                  <span className="text-white font-semibold">Sreelal H</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Role:</span>
                  <span className="text-cyan-300">Technology Architect</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Experience Base:</span>
                  <span className="text-gray-200">{PROFILE.yearsOfExperienceLabel} Years (EY, TCS)</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Provider:</span>
                  <span className="text-emerald-400">Gradio on Render</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Deployment:</span>
                  <span className="text-purple-300 text-[11px]">Dockerized Container</span>
                </div>
              </div>
            </div>

            {/* Sample Topics */}
            <div className="glass-panel p-6 rounded-2xl border border-white/10 space-y-3">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs uppercase tracking-wider text-cyan-400">
                  Sample Topics
                </span>
                <span className="text-[10px] font-mono text-gray-500">Ask in chat &rarr;</span>
              </div>

              <div className="space-y-2">
                {sampleTopics.map((q, idx) => (
                  <div
                    key={idx}
                    className="w-full text-left p-2.5 rounded-xl bg-white/[0.02] border border-white/5 text-xs text-gray-300 font-sans flex items-start gap-2"
                  >
                    <span className="text-cyan-400 font-mono">
                      &rsaquo;
                    </span>
                    <span className="leading-snug">{q}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Embedded Gradio Chat */}
          <div className="lg:col-span-8">
            <div className="glass-panel rounded-2xl border border-white/10 overflow-hidden shadow-2xl flex flex-col h-[640px] bg-[#070b13]/95 relative">
              {/* Terminal Titlebar */}
              <div className="bg-[#0b0f1a] px-5 py-3.5 border-b border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500/80" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                    <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  </div>
                  <span className="text-xs font-mono text-gray-300 font-semibold flex items-center gap-2">
                    <BotIcon className="w-4 h-4 text-cyan-400" />
                    sreelal-twin::session
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <span className="hidden sm:inline font-mono text-[10px] text-gray-400">
                    Gradio · Render
                  </span>
                  <button
                    onClick={() => setReloadKey((k) => k + 1)}
                    className="p-1.5 rounded-lg text-gray-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer text-xs font-mono flex items-center gap-1"
                    title="Reload Chat"
                  >
                    <RefreshCwIcon className="w-3.5 h-3.5" />
                    <span className="hidden sm:inline">Reload</span>
                  </button>
                </div>
              </div>

              {/* Embedded Gradio Chat */}
              <div className="flex-1 bg-white">
                <iframe
                  key={reloadKey}
                  src={GRADIO_CHAT_URL}
                  title="Sreelal's Digital Twin Chat"
                  className="w-full h-full border-0"
                  allow="clipboard-write"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

