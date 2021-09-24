import axios from "axios";
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

const createSucces = (array) => {
  const list = array.slice(0, 5);
  return {
    type: CREATE_LIST,
    payload: list,
  };
};

const createError = (error) => {
  return {
    type: CREATE_LIST_ERROR,
    payload: error,
  };
};

const createListLoading = () => {
  return {
    type: CREATE_LIST_LOADING,
  };
};

export const createItemList = () => {
  return (dispatch) => {
    dispatch(createListLoading());
    axios
      .get("https://jsonplaceholder.typicode.com/todos")
      .then((response) => {
        dispatch(createSucces(response.data));
      })
      .catch((error) => {
        dispatch(createError("No se pudo cargar la lista"));
      });
  };
};

export const deleteItemList = (id) => {
  return {
    type: DELETE_ITEM_LIST,
    payload: id,
  };
};

export const createNewItem = (item) => {
  return {
    type: CREATE_ITEM_LIST,
    payload: item,
  };
};

export const editItem = (item) => {
  return {
    type: EDIT_ITEM_LIST,
    payload: item,
  };
};

export const changeItemStatus = (item) => {
  item.completed = !item.completed;
  return {
    type: CHANGE_ITEM_STATUS,
    payload: item,
  };
};

export const selectActualElement = (item) => {
  return {
    type: SELECT_ACTUAL_ITEM,
    payload: item,
  };
};

export const cleanActualElement = () => {
  return {
    type: CLEAN_ACTUAL_ITEM,
  };
};
