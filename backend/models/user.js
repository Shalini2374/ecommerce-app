// models/user.js
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  name: { type: String, required: true },
  address: { 
    street: String,
    city: String,
    state: String,
    zip: String,
  },
});

const User = mongoose.model('User', userSchema);

module.exports = User;
