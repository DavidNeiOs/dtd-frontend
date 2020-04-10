import React from "react";
import * as Yup from "yup";
import { withFormik, FormikProps, Form, Field } from "formik";

interface FormValues {
  email: string;
  password: string;
}

const InnerForm = (props: FormikProps<FormValues>) => {
  const { touched, errors, isSubmitting } = props;
  return (
    <Form className="form">
      <h2>Login</h2>

      <label htmlFor="email">Email address</label>
      <Field type="email" name="email" />
      {touched.email && errors.email && <div>{errors.email}</div>}

      <label htmlFor="password">Password</label>
      <Field type="password" name="password" />
      {touched.password && errors.password && <div>{errors.password}</div>}

      <button type="submit" className="button" disabled={isSubmitting}>
        Submit
      </button>
    </Form>
  );
};

let schema = Yup.object().shape({
  email: Yup.string().email("Make sure it's a valid address").required(),
  password: Yup.string()
    .required("Must enter a password")
    .min(6, "Must be at least 6 characters"),
});

interface MyFormProps {
  initialEmail?: string;
}

const MyForm = withFormik<MyFormProps, FormValues>({
  mapPropsToValues: (props) => ({
    email: props.initialEmail || "",
    password: "",
  }),
  validationSchema: schema,
  handleSubmit: (values) => {
    console.log(values);
  },
})(InnerForm);

export const LogInForm = () => {
  return <MyForm />;
};
