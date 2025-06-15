'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { skillsData } from './Skilldata';
import { SkillsIcon } from './Skills';

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

export default function SkillsGallery() {
  return (
    <motion.div
      className="flex items-center "
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {skillsData.map((skill) => (
        <SkillsIcon key={skill.name} skill={skill} />
      ))}
    </motion.div>
  );
}