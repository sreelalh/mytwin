"use client";

import React, { useState, useEffect } from "react";
import { TerminalIcon, SparklesIcon, DownloadIcon } from "./Icons";

interface NavbarProps {
  onOpenChat: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenChat }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "AI Twin", href: "#digital-twin" },
    { name: "About", href: "#about" },
    { name: "Career Journey", href: "#career" },
    { name: "Competencies", href: "#competencies" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Certifications", href: "#certifications" },
    { name: "Contact", href: "#contact" }
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#06080d]/90 backdrop-blur-xl border-b border-white/10 shadow-2xl shadow-cyan-950/20 py-3.5"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand / Terminal Identity */}
        <a href="#" className="flex items-center gap-2.5 group">
          <div className="w-8 h-8 rounded-lg bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 group-hover:border-cyan-400 group-hover:scale-105 transition-all">
            <TerminalIcon className="w-4 h-4" />
          </div>
          <div className="flex flex-col">
            <span className="font-mono text-sm tracking-wider font-semibold text-white group-hover:text-cyan-400 transition-colors flex items-center gap-1.5">
              SREELAL.H
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            </span>
            <span className="text-[10px] text-gray-400 uppercase tracking-widest font-mono">
              MOBILE &bull; FRONTEND &bull; AI
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 bg-white/[0.03] border border-white/[0.08] px-3 py-1.5 rounded-full backdrop-blur-md">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-full transition-all ${
                link.name === "AI Twin"
                  ? "text-cyan-300 hover:text-cyan-200 bg-cyan-500/10 hover:bg-cyan-500/20 font-mono"
                  : "text-gray-300 hover:text-cyan-300 hover:bg-white/[0.06]"
              }`}
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Action Controls */}
        <div className="hidden sm:flex items-center gap-3">
          {/* AI Twin Chat Trigger */}
          <button
            onClick={onOpenChat}
            className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-mono font-medium text-cyan-300 bg-cyan-500/10 border border-cyan-500/30 hover:bg-cyan-500/20 hover:border-cyan-400/60 transition-all glow-box-cyan cursor-pointer"
          >
            <SparklesIcon className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
            <span>AI DIGITAL TWIN</span>
          </button>

          {/* Download Resume Link */}
          <a
            href="/Sreelal_H.pdf"
            download
            className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-medium text-white bg-white/[0.08] border border-white/[0.15] hover:bg-white/[0.15] hover:border-white/30 transition-all"
          >
            <DownloadIcon className="w-3.5 h-3.5 text-gray-300" />
            <span>Resume</span>
          </a>
        </div>

        {/* Mobile menu button */}
        <div className="flex sm:hidden items-center gap-2">
          <button
            onClick={onOpenChat}
            className="p-2 rounded-lg bg-cyan-500/10 border border-cyan-500/30 text-cyan-300"
            title="AI Twin Chat"
          >
            <SparklesIcon className="w-4 h-4" />
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg bg-white/5 border border-white/10 text-gray-300"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="sm:hidden px-4 pt-4 pb-6 mt-2 bg-[#0a0d16] border-b border-white/10 space-y-2">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-sm text-gray-300 hover:text-cyan-400 hover:bg-white/5 rounded-lg"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-3 border-t border-white/10 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenChat();
              }}
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-lg text-xs font-mono font-medium text-cyan-300 bg-cyan-500/10 border border-cyan-500/30"
            >
              <SparklesIcon className="w-4 h-4" />
              <span>Launch AI Digital Twin</span>
            </button>
            <a
              href="/Sreelal_H.pdf"
              download
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-lg text-xs font-medium text-white bg-white/10 border border-white/20"
            >
              <DownloadIcon className="w-4 h-4" />
              <span>Download Full CV (PDF)</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
