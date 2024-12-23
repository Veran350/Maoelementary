import React from 'react';
import ProductList from './components/ProductList';  // Import the ProductList component
import CreateProduct from './components/CreateProduct';  // Import the CreateProduct component
import './App.css';  // If you have any styling for your app

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Maoelementary Store</h1>
      </header>
      <main>
        <h2>Admin Panel</h2>
        <CreateProduct />  {/* Render CreateProduct component for adding new products */}
        <ProductList />  {/* Render ProductList component to display the list of products */}
      </main>
    </div>
  );
}

export default App;
