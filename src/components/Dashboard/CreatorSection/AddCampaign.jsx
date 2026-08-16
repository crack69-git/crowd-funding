"use client";
import {
  Button,
  Description,
  FieldError,
  Form,
  Input,
  Label,
  ListBox,
  Separator,
  TextField,
  Select,
  Calendar,
  DatePicker,
  DateField,
  TextArea,
  Chip,
} from "@heroui/react";
import React, { useState } from "react";

import { postCampaign } from "@/lib/actions/postSection";
import { useRouter } from "next/navigation";

const AddCampaign = ({ tiers, user }) => {
  const limit = 5000;
  const router = useRouter();
  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    const campainData = {
      campaignTitle: data.campaignTitle,
      campaignCategory: data.campaignCategory,
      deadline: data.deadline,
      fundingGoal: data.fundingGoal,
      minimumAmount: data.minimumAmount,
      description: data.story,
      campaignImage: data.campaignImage,
      tier: data.rewardTier,
      status: "active",
      dateCreated: new Date().toLocaleDateString("en-CA"),
      creatorId: user?.id,
      CreatorName: user?.name,
      CreatorEmail: user?.email,
    };
    console.log("Campaign Data to be posted:", campainData);

    const res = await postCampaign(campainData);
    console.log(res);
    if (res.acknowledged) {
      alert("Campaign posted successfully");
      router.refresh();
    } else {
      alert("Failed to post campaign");
    }
  };

  const categoryItem = (
    <>
      <ListBox.Item id="community" textValue="Community">
        Community
        <ListBox.ItemIndicator />
      </ListBox.Item>
      <ListBox.Item id="education" textValue="Education">
        Education
        <ListBox.ItemIndicator />
      </ListBox.Item>
      <ListBox.Item id="technology" textValue="Technology">
        Technology
        <ListBox.ItemIndicator />
      </ListBox.Item>
      <ListBox.Item id="health" textValue="Health">
        Health
        <ListBox.ItemIndicator />
      </ListBox.Item>
    </>
  );

  return (
    <Form className="flex w-full flex-col gap-4" onSubmit={onSubmit}>
      <div className="grid grid-cols-3 gap-4">
        {/* Basic Info */}
        <div className="col-span-2 border-2 shadow-lg border-gray-200 rounded-lg p-4">
          <p className="font-bold text-lg ">Basic Info</p>
          <Separator className="my-4" />
          <TextField
            isRequired
            name="campaignTitle"
            type="text"
            className="mb-4"
            defaultValue="educa field"
          >
            <Label>Campaign Title</Label>
            <Input placeholder="Enter campaign title" />
            <FieldError />
          </TextField>
          <div className="grid grid-cols-2 gap-4">
            <Select
              isRequired
              className="w-full"
              name="campaignCategory"
              placeholder="Select one"
              variant="primary"
            >
              <Label>Category</Label>
              <Select.Trigger>
                <Select.Value />
                <Select.Indicator />
              </Select.Trigger>
              <Select.Popover>
                <ListBox>{categoryItem}</ListBox>
              </Select.Popover>
            </Select>
            <DatePicker className="w-full" name="deadline" isRequired>
              <Label>Funding Deadline</Label>
              <DateField.Group fullWidth>
                <DateField.Input>
                  {(segment) => <DateField.Segment segment={segment} />}
                </DateField.Input>
                <DateField.Suffix>
                  <DatePicker.Trigger>
                    <DatePicker.TriggerIndicator />
                  </DatePicker.Trigger>
                </DateField.Suffix>
              </DateField.Group>
              <DatePicker.Popover>
                <Calendar aria-label="Event date">
                  <Calendar.Header>
                    <Calendar.YearPickerTrigger>
                      <Calendar.YearPickerTriggerHeading />
                      <Calendar.YearPickerTriggerIndicator />
                    </Calendar.YearPickerTrigger>
                    <Calendar.NavButton slot="previous" />
                    <Calendar.NavButton slot="next" />
                  </Calendar.Header>
                  <Calendar.Grid>
                    <Calendar.GridHeader>
                      {(day) => (
                        <Calendar.HeaderCell>{day}</Calendar.HeaderCell>
                      )}
                    </Calendar.GridHeader>
                    <Calendar.GridBody>
                      {(date) => <Calendar.Cell date={date} />}
                    </Calendar.GridBody>
                  </Calendar.Grid>
                  <Calendar.YearPickerGrid>
                    <Calendar.YearPickerGridBody>
                      {({ year }) => <Calendar.YearPickerCell year={year} />}
                    </Calendar.YearPickerGridBody>
                  </Calendar.YearPickerGrid>
                </Calendar>
              </DatePicker.Popover>
            </DatePicker>
          </div>
        </div>

        {/* Funding Goals */}
        <div className="col-span-1 border-2 shadow-lg border-gray-200 rounded-lg p-4">
          <p className="font-semibold text-lg">Funding Goals</p>
          <Separator className="my-4" />
          <div>
            <TextField
              isRequired
              name="fundingGoal"
              type="number"
              className="mb-4"
              defaultValue="1000"
            >
              <Label>Funding Goal</Label>
              <Input placeholder="Enter funding goal" />
              <FieldError />
            </TextField>
            <TextField
              isRequired
              name="minimumAmount"
              type="number"
              className="mb-4"
              defaultValue="100"
            >
              <Label>Minimum Contribution</Label>
              <Input placeholder="Enter minimum contribution" />
              <FieldError />
            </TextField>
          </div>
        </div>

        {/* The Story */}
        <div className="col-span-2 border-2 shadow-lg border-gray-200 rounded-lg p-4">
          <p className="font-semibold text-lg">The Story</p>
          <Separator className="my-4" />
          <TextField isRequired name="description">
            <Label>Campaign Story</Label>
            <TextArea
              placeholder="Tell about your mission..."
              className="h-34"
              maxLength={limit}
              name="story"
            />
            <FieldError />
          </TextField>
          <div className="text-right text-sm text-gray-400 mt-2">0/{limit}</div>
        </div>

        {/* Campaign Media & Rewards */}
        <div className="col-span-1 border-2 shadow-lg border-gray-200 rounded-lg p-4">
          <p className="font-semibold text-lg">Campaign</p>
          <Separator className="my-4" />
          <TextField
            isRequired
            name="campaignImage"
            type="text"
            className="mb-4"
            defaultValue="1000"
          >
            <Label>Campaign Image URL</Label>
            <Input placeholder="Enter image link" />
            <FieldError />
          </TextField>
          <TextField isRequired name="tier" type="text" className="mt-4">
            <div className="flex justify-between items-center">
              <Label>Reward</Label>
            </div>
            <Select
              className="w-full"
              name="rewardTier"
              placeholder="Select one"
            >
              <Label>Reward Tier</Label>
              <Select.Trigger>
                <Select.Value />
                <Select.Indicator />
              </Select.Trigger>
              <Select.Popover>
                <ListBox>
                  {tiers.map((tier) => (
                    <ListBox.Item
                      key={tier._id}
                      id={tier.tierName}
                      textValue={tier.tierName}
                    >
                      {tier.tierName}
                      <ListBox.ItemIndicator />
                    </ListBox.Item>
                  ))}
                </ListBox>
              </Select.Popover>
            </Select>
            <FieldError />
          </TextField>
        </div>
      </div>

      <div className="flex gap-2">
        <Button type="submit">Post Campaign</Button>
        <Button type="reset" variant="secondary">
          Reset Form
        </Button>
      </div>
    </Form>
  );
};

export default AddCampaign;
