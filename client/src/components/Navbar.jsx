import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="bg-white shadow p-4 flex gap-4">
    <Link to="/" className="text-blue-600 font-bold">Home</Link>
    <Link to="/stock">Stock</Link>
    <Link to="/appointment">Appointment</Link>
    <Link to="/timings">Timings</Link>
    <Link to="/profile">Profile</Link>
    <Link to="/login" className="ml-auto">Login</Link>
  </nav>
);

export default Navbar;