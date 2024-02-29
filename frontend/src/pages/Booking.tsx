import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import { useUser } from "@clerk/clerk-react";
import { Card } from "@/components/ui/card";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { CalendarDateRangePicker } from "@/components/ui/date-range-picker";
import { addDays } from "date-fns";
import { DateRange } from "react-day-picker";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { toast } from "sonner";

const formSchema = z.object({
  firstName: z.string().min(2).max(50),
  lastName: z.string().min(2).max(50),
  email: z.string().email(),
  phoneNumber: z.string(),
  adults: z.string(),
  children: z.string().optional(),
  roomType: z.enum(["AC", "NON-AC"], {
    required_error: "You need to select a notification type.",
  }),
});

interface Room {
  name: string;
  img: string;
  description: string;
  charges: number;
  _id: string;
}

const Booking = () => {
  const [room, setRoom] = useState<Room | null>(null);
  const { hotelId } = useParams();
  const navigate = useNavigate();

  const [date, setDate] = React.useState<DateRange | undefined>({
    from: new Date(2023, 0, 20),
    to: addDays(new Date(2023, 0, 20), 20),
  });

  useEffect(() => {
    console.log(date);
  }, [date]);

  const user = useUser();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    const data = {
      ...values,
      hotelId,
      checkInDate: date?.from,
      checkOutDate: date?.to,
      name: room?.name,
      totalAmount: room?.charges,
      userId: user.user?.username,
    };

    const handleSubmit = async () => {
      const response = await fetch(
        `http://localhost:3005/hotel/${hotelId}/book`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      ).then((res) => (res.ok ? toast.success("booking successfuly") : null));

      navigate("/myroom");
      console.log("response", response);
    };

    handleSubmit();

    console.log(values);
  }

  useEffect(() => {
    async function fetchData(url = `http://localhost:3005/hotel/${hotelId}`) {
      const response = await fetch(url, {});
      return response.json();
    }
    fetchData().then((data) => {
      console.log(data);
      setRoom(data.data);
    });
  }, [hotelId]);

  return (
    <div>
      <Navbar />
      <div className="flex justify-center  w-full  h-screen items-center">
        <Card className="grid w-96  rounded-md overflow-hidden">
          <img className="w-96 h-96" src={room?.img} />
          <div className="p-4">
            <h1 className="text-3xl">{room?.name}</h1>
            <h1>{room?.description}</h1>
            <br />
            <br />

            <h1 className="text-2xl">Start From ₹{room?.charges} / Night</h1>
          </div>
        </Card>

        <Card className="w-[500px] ml-10 p-4">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <div className="flex w-full justify-between">
                <FormField
                  control={form.control}
                  name="firstName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>First name</FormLabel>
                      <FormControl>
                        <Input placeholder="shadcn" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="lastName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Last name</FormLabel>
                      <FormControl>
                        <Input placeholder="Last name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Your email</FormLabel>
                    <FormControl>
                      <Input placeholder="Your email" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="phoneNumber"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>phone Number</FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        placeholder="phoneNumber"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="flex w-full justify-between">
                <FormField
                  control={form.control}
                  name="adults"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>adults</FormLabel>
                      <FormControl>
                        <Input type="number" placeholder="shadcn" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="children"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>children</FormLabel>
                      <FormControl>
                        <Input
                          type="number"
                          placeholder="Last name"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="roomType"
                render={({ field }) => (
                  <FormItem className="space-y-3">
                    <FormLabel>Room type: </FormLabel>
                    <FormControl>
                      <RadioGroup
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                        className="flex flex-col space-y-1"
                      >
                        <FormItem className="flex items-center space-x-3 space-y-0">
                          <FormControl>
                            <RadioGroupItem value="AC" />
                          </FormControl>
                          <FormLabel className="font-normal">AC</FormLabel>
                        </FormItem>
                        <FormItem className="flex items-center space-x-3 space-y-0">
                          <FormControl>
                            <RadioGroupItem value="NON-AC" />
                          </FormControl>
                          <FormLabel className="font-normal">NON-AC</FormLabel>
                        </FormItem>
                      </RadioGroup>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <CalendarDateRangePicker date={date} setDate={setDate} />

              <Button type="submit">Submit</Button>
            </form>
          </Form>
        </Card>
      </div>
    </div>
  );
};

export default Booking;
