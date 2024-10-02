import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProductList from './components/ProductList';
import ProductGraph from './components/ProductGraph';
import './App.css';

const App = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => console.error('Error fetching products:', error));
  }, []);

  return (
    <div className="App">
      <h1>E-Commerce Dashboard</h1>
      <ProductList products={products} />
      <ProductGraph products={products} />
    </div>
  );
};

export default App;
