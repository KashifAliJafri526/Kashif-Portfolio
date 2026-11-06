import type { Project, Skill, ExperienceItem, NavItem } from '../types';

export const PERSONAL_INFO = {
  name: 'Kashif Ali Jafri',
  role: 'Junior MERN Stack Developer',
  location: 'India',
  education: 'B.Tech Computer Science',
  status: 'Open to Opportunities',
  bio: 'Driven Junior MERN Stack Developer with a strong computer science foundation (B.Tech CS). Focused on architecting scalable full-stack web applications, clean RESTful APIs, and responsive, interactive frontend experiences.',
  shortPitch: 'Transforming ideas into high-performance web systems using React, Node.js, Express, and MongoDB — with an eye for modern interactive UI and robust architecture.',
  socials: {
    github: 'https://github.com/#kashif-ali-jafri',
    linkedin: 'https://linkedin.com/in/#kashif-ali-jafri',
    email: 'kashif.dev@example.com',
  },
  stats: [
    { label: 'Core Projects Built', value: '6+' },
    { label: 'Primary Tech Stack', value: 'MERN' },
    { label: 'Engineering Focus', value: 'Full-Stack' },
    { label: 'Degree', value: 'B.Tech CS' },
  ],
};

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '#hero' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects', badge: '6' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];

export const SKILLS: Skill[] = [
  // Frontend
  {
    name: 'React',
    category: 'Frontend',
    level: 'Core Expertise',
    proficiency: 92,
    focus: 'Functional Components, Hooks, State Architecture & Lifecycle',
    iconType: 'react',
  },
  {
    name: 'JavaScript (ES6+)',
    category: 'Languages',
    level: 'Advanced',
    proficiency: 90,
    focus: 'Async/Await, Closures, DOM Manipulation & Event Loop',
    iconType: 'javascript',
  },
  {
    name: 'TypeScript',
    category: 'Languages',
    level: 'Proficient',
    proficiency: 84,
    focus: 'Interfaces, Generics, Type Narrowing & Strict Typing',
    iconType: 'typescript',
  },
  {
    name: 'Tailwind CSS',
    category: 'Frontend',
    level: 'Proficient',
    proficiency: 88,
    focus: 'Utility Systems, Responsive Layouts & Cyberpunk Themes',
    iconType: 'tailwind',
  },
  {
    name: 'HTML5 & CSS3',
    category: 'Frontend',
    level: 'Advanced',
    proficiency: 90,
    focus: 'Semantic Markup, Flexbox, CSS Grid & Keyframe Animations',
    iconType: 'html',
  },
  {
    name: 'Three.js / R3F',
    category: 'Frontend',
    level: 'Foundational',
    proficiency: 72,
    focus: '3D Meshes, Shaders, Lighting & Interactive WebGL Canvas',
    iconType: 'three',
  },

  // Backend
  {
    name: 'Node.js',
    category: 'Backend',
    level: 'Core Expertise',
    proficiency: 88,
    focus: 'Event-driven I/O, Asynchronous Server Logic & NPM Ecosystem',
    iconType: 'node',
  },
  {
    name: 'Express.js',
    category: 'Backend',
    level: 'Core Expertise',
    proficiency: 88,
    focus: 'REST API Architecture, Router Handlers & Middleware Pipelines',
    iconType: 'express',
  },
  {
    name: 'RESTful APIs',
    category: 'Backend',
    level: 'Proficient',
    proficiency: 90,
    focus: 'CRUD Standards, JWT Authentication & Status Code Protocol',
    iconType: 'api',
  },

  // Database
  {
    name: 'MongoDB',
    category: 'Database',
    level: 'Core Expertise',
    proficiency: 86,
    focus: 'Document Schema Design, Aggregation Pipelines & CRUD',
    iconType: 'mongo',
  },
  {
    name: 'Mongoose ODM',
    category: 'Database',
    level: 'Proficient',
    proficiency: 85,
    focus: 'Data Modeling, Validation Rules, Indexes & Virtuals',
    iconType: 'mongo',
  },

  // Languages & Foundations
  {
    name: 'Python (Basics)',
    category: 'Languages',
    level: 'Foundational',
    proficiency: 68,
    focus: 'Core Syntax, Algorithmic Problem Solving & Data Structures',
    iconType: 'python',
  },

  // Tools & Workflow
  {
    name: 'Git & GitHub',
    category: 'Tools',
    level: 'Proficient',
    proficiency: 86,
    focus: 'Branching, Commit Standards, Merging & Remote Collaboration',
    iconType: 'git',
  },
  {
    name: 'Postman',
    category: 'Tools',
    level: 'Proficient',
    proficiency: 88,
    focus: 'Endpoint Testing, Environment Variables & API Validation',
    iconType: 'postman',
  },
];

export const PROJECTS: Project[] = [
  {
    id: 'msmart-chandigarh',
    title: 'MSmart Chandigarh',
    tagline: 'Smart City Citizen Service & Municipal Workflow Platform',
    description:
      'A comprehensive digital services and administrative portal engineered to streamline citizen grievance redressal, municipal service delivery, and public utility oversight in Chandigarh.',
    role: 'Full-Stack Developer (MERN)',
    technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Tailwind CSS'],
    category: 'Full Stack',
    liveUrl: 'https://www.msmartchandigarh.com/',
    featured: true,
    architecture: 'React SPA → Node.js Express Gateway → MongoDB Document Store',
    metrics: [
      { label: 'Modules', value: '8+' },
      { label: 'Auth Tier', value: 'Role-Based' },
      { label: 'Query Speed', value: '<75ms' },
    ],
    challenges: [
      'Architecting role-specific dashboard views for citizens vs administrative officers',
      'Optimizing MongoDB aggregation queries for multi-parameter grievance status filters',
      'Building an intuitive mobile-friendly complaint filing portal for general public accessibility',
    ],
    highlights: [
      'Role-based dashboards for citizen reporting and administrative grievance dispatch',
      'Scalable REST APIs structured with modular controllers and MongoDB aggregation',
      'Real-time status tracking and mobile-first responsive citizen interface',
    ],
  },
  {
    id: 'myems',
    title: 'MyEMS',
    tagline: 'Enterprise Employee Management & Workflow System',
    description:
      'A centralized employee operations suite managing staff onboarding, attendance logs, department assignments, and performance monitoring with role-based access control.',
    role: 'Full-Stack Developer',
    technologies: ['React', 'TypeScript', 'Node.js', 'Express', 'MongoDB'],
    category: 'Enterprise',
    liveUrl: 'https://my-ems-fawn.vercel.app/',
    featured: true,
    architecture: 'React + TypeScript → JWT Auth Middleware → MongoDB Aggregations',
    metrics: [
      { label: 'Access Roles', value: '3-Tier' },
      { label: 'Auth Token', value: 'JWT / Bcrypt' },
      { label: 'State Sync', value: 'Real-Time' },
    ],
    challenges: [
      'Implementing strict role authorization matrices across HR, Admin, and Employee endpoints',
      'Automating monthly attendance calculation and payroll summary calculations',
      'Developing data tables with dynamic search, pagination, and multi-field sorting',
    ],
    highlights: [
      'JWT-authenticated multi-role access control (Admin, HR, Employee)',
      'Automated attendance tracking and leave management calculation engine',
      'Clean interactive analytics dashboards with data filtering and search',
    ],
  },
  {
    id: 'bodhmantraa',
    title: 'BodhMantraa',
    tagline: 'Holistic Ed-Tech & Wellness Learning Platform',
    description:
      'An engaging modern web application connecting learners and practitioners with structured mindfulness courses, interactive video sessions, and self-paced progress tracking.',
    role: 'Full-Stack Developer (MERN)',
    technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Tailwind CSS'],
    category: 'Full Stack',
    liveUrl: 'https://www.bodhamantra.life/',
    featured: true,
    architecture: 'React Frontend → RESTful Course APIs → MongoDB Cloud',
    metrics: [
      { label: 'Media Stream', value: 'Fluid' },
      { label: 'Progress Save', value: 'Automatic' },
      { label: 'Design Vibe', value: 'Calm Dark' },
    ],
    challenges: [
      'Seamless course progression persistence and interactive video playback synchronization',
      'Minimalist, distraction-free UI design for heightened user mindfulness and focus',
      'Modular REST controllers handling course enrollment and progress updates',
    ],
    highlights: [
      'Interactive course catalog with categorized modules and progress persistence',
      'Sleek, calming user interface designed for maximum retention and accessibility',
      'Modular REST backend for student enrollments and instructor uploads',
    ],
  },
  {
    id: 'solar-path',
    title: 'Solar Path',
    tagline: 'Solar Energy Quotation & Clean Energy Installation Platform',
    description:
      'A modern green-energy web platform enabling residential and commercial clients to calculate solar capacity requirements, estimate installation ROI, and schedule site engineering assessments.',
    role: 'Full-Stack Developer',
    technologies: ['React', 'TypeScript', 'Node.js', 'Express', 'MongoDB', 'Tailwind CSS'],
    category: 'Full Stack',
    liveUrl: 'https://my-solar-path.vercel.app/',
    featured: true,
    architecture: 'React (TS) + Tailwind → Express REST Controllers → MongoDB (Mongoose)',
    metrics: [
      { label: 'Calculation Engine', value: '<50ms' },
      { label: 'Lead Flow', value: 'Automated' },
      { label: 'Device Support', value: 'Responsive' },
    ],
    challenges: [
      'Engineering dynamic mathematical model for solar irradiance and energy cost calculations',
      'Multi-step form state management and persistence across customer onboarding pipeline',
      'Real-time inquiry status transitions stored in MongoDB with Mongoose indexing',
    ],
    highlights: [
      'Interactive solar wattage and savings estimation calculator with dynamic visual feedback',
      'Customer consultation request pipeline with MongoDB lead status management',
      'Responsive modern UI designed for high conversion with custom dark/light contrast',
    ],
  },
  {
    id: 'movix',
    title: 'Movix',
    tagline: 'Cinematic Movie & TV Series Exploration Engine',
    description:
      'A high-performance media discovery app powered by TMDB API, featuring dynamic movie discovery, genre filtering, trailer integration, and infinite scroll pagination.',
    role: 'Frontend Engineer',
    technologies: ['React', 'JavaScript', 'CSS3', 'REST API', 'Vite'],
    category: 'Frontend',
    liveUrl: 'https://movix-theta-five.vercel.app/',
    featured: false,
    architecture: 'React (Vite) → TMDB Public REST API → Client-side Caching',
    metrics: [
      { label: 'Search Latency', value: 'Debounced' },
      { label: 'Catalog Depth', value: '10,000+' },
      { label: 'Streaming UI', value: 'Dynamic' },
    ],
    challenges: [
      'Debouncing high-frequency search input while maintaining instant auto-suggest dropdowns',
      'Handling responsive trailer modals and image fallback placeholders gracefully',
      'Implementing infinite scrolling pagination without performance degradation',
    ],
    highlights: [
      'Instant search and debounced auto-completion across thousands of titles',
      'Seamless YouTube trailer modal integration and dynamic cast carousel',
      'Optimized image lazy loading and skeleton states for high responsiveness',
    ],
  },
  {
    id: 'stech-interior',
    title: 'S-Tech Interior',
    tagline: 'Bespoke Architectural & Interior Design Showcase',
    description:
      'A stylish, portfolio web experience highlighting high-end residential and commercial architecture projects, project estimates, and consultation scheduling.',
    role: 'Frontend Developer & UI Designer',
    technologies: ['React', 'JavaScript', 'Tailwind CSS', 'Responsive UI'],
    category: 'Frontend',
    liveUrl: 'https://www.stechinterior.store/',
    featured: false,
    architecture: 'React Client → Custom CSS Animations → Inquiry Handling Pipeline',
    metrics: [
      { label: 'Gallery Layout', value: 'Masonry' },
      { label: 'Interactive Lightbox', value: 'Custom' },
      { label: 'Lead Capture', value: 'Direct' },
    ],
    challenges: [
      'Crafting fluid masonry image galleries with zero layout shifts during image load',
      'Interactive consultation estimation forms with real-time room dimension validation',
      'Developing refined luxury design aesthetics with subtle purple and dark tones',
    ],
    highlights: [
      'Interactive visual project gallery with lightbox and category filtering',
      'Client inquiry and project quotation request workflow',
      'Pixel-perfect layout with refined typography and modern aesthetics',
    ],
  },
];

export const EXPERIENCE_MILESTONES: ExperienceItem[] = [
  {
    id: 'btech-cs',
    title: 'Bachelor of Technology (B.Tech) in Computer Science',
    company: 'Engineering University',
    period: 'Completed',
    location: 'India',
    description: [
      'Comprehensive computer science education establishing rigorous theoretical and practical foundations in Data Structures, Algorithms, and Object-Oriented Programming.',
      'Specialized coursework in Database Management Systems (DBMS), Relational & Document Schema Design, Operating Systems, and Network Architecture.',
      'Applied computing concepts toward full-stack software development, software engineering methodologies, and algorithmic problem-solving.',
    ],
    technologies: ['Data Structures', 'Algorithms', 'DBMS', 'OOP', 'Python basics', 'Web Tech'],
    type: 'Education',
  },
  {
    id: 'mern-engineering',
    title: 'Full-Stack MERN Project Engineering',
    company: 'Independent & Client Applications',
    period: 'Recent',
    location: 'India',
    description: [
      'Engineered and deployed 6 production-grade web systems spanning renewable energy (Solarpath), municipal civic tech (MSmart Chandigarh), enterprise operations (MyEMS), and ed-tech (BodhMantraa).',
      'Architected modular RESTful APIs with Node.js and Express, implementing JWT authentication, role-based authorization matrices, and MongoDB aggregation pipelines.',
      'Developed responsive, accessible user interfaces with React, TypeScript, and Tailwind CSS, focusing on maintainable component architecture and fast render cycles.',
    ],
    technologies: ['React', 'TypeScript', 'Node.js', 'Express', 'MongoDB', 'Tailwind CSS'],
    type: 'Milestone',
  },
  {
    id: '3d-creative-dev',
    title: '3D Web & Interactive Graphics Specialization',
    company: 'Technical Exploration & Self-Directed Research',
    period: 'Ongoing',
    location: 'India',
    description: [
      'Specializing in interactive 3D web environments and cinematic developer portfolios using Three.js, React Three Fiber, and Drei.',
      'Implementing real-time WebGL lighting setups, procedural particle systems, geometry instancing, and mobile-friendly performance clamping.',
      'Designing fluid digital micro-interactions and smooth page transitions with Framer Motion and modern CSS design systems.',
    ],
    technologies: ['Three.js', 'React Three Fiber', 'Drei', 'WebGL', 'Framer Motion', 'Vite'],
    type: 'Milestone',
  },
];
