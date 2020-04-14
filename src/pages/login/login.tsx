import React from "react";

import { LoginForm } from "../../components/login-form";
import { ForgotPasswordForm } from "../../components/forgot-password-form";

export const LogIn = () => {
  return (
    <div className="inner">
      <LoginForm />
      <ForgotPasswordForm />
    </div>
  );
};
