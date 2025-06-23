"use client";
import { useTranslations } from "next-intl";
import React from "react";
import { ProjectKeys, Project } from "./ProjectData";
import ProjectIndex from "./ProjectIndex";
import { motion } from "framer-motion";

export default function ProjectGallery() {
  const t = useTranslations("projects");

  const containerVariants = {
    hidden: {
      opacity: 0,
      transition: {
        staggerChildren: 0.1,
      },
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const TranslatedMaps: Project[] = ProjectKeys.map((projectKey) => ({
    title: t(projectKey.title),
    description: t(projectKey.description),
    technologies: t.raw(projectKey.technologies).join(", "),
    link: t(projectKey.link),
  }));

  return (
    <motion.div 
    variants={containerVariants}
      initial="hidden"
      whileInView={"visible"}
      viewport={{ once: true, amount: 0.4 }}
    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
      
      {TranslatedMaps.map((project) => (
        <ProjectIndex key={project.title} projects={project} />
      ))}
    </motion.div>
  );
}
