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
app.post('/api/appointment', (req, res) => {
  const { name, aadhar, date, timeSlot, address } = req.body;
  if (!name || !aadhar || !date || !timeSlot || !address) {
    return res.status(400).json({ message: 'All fields required' });
  } 
  
  res.status(201).json({
    message: 'Appointment booked successfully',
    data: { name, aadhar, date, timeSlot, address }
  });
});


app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
