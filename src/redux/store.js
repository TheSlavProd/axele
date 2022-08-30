import { configureStore } from '@reduxjs/toolkit';
import { authReducer } from './slices/auth';
import { creationReducer } from './slices/creation';

const store = configureStore({
  reducer: {
    auth: authReducer,
    creation: creationReducer,
  },
});

export default store;
