const mongoose = require('mongoose');
const Product = require('../models/product');

// Get all products
const getAllProducts = async (req, res) => {
    try {
      const products = await Product.find();
      res.json(products);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  };
// Add a new product
const addProduct = async (req, res) => {
  const { productId, name, description, price, stock, category, images } = req.body;
  const product = new Product({
    productId,
    name,
    description,
    price,
    stock,
    category,
    images,
  });

  try {
    const newProduct = await product.save();
    res.status(201).json(newProduct);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Delete a product by _id (MongoDB ObjectId)
const deleteProduct = async (req, res) => {
  const { id } = req.params;  // Extract MongoDB ObjectId from the URL

  try {
    // Use mongoose.Types.ObjectId() to properly instantiate the ObjectId
    const product = await Product.findByIdAndDelete(id);
    
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }

    res.status(200).json({ message: 'Product deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = { getAllProducts, addProduct, deleteProduct };
