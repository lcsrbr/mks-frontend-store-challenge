import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { checkout as checkoutRedux } from '../redux/reducer/products';
import { api as apiRedux } from '../redux/reducer/api';

import API from '../services/api';
function Home() {

  const dispatch = useDispatch();
  const apiProducts = useSelector(({ api }: any) => api.api)
  const checkoutProducts = useSelector(({ products }: any) => products.checkout)
  const [idCounter, setIdCounter] = useState(0)

const getApi = async () => {
  const products = await API();
  dispatch(apiRedux(products))
}

  useEffect(() => {
    getApi()    
  },[])

  const getCart = (product: any) => {
    setIdCounter(idCounter + 1)
    dispatch(checkoutRedux([...checkoutProducts, {...product, idCounter}]))
  }

  return ( 
      <div> 
        {apiProducts && apiProducts.map((product: any, index: number) => {
          return (
            <div key={index}>
              <p>{product.brand}</p>
              <p>{product.name}</p>
              <p>{product.description}</p>
              <p>{product.price}</p>
              <img src={product.img} alt={product.name} />
              <button onClick={() => getCart(product)}>Comprar</button>
            </div>
          )
        })}
      </div>
  );
}

export default Home;
