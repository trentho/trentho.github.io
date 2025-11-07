/**
 * Portfolio Data
 * Placeholder data structure for projects, skills, experience, and social links
 * 
 * Replace this placeholder data with your actual portfolio information
 */

import type { Project, Skill, Experience, SocialLink } from '../types';

/* ===== PROJECTS DATA ===== */

export const projects: Project[] = [
  {
    id: '1',
    title: 'Project One',
    description: 'A brief description of your first project showcasing key features and technologies used.',
    longDescription: 'A more detailed description of the project, including challenges faced, solutions implemented, and outcomes achieved.',
    image: '/images/project1.jpg',
    technologies: ['React', 'TypeScript', 'Vite', 'CSS'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com/username/project1',
    featured: true,
    category: 'Web Development',
    date: '2024-01',
  },
  {
    id: '2',
    title: 'Project Two',
    description: 'Another exciting project demonstrating your skills in modern web development.',
    image: '/images/project2.jpg',
    technologies: ['Node.js', 'Express', 'MongoDB', 'React'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com/username/project2',
    featured: true,
    category: 'Full Stack',
    date: '2023-12',
  },
  {
    id: '3',
    title: 'Project Three',
    description: 'A creative solution to a real-world problem using cutting-edge technologies.',
    image: '/images/project3.jpg',
    technologies: ['Python', 'Django', 'PostgreSQL', 'Docker'],
    githubUrl: 'https://github.com/username/project3',
    featured: false,
    category: 'Backend',
    date: '2023-10',
  },
];

/* ===== SKILLS DATA ===== */

export const skills: Skill[] = [
  // Frontend
  {
    id: '1',
    name: 'React',
    category: 'frontend',
    proficiency: 5,
    icon: 'react',
    color: '#61DAFB',
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
    name: 'JavaScript',
    category: 'frontend',
    proficiency: 5,
    icon: 'javascript',
    color: '#F7DF1E',
  },
  {
    id: '4',
    name: 'HTML5',
    category: 'frontend',
    proficiency: 5,
    icon: 'html5',
    color: '#E34F26',
  },
  {
    id: '5',
    name: 'CSS3',
    category: 'frontend',
    proficiency: 5,
    icon: 'css3',
    color: '#1572B6',
  },
  {
    id: '6',
    name: 'Tailwind CSS',
    category: 'frontend',
    proficiency: 4,
    icon: 'tailwind',
    color: '#06B6D4',
  },
  
  // Backend
  {
    id: '7',
    name: 'Node.js',
    category: 'backend',
    proficiency: 4,
    icon: 'nodejs',
    color: '#339933',
  },
  {
    id: '8',
    name: 'Python',
    category: 'backend',
    proficiency: 4,
    icon: 'python',
    color: '#3776AB',
  },
  {
    id: '9',
    name: 'Express',
    category: 'backend',
    proficiency: 4,
    icon: 'express',
    color: '#000000',
  },
  {
    id: '10',
    name: 'MongoDB',
    category: 'backend',
    proficiency: 3,
    icon: 'mongodb',
    color: '#47A248',
  },
  {
    id: '11',
    name: 'PostgreSQL',
    category: 'backend',
    proficiency: 3,
    icon: 'postgresql',
    color: '#4169E1',
  },
  
  // Tools
  {
    id: '12',
    name: 'Git',
    category: 'tools',
    proficiency: 5,
    icon: 'git',
    color: '#F05032',
  },
  {
    id: '13',
    name: 'Docker',
    category: 'tools',
    proficiency: 3,
    icon: 'docker',
    color: '#2496ED',
  },
  {
    id: '14',
    name: 'VS Code',
    category: 'tools',
    proficiency: 5,
    icon: 'vscode',
    color: '#007ACC',
  },
  {
    id: '15',
    name: 'Figma',
    category: 'tools',
    proficiency: 4,
    icon: 'figma',
    color: '#F24E1E',
  },
];

/* ===== EXPERIENCE DATA ===== */

export const experiences: Experience[] = [
  {
    id: '1',
    title: 'Senior Frontend Developer',
    company: 'Tech Company Inc.',
    location: 'San Francisco, CA',
    startDate: '2022-01',
    endDate: 'Present',
    description: 'Leading frontend development initiatives, mentoring junior developers, and implementing modern web technologies to improve user experience and application performance.',
    technologies: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS'],
    type: 'work',
    logo: '/images/company1-logo.png',
  },
  {
    id: '2',
    title: 'Frontend Developer',
    company: 'Startup Solutions',
    location: 'Remote',
    startDate: '2020-06',
    endDate: '2021-12',
    description: 'Developed responsive web applications using React and modern JavaScript. Collaborated with designers and backend developers to deliver high-quality products.',
    technologies: ['React', 'JavaScript', 'CSS', 'REST APIs'],
    type: 'work',
    logo: '/images/company2-logo.png',
  },
  {
    id: '3',
    title: 'Bachelor of Science in Computer Science',
    company: 'University Name',
    location: 'City, State',
    startDate: '2016-09',
    endDate: '2020-05',
    description: 'Focused on software engineering, web development, and computer science fundamentals. Graduated with honors.',
    technologies: ['Java', 'Python', 'C++', 'Algorithms'],
    type: 'education',
    logo: '/images/university-logo.png',
  },
];

/* ===== SOCIAL LINKS DATA ===== */

export const socialLinks: SocialLink[] = [
  {
    id: '1',
    platform: 'GitHub',
    url: 'https://github.com/yourusername',
    icon: 'github',
  },
  {
    id: '2',
    platform: 'LinkedIn',
    url: 'https://linkedin.com/in/yourusername',
    icon: 'linkedin',
  },
  {
    id: '3',
    platform: 'Twitter',
    url: 'https://twitter.com/yourusername',
    icon: 'twitter',
  },
  {
    id: '4',
    platform: 'Email',
    url: 'mailto:your.email@example.com',
    icon: 'email',
  },
];

/* ===== PERSONAL INFO ===== */

export const personalInfo = {
  name: 'Your Name',
  title: 'Full Stack Developer',
  subtitle: 'Building beautiful and functional web experiences',
  bio: 'Passionate developer with expertise in modern web technologies. I love creating elegant solutions to complex problems and continuously learning new skills.',
  email: 'your.email@example.com',
  location: 'San Francisco, CA',
  availability: 'Open to opportunities',
  highlights: [
    '5+ years of experience',
    'Full-stack development',
    'UI/UX enthusiast',
    'Open source contributor',
  ],
};