import Navbar from "@/components/Navbar";

const Facilities = () => {
  return (
    <div>
      <Navbar />
      <div className="grid place-items-center h-screen ">
        <div className="mt-10">
          <h1 className="text-4xl font-bold">Our Facilities</h1>
        </div>

        <div className="text-[#919191] justify-center items-center flex  ">
          <div>
            <h1 className="text-3xl mb-4 dark:text-white text-black ">SWIMMING POOLS</h1>
            <p className="max-w-96">
              We have the best equipped swimming pool in the country with an
              instructor waiting to guide you.Four Seasons Hotel New York Downtown adds its classic architectural profile to the world’s most famous skyline at the crossroads of Tribeca and the Financial District.
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
            src="https://i.pinimg.com/564x/23/81/19/238119ba8b6fb6aad0a855b49a6a1ea9.jpg"
            className="m-5 mt-20 h-96"
            alt="img"
          />
          <div className="ml-5">
            <h1 className="text-3xl mb-4 dark:text-white text-black ">GYM</h1>
            <p className="max-w-96">
            The first 5 Star luxury boutique hotel in Pakistan. Raise your lifestyle with our exceptionally designed endeavor with extraordinary solaces. Own your own Apartment in a 5 Star Boutique Hotel.
 
            </p>
          </div>
        </div>

        <div className="text-[#919191] justify-center items-center flex  ">
          <div>
            <h1 className="text-3xl mb-4 dark:text-white text-black ">RESTURENT</h1>
            <p className="max-w-96">
              Last fall, San Diego celebrated the opening of Born & Raised, a
              6.5 million Art Deco extravaganza helmed by CH Projects and twice
              Michelin-starred executive chef Jason McLeod and designed by Paul
              Basile and his Basile Studio. But the party was just getting
              started: this fall sees the opening a second-floor addition to the
              2100s era building, once a drug store and soda fountain the Little
              Italy neighborhood.
            </p>
          </div>

          <img
            src="https://i.pinimg.com/564x/70/0d/f5/700df5b522327cf57c58a26480ceafbd.jpg"
            className="m-5 mt-20 h-96"
            alt="img"
          />
        </div>

        
        <div className="text-[#919191] justify-center items-center flex  ">
          <img
            src="https://i.pinimg.com/564x/84/fd/9a/84fd9a6740665ae2ff8de64ab00fb5ec.jpg"
            alt="img" width= "250px" height="900px"
          />
          <div className="ml-5">
            <h1 className="text-3xl mb-4 dark:text-white text-black ">BAR</h1>
            <p className="max-w-96">
            GAP OF DUNLOE. The Dunloe Hotel & Gardens is a 5 star hotel in Ireland overlooking the famous Gap of Dunloe. The lobby, library tower and bar were designed with warm, dark tones and elegant materials, to create an inviting, cosy atmosphere.
 
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Facilities;
