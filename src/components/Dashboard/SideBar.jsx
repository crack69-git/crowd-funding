import { Button } from "@heroui/react";
import Link from "next/link";
import React from "react";
import { HiOutlineLogout } from "react-icons/hi";

const SideBar = () => {
  const creator = (
    <>
      <Link href="/dashboard/creator">Home</Link>
      <Link href="/dashboard/creator/add-campaign">Add New Campaign</Link>
      <Link href="/dashboard/creator/my-campaigns">My Campaigns</Link>
      <Link href="/dashboard/creator">Withdrawals</Link>
      <Link href="/dashboard/creator">Payment History</Link>
    </>
  );
  return (
    <div className="flex flex-col  h-11/12 p-4 bg-gray-100 ">
      <h3 className="text-xl text-green-800 font-bold">Dashboard</h3>
      <div className="flex flex-col items-start mt-5 space-y-5 flex-grow">
        {creator}
      </div>
      <div>
        <Button variant="primary" className="bg-green-700 w-full">
          Logout
          <HiOutlineLogout />
        </Button>
      </div>
    </div>
  );
};

export default SideBar;
