import React from "react";
import { Meteor } from "meteor/meteor";
import { useState } from "react";
import { useTracker } from "meteor/react-meteor-data";
import { CartProductsCollection } from "../../api/CartProductsCollection";
import { Link } from "react-router-dom";

export const ShoppingCart = () => {
  const [cartProducts, setCartProducts] = useState([]);
  const [totalCartPrice, setTotalCartPrice] = useState(0);

  const user = Meteor.user();

  function removeProduct(product) {
    Meteor.call("cart.removeProduct", user._id, product);
  }

  useTracker(() => {
    const handle = Meteor.subscribe("cartProducts", user?._id);
    if (handle.ready()) {
      const cart = CartProductsCollection.findOne({ userId: user._id });
      if (cart && cart.products) {
        setCartProducts(cart.products);
        setTotalCartPrice(cart.totalCartPrice);
      } else {
        setCartProducts([]);
        setTotalCartPrice(0);
      }
    }
  }, [user?._id]);

  return (
    <>
      {" "}
      <div className="row justify-content-center text-center">
        <div className="col-md-8 col-lg-6">
          <div className="header mt-4 mb-4">
            <h2>Shopping Cart</h2>
          </div>
        </div>
      </div>
      {cartProducts?.map((product, index) => (
        <div key={product._id + "-" + index} className="card mb-4">
          <div className="card-body p-4">
            <div className="row align-items-center">
              <div className="col-md-2">
                <img
                  src={product.image_url}
                  className="img-fluid"
                  alt={product.name}
                />
              </div>
              <div className="col-md-2 d-flex justify-content-center">
                <div>
                  <p className="small text-muted mb-4 pb-2">Name</p>
                  <p className="lead fw-normal mb-0">{product.name}</p>
                </div>
              </div>
              <div className="col-md-2 d-flex justify-content-center">
                <div>
                  <p className="small text-muted mb-4 pb-2">Price</p>
                  <p className="lead fw-normal mb-0">${product.price}</p>
                </div>
              </div>
              <div className="col-md-2 d-flex justify-content-center">
                <div>
                  <p className="small text-muted mb-4 pb-2">Quantity</p>
                  <p className="lead fw-normal mb-0">{product.quantity}</p>
                </div>
              </div>
              <div className="col-md-2 d-flex justify-content-center">
                <div>
                  <p className="small text-muted mb-4 pb-2">Total</p>
                  <p className="lead fw-normal mb-0">${product.totalPrice}</p>
                </div>
              </div>
              <div className="col-md-2 d-flex justify-content-center">
                <button
                  type="button"
                  className="btn btn-outline btn-dribble btn-round text-left w-100 mb-3"
                  onClick={() => removeProduct(product)}
                >
                  Remove
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
      <div class="card mb-5">
        <div class="card-body p-4">
          <div class="float-end">
            <p class="mb-0 me-5 d-flex align-items-center">
              <span class="small text-muted me-2">Order total:</span>
              <span class="lead fw-normal">{totalCartPrice}</span>
            </p>
          </div>
        </div>
      </div>
      <div class="d-flex justify-content-end">
        <Link
          to="/"
          class="btn btn-outline btn-dribble btn-round w-50 mb-3 me-4"
        >
          Continue shopping
        </Link>
      </div>
    </>
  );
};
