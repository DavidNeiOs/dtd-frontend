import React from "react";
import { RouteComponentProps } from "react-router-dom";

import { ResetPasswordForm } from "../../components/reset-password-form";

type Params = {
  token: string;
};

interface Props extends RouteComponentProps<Params> {}

export const ResetPassword = ({ match }: Props) => {
  return (
    <div className="inner">
      <h2>Reset Password</h2>
      <ResetPasswordForm token={match.params.token} />
    </div>
  );
};
