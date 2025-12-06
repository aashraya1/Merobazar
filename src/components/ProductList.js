import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import ProductCard from './ProductCard';

const ProductList = () => {
  const [products, setProducts] = useState([]); 
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://dummyjson.com/products');
        if (!response.ok) throw new Error('Failed to fetch products');
        const data = await response.json();
        const mappedProducts = data.products.map((product) => ({
          id: product.id,
          name: product.title,
          price: product.price,
          image: product.thumbnail,
          description: product.description,
        }));
        setProducts(mappedProducts);  
        setFilteredProducts(mappedProducts); 
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  useEffect(() => {
    const query = searchParams.get('search') || '';
    setFilteredProducts(
      products.filter((product) =>  
        product.name.toLowerCase().includes(query.toLowerCase())
      )
    );
  }, [products, searchParams]);  

  if (loading) return <div className="container my-5 text-center"><div className="spinner-border text-primary" role="status"><span className="visually-hidden">Loading...</span></div></div>;
  if (error) return <div className="container my-5 text-center text-danger">Error: {error}</div>;

  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">Featured Products</h2>
      <div className="row">
        {filteredProducts.map((product) => (
          <div key={product.id} className="col-md-4 col-sm-6 mb-4">
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;