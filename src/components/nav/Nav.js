import React, { memo } from "react";
import logo from "../../assets/images/logo.png";
import { Link, NavLink } from "react-router-dom";
import "../../sass/nav.scss";

function Nav() {
  return (
    <nav className="nav">
      <div className="container">
        <div className="nav__info">
          <Link to={"/"}>
            <img src={logo} alt="logo" className="nav__img" />
          </Link>
          <ul className="nav__list">
            <li className="nav__item">
              <NavLink className="nav__btn" to={"/login"}>
                Log in
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default memo(Nav);
