export interface Project {
  id: number;
  slug: string;
  title: string;
  description: string;
  longDescription?: string;
  highlights?: string[];
  image: string;
  technologies: string[];
  github?: string;
  live?: string;
  codecanyon?: string;
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
  category:
    | 'language'
    | 'frontend'
    | 'backend'
    | 'architecture'
    | 'database'
    | 'realtime'
    | 'mobile'
    | 'devops'
    | 'ai';
}

export interface Tool {
  id: number;
  slug: string;
  name: string;
  type: string;
  platform: string;
  description: string;
  highlights: string[];
  technologies: string[];
  github: string;
  featured?: boolean;
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
