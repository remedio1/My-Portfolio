"use client";
import React from "react";
import { motion } from "framer-motion";

export default function Contents() {
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
          <h2 className=" font-extrabold text-size">Eu construo soluções para a web e para o mundo.</h2>
        </motion.div>
        <div className="mt-2 max-w-md text-gray-600  md:max-w-2xl">
        Sou um estudante de Ciência da Computação e Estagiário de Digital &
        Automação na Siemens Healthineers, apaixonado por transformar problemas
        complexos em software funcional e intuitivo. Minha jornada na tecnologia
        é movida pela curiosidade e pelo desejo de sempre aprender algo novo.
      </div>
      <div className="mt-2 flex flex-col sm:flex-row gap-2">
        <button>
          ola
        </button>
        <button>
          ola
        </button>
      </div>
      </div>
      
    </div>
  );
}
