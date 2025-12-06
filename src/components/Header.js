import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const Header = ({ isLoggedIn, onSignOut }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const { cart } = useCart();
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`/Merobazar?search=${encodeURIComponent(searchTerm)}`);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm">
      <div className="container-fluid px-4">
        <Link className="navbar-brand fw-bold text-primary" to="/Merobazar">MeroBazar</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <form className="d-flex mx-auto flex-grow-1" onSubmit={handleSearch} style={{ maxWidth: '50%' }}>
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button className="btn btn-outline-primary" type="submit">Search</button>
          </form>
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              {isLoggedIn ? (
                <button className="nav-link" onClick={onSignOut}>Sign Out</button>  
              ) : (
                <Link className="nav-link" to="/login">Login</Link>
              )}
            </li>
            <li className="nav-item">
              <Link className="nav-link position-relative" to="/cart">
                Cart
                {cart.length > 0 && (
                  <span className="badge bg-danger position-absolute top-0 start-100 translate-middle">
                    {cart.length}
                  </span>
                )}
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;