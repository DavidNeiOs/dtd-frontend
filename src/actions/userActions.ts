import { AnyAction } from 'redux'
import { ThunkDispatch, ThunkAction } from "redux-thunk";
import jwt_decode from "jwt-decode";

import {
  GET_ERRORS,
} from "./types";
import { User } from "../types/user"
import { apiClient } from "../services/apiClient";
import { setCurrentUser } from './authActions';
import setAuthToken from '../utils/setAuthToken';

export const updateUser = (userData: User): ThunkAction<void, {}, {}, AnyAction> => (dispatch: ThunkDispatch<{}, {}, AnyAction>) => {
  apiClient
    .post('/update-user', userData)
    .then(res => {
      const { token } = res.data
      // update the Authorization header
      localStorage.setItem('jwtToken', token)
      // set token to auth header
      setAuthToken(token)
      // decode token to get user data
      const decoded = jwt_decode(token)
      // set updated user
      dispatch(setCurrentUser(decoded))
      // show succes flash
      dispatch({
        type: GET_ERRORS,
        payload: { success: true, message: 'You have updated your profile'}
      })
    })
    .catch(err => {
      dispatch({
        type: GET_ERRORS,
        payload: { success: false, message: "You must log in to update your user"}
      })
    })

}