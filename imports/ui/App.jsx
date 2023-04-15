import React, { Fragment } from "react";
import { Meteor } from "meteor/meteor";
import { useTracker } from "meteor/react-meteor-data";
import { ProductsView } from "./views/ProductsView";
import { LoginView } from "./views/LoginView";
import { ShoppingCartView } from "./views/ShoppingCartView";
import { Navbar } from "./components/Navbar";

export const App = () => {
  const user = useTracker(() => Meteor.user());
  const logout = () => Meteor.logout();

  return (
    <div className="main">
      {user ? (
        <Fragment>
          <div className="user" onClick={logout}>
            {user.username || user.profile.name} 🚪
          </div>
          <div>
            <Navbar />
            <ProductsView />
            <ShoppingCartView />
          </div>
        </Fragment>
      ) : (
        <LoginView />
      )}
      ;
    </div>
  );
};

