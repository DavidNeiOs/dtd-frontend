import React from "react";
import { FieldProps } from "formik";
import { tags } from "../../constants/stores";

export const Checkbox = (props: FieldProps) => {
  const { field, form } = props;
  const pathAsArray = field.name.split(".");
  const lastValue = pathAsArray[pathAsArray.length - 1];
  return (
    <div
      className="tag tag__choice"
      onClick={() => form.setFieldValue(field.name, !field.value)}
    >
      <input type="checkbox" checked={field.value} readOnly />
      <label htmlFor={field.name}>{tags[lastValue]}</label>
    </div>
  );
};
