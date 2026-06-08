export const data = {
  personal: {
    name: "Raghvendra Shah",
    initials: "RS",
    title: "Software Engineer & Full Stack Developer",
    heroDescription:
"Full Stack Developer focused on building scalable web applications, AI-powered systems, and immersive developer experiences.",
    bio: "I'm an IT undergraduate driven by a passion for engineering software that is both purposeful and enduring. I enjoy breaking down complex problems, designing thoughtful solutions, and transforming ideas into systems that are efficient, scalable, and user-focused. My approach to development is rooted in clean architecture, algorithmic precision, and continuous learning. Every challenge is an opportunity to sharpen my skills, explore new technologies, and deepen my understanding of how great systems are built. I believe that impactful software is forged through patience, attention to detail, and relentless refinement—qualities I strive to bring to every line of code I write.",
    pullQuote: "I don't just write code. I forge systems built to endure.",
    email: "raghvendrashah21@gmail.com",
    location: "Greater Noida, India",
    github: "https://github.com/raghav2556",
    linkedin: "https://www.linkedin.com/in/raghvendra-shah",
    leetcode: "https://leetcode.com/u/raghav2105/",
    photo: "/profile.jpg",
  },

  stats: [
    { value: "3+",   label: "Projects Built" },
    { value: "10+",  label: "Technologies" },
    { value: "200+", label: "Problems Solved" },
  ],

  education: [
    {
      institution: "GL Bajaj Institute of Technology and Management",
      degree: "B.Tech",
      field: "Information Technology",
      years: "2024 – 2028",
      grade: null,
    },
    {
      institution: "St. Johns Senior Secondary School",
      degree: "Intermediate (CBSE)",
      field: "Science (PCM)",
      years: "2022 – 2024",
      grade: "88.6%",
    },
    {
      institution: "St. Johns Senior Secondary School",
      degree: "High School (UP Board)",
      field: null,
      years: "2020 – 2022",
      grade: "90.8%",
    },
  ],

  projects: [
    {
      title: "CodeHunt",
      description:
        "A gamified C++ learning platform with XP progression, streak tracking, and mission-based stages. Players advance through structured C++ mastery challenges, solve algorithmic problems, and earn ranks — turning learning into a war worth winning.",
      tech: ["React", "Vite", "Tailwind CSS", "Framer Motion", "Node.js", "MongoDB"],
      liveUrl: null,
      githubUrl: "https://github.com/raghav2556/CodeHunt",
      thumbnail: "/codehunt.png",
      category: "Web",
    },
    {
      title: "MediConnect",
      description:
        "Full-stack healthcare platform with AI-powered symptom analysis, real-time video consultation via WebRTC, nearby donor and hospital discovery, and secure doctor-patient appointment booking with JWT auth and a clean RESTful API.",
      tech: ["React", "Node.js", "Express", "MongoDB", "WebRTC", "Socket.io", "JWT", "PeerJS"],
      liveUrl: null,
      githubUrl: "https://github.com/raghav2556/mediconnect",
      thumbnail: "/mediconnect.png",
      category: "Web",
    },
    {
      title: "Library Management System",
      description:
        "A database-driven C++ system for managing book inventories, user records, and borrowing transactions. Implements OOP principles for modular architecture with book search, issue/return workflows, and full transaction tracking.",
      tech: ["C++", "DSA", "OOP", "File I/O"],
      liveUrl: null,
      githubUrl: "https://github.com/raghav2556/LibraryManagementSystem",
      thumbnail: "/library-management.png",
      category: "Other",
    },
  ],

  skills: [
    {
      category: "Languages",
      items: [
        { name: "C++",    level: 88, icon: "cplusplus" },
         { name: "Python", level: 65, icon: "python" },
        { name: "C",      level: 72, icon: "c" },
        { name: "HTML5",  level: 82, icon: "html5" },
        { name: "CSS3",   level: 78, icon: "css3" },
        { name: "JavaScript", level: 75, icon: "javascript" },
      ],
    },
    {
      category: "Frameworks & Libraries",
      items: [
        { name: "React",          level: 78, icon: "react" },
        { name: "Node.js",        level: 72, icon: "nodejs" },
        { name: "Express.js",     level: 70, icon: "express" },
        { name: "Tailwind CSS",   level: 80, icon: "tailwindcss" },
        { name: "Framer Motion",  level: 65, icon: null },
      ],
    },
    {
      category: "Databases & Tools",
      items: [
        { name: "MongoDB",                    level: 68, icon: "mongodb" },
        { name: "Git & GitHub",               level: 80, icon: "github" },
        { name: "Data Structures & Algorithms", level: 85, icon: null },
      ],
    },
  ],

  achievements: [
    {
  title: "IIT Madras — BS Foundation Level",
  issuer: "Indian Institute of Technology Madras",
  date: "Sep 2025",
  description:
    "Successfully completed the Foundational Level of the B.S. in Programming and Data Science — an online degree program by IIT Madras's Centre for Outreach and Digital Education.",
  certUrl: "/certificates/iitm-foundation.pdf",
  icon: "book",
},
    {
      title: "200+ DSA Problems Solved",
      issuer: "LeetCode",
      date: "Ongoing",
      description:
        "Solved 200+ Data Structures and Algorithms problems across recursion, binary search, linked lists, stacks, trees, and dynamic programming — building algorithmic intuition one problem at a time.",
      certUrl: "https://leetcode.com/u/raghav2105/",
      icon: "zap",
    },
  ],

  activities: [
    {
      org: "GirlScript Summer of Code (GSSoC)",
      role: "Open Source Contributor",
      period: "2026 – Present",
      description:
        "Contributing to real-world open source projects under GSSoC 2026 — shipping features, fixing bugs, and collaborating with a global developer community to build software that matters.",
      logo: null,
    },
    {
      org: "Open Source Program (OS 2025)",
      role: "Open Source Contributor",
      period: "2025",
      description:
        "Participated as a contributor in OS 2025, working on collaborative software projects and sharpening version control, code review, and team coordination skills.",
      logo: null,
    },
    {
      org: "Shrinik Club",
      role: "Event Management Team",
      period: "2024 – Present",
      description:
        "Core member of the event management team — coordinating technical and cultural events, managing end-to-end logistics, and leading volunteer operations on campus.",
      logo: null,
    },
  ],

  contact: {
    tagline: "Let's build something ruthless.",
    emailjs: {
      serviceId:  import.meta.env.VITE_EMAILJS_SERVICE_ID,
      templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      publicKey:  import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
    },
  },
};
