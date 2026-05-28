export const personalInfo = {
  name: "Edward Kayiira",
  brandName: "edkay.dev",
  role: "Software Engineer & Frontend Developer",
  avatar: "/edward.png",
  email: "edwardbrin1@gmail.com",
  phone: "+256 791 598 412",
  birthday: "March 4, 2004",
  location: "Uganda",
  socials: {
    github: "https://github.com/edwardkay1",
    linkedin: "https://www.linkedin.com/in/edwardkay1/",
    twitter: "https://x.com/edwardkay1_"
  },
  whatsapp: "256791598412",
};

export const aboutData = {
  description: [
    "Software Engineer specializing in building scalable web applications, digital commerce systems, and modern user experiences.",
    "Focused on delivering high-performance, accessible solutions with a minimalist and intentional design philosophy."
  ],
  services: [
    {
      title: "Front-End Development",
      description: "Building responsive web interfaces using React, TypeScript, and modern CSS frameworks.",
      icon: "Code"
    },
    {
      title: "REST API Integration",
      description: "Connecting front-end components with back-end services and ensuring seamless data flow.",
      icon: "Globe"
    }
  ],
  testimonials: [],
  clients: []
};

export const resumeData = {
  education: [
    {
      title: "B.Sc. in Computer Science | Uganda Martyrs University",
      date: "2024 — Present",
      desc: "Learning software engineering, front-end development, and scalable web application design."
    }
  ],
  experience: [
    {
      title: "Freelance Front-End Developer",
      date: "2024 — Present",
      desc: "Developed responsive web interfaces with React, HTML5, CSS3, and integrated REST APIs. Optimized performance, ensured cross-browser compatibility, and maintained clean code."
    },
    {
      title: "Front-End Apprentice | Primacy Technologies",
      date: "09/2025 — 12/2025",
      desc: "Worked in an Agile team implementing front-end features, following coding standards, and debugging using Chrome DevTools."
    }
  ],
  certifications: [
    {
      title: "ICDL Profile Certificate",
      issuer: "International Computer Driving Licence",
      desc: "Verified international standard in digital skills and professional computer use."
    }
  ],
  skills: [
    { name: "HTML5 & CSS3", level: 90 },
    { name: "JavaScript (ES6+) & TypeScript", level: 85 },
    { name: "React.js", level: 85 },
    { name: "Responsive Web Design", level: 90 },
    { name: "REST API Integration", level: 80 },
    { name: "Git & Version Control", level: 85 },
    { name: "Debugging & Problem Solving", level: 80 }
  ]
};

export const portfolioData = [
  {
    id: 1,
    title: "Manira Store",
    category: "Web Application",
    image: "/manira.png",
    description: "Multi-seller e-commerce platform with responsive UI, mobile-first design, and REST API integration.",
    tech: ["React", "TypeScript", "Tailwind CSS", "REST API"],
    link: "https://manira.store",
    gitLink: ""
  },
  {
    id: 2,
    title: "Nkozi Mart Online",
    category: "Web Application",
    image: "/nkozi.png",
    description: "Local marketplace online with fast, responsive design, real-time inventory updates, and API integration.",
    tech: ["React", "Tailwind CSS", "Firebase", "REST API"],
    link: "https://nkozi-mart.vercel.app/",
    gitLink: "https://github.com/edwardkay1/Nkozi-Mart"
  },
  {
    id: 3,
    title: "Shami Global Shop",
    category: "Web Application",
    image: "/shami.png",
    description: "E-commerce platform emphasizing accessibility (WCAG), responsive design, and smooth front-end interactions.",
    tech: ["React", "Tailwind CSS", "Firebase"],
    link: "https://shamiglobal-shop.vercel.app/",
    gitLink: "https://github.com/edwardkay1/Shami-Global-shop"
  }
];
export type Testimonial = {
  name: string;
  role: string;
  avatar: string;
  text: string;
};

export type Service = {
  title: string;
  description: string;
  icon: string;
};

export type AboutData = {
  description: string[];
  services: Service[];
  testimonials: Testimonial[];
  clients: string[];
};