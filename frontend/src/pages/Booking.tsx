import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

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

  //  todo: add a form to book the room

  return (
    <div>
      <h1>Booking</h1>
      <div>
        <h1>{room?.name}</h1>
        <h1>{room?.description}</h1>
        <h1>Start From ₹{room?.charges} / Night</h1>

        <img src={room?.img} />
        <div>
          <label htmlFor="First Name">First Name:</label>
          <input type="text" placeholder="Enter Your First Name" />
        </div>

        <div>
          <label htmlFor="second Name">second Name:</label>
          <input type="text" placeholder="Enter Your second Name" />
        </div>

        <div>
          <label htmlFor="last Name">last Name:</label>
          <input type="text" placeholder="Enter Your last Name" />
        </div>

        <div>
          <label htmlFor="Email">Email:</label>
          <input type="email" placeholder="Enter Your Email" />
        </div>

        <div>
          <label htmlFor="Phone Number">Phone Number:</label>
          <input type="number" placeholder="Enter Your Phone Number" />
        </div>

        <div>
          <label htmlFor="Cheak In Date">Cheak In Date:</label>
          <input type="date" />
        </div>

        <div>
          <label htmlFor="Cheak In Date">Cheak Out Date:</label>
          <input type="date" />
        </div>

        <div>
          <label htmlFor="Adults">Adults:</label>
          <input type="number" />
        </div>

        <div>
          <label htmlFor="Children">Children:</label>
          <input type="number" />
        </div>
      </div>
    </div>
  );
};

export default Booking;
