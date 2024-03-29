/* eslint-disable @typescript-eslint/no-explicit-any */
import { Rating } from "@mui/material";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <>
      {/* section 1  nav, fist look*/}
      <div className="grid overflow-x-hidden text-white h-screen w-full bg-[url('/slider/2.jpg')] bg-no-repeat bg-cover bg-center bg-fixed">
        <div>
          <Navbar />
          <div className="flex items-center justify-center w-full mt-40">
            <div className="grid place-items-center">
              <div>
                <Rating name="simple-controlled" value={5} />
              </div>
              <div>
                <p className="my-4">LUXURY HOTEL & BEST RESEORT</p>
              </div>
              <div>
                <h1 className="mt-7 text-7xl w-[800px] text-center tracking-widest">
                  ENJOY A LUXURY EXPERINCE
                </h1>
              </div>
              <Link className="mt-5" to={"/book"}>
                <button className="button">Book now</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* section 2  Enjoy a Luxury Experience*/}
      <div
        id="about"
        className="flex dark:text-white text-black items-center justify-center h-screen dark:bg-[#222222]"
      >
        <div className="w-[600px]">
          <div>
            <Rating name="simple-controlled" value={5} />
          </div>
          <div>
            <p className="text-[#aa8453]">THE CAPPA LUXURY HOTEL</p>
          </div>
          <div>
            <p className="my-2 text-6xl">Enjoy a Luxury Experience</p>
          </div>
          <div className="text-[#919191]">
            <p className="my-3">
              Welcome to the best five-star deluxe hotel in India.comfort meets sophistication. Our rooms offer modern amenities, plush bedding, and elegant decor, ensuring a relaxing stay. Enjoy high-speed internet, flat-screen TVs, and luxurious bathrooms. Our rooms provide a comfortable and inviting atmosphere for your stay. With attentive service and a focus on guest satisfaction,
            </p>
            <p>
              we strive to make your experience memorable. Relax and unwind in our well-appointed rooms,Our attentive staff is dedicated to making your stay memorable. Experience unparalleled comfort and convenience at our hotel. your home away from home.
            </p>
          </div>
        </div>
        <div className="w-[600px] flex h-[500px]">
          <div>
            <img src="/rooms/8.jpg" className="m-5 mt-20 h-96" alt="img" />
          </div>
          <div>
            <img src="/rooms/2.jpg" className="h-96" alt="img" />
          </div>
        </div>
      </div>
      {/* section 3 */}
      <div id="rooms" className="dark:bg-[#222222] dark:text-white">
        <div className="px-4 py-16 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="grid px-0 text-white h-full dark:bg-[#222222]">
            <div className="w-full h-0 ">
              <p className="text-[#aa8453]">THE CAPPA LUXURY HOTEL</p>
              <h1 className="my-1 text-5xl text-black dark:text-white">
                Rooms{" "}
              </h1>
            </div>
            <div className="grid grid-cols-1 gap-6 mt-32 h-96 md:grid-cols-3">
              <div className="relative bg-[url('/rooms/1.jpg')] bg-cover bg-center">
                <div className="absolute inset-0 flex items-end p-6 transition duration-300 ease-in-out bg-black dark:bg-opacity-50 bg-opacity-0 group-hover:bg-opacity-75">
                  <div className="text-left">
                    <p className="text-xl">₹7000 / Night</p>
                    <h3 className="mt-2 text-2xl font-bold">Junior Room</h3>
                  </div>
                </div>
              </div>
              <div className="relative bg-[url('/rooms/2.jpg')] bg-cover bg-center">
                <div className="absolute inset-0 flex items-end p-6 transition duration-300 ease-in-out bg-black dark:bg-opacity-50 bg-opacity-0 group-hover:bg-opacity-75">
                  <div className="text-left">
                    <p className="text-xl">₹7000 / Night</p>
                    <h3 className="mt-2 text-2xl font-bold">Family Room</h3>
                  </div>
                </div>
              </div>
              <div className="relative bg-[url('/rooms/3.jpg')]  bg-cover bg-center">
                <div className="absolute inset-0 flex items-end p-6 transition duration-300 ease-in-out bg-black dark:bg-opacity-50 bg-opacity-0 group-hover:bg-opacity-75">
                  <div className="text-left">
                    <p className="text-xl">₹7000 / Night</p>
                    <h3 className="mt-2 text-2xl font-bold">Double Room</h3>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-6 mt-6 h-72 md:grid-cols-2 ">
              <div className="relative bg-[url('/rooms/4.jpg')]  bg-cover bg-center">
                <div className="absolute inset-0 flex items-end p-6 transition duration-300 ease-in-out bg-black dark:bg-opacity-50 bg-opacity-0 group-hover:bg-opacity-75">
                  <div className="text-left">
                    <p className="text-xl">₹7000 / Night</p>
                    <h3 className="mt-2 text-2xl font-bold">Delux Room</h3>
                  </div>
                </div>
              </div>
              <div className="relative bg-[url('/rooms/7.jpg')]   bg-cover bg-center">
                <div className="absolute inset-0 flex items-end p-6 transition duration-300 ease-in-out bg-black dark:bg-opacity-50 bg-opacity-0 group-hover:bg-opacity-75">
                  <div className="text-left">
                    <p className="text-xl">₹7000 / Night</p>
                    <h3 className="mt-2 text-2xl font-bold">Superior Room</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* section 4.1 rewe */}
      {/* <div className="flex items-center justify-center w-full h-screen bg-transparent">
        <div className="w-full mx-96 h-96">
          <div>
            <p className="text-xs">TESTIMONIALS</p>
            <h1 className="my-3 text-3xl">What Client's Say?</h1>
          </div>
          <div>
            <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
          
            </div>
          </div>
        </div>
      </div> */}
      {/* section 4 cards */}
      <div id="facilities" className="dark:text-white  dark:bg-[#222222]">
        <div className="px-4 py-16 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-base font-semibold tracking-wide text-[#aa8453] uppercase">
              Our Services
            </h2>
            <p className="mt-1 text-4xl font-extrabold sm:text-5xl sm:tracking-tight lg:text-6xl">
              Hotel Facilities
            </p>
          </div>
          <div className="grid grid-cols-1 mt-20 gap-y-10 gap-x-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="text-center">
              <ClockIcon className="w-12 h-12 mx-auto text-[#aa8453]" />
              <h3 className="mt-8 text-lg font-medium leading-6 text-black dark:text-white">
                Pick Up & Drop
              </h3>
              <p className="mt-5 text-base text-gray-800 dark:text-gray-300">
              Convenient Pick Up & Drop services provided for seamless travel experience.
              </p>
            </div>
            <div className="text-center">
              <CarIcon className="w-12 h-12 mx-auto text-[#aa8453]" />
              <h3 className="mt-8 text-lg font-medium leading-6 text-black dark:text-white">
                Parking Space
              </h3>
              <p className="mt-5 text-base text-gray-800 dark:text-gray-300">
              Ample parking space available for guest's convenience.
              </p>
            </div>
            <div className="text-center">
              <BedIcon className="w-12 h-12 mx-auto text-[#aa8453]" />
              <h3 className="mt-8 text-lg font-medium leading-6 text-black dark:text-white">
                Room Service
              </h3>
              <p className="mt-5 text-base text-gray-800 dark:text-gray-300">
              Efficient room service for prompt and personalized guest assistance.
              </p>
            </div>
            <div className="text-center">
              <FishIcon className="w-12 h-12 mx-auto text-[#aa8453]" />
              <h3 className="mt-8 text-lg font-medium leading-6 text-black dark:text-white">
                Swimming Pool
              </h3>
              <p className="mt-5 text-base text-gray-800 dark:text-gray-300">
              Enjoy a refreshing swim in our luxurious swimming pool.
              </p>
            </div>
            <div className="text-center">
              <WifiIcon className="w-12 h-12 mx-auto text-[#aa8453]" />
              <h3 className="mt-8 text-lg font-medium leading-6 text-black dark:text-white">
                Fibre Internet
              </h3>
              <p className="mt-5 text-base text-gray-800 dark:text-gray-300">
              High-speed fiber internet available for seamless connectivity.
              </p>
            </div>
            <div className="text-center">
              <CoffeeIcon className="w-12 h-12 mx-auto text-[#aa8453]" />
              <h3 className="mt-8 text-lg font-medium leading-6 text-black dark:text-white">
                Breakfast
              </h3>
              <p className="mt-5 text-base text-gray-800 dark:text-gray-300">
              Start your day with our delicious breakfast options.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* footer */}
      <div id="footer">
        <Footer />
      </div>
    </>
  );
};

export default Home;

function BedIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M2 4v16" />
      <path d="M2 8h18a2 2 0 0 1 2 2v10" />
      <path d="M2 17h20" />
      <path d="M6 8v9" />
    </svg>
  );
}

function CarIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2" />
      <circle cx="7" cy="17" r="2" />
      <path d="M9 17h6" />
      <circle cx="17" cy="17" r="2" />
    </svg>
  );
}

function ClockIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}

function CoffeeIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M17 8h1a4 4 0 1 1 0 8h-1" />
      <path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z" />
      <line x1="6" x2="6" y1="2" y2="4" />
      <line x1="10" x2="10" y1="2" y2="4" />
      <line x1="14" x2="14" y1="2" y2="4" />
    </svg>
  );
}

function FishIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M6.5 12c.94-3.46 4.94-6 8.5-6 3.56 0 6.06 2.54 7 6-.94 3.47-3.44 6-7 6s-7.56-2.53-8.5-6Z" />
      <path d="M18 12v.5" />
      <path d="M16 17.93a9.77 9.77 0 0 1 0-11.86" />
      <path d="M7 10.67C7 8 5.58 5.97 2.73 5.5c-1 1.5-1 5 .23 6.5-1.24 1.5-1.24 5-.23 6.5C5.58 18.03 7 16 7 13.33" />
      <path d="M10.46 7.26C10.2 5.88 9.17 4.24 8 3h5.8a2 2 0 0 1 1.98 1.67l.23 1.4" />
      <path d="m16.01 17.93-.23 1.4A2 2 0 0 1 13.8 21H9.5a5.96 5.96 0 0 0 1.49-3.98" />
    </svg>
  );
}

function WifiIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 13a10 10 0 0 1 14 0" />
      <path d="M8.5 16.5a5 5 0 0 1 7 0" />
      <path d="M2 8.82a15 15 0 0 1 20 0" />
      <line x1="12" x2="12.01" y1="20" y2="20" />
    </svg>
  );
}
