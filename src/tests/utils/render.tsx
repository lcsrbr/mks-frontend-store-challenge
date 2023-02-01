import React from 'react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';

export default function withRedux(component: any, store: any) {
  return <Provider store={store}>{component}</Provider>;
}
