import { configureStore } from '@reduxjs/toolkit';
import products from '../reducer/products';
import api from '../reducer/api';
import cart from '../reducer/cart';

const store = configureStore({
  reducer: {
    products,
    api,
    cart
  },
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
