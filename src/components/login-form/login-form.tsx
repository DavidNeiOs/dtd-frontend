import React from "react";
import * as Yup from "yup";
import { withFormik, FormikProps, Form, Field } from "formik";
import { connect } from "react-redux";

import { UserLoginForm } from "../../types/user";
import { loginUser } from "../../actions/authActions";
import { AuthState } from "../../reducers/authReducer";

const InnerForm = (props: FormikProps<UserLoginForm>) => {
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
  loginUser: (userData: UserLoginForm) => void;
}

const MyForm = withFormik<MyFormProps, UserLoginForm>({
  mapPropsToValues: (props) => ({
    email: props.initialEmail || "",
    password: "",
  }),
  validationSchema: schema,
  handleSubmit: (values, bag) => {
    console.log(values);
    bag.props.loginUser(values);
  },
})(InnerForm);

interface Props {
  auth: AuthState;
  errors: any;
  loginUser: (userData: UserLoginForm) => void;
}

export const FormComponent = (props: Props) => {
  return <MyForm loginUser={props.loginUser} />;
};

const mapStateToProps = (state: any) => ({
  auth: state.auth,
  errors: state.errors,
});

export const LoginForm = connect(mapStateToProps, { loginUser })(FormComponent);
