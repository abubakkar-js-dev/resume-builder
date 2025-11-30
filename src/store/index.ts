import { combineReducers, configureStore } from "@reduxjs/toolkit";
import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistReducer,
  persistStore,
  PURGE,
  REGISTER,
  REHYDRATE,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import formReducer from "./slices/formSlice";
import navigationReducer from "./slices/navigationSlice";

const rootReducer = combineReducers({
  form: formReducer,
  navigation: navigationReducer,
});

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["form"], // persist only the form slice
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        // Ignore File objects in the state and redux-persist actions
        ignoredActions: [
          FLUSH,
          REHYDRATE,
          PAUSE,
          PERSIST,
          PURGE,
          REGISTER,
          "form/setWorkExperience",
          "form/setEducation",
        ],
        ignoredPaths: ["form.workExperience", "form.education"],
      },
    }),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
