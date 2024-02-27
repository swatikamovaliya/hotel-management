/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { useUser } from "@clerk/clerk-react";

const MyRoom = () => {
  const user = useUser();

  const [mytooms, setMytooms] = useState([]);

  useEffect(() => {
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

    fetchMyRooms();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <Navbar />
      <div className="mt-10 mx-44 ">
        <h1 className="text-4xl">Your Bookings</h1>
        <div>
          {mytooms.map((room: any) => (
            <div key={room._id} className="border-2 border-gray-200 p-4 my-4">
              <h1 className="text-2xl">{room.name}</h1>
              <p>{room.checkInDate}</p>
              <p>{room.checkOutDate}</p>
              <p>{room.totalAmount}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyRoom;
