import { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Waitlistform from "./pages/Waitlistform";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* Add more routes here as needed */}
        <Route path="/waitlist" element={<Waitlistform />} />
      </Routes>
    </Router>
  );
}

export default App;
