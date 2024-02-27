import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import { useUser } from "@clerk/clerk-react";
import { toast } from "sonner";

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

  const user = useUser();
  const navigate = useNavigate();
  console.log(user);

  const [credentials, setCredentials] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    checkInDate: "",
    checkOutDate: "",
    adults: 0,
    children: 0,
    roomType: "",
  });

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

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

  const handelSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const data = {
      ...credentials,
      hotelId,
      name: room?.name,
      totalAmount: room?.charges,
      userId: user.user?.username,
    };

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

  return (
    <div>
      <Navbar />

      <div className="flex justify-center  w-full mx-10 h-screen items-center">
        <div className="grid w-96 border rounded-md overflow-hidden">
          <img src={room?.img} />
          <div className="p-4">
            <h1 className="text-3xl">{room?.name}</h1>
            <h1>{room?.description}</h1>
            <br />
            <br />

            <h1 className="text-2xl">Start From ₹{room?.charges} / Night</h1>
          </div>
        </div>

        <form className="p-5 m-5 border rounded-md" onSubmit={handelSubmit}>
          <div className="flex gap-3 mb-4">
            <div className="grid">
              <label htmlFor="First Name">First Name:</label>
              <input
                name="firstName"
                onChange={onChange}
                className="bg-[#0a0a0a] p-2 rounded-md mt-2 h-10"
                type="text"
                placeholder="Enter Your First Name"
              />
            </div>

            <div className="grid">
              <label htmlFor="last Name">last Name:</label>
              <input
                name="lastName"
                onChange={onChange}
                className="bg-[#0a0a0a] p-2 rounded-md mt-2 h-10"
                type="text"
                placeholder="Enter Your last Name"
              />
            </div>
          </div>

          <div className="flex gap-3 mb-4">
            <div className="grid">
              <label htmlFor="Email">Email:</label>
              <input
                name="email"
                onChange={onChange}
                className="bg-[#0a0a0a] p-2 rounded-md mt-2 h-10"
                type="email"
                placeholder="Enter Your Email"
              />
            </div>

            <div className="grid">
              <label htmlFor="Phone Number">Phone Number:</label>
              <input
                onChange={onChange}
                name="phoneNumber"
                className="bg-[#0a0a0a] p-2 rounded-md mt-2 h-10"
                type="number"
                placeholder="Enter Your Phone Number"
              />
            </div>
          </div>

          <div className="flex gap-3 mb-4">
            <div className="grid">
              <label htmlFor="Adults">Adults:</label>
              <input
                name="adults"
                onChange={onChange}
                placeholder="Adults"
                className="bg-[#0a0a0a] p-2 rounded-md mt-2 h-10"
                type="number"
              />
            </div>

            <div className="grid">
              <label htmlFor="Children">Children:</label>
              <input
                name="children"
                onChange={onChange}
                placeholder="Children"
                className="bg-[#0a0a0a] p-2 rounded-md mt-2 h-10"
                type="number"
              />
            </div>
          </div>

          <div className="flex gap-3 mb-4 justify-center">
            <div className="grid">
              <label htmlFor="Cheak In Date">Cheak In Date:</label>
              <input
                onChange={onChange}
                name="checkInDate"
                className="bg-[#0a0a0a] p-2 rounded-md mt-2 h-10"
                type="date"
              />
            </div>

            <div className="grid">
              <label htmlFor="Cheak In Date">Cheak Out Date:</label>
              <input
                name="checkOutDate"
                onChange={onChange}
                className="bg-[#0a0a0a] p-2 rounded-md mt-2 h-10"
                type="date"
              />
            </div>
          </div>

          <div className="flex items-center mb-4 justify-center">
            <label htmlFor="Children">room Type:</label>

            <button
              type="button"
              className={`${
                credentials.roomType === "AC" ? "border" : ""
              } m-3 px-3 rounded-md`}
              onClick={() => setCredentials({ ...credentials, roomType: "AC" })}
            >
              AC
            </button>
            {" - "}
            <button
              type="button"
              className={`${
                credentials.roomType === "Non-AC" ? "border" : ""
              } m-3 px-3 rounded-md`}
              onClick={() =>
                setCredentials({ ...credentials, roomType: "Non-AC" })
              }
            >
              Non-AC
            </button>
          </div>

          <div className="flex justify-center">
            <button type="submit" className="p-2 border rounded-md">
              submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Booking;
