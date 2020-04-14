import React from "react";
import * as Yup from "yup";
import { useHistory } from "react-router-dom";
import { withFormik, FormikProps, Form, Field } from "formik";
import { connect } from "react-redux";

import { resetPassword } from "../../actions/authActions";
import { AuthState } from "../../reducers/authReducer";

export interface ResetPasswordValues {
  password: string;
  password_confirm: string;
}

const InnerForm = (props: FormikProps<ResetPasswordValues>) => {
  const { touched, errors, isSubmitting } = props;
  return (
    <Form className="form">
      <h2>Login</h2>

      <label htmlFor="password">New Password</label>
      <Field type="password" name="password" />
      {touched.password && errors.password && <div>{errors.password}</div>}

      <label htmlFor="password-confirm">Confirm Password</label>
      <Field type="password" name="password_confirm" />
      {touched.password_confirm && errors.password_confirm && (
        <div>{errors.password_confirm}</div>
      )}

      <button type="submit" className="button" disabled={isSubmitting}>
        Submit
      </button>
    </Form>
  );
};

let schema = Yup.object().shape({
  password: Yup.string()
    .required("Must enter a password")
    .min(6, "Must be at least 6 characters"),
  password_confirm: Yup.string().when("password", {
    is: (val) => val && val.length > 0,
    then: Yup.string()
      .oneOf([Yup.ref("password")], "Both passwords need to be the same")
      .required(),
  }),
});

interface MyFormProps {
  onSubmit: (
    userData: ResetPasswordValues,
    token: string,
    history: any
  ) => void;
  history: any;
  token: string;
}

const MyForm = withFormik<MyFormProps, ResetPasswordValues>({
  mapPropsToValues: (props) => ({
    password: "",
    password_confirm: "",
  }),
  validationSchema: schema,
  handleSubmit: (values, bag) => {
    bag.props.onSubmit(values, bag.props.token, bag.props.history);
  },
})(InnerForm);

interface Props {
  auth: AuthState;
  errors: any;
  token: string;
  resetPassword: (
    userData: ResetPasswordValues,
    token: string,
    history: any
  ) => void;
}

export const FormComponent = (props: Props) => {
  const history = useHistory();
  return (
    <MyForm
      onSubmit={props.resetPassword}
      token={props.token}
      history={history}
    />
  );
};

const mapStateToProps = (state: any) => ({
  auth: state.auth,
  errors: state.errors,
});

export const ResetPasswordForm = connect(mapStateToProps, { resetPassword })(
  FormComponent
);
