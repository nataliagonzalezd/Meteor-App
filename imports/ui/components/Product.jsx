import React from 'react';

export const Product = ({ product }) =>{
  
  const user = Meteor.user();
  
  function addToCart(product) {
    Meteor.call('cart.addProduct', user._id, product);
  }
  
  return(  
    <div className="col-md-6 col-lg-4 col-xl-3">
    <div id="{`product-${product._id}`}" className="single-product">
      <div className="part-1">
        <span className="discount">%15</span>
        <img src={product.image_url} className="card-img-top" alt="..."></img>
      </div>
      <div className="part-2">
        <h2 className="product-title">{product.name}</h2>
        <h3 className="product-title">{product.description}</h3>
        <h4 className="product-old-price">${product.old_price}</h4>
        <h4 className="product-price">${product.price}</h4>
        <h4 className="product-stock"> Stock: {product.stock}</h4>
        <button type="button" className="btn btn-success" onClick={() => addToCart(product)}>Add to cart</button>
      </div>
    </div>
  </div>
)
};

