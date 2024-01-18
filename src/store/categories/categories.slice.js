import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { API_URL_CATEGORIES } from "../api";

export const fetchCategories = createAsyncThunk(
  "categories/fetchCategories",
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const token = state.auth.accessToken;

    const response = await fetch(API_URL_CATEGORIES, {
      headers: {
        "Authorization": `Bearer ${token}`
      }
    });

    if (!response.ok) {
      if (response.status === 401) {
        return thunkAPI.rejectWithValue({
          status: response.status,
          error: "Ошибка 401: Данные про категории товаров не получены!"
        });
      }
      throw new Error("Ошибка получения данных! Не удалось получить категории товаров!");
    }

    return response.json();
  }
);

const initialState = {
  data: [],
  loading: false,
  error: null
};

const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCategories.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.data = action.payload;
        state.loading = false;
        state.error = null;
      })
      .addCase(fetchCategories.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  }
});

export default categoriesSlice.reducer;
