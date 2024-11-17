const express = require('express');
const { createOrder, getUserOrders } = require('../controllers/orderController');

const router = express.Router();

// Route to get orders for a specific user by userId
router.get('/orders/:userId', getUserOrders);

// Route to create a new order (POST request)
router.post('/orders', createOrder);

module.exports = router;
