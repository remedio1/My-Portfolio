import React from "react";
import ProfileCard from "../text/ProfileCard";
import SideContainer from "../LiveElements/SideContainer";

export default function Revealer() {
  return (
    <div className="md:flex md:flex-row md:gap-2 ">
      <ProfileCard />

      <SideContainer />
    </div>
  );
}
