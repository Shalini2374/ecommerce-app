const User = require('../models/user');

// Register a new user
const registerUser = async (req, res) => {
  const { username, email, password, name, address } = req.body;

  // Check if all required fields are present
  if (!username || !email || !password || !name || !address) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  // Check if the username already exists
  const existingUser = await User.findOne({ username });
  if (existingUser) {
    return res.status(400).json({ message: 'Username is already taken' });
  }

  // Create new user instance
  const user = new User({
    username,
    email,
    password,  // In a real-world scenario, hash the password
    name,
    address,
  });

  try {
    const newUser = await user.save();  // Save the user to the database
    res.status(201).json(newUser);  // Respond with newly created user
  } catch (err) {
    res.status(400).json({ message: err.message });  // Handle error
  }
};

// Get a user by ID
const getUserById = async (req, res) => {
  const { userId } = req.params;

  try {
    const user = await User.findById(userId);  // Find user by ID
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.json(user);  // Respond with user data
  } catch (err) {
    res.status(500).json({ message: err.message });  // Handle error
  }
};

module.exports = { registerUser, getUserById };
