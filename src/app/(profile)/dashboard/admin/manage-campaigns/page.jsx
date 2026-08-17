import ApproveCampaign from "@/components/Dashboard/AdminSection/ApproveCampaign";
import { getAdminCampaigns } from "@/lib/actions/getSection";
import { Button, Separator, Table } from "@heroui/react";
import React from "react";

const page = async () => {
  const res = await getAdminCampaigns();
  console.log(res);
  return (
    <div className="w-11/12 mx-auto mt-5">
      <h2 className="text-2xl font-bold">Manage Campaigns</h2>
      <Separator className="my-4" />
      <div></div>
      <Table className="rounded-2xl">
        <Table.ScrollContainer>
          <Table.Content aria-label="Team members" className="w-full">
            <Table.Header>
              <Table.Column isRowHeader>Title</Table.Column>
              <Table.Column>Creator</Table.Column>
              <Table.Column>Current State</Table.Column>
              <Table.Column>Amount Raised</Table.Column>
              <Table.Column>Action</Table.Column>
            </Table.Header>
            <Table.Body>
              {res.map((campaign) => (
                <Table.Row key={campaign._id}>
                  <Table.Cell isRowHeader>{campaign.campaignTitle}</Table.Cell>
                  <Table.Cell>{campaign.CreatorName}</Table.Cell>
                  <Table.Cell>{campaign.state}</Table.Cell>
                  <Table.Cell>{campaign.TotalRaised}</Table.Cell>
                  <Table.Cell>
                    <div className="flex gap-2">
                      {campaign.state === "approved" ||
                      campaign.state === "decliend" ? (
                        <Button variant="danger">Delete</Button>
                      ) : (
                        <div>
                          <ApproveCampaign id={campaign._id} />
                          <Button variant="secondary">Decline</Button>
                        </div>
                      )}
                    </div>
                  </Table.Cell>
                </Table.Row>
              ))}
            </Table.Body>
          </Table.Content>
        </Table.ScrollContainer>
      </Table>
    </div>
  );
};

export default page;
