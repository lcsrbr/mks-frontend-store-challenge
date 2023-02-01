import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { cart as cartReducer } from "../redux/reducer/cart";
import CheckoutCard from "../components/CheckoutCard";
import styled from "styled-components";
import { RootState } from "../redux/store";
import closeCart from "../images/closeCart.svg";
import IProducts from "../interfaces/IProducts";

let teste = false;

const CartContainer = styled.div<{open?: boolean}>`
  position: fixed;
  z-index: 2;
  width: 486px;
  overflow: hidden;
  height: 100%;
  right: 0;
  top: 0;
  background: #0f52ba;
  box-shadow: -5px 0px 6px rgba(0, 0, 0, 0.13);
  transition: .3s;
  transform: ${({open})=> (open ? `translateX(0)`: `translateX(100%)`)};

`;
const CartList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: auto;
  padding-top: 10px;
  height: 55vh;
  gap: 22px;
  ::-webkit-scrollbar {
    width: 5px;
  }
  ::-webkit-scrollbar-thumb {
    background: black;
    border-radius: 12px;
  }
  
`;
const CartHeader = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
  gap: 8rem;
  padding: 15px 0px;
  align-items: baseline;
  height: 100px;
  p {
    width: 180px;
    height: 56px;

    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 700;
    font-size: 27px;
    line-height: 33px;

    color: #ffffff;
  }
  button {
    display: flex;
    border-radius: 100%;
    border: none;
    background-color: transparent;
    cursor: pointer;
  }
`;
const CartFooter = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  bottom: 0;
  width: 100%;
  position: absolute;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 700;
  font-size: 28px;
  line-height: 15px;
  color: #ffffff;

  button {
    width: 486px;
    height: 97px;
    background: #000000;
    border: none;
    cursor: pointer;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 700;
    font-size: 28px;
    line-height: 15px;
    color: #ffffff;
  }
`;

const Total = styled.div` 
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 56px;
`

function Cart() {
  const checkoutProducts = useSelector(
    ({ products }: RootState) => products.checkout
  );
  const cartRedux = useSelector(({ cart }: RootState) => cart.cart);
  const [total, setTotal] = useState("0.00");
teste = cartRedux
  const dispatch = useDispatch();

  const getTotal = () => {
    const result = checkoutProducts.reduce(
      (total, product) => total + (product.quantity * Number(product.price)),
      0
    );
    setTotal(String(result));
  };

  useEffect(() => {
    getTotal();
  });

  return (
    <CartContainer open={cartRedux} >
      <CartHeader>
        <p>Carrinho de compras</p>
        <button onClick={() => dispatch(cartReducer(!cartRedux))}>
          <img src={closeCart} alt="close button" />
        </button>
      </CartHeader>
      <CartList>
        {checkoutProducts &&
          checkoutProducts.filter((item) => item.quantity > 0).map((product: IProducts, index) => {
            return <CheckoutCard key={index} product={product} />;
          })}
      </CartList>
      <CartFooter>
        <Total>
          <p>Total:</p>
          <p>{`R$${total}`}</p>
        </Total>
        <button>Finalizar Compra</button>
      </CartFooter>
    </CartContainer>
  );
}

export default Cart;
