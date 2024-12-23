import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, CardContent, Typography, Grid, Button, CardMedia } from '@mui/material';

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:5000/products')
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.error('Error fetching products:', error);
      });
  }, []);

  const deleteProduct = (id) => {
    axios
      .delete(`http://localhost:5000/products/${id}`)
      .then((response) => {
        setProducts(products.filter((product) => product._id !== id));
        alert('Product deleted successfully');
      })
      .catch((error) => {
        console.error('Error deleting product:', error);
        alert('Error deleting product');
      });
  };

  return (
    <div>
      <h2>Product List</h2>
      <Grid container spacing={3}>
        {products.length === 0 ? (
          <Typography variant="h6">No products available</Typography>
        ) : (
          products.map((product) => (
            <Grid item xs={12} sm={6} md={4} key={product._id}>
              <Card>
                <CardMedia
                  component="img"
                  height="140"
                  image={product.image}
                  alt={product.name}
                />
                <CardContent>
                  <Typography variant="h6" component="div">
                    {product.name}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    {product.description}
                  </Typography>
                  <Typography variant="body1" color="primary">
                    ${product.price}
                  </Typography>
                  <Button variant="contained" color="primary" fullWidth>
                    View More
                  </Button>
                  <Button
                    variant="contained"
                    color="secondary"
                    onClick={() => deleteProduct(product._id)}
                    fullWidth
                  >
                    Delete Product
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))
        )}
      </Grid>
    </div>
  );
};

export default ProductList;
