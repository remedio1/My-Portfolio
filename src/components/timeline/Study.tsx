'use client'
import { motion } from "framer-motion";
import React from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";


export default function Study() {

  const t = useTranslations("Education");

  const Uamicon = () => <Image src= "/uam.jpg" alt="icon" width={50} height={50}></Image>

  const timedata = [
    {
      icon: <Uamicon />,
      name: t("name"),
      date: t("date"),
      title: t("title"),
      description: "",
      details: [],
    },
  ];

  const containerVariants = {
    hidden: {
      opacity: 0,
    },
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
    <div className=" rounded-xl border-s border-gray-400">
    <motion.ol
      className="border-s border-gray-600 relative"
      initial="hidden"
      variants={containerVariants}
      whileInView={"visible"}
      viewport={{ once: true, amount: 0.4 }}
    >
      {timedata.map((item, index) => (
        <motion.li
          className="mb-10 ms-12"
          variants={itemVariants}
          transition={{ type: "spring", stiffness: 100 }}
          key={index}
        >
          <span>
            {item.icon}
          </span>
            <div>
              <span>
                {item.date}
              </span>
            </div>
        </motion.li>
      ))}
    </motion.ol>
    </div>
  );
}
