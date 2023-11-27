const Contact = require('../models/contact');

const createContact = async (req, res) => {
  const { fullName, email, message } = req.body;

  try {
    const newContact = new Contact({
      fullName,
      email,
      message
    });

    const savedContact = await newContact.save();
    res.status(200).json(savedContact); // Send status 200 along with the response
    
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = { createContact };
