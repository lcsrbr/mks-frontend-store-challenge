import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { checkout as checkoutRedux } from "../../../redux/reducer/products";
import { RootState } from "../../../redux/store";
import closeCart from "../../../images/closeCart.svg";
import IProducts from "../../../interfaces/IProducts";
import IProductsProps from "../../../interfaces/IProductsProps";
import * as S from './styles'

function CheckoutCard({ product }: IProductsProps) {
  const dispatch = useDispatch();
  const checkoutProducts = useSelector(
    ({ products }: RootState) => products.checkout
  );

  const changeProduct = (value: string , id: number) => {
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
      if (value === '0' && newCart) {
        const setQuantity = {
          ...newCart,
          quantity: 0,
        };
        dispatch(checkoutRedux([...filter, setQuantity]));
      }
  };

  const getQuantity = (id: number) => {
    const result = checkoutProducts.find((item: IProducts) => item.id === id);
    return result?.quantity;
  };

  return (
      <S.Container>
        <img src={product.photo} alt={product.name} />
        <h3>{`${product.brand} ${product.name}`}</h3>
        <S.Qtd>
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
        </S.Qtd>
        <p>
          {`R$${Math.trunc(+product.price)}`}
        </p>
        <S.CloseButton onClick={() => changeProduct('0', product.id)}>
        <img src={closeCart} alt="close button" />
      </S.CloseButton>
      </S.Container>
  );
}

export default CheckoutCard;
