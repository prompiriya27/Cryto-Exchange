const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  type: { type: String, enum: ["BUY","SELL"] },
  
  baseCurrencyId: { type: mongoose.Schema.Types.ObjectId, ref: "Currency" },
  quoteCurrencyId: { type: mongoose.Schema.Types.ObjectId, ref: "Currency" },

  amount: Number,
  price: Number,
  status: { type: String, default: "OPEN" },

  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Order", schema);