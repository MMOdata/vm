const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  experienceId: { type: mongoose.Schema.Types.ObjectId, ref: 'Experience', required: true },
  // Add more fields as needed
});

module.exports = mongoose.model('Booking', bookingSchema);
