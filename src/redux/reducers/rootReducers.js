import { combineReducers } from "redux";
import reducerList from "./listReducers";
import reducerUser from "./userReducer";

const rootReducers = combineReducers({
  reducerList,
  reducerUser,
});

export default rootReducers;
