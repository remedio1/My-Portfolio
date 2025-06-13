import {
  SiJavascript,
  SiTypescript,
  SiMysql,
  SiNextdotjs,
  SiTailwindcss,
} from "react-icons/si";

import { IconType } from "react-icons";

export interface Skill {
  name: string;
  Icon: IconType;
  color: string;
}

export const skillsData: Skill[] = [
  {
    name: "JavaScript",
    Icon: SiJavascript,
    color: "text-yellow-500",
  },
  {
    name: "TypeScript",
    Icon: SiTypescript,
    color: "text-blue-600",
  },
  {
    name: "MySQL",
    Icon: SiMysql,
    color: "text-blue-800",
  },
  {
    name: "Next.js",
    Icon: SiNextdotjs,
    color: "text-gray-900",
  },
  {
    name: "Tailwind CSS",
    Icon: SiTailwindcss,
    color: "text-cyan-500",
  },
];
