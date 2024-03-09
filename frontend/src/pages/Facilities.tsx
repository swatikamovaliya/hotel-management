import Navbar from "@/components/Navbar";

const Facilities = () => {
  return (
    <div>
      <Navbar />
      <div className="grid place-items-center h-screen ">
        <div className="mt-10">
          <h1 className="text-4xl">our facilities</h1>
        </div>

        <div className="text-[#919191] justify-center items-center flex  ">
          <div>
            <h1 className="text-3xl mb-4">SWIMMING POOLS</h1>
            <p className="max-w-96">
              We have the best equipped swimming pool in the country with an
              instructor waiting to guide you
            </p>
          </div>

          <img
            src="https://i.pinimg.com/564x/bc/f7/36/bcf7365dc40a0627f60800c89080ef7d.jpg"
            className="m-5 mt-20 h-96"
            alt="img"
          />
        </div>

        <div className="text-[#919191] justify-center items-center flex  ">
          <img
            src="https://i.pinimg.com/564x/b8/de/fa/b8defaeb09ab897466376db1e34e84c8.jpg"
            className="m-5 mt-20 h-96"
            alt="img"
          />
          <div className="ml-5">
            <h1 className="text-3xl mb-4">GYM</h1>
            <p className="max-w-96">
              We have the most equipped gymnasium in the country with an
              instructor always available.
            </p>
          </div>
        </div>

        <div className="text-[#919191] justify-center items-center flex  ">
          <div>
            <h1 className="text-3xl mb-4">SWIMMING POOLS</h1>
            <p className="max-w-96">
              Last fall, San Diego celebrated the opening of Born & Raised, a
              $6.5 million Art Deco extravaganza helmed by CH Projects and twice
              Michelin-starred executive chef Jason McLeod and designed by Paul
              Basile and his Basile Studio. But the party was just getting
              started: this fall sees the opening a second-floor addition to the
              1930s era building, once a drug store and soda fountain the Little
              Italy neighborhood.
            </p>
          </div>

          <img
            src="https://i.pinimg.com/564x/70/0d/f5/700df5b522327cf57c58a26480ceafbd.jpg"
            className="m-5 mt-20 h-96"
            alt="img"
          />
        </div>
      </div>
    </div>
  );
};

export default Facilities;
