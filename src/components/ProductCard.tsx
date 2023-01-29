import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { checkout as checkoutRedux } from '../redux/reducer/products';

function ProductCart({product}) {

  const dispatch = useDispatch();
  const checkoutProducts = useSelector(({ products}) => products.checkout)

  const getCart = (product) => {
    const cartCode = Math.random().toString(16).substr(2)
    dispatch(checkoutRedux([...checkoutProducts, {...product, cartCode}]))
  }

  return ( 
            <div>
              <p>{product.brand}</p>
              <p>{product.name}</p>
              <p>{product.description}</p>
              <p>{product.price}</p>
              <img src={product.img} alt={product.name} />
              <button onClick={() => getCart(product)}>Comprar</button>
            </div>
  );
}

export default ProductCart;
