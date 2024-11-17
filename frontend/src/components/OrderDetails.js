import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getOrderDetails } from '../api/api'; // API function to get order details

const OrderDetails = () => {
  const { id } = useParams(); // Get order ID from the URL
  const [order, setOrder] = useState(null);

  useEffect(() => {
    const fetchOrderDetails = async () => {
      const response = await getOrderDetails(id);
      setOrder(response.data);
    };

    fetchOrderDetails();
  }, [id]);

  if (!order) return <p>Loading...</p>;

  return (
    <div>
      <h2>Order Details for Order #{order.id}</h2>
      <p><strong>Status:</strong> {order.status}</p>
      <p><strong>Total:</strong> ${order.totalAmount}</p>
      <p><strong>Order Date:</strong> {new Date(order.orderDate).toLocaleDateString()}</p>
      <div>
        <h4>Products:</h4>
        <ul>
          {order.products.map(product => (
            <li key={product.productId}>{product.name} (x{product.quantity})</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default OrderDetails;
