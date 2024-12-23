import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav style={{ backgroundColor: '#333', padding: '10px' }}>
      <ul style={{ listStyleType: 'none', display: 'flex', justifyContent: 'space-around' }}>
        <li><Link style={{ color: '#fff', textDecoration: 'none' }} to="/">Home</Link></li>
        <li><Link style={{ color: '#fff', textDecoration: 'none' }} to="/dashboard">Dashboard</Link></li>
        <li><Link style={{ color: '#fff', textDecoration: 'none' }} to="/about">About</Link></li>
        <li><Link style={{ color: '#fff', textDecoration: 'none' }} to="/products">Products</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
