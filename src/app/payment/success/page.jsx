import { Button, Card } from "@heroui/react";
import Link from "next/link";
import React from "react";
import { BiHome } from "react-icons/bi";
import { GiCheckMark } from "react-icons/gi";

const page = async ({ searchParams }) => {
  const { tran_id } = await searchParams;

  let order = null;
  if (tran_id) {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_URL}/api/orders/${tran_id}`,
        {
          cache: "no-store",
        },
      );
      console.log("Order fetch response:", res);
      if (res.ok) {
        order = await res.json();
      }
    } catch (err) {
      console.error("Failed to load order:", err);
    }
  }
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4 py-10">
      <Card className="w-full max-w-md overflow-hidden border border-gray-200 bg-white shadow-xl">
        {/* Success Header */}
        <div className="flex flex-col items-center px-6 pt-10 pb-6 text-center">
          <div className="mb-5 flex h-20 w-20 items-center justify-center rounded-full bg-green-100">
            <GiCheckMark size={30} className="text-green-700" />
          </div>

          <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">
            Payment Successful!
          </h1>

          <p className="mt-2 max-w-sm text-sm leading-6 text-gray-500">
            Thank you for your contribution. Your payment has been successfully
            processed.
          </p>
        </div>

        {/* Payment Details */}
        <div className="mx-6 rounded-2xl border border-gray-100 bg-gray-50 p-5">
          <div className="mb-4 flex items-center gap-2">
            <p className="font-semibold text-gray-800">Payment Details</p>
          </div>

          <div className="space-y-3 text-sm">
            <div className="flex items-center justify-between">
              <span className="text-gray-500">Status</span>

              <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700">
                Completed
              </span>
            </div>

            <div className="flex items-center justify-between">
              <span className="text-gray-500">Payment Method</span>
              <span className="font-medium text-gray-800">SSLCommerz</span>
            </div>

            <div className="flex items-center justify-between">
              <span className="text-gray-500">Transaction ID</span>
              <span className="max-w-[180px] truncate font-medium text-gray-800">
                {tran_id}
              </span>
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="flex flex-col justify-center gap-3 px-6 py-7 sm:flex-row">
          <Link href="/">
            <Button variant="secondary" className="w-full">
              <BiHome size={18} />
              Go Home
            </Button>
          </Link>
        </div>

        {/* Footer */}
        <div className="border-t border-gray-100 px-6 py-4 text-center">
          <p className="text-xs text-gray-400">
            A confirmation of your payment has been recorded successfully.
          </p>
        </div>
      </Card>
    </div>
  );
};

export default page;
