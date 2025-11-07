/**
 * Portfolio Data
 * Trent Ho's professional portfolio information
 */

import type { Project, Skill, Experience, SocialLink } from '../types';

/* ===== PROJECTS DATA ===== */

export const projects: Project[] = [
  {
    id: '1',
    title: 'ML-Driven Soccer Position Prediction',
    description: 'Achieved 85% accuracy using Python, Pandas, NumPy, Scikit-learn to classify optimal soccer positions for 10K+ players.',
    longDescription: 'Machine learning project that classifies optimal soccer positions for over 10,000 players with 85% accuracy. Optimized dataset preprocessing improving model training efficiency by 20%.',
    image: '/images/ml-soccer.jpg',
    technologies: ['Python', 'Pandas', 'NumPy', 'Scikit-learn'],
    githubUrl: 'https://github.com/trentho',
    featured: true,
    category: 'Machine Learning',
    date: '2024-05',
  },
  {
    id: '2',
    title: 'Global Recipe App',
    description: 'Implemented a dietary restriction-based search algorithm in Swift, enabling personalized recipe discovery.',
    longDescription: 'Mobile application featuring a dietary restriction-based search algorithm for personalized recipe discovery. Designed a caching system reducing search times by 30% and improving user experience.',
    image: '/images/recipe-app.jpg',
    technologies: ['Swift'],
    githubUrl: 'https://github.com/trentho',
    featured: true,
    category: 'Mobile Development',
    date: '2023-12',
  },
];

/* ===== SKILLS DATA ===== */

export const skills: Skill[] = [
  // Programming Languages
  {
    id: '1',
    name: 'JavaScript',
    category: 'frontend',
    proficiency: 5,
    icon: 'javascript',
    color: '#F7DF1E',
  },
  {
    id: '2',
    name: 'TypeScript',
    category: 'frontend',
    proficiency: 5,
    icon: 'typescript',
    color: '#3178C6',
  },
  {
    id: '3',
    name: 'Python',
    category: 'backend',
    proficiency: 5,
    icon: 'python',
    color: '#3776AB',
  },
  {
    id: '4',
    name: 'C',
    category: 'backend',
    proficiency: 4,
    icon: 'c',
    color: '#A8B9CC',
  },
  {
    id: '5',
    name: 'C++',
    category: 'backend',
    proficiency: 5,
    icon: 'cplusplus',
    color: '#00599C',
  },
  {
    id: '6',
    name: 'C#',
    category: 'backend',
    proficiency: 4,
    icon: 'csharp',
    color: '#239120',
  },
  {
    id: '7',
    name: 'Java',
    category: 'backend',
    proficiency: 4,
    icon: 'java',
    color: '#007396',
  },
  
  // Frameworks & Libraries
  {
    id: '8',
    name: 'React',
    category: 'frontend',
    proficiency: 5,
    icon: 'react',
    color: '#61DAFB',
  },
  {
    id: '9',
    name: '.NET 7',
    category: 'backend',
    proficiency: 4,
    icon: 'dotnet',
    color: '#512BD4',
  },
  
  // Databases
  {
    id: '10',
    name: 'PostgreSQL',
    category: 'backend',
    proficiency: 4,
    icon: 'postgresql',
    color: '#4169E1',
  },
  {
    id: '11',
    name: 'MySQL',
    category: 'backend',
    proficiency: 4,
    icon: 'mysql',
    color: '#4479A1',
  },
  {
    id: '12',
    name: 'MongoDB',
    category: 'backend',
    proficiency: 4,
    icon: 'mongodb',
    color: '#47A248',
  },
  
  // DevOps & Cloud Tools
  {
    id: '13',
    name: 'Docker',
    category: 'tools',
    proficiency: 4,
    icon: 'docker',
    color: '#2496ED',
  },
  {
    id: '14',
    name: 'Kubernetes',
    category: 'tools',
    proficiency: 3,
    icon: 'kubernetes',
    color: '#326CE5',
  },
  {
    id: '15',
    name: 'AWS',
    category: 'tools',
    proficiency: 4,
    icon: 'aws',
    color: '#FF9900',
  },
  
  // Technologies & Tools
  {
    id: '16',
    name: 'Git',
    category: 'tools',
    proficiency: 5,
    icon: 'git',
    color: '#F05032',
  },
  {
    id: '17',
    name: 'Postman',
    category: 'tools',
    proficiency: 4,
    icon: 'postman',
    color: '#FF6C37',
  },
  {
    id: '18',
    name: 'UNIX',
    category: 'tools',
    proficiency: 4,
    icon: 'linux',
    color: '#FCC624',
  },
];

/* ===== EXPERIENCE DATA ===== */

export const experiences: Experience[] = [
  {
    id: '1',
    title: 'Software Engineer',
    company: 'Paycom',
    location: 'Irving, TX',
    startDate: '2025-03',
    endDate: 'Present',
    description: 'Developed an internal WOTC Dashboard that streamlined tax credit workflows and generated $4 million+ in profit, reducing manual workload by 90%. Implemented auto-assignment and notification systems using JavaScript, TypeScript, and PHP, improving workflow tracking and turnaround. Remediated Server-Side Injection and Broken Access Control (IDOR) vulnerabilities, strengthening backend security and compliance. Led legacy feature removal across multiple modules, reducing technical debt and improving maintainability.',
    technologies: ['JavaScript', 'TypeScript', 'PHP'],
    type: 'work',
    logo: '/images/paycom-logo.png',
  },
  {
    id: '2',
    title: 'Associate Software Engineer',
    company: 'Lockheed Martin',
    location: 'Fort Worth, TX',
    startDate: '2024-06',
    endDate: '2025-03',
    description: 'Improved radar performance by 20% by refactoring legacy ADA modules into object-oriented C++, increasing maintainability and reliability. Designed and optimized radar features for track identification, spotlight focus, and cursor positioning, boosting system accuracy by 15%. Refactored Data Modem systems with smart pointers, cutting redundant code by 40% and enhancing real-time communication between F-16 aircraft. Supported Agile development as backup Scrum Master, streamlining cross-functional collaboration and enabling a 20% faster release cycle.',
    technologies: ['C++', 'ADA'],
    type: 'work',
    logo: '/images/lockheed-logo.png',
  },
  {
    id: '3',
    title: 'Software Engineer Intern',
    company: 'Aristocrat',
    location: 'Austin, TX',
    startDate: '2023-09',
    endDate: '2024-05',
    description: 'Delivered a 25% improvement in UI efficiency by redesigning interface components using C#, .NET 7, and Razor, enhancing user engagement. Modernized a validation tool aligned with .NET standards, reducing testing failures by 20%. Reduced verification time by 30% by evaluating and integrating features from five math verification tools into a proprietary game development kit.',
    technologies: ['C#', '.NET 7', 'Razor'],
    type: 'work',
    logo: '/images/aristocrat-logo.png',
  },
  {
    id: '4',
    title: 'Bachelor of Science, Computer Science',
    company: 'The University of Texas at Austin',
    location: 'Austin, TX',
    startDate: '2020-08',
    endDate: '2024-05',
    description: 'Graduated with a Bachelor of Science degree in Computer Science from The University of Texas at Austin.',
    technologies: ['Computer Science', 'Software Engineering'],
    type: 'education',
    logo: '/images/ut-logo.png',
  },
];

/* ===== SOCIAL LINKS DATA ===== */

export const socialLinks: SocialLink[] = [
  {
    id: '1',
    platform: 'GitHub',
    url: 'https://github.com/trentho',
    icon: 'github',
  },
  {
    id: '2',
    platform: 'LinkedIn',
    url: 'https://linkedin.com/in/trentho',
    icon: 'linkedin',
  },
  {
    id: '3',
    platform: 'Email',
    url: 'mailto:trentho2010@gmail.com',
    icon: 'email',
  },
];

/* ===== PERSONAL INFO ===== */

export const personalInfo = {
  name: 'Trent Ho',
  title: 'Software Engineer',
  subtitle: 'Building scalable solutions and innovative software',
  bio: 'Software Engineer with experience at Paycom, Lockheed Martin, and Aristocrat. Specialized in full-stack development, system optimization, and security. Passionate about creating efficient, maintainable code and delivering impactful solutions.',
  email: 'trentho2010@gmail.com',
  phone: '228-271-2360',
  location: 'Dallas, TX',
  availability: 'Open to opportunities',
  highlights: [
    'Generated $4M+ in profit through WOTC Dashboard',
    'Improved radar performance by 20%',
    'UT Austin CS Graduate',
    'Full-stack development expertise',
  ],
};