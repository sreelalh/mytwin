"use client";

import React, { useEffect, useState } from "react";
import {
  SparklesIcon,
  XIcon,
  RefreshCwIcon
} from "./Icons";

interface DigitalTwinChatProps {
  isOpen: boolean;
  onClose: () => void;
}

const GRADIO_CHAT_URL = "https://mytwinchatdocker.onrender.com";

export const DigitalTwinChat: React.FC<DigitalTwinChatProps> = ({ isOpen, onClose }) => {
  const [reloadKey, setReloadKey] = useState(0);

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

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
                Gradio Twin · Hosted on Render
              </p>
            </div>
          </div>

          <div className="flex items-center gap-1">
            <button
              onClick={() => setReloadKey((k) => k + 1)}
              className="p-1.5 rounded-lg text-gray-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
              title="Reload chat"
            >
              <RefreshCwIcon className="w-4 h-4" />
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-gray-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
            >
              <XIcon className="w-5 h-5" />
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
  );
};
