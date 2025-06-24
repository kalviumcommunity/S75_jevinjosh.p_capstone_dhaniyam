const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

app.get('/api/stock', (req, res) => {
  res.json({ stock: [
    { item: 'Rice', quantity: '5kg' },
    { item: 'Wheat', quantity: '3kg' },
    { item: 'Sugar', quantity: '2kg' }
  ]});
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
