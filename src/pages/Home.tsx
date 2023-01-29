import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { api as apiRedux } from '../redux/reducer/api';
import ProductCard from '../components/ProductCard';
import API from '../services/api';
import IProducts from '../interfaces/IProducts';
function Home() {

  const dispatch = useDispatch();
  const apiProducts = useSelector(({ api }) => api.api)

const getApi = async () => {
  const products = await API();
  dispatch(apiRedux(products))
}

  useEffect(() => {
    getApi()    
  })


  return ( 
      <div> 
        {apiProducts && apiProducts.map((product: IProducts, index: number) => {
          return (
            <ProductCard product={product} key={index} />
          )
        })}
      </div>
  );
}

export default Home;
