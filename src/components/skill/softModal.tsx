// components/SkillCard.tsx
"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Skill } from "./SoftData";

interface SkillCardProps {
  skill: Skill;
}

const SkillCard = ({ skill }: SkillCardProps) => {
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  const togglePopover = () => setIsPopoverOpen(!isPopoverOpen);
  const closePopover = () => setIsPopoverOpen(false);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (cardRef.current && !cardRef.current.contains(event.target as Node)) {
        closePopover();
      }
    };
    if (isPopoverOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isPopoverOpen]);

  // Define a cor base e a cor quando o popover está aberto
  const baseBgColor = "bg-cyan-900 dark:bg:cyan-900";
  const hoverBgColor = "hover:bg-cyan-800 hover:dark:bg:cyan-800";
  const activeBgColor = "bg-cyan-700 dark:bg:cyan-700";

  const itemVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },

    transition: { duration: 2, ease: "easeInOut", delay: 0.6 },
  };

  return (
    <div ref={cardRef} className="relative w-full h-full">
      <motion.div
        whileHover={{ scale: 1.05 }}
        variants={itemVariants}
        onClick={togglePopover}
        // Aplica a cor ativa condicionalmente
        className={`p-4 text-white rounded-lg shadow-md cursor-pointer transition-colors w-full h-full flex items-center justify-center  text-center ${
          isPopoverOpen ? activeBgColor : `${baseBgColor} ${hoverBgColor}`
        }`}
      >
        <p className="font-semibold">{skill.name}</p>
      </motion.div>

      <AnimatePresence>
        {isPopoverOpen && (
          // O popover em si. Note o z-index alto.
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.15, ease: "easeInOut" }}
            // Aumentamos o z-index para garantir que fique na frente
            // Posicionado abaixo do card com um pequeno espaço
            className="absolute bottom-full left-1/2 -translate-x-1/2 -translate-y-3 mt-2 bg-gray-800 dark:bg-gray-800 border border-gray-700 dark:border-gray-700 rounded-md shadow-lg z-30 w-64"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-4 text-white dark:text-gray-200 text-sm">
              {skill.description}
            </div>
            <button
              onClick={closePopover}
              className="block w-full text-center py-2 text-blue-400 hover:bg-gray-700 dark:hover:bg-gray-700 rounded-b-md text-sm"
            >
              Fechar
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SkillCard;
