import React, {useEffect} from "react";
import ReactDOM from 'react-dom';
import {GlobalStyle} from "../styles/GlobalStyle";
import {NavBar} from "./NavBar";
import {ContainerComponent} from "./Container"
import {useStore} from "../businessLogic/StoreContext"
import {observer} from "mobx-react";
import {Pagination} from "./Pagination";
import {LoadingScreen} from "./LoadingScreen";

const App = observer(() => {
    const store = useStore();

    // Fetch trending gifs on initial load
    useEffect(() => {
        if(store.screen === 'Trending') {
            store.fetch();
        }
    }, [store.screen]);

    // Scroll to the top when page changes
    useEffect(() => {
        window.scroll({top: 0, left: 0, behavior: 'smooth'})
    }, [store.currentPage]);

    return (
        <>
            <GlobalStyle/>
            <NavBar/>
            {store.loading ?
                <LoadingScreen error={store.error}/> :
                <ContainerComponent gifs={store.gifs}/>
            }
            <Pagination/>
        </>
    )
});

ReactDOM.render(<App/>, document.getElementById('root'));
