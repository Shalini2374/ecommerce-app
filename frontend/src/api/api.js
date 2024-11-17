import axios from 'axios';

const API_BASE = 'http://localhost:6001/api';

// Product APIs
export const getProducts = async () => await axios.get(`${API_BASE}/products`);
export const addProduct = async (product) => await axios.post(`${API_BASE}/products`, product);
export const deleteProduct = async (id) => await axios.delete(`${API_BASE}/products/${id}`);

// Order APIs
export const getOrders = async () => await axios.get(`${API_BASE}/orders`);
export const getOrderDetails = async (orderId) => await axios.get(`${API_BASE}/orders/${orderId}`);
export const placeOrder = async (orderData) => await axios.post(`${API_BASE}/orders`, orderData);

// User APIs
export const loginUser = async (credentials) => await axios.post(`${API_BASE}/users/login`, credentials);
