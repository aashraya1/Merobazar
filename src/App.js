import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import ProductList from './components/ProductList';
import ProductDetails from './components/ProductDetails';
import Cart from './components/Cart';
import Login from './components/Login';
import './App.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Check localStorage on app start
    const loggedIn = localStorage.getItem('loggedIn') === 'true';
    setIsLoggedIn(loggedIn);
  }, []);

  const handleLogin = () => {
    localStorage.setItem('loggedIn', 'true');
    setIsLoggedIn(true);
  };

  const handleSignOut = () => {
    localStorage.removeItem('loggedIn');
    setIsLoggedIn(false);
  };

  return (
    <div className="App">
      <Header isLoggedIn={isLoggedIn} onSignOut={handleSignOut} />
      <Routes>
        <Route path="/Merobazar" element={<ProductList />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login onLogin={handleLogin} />} />
      </Routes>
      <footer className="bg-dark text-white text-center py-3 mt-5">
        <p>&copy; 2023 MeroBazar. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;