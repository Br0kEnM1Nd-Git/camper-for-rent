import advertsReducer from './adverts/advertsSlice';
import apiReducer from './rootReducers/apiSlice';
import filterReducer from './filter/filterSlice';
import favoritesReducer from './favorites/favoritesSlice';

const rootReducer = {
  adverts: advertsReducer,
  api: apiReducer,
  filter: filterReducer,
  favorites: favoritesReducer,
};

export default rootReducer;
