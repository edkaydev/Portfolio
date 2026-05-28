export const personalInfo = {
  name: "Kayiira Edward",
  brandName: "edkay.dev",
  role: "Frontend Architect & Digital Experience Specialist",
  avatar: "/edward.png",
  email: "edwardbrin1@gmail.com",
  phone: "+256 746 838 046",
  birthday: "March 4, 2004",
  location: "Uganda",
  socials: {
    github: "https://github.com/edwardkay1",
    twitter: "https://x.com/edwardkay1_",
    linkedin: "https://www.linkedin.com/in/edwardkay1/",
  },
  whatsapp: "256746838046",
};

export const aboutData = {
  description: [
    "I don’t just build websites; I craft digital experiences that connect businesses to their audience. With over 2 years of hands-on experience, I specialize in high-conversion interfaces that turn casual visitors into loyal customers.",
    "I thrive at the intersection of clean code and business growth. From tailored WhatsApp-commerce platforms to scalable web portals, I deliver solutions that are fast, responsive, and designed for real-world impact."
  ],
  services: [
    {
      title: "High-Impact Frontend",
      description: "Designing visually stunning, lightning-fast interfaces using React and TypeScript that captivate and convert users.",
      icon: "Code",
    },
    {
      title: "WhatsApp-Commerce Expertise",
      description: "Seamless e-commerce workflows that link your digital storefront directly with your customers via WhatsApp.",
      icon: "Globe",
    }
  ],
  testimonials: [
    {
      name: "Verified Client",
      role: "E-commerce Owner",
      avatar: "/test1.png",
      text: "Edward transformed our business. His WhatsApp-ordering system eliminated friction for customers, making sales easier than ever!"
    },
    {
      name: "Startup Founder",
      role: "Tech Lead",
      avatar: "/test2.png",
      text: "A rare developer who understands both code and customer needs. Edward delivered a functional, beautiful, and timely product."
    },
  ],
  clients: []
};

export const resumeData = {
  education: [
    {
      title: "Uganda Martyrs University",
      date: "2024 — Present",
      desc: "BSc in Computer Science — Mastering algorithmic thinking, software engineering, and scalable web development.",
    }
  ],
  experience: [
    {
      title: "Freelance Frontend Developer",
      date: "2024 — Present",
      desc: "Building bespoke digital solutions for SMEs. Focused on maximizing ROI through optimized web performance and direct-to-customer tools.",
    },
    {
      title: "Software Developer Apprentice",
      date: "09/2025 — 12/2025",
      desc: "Worked in an agile WordPress team delivering custom enterprise layouts with pixel-perfect responsiveness and SEO optimization.",
    }
  ],
  certifications: [
    {
      title: "ICDL Profile Certificate",
      issuer: "International Computer Driving Licence",
      desc: "Comprehensive proficiency in Computer & Online Essentials (14/10/2024), Online Collaboration (21/10/2024), Cyber Security (04/11/2024), E-Commerce (14/05/2026), Digital Marketing (14/05/2026), and Artificial Intelligence (14/05/2026).",
      link: "/icdl.pdf"
    },
    {
      title: "IT Essentials",
      issuer: "HP",
      desc: "Professional certification covering computer hardware, software configuration, and troubleshooting standards.",
      link: "/hp.pdf"
    },
    {
      title: "HP LIFE: Introduction to Cybersecurity Awareness",
      issuer: "HP Foundation",
      desc: "Successfully completed online course on common cybersecurity threats and basic ways to keep online data and information more secure. Presented 9/4/2024.",
      link: "/hp-life.pdf"
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
    category: "Landing Page",
    image: "/nkozi.png",
    description: "Local marketplace online with fast, responsive design, real-time inventory updates, and API integration.",
    tech: ["React", "Tailwind CSS", "Firebase", "REST API"],
    link: "https://nkozi-mart.vercel.app/",
    gitLink: "https://github.com/edwardkay1/Nkozi-Mart"
  },
  {
    id: 3,
    title: "Shami Global Shop",
    category: "StartUp",
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