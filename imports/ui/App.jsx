import React, { Fragment } from "react";
import { Meteor } from "meteor/meteor";
import { useTracker } from "meteor/react-meteor-data";
import { Navbar } from "./components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ShoppingCartView from "./views/ShoppingCartView";
import LoginForm from "./components/LoginForm";
import ProductsView from "./views/ProductsView";
import RegisterForm from "./components/RegisterForm";

export const App = () => {
  const user = useTracker(() => Meteor.user());

  return (
    <BrowserRouter>
      <div className="main">
        {user ? (
          <Fragment>
            <div>
              <Navbar />
              <Routes>
                <Route exact path="/" element={<ProductsView />} />
                <Route path="/cart" element={<ShoppingCartView />} />
                <Route path="/login" element={<ProductsView />} />
                <Route path="/register" element={<ProductsView />} />
                <Route element={<h1> Not found! </h1>} />
              </Routes>
            </div>
          </Fragment>
        ) : (
          <Routes>
            <Route path="/login" element={<LoginForm />} />
            <Route path="/register" element={<RegisterForm />} />
            <Route path="*" element={<LoginForm />} />
          </Routes>
        )}
      </div>
    </BrowserRouter>
  );
};
