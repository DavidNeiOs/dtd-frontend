import React from "react";
import { Route, Redirect, RouteProps } from "react-router-dom";
import { connect } from "react-redux";
import { RootState } from "../../reducers";
import { AuthState } from "../../reducers/authReducer";

interface Props extends RouteProps {
  cmp: React.ElementType;
  auth: AuthState;
}

const RouteCmp: React.FunctionComponent<Props> = ({
  cmp: Component,
  auth,
  ...rest
}) => (
  <Route
    {...rest}
    render={(props) =>
      auth.isAuthenticated === true ? (
        <Component {...props} />
      ) : (
        <Redirect to="/login" />
      )
    }
  />
);

const mapStateToProps = (state: RootState) => ({
  auth: state.auth,
});

export const PrivateRoute = connect(mapStateToProps)(RouteCmp);
