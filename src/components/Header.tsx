import React from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { RootState } from "../redux/store";
import { cart as cartReducer } from "../redux/reducer/cart";

import cartIcon from "../images/cartIcon.svg";

const HeaderComponent = styled.header`
  display: flex;
  top: 0;
  justify-content: space-between;
  height: 101px;
  align-items: center;
  padding: 0px 65px 0px 65px;
  background: #0f52ba;
`;
const HeaderTitle = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 10px;
  align-items: baseline;
  color: #ffffff;
  font-family: 'Montserrat';
  font-style: normal;

  h1 {
    font-weight: 600;
    font-size: 40px;
    line-height: 19px;
  }
  p {
    font-weight: 300;
    font-size: 20px;
    line-height: 19px;
  }
`;
const CartButton = styled.button`
display: flex;
cursor: pointer;
align-items: center;
justify-content: center;
gap: 10px;
border: none;
width: 90px;
height: 45px;
left: 1262px;
top: 29px;
background: #FFFFFF;
border-radius: 8px;`;

function Header() {
  const checkoutProducts = useSelector(
    ({ products }: RootState) => products.checkout
  );
  const cartRedux = useSelector(
    ({ cart }: RootState) => cart.cart
  );

  const dispatch = useDispatch();


  return (
    <HeaderComponent>
      <HeaderTitle>
        <h1>MKS</h1>
        <p>Sistemas</p>
      </HeaderTitle>
      <CartButton onClick={() => dispatch(cartReducer(!cartRedux))}>
        <img src={cartIcon} alt="cartIcon" />
        <p>
        {/* {checkoutProducts.reduce((products, {quantity}) => products + Number(quantity)), 0)} */}
          {checkoutProducts.reduce((products, product) => products + (1 * product.quantity), 0)}
        </p>
      </CartButton>
    </HeaderComponent>
  );
}

export default Header;
