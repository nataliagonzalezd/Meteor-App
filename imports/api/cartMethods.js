import { CartProductsCollection } from "./CartProductsCollection";

Meteor.methods({
    'cart.addProduct'(userId, product){
      //validar que el usuario este autenticado
    if(!userId){
      throw new Meteor.Error('not-authorized', 'User must be logged in to add products to cart.');
    }else{
    // Carrito del usuario
    const cart = CartProductsCollection.findOne({userId});
  
    // Si el usuario no tiene un carrito, creo uno
    if(!cart){
      CartProductsCollection.insert({
        userId,
        products: [product]
      });
    }else{
      //si el usuario ya tiene carrito agrego el producto
      CartProductsCollection.update(cart._id,{
        $push: {
          products: product
        }
      });
    }
    }
    }
  });