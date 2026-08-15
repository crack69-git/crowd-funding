import { Button } from "@heroui/react";
import Link from "next/link";
import React from "react";

const NavbarSection = () => {
  return (
    <div className="border-b">
      <div className="flex justify-between items-center w-11/12 mx-auto py-5 ">
        <div className="flex items-center gap-2">
          <Link href="/">
            <h1 className="text-3xl font-bold mr-5 text-green-700">
              Crowd Fundly
            </h1>
          </Link>
          <div className="flex items-center gap-4">
            <p className="font-semibold">Explore Campaign</p>
            <p>How it works</p>
            <p>Plattform impacts</p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <Link href="/login">
            <Button variant="outline" className="hover:bg-green-100">
              Login
            </Button>
          </Link>
          <Button variant="primary" className="bg-green-700">
            Join as Developer
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NavbarSection;
