"use client";
import { formTypes } from "@/app/api/projects/route";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
const Projects = () => {
  const [projects, setProjects] = useState<formTypes[]>([]);

  useEffect(() => {
    const getProject = async () => {
      const res = await fetch("/api/projects");
      const data = await res.json();
      setProjects(data);
    };

    getProject();
  }, []);
  return (
    <section id="projects" className="bg-gray-100 py-12">
      <div className="container mx-auto p-8">
        <h2 className="text-3xl font-bold mb-6">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects?.map((project, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.5 }}
              className="bg-white p-6 rounded-lg shadow-md cursor-pointer"
            >
              <h3 className="text-2xl font-semibold mb-2">{project.name}</h3>
              <p className="text-[11px] font-medium text-gray-700 mb-2">Stacks: {project.stacks}</p>
              <ol className="list-disc list-inside">
              {
                project.short_list?.map((text, index) => (
                  <li key={index} className="text-gray-700 mb-2">{text}</li>
                ))
              }
              </ol>
              <div className="flex justify-between items-center">
                <a
                  href={project.website}
                  className="text-blue-500 hover:text-blue-700"
                >
                  Visit
                </a>
                <a
                  href={project.repository}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:text-blue-700 cursor-pointer"
                >
                  Git Repo
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
