import React from "react";
import * as Yup from "yup";
import { withFormik, FormikProps, Form, Field } from "formik";

import { apiClient } from "../../services/apiClient";

interface FormValues {
  name: string;
  email: string;
  password: string;
  password_confirm: string;
}

const InnerForm = (props: FormikProps<FormValues>) => {
  const { touched, errors, isSubmitting } = props;
  return (
    <Form className="form">
      <h2>Register</h2>

      <label htmlFor="name">Name</label>
      <Field type="text" name="name" />
      {touched.name && errors.name && <div>{errors.name}</div>}

      <label htmlFor="email">Email address</label>
      <Field type="email" name="email" />
      {touched.email && errors.email && <div>{errors.email}</div>}

      <label htmlFor="password">Password</label>
      <Field type="password" name="password" />
      {touched.password && errors.password && <div>{errors.password}</div>}

      <label htmlFor="password_confirm">Confirm password</label>
      <Field type="password" name="password_confirm" />
      {touched.password_confirm && errors.password_confirm && (
        <div>{errors.password_confirm}</div>
      )}

      <button type="submit" className="button" disabled={isSubmitting}>
        Register &rarr;
      </button>
    </Form>
  );
};

let schema = Yup.object().shape({
  email: Yup.string().email("Make sure it's a valid address").required(),
  password: Yup.string().min(6, "Must be at least 6 characters"),
  password_confirm: Yup.string().when("password", {
    is: (val) => val && val.length > 0,
    then: Yup.string()
      .oneOf([Yup.ref("password")], "Both passwords need to be the same")
      .required(),
  }),
});

interface MyFormProps {
  initialEmail?: string;
}

const MyForm = withFormik<MyFormProps, FormValues>({
  mapPropsToValues: (props) => ({
    name: "",
    email: props.initialEmail || "",
    password: "",
    password_confirm: "",
  }),
  validationSchema: schema,
  handleSubmit: async (values) => {
    const response = await apiClient.post("/register", values);
    console.log(response.data);
  },
})(InnerForm);

export const RegisterForm = () => {
  return <MyForm />;
};
