import React from 'react';
import { useSelector } from 'react-redux';
import CheckoutCard from '../components/CheckoutCard';
import IProducts from '../interfaces/IProducts';

function Cart() {
  const checkoutProducts = useSelector(({ products }: IProducts) => products.checkout)

  return ( 
      <div> 
        {checkoutProducts && checkoutProducts.map((product: IProducts, index: number) => {
          return (
            <CheckoutCard key={index} product={product} />
          )
        })}
      </div>
  );
}

export default Cart;
