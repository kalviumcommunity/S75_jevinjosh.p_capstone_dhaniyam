import React, { useEffect, useState } from 'react';

const Stock = () => {
  const [stockItems, setStockItems] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/stock')
      .then(res => res.json())
      .then(data => setStockItems(data.stock))
      .catch(err => console.error('Error fetching stock:', err));
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">Available Stock</h2>
      <ul className="list-disc pl-4">
        {stockItems.map((item, index) => (
          <li key={index}>
            {item.item} - {item.quantity}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Stock;
