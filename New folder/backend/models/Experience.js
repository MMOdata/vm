const mongoose = require('mongoose');

const experienceSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  // Add more fields as needed
});

module.exports = mongoose.model('Experience', experienceSchema);
