'use client';

import { ArrowUpRight, Radio, Activity, CloudSun, ExternalLink } from 'lucide-react';
import { GithubIcon } from './icons';
import { PROJECTS } from '@/data/portfolioData';

export default function SelectedWork() {
  return (
    <section id="projects" className="max-w-[720px] mx-auto px-4 sm:px-5 mt-10">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h2 className="text-base font-semibold text-white">
            Featured Projects
          </h2>
          <p className="text-xs text-[#999999] mt-0.5">
            Real-world systems, cloud applications, and tools I&apos;ve built.
          </p>
        </div>
        <a
          href="https://github.com/Arifafzal51"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs font-mono text-[#b3b3b3] hover:text-white flex items-center gap-1"
        >
          <span>All repos</span>
          <ArrowUpRight className="w-3 h-3" />
        </a>
      </div>

      <div className="flex flex-col gap-4">
        {/* Project 1: BubbleChat */}
        <div className="border border-[#333333] hover:border-[#666666] rounded-[10px] bg-[#121314] overflow-hidden transition-all group">
          <div className="p-4 sm:p-5 flex flex-col gap-3">
            <div className="flex items-start justify-between gap-3">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <h3 className="font-semibold text-white text-base group-hover:text-[#4ade80] transition-colors">
                    {PROJECTS[0].title}
                  </h3>
                  <span className="text-[10px] font-mono text-[#02ff67] bg-[#091d11] border border-[#02ff67]/25 rounded px-2 py-0.5 flex items-center gap-1">
                    <Radio className="w-2.5 h-2.5 animate-pulse" />
                    WebSockets
                  </span>
                </div>
                <p className="text-xs text-[#999999] font-mono">
                  {PROJECTS[0].tagline}
                </p>
              </div>

              {/* Action Link Buttons */}
              <div className="flex items-center gap-1.5 shrink-0">
                {PROJECTS[0].links.live && (
                  <a
                    href={PROJECTS[0].links.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1.5 rounded-md bg-[#1a1b1c] hover:bg-[#232326] text-[#b3b3b3] hover:text-white border border-[#333333] hover:border-[#666666] transition-colors"
                    title="Live App"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
                {PROJECTS[0].links.github && (
                  <a
                    href={PROJECTS[0].links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1.5 rounded-md bg-[#1a1b1c] hover:bg-[#232326] text-[#b3b3b3] hover:text-white border border-[#333333] hover:border-[#666666] transition-colors"
                    title="Source Code"
                  >
                    <GithubIcon className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>
            </div>

            <p className="text-xs sm:text-[13px] text-[#b3b3b3] leading-relaxed">
              {PROJECTS[0].description} {PROJECTS[0].extendedDescription}
            </p>

            {/* Simulated Micro Telemetry */}
            <div className="p-2.5 rounded bg-[#161718] border border-[#26282a] flex flex-wrap items-center justify-between gap-2 text-[11px] font-mono text-[#999999]">
              <div className="flex items-center gap-1.5 text-white">
                <span className="w-1.5 h-1.5 rounded-full bg-[#02ff67]"></span>
                <span>Latency: &lt; 50ms</span>
              </div>
              <div>Concurrency: 50+ Users</div>
              <div className="text-[#4ade80]">AWS Lambda Serverless</div>
            </div>

            {/* Tech tag pills */}
            <div className="flex flex-wrap gap-1.5 pt-1">
              {PROJECTS[0].technologies.map((t) => (
                <span
                  key={t}
                  className="text-[11px] font-mono text-[#b3b3b3] bg-[#1a1b1c] border border-white/[0.08] rounded px-2 py-0.5"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Project 2: Deal Detective */}
        <div className="border border-[#333333] hover:border-[#666666] rounded-[10px] bg-[#121314] overflow-hidden transition-all group">
          <div className="p-4 sm:p-5 flex flex-col gap-3">
            <div className="flex items-start justify-between gap-3">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <h3 className="font-semibold text-white text-base group-hover:text-[#4ade80] transition-colors">
                    {PROJECTS[1].title}
                  </h3>
                  <span className="text-[10px] font-mono text-[#f59e0b] bg-[#f59e0b]/10 border border-[#f59e0b]/25 rounded px-2 py-0.5 flex items-center gap-1">
                    <Activity className="w-2.5 h-2.5" />
                    Hourly Cron
                  </span>
                </div>
                <p className="text-xs text-[#999999] font-mono">
                  {PROJECTS[1].tagline}
                </p>
              </div>

              {/* Action Link Buttons */}
              <div className="flex items-center gap-1.5 shrink-0">
                {PROJECTS[1].links.github && (
                  <a
                    href={PROJECTS[1].links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1.5 rounded-md bg-[#1a1b1c] hover:bg-[#232326] text-[#b3b3b3] hover:text-white border border-[#333333] hover:border-[#666666] transition-colors"
                    title="Source Code"
                  >
                    <GithubIcon className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>
            </div>

            <p className="text-xs sm:text-[13px] text-[#b3b3b3] leading-relaxed">
              {PROJECTS[1].description} Features automated hourly price scraping on Amazon &amp; Flipkart, price trend tracking, min/max/average price curves, and automated email alerts.
            </p>

            {/* Feature List */}
            <div className="p-2.5 rounded bg-[#161718] border border-[#26282a] text-[11px] font-mono text-[#999999] space-y-1">
              <div className="flex justify-between items-center text-white">
                <span>E-Commerce Analytics</span>
                <span className="text-[#f59e0b]">Amazon &amp; Flipkart</span>
              </div>
              <div className="flex flex-wrap gap-x-4 gap-y-1 text-[10px] text-[#b3b3b3]">
                <span>• Price history tracking</span>
                <span>• Min / Max / Avg stats</span>
                <span>• Email notifications</span>
              </div>
            </div>

            {/* Tech tag pills */}
            <div className="flex flex-wrap gap-1.5 pt-1">
              {PROJECTS[1].technologies.map((t) => (
                <span
                  key={t}
                  className="text-[11px] font-mono text-[#b3b3b3] bg-[#1a1b1c] border border-white/[0.08] rounded px-2 py-0.5"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Project 3: SkySight */}
        <div className="border border-[#333333] hover:border-[#666666] rounded-[10px] bg-[#121314] overflow-hidden transition-all group">
          <div className="p-4 sm:p-5 flex flex-col gap-3">
            <div className="flex items-start justify-between gap-3">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <h3 className="font-semibold text-white text-base group-hover:text-[#4ade80] transition-colors">
                    {PROJECTS[2].title}
                  </h3>
                  <span className="text-[10px] font-mono text-[#3b82f6] bg-[#3b82f6]/10 border border-[#3b82f6]/25 rounded px-2 py-0.5 flex items-center gap-1">
                    <CloudSun className="w-2.5 h-2.5" />
                    OpenWeather API
                  </span>
                </div>
                <p className="text-xs text-[#999999] font-mono">
                  {PROJECTS[2].tagline}
                </p>
              </div>

              {/* Action Link Buttons */}
              <div className="flex items-center gap-1.5 shrink-0">
                {PROJECTS[2].links.live && (
                  <a
                    href={PROJECTS[2].links.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1.5 rounded-md bg-[#1a1b1c] hover:bg-[#232326] text-[#b3b3b3] hover:text-white border border-[#333333] hover:border-[#666666] transition-colors"
                    title="Live Demo"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
                {PROJECTS[2].links.github && (
                  <a
                    href={PROJECTS[2].links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1.5 rounded-md bg-[#1a1b1c] hover:bg-[#232326] text-[#b3b3b3] hover:text-white border border-[#333333] hover:border-[#666666] transition-colors"
                    title="Source Code"
                  >
                    <GithubIcon className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>
            </div>

            <p className="text-xs sm:text-[13px] text-[#b3b3b3] leading-relaxed">
              {PROJECTS[2].description} Built with clean vanilla JavaScript with zero framework overhead, delivering real-time meteorological telemetry and global geo-coordinate resolution.
            </p>

            {/* Tech tag pills */}
            <div className="flex flex-wrap gap-1.5 pt-1">
              {PROJECTS[2].technologies.map((t) => (
                <span
                  key={t}
                  className="text-[11px] font-mono text-[#b3b3b3] bg-[#1a1b1c] border border-white/[0.08] rounded px-2 py-0.5"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
