import { Meteor } from 'meteor/meteor';
import { ProductsCollection } from '../imports/api/ProductsCollection';
import {Accounts} from 'meteor/accounts-base';
import '../server/accounts'
import '../server/publications.js'
import '../imports/api/cartMethods.js'

Meteor.startup(() => {
  if (ProductsCollection.find().count() === 0) {
    const SEED_USERNAME = 'meteorite';

    const user = Accounts.findUserByUsername(SEED_USERNAME);
    
    const products = [
      {name: 'Protest Showy ski suit in pink and green colourblock', description:'Boardwear brand Protest was created by a small group of snowboarders in Holland', old_price:980, price:800, stock:2,image_url:'https://images.asos-media.com/products/protest-showy-ski-suit-in-pink-and-green-colourblock/203823692-1-colourblock?$n_640w$&wid=513&fit=constrain', userId: user._id},
      {name: 'Fila Hypercube trainers in black and zebra print in black', description:'Founded in 1911 by brothers in Biella, Italy, Fila packs more than 100 years of heritage into its collections.', old_price:3500, price:2300, stock:2, image_url:'https://images.asos-media.com/products/fila-hypercube-trainers-in-black-and-zebra-print-in-black/203666495-1-black?$n_640w$&wid=513&fit=constrain', userId: user._id},
      {name: 'Topshop Sno ski suit with fur hood & belt in blue', description:'Topshop is entering a new era. Retaining its fashion authority and the very best of its heritage, embracing the new.', old_price:4199, price:3200, stock:9,image_url:'https://images.asos-media.com/products/topshop-sno-ski-suit-with-fur-hood-belt-in-blue/202249579-1-blue?$n_640w$&wid=513&fit=constrain', userId: user._id},
      {name: 'OOSC X Penfold ski suit in pink', description:'Old School Ski is here to rewrite your slope steez with outrageous 80s vibes.', old_price:2450, price:1900, stock:6,image_url:'https://images.asos-media.com/products/oosc-x-penfold-ski-suit-in-pink/203655584-1-pink?$n_640w$&wid=513&fit=constrain', userId: user._id},
      {name: 'OOSC Peoples Princess ski suit in black', description:'Retaining its fashion authority and the very best of its heritage', old_price:2030, price:1940, stock:6,image_url:'https://images.asos-media.com/products/oosc-peoples-princess-ski-suit-in-black/203655615-1-black?$n_640w$&wid=513&fit=constrain', userId: user._id},
      {name: 'OOSC Tighty ski suit in cream', description:'Not skimping on functionality,is waterproof and fully insulated, so you can look cool on the outside and stay warm on the inside.', old_price:4700, price:3580, stock:7,image_url:'https://images.asos-media.com/products/oosc-tighty-ski-suit-in-cream/203655656-3?$n_640w$&wid=513&fit=constrain', userId: user._id},
      {name: 'Protest Glamour ski suit in white', description:'Boardwear brand Protest was created by a small group of snowboarders in Holland', old_price:2530, price:2200, stock:3,image_url:'https://images.asos-media.com/products/protest-glamour-ski-suit-in-white/203823768-1-white?$n_640w$&wid=513&fit=constrain', userId: user._id},
      {name: 'Topshop Sno ski suit with funnel neck & belt in pink', description:'Topshop is entering a new era. Retaining its fashion authority and the very best of its heritage', old_price:4530, price:4200, stock:6,image_url:'https://images.asos-media.com/products/topshop-sno-ski-suit-with-funnel-neck-belt-in-pink/202909101-1-pink?$n_640w$&wid=513&fit=constrain', userId: user._id},
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
      clientId: Meteor.settings.private.github.clientId,
      secret: Meteor.settings.private.github.secret,
    },
  }
);
