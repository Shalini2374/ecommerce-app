const express = require('express');
const { getAllProducts, addProduct, deleteProduct } = require('../controllers/productController');
const router = express.Router();

// Route to get all products
router.get('/', getAllProducts);  // Make sure it's '/'

// Route to add a new product
router.post('/', addProduct);

// Route to delete a product by id
router.delete('/:id', deleteProduct);

module.exports = router;
