const express = require("express");
const mongoose = require("mongoose");

const app = express();
const apiRoutes = require("./index");

app.use(express.json());
app.use("/api", apiRoutes);

mongoose.connect("mongodb://127.0.0.1:27017/crypto-exchange")
  .then(() => console.log("MongoDB connected"));

app.listen(3000, () => {
  console.log("Server running on port 3000");
});

