import InterceptorHelper from "@/helpers/interceptorHelper";
import {
  ICreateNewPasswordForm,
  IEmailVerifyForm,
  ILoginForm,
  IRegisterForm,
  IResetPasswordForm,
} from "./interfaces";

export const apiLoginUser = async (values: ILoginForm) => {
  return InterceptorHelper.intercept<IResponse<IUserResponse>>("/login", {
    body: JSON.stringify(values),
    method: "POST",
  });
};

export const apiRegisterUser = async (values: IRegisterForm) => {
  return InterceptorHelper.intercept("/sign-up", {
    body: JSON.stringify(values),
    method: "POST",
  });
};

export const apiForgotPassword = async (values: IResetPasswordForm) => {
  return InterceptorHelper.intercept("/forgot-password", {
    body: JSON.stringify(values),
    method: "POST",
  });
};

export const apiResetPassword = async (values: ICreateNewPasswordForm) => {
  return InterceptorHelper.intercept("/reset-password", {
    body: JSON.stringify(values),
    method: "POST",
  });
};

export const apiEmailVerify = async (values: IEmailVerifyForm) => {
  return InterceptorHelper.intercept("/email-verify", {
    body: JSON.stringify(values),
    method: "POST",
  });
};
