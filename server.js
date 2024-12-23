const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const Product = require('./models/Product'); // Import the Product model

const app = express();

// Middleware setup
app.use(bodyParser.json());
app.use(cors());

// MongoDB connection string (replace <db_password> with your actual MongoDB password)
const MONGO_URI = 'mongodb+srv://jonathanolaoluwa02:<db_password>@cluster0.xlqex.mongodb.net/myDatabaseName';

// MongoDB connection
mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.log('MongoDB connection error:', err));

// CREATE: Add a new product
app.post('/products', async (req, res) => {
  const { name, description, price, image, category, stock } = req.body;
  if (!name || !description || !price || !image || !category || !stock) {
    return res.status(400).send('All fields are required');
  }
  try {
    const newProduct = new Product({
      name,
      description,
      price,
      image,
      category,
      stock,
    });
    await newProduct.save();
    res.status(201).send('Product added successfully');
  } catch (error) {
    res.status(500).send('Error adding product');
  }
});

// READ: Get all products
app.get('/products', async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).send('Error fetching products');
  }
});

// READ: Get a single product by ID
app.get('/products/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const product = await Product.findById(id);
    if (!product) {
      return res.status(404).send('Product not found');
    }
    res.status(200).json(product);
  } catch (error) {
    res.status(500).send('Error fetching product');
  }
});

// UPDATE: Update product by ID
app.put('/products/:id', async (req, res) => {
  const { id } = req.params;
  const { name, description, price, image, category, stock } = req.body;
  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      id,
      { name, description, price, image, category, stock },
      { new: true }
    );
    if (!updatedProduct) {
      return res.status(404).send('Product not found');
    }
    res.status(200).json(updatedProduct);
  } catch (error) {
    res.status(500).send('Error updating product');
  }
});

// DELETE: Delete product by ID
app.delete('/products/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const deletedProduct = await Product.findByIdAndDelete(id);
    if (!deletedProduct) {
      return res.status(404).send('Product not found');
    }
    res.status(200).send('Product deleted successfully');
  } catch (error) {
    res.status(500).send('Error deleting product');
  }
});

// Start the server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
