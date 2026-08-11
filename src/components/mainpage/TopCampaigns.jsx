import React from "react";

const TopCampaigns = () => {
  return (
    <div className="">
      <div className="w-11/12 mx-auto pt-10">
        <h3 className="text-2xl font-semibold">Top Funded Campaigns</h3>
        <div className="flex justify-between items-center">
          <p>Discover top funded campaigns right now.</p>
          <p>View All</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          Campaign cards would go here
        </div>
      </div>
    </div>
  );
};

export default TopCampaigns;
