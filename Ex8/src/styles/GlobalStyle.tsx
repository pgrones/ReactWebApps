import {createGlobalStyle} from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    * {
    margin: 0;
    padding: 0;
    font-family: 'Segoe UI', sans-serif;
    font-size: 22px;
    }
    
    html {
    overflow-y:scroll;
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
    
     .example-enter {
  opacity: 0.01;
}

.example-enter.example-enter-active {
  opacity: 1;
  transition: opacity 500ms ease-in;
}

.example-leave {
  opacity: 1;
}

.example-leave.example-leave-active {
  opacity: 0.01;
  transition: opacity 300ms ease-in;
}
    
    /*Scrollbar*/
    /* width */
    ::-webkit-scrollbar {
        width: 10px;
    }

    /* Track */
    ::-webkit-scrollbar-track {
        background: #3C434D;
        border-radius: 0 10px 10px 0;
    }

    /* Handle */
    ::-webkit-scrollbar-thumb {
        background: #aaadb5;
        border-radius: 10px;
    }

    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
        background: #3C434D;
    }

    ::-webkit-scrollbar-thumb:active {
        background: #aaadb5;
    }
`;
