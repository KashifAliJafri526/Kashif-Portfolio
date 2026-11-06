export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  role?: string;
  technologies: string[];
  category: 'Full Stack' | 'Frontend' | 'Enterprise' | 'Web App';
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
  highlights: string[];
  architecture?: string;
  metrics?: { label: string; value: string }[];
  challenges?: string[];
}

export interface Skill {
  name: string;
  category: 'Frontend' | 'Backend' | 'Database' | 'Languages' | 'Tools';
  level: string;
  proficiency: number; // 0 - 100 for visual gauge
  focus: string;
  iconType: 'react' | 'javascript' | 'typescript' | 'html' | 'tailwind' | 'node' | 'express' | 'mongo' | 'python' | 'git' | 'postman' | 'three' | 'api';
}

export interface ExperienceItem {
  id: string;
  title: string;
  company: string;
  period: string;
  location: string;
  description: string[];
  technologies: string[];
  type: 'Education' | 'Experience' | 'Milestone';
}

export interface NavItem {
  label: string;
  href: string;
  badge?: string;
}
