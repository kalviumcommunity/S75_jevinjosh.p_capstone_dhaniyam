// File: models/User.js
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: String,
  aadhar: String,
  phone: String,
  address: String
});

module.exports = mongoose.model('User', userSchema);
