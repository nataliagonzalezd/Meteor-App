import { Mongo } from 'meteor/mongo';

export const CartProductsCollection = new Mongo.Collection('cart_products');
