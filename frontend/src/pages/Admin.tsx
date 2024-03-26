/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import CreateHotel from "@/components/CreateHotel";
import { ScrollArea } from "@/components/ui/scroll-area";
import HotelListAdmin from "@/components/HotelListAdmin";
import AdminNav from "@/components/AdminNav";

type DateCallback = (date: Date) => string;

const Admin = () => {
  const [totalRevenue, setTotalRevenue] = useState(0);
  const [Subscriptions, setSubscriptions] = useState(0);
  const [allUsers, setAllUsers] = useState([]);
  const [resentHotel, setResentHotel] = useState([]);
  const [allSubscription, setAllSubscription] = useState([]);

  const fetchTotalRevenue = async () => {
    try {
      const response = await fetch(
        `${process.env.BACKEND_URL}/admin/TotalRevenue`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.ok) {
        const data = await response.json();
        setTotalRevenue(data.totalRevenue);
      } else {
        throw new Error("Failed to fetch data");
      }
    } catch (error) {
      console.error(error);
    }
  };

  const fetchSubscriptions = async () => {
    try {
      const response = await fetch(
        `${process.env.BACKEND_URL}/admin/Subscriptions`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.ok) {
        const data = await response.json();
        setSubscriptions(data.subscriptions);
      } else {
        throw new Error("Failed to fetch data");
      }
    } catch (error) {
      console.error(error);
    }
  };

  const fetchAllUsers = async () => {
    try {
      const response = await fetch(
        `${process.env.BACKEND_URL}/admin/getAllUsers`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.ok) {
        const data = await response.json();
        setAllUsers(data.data);
      } else {
        throw new Error("Failed to fetch data");
      }
    } catch (error) {
      console.error(error);
    }
  };

  const fetchResentHotels = async () => {
    try {
      const response = await fetch(
        `${process.env.BACKEND_URL}/admin/resentHotels`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.ok) {
        const data = await response.json();
        console.log(data.data);
        setResentHotel(data.data);
      } else {
        throw new Error("Failed to fetch data");
      }
    } catch (error) {
      console.error(error);
    }
  };

  const fetchallSubscriptions = async () => {
    try {
      const response = await fetch(
        `${process.env.BACKEND_URL}/admin/allSubscriptions`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.ok) {
        const data = await response.json();
        console.log(data.data);
        setAllSubscription(data.data);
      } else {
        throw new Error("Failed to fetch data");
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchTotalRevenue();
    fetchSubscriptions();
    fetchAllUsers();
    fetchResentHotels();
    fetchallSubscriptions();
  }, []);

  function formatDate(dateString: string, callback: DateCallback): string {
    const inputDate = new Date(dateString);
    const formattedDate = callback(inputDate);
    return formattedDate;
  }

  function formatCallback(date: Date): string {
    return `${date.getDate()} ${date
      .toLocaleString("default", { month: "short" })
      .toUpperCase()
      .slice(0, 3)} ${date.getFullYear()}`;
  }

  return (
    <div className="space-y-4 m-4">
      <AdminNav />
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-2">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="h-4 w-4 text-muted-foreground"
            >
              <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
            </svg>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">₹{totalRevenue}</div>
            <p className="text-xs text-muted-foreground">
              +20.1% from last month
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Subscriptions</CardTitle>
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="outline">See all</Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[700px]">
                <ScrollArea className="h-[600px] p-4">
                  <DialogHeader>
                    <DialogTitle>All Subscriptions</DialogTitle>
                  </DialogHeader>
                  <div className="grid gap-4 py-4">
                    {allSubscription.map((sub: any, index) => (
                      <div key={index} className="flex items-center">
                        <div className="ml-4 space-y-1">
                          <p className="text-lg my-2 font-medium leading-none">
                            {sub?.name} by {sub?.userId}
                          </p>
                          <div className="flex mt-3 gap-3">
                            <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold">
                              {formatDate(sub.checkInDate, formatCallback)}
                            </code>
                            to
                            <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold">
                              {formatDate(sub.checkOutDate, formatCallback)}
                            </code>
                          </div>
                        </div>
                        <div className="ml-auto font-medium">{sub?.status}</div>
                      </div>
                    ))}
                  </div>
                </ScrollArea>
              </DialogContent>
            </Dialog>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">+{Subscriptions}</div>
            <p className="text-xs text-muted-foreground">
              +180.1% from last month
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <Card className="col-span-4">
          <CardHeader>
            <CardTitle>
              <div className="justify-between flex">
                <p>Resent Hotel Books</p>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="outline">Add hotel</Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[700px] p-0">
                    <ScrollArea className="h-[600px] rounded-md border p-4">
                      <CreateHotel />
                    </ScrollArea>
                  </DialogContent>
                </Dialog>
              </div>
            </CardTitle>
          </CardHeader>
          <CardContent className="pl-2">
            <div className="flex flex-col space-y-2 gap-y-4">
              {resentHotel.map((hotel: any, index) => (
                <div key={index} className="flex items-center">
                  <div className="ml-4 space-y-1">
                    <p className="text-base font-medium leading-none">
                      {hotel?.name}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Book by {hotel.userId} at price {hotel.totalAmount}₹
                    </p>
                  </div>
                  <div className="ml-auto font-medium">
                    {new Date(hotel.createdAt).toLocaleString("en-US", {
                      year: "numeric",
                      month: "2-digit",
                      day: "2-digit",
                      hour: "2-digit",
                      minute: "2-digit",
                      second: "2-digit",
                      hour12: false, // Use 24-hour clock
                    })}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
        <Card className="col-span-3">
          <CardHeader>
            <CardTitle>All users</CardTitle>
            <CardDescription>You made 265 sales this month.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col space-y-2">
              <div className="space-y-8">
                {allUsers.map((user: any) => (
                  <div key={user.id} className="flex items-center">
                    <Avatar className="h-9 w-9">
                      <AvatarImage src={user.imageUrl} alt="Avatar" />
                      <AvatarFallback>OM</AvatarFallback>
                    </Avatar>
                    <div className="ml-4 space-y-1">
                      <p className="text-sm font-medium leading-none">
                        {user.username}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {user.emailAddresses[0].emailAddress}
                      </p>
                    </div>
                    <div className="ml-auto font-medium">
                      {new Date(user.lastSignInAt).toLocaleString("en-US", {
                        year: "numeric",
                        month: "2-digit",
                        day: "2-digit",
                        hour: "2-digit",
                        minute: "2-digit",
                        second: "2-digit",
                        hour12: true, // Use 12-hour clock
                      })}
                    </div>
                  </div>
                ))}
                {/* <div className="flex items-center">
                  <Avatar className="h-9 w-9">
                    <AvatarImage src="/avatars/01.png" alt="Avatar" />
                    <AvatarFallback>OM</AvatarFallback>
                  </Avatar>
                  <div className="ml-4 space-y-1">
                    <p className="text-sm font-medium leading-none">
                      Olivia Martin
                    </p>
                    <p className="text-sm text-muted-foreground">
                      olivia.martin@email.com
                    </p>
                  </div>
                  <div className="ml-auto font-medium">+$1,999.00</div>
                </div> */}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
      <HotelListAdmin />
    </div>
  );
};

export default Admin;
