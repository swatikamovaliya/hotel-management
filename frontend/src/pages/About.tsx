import Navbar from "@/components/Navbar";

const About = () => {
  return (
    <div>
      <Navbar />
      
      <div className="grid h-screen bg-[#222222]">
        <div>
        <h1 className="">Welcome To CAPPA.</h1>
        </div>

        <div className="text-[#919191]">
        <p className="mt-10">  Built in 2010 during the Belle Epoque period, this hotel is located in the center of India, with easy access to the city’s tourist attractions. It offers tastefully decorated rooms.</p>
        </div>

        <div className="grid">
        <img src="https://themewagon.github.io/sogo/images/img_1.jpg" className="m-5 mt-20 h-96" alt="img" />
        </div>
      </div>
    </div>
  );
};

export default About;
