import React from 'react';
import './OrderCard.css'; // CSS for order card

const OrderCard = ({ order }) => {
  return (
    <div className="order-card">
      <h3>Order #{order._id}</h3>
      <p><strong>Status:</strong> {order.status}</p>
      <p><strong>Total:</strong> ${order.totalAmount}</p>
      <p><strong>Order Date:</strong> {new Date(order.orderDate).toLocaleDateString()}</p>
      <div className="order-products">
        <h4>Products:</h4>
        <ul>
          {order.products.map(product => (
            <li key={product.productId}>
              <span>{product.productId} (x{product.quantity})</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default OrderCard;
