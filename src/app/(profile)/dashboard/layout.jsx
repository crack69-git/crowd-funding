import SideBar from "@/components/Dashboard/SideBar";
import React from "react";

const layout = ({ children }) => {
  return (
    <div className="flex">
      <aside className="w-64 h-screen bg-gray-100 border-r">
        <SideBar></SideBar>
      </aside>
      <main className="flex-1 ">{children}</main>
    </div>
  );
};

export default layout;
