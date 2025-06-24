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
let appointments = [
  {
    id: 1,
    name: "Jevin Josh",
    aadhar: "1234-5678-9123",
    date: "2025-06-25",
    timeSlot: "Morning",
    address: "Ration Street, Tamil Nadu"
  }
];

// PUT endpoint
app.put('/api/appointment/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const appt = appointments.find(a => a.id === id);
  if (!appt) return res.status(404).json({ message: 'Appointment not found' });

  Object.assign(appt, req.body);
  res.json({ message: 'Updated', data: appt });
});


app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
