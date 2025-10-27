import React from "react";
import { useParams, Link } from "react-router-dom";
import "./stock.css";

const Appointment = () => {
  const { id } = useParams();

  return (
    <div className="stock-container">
      <h1 className="stock-header">Book Appointment</h1>
      <p>You are booking an appointment for stock item ID: {id}</p>

      <form className="stock-card glass-card">
        <label>
          Name:
          <input type="text" placeholder="Your Name" />
        </label>
        <label>
          Date:
          <input type="date" />
        </label>
        <label>
          Time:
          <input type="time" />
        </label>
        <button type="submit" className="card-btn">Confirm Appointment</button>
      </form>

      <div className="stock-controls">
        <Link to={`/stock/${id}`}><button className="cta-button">← Back to Item</button></Link>
        <Link to="/stock"><button className="cta-button">← Back to Stock</button></Link>
      </div>
    </div>
  );
};

export default Appointment;
