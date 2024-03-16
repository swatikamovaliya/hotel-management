/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { useUser } from "@clerk/clerk-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

type DateCallback = (date: Date) => string;

const MyRoom = () => {
  const user = useUser();

  const [mytooms, setMytooms] = useState([]);

  const fetchMyRooms = async () => {
    try {
      const userId = user.user?.username; // Replace with the actual user ID
      const response = await fetch("http://localhost:3005/hotel/myrooms", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ userId }),
      });

      if (response.ok) {
        const data = await response.json();
        setMytooms(data.data);
      } else {
        throw new Error("Failed to fetch data");
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchMyRooms();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  //  date formater

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
    <div>
      <Navbar />
      <div className="mt-10 mx-44 ">
        <h1 className="text-4xl font-bold">Your Bookings</h1>
        <div>
          {mytooms.map((room: any) => (
            <Card key={room._id} className="border-2 rounded-md p-4 my-4">
              <div className="flex justify-between">
                <div>
                  <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
                    {room.name}
                  </h3>
                  <div className="flex mt-3 gap-3">
                    <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold">
                      {formatDate(room.checkInDate, formatCallback)}
                    </code>
                    to
                    <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold">
                      {formatDate(room.checkOutDate, formatCallback)}
                    </code>
                  </div>
                </div>
                <Button>
                  <Link to={`/book/${room.hotelId}`}>View</Link>
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyRoom;
