import { Table } from "@heroui/react";
import React from "react";
import { FaHandHoldingDollar } from "react-icons/fa6";
import { MdCampaign } from "react-icons/md";
import { VscVmActive } from "react-icons/vsc";

const page = () => {
  return (
    <div className="pt-5 w-11/12 mx-auto ">
      <p className="text-2xl font-bold">Creator hub</p>
      <p className="text-lg">Welcome to the Creator Hub</p>
      <div className="grid grid-cols-3 gap-4 mt-5">
        <div className="border p-4 rounded-lg text-center bg-cyan-900 text-white">
          <p className="flex flex-col items-center justify-center gap-2 text-xl font-semibold">
            <MdCampaign className="text-green-300 size-10" />
            Total Counts
          </p>
          <p className="text-lg font-medium">40</p>
        </div>
        <div className="bg-cyan-900 text-white border p-4 rounded-lg text-center">
          <p className="text-xl font-semibold flex flex-col items-center justify-center gap-2">
            <VscVmActive className="text-green-300 size-7" />
            Active Campaigns
          </p>
          <p className="text-lg font-medium">40</p>
        </div>
        <div className="bg-cyan-900 text-white border p-4 rounded-lg text-center">
          <p className="text-xl font-semibold flex flex-col items-center justify-center gap-2">
            <FaHandHoldingDollar className="text-green-300 size-7" />
            Total Amount
          </p>
          <p className="text-lg font-medium">40</p>
        </div>
      </div>
      <div className="mt-10">
        <Table>
          <Table.ScrollContainer>
            <Table.Content aria-label="Team members" className="min-w-[600px]">
              <Table.Header>
                <Table.Column isRowHeader>Supporter Name</Table.Column>
                <Table.Column>Campaign Title</Table.Column>
                <Table.Column>Contribution Amount</Table.Column>
                <Table.Column>Date</Table.Column>
                <Table.Column>Action</Table.Column>
              </Table.Header>
              <Table.Body>
                <Table.Row>
                  <Table.Cell>Kate Moore</Table.Cell>
                  <Table.Cell>CEO</Table.Cell>
                  <Table.Cell>Active</Table.Cell>
                  <Table.Cell>kate@acme.com</Table.Cell>
                  <Table.Cell>
                    <button className="bg-cyan-900 text-white px-4 py-2 rounded-lg">
                      View Details
                    </button>
                  </Table.Cell>
                </Table.Row>
              </Table.Body>
            </Table.Content>
          </Table.ScrollContainer>
        </Table>
      </div>
    </div>
  );
};

export default page;
