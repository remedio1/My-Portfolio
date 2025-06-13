"use client";
import React from "react";
import { motion } from "framer-motion";
import { Skill } from "./Skilldata";

// Define the props for the Skills component
interface SkillsProps {
  skill: Skill;
}

// Variants for the motion animation
const itemVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  transition: { duration: 0.5, ease: "easeInOut" },
};

export function SkillsIcon({ skill }: SkillsProps) {
  const { name, Icon,  } = skill;
  return (
    <motion.div
      variants={itemVariants}
      className="flex-col flex items-center p-3 rounded-lg"
      //hover
      whileHover={{ scale: 1.3, transition: { duration: 0.3 } }}
    >
      <Icon className="text-2xl md:text-4xl text-amber-500 items-center" />

      <p className="text-sm font-medium text-gray-800">{name}</p>
    </motion.div>
  );
}
