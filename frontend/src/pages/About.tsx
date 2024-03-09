import Navbar from "@/components/Navbar";

const About = () => {
  return (
    <div>
      <Navbar />

      <div className="grid place-items-center h-screen ">
        <div>
          <h1 className="text-4xl">Welcome To CAPPA</h1>
        </div>

        <div className="text-[#919191] justify-center items-center flex -mt-52  ">
          <p className="max-w-96">
            {" "}
            Built in 2010 during the Belle Epoque period, this hotel is located
            in the center of India, with easy access to the city’s tourist
            attractions. It offers tastefully decorated rooms. Hotel ut nisl
            quam nestibulum ac quam nec odio elementum sceisue the aucan ligula.
            Orci varius natoque penatibus et magnis dis parturient monte nascete
            ridiculus mus nellentesque habitant morbine.
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
