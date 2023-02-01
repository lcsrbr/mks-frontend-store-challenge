import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import IProducts from '../../../interfaces/IProducts';
import IPropProducts from '../../../interfaces/IProductsProps';
import { checkout as checkoutRedux } from '../../../redux/reducer/products';
import { RootState } from '../../../redux/store';
import bagIcon from '../.././../images/bagIcon.svg';
import * as S from './styles';

function ProductCart({ product }: IPropProducts) {
  const dispatch = useDispatch();
  const checkoutProducts = useSelector(
    ({ products }: RootState) => products.checkout,
  );

  const getCart = (product: IProducts) => {
    const filter = checkoutProducts.filter(item => item.id !== product.id);
    const newCart: IProducts | undefined = checkoutProducts.find(
      item => item.id === product.id,
    );
    if (newCart) {
      const setQuantity = {
        ...newCart,
        quantity: newCart.quantity + 1,
      };
      dispatch(checkoutRedux([...filter, setQuantity]));
    }
  };

  return (
    <div>
      <S.CardContainer>
        <img src={product.photo} alt={product.name} />
        <S.TitleAndPrice>
          <h3>{`${product.brand} ${product.name}`}</h3>
          <S.Price>
            <p>{`R$${Math.trunc(+product.price).toLocaleString('pt-BR')}`}</p>
          </S.Price>
        </S.TitleAndPrice>
        <p>{product.description}</p>
      </S.CardContainer>
      <S.Comprar onClick={() => getCart(product)} role="comprarButton">
        <img src={bagIcon} alt="bag icon" />
        COMPRAR
      </S.Comprar>
    </div>
  );
}

export default ProductCart;
