import {createGlobalStyle} from 'styled-components';

export const GlobalStyle = createGlobalStyle`
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
    
    text, div{
      color: #dfe8f2;
    }
    
    h1 {
        font-size: 30px;
        background: linear-gradient(90deg, #FE6B8B 30%, #FF8E53 90%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }
    
    h1:hover{
    cursor: pointer;
    }
    
    input[type=number], input[type=text]{
        color: #dfe8f2;
        font-family: 'Segoe UI', sans-serif;
        font-size: 22px;      
    }
    
    input[type=number]{
    text-align:right; 
    }
    
    input[type=number]::-webkit-inner-spin-button {
        -webkit-appearance: none;
    }  
`;
