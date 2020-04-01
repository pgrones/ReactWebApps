import {createGlobalStyle} from 'styled-components';
import {Theme} from "./theme";

export const GlobalStyle = createGlobalStyle`
    * {
    margin: 0;
    padding: 0;
    color: ${(props: {theme: Theme}) => props.theme.text};
    font-family: 'Open Sans', sans-serif;
    font-size: 24px;
    transition: 0.4s linear;
    }

    body {
        background-color: ${(props: {theme: Theme}) => props.theme.background};
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
