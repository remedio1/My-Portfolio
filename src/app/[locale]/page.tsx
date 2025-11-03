import React from "react";

import Contents from "@/components/text/Contents";

import SkillsText from "@/components/text/SkillsText";

import Journey from "../../components/text/Journey";

import Projects from "@/components/text/Projects";
import Timeline from "@/components/text/Timeline";
import Footer from "@/components/text/Footer";
import Revealer from "../../components/showing_pefil/Revealer";
import Threads from "@/components/Threads";

export default function page() {
  return (
    <div>
      <div className="top-0 left-0 w-full h-full z-[-1] fixed overflow-hidden">
        <Threads amplitude={1} distance={0} enableMouseInteraction={true} />
      </div>
      <div className="px-4 md:flex md:flex-col items-center mt-4 md:max-w-5xl md:mx-auto sm:max-w-2xl sm:mx-auto z-50">
        <Revealer />

        <Contents />
        <SkillsText />
        <Journey />
        <Projects />
        <Timeline />
        <Footer />
      </div>
    </div>
  );
}
