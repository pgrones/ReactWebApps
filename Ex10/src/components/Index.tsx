import React, {useState} from "react";
import ReactDOM from 'react-dom';
import {Pagination} from "./Pagination";
import {List} from "./List";
import {Store} from "../logic/Store";

const store = new Store();

const App = () => {
    const [page, setPage] = useState(1);

    return (
        <>
            <List items={store.getData(page)}/>
            <Pagination page={page} setPage={setPage} totalPages={10}/>
        </>
    )
};

ReactDOM.render(<App/>, document.getElementById('root'));
