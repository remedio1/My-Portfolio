import React from "react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { motion } from "framer-motion";

// Defina seus componentes de ícone fora do componente principal para evitar recriações
const Viamobicon = () => (
  <Image
    src="/viamob.jpg"
    alt="Logo Via Mobilidade"
    width={50}
    height={50}
    className="rounded-full"
  />
);

const SiemensIcon = () => (
  <Image
    // Corrigi o caminho da imagem para um exemplo, ajuste para o seu arquivo real
    src="/siemens.png" 
    alt="Logo Siemens Healthineers"
    width={50}
    height={50}
    className="rounded-full"
  />
);


export default function Work() {
  const t = useTranslations("Work");

  // 1. Crie um array com as chaves na ordem que você quer exibir
  //    Isso te dá controle total sobre a ordenação das experiências.
  const experienceKeys = ["SiemensHealthineers", "Escalante", "JovemAprendiz"];

  const getIcon = (experienceKey: string) => {
    switch (experienceKey) {
      case "SiemensHealthineers":
        return <SiemensIcon />;
      case "JovemAprendiz":
      case "Escalante":
        return <Viamobicon />;
      default:
        return null; 
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <motion.ol
      className="border-s border-gray-700 relative"
      initial="hidden"
      whileInView={"visible"}
      viewport={{ once: true, amount: 0.2 }} // Ajustei o amount para iniciar a animação um pouco antes
      variants={containerVariants}
    >
      {/* 2. Faça o map no array de chaves */}
      {experienceKeys.map((key) => (
        <motion.li
          key={key} // Use a chave da experiência como key, é única e estável
          className="mb-10 ms-12" // Removi o `relative` daqui, não parecia necessário
          variants={itemVariants}
          // A transição pode ficar nas variantes do item para ser mais consistente
          transition={{ type: "spring", stiffness: 100 }}
        >
          <span className="absolute -left-5 top-0 flex h-10 w-10 items-center justify-center rounded-full bg-blue-900 ring-4 ring-gray-900 overflow-hidden">
            {/* 3. Chame a função getIcon com a chave atual */}
            {getIcon(key)}
          </span>
          
          {/* 4. Busque os dados traduzidos usando a chave (key) */}
          <h3 className="flex items-center mb-1 text-lg font-semibold text-white">
            {t(`${key}.title`)}
            <span className="text-gray-400 font-normal text-base mx-2">@</span>
            {t(`${key}.name`)}
          </h3>
          <time className="block mb-2 text-sm font-normal leading-none text-gray-500">
            {t(`${key}.date`)}
          </time>
          <ul className="list-disc pl-5 space-y-1 text-gray-400">
             {/* 5. Para iterar sobre a descrição, que é um array no JSON,
                  você pode fazer um loop. Assumindo que sempre há 4 itens.
                  Se a quantidade variar, será necessário um ajuste no seu arquivo de tradução.
             */}
            {[0, 1, 2, 3].map(index => (
              <li key={index}>
                {t(`${key}.description.${index}`)}
              </li>
            ))}
          </ul>
        </motion.li>
      ))}
    </motion.ol>
  );
}