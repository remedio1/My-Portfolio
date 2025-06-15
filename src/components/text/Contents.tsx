"use client";
import React from "react";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

export default function Contents() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5, // Duração da transição do contêiner
        
        staggerChildren: 0.2,
        delay: 0.2,
      },
    },
  };

  // Definindo as variantes para os itens filhos
const itemVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, 
    y: 0, // Animação de entrada
    transition: {
      duration: 0.5, // Duração da transição de cada item
      
       // Atraso para cada item aparecer após o contêiner
    },
  },

  transition: { duration: 2, ease: "easeInOut" },
};


  const t = useTranslations("profile");
  const aboutTextLines = t("about")
    .split("\n")
    .filter((line) => line.trim() !== "");

  return (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-md mt-4 overflow-hidden md:max-w-3xl">
      <div className="text-gray-900 relative p-6">
        <motion.div
          initial="hidden"
          animate="visible" // Ou whileInView="visible" se quiser animar ao rolar
          variants={containerVariants}
        >
          {/* Título: Será animado como um filho direto do container */}
          <h2
            className="font-extrabold text-size"
            
          >
            {t("whatido")}
          </h2>

          {/* Texto 'About': Cada linha será um motion.p para ter o efeito cascata */}
          <div className="mt-2 max-w-md text-gray-600 md:max-w-2xl">
            {aboutTextLines.map((line, index) => (
              <motion.p key={index} variants={itemVariants} className="mb-2">
                {line}
              </motion.p>
            ))}
          </div>

          {/* Botões: O div dos botões será animado como um filho direto do container */}
          <div
            className="mt-2 flex flex-col sm:flex-row gap-2"
          >
            <div className="div mt-2">
              <button className="flex gap-2">
                <a
                  href="#contato"
                  className="bg-cyan-800 hover:bg-cyan-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                  {t("contact")}
                </a>
                <a
                  href="#projetos"
                  className="bg-cyan-800 hover:bg-cyan-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                  {t("projects")}
                </a>
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
