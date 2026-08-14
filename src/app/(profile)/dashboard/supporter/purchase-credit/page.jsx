import PurchaseCredit from "@/components/Dashboard/SupporterSection/PurchaseCredit";
import { Separator } from "@heroui/react";
import React from "react";

const page = () => {
  return (
    <div className="w-11/12 mx-auto my-5">
      <h3 className="text-2xl font-bold text-green-700">Purchase Credit</h3>
      <p className="text-gray-500 font-semibold">
        Fuel momentum. Choose a credit package to support creators on
        Crowdfundly.
      </p>
      <Separator className="my-4"></Separator>
      <div>
        <PurchaseCredit></PurchaseCredit>
      </div>
    </div>
  );
};

export default page;
