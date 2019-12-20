import React from "react";
import { Link } from "react-router-dom";
import { Heart } from "../icons/heart";
import Logout from "../icons/logout.png";

export const UserLoggedIn = () => {
  return (
    <>
      <li className="nav__item">
        <Link to="/hearts" className="nav__link">
          <Heart></Heart>
          <span className="heart-count">2</span>
        </Link>
      </li>
      <li className="nav__item">
        <Link to="/logout" className="nav__link">
          <img src={Logout} alt="logout icon" width="30" height="30" />
          <span>LogOut</span>
        </Link>
      </li>
    </>
  );
};
