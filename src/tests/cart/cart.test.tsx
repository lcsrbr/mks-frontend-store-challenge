import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { act } from 'react-dom/test-utils';
import App from '../../App';
import store from '../../redux/store';
import withRedux from '../utils/render';
import { reduxClick, reduxActs } from '../utils/acts';

describe('teste do Header', () => {
  beforeEach(() => reduxActs());
  afterEach(() => jest.clearAllMocks());
  it('teste do elemento Header', async () => {
    render(withRedux(<App />, store));

    const button = screen.getAllByRole('comprarButton');
    const qty = screen.getByRole('productsQty');
    const totalCart = screen.getByRole('totalCart');

    reduxClick(button[0]);

    expect(qty).toHaveTextContent('1');

    reduxClick(qty);

    expect(totalCart).toHaveTextContent('R$600');

    const addButton = screen.getByRole('addButton');

    reduxClick(addButton);

    expect(totalCart).toHaveTextContent('R$1.200');

    const rmButton = screen.getByRole('rmButton');

    reduxClick(rmButton);

    expect(totalCart).toHaveTextContent('R$600');

    const inputProduct = screen.getByRole('inputProduct');

    act(() => {
      fireEvent.change(inputProduct, { target: { value: '10' } });
    });

    expect(totalCart).toHaveTextContent('R$6.000');

    const removeItem = screen.getByRole('removeItem');

    reduxClick(removeItem);

    expect(totalCart).toHaveTextContent('R$0');

    const closeCart = screen.getByRole('closeCart');

    reduxClick(closeCart);
  });
});
