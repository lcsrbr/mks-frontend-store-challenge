import styled from 'styled-components';

export const HeaderComponent = styled.header`
  display: flex;
  top: 0;
  justify-content: space-between;
  height: 101px;
  align-items: center;
  padding: 0px 65px 0px 65px;
  background: #0f52ba;
`;
export const HeaderTitle = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 10px;
  align-items: baseline;
  color: #ffffff;
  font-style: normal;

  h1 {
    font-weight: 600;
    font-size: 40px;
    line-height: 19px;
  }
  p {
    font-weight: 100;
    font-size: 20px;
    line-height: 19px;
    font-weight: lightweight;
  }
`;
export const CartButton = styled.button`
  display: flex;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  gap: 10px;
  border: none;
  width: 90px;
  height: 45px;
  left: 1262px;
  top: 29px;
  background: #ffffff;
  border-radius: 8px;
  font-weight: 900;

  :hover {
    background: #dcdcdc;
  }
`;
