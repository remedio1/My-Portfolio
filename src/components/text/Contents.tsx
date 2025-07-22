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
        duration: 1, // Duração da transição do contêiner

        staggerChildren: 0.2,
      },
    },
  };

  // Definindo as variantes para os itens filhos
  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0, // Animação de entrada
      transition: {
        duration: 0.5,
        delay: 0.3, // Duração da transição de cada item

        // Atraso para cada item aparecer após o contêiner
      },
    },

    transition: { duration: 2, ease: "easeInOut" },
  };

  const t = useTranslations("profile");

  return (
    <div className=" bg-white rounded-xl shadow-md mt-2 overflow-hidden container ">
      <div className="text-gray-900 relative md:p-6 p-4">
        <motion.div
          initial="hidden"
          whileInView={"visible"} // Ou whileInView="visible" se quiser animar ao rolar
          variants={containerVariants}
          viewport={{ once: true, amount: 0.4 }}
        >
          {/* Título: Será animado como um filho direto do container */}
          <motion.h2
            variants={itemVariants}
            className="font-extrabold text-size"
          >
            {t("whatido")}
          </motion.h2>

          {/* Texto 'About': Cada linha será um motion.p para ter o efeito cascata */}
          <div className="mt-2 text-gray-600 ">
            <motion.p variants={itemVariants} className="mb-2">
              {t("about")}
            </motion.p>
          </div>

          {/* Botões: O div dos botões será animado como um filho direto do container */}
          <div className="mt-2 flex flex-col sm:flex-row gap-2">
            <motion.div variants={itemVariants} className="div mt-2">
              <button className="flex gap-2">
                <a
                  href="https://wa.me/+5511994505618"
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
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
