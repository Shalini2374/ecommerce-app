import React, { useEffect, useState } from 'react';
import { fetchCustomerOrders } from '../api/api'; // API helper

const CustomerOrdersPage = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const loadOrders = async () => {
      try {
        const data = await fetchCustomerOrders(); // Fetch orders from API
        setOrders(data);
      } catch (error) {
        console.error('Error fetching orders:', error);
      }
    };
    loadOrders();
  }, []);

  return (
    <div className="customer-orders-page">
      <h2>Your Orders</h2>
      {orders.length === 0 ? (
        <p>No orders found.</p>
      ) : (
        <ul>
          {orders.map((order) => (
            <li key={order._id}>
              <strong>Order ID:</strong> {order._id} <br />
              <strong>Product ID:</strong> {order.productId} <br />
              <strong>Quantity:</strong> {order.quantity} <br />
              <strong>Status:</strong> {order.status}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CustomerOrdersPage;
