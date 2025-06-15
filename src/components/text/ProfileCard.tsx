'use client';
import Image from "next/image";
import {useTranslations} from 'next-intl';
import { motion } from "framer-motion";


export default function ProfileCard() {
  const t = useTranslations('profile');

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
    <div 
    className="max-w-md mx-auto bg-white rounded-xl shadow-md  mt-5 overflow-hidden md:max-w-3xl">
      
    <motion.div
    variants={containerVariants}
    initial="hidden"
    animate="visible"
    whileInView="visible" >
      <div 
      
      className=" w-full h-52 relative overflow-hidden">
        <Image
          src={"/amba.png"}
          alt="Background Image"
          fill
          className="object-cover"
          quality={100}
        ></Image>
      </div>
      <div className="relative p-6">
        <div className="absolute -top-36 left-6">
          <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-white shadow-lg">
            <Image
              src={"/eu.png"}
              alt="Profile Image"
              className="object-cover w-full h-full"
              width={192}
              height={192}
              quality={100}
            />
          </div>
        </div>
        <div className="pt-10">
            <h2 className="text-2xl font-semibold text-gray-900">Alexandre Ferreira de Araújo</h2>
            <p className="text-gray-600 ">{t('bio')}</p>
            <p className="mt-1 text-gray-400">
              {t('local')}
            </p>
        </div>
      </div>
      </motion.div>
    </div>
  );
}
