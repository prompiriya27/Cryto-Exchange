const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  code: { type: String, unique: true },
  name: { type: String, unique: true },
  type: { type: String, enum: ["FIAT","CRYPTO"] }
});

module.exports = mongoose.model("Currency", schema);