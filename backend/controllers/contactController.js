const Contact = require('../models/Contact');

const createContact = async (req, res) => {
  try {
    const { firstName, lastName, email, phone, message } = req.body;

    const newContact = new Contact({
      firstName,
      lastName,
      email,
      phone,
      message
    });

    await newContact.save();

    res.status(200).json({
      code: 200,
      success: true,
      message: 'Message sent successfully',
      data: {
        id: newContact._id,
        firstName: newContact.firstName,
        lastName: newContact.lastName,
        email: newContact.email
      }
    });

  } catch (error) {
    console.error('Error saving contact:', error);
    res.status(500).json({
      code: 500,
      success: false,
      message: 'Something went wrong, please try again later.',
      error: error.message
    });
  }
};

module.exports = {
  createContact
};