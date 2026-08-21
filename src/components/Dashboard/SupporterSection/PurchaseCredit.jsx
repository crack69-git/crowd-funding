import { Button, Table } from "@heroui/react";
import React from "react";
import { TbCurrencyTaka } from "react-icons/tb";
import CreditPurchase from "./CreditPurchase";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { getPaymentDetails } from "@/lib/actions/getSection";
import Link from "next/link";

const PurchaseCredit = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  const user = session?.user;
  const data = await getPaymentDetails(user?.email);
  console.log("Payment details:", data);
  return (
    <div>
      <div>
        <CreditPurchase user={user}></CreditPurchase>
      </div>
      <div className="my-10">
        <div className="flex items-center justify-between mb-4">
          <p className="font-semibold">Payment History</p>
          <Link
            href="/dashboard/supporter/payment-history"
            className="text-sm text-gray-500 hover:text-gray-700"
          >
            <p className="underline">View All</p>
          </Link>
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
                {data?.length > 0 ? (
                  data.map((item, index) => (
                    <Table.Row key={index}>
                      <Table.Cell>{item.paidAt}</Table.Cell>
                      <Table.Cell>{item.total_amount}</Table.Cell>
                      <Table.Cell>
                        <span className="flex items-center">
                          <TbCurrencyTaka />
                          {item.total_amount * 10}
                        </span>
                      </Table.Cell>
                      <Table.Cell>{item.card_type}</Table.Cell>
                      <Table.Cell className="text-green-700 text-bold">
                        {item.status}
                      </Table.Cell>
                    </Table.Row>
                  ))
                ) : (
                  <Table.Row>
                    <Table.Cell colSpan={5} className="text-center">
                      No payment history available.
                    </Table.Cell>
                  </Table.Row>
                )}
              </Table.Body>
            </Table.Content>
          </Table.ScrollContainer>
        </Table>
      </div>
    </div>
  );
};

export default PurchaseCredit;
