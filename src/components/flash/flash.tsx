import React from "react";

interface Props {
  flash: {
    success: boolean;
    message: string;
  };
}

export const Flash = ({ flash }: Props) => {
  return (
    <div
      className={`flash ${flash.success ? "flash--success" : "flash--error"}`}
    >
      <p className="flash__text">{flash.message}</p>
      <button className="flash__remove">&times;</button>
    </div>
  );
};
