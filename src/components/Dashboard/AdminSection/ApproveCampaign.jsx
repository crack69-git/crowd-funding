"use client";
import { patchCampaignState } from "@/lib/actions/patchSection";
import { Button, Modal } from "@heroui/react";
import { useRouter } from "next/navigation";
import React from "react";
import { BsChatRightDotsFill } from "react-icons/bs";
import { LuCornerUpRight } from "react-icons/lu";

const ApproveCampaign = ({ id }) => {
  const router = useRouter();
  const [isOpen, setIsOpen] = React.useState(false);
  const handleApprove = async () => {
    const res = await patchCampaignState(id, "approved");
    if (res.modifiedCount > 0) {
      alert("Campaign approved successfully!");
      setIsOpen(false);
      router.refresh();
    } else {
      alert("Failed to approve campaign!");
      return;
    }
  };
  return (
    <div>
      <Modal open={isOpen} onOpenChange={setIsOpen}>
        <Button variant="primary" onPress={() => setIsOpen(true)}>
          <LuCornerUpRight />
          Approve
        </Button>
        <Modal.Backdrop>
          <Modal.Container>
            <Modal.Dialog className="sm:max-w-[360px]">
              <Modal.CloseTrigger />
              <Modal.Header>
                <Modal.Icon className="bg-blue-100 text-blue-600">
                  <BsChatRightDotsFill />
                </Modal.Icon>
                <Modal.Heading>Approve Campaign</Modal.Heading>
              </Modal.Header>
              <Modal.Body>
                <p>
                  Are you sure you want to approve this campaign? This action
                  cannot be undone.
                </p>
              </Modal.Body>
              <Modal.Footer>
                <Button
                  onClick={handleApprove}
                  className="w-full"
                  slot="close"
                  variant="primary"
                >
                  Approve
                </Button>
              </Modal.Footer>
            </Modal.Dialog>
          </Modal.Container>
        </Modal.Backdrop>
      </Modal>
    </div>
  );
};

export default ApproveCampaign;
