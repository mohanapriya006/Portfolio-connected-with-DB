const express = require('express');
const router = express.Router();
const contactController = require('../controllers/contactController');
const validateContact = require('../middleware/validateContact');

// POST /contact - Create new contact message
router.post('/', validateContact, contactController.createContact);

module.exports = router;