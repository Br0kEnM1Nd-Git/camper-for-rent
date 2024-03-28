import { createSlice } from '@reduxjs/toolkit';

const initialState = { location: '', equipment: [], type: '' };

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    changeFilter(state, { payload }) {
      return payload;
    },
  },
});

const filterReducer = filterSlice.reducer;
export default filterReducer;

const { changeFilter: changeFilterAction } = filterSlice.actions;
export { changeFilterAction };
