export interface Project {
  id: number;
  title: string;
  description: string;
  longDescription?: string;
  image: string;
  technologies: string[];
  github?: string;
  live?: string;
  featured?: boolean;
}

export interface Experience {
  id: number;
  company: string;
  position: string;
  duration: string;
  description: string[];
  technologies: string[];
}

export interface Skill {
  name: string;
  icon: string;
  proficiency: number;
  category: 'frontend' | 'backend' | 'database' | 'devops' | 'other';
}

export interface Education {
  id: number;
  institution: string;
  degree: string;
  duration: string;
  description?: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}