import {createGlobalStyle} from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    * {
    margin: 0;
    padding: 0;
    color: #dfe8f2;
    font-family: 'Segoe UI', sans-serif;
    font-size: 24px;
    }

    body {
        background-color: #4e5663;
        height: 100vh;
    }
    
    h1 {
        font-size: 30px;
        font-weight: normal;
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
