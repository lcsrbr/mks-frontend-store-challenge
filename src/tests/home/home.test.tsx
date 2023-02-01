import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import store from '../../redux/store';
import withRedux from '../utils/render';
import { reduxClick, reduxActs } from '../utils/acts';
import App from '../../App';

describe('teste do Header', () => {
  beforeEach(() => reduxActs());
  afterEach(() => jest.clearAllMocks());
  it('teste do elemento Header', async () => {
    render(withRedux(<App />, store));

    const buttons = screen.getAllByRole('comprarButton');
    const teste = screen.getByText('Apple Iphone 11 128 GB');
    const qty = screen.getByRole('productsQty');
    const header = screen.getByRole('header');
    const h1HeaderTitle = screen.getByRole('h1HeaderTitle');
    const buttonHeader = screen.getByRole('buttonHeader');
    const mks = screen.getByText('MKS');
    const sistemas = screen.getByText('Sistemas');
    const footP = screen.getByRole('footer');
    const text = screen.getByText(
      'MKS sistemas © Todos os direitos reservados',
    );
    expect(footP).toBeInTheDocument();
    expect(text).toBeInTheDocument();
    expect(header).toBeInTheDocument();
    expect(h1HeaderTitle).toBeInTheDocument();
    expect(buttonHeader).toBeInTheDocument();
    expect(mks).toBeInTheDocument();
    expect(sistemas).toBeInTheDocument();
    buttons.map(button => {
      reduxClick(button);
    });

    expect(qty).toHaveTextContent('8');

    expect(teste).toBeInTheDocument();
  });
});
