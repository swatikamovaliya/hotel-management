import Navbar from "@/components/Navbar";

const About = () => {
  return (
    <div>
      <Navbar />

      <div className="grid place-items-center h-screen ">
        <div>
          <h1 className="text-4xl font-bold">Welcome To CAPPA</h1>
        </div>

        <div className="text-[#919191] justify-center items-center flex -mt-52  ">
          <p className="max-w-96">
            {" "}
            Built in 2010, this hotel is located
            in the center of India, with easy access to the city’s tourist attractions. It offers tastefully decorated rooms. Our hotel management system is a cutting-edge solution designed to streamline operations and enhance guest experiences in the hospitality industry. We provide comprehensive tools and features tailored to meet the diverse needs of hoteliers, empowering them to efficiently manage bookings, streamline check-ins, and deliver exceptional service. With a focus on efficiency, reliability, and innovation, our platform offers real-time reporting, robust security measures, and scalability to accommodate hotels of all sizes. Backed by a team of experienced developers and industry experts, we are committed to providing top-notch support and continuous updates to ensure our clients stay ahead of the curve. Experience the difference our hotel management system can make for your business and take your hotel operations to the next level.
          </p>

          <img
            src="https://themewagon.github.io/sogo/images/img_1.jpg"
            className="m-5 mt-20 h-96"
            alt="img"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
