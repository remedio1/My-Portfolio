// app/page.tsx ou onde você for listar as habilidades

'use client'; // Necessário pois estamos usando um hook

import { useTranslations } from 'next-intl';
import SoftModal from './softModal';
import { skillsKeys, Skill } from "./SoftData";
import { motion } from 'framer-motion';

export default function HomePage() {
  // 1. Chame o Hook DENTRO do componente. Esta é a forma correta.
  const t = useTranslations('Skills');

  // 2. Transforme o array de chaves em um array de dados traduzidos.
  //    Esta lógica roda toda vez que o componente renderiza.
  const translatedSkills: Skill[] = skillsKeys.map(skillKey => ({
    name: t(skillKey.nameKey),
    description: t(skillKey.descriptionKey),
  }));

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

  return (
  <motion.div
  variants={containerVariants}
      initial="hidden"
      whileInView={"visible"}
      viewport={{ once: true, amount: 0.4 }} >
    <main className="p-4 flex-col items-center">
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 flex-col items-center">
        {/* array já traduzido para renderizar os cards */}
        {translatedSkills.map((skill) => (
          <SoftModal key={skill.name} skill={skill} />
        ))}
      </div>
    </main>
</motion.div>
  );
}