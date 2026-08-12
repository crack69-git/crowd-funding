import SideBar from "@/components/Dashboard/SideBar";
import React from "react";

const layout = ({ children }) => {
  return (
    <div className="flex gap-4">
      <aside className="w-64 h-screen bg-gray-100 p-4">
        <SideBar></SideBar>
      </aside>
      <main>{children}</main>
    </div>
  );
};

export default layout;
