const express = require('express');
const bcrypt = require('bcryptjs');
const { check, validationResult } = require('express-validator');
const User = require('../Models/User');

const router = express.Router();

// @route   POST api/users
// @desc    Register a new user
// @access  Public
router.post(
  '/',
  [
    check('username', 'Username is required').not().isEmpty(),
    check('password', 'Password is required and must be at least 6 characters long').isLength({ min: 6 }),
    check('email', 'Email is required').isEmail(),
    check('role', 'Role is required').not().isEmpty(),
    check('organisation', 'Organisation is required').not().isEmpty(),
  ],
  async (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }

      const { username, password, email, role, organisation } = req.body;

      // Check if user already exists
      let user = await User.findOne({ username });
      if (user) {
        return res.status(400).json({ msg: 'User already exists' });
      }

      // Hash the password
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);

      console.log('Hashed password:', hashedPassword);

      // Create a new user
      user = new User({
        username,
        password: hashedPassword,
        email,
        role,
        organisation,
      });

      // Save the user to the database
      await user.save();

      res.send('User registered successfully');
    } catch (err) {
      console.error('Error during user registration:', err.message);
      res.status(500).send('Server error');
    }
  }
);

module.exports = router;
