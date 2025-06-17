"use client";
import React from "react";
import SkillsGallery from "../skill/SkillsGallery";
import SoftGallery from "../skill/SoftGallery";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

export default function SkillsText() {
  const containerVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        
        
      },
    },
  };

  const t = useTranslations("Skills");
  return (
    <div className=" mx-auto bg-white rounded-xl shadow-md mt-4   p-6  ">
      <motion.div
        initial="hidden"
        variants={containerVariants}
        whileInView={"visible"}
        viewport={{ once: true, amount: 0.4 }}
        className="text-size font-bold text-gray-900 mb-1 "
      >
        {t("header.hardskill")}
      </motion.div>
      <div className="flex ">
        <SkillsGallery />
      </div>

      <motion.div
        initial="hidden"
        variants={containerVariants}
        whileInView={"visible"}
        viewport={{ once: true, amount: 0.4 }}
        className="text-size font-bold text-gray-900 "
      >
        {t("header.softskills")}
      </motion.div>
      <div className="">
        <SoftGallery />
      </div>
    </div>
  );
}
