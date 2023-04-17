import { ProductsCollection } from "./ProductsCollection";
import { CartProductsCollection } from "./CartProductsCollection";

// update quantity && prices
export const updateProduct = (cart, existingProduct, product, add = false) => {
  if (product.stock > 0 && add) {
    existingProduct.quantity += 1;
    existingProduct.totalPrice += product.price;
    CartProductsCollection.update(cart._id, {
      $set: {
        products: cart.products,
      },
    });
  } else if (existingProduct.quantity > 0 && !add) {
    existingProduct.quantity -= 1;
    existingProduct.totalPrice -= product.price;
    if (existingProduct.quantity === 0) {
      // remove product from cart
      const productIndex = cart.products.findIndex(
        (item) => item._id === existingProduct._id
      );
      if (productIndex !== -1) {
        cart.products.splice(productIndex, 1);
        CartProductsCollection.update(cart._id, {
          $set: {
            products: cart.products,
          },
        });
      }
    } else {
      CartProductsCollection.update(cart._id, {
        $set: {
          products: cart.products,
        },
      });
    }
  }
};

// update stock
export const updateStock = (product, add = false) => {
  if (add && product.stock > 0) {
    ProductsCollection.update(product._id, {
      $inc: {
        stock: -1,
      },
    });
  } else if (product.quantity > 0) {
    ProductsCollection.update(product._id, {
      $inc: {
        stock: 1,
      },
    });
  }
};
