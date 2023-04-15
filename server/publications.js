import {Meteor} from 'meteor/meteor';
import { ProductsCollection } from "../imports/api/ProductsCollection";
import { CartProductsCollection } from "../imports/api/CartProductsCollection";

Meteor.publish('products', function() {
    return ProductsCollection.find();
  });
  
Meteor.publish('cartProducts', function publishCartProducts() {
    return CartProductsCollection.find({ userId: this.userId });
  });