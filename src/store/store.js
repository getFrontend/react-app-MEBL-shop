import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth/auth.slice";
import authCategories from "./categories/categories.slice";
import authProducts from "./products/products.slice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    categories: authCategories,
    products: authProducts
  }
});
