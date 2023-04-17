import { CartProductsCollection } from "./CartProductsCollection";
import {updateProduct, updateStock} from './cartHelpers'

Meteor.methods({
  'cart.addProduct'(userId, product) {
    // user validation
    if (!userId) {
      throw new Meteor.Error('not-authorized', 'User must be logged in to add products to cart.');
    } else {
      const cart = CartProductsCollection.findOne({ userId });
      if (!cart) {
        CartProductsCollection.insert({
          userId,
          products: [{ ...product, quantity: 1 , totalPrice: product.price }],
        });
        updateStock(product,true);
      } else {
        // update quantity and prices
        const existingProduct = cart.products.find((item) => item._id === product._id);
        if (existingProduct) {
          updateProduct(cart,existingProduct,product,true);
          updateStock(product,true);
        } else if(product.stock > 0){
          CartProductsCollection.update(cart._id, {
            $push: {
              products: { ...product, quantity: 1, totalPrice: product.price }
            }
          });
          updateStock(product,true);
        }
        
        const totalCartPrice = cart.products.reduce((total, item) => {
          return total + item.totalPrice;
        }, 0);

        // update cart with total price
        CartProductsCollection.update(cart._id, {
          $set: {
            totalCartPrice: totalCartPrice
          }
        });
      }
    }
  },

  'cart.removeProduct'(userId, product) {
    // user validation
    if (!userId) {
      throw new Meteor.Error('not-authorized', 'User must be logged in to remove products from cart.');
    } else {
      const cart = CartProductsCollection.findOne({ userId });
      if (!cart) {
        throw new Meteor.Error('invalid-cart', 'User does not have a cart.');
      } else {
        const existingProduct = cart.products.find((item) => item._id === product._id);
        if (existingProduct) {
          updateProduct(cart,existingProduct,product,false);
          updateStock(product,false);
        } 
        const totalCartPrice = cart.products.reduce((total, item) => {
          return total + item.totalPrice;
        }, 0);
        

        // update cart with total price
        CartProductsCollection.update(cart._id, {
          $set: {
            totalCartPrice: totalCartPrice
          }
        });
      }
    }
  }

});

