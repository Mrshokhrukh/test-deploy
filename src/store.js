// Redux - Complex state menagement to menage the state globally across the platform

import { configureStore } from '@reduxjs/toolkit';
import sidebaReducer from './redux/sidebarSlice.js';
import authReducer from './redux/authSlice.js';

export const store = configureStore({
  reducer: {
    sidebar: sidebaReducer,
    auth: authReducer,
  },
});
