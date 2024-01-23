import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  favoriteList: JSON.parse(localStorage.getItem("favoriteMEBL") || "[]")
  // Тоже самое, что и строка выше
  // favoriteList: localStorage.getItem("favoriteMEBL") ?
  //   JSON.parse(localStorage.getItem("favoriteMEBL")) :
  //   []
};

const favoriteSlice = createSlice(
  {
    name: "favorite",
    initialState,
    reducers: {
      addFavorite: (state, action) => {
        state.favoriteList.push(action.payload);
        localStorage.setItem("favoriteMEBL", JSON.stringify(state.favoriteList));
      },
      removeFavorite: (state, action) => {
        state.favoriteList = state.favoriteList.filter((id) => id !== action.payload);
        localStorage.setItem("favoriteMEBL", JSON.stringify(state.favoriteList));
      }
    }
  }
);

export const { addFavorite, removeFavorite } = favoriteSlice.actions;

export default favoriteSlice.reducer;
