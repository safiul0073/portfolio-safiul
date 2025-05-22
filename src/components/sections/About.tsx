import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Mail, Calendar, Download } from 'lucide-react';
import { personalInfo } from '@/data/portfolio';

const About: React.FC = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.05 * i,
        duration: 0.5,
        ease: 'easeOut'
      }
    })
  };

  return (
    <section id="about" className="py-20 bg-white dark:bg-dark-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl font-bold text-dark-900 dark:text-white mb-2">About Me</h2>
          <div className="w-20 h-1 bg-primary-600 mx-auto mb-6"></div>
          <p className="text-dark-600 dark:text-dark-300 max-w-3xl mx-auto">
            Get to know more about me, my background, and what I do.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold text-dark-900 dark:text-white mb-4">
              Professional <span className="text-primary-600">Journey</span>
            </h3>
            <p className="text-dark-600 dark:text-dark-300 mb-4 leading-relaxed">
              I&apos;m a passionate full-stack developer with over 3.5 years of experience in building web applications. My journey in tech began with a strong foundation in computer science, and I quickly developed a love for creating elegant solutions to complex problems.
            </p>
            <p className="text-dark-600 dark:text-dark-300 mb-6 leading-relaxed">
              I specialize in developing full-stack web applications using modern technologies like Laravel, Next.js, React, Vue, and Docker. I believe in writing clean, maintainable code and staying up-to-date with the latest industry trends and best practices.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <motion.div 
                className="flex items-center"
                custom={1} 
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
              >
                <Mail size={20} className="text-primary-600 mr-2" />
                <span className="text-dark-700 dark:text-dark-300">{personalInfo.email}</span>
              </motion.div>
              <motion.div 
                className="flex items-center"
                custom={2} 
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
              >
                <MapPin size={20} className="text-primary-600 mr-2" />
                <span className="text-dark-700 dark:text-dark-300">{personalInfo.location}</span>
              </motion.div>
              <motion.div 
                className="flex items-center"
                custom={3} 
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
              >
                <Calendar size={20} className="text-primary-600 mr-2" />
                <span className="text-dark-700 dark:text-dark-300">Available for new projects</span>
              </motion.div>
            </div>

            <motion.a
              href="#"
              className="inline-flex items-center px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white font-medium rounded-md shadow-md hover:shadow-lg transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Download size={18} className="mr-2" />
              Download Resume
            </motion.a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500 to-accent-500 transform rotate-6 rounded-2xl"></div>
              <div className="relative bg-dark-100 dark:bg-dark-800 p-6 rounded-2xl shadow-xl z-10">
                <h3 className="text-2xl font-bold text-dark-900 dark:text-white mb-4">
                  Tech <span className="text-primary-600">Expertise</span>
                </h3>
                
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-dark-700 dark:text-dark-300">Frontend Development</span>
                      <span className="text-primary-600 font-medium">90%</span>
                    </div>
                    <div className="w-full bg-dark-200 dark:bg-dark-700 rounded-full h-2">
                      <motion.div 
                        className="bg-gradient-to-r from-primary-500 to-primary-600 h-2 rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: '90%' }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 1, delay: 0.3 }}
                      ></motion.div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-dark-700 dark:text-dark-300">Backend Development</span>
                      <span className="text-primary-600 font-medium">95%</span>
                    </div>
                    <div className="w-full bg-dark-200 dark:bg-dark-700 rounded-full h-2">
                      <motion.div 
                        className="bg-gradient-to-r from-primary-500 to-primary-600 h-2 rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: '95%' }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 1, delay: 0.4 }}
                      ></motion.div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-dark-700 dark:text-dark-300">Database Management</span>
                      <span className="text-primary-600 font-medium">85%</span>
                    </div>
                    <div className="w-full bg-dark-200 dark:bg-dark-700 rounded-full h-2">
                      <motion.div 
                        className="bg-gradient-to-r from-primary-500 to-primary-600 h-2 rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: '85%' }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 1, delay: 0.5 }}
                      ></motion.div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-dark-700 dark:text-dark-300">DevOps</span>
                      <span className="text-primary-600 font-medium">80%</span>
                    </div>
                    <div className="w-full bg-dark-200 dark:bg-dark-700 rounded-full h-2">
                      <motion.div 
                        className="bg-gradient-to-r from-primary-500 to-primary-600 h-2 rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: '80%' }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 1, delay: 0.6 }}
                      ></motion.div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;