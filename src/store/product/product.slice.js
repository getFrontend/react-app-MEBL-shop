import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { API_URL_PRODUCTS } from "../api";

export const fetchProduct = createAsyncThunk(
  "product/fetchProduct",
  async (id, thunkAPI) => {
    const state = thunkAPI.getState();
    const token = state.auth.accessToken;

    const response = await fetch(`${API_URL_PRODUCTS}/${id}`, {
      headers: {
        "Authorization": `Bearer ${token}`
      }
    });

    if (!response.ok) {
      if (response.status === 401) {
        console.log("❌ Ошибка 401");
        return thunkAPI.rejectWithValue({
          status: response.status,
          error: "Ошибка 401: Информация про товар не получена."
        });
      }
      if (response.status === 404) {
        console.error("❌ Ошибка 404: Такого товара на сервере нет!");
        return thunkAPI.rejectWithValue({
          status: response.status,
          error: "Ошибка 404: товар не найдён"
        });
      }
      throw new Error("Ошибка получения данных! Не удалось получить информацию про товар!");
    }

    return response.json();
  }
);

const initialState = {
  data: {},
  loading: false,
  error: null,
  statusCode: null
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
        state.statusCode = null;
      })
      .addCase(fetchProduct.fulfilled, (state, action) => {
        state.data = action.payload;
        state.loading = false;
        state.error = null;
        state.statusCode = null;
      })
      .addCase(fetchProduct.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
        state.statusCode = action.payload.status;
      });
  }
});

export default productSlice.reducer;
