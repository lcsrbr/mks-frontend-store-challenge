import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { api as apiRedux } from '../redux/reducer/api';
import { checkout as checkoutRedux } from '../redux/reducer/products';

import ProductCard from '../components/ProductCard';
import API from '../services/api';
import IProducts from '../interfaces/IProducts';
import { RootState } from '../redux/store';

const Container = styled.div`
max-width: 1100px;
display: flex;
align-items: center;
justify-content: center;
flex-wrap: wrap;
padding: 5rem;
gap: 1.375rem;
`;

const Main = styled.div`
display: flex;
align-items: center;
justify-content: center;
// height: 100%;
`;


function Home() {

  const dispatch = useDispatch();
  const apiProducts = useSelector(({ api }: RootState) => api.api)

const getApi = async () => {
  const products = await API();
  const result = products.map((product) => {
    return {
      ...product,
      quantity: 0,
    }
  })
  dispatch(apiRedux(result))
  dispatch(checkoutRedux(result))

}

  useEffect(() => {
    getApi()    
  }, [])

  return ( 
    <Main>
      <Container> 
        {apiProducts && apiProducts.map((product: IProducts, index: number) => {
          return (
            <ProductCard product={product} key={index} />
          )
        })}
      </Container>
      </Main>
  );
}

export default Home;
