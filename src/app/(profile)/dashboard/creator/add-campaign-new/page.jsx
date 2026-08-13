import AddCampaign from "@/components/Dashboard/CreatorSection/AddCampaign";
import { Separator } from "@heroui/react";
import React from "react";

const page = () => {
  return (
    <div className="w-11/12 mx-auto mt-5">
      <h2 className="text-2xl font-bold">Lauch A Campaign</h2>
      <Separator className="my-4" />
      <AddCampaign />
    </div>
  );
};

export default page;
