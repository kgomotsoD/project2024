const express = require('express');
const { check, validationResult } = require('express-validator');
const Risk = require('../Models/Risk');
const auth = require('../middleware/auth');

const router = express.Router();

// @route   POST api/hazards
// @desc    Add new hazard
// @access  Private
router.post(
  '/',
  [auth, [check('description', 'Description is required').not().isEmpty()]],
  async (req, res) => {
    const { description, risk, control } = req.body;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const newRisk = new Risk({
        description,
        control,
        organisation: req.user.organisation,
        createdBy: req.user.id,
      });

      const risk = await newRisk.save();
      res.json(risk);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server error');
    }
  }
);

module.exports = router;
