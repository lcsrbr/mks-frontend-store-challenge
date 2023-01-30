import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import IProducts from '../interfaces/IProducts';
import IPropProducts from '../interfaces/IPropProducts';
import { checkout as checkoutRedux } from '../redux/reducer/products';
import { RootState } from '../redux/store';

function ProductCart({product}: IPropProducts) {

  const dispatch = useDispatch();
  const checkoutProducts = useSelector(({ products}: RootState) => products.checkout)

  const getCart = (product: IProducts) => {
    const cartCode = Math.random().toString(16).substr(2)
    dispatch(checkoutRedux([...checkoutProducts, {...product, cartCode}]))
  }

  return ( 
            <div>
              <p>{product.brand}</p>
              <p>{product.name}</p>
              <p>{product.description}</p>
              <p>{product.price}</p>
              <img src={product.photo} alt={product.name} />
              <button onClick={() => getCart(product)}>Comprar</button>
            </div>
  );
}

export default ProductCart;
