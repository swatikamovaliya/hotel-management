import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/clerk-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="sticky flex justify-between w-screen px-40 top-3 mt-7">
      <img src="/logo.png" className="w-40" alt="logo" />
      <div className="flex items-start gap-16">
        <Link to="/">Home </Link>
        <a href="#about">About </a>
        <a href="#footer"> Contact us </a>
        <a href="#facilities"> Facilities </a>
        <a href="#rooms"> Rooms </a>
        <div className="flex ">
          <SignedOut>
            <div className="px-3 m-1 mr-2 border rounded-md">
              <SignInButton mode={"modal"} />
            </div>
          </SignedOut>

          <SignedIn>
            {/* Mount the UserButton component */}
            <UserButton />
          </SignedIn>
          <Link to={"/book"}>
            <div className="px-3 m-1 mx-2 border rounded-md">Book Now</div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
