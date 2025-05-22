import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Code, Database, Server, 
  Layers, Search, RefreshCw, 
  Cpu, Monitor, GitBranch, 
  Settings, Layout
} from 'lucide-react';
import { skills } from '@/data/portfolio';

const Skills: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('all');
  
  const filterCategories = [
    { id: 'all', label: 'All Skills' },
    { id: 'frontend', label: 'Frontend', icon: <Monitor size={16} /> },
    { id: 'backend', label: 'Backend', icon: <Server size={16} /> },
    { id: 'database', label: 'Database', icon: <Database size={16} /> },
    { id: 'devops', label: 'DevOps', icon: <RefreshCw size={16} /> },
    { id: 'other', label: 'Other', icon: <Settings size={16} /> },
  ];

  const filteredSkills = activeTab === 'all' 
    ? skills 
    : skills.filter(skill => skill.category === activeTab);
  
  const getSkillIcon = (iconName: string) => {
    switch (iconName.toLowerCase()) {
      case 'react': return <Code className="text-[#61DAFB]" />;
      case 'vue': return <Layout className="text-[#42b883]" />;
      case 'nextjs': return <Layout className="text-dark-800 dark:text-white" />;
      case 'typescript': return <Code className="text-[#3178C6]" />;
      case 'tailwind': return <Layout className="text-[#38B2AC]" />;
      case 'laravel': return <Code className="text-[#FF2D20]" />;
      case 'nodejs': return <Server className="text-[#339933]" />;
      case 'express': return <Server className="text-gray-600 dark:text-gray-400" />;
      case 'php': return <Code className="text-[#777BB4]" />;
      case 'mysql': return <Database className="text-[#4479A1]" />;
      case 'postgresql': return <Database className="text-[#336791]" />;
      case 'mongodb': return <Database className="text-[#47A248]" />;
      case 'redis': return <Database className="text-[#DC382D]" />;
      case 'docker': return <Layers className="text-[#2496ED]" />;
      case 'kubernetes': return <Layers className="text-[#326CE5]" />;
      case 'aws': return <Cpu className="text-[#FF9900]" />;
      case 'cicd': return <RefreshCw className="text-[#40B5A4]" />;
      case 'git': return <GitBranch className="text-[#F05032]" />;
      case 'api': return <Server className="text-primary-600" />;
      case 'graphql': return <Search className="text-[#E10098]" />;
      default: return <Code className="text-primary-500" />;
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.4 }
    },
    hover: { 
      y: -5,
      boxShadow: "0 10px 20px rgba(0,0,0,0.1)",
      transition: { duration: 0.2 }
    }
  };

  return (
    <section id="skills" className="py-20 bg-dark-50 dark:bg-dark-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl font-bold text-dark-900 dark:text-white mb-2">Skills & Technologies</h2>
          <div className="w-20 h-1 bg-primary-600 mx-auto mb-6"></div>
          <p className="text-dark-600 dark:text-dark-300 max-w-3xl mx-auto">
            The technologies and tools I work with on a regular basis.
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <div className="flex justify-center mb-10 overflow-x-auto pb-2">
          <div className="inline-flex bg-white dark:bg-dark-900 p-1 rounded-lg shadow-sm">
            {filterCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveTab(category.id)}
                className={`px-4 py-2 rounded-md flex items-center text-sm transition-colors duration-200 whitespace-nowrap ${
                  activeTab === category.id
                    ? 'bg-primary-600 text-white'
                    : 'text-dark-600 dark:text-dark-300 hover:bg-dark-100 dark:hover:bg-dark-700'
                }`}
              >
                {category.icon && <span className="mr-2">{category.icon}</span>}
                {category.label}
              </button>
            ))}
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredSkills.map((skill, index) => (
            <motion.div
              key={skill.name}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              whileHover="hover"
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: index * 0.05 }}
              className="bg-white dark:bg-dark-900 rounded-xl p-6 shadow-md flex flex-col items-center"
            >
              <div className="w-12 h-12 mb-4 flex items-center justify-center">
                {getSkillIcon(skill.icon)}
              </div>
              
              <h3 className="text-lg font-semibold text-dark-900 dark:text-white mb-2">{skill.name}</h3>
              
              <div className="w-full bg-dark-200 dark:bg-dark-700 h-2 rounded-full overflow-hidden">
                <motion.div 
                  className="h-full bg-primary-600"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.proficiency}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.2 }}
                ></motion.div>
              </div>
              
              <p className="mt-2 text-sm text-primary-600 font-medium">
                {skill.proficiency}%
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;