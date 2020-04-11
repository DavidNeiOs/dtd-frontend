import React from "react";
import { useDispatch } from "react-redux";

import { Flash as IFlash } from "../../context/flash";
import { useTypedSelector } from "../../reducers";
import { SET_ERRORS } from "../../actions/types";

interface Props {
  flash: IFlash;
  index: number;
}

export const Flash = ({ flash, index }: Props) => {
  const errors = useTypedSelector((state) => state.errors);
  const dispatch = useDispatch();
  const handleDeleteClick = () => {
    const newArr = [...errors.slice(0, index), ...errors.slice(index + 1)];
    dispatch({
      type: SET_ERRORS,
      payload: newArr,
    });
  };

  return (
    <div
      className={`flash ${flash.success ? "flash--success" : "flash--error"}`}
    >
      <p className="flash__text">{flash.message}</p>
      <button className="flash__remove" onClick={handleDeleteClick}>
        &times;
      </button>
    </div>
  );
};
