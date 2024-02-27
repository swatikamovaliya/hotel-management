import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Book from "./pages/Hotels";
import Booking from "./pages/Booking";
import MyRoom from "./pages/MyRoom";

function App() {
  return (
    <div>
      <Router>
        <div></div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/book" element={<Book />} />
          <Route path="/book/:hotelId" element={<Booking />} />
          <Route path="/myroom" element={<MyRoom />} />
        </Routes>
      </Router> 
    </div>
  );
}

export default App;
