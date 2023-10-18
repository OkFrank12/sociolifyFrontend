import { configureStore } from "@reduxjs/toolkit";
import {
  FLUSH,
  REGISTER,
  REHYDRATE,
  persistReducer,
  PAUSE,
  PURGE,
  PERSIST,
} from "redux-persist";
import rootReducer from "./globalState";
import storage from "redux-persist/lib/storage";

const config = {
  key: "root",
  version: 1,
  storage,
};

const persistedReducer = persistReducer(config, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, PAUSE, PURGE, PERSIST, REGISTER, REHYDRATE],
      },
    }),
});
