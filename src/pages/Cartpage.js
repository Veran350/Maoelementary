import React from 'react';
import { useCart } from '../context/CartContext'; // Import useCart from CartContext

const CartPage = () => {
  const { cart, removeFromCart } = useCart();  // Get cart data and removeFromCart function

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price, 0);  // Calculate total price
  };

  return (
    <div>
      <h1>Your Cart</h1>
      {cart.length > 0 ? (
        cart.map((item) => (
          <div key={item._id}>
            <h3>{item.name}</h3>
            <p>Price: ${item.price}</p>
            <button onClick={() => removeFromCart(item._id)}>Remove</button>
          </div>
        ))
      ) : (
        <p>Your cart is empty.</p>  // If cart is empty, show a message
      )}
      <h2>Total: ${getTotalPrice()}</h2> {/* Display the total price */}
    </div>
  );
};

export default CartPage;
