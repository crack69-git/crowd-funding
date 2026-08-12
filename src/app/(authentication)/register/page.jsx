"use client";
import React from "react";
import {
  Card,
  Input,
  Button,
  FieldError,
  Description,
  Label,
  TextField,
  Form,
  Dropdown,
  Radio,
  RadioGroup,
} from "@heroui/react";
import Link from "next/link";
import { IoRocketOutline } from "react-icons/io5";
import { FcGoogle } from "react-icons/fc";
import { MdOutlineArrowDropDownCircle } from "react-icons/md";
const page = () => {
  const handleLogin = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    console.log(data);
  };
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-emerald-50/40 via-slate-50 to-blue-50/40 p-4">
      <Card
        shadow="sm"
        className="w-full max-w-md bg-white border border-slate-200/80 rounded-2xl p-8 sm:p-10"
      >
        {/* Brand Header */}
        <div className="flex flex-col items-center text-center mb-8">
          <div className="flex items-center gap-2 mb-2">
            <IoRocketOutline className="w-8 h-8 text-emerald-700 -rotate-45" />
            <h1 className="text-2xl sm:text-3xl font-bold text-emerald-800 tracking-tight">
              Crowdfundly
            </h1>
          </div>
          <p className="text-xs sm:text-sm text-slate-500 font-medium">
            Welcome back. Let's build momentum.
          </p>
        </div>

        <Form className="flex w-96 flex-col gap-4" onSubmit={handleLogin}>
          <TextField isRequired name="username" type="text">
            <Label>Username</Label>
            <Input placeholder="john_doe" />
            <FieldError />
          </TextField>
          <TextField
            isRequired
            name="email"
            type="email"
            defaultValue="john@example.com"
            validate={(value) => {
              if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                return "Please enter a valid email address";
              }
              return null;
            }}
          >
            <Label>Email</Label>
            <Input placeholder="john@example.com" />
            <FieldError />
          </TextField>
          <TextField isRequired name="imageLink" type="text">
            <Label>Image URL</Label>
            <Input placeholder="https://example.com/image.jpg" />
            <FieldError />
          </TextField>
          <TextField
            isRequired
            minLength={8}
            name="password"
            type="password"
            defaultValue="12345678"
            validate={(value) => {
              if (value.length < 8) {
                return "Password must be at least 8 characters";
              }

              return null;
            }}
          >
            <Label>Password</Label>
            <Input placeholder="Enter your password" />
            <Description>
              Must be at least 8 characters with 1 uppercase and 1 number
            </Description>
            <FieldError />
          </TextField>
          <TextField>
            <div className="flex flex-col gap-2">
              <Label>Role</Label>
              <RadioGroup
                isRequired
                defaultValue="pro"
                name="role"
                orientation="horizontal"
                defaultValue="supporter"
              >
                <Radio value="supporter">
                  <Radio.Content>
                    <Radio.Control>
                      <Radio.Indicator className="border rounded-full" />
                    </Radio.Control>
                    Supporter
                  </Radio.Content>
                </Radio>
                <Radio value="creator">
                  <Radio.Content>
                    <Radio.Control>
                      <Radio.Indicator className="border rounded-full" />
                    </Radio.Control>
                    Creator
                  </Radio.Content>
                </Radio>
                <Radio value="admin">
                  <Radio.Content>
                    <Radio.Control>
                      <Radio.Indicator className="border rounded-full" />
                    </Radio.Control>
                    Admin
                  </Radio.Content>
                </Radio>
              </RadioGroup>
            </div>
          </TextField>
          <div className="flex gap-2">
            <Button type="submit" className="w-full bg-green-800">
              Register
            </Button>
          </div>
        </Form>

        {/* Divider */}
        <div className="relative my-6 flex items-center justify-center">
          <div className="w-full border-t border-slate-200"></div>
          <span className="absolute bg-white px-3 text-[11px] font-semibold tracking-wider text-slate-400 uppercase">
            OR
          </span>
        </div>

        {/* Register Footer Link */}
        <div className="text-center text-xs font-medium text-slate-500">
          Already have an account?{" "}
          <Link
            href="/login"
            className="font-bold text-emerald-800 hover:underline ml-0.5"
          >
            Login
          </Link>
        </div>
      </Card>
    </div>
  );
};

export default page;
