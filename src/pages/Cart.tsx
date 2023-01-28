import React, {useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { checkout as checkoutRedux } from '../redux/reducer/products';

function Cart() {
  const dispatch = useDispatch();
  const checkoutProducts = useSelector(({ products }: any) => products.checkout)

  const removeFromCart = (id: number) => {
    const removed = checkoutProducts.filter((product: any) => product.idCounter !== id)
    dispatch(checkoutRedux(removed))
  }

  return ( 
      <div> 
        {checkoutProducts && checkoutProducts.map((product: any, index: number) => {
          return (
            <div key={index}>
              <p>{product.brand}</p>
              <p>{product.name}</p>
              <p>{product.description}</p>
              <p>{product.price}</p>
              <img src={product.img} alt={product.name} />
              <button onClick={() => removeFromCart(product.idCounter)}>Remover</button>
            </div>
          )
        })}
      </div>
  );
}

export default Cart;
