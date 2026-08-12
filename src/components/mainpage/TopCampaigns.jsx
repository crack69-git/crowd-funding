import { Card, CardHeader, ProgressBar } from "@heroui/react";
import Image from "next/image";
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
          <Card className="max-w-[360px] border border-emerald-100/60 shadow-sm hover:shadow-md transition-shadow bg-white rounded-2xl overflow-hidden">
            {/* Card Header / Image */}
            <CardHeader className="p-0 overflow-hidden relative h-52 w-full">
              <Image
                src="https://images.unsplash.com/photo-1579783902614-a3fb3927b675?auto=format&fit=crop&q=80&w=800"
                alt="Urban Art Initiative"
                fill
                className="object-cover"
              />
            </CardHeader>

            {/* Card Content */}
            <div className="p-6 flex flex-col justify-between">
              <div>
                {/* Category Tag */}
                <span className="text-xs font-bold text-blue-600 uppercase tracking-wider block mb-2">
                  Art & Community
                </span>

                {/* Title */}
                <h3 className="text-xl font-bold text-slate-900 leading-snug mb-3">
                  Urban Art Initiative
                </h3>

                {/* Description */}
                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  Revitalizing downtown spaces through collaborative mural
                  projects by local artists.
                </p>
              </div>

              {/* Campaign Funding Progress */}
              <div className="space-y-2">
                <div className="flex justify-between items-center text-sm font-bold">
                  <span className="text-emerald-800">$15,400 raised</span>
                  <span className="text-slate-700">85%</span>
                </div>

                <ProgressBar
                  value={85}
                  aria-label="Campaign Progress"
                  classNames={{
                    base: "max-w-md",
                    track: "bg-emerald-100/60 h-2.5",
                    indicator: "bg-emerald-800",
                  }}
                />
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default TopCampaigns;
