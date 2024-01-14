import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth/auth.slice";
import authCategories from "./categories/categories.slice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    categories: authCategories
  }
});
