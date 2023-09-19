// models/User.js
const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  id: String,
  name: String,
  email: String,
  servicetype: String,
  price: Number,
  quantity: Number,
  link: String,
  serviceNumber:Number,
  currentDateTime:{}
}, {
  timestamps: true // Enable the timestamps option
});

module.exports = mongoose.model("Order", orderSchema);
