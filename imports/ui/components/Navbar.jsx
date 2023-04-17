import React from "react";
import { Link } from "react-router-dom";
import { useTracker } from "meteor/react-meteor-data";
import { Meteor } from "meteor/meteor";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightFromBracket } from "@fortawesome/free-solid-svg-icons";

export const Navbar = () => {
  const user = useTracker(() => Meteor.user());
  const logout = () => Meteor.logout();

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-mdb-toggle="collapse"
            data-mdb-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fas fa-bars"></i>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  Home
                </Link>
              </li>
            </ul>
          </div>

          <div className="d-flex align-items-center">
            <a className="text-reset me-3" href="#">
              <i className="fas fa-shopping-cart"></i>
            </a>
            <Link
              to="/cart"
              className="btn btn-outline btn-dribble btn-round text-left w-100 mb-3"
            >
              Cart
            </Link>
            <Link
              to="/login"
              className="btn btn-outline btn-dribble btn-round text-left w-100 mb-3"
              onClick={logout}
            >
              <div style={{ display: "flex", alignItems: "center" }}>
                <FontAwesomeIcon
                  icon={faArrowRightFromBracket}
                  style={{ marginRight: "0.5rem" }}
                />
                {user?.username || user?.profile.name}
              </div>
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};
