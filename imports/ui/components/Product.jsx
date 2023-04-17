import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartArrowDown } from "@fortawesome/free-solid-svg-icons";

export const Product = ({ product }) => {
  const user = Meteor.user();

  function addToCart(product) {
    Meteor.call("cart.addProduct", user._id, product);
  }

  return (
    <div className="col-md-6 col-lg-4 col-xl-3">
      <div id="{`product-${product._id}`}" className="single-product">
        <div className="part-1">
          <span className="discount">%15</span>
          <img src={product.image_url} className="card-img-top" alt="..."></img>
        </div>
        <div className="part-2">
          <h2 className="product-title">{product.name}</h2>
          <h3 className="product-description">{product.description}</h3>
          <h4 className="product-old-price">${product.old_price}</h4>
          <h4 className="product-price">${product.price}</h4>
          <hr />
          <h4 className="product-stock align-center">
            {" "}
            Stock: {product.stock}
          </h4>
          <button
            type="button"
            className="btn btn-outline btn-dribble btn-round text-left w-100 mb-3"
            onClick={() => addToCart(product)}
          >
            <span>Add to cart</span>
            <FontAwesomeIcon icon={faCartArrowDown} style={{color: "#5F7FA7", marginLeft: '0.5rem'}} /> 
          </button>
        </div>
      </div>
    </div>
  );
};
