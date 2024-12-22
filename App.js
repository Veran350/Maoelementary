// src/App.js
import React from 'react';
import ProductList from './components/ProductList';  // Import the ProductList component
import './App.css';  // If you have any styling for your app

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Maoelementary Store</h1>
      </header>
      <main>
        <ProductList />  {/* Render ProductList component */}
      </main>
    </div>
  );
}

export default App;
