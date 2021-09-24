import {
  CREATE_LIST,
  CREATE_LIST_ERROR,
  CREATE_LIST_LOADING,
  DELETE_ITEM_LIST,
  CREATE_ITEM_LIST,
  EDIT_ITEM_LIST,
  CHANGE_ITEM_STATUS,
  SELECT_ACTUAL_ITEM,
  CLEAN_ACTUAL_ITEM,
} from "../types/types";

const list_initial_state = {
  list: [],
  message: "",
  loading: false,
  actualElement: null,
};

const reducerList = (state = list_initial_state, action) => {
  switch (action.type) {
    case CREATE_LIST:
      return {
        ...state,
        list: action.payload,
      };

    case CREATE_LIST_ERROR:
      return {
        ...state,
        message: action.payload.error,
      };

    case CREATE_LIST_LOADING:
      return {
        ...state,
        loading: true,
      };

    case DELETE_ITEM_LIST:
      return {
        ...state,
        list: state.list.filter((item) => item.id !== action.payload),
      };

    case CREATE_ITEM_LIST:
      return {
        ...state,
        list: [...state.list, action.payload],
      };

    case SELECT_ACTUAL_ITEM:
      return {
        ...state,
        actualElement: action.payload,
      };

    case CLEAN_ACTUAL_ITEM:
      return {
        ...state,
        actualElement: null,
      };
    case EDIT_ITEM_LIST:
      return {
        ...state,
        list: state.list.map((item) =>
          item.id === action.payload.id ? action.payload : item
        ),
      };
    case CHANGE_ITEM_STATUS:
      return {
        ...state,
        list: state.list.map((item) =>
          item.id === action.payload.id ? action.payload : item
        ),
      };
    default:
      return state;
  }
};

export default reducerList;
