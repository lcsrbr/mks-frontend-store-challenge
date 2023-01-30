import React from "react";
import { useDispatch, useSelector } from "react-redux";
import IPropCheckout from "../interfaces/IPropCheckout";
import { checkout as checkoutRedux } from "../redux/reducer/products";
import { RootState } from "../redux/store";

function CheckoutCard({product}: IPropCheckout) {
  const dispatch = useDispatch();
  const checkoutProducts = useSelector(
    ({ products }: RootState) => products.checkout
  );

  const removeFromCart = (id: string) => {
    const removed = checkoutProducts.filter(
      (product) => product.cartCode !== id
    );
    dispatch(checkoutRedux(removed));
  };

  return (
    <div>
      <p>
        {product.brand}
      </p>
      <p>
        {product.name}
      </p>
      <p>
        {product.description}
      </p>
      <p>
        {product.price}
      </p>
      <img src={product.photo} alt={product.name} />
      <button onClick={() => removeFromCart(product.cartCode)}>Remover</button>
    </div>
  );
}

export default CheckoutCard;
