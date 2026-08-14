import { Button, Separator, Table } from "@heroui/react";
import React from "react";

const page = () => {
  return (
    <div className="w-11/12 mx-auto mt-5">
      <h2 className="text-2xl font-bold">Reports</h2>
      <Separator className="my-4" />
      <div></div>
      <Table className="rounded-2xl">
        <Table.ScrollContainer>
          <Table.Content aria-label="Team members" className="w-full">
            <Table.Header>
              <Table.Column isRowHeader>Reportes Name</Table.Column>
              <Table.Column>Campaign title</Table.Column>
              <Table.Column>Reason</Table.Column>
              <Table.Column> Date</Table.Column>
              <Table.Column>Actions</Table.Column>
            </Table.Header>
            <Table.Body>
              <Table.Row>
                <Table.Cell>Kate Moore</Table.Cell>
                <Table.Cell>CEO</Table.Cell>
                <Table.Cell>CEO</Table.Cell>
                <Table.Cell>Active</Table.Cell>
                <Table.Cell>
                  <div>
                    <Button variant="danger">Delete</Button>
                  </div>
                </Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table.Content>
        </Table.ScrollContainer>
      </Table>
    </div>
  );
};

export default page;
