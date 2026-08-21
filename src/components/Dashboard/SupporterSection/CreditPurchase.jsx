"use client";
import { paymentPost } from "@/lib/actions/postSection";
import { Button } from "@heroui/react";
import React from "react";
import { TbCurrencyTaka } from "react-icons/tb";

const CreditPurchase = ({ user }) => {
  const handleStarter = async () => {
    try {
      const data = {
        total_amount: 10,
        product_name: "Starter",
        cus_name: user?.name,
        cus_email: user?.email,
      };

      const res = await paymentPost(data);

      console.log("Payment initiation response:", res);

      if (res?.url) {
        window.location.href = res.url;
      } else {
        console.error("Payment URL was not returned:", res);
      }
    } catch (error) {
      console.error("Payment failed:", error);
    }
  };
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      <div className="flex flex-col  rounded-3xl border border-green-200 bg-green-50 flex-grow">
        <div className="px-6 py-8 sm:p-10 sm:pb-6flex-grow">
          <div className="grid items-center justify-center w-full grid-cols-1 text-left">
            <div>
              <h2 className="text-lg  font-medium tracking-tighter text-gray-500 lg:text-3xl">
                Starter
              </h2>
            </div>
            <div className="mt-6 ">
              <p>
                <span className="text-3xl tracking-tight text-gray-700 font-semibold">
                  100 Credit
                </span>
                <span className="text-base font-medium text-gray-500 flex items-center">
                  {" "}
                  /<TbCurrencyTaka />
                  10{" "}
                </span>
              </p>
            </div>
          </div>
        </div>
        <div className="flex px-6 pb-8 sm:px-8">
          <Button
            onClick={handleStarter}
            className="flex items-center justify-center w-full px-6 py-2.5 text-center text-white duration-200 bg-green-700 border-2  rounded-full nline-flex  hover:border-green-900  hover:text-white hover:bg-green-800"
          >
            Purchase Credit
          </Button>
        </div>
      </div>
      <div className="flex flex-col  rounded-3xl border bg-blue-50 border-blue-200">
        <div className="px-6 py-8 sm:p-10 sm:pb-6 flex-grow">
          <div className="grid items-center justify-center w-full grid-cols-1 text-left">
            <div>
              <h2 className="text-lg font-medium tracking-tighter text-gray-500 lg:text-3xl">
                Popular
              </h2>
            </div>
            <div className="mt-6">
              <p>
                <span className="text-3xl font-semibold tracking-tight text-gray-700">
                  300 Credit
                </span>
                <span className="text-base font-medium text-gray-500 flex items-center">
                  {" "}
                  /<TbCurrencyTaka />
                  25{" "}
                </span>
              </p>
            </div>
          </div>
        </div>
        <div className="flex px-6 pb-8 sm:px-8">
          <Button className="flex items-center justify-center w-full px-6 py-2.5 text-center text-white duration-200 bg-blue-700 border-2  rounded-full nline-flex  hover:border-blue-900  hover:text-white hover:bg-blue-800">
            Purchase Credit
          </Button>
        </div>
      </div>
      <div className="flex flex-col  rounded-3xl border bg-yellow-50">
        <div className="px-6 py-8 sm:p-10 sm:pb-6 flex-grow">
          <div className="grid items-center justify-center w-full grid-cols-1 text-left">
            <div>
              <h2 className="text-lg font-medium tracking-tighter text-gray-500 lg:text-3xl">
                Medium
              </h2>
            </div>
            <div className="mt-6">
              <p>
                <span className="text-3xl font-semibold tracking-tight text-gray-700">
                  800 Credit
                </span>
                <span className="text-base font-medium text-gray-500 flex items-center">
                  {" "}
                  /<TbCurrencyTaka />
                  60{" "}
                </span>
              </p>
            </div>
          </div>
        </div>
        <div className="flex px-6 pb-8 sm:px-8">
          <Button className="flex items-center justify-center w-full px-6 py-2.5 text-center text-white duration-200 bg-yellow-700 border-2  rounded-full nline-flex  hover:border-yellow-900  hover:text-white hover:bg-yellow-800">
            Purchase Credit
          </Button>
        </div>
      </div>
      <div className="flex flex-col  rounded-3xl border bg-red-50">
        <div className="px-6 py-8 sm:p-10 sm:pb-6 flex-grow">
          <div className="grid items-center justify-center w-full grid-cols-1 text-left">
            <div>
              <h2 className="text-lg font-medium tracking-tighter text-gray-500 lg:text-3xl">
                Premium
              </h2>
            </div>
            <div className="mt-6">
              <p>
                <span className="text-3xl font-semibold tracking-tight text-gray-700">
                  1500 Credit
                </span>
                <span className="text-base font-medium text-gray-500 flex items-center">
                  {" "}
                  /<TbCurrencyTaka />
                  110{" "}
                </span>
              </p>
            </div>
          </div>
        </div>
        <div className="flex px-6 pb-8 sm:px-8">
          <Button className="flex items-center justify-center w-full px-6 py-2.5 text-center text-white duration-200 bg-red-700 border-2  rounded-full nline-flex  hover:border-red-900  hover:text-white hover:bg-red-800">
            Purchase Credit
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CreditPurchase;
