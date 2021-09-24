import {
  USER_LOGIN_ERROR,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_LOADING,
  USER_LOGOUT,
} from "../types/types";

const user_initial_state = {
  login: false,
  loading: false,
  message: null,
};

const reducerUser = (state = user_initial_state, action) => {
  switch (action.type) {
    case USER_LOGIN_SUCCESS:
      return {
        ...state,
        login: true,
      };

    case USER_LOGIN_ERROR:
      return {
        ...state,
        message: "Ingrese con el usuario y contraseña correspondiente",
      };

    case USER_LOGIN_LOADING:
      return {
        ...state,
        loading: true,
      };

    case USER_LOGOUT:
      return {
        ...state,
        login: false,
      };

    default:
      return state;
  }
};

export default reducerUser;
