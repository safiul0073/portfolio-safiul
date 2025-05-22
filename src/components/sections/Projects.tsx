import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, X } from 'lucide-react';
import { projects } from '@/data/portfolio';
import { Project } from '@/types';

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  
  const openProject = (project: Project) => {
    setSelectedProject(project);
    document.body.style.overflow = 'hidden';
  };
  
  const closeProject = () => {
    setSelectedProject(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <section id="projects" className="py-20 bg-dark-50 dark:bg-dark-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl font-bold text-dark-900 dark:text-white mb-2">My Projects</h2>
          <div className="w-20 h-1 bg-primary-600 mx-auto mb-6"></div>
          <p className="text-dark-600 dark:text-dark-300 max-w-3xl mx-auto">
            A showcase of my recent work and the technologies I&apos;ve been working with.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
              onClick={() => openProject(project)}
            >
              <div className="bg-white dark:bg-dark-900 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 h-full flex flex-col cursor-pointer transform hover:-translate-y-2">
                <div className="relative overflow-hidden h-60">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-900/70 to-transparent flex items-end">
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-white mb-1">{project.title}</h3>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.slice(0, 3).map((tech: string, techIndex:number) => (
                          <span key={techIndex} className="text-xs px-2 py-1 bg-primary-600/80 text-white rounded-full">
                            {tech}
                          </span>
                        ))}
                        {project.technologies.length > 3 && (
                          <span className="text-xs px-2 py-1 bg-dark-700/80 text-white rounded-full">
                            +{project.technologies.length - 3}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <p className="text-dark-600 dark:text-dark-300 mb-4 flex-1">{project.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-primary-600 font-medium text-sm">View details</span>
                    {project.featured && (
                      <span className="bg-accent-100 dark:bg-accent-900/30 text-accent-800 dark:text-accent-300 text-xs px-2 py-1 rounded-full">
                        Featured
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Project Details Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div 
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-dark-900/80 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeProject}
          >
            <motion.div 
              className="bg-white dark:bg-dark-800 rounded-xl w-full max-w-4xl max-h-[90vh] overflow-hidden shadow-2xl relative"
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              transition={{ type: 'spring', damping: 25 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                className="absolute top-4 right-4 bg-dark-200 dark:bg-dark-700 p-2 rounded-full text-dark-600 dark:text-dark-300 hover:bg-dark-300 dark:hover:bg-dark-600 z-10"
                onClick={closeProject}
              >
                <X size={20} />
              </button>
              
              <div className="overflow-auto max-h-[90vh]">
                <div className="h-60 sm:h-72 md:h-80 overflow-hidden relative">
                  <img 
                    src={selectedProject.image} 
                    alt={selectedProject.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-900/70 to-transparent flex items-end">
                    <div className="p-6">
                      <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">{selectedProject.title}</h3>
                    </div>
                  </div>
                </div>
                
                <div className="p-6 sm:p-8">
                  <div className="flex flex-wrap gap-2 mb-6">
                    {selectedProject.technologies.map((tech, index) => (
                      <span key={index} className="text-sm px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-800 dark:text-primary-300 rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <h4 className="text-xl font-semibold text-dark-900 dark:text-white mb-3">Overview</h4>
                  <p className="text-dark-600 dark:text-dark-300 mb-6 leading-relaxed">
                    {selectedProject.longDescription || selectedProject.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-4">
                    {selectedProject.github && (
                      <a 
                        href={selectedProject.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-4 py-2 bg-dark-800 dark:bg-dark-700 hover:bg-dark-700 dark:hover:bg-dark-600 text-white rounded-md transition-colors"
                      >
                        <Github size={18} className="mr-2" />
                        View Code
                      </a>
                    )}
                    
                    {selectedProject.live && (
                      <a 
                        href={selectedProject.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white rounded-md transition-colors"
                      >
                        <ExternalLink size={18} className="mr-2" />
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;