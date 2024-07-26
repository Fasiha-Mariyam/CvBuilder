import { combineReducers } from "redux";
import storage from "redux-persist/lib/storage";
import formReducer from "./slices/form";

const rootPersistConfig = {
  key: "root",
  storage,
  keyPrefix: "redux-",
  whitelist: ["form"],
};

const rootReducer = combineReducers({
  form: formReducer,
});

export { rootPersistConfig, rootReducer };
