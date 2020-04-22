import React, {useEffect, useState} from "react";
import ReactDOM from 'react-dom';
import {GlobalStyle} from "../styles/globalStyle";
import {NavBar} from "./navBar";
import {ContainerComponent} from "./Container"
import {Store} from "../businessLogic/Store"
import {observer} from "mobx-react";
import {Pagination} from "./Pagination";

const store = new Store();

const App = observer(() => {
    const [screen, setScreen] = useState('Trending');

    const setCurrentPage = (page: number) => {
        store.setCurrentPage(page);
    };

    useEffect(() => {
        if (screen === 'Trending') {
            store.fetchTrending();
        }
    }, [screen]);

    useEffect(() => {
        window.scroll({top: 0, left: 0, behavior: 'smooth'})
    }, [store.currentPage]);

    return (
        <>
            <GlobalStyle/>
            <NavBar screen={screen} setScreen={setScreen}/>
            {screen === 'Trending' ?
                <ContainerComponent
                    gifs={store.gifs}
                />
                : <div>Search</div>
            }
            <Pagination
                currentPage={store.currentPage}
                totalPages={store.totalPages}
                setCurrentPage={setCurrentPage}
            />
        </>
    )
});

ReactDOM.render(<App/>, document.getElementById('root'));
