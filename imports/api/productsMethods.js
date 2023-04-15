import { ProductsCollection } from "./ProductsCollection";

Meteor.methods({
    'productsMethods.addToCart': function(productId) {
      if (!this.userId) {
        throw new Meteor.Error('not-authorized', 'Debe iniciar sesión para agregar productos al carrito.');
      }
  
      const product = ProductsCollection.findOne(productId);
      if (!product) {
        throw new Meteor.Error('not-found', 'Producto no encontrado.');
      }
  
      if (product.stock === 0) {
        throw new Meteor.Error('out-of-stock', 'Producto sin stock.');
      }
  
      ProductsCollection.update(productId, { $inc: { stock: -1 } });
  
      return 'Producto agregado al carrito.';
    }
  });
  