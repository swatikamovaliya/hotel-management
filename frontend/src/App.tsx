import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Book from "./pages/Hotels";
import Booking from "./pages/Booking";
import MyRoom from "./pages/MyRoom";
import { ThemeProvider } from "./components/theme-provider";
import Admin from "./pages/Admin";

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
          </Routes>
        </Router>
      </div>
    </ThemeProvider>
  );
}

export default App;
