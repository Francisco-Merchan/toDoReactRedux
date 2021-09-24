import {
  USER_LOGIN_ERROR,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_LOADING,
  USER_LOGOUT,
} from "../types/types";

export const userLoginSuccess = () => {
  return {
    type: USER_LOGIN_SUCCESS,
  };
};

export const userLoginError = () => {
  return {
    type: USER_LOGIN_ERROR,
  };
};

export const userLoginLoading = () => {
  return {
    type: USER_LOGIN_LOADING,
  };
};

export const userLogout = () => {
  return {
    type: USER_LOGOUT,
  };
};
