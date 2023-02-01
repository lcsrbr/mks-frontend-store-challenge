import '@testing-library/jest-dom';
import { act } from 'react-dom/test-utils';
import store from '../../redux/store';
import apiMock from '../utils/apiMock.json';
import { api } from '../../redux/reducer/api';
import { checkout } from '../../redux/reducer/products';
import { cart } from '../../redux/reducer/cart';
import IProducts from '../../interfaces/IProducts';

export const reduxClick = (param: HTMLElement) => {
  act(() => {
    param.click();
  });
};

export const reduxActs = () => {
  act(() => {
    store.dispatch(api(apiMock.products as IProducts[]));
    store.dispatch(checkout(apiMock.products as IProducts[]));
    store.dispatch(cart(true as boolean));
  });
};
