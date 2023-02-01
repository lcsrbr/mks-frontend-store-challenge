import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
* { 
    margin: 0; 
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    font-family: 'Montserrat', sans-serif;
}

main {
    min-height: 100vh;
    position: relative;
    display: flex;
    flex-direction: column;
}
`;
