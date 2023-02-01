import styled from "styled-components";

export const CartContainer = styled.div<{open?: boolean}>`
position: fixed;
z-index: 2;
width: 486px;
overflow: hidden;
height: 100%;
right: 0;
top: 0;
background: #0f52ba;
box-shadow: -5px 0px 6px rgba(0, 0, 0, 0.13);
transition: .3s;
transform: ${({open})=> (open ? `translateX(0)`: `translateX(100%)`)};

`;
export const CartList = styled.div`
display: flex;
flex-direction: column;
align-items: center;
overflow-y: auto;
padding-top: 10px;
@media (max-height: 800px) {
  height: 56vh;
}
  height: 70vh ;
gap: 22px;
border: 2px solid transparent; /* <- here */
transition: border 1s;
text-decoration: none;
::-webkit-scrollbar {
  width: 5px;
}
::-webkit-scrollbar-thumb {
  background: black;
  border-radius: 12px;
}

`;
export const CartHeader = styled.div`
display: flex;
width: 100%;
justify-content: space-around;
gap: 8rem;
padding: 15px 0px;
align-items: baseline;
height: 100px;
p {
  width: 180px;
  height: 56px;

  font-style: normal;
  font-weight: 700;
  font-size: 27px;
  line-height: 33px;

  color: #ffffff;
}
button {
  display: flex;
  border-radius: 100%;
  border: none;
  background-color: transparent;
  cursor: pointer;
}
}
`;
export const CartFooter = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
bottom: 0;
width: 100%;
position: absolute;
font-style: normal;
font-weight: 700;
font-size: 28px;
line-height: 15px;
color: #ffffff;

button {
  width: 486px;
  height: 97px;
  background: #000000;
  border: none;
  cursor: pointer;
  font-style: normal;
  font-weight: 700;
  font-size: 28px;
  line-height: 15px;
  color: #ffffff;
}

button: hover {
  background: #000100;
}
`;

export const Total = styled.div` 
display: flex;
flex-direction: row;
justify-content: space-around;
align-items: center;
width: 100%;
height: 97px;
background: #0f52ba;
`