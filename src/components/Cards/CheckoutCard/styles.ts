import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  min-height: 95px !important;
  min-width: 379px !important;
  border-radius: 8px;
  background: #ffffff;
  box-shadow: -2px 2px 10px rgba(0, 0, 0, 0.05);
  border-radius: 8px;
  align-items: center;
  justify-content: space-around;
  padding-right: 10px;

  h3 {
    font-style: normal;
    font-weight: 400;
    font-size: 13px;
    line-height: 17px;
    height: 33px;
    width: 113px;
    border-radius: nullpx;
    color: #2c2c2c;
  }

  p {
    height: 17px;
    width: 62px;

    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 17px;
  }

  img {
    height: 60px;
  }
`;

export const CloseButton = styled.button`
  cursor: pointer;
  height: 18px;
  width: 18px;
  border-radius: 100%;
  border: none;
  background: transparent;
  margin-right: -30px;
  margin-top: -90px;
  img {
    height: 18px;
    width: 18px;
  }
`;
export const Qtd = styled.div`
  display: flex;
  flex-direction: column;
  div {
    box-sizing: border-box;
    height: 25px;
    width: 60px;
    border-radius: 4px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background: #ffffff;
    border: 0.3px solid #bfbfbf;
    border-radius: 4px;
  }

  p {
    font-style: normal;
    font-weight: 400;
    font-size: 9px;
    line-height: 6px;
  }
  button {
    cursor: pointer;
    font-size: 15px;
    font-weight: 700;
    border: none;
    width: 10px;
    height: 100%;
  }
  input {
    font-size: 10px;
    font-weight: 500;
    text-align: center;
    border: none;
    border-right: 0.3px solid #bfbfbf;
    border-left: 0.3px solid #bfbfbf;
    width: 20px;
    height: 60%;
  }
  button,
  input {
    background: transparent;
    font-style: normal;
    line-height: 10px;
    /* identical to box height */

    color: #000000;
  }
`;
