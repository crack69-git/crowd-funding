import { Button } from "@heroui/react";
import Image from "next/image";
import React from "react";

const HeroSection = () => {
  return (
    <div className="bg-blue-50 border-b">
      <div className="w-11/12 mx-auto flex justify-between items-center py-10 ">
        <div>
          <h2 className="text-8xl font-bold mb-5">
            Bring Your <span className="text-green-700">Creative</span>
            <br></br> <span className="text-sky-700">Ideas</span> to Life
          </h2>
          <p className="mb-5 text-lg font-semibold text-gray-600 w-11/12">
            Join a community of visionaries and backers. Fund the projects that
            matter, from eco-innovations to community arts, and watch collective
            growth in action.
          </p>
          <div className="flex gap-2">
            <Button variant="primary" className="bg-green-700">
              Start A Campaign
            </Button>
            <Button variant="outline">Explore Campaigns</Button>
          </div>
        </div>
        <div>
          <Image
            src="/hero_image.png"
            width={1400}
            height={1400}
            alt="Hero Image"
          ></Image>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
