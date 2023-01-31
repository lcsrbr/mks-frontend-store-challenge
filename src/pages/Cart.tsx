import React from 'react';
import { useSelector } from 'react-redux';
import CheckoutCard from '../components/CheckoutCard';
import styled from 'styled-components';
import ICheckout from '../interfaces/ICheckout';
import { RootState } from '../redux/store';

function Cart() {
  const checkoutProducts = useSelector(({ products }: RootState) => products.checkout)

  return ( 
      <div> 
        {checkoutProducts && checkoutProducts.map((product: ICheckout, index) => {
          return (
            <CheckoutCard key={index} product={product} />
          )
        })}
      </div>
  );
}

export default Cart;
