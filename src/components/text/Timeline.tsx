import React from "react";
import { Tabs } from "../timeline/Tabs";

export default function Timeline() {
  return (
    <div className="bg-white rounded-lg shadow-md mt-2 p-6 container">
      <div className="text-size text-gray-900 font-bold gap-2 flex justify-between rounded-lg ">
        
        <Tabs/>
      </div>
    </div>
  );
}
