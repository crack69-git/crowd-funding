import React from "react";

const TopCampaigns = () => {
  return (
    <div className="border-b pb-10 bg-gray-50">
      <div className="w-11/12 mx-auto pt-10">
        <h3 className="text-2xl font-semibold">Top Funded Campaigns</h3>
        <div className="flex justify-between items-center">
          <p className="text-gray-500 font-semibold">
            Discover top funded campaigns right now.
          </p>
          <p className="underline">View All</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          Campaign cards would go here
        </div>
      </div>
    </div>
  );
};

export default TopCampaigns;
