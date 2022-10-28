import { Link } from "react-router-dom";
import React from "react";
// import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import pizza from "../../src/assets/pizza.png";

export default function Login() {
  const [login, setLogin] = useState({
    email: "",
    password: "",
  });

  function handleChangue(e) {
    e.preventDefault();
    setLogin({
      ...login,
      [e.target.name]: e.target.value,
    });
  }
  // console.log(login)
  return (
    <div className="container-login">
      <div className="divMayorLogin">
        <div className="divHijoLogin">
          <div className="pizzaimg">
            <img
              src={pizza}
              alt="Image not found"
              width="150px"
              height="150px"
            />
          </div>
          <br />
          <div className="form">
            <form action="">
              <div className="email">
                <input
                  type="text"
                  name="email"
                  value={login.name}
                  className="emailInput"
                  placeholder="Email"
                  onChange={(e) => handleChangue(e)}
                />
              </div>
              <br />
              <div className="password">
                <input
                  type="text"
                  name="password"
                  value={login.password}
                  className="passwordInput"
                  placeholder="Password"
                  onChange={(e) => handleChangue(e)}
                />
              </div>
              <br />
              <button className="botonLogin">Login</button>
            </form>
            <br />
            <div>
              <p className="parrafo">
                Not registered?
                <Link to="/register" className="registerP">
                  Created an account
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
