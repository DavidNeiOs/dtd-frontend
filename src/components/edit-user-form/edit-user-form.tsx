import React from "react";
import * as Yup from "yup";
import { useHistory } from "react-router-dom";
import { withFormik, FormikProps, Form, Field } from "formik";
import { connect } from "react-redux";

import { User } from "../../types/user";
import { updateUser } from "../../actions/userActions";
import { AuthState } from "../../reducers/authReducer";
import { RootState } from "../../reducers";

const InnerForm = (props: FormikProps<User>) => {
  const { touched, errors, isSubmitting } = props;
  return (
    <Form className="form">
      <label htmlFor="name">Name</label>
      <Field type="text" name="name" />
      {touched.name && errors.name && <div>{errors.name}</div>}

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
  name: Yup.string()
    .required("Must have a name")
    .min(2, "Must be at least 2 characters"),
  email: Yup.string().email("Make sure it's a valid address").required(),
});

interface MyFormProps {
  user: User;
  history: any;
  updateUser: (userData: User) => void;
}

const MyForm = withFormik<MyFormProps, User>({
  mapPropsToValues: (props) => ({
    email: props.user.email || "",
    name: props.user.name || "",
  }),
  validationSchema: schema,
  handleSubmit: (values, bag) => {
    bag.props.updateUser(values);
  },
})(InnerForm);

interface Props {
  auth: AuthState;
  errors: any;
  user: User;
  updateUser: (userData: User) => void;
}

export const FormComponent = (props: Props) => {
  const history = useHistory();
  return (
    <MyForm user={props.user} updateUser={props.updateUser} history={history} />
  );
};

const mapStateToProps = (state: RootState) => ({
  auth: state.auth,
  user: state.auth.user,
  errors: state.errors,
});

export const EditUserForm = connect(mapStateToProps, { updateUser })(
  FormComponent
);
