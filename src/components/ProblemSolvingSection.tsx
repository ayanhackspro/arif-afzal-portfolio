'use client';

import { motion } from 'framer-motion';
import { Flame, Code2, Trophy } from 'lucide-react';
import { PERSONAL_DETAILS } from '@/data/portfolioData';

export default function ProblemSolvingSection() {
  const platforms = [
    {
      name: 'LeetCode',
      count: '175+',
      note: 'Weekly contests & challenges',
      icon: Flame,
      color: 'text-[#f59e0b]',
    },
    {
      name: 'GeeksforGeeks',
      count: '80+',
      note: 'Data structures & core algos',
      icon: Code2,
      color: 'text-[#02ff67]',
    },
    {
      name: 'HackerRank',
      count: '120+',
      note: 'Problem solving benchmarks',
      icon: Trophy,
      color: 'text-[#3b82f6]',
    },
  ];

  const topics = [
    'Arrays & Two Pointers',
    'Strings & Sliding Window',
    'Linked Lists',
    'Stacks & Queues',
    'Binary Trees & BST',
    'Graph Algorithms (BFS/DFS)',
    'Dynamic Programming',
    'Java Collections Framework',
  ];

  return (
    <motion.section
      id="dsa"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.15 }}
      className="max-w-[720px] mx-auto px-4 sm:px-5 mt-10"
    >
      <div className="mb-4">
        <h2 className="text-base font-semibold text-white">
          Problem Solving &amp; DSA
        </h2>
        <p className="text-xs text-[#999999] mt-0.5">
          Algorithmic discipline grounded in Java with time/space complexity rigor.
        </p>
      </div>

      <div className="border border-[#333333] hover:border-[#444444] rounded-[10px] p-5 sm:p-6 bg-[#121314] transition-all duration-200 space-y-5 shadow-[0_4px_16px_rgba(0,0,0,0.3)]">
        {/* Total metric banner */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-[#26282a]">
          <div>
            <span className="text-[11px] font-mono uppercase tracking-wider text-[#999999] block">
              Cumulative Milestone
            </span>
            <div className="flex items-baseline gap-2 mt-1">
              <span className="text-3xl sm:text-4xl font-bold font-mono text-white">
                400+
              </span>
              <span className="text-sm font-mono text-[#02ff67]">
                Problems Solved in Java
              </span>
            </div>
          </div>
          <span className="text-xs font-mono text-[#b3b3b3] bg-[#1a1b1c] border border-[#333333] rounded px-2.5 py-1 self-start sm:self-auto">
            Weekly Contest Participant
          </span>
        </div>

        {/* 3 Platform Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {platforms.map((p) => {
            const Icon = p.icon;
            return (
              <div
                key={p.name}
                className="p-3.5 rounded-md bg-[#161718] border border-[#26282a] hover:border-[#444444] hover:-translate-y-0.5 transition-all duration-200 space-y-1.5"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-medium text-white">{p.name}</span>
                  <Icon className={`w-3.5 h-3.5 ${p.color}`} />
                </div>
                <div className="text-xl font-bold font-mono text-white">
                  {p.count}
                </div>
                <div className="text-[11px] text-[#999999] font-mono leading-tight">
                  {p.note}
                </div>
              </div>
            );
          })}
        </div>

        {/* Topics grid */}
        <div className="pt-2">
          <span className="text-[11px] font-mono uppercase tracking-wider text-[#999999] block mb-2">
            Algorithmic Competencies
          </span>
          <div className="flex flex-wrap gap-1.5">
            {topics.map((t) => (
              <span
                key={t}
                className="text-[11px] font-mono text-[#b3b3b3] bg-[#1a1b1c] hover:bg-[#232326] border border-white/[0.08] hover:border-[#666666] rounded px-2.5 py-1 transition-colors cursor-default"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
}
