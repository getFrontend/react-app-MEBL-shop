import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { API_URL_ACCESSKEY } from "../api";

export const fetchAccessToken = createAsyncThunk(
  "auth/fetchAccessToken",
  async () => {
    const response = await fetch(API_URL_ACCESSKEY);

    if (!response.ok) {
      throw new Error("Токен доступа не получен: не удалось авторизоваться на сервере!");
    }

    const data = await response.json();
    return data.accessKey;
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState: {
    accessToken: localStorage.getItem("accessTokenMebl") || null,
    loading: false,
    error: null
  },
  reducers: {
    removeToken(state) {
      state.accessToken = null;
      localStorage.removeItem("accessTokenMebl");
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAccessToken.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchAccessToken.fulfilled, (state, action) => {
        state.accessToken = action.payload;
        localStorage.setItem("accessTokenMebl", action.payload);
        state.loading = false;
        state.error = null;
      })
      .addCase(fetchAccessToken.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  }
});

export const { removeToken } = authSlice.actions;

export default authSlice.reducer;
