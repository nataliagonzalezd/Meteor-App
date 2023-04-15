import React from 'react';
import { ShoppingCart } from '../components/ShoppingCart';

export const ShoppingCartView = () => {


  return (
    <>
    <div className="back"><a href="#"></a></div>
    <h1>Your Cart</h1>
    <div className="container-fluid">
      <div className="row align-items-start">
        <div className="col-12 col-sm-8 items">
        <ShoppingCart/>
        </div>
        <div className="col-12 col-sm-4 p-3 proceed form">
          <div className="row m-0">
            <div className="col-sm-8 p-0">
              <h6>Subtotal</h6>
            </div>
            <div className="col-sm-4 p-0">
              <p id="subtotal">$132.00</p>
            </div>
          </div>
          <div className="row m-0">
            <div className="col-sm-8 p-0 ">
              <h6>Tax</h6>
            </div>
            <div className="col-sm-4 p-0">
              <p id="tax">$6.40</p>
            </div>
          </div>
          <hr/>
          <div className="row mx-0 mb-2">
            <div className="col-sm-8 p-0 d-inline">
              <h5>Total</h5>
            </div>
            <div className="col-sm-4 p-0">
              <p id="total">$138.40</p>
            </div>
          </div>
          <a href="#"><button id="btn-checkout" className="shopnow"><span>Checkout</span></button></a>
        </div>
      </div>
    </div>
  
  <footer className="container">
  </footer>
  </>
  );
};