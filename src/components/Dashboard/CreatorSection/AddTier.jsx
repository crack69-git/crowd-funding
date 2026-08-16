"use client";
import { postTier } from "@/lib/actions/postSection";
import {
  Button,
  Description,
  FieldError,
  Form,
  Input,
  Label,
  Modal,
  TextField,
} from "@heroui/react";
import { useRouter } from "next/navigation";
import React from "react";
import { FaPlus, FaRankingStar } from "react-icons/fa6";

const AddTier = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const router = useRouter();
  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    const res = await postTier(data);
    console.log(res);
    if (res.acknowledged) {
      alert("Tier added successfully");
      setIsOpen(false);
      router.refresh();
    } else {
      alert("Failed to add tier");
      return;
    }
  };
  return (
    <Modal open={isOpen} onOpenChange={setIsOpen}>
      <Button
        onClick={() => setIsOpen(true)}
        variant="secondary"
        size="sm"
        className="mb-5"
      >
        <FaPlus />
        Add Tier
      </Button>
      <Modal.Backdrop>
        <Modal.Container>
          <Modal.Dialog className="sm:max-w-[360px]">
            <Modal.CloseTrigger />
            <Modal.Header>
              <Modal.Icon className="bg-default text-foreground">
                <FaRankingStar />
              </Modal.Icon>
              <Modal.Heading>Add Tier</Modal.Heading>
            </Modal.Header>
            <Modal.Body>
              <Form className="flex w-96 flex-col gap-4" onSubmit={onSubmit}>
                <TextField isRequired name="tierName" type="text">
                  <Label>Tier Name</Label>
                  <Input placeholder="Enter tier name" />
                  <FieldError />
                </TextField>

                <div className="flex gap-2">
                  <Button type="submit">Add</Button>
                </div>
              </Form>
            </Modal.Body>
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
};

export default AddTier;
