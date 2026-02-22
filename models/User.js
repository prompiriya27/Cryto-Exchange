const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true  
  },
  email: {
    type: String,
    required: true,
    unique: true 
  },
  passwordHash: {
    type: String,
    required: true,
  },
  status: { type: String, enum: ["ACTIVE","SUSPENDED","DELETED"], default: "ACTIVE" },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("User", schema);