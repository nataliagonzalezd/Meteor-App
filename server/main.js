import { Meteor } from 'meteor/meteor';
import { ProductsCollection } from '../imports/api/ProductsCollection';
import {Accounts} from 'meteor/accounts-base';
import '../server/accounts'
import '../server/publications.js'
import '../imports/api/cartMethods.js'

Meteor.startup(() => {
  if (ProductsCollection.find().count() === 0) {
    const SEED_USERNAME = 'meteorite';
    const SEED_PASSWORD = 'password';

    const user = Accounts.findUserByUsername(SEED_USERNAME);
    
    const products = [
      {name: 'Protest Showy ski suit in pink and green colourblock', description:'Boardwear brand Protest was created by a small group of snowboarders in Holland', old_price:980, price:800, stock:2, image_url:'https://images.asos-media.com/products/protest-showy-ski-suit-in-pink-and-green-colourblock/203823692-1-colourblock?$n_640w$&wid=513&fit=constrain', userId: user._id},
      {name: 'Topshop Sno ski suit with funnel neck & belt in black', description:'Topshop is entering a new era. Retaining its fashion authority and the very best of its heritage, while celebrating iconic styles such as the Jamie and Joni jean, and embracing the new.', old_price:1090, price:935, stock:10, image_url:'https://images.asos-media.com/products/topshop-sno-ski-suit-with-funnel-neck-belt-in-black/202248776-1-black?$n_640w$&wid=513&fit=constrain', userId: user._id},
      {name: 'Fila Hypercube trainers in black and zebra print in black', description:'Founded in 1911 by brothers in Biella, Italy, Fila packs more than 100 years of heritage into its collections.', old_price:3500, price:2300, stock:2, image_url:'https://images.asos-media.com/products/fila-hypercube-trainers-in-black-and-zebra-print-in-black/203666495-1-black?$n_640w$&wid=513&fit=constrain', userId: user._id},
      {name: 'Topshop Sno ski suit with fur hood & belt in blue', description:'Topshop is entering a new era. Retaining its fashion authority and the very best of its heritage, while celebrating iconic styles such as the Jamie and Joni jean, and embracing the new.', old_price:4199, price:3200, stock:9, image_url:'https://images.asos-media.com/products/topshop-sno-ski-suit-with-fur-hood-belt-in-blue/202249579-1-blue?$n_640w$&wid=513&fit=constrain', userId: user._id},
      {name: 'OOSC X Penfold ski suit in pink', description:'Old School Ski is here to rewrite your slope steez with outrageous 80s vibes.', old_price:2450, price:1900, stock:6, image_url:'https://images.asos-media.com/products/oosc-x-penfold-ski-suit-in-pink/203655584-1-pink?$n_640w$&wid=513&fit=constrain', userId: user._id},
    ];
    products.forEach((product) => {
      ProductsCollection.insert(product);
    });
  }
});


ServiceConfiguration.configurations.upsert(
  { service: 'github' },
  {
    $set: {
      loginStyle: 'popup',
      clientId: '6036e6de5b321c813bf0',
      secret: '9942eca6ff3b6011a79aba012b83b58edf1f8ff0', 
    },
  }
);