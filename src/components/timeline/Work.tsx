import React from "react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { motion } from "framer-motion";
import { WorkData } from "./WorkData";

// Defina seus componentes de ícone fora do componente principal para evitar recriações
const Viamobicon = () => (
  <Image
    src="/viamob.jpg"
    alt="Logo Via Mobilidade"
    width={50}
    height={50}
    className="rounded-full"
    key={"Viamobicon"}
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
    key={"Siemensicon"}
  />
);
const iconMap: { [key: string]: React.ReactNode } = {
  Viamobicon: <Viamobicon />,
  SiemensIcon: <SiemensIcon />,
};

export default function Work() {
  const t = useTranslations("Work");

  interface Data {
  icon: string;
  title: string;
  description: string[];
  name: string;
  date: string;
}

  const timedata: Data[] = WorkData.map((work) => ({
    icon: work.icon,
    title: t(work.title),
    description: t.raw(work.description) as string[],
    name: t(work.name),
    date: t(work.date),
  }));

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
      className="relative border-s border-gray-700"
      initial="hidden"
      variants={containerVariants}
      whileInView={"visible"}
      viewport={{ once: true, amount: 0.2 }}
    >
      {timedata.map((item, index) => (
        <motion.div
          className="mb-10 ms-12 relative"
          variants={itemVariants}
          transition={{ type: "spring", stiffness: 100 }}
          key={index}
        >
          <span className="absolute -left-8 top-1 h-10 w-10 items-center justify-center rounded-full bg-blue-900 ring-4 ring-gray-900 overflow-hidden">
            {iconMap[item.icon]}
          </span>
          <div className="flex flex-col px-6">
            <span className="text-gray-500 text-sm font-medium mb-1 leading-none">
              {item.date}
            </span>
            <h3 className="-mt-2">{item.title}</h3>
            <p className="text-sm text-gray-500 font-medium -mt-1">
              {item.name}
            </p>
            <ul className="list-disc px-5"> 
              {item.description.map((desc : string, i : number) => (
                <li key={i} className="font-semibold text-gray-700 text-sm">
                  {desc}
                </li>
              ))}
            
            </ul>
          </div>
        </motion.div>
      ))}
    </motion.ol>
  );
}
