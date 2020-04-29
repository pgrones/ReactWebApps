import React from "react";
import ReactDOM from 'react-dom';
import {NavBar} from "./NavBar";
import {GlobalStyle} from "../styles/GlobalStyle";

const App = () => {
    return (
        <>
            <GlobalStyle/>
            <NavBar/>
        </>
    )
};

ReactDOM.render(<App/>, document.getElementById('root'));
