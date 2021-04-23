import { forgotPasswordActionTypes, ResetPasswordActionTypes } from '../actionTypes';

export const fetchForgotPasswords = (forgot) => ({
  type: forgotPasswordActionTypes.SET_EMAIL_FORGOT,
  forgot,
});

export const fetchResetPasswords = (reset) => ({
  type: ResetPasswordActionTypes.SET_PASSWORD_RESET,
  reset,
});
