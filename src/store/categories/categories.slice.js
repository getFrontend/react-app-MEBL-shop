import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
  loading: false,
  error: null
};

const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {},
  extraReducers: (builder) => { }
});
