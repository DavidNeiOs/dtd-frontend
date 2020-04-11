import { AnyAction } from 'redux'
import { ThunkDispatch, ThunkAction } from "redux-thunk";
import jwt_decode from "jwt-decode";

import { UserRegisterForm, UserLoginForm } from "../types/user"
import setAuthToken from "../utils/setAuthToken";
import {
  GET_ERRORS,
  SET_CURRENT_USER,
  USER_LOADING
} from "./types";
import { apiClient } from "../services/apiClient";

// Register User
export const registerUser = (userData: UserRegisterForm, history: any): ThunkAction<void, {}, {}, AnyAction> => (dispatch: ThunkDispatch<{}, {}, AnyAction>) => {
  apiClient
    .post("/register", userData)
    .then(res => {
      console.log(res.data);
      const { token } = res.data;
      localStorage.setItem("jwtToken", token);
      // Set token to Auth header
      setAuthToken(token);
      // Decode token to get user data
      const decoded = jwt_decode(token);
      // Set current user
      dispatch(setCurrentUser(decoded));
      history.push("/")
    }) // re-direct to login on successful register
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

// Login - get user token
export const loginUser = (userData: UserLoginForm, history: any) => (dispatch: ThunkDispatch<{}, {}, AnyAction>) => {
  apiClient
    .post("/login", userData)
    .then(res => {
      // Save to localStorage
      // Set token to localStorage
      console.log(res)
      const { token } = res.data;
      localStorage.setItem("jwtToken", token);
      // Set token to Auth header
      setAuthToken(token);
      // Decode token to get user data
      const decoded = jwt_decode(token);
      // Set current user
      dispatch(setCurrentUser(decoded));
      history.push("/")
    })
    .catch(err =>{
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })}
    );
};

// Set logged in user
export const setCurrentUser = (decoded: any) => {
  return {
    type: SET_CURRENT_USER,
    payload: decoded
  };
};

// User loading
export const setUserLoading = () => {
  return {
    type: USER_LOADING
  };
};

// Log user out
export const logoutUser = () => (dispatch: ThunkDispatch<{}, {}, AnyAction>) => {
  // Remove token from local storage
  localStorage.removeItem("jwtToken");
  // Remove auth header for future requests
  setAuthToken(false);
  // Set current user to empty object {} which will set isAuthenticated to false
  dispatch(setCurrentUser({}));
};