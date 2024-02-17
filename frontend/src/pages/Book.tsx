import Navbar from "../components/Navbar";
import rooms from "../data/hotel.json";
const Book = () => {
  return (
    <div>
      <Navbar />
      <div className="justify-center h-full mt-10 mx-96">
        <div>
          <h1 className="text-3xl">BOOKING HOTEL </h1>
        </div>
        <div>
          {rooms.map((room) => (
            <div className="flex gap-10 my-10">
              <div>
                <img
                  className="w-64"
                  src={room.img}
                  alt="room"
                />
              </div>
              <div className="w-96">
                <h1 className="text-xl">{room.name}</h1>
                <p className="mt-3 ">
                  {room.description}
                </p>
                <div className="flex justify-between mt-4">
                  <button className="px-2 border border-[#b89f80] text-xl text-[#b89f80] ">
                    select this room
                  </button>
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
