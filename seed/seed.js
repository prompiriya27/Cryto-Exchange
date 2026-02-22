const mongoose = require("mongoose");
const User = require("../models/User");
const Currency = require("../models/Currency");

mongoose.connect("mongodb://127.0.0.1:27017/crypto-exchange");

async function seed() {
  await Currency.insertMany([
    { code: "THB", name: "Thai Baht", type: "FIAT" },
    { code: "BTC", name: "Bitcoin", type: "CRYPTO" },
    { code: "ETH", name: "Etherium", type: "CRYPTO" },
    { code: "USD", name: "US Dollar", type: "FIAT" },
  ]);

  console.log("Seed done");
  process.exit();
}

seed();