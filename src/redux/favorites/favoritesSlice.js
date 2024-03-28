import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    addToFavorites(state, { payload }) {
      state.push(payload);
    },
  },
});

const favoritesReducer = favoritesSlice.reducer;
export default favoritesReducer;

const { addToFavorites: addToFavoritesAction } = favoritesSlice.actions;
export { addToFavoritesAction };
