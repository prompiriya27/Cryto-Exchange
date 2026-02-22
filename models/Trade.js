const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  buyOrderId: { type: mongoose.Schema.Types.ObjectId, ref: "Order" },
  sellOrderId: { type: mongoose.Schema.Types.ObjectId, ref: "Order" },

  currencyId: { type: mongoose.Schema.Types.ObjectId, ref: "Currency" },

  amount: Number,
  price: Number,
  executedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Trade", schema);