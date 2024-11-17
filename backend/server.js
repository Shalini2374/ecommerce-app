const express = require('express');
const cors = require('cors');
const path = require('path');  // For handling file paths
const connectDB = require('./config/db');  // Function to connect to MongoDB
const productRoutes = require('./routes/productRoutes');  // Routes for products
const orderRoutes = require('./routes/orderRoutes');      // Routes for orders
const userRoutes = require('./routes/userRoutes');        // Routes for users

// Initialize Express app
const app = express();

// Middleware Setup
app.use(cors({
  origin: 'http://localhost:3002'  // Allow requests from frontend running on port 3002
}));  
app.use(express.json());  // Parse JSON payloads
require('dotenv').config();  // Load environment variables from .env file

// Serve static files (for image uploads)
app.use('/uploads', express.static(path.join(__dirname, 'uploads'))); // Updated path

// Connect to MongoDB
connectDB();

// API Routes Setup
app.use('/api/products', productRoutes);  // All product-related routes under "/api/products"
app.use('/api/orders', orderRoutes);      // All order-related routes under "/api/orders"
app.use('/api/users', userRoutes);        // All user-related routes under "/api/users"

// Start the server
const PORT = process.env.PORT || 6001;  // Use port from environment or default to 6001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
