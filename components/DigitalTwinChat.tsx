"use client";

import React, { useState, useRef, useEffect } from "react";
import { PROFILE } from "@/data/profile";
import {
  SparklesIcon,
  BotIcon,
  UserIcon,
  SendIcon,
  XIcon,
  TerminalIcon
} from "./Icons";

interface DigitalTwinChatProps {
  isOpen: boolean;
  onClose: () => void;
}

interface Message {
  role: "user" | "assistant";
  content: string;
}

export const DigitalTwinChat: React.FC<DigitalTwinChatProps> = ({ isOpen, onClose }) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content:
        `Greetings! I am the **Digital Twin of Sreelal H**, powered by OpenRouter using the **\`nvidia/nemotron-3.5-lightning:free\`** model.\n\nWith over ${PROFILE.yearsOfExperience} years of technical architecture experience across Banking, Insurance, Healthcare, and Travel, I can answer any questions about my enterprise systems, leadership methodologies, mobile frameworks, or Agentic AI work.\n\nWhat would you like to explore?`
    }
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const starterPrompts = [
    "Tell me about your Bank of Bangkok biometric wallet work.",
    "How did you engineer the connected stateroom for Royal Caribbean?",
    "What is your approach to Enterprise Microfrontends with Jutro?",
    "How do you apply Agentic AI & LLMs in enterprise platforms?"
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  const handleSend = async (textToSend?: string) => {
    const query = (textToSend || input).trim();
    if (!query || loading) return;

    const newMessages: Message[] = [...messages, { role: "user", content: query }];
    setMessages(newMessages);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: newMessages })
      });

      const data = await res.json();
      setMessages([...newMessages, { role: "assistant", content: data.reply }]);
    } catch (err) {
      setMessages([
        ...newMessages,
        {
          role: "assistant",
          content:
            `I experienced a momentary connection flicker, but across my ${PROFILE.yearsOfExperienceLabel} years at EY, TCS, and global clients, I specialize in combining resilient enterprise architecture with bleeding-edge Mobile and Agentic AI technologies. Feel free to re-query me!`
        }
      ]);
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-end sm:p-6 bg-black/60 backdrop-blur-sm animate-in fade-in">
      <div className="w-full sm:max-w-lg h-full sm:h-[680px] bg-[#090d16] border-l sm:border border-cyan-500/30 sm:rounded-2xl flex flex-col shadow-2xl overflow-hidden relative">
        {/* Chat Titlebar */}
        <div className="bg-[#0e1422] p-4 border-b border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
              <SparklesIcon className="w-5 h-5 text-cyan-300 animate-pulse" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-bold text-sm text-white font-mono">
                  SREELAL.AI
                </span>
                <span className="px-1.5 py-0.5 rounded text-[9px] font-mono bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                  ONLINE
                </span>
              </div>
              <p className="text-[10px] text-cyan-300/80 font-mono">
                OpenRouter: nvidia/nemotron-3.5-lightning:free
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-gray-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
          >
            <XIcon className="w-5 h-5" />
          </button>
        </div>

        {/* Messages Scroll Area */}
        <div className="flex-1 p-4 overflow-y-auto space-y-4 text-xs font-mono">
          {messages.map((msg, i) => (
            <div
              key={i}
              className={`flex gap-3 ${
                msg.role === "user" ? "justify-end" : "justify-start"
              }`}
            >
              {msg.role === "assistant" && (
                <div className="w-7 h-7 rounded-lg bg-cyan-500/15 border border-cyan-500/30 flex items-center justify-center text-cyan-400 shrink-0 mt-0.5">
                  <BotIcon className="w-4 h-4" />
                </div>
              )}

              <div
                className={`max-w-[85%] rounded-xl p-3.5 leading-relaxed ${
                  msg.role === "user"
                    ? "bg-cyan-500 text-black font-sans font-medium"
                    : "bg-[#111827] border border-white/10 text-gray-200 font-sans text-xs"
                }`}
              >
                <div className="whitespace-pre-wrap">
                  {msg.content}
                </div>
              </div>

              {msg.role === "user" && (
                <div className="w-7 h-7 rounded-lg bg-white/10 border border-white/20 flex items-center justify-center text-white shrink-0 mt-0.5">
                  <UserIcon className="w-4 h-4" />
                </div>
              )}
            </div>
          ))}

          {loading && (
            <div className="flex gap-3 items-center text-cyan-400">
              <div className="w-7 h-7 rounded-lg bg-cyan-500/15 border border-cyan-500/30 flex items-center justify-center">
                <BotIcon className="w-4 h-4 animate-pulse" />
              </div>
              <div className="bg-[#111827] border border-white/10 px-3 py-2 rounded-xl text-xs text-gray-400 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />
                <span>Nemotron 3.5 is generating response...</span>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Starter Prompts */}
        {messages.length <= 2 && (
          <div className="px-4 py-2 border-t border-white/5 bg-[#0b0f19] space-y-1.5">
            <span className="text-[10px] font-mono text-gray-400 uppercase">
              Quick Inquiries:
            </span>
            <div className="flex flex-wrap gap-1.5">
              {starterPrompts.map((sp, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSend(sp)}
                  className="text-[11px] text-left px-2.5 py-1 rounded-md bg-white/[0.03] border border-white/10 text-gray-300 hover:text-cyan-300 hover:border-cyan-500/40 transition-colors cursor-pointer"
                >
                  {sp}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Input Bar */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSend();
          }}
          className="p-3 bg-[#0e1422] border-t border-white/10 flex items-center gap-2"
        >
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask Sreelal's Digital Twin..."
            className="flex-1 bg-[#090d16] border border-white/15 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 font-sans"
          />
          <button
            type="submit"
            disabled={!input.trim() || loading}
            className="p-2.5 rounded-xl bg-cyan-400 text-black hover:bg-cyan-300 disabled:opacity-40 disabled:cursor-not-allowed transition-all cursor-pointer font-bold"
          >
            <SendIcon className="w-4 h-4 text-black" />
          </button>
        </form>
      </div>
    </div>
  );
};
