"use client";

import React, { useState } from "react";
import { PROFILE, ProjectItem } from "@/data/profile";
import {
  ExternalLinkIcon,
  LayersIcon,
  ShieldIcon,
  SparklesIcon,
  ArrowUpRightIcon,
  XIcon,
  CheckIcon
} from "./Icons";

export const PortfolioSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const categories = [
    "All",
    "Mobile Architecture",
    "Enterprise Microfrontends",
    "Agentic AI & ML",
    "IoT & Travel"
  ];

  const filteredProjects =
    activeCategory === "All"
      ? PROFILE.portfolio
      : PROFILE.portfolio.filter((p) => p.category === activeCategory);

  return (
    <section id="portfolio" className="py-14 md:py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="text-xs font-mono tracking-widest text-cyan-400 uppercase bg-cyan-500/10 px-3 py-1 rounded-md border border-cyan-500/20">
              // 04 FLAGSHIP INITIATIVES & PORTFOLIO
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mt-2">
              Featured Architecture & Case Studies
            </h2>
            <p className="text-gray-400 max-w-xl text-sm sm:text-base mt-1">
              Select architectural blueprints, mission-critical enterprise systems, and next-gen AI prototypes.
            </p>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-white/[0.03] border border-white/10 rounded-xl">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all cursor-pointer ${
                  activeCategory === cat
                    ? "bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 font-semibold"
                    : "text-gray-400 hover:text-gray-200 hover:bg-white/5 border border-transparent"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="glass-panel rounded-2xl border border-white/10 p-6 flex flex-col justify-between glass-panel-hover group"
            >
              <div className="space-y-4">
                {/* Header badges */}
                <div className="flex items-center justify-between gap-2">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-cyan-400 bg-cyan-500/10 px-2 py-0.5 rounded border border-cyan-500/20">
                    {project.category}
                  </span>
                  <span
                    className={`text-[10px] font-mono px-2 py-0.5 rounded border ${
                      project.status === "Production Enterprise"
                        ? "bg-emerald-500/10 text-emerald-400 border-emerald-500/30"
                        : "bg-purple-500/10 text-purple-400 border-purple-500/30"
                    }`}
                  >
                    {project.status}
                  </span>
                </div>

                {/* Title & Client */}
                <div>
                  <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {project.title}
                  </h3>
                  {project.clientOrOrg && (
                    <div className="text-xs font-mono text-gray-400 mt-1">
                      Organization: <span className="text-gray-200">{project.clientOrOrg}</span>
                    </div>
                  )}
                </div>

                <p className="text-xs text-gray-300 leading-relaxed">
                  {project.description}
                </p>

                {/* Key Metrics / Highlights */}
                <div className="bg-[#090d16] p-3 rounded-xl border border-white/5 space-y-1.5 text-xs">
                  <div className="text-cyan-400 font-mono text-[11px] font-medium">
                    {project.metrics}
                  </div>
                  <div className="text-gray-400 text-[11px] leading-normal line-clamp-2">
                    {project.architectureHighlights[0]}
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {project.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2 py-0.5 rounded text-[10px] font-mono bg-white/[0.04] border border-white/10 text-gray-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Card Footer Link */}
              <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
                <button
                  onClick={() => setSelectedProject(project)}
                  className="text-xs font-mono font-medium text-cyan-400 hover:text-cyan-300 flex items-center gap-1 cursor-pointer"
                >
                  <span>Explore Architecture</span>
                  <ArrowUpRightIcon className="w-3.5 h-3.5" />
                </button>
                <span className="text-[10px] font-mono text-gray-500">
                  Ready for Future Links
                </span>
              </div>
            </div>
          ))}

          {/* Future Portfolio Slot Card */}
          <div className="glass-panel rounded-2xl border border-dashed border-cyan-500/30 p-6 flex flex-col items-center justify-center text-center space-y-3 bg-cyan-950/[0.05] hover:bg-cyan-950/[0.1] transition-all">
            <div className="w-12 h-12 rounded-full bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
              <SparklesIcon className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-base font-bold text-white">Future Portfolio Expansion</h4>
              <p className="text-xs text-gray-400 max-w-xs mt-1">
                Have an ambitious AI, mobile, or enterprise microfrontend transformation?
              </p>
            </div>
            <a
              href={`mailto:${PROFILE.email}?subject=Architecture Advisory Inquiry`}
              className="mt-2 px-4 py-2 rounded-lg text-xs font-mono font-medium bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 hover:bg-cyan-500/20 transition-all flex items-center gap-1.5"
            >
              <span>Initiate Collaboration</span>
              <ArrowUpRightIcon className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Modal for Deep Architecture Blueprint */}
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
            <div className="glass-panel w-full max-w-2xl rounded-2xl border border-white/20 p-6 sm:p-8 space-y-6 relative shadow-2xl animate-in fade-in zoom-in-95">
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-5 right-5 p-2 rounded-lg text-gray-400 hover:text-white hover:bg-white/10 cursor-pointer"
              >
                <XIcon className="w-5 h-5" />
              </button>

              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs font-mono uppercase tracking-wider text-cyan-400 bg-cyan-500/10 px-2.5 py-0.5 rounded border border-cyan-500/20">
                    {selectedProject.category}
                  </span>
                  <span className="text-xs font-mono px-2.5 py-0.5 rounded border bg-emerald-500/10 text-emerald-400 border-emerald-500/30">
                    {selectedProject.status}
                  </span>
                </div>
                <h3 className="text-2xl font-extrabold text-white">
                  {selectedProject.title}
                </h3>
                {selectedProject.clientOrOrg && (
                  <p className="text-sm font-mono text-cyan-300 mt-1">
                    Deployed at / Engineered for: {selectedProject.clientOrOrg}
                  </p>
                )}
              </div>

              <div className="space-y-3">
                <h4 className="text-xs font-mono uppercase tracking-wider text-gray-400">
                  System Architecture Highlights:
                </h4>
                <div className="space-y-2">
                  {selectedProject.architectureHighlights.map((hl, i) => (
                    <div
                      key={i}
                      className="p-3 rounded-xl bg-white/[0.03] border border-white/5 flex items-start gap-3"
                    >
                      <CheckIcon className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                      <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                        {hl}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <h4 className="text-xs font-mono uppercase tracking-wider text-gray-400">
                  Technology Stack:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 rounded-lg text-xs font-mono bg-cyan-500/10 border border-cyan-500/20 text-cyan-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                <span className="text-xs font-mono text-gray-400">
                  Official Portfolio Entry
                </span>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="px-4 py-2 rounded-lg text-xs font-medium bg-white/10 hover:bg-white/20 text-white cursor-pointer"
                >
                  Close Blueprint
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
