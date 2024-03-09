import Navbar from "@/components/Navbar";
import { Card } from "@/components/ui/card";
import {
  Clock,
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Twitter,
  Youtube,
} from "lucide-react";

const Contact = () => {
  return (
    <div>
      <Navbar />
      <section className="flex justify-center items-center h-screen full">
        <div className="mx-4 w-96 grid ">
          <div>
            <h1 className="text-4xl mb-10 font-bold">Contact information</h1>
            <div className="mt-4">
              <div className="flex  items-center">
                <MapPin className="text-[#aa8453]" size={16} />
                <p className="ml-2">1616 Broadway NY, India 394071 India</p>
              </div>
              <div className="flex mt-2 items-center">
                <Phone className="text-[#aa8453]" size={16} />
                <p className="ml-2">+855 100 4444</p>
              </div>
              <div className="flex mt-2 items-center">
                <Mail className="text-[#aa8453]" size={16} />
                <p className="ml-2">info@luxuryhotel.com</p>
              </div>
              <div className="flex mt-2 items-center">
                <Clock className="text-[#aa8453]" size={16} />
                <p className="ml-2">Mon - Fri: 9:00 - 18:00</p>
              </div>
            </div>
          </div>
          <div className="mt-16">
            <h1 className="text-4xl mb-10 font-bold">Follow us on:</h1>
            <div className="flex gap-2 mt-4 text-[#aa8453]">
              <div className="flex rounded-full border border-[#aa8453] w-12 h-12 justify-center items-center">
                <Facebook />
              </div>
              <div className="flex rounded-full border border-[#aa8453] w-12 h-12 justify-center items-center">
                <Instagram />
              </div>
              <div className="flex rounded-full border border-[#aa8453] w-12 h-12 justify-center items-center">
                <Linkedin />
              </div>
              <div className="flex rounded-full border border-[#aa8453] w-12 h-12 justify-center items-center">
                <Twitter />
              </div>
              <div className="flex rounded-full border border-[#aa8453] w-12 h-12 justify-center items-center">
                <Youtube />
              </div>
            </div>
          </div>
        </div>
        <Card className="py-8 px-4  w-96">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">
            Write us
          </h2>
          <form action="#" className="space-y-8">
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Your email
              </label>
              <input
                type="email"
                id="email"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                placeholder="name@flowbite.com"
                required
              />
            </div>
            <div>
              <label
                htmlFor="subject"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                placeholder="Let us know how we can help you"
                required
              />
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="message"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
              >
                Your message
              </label>
              <textarea
                id="message"
                rows={6}
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Leave a comment..."
              ></textarea>
            </div>
            <button
              type="submit"
              className="py-3 px-5 text-sm font-medium border text-center dark:text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
            >
              Send message
            </button>
          </form>
        </Card>
      </section>
    </div>
  );
};

export default Contact;
