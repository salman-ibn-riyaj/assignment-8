"use client";
import { Check } from "@gravity-ui/icons";
import {
  Button,
  Description,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
} from "@heroui/react";
import { Toast, toast } from "@heroui/react";

const BookingForm = () => {
  return (
    <Form className="flex w-96 flex-col gap-4 mb-10">
      <TextField isRequired name="name" type="text">
        <Label>Name</Label>
        <Input placeholder="Enter your name" />
        <FieldError />
      </TextField>
      <TextField isRequired name="email" type="email">
        <Label>Email</Label>
        <Input placeholder="Enter your email" />
        <FieldError />
      </TextField>
      <TextField isRequired minLength={8} name="phone" type="text">
        <Label>Phone</Label>
        <Input placeholder="Enter your Phone number" />
        <FieldError />
      </TextField>
      <TextField isRequired minLength={8} name="address" type="text">
        <Label>Address</Label>
        <Input placeholder="Enter your address" />
        <FieldError />
      </TextField>
      <div className="flex gap-2">
        <Toast.Provider />
        <Button onPress={() => toast.success("Booking Success")} type="submit">
          <Check />
          Submit
        </Button>
        <Button type="reset" variant="secondary">
          Reset
        </Button>
      </div>
    </Form>
  );
};

export default BookingForm;
