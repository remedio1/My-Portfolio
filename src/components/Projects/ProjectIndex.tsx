"use client";

import { Project } from "./ProjectData";
import { motion, AnimatePresence } from "framer-motion";

interface ProjectProps {
  projects: Project;
}
 

export default function ProjectIndex({ projects }: ProjectProps)  {
  return (
    <AnimatePresence>
      <motion.div
        key={projects.title}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5 }}
        className="bg-white p-6 rounded-lg shadow-lg"
      >
        <h2 className="text-2xl font-bold mb-4">{projects.title}</h2>
        <p className="text-gray-700 mb-4">{projects.description}</p>
        <p className="text-gray-500 mb-4">{projects.technologies}</p>
        <a
          href={projects.link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline"
        >
          View Project
        </a>
      </motion.div>
    </AnimatePresence>
  );
}