import React from 'react';
import ProductList from './components/ProductList';  // Import the ProductList component
import CreateProduct from './components/CreateProduct';  // Import the CreateProduct component
import './App.css';  // Import the CSS styles

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Maoelementary Store</h1>
      </header>
      <main>
        <h2>Admin Panel</h2>
        <CreateProduct />
        <ProductList />
      </main>
    </div>
  );
}

export default App;
