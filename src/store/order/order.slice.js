import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { API_URL } from "../api";

export const fetchOrder = createAsyncThunk(
  "order/fetchOrder",
  async (orderData, { getState, rejectWithValue }) => {
    const state = getState();
    const token = state.auth.accessToken;

    try {
      const response = await fetch(`${API_URL}api/orders`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify(orderData)
      });
      if (!response.ok) {
        if (response.status === 404) {
          console.error("❌ Ошибка 404: Не удалось загрузить данные на сервер.");
          return rejectWithValue({
            status: response.status,
            error: "Ошибка 404: Не удалось загрузить данные на сервер."
          });
        }
        throw new Error("Ошибка! Не удалось отправить заказ.");
      }
      const data = await response.json();
      return data.orderId;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const getOrder = createAsyncThunk(
  "order/getOrder",
  async (orderId, { getState, rejectWithValue }) => {
    const state = getState();
    const token = state.auth.accessToken;

    try {
      const response = await fetch(`${API_URL}api/orders/${orderId}`, {
        headers: {
          "Authorization": `Bearer ${token}`
        },
      });
      if (!response.ok) {
        throw new Error("Ошибка! Не удалось загрузить информацию про заказ.");
      }
      return await response.json();
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const initialState = {
  orderData: null,
  orderId: null,
  success: false,
  loadingFetch: false,
  loadingGetOrder: false,
  error: null
};

const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    resetSuccess(state) {
      state.success = false;
      state.loadingFetch = false;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchOrder.pending, (state) => {
        state.loadingFetch = true;
        state.success = false;
        state.error = null;
      })
      .addCase(fetchOrder.fulfilled, (state, action) => {
        state.loadingFetch = false;
        state.success = true;
        state.error = false;
        state.orderId = action.payload;
      })
      .addCase(fetchOrder.rejected, (state, action) => {
        state.loadingFetch = false;
        state.error = action.payload;
        state.success = false;
      })
      .addCase(getOrder.pending, (state) => {
        state.loadingGetOrder = true;
        state.error = null;
      })
      .addCase(getOrder.fulfilled, (state, action) => {
        state.loadingGetOrder = false;
        state.orderData = action.payload;
      })
      .addCase(getOrder.rejected, (state, action) => {
        state.loadingGetOrder = false;
        state.error = action.payload;
      });
  }
});

export const { resetSuccess } = orderSlice.actions;

export default orderSlice.reducer;
