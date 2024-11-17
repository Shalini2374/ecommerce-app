// routes/userRoutes.js

const express = require('express');
const { registerUser, getUserById } = require('../controllers/userController');
const router = express.Router();

// Register a new user
router.post('/', registerUser);

// Get all users
router.get('/', async (req, res) => {
  try {
    const users = await User.find();  // Fetch all users from the database
    res.json(users);  // Respond with the list of users
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get user by ID
router.get('/:userId', getUserById);

module.exports = router;
