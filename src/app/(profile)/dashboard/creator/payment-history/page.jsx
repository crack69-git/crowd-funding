import { Separator, Table } from "@heroui/react";
import React from "react";

const page = () => {
  return (
    <div className="w-11/12 mx-auto my-5">
      <h2 className="text-2xl font-bold">Payment History</h2>
      <p className="text-gray-600">
        Overview of all past withdrawal payments and active transfers.
      </p>
      <Separator className="my-5" />
      <div>
        <Table>
          <Table.ScrollContainer>
            <Table.Content aria-label="Team members" className="min-w-full">
              <Table.Header>
                <Table.Column isRowHeader>Date</Table.Column>
                <Table.Column>Amount</Table.Column>
                <Table.Column>Credits</Table.Column>
                <Table.Column>Payment Method</Table.Column>
                <Table.Column>Status</Table.Column>
                <Table.Column>Action</Table.Column>
              </Table.Header>
              <Table.Body>
                <Table.Row>
                  <Table.Cell>2023-10-01</Table.Cell>
                  <Table.Cell>$1,000.00</Table.Cell>
                  <Table.Cell>1,000</Table.Cell>
                  <Table.Cell>Stripe</Table.Cell>
                  <Table.Cell>Paid</Table.Cell>
                  <Table.Cell>
                    <button className="bg-blue-500 text-white px-4 py-2 rounded">
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
