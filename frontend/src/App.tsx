// import {
//   SignOutButton,
//   SignInButton,
//   SignedIn,
//   SignedOut,
// } from "@clerk/clerk-react";
import Home from "./pages/Home";

function App() {
  return (
    <div>
      {/* <SignedOut>
        <SignInButton mode={"modal"} />
        <p>
          This content is public. Only signed out users can see the SignInButton
          above this text.
        </p>
      </SignedOut>
      <SignedIn>
        <SignOutButton />
        <p>
          This content is private. Only signed in users can see the
          SignOutButton above this text.
        </p>
      </SignedIn> */}
      {/* <h1 className="text-3xl font-bold underline">Hello world!</h1> */}
      <Home />
     
    </div>
  );
}

export default App;
