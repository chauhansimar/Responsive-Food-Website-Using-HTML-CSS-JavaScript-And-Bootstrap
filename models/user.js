const mongoose = require("mongoose");

// Define Schema
const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true },
});

// Create Model
const User = mongoose.model("User", userSchema);

module.exports = User;
