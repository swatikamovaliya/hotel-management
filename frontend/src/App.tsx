import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Book from "./pages/Hotels";
import Booking from "./pages/Booking";
import MyRoom from "./pages/MyRoom";
import { ThemeProvider } from "./components/theme-provider";
import Admin from "./pages/Admin";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Facilities from "./pages/Facilities";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div>
        <Router>
          <div></div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/book" element={<Book />} />
            <Route path="/book/:hotelId" element={<Booking />} />
            <Route path="/myroom" element={<MyRoom />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/facilities" element={<Facilities />} />
          </Routes>
        </Router>
      </div>
    </ThemeProvider>
  );
}

export default App;
