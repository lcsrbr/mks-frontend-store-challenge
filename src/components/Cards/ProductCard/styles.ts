import styled from 'styled-components';

export const CardContainer = styled.div`
  padding: 0px 12px 0px 12px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: space-around;
  align-items: center;
  background: #ffffff;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.135216);
  border-radius: 8px 8px 0px 0px;
  height: 285px;
  width: 218px;

  img {
    max-height: 138px;
  }

  p {
    font-size: 10px;
    font-weight: 300;
    line-height: 12px;
    letter-spacing: 0px;
    text-align: left;
    color: #2c2c2c;
  }
`;

export const Comprar = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  width: 100%;
  cursor: pointer;
  border: none;
  min-height: 32px;
  background: #0f52ba;
  border-radius: 0px 0px 8px 8px;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 18px;
  color: #ffffff;

  :hover {
    background: #2663c0;
  }
`;

export const TitleAndPrice = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-content: center;
  align-items: center;
  h3 {
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    height: 38px;
    width: 124px;
    display: flex;
    align-items: center;
  }
`;

export const Price = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 26px;
  width: 67px;
  background: #373737;
  border-radius: 5px;

  p {
    font-weight: 999;
    font-size: 15px;
    line-height: 15px;
    color: #ffffff;
    font-style: bold;
  }
`;
