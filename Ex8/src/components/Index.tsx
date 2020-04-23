import React, {useEffect} from "react";
import ReactDOM from 'react-dom';
import {GlobalStyle} from "../styles/GlobalStyle";
import {NavBar} from "./NavBar";
import {ContainerComponent} from "./Container"
import {Store} from "../businessLogic/Store"
import {observer} from "mobx-react";
import {Pagination} from "./Pagination";
import {LoadingScreen} from "./LoadingScreen";

const store = new Store();

const App = observer(() => {
    const setCurrentPage = (page: number) => {
        store.setCurrentPage(page);
    };

    const setScreen = (screen: string) => {
        store.setScreen(screen);
    };

    const fetchSearch = (input: string) => {
        store.setSearchString(input);
        store.fetchSearch()
    };

    useEffect(() => {
        store.fetchTrending();
    }, []);

    useEffect(() => {
        window.scroll({top: 0, left: 0, behavior: 'smooth'})
    }, [store.currentPage]);

    return (
        <>
            <GlobalStyle/>
            <NavBar screen={store.screen} setScreen={setScreen} setPage={setCurrentPage} fetchSearch={fetchSearch}/>
            {store.loading ?
                <LoadingScreen/> :
                <ContainerComponent gifs={store.gifs}/>
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
