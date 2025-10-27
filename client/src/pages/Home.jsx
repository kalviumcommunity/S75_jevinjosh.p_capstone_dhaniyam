import React from "react";
import { Link } from "react-router-dom";
import "../styles/home.css";

const Home = () => {
  return (
    <div className="home-container">
      {/* Navigation Bar */}
      <nav className="navbar glass-nav">
        <div className="logo-frame">
          <div className="logo-circle">
            <img src="/assets/logo.png" alt="Dhaniyam Logo" className="logo-img" />
          </div>
        </div>
        <ul className="nav-links">
          <li><Link to="/" className="active">Home</Link></li>
          <li><Link to="/stock">Stock</Link></li>
          <li><Link to="/appointment">Appointment</Link></li>
          <li><Link to="/timings">Timings</Link></li>
          <li><Link to="/profile">Profile</Link></li>
          <li><Link to="/login">Logout</Link></li>
        </ul>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Welcome to Dhaniyam</h1>
          <p>Empowering Ration Distribution with Smart Technology</p>
          <Link to="/stock">
            <button className="cta-button">Check Your Ration</button>
          </Link>
        </div>
        <div className="hero-img-container">
          <img src="/assets/hero.png" alt="Hero" className="hero-img" />
        </div>
      </section>

      {/* Dashboard Cards */}
      <section className="dashboard">
        <div className="dashboard-grid">
          <div className="dashboard-card glass-card">
            <h3>🚚 Stock Status</h3>
            <p>View available ration items at your nearest center.</p>
            <Link to="/stock"><button className="card-btn">View Stock</button></Link>
          </div>
          <div className="dashboard-card glass-card">
            <h3>📅 Book Appointment</h3>
            <p>Schedule your ration collection and avoid queues.</p>
            <Link to="/appointment"><button className="card-btn">Book Now</button></Link>
          </div>
          <div className="dashboard-card glass-card">
            <h3>💰 Ration Benefits & Timings</h3>
            <p>Check your eligibility and center timings.</p>
            <Link to="/timings"><button className="card-btn">View Details</button></Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>© 2025 Dhaniyam | Empowering Ration Distribution</p>
      </footer>
    </div>
  );
};

export default Home;
