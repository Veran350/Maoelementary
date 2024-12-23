import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Grid, Card, CardContent, Typography, Button, CardMedia, CircularProgress } from '@mui/material';
import { Link } from 'react-router-dom';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get('http://localhost:5000/products')
      .then((response) => {
        setProducts(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching products:', error);
        setLoading(false);
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

  if (loading) {
    return <CircularProgress />;
  }

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
                  <Link to={`/edit/${product._id}`}>
                    <Button variant="contained" color="secondary" fullWidth>
                      Edit Product
                    </Button>
                  </Link>
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
