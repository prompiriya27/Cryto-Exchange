const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  walletId: { type: mongoose.Schema.Types.ObjectId, ref: "Wallet" },

  type: {
    type: String,
    enum: [
      "TRADE_BUY",
      "TRADE_SELL",
      "TRANSFER_IN",
      "TRANSFER_OUT",
      "DEPOSIT",
      "WITHDRAW"
    ]
  },

  currencyId: { type: mongoose.Schema.Types.ObjectId, ref: "Currency" },

  amount: Number,
  balanceAfter: Number,

  referenceId: mongoose.Schema.Types.ObjectId,
  referenceType: String,

  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("TransactionHistory", schema);