// src/components/ProductList.js
import React, { useEffect, useState } from 'react';
import { getProducts } from '../api/api'; // Assuming you have an API helper for requests
import ProductCard from './ProductCard'; // ProductCard component to display individual products
import './ProductList.css';
const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await getProducts();
        setProducts(response.data); // Assuming response contains an array of products
      } catch (error) {
        console.error('Error fetching products:', error); // Handle error appropriately
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="product-list">
      {products.length === 0 ? (
        <p>No products available</p>
      ) : (
        products.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))
      )}
    </div>
  );
};

export default ProductList;
