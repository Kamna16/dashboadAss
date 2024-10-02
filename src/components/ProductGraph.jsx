import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';

const ProductGraph = ({ products }) => {
  const categoryData = products.reduce((acc, product) => {
    const category = product.category;
    acc[category] = acc[category] ? acc[category] + 1 : 1;
    return acc;
  }, {});

  const chartData = Object.keys(categoryData).map((key) => ({
    category: key,
    count: categoryData[key],
  }));

  return (
    <div>
      <h2>Product Statistics</h2>
      <BarChart width={600} height={300} data={chartData}>
        <XAxis dataKey="category" />
        <YAxis />
        <Tooltip />
        <CartesianGrid stroke="#f5f5f5" />
        <Bar dataKey="count" fill="#82ca9d" />
      </BarChart>
    </div>
  );
};

export default ProductGraph;
