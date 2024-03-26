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
            A luxurious oasis where guests can relax and rejuvenate. With sparkling waters and serene surroundings, our pool offers the perfect retreat from the hustle and bustle. Whether guests want to take a refreshing dip, soak up the sun on lounge chairs, or enjoy poolside refreshments, our pool area provides a tranquil escape. Lifeguards are on duty to ensure safety, while poolside attendants cater to guests' needs, creating a hassle-free experience. Experience relaxation and fun in our inviting swimming pool.
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
            Featuring state-of-the-art exercise equipment and ample space, our gym provides an ideal environment for workouts. With professional trainers available to offer guidance and support, guests can achieve their fitness goals effectively. Whether guests prefer cardio exercises, strength training, or group fitness classes, our gym facilities offer a comprehensive range of options. We prioritize the health and well-being of our guests, ensuring they have access to top-notch fitness amenities during their stay.
            </p>
          </div>
        </div>

        <div className="text-[#919191] justify-center items-center flex  ">
          <div>
            <h1 className="text-3xl mb-4 dark:text-white text-black ">RESTURENT</h1>
            <p className="max-w-96">
            We offer an inviting atmosphere for diners. With a diverse menu crafted by skilled chefs using high-quality ingredients, we ensure a delightful culinary experience. Our attentive staff provides prompt service, catering to the needs of every guest, while our well-stocked bar offers a selection of beverages to complement meals. Whether it's a casual lunch or a special occasion, our restaurant facilities promise an enjoyable dining experience
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
            We offer a relaxed setting for enjoying drinks with friends or colleagues. Our extensive drink menu features a variety of cocktails, wines, and spirits, curated to satisfy diverse tastes. Experienced bartenders craft expertly mixed drinks, ensuring a memorable drinking experience. Whether it's a casual evening out or a celebratory occasion, our bar facilities provide the perfect backdrop for enjoying quality beverages in a vibrant atmosphere.
 
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Facilities;
