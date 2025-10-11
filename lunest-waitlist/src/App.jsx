import { useState } from "react";
import "./App.css";
import "./index.css"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Waitlistform from "./pages/Waitlistform";
import Volunteerform from "./pages/Volunteer";
import VolunteerSubmissions from "./pages/VolunteerSubmissions";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* Add more routes here as needed */}
        <Route path="/waitlist" element={<Waitlistform />} />
        <Route path="/volunteer" element={<Volunteerform />} />
        <Route path="/volunteer-submissions" element={<VolunteerSubmissions />} />
      </Routes>
    </Router>
  );
}

export default App;
