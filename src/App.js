import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';  // Import BrowserRouter
import Header from './components/Header';
import ProductList from './components/ProductList';
import ProductDetails from './components/ProductDetails';
import Cart from './components/Cart';
import Login from './components/Login';
import './App.css';

function App() {
  return (
    <BrowserRouter basename="/merobazar">  {/* Add basename for GitHub Pages subpath */}
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <footer className="bg-dark text-white text-center py-3 mt-5">
          <p>&copy; 2023 MeroBazar. All rights reserved.</p>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;