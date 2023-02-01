import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { checkout as checkoutRedux } from "../redux/reducer/products";
import { RootState } from "../redux/store";
import closeCart from "../images/closeCartCard.svg";
import IProducts from "../interfaces/IProducts";
import IProductsProps from "../interfaces/IProductsProps";

const Container = styled.div`
  display: flex;
  min-height: 95px !important;
  min-width: 379px !important;
  border-radius: 8px;
  background: #ffffff;
  box-shadow: -2px 2px 10px rgba(0, 0, 0, 0.05);
  border-radius: 8px;
  font-family: 'Montserrat';
  align-items: center;
  justify-content: space-around;
  padding-right: 10px;

  h3 {
    font-style: normal;
    font-weight: 400;
    font-size: 13px;
    line-height: 17px;
    height: 33px;
    width: 113px;
    border-radius: nullpx;
    color: #2c2c2c;
  }

  img {
    height: 60px;
  }
`;

const CloseButton = styled.button`
  height: 18px;
  width: 18px;
  border-radius: 100%;
  border: none;
  background: transparent;
  margin-right: -30px;
  margin-top: -90px;
  img {
    height: 18px;
    width: 18px;
  }
`;
const Qtd = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  div {
    box-sizing: border-box;
    height: 19px;
    width: 50px;
    left: 212px;
    top: 44px;
    border-radius: 4px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background: #ffffff;
    border: 0.3px solid #bfbfbf;
    border-radius: 4px;
  }

  p {
    font-style: normal;
    font-weight: 400;
    font-size: 9px;
    line-height: 6px;
  }
  button,
  input {
    width: 10px;
    height: 100%;
    border: none;
    background: transparent;
    font-style: normal;
    font-weight: 400;
    font-size: 8px;
    line-height: 10px;
    /* identical to box height */

    color: #000000;
  }
`;

function CheckoutCard({ product }: IProductsProps) {
  const dispatch = useDispatch();
  const checkoutProducts = useSelector(
    ({ products }: RootState) => products.checkout
  );


  const removeFromCart = (id: number) => {
    const filter = checkoutProducts.filter((item) => item.id !== id);
    const newCart: IProducts | undefined = checkoutProducts.find((item) => item.id === id);
    if (newCart) {
      const setQuantity = {
        ...newCart,
        quantity: 0,
      };
    dispatch(checkoutRedux([...filter, setQuantity]));
  }
  };

  const changeProduct = (value: string, id: number) => {
    const filter = checkoutProducts.filter((item) => item.id !== id);
    const newCart: IProducts | undefined = checkoutProducts.find((item) => item.id === id);
    if (value === '+' && newCart) {
      const setQuantity = {
        ...newCart,
        quantity: newCart.quantity + 1,
      };
      dispatch(checkoutRedux([...filter, setQuantity]));
    }
    if (value === '-' && newCart) {
      const setQuantity = {
        ...newCart,
        quantity: newCart.quantity - 1,
      };
      dispatch(checkoutRedux([...filter, setQuantity]));
      }
      if (Number(value) && newCart) {
        const setQuantity = {
          ...newCart,
          quantity: Number(value),
        };
        dispatch(checkoutRedux([...filter, setQuantity]));
      }
  };

  const getQuantity = (id: number) => {
    const result = checkoutProducts.find((item: IProducts) => item.id === id);
    return result?.quantity;
  };


  return (
      <Container>
        <img src={product.photo} alt={product.name} />
        <h3>{`${product.brand} ${product.name}`}</h3>
        <Qtd>
          <p>Qtd:</p>
          <div>
            <button 
            type="button"
            onClick={ () => changeProduct('-', product.id) }
            >
              -
            </button>
            <input
            value={ getQuantity(product.id) }
            onChange={ (e) => changeProduct(e.target.value, product.id) }
            />
            <button 
            type="button"
            onClick={ () => changeProduct('+', product.id) }
            >
              +
            </button>
          </div>
        </Qtd>
        <p>
          {`R$${Math.trunc(+product.price)}`}
        </p>
        <CloseButton onClick={() => removeFromCart(product.id)}>
        <img src={closeCart} alt="close button" />
      </CloseButton>
      </Container>
  );
}

export default CheckoutCard;
