export interface Project {
  id: string;
  number: string;
  title: string;
  tagline: string;
  category: string;
  year: string;
  description: string;
  extendedDescription?: string;
  technologies: string[];
  metrics?: { label: string; value: string }[];
  features?: string[];
  links: {
    github?: string;
    live?: string;
  };
  architecturalNote?: string;
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  location?: string;
  type: string;
  highlights: string[];
}

export interface SkillCategory {
  title: string;
  index: string;
  description: string;
  skills: { name: string; highlight?: boolean; note?: string }[];
}

export interface Achievement {
  title: string;
  organization: string;
  period: string;
  type: 'funding' | 'leadership' | 'certification';
  summary: string;
  details?: string[];
  badge?: string;
}

export const PERSONAL_DETAILS = {
  name: "Arif Afzal",
  roleLabel: "SOFTWARE DEVELOPER · TECHNICAL EDUCATOR · FOUNDER",
  headline: {
    line1: "Building things.",
    line2: "Solving problems.",
    line3: "Sharing knowledge.",
  },
  tagline:
    "I'm Arif Afzal, a software developer and computer science educator passionate about building useful digital products, solving complex problems, and helping others understand technology.",
  location: "West Champaran, Bihar, India",
  coordinates: "26°48' N, 84°30' E",
  email: "arifafzal51@gmail.com",
  phone: "+91 7549286256",
  github: "https://github.com/Arifafzal51",
  linkedin: "https://linkedin.com/in/hyarif/",
  education: {
    degree: "B.Tech in Computer Science and Engineering",
    institution: "GLA University, Mathura",
    graduation: "June 2024",
    location: "Mathura, Uttar Pradesh",
  },
  status: "Available for engineering roles & technical leadership",
  problemSolvingSummary: {
    total: "400+",
    platforms: [
      { name: "LeetCode", count: "175+", url: "https://leetcode.com" },
      { name: "GeeksforGeeks", count: "80+", url: "https://www.geeksforgeeks.org" },
      { name: "HackerRank", count: "120+", url: "https://www.hackerrank.com" },
    ],
    topics: [
      "Arrays & Hashing",
      "Strings",
      "Linked Lists",
      "Stacks & Queues",
      "Binary Trees & BST",
      "Graph Algorithms",
      "Dynamic Programming",
      "Two Pointers & Sliding Window",
    ],
  },
};

export const PROJECTS: Project[] = [
  {
    id: "bubblechat",
    number: "01",
    title: "BubbleChat",
    tagline: "Real-Time Messaging & WebSocket Architecture",
    category: "Full Stack & Cloud Systems",
    year: "2024",
    description:
      "A distributed real-time chat platform engineered for low-latency bidirectional messaging across public channels and encrypted direct dialogues.",
    extendedDescription:
      "Architected a serverless event-driven backend leveraging AWS Lambda and WebSocket API gateway. Eliminated persistent idle server overhead while sustaining 50+ concurrent active sessions with sub-50ms message propagation.",
    technologies: ["ReactJS", "NodeJS", "WebSocket API", "AWS Serverless", "Tailwind CSS"],
    metrics: [
      { label: "Concurrency", value: "50+ Users" },
      { label: "Architecture", value: "Event-driven Serverless" },
      { label: "Latency", value: "< 50ms Delivery" },
    ],
    features: [
      "Bidirectional WebSocket persistent transport channels",
      "Public community channels & instant private 1-on-1 rooms",
      "Serverless dispatch via AWS Lambda event routing",
      "Responsive, keyboard-first chat layout with instant status indicators",
    ],
    links: {
      github: "https://github.com/Arifafzal51/Chat-Bubble",
      live: "https://chat-bubble-kohl.vercel.app/",
    },
    architecturalNote: "AWS Lambda WebSocket route dispatching messages directly to connected client pools.",
  },
  {
    id: "deal-detective",
    number: "02",
    title: "Deal Detective",
    tagline: "Price Intelligence & Algorithmic Scraping Platform",
    category: "Data Systems & Automation",
    year: "2024",
    description:
      "An automated price intelligence suite tracking multi-retailer inventory across Amazon and Flipkart with trend extraction, historical analysis, and threshold alerts.",
    extendedDescription:
      "Designed resilient extraction pipelines with automated cron scheduling that parse dynamic e-commerce payloads, calculate moving price averages, detect flash drops, and trigger real-time SMTP notifications to users.",
    technologies: ["Next.js", "Tailwind CSS", "Node.js", "Express", "MongoDB"],
    metrics: [
      { label: "Update Cycle", value: "Automated Hourly" },
      { label: "Analytics", value: "Min / Max / Mean Curves" },
      { label: "Alerts", value: "Real-time Email Dispatch" },
    ],
    features: [
      "Automated hourly scheduled crawlers for Amazon & Flipkart",
      "Historical price fluctuations database with visual trend graphs",
      "Statistical analysis: minimum, maximum, and average historical pricing",
      "Automated email notifications when prices drop below user thresholds",
    ],
    links: {
      github: "https://github.com/Arifafzal51/DealDetective",
    },
    architecturalNote: "Cron-driven background worker pipeline syncing MongoDB time-series snapshots.",
  },
  {
    id: "skysight",
    number: "03",
    title: "SkySight",
    tagline: "Atmospheric Telemetry & Global Weather Visualizer",
    category: "Client-Side Engineering",
    year: "2023",
    description:
      "A fast, lightweight global weather client delivering real-time atmospheric telemetry, geo-coordinate resolution, and meteorological data via the OpenWeather API.",
    extendedDescription:
      "Engineered with clean native DOM scripting and semantic styling to provide an instantaneous, zero-bloat forecast experience across desktop and mobile form factors.",
    technologies: ["HTML5", "CSS3", "JavaScript (ES6+)", "OpenWeather API"],
    metrics: [
      { label: "Payload", value: "Zero Framework Overhead" },
      { label: "Data Source", value: "OpenWeather API" },
      { label: "Coverage", value: "Global Geo-coordinates" },
    ],
    features: [
      "Instant city and coordinate search with error handling",
      "Real-time temperature, humidity, wind vectors, and barometric metrics",
      "Clean visual indicators tailored to changing meteorological states",
      "Fully responsive zero-dependency lightweight execution",
    ],
    links: {
      github: "https://github.com/Arifafzal51/SkySight",
      live: "https://arifafzal51.github.io/SkySight/",
    },
    architecturalNote: "Vanilla async/await client with resilient caching and graceful failure handling.",
  },
];

export const EXPERIENCES: Experience[] = [
  {
    role: "Computer Science Instructor & Technical Trainer",
    company: "Champaran Group of Institutions",
    period: "January 2025 – January 2026",
    location: "West Champaran, Bihar",
    type: "Pedagogical & Technical Leadership",
    highlights: [
      "Delivered rigorous, structured lecture modules on Data Structures & Algorithms, Modern Web Technologies, and Cloud Computing architectures to 150+ Diploma and B.Tech students.",
      "Designed and evaluated 50+ practical coding assignments, problem-solving benchmarks, and algorithmic diagnostic sessions.",
      "Mentored student capstone engineering teams in building production-grade React and AWS serverless cloud applications.",
      "Directly coached and guided an exceptional student who clinched State Rank 2 across Bihar Polytechnic examinations.",
    ],
  },
  {
    role: "Frontend Developer",
    company: "Octanet",
    period: "June 2024 – December 2024",
    location: "Remote",
    type: "Software Engineering",
    highlights: [
      "Architected clean, accessible, and performant user interface components utilizing ReactJS and modern Tailwind CSS design tokens.",
      "Executed critical performance tuning, code splitting, and asset optimizations that yielded a measurable 20% improvement in core page speed metrics.",
      "Integrated complex RESTful API contracts seamlessly with client-side state managers and defensive error boundaries.",
      "Collaborated actively in sprint planning, pull request peer reviews, and Agile release cycles.",
    ],
  },
  {
    role: "Frontend Developer Intern",
    company: "Bharat Intern",
    period: "June 2023 – July 2023",
    location: "Remote",
    type: "Internship",
    highlights: [
      "Built client-facing web application modules applying ReactJS, semantic HTML5, modern CSS3, and JavaScript.",
      "Standardized UI component modularity, enhancing overall codebase maintainability and reusability across internal modules.",
      "Participated in daily standups and delivered assigned functional deliverables ahead of schedule.",
    ],
  },
];

export const SKILL_GROUPS: SkillCategory[] = [
  {
    title: "Programming Languages",
    index: "01",
    description: "Core languages used for systems, competitive programming, and application logic.",
    skills: [
      { name: "Java", highlight: true, note: "Primary language for DSA & competitive problem solving" },
      { name: "JavaScript (ES6+)", highlight: true, note: "Deep async patterns, DOM & fullstack web" },
      { name: "PHP", highlight: false, note: "Backend scripting and server integration" },
      { name: "TypeScript", highlight: true, note: "Strict typing and scalable frontend codebases" },
    ],
  },
  {
    title: "Frontend Engineering",
    index: "02",
    description: "Modern component-driven web technologies and responsive design systems.",
    skills: [
      { name: "ReactJS", highlight: true, note: "Hooks, state management, component lifecycles" },
      { name: "Next.js", highlight: true, note: "App Router, SSR, SSG, server components" },
      { name: "Tailwind CSS", highlight: true, note: "Custom design systems and responsive tokens" },
      { name: "HTML5 & Semantic Web", highlight: false, note: "Accessibility, microdata, clean markup" },
      { name: "CSS3 / Modern Layouts", highlight: false, note: "Flexbox, CSS Grid, custom properties" },
      { name: "Bootstrap", highlight: false, note: "Rapid prototyping and responsive grids" },
    ],
  },
  {
    title: "Backend & Cloud Architecture",
    index: "03",
    description: "Serverless systems, cloud deployments, and resilient database stores.",
    skills: [
      { name: "Node.js", highlight: true, note: "Event-driven runtime and RESTful APIs" },
      { name: "AWS Lambda & Serverless", highlight: true, note: "Event-driven microservices" },
      { name: "MongoDB", highlight: true, note: "NoSQL schema modeling and indexing" },
      { name: "MySQL", highlight: false, note: "Relational database design and query planning" },
      { name: "Google Cloud Platform", highlight: true, note: "Cloud foundations and pathway facilitator" },
      { name: "WebSocket API", highlight: true, note: "Low-latency bidirectional streaming" },
    ],
  },
  {
    title: "Core Computer Science",
    index: "04",
    description: "Theoretical underpinnings essential for building robust software.",
    skills: [
      { name: "Data Structures & Algorithms", highlight: true, note: "400+ problems solved across platforms" },
      { name: "Object-Oriented Programming (OOP)", highlight: true, note: "Design patterns & SOLID principles" },
      { name: "Database Management Systems (DBMS)", highlight: false, note: "ACID, normalization, indexing" },
      { name: "Operating Systems", highlight: false, note: "Concurrency, memory management, threads" },
      { name: "Computer Networks", highlight: false, note: "TCP/IP, HTTP/S, DNS, routing protocols" },
    ],
  },
  {
    title: "Developer Tooling & Workflows",
    index: "05",
    description: "Tools and command-line environments powering daily engineering.",
    skills: [
      { name: "Git & GitHub", highlight: true, note: "Branching workflows, code reviews, PRs" },
      { name: "Linux & Bash", highlight: true, note: "CLI scripting, process management, shell tooling" },
      { name: "Vercel", highlight: false, note: "CI/CD and edge deployments" },
      { name: "VS Code", highlight: false, note: "Custom debugging workflows and tooling" },
      { name: "Figma", highlight: false, note: "Design-to-code translation and wireframing" },
    ],
  },
  {
    title: "AI-Assisted Engineering",
    index: "06",
    description: "Modern workflows amplifying developer velocity without sacrificing engineering rigor.",
    skills: [
      { name: "Advanced Prompting & Workflows", highlight: true, note: "Context construction and code generation" },
      { name: "Automated Debugging & Triage", highlight: true, note: "Root-cause diagnostics and edge cases" },
      { name: "Code Optimization & Refactoring", highlight: true, note: "Algorithmic complexity reduction" },
    ],
  },
];

export const ACHIEVEMENTS: Achievement[] = [
  {
    title: "₹10,00,000 Seed Funding — Startup Bihar",
    organization: "Government of Bihar (Department of Industries)",
    period: "March 2025",
    type: "funding",
    badge: "Startup Founder",
    summary:
      "Secured ₹10 Lakhs in non-dilutive government seed funding for Essence Royale, a luxury fragrance e-commerce venture, as its sole founder.",
    details: [
      "Formulated and defended the comprehensive business plan, unit economics model, and go-to-market strategy before the state evaluation committee.",
      "Oversaw end-to-end launch: supplier sourcing, brand positioning, digital storefront architecture, and operational logistics.",
      "Recognized by the state startup ecosystem as an exemplary grassroots entrepreneurial initiative.",
    ],
  },
  {
    title: "Cloud Lead — Google Developer Student Clubs",
    organization: "GDSC GLA University",
    period: "2022 – 2023",
    type: "leadership",
    badge: "Community Leader",
    summary:
      "Spearheaded cloud computing initiatives and technical training for student developers across GLA University campus.",
    details: [
      "Organized hands-on workshops on Google Cloud Platform, containerization, and cloud deployment pipelines.",
      "Fostered peer-to-peer developer learning culture and assisted students in earning cloud industry badges.",
    ],
  },
  {
    title: "Arcade Facilitator — Google Cloud Community India",
    organization: "Google Cloud Community India",
    period: "2023, 2024",
    type: "leadership",
    badge: "Cloud Facilitator",
    summary:
      "Selected as official facilitator for nationwide Google Cloud Arcade skill initiatives over consecutive editions.",
    details: [
      "Guided hundreds of aspiring cloud practitioners across India through skill badges, labs, and interactive challenges.",
      "Provided troubleshooting and technical mentoring on GCP infrastructure, security, and networking modules.",
    ],
  },
  {
    title: "Facilitator — Google Cloud Career Practitioner Pathway",
    organization: "Google Cloud India",
    period: "2022",
    type: "leadership",
    badge: "Program Facilitator",
    summary:
      "Empowered university students to complete the structured cloud practitioner curriculum and industry-standard training tracks.",
    details: [
      "Led weekly study jams, resolved architectural questions, and maintained cohort completion benchmarks.",
    ],
  },
  {
    title: "UI/UX Design Certification",
    organization: "Great Learning",
    period: "Verified Credential",
    type: "certification",
    summary:
      "Formal curriculum covering user-centered design, interaction principles, wireframing, and visual information hierarchy.",
  },
  {
    title: "Cybersecurity Essentials Certification",
    organization: "Cisco Networking Academy",
    period: "Verified Credential",
    type: "certification",
    summary:
      "Comprehensive certification spanning fundamental network security, threat vectors, cryptography principles, and defense mechanisms.",
  },
];
