
import {
  Mail,
  ExternalLink,
  Code2,
  BrainCircuit,
  MonitorSmartphone,
  Database,
  Terminal,
  Layers3,
  GraduationCap,
  BriefcaseBusiness,
  Trophy,
  Award,
  GitBranch,
} from "lucide-react";

// Add only real deployed URLs.
// Keep empty until the project is publicly available.
export const projectLinks = {
  postureAI: "",
  ggpPortal: "",
};

export const links = [
  {
    label: "GitHub",
    detail: "Code & repositories",
    href: "https://github.com/Beastaleast",
    icon: Code2,
  },
  {
    label: "LinkedIn",
    detail: "Professional profile",
    href: "https://www.linkedin.com/in/udit-kushwaha250/",
    icon: ExternalLink,
  },
  {
    label: "Email",
    detail: "Let's talk about work",
    href: "mailto:uditkushwaha250@gmail.com",
    icon: Mail,
  },
];

export const skillGroups = [
  {
    title: "Languages",
    icon: Code2,
    skills: ["Java", "JavaScript"],
  },
  {
    title: "Frontend",
    icon: MonitorSmartphone,
    skills: [
      "React.js",
      "HTML5",
      "CSS3",
      "Responsive Web Design",
    ],
  },
  {
    title: "Backend & Data",
    icon: Database,
    skills: [
      "Spring Boot",
      "REST APIs",
      "MySQL",
      "WebSocket",
    ],
  },
  {
    title: "Core CS & Tools",
    icon: Terminal,
    skills: [
      "Data Structures & Algorithms",
      "Object-Oriented Programming",
      "DBMS",
      "Operating Systems",
      "Computer Networks",
      "Git",
      "GitHub",
      "Postman",
    ],
  },
  {
    title: "AI / Computer Vision",
    icon: BrainCircuit,
    skills: [
      "Python",
      "MediaPipe",
      "Computer Vision",
      "AI-based Projects",
    ],
  },
];

export const projects = [
  {
    id: "postureAI",
    number: "01",
    type: "AI · FULL-STACK",
    title: "PostureAI",
    subtitle: "AI-Based Real-Time Posture Detection System",
    description:
      "A webcam-powered posture monitoring experience that detects incorrect sitting posture in real time and provides immediate feedback. The interface includes live posture status, alerts, dashboard visualisation and posture history.",
    problem:
      "Maintaining good sitting posture while working at a desk can be difficult to notice consistently.",
    approach: [
      "Capture webcam input for continuous posture analysis.",
      "Use computer-vision processing with MediaPipe as described in the project stack.",
      "Present live posture status and feedback in a responsive React.js interface.",
      "Connect frontend and backend services through REST APIs and WebSocket communication.",
      "Keep posture records and monitoring history available to the application.",
    ],
    contribution:
      "Built the responsive React.js/Vite interface and integrated the frontend with backend APIs and real-time posture updates as described in the project summary.",
    stack: [
      "React.js",
      "Vite",
      "Java",
      "Spring Boot",
      "Python",
      "MySQL",
      "MediaPipe",
      "WebSocket",
      "REST APIs",
    ],
    icon: BrainCircuit,
    tone: "blue",
    href: projectLinks.postureAI,
    repository: "",
    preview: "Live preview not connected yet",
    architecture: [
      "Webcam input",
      "Computer vision / MediaPipe",
      "React.js interface",
      "REST API + WebSocket",
      "Spring Boot + MySQL",
    ],
  },
  {
    id: "ggpPortal",
    number: "02",
    type: "WEB APP · ADMIN",
    title: "GGP Admin Portal",
    subtitle: "GOOD Gut Project",
    description:
      "A responsive admin portal for managing applicant records and administrative workflows, designed to remain usable on desktop and mobile screens.",
    problem:
      "Administrative workflows need a clear interface that helps users work with applicant records without unnecessary complexity.",
    approach: [
      "Create responsive UI components for mobile and desktop.",
      "Organise applicant-management screens and administrative workflows.",
      "Integrate REST APIs for frontend/backend data communication.",
      "Use Git and GitHub for version control.",
    ],
    contribution:
      "Developed the responsive web interface and integrated REST API communication for the admin portal.",
    stack: [
      "JavaScript",
      "HTML5",
      "CSS3",
      "REST APIs",
      "Git",
      "GitHub",
    ],
    icon: Layers3,
    tone: "orange",
    href: projectLinks.ggpPortal,
    repository: "",
    preview: "Live preview not connected yet",
    architecture: [
      "Admin user",
      "Responsive web UI",
      "REST API",
      "Applicant records",
    ],
  },
  
  {
    id: "ethixwebIndia",
    number: "03",
    type: "FULL-STACK · WEB APP",
    title: "ETHIX-WEB INDIA",
    subtitle: "India-Focused Digital Experience",
    description:
      "A responsive, full-stack website redesign with dedicated Home, Services, About, and Contact pages. It connects customer enquiries to a backend and database, with a protected admin dashboard for managing leads.",
    problem:
      "Businesses need a professional online presence and a reliable way to collect and manage customer enquiries.",
    approach: [
      "Built responsive pages using React, Vite, React Router, and CSS.",
      "Connected the contact form to an Express REST API with request validation.",
      "Integrated Supabase and PostgreSQL for persistent enquiry records.",
      "Implemented protected admin workflows for viewing, filtering, updating, and deleting leads.",
    ],
    contribution:
      "Developed the responsive website experience and integrated enquiry submission and administration workflows with backend APIs and database services.",
    stack: [
      "React.js",
      "Vite",
      "React Router",
      "HTML5",
      "CSS3",
      "Node.js",
      "Express.js",
      "REST APIs",
      "Supabase",
      "PostgreSQL",
    ],
    icon: Layers3,
    tone: "orange",
    href: projectLinks.ethixwebIndia,
    repository:
      "https://github.com/Beastaleast/Ethixweb-Indi",
    href: "https://ethixweb-indi.vercel.app/",
    architecture: [
      "Website visitor",
      "React + Vite frontend",
      "Express REST API",
      "Supabase Auth + PostgreSQL",
      "Protected admin dashboard",
    ],
  },

];

export const experience = [
  {
    period: "15 JUL 2026 — 15 AUG 2026",
    role: "Web Development Intern",
    organisation: "SYNTECHXHUB",
    type: "Internship",
    icon: BriefcaseBusiness,
    points: [
      "Completed a one-month Web Development Internship Program.",
      "Gained practical exposure to web development concepts and development workflows.",
      "Strengthened hands-on understanding of software development practices, problem solving, and project-oriented development.",
    ],
  },
  {
    period: "2023 — PRESENT",
    role: "B.Tech · Computer Science Engineering",
    organisation: "ABES Institute of Technology",
    type: "Education",
    icon: GraduationCap,
    points: [
      "CGPA: 7.56 / 10",
      "Coursework includes core computer science concepts.",
    ],
  },
];

export const achievements = [
  {
    title: "Smart India Hackathon 2025",
    detail:
      "Participated in Smart India Hackathon 2025 and other hackathons.",
    icon: Trophy,
  },
  {
    title: "Ideathon 2024",
    detail: "Participated in a college-level Ideathon.",
    icon: Award,
  },
  {
    title: "DBMS — Part 1",
    detail: "Infosys certification.",
    icon: Award,
  },
  {
    title: "DBMS — Part 2",
    detail: "Infosys certification.",
    icon: Award,
  },
  {
    title: "Data Structures",
    detail: "CodeChef certification.",
    icon: GitBranch,
  },
];

export const githubUsername = "Beastaleast";
