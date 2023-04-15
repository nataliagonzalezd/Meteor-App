import React from 'react';
import { Meteor } from 'meteor/meteor';
import { useState } from 'react';
import { useTracker } from 'meteor/react-meteor-data';
import { CartProductsCollection } from '../../api/CartProductsCollection';

export const ShoppingCart = () => {
  const [cartProducts, setCartProducts] = useState([]);
  const user = Meteor.user();

  useTracker(() => {
    const handle = Meteor.subscribe('cartProducts', user?._id);
    if (handle.ready()) {
      const cart = CartProductsCollection.findOne({ userId: user._id });
      if (cart && cart.products) {
        setCartProducts(cart.products);
      } else {
        setCartProducts([]);
      }
    }
  }, [user?._id]);

  return (
<>
      <h2>Shopping Cart</h2>
<div className="cartItem row align-items-start">
          <div className="col-3 mb-2">
            <img className="w-100" src="https://badux.co/smc/codepen/birdcage-posters.jpg" alt="art image"/>
          </div>
          <div className="col-5 mb-2">
          {cartProducts?.map((product,index) => (
            <div key={product._id + '-' + index}>
            <h6 className="">{product.name}</h6>
            <p className="pl-1 mb-0">{product.description}</p>
            <p className="pl-1 mb-0">Price: ${product.price}</p>
          </div>))}
          <div className="col-2">
            <p className="cartItemQuantity p-1 text-center">1</p>
          </div>
          <div className="col-2">
            <p id="cartItem1Price">$66</p>
          </div>
        </div>
    </div>
</>
  );
};
