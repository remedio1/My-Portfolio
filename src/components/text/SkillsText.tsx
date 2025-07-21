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
    <div className="bg-white rounded-xl shadow-md mt-2 md:p-6 p-4 container ">
      <div className="">
        <motion.div
          initial="hidden"
          variants={containerVariants}
          whileInView={"visible"}
          viewport={{ once: true, amount: 0.4 }}
          className="text-size font-bold text-gray-900 mb-1 "
        >
          {t("header.hardskill")}
        </motion.div>
        <div >
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
        <SoftGallery />
      </div>
    </div>
  );
}
