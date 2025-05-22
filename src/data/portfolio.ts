import { Project, Experience, Skill, Education, SocialLink } from '../types';

export const personalInfo = {
  name: 'John Doe',
  title: 'Full Stack Developer',
  email: 'john.doe@example.com',
  location: 'San Francisco, CA',
  bio: 'Full stack developer with 3.5+ years of experience building web applications using Laravel, Next.js, React, Vue, and Docker. Passionate about creating clean, efficient, and user-friendly solutions.'
};

export const projects: Project[] = [
  {
    id: 1,
    title: 'E-commerce Platform',
    description: 'A full-featured e-commerce platform with product management, cart, and checkout functionality',
    longDescription: 'Built a comprehensive e-commerce solution from scratch using Laravel for the backend API and Vue.js for the frontend. Implemented features like user authentication, product catalog, shopping cart, payment processing via Stripe, and order management.',
    image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    technologies: ['Laravel', 'Vue.js', 'MySQL', 'Stripe API', 'Docker'],
    github: 'https://github.com/johndoe/ecommerce-platform',
    live: 'https://ecommerce-platform.example.com',
    featured: true
  },
  {
    id: 2,
    title: 'Property Management System',
    description: 'A comprehensive solution for real estate agencies to manage properties and clients',
    longDescription: 'Developed a property management system that helps real estate agencies track properties, leases, tenants, and maintenance requests. The system includes dashboards for different user roles, reporting features, and automated notifications.',
    image: 'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    technologies: ['Next.js', 'TypeScript', 'MongoDB', 'AWS S3', 'Mapbox'],
    github: 'https://github.com/johndoe/property-management',
    featured: true
  },
  {
    id: 3,
    title: 'Health & Fitness App',
    description: 'Mobile-first application for tracking workouts, nutrition, and health metrics',
    longDescription: 'Created a comprehensive health and fitness tracking application that allows users to log workouts, track nutrition, monitor health metrics, and set goals. The app includes data visualization, progress tracking, and social features.',
    image: 'https://images.pexels.com/photos/1756959/pexels-photo-1756959.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    technologies: ['React Native', 'Firebase', 'Redux', 'Node.js', 'Express'],
    github: 'https://github.com/johndoe/fitness-tracker',
    live: 'https://fitness-app.example.com'
  },
  {
    id: 4,
    title: 'Content Management System',
    description: 'Custom CMS built for a media company with advanced publishing workflows',
    longDescription: 'Designed and developed a custom content management system for a media company that needed specific publishing workflows and content organization. The system includes user roles, content versioning, scheduled publishing, and analytics.',
    image: 'https://images.pexels.com/photos/262508/pexels-photo-262508.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    technologies: ['Laravel', 'React', 'PostgreSQL', 'Redis', 'ElasticSearch'],
    github: 'https://github.com/johndoe/custom-cms'
  }
];

export const experiences: Experience[] = [
  {
    id: 1,
    company: 'Tech Innovations Inc',
    position: 'Senior Full Stack Developer',
    duration: 'Jan 2023 - Present',
    description: [
      'Lead a team of 5 developers in building and maintaining multiple client projects',
      'Implemented CI/CD pipelines using GitHub Actions, reducing deployment time by 40%',
      'Architected a microservices-based e-commerce platform using Docker and Kubernetes',
      'Mentored junior developers through code reviews and pair programming sessions'
    ],
    technologies: ['Laravel', 'Next.js', 'Docker', 'Kubernetes', 'AWS']
  },
  {
    id: 2,
    company: 'Digital Solutions LLC',
    position: 'Full Stack Developer',
    duration: 'Jun 2021 - Dec 2022',
    description: [
      'Developed and maintained web applications for clients in various industries',
      'Created RESTful APIs using Laravel and integrated with frontend applications',
      'Designed and implemented database schemas for optimal performance',
      'Collaborated with UI/UX designers to implement responsive designs'
    ],
    technologies: ['Vue.js', 'Laravel', 'MySQL', 'AWS', 'Tailwind CSS']
  },
  {
    id: 3,
    company: 'WebCraft Studios',
    position: 'Junior Web Developer',
    duration: 'Jan 2021 - May 2021',
    description: [
      'Assisted in developing and maintaining client websites',
      'Fixed bugs and implemented new features for existing applications',
      'Participated in code reviews and team meetings',
      'Created technical documentation for internal use'
    ],
    technologies: ['HTML/CSS', 'JavaScript', 'PHP', 'WordPress', 'Bootstrap']
  }
];

export const skills: Skill[] = [
  // Frontend
  { name: 'React', icon: 'react', proficiency: 90, category: 'frontend' },
  { name: 'Vue.js', icon: 'vue', proficiency: 85, category: 'frontend' },
  { name: 'Next.js', icon: 'nextjs', proficiency: 80, category: 'frontend' },
  { name: 'TypeScript', icon: 'typescript', proficiency: 85, category: 'frontend' },
  { name: 'Tailwind CSS', icon: 'tailwind', proficiency: 90, category: 'frontend' },
  
  // Backend
  { name: 'Laravel', icon: 'laravel', proficiency: 95, category: 'backend' },
  { name: 'Node.js', icon: 'nodejs', proficiency: 80, category: 'backend' },
  { name: 'Express', icon: 'express', proficiency: 85, category: 'backend' },
  { name: 'PHP', icon: 'php', proficiency: 90, category: 'backend' },
  
  // Database
  { name: 'MySQL', icon: 'mysql', proficiency: 85, category: 'database' },
  { name: 'PostgreSQL', icon: 'postgresql', proficiency: 80, category: 'database' },
  { name: 'MongoDB', icon: 'mongodb', proficiency: 75, category: 'database' },
  { name: 'Redis', icon: 'redis', proficiency: 70, category: 'database' },
  
  // DevOps
  { name: 'Docker', icon: 'docker', proficiency: 85, category: 'devops' },
  { name: 'Kubernetes', icon: 'kubernetes', proficiency: 70, category: 'devops' },
  { name: 'AWS', icon: 'aws', proficiency: 75, category: 'devops' },
  { name: 'CI/CD', icon: 'cicd', proficiency: 80, category: 'devops' },
  
  // Other
  { name: 'Git', icon: 'git', proficiency: 90, category: 'other' },
  { name: 'RESTful APIs', icon: 'api', proficiency: 95, category: 'other' },
  { name: 'GraphQL', icon: 'graphql', proficiency: 70, category: 'other' }
];

export const education: Education[] = [
  {
    id: 1,
    institution: 'University of Technology',
    degree: 'Bachelor of Science in Computer Science',
    duration: '2017 - 2021',
    description: 'Focused on software engineering, databases, and web development. Graduated with honors.'
  }
];

export const socialLinks: SocialLink[] = [
  {
    name: 'GitHub',
    url: 'https://github.com/johndoe',
    icon: 'github'
  },
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com/in/johndoe',
    icon: 'linkedin'
  },
  {
    name: 'Twitter',
    url: 'https://twitter.com/johndoe',
    icon: 'twitter'
  }
];