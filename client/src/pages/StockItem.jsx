import React from "react";
import { useParams, Link } from "react-router-dom";
import "./stock.css";

const stockData = [
  { id: 1, name: "Rice", category: "Grains", quantity: "10kg" },
  { id: 2, name: "Wheat", category: "Grains", quantity: "15kg" },
  { id: 3, name: "Sugar", category: "Sugar & Salt", quantity: "5kg" },
  { id: 4, name: "Salt", category: "Sugar & Salt", quantity: "2kg" },
  { id: 5, name: "Oil", category: "Cooking Essentials", quantity: "3L" },
  { id: 6, name: "Dal", category: "Pulses", quantity: "8kg" },
];

const StockItem = () => {
  const { id } = useParams();
  const item = stockData.find((i) => i.id === parseInt(id));

  if (!item) return <p>Item not found.</p>;

  return (
    <div className="stock-container">
      <h1 className="stock-header">{item.name}</h1>
      <p>Category: {item.category}</p>
      <p>Available: {item.quantity}</p>

      <div className="stock-controls">
        <Link to="/stock"><button className="cta-button">← Back to Stock</button></Link>
        <Link to={`/appointment/${item.id}`}><button className="cta-button">Book Appointment</button></Link>
      </div>
    </div>
  );
};

export default StockItem;
