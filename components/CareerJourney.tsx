"use client";

import React, { useState } from "react";
import { PROFILE, CareerRole } from "@/data/profile";
import { BriefcaseIcon, ChevronRightIcon, ShieldIcon, SparklesIcon } from "./Icons";

export const CareerJourney: React.FC = () => {
  const [selectedIndustry, setSelectedIndustry] = useState<string>("All");
  const [expandedRoleIndex, setExpandedRoleIndex] = useState<number | null>(0); // EY expanded by default

  const industries = ["All", "Banking", "Insurance", "Travel", "Healthcare", "Enterprise Tech"];

  const filteredRoles = PROFILE.career.map((role) => {
    if (selectedIndustry === "All") return role;

    // Filter projects inside role if any
    const matchingProjects = role.projects?.filter(
      (p) => p.industry.toLowerCase() === selectedIndustry.toLowerCase()
    );

    // If company doesn't have projects array, check if its summary or role matches
    if (!role.projects) {
      if (selectedIndustry === "Enterprise Tech") return role;
      return null;
    }

    if (matchingProjects && matchingProjects.length > 0) {
      return {
        ...role,
        projects: matchingProjects
      };
    }

    return null;
  }).filter(Boolean) as CareerRole[];

  return (
    <section id="career" className="py-14 md:py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="text-xs font-mono tracking-widest text-cyan-400 uppercase bg-cyan-500/10 px-3 py-1 rounded-md border border-cyan-500/20">
              // 02 CHRONOLOGICAL MILESTONES
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mt-2">
              Career Journey & Impact
            </h2>
            <p className="text-gray-400 max-w-xl text-sm sm:text-base mt-1">
              {PROFILE.yearsOfExperienceLabel} years of technical leadership across Fortune 500 banks, health systems, insurers, and maritime giants.
            </p>
          </div>

          {/* Industry Filter Pills */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-white/[0.03] border border-white/10 rounded-xl">
            {industries.map((ind) => (
              <button
                key={ind}
                onClick={() => setSelectedIndustry(ind)}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all cursor-pointer ${
                  selectedIndustry === ind
                    ? "bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 font-semibold"
                    : "text-gray-400 hover:text-gray-200 hover:bg-white/5 border border-transparent"
                }`}
              >
                {ind}
              </button>
            ))}
          </div>
        </div>

        {/* Timeline Stream */}
        <div className="relative border-l border-white/10 ml-4 sm:ml-8 pl-6 sm:pl-10 space-y-12">
          {filteredRoles.map((role, idx) => {
            const isExpanded = expandedRoleIndex === idx || selectedIndustry !== "All";

            return (
              <div key={idx} className="relative group">
                {/* Timeline node marker */}
                <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-6 h-6 rounded-full bg-[#06080d] border-2 border-cyan-400/80 flex items-center justify-center group-hover:scale-125 group-hover:border-cyan-300 transition-all shadow-md shadow-cyan-500/20">
                  <div className="w-2 h-2 rounded-full bg-cyan-400" />
                </div>

                {/* Role Card */}
                <div className="glass-panel p-6 sm:p-7 rounded-2xl border border-white/10 glass-panel-hover">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-white/10 pb-4">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-lg sm:text-xl font-bold text-white tracking-wide">
                          {role.company}
                        </span>
                        {idx === 0 && (
                          <span className="px-2 py-0.5 rounded text-[10px] font-mono font-semibold bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
                            CURRENT
                          </span>
                        )}
                      </div>
                      <div className="text-sm font-mono text-cyan-400 font-medium mt-0.5">
                        {role.role}
                      </div>
                    </div>
                    <div className="font-mono text-xs text-gray-400 bg-white/[0.04] px-3 py-1.5 rounded-lg border border-white/5 self-start sm:self-auto">
                      {role.period}
                    </div>
                  </div>

                  <p className="text-sm text-gray-300 mt-4 leading-relaxed">
                    {role.summary}
                  </p>

                  {/* Highlights */}
                  <div className="mt-4 space-y-2">
                    <span className="text-xs font-mono uppercase text-gray-400">
                      Key Responsibilities & Initiatives:
                    </span>
                    <ul className="space-y-1.5 text-xs sm:text-sm text-gray-300 pl-4 list-disc marker:text-cyan-400">
                      {role.achievements.map((item, aIdx) => (
                        <li key={aIdx} className="leading-relaxed">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Enterprise Client Engagements (EY Specific Spotlight) */}
                  {role.projects && role.projects.length > 0 && (
                    <div className="mt-6 pt-5 border-t border-white/10">
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-xs font-mono text-cyan-400 flex items-center gap-1.5 uppercase font-semibold">
                          <ShieldIcon className="w-3.5 h-3.5 text-cyan-400" />
                          Featured Client Engagements ({role.projects.length})
                        </span>
                        {selectedIndustry === "All" && (
                          <button
                            onClick={() => setExpandedRoleIndex(isExpanded ? null : idx)}
                            className="text-xs font-mono text-gray-400 hover:text-cyan-300 cursor-pointer flex items-center gap-1"
                          >
                            <span>{isExpanded ? "Collapse" : "Expand All"}</span>
                            <ChevronRightIcon className={`w-3.5 h-3.5 transform transition-transform ${isExpanded ? "rotate-90" : ""}`} />
                          </button>
                        )}
                      </div>

                      {isExpanded && (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-3">
                          {role.projects.map((proj, pIdx) => (
                            <div
                              key={pIdx}
                              className="bg-[#090e18] p-4 rounded-xl border border-white/[0.07] hover:border-cyan-500/30 transition-all space-y-2.5"
                            >
                              <div className="flex items-start justify-between gap-2">
                                <div>
                                  <h4 className="text-sm font-bold text-white tracking-wide">
                                    {proj.client}
                                  </h4>
                                  <span className="inline-block text-[10px] font-mono uppercase tracking-wider text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20 mt-1">
                                    {proj.industry}
                                  </span>
                                </div>
                              </div>

                              <p className="text-xs text-gray-300 leading-relaxed">
                                {proj.description}
                              </p>

                              <div className="space-y-1">
                                {proj.keyDeliverables.map((kd, kdIdx) => (
                                  <div key={kdIdx} className="text-[11px] text-gray-400 flex items-start gap-1.5">
                                    <span className="text-cyan-400 font-bold">&rsaquo;</span>
                                    <span>{kd}</span>
                                  </div>
                                ))}
                              </div>

                              <div className="flex flex-wrap gap-1 pt-1">
                                {proj.tech.map((t, tIdx) => (
                                  <span
                                    key={tIdx}
                                    className="px-2 py-0.5 rounded text-[10px] font-mono bg-white/[0.04] border border-white/10 text-gray-300"
                                  >
                                    {t}
                                  </span>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  )}

                  {/* Skills tags */}
                  <div className="flex flex-wrap items-center gap-1.5 mt-5 pt-4 border-t border-white/5">
                    <span className="text-[11px] font-mono text-gray-500 mr-2">Core Tech:</span>
                    {role.skillsUsed.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="px-2.5 py-1 rounded-md text-xs font-mono bg-white/[0.03] border border-white/[0.08] text-gray-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
