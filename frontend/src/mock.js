// Mock data for Manan Malik's Portfolio

export const personalInfo = {
  name: "MANAN MALIK",
  title: "Site Reliability Engineer (SRE) Intern | Backend Developer",
  tagline:
    "SRE Intern focused on production reliability, monitoring & alerting optimization | Backend Developer specializing in real-time scalable systems | Email: mananm359@gmail.com",
  phone: "+91 8755014646",
  location: "India",
  bio: "Site Reliability Engineer Intern experienced in improving monitoring systems, reducing alert noise, and optimizing MTTD for critical incidents. Skilled in Datadog, Prometheus, and production alert strategy design. Strong backend foundation in Node.js, Express.js, MongoDB, and PostgreSQL with experience building scalable APIs and AI-integrated systems. Passionate about reliability engineering, automation, and building resilient, high-performance production systems.",
};
export const socialLinks = [
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/manan-malik-a822641a7/",
    icon: "linkedin",
  },
  {
    name: "GitHub",
    url: "https://github.com/Mananm2004",
    icon: "github",
  },
  {
    name: "Portfolio",
    url: "https://my-portfolio-hazel-two-32.vercel.app",
    icon: "globe",
  },
];

export const skills = {
  backend: [
    "Node.js",
    "Express.js",
    "MongoDB",
    "Mongoose",
    "RESTful APIs",
    "JWT Authentication",
    "RBAC",
  ],
  frontend: [
    "React.js",
    "Next.js",
    "JavaScript (ES6+)",
    "TypeScript",
    "HTML5",
    "CSS3",
  ],
  styling: ["Tailwind CSS", "Material-UI", "Framer Motion"],
  sre: [
    "Site Reliability Engineering (SRE)",
    "Datadog",
    "Prometheus",
    "Monitoring & Alerting Strategy",
    "Incident Management (P1/P2 Handling)",
    "MTTD Optimization",
    "Alert Noise Reduction",
    "SLO / SLA / SLI Fundamentals",
    "On-call Operations",
    "Production Reliability Engineering",
    "Root Cause Analysis (RCA)",
  ],
  tools: [
    "Git",
    "GitHub",
    "Postman",
    "Docker",
    "Vercel",
    "Netlify",
    "Stripe",
    "Cloudinary",
    "OpenAI API",
    "VS Code",
  ],
  ai: ["ChatGPT API", "Gemini API", "Claude", "AI Code Assistants"],
};

export const experience = [
  {
    id: 1,
    company: "Yum! India Global Services Private Limited",
    position: "Site Reliability Intern",
    duration: "Jan 2026 – Present",
    description: [
      "Reduced alert noise by 40–60% by identifying and eliminating high false-positive monitors, significantly improving on-call signal-to-noise ratio.",
      "Improved MTTD by 25–35% for P1/P2 incidents through alert threshold tuning, evaluation window optimization, and removal of non-actionable alerts.",
      "Enhanced on-call reliability and trust in monitoring systems by designing a high-signal, low-noise alerting strategy aligned with SRE and production reliability best practices.",
      "Designed and implemented a brand and market taxonomy to streamline onboarding of new markets, introducing tier-based classification for consistent monitoring, alerting, and reliability standards.",
    ],
    technologies: [
      "Site Reliability Engineering (SRE)",
      "Monitoring & Alerting",
      "Incident Management",
      "MTTD Optimization",
      "Production Reliability",
      "On-call Operations",
      "Datadog",
      "Prometheus",
    ],
  },
  ,
  {
    id: 2,
    company: "Thapar Venture Lab",
    position: "Backend Web Developer Intern",
    duration: "Dec 2024 – Jul 2025",
    description: [
      "Developing and optimizing backend architecture for startups under Thapar Venture Lab initiative.",
      "Implementing secure authentication, efficient data management, and workflow automation using Node.js, Express.js, and MongoDB.",
    ],
    technologies: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "Workflow Automation",
      "Authentication",
    ],
  },
  {
    id: 3,
    company: "Acmez Internship Program",
    position: "Backend Developer Intern",
    duration: "Jun 2025  Jul 2025",
    description: [
      "Secured endpoints using JWT authentication and RBAC, developed a QR-based check-in system, and achieved 90% API test coverage using Jest.",
      "Built a scalable Node.js backend with 40+ RESTful APIs and 7+ MongoDB models, implementing aggregation pipelines for analytics.",
      "Integrated AI (OpenAI), payments (Stripe), and media handling (Cloudinary) into backend architecture.",
    ],
    technologies: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
      "RBAC",
      "OpenAI",
      "Stripe",
      "Cloudinary",
      "Jest",
    ],
  },
];

export const projects = [
  {
    id: 1,
    title: "Code-o-clock",
    description:
      "Real-time collaborative coding platform with AI assistance and secure multi-language code execution.",
    longDescription:
      "Built a full-stack coding platform using Node.js and PostgreSQL with Prisma ORM for scalable data management. Implemented 3+ real-time collaboration features powered by Liveblocks. Integrated Judge0 API for secure, sandboxed code execution across 10+ programming languages. Added an AI assistant using Novita.ai (Llama3-70b) to provide debugging help, solution approaches, and code optimization suggestions. Designed a polished, world-class UI using React with GSAP and Framer Motion, implementing 20+ complex animations for enhanced user experience.",
    image:
      "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=600&h=400&fit=crop&crop=entropy&auto=format",
    technologies: [
      "React",
      "Node.js",
      "PostgreSQL",
      "Prisma",
      "Liveblocks",
      "Judge0 API",
      "Firebase",
      "Novita.ai",
      "GSAP",
      "Framer Motion",
    ],
    liveUrl: "https://code-o-clock.vercel.app/",
    githubUrl: "https://github.com/Mananm2004/code-o-clock",
    featured: true,
  },
  {
    id: 2,
    title: "CampusRide",
    description:
      "Campus-specific ride-sharing app connecting e-rickshaws with students in real-time.",
    longDescription:
      "Designed and developed CampusRide using Node.js, React.js, and Socket.IO for live tracking. Integrated Google Maps API for geolocation and route optimization. Built an efficient backend with real-time booking and authentication features tailored for Thapar students.",
    image:
      "https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?w=600&h=400&fit=crop&crop=entropy&auto=format",
    technologies: [
      "Node.js",
      "Express.js",
      "React.js",
      "Socket.IO",
      "MongoDB",
      "Google Maps API",
    ],
    liveUrl: "#",
    githubUrl: "https://github.com/Mananm2004/CampusRide",
    featured: true,
  },
  {
    id: 3,
    title: "DevTinder",
    description:
      "A developer matchmaking app to connect coders for collaboration and projects.",
    longDescription:
      "Developed DevTinder using the MERN stack. Implemented authentication, profile matching, and real-time chat using Socket.IO. Designed for developers to network, find collaborators, and team up for projects.",
    image:
      "https://images.unsplash.com/photo-1522199710521-72d69614c702?w=600&h=400&fit=crop&crop=entropy&auto=format",
    technologies: [
      "Node.js",
      "React.js",
      "Express.js",
      "MongoDB",
      "Socket.IO",
      "Tailwind CSS",
    ],
    liveUrl: "#",
    githubUrl: "https://github.com/Mananm2004/devTinder-web",
    featured: true,
  },
  {
    id: 4,
    title: "Thapar Virtual Labs",
    description:
      "A virtual lab platform to simulate real lab environments for students.",
    longDescription:
      "Built a full-stack platform enabling students to perform experiments virtually. Integrated APIs for tools like MATLAB, Tinkercad, and Arduino. Added student dashboards, attendance, and AI-powered code assistance for lab submissions.",
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&h=400&fit=crop&crop=entropy&auto=format",
    technologies: [
      "Node.js",
      "React.js",
      "MongoDB",
      "Express.js",
      "AI Integration",
      "Google OAuth",
    ],
    liveUrl: "#",
    githubUrl: "#",
    featured: true,
  },
];

export const education = [
  {
    id: 1,
    institution: "Thapar Institute of Engineering & Technology, Patiala",
    degree: "Bachelor of Engineering in Computer Engineering",
    duration: "Oct 2022 – Aug 2026",
    description:
      "Focused on backend systems, AI integrations, and modern full-stack development.",
  },
];

export const testimonials = [
  {
    id: 1,
    name: "Prof. A.K. Sharma",
    position: "Faculty Mentor, Thapar Venture Lab",
    content:
      "Manan has consistently demonstrated strong backend development skills and the ability to architect efficient, scalable systems. His problem-solving mindset and technical curiosity make him stand out.",
    avatar:
      "https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=100&h=100&fit=crop&crop=face&auto=format",
  },
  {
    id: 2,
    name: "Rohit Mehta",
    position: "CTO, Acmez Internship Program",
    content:
      "Manan played a crucial role in building secure and scalable backend systems during his internship. His integration of AI and automation features added great value to our platform.",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face&auto=format",
  },
  {
    id: 3,
    name: "Ananya Gupta",
    position: "Frontend Developer at Thapar Labs",
    content:
      "Collaborating with Manan was seamless — his backend APIs were well-documented and reliable. He’s detail-oriented and always ensures smooth integration between frontend and backend.",
    avatar:
      "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?w=100&h=100&fit=crop&crop=face&auto=format",
  },
];
