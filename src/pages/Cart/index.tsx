import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { cart as cartReducer } from "../../redux/reducer/cart";
import CheckoutCard from "../../components/Cards/CheckoutCard";
import { RootState } from "../../redux/store";
import closeCart from "../../images/closeCart.svg";
import IProducts from "../../interfaces/IProducts";
import * as S from './styles'


function Cart() {
  const checkoutProducts = useSelector(
    ({ products }: RootState) => products.checkout
  );
  const cartRedux = useSelector(({ cart }: RootState) => cart.cart);
  const [total, setTotal] = useState("0.00");
  const dispatch = useDispatch();
  
  useEffect(() => {
  const getTotal = () => {
    const result = checkoutProducts.reduce(
      (total, product) => total + (product.quantity * Number(product.price)),
      0
    );
    setTotal(String(result));
  };

    getTotal();
  }, [checkoutProducts]);

  return (
    <S.CartContainer open={cartRedux} >
      <S.CartHeader>
        <p>Carrinho de compras</p>
        <button onClick={() => dispatch(cartReducer(!cartRedux))}>
          <img src={closeCart} alt="close button" />
        </button>
      </S.CartHeader>
      <S.CartList>
        {checkoutProducts &&
          checkoutProducts.filter((item) => item.quantity > 0).map((product: IProducts, index) => {
            return <CheckoutCard key={index} product={product} />;
          })}
      </S.CartList>
      <S.CartFooter>
        <S.Total>
          <p>Total:</p>
          <p>{`R$${total}`}</p>
        </S.Total>
        <button>Finalizar Compra</button>
      </S.CartFooter>
    </S.CartContainer>
  );
}

export default Cart;
