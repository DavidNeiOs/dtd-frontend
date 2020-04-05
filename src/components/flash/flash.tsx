import React from "react";
import { Flash as IFlash, useFlashes } from "../../context/flash";

interface Props {
  flash: IFlash;
  index: number;
}

export const Flash = ({ flash, index }: Props) => {
  const [flashes, setFlashes] = useFlashes();

  const handleDeleteClick = () => {
    const newArr = [...flashes.slice(0, index), ...flashes.slice(index + 1)];
    setFlashes(newArr);
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
