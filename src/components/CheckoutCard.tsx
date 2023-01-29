import React from "react";
import { useDispatch, useSelector } from "react-redux";
import IProducts from "../interfaces/IProducts";
import { checkout as checkoutRedux } from "../redux/reducer/products";

function CheckoutCard({product}) {
  const dispatch = useDispatch();
  const checkoutProducts = useSelector(
    ({ products }) => products.checkout
  );

  const removeFromCart = (id: string) => {
    const removed = checkoutProducts.filter(
      (product: IProducts) => product.cartCode !== id
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
      <img src={product.img} alt={product.name} />
      <button onClick={() => removeFromCart(product.cartCode)}>Remover</button>
    </div>
  );
}

export default CheckoutCard;
