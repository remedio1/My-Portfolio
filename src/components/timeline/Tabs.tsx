"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslations } from "next-intl";
import Study from '@/components/timeline/Study';
import Work from '@/components/timeline/Work';




export function Tabs() {

  const t = useTranslations("Timeline");

  const tabs = [
  { id: "educacao", label: t("educaçao") },
  { id: "trabalho", label: t("trabalho") }
];

  const [activeTab, setActiveTab] = useState(tabs[0].id);

  return (
    <div className="w-full mx-auto">
      <div className="flex rounded-full space-x-1 p-1 bg-gray-600">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`w-full relative rounded-full px-4 py-2 text-sm font-medium transition ${
              activeTab === tab.id
                ? "text-white"
                : "text-gray-400 hover:text-white/60"
            }`}
          >
            {activeTab === tab.id && (
              <motion.div
                layoutId="active-pill"
                className="absolute inset-0 bg-gray-950 rounded-full"
                transition={{ type: "spring", duration: 0.6 }}
              />
            )}
            <span className="relative z-10">{tab.label}</span>
          </button>
        ))}
      </div>
      <div className="mt-6">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -10, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="relative items-center px-2 flex"
          >
            {activeTab === "educacao" && <Study />}
            {activeTab === "trabalho" && <Work />}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
