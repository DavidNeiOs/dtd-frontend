import React, { FunctionComponent } from "react";
import { useFormik, getIn } from "formik";
import * as Yup from "yup";

import { tags } from "./utils";

interface Props {
  store?: object;
}
export const StoreForm: FunctionComponent<Props> = (store = {}) => {
  const {
    handleSubmit,
    handleChange,
    values,
    touched,
    errors,
    handleBlur
  } = useFormik({
    initialValues: {
      name: "",
      description: "",
      tags: {
        WIFI: false,
        OPEN_LATE: false,
        FAMILY_FRIENDLY: false,
        VEGETARIAN: false,
        LICENSED: false
      }
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .max(20, "Must 20 characters long or less")
        .required("required"),
      description: Yup.string().max(240, "Must be 240 characters long or less"),
      tags: Yup.object({
        WIFI: Yup.boolean(),
        OPEN_LATE: Yup.boolean(),
        FAMILY_FRIENDLY: Yup.boolean(),
        VEGETARIAN: Yup.boolean(),
        LICENSED: Yup.boolean()
      })
    }),
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    }
  });

  console.log("touched", touched);
  console.log("errors", errors);
  return (
    <form className="card" onSubmit={handleSubmit}>
      <label htmlFor="name">Your store name:</label>
      <input
        type="text"
        name="name"
        id="name"
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.name}
      />
      {touched.name && errors.name ? <div>{errors.name}</div> : null}
      <label htmlFor="description">Description:</label>
      <textarea
        name="description"
        id="description"
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.description}
      />
      {touched.description && errors.description ? (
        <div>{errors.description}</div>
      ) : null}
      <ul className="tags">
        {Object.keys(tags).map((tag: string) => {
          return (
            <div className="tag tag__choice">
              <input
                type="checkbox"
                name={`tags.${tag}`}
                id={tag}
                onChange={handleChange}
                value={getIn(values.tags, tag)}
              />
              <label htmlFor={tag}>{tags[tag]}</label>
            </div>
          );
        })}
      </ul>
      <input type="submit" value="Save →" className="button" />
    </form>
  );
};
