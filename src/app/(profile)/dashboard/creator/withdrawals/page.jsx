import WithdrawalsSection from "@/components/Dashboard/CreatorSection/WithdrawalsSection";
import { Separator } from "@heroui/react";
import React from "react";

const page = () => {
  return (
    <div className="w-11/12 mx-auto my-5">
      <h2 className="text-2xl font-bold">My withdrawals</h2>
      <p>Manage your earnings and withdrawals payout</p>
      <Separator className="my-5" />
      <div>
        <WithdrawalsSection />
      </div>
    </div>
  );
};

export default page;
