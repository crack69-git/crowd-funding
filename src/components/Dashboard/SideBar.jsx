import { auth } from "@/lib/auth";
import { Button } from "@heroui/react";
import { headers } from "next/headers";
import Link from "next/link";
import React from "react";
import { HiOutlineLogout } from "react-icons/hi";
import LogoutButton from "./LogoutButton";

const SideBar = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  const role = session?.user?.role;

  const creator = (
    <>
      <Link href="/dashboard/creator">Home</Link>
      <Link href="/dashboard/creator/add-campaign-new">Add New Campaign</Link>
      <Link href="/dashboard/creator/my-campaigns">My Campaigns</Link>
      <Link href="/dashboard/creator/withdrawals">Withdrawals</Link>
      <Link href="/dashboard/creator/payment-history">Payment History</Link>
    </>
  );
  const supporter = (
    <>
      <Link href="/dashboard/supporter">Home</Link>
      <Link href="/dashboard/supporter/explore-campaign">Explore Campaign</Link>
      <Link href="/dashboard/supporter/my-contributions">My Contributions</Link>
      <Link href="/dashboard/supporter/purchase-credit">Purchase Credit</Link>
      <Link href="/dashboard/supporter/payment-history">Payment History</Link>
    </>
  );

  const admin = (
    <>
      <Link href="/dashboard/admin">Home</Link>
      <Link href="/dashboard/admin/manage-users">Manage Users</Link>
      <Link href="/dashboard/admin/manage-campaigns">Manage Campaigns</Link>
      <Link href="/dashboard/admin/withdrawals-request">
        Withdrawals Request{" "}
      </Link>
      <Link href="/dashboard/admin/reports">Reports</Link>
    </>
  );
  return (
    <div className="flex flex-col  h-11/12 p-4 bg-gray-100 ">
      <h3 className="text-xl text-green-800 font-bold">Dashboard</h3>
      <div className="flex flex-col items-start mt-5 space-y-5 flex-grow">
        {role === "Creator" && creator}
        {role === "Supporter" && supporter}
        {role === "Admin" && admin}
        {/* {creator} */}
      </div>
      <div>
        <LogoutButton />
      </div>
    </div>
  );
};

export default SideBar;
