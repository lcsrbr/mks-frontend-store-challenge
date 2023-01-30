import { configureStore } from '@reduxjs/toolkit';
import products from '../reducer/products';
import api from '../reducer/api';

const store = configureStore({
  reducer: {
    products,
    api,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
