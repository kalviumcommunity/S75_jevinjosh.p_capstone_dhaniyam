const express = require('express');
require('dotenv').config();
const mongoose = require('mongoose');
const User = require('./models/User');
const Appointment = require('./models/Appointment');
const Stock = require('./models/Stock');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());


mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log("✅ MongoDB connected"))
.catch((err) => console.error("❌ MongoDB connection error:", err));



app.get('/api/stock', async (req, res) => {
  const staticStock = [
    { item: 'Rice', quantity: '5kg' },
    { item: 'Wheat', quantity: '3kg' },
    { item: 'Sugar', quantity: '2kg' }
  ];
  res.json({ stock: staticStock });
});



app.post('/api/appointments', async (req, res) => {
  try {
    const { name, aadhar, date, timeSlot, address } = req.body;
    if (!name || !aadhar || !date || !timeSlot || !address) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    const appointment = new Appointment({ name, aadhar, date, timeSlot, address });
    await appointment.save();
    res.status(201).json({ message: 'Appointment booked', data: appointment });
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
});



app.get('/api/appointments', async (req, res) => {
  try {
    const appointments = await Appointment.find();
    res.json({ data: appointments });
  } catch (err) {
    res.status(500).json({ message: 'Error fetching appointments', error: err.message });
  }
});



app.put('/api/appointments/:id', async (req, res) => {
  try {
    const updated = await Appointment.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updated) return res.status(404).json({ message: 'Appointment not found' });
    res.json({ message: 'Appointment updated', data: updated });
  } catch (err) {
    res.status(500).json({ message: 'Update failed', error: err.message });
  }
});


app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
