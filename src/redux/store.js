import { configureStore } from "@reduxjs/toolkit";
import {
  useDispatch as useAppDispatch,
  useSelector as useAppSelector,
} from "react-redux";
import { persistReducer, persistStore } from "redux-persist";

import { rootPersistConfig, rootReducer } from "./rootReducer";
import { resetForm } from "./slices/form";

const store = configureStore({
  reducer: persistReducer(rootPersistConfig, rootReducer),
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
      immutableCheck: false,
    }),
});

const persistor = persistStore(store);

const { dispatch } = store;

export function logOut() {
  return async (dispatch) => {
    await dispatch(resetForm());
    await persistor.purge();
    await localStorage.clear();
  };
}


const useSelector = useAppSelector;

const useDispatch = () => useAppDispatch();

export { dispatch, persistor, store, useDispatch, useSelector };
