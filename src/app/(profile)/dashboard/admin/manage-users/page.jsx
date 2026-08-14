import { ListBox, Separator, Table, Select, Label } from "@heroui/react";
import React from "react";

const page = () => {
  const options = (
    <>
      <ListBox.Item id="supporter" textValue="Supporter">
        Supporter
        <ListBox.ItemIndicator />
      </ListBox.Item>
      <ListBox.Item id="creator" textValue="Creator">
        Creator
        <ListBox.ItemIndicator />
      </ListBox.Item>
      <ListBox.Item id="admin" textValue="Admin">
        Admin
        <ListBox.ItemIndicator />
      </ListBox.Item>
    </>
  );
  return (
    <div className="w-11/12 mx-auto mt-5">
      <h2 className="text-2xl font-bold">Manage Users</h2>

      <Separator className="my-4" />
      <Table className="rounded-2xl">
        <Table.ScrollContainer>
          <Table.Content aria-label="Team members" className="w-full">
            <Table.Header>
              <Table.Column isRowHeader>User</Table.Column>
              <Table.Column>Name</Table.Column>
              <Table.Column>Email</Table.Column>
              <Table.Column>Role</Table.Column>
              <Table.Column>Credit</Table.Column>
              <Table.Column>Actions</Table.Column>
            </Table.Header>
            <Table.Body>
              <Table.Row>
                <Table.Cell>Kate Moore</Table.Cell>
                <Table.Cell>CEO</Table.Cell>
                <Table.Cell>Active</Table.Cell>
                <Table.Cell>
                  <Select className="w-full" placeholder="Select one">
                    <Select.Trigger>
                      <Select.Value />
                      <Select.Indicator />
                    </Select.Trigger>
                    <Select.Popover>
                      <ListBox>{options}</ListBox>
                    </Select.Popover>
                  </Select>
                </Table.Cell>
                <Table.Cell>kate@acme.com</Table.Cell>
                <Table.Cell>kate@acme.com</Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table.Content>
        </Table.ScrollContainer>
      </Table>
    </div>
  );
};

export default page;
