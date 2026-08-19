"use client";
import { patchCampaignState } from "@/lib/actions/patchSection";
import { Button, Modal } from "@heroui/react";
import { useRouter } from "next/navigation";
import React from "react";
import { BsChatRightDotsFill } from "react-icons/bs";
import { LuCornerUpRight } from "react-icons/lu";

const DeclineCampaign = ({ id }) => {
  const router = useRouter();
  const [isOpen, setIsOpen] = React.useState(false);
  const handleDecline = async () => {
    const res = await patchCampaignState(id, "declined");
    if (res.modifiedCount > 0) {
      alert("Campaign declined successfully!");
      setIsOpen(false);
      router.refresh();
    } else {
      alert("Failed to decline campaign!");
      return;
    }
  };
  return (
    <div>
      <Modal open={isOpen} onOpenChange={setIsOpen}>
        <Button variant="danger" onPress={() => setIsOpen(true)}>
          <LuCornerUpRight />
          Decline
        </Button>
        <Modal.Backdrop>
          <Modal.Container>
            <Modal.Dialog className="sm:max-w-[360px]">
              <Modal.CloseTrigger />
              <Modal.Header>
                <Modal.Icon className="bg-blue-100 text-blue-600">
                  <BsChatRightDotsFill />
                </Modal.Icon>
                <Modal.Heading>Decline Campaign</Modal.Heading>
              </Modal.Header>
              <Modal.Body>
                <p>
                  Are you sure you want to decline this campaign? This action
                  cannot be undone.
                </p>
              </Modal.Body>
              <Modal.Footer>
                <Button
                  onClick={handleDecline}
                  className="w-full"
                  slot="close"
                  variant="danger"
                >
                  Decline
                </Button>
              </Modal.Footer>
            </Modal.Dialog>
          </Modal.Container>
        </Modal.Backdrop>
      </Modal>
    </div>
  );
};

export default DeclineCampaign;
