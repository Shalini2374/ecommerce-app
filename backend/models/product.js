const mongoose = require('mongoose');

// Define the product schema
const productSchema = new mongoose.Schema({
  productId: { type: String, required: true, unique: true },  // Unique productId
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  stock: { type: Number, required: true },
  category: { type: String, required: true },
  images: { type: [String], required: true },
}, { timestamps: true });  // Adds createdAt and updatedAt automatically

// Create a model based on the schema
const Product = mongoose.model('Product', productSchema);

module.exports = Product;
