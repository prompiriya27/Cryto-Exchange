const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  fromWalletId: { type: mongoose.Schema.Types.ObjectId, ref: "Wallet" , require: true},
  toWalletId: { type: mongoose.Schema.Types.ObjectId, ref: "Wallet" },

  externalAddress: String,

  currencyId: { type: mongoose.Schema.Types.ObjectId, ref: "Currency" },

  amount: Number,
  type: { type: String, enum: ["INTERNAL","EXTERNAL"] },

  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Transfer", schema);