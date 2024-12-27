import React from 'react';
import { useCart } from '../context/CartContext';  // Import useCart

const CartPage = () => {
  const { cart, removeFromCart } = useCart();  // Access cart and removeFromCart functions

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
        <p>Your cart is empty.</p>
      )}
    </div>
  );
};

export default CartPage;
