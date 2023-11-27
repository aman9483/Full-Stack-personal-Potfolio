const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
    maxlength: 50
  },
  email: {
    type: String,
    required: true,
    maxlength: 100
  },
  message: {
    type: String,
    maxlength: 150
  }
});

module.exports = mongoose.model('Contact', contactSchema);
