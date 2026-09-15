import React from "react";
import { PROFILE } from "@/data/profile";
import { AwardIcon, ShieldIcon, SparklesIcon, CheckIcon } from "./Icons";

export const Certifications: React.FC = () => {
  return (
    <section id="certifications" className="py-14 md:py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-start gap-2 mb-12">
          <span className="text-xs font-mono tracking-widest text-cyan-400 uppercase bg-cyan-500/10 px-3 py-1 rounded-md border border-cyan-500/20">
            // 05 CREDENTIALS & CERTIFICATIONS
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Verified Credentials & Accreditations
          </h2>
          <p className="text-gray-400 max-w-2xl text-sm sm:text-base">
            Continuous enterprise upskilling across Agentic AI, Azure Cloud architectures, Data Science, and Agile Scaled governance.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {PROFILE.certifications.map((cert, idx) => (
            <div
              key={idx}
              className="glass-panel p-5 rounded-xl border border-white/10 glass-panel-hover flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-cyan-400 bg-cyan-500/10 px-2 py-0.5 rounded border border-cyan-500/20">
                    {cert.category}
                  </span>
                  <span className="font-mono text-xs font-semibold text-gray-300">
                    {cert.year}
                  </span>
                </div>

                <div className="flex items-start gap-2.5">
                  <div className="p-2 rounded-lg bg-white/5 border border-white/10 group-hover:border-cyan-400/40 transition-colors">
                    <AwardIcon className="w-5 h-5 text-cyan-400" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-white group-hover:text-cyan-300 transition-colors">
                      {cert.title}
                    </h3>
                    <p className="text-xs font-mono text-gray-400 mt-1">
                      {cert.issuer}
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-gray-500">
                <span className="flex items-center gap-1 text-emerald-400">
                  <CheckIcon className="w-3.5 h-3.5" />
                  Verified Credential
                </span>
                <span>EY / Industry</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
