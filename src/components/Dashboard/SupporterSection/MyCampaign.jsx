import { Table, ToggleButton, ToggleButtonGroup } from "@heroui/react";
import React from "react";
import {
  Bold,
  Italic,
  Strikethrough,
  TextAlignCenter,
  TextAlignLeft,
  TextAlignRight,
  Underline,
} from "@gravity-ui/icons";
const MyCampaign = () => {
  return (
    <div>
      <div className="w-full max-w-md space-y-3 mb-5">
        <ToggleButtonGroup fullWidth selectionMode="single">
          <ToggleButton id="all">All</ToggleButton>
          <ToggleButton id="pending">
            <ToggleButtonGroup.Separator />
            Pending
          </ToggleButton>
          <ToggleButton id="approved">
            <ToggleButtonGroup.Separator />
            Approved
          </ToggleButton>
        </ToggleButtonGroup>
      </div>
      <Table className="rounded-lg">
        <Table.ScrollContainer>
          <Table.Content aria-label="My Contributions" className="w-full">
            <Table.Header>
              <Table.Column isRowHeader>Campaign Title</Table.Column>
              <Table.Column>Date</Table.Column>
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
              <Table.Row>
                <Table.Cell>John Smith</Table.Cell>
                <Table.Cell>CTO</Table.Cell>
                <Table.Cell>Active</Table.Cell>
                <Table.Cell>john@acme.com</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>Sara Johnson</Table.Cell>
                <Table.Cell>CMO</Table.Cell>
                <Table.Cell>On Leave</Table.Cell>
                <Table.Cell>sara@acme.com</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>Michael Brown</Table.Cell>
                <Table.Cell>CFO</Table.Cell>
                <Table.Cell>Active</Table.Cell>
                <Table.Cell>michael@acme.com</Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table.Content>
        </Table.ScrollContainer>
      </Table>
    </div>
  );
};

export default MyCampaign;
