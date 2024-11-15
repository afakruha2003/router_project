import React from "react";
import logo from "../Assets/logo.svg";
import { NavLink } from "react-router-dom";
const Navbar = ({ isLogin, setIsLogin }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <img className="navbar-brand" src={logo} alt="" width={"150px"} />
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav ms-auto">
            <li className="nav-item">
              {/* <a className="nav-link active" aria-current="page" href="/">
              Home
            </a>  burada a etiketi olduğu zaman zayfa sürekli yenileniyor bunun yerine biz NAVLİNK kullandık*/}
              <NavLink to="/" className="nav-link">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/people" className="nav-link ">
                People
              </NavLink>
            </li>

            <li className="nav-item">
              {isLogin ? (
                <div className="nav-item" onClick={() => setIsLogin(false)}>
                  Logout
                </div>
              ) : (
                <NavLink to="/login" className="nav-link ">
                  Login
                </NavLink>
              )}
            </li>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
