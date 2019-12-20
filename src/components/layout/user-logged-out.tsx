import React from "react";
import { Link } from "react-router-dom";

export const UserLoggedOut = () => {
  return (
    <>
      <li className="nav__item">
        <Link to="/register" className="nav__link">
          Register
        </Link>
      </li>
      <li className="nav__item">
        <Link to="/login" className="nav__link">
          Log in
        </Link>
      </li>
    </>
  );
};
