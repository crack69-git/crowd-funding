import MyCampaignsSection from "@/components/Dashboard/CreatorSection/MyCampaignsSection";
import { Button, Card, Chip, Separator, Table } from "@heroui/react";
import React from "react";

const page = () => {
  return (
    <div className="w-11/12 mx-auto mt-5">
      <div className="flex justify-between items-center gap-5">
        <div>
          <h3 className="text-2xl font-bold">My Campaigns</h3>
          <p>Your Campaigns will appear here.</p>
        </div>
        <div className="flex gap-5">
          <Chip
            color="success"
            className="rounded-lg flex flex-col items-center justify-center px-5 text-white bg-green-700"
          >
            <p className="text-lg font-bold">Active Task</p>
            <p className="text-lg">5</p>
          </Chip>
          <Chip
            color=""
            className="rounded-lg flex flex-col items-center justify-center px-5 text-white bg-green-700"
          >
            <p className="text-lg font-bold">Total Raised</p>
            <p className="text-lg">$ 5000</p>
          </Chip>
        </div>
      </div>
      <Separator className="my-5" />
      <div>
        <MyCampaignsSection />
        <Table className="rounded-none">
          <Table.ScrollContainer>
            <Table.Content aria-label="Team members" className="min-w-full">
              <Table.Header>
                <Table.Column isRowHeader>Campaign Title</Table.Column>

                <Table.Column>Status</Table.Column>
                <Table.Column>Goal</Table.Column>
                <Table.Column>Amount Raised</Table.Column>
                <Table.Column>Deadline</Table.Column>
                <Table.Column>Action</Table.Column>
              </Table.Header>
              <Table.Body>
                <Table.Row>
                  <Table.Cell>Kate Moore</Table.Cell>
                  <Table.Cell>Active/Funded</Table.Cell>
                  <Table.Cell>$10000</Table.Cell>
                  <Table.Cell>$5000</Table.Cell>
                  <Table.Cell>2023-12-31</Table.Cell>
                  <Table.Cell>
                    <div className="flex gap-2">
                      <Button variant="secondary" className="rounded-lg">
                        Edit
                      </Button>
                      <Button variant="danger" className="rounded-lg">
                        Delete
                      </Button>
                    </div>
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
