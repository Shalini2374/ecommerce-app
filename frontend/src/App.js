import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

// Importing components and pages
import Navbar from './components/Navbar'; // Correctly import Navbar
import OrderDetails from './components/OrderDetails'; // Order details page
import OrderList from './components/OrderList'; // Order list page
import AdminPage from './pages/AdminPage'; // Admin dashboard page
import HomePage from './pages/HomePage'; // Home page
import LoginPage from './pages/LoginPage'; // Login page
import PlaceOrderPage from './pages/PlaceOrderPage'; // Place order page

function App() {
  return (
    <Router>
      <Navbar /> {/* Include the Navbar for navigation */}
      
      <Routes>
        <Route path="/" element={<HomePage />} /> {/* Home page route */}
        <Route path="/login" element={<LoginPage />} /> {/* Login page route */}
        
        {/* Order routes */}
        <Route path="/orders" element={<OrderList />} /> {/* Order List page */}
        <Route path="/orders/:id" element={<OrderDetails />} /> {/* Order Details page for specific order */}
        
        {/* Admin page */}
        <Route path="/admin" element={<AdminPage />} /> {/* Admin dashboard */}
        
        {/* Page for placing a new order */}
        <Route path="/place-order" element={<PlaceOrderPage />} />
      </Routes>
    </Router>
  );
}

export default App;
