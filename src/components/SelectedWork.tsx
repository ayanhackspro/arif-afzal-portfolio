'use client';

import { useState } from 'react';
import { ArrowUpRight, ExternalLink, Radio, Activity, TrendingDown, CloudSun, ShieldCheck, Cpu } from 'lucide-react';
import { GithubIcon } from '@/components/icons';
import { PROJECTS, type Project } from '@/data/portfolioData';

export default function SelectedWork() {
  const [activeTabBubble, setActiveTabBubble] = useState<'chat' | 'telemetry'>('chat');

  return (
    <section id="projects" className="py-24 md:py-36 border-b border-[#EAE8DE] dark:border-[#202220]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-12 mb-16 border-b border-[#E5E3D8] dark:border-[#262825]">
          <div className="space-y-3">
            <div className="flex items-center space-x-2 text-xs font-mono uppercase tracking-widest text-[#737168] dark:text-[#7E7C74]">
              <span className="w-2 h-2 bg-[#284E3A] dark:bg-[#4E8767]"></span>
              <span>INDEX 02 · ARCHITECTURE & CODE</span>
            </div>
            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-[#141413] dark:text-[#F2F1ED] font-normal tracking-tight">
              Selected Projects
            </h2>
          </div>
          <p className="mt-4 md:mt-0 max-w-md text-sm md:text-base text-[#403F3A] dark:text-[#BFBEB6] font-light">
            A curated collection of things I&apos;ve built, experimented with, and brought to life—spanning real-time systems, automation engines, and client-side tooling.
          </p>
        </div>

        {/* Project 01: BubbleChat */}
        <article className="mb-28 border border-[#E5E3D8] dark:border-[#262825] bg-[#FAF9F5] dark:bg-[#141614] overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            {/* Left Info Column */}
            <div className="lg:col-span-5 p-8 lg:p-12 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-[#E5E3D8] dark:border-[#262825]">
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-3xl font-light text-[#284E3A] dark:text-[#4E8767]">
                    01
                  </span>
                  <span className="text-[11px] font-mono uppercase tracking-wider px-2.5 py-1 border border-[#E5E3D8] dark:border-[#2A2C29] text-[#737168] dark:text-[#7E7C74]">
                    Real-time Systems
                  </span>
                </div>

                <div>
                  <h3 className="font-serif text-3xl sm:text-4xl text-[#141413] dark:text-[#F2F1ED]">
                    BubbleChat
                  </h3>
                  <p className="font-mono text-xs text-[#284E3A] dark:text-[#4E8767] mt-1 tracking-wide">
                    Real-Time Messaging & WebSocket Architecture
                  </p>
                </div>

                <p className="text-sm text-[#403F3A] dark:text-[#BFBEB6] leading-relaxed">
                  Built a real-time chat system supporting public and private messaging using WebSocket architecture. Designed a serverless backend using AWS Lambda and successfully handled 50+ concurrent users with sub-50ms message propagation.
                </p>

                {/* Technical highlights */}
                <div className="space-y-2 pt-2 border-t border-[#EAE8DE] dark:border-[#202220]">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[#737168] dark:text-[#7E7C74]">
                    Architectural Specifications
                  </span>
                  <ul className="text-xs text-[#403F3A] dark:text-[#BFBEB6] space-y-1.5 list-none font-mono">
                    <li className="flex items-center space-x-2">
                      <span className="w-1.5 h-1.5 bg-[#284E3A] dark:bg-[#4E8767]"></span>
                      <span>Bidirectional WebSocket API transport</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <span className="w-1.5 h-1.5 bg-[#284E3A] dark:bg-[#4E8767]"></span>
                      <span>Serverless AWS Lambda event dispatch</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <span className="w-1.5 h-1.5 bg-[#284E3A] dark:bg-[#4E8767]"></span>
                      <span>50+ concurrent users with low latency</span>
                    </li>
                  </ul>
                </div>

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {PROJECTS[0].technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-[11px] font-mono px-2.5 py-1 bg-[#F3F1EA] dark:bg-[#1C1E1C] border border-[#E5E3D8] dark:border-[#2A2C29] text-[#141413] dark:text-[#F2F1ED]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Links */}
              <div className="flex items-center space-x-4 pt-8 mt-6 border-t border-[#EAE8DE] dark:border-[#202220]">
                {PROJECTS[0].links.live && (
                  <a
                    href={PROJECTS[0].links.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 px-4 py-2.5 bg-[#141413] dark:bg-[#F2F1ED] text-[#FAF9F5] dark:text-[#111211] text-xs font-mono uppercase tracking-wider hover:bg-[#284E3A] dark:hover:bg-[#4E8767] dark:hover:text-[#FAF9F5] transition-colors"
                  >
                    <span>Launch Live App</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
                {PROJECTS[0].links.github && (
                  <a
                    href={PROJECTS[0].links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 px-4 py-2.5 border border-[#141413] dark:border-[#F2F1ED] text-[#141413] dark:text-[#F2F1ED] text-xs font-mono uppercase tracking-wider hover:bg-[#F3F1EA] dark:hover:bg-[#1A1C1A] transition-colors"
                  >
                    <GithubIcon className="w-3.5 h-3.5" />
                    <span>Source Code</span>
                  </a>
                )}
              </div>
            </div>

            {/* Right Bespoke Mockup: WebSocket & Interactive Messenger */}
            <div className="lg:col-span-7 bg-[#F7F5EE] dark:bg-[#111211] p-6 lg:p-8 flex flex-col justify-between">
              {/* Telemetry Bar */}
              <div className="flex items-center justify-between pb-4 border-b border-[#E5E3D8] dark:border-[#262825]">
                <div className="flex items-center space-x-3">
                  <div className="flex space-x-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#E26D5C]"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-[#E8C547]"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-[#284E3A] dark:bg-[#4E8767]"></span>
                  </div>
                  <span className="text-xs font-mono text-[#737168] dark:text-[#7E7C74]">
                    wss://api.bubblechat.app/v1
                  </span>
                </div>
                <div className="flex items-center space-x-2 text-xs font-mono text-[#284E3A] dark:text-[#4E8767]">
                  <Radio className="w-3.5 h-3.5 animate-pulse" />
                  <span>WS Connected (38ms)</span>
                </div>
              </div>

              {/* Chat Simulation Container */}
              <div className="my-6 border border-[#E5E3D8] dark:border-[#262825] bg-[#FAF9F5] dark:bg-[#171917] rounded-sm p-4 sm:p-5 shadow-sm space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-[#EAE8DE] dark:border-[#202220]">
                  <div className="flex items-center space-x-2.5">
                    <div className="w-7 h-7 rounded-full bg-[#284E3A] text-white flex items-center justify-center font-mono text-xs">
                      AA
                    </div>
                    <div>
                      <div className="text-xs font-mono font-medium text-[#141413] dark:text-[#F2F1ED]">
                        #engineering-room-01
                      </div>
                      <div className="text-[10px] text-[#737168] dark:text-[#7E7C74] font-mono">
                        54 active concurrent peers
                      </div>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono uppercase px-2 py-0.5 bg-[#EAF2EC] dark:bg-[#1E2E23] text-[#284E3A] dark:text-[#4E8767] border border-[#C6DCCD] dark:border-[#2F4D3A]">
                    AWS Lambda Route
                  </span>
                </div>

                {/* Messages stream */}
                <div className="space-y-3 font-sans text-xs">
                  <div className="flex items-start space-x-2.5">
                    <div className="w-6 h-6 rounded-full bg-[#E5E3D8] dark:bg-[#2A2C29] text-[10px] flex items-center justify-center font-mono text-[#403F3A] dark:text-[#BFBEB6]">
                      CL
                    </div>
                    <div className="space-y-1 max-w-[80%]">
                      <div className="flex items-center space-x-2">
                        <span className="font-mono text-[11px] font-medium text-[#141413] dark:text-[#F2F1ED]">Client_928</span>
                        <span className="text-[10px] font-mono text-[#737168] dark:text-[#7E7C74]">14:28:02</span>
                      </div>
                      <div className="p-2.5 bg-[#F3F1EA] dark:bg-[#202220] border border-[#E5E3D8] dark:border-[#2A2C29] rounded text-[#403F3A] dark:text-[#BFBEB6]">
                        Broadcasting payload across channel subscribers. What is the observed round-trip latency?
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start justify-end space-x-2.5">
                    <div className="space-y-1 max-w-[80%] text-right">
                      <div className="flex items-center justify-end space-x-2">
                        <span className="text-[10px] font-mono text-[#737168] dark:text-[#7E7C74]">14:28:03</span>
                        <span className="font-mono text-[11px] font-medium text-[#284E3A] dark:text-[#4E8767]">Arif (Host)</span>
                      </div>
                      <div className="p-2.5 bg-[#284E3A] text-white rounded text-left shadow-sm">
                        Sub-50ms dispatch confirmed. AWS Lambda WebSocket gateway route handled payload with zero dropped packets.
                      </div>
                    </div>
                    <div className="w-6 h-6 rounded-full bg-[#284E3A] text-[10px] flex items-center justify-center font-mono text-white">
                      AF
                    </div>
                  </div>
                </div>

                {/* Mock Input Bar */}
                <div className="pt-3 border-t border-[#EAE8DE] dark:border-[#202220] flex items-center space-x-2 font-mono text-xs">
                  <div className="flex-1 py-1.5 px-3 bg-[#F3F1EA] dark:bg-[#202220] border border-[#E5E3D8] dark:border-[#2A2C29] text-[#737168] dark:text-[#7E7C74] flex items-center justify-between">
                    <span>Type message to broadcast...</span>
                    <span className="text-[10px] text-[#284E3A] dark:text-[#4E8767]">Enter ↵</span>
                  </div>
                </div>
              </div>

              {/* Bottom Architectural Metrics Footer */}
              <div className="grid grid-cols-3 gap-2 pt-4 border-t border-[#E5E3D8] dark:border-[#262825] text-center font-mono">
                <div className="p-2 bg-[#FAF9F5] dark:bg-[#151715] border border-[#E5E3D8] dark:border-[#262825]">
                  <div className="text-[10px] text-[#737168] dark:text-[#7E7C74] uppercase">Concurrent</div>
                  <div className="text-sm font-semibold text-[#141413] dark:text-[#F2F1ED]">50+ Active</div>
                </div>
                <div className="p-2 bg-[#FAF9F5] dark:bg-[#151715] border border-[#E5E3D8] dark:border-[#262825]">
                  <div className="text-[10px] text-[#737168] dark:text-[#7E7C74] uppercase">Latency</div>
                  <div className="text-sm font-semibold text-[#284E3A] dark:text-[#4E8767]">&lt; 50ms</div>
                </div>
                <div className="p-2 bg-[#FAF9F5] dark:bg-[#151715] border border-[#E5E3D8] dark:border-[#262825]">
                  <div className="text-[10px] text-[#737168] dark:text-[#7E7C74] uppercase">Compute</div>
                  <div className="text-sm font-semibold text-[#141413] dark:text-[#F2F1ED]">Serverless</div>
                </div>
              </div>
            </div>
          </div>
        </article>

        {/* Project 02: Deal Detective */}
        <article className="mb-28 border border-[#E5E3D8] dark:border-[#262825] bg-[#FAF9F5] dark:bg-[#141614] overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            {/* Left Bespoke Mockup: Price Tracker Curves & Scraper Schedule */}
            <div className="lg:col-span-7 order-2 lg:order-1 bg-[#F7F5EE] dark:bg-[#111211] p-6 lg:p-8 flex flex-col justify-between border-t lg:border-t-0 lg:border-r border-[#E5E3D8] dark:border-[#262825]">
              {/* Telemetry Bar */}
              <div className="flex items-center justify-between pb-4 border-b border-[#E5E3D8] dark:border-[#262825]">
                <div className="flex items-center space-x-2">
                  <Activity className="w-4 h-4 text-[#284E3A] dark:text-[#4E8767]" />
                  <span className="text-xs font-mono font-medium text-[#141413] dark:text-[#F2F1ED]">
                    deal-detective.engine // automated-hourly-cron
                  </span>
                </div>
                <span className="text-[11px] font-mono px-2 py-0.5 bg-[#EAF2EC] dark:bg-[#1E2E23] text-[#284E3A] dark:text-[#4E8767] border border-[#C6DCCD] dark:border-[#2F4D3A]">
                  Active Cron
                </span>
              </div>

              {/* E-Commerce Intelligence Card */}
              <div className="my-6 border border-[#E5E3D8] dark:border-[#262825] bg-[#FAF9F5] dark:bg-[#171917] p-5 rounded-sm space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-[#EAE8DE] dark:border-[#202220]">
                  <div>
                    <span className="text-[10px] font-mono uppercase text-[#737168] dark:text-[#7E7C74]">
                      Tracked SKU · Amazon &amp; Flipkart Sync
                    </span>
                    <h4 className="font-serif text-lg font-medium text-[#141413] dark:text-[#F2F1ED]">
                      Sony WH-1000XM5 Noise-Cancelling Headphones
                    </h4>
                  </div>
                  <div className="flex items-center space-x-1.5 px-2.5 py-1 bg-[#EAF2EC] dark:bg-[#192E21] border border-[#C6DCCD] dark:border-[#2B4E38] text-[#284E3A] dark:text-[#4E8767] text-xs font-mono font-medium self-start sm:self-auto">
                    <TrendingDown className="w-3.5 h-3.5" />
                    <span>-28% Drop Alert</span>
                  </div>
                </div>

                {/* Price Matrix Comparison */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs font-mono">
                  <div className="p-2.5 bg-[#F3F1EA] dark:bg-[#1F211F] border border-[#E5E3D8] dark:border-[#2A2C29]">
                    <span className="text-[10px] text-[#737168] dark:text-[#7E7C74] block">Current</span>
                    <span className="text-sm font-semibold text-[#284E3A] dark:text-[#4E8767]">₹24,990</span>
                  </div>
                  <div className="p-2.5 bg-[#F3F1EA] dark:bg-[#1F211F] border border-[#E5E3D8] dark:border-[#2A2C29]">
                    <span className="text-[10px] text-[#737168] dark:text-[#7E7C74] block">Historical Min</span>
                    <span className="text-sm font-semibold text-[#141413] dark:text-[#F2F1ED]">₹22,499</span>
                  </div>
                  <div className="p-2.5 bg-[#F3F1EA] dark:bg-[#1F211F] border border-[#E5E3D8] dark:border-[#2A2C29]">
                    <span className="text-[10px] text-[#737168] dark:text-[#7E7C74] block">Historical Max</span>
                    <span className="text-sm font-semibold text-[#737168] dark:text-[#7E7C74]">₹34,990</span>
                  </div>
                  <div className="p-2.5 bg-[#F3F1EA] dark:bg-[#1F211F] border border-[#E5E3D8] dark:border-[#2A2C29]">
                    <span className="text-[10px] text-[#737168] dark:text-[#7E7C74] block">30-Day Mean</span>
                    <span className="text-sm font-semibold text-[#141413] dark:text-[#F2F1ED]">₹28,450</span>
                  </div>
                </div>

                {/* SVG Visual Price Sparkline / History curve */}
                <div className="pt-2">
                  <div className="flex justify-between text-[10px] font-mono text-[#737168] dark:text-[#7E7C74] mb-1">
                    <span>PRICE TREND (PAST 30 DAYS)</span>
                    <span className="text-[#284E3A] dark:text-[#4E8767]">STABLE AT LOWEST THRESHOLD</span>
                  </div>
                  <div className="h-20 w-full bg-[#F3F1EA] dark:bg-[#1E201E] border border-[#E5E3D8] dark:border-[#2A2C29] p-2 flex items-end">
                    <svg className="w-full h-full overflow-visible" viewBox="0 0 300 60" preserveAspectRatio="none">
                      <path
                        d="M 0,15 L 40,15 L 70,30 L 100,20 L 140,45 L 180,35 L 220,55 L 260,52 L 300,56"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        className="text-[#284E3A] dark:text-[#4E8767]"
                      />
                      <circle cx="300" cy="56" r="4" className="fill-[#284E3A] dark:fill-[#4E8767]" />
                    </svg>
                  </div>
                </div>

                {/* Scraper Log */}
                <div className="p-2.5 bg-[#141413] text-[#FAF9F5] font-mono text-[11px] rounded-sm space-y-1">
                  <div className="text-[#737168]">&gt; worker.js :: execution log [hourly_cron_job]</div>
                  <div className="text-emerald-400">&gt; SUCCESS: Extracted prices from Amazon &amp; Flipkart DOM</div>
                  <div className="text-amber-200">&gt; ALERT: Target price threshold crossed. Dispatching SMTP email.</div>
                </div>
              </div>

              {/* Micro-features list */}
              <div className="grid grid-cols-2 gap-2 pt-4 border-t border-[#E5E3D8] dark:border-[#262825] font-mono text-xs text-[#403F3A] dark:text-[#BFBEB6]">
                <div className="flex items-center space-x-1.5">
                  <span className="w-1.5 h-1.5 bg-[#284E3A] dark:bg-[#4E8767]"></span>
                  <span>Automated hourly cron updates</span>
                </div>
                <div className="flex items-center space-x-1.5">
                  <span className="w-1.5 h-1.5 bg-[#284E3A] dark:bg-[#4E8767]"></span>
                  <span>Instant email alert notifications</span>
                </div>
              </div>
            </div>

            {/* Right Info Column */}
            <div className="lg:col-span-5 order-1 lg:order-2 p-8 lg:p-12 flex flex-col justify-between">
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-3xl font-light text-[#284E3A] dark:text-[#4E8767]">
                    02
                  </span>
                  <span className="text-[11px] font-mono uppercase tracking-wider px-2.5 py-1 border border-[#E5E3D8] dark:border-[#2A2C29] text-[#737168] dark:text-[#7E7C74]">
                    Data Automation &amp; Next.js
                  </span>
                </div>

                <div>
                  <h3 className="font-serif text-3xl sm:text-4xl text-[#141413] dark:text-[#F2F1ED]">
                    Deal Detective
                  </h3>
                  <p className="font-mono text-xs text-[#284E3A] dark:text-[#4E8767] mt-1 tracking-wide">
                    Price Tracking &amp; Product Intelligence Platform
                  </p>
                </div>

                <p className="text-sm text-[#403F3A] dark:text-[#BFBEB6] leading-relaxed">
                  Developed an intelligent price tracking platform for Amazon and Flipkart with automated data extraction pipelines, dynamic price trend tracking, and real-time email alerts.
                </p>

                {/* Key Features explicitly required */}
                <div className="space-y-2 pt-2 border-t border-[#EAE8DE] dark:border-[#202220]">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[#737168] dark:text-[#7E7C74]">
                    Platform Features
                  </span>
                  <ul className="text-xs text-[#403F3A] dark:text-[#BFBEB6] space-y-2 font-mono">
                    <li className="flex items-start space-x-2">
                      <span className="w-1.5 h-1.5 bg-[#284E3A] dark:bg-[#4E8767] mt-1"></span>
                      <span>Price history tracking with historical fluctuation logs</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="w-1.5 h-1.5 bg-[#284E3A] dark:bg-[#4E8767] mt-1"></span>
                      <span>Minimum, maximum, and average historical price analysis</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="w-1.5 h-1.5 bg-[#284E3A] dark:bg-[#4E8767] mt-1"></span>
                      <span>Automated hourly scraping updates without rate-limiting</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="w-1.5 h-1.5 bg-[#284E3A] dark:bg-[#4E8767] mt-1"></span>
                      <span>Instant automated email notifications on price drop triggers</span>
                    </li>
                  </ul>
                </div>

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {PROJECTS[1].technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-[11px] font-mono px-2.5 py-1 bg-[#F3F1EA] dark:bg-[#1C1E1C] border border-[#E5E3D8] dark:border-[#2A2C29] text-[#141413] dark:text-[#F2F1ED]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Links */}
              <div className="flex items-center space-x-4 pt-8 mt-6 border-t border-[#EAE8DE] dark:border-[#202220]">
                {PROJECTS[1].links.github && (
                  <a
                    href={PROJECTS[1].links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 px-4 py-2.5 bg-[#141413] dark:bg-[#F2F1ED] text-[#FAF9F5] dark:text-[#111211] text-xs font-mono uppercase tracking-wider hover:bg-[#284E3A] dark:hover:bg-[#4E8767] dark:hover:text-[#FAF9F5] transition-colors"
                  >
                    <GithubIcon className="w-3.5 h-3.5" />
                    <span>View Repository</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>
            </div>
          </div>
        </article>

        {/* Project 03: SkySight */}
        <article className="border border-[#E5E3D8] dark:border-[#262825] bg-[#FAF9F5] dark:bg-[#141614] overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            {/* Left Info Column */}
            <div className="lg:col-span-5 p-8 lg:p-12 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-[#E5E3D8] dark:border-[#262825]">
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-3xl font-light text-[#284E3A] dark:text-[#4E8767]">
                    03
                  </span>
                  <span className="text-[11px] font-mono uppercase tracking-wider px-2.5 py-1 border border-[#E5E3D8] dark:border-[#2A2C29] text-[#737168] dark:text-[#7E7C74]">
                    Vanilla Web &amp; API Integration
                  </span>
                </div>

                <div>
                  <h3 className="font-serif text-3xl sm:text-4xl text-[#141413] dark:text-[#F2F1ED]">
                    SkySight
                  </h3>
                  <p className="font-mono text-xs text-[#284E3A] dark:text-[#4E8767] mt-1 tracking-wide">
                    Weather Application with Global Weather Information
                  </p>
                </div>

                <p className="text-sm text-[#403F3A] dark:text-[#BFBEB6] leading-relaxed">
                  Built a responsive weather application using the OpenWeather API to display real-time global weather information, barometric readings, and geographic atmospheric conditions with zero framework overhead.
                </p>

                {/* Tech Highlights */}
                <div className="space-y-2 pt-2 border-t border-[#EAE8DE] dark:border-[#202220]">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[#737168] dark:text-[#7E7C74]">
                    Engineering Focus
                  </span>
                  <ul className="text-xs text-[#403F3A] dark:text-[#BFBEB6] space-y-1.5 list-none font-mono">
                    <li className="flex items-center space-x-2">
                      <span className="w-1.5 h-1.5 bg-[#284E3A] dark:bg-[#4E8767]"></span>
                      <span>Zero-dependency fast vanilla JavaScript</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <span className="w-1.5 h-1.5 bg-[#284E3A] dark:bg-[#4E8767]"></span>
                      <span>OpenWeather API coordinate resolution</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <span className="w-1.5 h-1.5 bg-[#284E3A] dark:bg-[#4E8767]"></span>
                      <span>Real-time atmospheric telemetry and responsive UI</span>
                    </li>
                  </ul>
                </div>

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {PROJECTS[2].technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-[11px] font-mono px-2.5 py-1 bg-[#F3F1EA] dark:bg-[#1C1E1C] border border-[#E5E3D8] dark:border-[#2A2C29] text-[#141413] dark:text-[#F2F1ED]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Links */}
              <div className="flex items-center space-x-4 pt-8 mt-6 border-t border-[#EAE8DE] dark:border-[#202220]">
                {PROJECTS[2].links.live && (
                  <a
                    href={PROJECTS[2].links.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 px-4 py-2.5 bg-[#141413] dark:bg-[#F2F1ED] text-[#FAF9F5] dark:text-[#111211] text-xs font-mono uppercase tracking-wider hover:bg-[#284E3A] dark:hover:bg-[#4E8767] dark:hover:text-[#FAF9F5] transition-colors"
                  >
                    <span>Launch Live Demo</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
                {PROJECTS[2].links.github && (
                  <a
                    href={PROJECTS[2].links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 px-4 py-2.5 border border-[#141413] dark:border-[#F2F1ED] text-[#141413] dark:text-[#F2F1ED] text-xs font-mono uppercase tracking-wider hover:bg-[#F3F1EA] dark:hover:bg-[#1A1C1A] transition-colors"
                  >
                    <GithubIcon className="w-3.5 h-3.5" />
                    <span>Source Code</span>
                  </a>
                )}
              </div>
            </div>

            {/* Right Bespoke Mockup: Clean Atmospheric Telemetry Card */}
            <div className="lg:col-span-7 bg-[#F7F5EE] dark:bg-[#111211] p-6 lg:p-8 flex flex-col justify-between">
              {/* Telemetry Bar */}
              <div className="flex items-center justify-between pb-4 border-b border-[#E5E3D8] dark:border-[#262825]">
                <div className="flex items-center space-x-2 text-xs font-mono text-[#737168] dark:text-[#7E7C74]">
                  <CloudSun className="w-4 h-4 text-[#284E3A] dark:text-[#4E8767]" />
                  <span>api.openweathermap.org/data/2.5/weather</span>
                </div>
                <span className="text-xs font-mono text-[#284E3A] dark:text-[#4E8767]">
                  HTTP 200 OK (82ms)
                </span>
              </div>

              {/* Weather Telemetry Instrument */}
              <div className="my-6 border border-[#E5E3D8] dark:border-[#262825] bg-[#FAF9F5] dark:bg-[#171917] p-5 rounded-sm space-y-5">
                <div className="flex justify-between items-start">
                  <div>
                    <span className="text-[10px] font-mono text-[#737168] dark:text-[#7E7C74] uppercase">
                      Current Atmospheric Station
                    </span>
                    <h4 className="font-serif text-2xl font-medium text-[#141413] dark:text-[#F2F1ED]">
                      West Champaran, Bihar
                    </h4>
                    <p className="text-xs font-mono text-[#284E3A] dark:text-[#4E8767]">
                      Lat: 26.80° N · Lon: 84.50° E · Alt: 84m
                    </p>
                  </div>
                  <div className="text-right">
                    <div className="font-serif text-4xl font-normal text-[#141413] dark:text-[#F2F1ED]">
                      27°C
                    </div>
                    <span className="text-[11px] font-mono text-[#737168] dark:text-[#7E7C74]">
                      Clear Sky / Mild
                    </span>
                  </div>
                </div>

                {/* Telemetry Sensor Readouts */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-2 border-t border-[#EAE8DE] dark:border-[#202220] font-mono text-xs">
                  <div className="p-2.5 bg-[#F3F1EA] dark:bg-[#202220] border border-[#E5E3D8] dark:border-[#2A2C29]">
                    <span className="text-[10px] text-[#737168] dark:text-[#7E7C74] block">Humidity</span>
                    <span className="text-sm font-semibold text-[#141413] dark:text-[#F2F1ED]">54%</span>
                  </div>
                  <div className="p-2.5 bg-[#F3F1EA] dark:bg-[#202220] border border-[#E5E3D8] dark:border-[#2A2C29]">
                    <span className="text-[10px] text-[#737168] dark:text-[#7E7C74] block">Wind Vector</span>
                    <span className="text-sm font-semibold text-[#141413] dark:text-[#F2F1ED]">6.2 km/h NW</span>
                  </div>
                  <div className="p-2.5 bg-[#F3F1EA] dark:bg-[#202220] border border-[#E5E3D8] dark:border-[#2A2C29]">
                    <span className="text-[10px] text-[#737168] dark:text-[#7E7C74] block">Barometer</span>
                    <span className="text-sm font-semibold text-[#141413] dark:text-[#F2F1ED]">1014 hPa</span>
                  </div>
                  <div className="p-2.5 bg-[#F3F1EA] dark:bg-[#202220] border border-[#E5E3D8] dark:border-[#2A2C29]">
                    <span className="text-[10px] text-[#737168] dark:text-[#7E7C74] block">Visibility</span>
                    <span className="text-sm font-semibold text-[#141413] dark:text-[#F2F1ED]">10.0 km</span>
                  </div>
                </div>

                {/* Raw API Response View */}
                <div className="p-2.5 bg-[#141413] text-[#A5D6A7] font-mono text-[11px] rounded-sm">
                  <code>{`{ "coord": { "lon": 84.50, "lat": 26.80 }, "weather": [{ "main": "Clear" }], "main": { "temp": 27.2, "humidity": 54 } }`}</code>
                </div>
              </div>

              {/* Bottom Architectural Metrics Footer */}
              <div className="grid grid-cols-3 gap-2 pt-4 border-t border-[#E5E3D8] dark:border-[#262825] text-center font-mono">
                <div className="p-2 bg-[#FAF9F5] dark:bg-[#151715] border border-[#E5E3D8] dark:border-[#262825]">
                  <div className="text-[10px] text-[#737168] dark:text-[#7E7C74] uppercase">Runtime</div>
                  <div className="text-sm font-semibold text-[#141413] dark:text-[#F2F1ED]">Vanilla ES6+</div>
                </div>
                <div className="p-2 bg-[#FAF9F5] dark:bg-[#151715] border border-[#E5E3D8] dark:border-[#262825]">
                  <div className="text-[10px] text-[#737168] dark:text-[#7E7C74] uppercase">Bundle Size</div>
                  <div className="text-sm font-semibold text-[#284E3A] dark:text-[#4E8767]">&lt; 14 KB</div>
                </div>
                <div className="p-2 bg-[#FAF9F5] dark:bg-[#151715] border border-[#E5E3D8] dark:border-[#262825]">
                  <div className="text-[10px] text-[#737168] dark:text-[#7E7C74] uppercase">Coverage</div>
                  <div className="text-sm font-semibold text-[#141413] dark:text-[#F2F1ED]">Global</div>
                </div>
              </div>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
