import React, { useState } from "react";
import { Accounts } from "meteor/accounts-base";
import { Meteor } from "meteor/meteor";
import { Link } from "react-router-dom";

const RegisterForm = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();
    Accounts.createUser({ username, email, password }, (error) => {
      if (error) {
        console.log(error.reason);
      } else {
        Meteor.loginWithPassword(username, password);
      }
    });
  };

  return (
    <>
      <div className="container-fluid">
        <div className="row no-gutter">
          <div className="col-md-6 d-none d-md-flex bg-image"></div>
          <div className="col-md-6 bg-light">
            <div className="login d-flex align-items-center py-5">
              <div className="container">
                <div className="row">
                  <div className="col-lg-10 col-xl-7 mx-auto">
                    <h3 className="display-4">Welcome!</h3>
                    <p className="text-muted mb-4">
                      Please register to continue
                    </p>
                    <form onSubmit={handleRegister}>
                      <div className="form-group mb-3">
                        <input
                          id="inputUserName"
                          type="text"
                          placeholder="User name"
                          required
                          autoFocus=""
                          className="form-control rounded-pill border-0 shadow-sm px-4"
                          onChange={(e) => setUsername(e.target.value)}
                        />
                      </div>
                      <div className="form-group mb-3">
                        <input
                          id="inputEmail"
                          type="text"
                          placeholder="Email"
                          required
                          autoFocus=""
                          className="form-control rounded-pill border-0 shadow-sm px-4"
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </div>
                      <div className="form-group mb-3">
                        <input
                          id="inputPassword"
                          type="password"
                          placeholder="Password"
                          required
                          className="form-control rounded-pill border-0 shadow-sm px-4 text-dark"
                          onChange={(e) => setPassword(e.target.value)}
                        />
                      </div>
                      <button
                        type="submit"
                        className="btn btn-outline btn-dribble btn-round text-left w-100 mb-3"
                      >
                        Sign in
                      </button>
                      <Link
                        to="/login"
                        className="btn btn-outline btn-dribble btn-round text-left w-100 mb-3"
                      >
                        Back to Login
                      </Link>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RegisterForm;
