// import persistReducer from 'redux-persist/es/persistReducer';
// import storage from 'redux-persist/lib/storage';
import advertsReducer from './adverts/advertsSlice';
import apiReducer from './rootReducers/apiSlice';

// const persistConfig = {
//   key: 'auth',
//   storage,
//   blacklist: [],
// };

const rootReducer = {
  adverts: advertsReducer,
  api: apiReducer,
};

export default rootReducer;
