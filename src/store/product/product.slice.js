import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { API_URL_PRODUCTS } from "../api";

export const fetchProduct = createAsyncThunk(
  "product/fetchProduct",
  async (productId, thunkAPI) => {
    const state = thunkAPI.getState();
    const token = state.auth.accessToken;

    const response = await fetch(`${API_URL_PRODUCTS}/${productId}`, {
      headers: {
        "Authorization": `Bearer ${token}`
      }
    });

    if (!response.ok) {
      throw new Error("Ошибка получения данных! Не удалось получить информацию про товар!");
    }

    return response.json();
  }
);

const initialState = {
  data: [],
  loading: false,
  error: null
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProduct.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProduct.fulfilled, (state, action) => {
        state.data = action.payload;
        state.loading = false;
        state.error = null;
      })
      .addCase(fetchProduct.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  }
});

export default productSlice.reducer;
