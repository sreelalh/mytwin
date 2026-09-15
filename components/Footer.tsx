"use client";

import React, { useState } from "react";
import { PROFILE } from "@/data/profile";
import {
  MailIcon,
  PhoneIcon,
  MapPinIcon,
  ExternalLinkIcon,
  DownloadIcon,
  CheckIcon,
  CopyIcon,
  TerminalIcon,
  ArrowUpRightIcon
} from "./Icons";

export const Footer: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(PROFILE.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const copyPhone = () => {
    navigator.clipboard.writeText(PROFILE.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer id="contact" className="border-t border-white/10 bg-[#04060a] relative pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Contact Banner */}
        <div className="glass-panel p-8 sm:p-12 rounded-3xl border border-white/10 relative overflow-hidden mb-16">
          <div className="absolute top-0 right-0 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 bg-cyan-500/10 px-3 py-1 rounded-md border border-cyan-500/20">
                // CONNECT & COLLABORATE
              </span>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
                Ready to Architect the Future of Your Enterprise?
              </h3>
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                Available for high-stakes Technology Architecture advisory, Engineering Management, and next-gen Agentic AI platform transformations.
              </p>

              <div className="flex flex-wrap gap-4 pt-2">
                <a
                  href={`mailto:${PROFILE.email}`}
                  className="px-6 py-3 rounded-xl font-mono text-xs font-medium text-black bg-cyan-400 hover:bg-cyan-300 transition-all font-semibold flex items-center gap-2 glow-box-cyan"
                >
                  <MailIcon className="w-4 h-4 text-black" />
                  <span>START A CONVERSATION</span>
                </a>

                <a
                  href="/Sreelal_H.pdf"
                  download
                  className="px-5 py-3 rounded-xl font-mono text-xs font-medium text-white bg-white/10 hover:bg-white/15 border border-white/15 transition-all flex items-center gap-2"
                >
                  <DownloadIcon className="w-4 h-4 text-gray-300" />
                  <span>DOWNLOAD CURRICULUM VITAE</span>
                </a>
              </div>
            </div>

            {/* Direct Channels Box */}
            <div className="lg:col-span-5 bg-[#080b12] p-6 rounded-2xl border border-white/10 space-y-4">
              <span className="text-xs font-mono uppercase text-gray-400 tracking-wider">
                Direct Contact Telemetry:
              </span>

              {/* Email */}
              <div className="flex items-center justify-between p-3 rounded-xl bg-white/[0.02] border border-white/5">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-400">
                    <MailIcon className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-gray-500 uppercase block">EMAIL</span>
                    <a href={`mailto:${PROFILE.email}`} className="text-xs font-mono text-gray-200 hover:text-cyan-300">
                      {PROFILE.email}
                    </a>
                  </div>
                </div>
                <button
                  onClick={copyEmail}
                  className="p-1.5 rounded text-gray-400 hover:text-cyan-300 cursor-pointer"
                  title="Copy email"
                >
                  {copiedEmail ? <CheckIcon className="w-4 h-4 text-emerald-400" /> : <CopyIcon className="w-4 h-4" />}
                </button>
              </div>

              {/* Phone */}
              <div className="flex items-center justify-between p-3 rounded-xl bg-white/[0.02] border border-white/5">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400">
                    <PhoneIcon className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-gray-500 uppercase block">PHONE</span>
                    <a href={`tel:${PROFILE.phone}`} className="text-xs font-mono text-gray-200 hover:text-emerald-300">
                      {PROFILE.phone}
                    </a>
                  </div>
                </div>
                <button
                  onClick={copyPhone}
                  className="p-1.5 rounded text-gray-400 hover:text-emerald-300 cursor-pointer"
                  title="Copy phone"
                >
                  {copiedPhone ? <CheckIcon className="w-4 h-4 text-emerald-400" /> : <CopyIcon className="w-4 h-4" />}
                </button>
              </div>

              {/* LinkedIn */}
              <div className="flex items-center justify-between p-3 rounded-xl bg-white/[0.02] border border-white/5">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-blue-500/10 text-blue-400">
                    <ExternalLinkIcon className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-gray-500 uppercase block">LINKEDIN</span>
                    <a
                      href={PROFILE.linkedin}
                      target="_blank"
                      rel="noreferrer"
                      className="text-xs font-mono text-gray-200 hover:text-blue-300 flex items-center gap-1"
                    >
                      <span>{PROFILE.linkedinDisplay}</span>
                      <ArrowUpRightIcon className="w-3 h-3 text-blue-400" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.02] border border-white/5">
                <div className="p-2 rounded-lg bg-purple-500/10 text-purple-400">
                  <MapPinIcon className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] font-mono text-gray-500 uppercase block">LOCATION</span>
                  <span className="text-xs font-mono text-gray-300">{PROFILE.location}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Meta & Copyright */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-white/10 text-xs text-gray-400 font-mono">
          <div className="flex items-center gap-2">
            <TerminalIcon className="w-4 h-4 text-cyan-400" />
            <span>&copy; {new Date().getFullYear()} SREELAL H &bull; ALL RIGHTS RESERVED</span>
          </div>

          <div className="flex items-center gap-6">
            <a href="#about" className="hover:text-cyan-400 transition-colors">
              About
            </a>
            <a href="#career" className="hover:text-cyan-400 transition-colors">
              Career
            </a>
            <a href="#portfolio" className="hover:text-cyan-400 transition-colors">
              Portfolio
            </a>
            <button
              onClick={scrollToTop}
              className="hover:text-cyan-400 transition-colors cursor-pointer flex items-center gap-1"
            >
              <span>Back to Top &uarr;</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
