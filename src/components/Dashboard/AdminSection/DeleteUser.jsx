"use client";
import { deleteSingleUser } from "@/lib/actions/deleteSection";
import { Button, Modal } from "@heroui/react";
import { useRouter } from "next/navigation";
import React from "react";
import { RiDeleteBinLine } from "react-icons/ri";

const DeleteUser = ({ id }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const router = useRouter();
  const handleDelete = async () => {
    console.log("Deleting user with ID:", id);
    const res = await deleteSingleUser(id);
    console.log("Delete response:", res);
    if (res.deletedCount > 0) {
      alert("User deleted successfully");
      setIsOpen(false);
      router.refresh();
    } else {
      alert("Failed to delete user");
      return;
    }
  };

  return (
    <Modal open={isOpen} onOpenChange={setIsOpen}>
      <Button variant="danger" onPress={() => setIsOpen(true)}>
        <RiDeleteBinLine />
        Delete
      </Button>
      <Modal.Backdrop>
        <Modal.Container>
          <Modal.Dialog className="sm:max-w-[360px]">
            <Modal.CloseTrigger />
            <Modal.Header>
              <Modal.Icon className="bg-red-100 text-foreground">
                <RiDeleteBinLine className="text-red-600" />
              </Modal.Icon>
              <Modal.Heading>Delete User</Modal.Heading>
            </Modal.Header>
            <Modal.Body>
              <p>
                Are you sure you want to delete this user? This action cannot be
                undone.
              </p>
            </Modal.Body>
            <Modal.Footer>
              <Button
                onClick={handleDelete}
                className="w-full"
                slot="close"
                variant="danger"
              >
                Delete
              </Button>
            </Modal.Footer>
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
};

export default DeleteUser;
