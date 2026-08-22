import { getSingleCampaign } from "@/lib/actions/patchSection";
import {
  Button,
  Card,
  Chip,
  CloseButton,
  Label,
  ProgressBar,
  Separator,
} from "@heroui/react";
import Image from "next/image";
import React from "react";
import { BiDollar } from "react-icons/bi";
import styled from "styled-components";

const CampaignDetailsCard = async ({ params }) => {
  const { id } = await params;
  const data = await getSingleCampaign(id);
  console.log(data);
  return (
    <div className="min-h-screen w-11/12 mx-auto my-5  flex justify-center items-start">
      {""}
      <Card className="w-3/5 items-stretch">
        <p className="text-4xl font-bold text-green-700">Campaign Details</p>
        <p className="text-lg font-semibold text-gray-600">
          Explore the details of this exciting campaign!
        </p>
        <Separator className="my-5" />
        <div className="relative h-96 w-full shrink-0 overflow-hidden rounded-2xl border">
          <Image
            src={data.campaignImage}
            loading="lazy"
            alt="Campaign Image"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="flex flex-1 flex-col gap-3">
          <Card.Header className="gap-1">
            <Card.Title className="pe-8 text-3xl font-bold text-gray-800 mb-3 flex items-center gap-2">
              {data.campaignTitle}
              <Chip color="success">{data.campaignCategory}</Chip>
            </Card.Title>
            <p className="text-lg font-semibold text-gray-700">
              Campaign Creator: {data.CreatorName}
            </p>
            <Separator className="my-2" />
            <Card.Description>{data.description}</Card.Description>
          </Card.Header>
          <Separator className="my-2" />
          <Card.Footer className="mt-auto flex w-full flex-col items-start gap-10 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex flex-col w-full ">
              <ProgressBar
                aria-label="Loading"
                className="full w-full mx-auto"
                value={(data.TotalRaised / data.fundingGoal) * 100}
              >
                <Label>
                  Fund Raised{" "}
                  <span className="text-gray-600 flex items-center">
                    <BiDollar />
                    {data.TotalRaised} out of
                    <BiDollar />
                    {data.fundingGoal}
                  </span>
                </Label>
                <ProgressBar.Output />
                <ProgressBar.Track>
                  <ProgressBar.Fill />
                </ProgressBar.Track>
              </ProgressBar>
              <span className="text-xs text-muted">
                Deadline: {data.deadline}
              </span>
            </div>
            <Button className="w-full sm:w-auto rounded-lg bg-green-900">
              Fund Campaign
            </Button>
          </Card.Footer>
        </div>
      </Card>
    </div>
  );
};
export default CampaignDetailsCard;
