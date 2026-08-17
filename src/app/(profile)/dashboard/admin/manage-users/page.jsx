import DeleteUser from "@/components/Dashboard/AdminSection/DeleteUser";
import { getALlUsers } from "@/lib/actions/getSection";
import {
  ListBox,
  Separator,
  Table,
  Select,
  Label,
  Button,
} from "@heroui/react";
import React from "react";

const page = async () => {
  const options = (
    <>
      <ListBox.Item id="supporter" textValue="Supporter">
        Supporter
        <ListBox.ItemIndicator />
      </ListBox.Item>
      <ListBox.Item id="Creator" textValue="Creator">
        Creator
        <ListBox.ItemIndicator />
      </ListBox.Item>
      <ListBox.Item id="admin" textValue="Admin">
        Admin
        <ListBox.ItemIndicator />
      </ListBox.Item>
    </>
  );
  const users = await getALlUsers();
  console.log(users);

  return (
    <div className="w-11/12 mx-auto my-5">
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
              {users.map((user) => (
                <Table.Row key={user._id}>
                  <Table.Cell>{user._id}</Table.Cell>
                  <Table.Cell>{user.name}</Table.Cell>
                  <Table.Cell>{user.email}</Table.Cell>
                  <Table.Cell>{user.role}</Table.Cell>
                  <Table.Cell>{user.credit}</Table.Cell>
                  <Table.Cell>
                    <DeleteUser id={user._id} />
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
