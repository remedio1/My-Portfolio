import Link from "next/link";
import React from "react";
import RevealingText from "./RevealingText";

export default function Header() {
  return (
    <header className=" text-gray-950 shadow-md">
      <div className="flex items-center  p-5 bg-gray-50  ">
        <Link href="/" className=" flex items-center">
        
          <RevealingText
            text="My Portfolio"
            duration={0.5}
            letterDelay={0.04}
            className="font-medium text-2xl"
            
          />
        
        </Link>
      </div>
    </header>
  );
}
