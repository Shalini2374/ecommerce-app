import React, { useState } from 'react';
import { placeOrder } from '../api/api'; // API helper

const PlaceOrderPage = () => {
  const [formData, setFormData] = useState({
    productId: '',
    quantity: 1,
    address: '',
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleOrder = async (e) => {
    e.preventDefault();
    try {
      await placeOrder(formData);
      alert('Order placed successfully!');
    } catch (error) {
      console.error('Error placing order:', error);
    }
  };

  return (
    <div className="place-order-page">
      <h2>Place Order</h2>
      <form onSubmit={handleOrder}>
        <input
          type="text"
          name="productId"
          placeholder="Product ID"
          value={formData.productId}
          onChange={handleInputChange}
          required
        />
        <input
          type="number"
          name="quantity"
          placeholder="Quantity"
          value={formData.quantity}
          onChange={handleInputChange}
          required
        />
        <textarea
          name="address"
          placeholder="Delivery Address"
          value={formData.address}
          onChange={handleInputChange}
          required
        />
        <button type="submit">Place Order</button>
      </form>
    </div>
  );
};

export default PlaceOrderPage;
