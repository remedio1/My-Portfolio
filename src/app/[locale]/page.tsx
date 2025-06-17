import React from "react";

import Contents from "@/components/text/Contents";
import ProfileCard from "@/components/text/ProfileCard";
import SkillsText from "@/components/text/SkillsText";

import Journey from "../../components/text/Journey";
import SideContainer from "@/components/LiveElements/SideContainer";
import Projects from "@/components/text/Projects";

export default function page() {
  return (
    <div className="max-w-4xl justify-center mx-auto">
      <div className="flex justify-center mx-auto mt-5 gap-4">
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
