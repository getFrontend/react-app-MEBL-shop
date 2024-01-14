import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const URL_API_ACCESSKEY = "https://koff-api.vercel.app/api/users/accessKey";

export const fetchAccessToken = createAsyncThunk(
  "auth/fetchAccessToken",
  async () => {
    const response = await fetch(URL_API_ACCESSKEY);

    if (!response.ok) {
      throw new Error("Ошибка получения данных! Токен доступа не получен!");
    }

    const data = await response.json();
    return data.accessToken;
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
  extraReducers(builder) {
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
