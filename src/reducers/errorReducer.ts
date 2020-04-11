import { GET_ERRORS, SET_ERRORS } from "../actions/types";

const initialState:any[] = [];

export default function(state = initialState, action: any) {
  switch (action.type) {
    case GET_ERRORS:
      return [...state, action.payload];
    case SET_ERRORS:
      return action.payload
    default:
      return state;
  }
}