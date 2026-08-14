import MyCampaign from "@/components/Dashboard/SupporterSection/MyCampaign";
import React from "react";

const page = () => {
  return (
    <div className="w-11/12 mx-auto mt-5">
      <h3 className="text-2xl font-bold">My Contributions</h3>
      <p className="text-gray-600 mb-5">
        Review the projects you've supported and track their progress.
      </p>
      <div>
        <MyCampaign />
      </div>
    </div>
  );
};

export default page;
