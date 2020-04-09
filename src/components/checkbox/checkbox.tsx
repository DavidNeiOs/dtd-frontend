import React from "react";
import { FieldProps } from "formik";
import { tags } from "../../constants/stores";

interface Props extends FieldProps {
  label: string;
}

export const Checkbox = (props: Props) => {
  const { field, form, label } = props;

  const handleClick = () => {
    if (!field.value.includes(label)) {
      form.setFieldValue(field.name, [...field.value, label]);
    } else {
      form.setFieldValue(
        field.name,
        field.value.filter((tag: string) => tag !== label)
      );
    }
  };

  return (
    <div className="tag tag__choice" onClick={handleClick}>
      <input type="checkbox" checked={field.value.includes(label)} readOnly />
      <label htmlFor={field.name}>{tags[label]}</label>
    </div>
  );
};
