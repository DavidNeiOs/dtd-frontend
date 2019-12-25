import React, { FunctionComponent } from "react";
import { Formik, Field, Form, ErrorMessage, FieldProps } from "formik";
import * as Yup from "yup";

import { tags } from "./utils";

interface Props {
  store?: object;
}
export const StoreForm: FunctionComponent<Props> = (store = {}) => {
  return (
    <Formik
      initialValues={{
        name: "",
        description: "",
        tags: {
          WIFI: false,
          OPEN_LATE: false,
          FAMILY_FRIENDLY: false,
          VEGETARIAN: false,
          LICENSED: false
        }
      }}
      validationSchema={Yup.object({
        name: Yup.string()
          .max(20, "Must 20 characters long or less")
          .required("required"),
        description: Yup.string().max(
          240,
          "Must be 240 characters long or less"
        ),
        tags: Yup.object({
          WIFI: Yup.boolean(),
          OPEN_LATE: Yup.boolean(),
          FAMILY_FRIENDLY: Yup.boolean(),
          VEGETARIAN: Yup.boolean(),
          LICENSED: Yup.boolean()
        })
      })}
      onSubmit={values => {
        alert(JSON.stringify(values, null, 2));
      }}
    >
      <Form className="card">
        <label htmlFor="name">Your store name:</label>
        <Field name="name" type="text" />
        <ErrorMessage name="name" />
        <label htmlFor="description">Description:</label>
        <Field name="description" as="textarea"></Field>
        <ErrorMessage name="description" />
        <ul className="tags">
          {Object.keys(tags).map((tag: string) => {
            return (
              <Checkbox name={`tags.${tag}`} key={tag}>
                {tags[tag]}
              </Checkbox>
            );
          })}
        </ul>
        <input type="submit" value="Save →" className="button" />
      </Form>
    </Formik>
  );
};

interface CheckboxProps {
  children: React.ReactNode;
  name: string;
}
const Checkbox = ({ children, ...props }: CheckboxProps) => {
  return (
    <Field name={props.name}>
      {({ field, form }: FieldProps) => {
        return (
          <div
            className="tag tag__choice"
            onClick={() => form.setFieldValue(props.name, !field.value)}
          >
            <input type="checkbox" checked={field.value} readOnly />
            <label htmlFor={props.name}>{children}</label>
          </div>
        );
      }}
    </Field>
  );
};

/**
 * checkbox component replaces this code
 * <input
      type="checkbox"
      name={`tags.${tag}`}
      id={tag}
      onChange={handleChange}
      value={getIn(values.tags, tag)}
    />
    <label htmlFor={tag}>{tags[tag]}</label>
 */
