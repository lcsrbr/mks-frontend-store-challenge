import React from 'react'
import styled from 'styled-components'

const FooterDiv = styled.div`
position: absolute;
display: flex;
justify-content: center;
align-items: center;
width: 100%;
height: 34px;
bototm: 0px;
background: #EEEEEE;

p {
font-family: 'Montserrat';
font-style: normal;
font-weight: 400;
font-size: 12px;
line-height: 15px;
color: #000000;
}
`

function Footer() {
  return (
    <FooterDiv><p>MKS sistemas © Todos os direitos reservados</p></FooterDiv>
  )
}

export default Footer