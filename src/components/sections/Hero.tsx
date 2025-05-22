import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Code, Laptop, Server } from 'lucide-react';
import { personalInfo } from '@/data/portfolio';

const Hero: React.FC = () => {
  return (
    <section 
      id="hero" 
      className="min-h-screen flex items-center pt-20 pb-12 relative overflow-hidden bg-gradient-to-br from-white to-dark-50 dark:from-dark-950 dark:to-dark-900"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5 dark:opacity-10 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 transform -translate-x-1/2 -translate-y-1/2">
          <Code size={180} className="text-primary-500" />
        </div>
        <div className="absolute bottom-1/4 right-1/4 transform translate-x-1/2 translate-y-1/2">
          <Server size={220} className="text-secondary-500" />
        </div>
        <div className="absolute top-2/3 left-2/3 transform -translate-x-1/2 -translate-y-1/2">
          <Laptop size={200} className="text-accent-500" />
        </div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="order-2 lg:order-1"
          >
            <div className="space-y-6">
              <div>
                <motion.div 
                  className="inline-block"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                >
                  <span className="px-4 py-1 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-800 dark:text-primary-300 text-sm font-medium">
                    {personalInfo.title}
                  </span>
                </motion.div>
              </div>
              
              <motion.h1 
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-dark-900 dark:text-white"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
              >
                Hi, I&apos;m <span className="text-primary-600">{personalInfo.name}</span>
              </motion.h1>
              
              <motion.p 
                className="text-xl text-dark-600 dark:text-dark-300 leading-relaxed max-w-2xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                {personalInfo.bio}
              </motion.p>
              
              <motion.div 
                className="flex flex-wrap gap-4 pt-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
              >
                <motion.a
                  href="#projects"
                  className="px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white font-medium rounded-md shadow-md hover:shadow-lg transition-all"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View My Work
                </motion.a>
                
                <motion.a
                  href="#contact"
                  className="px-6 py-3 bg-white dark:bg-dark-800 hover:bg-dark-100 dark:hover:bg-dark-700 text-dark-800 dark:text-white font-medium rounded-md shadow-md hover:shadow-lg transition-all border border-dark-200 dark:border-dark-700"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Contact Me
                </motion.a>
              </motion.div>
            </div>
          </motion.div>
          
          <motion.div 
            className="order-1 lg:order-2 flex justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary-500 to-accent-500 opacity-20 dark:opacity-30 blur-xl"></div>
              <div className="absolute inset-4 sm:inset-6 lg:inset-8 rounded-full bg-gradient-to-br from-primary-500 to-accent-500 opacity-10 dark:opacity-20 blur-lg"></div>
              <div className="absolute inset-0 flex items-center justify-center text-dark-900 dark:text-white">
                <code className="font-mono text-sm sm:text-base opacity-70">
                  <pre className="whitespace-pre-wrap">
{`// Full Stack Developer
function createSolution(problem) {
  const skills = [
    'Laravel', 'Next.js',
    'React', 'Vue', 'Docker'
  ];
  
  return skills.reduce(
    (solution, skill) => 
      solution.enhance(skill), 
    new Solution(problem)
  );
}`}
                  </pre>
                </code>
              </div>
            </div>
          </motion.div>
        </div>
        
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <span className="text-dark-500 dark:text-dark-400 text-sm block mb-2">Scroll to explore</span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <ArrowDown size={20} className="text-primary-600 dark:text-primary-500" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;