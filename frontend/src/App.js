// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import Dashboard from './Dashboard';
import About from './About';
import ProductPage from './ProductPage';
import NotFound from './NotFound'; // This is for handling 404 errors

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<ProductPage />} />
        <Route path="*" element={<NotFound />} /> {/* Catch-all route */}
      </Routes>
    </Router>
  );
}

export default App;
