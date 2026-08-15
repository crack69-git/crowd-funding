import { auth } from "@/lib/auth";
import { Button } from "@heroui/react";
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
          </div>
        </div>

        <div className="flex items-center gap-2">
          {user ? (
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full overflow-hidden border">
                <Image
                  loading="lazy"
                  src={user?.imageLink || "/hero-image.png"}
                  alt="User Image"
                  width={40}
                  height={40}
                />
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
