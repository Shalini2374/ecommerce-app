const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  userId: { type :String, ref: 'User', required: true },
  products: [{
    productId: { type: String, required: true },  // Store productId as String
    quantity: { type: Number, required: true },
  }],
  totalAmount: { type: Number, required: true },
  status: { type: String, required: true },
  orderDate: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Order', orderSchema);
