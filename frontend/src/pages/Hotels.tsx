import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
// import rooms from "../data/hotel.json";

interface Room {
  name: string;
  img: string;
  description: string;
  charges: number;
  _id: string;
}

const Book = () => {
  const [rooms, setRooms] = useState<Room[] | []>([]);

  async function fetchData(url = `${process.env.BACKEND_URL}/hotel`) {
    const response = await fetch(url, {});
    return response.json();
  }

  useEffect(() => {
    fetchData().then((data) => {
      setRooms(data.data);
    });
  }, []);

  return (
    <div>
      <Navbar />
      <div className="justify-center h-full mt-10 mx-96">
        <div>
          <h1 className="text-3xl">BOOKING HOTEL </h1>
        </div>
        <div>
          {rooms.map((room) => (
            <div className="flex gap-10 my-10 border rounded-md overflow-hidden">
              <div>
                <img className="w-64" src={room.img} alt="room" />
              </div>
              <div className="w-96 mt-4 ">
                <h1 className="text-xl">{room.name}</h1>
                <p className="mt-1 text-[#919191]">{room.description}</p>
                <div className="flex justify-between mt-4">
                  <Link to={`/book/${room._id}`}>
                    <button className="px-2 border border-[#b89f80] text-xl text-[#b89f80] ">
                      select this room
                    </button>
                  </Link>
                  <h1>Start From ₹{room.charges} / Night</h1>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Book;
