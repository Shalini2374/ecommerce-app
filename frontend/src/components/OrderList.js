import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './OrderList.css';

const OrderList = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const userId = localStorage.getItem('userId'); // Get the userId from localStorage

    if (userId) {
      const fetchOrders = async () => {
        try {
          const response = await axios.get(`http://localhost:6001/api/orders/${userId}`);
          setOrders(response.data); // Set the orders in state
          setLoading(false);
        } catch (err) {
          setError('Error fetching orders');
          setLoading(false);
          console.error('Error fetching orders:', err);
        }
      };

      fetchOrders();
    } else {
      setError('User not logged in');
      setLoading(false);
    }
  }, []); // Run effect only once on mount

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h2>Your Orders</h2>
      {orders.length === 0 ? (
        <p>No orders found.</p>
      ) : (
        <ul className="order-list">
          {orders.map((order) => (
            <li key={order._id} className="order-item">
              <h3>Order #{order._id}</h3>
              <p>Status: {order.status}</p>
              <p>Total: ${order.totalAmount}</p>
              <p>Order Date: {new Date(order.orderDate).toLocaleString()}</p>
              <ul>
                {order.products.map((product, index) => (
                  <li key={index}>
                    <strong>{product.productId}</strong> - Quantity: {product.quantity}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default OrderList;
