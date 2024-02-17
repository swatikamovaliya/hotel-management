import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Book from "./pages/Book";

function App() {
  return (
    <div>
      <Router>
        <div></div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/book" element={<Book />} />
        </Routes>
      </Router> 
    </div>
  );
}

export default App;
