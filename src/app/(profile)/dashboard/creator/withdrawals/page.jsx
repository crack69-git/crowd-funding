import WithdrawalsSection from "@/components/Dashboard/CreatorSection/WithdrawalsSection";
import { getMyCampaigns } from "@/lib/actions/getSection";
import { auth } from "@/lib/auth";
import { Separator } from "@heroui/react";
import { headers } from "next/headers";
import React from "react";

const page = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  const id = session?.user?.id;
  const data = await getMyCampaigns(id);
  console.log("data", data);
  const totalRaised = data.reduce(
    (acc, campaign) => acc + campaign.TotalRaised,
    0,
  );
  return (
    <div className="w-11/12 mx-auto my-5">
      <h2 className="text-2xl font-bold">My withdrawals</h2>
      <p>Manage your earnings and withdrawals payout</p>
      <Separator className="my-5" />
      <div>
        <WithdrawalsSection totalRaised={totalRaised} data={data} />
      </div>
    </div>
  );
};

export default page;
