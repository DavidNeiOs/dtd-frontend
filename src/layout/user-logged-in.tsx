import React, { MouseEvent } from "react";
import { Link, useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { logoutUser } from "../actions/authActions";
import { RootState } from "../reducers";

import { Heart } from "../components/icons/heart";
import Logout from "../components/icons/logout.png";
import { AuthState } from "../reducers/authReducer";

interface Props {
  auth: AuthState;
  logoutUser: () => void;
}

const UserLoggedInCmp = (props: Props) => {
  const history = useHistory();
  const onLogoutClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    props.logoutUser();
    history.push("/");
  };

  return (
    <>
      <li className="nav__item">
        <Link to="/hearts" className="nav__link">
          <Heart></Heart>
          <span className="heart-count">2</span>
        </Link>
      </li>
      <li className="nav__item">
        <button onClick={onLogoutClick} className="nav__link">
          <img src={Logout} alt="logout icon" width="30" height="30" />
          <span>LogOut</span>
        </button>
      </li>
    </>
  );
};

const mapStateToProps = (state: RootState) => ({
  auth: state.auth,
});

export const UserLoggedIn = connect(mapStateToProps, { logoutUser })(
  UserLoggedInCmp
);
