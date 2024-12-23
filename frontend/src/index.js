import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // Your CSS (optional)
import App from './App'; // Import your main App component
import { BrowserRouter as Router } from 'react-router-dom'; // Router setup

// Rendering the App component inside the div with id 'root'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <App />
  </Router>
);
