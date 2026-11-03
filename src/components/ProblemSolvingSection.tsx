'use client';

import { useState } from 'react';
import { Code2, Trophy, Cpu, Hash, CheckSquare, Layers, Flame, ArrowUpRight } from 'lucide-react';
import { PERSONAL_DETAILS } from '@/data/portfolioData';

const TOPIC_SPECS = [
  { topic: 'Arrays & Two Pointers', mastery: 'High Volume', complexity: 'O(N) / O(1) space' },
  { topic: 'Strings & Parsing', mastery: 'High Volume', complexity: 'Sliding window & hashing' },
  { topic: 'Linked Lists', mastery: 'Core', complexity: 'Cycle detection & reversal' },
  { topic: 'Stacks & Monotonic Queues', mastery: 'Core', complexity: 'Next greater element' },
  { topic: 'Binary Trees & BST', mastery: 'Advanced', complexity: 'DFS / BFS / Traversals' },
  { topic: 'Graphs & Disjoint Sets', mastery: 'Advanced', complexity: 'BFS, DFS, Dijkstra, Union-Find' },
  { topic: 'Dynamic Programming', mastery: 'Applied', complexity: 'Memoization & 1D/2D Tabulation' },
  { topic: 'Binary Search & Math', mastery: 'Applied', complexity: 'O(log N) boundaries' },
];

export default function ProblemSolvingSection() {
  const [selectedSnippet, setSelectedSnippet] = useState<'sliding_window' | 'tree_traversal'>('sliding_window');

  return (
    <section id="problem-solving" className="py-24 md:py-36 border-b border-[#EAE8DE] dark:border-[#202220]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-12 mb-16 border-b border-[#E5E3D8] dark:border-[#262825]">
          <div className="space-y-3">
            <div className="flex items-center space-x-2 text-xs font-mono uppercase tracking-widest text-[#737168] dark:text-[#7E7C74]">
              <span className="w-2 h-2 bg-[#284E3A] dark:bg-[#4E8767]"></span>
              <span>INDEX 04 · ALGORITHMIC RIGOR</span>
            </div>
            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-[#141413] dark:text-[#F2F1ED] font-normal tracking-tight">
              Problem Solving &amp; DSA
            </h2>
          </div>
          <p className="mt-4 md:mt-0 max-w-md text-sm md:text-base text-[#403F3A] dark:text-[#BFBEB6] font-light">
            Consistent algorithmic discipline grounded in Java. Solving complex computational problems, analyzing time/space trade-offs, and competing in weekly algorithmic contests.
          </p>
        </div>

        {/* Master Metric Hero Card */}
        <div className="border border-[#E5E3D8] dark:border-[#262825] bg-[#FAF9F5] dark:bg-[#141614] p-8 md:p-12 mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* The Big 400+ */}
            <div className="lg:col-span-5 space-y-3 border-b lg:border-b-0 lg:border-r border-[#E5E3D8] dark:border-[#262825] pb-8 lg:pb-0 lg:pr-8">
              <span className="text-xs font-mono uppercase tracking-widest text-[#737168] dark:text-[#7E7C74]">
                Total DSA Benchmark
              </span>
              <div className="flex items-baseline space-x-3">
                <span className="font-serif text-6xl sm:text-7xl md:text-8xl text-[#141413] dark:text-[#F2F1ED] font-medium leading-none">
                  {PERSONAL_DETAILS.problemSolvingSummary.total}
                </span>
                <span className="font-mono text-sm uppercase text-[#284E3A] dark:text-[#4E8767] tracking-wider font-semibold">
                  Problems Solved
                </span>
              </div>
              <p className="text-xs font-mono text-[#737168] dark:text-[#7E7C74] pt-2">
                Primary implementation language: <span className="text-[#141413] dark:text-[#F2F1ED] font-medium">Java</span> · Focus on asymptotic efficiency
              </p>
            </div>

            {/* Three Platform Breakdown Cards */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-4">
              {/* LeetCode */}
              <div className="p-5 border border-[#E5E3D8] dark:border-[#262825] bg-[#F7F5EE] dark:bg-[#1B1D1B] space-y-3">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-[#737168] dark:text-[#7E7C74]">01 // LEETCODE</span>
                  <Flame className="w-4 h-4 text-[#D97706]" />
                </div>
                <div className="font-serif text-4xl font-normal text-[#141413] dark:text-[#F2F1ED]">
                  175+
                </div>
                <p className="text-[11px] font-mono text-[#403F3A] dark:text-[#BFBEB6] leading-snug">
                  Weekly contest participant · Arrays, Trees, DP &amp; Graphs
                </p>
              </div>

              {/* GeeksforGeeks */}
              <div className="p-5 border border-[#E5E3D8] dark:border-[#262825] bg-[#F7F5EE] dark:bg-[#1B1D1B] space-y-3">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-[#737168] dark:text-[#7E7C74]">02 // GEEKSFORGEEKS</span>
                  <Code2 className="w-4 h-4 text-[#284E3A] dark:text-[#4E8767]" />
                </div>
                <div className="font-serif text-4xl font-normal text-[#141413] dark:text-[#F2F1ED]">
                  80+
                </div>
                <p className="text-[11px] font-mono text-[#403F3A] dark:text-[#BFBEB6] leading-snug">
                  Core algorithm fundamentals &amp; data structure patterns
                </p>
              </div>

              {/* HackerRank */}
              <div className="p-5 border border-[#E5E3D8] dark:border-[#262825] bg-[#F7F5EE] dark:bg-[#1B1D1B] space-y-3">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-[#737168] dark:text-[#7E7C74]">03 // HACKERRANK</span>
                  <Trophy className="w-4 h-4 text-[#284E3A] dark:text-[#4E8767]" />
                </div>
                <div className="font-serif text-4xl font-normal text-[#141413] dark:text-[#F2F1ED]">
                  120+
                </div>
                <p className="text-[11px] font-mono text-[#403F3A] dark:text-[#BFBEB6] leading-snug">
                  Problem solving certifications &amp; logic benchmarks
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Technical Data Grid: Topic Mastery Matrix & Contest Rigor */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Algorithmic Topic Breakdown */}
          <div className="lg:col-span-7 border border-[#E5E3D8] dark:border-[#262825] bg-[#FAF9F5] dark:bg-[#151715] p-6 sm:p-8 space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-[#EAE8DE] dark:border-[#202220]">
              <div className="flex items-center space-x-2">
                <Layers className="w-4 h-4 text-[#284E3A] dark:text-[#4E8767]" />
                <span className="text-xs font-mono uppercase tracking-wider text-[#141413] dark:text-[#F2F1ED] font-semibold">
                  Data Structure &amp; Algorithmic Competency Matrix
                </span>
              </div>
              <span className="text-[10px] font-mono text-[#737168] dark:text-[#7E7C74]">
                JAVA-BASED
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {TOPIC_SPECS.map((spec, i) => (
                <div
                  key={spec.topic}
                  className="p-3.5 bg-[#F5F3EC] dark:bg-[#1B1D1B] border border-[#E8E6DB] dark:border-[#252825] space-y-1 font-mono"
                >
                  <div className="flex items-center justify-between text-xs font-medium text-[#141413] dark:text-[#F2F1ED]">
                    <span>{spec.topic}</span>
                    <span className="text-[10px] px-1.5 py-0.5 bg-[#EAF2EC] dark:bg-[#1D2B21] text-[#284E3A] dark:text-[#4E8767] border border-[#C6DCCD] dark:border-[#2B4E38]">
                      {spec.mastery}
                    </span>
                  </div>
                  <div className="text-[11px] text-[#737168] dark:text-[#7E7C74]">
                    {spec.complexity}
                  </div>
                </div>
              ))}
            </div>

            {/* Additional Contest & Contest Experience Notes */}
            <div className="pt-4 border-t border-[#EAE8DE] dark:border-[#202220] space-y-2 text-xs font-mono text-[#403F3A] dark:text-[#BFBEB6]">
              <div className="flex items-start space-x-2">
                <span className="w-1.5 h-1.5 bg-[#284E3A] dark:bg-[#4E8767] mt-1 shrink-0"></span>
                <span>Regular participant in weekly LeetCode and CodeChef competitive challenges.</span>
              </div>
              <div className="flex items-start space-x-2">
                <span className="w-1.5 h-1.5 bg-[#284E3A] dark:bg-[#4E8767] mt-1 shrink-0"></span>
                <span>Strong understanding of optimal asymptotic boundaries, pointer manipulation, and recursive memoization.</span>
              </div>
            </div>
          </div>

          {/* Right Column: Code Snippet / Technical Specimen */}
          <div className="lg:col-span-5 border border-[#E5E3D8] dark:border-[#262825] bg-[#141413] text-[#FAF9F5] p-6 space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-[#2A2C29]">
              <div className="flex items-center space-x-2">
                <Cpu className="w-4 h-4 text-[#4E8767]" />
                <span className="text-xs font-mono text-[#FAF9F5]">
                  SolutionSpecimen.java
                </span>
              </div>
              <div className="flex space-x-2 text-[10px] font-mono">
                <button
                  onClick={() => setSelectedSnippet('sliding_window')}
                  className={`px-2 py-0.5 border ${
                    selectedSnippet === 'sliding_window'
                      ? 'border-[#4E8767] text-[#4E8767]'
                      : 'border-[#2A2C29] text-[#737168]'
                  }`}
                >
                  SlidingWindow
                </button>
                <button
                  onClick={() => setSelectedSnippet('tree_traversal')}
                  className={`px-2 py-0.5 border ${
                    selectedSnippet === 'tree_traversal'
                      ? 'border-[#4E8767] text-[#4E8767]'
                      : 'border-[#2A2C29] text-[#737168]'
                  }`}
                >
                  TreeDFS
                </button>
              </div>
            </div>

            {/* Code Body */}
            <pre className="text-xs font-mono text-[#D4D2C9] overflow-x-auto leading-relaxed py-2">
              {selectedSnippet === 'sliding_window' ? (
`// Two Pointers / Sliding Window in Java
// Time Complexity: O(N) | Space Complexity: O(1)
public int maxSubArrayLen(int[] nums, int k) {
    int left = 0, currentSum = 0, maxLen = 0;
    for (int right = 0; right < nums.length; right++) {
        currentSum += nums[right];
        while (currentSum > k && left <= right) {
            currentSum -= nums[left++];
        }
        maxLen = Math.max(maxLen, right - left + 1);
    }
    return maxLen;
}`
              ) : (
`// Level-Order / BFS Tree Traversal in Java
// Time Complexity: O(N) | Space Complexity: O(W)
public List<List<Integer>> levelOrder(TreeNode root) {
    List<List<Integer>> res = new ArrayList<>();
    if (root == null) return res;
    Queue<TreeNode> queue = new LinkedList<>();
    queue.offer(root);
    while (!queue.isEmpty()) {
        int levelSize = queue.size();
        List<Integer> currentLevel = new ArrayList<>();
        for (int i = 0; i < levelSize; i++) {
            TreeNode node = queue.poll();
            currentLevel.add(node.val);
            if (node.left != null) queue.offer(node.left);
            if (node.right != null) queue.offer(node.right);
        }
        res.add(currentLevel);
    }
    return res;
}`
              )}
            </pre>

            <div className="pt-3 border-t border-[#2A2C29] text-[11px] font-mono text-[#8C8A82] flex justify-between">
              <span>Standard: Clean Java 17+</span>
              <span className="text-[#4E8767]">Zero Memory Leaks</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
