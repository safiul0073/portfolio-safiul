import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, ArrowUpRight, Download, Mail, MapPin } from 'lucide-react';
import Image from 'next/image';
import { personalInfo } from '@/data/portfolio';
import profileImage from '@/profile.png';

const Hero: React.FC = () => {
  const metrics = [
    { value: '4+', label: 'Years Experience' },
    { value: '13', label: 'Portfolio Projects' },
    { value: '11', label: 'Developers Led' },
  ];

  return (
    <section 
      id="hero" 
      className="relative flex min-h-screen items-center overflow-hidden bg-white pt-24 pb-16 dark:bg-dark-950"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-x-0 top-24 h-px bg-dark-200 dark:bg-dark-800" />
        <div className="absolute left-0 top-0 h-full w-full bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:64px_64px] opacity-20 dark:bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)]" />
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="order-2 lg:order-1"
          >
            <div className="max-w-3xl space-y-6">
              <motion.div 
                className="inline-flex items-center gap-2 rounded-md border border-dark-200 bg-dark-50 px-3 py-2 text-sm font-medium text-dark-700 dark:border-dark-800 dark:bg-dark-900 dark:text-dark-300"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                <span className="h-2 w-2 rounded-full bg-primary-600" />
                {personalInfo.title}
              </motion.div>
              
              <motion.h1 
                className="text-4xl font-bold leading-tight text-dark-950 dark:text-white md:text-5xl lg:text-6xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
              >
                Hi, I&apos;m <span className="text-primary-600">{personalInfo.name}</span>
              </motion.h1>
              
              <motion.p 
                className="max-w-2xl text-lg leading-8 text-dark-600 dark:text-dark-300 md:text-xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                {personalInfo.bio}
              </motion.p>

              <motion.div
                className="flex flex-wrap gap-4 text-sm text-dark-600 dark:text-dark-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.42, duration: 0.6 }}
              >
                <span className="inline-flex items-center gap-2">
                  <MapPin size={17} className="text-primary-600" />
                  {personalInfo.location}
                </span>
                <a href={`mailto:${personalInfo.email}`} className="inline-flex items-center gap-2 transition-colors hover:text-primary-600">
                  <Mail size={17} className="text-primary-600" />
                  {personalInfo.email}
                </a>
              </motion.div>

              <motion.div
                className="grid max-w-2xl gap-3 sm:grid-cols-3"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.45, duration: 0.6 }}
              >
                {metrics.map((metric) => (
                  <div key={metric.label} className="rounded-lg border border-dark-200 bg-white p-4 shadow-sm dark:border-dark-800 dark:bg-dark-900">
                    <p className="text-2xl font-bold text-dark-950 dark:text-white">{metric.value}</p>
                    <p className="mt-1 text-sm leading-5 text-dark-500 dark:text-dark-400">{metric.label}</p>
                  </div>
                ))}
              </motion.div>
              
              <motion.div 
                className="flex flex-wrap gap-4 pt-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
              >
                <motion.a
                  href="#projects"
                  className="inline-flex items-center rounded-md bg-primary-600 px-6 py-3 font-medium text-white shadow-md transition-all hover:bg-primary-700 hover:shadow-lg"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View Portfolio
                  <ArrowUpRight size={18} className="ml-2" />
                </motion.a>
                
                <motion.a
                  href="/safiul_cv.pdf"
                  className="rounded-md border border-dark-200 bg-white px-6 py-3 font-medium text-dark-800 shadow-sm transition-all hover:bg-dark-100 hover:shadow-md dark:border-dark-700 dark:bg-dark-800 dark:text-white dark:hover:bg-dark-700"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Download Resume
                  <Download size={18} className="ml-2 inline" />
                </motion.a>
              </motion.div>
            </div>
          </motion.div>
          
          <motion.div 
            className="order-1 flex justify-center lg:order-2"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <div className="relative w-full max-w-sm sm:max-w-md">
              <div className="absolute -inset-4 rounded-full border border-primary-100 dark:border-primary-900/50" />
              <div className="relative overflow-hidden rounded-full border-8 border-white bg-dark-100 shadow-2xl shadow-dark-900/10 dark:border-dark-800 dark:bg-dark-900">
                <Image
                  src={profileImage}
                  alt={`${personalInfo.name} profile photo`}
                  priority
                  className="aspect-square h-full w-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 left-1/2 w-[88%] -translate-x-1/2 rounded-lg border border-dark-200 bg-white px-5 py-4 text-center shadow-lg dark:border-dark-700 dark:bg-dark-900">
                <p className="text-lg font-bold text-dark-950 dark:text-white">{personalInfo.name}</p>
                <p className="mt-1 text-sm text-dark-500 dark:text-dark-400">Laravel | Next.js | React | Vue</p>
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
