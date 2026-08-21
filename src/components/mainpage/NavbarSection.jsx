import { getUserByMail } from "@/lib/actions/getSection";
import { auth } from "@/lib/auth";
import { Button, Chip } from "@heroui/react";
import { headers } from "next/headers";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const NavbarSection = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  const user = session?.user;
  const role = user?.role;
  const image = user?.image;
  const data = await getUserByMail(user?.email);
  console.log("User data fetched:", data);
  console.log(data?.credit);
  return (
    <div className="border-b">
      <div className="flex justify-between items-center w-11/12 mx-auto py-5 ">
        <div className="flex items-center gap-2">
          <Link href="/">
            <h1 className="text-3xl font-bold mr-5 text-green-700">
              Crowd Fundly
            </h1>
          </Link>
          <Link
            href="/explore-campaign"
            className="hover:bg-green-100 p-2 rounded-md"
          >
            <div className="flex items-center gap-4">
              <p className="font-semibold">Explore Campaign</p>
            </div>
          </Link>
        </div>

        <div className="flex items-center gap-2">
          {user ? (
            <div className="flex items-center gap-2">
              <Chip color="success">Credit: {data?.credit}</Chip>
              <div className="">
                <p>{user.name}</p>
              </div>
              {role === "Creator" ? (
                <Link href="/dashboard/creator">
                  <Button variant="outline">Dashboard</Button>
                </Link>
              ) : role === "Supporter" ? (
                <Link href="/dashboard/supporter">
                  <Button variant="outline">Dashboard</Button>
                </Link>
              ) : (
                <Link href="/dashboard/admin">
                  <Button variant="outline">Dashboard</Button>
                </Link>
              )}
            </div>
          ) : (
            <Link href="/login">
              <Button variant="outline" className="hover:bg-green-100">
                Login
              </Button>
            </Link>
          )}
          <Button variant="outline" className="bg-green-700 text-white">
            Join as Developer
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NavbarSection;
