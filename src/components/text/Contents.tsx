"use client";
import React from "react";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

export default function Contents() {
  const t = useTranslations("profile");
  return (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-md mt-4 overflow-hidden md:max-w-3xl">
      <div className="text-gray-900 relative p-6">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {
              opacity: 0,
            },
            visible: {
              opacity: 1,
              transition: {
                duration: 1,
                ease: "easeInOut",
              },
            },
          }}
        >
          <h2 className=" font-extrabold text-size">{t('whatido')}</h2>
        </motion.div>
        <motion.div className="mt-2 max-w-md text-gray-600  md:max-w-2xl"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {
              opacity: 0,
              y: 0,
            },
            visible: {
              opacity: 1,
              y: 0,
              transition: {
                duration: 1.5,
                ease: "easeInOut",
              },
            },
          }}>
        {t('about')}
      </motion.div>
      <div className="mt-2 flex flex-col sm:flex-row gap-2">
        <motion.div className="div mt-2 ">
          <button className=" flex gap-2">
            <a
              href="#contato"
              className="bg-cyan-800 hover:bg-cyan-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              {t('contact')}
            </a>
            <a
              href="#projetos"
              className="bg-cyan-800 hover:bg-cyan-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              {t('projects')}
            </a>
          </button>
        </motion.div>
      </div>
      </div>
      
    </div>
  );
}
