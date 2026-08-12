import { Separator } from "@heroui/react";
import React from "react";

const ImpactSection = () => {
  return (
    <div className="bg-emerald-700 text-white py-16 px-4 sm:px-6 lg:px-8 ">
      <div className="max-w-6xl mx-auto text-center ">
        <h2 className="text-4xl font-bold">Platform Impact</h2>
        <p className="font-semibold text-lg">Collective Power of Community</p>
      </div>
      <div className="flex justify-center items-center gap-10 text-center mt-12 ">
        <div>
          <p className="text-4xl font-bold">$42M+</p>
          <p className="font-semibold text-green-300">Total Funds Raised</p>
        </div>
        <Separator orientation="vertical" className="" />
        <div>
          <p className="text-4xl font-bold">10,000+</p>
          <p className="font-semibold text-green-300">Active Campaigns</p>
        </div>
        <Separator orientation="vertical" className="" />
        <div>
          <p className="text-4xl font-bold">500+</p>
          <p className="font-semibold text-green-300">Community Members</p>
        </div>
      </div>
    </div>
  );
};

export default ImpactSection;
