// File: models/Stock.js
const mongoose = require('mongoose');

const stockSchema = new mongoose.Schema({
  item: {
    type: String,
    required: true
  },
  quantity: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('Stock', stockSchema);
