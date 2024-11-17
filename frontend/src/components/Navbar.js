import { faList, faShoppingCart, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for routing

const Navbar = () => {
  return (
    <nav>
      <ul>
        {/* Link to LoginPage */}
        <li><FontAwesomeIcon icon={faUser} /> <Link to="/login">Login</Link></li>

        {/* Placeholder for Cart */}
        <li><FontAwesomeIcon icon={faShoppingCart} /> Cart</li>

        {/* Link to OrderList */}
        <li><FontAwesomeIcon icon={faList} /> <Link to="/orders">Orders</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
