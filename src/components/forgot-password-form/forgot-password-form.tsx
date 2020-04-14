import React from "react";
import * as Yup from "yup";
import { withFormik, FormikProps, Form, Field } from "formik";
import { connect } from "react-redux";

import { forgotPassword } from "../../actions/authActions";
import { RootState } from "../../reducers";

export interface ForgotPasswordValues {
  email: string;
}

const InnerForm = (props: FormikProps<ForgotPasswordValues>) => {
  const { touched, errors, isSubmitting } = props;
  return (
    <Form className="form">
      <h2>Forgot Password</h2>

      <label htmlFor="email">Email address</label>
      <Field type="email" name="email" />
      {touched.email && errors.email && <div>{errors.email}</div>}

      <button type="submit" className="button" disabled={isSubmitting}>
        Submit
      </button>
    </Form>
  );
};

let schema = Yup.object().shape({
  email: Yup.string().email("Make sure it's a valid address").required(),
});

interface MyFormProps {
  onSubmit: (userData: ForgotPasswordValues) => Promise<void>;
}

const MyForm = withFormik<MyFormProps, ForgotPasswordValues>({
  mapPropsToValues: (props) => ({
    email: "",
  }),
  validationSchema: schema,
  handleSubmit: async (values, bag) => {
    await bag.props.onSubmit(values);
    bag.setSubmitting(false);
  },
})(InnerForm);

interface Props {
  forgotPassword: (userData: ForgotPasswordValues) => Promise<void>;
}

export const FormComponent = (props: Props) => {
  return <MyForm onSubmit={props.forgotPassword} />;
};

const mapStateToProps = (state: RootState) => ({
  auth: state.auth,
  errors: state.errors,
});

export const ForgotPasswordForm = connect(mapStateToProps, { forgotPassword })(
  FormComponent
);
