"use client";
import { authClient } from "@/lib/auth-client";
import { Button } from "@heroui/react";
import { useRouter } from "next/navigation";
import React from "react";
import { HiOutlineLogout } from "react-icons/hi";

const LogoutButton = () => {
  const router = useRouter();
  return (
    <Button
      onClick={async () => {
        await authClient.signOut({
          fetchOptions: {
            onSuccess: () => {
              router.push("/login");
              router.refresh();
            },
          },
        });
      }}
      variant="primary"
      className="bg-green-700 w-full"
    >
      Logout
      <HiOutlineLogout />
    </Button>
  );
};

export default LogoutButton;
