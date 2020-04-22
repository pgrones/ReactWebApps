import React from 'react';
import ReactDOM from 'react-dom';
import {GlobalStyle} from "../styles/globalStyle";

const App = () => {
    return (
        <>
            <GlobalStyle/>
        </>
    )
};

ReactDOM.render(<App/>, document.getElementById('root'));
