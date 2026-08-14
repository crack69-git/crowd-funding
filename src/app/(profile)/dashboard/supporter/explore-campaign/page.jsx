import ExploreCampaign from "@/components/Dashboard/SupporterSection/ExploreCampaign";
import { Separator } from "@heroui/react";
import React from "react";

const page = () => {
  return (
    <div className="w-11/12 mx-auto my-5">
      <h2 className="text-2xl font-bold">Explore Campaign</h2>
      <p className="text-gray-600">
        Explore various campaigns and find the ones that interest you.
      </p>
      <Separator className="my-5" />
      <div>
        <ExploreCampaign />
      </div>
    </div>
  );
};

export default page;
