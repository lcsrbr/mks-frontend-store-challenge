import { configureStore } from '@reduxjs/toolkit';
import products from '../reducer/products';
import api from '../reducer/api';

const store = configureStore({
  reducer: {
    products,
    api,
  },
});

export default store;
