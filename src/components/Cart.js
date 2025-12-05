import React from 'react';
import { useCart } from '../context/CartContext';

const Cart = () => {
  const { cart, removeFromCart, updateQuantity, getTotal } = useCart();

  const handleCheckout = () => {
    alert('Checkout functionality not implemented yet!');
  };

  return (
    <div className="container my-5">
      <h2>Your Shopping Cart</h2>
      {cart.length === 0 ? (
        <p className="text-muted">Your cart is empty.</p>
      ) : (
        <>
          <table className="table table-striped">
            <thead>
              <tr>
                <th>Product</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item) => (
                <tr key={item.id}>
                  <td>{item.name}</td>
                  <td>${item.price}</td>
                  <td>
                    <button className="btn btn-sm btn-outline-secondary me-2" onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
                    {item.quantity}
                    <button className="btn btn-sm btn-outline-secondary ms-2" onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                  </td>
                  <td>${(item.price * item.quantity).toFixed(2)}</td>
                  <td><button className="btn btn-danger btn-sm" onClick={() => removeFromCart(item.id)}>Remove</button></td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="d-flex justify-content-between align-items-center">
            <h4>Total: ${getTotal().toFixed(2)}</h4>
            <button className="btn btn-success btn-lg" onClick={handleCheckout}>Proceed to Checkout</button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;