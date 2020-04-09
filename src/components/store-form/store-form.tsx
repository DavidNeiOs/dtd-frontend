import React, { FunctionComponent } from "react";
import { Formik, Field, Form, ErrorMessage, FormikHelpers } from "formik";
import * as Yup from "yup";

import { Checkbox } from "../checkbox";
import { MediaUpload } from "../media-upload";
import { Store } from "../../types/store";
import { tags } from "../../constants/stores";
import { LocationInput } from "../location-input";

interface Props {
  store?: Store;
  onSubmit: (values: Store, actions: FormikHelpers<Store>) => Promise<any>;
}
export const StoreForm: FunctionComponent<Props> = ({
  store = {
    name: "",
    description: "",
    tags: [],
    url: "",
    location: {
      address: "",
      coordinates: [],
    },
  },
  onSubmit,
}) => {
  return (
    <Formik
      initialValues={store}
      validationSchema={Yup.object({
        name: Yup.string()
          .max(20, "Must 20 characters long or less")
          .required("Required"),
        description: Yup.string().max(
          240,
          "Must be 240 characters long or less"
        ),
        tags: Yup.array().of(Yup.string()),
        url: Yup.string().required("Add a photo of your place"),
        location: Yup.object({
          address: Yup.string().required("You must provide an address"),
          coordinates: Yup.array()
            .of(Yup.number())
            .required("Make sure you have selected an option"),
        }),
      })}
      onSubmit={onSubmit}
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
              <Field name="tags" component={Checkbox} key={tag} label={tag} />
            );
          })}
        </ul>
        <Field name="url" component={MediaUpload} />
        <label htmlFor="location.address">Address</label>
        <Field name="location.address" component={LocationInput} />
        <ErrorMessage name="location.address" />
        <br />
        <ErrorMessage name="location.coordinates" />
        <button type="submit" className="button">
          Save →
        </button>
      </Form>
    </Formik>
  );
};
