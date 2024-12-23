import React from 'react';
import CreateProduct from './components/CreateProduct';  // Import CreateProduct
import ProductList from './components/ProductList';  // Import ProductList component
import './App.css';  // If you have any styling for your app

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Maoelementary Store</h1>
      </header>
      <main>
        <h2>Admin Panel</h2>
        <CreateProduct />  {/* Add CreateProduct component for adding new products */}
        <h2>Product List</h2>
        <ProductList />  {/* Render ProductList component to display the list of products */}
      </main>
    </div>
  );
}

export default App;
