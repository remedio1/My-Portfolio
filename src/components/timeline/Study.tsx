"use client";
import { motion } from "framer-motion";
import React from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";

export default function Study() {
  const t = useTranslations("Education");

  const Uamicon = () => (
    <Image
      src="/uam.jpg"
      alt="icon"
      width={50}
      height={50}
      className="rounded-full"
    ></Image>
  );

  const timedata = [
    {
      icon: <Uamicon />,
      name: t("name"),
      date: t("date"),
      title: t("title"),
      details: t.raw("description"),
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
    <motion.ol
      className="relative border-s border-gray-700"
      initial="hidden"
      variants={containerVariants}
      whileInView={"visible"}
      viewport={{ once: true, amount: 0.4 }}
    >
      {timedata.map((item, index) => (
        <motion.li
          className="mb-10 ms-12 relative"
          variants={itemVariants}
          transition={{ type: "spring", stiffness: 100 }}
          key={index}
        >
          <span className="absolute -left-8 top-1 flex h-10 w-10 items-center justify-center rounded-full bg-blue-900  ring-4 ring-gray-900 overflow-hidden">
            {item.icon}
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
              {item.details.map((desc: string, i: number) => (
                <li key={i} className="font-semibold text-gray-700 text-sm">
                  {desc}
                </li>
              ))}
            </ul>
            
          </div>
        </motion.li>
      ))}
    </motion.ol>
  );
}
