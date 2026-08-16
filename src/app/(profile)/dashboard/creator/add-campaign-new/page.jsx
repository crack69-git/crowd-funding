import AddCampaign from "@/components/Dashboard/CreatorSection/AddCampaign";
import { getTiers } from "@/lib/actions/getSection";
import { Separator } from "@heroui/react";
import React from "react";
import AddTier from "../../../../../components/Dashboard/CreatorSection/AddTier";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";

const page = async () => {
  const tiers = await getTiers();
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  const user = session?.user;
  return (
    <div className="w-11/12 mx-auto my-5">
      <h2 className="text-2xl font-bold">Lauch A Campaign</h2>
      <Separator className="my-4" />
      <AddTier />
      <AddCampaign tiers={tiers} user={user} />
    </div>
  );
};

export default page;
