// src/pages/HomePage.js
import React, { useState, useEffect } from 'react';
import { getProducts } from '../services/API';

const HomePage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getProducts();
        setProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error.message);
      }
    };
    fetchProducts();
  }, []);

  return (
    <div>
      <h1>Welcome to MaoElementary</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
        {products.length > 0 ? (
          products.map((product) => (
            <div
              key={product._id}
              style={{
                border: '1px solid #ccc',
                padding: '10px',
                borderRadius: '5px',
                maxWidth: '200px',
              }}
            >
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <p><strong>Price:</strong> ${product.price}</p>
              <button>View Details</button>
            </div>
          ))
        ) : (
          <p>No products available.</p>
        )}
      </div>
    </div>
  );
};

export default HomePage;
