import React from 'react';
import './ProductCard.css';

const ProductCard = ({ product }) => {
  const imageUrl = `http://localhost:6001/uploads/${product.images[0]}`; // Assuming the image name is in product.images[0]

  return (
    <div className="product-card">
      <img src={imageUrl} alt={product.name} className="product-image" />
      <h3 className="product-name">{product.name}</h3>
      <p className="product-description">{product.description}</p>
      <p className="product-price">${product.price}</p>
      <p className="product-stock">Stock: {product.stock}</p>
    </div>
  );
};

export default ProductCard;
