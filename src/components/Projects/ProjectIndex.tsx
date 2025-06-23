"use client";

import { useTranslations } from "next-intl";
import { Project } from "./ProjectData";
import { motion, AnimatePresence } from "framer-motion";

interface ProjectProps {
  projects: Project;
}
 

export default function ProjectIndex({ projects }: ProjectProps)  {
  const itemVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },

    transition: { duration: 2, ease: "easeInOut", delay: 0.6 },
  };
  const t = useTranslations('projects')
  return (
    <AnimatePresence>
      <motion.div
        key={projects.title}
        variants={itemVariants}
        className="bg-gray-50 hover:bg-gray-100 transition-colors duration-300 p-6 rounded-lg shadow-lg "
      >
        <h2 className="text-2xl font-bold mb-4 text-gray-700 hover:text-gray-900">{projects.title}</h2>
        <p className="text-gray-700 mb-2">{projects.description}</p>
        <p className="text-gray-500 mb-4">{projects.technologies}</p>
        <a
          href={projects.link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline"
        >
          {t('header.call-up')}
        </a>
      </motion.div>
    </AnimatePresence>
  );
}