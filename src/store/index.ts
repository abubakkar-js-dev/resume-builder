import { configureStore } from '@reduxjs/toolkit';
import formReducer from './slices/formSlice';
import navigationReducer from './slices/navigationSlice';

export const store = configureStore({
  reducer: {
    form: formReducer,
    navigation: navigationReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        // Ignore File objects in the state
        ignoredActions: ['form/setWorkExperience', 'form/setEducation'],
        ignoredPaths: ['form.workExperience', 'form.education'],
      },
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
