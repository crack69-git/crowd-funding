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
} from "@heroui/react";
import Link from "next/link";
import { IoRocketOutline } from "react-icons/io5";
import { FcGoogle } from "react-icons/fc";
import { useRouter } from "next/navigation";
import { authClient } from "@/lib/auth-client";

export default function LoginPage() {
  const router = useRouter();
  const handleLogin = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const res = Object.fromEntries(formData.entries());

    const { data, error } = await authClient.signIn.email({
      email: res.email,
      password: res.password,
      rememberMe: true,
      callbackURL: "/",
    });
    if (data) {
      alert("Login successful!");
    }
    if (error) {
      alert("Login failed!");
      return;
    }
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
          <TextField
            isRequired
            name="email"
            type="email"
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
          <TextField
            isRequired
            minLength={8}
            name="password"
            type="password"
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
          <div className="flex gap-2">
            <Button type="submit" className="w-full bg-green-800">
              Login
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

        {/* Google Sign In Button */}
        <Button
          variant="outline"
          className="w-full border-green-800 hover:bg-slate-50 text-green-800 font-semibold h-11 rounded-xl text-sm flex items-center justify-center gap-2"
        >
          <FcGoogle />
          Sign in with Google
        </Button>

        {/* Register Footer Link */}
        <div className="mt-8 text-center text-xs font-medium text-slate-500">
          Don't have an account?{" "}
          <Link
            href="/register"
            className="font-bold text-emerald-800 hover:underline ml-0.5"
          >
            Register
          </Link>
        </div>
      </Card>
    </div>
  );
}
