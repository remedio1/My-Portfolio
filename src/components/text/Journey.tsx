"use client";
import React from "react";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

export default function Journey() {
  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15, // Atraso de 0.15 segundos entre cada item filho (parágrafo)
        delayChildren: 0.2, // Atraso inicial antes de começar a animar os filhos
      },
    },
  };

  // 2. Variantes para cada parágrafo (slide in da esquerda e fade in)
  const paragraphVariants = {
    hidden: { opacity: 0, x: -50 }, // Começa invisível e 50px à esquerda
    visible: {
      opacity: 1,
      x: 0, // Desliza para a posição original
      transition: {
        duration: 0.8, // Duração da animação de cada parágrafo
        // Tipo de easing para o movimento
      },
    },
  };

  const t = useTranslations("journey");
  const paragraphs = t.raw("paragraphs");

  return (
    <div className="  bg-white rounded-xl shadow-md mt-2 overflow-hidden container">
      <div className="p-6">
        <motion.section
          className=""
          id="minha jornada"
          initial="hidden"
          variants={sectionVariants}
          whileInView={"visible"}
          viewport={{ once: true, amount: 0.4 }}
        >
          <motion.h2
            className="div text-size font-bold text-gray-900"
            variants={paragraphVariants}
          >
            {t("title")}
          </motion.h2>
          <div className=" text-gray-900 mt-3">
            {paragraphs.map((paragraphs: string, index: number) => (
              <motion.p className="" variants={paragraphVariants} key={index}>
                {paragraphs}
              </motion.p>
            ))}
          </div>
        </motion.section>
      </div>
    </div>
  );
}
