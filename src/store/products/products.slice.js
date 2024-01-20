import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { API_URL_PRODUCTS } from "../api";

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async (params, thunkAPI) => {
    const state = thunkAPI.getState();
    const token = state.auth.accessToken;
    const LIMIT_DEFAULT = 12;

    const queryParams = new URLSearchParams();
    if (params) {
      for (const key in params) {
        if (Object.hasOwnProperty.call(params, key) && params[key]) {
          queryParams.append(key, params[key]);
        }
      }
    }

    const response = await fetch(`${API_URL_PRODUCTS}?${queryParams}&limit=${LIMIT_DEFAULT}`, {
      headers: {
        "Authorization": `Bearer ${token}`
      }
    });

    if (!response.ok) {
      if (response.status === 401) {
        return thunkAPI.rejectWithValue({
          status: response.status,
          error: "Ошибка 401: Данные про список товаров не получены!"
        });
      }
      throw new Error("Ошибка получения данных! Не удалось получить список товаров!");
    }

    return response.json();
  }
);

const initialState = {
  data: [],
  loading: false,
  error: null,
  statusCode: null,
  pagination: null
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.statusCode = null;
        state.pagination = null;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        if (Array.isArray(action.payload)) {
          state.data = action.payload;
          state.pagination = null;
        } else {
          state.data = action.payload.data;
          state.pagination = action.payload.pagination;
        }
        state.loading = false;
        state.error = null;
        state.statusCode = null;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
        state.statusCode = action.payload?.status;
        state.pagination = null;
      });
  }
});

export default productsSlice.reducer;
