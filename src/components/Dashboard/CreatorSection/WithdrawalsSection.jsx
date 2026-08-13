"use client";
import {
  Button,
  FieldError,
  Form,
  Input,
  Label,
  ListBox,
  TextField,
  Select,
  Chip,
} from "@heroui/react";
import React from "react";
import { BsFillSendCheckFill } from "react-icons/bs";
import { ImWarning } from "react-icons/im";

const WithdrawalsSection = () => {
  const onSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    console.log("Form Submitted Data:", data);
  };
  return (
    <div className="grid grid-cols-3 grid-rows-2 gap-5 w-full">
      <div className="border  grid-cols-1 p-5 rounded-lg">
        <p className="font-bold text-lg">Total Earning</p>
        <p className="font-bold text-3xl text-green-700">
          1250 <span className="text-gray-600 text-sm">credit raised</span>
        </p>
        <div className="border flex justify-between p-2 rounded-lg mt-5">
          <div>
            <p className="font-semibold text-gray-600">Equivalent Value</p>
            <p className="text-lg font-bold text-gray-800">$ 1250</p>
          </div>
          <div>
            <p className="font-semibold text-gray-600">Market rate</p>
            <p className="text-lg font-bold text-blue-900">20 credit = $1</p>
          </div>
        </div>
      </div>
      <div className="border  grid-cols-1 p-10 rounded-lg col-span-2 row-span-2">
        <p className="font-semibold text-lg mb-5">Request Payout</p>
        <Form className="grid grid-cols-2 w-full  gap-4" onSubmit={onSubmit}>
          <TextField
            isRequired
            name="creditToWithdraw"
            type="number"
            className="col-span-2"
          >
            <Label>Credit to Withdraw</Label>
            <Input placeholder="111" />
            <FieldError />
          </TextField>
          <TextField
            isRequired
            name="withdrawalAmount"
            type="number"
            className="col-span-2"
          >
            <Label>Withdrawal Amount</Label>
            <Input placeholder="Enter withdrawal amount" />

            <FieldError />
          </TextField>
          <Select className="w-full" placeholder="Select one">
            <Label>Payment System</Label>
            <Select.Trigger>
              <Select.Value />
              <Select.Indicator />
            </Select.Trigger>
            <Select.Popover>
              <ListBox>
                <ListBox.Item id="florida" textValue="Florida">
                  Florida
                  <ListBox.ItemIndicator />
                </ListBox.Item>
              </ListBox>
            </Select.Popover>
          </Select>
          <TextField isRequired name="creditToWithdraw" type="number">
            <Label>Credit to Withdraw</Label>
            <Input placeholder="111" />
            <FieldError />
          </TextField>
          <div className="flex gap-2">
            <Button
              type="submit"
              variant="secondary"
              className="bg-green-700 text-white"
            >
              <BsFillSendCheckFill />
              Submit Request
            </Button>
            <Button type="reset" variant="secondary">
              Cancel
            </Button>
          </div>
        </Form>
      </div>
      <div className="border  p-5 rounded-lg bg-red-100 border-red-200 text-red-700">
        <div className="flex gap-2 text-2xl items-center mb-5">
          <ImWarning />
          <div>
            <span className="font-semibold  mb-5">
              Insufficient Credits for Withdrawal.
            </span>
          </div>
        </div>
        <p>
          You need a minimum of 200 credits ($10.00) to initiate a withdrawal.
          Keep pushing your campaigns!
        </p>
      </div>
    </div>
  );
};

export default WithdrawalsSection;
