import React, { FunctionComponent } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

import { Checkbox } from "../checkbox";
import { MediaUpload } from "../media-upload";
import { Store } from "../../types/store";
import { tags } from "../../constants/stores";
import { apiClient } from "../../services/apiClient";
import { useFlashes } from "../../context/flash";

interface Props {
  store?: Store;
  endpoint: string;
}
export const StoreForm: FunctionComponent<Props> = ({
  store = {
    name: "",
    description: "",
    tags: {
      WIFI: false,
      OPEN_LATE: false,
      FAMILY_FRIENDLY: false,
      VEGETARIAN: false,
      LICENSED: false,
    },
    url: "",
  },
  endpoint,
}) => {
  const [flashes, setFlashes] = useFlashes();
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
        tags: Yup.object({
          WIFI: Yup.boolean(),
          OPEN_LATE: Yup.boolean(),
          FAMILY_FRIENDLY: Yup.boolean(),
          VEGETARIAN: Yup.boolean(),
          LICENSED: Yup.boolean(),
        }),
        url: Yup.string(),
      })}
      onSubmit={async (values, actions) => {
        const response = await apiClient.post(endpoint, values);
        setFlashes([...flashes, response.data]);
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
              <Field name={`tags.${tag}`} component={Checkbox} key={tag} />
            );
          })}
        </ul>
        <Field name="url" component={MediaUpload} />
        <button type="submit" className="button">
          Save →
        </button>
      </Form>
    </Formik>
  );
};
