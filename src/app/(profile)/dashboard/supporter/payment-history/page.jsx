import { Card, Table } from "@heroui/react";
import React from "react";
import { HiMiniCalendarDateRange } from "react-icons/hi2";
import { ImCreditCard } from "react-icons/im";
import { LuCircleDollarSign } from "react-icons/lu";

const page = () => {
  return (
    <div className="w-11/12 mx-auto">
      <div className="my-5">
        <p className="font-semibold mb-2 text-lg">Payment History</p>
        <div className="grid grid-cols-3 mb-5 gap-4">
          <Card className="w-full" variant="default">
            <Card.Header>
              <Card.Title className="text-lg">
                Total Credit Purchased
              </Card.Title>
            </Card.Header>
            <Card.Content>
              <p className="text-2xl font-bold flex items-center gap-2 text-gray-600">
                <ImCreditCard className="text-green-700" />
                12500
              </p>
            </Card.Content>
          </Card>
          <Card className="w-full" variant="default">
            <Card.Header>
              <Card.Title className="text-lg">Total Amount Spent</Card.Title>
            </Card.Header>
            <Card.Content>
              <p className="text-2xl font-bold flex items-center gap-2 text-gray-600">
                <LuCircleDollarSign className="text-yellow-600" />
                $1250.00
              </p>
            </Card.Content>
          </Card>
          <Card className="w-full" variant="default">
            <Card.Header>
              <Card.Title className="text-lg">Latest Transaction</Card.Title>
            </Card.Header>
            <Card.Content>
              <p className="text-2xl font-bold flex items-center gap-2 text-gray-600">
                <HiMiniCalendarDateRange className="text-blue-600" />
                2026-01-15
              </p>
            </Card.Content>
          </Card>
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

export default page;
