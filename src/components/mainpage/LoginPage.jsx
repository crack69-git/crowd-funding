"use client";

import {
  Button,
  Description,
  FieldError,
  Form,
  Input,
  Label,
  Radio,
  RadioGroup,
  TextField,
} from "@heroui/react";

const LoginPage = () => {
  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const res = Object.fromEntries(formData.entries());
  };
  return (
    <div>
      <Form
        className="flex w-full flex-col gap-4 overflow-hidden"
        onSubmit={onSubmit}
      >
        <TextField
          isRequired
          name="username"
          type="text"
          defaultValue="john_doe"
        >
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
          <Input
            placeholder="john@example.com"
            className="w-fit overflow-hidden"
          />
          <FieldError />
        </TextField>
        <TextField
          isRequired
          name="imageLink"
          type="text"
          defaultValue="https://ibb.co.com/KxSzqv5D"
        >
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
    </div>
  );
};

export default LoginPage;
