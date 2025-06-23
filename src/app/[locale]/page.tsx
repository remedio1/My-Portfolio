import React from "react";

import Contents from "@/components/text/Contents";
import ProfileCard from "@/components/text/ProfileCard";
import SkillsText from "@/components/text/SkillsText";

import Journey from "../../components/text/Journey";
import SideContainer from "@/components/LiveElements/SideContainer";
import Projects from "@/components/text/Projects";

export default function page() {
  return (
    <div className="  md:max-w-5xl sm:max-w-2xl flex flex-col items-center justify-center min-h-screen md:mx-auto px-5">
      <div className="md:flex md:flex-row justify-center md:mt-4 md:gap-4 ">
        <ProfileCard />
        
        <SideContainer />


      </div>
      <Contents />
      <SkillsText />
      <Journey />
      <Projects/>
    </div>
  );
}
