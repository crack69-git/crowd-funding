import { Table } from "@heroui/react";
import React from "react";
import {
  FaArrowRight,
  FaHandHoldingHeart,
  FaRegMoneyBill1,
} from "react-icons/fa6";
import { IoTimer } from "react-icons/io5";

const page = () => {
  return (
    <div className="pt-5 w-11/12 mx-auto ">
      <p className="text-2xl font-bold">Admin Hub</p>
      <p className="text-lg">Welcome to the Admin Hub</p>
      <div className="grid grid-cols-3 gap-4 mt-5">
        <div className="border p-4 rounded-lg text-center bg-cyan-900 text-white">
          <p className="flex  items-center justify-center gap-2 text-xl font-semibold">
            <FaRegMoneyBill1 className="text-green-300 size-7" />
            Total Supporters
          </p>
          <p className="text-lg font-medium">14,200</p>
        </div>
        <div className="bg-cyan-900 text-white border p-4 rounded-lg text-center">
          <p className="text-xl font-semibold flex  items-center justify-center gap-2">
            <FaHandHoldingHeart className="text-green-300 size-7" />
            Total Creators
          </p>
          <p className="text-lg font-medium">40</p>
        </div>
        <div className="bg-cyan-900 text-white border p-4 rounded-lg text-center">
          <p className="text-xl font-semibold flex  items-center justify-center gap-2">
            <IoTimer className="text-green-300 size-7" />
            Available Credit
          </p>
          <p className="text-lg font-medium">40</p>
        </div>
        <div className="bg-cyan-900 text-white border p-4 rounded-lg text-center">
          <p className="text-xl font-semibold flex  items-center justify-center gap-2">
            <IoTimer className="text-green-300 size-7" />
            Processsed Payments
          </p>
          <p className="text-lg font-medium">$2.3M</p>
        </div>
      </div>

      <div className="mt-10 grid grid-cols-2 gap-4">
        <div>
          <div className="border border-gray-300  p-2 text-lg font-semibold flex justify-between items-center">
            <p>Campaign Approvals</p>
            <p className="text-sm font-normal underline flex items-center gap-2 cursor-pointer">
              {" "}
              View All
              <FaArrowRight />
            </p>
          </div>
          <Table className="rounded-none">
            <Table.ScrollContainer>
              <Table.Content aria-label="Team members" className="w-full">
                <Table.Header>
                  <Table.Column isRowHeader>Campaign Title</Table.Column>
                  <Table.Column>Creator</Table.Column>
                  <Table.Column>Amount</Table.Column>
                  <Table.Column>Status</Table.Column>
                </Table.Header>
                <Table.Body>
                  <Table.Row>
                    <Table.Cell>Kate Moore</Table.Cell>
                    <Table.Cell>CEO</Table.Cell>
                    <Table.Cell>Active</Table.Cell>
                    <Table.Cell>kate@acme.com</Table.Cell>
                  </Table.Row>
                </Table.Body>
              </Table.Content>
            </Table.ScrollContainer>
          </Table>
        </div>
        <div>
          <div className="border border-gray-300  p-2 text-lg font-semibold flex justify-between items-center">
            <p>Withdrawals Requests</p>
            <p className="text-sm font-normal underline flex items-center gap-2 cursor-pointer">
              {" "}
              View All
              <FaArrowRight />
            </p>
          </div>
          <Table className="rounded-none">
            <Table.ScrollContainer>
              <Table.Content aria-label="Team members" className="w-full">
                <Table.Header>
                  <Table.Column isRowHeader>Campaign Title</Table.Column>
                  <Table.Column>Creator</Table.Column>
                  <Table.Column>Amount</Table.Column>
                  <Table.Column>Status</Table.Column>
                </Table.Header>
                <Table.Body>
                  <Table.Row>
                    <Table.Cell>Kate Moore</Table.Cell>
                    <Table.Cell>CEO</Table.Cell>
                    <Table.Cell>Active</Table.Cell>
                    <Table.Cell>kate@acme.com</Table.Cell>
                  </Table.Row>
                </Table.Body>
              </Table.Content>
            </Table.ScrollContainer>
          </Table>
        </div>
      </div>
    </div>
  );
};

export default page;
