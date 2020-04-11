import { combineReducers } from "redux";
import authReducer from "./authReducer";
import errorReducer from "./errorReducer";
import { TypedUseSelectorHook, useSelector } from "react-redux";

export const rootReducer = combineReducers({
  auth: authReducer,
  errors: errorReducer
});

export type RootState = ReturnType<typeof rootReducer>


export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector