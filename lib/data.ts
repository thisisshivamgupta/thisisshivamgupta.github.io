import {
  Home,
  Wrench,
  User,
  Zap,
  Github,
  Linkedin,
  Twitter,
  MessageCircle,
  Briefcase,
  GraduationCap,
  Trophy,
  Mail,
  Code,
  Layout,
  TrendingUp,
  X,
  Rss, 
} from "lucide-react";
import { LucideIcon } from "lucide-react";

// 1. Navigation Links (from LeftSidebar)
export const navLinks = [
  { href: "#work", label: "Work Showcase", icon: Home },
  { href: "/services", label: "Services", icon: Wrench },
  { href: "/about", label: "About Me", icon: User },
  { href: "/contact", label: "Contact", icon: Zap },
];


export const socialLinks = [
  
  { href: "https://www.linkedin.com/in/thisisshivamgupta/", label: "LinkedIn", icon: Linkedin },
  { href: "https://x.com/itisshivamgupta", label: "X (Twitter)", icon: X },
  { href: "https://discord.gg/zu6ENtJRGh", label: "Discord", icon: MessageCircle },
];

export const professionalProfiles = [
  { href: "https://github.com/thisisshivamgupta", label: "GitHub", icon: Github },
  { href: "https://leetcode.com/u/thisisshivamgupta/", label: "LeetCode", icon: Zap },
];

// 3. Page Content (from app/page.tsx)
export const homePageData = {
  headline: "Hello World! <br /> Welcome to Shivam's Almanac 👋",
  summary: "Software Engineer specializing in intuitive UI/UX and scalable, component-driven architectures.",
  mailID: "thisisshivamgupta@gmail.com"
};

// 4. Project Data (from app/page.tsx)
// --- PROJECT DATA (with 10 dummy entries) ---

export const projectsData = [
  {
    title: "Project Alpha: AI Dashboard",
    description: "A high-performance analytics dashboard for real-time data visualization, powered by AI-driven insights and predictive modeling.",
    imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800",
    link: "https://linktr.ee/admin",
    tags: ["React", "TypeScript", "Tailwind CSS", "AI"],
  },
  {
    title: "Project Beta: E-commerce Platform",
    description: "Full-stack e-commerce solution with integrated Stripe payments, user authentication, and a custom CMS for product management.",
    imageUrl: "https://images.unsplash.com/photo-1522199755839-a2bacb67c546?q=80&w=800",
    link: "#",
    tags: ["Next.js", "Stripe", "Prisma", "PostgreSQL"],
  },
  {
    title: "Project Gamma: Mobile Finance App",
    description: "Cross-platform mobile application for personal finance tracking, budgeting, and investment monitoring using React Native.",
    imageUrl: "https://images.unsplash.com/photo-1639322537228-f710d846310a?q=80&w=800",
    link: "#",
    tags: ["React Native", "Firebase", "Figma"],
  },
  {
    title: "Project Delta: SaaS Boilerplate",
    description: "A complete starter kit for building subscription-based services, including authentication, billing, and team management features.",
    imageUrl: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800",
    link: "#",
    tags: ["Next.js", "Auth.js", "Lemon Squeezy", "MongoDB"],
  },
  {
    title: "Project Epsilon: Real-time Chat App",
    description: "A WebSocket-based chat application allowing for instant messaging, group chats, and real-time user presence indicators.",
    imageUrl: "https://images.unsplash.com/photo-1587691592099-24045742c589?q=80&w=800",
    link: "#",
    tags: ["Node.js", "Socket.io", "Redis", "React"],
  },
  {
    title: "Project Zeta: IoT Data Platform",
    description: "Scalable platform for ingesting and visualizing data from IoT devices, built on a time-series database for high performance.",
    imageUrl: "https://images.unsplash.com/photo-1530435460869-d13625c69bbf?q=80&w=800",
    link: "#",
    tags: ["Go", "InfluxDB", "Grafana", "MQTT"],
  },
  {
    title: "Project Eta: Travel Planner AI",
    description: "An AI-powered travel itinerary generator that creates custom travel plans based on user preferences, budget, and time constraints.",
    imageUrl: "https://images.unsplash.com/photo-1503220317375-aaad61436b1b?q=80&w=800",
    link: "#",
    tags: ["Python", "OpenAI API", "Flask", "Svelte"],
  },
  {
    title: "Project Theta: Music Discovery App",
    description: "Uses the Spotify API to analyze a user's listening habits and recommend new artists and tracks through a minimalist, clean interface.",
    imageUrl: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=800",
    link: "#",
    tags: ["Spotify API", "Vue.js", "Node.js"],
  },
  {
    title: "Project Iota: Fitness Tracker",
    description: "A PWA (Progressive Web App) for logging workouts and tracking fitness progress, complete with charts and offline support.",
    imageUrl: "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=800",
    link: "#",
    tags: ["PWA", "IndexedDB", "Chart.js", "React"],
  },
  {
    title: "Project Kappa: Open Source Component Library",
    description: "A set of accessible, themeable, and tree-shakeable UI components published as an NPM package for public use.",
    imageUrl: "https://images.unsplash.com/photo-1617042375876-a9e918c067a6?q=80&w=800",
    link: "#",
    tags: ["TypeScript", "Storybook", "NPM", "CSS-in-JS"],
  },
];

// 5. About Page Data (from app/about/page.tsx)
export const aboutPageData = {
  bio: [
    "I'm **Shivam Gupta**, a dedicated Software Engineer with a passion for building user-centric, high-performance web applications. Over the last 2 years, I've had the privilege of working with tech companies ranging from fast-paced startups to Fortune 500 enterprises.",
    "My core strength lies in translating complex business requirements into elegant, maintainable code, specializing in **React, TypeScript, and modern state management**. I thrive in environments where collaboration and continuous learning are prioritized."
  ],
  quickFacts: [
    { icon: Briefcase, label: "Experience", value: "2+ Years" },
    { icon: GraduationCap, label: "Education", value: "B.Tech Comp. Sci." },
    { icon: Trophy, label: "Focus", value: "Scalable Web Apps" },
    { icon: Mail, label: "Status", value: "Open to new projects" },
  ],
  achievements: [
    {
      icon: Trophy,
      title: "Industry Award: Best UX Innovation (2023)",
      details: "Received recognition for a proprietary accessibility feature implemented at [Former Company Name].",
    },
    {
      icon: GraduationCap,
      title: "B.Tech in Computer Science",
      details: "[University Name], focusing on Operating Systems and DBMS.",
    },
    {
      icon: Briefcase,
      title: "Certified AWS Developer",
      details: "Completed professional certification for developing and deploying cloud solutions.",
    },
  ]
};

// 6. Services Data (from app/services/page.tsx)
export const servicesData = [
  {
    icon: Layout,
    title: "Custom Web Application Development",
    description: "Full-cycle development of modern, complex web applications using React/Next.js and TypeScript.",
    deliverables: ["MVP Creation", "Scalable Architectures", "Component Library Setup"],
  },
  {
    icon: Code,
    title: "UI/UX Engineering & Design Systems",
    description: "Bridging the gap between design and development. I build robust, accessible design systems.",
    deliverables: ["Component Refactoring", "A11y Audits", "Style Guide Documentation"],
  },
  {
    icon: TrendingUp,
    title: "Performance & Optimization Consulting",
    description: "Audit existing applications to identify and resolve bottlenecks for faster user experience.",
    deliverables: ["Core Web Vitals Optimization", "Code Splitting", "SEO Improvements"],
  },
  {
    icon: Zap,
    title: "Backend Integration & API Design",
    description: "Integrating front-end applications with REST or GraphQL services and designing serverless solutions.",
    deliverables: ["API Mocking", "State Management Integration", "Authentication Setup"],
  },
];