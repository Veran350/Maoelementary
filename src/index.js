import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { CartProvider } from './context/CartContext'; // Import CartProvider

ReactDOM.render(
  <CartProvider>  {/* Wrap the App with CartProvider */}
    <App />
  </CartProvider>,
  document.getElementById('root')
);
