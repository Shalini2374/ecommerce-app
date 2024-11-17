const Order = require('../models/order');
const User = require('../models/user');

// Create a new order
exports.createOrder = async (req, res) => {
  try {
    const { products, userId, totalAmount, status } = req.body;

    const user = userId; // Assuming userId is passed correctly from the frontend.

    const productsWithStrings = products.map(p => ({
      productId: p.productId,
      quantity: p.quantity
    }));

    const newOrder = new Order({
      userId: user,
      products: productsWithStrings,
      totalAmount,
      status,
      orderDate: new Date()
    });

    await newOrder.save();
    res.status(201).json({ message: 'Order created successfully', order: newOrder });
  } catch (err) {
    console.error(err);
    res.status(400).json({ error: 'Error creating order', message: err.message });
  }
};

// Get orders for a specific user by userId
exports.getUserOrders = async (req, res) => {
  const { userId } = req.params;

  try {
    const orders = await Order.find({ userId: userId });

    if (!orders.length) {
      return res.status(404).json({ message: 'No orders found for this user' });
    }

    res.json(orders);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
