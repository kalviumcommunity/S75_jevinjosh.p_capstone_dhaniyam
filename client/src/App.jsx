import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

import Stock from "./pages/Stock";
import StockItem from "./pages/StockItem";
import Appointment from "./pages/Appointment";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/stock" element={<Stock />} />
        <Route path="/stock/:id" element={<StockItem />} />
        <Route path="/appointment/:id" element={<Appointment />} />
      </Routes>
    </Router>
  );
}

export default App;
