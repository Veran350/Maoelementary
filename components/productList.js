// src/components/ProductList.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ProductList = () => {
  const [products, setProducts] = useState([]);

  // Fetch products from the backend API
  useEffect(() => {
    axios
      .get('http://localhost:5000/products')  // Make sure this is the correct URL for your API
      .then((response) => {
        setProducts(response.data);  // Save the products to the state
      })
      .catch((error) => {
        console.error('Error fetching products:', error);
      });
  }, []); // Empty dependency array ensures this effect runs only once when the component mounts

  return (
    <div>
      <h2>Product List</h2>
      <div className="product-container">
        {products.length === 0 ? (
          <p>No products available</p>
        ) : (
          products.map((product) => (
            <div className="product-card" key={product._id}>
              <img src={product.image} alt={product.name} />
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <p>Price: ${product.price}</p>
              <p>Category: {product.category}</p>
              <p>Stock: {product.stock}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default ProductList;
