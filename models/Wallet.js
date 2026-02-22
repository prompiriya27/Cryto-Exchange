const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  currencyId: { type: mongoose.Schema.Types.ObjectId, ref: "Currency" },
  balance: Number
});

module.exports = mongoose.model("Wallet", schema);