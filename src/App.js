import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Register from './pages/Register';
import Login from './pages/Login';
import HomePage from './pages/HomePage';
import ProductDetails from './pages/ProductDetails';  // Import the ProductDetails page

const App = () => {
  return (
    <Router>
      <div>
        <h1>Welcome to Maoelementary</h1>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/products/:id" element={<ProductDetails />} />  {/* New route for product details */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
