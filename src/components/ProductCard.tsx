import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import IProducts from "../interfaces/IProducts";
import IPropProducts from "../interfaces/IPropProducts";
import { checkout as checkoutRedux } from "../redux/reducer/products";
import { RootState } from "../redux/store";
import bagIcon from "../images/bagIcon.svg"

const CardContainer = styled.div`
  padding: 0px 12px 0px 12px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  // justify-content: space-between;
  align-items: center;
  background: #ffffff;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.135216);
  border-radius: 8px 8px 0px 0px;
  height: 285px;
  width: 218px;
  
  img {
    max-height: 138px;
  }

  p {
    font-family: Montserrat;
    font-size: 10px;
    font-weight: 300;
    line-height: 12px;
    letter-spacing: 0px;
    text-align: left;
    color: #2C2C2C;
  }
`;

const Comprar = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  width: 100%;
  cursor: pointer;
  border: none;
  min-height: 32px;  
  background: #0F52BA;
  border-radius: 0px 0px 8px 8px;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 18px;
  color: #FFFFFF;
`

const TitleAndPrice = styled.div`
display: flex;
justify-content: space-between;
width: 100%;
align-items: baseline;
h3 {
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  // height: 38px;
  width: 124px;
}
`


const Price = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 26px;
  width: 64px;
  background: #373737;
  border-radius: 5px;
  padding: 4px 6px;

  p {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 900;
    font-size: 15px;
    line-height: 15px;
    font-family: Montserrat;
    color: #ffffff;
  }
`

function ProductCart({ product }: IPropProducts) {
  const dispatch = useDispatch();
  const checkoutProducts = useSelector(
    ({ products }: RootState) => products.checkout
  );

  const getCart = (product: IProducts) => {
    const cartCode = Math.random().toString(16).substr(2);
    dispatch(checkoutRedux([...checkoutProducts, { ...product, cartCode }]));
  };

  return (
    <div>
    <CardContainer>
      <img src={product.photo} alt={product.name} />
      <TitleAndPrice>
        <h3>{`${product.brand} ${product.name}`}</h3>
        <Price>
          <p>
            {`R$${Math.trunc(+product.price)}`}
          </p>
          </Price>
      </TitleAndPrice>
      <p>
        {product.description}
      </p>
      </CardContainer>
      <Comprar onClick={() => getCart(product)}>
      <img src = {bagIcon} alt="bag icon" />
        COMPRAR
        </Comprar>
    </div>
  );
}

export default ProductCart;
