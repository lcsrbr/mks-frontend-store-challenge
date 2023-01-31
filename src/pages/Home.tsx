import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { api as apiRedux } from '../redux/reducer/api';
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
`;


function Home() {

  const dispatch = useDispatch();
  const apiProducts = useSelector(({ api }: RootState) => api.api)

const getApi = async () => {
  const products = await API();
  dispatch(apiRedux(products))
}

  useEffect(() => {
    getApi()    
  })

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
