const validateContact = (req, res, next) => {
  const { firstName, lastName, email, phone, message } = req.body;

  // Check if all required fields are present
  if (!firstName || !lastName || !email || !phone || !message) {
    return res.status(400).json({
      code: 400,
      success: false,
      message: 'All fields are required'
    });
  }

  // Basic email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({
      code: 400,
      success: false,
      message: 'Please enter a valid email address'
    });
  }

  // Basic phone validation (digits, spaces, dashes, parentheses)
  const phoneRegex = /^[\d\s\-\(\)]+$/;
  if (!phoneRegex.test(phone)) {
    return res.status(400).json({
      code: 400,
      success: false,
      message: 'Please enter a valid phone number'
    });
  }

  // Check field lengths
  if (firstName.length > 50 || lastName.length > 50) {
    return res.status(400).json({
      code: 400,
      success: false,
      message: 'First name and last name must be less than 50 characters'
    });
  }

  if (message.length > 1000) {
    return res.status(400).json({
      code: 400,
      success: false,
      message: 'Message must be less than 1000 characters'
    });
  }

  next();
};

module.exports = validateContact;