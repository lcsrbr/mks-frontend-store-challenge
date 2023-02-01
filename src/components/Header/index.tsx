import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../redux/store";
import { cart as cartReducer } from "../../redux/reducer/cart";
import cartIcon from "../../images/cartIcon.svg";
import * as S from './styles'

function Header() {
  const checkoutProducts = useSelector(
    ({ products }: RootState) => products.checkout
  );
  const cartRedux = useSelector(
    ({ cart }: RootState) => cart.cart
  );
  const dispatch = useDispatch();

  return (
    <S.HeaderComponent>
      <S.HeaderTitle>
        <h1>MKS</h1>
        <p>Sistemas</p>
      </S.HeaderTitle>
      <S.CartButton onClick={() => dispatch(cartReducer(!cartRedux))}>
        <img src={cartIcon} alt="cartIcon" />
        <p>
          {checkoutProducts.reduce((products, product) => products + (1 * product.quantity), 0)}
        </p>
      </S.CartButton>
    </S.HeaderComponent>
  );
}

export default Header;
