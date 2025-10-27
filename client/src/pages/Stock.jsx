import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/stock.css";

const stockData = [

  { id: 1, name: "Rice", category: "Grains", quantity: "10kg" },
  { id: 2, name: "Wheat", category: "Grains", quantity: "15kg" },
  { id: 3, name: "Maize", category: "Grains", quantity: "8kg" },
  { id: 4, name: "Ragi", category: "Grains", quantity: "6kg" },
  { id: 5, name: "Barley", category: "Grains", quantity: "5kg" },

  // 🥬 Pulses
  { id: 6, name: "Toor Dal", category: "Pulses", quantity: "4kg" },
  { id: 7, name: "Moong Dal", category: "Pulses", quantity: "5kg" },
  { id: 8, name: "Chana Dal", category: "Pulses", quantity: "6kg" },
  { id: 9, name: "Urad Dal", category: "Pulses", quantity: "3kg" },
  { id: 10, name: "Masoor Dal", category: "Pulses", quantity: "4kg" },

  // 🍯 Sugar & Salt
  { id: 11, name: "Sugar", category: "Sugar & Salt", quantity: "5kg" },
  { id: 12, name: "Salt", category: "Sugar & Salt", quantity: "2kg" },
  { id: 13, name: "Jaggery", category: "Sugar & Salt", quantity: "3kg" },
  { id: 14, name: "Rock Salt", category: "Sugar & Salt", quantity: "1kg" },

  // 🛢️ Cooking Essentials
  { id: 15, name: "Sunflower Oil", category: "Cooking Essentials", quantity: "2L" },
  { id: 16, name: "Groundnut Oil", category: "Cooking Essentials", quantity: "3L" },
  { id: 17, name: "Mustard Oil", category: "Cooking Essentials", quantity: "1.5L" },
  { id: 18, name: "Palm Oil", category: "Cooking Essentials", quantity: "2L" },

  // 🍪 Misc Essentials
  { id: 19, name: "Atta (Flour)", category: "Grains", quantity: "10kg" },
  { id: 20, name: "Poha", category: "Grains", quantity: "2kg" },
  { id: 21, name: "Semolina (Rava)", category: "Grains", quantity: "3kg" },
  { id: 22, name: "Besan (Gram Flour)", category: "Pulses", quantity: "4kg" },

  // ☕ Daily Needs
  { id: 23, name: "Tea Powder", category: "Daily Needs", quantity: "500g" },
  { id: 24, name: "Coffee", category: "Daily Needs", quantity: "250g" },
  { id: 25, name: "Soap", category: "Daily Needs", quantity: "5 bars" },
  { id: 26, name: "Detergent", category: "Daily Needs", quantity: "2kg" },
  { id: 27, name: "Toothpaste", category: "Daily Needs", quantity: "2 packs" },
  { id: 28, name: "Cooking Gas Cylinder", category: "Daily Needs", quantity: "1 unit" },
];


const Stock = () => {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const filteredStock = stockData.filter((item) => {
    const matchesSearch = item.name.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = category === "All" || item.category === category;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="stock-container">
      <h1 className="stock-header">Available Ration Items</h1>

      <div className="filter-panel">
        <div className="search-wrapper">
          <span className="search-icon"></span>
          <input
            type="text"
            placeholder="Search items..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="filter-input"
          />
        </div>
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="filter-select"
        >
          <option value="All">All Categories</option>
          <option value="Grains">Grains</option>
          <option value="Pulses">Pulses</option>
          <option value="Sugar & Salt">Sugar & Salt</option>
          <option value="Cooking Essentials">Cooking Essentials</option>
        </select>
      </div>

      <div className="stock-grid">
        {filteredStock.length ? (
          filteredStock.map((item) => (
            <Link to={`/stock/${item.id}`} key={item.id} className="stock-card-link">
              <div className="stock-card glass-card">
                <div className="stock-name">{item.name}</div>
                <div className="stock-category">{item.category}</div>
                <div className="stock-quantity">Available: {item.quantity}</div>
                <button className="card-btn">Select</button>
              </div>
            </Link>
          ))
        ) : (
          <p className="no-items">No items found.</p>
        )}
      </div>

      <div className="return-home">
        <Link to="/"><button className="cta-button">← Return Home</button></Link>
      </div>
    </div>
  );
};

export default Stock;