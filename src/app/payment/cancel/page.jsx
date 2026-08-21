import React from "react";

const page = async ({ searchParams }) => {
  const { tran_id } = await searchParams;

  return (
    <div>
      <div className="flex flex-col items-center justify-center min-h-[70vh] p-6 text-center">
        <h1 className="text-3xl font-bold text-amber-600">Payment Cancelled</h1>
        <p className="text-gray-600 mt-2">
          You cancelled the payment transaction.
        </p>
        {tran_id && (
          <p className="text-sm text-gray-400 mt-1">
            Transaction ID: {tran_id}
          </p>
        )}
      </div>
    </div>
  );
};

export default page;
