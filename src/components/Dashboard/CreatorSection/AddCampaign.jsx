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

const AddCampaign = () => {
  // Separate state for each controlled text area
  const [bio, setBio] = useState("this is descriptopm");
  const [rewardDetails, setRewardDetails] = useState("this is descriptopm");
  const limit = 5000;

  const onSubmit = (e) => {
    e.preventDefault();
    // Native HTML Form submission handling
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    console.log("Form Submitted Data:", data);
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
              name="totalAmount"
              type="number"
              className="mb-4"
              defaultValue="1000"
            >
              <Label>Total Amount</Label>
              <Input placeholder="Enter total amount" />
              <FieldError />
            </TextField>
            <TextField
              isRequired
              name="minimumAmount"
              type="number"
              className="mb-4"
              defaultValue="100"
            >
              <Label>Minimum Amount</Label>
              <Input placeholder="Enter minimum amount" />
              <FieldError />
            </TextField>
          </div>
        </div>

        {/* The Story */}
        <div className="col-span-2 border-2 shadow-lg border-gray-200 rounded-lg p-4">
          <p className="font-semibold text-lg">The Story</p>
          <Separator className="my-4" />
          <TextField isRequired name="description">
            <Label>Detailed Story & Mission</Label>
            <TextArea
              placeholder="Tell about your mission..."
              className="h-34"
              maxLength={limit}
              onChange={(e) => setBio(e.target.value)}
              value={bio}
            />
            <FieldError />
          </TextField>
          <div className="text-right text-sm text-gray-400 mt-2">
            {bio.length}/{limit}
          </div>
        </div>

        {/* Campaign Media & Rewards */}
        <div className="col-span-1 border-2 shadow-lg border-gray-200 rounded-lg p-4">
          <p className="font-semibold text-lg">Campaign</p>
          <Separator className="my-4" />
          <TextField name="campaignImage">
            <Label>Upload Image</Label>
            <Input
              type="file"
              accept="image/*"
              className="block w-full text-sm text-gray-500
                file:mr-4 file:py-2 file:px-4
                file:rounded-full file:border-0
                file:text-sm file:font-semibold
                file:bg-blue-50 file:text-blue-700
                hover:file:bg-blue-100"
            />
            <FieldError />
          </TextField>
          <TextField isRequired name="tier" type="text" className="mt-4">
            <div className="flex justify-between items-center">
              <Label>Reward</Label>
              <Chip variant="secondary">Add Tier</Chip>
            </div>
            <p className="text-sm">Selected Tier: </p>
            <TextArea
              placeholder="More details about the reward..."
              className="h-auto"
              maxLength={limit}
              onChange={(e) => setRewardDetails(e.target.value)}
              value={rewardDetails}
            />
            <FieldError />
          </TextField>
        </div>
      </div>

      <div className="flex gap-2">
        <Button type="submit">Submit</Button>
        <Button type="reset" variant="secondary">
          Reset
        </Button>
      </div>
    </Form>
  );
};

export default AddCampaign;
