import { Meteor } from 'meteor/meteor';
import { ProductsCollection } from '../imports/api/ProductsCollection';

Meteor.startup(() => {
  if (ProductsCollection.find().count() === 0) {
    const products = [
      {name: 'Camiseta', description:'hombros caídos con estampado de slogan y sol', price:800, stock:2},
      {name: 'Abrigo', description:'Con costura de hombros caidos', price:935, stock:10},
      {name: 'Cazadora', description:'Ribete con fleco con parte delantera abierta', price:2300, stock:2},
      {name: 'Biker', description:'De cuello con solapa con cinturon con cremallera', price:3200, stock:9},
      {name: 'Short', description:'Mezclilla rotos bajo crudo', price:1900, stock:6},
    ];
    products.forEach((product) => {
      ProductsCollection.insert(product);
    });
  }

  Meteor.publish('products', function() {
    return ProductsCollection.find();
  });
});

