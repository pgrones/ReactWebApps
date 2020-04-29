import {createGlobalStyle} from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    * {
    margin: 0;
    padding: 0;
    font-family: 'Segoe UI', sans-serif;
    font-size: 22px;
    }

    body {
        background-color: #4e5663;
        height: 100vh;
    }
    
    text, div, a{
      color: #dfe8f2;
    }
    
    a{
       text-decoration: none;
    }
    
    h1 {
        font-size: 30px;
        background: linear-gradient(90deg, #FE6B8B 30%, #FF8E53 90%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }
    
    input[type=number], input[type=text], input[type=date]{
        color: #dfe8f2;
        font-family: 'Segoe UI', sans-serif;
        font-size: 22px;    
        text-align:center;   
    }
    
    input[type=date]::-webkit-inner-spin-button {
    -webkit-appearance: none;
    display: none;
}
    
`;
