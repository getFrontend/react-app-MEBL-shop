import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth/auth.slice";
import categoriesReducer from "./categories/categories.slice";
import productsReducer from "./products/products.slice";
import productReducer from "./product/product.slice";
import favoriteReducer from "./favorites/favorites.slice";
import cartReducer from "./cart/cart.slice";
import orderReducer from "./order/order.slice";
import { apiTokenErrorMiddleware } from "./middleware";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    categories: categoriesReducer,
    products: productsReducer,
    product: productReducer,
    favorite: favoriteReducer,
    cart: cartReducer,
    order: orderReducer
  },
  middleware: (getDefaultMiddleWare) =>
    getDefaultMiddleWare().concat(apiTokenErrorMiddleware)
});
