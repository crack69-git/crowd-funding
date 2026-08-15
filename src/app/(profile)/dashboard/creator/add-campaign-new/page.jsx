import AddCampaign from "@/components/Dashboard/CreatorSection/AddCampaign";
import { getTiers } from "@/lib/actions/getSection";
import { Separator } from "@heroui/react";
import React from "react";

const page = async () => {
  const tiers = await getTiers();
  console.log("Tiers Data:", tiers);
  return (
    <div className="w-11/12 mx-auto my-5">
      <h2 className="text-2xl font-bold">Lauch A Campaign</h2>
      <Separator className="my-4" />
      <AddCampaign tiers={tiers} />
    </div>
  );
};

export default page;
