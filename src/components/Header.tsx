import Link from "next/link";
import React from "react";
import RevealingText from "./RevealingText";
import MenuItem from "./MenuItem";
import { FaLinkedin, FaInstagram , FaGithub } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { useTranslations } from "next-intl";





export default function Header() {
  const t = useTranslations("messages");
  return (
    <header className=" p-5 flex justify-between items-center shadow-md text-gray-900">
      <div className=" ">
        <Link href="/" className=" flex items-center">
          <RevealingText
            text={t('header')}
            duration={0.5}
            letterDelay={0.04}
            className="font-medium text-2xl"
          />
        </Link>
      </div>
      <div className="flex items-center gap-2">
        <MenuItem href = "https://www.linkedin.com/in/aleh223/" text="" icon = {FaLinkedin} />
        <MenuItem href= "https://github.com/remedio1" text=""icon={FaGithub} />
        <MenuItem href = "https://www.instagram.com/aleh_.araujo/" text="" icon = {FaInstagram} />
        <MenuItem href = "mailto:aleh22k1@gmail.com" text="" icon={SiGmail} />
        
        
      </div>
    </header>
  );
}
