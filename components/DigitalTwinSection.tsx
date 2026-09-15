"use client";

import React, { useState, useRef, useEffect } from "react";
import { PROFILE } from "@/data/profile";
import {
  SparklesIcon,
  BotIcon,
  UserIcon,
  SendIcon,
  TerminalIcon,
  CheckIcon,
  CopyIcon,
  RefreshCwIcon
} from "./Icons";

interface Message {
  role: "user" | "assistant";
  content: string;
  source?: string;
}

export const DigitalTwinSection: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content:
        `Greetings! I am the **Digital Twin of Sreelal H**, powered by OpenRouter using the **\`nvidia/nemotron-3.5-lightning:free\`** model.\n\nWith over ${PROFILE.yearsOfExperience} years of technical leadership across Ernst & Young, TCS, and Tier-1 enterprises in Banking, Insurance, Healthcare, and Travel, I can answer deep questions about my architectural patterns, mobile engineering, microfrontends, or Agentic AI systems.\n\nSelect a query below or type your own question to begin.`
    }
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);
  const chatStreamRef = useRef<HTMLDivElement>(null);

  const presetQuestions = [
    "What was your architecture for Bank of Bangkok's biometric wallet?",
    "How did you engineer Royal Caribbean's connected stateroom & BLE digital keys?",
    "What is your approach to Guidewire Jutro & React microfrontends?",
    "How do you apply Agentic AI, LLMs, and RAG in enterprise platforms?",
    "What certifications and credentials do you hold?"
  ];

  const scrollToBottom = () => {
    // Scroll only within the chat stream container, never the page itself
    const container = chatStreamRef.current;
    if (container) container.scrollTop = container.scrollHeight;
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, loading]);

  const handleSend = async (queryText?: string) => {
    const text = (queryText || input).trim();
    if (!text || loading) return;

    const userMessage: Message = { role: "user", content: text };
    const newHistory = [...messages, userMessage];
    setMessages(newHistory);
    setInput("");
    setLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: newHistory.map((m) => ({ role: m.role, content: m.content }))
        })
      });

      const data = await response.json();
      setMessages([
        ...newHistory,
        {
          role: "assistant",
          content: data.reply || "No response received.",
          source: data.source
        }
      ]);
    } catch (err) {
      setMessages([
        ...newHistory,
        {
          role: "assistant",
          content:
            `I encountered a momentary network hiccup, but across my ${PROFILE.yearsOfExperienceLabel} years of architecture, I focus on decoupled resilient systems. Feel free to try querying again!`
        }
      ]);
    } finally {
      setLoading(false);
    }
  };

  const copyMessage = (text: string, idx: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(idx);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  const handleReset = () => {
    setMessages([
      {
        role: "assistant",
        content:
          "Conversation reset. I am ready to answer any questions about Sreelal's career, architecture philosophies, or technical leadership. What would you like to explore?"
      }
    ]);
  };

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
            <span>OpenRouter Model:</span>
            <code className="bg-white/[0.06] px-2 py-0.5 rounded text-cyan-200 border border-cyan-500/30">
              nvidia/nemotron-3.5-lightning:free
            </code>
          </div>
        </div>

        {/* Dual Column Console Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Telemetry & Starter Prompts */}
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
                  <span className="text-emerald-400">OpenRouter API</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Inference Engine:</span>
                  <span className="text-purple-300 text-[11px]">NVIDIA Nemotron 3.5</span>
                </div>
              </div>
            </div>

            {/* Quick Inquiries / Preset Chips */}
            <div className="glass-panel p-6 rounded-2xl border border-white/10 space-y-3">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs uppercase tracking-wider text-cyan-400">
                  Recommended Inquiries
                </span>
                <span className="text-[10px] font-mono text-gray-500">Click to ask</span>
              </div>

              <div className="space-y-2">
                {presetQuestions.map((q, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleSend(q)}
                    disabled={loading}
                    className="w-full text-left p-2.5 rounded-xl bg-white/[0.02] border border-white/5 hover:border-cyan-500/40 hover:bg-cyan-500/10 transition-all text-xs text-gray-300 hover:text-cyan-200 font-sans cursor-pointer group flex items-start gap-2"
                  >
                    <span className="text-cyan-400 font-mono group-hover:translate-x-0.5 transition-transform">
                      &rsaquo;
                    </span>
                    <span className="leading-snug">{q}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: High-Tech Interactive Terminal Chat */}
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
                    nvidia/nemotron-3.5-lightning:free
                  </span>
                  <button
                    onClick={handleReset}
                    className="p-1.5 rounded-lg text-gray-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer text-xs font-mono flex items-center gap-1"
                    title="Reset Conversation"
                  >
                    <RefreshCwIcon className="w-3.5 h-3.5" />
                    <span className="hidden sm:inline">Reset</span>
                  </button>
                </div>
              </div>

              {/* Chat Stream */}
              <div ref={chatStreamRef} className="flex-1 p-5 overflow-y-auto space-y-4 text-sm font-sans">
                {messages.map((msg, idx) => (
                  <div
                    key={idx}
                    className={`flex gap-3.5 ${
                      msg.role === "user" ? "justify-end" : "justify-start"
                    }`}
                  >
                    {msg.role === "assistant" && (
                      <div className="w-8 h-8 rounded-xl bg-cyan-500/15 border border-cyan-500/30 flex items-center justify-center text-cyan-400 shrink-0 mt-0.5">
                        <BotIcon className="w-4 h-4" />
                      </div>
                    )}

                    <div
                      className={`max-w-[85%] rounded-2xl p-4 shadow-lg ${
                        msg.role === "user"
                          ? "bg-cyan-400 text-black font-medium font-sans"
                          : "bg-[#0d1322] border border-white/10 text-gray-200 font-sans"
                      }`}
                    >
                      <div className="whitespace-pre-wrap leading-relaxed text-xs sm:text-sm">
                        {msg.content}
                      </div>

                      {msg.role === "assistant" && (
                        <div className="mt-2 pt-2 border-t border-white/5 flex items-center justify-between text-[10px] font-mono text-gray-500">
                          <span>
                            {msg.source === "openrouter"
                              ? "via OpenRouter (Nemotron)"
                              : "Sreelal Core Knowledge"}
                          </span>
                          <button
                            onClick={() => copyMessage(msg.content, idx)}
                            className="hover:text-cyan-300 transition-colors cursor-pointer flex items-center gap-1"
                            title="Copy reply"
                          >
                            {copiedIndex === idx ? (
                              <>
                                <CheckIcon className="w-3 h-3 text-emerald-400" />
                                <span className="text-emerald-400">Copied</span>
                              </>
                            ) : (
                              <>
                                <CopyIcon className="w-3 h-3" />
                                <span>Copy</span>
                              </>
                            )}
                          </button>
                        </div>
                      )}
                    </div>

                    {msg.role === "user" && (
                      <div className="w-8 h-8 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center text-white shrink-0 mt-0.5">
                        <UserIcon className="w-4 h-4" />
                      </div>
                    )}
                  </div>
                ))}

                {loading && (
                  <div className="flex gap-3.5 items-center">
                    <div className="w-8 h-8 rounded-xl bg-cyan-500/15 border border-cyan-500/30 flex items-center justify-center text-cyan-400 shrink-0">
                      <BotIcon className="w-4 h-4 animate-pulse" />
                    </div>
                    <div className="bg-[#0d1322] border border-white/10 px-4 py-3 rounded-2xl text-xs font-mono text-cyan-300 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
                      <span>Nemotron 3.5 is generating response...</span>
                    </div>
                  </div>
                )}
              </div>

              {/* Chat Input Bar */}
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSend();
                }}
                className="p-3.5 bg-[#0b0f1a] border-t border-white/10 flex items-center gap-3"
              >
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder={`Ask Sreelal's Digital Twin anything about his ${PROFILE.yearsOfExperienceLabel} years career...`}
                  disabled={loading}
                  className="flex-1 bg-[#06080e] border border-white/15 rounded-xl px-4 py-3 text-xs sm:text-sm text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 font-sans transition-colors"
                />
                <button
                  type="submit"
                  disabled={!input.trim() || loading}
                  className="px-5 py-3 rounded-xl bg-cyan-400 text-black hover:bg-cyan-300 disabled:opacity-40 disabled:cursor-not-allowed transition-all font-mono font-semibold text-xs flex items-center gap-2 cursor-pointer shadow-lg shadow-cyan-400/20"
                >
                  <span>SEND</span>
                  <SendIcon className="w-4 h-4 text-black" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
