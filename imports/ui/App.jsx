import React from 'react';
import { useTracker } from 'meteor/react-meteor-data';
import { ProductsCollection } from '../api/ProductsCollection.js';
import { Product } from './Product.jsx';

export const App = () => {
  const { products, isLoading } = useTracker(() => {
    const handle = Meteor.subscribe('products');
    const isLoading = !handle.ready();
    const products = ProductsCollection.find().fetch();

    return { isLoading, products };
  });

  return (
    <div>
      <h1>Welcome to Meteor!</h1>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <ul>
          {products.map((product) => (
            <Product key={product._id} product={product} />
          ))}
        </ul>
      )}
    </div>
  );
};
