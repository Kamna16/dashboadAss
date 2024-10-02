import React from 'react';

const ProductList = ({ products }) => {
  return (
    <div>
      <h2>Product List</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <img src={product.image} alt={product.title} width={50} />
            <p>{product.title} - ${product.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
