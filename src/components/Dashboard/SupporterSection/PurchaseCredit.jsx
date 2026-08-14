import { Table } from "@heroui/react";
import React from "react";

const PurchaseCredit = () => {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="flex flex-col  rounded-3xl border border-green-200 bg-green-50">
          <div className="px-6 py-8 sm:p-10 sm:pb-6">
            <div className="grid items-center justify-center w-full grid-cols-1 text-left">
              <div>
                <h2 className="text-lg font-medium tracking-tighter text-gray-600 lg:text-3xl">
                  Starter
                </h2>
              </div>
              <div className="mt-6">
                <p>
                  <span className="text-3xl tracking-tight text-gray-700 font-semibold">
                    100 Credit
                  </span>
                  <span className="text-base font-medium text-gray-500">
                    {" "}
                    /$10{" "}
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div className="flex px-6 pb-8 sm:px-8">
            <a
              aria-describedby="tier-company"
              className="flex items-center justify-center w-full px-6 py-2.5 text-center text-white duration-200 bg-green-700 border-2  rounded-full nline-flex  hover:border-green-900  hover:text-white hover:bg-green-800"
              href="#"
            >
              Purchase Credit
            </a>
          </div>
        </div>
        <div className="flex flex-col  rounded-3xl border bg-blue-50 border-blue-200">
          <div className="px-6 py-8 sm:p-10 sm:pb-6">
            <div className="grid items-center justify-center w-full grid-cols-1 text-left">
              <div>
                <h2 className="text-lg font-medium tracking-tighter text-gray-600 lg:text-3xl">
                  Popular
                </h2>
              </div>
              <div className="mt-6">
                <p>
                  <span className="text-3xl font-semibold tracking-tight text-gray-700">
                    300 Credit
                  </span>
                  <span className="text-base font-medium text-gray-500">
                    {" "}
                    /$25{" "}
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div className="flex px-6 pb-8 sm:px-8">
            <a
              aria-describedby="tier-company"
              className="flex items-center justify-center w-full px-6 py-2.5 text-center text-white duration-200  border-2  rounded-full nline-flex bg-blue-700 hover:border-blue-800"
              href="#"
            >
              Purchase Credit
            </a>
          </div>
        </div>
        <div className="flex flex-col  rounded-3xl border bg-yellow-50">
          <div className="px-6 py-8 sm:p-10 sm:pb-6">
            <div className="grid items-center justify-center w-full grid-cols-1 text-left">
              <div>
                <h2 className="text-lg font-medium tracking-tighter text-gray-600 lg:text-3xl">
                  Medium
                </h2>
              </div>
              <div className="mt-6">
                <p>
                  <span className="text-3xl font-semibold tracking-tight text-gray-700">
                    800 Credit
                  </span>
                  <span className="text-base font-medium text-gray-500">
                    {" "}
                    /$60{" "}
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div className="flex px-6 pb-8 sm:px-8">
            <a
              aria-describedby="tier-company"
              className="flex items-center justify-center w-full px-6 py-2.5 text-center text-white duration-200 bg-yellow-700 border-2 rounded-full nline-flex  hover:border-yellow-800"
              href="#"
            >
              Purchase Credit
            </a>
          </div>
        </div>
        <div className="flex flex-col  rounded-3xl border bg-red-50">
          <div className="px-6 py-8 sm:p-10 sm:pb-6">
            <div className="grid items-center justify-center w-full grid-cols-1 text-left">
              <div>
                <h2 className="text-lg font-medium tracking-tighter text-gray-600 lg:text-3xl">
                  Premium
                </h2>
              </div>
              <div className="mt-6">
                <p>
                  <span className="text-3xl font-semibold tracking-tight text-gray-700">
                    1500 Credit
                  </span>
                  <span className="text-base font-medium text-gray-500">
                    {" "}
                    /$110{" "}
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div className="flex px-6 pb-8 sm:px-8">
            <a
              aria-describedby="tier-company"
              className="flex items-center justify-center w-full px-6 py-2.5 text-center text-white duration-200 bg-red-700 border-2  rounded-full nline-flex  hover:border-red-800"
              href="#"
            >
              Purchase Credit
            </a>
          </div>
        </div>
      </div>
      <div className="my-10">
        <div className="flex items-center justify-between mb-4">
          <p className="font-semibold">Payment History</p>
          <p className="underline">View All</p>
        </div>
        <Table>
          <Table.ScrollContainer>
            <Table.Content aria-label="Team members" className="w-full">
              <Table.Header>
                <Table.Column isRowHeader>Date</Table.Column>
                <Table.Column>Credit Purchased</Table.Column>
                <Table.Column>Amount</Table.Column>
                <Table.Column>Payment Method</Table.Column>
                <Table.Column>Status</Table.Column>
              </Table.Header>
              <Table.Body>
                <Table.Row>
                  <Table.Cell>2023-10-01</Table.Cell>
                  <Table.Cell>1000 Credit</Table.Cell>
                  <Table.Cell>$80</Table.Cell>
                  <Table.Cell>Visa ****1234</Table.Cell>
                  <Table.Cell>Completed</Table.Cell>
                </Table.Row>
              </Table.Body>
            </Table.Content>
          </Table.ScrollContainer>
        </Table>
      </div>
    </div>
  );
};

export default PurchaseCredit;
