import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { api as apiRedux } from '../../redux/reducer/api';
import { checkout as checkoutRedux } from '../../redux/reducer/products';
import * as S from './styles';
import ProductCard from '../../components/Cards/ProductCard';
import API from '../../services/api';
import IProducts from '../../interfaces/IProducts';
import { RootState } from '../../redux/store';
import Loading from '../../components/Loading';

function Home() {
  const dispatch = useDispatch();
  const apiProducts = useSelector(({ api }: RootState) => api.api);

  useEffect(() => {
    const getApi = async () => {
      const products = await API();
      const result = products.map(product => {
        return {
          ...product,
          quantity: 0,
        };
      });
      dispatch(apiRedux(result));
      dispatch(checkoutRedux(result));
    };
    getApi();
  }, [dispatch]);

  return (
    <S.Main>
      <S.Container>
        {apiProducts.length < 1 && <Loading />}
        {apiProducts &&
          apiProducts.map((product: IProducts, index: number) => {
            return <ProductCard product={product} key={index} />;
          })}
      </S.Container>
    </S.Main>
  );
}

export default Home;
